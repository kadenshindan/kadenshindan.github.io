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
  // 商品リンク(Amazon / 楽天など)のクリックを GA4 イベント "affiliate_click" として送信します。
  // GA4 の「イベント」で shop(ショップ) / item_name(メーカー・型番) 等が確認できます。
  document.addEventListener("click", function (e) {
    const a = e.target.closest("a[href]");
    if (!a) return;
    const href = a.getAttribute("href") || "";
    let host = "";
    try { host = new URL(href, location.href).hostname; } catch (err) { return; }

    const rel = (a.getAttribute("rel") || "").toLowerCase();
    const isAmazon = /(^|\.)amazon\.co\.jp$/.test(host) || /(^|\.)amzn\.to$/.test(host);
    const isRakuten = /rakuten\.co\.jp$/.test(host);
    const isSponsored = rel.indexOf("sponsored") !== -1;
    if (!isAmazon && !isRakuten && !isSponsored) return;

    const shop = isAmazon ? "amazon" : (isRakuten ? "rakuten" : "other");

    // 商品名の取得:商品カード(.item)内の .mk(メーカー・型番)/ .nm(商品名)を優先
    let itemName = "", itemDesc = "";
    const card = a.closest(".item");
    if (card) {
      const mk = card.querySelector(".mk");
      const nm = card.querySelector(".nm");
      if (mk) itemName = (mk.textContent || "").trim().slice(0, 100);
      if (nm) itemDesc = (nm.textContent || "").trim().slice(0, 100);
    }
    if (!itemName) {
      const box = a.closest("li, article, section, .card, div");
      const h = box && box.querySelector("h1, h2, h3, h4, strong, b");
      if (h) itemName = (h.textContent || "").trim().slice(0, 100);
    }
    const linkText = (a.textContent || "").trim().slice(0, 60);

    gtag("event", "affiliate_click", {
      shop: shop,
      item_name: itemName,
      item_desc: itemDesc,
      link_text: linkText,
      link_domain: host,
      link_url: href.slice(0, 200),
      page_path: location.pathname,
      page_title: document.title,
      transport_type: "beacon"
    });
  }, true);
}
