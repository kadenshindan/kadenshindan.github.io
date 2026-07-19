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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Firisplaza-r%2F274315%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Firisplaza-r%2F274315%2F",
    "point": "静音とパワーを両立した定番DCモデル",
    "features": [
      "DCモーターで静音・省エネ",
      "上下左右の自動首振り",
      "〜24畳対応のパワフル送風",
      "風量10段階調整"
    ]
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fsiroca%2Fsf-16a351%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fsiroca%2Fsf-16a351%2F",
    "point": "3D首振り＋衣類乾燥モード搭載の新モデル",
    "features": [
      "3D首振りで部屋全体の空気を循環",
      "最大約28畳対応",
      "衣類乾燥モード搭載",
      "前カバー・羽根が外せてお手入れ簡単"
    ]
  },
  {
    "cat": "circulator",
    "maker": "山善",
    "model": "RCRP-BZX0151",
    "name": "コードレスサーキュレーター",
    "price": 16280,
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
    "img": "https://tshop.r10s.jp/ksdenki/cabinet/images/74_5/4550533270174_5.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fksdenki%2F4550533270174%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fksdenki%2F4550533270174%2F",
    "point": "コードレスでどこでも使える設置性の高さ",
    "features": [
      "充電式コードレスで持ち運び自由",
      "静音性に優れたDCモーター",
      "分解してお手入れしやすい設計",
      "コンパクトで省スペース"
    ]
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fenetroom%2Fi271000%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fenetroom%2Fi271000%2F",
    "point": "3,000円台で買える入門モデル",
    "features": [
      "圧倒的な低価格",
      "〜8畳の小部屋にちょうどいい",
      "シンプル操作で迷わない",
      "軽量コンパクト"
    ]
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Firodorikukan%2F21010526%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Firodorikukan%2F21010526%2F",
    "point": "竜巻状の直進気流で大空間もしっかり循環",
    "features": [
      "独自の竜巻気流で到達距離が長い",
      "広いリビングや吹き抜けに強い",
      "DCモーターで省エネ",
      "本格派の定番ブランド"
    ]
  },
  {
    "cat": "fan",
    "maker": "パナソニック",
    "model": "F-DR5Z",
    "name": "DCリビング扇風機 ナノイーX搭載",
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
    "img": "https://tshop.r10s.jp/r-kojima/cabinet/n0000001733/4550719157718_1.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fr-kojima%2F4550719157718%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fr-kojima%2F4550719157718%2F",
    "point": "1/fゆらぎの自然な風＋ナノイーX",
    "features": [
      "「1/fゆらぎ」でやさしい自然風",
      "ナノイーXで空気も清潔に",
      "DCモーターで静音・省エネ",
      "リモコン・タイマー完備"
    ]
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fgbft-ltd%2Fgb-inte-10bd%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fgbft-ltd%2Fgb-inte-10bd%2F",
    "point": "自然界の風を再現した高級扇風機の代名詞",
    "features": [
      "二重構造の羽根で面で広がる自然な風",
      "最小運転音は図書館より静か",
      "消費電力最小1.5Wの省エネ性",
      "デザイン性が高くインテリアに映える"
    ]
  },
  {
    "cat": "fan",
    "maker": "ツインバード",
    "model": "EF-E995W",
    "name": "3D首振り DC扇風機 コアンダエア",
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
    "point": "静音特化のコアンダエア現行モデル",
    "features": [
      "寝室に最適な圧倒的静音性",
      "3D首振りで部屋全体に風を届ける",
      "コアンダ効果でやわらかい風",
      "ツインバード公式ストアで購入可"
    ],
    "img": "https://tshop.r10s.jp/twinbird/cabinet/06297082/59951/59951.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ftwinbird%2F59951%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Ftwinbird%2F59951%2F"
  },
  {
    "cat": "fan",
    "maker": "山善",
    "model": "YLX-ED30",
    "name": "DCリビング扇風機",
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
    "img": "https://tshop.r10s.jp/e-kurashi/cabinet/main-img/021/main-t2z04.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fe-kurashi%2Fqj387%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fe-kurashi%2Fqj387%2F",
    "point": "1万円以下で買えるコスパDC扇風機",
    "features": [
      "DCモーター搭載で1万円以下",
      "風量8段階＋静音モード",
      "リモコン・タイマー付き",
      "初めてのDC扇風機にぴったり"
    ]
  },
  {
    "cat": "fan",
    "maker": "日立",
    "model": "HEF-DL300E",
    "name": "DC扇風機 うちわ風搭載",
    "price": 17770,
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
    "img": "https://tshop.r10s.jp/r-kojima/cabinet/n0000001722/4526044017645_1.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fr-kojima%2F4526044017645%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fr-kojima%2F4526044017645%2F",
    "point": "うちわのようなやさしい風が特徴",
    "features": [
      "独自の「うちわ風」機能",
      "8枚羽根でなめらかな送風",
      "お手入れしやすい前面ガード",
      "リビング向けの安定モデル"
    ]
  },
  {
    "cat": "humidifier",
    "maker": "象印",
    "model": "EE-DE50",
    "name": "スチーム式加湿器 4.0L",
    "price": 29800,
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
    "img": "https://tshop.r10s.jp/14promo/cabinet/imgrc0110835437.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2F14promo%2F20241226-22650%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2F14promo%2F20241226-22650%2F",
    "point": "フィルターレスで手入れが圧倒的にラク",
    "features": [
      "沸騰させた清潔な蒸気で加湿",
      "フィルター不要・フッ素加工でお手入れ簡単",
      "湿度＋室温のデュアルセンサー",
      "タンク4.0Lで長時間連続加湿"
    ]
  },
  {
    "cat": "humidifier",
    "maker": "象印",
    "model": "EE-DE35",
    "name": "スチーム式加湿器 2.2L",
    "price": 27980,
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
    "point": "一人暮らし・寝室向けのコンパクトスチーム式",
    "features": [
      "清潔なスチーム式をコンパクトに",
      "フィルター不要でお手入れ簡単",
      "寝室・個室にちょうどいいサイズ",
      "チャイルドロック搭載"
    ],
    "img": "https://tshop.r10s.jp/world-free-store/cabinet/system20250111/4974305227775.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fworld-free-store%2F4974305227775%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fworld-free-store%2F4974305227775%2F"
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fmedicell51%2F4906128541134%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fmedicell51%2F4906128541134%2F",
    "point": "一人暮らしの部屋干しにちょうどいい定番機",
    "features": [
      "6.3L/日でワンルームに最適",
      "夏に強いコンプレッサー式",
      "省エネ性に優れたコロナ製",
      "日本製で安心の品質"
    ]
  },
  {
    "cat": "dehumidifier",
    "maker": "シャープ",
    "model": "CV-S71",
    "name": "プラズマクラスター除湿機 7.1L",
    "price": 22800,
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
    "img": "https://tshop.r10s.jp/mrmax-r/cabinet/pb/12758812/imgrc0127080389.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fmrmax-r%2Fcv-s71-w%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fmrmax-r%2Fcv-s71-w%2F",
    "point": "プラズマクラスターで部屋干し臭も抑える",
    "features": [
      "除湿7.1L/日",
      "プラズマクラスターで生乾き臭対策",
      "衣類乾燥モード搭載",
      "コンパクトで移動もラク"
    ]
  },
  {
    "cat": "dehumidifier",
    "maker": "アイリスオーヤマ",
    "model": "IJC-H65",
    "name": "コンプレッサー式除湿機 6.5L",
    "price": 12800,
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Firisplaza-r%2F561929%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Firisplaza-r%2F561929%2F",
    "point": "軽くて安い、除湿機デビューの入門機",
    "features": [
      "1.5万円前後の手頃な価格",
      "6.5L/日の十分な除湿力",
      "軽量で持ち運びやすい",
      "シンプル操作"
    ]
  },
  {
    "cat": "dehumidifier",
    "maker": "三菱電機",
    "model": "MJ-P180WX",
    "name": "衣類乾燥除湿機 18L",
    "price": 45590,
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
    "img": "https://tshop.r10s.jp/bearmarche/cabinet/compass1774955126.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbearmarche%2F4573637000430%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fbearmarche%2F4573637000430%2F",
    "point": "18L/日級のパワーで家族の部屋干しも一気に乾く",
    "features": [
      "18L/日の大能力",
      "ワイド送風で大量の洗濯物に対応",
      "広いリビングの湿気対策にも",
      "部屋干しメインなら最有力"
    ]
  },
  {
    "cat": "dehumidifier",
    "maker": "コロナ",
    "model": "CD-WH1825",
    "name": "衣類乾燥除湿機 18L ホワイト",
    "price": 50380,
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fksdenki%2F4906128540731%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fksdenki%2F4906128540731%2F",
    "point": "大能力＋省エネDC送風のハイエンド機",
    "features": [
      "18L/日の大能力コンプレッサー式",
      "DCモーター送風で電気代を抑える",
      "広範囲スイング送風",
      "梅雨の大量部屋干しに強い"
    ]
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fauc-pcfreak%2F10003085%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fauc-pcfreak%2F10003085%2F",
    "point": "迷ったらこれ、加湿もできる国民的定番機",
    "features": [
      "空気清浄＋加湿の1台2役",
      "プラズマクラスター7000搭載",
      "花粉・ホコリ・ニオイに幅広く対応",
      "価格と性能のバランスが優秀"
    ]
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fsurprise-shop%2Ffu-u40-h%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fsurprise-shop%2Ffu-u40-h%2F",
    "point": "寝室・自室向けの静音スリムモデル",
    "features": [
      "脱臭性能とセンサー感度が優秀",
      "静音性が高く寝室向き",
      "スリムで置き場所を選ばない",
      "〜18畳対応"
    ]
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fniche-express%2Fdkn00000000122%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fniche-express%2Fdkn00000000122%2F",
    "point": "ニオイ分解力とフィルター長寿命が強み",
    "features": [
      "ストリーマでニオイ・有害物質を分解",
      "撥水・撥油のTAFUフィルター（10年交換不要）",
      "〜25畳対応",
      "ペット・タバコのニオイ対策に強い"
    ]
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fec-current%2F4549980751855%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fec-current%2F4549980751855%2F",
    "point": "花粉撃退気流と上質な加湿にこだわる人へ",
    "features": [
      "ナノイーX 4.8兆搭載",
      "床上の花粉を吸い取る花粉撃退気流",
      "加湿クオリティが高い",
      "〜25畳対応"
    ]
  },
  {
    "cat": "purifier",
    "maker": "アイリスオーヤマ",
    "model": "IAP-A25",
    "name": "空気清浄機 10畳",
    "price": 8000,
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
    "point": "1万円以下で始める空気清浄デビュー",
    "features": [
      "1万円以下の低価格",
      "〜10畳の個室に最適",
      "シンプル操作",
      "コンパクトで圧迫感がない"
    ],
    "img": "https://tshop.r10s.jp/trenditemshop/cabinet/skypiea/skypiea_0068/b0dpkl9pkt_1.jpg"
  },
  {
    "cat": "vacuum",
    "maker": "ダイソン",
    "model": "Micro Plus SV33",
    "name": "Dyson Micro Plus",
    "price": 38560,
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
    "img": "https://tshop.r10s.jp/slife/cabinet/rakus125_0028/b0cll1cmmb00.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fslife%2Fb0cll1cmmb%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fslife%2Fb0cll1cmmb%2F",
    "point": "1kg切りの軽さにダイソンの吸引力",
    "features": [
      "本体約0.97kgの超軽量",
      "ダイソンならではの強力吸引",
      "小回りが利いて掃除がラク",
      "ワンルーム〜2LDKに最適"
    ]
  },
  {
    "cat": "vacuum",
    "maker": "日立",
    "model": "PV-BL3M",
    "name": "ラクかるスティック",
    "price": 34785,
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fpc-bomber-shop%2F255030007040400%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fpc-bomber-shop%2F255030007040400%2F",
    "point": "0.8kgの超軽量で毎日の掃除が苦にならない",
    "features": [
      "業界トップクラスの軽さ0.8kg",
      "高い所や隙間もラクに届く",
      "自走式ヘッドで軽い操作感",
      "日本メーカーの安心感"
    ]
  },
  {
    "cat": "vacuum",
    "maker": "シャーク",
    "model": "EVOPOWER SYSTEM NEO+",
    "name": "エヴォパワーシステム NEO+",
    "price": 46090,
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
    "img": "https://tshop.r10s.jp/shark/cabinet/renamethum/p00/lc200j_ps.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fshark%2Flc200j-xccklc400j%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fshark%2Flc200j-xccklc400j%2F",
    "point": "自動ゴミ収集ドック付きのハイエンド機",
    "features": [
      "ドックに戻すだけで自動ゴミ収集",
      "iQセンサーで吸引力を自動調整",
      "カーボンファイバーで軽くて丈夫",
      "ハンディとしても使える2WAY"
    ]
  },
  {
    "cat": "vacuum",
    "maker": "アイリスオーヤマ",
    "model": "SCD-L3PD",
    "name": "マジカリーナ ゴミ回収ドック付き",
    "price": 49800,
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
    "img": "https://tshop.r10s.jp/ksdenki/cabinet/images/30_5/4967576831130_5.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fksdenki%2F4967576831130%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fksdenki%2F4967576831130%2F",
    "point": "5万円切りでゴミ自動回収ドック付き",
    "features": [
      "ゴミ捨ては数週間に1回でOK",
      "5万円を切るドック付きモデル",
      "軽量で扱いやすい",
      "静電モップ付きモデルも選べる"
    ]
  },
  {
    "cat": "vacuum",
    "maker": "ダイソン",
    "model": "V12 Detect Slim",
    "name": "Dyson V12 Detect Slim",
    "price": 59800,
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
    "img": "https://tshop.r10s.jp/superdeal/cabinet/09061004/10528769/11542220/5025155106518_00.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fsuperdeal%2F14872dysonsv46ff2412%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fsuperdeal%2F14872dysonsv46ff2412%2F",
    "point": "レーザーで見えないホコリまで可視化",
    "features": [
      "グリーンレーザーでゴミを可視化",
      "強力な吸引力とゴミ量の自動検知",
      "液晶でゴミの量とサイズを表示",
      "広い家の徹底掃除に"
    ]
  },
  {
    "cat": "robot",
    "maker": "エコバックス",
    "model": "DEEBOT T50 PRO OMNI",
    "name": "DEEBOT T50 PRO OMNI",
    "price": 129800,
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
    "img": "https://tshop.r10s.jp/store-ecovacs-japan/cabinet/campaign/260717/ddx57-12ee.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fstore-ecovacs-japan%2Fddx57-12ee%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fstore-ecovacs-japan%2Fddx57-12ee%2F",
    "point": "吸引力トップ級、水拭きまで全自動のベストバイ",
    "features": [
      "比較テストで吸引力トップの成績",
      "水拭き＋モップ洗浄・乾燥まで全自動",
      "ゴミ収集ドック付きで手間いらず",
      "セールで大幅値下げされることも"
    ]
  },
  {
    "cat": "robot",
    "maker": "シャオミ",
    "model": "X20 Max",
    "name": "ロボット掃除機 X20 Max",
    "price": 78000,
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
    "img": "https://tshop.r10s.jp/yasora/cabinet/clean/xia12.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fyasora%2Fxia12%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fyasora%2Fxia12%2F",
    "point": "7万円台で全部入りのコスパ王",
    "features": [
      "優れた障害物回避センサー",
      "吸引＋水拭きの2in1",
      "全自動ドック付きでこの価格",
      "コスパ最重視ならこれ"
    ]
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Firobotstore%2Fl12%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Firobotstore%2Fl12%2F",
    "point": "小型部門1位、ゴミ圧縮でドック不要",
    "features": [
      "本体内でゴミを圧縮、ドック不要",
      "省スペースで一人暮らしにも",
      "吸引＋水拭き対応",
      "信頼のルンバブランド"
    ]
  },
  {
    "cat": "robot",
    "maker": "ロボロック",
    "model": "Q Revo",
    "name": "Roborock Q Revo",
    "price": 76780,
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
    "img": "https://tshop.r10s.jp/roborockjapandirect/cabinet/products/12574614/imgrc0135322591.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Froborockjapandirect%2F6936905903426%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Froborockjapandirect%2F6936905903426%2F",
    "point": "モップ洗浄・乾燥まで任せられるハイエンド",
    "features": [
      "回転モップでしっかり水拭き",
      "モップ洗浄・乾燥・ゴミ収集を自動化",
      "高精度マッピングで賢く走行",
      "広い家・共働き家庭の強い味方"
    ]
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fanker%2Ft2250%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fanker%2Ft2250%2F"
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
    "img": "https://tshop.r10s.jp/yamada-denki/cabinet/a07000462/6614137019.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fyamada-denki%2F6614137019%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fyamada-denki%2F6614137019%2F",
    "point": "お米マイスター実証テスト1位のベストバイ",
    "features": [
      "専門家テストでベストバイ獲得",
      "IHの強火で甘みのある炊き上がり",
      "メニュー豊富で炊き分け可能",
      "5.5合でファミリーに最適"
    ]
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fden-mart%2F58378%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fden-mart%2F58378%2F",
    "point": "圧力IHでもちもち食感、手入れもラク",
    "features": [
      "圧力IHでもちもちの炊き上がり",
      "内ぶた・内なべの2点洗いでお手入れ簡単",
      "粒立ち炊飯で冷めてもおいしい",
      "比較テスト上位の実力機"
    ]
  },
  {
    "cat": "ricecooker",
    "maker": "パナソニック",
    "model": "SR-M10E4",
    "name": "おどり炊き 圧力IH炊飯器 5合",
    "price": 29700,
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fseishinjapan%2F4549980803288%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fseishinjapan%2F4549980803288%2F"
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fksdenki%2F4904710429082%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fksdenki%2F4904710429082%2F",
    "point": "1万円台前半で買える定番マイコン機",
    "features": [
      "1万円台前半の手頃な価格",
      "シンプル操作で使いやすい",
      "黒遠赤釜採用",
      "コスパ最優先ならこれ"
    ]
  },
  {
    "cat": "ricecooker",
    "maker": "タイガー",
    "model": "JRX-S100",
    "name": "土鍋ご泡火炊き",
    "price": 85580,
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fe-cutestyle%2Fp000000909871%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fe-cutestyle%2Fp000000909871%2F",
    "point": "本物の土鍋で炊く最高峰の一杯",
    "features": [
      "本土鍋の遠赤外線と泡立ちで炊く",
      "高級炊飯器の比較でベストバイ1位",
      "ごはんの香り・甘みが別格",
      "お米にこだわり抜きたい人へ"
    ]
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbellevie-harima%2Ft-fal-350%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fbellevie-harima%2Ft-fal-350%2F",
    "point": "売れ筋1位、カップ1杯約1分で沸く",
    "features": [
      "カップ1杯分が約1分で沸騰",
      "転倒お湯もれロック機能",
      "1.2Lでファミリーにも十分",
      "価格.com売れ筋1位の定番"
    ]
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fpayoff%2Fpk07609%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fpayoff%2Fpk07609%2F",
    "point": "沸騰3分台の速さとデザイン性を両立",
    "features": [
      "実測3分台の沸騰スピード",
      "転倒湯もれ防止など安全設計",
      "ハンドドリップしやすい注ぎ口",
      "インテリアに映えるSTAN.デザイン"
    ]
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fpatie%2Ft-fal-349%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fpatie%2Ft-fal-349%2F",
    "point": "コンパクトで一人暮らしにちょうどいい",
    "features": [
      "0.8Lの省スペースサイズ",
      "転倒お湯もれロック付き",
      "軽くて扱いやすい",
      "比較テストでも高評価"
    ]
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fr-kojima%2F4974305230997%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fr-kojima%2F4974305230997%2F",
    "point": "安全機能全部入りの大容量モデル",
    "features": [
      "1.5Lの大容量でファミリー向け",
      "転倒湯もれ防止・本体二重構造",
      "蒸気レス設計で置き場所を選ばない",
      "比較テスト高評価の安心設計"
    ]
  },
  {
    "cat": "kettle",
    "maker": "山善",
    "model": "YKU-S1210J",
    "name": "温度調節電気ケトル 1.2L",
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
    "img": "https://tshop.r10s.jp/e-kurashi/cabinet/main-img/018/main-s4x25.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fe-kurashi%2F76033%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fe-kurashi%2F76033%2F",
    "point": "1℃単位の温度調節でコーヒー党に人気",
    "features": [
      "60〜100℃の温度設定が可能",
      "細口ノズルでドリップしやすい",
      "保温機能付き",
      "比較テスト上位の実力派"
    ]
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fpanasonic-store%2Feh-na0j-a%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fpanasonic-store%2Feh-na0j-a%2F",
    "point": "高浸透ナノイーでうるおい最高峰",
    "features": [
      "高浸透ナノイーで髪にうるおい",
      "人気ランキング常連の定番",
      "スマートセンシングで熱をコントロール",
      "仕上がり重視ならこれ"
    ]
  },
  {
    "cat": "dryer",
    "maker": "パナソニック",
    "model": "EH-NA0J",
    "name": "ヘアードライヤー ナノケア(型落ち)",
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
      "eco": 3,
      "compact": 2,
      "multi": 2
    },
    "img": "https://tshop.r10s.jp/panasonic-store/cabinet/banner/thumb/eh-na0k_004.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fpanasonic-store%2Feh-na0j-a%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fpanasonic-store%2Feh-na0j-a%2F",
    "point": "最新とほぼ同性能、型落ちでお得",
    "features": [
      "EH-NA0Kとほぼ同性能",
      "型落ちで数千円お得",
      "高浸透ナノイー搭載",
      "賢く買いたい人の定番choice"
    ]
  },
  {
    "cat": "dryer",
    "maker": "ダイソン",
    "model": "Supersonic HD08",
    "name": "Dyson Supersonic",
    "price": 24800,
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fmatukaze%2F5025155117699%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fmatukaze%2F5025155117699%2F",
    "point": "圧倒的風量でとにかく速く乾かす",
    "features": [
      "大風量でロングヘアも速乾",
      "過度な熱を防ぐ温度制御",
      "マグネット式アタッチメント",
      "時短最優先ならこれ"
    ]
  },
  {
    "cat": "dryer",
    "maker": "パナソニック",
    "model": "EH-NE7L",
    "name": "イオニティ 大風量ドライヤー",
    "price": 11244,
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
    "img": "https://tshop.r10s.jp/nrfonline/cabinet/onesell527/nrf43c5e1fb83.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fnrfonline%2Fnrf43c5e1fb83%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fnrfonline%2Fnrf43c5e1fb83%2F",
    "point": "1万円台で大風量1.6m³/分",
    "features": [
      "風量1.6m³/分の速乾クラス",
      "ミネラルマイナスイオン搭載",
      "低温ケアモード付き",
      "コスパと速乾の両立"
    ]
  },
  {
    "cat": "dryer",
    "maker": "コイズミ",
    "model": "MONSTER KHD-W925",
    "name": "モンスター ダブルファンドライヤー",
    "price": 17980,
    "size": [
      "m",
      "l"
    ],
    "focus": {
      "quiet": 1,
      "power": 3,
      "care": 1,
      "eco": 3,
      "compact": 1,
      "multi": 1
    },
    "img": "https://tshop.r10s.jp/ecmaison/cabinet/compass1770876199.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fecmaison%2Fcompass1770876220%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fecmaison%2Fcompass1770876220%2F",
    "point": "1万円前後で買える大風量モンスター",
    "features": [
      "ダブルファンの圧倒的風量",
      "1万円前後の手頃さ",
      "家族みんなでガンガン使える",
      "速乾コスパ最強クラス"
    ]
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fhikaritv%2F2010125118%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fhikaritv%2F2010125118%2F",
    "point": "音波水流で歯ぐきにやさしい定番機",
    "features": [
      "毎分約31,000回の音波振動",
      "歯間・歯周ポケットの汚れもケア",
      "過圧防止センサー搭載",
      "迷ったらこれの定番モデル"
    ]
  },
  {
    "cat": "toothbrush",
    "maker": "ブラウン",
    "model": "オーラルB iO4S",
    "name": "オーラルB iO4S",
    "price": 15778,
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
    "img": "https://tshop.r10s.jp/shopavail/cabinet/07943905/compass1751508614.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fshopavail%2F2630%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fshopavail%2F2630%2F",
    "point": "回転式のパワフル洗浄で磨き残しなし",
    "features": [
      "丸型ブラシが歯を包み込んで磨く",
      "歯科クリーニングに近い仕上がり",
      "押し付け防止センサー",
      "しっかり磨きたい人向け"
    ]
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fhfstore%2Ffi01%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fhfstore%2Ffi01%2F",
    "point": "7千円以下で買える音波式エントリー",
    "features": [
      "音波式をこの価格で",
      "USB充電対応で旅行にも",
      "過圧防止センサー付き",
      "電動歯ブラシデビューに最適"
    ]
  },
  {
    "cat": "toothbrush",
    "maker": "ブラウン",
    "model": "オーラルB すみずみクリーンEX",
    "name": "オーラルB すみずみクリーンEX",
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Foralb-braun%2Feb-scy_r%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Foralb-braun%2Feb-scy_r%2F",
    "point": "6千円以下の回転式入門機",
    "features": [
      "回転式のパワフル洗浄を手頃に",
      "替えブラシも安くて続けやすい",
      "シンプル操作",
      "まず試したい人にぴったり"
    ]
  },
  {
    "cat": "toothbrush",
    "maker": "ブラウン",
    "model": "オーラルB iO シリーズ10",
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fauc-worldichi%2F4987176160720%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fauc-worldichi%2F4987176160720%2F",
    "point": "AIガイド付きの最上位フラッグシップ",
    "features": [
      "AIが磨き残しをリアルタイム表示",
      "歯ぐきの状態に合わせた圧力制御",
      "充電しながら除菌できるケース付き",
      "口腔ケアを極めたい人へ"
    ]
  },
  {
    "cat": "circulator",
    "maker": "バルミューダ",
    "model": "GreenFan C2",
    "name": "GreenFan C2 サーキュレーター",
    "price": 25800,
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fgbft-ltd%2F5z-fym8-dkvd%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fgbft-ltd%2F5z-fym8-dkvd%2F"
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fmujirushi-ryohin%2F4550584865336%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fmujirushi-ryohin%2F4550584865336%2F"
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fe-kurashi%2Ft0h59%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fe-kurashi%2Ft0h59%2F"
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fdoshisha-marche%2Fk-f28ay%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fdoshisha-marche%2Fk-f28ay%2F"
  },
  {
    "cat": "fan",
    "maker": "アイリスオーヤマ",
    "model": "LFD-307L",
    "name": "リモコン式DCリビング扇",
    "price": 7380,
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Femedama%2F4967576774574%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Femedama%2F4967576774574%2F"
  },
  {
    "cat": "humidifier",
    "maker": "ダイニチ",
    "model": "HD-RXT524",
    "name": "ハイブリッド式加湿器 RXタイプ",
    "price": 27280,
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
      "multi": 2
    },
    "point": "静音×パワフルの加湿器売れ筋トップ級",
    "features": [
      "ハイブリッド式で速く静かに加湿",
      "業界トップクラスの静音設計",
      "タンクが洗いやすく清潔",
      "リビング〜寝室まで幅広く対応"
    ],
    "img": "https://tshop.r10s.jp/ksdenki/cabinet/images/29_5/4951272036029_5.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fksdenki%2F4951272036029%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fksdenki%2F4951272036029%2F"
  },
  {
    "cat": "humidifier",
    "maker": "シャープ",
    "model": "HV-S55",
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
    "point": "上からも注げる「どっちも給水」が便利",
    "features": [
      "上から注ぐだけの簡単給水",
      "プラズマクラスターで清潔加湿",
      "ハイブリッド式で効率よく加湿",
      "お手入れしやすい設計"
    ],
    "img": "https://tshop.r10s.jp/14promo/cabinet/11200097/imgrc0103905120.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2F14promo%2F20240207-22500%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2F14promo%2F20240207-22500%2F"
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
    "point": "広いリビング向けのハイパワースチーム式",
    "features": [
      "広いリビングでも使えるハイパワー加湿",
      "清潔な沸騰スチーム式",
      "フィルター不要でお手入れ簡単",
      "加湿力最優先の家庭に"
    ],
    "img": "https://tshop.r10s.jp/14promo/cabinet/imgrc0103853607.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2F14promo%2F20241226-39300%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2F14promo%2F20241226-39300%2F"
  },
  {
    "cat": "dehumidifier",
    "maker": "パナソニック",
    "model": "F-YHVX120",
    "name": "ハイブリッド式衣類乾燥除湿機",
    "price": 58480,
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
    "point": "1年中スピード乾燥のハイブリッド最高峰",
    "features": [
      "夏も冬も乾燥スピードが落ちないハイブリッド式",
      "ナノイーXで部屋干し臭を抑制",
      "ツインルーバーで幅広く送風",
      "衣類乾燥の最上位クラス"
    ],
    "img": "https://tshop.r10s.jp/ecmaison/cabinet/compass1779782165.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fecmaison%2Fcompass1779782218%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fecmaison%2Fcompass1779782218%2F"
  },
  {
    "cat": "dehumidifier",
    "maker": "シャープ",
    "model": "CV-SH150",
    "name": "ハイブリッド式除湿機 プラズマクラスター",
    "price": 36800,
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fhikaritv%2F2000126164%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fhikaritv%2F2000126164%2F"
  },
  {
    "cat": "dehumidifier",
    "maker": "アイリスオーヤマ",
    "model": "IJD-I50",
    "name": "サーキュレーター衣類乾燥除湿機",
    "price": 16800,
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Firisplaza-r%2F274018%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Firisplaza-r%2F274018%2F"
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
    "point": "加湿もできるダイキンの上位モデル",
    "features": [
      "ストリーマ+加湿の1台2役",
      "TAFUフィルターで10年交換不要",
      "ニオイ・花粉への分解力が強み",
      "広いリビングにも対応"
    ],
    "img": "https://tshop.r10s.jp/niche-express/cabinet/2025/dkn/01/dkn00000000067-01.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fniche-express%2Fdkn00000000067%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fniche-express%2Fdkn00000000067%2F"
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fryohinseikatsukan%2Ftsuhan-123-c300s%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fryohinseikatsukan%2Ftsuhan-123-c300s%2F"
  },
  {
    "cat": "purifier",
    "maker": "ブルーエア",
    "model": "Blue Max 3250i",
    "name": "Blue Max 3250i 空気清浄機",
    "price": 22700,
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fblueair%2Fb-110157%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fblueair%2Fb-110157%2F"
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fpanasonic-store%2Fmc-ns10ke-k%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fpanasonic-store%2Fmc-ns10ke-k%2F"
  },
  {
    "cat": "vacuum",
    "maker": "日立",
    "model": "PV-BL50L",
    "name": "パワかるスティック",
    "price": 36958,
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ftownland%2Fy-pv-bl50j-n%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Ftownland%2Fy-pv-bl50j-n%2F"
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fyamamura%2Fcl107fdshw01%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fyamamura%2Fcl107fdshw01%2F"
  },
  {
    "cat": "robot",
    "maker": "SwitchBot",
    "model": "K10+",
    "name": "ロボット掃除機 K10+",
    "price": 34800,
    "size": [
      "s"
    ],
    "focus": {
      "quiet": 3,
      "power": 2,
      "care": 3,
      "eco": 2,
      "compact": 3,
      "multi": 3
    },
    "point": "世界最小クラス、狭い部屋・家具の多い家に",
    "features": [
      "直径25cmの世界最小クラス",
      "静音設計で夜も使いやすい",
      "ゴミ収集ドック付き",
      "一人暮らしのワンルームに最適"
    ],
    "img": "https://tshop.r10s.jp/plex/cabinet/swichbot/850043739975-1.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fplex%2F15100185%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fplex%2F15100185%2F"
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Firobotstore%2Fy31%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Firobotstore%2Fy31%2F"
  },
  {
    "cat": "ricecooker",
    "maker": "象印",
    "model": "NW-FC10",
    "name": "炎舞炊き 圧力IH 5.5合",
    "price": 95300,
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
    "img": "https://tshop.r10s.jp/e-cutestyle/cabinet/img047/p000000874797_1.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fe-cutestyle%2Fp000000874797%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fe-cutestyle%2Fp000000874797%2F"
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fa-price%2F4974305231390%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fa-price%2F4974305231390%2F"
  },
  {
    "cat": "kettle",
    "maker": "バルミューダ",
    "model": "The Pot",
    "name": "BALMUDA The Pot 0.6L",
    "price": 13090,
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
      "0.6Lの1〜2人用サイズ"
    ],
    "img": "https://tshop.r10s.jp/kazamidori/cabinet/products26/4560330113307.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkazamidori%2F4560330113307%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fkazamidori%2F4560330113307%2F"
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fdelonghi%2F0210100062%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fdelonghi%2F0210100062%2F"
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ftoolandmeal%2F10017263%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Ftoolandmeal%2F10017263%2F"
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fmtgec-beauty%2F1382920101%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fmtgec-beauty%2F1382920101%2F"
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fshopch-r%2F4000765255001%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fshopch-r%2F4000765255001%2F"
  },
  {
    "cat": "dryer",
    "maker": "サロニア",
    "model": "スピーディーイオンドライヤー",
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbeautyeveryday%2F4582267399890%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fbeautyeveryday%2F4582267399890%2F"
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
    "img": "https://tshop.r10s.jp/ebest/cabinet/479/4550719010105.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Febest%2F4550719010105%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Febest%2F4550719010105%2F"
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ftownland-neo%2Fy-ht-b304-w%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Ftownland-neo%2Fy-ht-b304-w%2F"
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fsiroca%2Fsf-c151%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fsiroca%2Fsf-c151%2F"
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fec-current%2F4904530144356%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fec-current%2F4904530144356%2F"
  },
  {
    "cat": "fan",
    "maker": "ドウシシャ",
    "model": "PIERIA スリムタワーファン",
    "name": "PIERIA スリムコンパクトファン",
    "price": 3190,
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
    "point": "3千円台・省スペースのタワーファン",
    "features": [
      "置き場所を選ばないスリム設計",
      "3千円台の手軽さ",
      "デスク横や脱衣所にも",
      "シンプル操作"
    ],
    "img": "https://tshop.r10s.jp/freivagarden/cabinet/1/imgrc0107235111.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ffreivagarden%2Fb08xm7cnht-1980%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Ffreivagarden%2Fb08xm7cnht-1980%2F"
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fe-kurashi%2Fs4f79%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fe-kurashi%2Fs4f79%2F"
  },
  {
    "cat": "humidifier",
    "maker": "ダイニチ",
    "model": "HD-LXタイプ",
    "name": "ハイブリッド式加湿器 LXタイプ",
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fksdenki%2F4951272036081%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fksdenki%2F4951272036081%2F"
  },
  {
    "cat": "humidifier",
    "maker": "BRUNO",
    "model": "ハイブリッド加湿器 4.7L",
    "name": "ハイブリッドUV加湿器 4.7L",
    "price": 13200,
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbruno-official%2F7761193%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fbruno-official%2F7761193%2F"
  },
  {
    "cat": "dehumidifier",
    "maker": "山善",
    "model": "衣類乾燥除湿機",
    "name": "コンプレッサー式衣類乾燥除湿機",
    "price": 15800,
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
    "point": "1.5万円台で部屋干し対策デビュー",
    "features": [
      "夏に強いコンプレッサー式",
      "衣類乾燥モード搭載",
      "1.5万円台の手頃な価格",
      "山善公式ストアで購入可"
    ],
    "img": "https://tshop.r10s.jp/e-kurashi/cabinet/rank-img/020/main-r8p23.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fe-kurashi%2Fs1k76%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fe-kurashi%2Fs1k76%2F"
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fshark%2Fwv416j-xkitmtwut400j%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fshark%2Fwv416j-xkitmtwut400j%2F"
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fdenkichiweb%2F4904530134388%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fdenkichiweb%2F4904530134388%2F"
  },
  {
    "cat": "vacuum",
    "maker": "ツインバード",
    "model": "TC-E124",
    "name": "サイクロンスティック掃除機",
    "price": 4580,
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fa-price%2F4975058513528%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fa-price%2F4975058513528%2F"
  },
  {
    "cat": "robot",
    "maker": "エコバックス",
    "model": "DEEBOT N20",
    "name": "DEEBOT N20 ロボット掃除機",
    "price": 69800,
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fstore-ecovacs-japan%2Fdkx55-12ee%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fstore-ecovacs-japan%2Fdkx55-12ee%2F"
  },
  {
    "cat": "ricecooker",
    "maker": "日立",
    "model": "ふっくら御膳",
    "name": "圧力&スチームIH炊飯器 ふっくら御膳 5.5合",
    "price": 26970,
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
    "img": "https://tshop.r10s.jp/emedama/cabinet/5698/4549873195698_1.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Femedama%2F4549873195698%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Femedama%2F4549873195698%2F"
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fsuperdeal%2F14542rc10vrv2411%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fsuperdeal%2F14542rc10vrv2411%2F"
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fe-kurashi%2F33518%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fe-kurashi%2F33518%2F"
  },
  {
    "cat": "kettle",
    "maker": "タイガー",
    "model": "わく子 PCM-A080",
    "name": "蒸気レス電気ケトル わく子 0.8L",
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
    "point": "蒸気レスで置き場所を選ばない定番",
    "features": [
      "蒸気が出ず結露・やけどの心配が少ない",
      "転倒お湯もれ防止など安全設計",
      "カップ1杯が約45秒のスピード沸騰",
      "タイガー公式ストアで購入可"
    ],
    "img": "https://tshop.r10s.jp/tiger-online/cabinet/pcm-n080_ra260710.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ftiger-online%2Fpcm-a080%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Ftiger-online%2Fpcm-a080%2F"
  },
  {
    "cat": "kettle",
    "maker": "ハリオ",
    "model": "エレクトリックケトル",
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Finterior-palette%2F472408%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Finterior-palette%2F472408%2F"
  },
  {
    "cat": "dryer",
    "maker": "パナソニック",
    "model": "EH-NA2K",
    "name": "ナノケア コンパクトタイプ",
    "price": 14100,
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
    "point": "1万円台で買えるコンパクトナノケア",
    "features": [
      "ナノイー搭載をこの価格で",
      "軽量コンパクトで扱いやすい",
      "持ち運び・旅行にも便利",
      "ナノケア入門に最適"
    ],
    "img": "https://tshop.r10s.jp/shop-24/cabinet/biiino/item/174-6.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fshop-24%2F4549980735978%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fshop-24%2F4549980735978%2F"
  },
  {
    "cat": "dryer",
    "maker": "KINUJO",
    "model": "絹女 ドライヤー",
    "name": "KINUJO Hair Dryer",
    "price": 30300,
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
      "約363gの超軽量ボディ",
      "大風量で速乾なのに静か",
      "遠赤外線でうるおいケア",
      "サロン品質の仕上がり"
    ],
    "img": "https://tshop.r10s.jp/fastep/cabinet/09581633/imgrc0115029990.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ffastep%2Fft-1009%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Ffastep%2Fft-1009%2F"
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fatomya%2Fnb-dr-fps-ec%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fatomya%2Fnb-dr-fps-ec%2F"
  },
  {
    "cat": "toothbrush",
    "maker": "フィリップス",
    "model": "ダイヤモンドクリーン 9000",
    "name": "ソニッケアー ダイヤモンドクリーン 9000",
    "price": 15800,
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
    "point": "ソニッケアー上位機がセール価格帯に",
    "features": [
      "ホワイトニングに強い上位モデル",
      "4つのモード+3段階の強さ調整",
      "過圧防止センサー搭載",
      "スタイリッシュなデザイン"
    ],
    "img": "https://tshop.r10s.jp/nowpick/cabinet/biiino/item/main-image/20260620004255_1.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fnowpick%2Fhx9911%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fnowpick%2Fhx9911%2F"
  },
  {
    "cat": "circulator",
    "maker": "山善",
    "model": "洗える360°サーキュレーター",
    "name": "全分解で洗える360°首振りサーキュレーター",
    "price": 9980,
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
    "point": "全パーツ分解して丸洗いできる清潔派",
    "features": [
      "羽根もカバーも全分解して洗える",
      "360°首振りで部屋中の空気を循環",
      "DCモーターで静音・省エネ",
      "山善公式ストアで購入可"
    ],
    "img": "https://tshop.r10s.jp/e-kurashi/cabinet/sku-img/001/sku-r9w52.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fe-kurashi%2F76220%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fe-kurashi%2F76220%2F"
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Firisplaza-r%2F282763%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Firisplaza-r%2F282763%2F"
  },
  {
    "cat": "humidifier",
    "maker": "象印",
    "model": "EE-RS35",
    "name": "スチーム式加湿器 ベーシック 2.2L",
    "price": 19422,
    "size": [
      "s"
    ],
    "focus": {
      "quiet": 1,
      "power": 2,
      "care": 3,
      "eco": 2,
      "compact": 2,
      "multi": 1
    },
    "point": "象印スチーム式の入門ベーシック機",
    "features": [
      "清潔な沸騰スチーム式",
      "フィルター不要でお手入れ簡単",
      "寝室・個室にちょうどいい2.2L",
      "2万円以下で買える象印"
    ],
    "img": "https://tshop.r10s.jp/rugia/cabinet/onesell137/rg363aadd880.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Frugia%2Frg363aadd880%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Frugia%2Frg363aadd880%2F"
  },
  {
    "cat": "dehumidifier",
    "maker": "三菱電機",
    "model": "MJ-M120RX",
    "name": "衣類乾燥除湿機 サラリ 12L",
    "price": 47980,
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
    "point": "ムーブアイ搭載、賢く乾かすサラリ",
    "features": [
      "ムーブアイが濡れた衣類を狙って送風",
      "12L/日のしっかり除湿",
      "夜干しに使える静音設計",
      "部屋干しの質を上げたい家庭に"
    ],
    "img": "https://tshop.r10s.jp/r-u-happiness/cabinet/10261635/12063833/13296320/01.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fr-u-happiness%2Fmj-m120rx-w%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fr-u-happiness%2Fmj-m120rx-w%2F"
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fsanrex2%2Ftd-c60r-w%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fsanrex2%2Ftd-c60r-w%2F"
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ftoconnect%2F10000022%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Ftoconnect%2F10000022%2F"
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fec-current%2F4549980860977%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fec-current%2F4549980860977%2F"
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fa-price%2F4549873161426%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fa-price%2F4549873161426%2F"
  },
  {
    "cat": "robot",
    "maker": "Dreame",
    "model": "D10 Plus",
    "name": "Dreame D10 Plus ロボット掃除機",
    "price": 69800,
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
    "point": "2万円台で自動ゴミ収集付きの破格モデル",
    "features": [
      "自動ゴミ収集ドック付きでこの価格",
      "レーザーマッピングで賢く走行",
      "吸引+水拭き対応",
      "世界シェア急成長ブランド"
    ],
    "img": "https://tshop.r10s.jp/dreame-shop/cabinet/11302689/imgrc0140534087.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fdreame-shop%2Fd10plus%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fdreame-shop%2Fd10plus%2F"
  },
  {
    "cat": "ricecooker",
    "maker": "パナソニック",
    "model": "ビストロ SR-X710D",
    "name": "ビストロ 可変圧力IHジャー炊飯器 5.5合",
    "price": 59944,
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
    "img": "https://tshop.r10s.jp/panasonic-store/cabinet/banner/thumb/sr-x710d_003.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fpanasonic-store%2Fsr-x710d-h%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fpanasonic-store%2Fsr-x710d-h%2F"
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Firisplaza-r%2F517435%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Firisplaza-r%2F517435%2F"
  },
  {
    "cat": "ricecooker",
    "maker": "バーミキュラ",
    "model": "ライスポット",
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fvermicular-rshop%2Frp23a-sv%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fvermicular-rshop%2Frp23a-sv%2F"
  },
  {
    "cat": "kettle",
    "maker": "ビタントニオ",
    "model": "ACTY2",
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fselect-rainbow%2F4968291311532%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fselect-rainbow%2F4968291311532%2F"
  },
  {
    "cat": "kettle",
    "maker": "象印",
    "model": "CK-DA10",
    "name": "電気ケトル 1.0L",
    "price": 5080,
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
    "point": "5千円で象印の安心安全設計",
    "features": [
      "転倒湯もれ防止構造",
      "本体が熱くなりにくい二重構造",
      "1.0Lの使いやすいサイズ",
      "5千円前後の高コスパ"
    ],
    "img": "https://tshop.r10s.jp/nttxstore/cabinet/12563235/qzx0031257.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fnttxstore%2Fqzx0031257%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fnttxstore%2Fqzx0031257%2F"
  },
  {
    "cat": "dryer",
    "maker": "ホリスティックキュアーズ",
    "model": "マグネットヘアプロ",
    "name": "マグネットヘアプロ ドライヤー",
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
      "公式店限定の長期保証付き"
    ],
    "img": "https://tshop.r10s.jp/holistic-cures/cabinet/mg/0000mg_0001.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fholistic-cures%2Fmhp-dryer0%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fholistic-cures%2Fmhp-dryer0%2F"
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fya-man%2Fr2503c%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fya-man%2Fr2503c%2F"
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fcuraprox%2F73349336%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fcuraprox%2F73349336%2F"
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fr-kojima%2F8720689050845%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fr-kojima%2F8720689050845%2F"
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbluxe-store%2Fcfaz2601%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fbluxe-store%2Fcfaz2601%2F"
  },
  {
    "cat": "humidifier",
    "maker": "アイリスオーヤマ",
    "model": "AHM-UU2",
    "name": "上給水超音波加湿器",
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
      "上から給水でラクに注げる",
      "超音波式で静か・省エネ",
      "寝室・デスクにちょうどいい"
    ],
    "img": "https://tshop.r10s.jp/171online-shop/cabinet/home/04/4967576705516.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2F171online-shop%2F4967576705516%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2F171online-shop%2F4967576705516%2F"
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
    "point": "シャープ最上位、広いリビングの1台",
    "features": [
      "最上位プラズマクラスターNEXT搭載",
      "大容量加湿+パワフル清浄",
      "アプリ連携で空気を見える化"
    ],
    "img": "https://tshop.r10s.jp/try3/cabinet/11147956/11147958/4550556135689.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ftry3%2F4550556135689%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Ftry3%2F4550556135689%2F"
  },
  {
    "cat": "purifier",
    "maker": "シャープ",
    "model": "薄型スリム プラズマクラスター",
    "name": "薄型スリム空気清浄機",
    "price": 32800,
    "size": [
      "m"
    ],
    "focus": {
      "quiet": 2,
      "power": 2,
      "care": 2,
      "eco": 2,
      "compact": 3,
      "multi": 2
    },
    "point": "厚さスリムで置き場所に困らない",
    "features": [
      "家具の隙間にも置ける薄型設計",
      "プラズマクラスター搭載",
      "スリムでも広めの部屋に対応"
    ],
    "img": "https://tshop.r10s.jp/e-kurashi/cabinet/main-img/021/main-s9f44.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fe-kurashi%2Fs9f44%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fe-kurashi%2Fs9f44%2F"
  },
  {
    "cat": "vacuum",
    "maker": "ダイソン",
    "model": "V8 Slim Fluffy",
    "name": "Dyson V8 Slim Fluffy",
    "price": 30699,
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
      "multi": 1
    },
    "point": "3万円で買える日本向け軽量ダイソン",
    "features": [
      "日本の住環境向けの軽量スリム設計",
      "ダイソンの吸引力を手頃に",
      "公式ストアで購入可"
    ],
    "img": "https://tshop.r10s.jp/dyson/cabinet/product/09439639/sv10kextbk_sale_em.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fdyson%2F436158-01%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fdyson%2F436158-01%2F"
  },
  {
    "cat": "robot",
    "maker": "エコバックス",
    "model": "DEEBOT mini",
    "name": "DEEBOT mini ロボット掃除機",
    "price": 69800,
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fstore-ecovacs-japan%2Fdjx11-11ee%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fstore-ecovacs-japan%2Fdjx11-11ee%2F"
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fjyousui%2Fnj-bw10f-b-001%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fjyousui%2Fnj-bw10f-b-001%2F"
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Femedama%2F4974019149820%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Femedama%2F4974019149820%2F"
  },
  {
    "cat": "kettle",
    "maker": "ティファール",
    "model": "温度調節電気ケトル",
    "name": "アプレシア 温度コントロール",
    "price": 9791,
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
    "point": "7段階の温度設定ができるティファール",
    "features": [
      "飲み物に合わせた温度設定",
      "60分の保温機能付き",
      "定番ティファールの温調モデル"
    ],
    "img": "https://tshop.r10s.jp/bellevie-harima/cabinet/0101/default/s1/t-fal-293_black0201.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbellevie-harima%2Ft-fal-293%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fbellevie-harima%2Ft-fal-293%2F"
  },
  {
    "cat": "dryer",
    "maker": "モッズヘア",
    "model": "MHD-12",
    "name": "ダブルイオンヘアードライヤー",
    "price": 4356,
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fr-kojima%2F4968291313826%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fr-kojima%2F4968291313826%2F"
  },
  {
    "cat": "toothbrush",
    "maker": "ブラウン",
    "model": "オーラルB iO5",
    "name": "オーラルB iO5",
    "price": 13080,
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
    "point": "上位のiOシリーズを1.3万円で",
    "features": [
      "遠心マイクロモーションの磨き心地",
      "AI磨きガイド対応",
      "iOシリーズのコスパ担当"
    ],
    "img": "https://tshop.r10s.jp/nowpick/cabinet/biiino/item/main-image/20260627153823_1.jpg",
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fnowpick%2Fobpio5%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fnowpick%2Fobpio5%2F"
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
    "rakuten": "https://hb.afl.rakuten.co.jp/hgc/55d685fe.6c6518d7.55d685ff.2b70ebf0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fedion%2F4549980052068%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fedion%2F4549980052068%2F"
  },
  {
    "cat": "robot",
    "maker": "ロボロック",
    "model": "S8 Pro Ultra",
    "name": "Roborock S8 Pro Ultra",
    "price": 119800,
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
    "point": "ゴミ収集からモップ洗浄まで全部入りの高性能フラッグシップ",
    "features": [
      "最大級クラスの吸引力",
      "モップ自動洗浄・乾燥まで対応",
      "ゴミ収集ドックでお手入れ最小限",
      "AI障害物回避が賢い"
    ],
    "img": "https://tshop.r10s.jp/ohw/cabinet/tokusyu/imgrc0121382000.jpg"
  },
  {
    "cat": "robot",
    "maker": "Anker Eufy",
    "model": "Clean X10 Pro Omni",
    "name": "Eufy Clean X10 Pro Omni",
    "price": 89900,
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
    "img": "https://tshop.r10s.jp/arc-market-kaden/cabinet/10911043/4571411226663.jpg"
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
    "img": "https://tshop.r10s.jp/switchbot/cabinet/09377790/s10/ebc/imgrc0092497597.jpg"
  },
  {
    "cat": "purifier",
    "maker": "シャープ",
    "model": "KI-TS50",
    "name": "加湿空気清浄機 プラズマクラスターNEXT",
    "price": 49800,
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
    "point": "高濃度プラズマクラスターNEXT搭載の加湿空気清浄機",
    "features": [
      "最上位プラズマクラスターNEXT",
      "加湿もできる1台2役",
      "〜23畳対応のパワフル清浄",
      "花粉・ニオイ対策に"
    ],
    "img": "https://tshop.r10s.jp/premoa/cabinet/orj/49/0-4550556135832.jpg"
  },
  {
    "cat": "dryer",
    "maker": "ダイソン",
    "model": "Supersonic Nural",
    "name": "Dyson Supersonic Nural",
    "price": 53900,
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
    "img": "https://tshop.r10s.jp/b-bell/cabinet/products/dyson/20901002.jpg"
  },
  {
    "cat": "dryer",
    "maker": "リファ",
    "model": "ビューテック ドライヤー プロ",
    "name": "ReFa BEAUTECH DRYER PRO",
    "price": 43000,
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
      "compact": 1,
      "multi": 2
    },
    "point": "サロン発想のハイブリッド温冷ドライヤー",
    "features": [
      "温風と冷風を自動で切替",
      "ハイドロイオンでうるおい",
      "大風量で速乾",
      "美容師にも人気"
    ],
    "img": "https://tshop.r10s.jp/kiseki-shop/cabinet/shohin/mtg-ka/5066-o-5073-6100_m.jpg"
  },
  {
    "cat": "circulator",
    "maker": "アイリスオーヤマ",
    "model": "PCF-SDS15TEC",
    "name": "WOOZOO 360°サーキュレーター",
    "price": 12800,
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
    "point": "上下左右360°首振りのDCサーキュレーター",
    "features": [
      "360°自動首振りで循環効率アップ",
      "DCモーターで静音・省エネ",
      "室温連動モード搭載",
      "リモコン付き"
    ],
    "img": "https://tshop.r10s.jp/enetroom/cabinet/11375185/11760512/imgrc0100049267.jpg"
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
    "img": "https://tshop.r10s.jp/harika-hanno/cabinet/2023to/p254-277/20230612073638.jpg"
  },
  {
    "cat": "toothbrush",
    "maker": "ブラウン",
    "model": "オーラルB iO9",
    "name": "オーラルB iO9",
    "price": 29800,
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
    "img": "https://tshop.r10s.jp/r-kojima/cabinet/n0000000027/4210201328223_1.jpg"
  }
];
