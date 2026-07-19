// Google Analytics(GA4)設定
// 測定ID(例: "G-XXXXXXXXXX")を下に入れて再デプロイすると、全ページで計測が始まります
const GA_ID = "G-WW52LBK02R";
if (GA_ID) {
  const s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", GA_ID);

  // --- アフィリエイトリンクのクリック計測 ---
  // 商品リンク(Amazon / 楽天など)のクリックを GA4 イベントとして送信します。
  document.addEventListener("click", function (e) {
    const a = e.target.closest("a[href]");
    if (!a) return;
    const href = a.getAttribute("href") || "";
    let host = "";
    try { host = new URL(href, location.href).hostname; } catch (err) { return; }

    // アフィリエイト/外部ショップ判定(rel="sponsored" またはショップのドメイン)
    const rel = (a.getAttribute("rel") || "").toLowerCase();
    const isAmazon = /(^|\.)amazon\.co\.jp$/.test(host) || /(^|\.)amzn\.to$/.test(host);
    const isRakuten = /rakuten\.co\.jp$/.test(host);
    const isSponsored = rel.indexOf("sponsored") !== -1;
    if (!isAmazon && !isRakuten && !isSponsored) return;

    const shop = isAmazon ? "amazon" : (isRakuten ? "rakuten" : "other");

    // 商品名の推定:リンクを含むカード/リスト内の見出しを拾う
    let itemName = "";
    const box = a.closest("li, article, .card, .rank, .item, .product, .box, .rank-item, div");
    if (box) {
      const h = box.querySelector("h1, h2, h3, h4, strong, b");
      if (h) itemName = (h.textContent || "").trim().slice(0, 100);
    }
    const linkText = (a.textContent || "").trim().slice(0, 60);

    gtag("event", "affiliate_click", {
      shop: shop,
      item_name: itemName,
      link_text: linkText,
      link_domain: host,
      link_url: href.slice(0, 200),
      page_path: location.pathname,
      page_title: document.title,
      transport_type: "beacon"
    });
  }, true);
}
