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
    // 選び方・電気代ガイドの商品カード（.product 内の .maker / .name）
    const product = a.closest(".product");
    if (product) {
      const maker = product.querySelector(".maker");
      const name = product.querySelector(".name");
      const label = [maker && maker.textContent, name && name.textContent].filter(Boolean).join(" ");
      if (label) return clean(label);
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

  // 外部の商品画像が移転・削除された場合も、記事のレイアウトを崩さない。
  document.addEventListener("error", function (e) {
    const img = e.target;
    if (!img || img.tagName !== "IMG" || img.dataset.imageFallback) return;
    img.dataset.imageFallback = "1";
    const fallback = document.createElement("div");
    fallback.textContent = "商品画像はリンク先でご確認ください";
    fallback.setAttribute("role", "img");
    fallback.setAttribute("aria-label", img.alt || "商品画像");
    fallback.style.cssText = "min-height:120px;display:flex;align-items:center;justify-content:center;background:#f2f4f3;border:1px solid #e4e8e6;border-radius:9px;color:#66706d;font-size:12px;padding:12px;text-align:center;";
    img.replaceWith(fallback);
  }, true);
}
