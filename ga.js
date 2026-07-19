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
}
