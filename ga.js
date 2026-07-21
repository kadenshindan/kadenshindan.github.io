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

  // ===== アフィリエイトクリックの計測 =====
  // 「楽天で見る」「Amazonで見る」「見る」などのクリックで、
  // どのショップ・どの商品が押されたかを affiliate_click イベントとして送信する。
  // GA4カスタムディメンション: shop / product_name に対応。
  // 全ページ共通で、リンク周辺のマークアップから商品名を自動取得する。
  function clean(t) {
    return (t || "").replace(/\s*／\s*/g, " ").replace(/\s+/g, " ").trim();
  }
  function productNameFor(a) {
    // 記事ページの商品カード（.item 内の .mk = メーカー ／ 型番）
    const item = a.closest(".item");
    if (item) {
      const mk = item.querySelector(".mk");
      if (mk) return clean(mk.textContent);
    }
    // 診断結果の2位以下（.rank-item 内の .rank-maker）
    const ri = a.closest(".rank-item");
    if (ri) {
      const mk = ri.querySelector(".rank-maker");
      if (mk) return clean(mk.textContent);
    }
    // 診断結果の1位（勝者ブロックの #winMaker）
    if (a.id === "winAmazon" || a.id === "winRakuten") {
      const mk = document.getElementById("winMaker");
      if (mk) return clean(mk.textContent);
    }
    return "";
  }
  document.addEventListener("click", function (e) {
    const a = e.target.closest && e.target.closest("a");
    if (!a) return;
    const href = a.getAttribute("href") || a.href || "";
    const cls = a.className || "";
    let shop = "";
    if (/amazon/i.test(href) || /\bamazon\b/.test(cls) || a.id === "winAmazon" || /\bam\b/.test(cls)) {
      shop = "amazon";
    } else if (/rakuten/i.test(href) || /\b(rakuten|rk2|rank-cta)\b/.test(cls) || a.id === "winRakuten") {
      shop = "rakuten";
    } else {
      return; // アフィリエイトリンク以外は無視
    }
    const product_name = productNameFor(a) || "(不明)";
    try {
      window.gtag("event", "affiliate_click", {
        shop: shop,
        product_name: product_name,
        page_path: location.pathname,
        link_url: href
      });
    } catch (err) {}
  }, true);
}
