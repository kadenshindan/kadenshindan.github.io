// 商品データ(admin.htmlで編集できます)
const PRODUCTS = [
  {
    "cat": "circulator",
    "maker": "アイリスオーヤマ",
    "model": "PCF-SDC15T",
    "name": "サーキュレーターアイ DC JET",
    "price": 11800,
    "size": [
      "s",
      "m",
      "l"
    ],
    "focus": {
      "quiet": 3,
      "power": 3,
      "care": 2,
      "eco": 3,
      "compact": 2,
      "multi": 1
    },
    "img": "https://tshop.r10s.jp/irisplaza-r/cabinet/description_home02/kogata/imgrc0110314610.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Firisplaza-r%2F274315%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Firisplaza-r%2F274315%2F",
    "point": "静音とパワーを両立した定番DCモデル",
    "features": [
      "DCモーターで静音・省エネ",
      "上下左右の自動首振り",
      "〜24畳対応のパワフル送風",
      "風量10段階調整"
    ],
    "amazon": "https://www.amazon.co.jp/dp/B0D9JDC17F?tag=tanosiikitaic-22",
    "officialUrl": "https://www.irisohyama.co.jp/circulator-i/circulator-i-jet/"
  },
  {
    "cat": "circulator",
    "maker": "siroca",
    "model": "SF-16A351",
    "name": "3Dサーキュレーター",
    "price": 9900,
    "size": [
      "s",
      "m",
      "l"
    ],
    "focus": {
      "quiet": 2,
      "power": 3,
      "care": 3,
      "eco": 2,
      "compact": 2,
      "multi": 2
    },
    "img": "https://tshop.r10s.jp/siroca/cabinet/sf-16a351/imgrc0124102990.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fsiroca%2Fsf-16a351%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fsiroca%2Fsf-16a351%2F",
    "point": "3D首振り＋衣類乾燥モード搭載の新モデル",
    "features": [
      "3D首振りで部屋全体の空気を循環",
      "最大約28畳対応",
      "衣類乾燥モード搭載",
      "前カバー・羽根が外せてお手入れ簡単"
    ],
    "amazon": "https://www.amazon.co.jp/dp/B0GWQPL2BL?tag=tanosiikitaic-22",
    "officialUrl": "https://www.siroca.co.jp/product/3dcirculator/"
  },
  {
    "cat": "circulator",
    "maker": "シャーク",
    "model": "FA222J",
    "name": "FlexBreeze コードレスサーキュレーターファン",
    "price": 15950,
    "size": [
      "s",
      "m"
    ],
    "focus": {
      "quiet": 3,
      "power": 1,
      "care": 3,
      "eco": 2,
      "compact": 3,
      "multi": 1
    },
    "img": "https://shop.r10s.jp/shark/cabinet/renamethum/p10/fa222j_46off.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fshark%2Ffa222j%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fshark%2Ffa222j%2F",
    "amazon": "https://www.amazon.co.jp/dp/B0FQJJSQY8?tag=tanosiikitaic-22",
    "point": "コードレスで屋内外どこでも使える防水設計",
    "features": [
      "充電式コードレスで最大24時間駆動",
      "最大180°の自動首振りで広範囲をカバー",
      "ミストアタッチメントで屋外でも涼しく",
      "BLDCモーター搭載でパワフルなのに静か"
    ],
    "officialUrl": "https://www.sharkninja.jp/products/fa222j"
  },
  {
    "cat": "circulator",
    "maker": "アイリスオーヤマ",
    "model": "PCF-MKM15",
    "name": "コンパクトサーキュレーター",
    "price": 2180,
    "size": [
      "s"
    ],
    "focus": {
      "quiet": 1,
      "power": 1,
      "care": 2,
      "eco": 1,
      "compact": 3,
      "multi": 1
    },
    "img": "https://tshop.r10s.jp/enetroom/cabinet/11375185/11760512/i271000.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fenetroom%2Fi271000%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fenetroom%2Fi271000%2F",
    "point": "3,000円台で買える入門モデル",
    "features": [
      "圧倒的な低価格",
      "〜8畳の小部屋にちょうどいい",
      "シンプル操作で迷わない",
      "軽量コンパクト"
    ],
    "amazon": "https://www.amazon.co.jp/dp/B087RJLZMR?tag=tanosiikitaic-22",
    "officialUrl": "https://www.irisohyama.co.jp/products/electrical-appliances/seasonal-appliances/circulator/macaron-type/compact-circulator-mcaron-swing"
  },
  {
    "cat": "circulator",
    "maker": "ボルネード",
    "model": "633DC-JP",
    "name": "DCサーキュレーター",
    "price": 21800,
    "size": [
      "m",
      "l"
    ],
    "focus": {
      "quiet": 2,
      "power": 3,
      "care": 1,
      "eco": 3,
      "compact": 1,
      "multi": 2
    },
    "img": "https://tshop.r10s.jp/irodorikukan/cabinet/other19/21010526.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Firodorikukan%2F21010526%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Firodorikukan%2F21010526%2F",
    "point": "竜巻状の直進気流で大空間もしっかり循環",
    "features": [
      "独自の竜巻気流で到達距離が長い",
      "広いリビングや吹き抜けに強い",
      "DCモーターで省エネ",
      "本格派の定番ブランド"
    ],
    "amazon": "https://www.amazon.co.jp/dp/B09M8XMR1V?tag=tanosiikitaic-22",
    "officialUrl": "https://vornado.jp/store/products_item/633DC-JP"
  },
  {
    "cat": "fan",
    "maker": "パナソニック",
    "model": "F-C339D-W",
    "name": "DCモーター搭載 リビング扇",
    "price": 27580,
    "size": [
      "s",
      "m",
      "l"
    ],
    "focus": {
      "quiet": 3,
      "power": 2,
      "care": 2,
      "eco": 3,
      "compact": 2,
      "multi": 2
    },
    "img": "https://shop.r10s.jp/jism/cabinet/0068/4550719157718.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fandonya%2Ff-c339d-w%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fandonya%2Ff-c339d-w%2F",
    "point": "9枚羽根の1/fゆらぎ＋温度センサー",
    "features": [
      "9枚羽根と「1/fゆらぎ」のなめらかな風",
      "DCモーターで風量8段階",
      "温度センサー連動の自動・おやすみ運転",
      "リモコンと入・切タイマーを搭載"
    ],
    "amazon": "https://www.amazon.co.jp/dp/B0GS8RSPVF?tag=tanosiikitaic-22",
    "officialUrl": "https://panasonic.jp/fan/products/F-C339D.html"
  },
  {
    "cat": "fan",
    "maker": "バルミューダ",
    "model": "EGF-1800",
    "name": "The GreenFan",
    "price": 29259,
    "size": [
      "s",
      "m",
      "l"
    ],
    "focus": {
      "quiet": 3,
      "power": 2,
      "care": 2,
      "eco": 3,
      "compact": 2,
      "multi": 2
    },
    "img": "https://tshop.r10s.jp/gbft-ltd/cabinet/image33/gb-inte-10bd_ts.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fgbft-ltd%2Fgb-inte-10bd%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fgbft-ltd%2Fgb-inte-10bd%2F",
    "point": "自然界の風を再現した高級扇風機の代名詞",
    "features": [
      "二重構造の羽根で面で広がる自然な風",
      "最小運転音は図書館より静か",
      "消費電力最小1.5Wの省エネ性",
      "デザイン性が高くインテリアに映える"
    ],
    "amazon": "https://www.amazon.co.jp/dp/B0BTSDKZF5?tag=tanosiikitaic-22",
    "officialUrl": "https://www.balmuda.com/jp/greenfan/spec"
  },
  {
    "cat": "fan",
    "maker": "ツインバード",
    "model": "EF-E995W",
    "name": "サーキュレーション扇風機3D Lite",
    "price": 17800,
    "size": [
      "s",
      "m"
    ],
    "focus": {
      "quiet": 3,
      "power": 1,
      "care": 2,
      "eco": 3,
      "compact": 2,
      "multi": 1
    },
    "point": "大風量なのに静かな、サーキュレーター兼用の扇風機",
    "features": [
      "風量7以下なら35dB未満の静かさ",
      "上下約100°・左右約120°の3D首振り",
      "11枚羽根「エクセルブレード」で大風量",
      "羽根とガードは水洗いできる"
    ],
    "img": "https://tshop.r10s.jp/twinbird/cabinet/06297082/59951/59951.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ftwinbird%2F59951%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Ftwinbird%2F59951%2F",
    "amazon": "https://www.amazon.co.jp/dp/B0F3N3WD64?tag=tanosiikitaic-22",
    "officialUrl": "https://store.twinbird.jp/products/efe995"
  },
  {
    "cat": "fan",
    "maker": "山善",
    "model": "YLX-AJD30E",
    "name": "DCリビング扇風機",
    "price": 6980,
    "size": [
      "s",
      "m"
    ],
    "focus": {
      "quiet": 2,
      "power": 2,
      "care": 2,
      "eco": 2,
      "compact": 2,
      "multi": 1
    },
    "img": "https://tshop.r10s.jp/yamazenkaden/cabinet/main-img/018/main-r9w50.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fe-kurashi%2F25226%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fe-kurashi%2F25226%2F",
    "point": "節電センサー付きで1万円以下の高機能DC扇風機",
    "features": [
      "DCモーター・風量10段階",
      "24・26・28℃の節電センサー運転",
      "1〜8時間の入・切タイマー",
      "最大消費電力18W"
    ],
    "amazon": "https://www.amazon.co.jp/dp/B0CY4JKW3V?tag=tanosiikitaic-22",
    "officialUrl": "https://book.yamazen.co.jp/product/detail/I00005376"
  },
  {
    "cat": "fan",
    "maker": "日立",
    "model": "HEF-DL300H",
    "name": "DC扇風機 うちわ風搭載",
    "price": 16780,
    "size": [
      "m",
      "l"
    ],
    "focus": {
      "quiet": 2,
      "power": 3,
      "care": 3,
      "eco": 2,
      "compact": 1,
      "multi": 1
    },
    "img": "https://tshop.r10s.jp/ec-current/cabinet/9192_01/4526044017645_01.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fec-current%2F4526044017645%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fec-current%2F4526044017645%2F",
    "point": "うちわのようなやさしい風が特徴",
    "features": [
      "独自の「うちわ風」機能",
      "8枚羽根・風量6段階",
      "切・入タイマーとおやすみ運転",
      "チャイルドロック搭載"
    ],
    "amazon": "https://www.amazon.co.jp/dp/B0H6LX73VD?tag=tanosiikitaic-22",
    "officialUrl": "https://kadenfan.hitachi.co.jp/air/"
  },
  {
    "cat": "humidifier",
    "maker": "象印",
    "model": "EE-DF50",
    "name": "スチーム式加湿器 4.0L",
    "price": 25979,
    "size": [
      "s",
      "m"
    ],
    "focus": {
      "quiet": 1,
      "power": 3,
      "care": 3,
      "eco": 1,
      "compact": 2,
      "multi": 2
    },
    "img": "https://tshop.r10s.jp/compmoto-r/cabinet/gf00050/4974305231123.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fcompmoto-r%2F4974305231123%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fcompmoto-r%2F4974305231123%2F",
    "amazon": "https://www.amazon.co.jp/dp/B0FH8WJXRM?tag=tanosiikitaic-22",
    "point": "フィルターレスで手入れが圧倒的にラク。リビング向けの4.0L",
    "features": [
      "定格加湿能力480mL/h・タンク約4.0L",
      "適用床面積 木造和室〜8畳／プレハブ洋室〜13畳",
      "連続加湿 強8h／中16h／弱32h",
      "フィルター不要・広口容器でお手入れ簡単",
      "消費電力 湯沸かし985W／加湿410W",
      "外形寸法 24×27.5×36.5cm・約2.9kg"
    ],
    "officialUrl": "https://www.zojirushi.co.jp/syohin/life/humidifier/ee-df/"
  },
  {
    "cat": "humidifier",
    "maker": "象印",
    "model": "EE-DF35",
    "name": "スチーム式加湿器 3.0L",
    "price": 21580,
    "size": [
      "s"
    ],
    "focus": {
      "quiet": 1,
      "power": 2,
      "care": 3,
      "eco": 1,
      "compact": 2,
      "multi": 2
    },
    "img": "https://shop.r10s.jp/zojirushi-direct/cabinet/compass1760490831.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fmttstore%2Feedf35ha-4974305231116%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fmttstore%2Feedf35ha-4974305231116%2F",
    "amazon": "https://www.amazon.co.jp/dp/B0FH97RNLP?tag=tanosiikitaic-22",
    "point": "寝室・個室向けのコンパクトなスチーム式",
    "features": [
      "定格加湿能力350mL/h・タンク約3.0L",
      "適用床面積 木造和室〜6畳／プレハブ洋室〜10畳",
      "連続加湿 強8h／中16h／弱32h",
      "フィルター不要・広口容器でお手入れ簡単",
      "消費電力 湯沸かし985W／加湿305W",
      "外形寸法 24×27.5×32.5cm・約2.7kg"
    ],
    "officialUrl": "https://www.zojirushi.co.jp/syohin/life/humidifier/ee-df/"
  },
  {
    "cat": "dehumidifier",
    "maker": "コロナ",
    "model": "CD-S6325",
    "name": "コンプレッサー式除湿機 6.3L",
    "price": 22000,
    "size": [
      "s"
    ],
    "focus": {
      "quiet": 2,
      "power": 2,
      "care": 2,
      "eco": 3,
      "compact": 3,
      "multi": 2
    },
    "img": "https://tshop.r10s.jp/medicell51/cabinet/4906128541134_t.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fmedicell51%2F4906128541134%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fmedicell51%2F4906128541134%2F",
    "point": "一人暮らしの部屋干しにちょうどいい定番機",
    "features": [
      "6.3L/日でワンルームに最適",
      "夏に強いコンプレッサー式",
      "省エネ性に優れたコロナ製",
      "日本製で安心の品質"
    ],
    "officialUrl": "https://www.corona.co.jp/aircon/dehumidifier2/s/lineup.html"
  },
  {
    "cat": "dehumidifier",
    "maker": "シャープ",
    "model": "CV-U71",
    "name": "プラズマクラスター除湿機 7.1L",
    "price": 34800,
    "size": [
      "s",
      "m"
    ],
    "focus": {
      "quiet": 2,
      "power": 2,
      "care": 2,
      "eco": 2,
      "compact": 2,
      "multi": 2
    },
    "img": "https://tshop.r10s.jp/kaden-sakura/cabinet/gazou82/cv-u71-w.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkaden-sakura%2F4550556189699%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fkaden-sakura%2F4550556189699%2F",
    "point": "プラズマクラスターで部屋干し臭も抑える",
    "features": [
      "除湿7.1L/日",
      "プラズマクラスターで生乾き臭対策",
      "衣類乾燥モード搭載",
      "コンパクトで移動もラク"
    ],
    "officialUrl": "https://jp.sharp/joshitsu/products/cv-u71/"
  },
  {
    "cat": "dehumidifier",
    "maker": "アイリスオーヤマ",
    "model": "IJC-R65",
    "name": "コンプレッサー式除湿機 6.5L",
    "price": 17171,
    "size": [
      "s",
      "m"
    ],
    "focus": {
      "quiet": 1,
      "power": 2,
      "care": 2,
      "eco": 2,
      "compact": 2,
      "multi": 1
    },
    "img": "https://tshop.r10s.jp/irisplaza-r/cabinet/12113165/imgrc0121244229.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Firisplaza-r%2F561929%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Firisplaza-r%2F561929%2F",
    "point": "軽くて安い、除湿機デビューの入門機",
    "features": [
      "除湿能力5.5L/日（50Hz）・6.5L/日（60Hz）",
      "約2Lの水タンク",
      "内部乾燥運転を搭載",
      "市販ホースで連続排水に対応"
    ],
    "amazon": "https://www.amazon.co.jp/dp/B0DXQ1Z3J2?tag=tanosiikitaic-22",
    "officialUrl": "https://www.irisohyama.co.jp/dehumidifier/search/"
  },
  {
    "cat": "dehumidifier",
    "maker": "三菱電機",
    "model": "MJ-P180ZX",
    "name": "衣類乾燥除湿機 18L",
    "price": 56800,
    "size": [
      "m",
      "l"
    ],
    "focus": {
      "quiet": 2,
      "power": 3,
      "care": 2,
      "eco": 2,
      "compact": 1,
      "multi": 2
    },
    "img": "https://image.rakuten.co.jp/jyupro/cabinet/kaden9/mj-p180zx-w.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fa-price%2F4573637000478%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fa-price%2F4573637000478%2F",
    "point": "18L/日級のパワーで家族の部屋干しも一気に乾く",
    "features": [
      "除湿能力15.5L/日（50Hz）・18L/日（60Hz）",
      "広角オートスイングで大量の洗濯物に対応",
      "冬モード・おまかせ霜取りを搭載",
      "切り忘れ防止機能付きで安心（解除も可能）"
    ],
    "amazon": "https://www.amazon.co.jp/dp/B0FGCBTYQY?tag=tanosiikitaic-22",
    "officialUrl": "https://www.mitsubishielectric.co.jp/home/jyoshitsuki/product/mj-p180zx/"
  },
  {
    "cat": "dehumidifier",
    "maker": "コロナ",
    "model": "CD-WH1825",
    "name": "衣類乾燥除湿機 18L ホワイト",
    "price": 48158,
    "size": [
      "m",
      "l"
    ],
    "focus": {
      "quiet": 2,
      "power": 3,
      "care": 3,
      "eco": 3,
      "compact": 1,
      "multi": 3
    },
    "img": "https://tshop.r10s.jp/ksdenki/cabinet/images/31_5/4906128540731_5.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fksdenki%2F4906128540731%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fksdenki%2F4906128540731%2F",
    "point": "大能力＋省エネDC送風のハイエンド機",
    "features": [
      "18L/日の大能力コンプレッサー式",
      "DCモーター送風で電気代を抑える",
      "広範囲スイング送風",
      "梅雨の大量部屋干しに強い"
    ],
    "officialUrl": "https://www.corona.co.jp/aircon/dehumidifier2/wh/lineup.html"
  },
  {
    "cat": "purifier",
    "maker": "シャープ",
    "model": "KC-S50",
    "name": "加湿空気清浄機 プラズマクラスター",
    "price": 26500,
    "size": [
      "s",
      "m"
    ],
    "focus": {
      "quiet": 2,
      "power": 2,
      "care": 2,
      "eco": 2,
      "compact": 2,
      "multi": 2
    },
    "img": "https://tshop.r10s.jp/auc-pcfreak/cabinet/imgrc0110215368.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fauc-pcfreak%2F10003085%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fauc-pcfreak%2F10003085%2F",
    "point": "迷ったらこれ、加湿もできる国民的定番機",
    "features": [
      "空気清浄＋加湿の1台2役",
      "プラズマクラスター7000搭載",
      "花粉・ホコリ・ニオイに幅広く対応",
      "価格と性能のバランスが優秀"
    ],
    "amazon": "https://www.amazon.co.jp/dp/B0CX7Z8LW4?tag=tanosiikitaic-22",
    "officialUrl": "https://jp.sharp/kuusei/products/kcs50/"
  },
  {
    "cat": "purifier",
    "maker": "シャープ",
    "model": "FU-U40",
    "name": "空気清浄機 Purefit",
    "price": 28979,
    "size": [
      "s",
      "m"
    ],
    "focus": {
      "quiet": 3,
      "power": 2,
      "care": 2,
      "eco": 2,
      "compact": 3,
      "multi": 2
    },
    "img": "https://tshop.r10s.jp/surprise-shop/cabinet/13090980/fu-u40-h.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fsurprise-shop%2Ffu-u40-h%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fsurprise-shop%2Ffu-u40-h%2F",
    "point": "寝室・自室向けの静音スリムモデル",
    "features": [
      "脱臭性能とセンサー感度が優秀",
      "静音性が高く寝室向き",
      "スリムで置き場所を選ばない",
      "〜18畳対応"
    ],
    "officialUrl": "https://jp.sharp/kuusei/products/fuu40/"
  },
  {
    "cat": "purifier",
    "maker": "ダイキン",
    "model": "MC556A",
    "name": "ストリーマ空気清浄機",
    "price": 41530,
    "size": [
      "m",
      "l"
    ],
    "focus": {
      "quiet": 2,
      "power": 3,
      "care": 3,
      "eco": 2,
      "compact": 1,
      "multi": 2
    },
    "img": "https://tshop.r10s.jp/niche-express/cabinet/2025/dkn/01/dkn00000000122-01.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fniche-express%2Fdkn00000000122%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fniche-express%2Fdkn00000000122%2F",
    "point": "加湿なしで25畳まで、5.8kgの軽量ストリーマ空気清浄機",
    "features": [
      "適用床面積 25畳・8畳を11分で清浄",
      "ストリーマ＋TAFUフィルター（交換目安10年）",
      "本体5.8kgと軽く動かしやすい",
      "加湿機能なしで手入れがシンプル"
    ],
    "amazon": "https://www.amazon.co.jp/dp/B0FQ5PNWY5?tag=tanosiikitaic-22",
    "officialUrl": "https://www.ac.daikin.co.jp/cleanair/co"
  },
  {
    "cat": "purifier",
    "maker": "パナソニック",
    "model": "F-VXW55",
    "name": "加湿空気清浄機 ナノイーX搭載",
    "price": 46623,
    "size": [
      "m",
      "l"
    ],
    "focus": {
      "quiet": 2,
      "power": 3,
      "care": 2,
      "eco": 2,
      "compact": 1,
      "multi": 3
    },
    "img": "https://tshop.r10s.jp/ec-current/cabinet/9099/4549980751855.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fec-current%2F4549980751855%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fec-current%2F4549980751855%2F",
    "point": "花粉撃退気流と上質な加湿にこだわる人へ",
    "features": [
      "ナノイーX 4.8兆搭載",
      "床上の花粉を吸い取る花粉撃退気流",
      "加湿クオリティが高い",
      "〜25畳対応"
    ],
    "amazon": "https://www.amazon.co.jp/dp/B0CL954B27?tag=tanosiikitaic-22",
    "officialUrl": "https://panasonic.jp/catalog/ctlg/air_cleaner/air_cleaner.pdf"
  },
  {
    "cat": "vacuum",
    "maker": "ダイソン",
    "model": "Micro Plus SV33",
    "name": "Dyson Micro Plus",
    "price": 43550,
    "size": [
      "s",
      "m"
    ],
    "focus": {
      "quiet": 1,
      "power": 3,
      "care": 2,
      "eco": 3,
      "compact": 3,
      "multi": 3
    },
    "img": "https://tshop.r10s.jp/dyson/cabinet/product/09679188/006.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fdyson%2F447813-01%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fdyson%2F447813-01%2F",
    "point": "1.5kgの軽さにダイソンの吸引力",
    "features": [
      "本体約1.5kgの軽量ボディ",
      "ダイソンならではの強力吸引",
      "小回りが利いて掃除がラク",
      "ワンルーム〜2LDKに最適"
    ],
    "amazon": "https://www.amazon.co.jp/dp/B0CLL1CMMB?tag=tanosiikitaic-22",
    "officialUrl": "https://www.dyson.co.jp/vacuum-cleaners/cordless/micro/plus-nickel-iron"
  },
  {
    "cat": "vacuum",
    "maker": "日立",
    "model": "PV-BL3M",
    "name": "ラクかるスティック",
    "price": 36800,
    "size": [
      "s",
      "m"
    ],
    "focus": {
      "quiet": 2,
      "power": 2,
      "care": 2,
      "eco": 3,
      "compact": 2,
      "multi": 2
    },
    "img": "https://tshop.r10s.jp/pc-bomber-shop/cabinet/mastertool70/255030007040400.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fb-surprise2%2F4549873142449%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fb-surprise2%2F4549873142449%2F",
    "point": "0.8kgの超軽量で毎日の掃除が苦にならない",
    "features": [
      "業界トップクラスの軽さ0.8kg",
      "高い所や隙間もラクに届く",
      "自走式ヘッドで軽い操作感",
      "日本メーカーの安心感"
    ],
    "amazon": "https://www.amazon.co.jp/dp/B0DZ61NHSZ?tag=tanosiikitaic-22",
    "officialUrl": "https://kadenfan.hitachi.co.jp/clean/lineup/pv-bl3m/"
  },
  {
    "cat": "vacuum",
    "maker": "シャーク",
    "model": "EVOPOWER SYSTEM NEO+",
    "name": "エヴォパワーシステム NEO+",
    "price": 48300,
    "size": [
      "m",
      "l"
    ],
    "focus": {
      "quiet": 2,
      "power": 3,
      "care": 3,
      "eco": 2,
      "compact": 1,
      "multi": 3
    },
    "img": "https://img1.kakaku.k-img.com/images/productimage/fullscale/K0001564385.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fshop-uchihonmachi%2Fgr-e9zt4g87i8%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fshop-uchihonmachi%2Fgr-e9zt4g87i8%2F",
    "point": "自動ゴミ収集ドック付きのハイエンド機",
    "features": [
      "ドックに戻すだけで自動ゴミ収集",
      "iQセンサーで吸引力を自動調整",
      "カーボンファイバーで軽くて丈夫",
      "ハンディとしても使える2WAY"
    ],
    "amazon": "https://www.amazon.co.jp/dp/B0F8HDTNLT?tag=tanosiikitaic-22",
    "officialUrl": "https://www.sharkninja.jp/shark/stickcleaner/evopowersystem_neo/spec/"
  },
  {
    "cat": "vacuum",
    "maker": "アイリスオーヤマ",
    "model": "SCD-L3PD",
    "name": "マジカリーナ ゴミ回収ドック付き",
    "price": 29780,
    "size": [
      "s",
      "m",
      "l"
    ],
    "focus": {
      "quiet": 2,
      "power": 2,
      "care": 3,
      "eco": 2,
      "compact": 2,
      "multi": 3
    },
    "img": "https://tshop.r10s.jp/value-shopping/cabinet/11252016/4967576732918.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fecolotop%2Fscd-l3pd-hc%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fecolotop%2Fscd-l3pd-hc%2F",
    "point": "3万円以下でゴミ自動回収ドック付き",
    "features": [
      "ゴミ捨ては数週間に1回でOK",
      "3万円以下で買えるドック付きモデル",
      "軽量で扱いやすい",
      "静電モップ付きモデルも選べる"
    ],
    "officialUrl": "https://www.irisohyama.co.jp/products/support/4967576732918"
  },
  {
    "cat": "vacuum",
    "maker": "ダイソン",
    "model": "V12 Detect Slim Absolute SV46",
    "name": "Dyson V12 Detect Slim Absolute",
    "price": 80080,
    "size": [
      "m",
      "l"
    ],
    "focus": {
      "quiet": 1,
      "power": 3,
      "care": 2,
      "eco": 2,
      "compact": 1,
      "multi": 3
    },
    "img": "https://tshop.r10s.jp/outletplaza/cabinet/066/5025155082522.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fksdenki%2F5025155082461%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fksdenki%2F5025155082461%2F",
    "point": "レーザーで見えないホコリまで可視化",
    "features": [
      "グリーンレーザーでゴミを可視化",
      "強力な吸引力とゴミ量の自動検知",
      "液晶でゴミの量とサイズを表示",
      "広い家の徹底掃除に"
    ],
    "amazon": "https://www.amazon.co.jp/dp/B0D86R7KML?tag=tanosiikitaic-22",
    "officialUrl": "https://www.dyson.co.jp/vacuum-cleaners/cordless/v12/detect-slim-absolute"
  },
  {
    "cat": "robot",
    "maker": "エコバックス",
    "model": "DEEBOT T50 PRO OMNI",
    "name": "DEEBOT T50 PRO OMNI",
    "price": 128000,
    "size": [
      "m",
      "l"
    ],
    "focus": {
      "quiet": 2,
      "power": 3,
      "care": 3,
      "eco": 2,
      "compact": 1,
      "multi": 3
    },
    "img": "https://tshop.r10s.jp/denkichiweb/cabinet/12203101/6970135034697_1.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fdenkichiweb%2F6970135034697%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fdenkichiweb%2F6970135034697%2F",
    "point": "吸引力トップ級、水拭きまで全自動のベストバイ",
    "features": [
      "比較テストで吸引力トップの成績",
      "水拭き＋モップ洗浄・乾燥まで全自動",
      "ゴミ収集ドック付きで手間いらず",
      "セールで大幅値下げされることも"
    ],
    "amazon": "https://www.amazon.co.jp/dp/B0DRVBP6B2?tag=tanosiikitaic-22",
    "officialUrl": "https://www.ecovacs.com/jp/deebot-robotic-vacuum-cleaner/deebot-t50-pro-omni-white"
  },
  {
    "cat": "robot",
    "maker": "シャオミ",
    "model": "X20 Max",
    "name": "ロボット掃除機 X20 Max",
    "price": 74800,
    "size": [
      "m",
      "l"
    ],
    "focus": {
      "quiet": 2,
      "power": 3,
      "care": 3,
      "eco": 3,
      "compact": 1,
      "multi": 3
    },
    "img": "https://tshop.r10s.jp/xiaomiofficial/cabinet/11092610/11092614/mainx.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fxiaomiofficial%2Fm59070%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fxiaomiofficial%2Fm59070%2F",
    "point": "7万円台で全部入りのコスパ王",
    "features": [
      "優れた障害物回避センサー",
      "吸引＋水拭きの2in1",
      "全自動ドック付きでこの価格",
      "コスパ最重視ならこれ"
    ],
    "amazon": "https://www.amazon.co.jp/dp/B0DG2F2JPH?tag=tanosiikitaic-22",
    "officialUrl": "https://www.mi.com/jp/product/xiaomi-robot-vacuum-x20-max/"
  },
  {
    "cat": "robot",
    "maker": "アイロボット",
    "model": "Roomba 205 DustCompactor Combo",
    "name": "ルンバ 205 DustCompactor Combo",
    "price": 59743,
    "size": [
      "s",
      "m"
    ],
    "focus": {
      "quiet": 2,
      "power": 2,
      "care": 3,
      "eco": 2,
      "compact": 3,
      "multi": 3
    },
    "img": "https://tshop.r10s.jp/irobotstore/cabinet/03016688/20260719_marathon/260719_205c_tm_v2.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Firobotstore%2Fl12%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Firobotstore%2Fl12%2F",
    "point": "小型部門1位、ゴミ圧縮でドック不要",
    "features": [
      "本体内でゴミを圧縮、ドック不要",
      "省スペースで一人暮らしにも",
      "吸引＋水拭き対応",
      "信頼のルンバブランド"
    ],
    "amazon": "https://www.amazon.co.jp/dp/B0F1FB6PSQ?tag=tanosiikitaic-22",
    "officialUrl": "https://store.irobot-jp.com/item/L121260.html"
  },
  {
    "cat": "robot",
    "maker": "ロボロック",
    "model": "Qrevo L",
    "name": "Roborock Qrevo L",
    "price": 53800,
    "size": [
      "l"
    ],
    "focus": {
      "quiet": 2,
      "power": 3,
      "care": 3,
      "eco": 1,
      "compact": 1,
      "multi": 3
    },
    "img": "https://shop.r10s.jp/roborockjapandirect/cabinet/products/12574614/12574615/imgrc0130333896.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Froborockjapandirect%2F6936905903426%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Froborockjapandirect%2F6936905903426%2F",
    "point": "10,000Pa吸引＋4way全自動ドック",
    "features": [
      "10,000Paのパワフルな吸引力",
      "最大毎分200回転の2つの丸形モップ",
      "モップ洗浄・乾燥・給水・ゴミ収集を自動化",
      "ストラクチャードライトとLDSで回避・マッピング"
    ],
    "amazon": "https://www.amazon.co.jp/dp/B0F6NGXD99?tag=tanosiikitaic-22",
    "officialUrl": "https://jp.roborock.com/pages/roborock-qrevo-l"
  },
  {
    "cat": "robot",
    "maker": "Anker",
    "model": "Eufy RoboVac G30",
    "name": "Eufy RoboVac G30",
    "price": 29990,
    "size": [
      "s",
      "m"
    ],
    "focus": {
      "quiet": 2,
      "power": 2,
      "care": 1,
      "eco": 3,
      "compact": 2,
      "multi": 2
    },
    "point": "3万円で買えるマッピング機能付き入門機",
    "features": [
      "間取りを学習するスマートマッピング",
      "2000Paのパワフル吸引",
      "薄型でベッド・ソファ下にも潜れる",
      "Anker公式ストアで購入可"
    ],
    "img": "https://tshop.r10s.jp/anker/cabinet/listing/tmb/t2250/t2250_normal.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fanker%2Ft2250%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fanker%2Ft2250%2F",
    "officialUrl": "https://www.ankerjapan.com/products/t2250"
  },
  {
    "cat": "ricecooker",
    "maker": "象印",
    "model": "NW-QB10",
    "name": "IH炊飯ジャー 極め炊き 5.5合",
    "price": 28800,
    "size": [
      "m",
      "l"
    ],
    "focus": {
      "quiet": 2,
      "power": 3,
      "care": 2,
      "eco": 2,
      "compact": 1,
      "multi": 2
    },
    "img": "https://tshop.r10s.jp/ksdenki/cabinet/images/08_3/4974305230508_3.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fksdenki%2F4974305230508%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fksdenki%2F4974305230508%2F",
    "point": "お米マイスター実証テスト1位のベストバイ",
    "features": [
      "専門家テストでベストバイ獲得",
      "IHの強火で甘みのある炊き上がり",
      "メニュー豊富で炊き分け可能",
      "5.5合でファミリーに最適"
    ],
    "amazon": "https://www.amazon.co.jp/dp/B0FH6BGV8G?tag=tanosiikitaic-22",
    "officialUrl": "https://www.zojirushi.co.jp/syohin/rice/ricecooker/nw-qb/"
  },
  {
    "cat": "ricecooker",
    "maker": "タイガー",
    "model": "JPV-X100",
    "name": "圧力IHジャー炊飯器〈炊きたて〉",
    "price": 31600,
    "size": [
      "m",
      "l"
    ],
    "focus": {
      "quiet": 2,
      "power": 3,
      "care": 3,
      "eco": 2,
      "compact": 1,
      "multi": 2
    },
    "img": "https://tshop.r10s.jp/den-mart/cabinet/item_photo3/6a100e049fb1c.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fden-mart%2F58378%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fden-mart%2F58378%2F",
    "point": "圧力IHでもちもち食感、手入れもラク",
    "features": [
      "圧力IHでもちもちの炊き上がり",
      "内ぶた・内なべの2点洗いでお手入れ簡単",
      "粒立ち炊飯で冷めてもおいしい",
      "比較テスト上位の実力機"
    ],
    "amazon": "https://www.amazon.co.jp/dp/B0H6M2MMWX?tag=tanosiikitaic-22",
    "officialUrl": "https://www.tiger-corporation.com/ja/jpn/product/rice-cooker/jpv-x/"
  },
  {
    "cat": "ricecooker",
    "maker": "パナソニック",
    "model": "SR-M10E4",
    "name": "おどり炊き 圧力IH炊飯器 5合",
    "price": 28600,
    "size": [
      "s",
      "m"
    ],
    "focus": {
      "quiet": 3,
      "power": 2,
      "care": 2,
      "eco": 2,
      "compact": 2,
      "multi": 2
    },
    "point": "2〜3人暮らしにちょうどいい圧力IH",
    "features": [
      "圧力IH「おどり炊き」でふっくら食感",
      "2〜3人分にちょうどいい5合サイズ",
      "早炊きモードが優秀",
      "2025年発売の現行モデル"
    ],
    "img": "https://tshop.r10s.jp/seishinjapan/cabinet/k0001636884.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fseishinjapan%2F4549980803288%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fseishinjapan%2F4549980803288%2F",
    "officialUrl": "https://www.edion.com/detail.html?p_cd=00078611269"
  },
  {
    "cat": "ricecooker",
    "maker": "タイガー",
    "model": "JBH-G102",
    "name": "マイコン炊飯器〈炊きたて〉5.5合",
    "price": 9183,
    "size": [
      "m",
      "l"
    ],
    "focus": {
      "quiet": 2,
      "power": 1,
      "care": 2,
      "eco": 3,
      "compact": 1,
      "multi": 1
    },
    "img": "https://tshop.r10s.jp/ksdenki/cabinet/images/82_5/4904710429082_5.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fksdenki%2F4904710429082%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fksdenki%2F4904710429082%2F",
    "point": "1万円台前半で買える定番マイコン機",
    "features": [
      "1万円台前半の手頃な価格",
      "シンプル操作で使いやすい",
      "黒遠赤釜採用",
      "コスパ最優先ならこれ"
    ],
    "amazon": "https://www.amazon.co.jp/dp/B0DQ7D52LK?tag=tanosiikitaic-22",
    "officialUrl": "https://www.tiger-corporation.com/ja/jpn/product/rice-cooker/jbh-g2/"
  },
  {
    "cat": "ricecooker",
    "maker": "タイガー",
    "model": "JRX-S100",
    "name": "土鍋ご泡火炊き",
    "price": 85450,
    "size": [
      "m",
      "l"
    ],
    "focus": {
      "quiet": 1,
      "power": 3,
      "care": 2,
      "eco": 1,
      "compact": 1,
      "multi": 3
    },
    "img": "https://tshop.r10s.jp/e-cutestyle/cabinet/img051/p000000909871_1.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fa-price%2F4904710443316%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fa-price%2F4904710443316%2F",
    "point": "本物の土鍋で炊く最高峰の一杯",
    "features": [
      "本土鍋の遠赤外線と泡立ちで炊く",
      "高級炊飯器の比較でベストバイ1位",
      "ごはんの香り・甘みが別格",
      "お米にこだわり抜きたい人へ"
    ],
    "amazon": "https://www.amazon.co.jp/dp/B0FZY9ZQ6J?tag=tanosiikitaic-22",
    "officialUrl": "https://www.tiger-corporation.com/ja/jpn/product/rice-cooker/jrx-s/"
  },
  {
    "cat": "kettle",
    "maker": "ティファール",
    "model": "ジャスティン ロック 1.2L",
    "name": "ジャスティン ロック 1.2L",
    "price": 3900,
    "size": [
      "m",
      "l"
    ],
    "focus": {
      "quiet": 3,
      "power": 2,
      "care": 2,
      "eco": 2,
      "compact": 1,
      "multi": 1
    },
    "img": "https://tshop.r10s.jp/bellevie-harima/cabinet/0101/default/s1/t-fal-350_white0201.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbellevie-harima%2Ft-fal-350%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fbellevie-harima%2Ft-fal-350%2F",
    "point": "売れ筋1位、カップ1杯約1分で沸く",
    "features": [
      "カップ1杯分が約1分で沸騰",
      "転倒お湯もれロック機能",
      "1.2Lでファミリーにも十分",
      "価格.com売れ筋1位の定番"
    ],
    "amazon": "https://www.amazon.co.jp/dp/B0DC6Z38NP?tag=tanosiikitaic-22",
    "officialUrl": "https://www.t-fal.co.jp/kettle/products/justine-lock-7211419308/"
  },
  {
    "cat": "kettle",
    "maker": "象印",
    "model": "STAN. CK-PA08",
    "name": "STAN. 電気ケトル 0.8L",
    "price": 8480,
    "size": [
      "s",
      "m"
    ],
    "focus": {
      "quiet": 3,
      "power": 2,
      "care": 3,
      "eco": 2,
      "compact": 3,
      "multi": 1
    },
    "img": "https://tshop.r10s.jp/payoff/cabinet/muryou_07/b07609.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fpayoff%2Fpk07609%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fpayoff%2Fpk07609%2F",
    "point": "沸騰3分台の速さとデザイン性を両立",
    "features": [
      "実測3分台の沸騰スピード",
      "転倒湯もれ防止など安全設計",
      "ハンドドリップしやすい注ぎ口",
      "インテリアに映えるSTAN.デザイン"
    ],
    "amazon": "https://www.amazon.co.jp/dp/B0FH6DQ7FW?tag=tanosiikitaic-22",
    "officialUrl": "https://www.zojirushi.co.jp/syohin/pot_kettle/"
  },
  {
    "cat": "kettle",
    "maker": "ティファール",
    "model": "アプレシア ロック KO6403J0",
    "name": "アプレシア ロック 0.8L",
    "price": 3878,
    "size": [
      "s"
    ],
    "focus": {
      "quiet": 2,
      "power": 2,
      "care": 2,
      "eco": 3,
      "compact": 3,
      "multi": 1
    },
    "img": "https://tshop.r10s.jp/patie/cabinet/0000/default/s1/t-fal-349_s1.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fpatie%2Ft-fal-349%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fpatie%2Ft-fal-349%2F",
    "point": "コンパクトで一人暮らしにちょうどいい",
    "features": [
      "0.8Lの省スペースサイズ",
      "転倒お湯もれロック付き",
      "軽くて扱いやすい",
      "比較テストでも高評価"
    ],
    "amazon": "https://www.amazon.co.jp/dp/B0FNPRPD54?tag=tanosiikitaic-22",
    "officialUrl": "https://www.t-fal.co.jp/kettle/products/aprecia-lock-7211419990/"
  },
  {
    "cat": "kettle",
    "maker": "象印",
    "model": "CK-VB15",
    "name": "電気ケトル 1.5L",
    "price": 5897,
    "size": [
      "m",
      "l"
    ],
    "focus": {
      "quiet": 2,
      "power": 2,
      "care": 3,
      "eco": 3,
      "compact": 1,
      "multi": 1
    },
    "img": "https://tshop.r10s.jp/r-kojima/cabinet/n0000001522/4974305230997_1.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fr-kojima%2F4974305230997%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fr-kojima%2F4974305230997%2F",
    "point": "安全機能全部入りの大容量モデル",
    "features": [
      "1.5Lの大容量でファミリー向け",
      "転倒湯もれ防止・本体二重構造",
      "蒸気セーブ構造で蒸気の量を抑える",
      "比較テスト高評価の安心設計"
    ],
    "amazon": "https://www.amazon.co.jp/dp/B0FH6HBN65?tag=tanosiikitaic-22",
    "officialUrl": "https://www.zojirushi.co.jp/syohin/pot_kettle/kettle/ck-vb/"
  },
  {
    "cat": "kettle",
    "maker": "山善",
    "model": "EGL-C1281",
    "name": "温度調節電気ケトル 0.8L",
    "price": 8980,
    "size": [
      "s",
      "m"
    ],
    "focus": {
      "quiet": 2,
      "power": 3,
      "care": 2,
      "eco": 2,
      "compact": 2,
      "multi": 3
    },
    "img": "https://tshop.r10s.jp/yamazenkaden/cabinet/main-img/018/main-s4x25.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fyamazenkaden%2F76033%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fyamazenkaden%2F76033%2F",
    "point": "1℃単位の温度調節でコーヒー党に人気",
    "features": [
      "50〜100℃を1℃単位で設定可能",
      "細口ノズルでドリップしやすい",
      "保温機能付き",
      "1200Wのハイパワー"
    ],
    "amazon": "https://www.amazon.co.jp/dp/B0BR3PTQHG?tag=tanosiikitaic-22",
    "officialUrl": "https://book.yamazen.co.jp/product/detail/I00003952"
  },
  {
    "cat": "dryer",
    "maker": "パナソニック",
    "model": "EH-NA0K",
    "name": "ヘアードライヤー ナノケア",
    "price": 34967,
    "size": [
      "s",
      "m",
      "l"
    ],
    "focus": {
      "quiet": 2,
      "power": 2,
      "care": 3,
      "eco": 2,
      "compact": 2,
      "multi": 2
    },
    "img": "https://tshop.r10s.jp/panasonic-store/cabinet/banner/thumb/eh-na0k_004.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Femedama%2F4549980975022%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Femedama%2F4549980975022%2F",
    "point": "高浸透ナノイーでうるおい最高峰",
    "features": [
      "高浸透ナノイーで髪にうるおい",
      "人気ランキング常連の定番",
      "スマートセンシングで熱をコントロール",
      "仕上がり重視ならこれ"
    ],
    "amazon": "https://www.amazon.co.jp/dp/B0FHGWST7P?tag=tanosiikitaic-22",
    "officialUrl": "https://panasonic.jp/hair/products/EH-NA0K.html"
  },
  {
    "cat": "dryer",
    "maker": "パナソニック",
    "model": "EH-NA0J",
    "name": "ヘアードライヤー ナノケア(旧モデル)",
    "price": 35900,
    "size": [
      "s",
      "m",
      "l"
    ],
    "focus": {
      "quiet": 2,
      "power": 1,
      "care": 2,
      "eco": 2,
      "compact": 2,
      "multi": 1
    },
    "point": "EH-NA0Kの1世代前。現在は在庫限りで値上がり傾向",
    "features": [
      "EH-NA0Kとほぼ同機能",
      "公式サイトはEH-NA0Kへ案内中(2025年9月に世代交代)",
      "高浸透ナノイー搭載",
      "新品在庫は限られ現在はEH-NA0Kより高い場合がある"
    ],
    "img": "https://tshop.r10s.jp/alljapan-online-shop/cabinet/kaden/08229209/imgrc0096194198.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fgs-trade%2Fcompass1783345632%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fgs-trade%2Fcompass1783345632%2F",
    "amazon": "https://www.amazon.co.jp/dp/B0B72HZHLG?tag=tanosiikitaic-22",
    "officialUrl": "https://panasonic.jp/hair/products/EH-NA0J.html"
  },
  {
    "cat": "dryer",
    "maker": "コイズミ",
    "model": "KHD-B200",
    "name": "ハイスピードドライヤー IMPULSE",
    "price": 9840,
    "size": [
      "s",
      "m",
      "l"
    ],
    "focus": {
      "quiet": 2,
      "power": 2,
      "care": 2,
      "eco": 3,
      "compact": 3,
      "multi": 2
    },
    "img": "https://tshop.r10s.jp/ksdenki/cabinet/images/43_1/4981747085443_1.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fksdenki%2F4981747085443%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fksdenki%2F4981747085443%2F",
    "point": "約375gの軽量ボディに温冷自動切替を搭載したコスパ機",
    "features": [
      "BLDCモーターで最大10万回転/分のパワフルな風",
      "HOT/SCALP/AUTO H&C/COOLの4モード切替",
      "温冷自動切替で熱ダメージを抑制",
      "約375gの軽量ボディで旅行にも便利"
    ],
    "amazon": "https://www.amazon.co.jp/dp/B0FXK2BRLJ?tag=tanosiikitaic-22",
    "officialUrl": "https://www.koizumiseiki.jp/products/detail/1562"
  },
  {
    "cat": "dryer",
    "maker": "ダイソン",
    "model": "Supersonic HD08",
    "name": "Dyson Supersonic",
    "price": 25500,
    "size": [
      "s",
      "m"
    ],
    "focus": {
      "quiet": 1,
      "power": 3,
      "care": 2,
      "eco": 2,
      "compact": 2,
      "multi": 3
    },
    "img": "https://tshop.r10s.jp/matukaze/cabinet/compass1778744563.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbearmarche%2F5025155117699%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fbearmarche%2F5025155117699%2F",
    "point": "圧倒的風量でとにかく速く乾かす",
    "features": [
      "大風量でロングヘアも速乾",
      "過度な熱を防ぐ温度制御",
      "マグネット式アタッチメント",
      "時短最優先ならこれ"
    ],
    "amazon": "https://www.amazon.co.jp/dp/B0FLPRRH5D?tag=tanosiikitaic-22",
    "officialUrl": "https://www.dyson.co.jp/hair-care/hair-dryers/supersonic/lite-nickel-copper"
  },
  {
    "cat": "dryer",
    "maker": "パナソニック",
    "model": "EH-NE7N",
    "name": "イオニティ 大風量ドライヤー",
    "price": 9998,
    "size": [
      "s",
      "m",
      "l"
    ],
    "focus": {
      "quiet": 2,
      "power": 3,
      "care": 1,
      "eco": 3,
      "compact": 2,
      "multi": 1
    },
    "img": "https://image.rakuten.co.jp/hmy-select/cabinet/steamer/2025q3/eh-ne7n_001.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fhmy-select%2Feh-ne7n%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fhmy-select%2Feh-ne7n%2F",
    "point": "1万円以下で大風量1.6m³/分",
    "features": [
      "風量1.6m³/分の速乾クラス",
      "Wミネラル&マイナスイオン搭載",
      "低温ケアモード付き",
      "コスパと速乾の両立"
    ],
    "amazon": "https://www.amazon.co.jp/dp/B0FRQV5XB2?tag=tanosiikitaic-22",
    "officialUrl": "https://panasonic.jp/hair/products/EH-NE7L.html"
  },
  {
    "cat": "toothbrush",
    "maker": "フィリップス",
    "model": "ソニッケアー プロテクトクリーン",
    "name": "ソニッケアー プロテクトクリーン",
    "price": 7980,
    "size": [
      "s",
      "m"
    ],
    "focus": {
      "quiet": 3,
      "power": 2,
      "care": 3,
      "eco": 2,
      "compact": 2,
      "multi": 1
    },
    "img": "https://tshop.r10s.jp/hikaritv/cabinet/plala/201/01251/2010125118_k.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fhikaritv%2F2010125118%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fhikaritv%2F2010125118%2F",
    "point": "音波水流で歯ぐきにやさしい定番機",
    "features": [
      "毎分約31,000回の音波振動",
      "歯間・歯周ポケットの汚れもケア",
      "過圧防止センサー搭載",
      "迷ったらこれの定番モデル"
    ],
    "amazon": "https://www.amazon.co.jp/dp/B09JYMGMPT?tag=tanosiikitaic-22",
    "officialUrl": "https://www.philips.co.jp/c-e/pe/oral-healthcare/protectclean.html"
  },
  {
    "cat": "toothbrush",
    "maker": "ブラウン",
    "model": "オーラルB iO4",
    "name": "オーラルB iO4",
    "price": 10780,
    "size": [
      "s",
      "m"
    ],
    "focus": {
      "quiet": 2,
      "power": 3,
      "care": 2,
      "eco": 2,
      "compact": 2,
      "multi": 2
    },
    "img": "https://tshop.r10s.jp/edion/cabinet/goods/ll/img_379/4210201442196_1.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fedion%2F4210201442196%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fedion%2F4210201442196%2F",
    "point": "回転式のパワフル洗浄で磨き残しなし",
    "features": [
      "丸型ブラシの回転＋遠心マイクロモーション",
      "歯科クリーニング後のような磨き上がり",
      "押し付け防止センサーが赤・緑・白で圧をガイド",
      "公式現行のiOシリーズ エントリーモデル"
    ],
    "amazon": "https://www.amazon.co.jp/s?k=%E3%83%96%E3%83%A9%E3%82%A6%E3%83%B3%20%E3%82%AA%E3%83%BC%E3%83%A9%E3%83%ABB%20iO4&tag=tanosiikitaic-22",
    "officialUrl": "https://www.oralb.braun.co.jp/ja-jp/products/electric-toothbrushes/oral-b-io-series-4-electric-toothbrush"
  },
  {
    "cat": "toothbrush",
    "maker": "フィリップス",
    "model": "ソニッケアー 3100",
    "name": "ソニッケアー 3100",
    "price": 6150,
    "size": [
      "s"
    ],
    "focus": {
      "quiet": 3,
      "power": 2,
      "care": 3,
      "eco": 3,
      "compact": 3,
      "multi": 1
    },
    "img": "https://tshop.r10s.jp/hfstore/cabinet/imgrc0109932893.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fhfstore%2Ffi01%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fhfstore%2Ffi01%2F",
    "point": "7千円以下で買える音波式エントリー",
    "features": [
      "音波式をこの価格で",
      "USB充電対応で旅行にも",
      "過圧防止センサー付き",
      "電動歯ブラシデビューに最適"
    ],
    "amazon": "https://www.amazon.co.jp/dp/B0CZDVSHFD?tag=tanosiikitaic-22",
    "officialUrl": "https://www.documents.philips.com/assets/20220818/4d0b3cd08bbd4c20939daef5005959c1.pdf"
  },
  {
    "cat": "toothbrush",
    "maker": "ブラウン",
    "model": "オーラルB すみずみクリーン",
    "name": "オーラルB すみずみクリーン",
    "price": 3940,
    "size": [
      "s"
    ],
    "focus": {
      "quiet": 1,
      "power": 2,
      "care": 1,
      "eco": 3,
      "compact": 3,
      "multi": 1
    },
    "img": "https://tshop.r10s.jp/oralb-braun/cabinet/item/eb-scy_r/thumb/eb-scy_r_2408.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Foralb-braun%2Feb-scy_r%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Foralb-braun%2Feb-scy_r%2F",
    "point": "6千円以下の回転式入門機",
    "features": [
      "回転式のパワフル洗浄を手頃に",
      "替えブラシも安くて続けやすい",
      "シンプル操作",
      "まず試したい人にぴったり"
    ],
    "amazon": "https://www.amazon.co.jp/dp/B0C52HV6R4?tag=tanosiikitaic-22",
    "officialUrl": "https://www.oralb.braun.co.jp/ja-jp/product-collections/electric-toothbrushes/vitality"
  },
  {
    "cat": "toothbrush",
    "maker": "ブラウン",
    "model": "iOM10442ADCB",
    "name": "オーラルB iO10",
    "price": 40845,
    "size": [
      "s",
      "m",
      "l"
    ],
    "focus": {
      "quiet": 2,
      "power": 3,
      "care": 3,
      "eco": 1,
      "compact": 2,
      "multi": 3
    },
    "img": "https://tshop.r10s.jp/auc-worldichi/cabinet/11/4987176160720.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fauc-worldichi%2F4987176160720%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fauc-worldichi%2F4987176160720%2F",
    "point": "AIガイド付きの最上位フラッグシップ",
    "features": [
      "AIが磨き残しをリアルタイム表示",
      "歯ぐきの状態に合わせた圧力制御",
      "充電しながら除菌できるケース付き",
      "口腔ケアを極めたい人へ"
    ],
    "officialUrl": "https://www.oralb.braun.co.jp/ja-jp/products/electric-toothbrushes/oral-b-io-series-10-electric-toothbrush"
  },
  {
    "cat": "circulator",
    "maker": "バルミューダ",
    "model": "GreenFan C2",
    "name": "GreenFan C2 サーキュレーター",
    "price": 34100,
    "size": [
      "s",
      "m"
    ],
    "focus": {
      "quiet": 3,
      "power": 2,
      "care": 2,
      "eco": 2,
      "compact": 2,
      "multi": 2
    },
    "point": "静音と美しいデザインの高級サーキュレーター",
    "features": [
      "寝室でも気にならない静音性",
      "GreenFanの技術を活かした心地よい送風",
      "インテリアに溶け込むデザイン",
      "コンパクトで持ち運びやすい"
    ],
    "img": "https://tshop.r10s.jp/gbft-ltd/cabinet/image35/5z-fym8-dkvd_1.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Froomy%2Fmtb19jun27b01%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Froomy%2Fmtb19jun27b01%2F",
    "amazon": "https://www.amazon.co.jp/dp/B07T3KH7G4?tag=tanosiikitaic-22",
    "officialUrl": "https://www.balmuda.com/jp/greenfan-c2/spec"
  },
  {
    "cat": "circulator",
    "maker": "無印良品",
    "model": "MJ-OCFG06",
    "name": "360度首振りサーキュレーター 6畳",
    "price": 4990,
    "size": [
      "s"
    ],
    "focus": {
      "quiet": 2,
      "power": 1,
      "care": 2,
      "eco": 2,
      "compact": 3,
      "multi": 1
    },
    "point": "5,000円以下で買える無印のシンプル定番",
    "features": [
      "360度首振りで空気をまんべんなく循環",
      "飽きのこない無印デザイン",
      "6畳の個室にちょうどいい",
      "静音設計"
    ],
    "img": "https://tshop.r10s.jp/mujirushi-ryohin/cabinet/item34/4550584865336.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fmujirushi-ryohin%2F4550584865336%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fmujirushi-ryohin%2F4550584865336%2F",
    "officialUrl": "https://www.muji.com/jp/ja/store/cmdty/detail/4550584865336"
  },
  {
    "cat": "fan",
    "maker": "シャープ",
    "model": "PJ-S3DS",
    "name": "プラズマクラスター扇風機 DC",
    "price": 14780,
    "size": [
      "s",
      "m"
    ],
    "focus": {
      "quiet": 3,
      "power": 2,
      "care": 2,
      "eco": 3,
      "compact": 2,
      "multi": 1
    },
    "point": "プラズマクラスターで空気もきれいにするDC扇",
    "features": [
      "プラズマクラスター7000搭載",
      "DCモーターで静音・省エネ",
      "部屋干しの消臭にも活躍",
      "コスパの高い1.5万円以下"
    ],
    "img": "https://tshop.r10s.jp/e-kurashi/cabinet/main-img/020/main-t0h59.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ftatsumax%2Ftake-pjs3dsw%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Ftatsumax%2Ftake-pjs3dsw%2F",
    "officialUrl": "https://jp.sharp/pci_fan/products/pj-u3ds/spec/"
  },
  {
    "cat": "fan",
    "maker": "ドウシシャ",
    "model": "K-F28AY",
    "name": "カモメファン リビングファン",
    "price": 25300,
    "size": [
      "s",
      "m"
    ],
    "focus": {
      "quiet": 3,
      "power": 2,
      "care": 3,
      "eco": 2,
      "compact": 2,
      "multi": 2
    },
    "point": "カモメの羽根から生まれたやわらかい微風",
    "features": [
      "カモメの羽根を模した独自形状で自然な風",
      "業界トップクラスの静音性",
      "羽根が外せてお手入れ簡単",
      "コードレスでも使えるモデルあり"
    ],
    "img": "https://tshop.r10s.jp/doshisha-marche/cabinet/kamome/p10/k-f28ay-4700.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fdoshisha-marche%2Fk-f28ay%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fdoshisha-marche%2Fk-f28ay%2F",
    "amazon": "https://www.amazon.co.jp/dp/B0CCY1HRKZ?tag=tanosiikitaic-22",
    "officialUrl": "https://www.kamome-d.jp/kamomefan/k-f28ay/"
  },
  {
    "cat": "fan",
    "maker": "アイリスオーヤマ",
    "model": "LFD-307L",
    "name": "リモコン式DCリビング扇",
    "price": 7480,
    "size": [
      "s",
      "m"
    ],
    "focus": {
      "quiet": 2,
      "power": 2,
      "care": 2,
      "eco": 3,
      "compact": 2,
      "multi": 1
    },
    "point": "7千円台で買えるDC扇風機の最安級",
    "features": [
      "DCモーター搭載でこの価格",
      "風量調節も細かくできる",
      "リモコン・タイマー付き",
      "コスパ最優先ならこれ"
    ],
    "img": "https://tshop.r10s.jp/emedama/cabinet/4574/4967576774574_1.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fa-price%2F4967576774574%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fa-price%2F4967576774574%2F",
    "amazon": "https://www.amazon.co.jp/dp/B0F5PZN96T?tag=tanosiikitaic-22",
    "officialUrl": "https://www.irisohyama.co.jp/products/electrical-appliances/seasonal-appliances/tower-fan-fan/living-fan/remote-controlled-living-fan"
  },
  {
    "cat": "humidifier",
    "maker": "シャープ",
    "model": "HV-T55",
    "name": "プラズマクラスター加湿器",
    "price": 27800,
    "size": [
      "m"
    ],
    "focus": {
      "quiet": 2,
      "power": 2,
      "care": 3,
      "eco": 2,
      "compact": 1,
      "multi": 2
    },
    "point": "上からも注げる「どっちも給水」。ハイブリッド式で電気代も控えめ",
    "features": [
      "加湿量 強550mL/h／静音200mL/h・タンク約4.0L",
      "適用床面積 木造和室〜9畳／プレハブ洋室〜15畳",
      "上からも下からも注げる「どっちも給水」",
      "消費電力 強190W／静音12W／エコ強24W",
      "電気代 強 約5.9円/h・静音 約0.37円/h（31円/kWh）",
      "プラズマクラスター7000・連続加湿 強7.2h／静音19h"
    ],
    "img": "https://shop.r10s.jp/kabuozaki/cabinet/09052302/imgrc0126295884.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2F14promo%2F20240207-22500%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2F14promo%2F20240207-22500%2F",
    "amazon": "https://www.amazon.co.jp/dp/B0FPWXNQ3G?tag=tanosiikitaic-22",
    "officialUrl": "https://jp.sharp/kashitsu/products/hvt55/"
  },
  {
    "cat": "humidifier",
    "maker": "象印",
    "model": "EE-TB60",
    "name": "スチーム式加湿器 ハイパワー 4.0L",
    "price": 37480,
    "size": [
      "m",
      "l"
    ],
    "focus": {
      "quiet": 1,
      "power": 3,
      "care": 3,
      "eco": 1,
      "compact": 1,
      "multi": 2
    },
    "point": "広いリビング向けのハイパワースチーム式（600mL/h）",
    "features": [
      "定格加湿能力600mL/h・タンク約4.0L",
      "適用床面積 木造和室〜10畳／プレハブ洋室〜17畳",
      "連続加湿 強6h／中10h／弱20h",
      "弱（静音）モードは約30dB",
      "フィルター不要・広口容器でお手入れ簡単"
    ],
    "img": "https://tshop.r10s.jp/14promo/cabinet/imgrc0103853607.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2F14promo%2F20241226-39300%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2F14promo%2F20241226-39300%2F",
    "amazon": "https://www.amazon.co.jp/dp/B0FH9Q2RQG?tag=tanosiikitaic-22",
    "officialUrl": "https://www.zojirushi.co.jp/syohin/assets/cms/materials/catalog_humidifier.pdf"
  },
  {
    "cat": "dehumidifier",
    "maker": "パナソニック",
    "model": "F-YEX120B",
    "name": "エコ・ハイブリッド方式 衣類乾燥除湿機",
    "price": 69935,
    "size": [
      "m",
      "l"
    ],
    "focus": {
      "quiet": 2,
      "power": 3,
      "care": 2,
      "eco": 3,
      "compact": 1,
      "multi": 3
    },
    "point": "消費電力を約69%削減。1年中カラッと乾かす省エネ機",
    "features": [
      "エコ・ハイブリッド方式で除湿205W／225W(50/60Hz)",
      "定格除湿 10.5L／12.5L日(50/60Hz)",
      "約2kgの洗濯物を速乾90分(梅雨時)",
      "ナノイーX 48兆・ツインルーバー",
      "タンク約3.2L・連続排水に対応",
      "583×370×225mm・13.0kg"
    ],
    "img": "https://tshop.r10s.jp/ec-current/cabinet/9111/4549980784358.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fec-current%2F4549980784358%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fec-current%2F4549980784358%2F",
    "amazon": "https://www.amazon.co.jp/dp/B0D1764L6D?tag=tanosiikitaic-22",
    "officialUrl": "https://panasonic.jp/catalog/ctlg/dehumidifier/dehumidifier.pdf"
  },
  {
    "cat": "dehumidifier",
    "maker": "シャープ",
    "model": "CV-SH150",
    "name": "ハイブリッド式除湿機 プラズマクラスター",
    "price": 44580,
    "size": [
      "m",
      "l"
    ],
    "focus": {
      "quiet": 2,
      "power": 3,
      "care": 2,
      "eco": 2,
      "compact": 1,
      "multi": 2
    },
    "point": "夏も冬も使える年中速乾タイプ",
    "features": [
      "ハイブリッド式で季節を問わず速乾",
      "プラズマクラスターで生乾き臭対策",
      "大能力でファミリーの部屋干しに",
      "移動しやすいキャスター付き"
    ],
    "img": "https://tshop.r10s.jp/hikaritv/cabinet/plala/200/01261/2000126164_k.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fworld-free-store%2F4550556131353%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fworld-free-store%2F4550556131353%2F",
    "amazon": "https://www.amazon.co.jp/dp/B0D73J1QX7?tag=tanosiikitaic-22",
    "officialUrl": "https://jp.sharp/joshitsu/products/cvsh150/"
  },
  {
    "cat": "dehumidifier",
    "maker": "アイリスオーヤマ",
    "model": "IJD-I50",
    "name": "サーキュレーター衣類乾燥除湿機",
    "price": 19800,
    "size": [
      "s",
      "m"
    ],
    "focus": {
      "quiet": 1,
      "power": 2,
      "care": 2,
      "eco": 3,
      "compact": 2,
      "multi": 3
    },
    "point": "送風+除湿のW効果で部屋干しが早く乾く",
    "features": [
      "サーキュレーターと除湿機の1台2役",
      "風を直接当てて部屋干しを時短",
      "楽天ランキング常連の人気機",
      "1万円台の手頃な価格"
    ],
    "img": "https://tshop.r10s.jp/irisplaza-r/cabinet/12113165/imgrc0112889968.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Firisplaza-r%2F274018%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Firisplaza-r%2F274018%2F",
    "amazon": "https://www.amazon.co.jp/dp/B07RVT4BK3?tag=tanosiikitaic-22",
    "officialUrl": "https://www.irisohyama.co.jp/products/electrical-appliances/seasonal-appliances/dehumidifier/dehumidifier-with-circulator/circulator-clothes-drying-dehumidifier"
  },
  {
    "cat": "purifier",
    "maker": "ダイキン",
    "model": "MCK706A",
    "name": "加湿ストリーマ空気清浄機",
    "price": 58300,
    "size": [
      "m",
      "l"
    ],
    "focus": {
      "quiet": 2,
      "power": 3,
      "care": 3,
      "eco": 2,
      "compact": 1,
      "multi": 3
    },
    "point": "ツインストリーマ搭載、加湿700mL/hの31畳対応モデル",
    "features": [
      "適用床面積 31畳・8畳を9分で清浄",
      "加湿量700mL/h・タンク約3.4L",
      "ツインストリーマとPM2.5センサー搭載",
      "スマホ接続・エアコン連動に対応"
    ],
    "img": "https://tshop.r10s.jp/niche-express/cabinet/2025/dkn/01/dkn00000000067-01.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fniche-express%2Fdkn00000000067%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fniche-express%2Fdkn00000000067%2F",
    "amazon": "https://www.amazon.co.jp/dp/B0FLWHV6KG?tag=tanosiikitaic-22",
    "officialUrl": "https://www.ac.daikin.co.jp/cleanair/hg"
  },
  {
    "cat": "purifier",
    "maker": "Levoit",
    "model": "Core 300S",
    "name": "スマート空気清浄機",
    "price": 17980,
    "size": [
      "s"
    ],
    "focus": {
      "quiet": 3,
      "power": 2,
      "care": 2,
      "eco": 3,
      "compact": 3,
      "multi": 3
    },
    "point": "静音・スマホ連携のコンパクト機",
    "features": [
      "最小24dBの静音運転",
      "スマホアプリ・音声操作対応",
      "コンパクトで寝室・個室向き",
      "世界的に人気の新興ブランド"
    ],
    "img": "https://tshop.r10s.jp/ryohinseikatsukan/cabinet/levoit-od/05.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fryohinseikatsukan%2Ftsuhan-123-c300s%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fryohinseikatsukan%2Ftsuhan-123-c300s%2F",
    "amazon": "https://www.amazon.co.jp/dp/B092D322HR?tag=tanosiikitaic-22",
    "officialUrl": "https://vesync.jp/products/levoit-airpurifier-core-300s"
  },
  {
    "cat": "purifier",
    "maker": "ブルーエア",
    "model": "Blue Max 3250i",
    "name": "Blue Max 3250i 空気清浄機",
    "price": 27500,
    "size": [
      "s",
      "m"
    ],
    "focus": {
      "quiet": 2,
      "power": 3,
      "care": 2,
      "eco": 2,
      "compact": 2,
      "multi": 2
    },
    "point": "北欧ブランドの高性能フィルター",
    "features": [
      "微細粒子まで捕集する高性能フィルター",
      "オートモードで自動運転",
      "北欧デザインで置き場所を選ばない",
      "花粉・PM2.5対策に強い"
    ],
    "img": "https://tshop.r10s.jp/blueair/cabinet/airpurifiers/new_thum/b-110157.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fblueair%2Fb-110157%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fblueair%2Fb-110157%2F",
    "amazon": "https://www.amazon.co.jp/dp/B0G81FHVBL?tag=tanosiikitaic-22",
    "officialUrl": "https://store.blueair.jp/category/BLUE_MAX/110157.html"
  },
  {
    "cat": "vacuum",
    "maker": "パナソニック",
    "model": "MC-NS10KE",
    "name": "セパレート型コードレス掃除機",
    "price": 58168,
    "size": [
      "s",
      "m"
    ],
    "focus": {
      "quiet": 2,
      "power": 2,
      "care": 3,
      "eco": 2,
      "compact": 2,
      "multi": 3
    },
    "point": "ゴミ捨て自動、クリーンドックで手間いらず",
    "features": [
      "ドックに戻すだけで自動ゴミ収集",
      "本体はスリムで超軽量",
      "紙パック式でゴミ捨ての手間最小",
      "スキマ時間掃除に最適"
    ],
    "img": "https://tshop.r10s.jp/panasonic-store/cabinet/itemimg01/mc-ns10ke_00_v2.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fpanasonic-store%2Fmc-ns10ke-k%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fpanasonic-store%2Fmc-ns10ke-k%2F",
    "amazon": "https://www.amazon.co.jp/dp/B0CN27SVQ9?tag=tanosiikitaic-22",
    "officialUrl": "https://panasonic.jp/soji/products/MC-NS10KE.html"
  },
  {
    "cat": "vacuum",
    "maker": "日立",
    "model": "PV-BL50L",
    "name": "パワかるスティック",
    "price": 37628,
    "size": [
      "m",
      "l"
    ],
    "focus": {
      "quiet": 2,
      "power": 3,
      "care": 2,
      "eco": 3,
      "compact": 1,
      "multi": 2
    },
    "point": "軽さとパワーを両立した日立の上位機",
    "features": [
      "軽量ボディに強力モーター",
      "2Wayでハンディとしても使える",
      "自走式ヘッドでラクに進む",
      "ごみくっきりライト搭載"
    ],
    "img": "https://tshop.r10s.jp/townland/cabinet/clenar/pv-bl50l-n-1-1.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ftry3%2F4549873185460%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Ftry3%2F4549873185460%2F",
    "amazon": "https://www.amazon.co.jp/dp/B0CP1HDHD7?tag=tanosiikitaic-22",
    "officialUrl": "https://kadenfan.hitachi.co.jp/clean/lineup/pv-bl50l/"
  },
  {
    "cat": "vacuum",
    "maker": "マキタ",
    "model": "CL107FDSHW",
    "name": "充電式クリーナー",
    "price": 15910,
    "size": [
      "s",
      "m"
    ],
    "focus": {
      "quiet": 2,
      "power": 1,
      "care": 2,
      "eco": 3,
      "compact": 3,
      "multi": 1
    },
    "point": "サッと使える軽さでプロにも人気の定番",
    "features": [
      "約1.1kgの軽量ボディ",
      "紙パック式でゴミ捨て簡単",
      "バッテリーは工具と共用可能",
      "2万円以下のロングセラー"
    ],
    "img": "https://tshop.r10s.jp/yamamura/cabinet/point3/cl107fdshw-main.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fyamamura%2Fcl107fdshw01%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fyamamura%2Fcl107fdshw01%2F",
    "amazon": "https://www.amazon.co.jp/dp/B01LWLI39X?tag=tanosiikitaic-22",
    "officialUrl": "https://www.makita.co.jp/product/detail/?model=CL107FD"
  },
  {
    "cat": "robot",
    "maker": "SwitchBot",
    "model": "K11+",
    "name": "ロボット掃除機 K11+",
    "price": 39800,
    "size": [
      "s"
    ],
    "focus": {
      "quiet": 3,
      "power": 3,
      "care": 3,
      "eco": 2,
      "compact": 3,
      "multi": 3
    },
    "point": "世界最小クラスがさらにパワフルに、狭い部屋・家具の多い家に",
    "features": [
      "6000Paの強力吸引（前モデルの2倍）",
      "直径24.8cmの世界最小クラス",
      "静音設計（最小45dB）で夜も使いやすい",
      "ゴミ収集ドック付きで一人暮らしのワンルームに最適"
    ],
    "img": "https://image.rakuten.co.jp/biccamera/cabinet/product/13219/00000014193275_a01.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fbiccamera.rakuten.co.jp%2Fitem%2F0810150544824&m=https%3A%2F%2Fbiccamera.rakuten.co.jp%2Fitem%2F0810150544824",
    "amazon": "https://www.amazon.co.jp/dp/B0F8VWZ2J6?tag=tanosiikitaic-22",
    "officialUrl": "https://www.switchbot.jp/products/switchbot-robot-vacuum-cleaner-k11"
  },
  {
    "cat": "robot",
    "maker": "アイロボット",
    "model": "Roomba 105 Combo",
    "name": "ルンバ 105 Combo",
    "price": 39761,
    "size": [
      "s",
      "m"
    ],
    "focus": {
      "quiet": 2,
      "power": 2,
      "care": 2,
      "eco": 3,
      "compact": 2,
      "multi": 2
    },
    "point": "吸引+水拭きの入門ルンバ",
    "features": [
      "吸引と水拭きの1台2役",
      "信頼のルンバブランドを手頃に",
      "アプリで掃除スケジュール管理",
      "初めてのロボット掃除機に"
    ],
    "img": "https://tshop.r10s.jp/irobotstore/cabinet/03016688/20260719_marathon/260719_105c_tm.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Firobotstore%2Fy31%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Firobotstore%2Fy31%2F",
    "amazon": "https://www.amazon.co.jp/dp/B0F1FCG28P?tag=tanosiikitaic-22",
    "officialUrl": "https://store.irobot-jp.com/item/Y311260.html"
  },
  {
    "cat": "ricecooker",
    "maker": "象印",
    "model": "NW-FC10",
    "name": "炎舞炊き 圧力IH 5.5合",
    "price": 109800,
    "size": [
      "m",
      "l"
    ],
    "focus": {
      "quiet": 2,
      "power": 3,
      "care": 2,
      "eco": 1,
      "compact": 1,
      "multi": 3
    },
    "point": "象印最高峰、炎のゆらぎで炊く極上ごはん",
    "features": [
      "ローテーションIHで炎のゆらぎを再現",
      "圧力IHの最上位モデル",
      "炊き分け圧力でメニュー豊富",
      "ごはんの甘み・粒立ちが別格"
    ],
    "img": "https://tshop.r10s.jp/akindo/cabinet/l41/nw-fc10-bz.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fakindo%2Fnw-fc10-bz%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fakindo%2Fnw-fc10-bz%2F",
    "amazon": "https://www.amazon.co.jp/dp/B0D4D95VKD?tag=tanosiikitaic-22",
    "officialUrl": "https://www.zojirushi.co.jp/syohin/assets/cms/materials/catalog_rice.pdf"
  },
  {
    "cat": "ricecooker",
    "maker": "象印",
    "model": "NP-GS05",
    "name": "IH炊飯ジャー 3合",
    "price": 16580,
    "size": [
      "s"
    ],
    "focus": {
      "quiet": 2,
      "power": 2,
      "care": 2,
      "eco": 3,
      "compact": 3,
      "multi": 1
    },
    "point": "一人暮らしにちょうどいい3合IH",
    "features": [
      "3合サイズで少量でもおいしく炊ける",
      "IH加熱でマイコンより格上の炊き上がり",
      "コンパクトで置き場所に困らない",
      "ランキング上位の定番3合機"
    ],
    "img": "https://tshop.r10s.jp/a-price/cabinet/mailmaga/08814302/12654252/4974305231390.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fa-price%2F4974305231390%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fa-price%2F4974305231390%2F",
    "amazon": "https://www.amazon.co.jp/dp/B0FH6BW4Q3?tag=tanosiikitaic-22",
    "officialUrl": "https://www.zojirushi.co.jp/syohin/rice/ricecooker/np-gs/"
  },
  {
    "cat": "kettle",
    "maker": "バルミューダ",
    "model": "The Pot KPT03JP",
    "name": "BALMUDA The Pot 0.55L",
    "price": 13293,
    "size": [
      "s"
    ],
    "focus": {
      "quiet": 2,
      "power": 2,
      "care": 2,
      "eco": 1,
      "compact": 3,
      "multi": 1
    },
    "point": "ドリップに最適なノズルと美しいデザイン",
    "features": [
      "コーヒードリップに最適な細口ノズル",
      "手元を照らすランプ付き",
      "キッチンに映えるデザイン",
      "0.55Lの1〜2人用サイズ"
    ],
    "img": "https://tshop.r10s.jp/kazamidori/cabinet/products26/4560330113307.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fd-shop1one%2F4560330113307%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fd-shop1one%2F4560330113307%2F",
    "amazon": "https://www.amazon.co.jp/dp/B0CWKD99QV?tag=tanosiikitaic-22",
    "officialUrl": "https://www.balmuda.com/jp/pot/spec"
  },
  {
    "cat": "kettle",
    "maker": "デロンギ",
    "model": "アイコナ",
    "name": "アイコナ 電気ケトル 1.0L",
    "price": 9980,
    "size": [
      "s",
      "m"
    ],
    "focus": {
      "quiet": 2,
      "power": 2,
      "care": 2,
      "eco": 2,
      "compact": 2,
      "multi": 1
    },
    "point": "キッチンが華やぐイタリアンデザイン",
    "features": [
      "レトロで華やかなデザイン",
      "1.0Lで日常使いにちょうどいい",
      "注ぎやすい注ぎ口",
      "ギフトにも人気"
    ],
    "img": "https://tshop.r10s.jp/delonghi/cabinet/06618479/item/0210100062/0210100062_01.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fdelonghi%2F0210100061%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fdelonghi%2F0210100061%2F",
    "amazon": "https://www.amazon.co.jp/dp/B0GX8B7VXQ?tag=tanosiikitaic-22"
  },
  {
    "cat": "kettle",
    "maker": "ラッセルホブス",
    "model": "カフェケトル",
    "name": "カフェケトル ステンレス",
    "price": 11000,
    "size": [
      "s",
      "m"
    ],
    "focus": {
      "quiet": 2,
      "power": 3,
      "care": 2,
      "eco": 2,
      "compact": 2,
      "multi": 1
    },
    "point": "注ぎやすさに定評のあるステンレスケトル",
    "features": [
      "湯量をコントロールしやすい注ぎ口",
      "保温性の高いステンレス構造",
      "沸騰が速い",
      "カフェのような佇まい"
    ],
    "img": "https://tshop.r10s.jp/toolandmeal/cabinet/item/12048751/00081655_th_05.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ftoolandmeal%2F10017263%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Ftoolandmeal%2F10017263%2F",
    "amazon": "https://www.amazon.co.jp/dp/B09F2RBJVQ?tag=tanosiikitaic-22"
  },
  {
    "cat": "dryer",
    "maker": "リファ",
    "model": "ビューテック ドライヤースマート",
    "name": "ReFa BEAUTECH DRYER SMART",
    "price": 40000,
    "size": [
      "s",
      "m"
    ],
    "focus": {
      "quiet": 2,
      "power": 2,
      "care": 3,
      "eco": 2,
      "compact": 2,
      "multi": 3
    },
    "point": "サロン級の仕上がり、美容室でも採用",
    "features": [
      "プロセンシングで熱ダメージを抑制",
      "サロン帰りのようなツヤ髪に",
      "軽量コンパクトで海外対応",
      "美容感度の高い人に人気"
    ],
    "img": "https://tshop.r10s.jp/mtgec-beauty/cabinet/refa/refa_dryer_smart_w/imgrc0128428312.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fmtgec-beauty%2F1382920101%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fmtgec-beauty%2F1382920101%2F",
    "amazon": "https://www.amazon.co.jp/dp/B0FQ4Y2169?tag=tanosiikitaic-22",
    "officialUrl": "https://www.refa.net/item/refa_beautech_dryer_smart/"
  },
  {
    "cat": "dryer",
    "maker": "シャープ",
    "model": "IB-NP9",
    "name": "プラズマクラスタードライヤー",
    "price": 11000,
    "size": [
      "s",
      "m",
      "l"
    ],
    "focus": {
      "quiet": 2,
      "power": 2,
      "care": 3,
      "eco": 3,
      "compact": 2,
      "multi": 1
    },
    "point": "1万円前後でケア機能付きのコスパ機",
    "features": [
      "プラズマクラスターで髪の静電気を抑制",
      "大風量で速乾",
      "1万円前後の手頃な価格",
      "家族で使いやすいバランス型"
    ],
    "img": "https://tshop.r10s.jp/shopch-r/cabinet/item/ele/4000765255001/4000765255001-1.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fshopch-r%2F4000765255001%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fshopch-r%2F4000765255001%2F",
    "amazon": "https://www.amazon.co.jp/dp/B0B5Q5J9HR?tag=tanosiikitaic-22",
    "officialUrl": "https://jp.sharp/beauty/products/ibnp9/"
  },
  {
    "cat": "dryer",
    "maker": "サロニア",
    "model": "スピーディーイオンドライヤー SL-013",
    "name": "スピーディーイオンドライヤー",
    "price": 5360,
    "size": [
      "s",
      "m",
      "l"
    ],
    "focus": {
      "quiet": 1,
      "power": 3,
      "care": 1,
      "eco": 3,
      "compact": 2,
      "multi": 1
    },
    "point": "5千円台の大風量、SNSでも人気",
    "features": [
      "大風量でとにかく速く乾く",
      "マイナスイオン搭載",
      "5千円台の圧倒的コスパ",
      "シンプルでおしゃれなデザイン"
    ],
    "img": "https://tshop.r10s.jp/beautyeveryday/cabinet/heakea/11920277/salonia-iondryer3.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbeautyeveryday%2F4582267399890%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fbeautyeveryday%2F4582267399890%2F",
    "amazon": "https://www.amazon.co.jp/dp/B0DYNWMQ7F?tag=tanosiikitaic-22",
    "officialUrl": "https://salonia.jp/product/hair/dryerbrush/dryer/"
  },
  {
    "cat": "toothbrush",
    "maker": "パナソニック",
    "model": "EW-DP38",
    "name": "ドルツ 音波振動ハブラシ",
    "price": 26975,
    "size": [
      "s",
      "m"
    ],
    "focus": {
      "quiet": 2,
      "power": 3,
      "care": 3,
      "eco": 1,
      "compact": 2,
      "multi": 3
    },
    "point": "ヨコ磨き対応、日本メーカーの上位モデル",
    "features": [
      "歯科医推奨のヨコ磨きを再現",
      "極細毛ブラシで歯周ポケットをケア",
      "W音波振動でパワフル洗浄",
      "日本メーカーの安心感"
    ],
    "img": "https://shop.r10s.jp/edion/cabinet/goods/ll/img_363/4550719010105_1.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fedion%2F4550719010105%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fedion%2F4550719010105%2F",
    "amazon": "https://www.amazon.co.jp/dp/B0FKFQZ2TW?tag=tanosiikitaic-22",
    "officialUrl": "https://panasonic.jp/teeth/products/EW-DP38.html"
  },
  {
    "cat": "toothbrush",
    "maker": "オムロン",
    "model": "HT-B304",
    "name": "音波式電動歯ブラシ",
    "price": 3580,
    "size": [
      "s"
    ],
    "focus": {
      "quiet": 3,
      "power": 1,
      "care": 2,
      "eco": 3,
      "compact": 3,
      "multi": 1
    },
    "point": "約46gの超軽量、初めての1本に",
    "features": [
      "約46gで手磨き感覚の軽さ",
      "4千円以下で音波式デビュー",
      "替えブラシが安く続けやすい",
      "持ち運びにも便利"
    ],
    "img": "https://tshop.r10s.jp/townland-neo/cabinet/dendouhaburasi/ht-b304-w-1-1.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ftownland-neo%2Fy-ht-b304-w%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Ftownland-neo%2Fy-ht-b304-w%2F",
    "amazon": "https://www.amazon.co.jp/dp/B07HNH255V?tag=tanosiikitaic-22",
    "officialUrl": "https://store.healthcare.omron.co.jp/item/HT_B304_W.html"
  },
  {
    "cat": "circulator",
    "maker": "siroca",
    "model": "SF-C151",
    "name": "DC サーキュレーター扇風機",
    "price": 9980,
    "size": [
      "s",
      "m"
    ],
    "focus": {
      "quiet": 3,
      "power": 2,
      "care": 2,
      "eco": 3,
      "compact": 2,
      "multi": 1
    },
    "point": "扇風機にもなる背高サーキュレーター",
    "features": [
      "サーキュレーターと扇風機の1台2役",
      "DCモーターで静音・省エネ",
      "高さがあり扇風機として自然に使える",
      "シロカ公式ストアで購入可"
    ],
    "img": "https://tshop.r10s.jp/siroca/cabinet/sf-c151/thumb_sf-c151w_p2.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fsiroca%2Fsf-c151%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fsiroca%2Fsf-c151%2F",
    "amazon": "https://www.amazon.co.jp/dp/B086PGT5KC?tag=tanosiikitaic-22",
    "officialUrl": "https://www.siroca.co.jp/product/dccirculatorfan_sf-c151/"
  },
  {
    "cat": "fan",
    "maker": "東芝",
    "model": "TF-30DL29",
    "name": "DCリモコン扇風機",
    "price": 12597,
    "size": [
      "s",
      "m"
    ],
    "focus": {
      "quiet": 3,
      "power": 2,
      "care": 2,
      "eco": 3,
      "compact": 2,
      "multi": 1
    },
    "point": "老舗東芝の安定した静音DC扇",
    "features": [
      "DCモーターでなめらかな風量調整",
      "静音性に優れ寝室でも快適",
      "リモコン・タイマー付き",
      "信頼の国内老舗ブランド"
    ],
    "img": "https://tshop.r10s.jp/ec-current/cabinet/9201/4904530144356.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fec-current%2F4904530144356%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fec-current%2F4904530144356%2F",
    "officialUrl": "https://www.toshiba-lifestyle.com/jp/fans/"
  },
  {
    "cat": "fan",
    "maker": "ダイソン",
    "model": "Purifier Cool Gen1",
    "name": "Dyson Purifier Cool 空気清浄ファン",
    "price": 35800,
    "size": [
      "s",
      "m",
      "l"
    ],
    "focus": {
      "quiet": 2,
      "power": 2,
      "care": 3,
      "eco": 1,
      "compact": 2,
      "multi": 3
    },
    "point": "空気清浄機能付きの羽根なしファン",
    "features": [
      "扇風機と空気清浄機の1台2役",
      "羽根がなく掃除も安全性も安心",
      "HEPAフィルターで微細粒子を捕集",
      "夏以外も空気清浄機として活躍"
    ],
    "img": "https://tshop.r10s.jp/e-kurashi/cabinet/main-img/021/main-s4f79.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fe-kurashi%2Fs4f79%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fe-kurashi%2Fs4f79%2F",
    "amazon": "https://www.amazon.co.jp/dp/B0CZ9JDLF2?tag=tanosiikitaic-22",
    "officialUrl": "https://www.dyson.co.jp/air-treatment/purifiers/purifier-cool-gen1/white-white"
  },
  {
    "cat": "humidifier",
    "maker": "ダイニチ",
    "model": "HD-LX1025",
    "name": "ハイブリッド式加湿器 LX TYPE",
    "price": 41580,
    "size": [
      "l"
    ],
    "focus": {
      "quiet": 3,
      "power": 3,
      "care": 3,
      "eco": 2,
      "compact": 1,
      "multi": 3
    },
    "point": "大容量×静音×お手入れ簡単の最上位",
    "features": [
      "広いリビング向けの大加湿量",
      "業界トップクラスの静音性",
      "タンク・トレイが洗いやすい設計",
      "加湿器シェア上位ダイニチの上位機"
    ],
    "img": "https://tshop.r10s.jp/ksdenki/cabinet/images/81_5/4951272036081_5.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fksdenki%2F4951272036081%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fksdenki%2F4951272036081%2F",
    "officialUrl": "https://www.dainichi-net.co.jp/products/humidifier/lineup/lx2025/"
  },
  {
    "cat": "humidifier",
    "maker": "BRUNO",
    "model": "ハイブリッド加湿器 4.7L",
    "name": "ハイブリッドUV加湿器 4.7L",
    "price": 15814,
    "size": [
      "s",
      "m"
    ],
    "focus": {
      "quiet": 2,
      "power": 2,
      "care": 2,
      "eco": 2,
      "compact": 2,
      "multi": 1
    },
    "point": "インテリアに映えるおしゃれ加湿器",
    "features": [
      "デザイン家電ブランドBRUNOの人気作",
      "4.7Lタンクで給水回数が少ない",
      "ハイブリッド式で効率よく加湿",
      "公式ストアで購入可"
    ],
    "img": "https://tshop.r10s.jp/bruno-official/cabinet/item/2025_2/7761193_main1.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fdelta23%2Fdl86cce2163a%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fdelta23%2Fdl86cce2163a%2F",
    "officialUrl": "https://bruno-onlineshop.com/item/07761193.html"
  },
  {
    "cat": "dehumidifier",
    "maker": "山善",
    "model": "YDC-H601",
    "name": "衣類乾燥除湿機 6L/日",
    "price": 16280,
    "size": [
      "s",
      "m"
    ],
    "focus": {
      "quiet": 2,
      "power": 2,
      "care": 2,
      "eco": 3,
      "compact": 2,
      "multi": 1
    },
    "point": "6L/日をコンパクト筐体で。部屋干し対策の入門機",
    "features": [
      "コンプレッサー式・除湿能力 5L/6L(50/60Hz)",
      "衣類モードで約2kgを約197分",
      "タンク4.5L・キャスター付き",
      "湿度40〜70%を5%刻みで設定"
    ],
    "img": "https://tshop.r10s.jp/lamd/cabinet/image154/455053314631_1.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Flamd%2F4550533146318%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Flamd%2F4550533146318%2F",
    "amazon": "https://www.amazon.co.jp/dp/B0F4KHNVBT?tag=tanosiikitaic-22",
    "officialUrl": "https://book.yamazen.co.jp/product/detail/I00008838"
  },
  {
    "cat": "vacuum",
    "maker": "シャーク",
    "model": "EVOPOWER WV416J",
    "name": "EVOPOWER ハンディクリーナー",
    "price": 15840,
    "size": [
      "s"
    ],
    "focus": {
      "quiet": 2,
      "power": 2,
      "care": 3,
      "eco": 3,
      "compact": 3,
      "multi": 1
    },
    "point": "サッと使える人気No.1級ハンディ",
    "features": [
      "机・車・ソファの「ちょい掃除」に最適",
      "スティック掃除機との2台持ちにも",
      "充電ドックでいつでも満充電",
      "シャーク公式ストアで購入可"
    ],
    "img": "https://tshop.r10s.jp/shark/cabinet/renamethum/p00/wv416j_bs.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fshark%2Fwv416j-xkitmtwut400j%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fshark%2Fwv416j-xkitmtwut400j%2F",
    "amazon": "https://www.amazon.co.jp/dp/B0C1NSHW31?tag=tanosiikitaic-22",
    "officialUrl": "https://www.sharkninja.jp/products/wv416j"
  },
  {
    "cat": "vacuum",
    "maker": "東芝",
    "model": "トルネオ コードレス",
    "name": "トルネオ コードレススティック",
    "price": 39800,
    "size": [
      "m",
      "l"
    ],
    "focus": {
      "quiet": 2,
      "power": 3,
      "care": 2,
      "eco": 2,
      "compact": 1,
      "multi": 2
    },
    "point": "遠心分離で吸引力が持続するトルネオ",
    "features": [
      "サイクロンの遠心分離でパワー持続",
      "ゴミ捨てワンタッチ",
      "自走式ヘッドで軽い操作感",
      "国内メーカーの安心感"
    ],
    "img": "https://tshop.r10s.jp/denkichiweb/cabinet/12405600/4904530134388_1.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fdenkichiweb%2F4904530134388%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fdenkichiweb%2F4904530134388%2F",
    "amazon": "https://www.amazon.co.jp/dp/B0FYN7ZCLY?tag=tanosiikitaic-22"
  },
  {
    "cat": "vacuum",
    "maker": "ツインバード",
    "model": "TC-E124",
    "name": "サイクロンスティック掃除機",
    "price": 5980,
    "size": [
      "s"
    ],
    "focus": {
      "quiet": 1,
      "power": 1,
      "care": 2,
      "eco": 3,
      "compact": 3,
      "multi": 1
    },
    "point": "5千円以下で買える自立式スティック",
    "features": [
      "圧倒的な低価格",
      "自立式で収納いらず",
      "軽量でサッと使える",
      "一人暮らしのサブ機にも"
    ],
    "img": "https://tshop.r10s.jp/a-price/cabinet/orj/36/0-4975058513528.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ftwinbird%2F51241%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Ftwinbird%2F51241%2F",
    "amazon": "https://www.amazon.co.jp/dp/B09GTMV4LY?tag=tanosiikitaic-22",
    "officialUrl": "https://store.twinbird.jp/products/tce124"
  },
  {
    "cat": "robot",
    "maker": "エコバックス",
    "model": "DEEBOT N20 PRO PLUS",
    "name": "DEEBOT N20 PRO PLUS ロボット掃除機",
    "price": 29800,
    "size": [
      "s",
      "m"
    ],
    "focus": {
      "quiet": 2,
      "power": 3,
      "care": 3,
      "eco": 3,
      "compact": 2,
      "multi": 3
    },
    "point": "3万円台で自動ゴミ収集付きの高コスパ",
    "features": [
      "8000Paの強力吸引",
      "自動ゴミ収集ステーション付き",
      "吸引+水拭き対応",
      "エコバックス公式ストアで購入可"
    ],
    "img": "https://tshop.r10s.jp/store-ecovacs-japan/cabinet/campaign/260717/dkx55-12ee.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fstore-ecovacs-japan%2Fdkx55-12ee%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fstore-ecovacs-japan%2Fdkx55-12ee%2F",
    "amazon": "https://www.amazon.co.jp/dp/B0D45R4YVL?tag=tanosiikitaic-22",
    "officialUrl": "https://www.ecovacs.com/jp/shop/deebot-robotic-vacuum-cleaner/deebot-n20-pro-plus"
  },
  {
    "cat": "ricecooker",
    "maker": "日立",
    "model": "RZ-V100JM",
    "name": "圧力&スチームIH炊飯器 ふっくら御膳 RZ-V100JM 5.5合",
    "price": 33330,
    "size": [
      "m",
      "l"
    ],
    "focus": {
      "quiet": 2,
      "power": 3,
      "care": 2,
      "eco": 2,
      "compact": 1,
      "multi": 2
    },
    "point": "圧力とスチームで外硬内軟の炊き上がり",
    "features": [
      "圧力＋スチームの合わせ技",
      "蒸気カットで置き場所を選ばない",
      "少量でもおいしく炊ける",
      "日立の人気シリーズ"
    ],
    "img": "https://shop.r10s.jp/ai-corporation/cabinet/compass1751975060.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fselect-rainbow%2F4549873213699%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fselect-rainbow%2F4549873213699%2F",
    "amazon": "https://www.amazon.co.jp/dp/B0FC655FF7?tag=tanosiikitaic-22",
    "officialUrl": "https://kadenfan.hitachi.co.jp/kitchen/lineup/rzv100jm/"
  },
  {
    "cat": "ricecooker",
    "maker": "東芝",
    "model": "RC-10VRV",
    "name": "真空IH炊飯器 銅かまど 5.5合",
    "price": 23800,
    "size": [
      "m",
      "l"
    ],
    "focus": {
      "quiet": 2,
      "power": 2,
      "care": 2,
      "eco": 3,
      "compact": 1,
      "multi": 2
    },
    "point": "真空技術でお米の芯まで吸水",
    "features": [
      "真空ひたしで甘み・うまみを引き出す",
      "真空保温で40時間おいしさキープ",
      "銅かまど釜の高火力",
      "保温重視の家庭に最適"
    ],
    "img": "https://tshop.r10s.jp/superdeal/cabinet/yamada/2024/11424131/4904530120107_00.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fsuperdeal%2F14542rc10vrv2411%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fsuperdeal%2F14542rc10vrv2411%2F",
    "amazon": "https://www.amazon.co.jp/dp/B0DNY7TZZG?tag=tanosiikitaic-22",
    "officialUrl": "https://www.toshiba-lifestyle.com/jp/rice-cookers/rc-10vrv/spec/"
  },
  {
    "cat": "ricecooker",
    "maker": "山善",
    "model": "マイコン炊飯器 3合",
    "name": "マイコン炊飯器 3合",
    "price": 5980,
    "size": [
      "s"
    ],
    "focus": {
      "quiet": 2,
      "power": 1,
      "care": 2,
      "eco": 3,
      "compact": 3,
      "multi": 1
    },
    "point": "6千円以下、初めての1台に",
    "features": [
      "圧倒的な低価格",
      "3合で一人暮らしにぴったり",
      "シンプル操作で迷わない",
      "山善公式ストアで購入可"
    ],
    "img": "https://tshop.r10s.jp/e-kurashi/cabinet/main-img/020/main-t0f25.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fe-kurashi%2F33518%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fe-kurashi%2F33518%2F"
  },
  {
    "cat": "kettle",
    "maker": "タイガー",
    "model": "PCM-N080",
    "name": "省スチーム電気ケトル わく子 0.8L",
    "price": 4980,
    "size": [
      "s",
      "m"
    ],
    "focus": {
      "quiet": 3,
      "power": 2,
      "care": 2,
      "eco": 3,
      "compact": 3,
      "multi": 1
    },
    "point": "蒸気を抑えた安全設計のコンパクトケトル",
    "features": [
      "蒸気をほとんど出さない省スチーム設計",
      "転倒お湯もれ防止など安全設計",
      "カップ1杯が約60秒のスピード沸騰",
      "1300W・容量0.8L"
    ],
    "img": "https://tshop.r10s.jp/tiger-online/cabinet/pcm-n080_ra260710.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ftiger-online%2Fpcm-a080%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Ftiger-online%2Fpcm-a080%2F",
    "amazon": "https://www.amazon.co.jp/s?k=%E3%82%BF%E3%82%A4%E3%82%AC%E3%83%BC%20PCM-N080&tag=tanosiikitaic-22",
    "officialUrl": "https://www.tiger-corporation.com/ja/jpn/product/kettle-pot/pcm-n/"
  },
  {
    "cat": "kettle",
    "maker": "ハリオ",
    "model": "ECK-80",
    "name": "コーヒーケトル エレクトリック",
    "price": 22800,
    "size": [
      "s"
    ],
    "focus": {
      "quiet": 2,
      "power": 3,
      "care": 2,
      "eco": 1,
      "compact": 3,
      "multi": 2
    },
    "point": "ドリップ特化、コーヒー好きの本命",
    "features": [
      "湯量を操りやすい細口ノズル",
      "コーヒー器具の名門ハリオ製",
      "温度にこだわる抽出に対応",
      "デザイン性も高い"
    ],
    "img": "https://tshop.r10s.jp/interior-palette/cabinet/maker_hario3/472408ip.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Finterior-palette%2F472408%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Finterior-palette%2F472408%2F",
    "amazon": "https://www.amazon.co.jp/dp/B0DSHTKFHH?tag=tanosiikitaic-22",
    "officialUrl": "https://www.hario.com/product/coffee/kettle/ECK.html"
  },
  {
    "cat": "dryer",
    "maker": "パナソニック",
    "model": "EH-NA2K",
    "name": "ナノケア コンパクトタイプ",
    "price": 15800,
    "size": [
      "s",
      "m"
    ],
    "focus": {
      "quiet": 2,
      "power": 2,
      "care": 3,
      "eco": 3,
      "compact": 3,
      "multi": 1
    },
    "point": "ナノケア最軽量475g、風量1.3㎥/分のコンパクトモデル",
    "features": [
      "ナノケアシリーズ最軽量 約475g",
      "風量1.3㎥/分・消費電力1200W",
      "「ナノイー」搭載で静電気を抑制",
      "高さ21.7cmで持ち運びやすい"
    ],
    "img": "https://tshop.r10s.jp/shop-24/cabinet/biiino/item/174-6.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fglad-ryohin%2F4549980735978%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fglad-ryohin%2F4549980735978%2F",
    "amazon": "https://www.amazon.co.jp/dp/B0CC8QVYG9?tag=tanosiikitaic-22",
    "officialUrl": "https://panasonic.jp/hair/products/EH-NA2K.html"
  },
  {
    "cat": "dryer",
    "maker": "KINUJO",
    "model": "絹女 ドライヤー KH301/KH302",
    "name": "KINUJO Hair Dryer",
    "price": 33200,
    "size": [
      "s",
      "m"
    ],
    "focus": {
      "quiet": 2,
      "power": 3,
      "care": 3,
      "eco": 2,
      "compact": 2,
      "multi": 2
    },
    "point": "超軽量×大風量、美容感度の高い人気機",
    "features": [
      "約348gの軽量ボディ",
      "大風量で速乾なのに静か",
      "遠赤外線でうるおいケア",
      "サロン品質の仕上がり"
    ],
    "img": "https://tshop.r10s.jp/fastep/cabinet/09581633/imgrc0115029990.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ffastep%2Fft-1009%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Ffastep%2Fft-1009%2F",
    "officialUrl": "https://online-shop.kinujo.jp/view/item/000000000015"
  },
  {
    "cat": "dryer",
    "maker": "テスコム",
    "model": "Nobby NB1906",
    "name": "Nobby ヘアードライヤー",
    "price": 5895,
    "size": [
      "s",
      "m",
      "l"
    ],
    "focus": {
      "quiet": 1,
      "power": 3,
      "care": 1,
      "eco": 3,
      "compact": 2,
      "multi": 1
    },
    "point": "美容室シェアNo.1ブランドの業務用",
    "features": [
      "サロンで使われるプロ仕様",
      "大風量でとにかく速乾",
      "タフで長持ちする作り",
      "6千円以下の高コスパ"
    ],
    "img": "https://tshop.r10s.jp/atomya/cabinet/bte02/nb_dr_nb1906_m01.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fatomya%2Fnb-dr-fps-ec%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fatomya%2Fnb-dr-fps-ec%2F"
  },
  {
    "cat": "toothbrush",
    "maker": "フィリップス",
    "model": "ダイヤモンドクリーン 9000",
    "name": "ソニッケアー ダイヤモンドクリーン 9000",
    "price": 34029,
    "size": [
      "s",
      "m"
    ],
    "focus": {
      "quiet": 3,
      "power": 3,
      "care": 3,
      "eco": 1,
      "compact": 2,
      "multi": 3
    },
    "point": "ソニッケアー最上位クラス。歯ぐきにやさしい音波式",
    "features": [
      "ホワイトニングに強い上位モデル",
      "4つのモード+3段階の強さ調整",
      "過圧防止センサー搭載",
      "スタイリッシュなデザイン"
    ],
    "img": "https://tshop.r10s.jp/ksdenki/cabinet/images/15_1/8720689027915_1.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fksdenki%2F8720689027915%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fksdenki%2F8720689027915%2F",
    "amazon": "https://www.amazon.co.jp/dp/B0FGWXVQ8J?tag=tanosiikitaic-22",
    "officialUrl": "https://www.philips.co.jp/c-p/HX9911_70/diamondclean-9000-sonic-electric-toothbrush-with-app"
  },
  {
    "cat": "circulator",
    "maker": "QUADS",
    "model": "QSR506",
    "name": "ツインブレード3D DCサーキュレーター DUOAIR DC",
    "price": 10800,
    "size": [
      "s",
      "m"
    ],
    "focus": {
      "quiet": 2,
      "power": 2,
      "care": 3,
      "eco": 2,
      "compact": 2,
      "multi": 1
    },
    "point": "前後二重羽根のパワフル送風、丸洗いできる清潔設計",
    "features": [
      "前後二重羽根でパワフルな送風",
      "適用畳数約38畳のハイパワー",
      "風量12段階で細かく調整可能",
      "全分解できて丸洗いOK、衣類乾燥モードも搭載"
    ],
    "img": "https://shop.r10s.jp/quads/cabinet/26ss/top_tmb/qs506_507_top_tmb_2.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fquads%2Fqs303%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fquads%2Fqs303%2F",
    "amazon": "https://www.amazon.co.jp/dp/B0F3NDPW49?tag=tanosiikitaic-22",
    "officialUrl": "https://quads.co.jp/product/duoair-dc/"
  },
  {
    "cat": "circulator",
    "maker": "アイリスオーヤマ",
    "model": "PCF-SCC15T",
    "name": "サーキュレーターアイ 3D送風 18畳",
    "price": 5980,
    "size": [
      "s",
      "m"
    ],
    "focus": {
      "quiet": 2,
      "power": 2,
      "care": 2,
      "eco": 2,
      "compact": 2,
      "multi": 1
    },
    "point": "6千円弱で上下左右首振り付きの中堅機",
    "features": [
      "上下左右の自動首振りで3D送風",
      "〜18畳対応",
      "5千円台の高コスパ",
      "アイリス公式ストアで購入可"
    ],
    "img": "https://tshop.r10s.jp/irisplaza-r/cabinet/11073544/12096888/imgrc0110283253.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Firisplaza-r%2F282763%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Firisplaza-r%2F282763%2F",
    "amazon": "https://www.amazon.co.jp/dp/B087RM7DD6?tag=tanosiikitaic-22",
    "officialUrl": "https://www.irisohyama.co.jp/products/support/4967576463041"
  },
  {
    "cat": "humidifier",
    "maker": "象印",
    "model": "EE-RU35",
    "name": "スチーム式加湿器 ベーシック 2.2L",
    "price": 18448,
    "size": [
      "s"
    ],
    "focus": {
      "quiet": 1,
      "power": 2,
      "care": 3,
      "eco": 2,
      "compact": 3,
      "multi": 1
    },
    "img": "https://shop.r10s.jp/ra-kudenmart/cabinet/10117/ee-ru35-wa.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fikurun%2F194016%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fikurun%2F194016%2F",
    "amazon": "https://www.amazon.co.jp/dp/B0FH94KJHW?tag=tanosiikitaic-22",
    "point": "象印スチーム式の入門ベーシック機。2万円以下で買える",
    "features": [
      "定格加湿能力350mL/h・タンク約2.2L",
      "適用床面積 木造和室〜6畳／プレハブ洋室〜10畳",
      "連続加湿 強6h／弱27h",
      "フィルター不要・広口容器でお手入れ簡単",
      "消費電力 湯沸かし985W／加湿305W",
      "外形寸法 24×26×27.5cm・約2.3kg"
    ],
    "officialUrl": "https://www.zojirushi.co.jp/syohin/life/humidifier/ee-ru/"
  },
  {
    "cat": "dehumidifier",
    "maker": "三菱電機",
    "model": "MJ-M120ZX",
    "name": "衣類乾燥除湿機 サラリ 12L",
    "price": 52800,
    "size": [
      "m",
      "l"
    ],
    "focus": {
      "quiet": 3,
      "power": 3,
      "care": 2,
      "eco": 2,
      "compact": 1,
      "multi": 3
    },
    "point": "部屋干しおまかせムーブアイ搭載、賢く乾かすサラリ",
    "features": [
      "部屋干しおまかせムーブアイが濡れた衣類を狙って送風",
      "除湿能力 11L/日(50Hz)・12L/日(60Hz)",
      "運転音 除湿 強47dB／弱39dB",
      "洗濯物は約6kgまで・2kgなら約105分で乾燥"
    ],
    "img": "https://shop.r10s.jp/a-price/cabinet/pics/998/0-4573637000485.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fa-price%2F4573637000485%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fa-price%2F4573637000485%2F",
    "officialUrl": "https://www.mitsubishielectric.co.jp/home/jyoshitsuki/product/mj-m120zx/"
  },
  {
    "cat": "dehumidifier",
    "maker": "トヨトミ",
    "model": "TD-C60R",
    "name": "コンプレッサー式除湿機 6L",
    "price": 16000,
    "size": [
      "s",
      "m"
    ],
    "focus": {
      "quiet": 2,
      "power": 2,
      "care": 2,
      "eco": 3,
      "compact": 2,
      "multi": 1
    },
    "point": "老舗トヨトミの手堅い定番機",
    "features": [
      "夏に強いコンプレッサー式",
      "6L/日でワンルーム〜寝室に",
      "シンプルで使いやすい操作性",
      "日本の老舗メーカー製"
    ],
    "img": "https://tshop.r10s.jp/sanrex2/cabinet/06236180/06236205/imgrc0114626133.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fsanrex2%2Ftd-c60r-w%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fsanrex2%2Ftd-c60r-w%2F",
    "amazon": "https://www.amazon.co.jp/dp/B0C5DJV9S4?tag=tanosiikitaic-22",
    "officialUrl": "https://www.toyotomi.jp/products/air/clothes-drying/td-c60"
  },
  {
    "cat": "purifier",
    "maker": "Airdog",
    "model": "Airdog mini",
    "name": "Airdog mini 空気清浄機",
    "price": 41800,
    "size": [
      "s"
    ],
    "focus": {
      "quiet": 2,
      "power": 3,
      "care": 3,
      "eco": 1,
      "compact": 2,
      "multi": 3
    },
    "point": "フィルター交換不要のTPAフィルター",
    "features": [
      "医療現場でも採用される先進技術",
      "フィルター買い替え不要で洗って繰り返し使える",
      "ウイルスレベルの微細粒子まで除去",
      "コンパクトな個室向けサイズ"
    ],
    "img": "https://tshop.r10s.jp/toconnect/cabinet/07831354/09225771/rakuten_mini01-1.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ftoconnect%2F10000022%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Ftoconnect%2F10000022%2F",
    "amazon": "https://www.amazon.co.jp/dp/B0BCFK5MKP?tag=tanosiikitaic-22",
    "officialUrl": "https://airdogjapan.com/mini.html"
  },
  {
    "cat": "vacuum",
    "maker": "パナソニック",
    "model": "MC-SB54K",
    "name": "コードレススティック からまないブラシ",
    "price": 25800,
    "size": [
      "s",
      "m"
    ],
    "focus": {
      "quiet": 2,
      "power": 2,
      "care": 3,
      "eco": 2,
      "compact": 2,
      "multi": 2
    },
    "point": "髪の毛が絡まないブラシでお手入れ激減",
    "features": [
      "独自の「からまないブラシ」搭載",
      "髪の毛・ペットの毛の掃除に強い",
      "軽量で取り回しやすい",
      "お手入れの手間を減らしたい人に"
    ],
    "img": "https://tshop.r10s.jp/ec-current/cabinet/9118/4549980860977.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fec-current%2F4549980860977%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fec-current%2F4549980860977%2F",
    "amazon": "https://www.amazon.co.jp/dp/B0DBH8HWN5?tag=tanosiikitaic-22",
    "officialUrl": "https://panasonic.jp/soji/products/MC-SB54K.html"
  },
  {
    "cat": "vacuum",
    "maker": "日立",
    "model": "PKV-BK3K",
    "name": "かるパック スティック",
    "price": 30400,
    "size": [
      "m",
      "l"
    ],
    "focus": {
      "quiet": 2,
      "power": 3,
      "care": 3,
      "eco": 2,
      "compact": 1,
      "multi": 2
    },
    "point": "紙パック式コードレスでゴミ捨て月1回",
    "features": [
      "紙パック式でゴミ捨てが月1回程度",
      "ホコリが舞わず衛生的",
      "パワフル吸引と軽さを両立",
      "ゴミ捨てが苦手な人の最適解"
    ],
    "img": "https://tshop.r10s.jp/a-price/cabinet/orj/30/0-4549873161426.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fa-price%2F4549873161426%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fa-price%2F4549873161426%2F",
    "amazon": "https://www.amazon.co.jp/dp/B0BQXCZX1D?tag=tanosiikitaic-22",
    "officialUrl": "https://kadenfan.hitachi.co.jp/clean/lineup/pkv-bk3k/"
  },
  {
    "cat": "robot",
    "maker": "ILIFE",
    "model": "V9 Pro",
    "name": "ILIFE V9 Pro ロボット掃除機",
    "price": 18477,
    "size": [
      "s",
      "m"
    ],
    "focus": {
      "quiet": 2,
      "power": 2,
      "care": 3,
      "eco": 3,
      "compact": 2,
      "multi": 2
    },
    "point": "1万円台で自動ゴミ収集付きの破格モデル",
    "features": [
      "自動ゴミ収集ドック付きでこの価格帯",
      "吸引+水拭き対応の2in1",
      "紙パック5枚付属で最長300日ゴミ捨て不要",
      "ジャイロナビで衝突・落下を検知しながら走行"
    ],
    "img": "https://tshop.r10s.jp/hitcreations/cabinet/g/9/e9gjji6spf-2.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fhitcreations%2Fgr-e9gjji6spf%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fhitcreations%2Fgr-e9gjji6spf%2F",
    "amazon": "https://www.amazon.co.jp/dp/B0D66LJV5Z?tag=tanosiikitaic-22",
    "officialUrl": "https://www.iliferobot.com/mobile/products/V9Pro/"
  },
  {
    "cat": "ricecooker",
    "maker": "パナソニック",
    "model": "ビストロ SR-X710D",
    "name": "ビストロ 可変圧力IHジャー炊飯器 5.5合",
    "price": 59890,
    "size": [
      "m",
      "l"
    ],
    "focus": {
      "quiet": 2,
      "power": 3,
      "care": 3,
      "eco": 2,
      "compact": 1,
      "multi": 3
    },
    "point": "おどり炊きの進化系、ビストロの実力機",
    "features": [
      "可変圧力でお米が踊る炊き上がり",
      "銘柄炊き分けに対応",
      "お手入れ点数が少なく簡単",
      "パナソニック公式ストアで購入可"
    ],
    "img": "https://tshop.r10s.jp/ksdenki/cabinet/images/93_3/4549980974193_3.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fksdenki%2F4549980974193%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fksdenki%2F4549980974193%2F",
    "amazon": "https://www.amazon.co.jp/dp/B0FHPG2PJS?tag=tanosiikitaic-22",
    "officialUrl": "https://panasonic.jp/suihan/products/SR-X710D.html"
  },
  {
    "cat": "ricecooker",
    "maker": "アイリスオーヤマ",
    "model": "銘柄炊き IH 3合",
    "name": "銘柄炊き IHジャー炊飯器 3合",
    "price": 9999,
    "size": [
      "s"
    ],
    "focus": {
      "quiet": 2,
      "power": 2,
      "care": 2,
      "eco": 3,
      "compact": 3,
      "multi": 2
    },
    "point": "1万円以下でIH+銘柄炊き分け",
    "features": [
      "50銘柄の炊き分けに対応",
      "IH加熱でふっくら",
      "一人暮らしにちょうどいい3合",
      "公式店は2年保証付き"
    ],
    "img": "https://tshop.r10s.jp/irisplaza-r/cabinet/10172579/12541977/imgrc0117628162.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Firisplaza-r%2F517435%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Firisplaza-r%2F517435%2F"
  },
  {
    "cat": "ricecooker",
    "maker": "バーミキュラ",
    "model": "RP23A",
    "name": "バーミキュラ ライスポット 5合",
    "price": 95370,
    "size": [
      "m",
      "l"
    ],
    "focus": {
      "quiet": 1,
      "power": 3,
      "care": 1,
      "eco": 1,
      "compact": 1,
      "multi": 3
    },
    "point": "鋳物ホーロー鍋で炊く至高のごはん",
    "features": [
      "鋳物ホーロー鍋×IHの本格炊飯",
      "保温なし、炊きたて特化の思想",
      "無水調理鍋としても使える",
      "料理好きの憧れの一台"
    ],
    "img": "https://tshop.r10s.jp/vermicular-rshop/cabinet/11432399/rp23_sv_1.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fvermicular-rshop%2Frp23a-sv%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fvermicular-rshop%2Frp23a-sv%2F",
    "amazon": "https://www.amazon.co.jp/dp/B077P24PYR?tag=tanosiikitaic-22",
    "officialUrl": "https://www.vermicular.jp/products/ricepot/"
  },
  {
    "cat": "kettle",
    "maker": "ビタントニオ",
    "model": "VEK-20-K",
    "name": "温調ドリップケトル アクティ2",
    "price": 17400,
    "size": [
      "s"
    ],
    "focus": {
      "quiet": 2,
      "power": 3,
      "care": 2,
      "eco": 1,
      "compact": 3,
      "multi": 3
    },
    "point": "1℃単位の温調でコーヒーを極める",
    "features": [
      "50〜100℃を1℃単位で設定",
      "細口ノズルでドリップに最適",
      "保温機能付き",
      "ビタントニオ公式で購入可"
    ],
    "img": "https://tshop.r10s.jp/select-rainbow/cabinet/13322066/4968291311532-1.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fselect-rainbow%2F4968291311532%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fselect-rainbow%2F4968291311532%2F",
    "amazon": "https://www.amazon.co.jp/dp/B09F8G1C4J?tag=tanosiikitaic-22",
    "officialUrl": "https://vitantonio.jp/products/vek-20"
  },
  {
    "cat": "kettle",
    "maker": "象印",
    "model": "CK-DC10",
    "name": "電気ケトル 1.0L",
    "price": 5698,
    "size": [
      "s",
      "m"
    ],
    "focus": {
      "quiet": 2,
      "power": 2,
      "care": 3,
      "eco": 3,
      "compact": 3,
      "multi": 1
    },
    "point": "5千円台で象印の安心安全設計",
    "features": [
      "転倒湯もれ防止構造(新安全基準適合品)",
      "本体が熱くなりにくい二重構造",
      "1.0Lの使いやすいサイズ",
      "5千円台の高コスパ"
    ],
    "img": "https://tshop.r10s.jp/try3/cabinet/11147956/11928062/4974305230935.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ftry3%2F4974305230935%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Ftry3%2F4974305230935%2F",
    "amazon": "https://www.amazon.co.jp/dp/B0FH6FR9HR?tag=tanosiikitaic-22",
    "officialUrl": "https://www.zojirushi-direct.com/category/ELECTRIC_KETTLE/CKDC10_WA.html"
  },
  {
    "cat": "dryer",
    "maker": "ホリスティックキュアーズ",
    "model": "マグネットヘアプロ ドライヤーゼロプラス HCD-G07CB",
    "name": "マグネットヘアプロ ドライヤーゼロプラス",
    "price": 32450,
    "size": [
      "s",
      "m"
    ],
    "focus": {
      "quiet": 2,
      "power": 3,
      "care": 3,
      "eco": 2,
      "compact": 2,
      "multi": 2
    },
    "point": "美容室愛用、キューティクルケアの名機",
    "features": [
      "美容師の支持が厚いプロ仕様",
      "速乾なのに髪がまとまる",
      "独自ミネラル・テラヘルツ加工",
      "メーカー保証1年(有料オプションで最大3年まで延長可)"
    ],
    "img": "https://tshop.r10s.jp/holistic-cures/cabinet/mg/0000mg_0001.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fholistic-cures%2Fmhp-dryer0%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fholistic-cures%2Fmhp-dryer0%2F",
    "officialUrl": "https://item.rakuten.co.jp/holistic-cures/mhp-dryer0/"
  },
  {
    "cat": "dryer",
    "maker": "ヤーマン",
    "model": "リフトドライヤー",
    "name": "リフトドライヤー",
    "price": 27500,
    "size": [
      "s",
      "m"
    ],
    "focus": {
      "quiet": 2,
      "power": 2,
      "care": 3,
      "eco": 2,
      "compact": 2,
      "multi": 3
    },
    "point": "乾かしながら顔ケアもできる美顔器兼用",
    "features": [
      "ドライヤー+美顔器の1台2役",
      "音波振動ヘッドで頭皮ケア",
      "美容機器メーカーならではの発想",
      "ヤーマン公式ストアで購入可"
    ],
    "img": "https://tshop.r10s.jp/ya-man/cabinet/06031355/ma/r2503c-ma10x.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fya-man%2Fr2503c%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fya-man%2Fr2503c%2F",
    "amazon": "https://www.amazon.co.jp/dp/B0FQB5SDHM?tag=tanosiikitaic-22"
  },
  {
    "cat": "toothbrush",
    "maker": "クラプロックス",
    "model": "ハイドロソニック イージー",
    "name": "ハイドロソニック イージー",
    "price": 21780,
    "size": [
      "s",
      "m"
    ],
    "focus": {
      "quiet": 3,
      "power": 2,
      "care": 3,
      "eco": 1,
      "compact": 2,
      "multi": 2
    },
    "point": "スイス生まれ、歯ぐきにやさしい設計",
    "features": [
      "超極細毛ブラシでやさしく磨ける",
      "歯ぐきが敏感な人に人気",
      "スイスの口腔ケア専門ブランド",
      "公式ストアで購入可"
    ],
    "img": "https://tshop.r10s.jp/curaprox/cabinet/thumbnails/normal/73349336.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fcuraprox%2F73349336%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fcuraprox%2F73349336%2F",
    "amazon": "https://www.amazon.co.jp/dp/B0CHYC5XD4?tag=tanosiikitaic-22",
    "officialUrl": "https://www.curaprox.shop/c/cat_all/electric_toothbrush_all/73349336"
  },
  {
    "cat": "toothbrush",
    "maker": "フィリップス",
    "model": "ソニッケアー 2100",
    "name": "ソニッケアー 2100シリーズ",
    "price": 6380,
    "size": [
      "s"
    ],
    "focus": {
      "quiet": 3,
      "power": 2,
      "care": 2,
      "eco": 3,
      "compact": 3,
      "multi": 1
    },
    "point": "4千円以下でソニッケアーデビュー",
    "features": [
      "音波水流をこの価格で",
      "シンプルな1モード設計",
      "初めての電動歯ブラシに最適",
      "替えブラシも入手しやすい"
    ],
    "img": "https://tshop.r10s.jp/r-kojima/cabinet/n0000001746/8720689050845_1.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fr-kojima%2F8720689050845%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fr-kojima%2F8720689050845%2F",
    "amazon": "https://www.amazon.co.jp/dp/B0D1VTC31M?tag=tanosiikitaic-22"
  },
  {
    "cat": "circulator",
    "maker": "スリーアップ",
    "model": "DCサーキュレーター",
    "name": "DCモーターサーキュレーター",
    "price": 4980,
    "size": [
      "s"
    ],
    "focus": {
      "quiet": 2,
      "power": 1,
      "care": 2,
      "eco": 3,
      "compact": 3,
      "multi": 1
    },
    "point": "5千円以下でDCモーター搭載",
    "features": [
      "DCモーターをこの価格で",
      "静音・省エネ運転",
      "コンパクトで置き場所自由"
    ],
    "img": "https://tshop.r10s.jp/bluxe-store/cabinet/thumb/cfaz2601_main.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbluxe-store%2Fcfaz2601%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fbluxe-store%2Fcfaz2601%2F"
  },
  {
    "cat": "humidifier",
    "maker": "アイリスオーヤマ",
    "model": "AHM-UU28B",
    "name": "上給水超音波加湿器 4.0L",
    "price": 5780,
    "size": [
      "s"
    ],
    "focus": {
      "quiet": 3,
      "power": 1,
      "care": 2,
      "eco": 3,
      "compact": 3,
      "multi": 1
    },
    "point": "上から注ぐだけ、6千円以下の手軽さ",
    "features": [
      "上から注ぐだけの上給水・タンク約4.0L",
      "加湿量280mL/h・消費電力24W（HI時）",
      "適用床面積 和室約4畳／洋室約7畳",
      "最長約14時間の連続運転・本体約1.4kg"
    ],
    "img": "https://tshop.r10s.jp/171online-shop/cabinet/home/04/4967576705516.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2F171online-shop%2F4967576705516%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2F171online-shop%2F4967576705516%2F",
    "officialUrl": "https://www.irisohyama.co.jp/products/support/4967576705516"
  },
  {
    "cat": "purifier",
    "maker": "シャープ",
    "model": "KI-TX100",
    "name": "プレミアム加湿空気清浄機 KI-TX100",
    "price": 75779,
    "size": [
      "l"
    ],
    "focus": {
      "quiet": 2,
      "power": 3,
      "care": 3,
      "eco": 2,
      "compact": 1,
      "multi": 3
    },
    "point": "プラズマクラスターNEXT搭載のシャープ最上位、〜46畳対応",
    "features": [
      "プラズマクラスターNEXT（適用床面積 約23畳）",
      "空気清浄は〜46畳、8畳をわずか6分で清浄",
      "最大加湿量1,100mL/h・タンク約4.3L",
      "ホコリ・照度まで見る5種センサーとAIモニター"
    ],
    "img": "https://tshop.r10s.jp/try3/cabinet/11147956/11147958/4550556135689.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ftry3%2F4550556135689%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Ftry3%2F4550556135689%2F",
    "amazon": "https://www.amazon.co.jp/dp/B0F4JRGMDZ?tag=tanosiikitaic-22",
    "officialUrl": "https://jp.sharp/support/air_purifier/lineup/kiux100_tx100_spec.html"
  },
  {
    "cat": "vacuum",
    "maker": "シャープ",
    "model": "EC-AR11-B",
    "name": "SHARP RACTIVE Air EC-AR11",
    "price": 31800,
    "size": [
      "s",
      "m"
    ],
    "focus": {
      "quiet": 3,
      "power": 2,
      "care": 2,
      "eco": 3,
      "compact": 3,
      "multi": 2
    },
    "point": "RACTIVE Air史上最軽量1.2kg、低騒音も両立",
    "features": [
      "RACTIVE Air史上最軽量1.2kgのボディ",
      "遮音防振構造とダンピングコントロールで不快音を低減",
      "着脱式バッテリーでスタミナ運転＆急速充電",
      "からみにく〜いブラシで髪の毛のお手入れが簡単"
    ],
    "img": "https://tshop.r10s.jp/winkstore/cabinet/269000/268918.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fwinkstore%2F268918%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fwinkstore%2F268918%2F",
    "amazon": "https://www.amazon.co.jp/s?k=SHARP%20EC-AR11&tag=tanosiikitaic-22",
    "officialUrl": "https://jp.sharp/souji/products/ecar11/spec/"
  },
  {
    "cat": "robot",
    "maker": "エコバックス",
    "model": "DEEBOT mini",
    "name": "DEEBOT mini ロボット掃除機",
    "price": 39700,
    "size": [
      "s"
    ],
    "focus": {
      "quiet": 2,
      "power": 2,
      "care": 3,
      "eco": 2,
      "compact": 3,
      "multi": 3
    },
    "point": "小型なのに水拭き・ゴミ収集まで全自動",
    "features": [
      "狭い家でも置ける小型全自動モデル",
      "吸引+水拭き+自動ゴミ収集",
      "エコバックス公式ストアで購入可"
    ],
    "img": "https://tshop.r10s.jp/store-ecovacs-japan/cabinet/campaign/260717/djx11-11ee.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fstore-ecovacs-japan%2Fdjx11-11ee%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fstore-ecovacs-japan%2Fdjx11-11ee%2F",
    "amazon": "https://www.amazon.co.jp/dp/B0GJCCTQMC?tag=tanosiikitaic-22",
    "officialUrl": "https://www.ecovacs.com/jp/shop/deebot-robotic-vacuum-cleaner/deebot-mini-black"
  },
  {
    "cat": "ricecooker",
    "maker": "三菱電機",
    "model": "本炭釜 紬",
    "name": "本炭釜 紬 IH炊飯器 5.5合",
    "price": 60390,
    "size": [
      "m",
      "l"
    ],
    "focus": {
      "quiet": 2,
      "power": 3,
      "care": 2,
      "eco": 1,
      "compact": 1,
      "multi": 2
    },
    "point": "純度99.9%の炭釜で炊く粒立ちごはん",
    "features": [
      "削り出しの本物の炭釜",
      "大火力で甘みを引き出す",
      "かため好きに刺さる粒立ち食感"
    ],
    "img": "https://tshop.r10s.jp/jyousui/cabinet/shouhin/mitubishi/nj-bw10g_img/nj-bw10g_tmb.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fjyousui%2Fnj-bw10f-b-001%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fjyousui%2Fnj-bw10f-b-001%2F",
    "amazon": "https://www.amazon.co.jp/dp/B0D78WW85Q?tag=tanosiikitaic-22"
  },
  {
    "cat": "ricecooker",
    "maker": "シャープ",
    "model": "KS-CF05B",
    "name": "IHジャー炊飯器 3合",
    "price": 8580,
    "size": [
      "s"
    ],
    "focus": {
      "quiet": 2,
      "power": 2,
      "care": 2,
      "eco": 3,
      "compact": 3,
      "multi": 1
    },
    "point": "9千円以下のIH3合、デザインもシンプル",
    "features": [
      "1万円以下でIH炊飯",
      "キッチンに馴染むシンプルデザイン",
      "一人暮らしにちょうどいい3合"
    ],
    "img": "https://tshop.r10s.jp/emedama/cabinet/9820/4974019149820_1.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Femedama%2F4974019149820%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Femedama%2F4974019149820%2F",
    "amazon": "https://www.amazon.co.jp/dp/B082NWX2GQ?tag=tanosiikitaic-22",
    "officialUrl": "https://jp.sharp/ricecooker/products/kscf05b/"
  },
  {
    "cat": "kettle",
    "maker": "ティファール",
    "model": "KO8608J0",
    "name": "アプレシア ロック コントロール 0.8L",
    "price": 8800,
    "size": [
      "s",
      "m"
    ],
    "focus": {
      "quiet": 2,
      "power": 3,
      "care": 2,
      "eco": 2,
      "compact": 2,
      "multi": 3
    },
    "point": "9段階の温度設定と転倒お湯もれロックを両立",
    "features": [
      "40〜100℃の9段階温度設定",
      "設定温度で60分間保温",
      "転倒お湯もれロック搭載",
      "容量0.8Lの軽量コンパクト設計"
    ],
    "img": "https://tshop.r10s.jp/hdirect/cabinet/a2025/560-ko8608j0-01.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fhdirect%2F560-ko8608j0%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fhdirect%2F560-ko8608j0%2F",
    "amazon": "https://www.amazon.co.jp/dp/B0FMWMY986?tag=tanosiikitaic-22",
    "officialUrl": "https://www.t-fal.co.jp/kettle/products/aprecia-lock-control-7211419697/"
  },
  {
    "cat": "dryer",
    "maker": "モッズヘア",
    "model": "MHD-12",
    "name": "ダブルイオンヘアードライヤー",
    "price": 4950,
    "size": [
      "s",
      "m"
    ],
    "focus": {
      "quiet": 2,
      "power": 2,
      "care": 2,
      "eco": 3,
      "compact": 2,
      "multi": 1
    },
    "point": "サロン発ブランドを5千円以下で",
    "features": [
      "ダブルイオンで静電気を抑える",
      "ヘアサロン発の人気ブランド",
      "手頃な価格でデザインも良い"
    ],
    "img": "https://tshop.r10s.jp/r-kojima/cabinet/n0000000873/4968291313826_1.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fr-kojima%2F4968291313826%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fr-kojima%2F4968291313826%2F",
    "amazon": "https://www.amazon.co.jp/dp/B0DJFBF7XH?tag=tanosiikitaic-22"
  },
  {
    "cat": "toothbrush",
    "maker": "ブラウン",
    "model": "オーラルB iO5",
    "name": "オーラルB iO5",
    "price": 20900,
    "size": [
      "s",
      "m"
    ],
    "focus": {
      "quiet": 2,
      "power": 3,
      "care": 3,
      "eco": 2,
      "compact": 2,
      "multi": 2
    },
    "point": "AI磨きガイド付きのiOシリーズ中位機",
    "features": [
      "遠心マイクロモーションの磨き心地",
      "AI磨きガイド対応",
      "iO9より手が届きやすい価格帯"
    ],
    "img": "https://tshop.r10s.jp/r-kojima/cabinet/n0000000675/4210201442233_1.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fr-kojima%2F4210201442233%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fr-kojima%2F4210201442233%2F",
    "officialUrl": "https://www.oralb.braun.co.jp/ja-jp/products/electric-toothbrushes/oral-b-io-series-5-electric-toothbrush"
  },
  {
    "cat": "toothbrush",
    "maker": "パナソニック",
    "model": "ポケットドルツ",
    "name": "音波式電動歯ブラシ ポケットドルツ",
    "price": 2464,
    "size": [
      "s"
    ],
    "focus": {
      "quiet": 3,
      "power": 1,
      "care": 2,
      "eco": 3,
      "compact": 3,
      "multi": 1
    },
    "point": "ポーチに入る携帯用、外出先の歯みがきに",
    "features": [
      "ペン型で持ち運びに特化",
      "職場や旅行先でサッと使える",
      "3千円前後の手軽さ"
    ],
    "img": "https://tshop.r10s.jp/edion/cabinet/goods/ll/img_167/4549980052068_ll.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fedion%2F4549980052068%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fedion%2F4549980052068%2F",
    "amazon": "https://www.amazon.co.jp/dp/B07BMR45R8?tag=tanosiikitaic-22"
  },
  {
    "cat": "robot",
    "maker": "Anker Eufy",
    "model": "Clean X10 Pro Omni",
    "name": "Eufy Clean X10 Pro Omni",
    "price": 57200,
    "size": [
      "m",
      "l"
    ],
    "focus": {
      "quiet": 2,
      "power": 3,
      "care": 3,
      "eco": 2,
      "compact": 2,
      "multi": 3
    },
    "point": "全自動ステーション付きで実力十分、価格も手頃な人気モデル",
    "features": [
      "8,000Paの強力吸引",
      "モップ自動洗浄・乾燥",
      "自動ゴミ収集ドック付き",
      "コスパに優れた全自動モデル"
    ],
    "img": "https://tshop.r10s.jp/arc-market-kaden/cabinet/10911043/4571411226663.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Farc-market-kaden%2F4571411226663%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Farc-market-kaden%2F4571411226663%2F",
    "amazon": "https://www.amazon.co.jp/dp/B0CPHYJRRP?tag=tanosiikitaic-22",
    "officialUrl": "https://www.ankerjapan.com/products/t2351"
  },
  {
    "cat": "robot",
    "maker": "SwitchBot",
    "model": "S10",
    "name": "SwitchBot S10",
    "price": 119800,
    "size": [
      "m",
      "l"
    ],
    "focus": {
      "quiet": 2,
      "power": 2,
      "care": 3,
      "eco": 2,
      "compact": 2,
      "multi": 3
    },
    "point": "水の自動給排水に対応、モップの手入れがほぼ不要に",
    "features": [
      "給水・排水を自動化する新方式",
      "水拭きの手間を大幅カット",
      "スマートホーム連携が得意",
      "薄型ボディで家具下も"
    ],
    "img": "https://tshop.r10s.jp/switchbot/cabinet/09377790/s10/ebc/imgrc0092497597.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Febest%2F0810150540697%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Febest%2F0810150540697%2F",
    "amazon": "https://www.amazon.co.jp/dp/B0D5GKG1V6?tag=tanosiikitaic-22",
    "officialUrl": "https://www.switchbot.jp/products/switchbot-robot-vacuum-cleaner-s10"
  },
  {
    "cat": "purifier",
    "maker": "シャープ",
    "model": "KI-TS50",
    "name": "加湿空気清浄機 プラズマクラスター25000",
    "price": 32800,
    "size": [
      "m",
      "l"
    ],
    "focus": {
      "quiet": 2,
      "power": 3,
      "care": 2,
      "eco": 2,
      "compact": 1,
      "multi": 3
    },
    "point": "プラズマクラスター25000搭載、奥行23cmの薄型加湿空気清浄機",
    "features": [
      "プラズマクラスター25000（適用床面積 約13畳）",
      "空気清浄は〜23畳、8畳を12分で清浄",
      "最大加湿量600mL/h・タンク約2.7L",
      "奥行23cmの薄型で置き場所を選ばない",
      "静電HEPA・脱臭フィルターとも交換目安10年"
    ],
    "img": "https://tshop.r10s.jp/premoa/cabinet/orj/49/0-4550556135832.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fe-kurashi%2Fs9f44%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fe-kurashi%2Fs9f44%2F",
    "amazon": "https://www.amazon.co.jp/dp/B0DP2KLMMT?tag=tanosiikitaic-22",
    "officialUrl": "https://jp.sharp/support/air_purifier/lineup/kius50_ts50_spec.html"
  },
  {
    "cat": "dryer",
    "maker": "ダイソン",
    "model": "Supersonic Nural",
    "name": "Dyson Supersonic Nural",
    "price": 44530,
    "size": [
      "s",
      "m",
      "l"
    ],
    "focus": {
      "quiet": 2,
      "power": 3,
      "care": 3,
      "eco": 2,
      "compact": 2,
      "multi": 3
    },
    "point": "頭皮を感知して自動で風温を調整する最新ダイソン",
    "features": [
      "大風量で速乾",
      "頭皮センサーで温度を自動調整",
      "髪のダメージを抑える",
      "付け替えノズルが豊富"
    ],
    "img": "https://tshop.r10s.jp/b-bell/cabinet/products/dyson/20901002.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fdyson%2F122660-01%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fdyson%2F122660-01%2F",
    "amazon": "https://www.amazon.co.jp/dp/B0D4TH6D4T?tag=tanosiikitaic-22",
    "officialUrl": "https://www.dyson.co.jp/hair-care/hair-dryers/supersonic-nural-shine/dark-blue-copper"
  },
  {
    "cat": "dryer",
    "maker": "リファ",
    "model": "ビューテック ドライヤー S+",
    "name": "ReFa BEAUTECH DRYER S+",
    "price": 39600,
    "size": [
      "s",
      "m",
      "l"
    ],
    "focus": {
      "quiet": 2,
      "power": 3,
      "care": 3,
      "eco": 2,
      "compact": 2,
      "multi": 2
    },
    "point": "コンパクトな速乾力とサロン級のツヤ仕上げ",
    "features": [
      "センシングプログラムで頭皮50℃・毛先60℃以下をキープ",
      "ハイドロイオンでうるおいとツヤ",
      "クールボタンでワンタッチ冷風仕上げ",
      "コンパクトで持ち運びやすい"
    ],
    "img": "https://tshop.r10s.jp/mtgec-beauty/cabinet/refa/refa_dryer_splus/imgrc0120473542.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fmtgec-beauty%2F1850320101%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fmtgec-beauty%2F1850320101%2F",
    "amazon": "https://www.amazon.co.jp/dp/B0DMN9CX52?tag=tanosiikitaic-22",
    "officialUrl": "https://www.refa.net/item/refa_beautech_dryer_s_plus/"
  },
  {
    "cat": "circulator",
    "maker": "アイリスオーヤマ",
    "model": "PCF-SDS15T-EC",
    "name": "静音サーキュレーター 上下左右首振り",
    "price": 7980,
    "size": [
      "s",
      "m",
      "l"
    ],
    "focus": {
      "quiet": 3,
      "power": 3,
      "care": 2,
      "eco": 3,
      "compact": 2,
      "multi": 2
    },
    "point": "風量1〜3なら35dB未満。上下左右の自動首振りで部屋の空気を循環",
    "features": [
      "風量1〜3の運転音は35dB未満",
      "上下左右に自動で首振り",
      "風量6段階＋2/4/8時間タイマー",
      "適用床面積22畳・消費電力23W",
      "羽根とガードは分解して水洗い可"
    ],
    "img": "https://tshop.r10s.jp/enetroom/cabinet/11375185/11760512/imgrc0100049267.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fenetroom%2F273516-ss%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fenetroom%2F273516-ss%2F",
    "amazon": "https://www.amazon.co.jp/dp/B0DHCYCJQ2?tag=tanosiikitaic-22",
    "officialUrl": "https://www.irisohyama.co.jp/products/electrical-appliances/seasonal-appliances/circulator/ball-type/circulator-ai-dc-silent"
  },
  {
    "cat": "ricecooker",
    "maker": "象印",
    "model": "NW-SA10",
    "name": "STAN. IH炊飯ジャー",
    "price": 39600,
    "size": [
      "s",
      "m",
      "l"
    ],
    "focus": {
      "quiet": 2,
      "power": 2,
      "care": 3,
      "eco": 2,
      "compact": 2,
      "multi": 2
    },
    "point": "インテリアになじむSTAN.デザインのIH炊飯器",
    "features": [
      "フラットでお手入れ簡単",
      "落ち着いたマットデザイン",
      "わたし好み炊き分け",
      "5.5合炊き"
    ],
    "img": "https://tshop.r10s.jp/harika-hanno/cabinet/2023to/p254-277/20230612073638.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ftno%2Fnw-sa10%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Ftno%2Fnw-sa10%2F",
    "officialUrl": "https://www.zojirushi.co.jp/syohin/stan/product/ricecooker/nw-sa.html"
  },
  {
    "cat": "toothbrush",
    "maker": "ブラウン",
    "model": "オーラルB iO9",
    "name": "オーラルB iO9",
    "price": 38470,
    "size": [
      "s",
      "m",
      "l"
    ],
    "focus": {
      "quiet": 2,
      "power": 3,
      "care": 3,
      "eco": 2,
      "compact": 2,
      "multi": 3
    },
    "point": "リニアマグネット振動と歯ぐきケアの上位モデル",
    "features": [
      "やわらかな振動で歯垢を除去",
      "カラーディスプレイでガイド",
      "押しつけ防止センサー",
      "アプリで磨き残しチェック"
    ],
    "img": "https://tshop.r10s.jp/r-kojima/cabinet/n0000000027/4210201328223_1.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fr-kojima%2F4987176272409%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fr-kojima%2F4987176272409%2F",
    "amazon": "https://www.amazon.co.jp/dp/B08SJWNGDG?tag=tanosiikitaic-22",
    "officialUrl": "https://www.oralb.braun.co.jp/ja-jp/products/electric-toothbrushes/oral-b-io-series-9-electric-toothbrush"
  },
  {
    "cat": "heater",
    "maker": "シャープ",
    "model": "HX-TK12",
    "name": "プラズマクラスター加湿セラミックファンヒーター",
    "price": 22170,
    "size": [
      "s",
      "m"
    ],
    "focus": {
      "quiet": 2,
      "power": 3,
      "care": 3,
      "eco": 1,
      "compact": 1,
      "multi": 3
    },
    "img": "https://tshop.r10s.jp/selectkoh/cabinet/11307696/imgrc0179154750.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fselectkoh%2Fwho836%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fselectkoh%2Fwho836%2F",
    "point": "暖房と加湿を1台で。加湿量650mL/hは電気温風機クラス最大級",
    "features": [
      "暖房強 1200W(50Hz)・木造3畳/コンクリ4.5畳まで",
      "加湿量650mL/h・タンク3.1L(強＋加湿で連続約4.8h)",
      "加湿の適用は木造11畳・プレハブ18畳",
      "プラズマクラスター7000搭載・フィルター自動洗浄",
      "電気代 強 約37円/h(31円/kWh・50Hz)"
    ],
    "amazon": "https://www.amazon.co.jp/dp/B0DM8JRW5B?tag=tanosiikitaic-22",
    "officialUrl": "https://jp.sharp/danbou/products/hxtk12/"
  },
  {
    "cat": "heater",
    "maker": "パナソニック",
    "model": "DS-FTX1201",
    "name": "ナノイー搭載セラミックファンヒーター",
    "price": 30383,
    "size": [
      "s",
      "m"
    ],
    "focus": {
      "quiet": 2,
      "power": 3,
      "care": 3,
      "eco": 2,
      "compact": 2,
      "multi": 2
    },
    "img": "https://tshop.r10s.jp/hitcreations/cabinet/g/23/e9uhjrb4cb-3.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fhitcreations%2Fgr-e9uhjrb4cb%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fhitcreations%2Fgr-e9uhjrb4cb%2F",
    "point": "ナノイーと2WAY人センサー搭載。タテヨコ置きできる薄型",
    "features": [
      "温風 強1170W/中750W/弱530W(50Hz)",
      "2WAY人センサーで自動節電",
      "ナノイー搭載・アレルバスターフィルター",
      "41.5×21.5×14.0cm / 2.8kg",
      "電気代 強 約31.6円/h(27円/kWh換算)"
    ],
    "officialUrl": "https://panasonic.jp/danbo/products/DS-FTX1201/spec.html"
  },
  {
    "cat": "heater",
    "maker": "アイリスオーヤマ",
    "model": "ACH-LW12A",
    "name": "大風量セラミックファンヒーター Wセンサー付",
    "price": 8481,
    "size": [
      "s"
    ],
    "focus": {
      "quiet": 1,
      "power": 2,
      "care": 1,
      "eco": 3,
      "compact": 3,
      "multi": 1
    },
    "img": "https://tshop.r10s.jp/171online-shop/cabinet/home/04/4967576705394.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2F171online-shop%2F4967576705394%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2F171online-shop%2F4967576705394%2F",
    "point": "1万円以下でWセンサー。脱衣所や足元にちょうどいい1台",
    "features": [
      "ターボ1200W/標準1000W/節電550Wの3段階",
      "人感＋室温のWセンサーで自動運転",
      "木造3畳・コンクリ4.5畳まで(断熱材なし)",
      "270×130×378mm / 2.4kg と軽量",
      "温度設定16/20/24/28℃・転倒時停止"
    ],
    "amazon": "https://www.amazon.co.jp/dp/B0DF1HJLG9?tag=tanosiikitaic-22",
    "officialUrl": "https://www.irisohyama.co.jp/products/electrical-appliances/seasonal-appliances/ceramic-fan-heater/large-air-volume/large-air-volume-ceramic-fan-heater-with-motion-sensors"
  },
  {
    "cat": "heater",
    "maker": "パナソニック",
    "model": "DB-U12T",
    "name": "電気しき毛布 シングルSサイズ",
    "price": 6600,
    "size": [
      "s"
    ],
    "focus": {
      "quiet": 3,
      "power": 1,
      "care": 2,
      "eco": 3,
      "compact": 3,
      "multi": 1
    },
    "img": "https://tshop.r10s.jp/ksdenki/cabinet/images/63_5/4549077646163_5.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fksdenki%2F4549077646163%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fksdenki%2F4549077646163%2F",
    "point": "1時間 約1.0円。部屋ごと暖めない省エネ暖房",
    "features": [
      "消費電力 定格54W",
      "1時間の電気代 強 約1.0円(室温10℃)",
      "約140×80cmのシングルSサイズ",
      "標準表面温度 強51℃/中37℃",
      "コントローラーを外して丸洗い可"
    ],
    "officialUrl": "https://panasonic.jp/danbo/comparison.html"
  },
  {
    "cat": "heater",
    "maker": "コロナ",
    "model": "CHK-C12B",
    "name": "ウォールヒート 壁掛型遠赤外線暖房機",
    "price": 36250,
    "size": [
      "s"
    ],
    "focus": {
      "quiet": 3,
      "power": 2,
      "care": 2,
      "eco": 3,
      "compact": 3,
      "multi": 2
    },
    "img": "https://tshop.r10s.jp/auc-ventistyle/cabinet/corona/imgrc0131235750.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fauc-ventistyle%2Fchk-c126%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fauc-ventistyle%2Fchk-c126%2F",
    "point": "壁掛けで床を占領しない。脱衣所のヒートショック対策に",
    "features": [
      "壁掛け設置で床スペースを使わない",
      "強1200W／弱600Wの2段階切換",
      "人感センサーで自動ON・OFF",
      "運転音 弱26dB（強42dB）",
      "ecoオート運転・切タイマー0.5/1/2h",
      "夏は涼風運転も使える（日本製）"
    ],
    "amazon": "https://www.amazon.co.jp/dp/B0DGS4D2RH?tag=tanosiikitaic-22",
    "officialUrl": "https://www.corona.co.jp/heating/wallheat/lineup.html"
  },
  {
    "cat": "heater",
    "maker": "パナソニック",
    "model": "DC-2NK",
    "name": "着せかえカーペット用ヒーター 2畳",
    "price": 11324,
    "size": [
      "s",
      "m"
    ],
    "focus": {
      "quiet": 3,
      "power": 1,
      "care": 2,
      "eco": 2,
      "compact": 1,
      "multi": 2
    },
    "img": "https://tshop.r10s.jp/ec-current/cabinet/377/4549077646019.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fec-current%2F4549077646019%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fec-current%2F4549077646019%2F",
    "point": "足元から暖める2畳用。暖房面積を半分に切り換えて節電",
    "features": [
      "2畳相当・定格490W",
      "1時間の電気代 高 約10.4円／中 約7.1円",
      "暖房面積を2面で切換できる",
      "室温センサー・2H/4H切タイマー・切り忘れ防止(8時間)",
      "176×176cm・約3.2kg / 12折で収納",
      "ダニ対策機能つき"
    ],
    "amazon": "https://www.amazon.co.jp/dp/B01JS70F50?tag=tanosiikitaic-22",
    "officialUrl": "https://panasonic.jp/danbo/products/DC-2NK/spec.html"
  },
  {
    "cat": "heater",
    "maker": "デロンギ",
    "model": "RHJ21F0812-GY",
    "name": "オイルヒーター ヴェルティカルド",
    "price": 26800,
    "size": [
      "m"
    ],
    "focus": {
      "quiet": 3,
      "power": 2,
      "care": 3,
      "eco": 1,
      "compact": 1,
      "multi": 1
    },
    "img": "https://shop.r10s.jp/delonghi/cabinet/06618479/item/0108156301/imgrc0107005791.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fdelonghi%2F0108156301%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fdelonghi%2F0108156301%2F",
    "point": "風が出ないから乾燥しにくい。表面温度 約80℃のやけどしにくい設計",
    "features": [
      "消費電力1200W・適用畳数8〜10畳",
      "平均表面温度 約80℃で子ども部屋や寝室にも",
      "サーモスタットで設定温度を自動キープ",
      "24時間タイマー（30分単位でON/OFF設定）",
      "430×260×650mm / 13kg・キャスター付き",
      "電気代 最大 約37.2円/h（31円/kWh換算）"
    ],
    "amazon": "https://www.amazon.co.jp/dp/B09BTV9SSQ?tag=tanosiikitaic-22",
    "officialUrl": "https://www.delonghi.com/ja-jp/p/oiruhi%E3%83%BCta%E3%83%BC-rhj21f0812-wh-vueruteikarudo-oiruhi%E3%83%BCta%E3%83%BC-kamomi%E3%83%BCruhowaito/RHJ21F0812-WH.html"
  },
  {
    "cat": "heater",
    "maker": "コロナ",
    "model": "DH-1225R",
    "name": "遠赤外線暖房機 コアヒート",
    "price": 29650,
    "size": [
      "s"
    ],
    "focus": {
      "quiet": 2,
      "power": 3,
      "care": 2,
      "eco": 2,
      "compact": 2,
      "multi": 1
    },
    "img": "https://shop.r10s.jp/edion/cabinet/goods/ll/img_500/4906128560937_1.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fksdenki%2F4906128560937%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fksdenki%2F4906128560937%2F",
    "point": "シーズヒーターの遠赤外線でからだのしんまで温かい。省エネ機能も充実",
    "features": [
      "暖房出力1150W・温度調節11段階",
      "消費電力 通常1150〜330W／ゆらぎ運転820〜200W",
      "BCコーティングのシーズヒーターで遠赤外線を放射",
      "省エネセンサー＋ゆらぎ運転で電気代を節約",
      "タテヨコ自在・自動首振り3段階（30°/50°/70°）",
      "高さ718×幅343×奥行293mm / 6.3kg・日本製",
      "電気代 強 約35.7円/h（31円/kWh換算）"
    ],
    "officialUrl": "https://www.corona.co.jp/heating/coreheat/coreheat/lineup.html"
  },
  {
    "cat": "heater",
    "maker": "コロナ",
    "model": "DH-C925",
    "name": "遠赤外線電気ストーブ スリムカーボン",
    "price": 17380,
    "size": [
      "s"
    ],
    "focus": {
      "quiet": 2,
      "power": 2,
      "care": 2,
      "eco": 2,
      "compact": 3,
      "multi": 1
    },
    "img": "https://shop.r10s.jp/ksdenki/cabinet/images/39_5/4906128545439_5.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/5600500c.eee1bd55.5600500d.dffe8316/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fksdenki%2F4906128545439%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fksdenki%2F4906128545439%2F",
    "point": "3.4kgと軽くてスリム。スイッチひとつですぐ暖まるカーボンヒーター",
    "features": [
      "暖房出力900W・消費電力900〜350W（10段階）",
      "遠赤外線カーボンヒーターで立ち上がりが速い",
      "自動首振り（70°）で広めに暖める",
      "高さ897×幅306×奥行306mm / 3.4kg のスリム設計",
      "転倒オフスイッチ・過熱防止装置つき（日本製）",
      "電気代 強 約27.9円/h（31円/kWh換算）"
    ],
    "officialUrl": "https://www.corona.co.jp/heating/coreheat/slimcarbon/lineup.html"
  }
]
