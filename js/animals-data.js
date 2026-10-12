/**
 * 此刻野境 WILD MOMENTS · 100 種世界動物觀察站完整資料庫
 */
var DEFAULT_SPOTS = [
  {
    "id": "monterey",
    "name": "加州海獺與海洋生態",
    "icon": "🦦",
    "country": "美國・加州蒙特雷灣",
    "lat": 36.6185,
    "lon": -121.9018,
    "tz": "America/Los_Angeles",
    "kind": "海洋生物",
    "tags": [
      "海獺",
      "水母",
      "水族館",
      "美國",
      "海洋"
    ],
    "source": "Monterey Bay Aquarium",
    "url": "https://www.montereybayaquarium.org/cams-videos/live-cams/sea-otter-cam",
    "summary": "走進加州蒙特雷灣水族館，從海獺、水母到開闊大洋，探索海洋生命的不同樣貌。每日於太平洋時間提供高畫質生態觀察。",
    "fact": "海獺常仰躺在水面休息，睡覺時還會手牽手防止被海流沖散；厚密的毛皮每平方英吋擁有高達百萬根毛髮。",
    "cams": [
      {
        "name": "🦦 海獺觀察鏡頭",
        "id": "abbR-Ttd-cA"
      },
      {
        "name": "🪼 水母律動鏡頭",
        "id": "NUnJc82ptd4"
      }
    ]
  },
  {
    "id": "bear",
    "name": "阿拉斯加卡特邁棕熊",
    "icon": "🐻",
    "country": "美國・阿拉斯加卡特邁",
    "lat": 58.554,
    "lon": -155.777,
    "tz": "America/Anchorage",
    "kind": "哺乳類",
    "tags": [
      "棕熊",
      "熊",
      "鮭魚",
      "美國",
      "野生動物"
    ],
    "source": "Explore.org / Katmai National Park",
    "url": "https://explore.org/livecams/brown-bears/brooks-falls-brown-bears",
    "summary": "卡特邁國家公園著名的布魯克斯瀑布（Brooks Falls），夏季鮭魚逆流而上時，可見數十隻巨型棕熊在瀑布頂端捕食鮭魚。",
    "fact": "棕熊在秋季冬眠前會進入「暴食期」（Hyperphagia），一天能吃下多達40隻鮭魚，體重可增加超過三分之一。",
    "cams": [
      {
        "name": "🐻 阿拉斯加卡特邁棕熊 生態影像",
        "id": "J7ZrIDvqlic"
      }
    ]
  },
  {
    "id": "polarbear",
    "name": "邱吉爾港北極熊",
    "icon": "🐻‍❄️",
    "country": "加拿大・曼尼托巴省邱吉爾",
    "lat": 58.77,
    "lon": -94.16,
    "tz": "America/Winnipeg",
    "kind": "哺乳類",
    "tags": [
      "北極熊",
      "熊",
      "加拿大",
      "冰雪",
      "極地"
    ],
    "source": "Explore.org / Polar Bears International",
    "url": "https://explore.org/livecams/polar-bears-international/polar-bear-cape-churchill-cam",
    "summary": "加拿大哈德遜灣的邱吉爾鎮被譽為「世界北極熊之都」。每年秋天北極熊聚集於此等待海面結冰，以便獵捕海豹。",
    "fact": "北極熊的毛髮其實是透明且中空的管狀結構，能將紫外線折射到其黑色的皮膚上吸收熱量以禦寒。",
    "cams": [
      {
        "name": "🐻‍❄️ 邱吉爾苔原北極熊",
        "id": "M7lc1UVf-VE"
      }
    ]
  },
  {
    "id": "eagle",
    "name": "愛荷華白頭海鵰",
    "icon": "🦅",
    "country": "美國・愛荷華州迪科拉",
    "lat": 43.308,
    "lon": -91.791,
    "tz": "America/Chicago",
    "kind": "鳥類",
    "tags": [
      "老鷹",
      "海鵰",
      "鳥巢",
      "美國",
      "猛禽"
    ],
    "source": "Explore.org / Raptor Resource Project",
    "url": "https://explore.org/livecams/bald-eagles/decorah-eagles-north-nest",
    "summary": "架設於高聳棉木樹上的高解析度攝影機，全年無休記錄白頭海鵰繁殖、孵卵、育雛與幼鳥初次展翅離巢的珍貴歷程。",
    "fact": "白頭海鵰建立的鳥巢是所有北美鳥類中最大的，有些巨型鳥巢直徑可達3公尺、深度4公尺，重達數噸。",
    "cams": [
      {
        "name": "🦅 迪科拉海鵰北巢",
        "id": "B4-L2nfGcuE"
      }
    ]
  },
  {
    "id": "shark",
    "name": "北卡羅來納外海鯊魚",
    "icon": "🦈",
    "country": "美國・北卡外海平底鍋塔",
    "lat": 33.49,
    "lon": -77.58,
    "tz": "America/New_York",
    "kind": "海洋生物",
    "tags": [
      "鯊魚",
      "海洋",
      "魚類",
      "美國",
      "大西洋"
    ],
    "source": "Explore.org / Frying Pan Tower",
    "url": "https://explore.org/livecams/oceans/shark-cam",
    "summary": "位於北卡外海50公里平底鍋燈塔水下的人工魚礁攝影機，常可捕捉沙虎鯊、雙髻鯊及成群梭魚游弋的震撼畫面。",
    "fact": "鯊魚的頭部布滿「羅倫氏腹壺」（Ampullae of Lorenzini）電感受器官，能感應百萬分之一伏特的獵物肌肉電信號。",
    "cams": [
      {
        "name": "🦈 北卡羅來納外海鯊魚 生態影像",
        "id": "tEtg5Kg3voQ"
      }
    ]
  },
  {
    "id": "bison",
    "name": "黃石公園美洲野牛",
    "icon": "🦬",
    "country": "美國・懷俄明州黃石國家公園",
    "lat": 44.428,
    "lon": -110.588,
    "tz": "America/Denver",
    "kind": "哺乳類",
    "tags": [
      "野牛",
      "黃石",
      "美國",
      "草原",
      "巨獸"
    ],
    "source": "National Park Service",
    "url": "https://www.nps.gov/yell/learn/photosmultimedia/webcams.htm",
    "summary": "黃石公園擁有北美自史前時代延續至今最古老純種美洲野牛群，牠們在間歇泉與地熱霧氣蒸騰的山谷中壯闊漫遊。",
    "fact": "成年美洲野牛體重可達一噸，但奔跑時速高達每小時55公里，且能躍過高達1.8公尺的圍欄。",
    "cams": [
      {
        "name": "🦬 黃石公園美洲野牛 生態影像",
        "id": "GhC0W-2XPUI"
      }
    ]
  },
  {
    "id": "manatee",
    "name": "佛羅里達西印度海牛",
    "icon": "🦭",
    "country": "美國・佛羅里達霍莫薩薩泉",
    "lat": 28.799,
    "lon": -82.597,
    "tz": "America/New_York",
    "kind": "海洋生物",
    "tags": [
      "海牛",
      "美人魚",
      "佛羅里達",
      "溫泉",
      "水生"
    ],
    "source": "Save the Manatee Club / Explore.org",
    "url": "https://explore.org/livecams/manatees/manatee-cam",
    "summary": "冬季海水降溫時，溫馴的西印度海牛會湧入恆溫22度的天然湧泉避寒，慢悠悠地在水晶般透澈的泉水中覓食水草。",
    "fact": "海牛又被稱為美人魚，牠們是完全草食性的海洋哺乳動物，在水下每分鐘只呼吸幾次，與大象是演化上的遠親。",
    "cams": [
      {
        "name": "🦭 佛羅里達西印度海牛 生態影像",
        "id": "UTFRekT2Ti4"
      }
    ]
  },
  {
    "id": "beluga",
    "name": "邱吉爾河白鯨水下探索",
    "icon": "🐬",
    "country": "加拿大・曼尼托巴省邱吉爾河口",
    "lat": 58.768,
    "lon": -94.168,
    "tz": "America/Winnipeg",
    "kind": "海洋生物",
    "tags": [
      "白鯨",
      "鯨魚",
      "加拿大",
      "北極",
      "聲音"
    ],
    "source": "Explore.org / Beluga Boat",
    "url": "https://explore.org/livecams/beluga-whales/beluga-boat-underwater-cam",
    "summary": "每年夏季，數千隻活潑的白色金絲雀——白鯨會游進邱吉爾河口分娩與脫皮，船底攝影機捕捉到牠們對鏡頭微笑互動的畫面。",
    "fact": "白鯨能夠改變前額「額隆」（Melon）的形狀以調整發聲方向，擁有豐富多變的水下鳴叫聲，被稱作「海洋金絲雀」。",
    "cams": [
      {
        "name": "🐬 邱吉爾河白鯨水下探索 生態影像",
        "id": "bgltKx-gcrk"
      }
    ]
  },
  {
    "id": "condor",
    "name": "加州神鷲保育崖壁",
    "icon": "🦅",
    "country": "美國・加州大瑟爾山區",
    "lat": 36.27,
    "lon": -121.808,
    "tz": "America/Los_Angeles",
    "kind": "鳥類",
    "tags": [
      "加州神鷲",
      "猛禽",
      "保育",
      "美國",
      "巨鳥"
    ],
    "source": "Ventana Wildlife Society",
    "url": "https://www.ventanaws.org/condor_cam.html",
    "summary": "加州神鷲曾一度只剩22隻，在科學家全力搶救繁育下重返天空。攝影鏡頭位於險峻紅木森林與懸崖峭壁的天然巢穴。",
    "fact": "加州神鷲是北美翼展最大的陸生鳥類（近3公尺寬），壽命可長達60年，飛行時能連續數小時不拍打翅膀滑翔。",
    "cams": [
      {
        "name": "🦅 加州神鷲保育崖壁 生態影像",
        "id": "jB_Fnq3cGow"
      }
    ]
  },
  {
    "id": "walrus",
    "name": "阿拉斯加圓頭島海象群",
    "icon": "🦣",
    "country": "美國・阿拉斯加布里斯托灣圓頭島",
    "lat": 58.6,
    "lon": -160.366,
    "tz": "America/Anchorage",
    "kind": "海洋生物",
    "tags": [
      "海象",
      "極地",
      "阿拉斯加",
      "群聚",
      "長牙"
    ],
    "source": "Explore.org / Alaska Dept of Fish and Game",
    "url": "https://explore.org/livecams/walrus/walrus-cam-round-island",
    "summary": "阿拉斯加圓頭島是雄性太平洋海象每年夏季重要的陸上棲息地，成百上千隻重達兩噸的海象在海灘上擠在一起曬太陽休息。",
    "fact": "海象巨大的象牙可長達1公尺，不僅用於爭奪領地，還能像冰斧一樣幫助牠們將龐大的身軀拉上海冰。",
    "cams": [
      {
        "name": "🦣 阿拉斯加圓頭島海象群 生態影像",
        "id": "OgjGmJkEGE8"
      }
    ]
  },
  {
    "id": "kenya",
    "name": "肯亞姆帕拉原野水坑",
    "icon": "🦒",
    "country": "肯亞・萊基皮亞姆帕拉保護區",
    "lat": 0.293,
    "lon": 36.867,
    "tz": "Africa/Nairobi",
    "kind": "野生動物",
    "tags": [
      "長頸鹿",
      "大象",
      "斑馬",
      "非洲",
      "水坑"
    ],
    "source": "Explore.org / Mpala Research Centre",
    "url": "https://explore.org/livecams/african-wildlife/african-watering-hole-animal-camera",
    "summary": "肯亞草原核心水源地，24小時不間斷直播。長頸鹿、細紋斑馬、非洲象群與羚羊群會依日夜時序輪流前來飲水降溫。",
    "fact": "長頸鹿喝水時必須將兩條前腿大幅岔開或彎曲膝蓋才能碰到水面，這也是牠們最容易受到掠食者偷襲的脆弱時刻。",
    "cams": [
      {
        "name": "🦒 肯亞姆帕拉原野水坑 生態影像",
        "id": "ZsmMWnBg2WQ"
      }
    ]
  },
  {
    "id": "tembe",
    "name": "南非騰貝巨象保護區",
    "icon": "🐘",
    "country": "南非・夸祖魯-納塔爾省騰貝公園",
    "lat": -27.036,
    "lon": 32.421,
    "tz": "Africa/Johannesburg",
    "kind": "哺乳類",
    "tags": [
      "大象",
      "非洲巨象",
      "南非",
      "保護區",
      "水坑"
    ],
    "source": "Explore.org / Africam",
    "url": "https://explore.org/livecams/african-wildlife/tembe-elephant-park",
    "summary": "以擁有非洲大陸最大體型與最長象牙的「大牙象（Tuskers）」聞名。水坑鏡頭常能聽到象群戲水與家族間低沉宏亮的問候呼喚。",
    "fact": "大象能透過腳掌的感震受器，接收數十公里外同伴經由地面傳遞的低頻次聲波震動訊號。",
    "cams": [
      {
        "name": "🐘 南非騰貝巨象保護區 生態影像",
        "id": "JmeItBTWYBg"
      }
    ]
  },
  {
    "id": "olifants",
    "name": "南非奧利芬茨河野生動物",
    "icon": "🦛",
    "country": "南非・大克魯格國家公園",
    "lat": -24.032,
    "lon": 31.25,
    "tz": "Africa/Johannesburg",
    "kind": "野生動物",
    "tags": [
      "河馬",
      "鱷魚",
      "克魯格",
      "非洲",
      "河流"
    ],
    "source": "Africam / Olifants River",
    "url": "https://www.africam.com/wildlife/olifants-river-live-channel",
    "summary": "奧利芬茨河貫穿大克魯格保護區，河面上河馬成群浮沉，兩岸常有花豹、水牛與狒狒出沒，展現真實而野性的非洲掠食與生息。",
    "fact": "河馬的皮膚會分泌一種紅色的黏稠液體，俗稱「血汗」，具有天然防曬、保濕和強效抗菌消炎的作用。",
    "cams": [
      {
        "name": "🦛 南非奧利芬茨河野生動物 生態影像",
        "id": "ydYDqZQpim8"
      }
    ]
  },
  {
    "id": "namib",
    "name": "納米比亞沙漠人工水眼",
    "icon": "🏜️",
    "country": "納米比亞・納米布-諾克盧福國家公園",
    "lat": -24.75,
    "lon": 15.93,
    "tz": "Africa/Windhoek",
    "kind": "野生動物",
    "tags": [
      "南非劍羚",
      "鬣狗",
      "沙漠",
      "納米比亞",
      "夜空"
    ],
    "source": "Namibia Cam Live",
    "url": "https://www.youtube.com/c/NamibiaCam",
    "summary": "在全世界最古老的納米比沙漠邊緣設立的生態水眼。在荒涼紅沙丘背景下，南非劍羚、胡狼、斑鬣狗與偶爾現身的獵豹交織出奇景。",
    "fact": "南非劍羚（Oryx）擁有特化的顱內血管冷卻系統，能在炎熱的沙漠中數週不直接喝水，只靠植物露水存活。",
    "cams": [
      {
        "name": "🏜️ 納米比亞沙漠人工水眼 生態影像",
        "id": "ydYDqZQpim8"
      }
    ]
  },
  {
    "id": "serengeti_lion",
    "name": "塞倫蓋蒂草原獅群",
    "icon": "🦁",
    "country": "坦尚尼亞・塞倫蓋蒂國家公園",
    "lat": -2.333,
    "lon": 34.833,
    "tz": "Africa/Dar_es_Salaam",
    "kind": "哺乳類",
    "tags": [
      "獅子",
      "草原之王",
      "坦尚尼亞",
      "東非大遷徙",
      "貓科"
    ],
    "source": "Tanzania National Parks / Live Safari",
    "url": "https://www.tanzaniaparks.go.tz/",
    "summary": "每年壯觀的東非百萬草食動物大遷徙中，塞倫蓋蒂獅群是最高統治者。牠們常在金合歡樹蔭下休憩或在黃昏展開集團圍獵。",
    "fact": "母獅承擔了獅群約85%的狩獵工作，但捕獲獵物後通常由體型最大的雄獅優先享用。",
    "cams": [
      {
        "name": "🦁 塞倫蓋蒂草原獅群 生態影像",
        "id": "CeaqkfNmrSQ"
      }
    ]
  },
  {
    "id": "gorilla",
    "name": "剛果格勞爾東部低地大猩猩",
    "icon": "🦍",
    "country": "剛果民主共和國・卡胡茲-別加國家公園",
    "lat": -2.316,
    "lon": 28.75,
    "tz": "Africa/Lubumbashi",
    "kind": "哺乳類",
    "tags": [
      "大猩猩",
      "銀背",
      "剛果",
      "熱帶雨林",
      "靈長類"
    ],
    "source": "GRACE Gorillas / Explore.org",
    "url": "https://explore.org/livecams/grace-gorillas/gorilla-forest-corridor",
    "summary": "GRACE庇護中心為從非法盜獵中拯救出的孤兒大猩猩建立的森林復育廊道，讓牠們重新建立大猩猩群體社會結構。",
    "fact": "成年雄性大猩猩背上的毛髮會在12歲左右轉為銀白色（銀背），牠們與人類的DNA相似度高達98.3%。",
    "cams": [
      {
        "name": "🦍 剛果格勞爾東部低地大猩猩 生態影像",
        "id": "sjGW-J922p4"
      }
    ]
  },
  {
    "id": "cheetah",
    "name": "馬賽馬拉獵豹獵場",
    "icon": "🐆",
    "country": "肯亞・馬賽馬拉國家保護區",
    "lat": -1.493,
    "lon": 35.144,
    "tz": "Africa/Nairobi",
    "kind": "哺乳類",
    "tags": [
      "獵豹",
      "極速",
      "肯亞",
      "草原",
      "貓科"
    ],
    "source": "Mara Elephant Project / WildLife Cam",
    "url": "https://www.maraconservancy.org/",
    "summary": "廣袤無垠的馬賽馬拉金黃草浪中，獵豹憑藉敏銳的視力站在白蟻丘上遠眺瞪羚群，伺機發動地表最快速度的衝刺獵擊。",
    "fact": "獵豹從靜止加速到時速100公里僅需3秒，其不能完全收縮的爪子就像跑鞋的防滑釘一樣提供強大抓地力。",
    "cams": [
      {
        "name": "🐆 馬賽馬拉獵豹獵場 生態影像",
        "id": "TJH-sST7Npg"
      }
    ]
  },
  {
    "id": "meerkat",
    "name": "喀拉哈里沙漠狐獴家族",
    "icon": "🦫",
    "country": "波札那・喀拉哈里沙漠麥加迪加迪鹽沼",
    "lat": -20.667,
    "lon": 25.167,
    "tz": "Africa/Gaborone",
    "kind": "哺乳類",
    "tags": [
      "狐獴",
      "哨兵",
      "波札那",
      "沙漠",
      "地洞"
    ],
    "source": "Kalahari Meerkat Project",
    "url": "https://kalahari-meerkats.com/",
    "summary": "高度社會化的狐獴家族每日清晨從地洞中鑽出，家族中必定有一隻「哨兵」挺直站立在高處警惕猛禽，守護其他覓食成員。",
    "fact": "狐獴眼睛周圍有天然的黑色眼圈，能像太陽眼鏡一樣吸收刺眼強光，讓牠們即使直視晴空也能發現盤旋的老鷹。",
    "cams": [
      {
        "name": "🦫 喀拉哈里沙漠狐獴家族 生態影像",
        "id": "tiPpFFdCkdY"
      }
    ]
  },
  {
    "id": "chimp",
    "name": "甘貝溪黑猩猩自然保護區",
    "icon": "🐵",
    "country": "坦尚尼亞・甘貝溪國家公園",
    "lat": -4.667,
    "lon": 29.617,
    "tz": "Africa/Dar_es_Salaam",
    "kind": "哺乳類",
    "tags": [
      "黑猩猩",
      "珍古德",
      "坦尚尼亞",
      "雨林",
      "靈長類"
    ],
    "source": "Jane Goodall Institute",
    "url": "https://janegoodall.org/",
    "summary": "著名靈長類動物學家珍古德展開劃時代研究的聖地。保護區記錄黑猩猩使用草桿釣白蟻、母子互動與複雜政治同盟。",
    "fact": "黑猩猩會根據不同目的製造並使用十幾種工具，且有豐富的面部表情和笑聲，是智力最接近人類的動物。",
    "cams": [
      {
        "name": "🐵 甘貝溪黑猩猩自然保護區 生態影像",
        "id": "UCG1aXVO8H8"
      }
    ]
  },
  {
    "id": "lemur",
    "name": "馬達加斯加環尾狐猴",
    "icon": "🐒",
    "country": "馬達加斯加・貝倫蒂保護區",
    "lat": -25.016,
    "lon": 46.3,
    "tz": "Indian/Antananarivo",
    "kind": "野生動物",
    "tags": [
      "狐猴",
      "環尾",
      "馬達加斯加",
      "日光浴",
      "特有種"
    ],
    "source": "Madagascar National Parks",
    "url": "https://www.parcs-madagascar.com/",
    "summary": "馬達加斯加特有的黑白環狀斑紋長尾狐猴。牠們每天早晨會做出著名的「打坐曬太陽」姿勢，露出白色肚皮吸收晨光暖意。",
    "fact": "環尾狐猴社會是徹底的母系社會，雌性佔據統治地位；雄性爭鬥時會用手腕氣味腺摩擦尾巴進行「臭氣決鬥」。",
    "cams": [
      {
        "name": "🐒 馬達加斯加環尾狐猴 生態影像",
        "id": "vGyEHSoct0U"
      }
    ]
  },
  {
    "id": "zebra",
    "name": "恩戈羅恩戈羅火山口斑馬群",
    "icon": "🦓",
    "country": "坦尚尼亞・恩戈羅恩戈羅火山口",
    "lat": -3.175,
    "lon": 35.583,
    "tz": "Africa/Dar_es_Salaam",
    "kind": "野生動物",
    "tags": [
      "斑馬",
      "火山口",
      "坦尚尼亞",
      "草原",
      "條紋"
    ],
    "source": "Ngorongoro Conservation Area",
    "url": "https://www.ncaa.go.tz/",
    "summary": "世界上最大且未受破壞的火山口死火山盆地內，生息著數萬隻平原斑馬。牠們黑白分明的條紋在廣闊盆地草地上如水波蕩漾。",
    "fact": "每隻斑馬身上的黑白條紋圖案都是獨一無二的，就像人類的指紋；條紋還能擾亂采采蠅和吸血昆蟲的複眼視覺。",
    "cams": [
      {
        "name": "🦓 恩戈羅恩戈羅火山口斑馬群 生態影像",
        "id": "RZFMYVNhd4k"
      }
    ]
  },
  {
    "id": "rhino",
    "name": "肯亞奧爾佩傑塔白犀牛",
    "icon": "🦏",
    "country": "肯亞・奧爾佩傑塔保護區",
    "lat": 0.04,
    "lon": 36.93,
    "tz": "Africa/Nairobi",
    "kind": "野生動物",
    "tags": [
      "犀牛",
      "北白犀",
      "肯亞",
      "極危",
      "盔甲"
    ],
    "source": "Ol Pejeta Conservancy",
    "url": "https://www.olpejetaconservancy.org/",
    "summary": "地球上最後兩隻北方白犀牛的最後避難所。這裡同時也是東非最大的黑犀牛保護基地，受到全天候武裝護林員守護。",
    "fact": "白犀牛的名字並非源於體色，而是來自南非荷蘭語中的「wyd」（寬），指其適合啃食草地的寬平嘴唇被誤翻為「white」。",
    "cams": [
      {
        "name": "🦏 肯亞奧爾佩傑塔白犀牛 生態影像",
        "id": "YhXWGJQtEQY"
      }
    ]
  },
  {
    "id": "flamingo_kenya",
    "name": "納庫魯湖小紅鸛粉紅奇景",
    "icon": "🦩",
    "country": "肯亞・納庫魯湖國家公園",
    "lat": -0.366,
    "lon": 36.083,
    "tz": "Africa/Nairobi",
    "kind": "鳥類",
    "tags": [
      "火烈鳥",
      "紅鸛",
      "納庫魯湖",
      "肯亞",
      "粉紅湖"
    ],
    "source": "Kenya Wildlife Service",
    "url": "https://www.kws.go.ke/",
    "summary": "鹼性裂谷湖泊滋生豐富的螺旋藻，吸引數百萬隻小紅鸛在湖面聚集，將整個湖面染成一片震撼的粉紅色海洋。",
    "fact": "火烈鳥羽毛原本是白灰色的，其鮮豔的粉紅色來自其飲食中豐富的甲殼類動物和藍綠藻所含的類胡蘿蔔素。",
    "cams": [
      {
        "name": "🦩 納庫魯湖小紅鸛粉紅奇景 生態影像",
        "id": "bS_YA4Xk9Mg"
      }
    ]
  },
  {
    "id": "hyena",
    "name": "克魯格國家公園斑鬣狗洞穴",
    "icon": "🐕",
    "country": "南非・克魯格國家公園",
    "lat": -24.989,
    "lon": 31.592,
    "tz": "Africa/Johannesburg",
    "kind": "野生動物",
    "tags": [
      "鬣狗",
      "夜行",
      "南非",
      "咬合力",
      "母系"
    ],
    "source": "SANParks Live / Africam",
    "url": "https://www.sanparks.org/parks/kruger/",
    "summary": "洞穴攝影機深入觀察斑鬣狗家族育幼日常。鬣狗幼崽充滿好奇心，常在黃昏集體出洞摔跤嬉戲，與刻板印象大相逕庭。",
    "fact": "斑鬣狗的咬合力高達1100磅，能輕易咬碎長頸鹿的腿骨吸食骨髓，其消化系統連骨頭和角質都能完全消化。",
    "cams": [
      {
        "name": "🐕 克魯格國家公園斑鬣狗洞穴 生態影像",
        "id": "xXXBTilvfuw"
      }
    ]
  },
  {
    "id": "nile_croc",
    "name": "馬拉河尼羅鱷埋伏點",
    "icon": "🐊",
    "country": "肯亞與坦尚尼亞邊界・馬拉河",
    "lat": -1.53,
    "lon": 35.033,
    "tz": "Africa/Nairobi",
    "kind": "野生動物",
    "tags": [
      "鱷魚",
      "尼羅鱷",
      "馬拉河",
      "大遷徙",
      "史前巨獸"
    ],
    "source": "Explore.org / Wild Earth",
    "url": "https://wildearth.tv/",
    "summary": "天國之渡的必經之處。長達5公尺的巨型尼羅鱷靜靜潛伏在渾濁河水中，等待數萬角馬與斑馬橫渡的關鍵一刻。",
    "fact": "尼羅鱷在恐龍時代就已經存在，牠們能在水下屏住呼吸長達兩小時，吃飽一餐後代謝極低可數月不進食。",
    "cams": [
      {
        "name": "🐊 馬拉河尼羅鱷埋伏點 生態影像",
        "id": "LHtzZf4T7xw"
      }
    ]
  },
  {
    "id": "panda",
    "name": "四川臥龍耿達大熊貓基地",
    "icon": "🐼",
    "country": "中國・四川阿壩耿達鎮",
    "lat": 31.023,
    "lon": 103.204,
    "tz": "Asia/Shanghai",
    "kind": "哺乳類",
    "tags": [
      "熊貓",
      "大熊貓",
      "竹子",
      "四川",
      "國寶"
    ],
    "source": "Explore.org / Gengda Panda Center",
    "url": "https://explore.org/livecams/explore-all-cams/wolong-grove-panda-yard",
    "summary": "深山雲霧繚繞的臥龍神樹坪基地，大熊貓在專屬的戶外草坪滾滾攀爬、翻跟斗，每日花費半數時間沉浸於香脆竹子之中。",
    "fact": "大熊貓的手掌演化出了第六指「偽拇指」（特化的橈側籽骨），能靈活握住直徑細小的竹枝輕鬆剝皮進食。",
    "cams": [
      {
        "name": "🐼 四川臥龍耿達大熊貓基地 生態影像",
        "id": "ElzQt21Jeq8"
      }
    ]
  },
  {
    "id": "snow_monkey",
    "name": "日本長野地獄谷雪猴溫泉",
    "icon": "🐒",
    "country": "日本・長野縣山之內町地獄谷",
    "lat": 36.732,
    "lon": 138.462,
    "tz": "Asia/Tokyo",
    "kind": "哺乳類",
    "tags": [
      "雪猴",
      "日本獼猴",
      "長野",
      "溫泉",
      "冬雪"
    ],
    "source": "Jigokudani Yaen-Koen Official",
    "url": "https://en.jigokudani-yaenkoen.co.jp/livecam2/monkey_pe.html",
    "summary": "在白雪皚皚的志賀高原峽谷，日本獼猴是全世界唯一懂得泡天然露天溫泉避寒的野生靈長類，表情陶醉又享受。",
    "fact": "日本獼猴是棲息緯度最北的非人類靈長類，為了在零下十幾度的嚴寒中生存，演化出濃密厚實的棕灰色長毛被。",
    "cams": [
      {
        "name": "🐒 日本長野地獄谷雪猴溫泉 生態影像",
        "id": "3pMYSNJnbDI"
      }
    ]
  },
  {
    "id": "red_panda",
    "name": "成都大熊貓繁育基地小熊貓",
    "icon": "🦊",
    "country": "中國・四川成都",
    "lat": 30.738,
    "lon": 104.148,
    "tz": "Asia/Shanghai",
    "kind": "哺乳類",
    "tags": [
      "小熊貓",
      "紅熊貓",
      "九節狼",
      "成都",
      "樹棲"
    ],
    "source": "Chengdu Giant Panda Base",
    "url": "http://www.panda.org.cn/",
    "summary": "毛茸茸的紅棕色毛皮與黑白環紋粗大尾巴。小熊貓是出色的樹棲攀爬大師，喜歡在樹杈之間懶洋洋地趴著打盹曬太陽。",
    "fact": "小熊貓的踝關節非常靈活，能向後旋轉180度，這使牠們能夠頭朝下倒立著垂直爬下大樹幹。",
    "cams": [
      {
        "name": "🦊 成都大熊貓繁育基地小熊貓 生態影像",
        "id": "SUXPnIEpbn4"
      }
    ]
  },
  {
    "id": "siberian_tiger",
    "name": "東北虎豹國家公園森林巡護",
    "icon": "🐅",
    "country": "中國・吉林琿春與黑龍江邊界",
    "lat": 43.15,
    "lon": 130.85,
    "tz": "Asia/Shanghai",
    "kind": "哺乳類",
    "tags": [
      "東北虎",
      "西伯利亞虎",
      "林海雪原",
      "百獸之王",
      "貓科"
    ],
    "source": "Northeast Tiger and Leopard National Park",
    "url": "http://www.tigerleopardnp.gov.cn/",
    "summary": "橫跨長白山脈的原始紅松闊葉混交林，鏡頭透過紅外感應即時捕捉現存體型最大的貓科動物——野生東北虎穿梭於雪地上的威猛身姿。",
    "fact": "雄性野生東北虎體長可逾3公尺，體重超過300公斤，腳掌在深雪中能如雪鞋般擴展以防下陷。",
    "cams": [
      {
        "name": "🐅 東北虎豹國家公園森林巡護 生態影像",
        "id": "MmhYJailxZA"
      }
    ]
  },
  {
    "id": "crane_japan",
    "name": "北海道釧路濕原丹頂鶴",
    "icon": "🪿",
    "country": "日本・北海道阿寒郡鶴居村",
    "lat": 43.233,
    "lon": 144.316,
    "tz": "Asia/Tokyo",
    "kind": "鳥類",
    "tags": [
      "丹頂鶴",
      "仙鶴",
      "北海道",
      "釧路濕原",
      "求偶舞"
    ],
    "source": "Tsurui Ito Red-crowned Crane Sanctuary",
    "url": "https://www.vill.tsurui.lg.jp/",
    "summary": "在銀白雪原背景下，象徵長壽與忠貞的丹頂鶴優雅展翅起舞、引吭高歌。冬日給餌場常聚集上百隻野生丹頂鶴。",
    "fact": "丹頂鶴頭頂鮮紅的「丹頂」並非羽毛，而是沒有羽毛覆蓋的裸露皮膚，其鮮紅程度會隨鶴的情緒興奮程度加深。",
    "cams": [
      {
        "name": "🪿 北海道釧路濕原丹頂鶴 生態影像",
        "id": "8PqY_H1FlpY"
      }
    ]
  },
  {
    "id": "spoonbill",
    "name": "台南七股黑面琵鷺度冬保護區",
    "icon": "🪶",
    "country": "台灣・台南市七股區曾文溪口",
    "lat": 23.056,
    "lon": 120.065,
    "tz": "Asia/Taipei",
    "kind": "鳥類",
    "tags": [
      "黑面琵鷺",
      "黑琵",
      "七股",
      "台灣",
      "濕地度冬"
    ],
    "source": "台江國家公園管理處",
    "url": "https://www.tjnp.gov.tw/",
    "summary": "每年秋冬，全球半數以上的瀕危黑面琵鷺會跨海飛抵台南七股潟湖與魚塭度冬，用其如湯匙般的黑色長喙在水中左右掃食魚蝦。",
    "fact": "黑面琵鷺又被台灣漁民暱稱為「黑面橈杯」，春季繁殖期前頭頂會換上璀璨耀眼的金黃色冠羽與胸羽。",
    "cams": [
      {
        "name": "🪶 七股黑琵賞鳥亭",
        "id": "B4-L2nfGcuE"
      }
    ]
  },
  {
    "id": "elephant_thailand",
    "name": "泰國清邁大象自然公園",
    "icon": "🐘",
    "country": "泰國・清邁湄登區",
    "lat": 19.215,
    "lon": 98.86,
    "tz": "Asia/Bangkok",
    "kind": "哺乳類",
    "tags": [
      "亞洲象",
      "大象救援",
      "泰國",
      "清邁",
      "泥巴浴"
    ],
    "source": "Elephant Nature Park / Explore.org",
    "url": "https://www.elephantnaturepark.org/",
    "summary": "無騎乘、不表演的無障礙救援聖地。老年與受創亞洲象在此自由結伴漫步、在河流中洗澡戲水，並享受全身塗滿泥漿的天然防曬SPA。",
    "fact": "亞洲象耳朵比非洲象小很多，背部弧度向上隆起；牠們的鼻子末端只有一個手指狀的突起（非洲象有兩個）。",
    "cams": [
      {
        "name": "🐘 泰國清邁大象自然公園 生態影像",
        "id": "7MN89YmdZzA"
      }
    ]
  },
  {
    "id": "orangutan",
    "name": "婆羅洲雨林紅毛猩猩救援林",
    "icon": "🦧",
    "country": "印尼・中加里曼丹省丹絨普廷國家公園",
    "lat": -2.75,
    "lon": 111.95,
    "tz": "Asia/Jakarta",
    "kind": "哺乳類",
    "tags": [
      "紅毛猩猩",
      "森林人",
      "婆羅洲",
      "熱帶雨林",
      "攀爬"
    ],
    "source": "Orangutan Foundation International",
    "url": "https://orangutan.org/",
    "summary": "「森林之人（Orangutan）」的庇護所。長著蓬鬆紅褐色長毛的紅毛猩猩媽媽帶著幼崽，在百米高的熱帶雨林樹冠層悠然蕩漾穿梭。",
    "fact": "紅毛猩猩是世界上體型最大的純樹棲動物，其雙臂展開可達2.2公尺，臂展是其身高的1.5倍。",
    "cams": [
      {
        "name": "🦧 婆羅洲雨林紅毛猩猩救援林 生態影像",
        "id": "Z5c2SSEtikU"
      }
    ]
  },
  {
    "id": "komodo",
    "name": "科莫多國家公園巨蜥島",
    "icon": "🦎",
    "country": "印尼・東努沙登加拉省科莫多島",
    "lat": -8.583,
    "lon": 119.483,
    "tz": "Asia/Makassar",
    "kind": "野生動物",
    "tags": [
      "科莫多巨蜥",
      "科莫多龍",
      "印尼",
      "史前爬蟲",
      "毒液"
    ],
    "source": "Komodo National Park Official",
    "url": "https://komodonationalpark.org/",
    "summary": "現存陸地上最巨大的蜥蜴，長達3公尺。牠們在火山乾旱海島上巡邏海灘與灌木叢，靠敏銳分叉舌頭捕捉數公里外鹿群氣味。",
    "fact": "科莫多巨蜥下顎擁有複雜的毒腺，分泌的毒液含有抗凝血劑，獵物被咬傷後會因失血過多和休克而倒下。",
    "cams": [
      {
        "name": "🦎 科莫多國家公園巨蜥島 生態影像",
        "id": "Giue8zgZZbI"
      }
    ]
  },
  {
    "id": "snow_leopard",
    "name": "青海三江源雪豹高山秘境",
    "icon": "🐆",
    "country": "中國・青海三江源國家公園瀾滄江源園區",
    "lat": 33.25,
    "lon": 96.5,
    "tz": "Asia/Shanghai",
    "kind": "哺乳類",
    "tags": [
      "雪豹",
      "雪山之王",
      "三江源",
      "高原",
      "長尾"
    ],
    "source": "Shan Shui Conservation Center",
    "url": "http://www.shanshui.org/",
    "summary": "海拔四千公尺險峻風蝕岩石間，「雪山隱士」雪豹巡邏領地。灰白斑紋皮毛與岩壁完美融合，粗長毛尾巴在懸崖上保持絕佳平衡。",
    "fact": "雪豹的尾巴幾乎與身體一樣長，冬天休息時牠們會把毛茸茸的長尾巴像圍巾一樣遮住口鼻抵禦刺骨寒風。",
    "cams": [
      {
        "name": "🐆 青海三江源雪豹高山秘境 生態影像",
        "id": "U9lA3MFqeVw"
      }
    ]
  },
  {
    "id": "indian_rhino",
    "name": "印度卡齊蘭加單角犀牛",
    "icon": "🦏",
    "country": "印度・阿薩姆邦卡齊蘭加國家公園",
    "lat": 26.583,
    "lon": 93.167,
    "tz": "Asia/Kolkata",
    "kind": "野生動物",
    "tags": [
      "大獨角犀",
      "印度犀牛",
      "盔甲",
      "阿薩姆",
      "象草"
    ],
    "source": "Kaziranga National Park Official",
    "url": "https://www.kaziranga-national-park.com/",
    "summary": "布拉馬普特拉河流域高聳象草叢間，獨角犀牛厚重如青銅鎧甲般的皮膚褶皺在夕陽下格外威嚴，沼澤中享受泥巴浴。",
    "fact": "印度犀牛身上看似盔甲的褶皺富含微血管網路，能幫助調節體溫；牠們的單角不是骨頭，而是由角蛋白（類似毛髮指甲）構成。",
    "cams": [
      {
        "name": "🦏 印度卡齊蘭加單角犀牛 生態影像",
        "id": "U0HcCw4qjsQ"
      }
    ]
  },
  {
    "id": "bengal_tiger",
    "name": "印度倫滕波爾孟加拉虎水潭",
    "icon": "🐅",
    "country": "印度・拉賈斯坦邦倫滕波爾國家公園",
    "lat": 26.017,
    "lon": 76.503,
    "tz": "Asia/Kolkata",
    "kind": "哺乳類",
    "tags": [
      "孟加拉虎",
      "老虎",
      "印度宮殿",
      "荒野神廟",
      "水潭避暑"
    ],
    "source": "Ranthambore Tiger Reserve",
    "url": "https://www.ranthambhorenationalpark.com/",
    "summary": "在古代殘垣宮殿與榕樹根纏繞的古城堡下，威嚴的孟加拉虎泡在天然荷花水潭中消暑，眼神銳利睥睨全場。",
    "fact": "老虎是極少數極度熱愛游泳玩水的貓科動物，炎熱夏天牠們常連續數小時泡在清涼水塘中只露出一顆頭。",
    "cams": [
      {
        "name": "🐅 印度倫滕波爾孟加拉虎水潭 生態影像",
        "id": "PcAOecvAh1U"
      }
    ]
  },
  {
    "id": "gibbon",
    "name": "泰國考艾白掌長臂猿之歌",
    "icon": "🐒",
    "country": "泰國・考艾國家公園",
    "lat": 14.439,
    "lon": 101.372,
    "tz": "Asia/Bangkok",
    "kind": "哺乳類",
    "tags": [
      "長臂猿",
      "白掌",
      "考艾",
      "雨林晨鳴",
      "臂行者"
    ],
    "source": "Khao Yai National Park Official",
    "url": "https://www.thainationalparks.com/khao-yai-national-park",
    "summary": "清晨薄霧蒸騰的雨林樹冠上，白掌長臂猿夫妻展開嘹亮的二重唱對鳴，歌聲傳遍山谷。牠們僅靠雙臂如同秋千般在樹林間十米飛蕩。",
    "fact": "長臂猿採用一夫一妻制，夫妻每天早晨固定合唱以宣示領地與加深感情；其手腕球窩關節允許牠們單手360度旋轉擺盪。",
    "cams": [
      {
        "name": "🐒 泰國考艾白掌長臂猿之歌 生態影像",
        "id": "UemFRPrl1hk"
      }
    ]
  },
  {
    "id": "formosan_bear",
    "name": "台灣玉山台灣黑熊森林棲地",
    "icon": "🐻",
    "country": "台灣・南投玉山國家公園大分山區",
    "lat": 23.47,
    "lon": 121.0,
    "tz": "Asia/Taipei",
    "kind": "哺乳類",
    "tags": [
      "台灣黑熊",
      "黑熊",
      "胸前V字",
      "玉山",
      "青剛櫟"
    ],
    "source": "台灣黑熊保育協會 / 玉山國家公園",
    "url": "https://www.taiwanbear.org.tw/",
    "summary": "台灣唯一的原生熊類。胸前擁有標誌性的白色新月V字形斑紋，秋天熟練攀爬高聳青剛櫟樹折枝做「熊窩」採食橡實。",
    "fact": "台灣黑熊是全世界少數不冬眠的黑熊族群之一，因為台灣中低海拔森林四季皆有豐富食物，且牠們擅長在樹上編織大圓窩休息。",
    "cams": [
      {
        "name": "🐻 台灣玉山台灣黑熊森林棲地 生態影像",
        "id": "uP__XAqCiMs"
      }
    ]
  },
  {
    "id": "pangolin",
    "name": "台灣台北木柵穿山甲保育館",
    "icon": "🦔",
    "country": "台灣・台北市文山區木柵動物園",
    "lat": 24.998,
    "lon": 121.581,
    "tz": "Asia/Taipei",
    "kind": "哺乳類",
    "tags": [
      "穿山甲",
      "中華穿山甲",
      "鱗甲",
      "台灣之光",
      "夜行蟻客"
    ],
    "source": "Taipei Zoo Pangolin Conservation",
    "url": "https://www.zoo.gov.taipei/",
    "summary": "台灣是全球穿山甲保育成果最卓越的基地。暗紅夜行光線下，穿山甲背負堅韌鱗片，用修長黏稠的舌頭探入蟻丘大快朵頤。",
    "fact": "穿山甲沒有牙齒，全靠胃裡的角質小碎石磨碎螞蟻；遇到危險時會迅速捲成一個連獅子都咬不開的堅硬圓球。",
    "cams": [
      {
        "name": "🦔 台灣台北木柵穿山甲保育館 生態影像",
        "id": "bD8M7ihP5nk"
      }
    ]
  },
  {
    "id": "kangaroo",
    "name": "澳洲紅袋鼠袋鼠島保護區",
    "icon": "🦘",
    "country": "澳洲・南澳州袋鼠島",
    "lat": -35.775,
    "lon": 137.214,
    "tz": "Australia/Adelaide",
    "kind": "哺乳類",
    "tags": [
      "袋鼠",
      "紅袋鼠",
      "澳洲",
      "育兒袋",
      "彈跳"
    ],
    "source": "Kangaroo Island Wildlife Park",
    "url": "https://kiwildlifepark.com/",
    "summary": "野性澳洲的代表象徵。紅袋鼠在尤加利灌木林間以驚人的彈跳力飛躍，雄袋鼠在黃昏時分常直立上身展開格鬥「拳擊賽」。",
    "fact": "袋鼠單次大跳躍可跨越超過8公尺遠、近3公尺高；由於特殊的肌腱彈簧結構，跳得越快反而越節省能量消耗。",
    "cams": [
      {
        "name": "🦘 澳洲紅袋鼠袋鼠島保護區 生態影像",
        "id": "o2zOVIuoh1A"
      }
    ]
  },
  {
    "id": "koala",
    "name": "布里斯本孤松無尾熊保護區",
    "icon": "🐨",
    "country": "澳洲・昆士蘭布里斯本",
    "lat": -27.533,
    "lon": 152.969,
    "tz": "Australia/Brisbane",
    "kind": "哺乳類",
    "tags": [
      "無尾熊",
      "考拉",
      "澳洲",
      "尤加利樹",
      "有袋類"
    ],
    "source": "Lone Pine Koala Sanctuary",
    "url": "https://lonepinekoalasanctuary.com/",
    "summary": "世界上歷史最悠久的無尾熊保護區。鏡頭對準尤加利樹椏，記錄無尾熊一日多達20小時的香甜睡眠與醒來嚼食嫩葉的呆萌姿態。",
    "fact": "尤加利樹葉對大多數動物都有劇毒，但無尾熊擁有特化達2公尺長的盲腸和特殊肝臟解毒酵素，能專門消化這些纖維。",
    "cams": [
      {
        "name": "🐨 布里斯本孤松無尾熊保護區 生態影像",
        "id": "duUpvyKIpLI"
      }
    ]
  },
  {
    "id": "platypus",
    "name": "塔斯馬尼亞鴨嘴獸小溪",
    "icon": "🦆",
    "country": "澳洲・塔斯馬尼亞伯爾尼峽谷",
    "lat": -41.05,
    "lon": 145.9,
    "tz": "Australia/Hobart",
    "kind": "野生動物",
    "tags": [
      "鴨嘴獸",
      "卵生哺乳",
      "塔斯馬尼亞",
      "清澈溪流",
      "活化石"
    ],
    "source": "Tasmanian Parks and Wildlife Service",
    "url": "https://parks.tas.gov.au/",
    "summary": "演化奇蹟單孔目動物。在塔斯馬尼亞清澈見底的山澗溪流中，鴨嘴獸閉上雙眼在水底翻找石頭捕捉水生昆蟲與淡水小蝦。",
    "fact": "鴨嘴獸是極少數產卵的哺乳動物之一；雄性鴨嘴獸後腳踝長有一根毒刺，其分泌的神經毒液足以讓成年人產生劇烈劇痛。",
    "cams": [
      {
        "name": "🦆 塔斯馬尼亞鴨嘴獸小溪 生態影像",
        "id": "FhR5wy1Q7RM"
      }
    ]
  },
  {
    "id": "great_barrier_reef",
    "name": "大堡礁綠蠵龜與珊瑚礁",
    "icon": "🐢",
    "country": "澳洲・昆士蘭凱恩斯外海阿金考特礁",
    "lat": -16.2,
    "lon": 145.85,
    "tz": "Australia/Brisbane",
    "kind": "海洋生物",
    "tags": [
      "綠蠵龜",
      "大堡礁",
      "海龜",
      "珊瑚礁",
      "澳洲"
    ],
    "source": "Reef Magic / Explore.org",
    "url": "https://explore.org/livecams/under-the-water/pacific-aquarium-tropical-reef-cam",
    "summary": "世界自然遺產大堡礁水下鏡頭，成群多彩熱帶魚穿梭於繁盛鹿角珊瑚間，巨大的綠蠵龜優雅滑翔游向水面換氣。",
    "fact": "綠蠵龜具有精準的「地磁導航」天賦，成年雌龜在海洋中漂泊數千公里後，仍能準確游回幾十年前自己出生的海灘產卵。",
    "cams": [
      {
        "name": "🐢 大堡礁綠蠵龜與珊瑚礁 生態影像",
        "id": "80QozRvwB1Q"
      }
    ]
  },
  {
    "id": "kiwi",
    "name": "紐西蘭羅托魯瓦奇異鳥保育中心",
    "icon": "🥝",
    "country": "紐西蘭・豐盛灣羅托魯瓦夜行館",
    "lat": -38.138,
    "lon": 176.245,
    "tz": "Pacific/Auckland",
    "kind": "鳥類",
    "tags": [
      "奇異鳥",
      "幾維鳥",
      "紐西蘭",
      "夜行無翼",
      "國鳥"
    ],
    "source": "National Kiwi Hatchery Aotearoa",
    "url": "https://www.nationalkiwihatchery.org.nz/",
    "summary": "夜行館紅外線鏡頭真實呈現紐西蘭國鳥——幾維鳥的生活。牠們用修長鳥喙在落葉堆中探鑽，嗅探蠕蟲與種子。",
    "fact": "幾維鳥是全世界唯一鼻孔長在喙尖端的鳥類，且雌鳥產下的卵重量可佔其自身體重的20%，比例居所有鳥類之冠。",
    "cams": [
      {
        "name": "🥝 紐西蘭羅托魯瓦奇異鳥保育中心 生態影像",
        "id": "Vhyt04zAnsc"
      }
    ]
  },
  {
    "id": "quokka",
    "name": "西澳羅特尼斯島短尾矮袋鼠",
    "icon": "🐹",
    "country": "澳洲・西澳羅特尼斯島",
    "lat": -32.006,
    "lon": 115.535,
    "tz": "Australia/Perth",
    "kind": "哺乳類",
    "tags": [
      "短尾矮袋鼠",
      "微笑天使",
      "西澳",
      "袋鼠",
      "自拍"
    ],
    "source": "Rottnest Island Authority",
    "url": "https://www.rottnestisland.com/",
    "summary": "被譽為「世界上最快樂的動物」。天生自帶甜美微笑表情，個性親人毫無戒心，在無車輛的小島海風灌木叢間蹦跳覓食。",
    "fact": "短尾矮袋鼠因為臉頰肌肉構造和嘴角微微上揚，即使放空休息時也看起來像在燦爛微笑，且牠們能爬上小樹覓食。",
    "cams": [
      {
        "name": "🐹 西澳羅特尼斯島短尾矮袋鼠 生態影像",
        "id": "NvmHRcEpvRY"
      }
    ]
  },
  {
    "id": "tasmanian_devil",
    "name": "塔斯馬尼亞袋獾（惡魔）保護區",
    "icon": "🦇",
    "country": "澳洲・塔斯馬尼亞搖籃山",
    "lat": -41.583,
    "lon": 145.933,
    "tz": "Australia/Hobart",
    "kind": "哺乳類",
    "tags": [
      "袋獾",
      "塔斯馬尼亞惡魔",
      "澳洲",
      "夜行有袋",
      "咬合力"
    ],
    "source": "Devils@Cradle Wildlife Sanctuary",
    "url": "https://devilsatcradle.com/",
    "summary": "現存最大的有袋類食肉動物。鏡頭捕捉牠們在夜間爭奪獵物時發出刺耳咆哮，黑白相間身軀與粉紅耳朵在暗夜中格外醒目。",
    "fact": "袋獾相對於其身形而言，咬合力與大型犬相當，能一口咬穿骨頭和厚皮；當受到驚嚇時耳朵會充血變成鮮紅色。",
    "cams": [
      {
        "name": "🦇 塔斯馬尼亞袋獾（惡魔）保護區 生態影像",
        "id": "V989HhuH0f4"
      }
    ]
  },
  {
    "id": "fairy_penguin",
    "name": "澳洲菲利普島小藍企鵝歸巢",
    "icon": "🐧",
    "country": "澳洲・維多利亞州菲利普島",
    "lat": -38.513,
    "lon": 145.148,
    "tz": "Australia/Melbourne",
    "kind": "鳥類",
    "tags": [
      "小藍企鵝",
      "神仙企鵝",
      "菲利普島",
      "歸巢",
      "最小企鵝"
    ],
    "source": "Phillip Island Nature Parks Live",
    "url": "https://www.penguins.org.au/",
    "summary": "黃昏降臨海灘時，全世界體型最小的企鵝（約33公分高）成群結束出海捕魚，搖搖晃晃踩著浪花集體衝過沙灘返回沙丘巢穴。",
    "fact": "小藍企鵝羽毛泛著獨特的青藍色光澤，因此又被稱作神仙企鵝；牠們是終生一夫一妻制，歸巢時會發出高亢叫聲尋找伴侶。",
    "cams": [
      {
        "name": "🐧 澳洲菲利普島小藍企鵝歸巢 生態影像",
        "id": "CvN1_TmsTHo"
      }
    ]
  },
  {
    "id": "dugong",
    "name": "帛琉與菲律賓儒艮海草床",
    "icon": "🧜",
    "country": "菲律賓・巴拉望科隆島",
    "lat": 12.0,
    "lon": 120.2,
    "tz": "Asia/Manila",
    "kind": "海洋生物",
    "tags": [
      "儒艮",
      "美人魚",
      "海草床",
      "熱帶海洋",
      "海洋哺乳"
    ],
    "source": "Dugong Dive Center Palawan",
    "url": "https://www.dugongdivecenter.com/",
    "summary": "水下鏡頭記錄性情極其溫馴的海洋哺乳動物——儒艮。牠們用寬大肉質上唇在淺海海草床上犁田般翻找鮮嫩海草根莖。",
    "fact": "儒艮與海牛不同之處在於尾鰭形狀——儒艮的尾鰭像鯨魚一樣呈凹字分叉型，而海牛的尾巴則是圓形槳狀。",
    "cams": [
      {
        "name": "🧜 帛琉與菲律賓儒艮海草床 生態影像",
        "id": "771F3a1UTyQ"
      }
    ]
  },
  {
    "id": "wombat",
    "name": "澳洲藍山赤頸袋熊地穴",
    "icon": "🦫",
    "country": "澳洲・新南威爾斯州藍山國家公園",
    "lat": -33.716,
    "lon": 150.316,
    "tz": "Australia/Sydney",
    "kind": "哺乳類",
    "tags": [
      "袋熊",
      "王八熊",
      "方形便便",
      "藍山",
      "地穴建築師"
    ],
    "source": "Wombat Protection Society of Australia",
    "url": "https://www.wombatprotection.org.au/",
    "summary": "矮胖結實的「推土機」袋熊。擁有堅硬如鐵板的骨質臀部，夜間在尤加利樹林間悠哉漫步，其開鑿的深邃地洞甚至在野火時成為其他動物避難所。",
    "fact": "袋熊是世界上唯一會排出「方形立方體排泄物」的動物！其腸道彈性差異構造讓便便成形為方塊，放在岩石上不會滾動以標記領地。",
    "cams": [
      {
        "name": "🦫 藍山尤加利樹下袋熊地穴",
        "id": "abbR-Ttd-cA"
      }
    ]
  },
  {
    "id": "cassowary",
    "name": "澳洲戴恩樹雨林鶴鴕（食火雞）",
    "icon": "🦤",
    "country": "澳洲・昆士蘭戴恩樹熱帶雨林",
    "lat": -16.25,
    "lon": 145.4,
    "tz": "Australia/Brisbane",
    "kind": "鳥類",
    "tags": [
      "鶴鴕",
      "南方食火雞",
      "世界上最危險鳥類",
      "遠古恐龍",
      "藍色長頸"
    ],
    "source": "Rainforest Rescue Australia",
    "url": "https://www.rainforestrescue.org.au/",
    "summary": "頭頂骨盔、長著如刀鋒般12公分匕首內趾爪的遠古巨鳥。在世界上最古老熱帶雨林中穿行，吞食大型雨林果實並協助植物播種種子。",
    "fact": "南方鶴鴕奔跑時速高達50公里，雙腿蹬踢力量能踢斷樹枝，被金氏世界紀錄列為世界上最具防衛殺傷力的鳥類。",
    "cams": [
      {
        "name": "🦤 戴恩樹古老雨林食火雞鏡",
        "id": "NUnJc82ptd4"
      }
    ]
  },
  {
    "id": "albatross",
    "name": "紐西蘭奧塔哥半島北方皇家信天翁",
    "icon": "🦅",
    "country": "紐西蘭・但尼丁泰瓦羅瓦角",
    "lat": -45.772,
    "lon": 170.728,
    "tz": "Pacific/Auckland",
    "kind": "鳥類",
    "tags": [
      "信天翁",
      "皇家信天翁",
      "翼展之王",
      "紐西蘭",
      "海崖孤巢"
    ],
    "source": "New Zealand Dept of Conservation (DOC)",
    "url": "https://www.doc.govt.nz/nature/native-animals/birds/birds-a-z/albatrosses/royal-cam/",
    "summary": "世界上唯一設在有人居住大陸上的信天翁繁殖地。翼展達3公尺的巨鳥在狂烈海風吹拂海角上孵卵，親鳥在南冰洋滑翔千里覓食。",
    "fact": "信天翁肩膀擁有特化的「肌腱鎖定構造」，滑翔時骨骼如同卡扣固定，幾乎不用肌肉力量就能在狂風上空連續飛行數千公里不落地。",
    "cams": [
      {
        "name": "🦅 紐西蘭奧塔哥半島北方皇家信天翁 生態影像",
        "id": "Mm_zVDDUeNA"
      }
    ]
  },
  {
    "id": "cuttlefish_australia",
    "name": "南澳懷阿拉巨型澳洲烏賊群",
    "icon": "🦑",
    "country": "澳洲・南澳懷阿拉菲爾斯灣",
    "lat": -32.983,
    "lon": 137.75,
    "tz": "Australia/Adelaide",
    "kind": "海洋生物",
    "tags": [
      "巨烏賊",
      "澳洲巨型墨魚",
      "海洋變色龍",
      "繁殖大典",
      "波浪霓虹"
    ],
    "source": "Whyalla Cuttlefish Cam / South Australia Tourism",
    "url": "https://www.whyalla.com/",
    "summary": "每年南半球冬季，成千上萬隻體長近1公尺的澳洲巨型烏賊聚集在淺海岩礁。皮膚上色彩斑斕的霓虹波紋光芒飛速閃爍變換。",
    "fact": "巨型烏賊是名副其實的「光影大師」，其皮膚擁有數百萬個色素細胞與虹彩細胞，能在千分之一秒內變換全身顏色和紋理立體形狀。",
    "cams": [
      {
        "name": "🦑 懷阿拉淺海巨烏賊變色鏡",
        "id": "M7lc1UVf-VE"
      }
    ]
  },
  {
    "id": "tasmanian_tiger_memorial",
    "name": "塔斯馬尼亞荒野袋狼巡護站",
    "icon": "🐺",
    "country": "澳洲・塔斯馬尼亞西南曠野世界遺產區",
    "lat": -42.85,
    "lon": 146.0,
    "tz": "Australia/Hobart",
    "kind": "野生動物",
    "tags": [
      "袋狼",
      "塔斯馬尼亞虎",
      "生態記憶",
      "溫帶雨林",
      "有袋食肉"
    ],
    "source": "Tasmanian Wilderness World Heritage Area",
    "url": "https://parks.tas.gov.au/",
    "summary": "在未受人煙侵擾的原始溫帶雨林與深邃峽谷間設立的自然觀測點。記錄塔斯馬尼亞袋鼬、針鼴與野鳥，守護這片古老有袋動物最後淨土。",
    "fact": "袋狼（又稱塔斯馬尼亞虎）背上擁有如老虎般的15條深色條紋，其頜骨能驚人地張開至120度角，目前科學家正嘗試藉由基因重組復育牠們。",
    "cams": [
      {
        "name": "🐺 塔斯馬尼亞荒野密林巡鏡",
        "id": "B4-L2nfGcuE"
      }
    ]
  },
  {
    "id": "echidna",
    "name": "澳洲袋鼠島短吻針鼴",
    "icon": "🦔",
    "country": "澳洲・南澳州袋鼠島弗林德斯蔡斯公園",
    "lat": -35.95,
    "lon": 136.7,
    "tz": "Australia/Adelaide",
    "kind": "野生動物",
    "tags": [
      "針鼴",
      "卵生刺蝟",
      "澳洲活化石",
      "長舌蟻客",
      "單孔目"
    ],
    "source": "Echidna CSI / University of Adelaide",
    "url": "https://www.adelaide.edu.au/echidna-csi/",
    "summary": "渾身覆蓋尖銳硬刺的針鼴慢悠悠地在草叢翻泥。與鴨嘴獸一樣同屬世上僅存的單孔目卵生哺乳動物，長鼻探入朽木以黏舌食蟻。",
    "fact": "針鼴媽媽產下的卵只有一顆葡萄大小，直接孵化在腹部的暫時性育兒袋中；幼崽沒有乳頭可吸，而是舔食媽媽腹部皮膚滲出的乳汁。",
    "cams": [
      {
        "name": "🦔 澳洲袋鼠島短吻針鼴 生態影像",
        "id": "O95slQRRitc"
      }
    ]
  },
  {
    "id": "jaguar",
    "name": "巴西潘塔納爾美洲豹濕地",
    "icon": "🐆",
    "country": "巴西・馬托格羅索州潘塔納爾濕地",
    "lat": -17.583,
    "lon": -56.883,
    "tz": "America/Cuiaba",
    "kind": "哺乳類",
    "tags": [
      "美洲豹",
      "美洲虎",
      "潘塔納爾",
      "濕地",
      "凱門鱷"
    ],
    "source": "Onçafari Project",
    "url": "https://oncafari.org/",
    "summary": "世界最大熱帶濕地中，頂級掠食者美洲豹是水陸兩棲的游泳好手，巡弋河岸捕殺在沙洲曬太陽的巴拉圭凱門鱷與水豚。",
    "fact": "美洲豹的咬合力在所有貓科動物中名列前茅，捕獵時不咬獵物喉嚨，而是直接咬穿獵物的頭骨顱骨或厚重鱷魚皮。",
    "cams": [
      {
        "name": "🐆 巴西潘塔納爾美洲豹濕地 生態影像",
        "id": "fgkU0sG_KH4"
      }
    ]
  },
  {
    "id": "capybara",
    "name": "阿根廷伊貝拉濕地水豚家族",
    "icon": "🦫",
    "country": "阿根廷・科連特斯伊貝拉國家公園",
    "lat": -28.0,
    "lon": -57.5,
    "tz": "America/Argentina/Buenos_Aires",
    "kind": "哺乳類",
    "tags": [
      "水豚",
      "卡皮巴拉",
      "南美濕地",
      "和平巨鼠",
      "半水生"
    ],
    "source": "Rewilding Argentina",
    "url": "https://www.rewildingargentina.org/",
    "summary": "全球動物界「情緒最穩定社交天花板」。數十隻巨型水豚在浮島與睡蓮叢中曬太陽泡澡，任由鳥類站在其背上啄食寄生蟲。",
    "fact": "水豚是地球上現存體型最大的齧齒類動物，雙腳趾間長有半蹼，水下憋氣可長達5分鐘以避開掠食者。",
    "cams": [
      {
        "name": "🦫 阿根廷伊貝拉濕地水豚家族 生態影像",
        "id": "vhNl-cVFGuY"
      }
    ]
  },
  {
    "id": "sloth",
    "name": "哥斯大黎加三趾樹懶雨林",
    "icon": "🦥",
    "country": "哥斯大黎加・曼努埃爾安東尼奧國家公園",
    "lat": 9.383,
    "lon": -84.133,
    "tz": "America/Costa_Rica",
    "kind": "哺乳類",
    "tags": [
      "樹懶",
      "三趾樹懶",
      "哥斯大黎加",
      "雨林",
      "慢活"
    ],
    "source": "The Sloth Conservation Foundation",
    "url": "https://slothconservation.org/",
    "summary": "鬱鬱蔥蔥的熱帶雨林高處，三趾樹懶倒掛在號角樹枝頭。以極致慢節奏緩慢進食樹葉，毛皮上寄生綠藻成為天然迷彩。",
    "fact": "樹懶每週只下樹上一次廁所，牠們的新陳代謝極其緩慢，胃裡消化一餐需要整整一個月時間，但牠們意外地是游泳健將！",
    "cams": [
      {
        "name": "🦥 哥斯大黎加三趾樹懶雨林 生態影像",
        "id": "U_Z2lIBG6MA"
      }
    ]
  },
  {
    "id": "toucan",
    "name": "巴拿馬索韋拉尼亞彩虹巨嘴鳥",
    "icon": "🦜",
    "country": "巴拿馬・巴拿馬運河區索韋拉尼亞公園",
    "lat": 9.117,
    "lon": -79.717,
    "tz": "America/Panama",
    "kind": "鳥類",
    "tags": [
      "巨嘴鳥",
      "鵎鵼",
      "彩虹喙",
      "巴拿馬",
      "熱帶雨林"
    ],
    "source": "Panama Rainforest Discovery Center",
    "url": "https://pipelineroad.org/",
    "summary": "架設在40公尺雨林觀察塔上的鏡頭，捕捉彩虹巨嘴鳥那巨大如香蕉般斑斕的長喙，在樹頂間互相拋擲野果嬉戲。",
    "fact": "巨嘴鳥那看似沉重的巨大鳥喙內部其實是中空的蜂窩狀骨質支架，質地極輕；巨大的喙還充當天然散熱散溫器官。",
    "cams": [
      {
        "name": "🦜 巴拿馬索韋拉尼亞彩虹巨嘴鳥 生態影像",
        "id": "jYjGtLKDlYw"
      }
    ]
  },
  {
    "id": "red_eyed_tree_frog",
    "name": "哥斯大黎加紅眼樹蛙",
    "icon": "🐸",
    "country": "哥斯大黎加・蒙特維多雲霧森林",
    "lat": 10.3,
    "lon": -84.8,
    "tz": "America/Costa_Rica",
    "kind": "野生動物",
    "tags": [
      "紅眼樹蛙",
      "樹蛙",
      "雲霧森林",
      "兩棲類",
      "保護色"
    ],
    "source": "Monteverde Cloud Forest Reserve",
    "url": "https://www.cloudforestmonteverde.com/",
    "summary": "雨季夜晚，翠綠身軀搭配鮮紅雙眼與藍黃條紋側腹的紅眼樹蛙聚集在鳳梨科植物葉片上鳴叫，展現雨林生物多樣性傳奇。",
    "fact": "當紅眼樹蛙在白天睡眠時會將鮮豔的眼睛和橘色腳掌收縮隱藏；一旦被掠食者驚動，會突然張開大紅眼震懾嚇阻對手（驚恐色）。",
    "cams": [
      {
        "name": "🐸 哥斯大黎加紅眼樹蛙 生態影像",
        "id": "UCG1aXVO8H8"
      }
    ]
  },
  {
    "id": "galapagos_tortoise",
    "name": "加拉巴哥巨龜繁殖中心",
    "icon": "🐢",
    "country": "厄瓜多・加拉巴哥群島聖克魯斯島",
    "lat": -0.742,
    "lon": -90.304,
    "tz": "Pacific/Galapagos",
    "kind": "野生動物",
    "tags": [
      "加拉巴哥巨龜",
      "象龜",
      "達爾文",
      "長壽",
      "群島特有"
    ],
    "source": "Charles Darwin Research Station",
    "url": "https://www.darwinfoundation.org/",
    "summary": "重達300公斤的長壽象龜慢吞吞地在火山岩泥漿池中降溫。這片群島啟發了達爾文演化論，巨龜是群島生態的守護基石。",
    "fact": "加拉巴哥巨龜是陸地上壽命最長的脊椎動物之一，能存活超過150年，體內蓄水器官能讓牠們長達一年不吃不喝。",
    "cams": [
      {
        "name": "🐢 加拉巴哥巨龜繁殖中心 生態影像",
        "id": "aSV1eFCTjik"
      }
    ]
  },
  {
    "id": "blue_footed_booby",
    "name": "加拉巴哥藍腳鰹鳥求偶礁岩",
    "icon": "🐦",
    "country": "厄瓜多・加拉巴哥群島艾斯潘諾拉島",
    "lat": -1.367,
    "lon": -89.683,
    "tz": "Pacific/Galapagos",
    "kind": "鳥類",
    "tags": [
      "藍腳鰹鳥",
      "藍色大腳",
      "求偶舞",
      "跳水捕魚",
      "海鳥"
    ],
    "source": "Galapagos Conservancy",
    "url": "https://www.galapagos.org/",
    "summary": "雄鳥在求偶期展開著名的「踏步踢腿舞」，高抬鮮豔的亮藍色蹼足向雌鳥炫耀，隨後雙翼合攏如利箭般俯衝垂直扎入海中捕魚。",
    "fact": "藍腳鰹鳥腳蹼的藍色濃烈程度直接反映其健康與飲食營養，越鮮豔的藍色越受雌鳥青睞，因其體內含有豐富新鮮魚類胡蘿蔔素。",
    "cams": [
      {
        "name": "🐦 加拉巴哥藍腳鰹鳥求偶礁岩 生態影像",
        "id": "SLhFnj73bX4"
      }
    ]
  },
  {
    "id": "marine_iguana",
    "name": "加拉巴哥海鬣蜥黑熔岩岸",
    "icon": "🦎",
    "country": "厄瓜多・加拉巴哥費爾南迪納島",
    "lat": -0.367,
    "lon": -91.55,
    "tz": "Pacific/Galapagos",
    "kind": "海洋生物",
    "tags": [
      "海鬣蜥",
      "海洋蜥蜴",
      "火山熔岩",
      "噴鹽",
      "潛水"
    ],
    "source": "Galapagos National Park",
    "url": "https://galapagos.gob.ec/",
    "summary": "世界上唯一會潛入海中覓食的海洋蜥蜴。牠們在深邃黑色熔岩礁石上堆疊曬太陽，隨後游入冰冷洋流啃食水下岩石上的海藻。",
    "fact": "海鬣蜥在水中攝入過多鹽分，鼻腔特化的鹽腺會像小噴泉一樣噴出高濃度的白色鹽霧，看起來如同噴氣的迷你哥吉拉。",
    "cams": [
      {
        "name": "🦎 加拉巴哥海鬣蜥黑熔岩岸 生態影像",
        "id": "lk6-NX31RRg"
      }
    ]
  },
  {
    "id": "pink_dolphin",
    "name": "亞馬遜雨林粉紅淡水豚",
    "icon": "🐬",
    "country": "秘魯・亞馬遜盆地帕卡亞-薩米利亞",
    "lat": -4.5,
    "lon": -74.0,
    "tz": "America/Lima",
    "kind": "海洋生物",
    "tags": [
      "粉紅河豚",
      "亞馬遜豚",
      "熱帶雨林",
      "粉紅色",
      "神話"
    ],
    "source": "Pacaya Samiria National Reserve",
    "url": "https://www.sernanp.gob.pe/",
    "summary": "深藏在亞馬遜黑水支流與淹沒森林中的粉紅河豚（Boto）。頸椎未癒合使其頭部能90度靈活轉彎，在茂密水下樹根間靈動穿梭。",
    "fact": "粉紅河豚出生時是灰色的，隨著年齡增長、皮膚摩擦以及血管接近表皮，成年後會轉變為浪漫迷人的亮粉紅色。",
    "cams": [
      {
        "name": "🐬 亞馬遜雨林粉紅淡水豚 生態影像",
        "id": "g-gaylm7qGg"
      }
    ]
  },
  {
    "id": "alpaca",
    "name": "秘魯安地斯山脈羊駝牧場",
    "icon": "🦙",
    "country": "秘魯・庫斯科聖谷高地",
    "lat": -13.316,
    "lon": -72.0,
    "tz": "America/Lima",
    "kind": "哺乳類",
    "tags": [
      "羊駝",
      "草泥馬",
      "安地斯山",
      "庫斯科",
      "毛絨"
    ],
    "source": "Awana Kancha Living Museum",
    "url": "https://awanakancha.com/",
    "summary": "在海拔3500公尺安地斯雪山壯麗背景下，毛髮蓬鬆濃密的羊駝與駱馬低頭啃食高原枯草，眼神天真溫順，與印加文化長相伴隨。",
    "fact": "羊駝生氣或感到威脅時會發出警告聲並朝對方吐出胃液混合口水；其羊駝毛中空保暖且不含羊毛脂，不易引發過敏。",
    "cams": [
      {
        "name": "🦙 秘魯安地斯山脈羊駝牧場 生態影像",
        "id": "-afPrpr4fb4"
      }
    ]
  },
  {
    "id": "giant_otter",
    "name": "圭亞那馬魯納尼巨水獺",
    "icon": "🦦",
    "country": "圭亞那・魯普努尼河上游雨林",
    "lat": 3.75,
    "lon": -59.3,
    "tz": "America/Guyana",
    "kind": "野生動物",
    "tags": [
      "巨水獺",
      "河流狼",
      "亞馬遜",
      "群居水獺",
      "吃魚"
    ],
    "source": "Rupununi Wildlife Research",
    "url": "https://www.conservation.org/",
    "summary": "長達1.8公尺的「河中之狼」。巨水獺以家族為單位群體巡航獵食食人魚與鯰魚，好奇地探出水面發出如狗吠般的宏亮警戒聲。",
    "fact": "巨水獺喉部和胸口長有獨一無二的白色或奶油色花紋斑塊，就像人類的指紋一樣可用於科學家個體識別辨認。",
    "cams": [
      {
        "name": "🦦 圭亞那馬魯納尼巨水獺 生態影像",
        "id": "4DJ50a5mRdY"
      }
    ]
  },
  {
    "id": "poison_dart_frog",
    "name": "厄瓜多亞蘇尼金色箭毒蛙",
    "icon": "🐸",
    "country": "厄瓜多・亞蘇尼國家公園",
    "lat": -0.85,
    "lon": -76.4,
    "tz": "America/Guayaquil",
    "kind": "野生動物",
    "tags": [
      "箭毒蛙",
      "劇毒",
      "警戒色",
      "雨林落葉",
      "微型"
    ],
    "source": "Yasuni Biosphere Reserve",
    "url": "https://www.ambiente.gob.ec/",
    "summary": "微距鏡頭記錄雨林地表枯葉層上的亮黃色小寶石。僅幾公分長的金色箭毒蛙在濕潤苔蘚上跳躍，警戒色宣告其致命毒性。",
    "fact": "一隻體重不到30公克的金色箭毒蛙體內蘊含的蟾毒素，足以毒死10個成年人或兩萬隻老鼠，是自然界毒性最強的生物之一。",
    "cams": [
      {
        "name": "🐸 厄瓜多亞蘇尼金色箭毒蛙 生態影像",
        "id": "6Zz3tIClqWY"
      }
    ]
  },
  {
    "id": "condor_andes",
    "name": "秘魯科爾卡大峽谷安地斯神鷹",
    "icon": "🦅",
    "country": "秘魯・阿雷基帕科爾卡大峽谷",
    "lat": -15.6,
    "lon": -71.9,
    "tz": "America/Lima",
    "kind": "鳥類",
    "tags": [
      "安地斯神鷹",
      "康多兀鷲",
      "科爾卡峽谷",
      "巨型滑翔",
      "神鳥"
    ],
    "source": "Colca Canyon Authority (AUTOCOLCA)",
    "url": "https://colcaperu.gob.pe/",
    "summary": "在世界最深峽谷之一的晨曦上升暖氣流中，翼展超過3.2公尺的安地斯禿鷹貼著峽谷石壁展開巡航，宛如空中巨艦盤旋。",
    "fact": "安地斯神鷹是世界上最重且翼展最大的飛禽之一，由於體重巨大，牠們極度依賴山谷熱氣流滑翔，平地起飛需助跑。",
    "cams": [
      {
        "name": "🦅 秘魯科爾卡大峽谷安地斯神鷹 生態影像",
        "id": "69ayUIjMvSA"
      }
    ]
  },
  {
    "id": "maned_wolf",
    "name": "巴西卡納斯特拉山鬃狼",
    "icon": "🦊",
    "country": "巴西・米納斯吉拉斯塞拉達卡納斯特拉",
    "lat": -20.25,
    "lon": -46.5,
    "tz": "America/Sao_Paulo",
    "kind": "野生動物",
    "tags": [
      "鬃狼",
      "高蹺狼",
      "巴西草原",
      "果實狂",
      "特長腿"
    ],
    "source": "Canastra National Park / WildLife Watch",
    "url": "https://www.icmbio.gov.br/",
    "summary": "金紅皮毛與一雙不可思議的纖細黑色長腿，被譽為「踩著高蹺的紅狐狸」。在稀樹草原茫茫草浪中漫步尋找狼果與野鼠。",
    "fact": "鬃狼雖然名字帶狼，但不是狼也不是狐狸；更奇妙的是牠們是雜食性，飲食中超過一半是植物，特別愛吃「狼果」（一種茄科水果）。",
    "cams": [
      {
        "name": "🦊 巴西卡納斯特拉山鬃狼 生態影像",
        "id": "5e4lsEe4Vew"
      }
    ]
  },
  {
    "id": "harpy_eagle",
    "name": "巴西亞馬遜角鵰（哈比鷹）巢穴",
    "icon": "🦅",
    "country": "巴西・帕拉州塔帕若斯國家森林",
    "lat": -3.5,
    "lon": -55.0,
    "tz": "America/Santarem",
    "kind": "鳥類",
    "tags": [
      "角鵰",
      "哈比鷹",
      "空中霸王",
      "熱帶雨林",
      "巨爪"
    ],
    "source": "Instituto Nacional de Pesquisas da Amazônia",
    "url": "https://www.inpa.gov.br/",
    "summary": "美洲最大的猛禽霸主。冠羽豎起如皇冠，高居50公尺木棉樹頂端巨巢。強大腳爪比灰熊爪子更長，能精準獵捕樹懶與猴子。",
    "fact": "角鵰的後爪長度可達13公分（相當於灰熊利爪），握力高達400磅，能直接捏碎獵物的骨頭並抓起等同自身體重的成年樹懶。",
    "cams": [
      {
        "name": "🦅 巴西亞馬遜角鵰（哈比鷹）巢穴 生態影像",
        "id": "Yy3z6q042LA"
      }
    ]
  },
  {
    "id": "puffin",
    "name": "冰島韋斯特曼納群島海鸚崖",
    "icon": "🐧",
    "country": "冰島・韋斯特曼納群島赫馬島",
    "lat": 63.433,
    "lon": -20.267,
    "tz": "Atlantic/Reykjavik",
    "kind": "鳥類",
    "tags": [
      "海鸚",
      "北極海鸚",
      "冰島",
      "彩虹喙",
      "海崖"
    ],
    "source": "LivefromIceland / Sea Life Trust",
    "url": "https://www.livefromiceland.is/webcams/puffin-cam/",
    "summary": "在北大西洋狂風吹拂的陡峭綠色草坡懸崖上，呆萌的北極海鸚築巢繁衍。牠們嘴裡整齊橫排咬著十幾隻銀色小魚歸巢。",
    "fact": "海鸚又被稱為「海中鸚鵡」或「小丑鳥」，其舌頭和上顎長滿向後傾斜的細刺，讓牠們能一邊捕魚一邊牢牢含住十幾條小魚。",
    "cams": [
      {
        "name": "🐧 冰島韋斯特曼納群島海鸚崖 生態影像",
        "id": "HI_vx5OHBzo"
      }
    ]
  },
  {
    "id": "adelie_penguin",
    "name": "南極羅斯海阿德利企鵝聚落",
    "icon": "🐧",
    "country": "南極洲・羅斯海埃德加角",
    "lat": -77.5,
    "lon": 166.5,
    "tz": "Antarctica/McMurdo",
    "kind": "鳥類",
    "tags": [
      "阿德利企鵝",
      "南極",
      "企鵝",
      "浮冰",
      "極地"
    ],
    "source": "US Antarctic Program / NSF",
    "url": "https://www.usap.gov/",
    "summary": "冰封世界的黑白精靈。數十萬隻阿德利企鵝在永晝極地陽光下穿行於藍色冰山間，雄企鵝銜著精挑細選的鵝卵石向雌企鵝求偶。",
    "fact": "阿德利企鵝求偶時會贈送鵝卵石作為禮物，石子是用來墊高巢穴以防融雪淹沒鳥蛋；企鵝之間甚至會發生偷石子的搞笑爭吵。",
    "cams": [
      {
        "name": "🐧 南極羅斯海阿德利企鵝聚落 生態影像",
        "id": "7V_7mzwjZaE"
      }
    ]
  },
  {
    "id": "emperor_penguin",
    "name": "南極阿特卡灣帝王企鵝",
    "icon": "🐧",
    "country": "南極洲・諾伊邁爾三號站阿特卡灣",
    "lat": -70.667,
    "lon": -8.267,
    "tz": "Antarctica/Troll",
    "kind": "鳥類",
    "tags": [
      "帝企鵝",
      "皇帝企鵝",
      "南極",
      "暴風雪",
      "極限繁衍"
    ],
    "source": "Alfred Wegener Institute (AWI)",
    "url": "https://www.awi.de/",
    "summary": "在零下50度酷寒的南極嚴冬海冰上，身披金黃頸紋的帝企鵝緊緊靠在一起形成巨型「防風取暖圈」，雄企鵝腳背孵蛋熬過漫長極夜。",
    "fact": "帝王企鵝是體型最大的企鵝，潛水深度可達565公尺，水下閉氣超過20分鐘，能抗衡極端水壓與嚴寒。",
    "cams": [
      {
        "name": "🐧 南極阿特卡灣帝王企鵝 生態影像",
        "id": "Yknyh4B4Bq4"
      }
    ]
  },
  {
    "id": "orca_norway",
    "name": "挪威特羅姆瑟峽灣虎鯨群",
    "icon": "🐋",
    "country": "挪威・特羅姆瑟卡爾斯島峽灣",
    "lat": 69.95,
    "lon": 19.5,
    "tz": "Europe/Oslo",
    "kind": "海洋生物",
    "tags": [
      "虎鯨",
      "殺人鯨",
      "挪威峽灣",
      "極光",
      "鯡魚風暴"
    ],
    "source": "Norwegian Orca Survey",
    "url": "https://www.norwegianorcasurvey.no/",
    "summary": "極夜極光映照下，挪威峽灣湧入億萬條越冬鯡魚。虎鯨家族群體協作，用尾鰭拍擊海水擊暈魚群展開「旋轉木馬式捕食」。",
    "fact": "虎鯨具有極高度發展的大腦和語言文化，不同虎鯨家族擁有專屬的方言叫聲，且捕食技術是透過長輩世代相傳的。",
    "cams": [
      {
        "name": "🐋 挪威特羅姆瑟峽灣虎鯨群 生態影像",
        "id": "hTOmWcmr2Tc"
      }
    ]
  },
  {
    "id": "humpback_hawaii",
    "name": "夏威夷茂宜島座頭鯨庇護區",
    "icon": "🐋",
    "country": "美國・夏威夷茂宜島拉海納海峽",
    "lat": 20.88,
    "lon": -156.68,
    "tz": "Pacific/Honolulu",
    "kind": "海洋生物",
    "tags": [
      "座頭鯨",
      "大翅鯨",
      "夏威夷",
      "躍出水面",
      "水下之歌"
    ],
    "source": "NOAA Hawaiian Islands Humpback Whale National Marine Sanctuary",
    "url": "https://hawaiihumpbackwhale.noaa.gov/",
    "summary": "每年冬季萬里遷徙抵達夏威夷溫暖海域繁衍。40噸重的座頭鯨騰空躍出碧藍海面、重重拍擊胸鰭，水下水聽器傳來悠揚深邃的鯨歌。",
    "fact": "雄性座頭鯨唱出的「鯨歌」複雜而富韻律，一首曲目可長達數十分鐘並重複數日，同一海域的鯨魚每年還會同步更新流行曲調。",
    "cams": [
      {
        "name": "🐋 夏威夷茂宜島座頭鯨庇護區 生態影像",
        "id": "QzQ-7eiMw1w"
      }
    ]
  },
  {
    "id": "brown_bear_finland",
    "name": "芬蘭與俄羅斯邊界泰加林棕熊",
    "icon": "🐻",
    "country": "芬蘭・庫莫泰加針葉林",
    "lat": 64.133,
    "lon": 30.2,
    "tz": "Europe/Helsinki",
    "kind": "哺乳類",
    "tags": [
      "歐亞棕熊",
      "芬蘭",
      "原始針葉林",
      "午夜陽光",
      "野狼"
    ],
    "source": "Wild Taiga Finland / Bear Centre",
    "url": "https://www.bearcentre.fi/",
    "summary": "在午夜陽光籠罩的寂靜北歐森林 swamp 沼澤地，歐洲棕熊與灰狼在白樺樹林間穿梭覓食野莓，空氣中瀰漫松針芬芳。",
    "fact": "芬蘭棕熊嗅覺靈敏度是獵犬的七倍，能在幾公里外聞到風中的腐木蟻巢或漿果香氣。",
    "cams": [
      {
        "name": "🐻 芬蘭與俄羅斯邊界泰加林棕熊 生態影像",
        "id": "vpKCGFqA2r8"
      }
    ]
  },
  {
    "id": "lynx_spain",
    "name": "西班牙杜尼亞納伊比利亞猞猁",
    "icon": "🐱",
    "country": "西班牙・安達盧西亞杜尼亞納國家公園",
    "lat": 37.0,
    "lon": -6.433,
    "tz": "Europe/Madrid",
    "kind": "哺乳類",
    "tags": [
      "伊比利亞猞猁",
      "西班牙猞猁",
      "最危貓科",
      "耳尖毛刷",
      "地中海灌木"
    ],
    "source": "Life LynxConnect / WWF Spain",
    "url": "https://www.wwf.es/",
    "summary": "從瀕危邊緣絕地重生的傳奇貓科。耳尖頂著兩簇標誌性黑毛刷，頰下蓄著白色絡腮鬍，在地中海栓皮櫟林中悄無聲息伏擊野兔。",
    "fact": "伊比利亞猞猁曾一度只剩不到100隻，是全世界最瀕危的貓科動物；其耳朵頂端的簇毛能像微型天線一樣幫助精確定位聲音來源。",
    "cams": [
      {
        "name": "🐱 西班牙杜尼亞納伊比利亞猞猁 生態影像",
        "id": "Q3NJZuce3D4"
      }
    ]
  },
  {
    "id": "ibex_alps",
    "name": "瑞士少女峰阿爾卑斯羱羊",
    "icon": "🐐",
    "country": "瑞士・伯恩高地艾格峰懸崖",
    "lat": 46.58,
    "lon": 8.0,
    "tz": "Europe/Zurich",
    "kind": "野生動物",
    "tags": [
      "阿爾卑斯羱羊",
      "野山羊",
      "瑞士阿爾卑斯",
      "險峰攀岩",
      "大彎角"
    ],
    "source": "Jungfrau Swiss Alps Live",
    "url": "https://www.jungfrau.ch/",
    "summary": "雄偉彎角長達1公尺的羱羊站在萬丈深淵垂直絕壁邊緣。牠們擁有不可思議的蹄部構造，能在近90度的幾乎垂直水壩壁上舔食礦鹽。",
    "fact": "羱羊蹄子外緣堅硬如岩石，內部中心則是柔軟彈性的肉墊，能在只有幾公分微小岩石凸起上牢固站立不滑倒。",
    "cams": [
      {
        "name": "🐐 少女峰絕壁野羱羊雪景",
        "id": "2g811Eo7K8U"
      }
    ]
  },
  {
    "id": "grey_seal",
    "name": "英國諾福克唐娜努克灰海豹產房",
    "icon": "🦭",
    "country": "英國・林肯郡唐娜努克海灘",
    "lat": 53.467,
    "lon": 0.15,
    "tz": "Europe/London",
    "kind": "海洋生物",
    "tags": [
      "灰海豹",
      "海豹寶寶",
      "英國海岸",
      "白絨毛",
      "冬季繁衍"
    ],
    "source": "Lincolnshire Wildlife Trust",
    "url": "https://www.lincstrust.org.uk/",
    "summary": "每年初冬，數千隻灰海豹湧上風強浪大的北海沙丘海灘產子。全身雪白毛茸茸的海豹幼崽睜著漆黑大眼睛依偎在母親身邊哺乳。",
    "fact": "灰海豹幼崽出生時覆蓋一層白色濃密的胎毛不能下水，短短三週內每天喝高脂肪母乳增重兩公斤，脫毛後便獨立出海。",
    "cams": [
      {
        "name": "🦭 英國諾福克唐娜努克灰海豹產房 生態影像",
        "id": "Qisl6Bv2SpY"
      }
    ]
  },
  {
    "id": "stork_poland",
    "name": "波蘭別布扎濕地白鸛之鄉",
    "icon": "🪶",
    "country": "波蘭・波德拉謝省別布扎河谷",
    "lat": 53.583,
    "lon": 22.75,
    "tz": "Europe/Warsaw",
    "kind": "鳥類",
    "tags": [
      "白鸛",
      "送子鳥",
      "波蘭鄉村",
      "屋頂鳥巢",
      "報春"
    ],
    "source": "Biebrza National Park Stork Cam",
    "url": "https://www.biebrza.org.pl/",
    "summary": "全球四分之一白鸛繁衍的國度。高架電線桿或農舍屋頂上的巨大白鸛巢穴中，成鳥互相仰頭叩擊長喙發出「噠噠噠」清脆報春鳴響。",
    "fact": "白鸛在歐洲民間被奉為帶來幸福與新生兒的「送子鳥」；牠們成鳥喉部幾乎無鳴管，彼此溝通主要靠上下喙迅速叩擊發聲。",
    "cams": [
      {
        "name": "🪶 波蘭鄉村屋頂白鸛守護巢",
        "id": "abbR-Ttd-cA"
      }
    ]
  },
  {
    "id": "reindeer_norway",
    "name": "挪威芬馬克薩米馴鹿大遷徙",
    "icon": "🦌",
    "country": "挪威・芬馬克卡拉紹克高原",
    "lat": 69.467,
    "lon": 25.5,
    "tz": "Europe/Oslo",
    "kind": "野生動物",
    "tags": [
      "馴鹿",
      "薩米人",
      "苔原遷徙",
      "北極之光",
      "雙性長角"
    ],
    "source": "NRK Reindeer Live Broadcast",
    "url": "https://www.nrk.no/",
    "summary": "隨薩米牧民橫跨北極凍原與峽灣的萬隻馴鹿大軍。在暴風雪與極光交相輝映的高原上，鹿蹄踏過厚厚積雪啃食地衣。",
    "fact": "馴鹿是鹿科動物中唯一雄性和雌性都會長角的物種；更神奇的是牠們的眼睛在冬季會由金黃色變成深藍色，以適應極夜微光。",
    "cams": [
      {
        "name": "🦌 芬馬克凍原萬鹿遷徙鏡",
        "id": "NUnJc82ptd4"
      }
    ]
  },
  {
    "id": "chameleon",
    "name": "馬達加斯加安達西貝豹紋變色龍",
    "icon": "🦎",
    "country": "馬達加斯加・安達西貝-曼塔迪亞保護區",
    "lat": -18.933,
    "lon": 48.417,
    "tz": "Indian/Antananarivo",
    "kind": "野生動物",
    "tags": [
      "變色龍",
      "豹紋變色龍",
      "馬達加斯加",
      "獨立眼球",
      "彈簧舌"
    ],
    "source": "Association Mitsinjo",
    "url": "https://www.mitsinjo.org/",
    "summary": "熱帶雨林枝頭上的調色盤大師。斑斕豹紋變色龍兩隻眼睛各自獨立360度旋轉觀察周遭，在微距鏡頭下突然彈射出比身體更長的舌頭。",
    "fact": "變色龍變色主要不是為了偽裝融入背景，而是為了表達情緒反應、求偶炫耀或調節體溫；其彈簧舌0.07秒內即可捕獲昆蟲。",
    "cams": [
      {
        "name": "🦎 馬達加斯加安達西貝豹紋變色龍 生態影像",
        "id": "qracoxUAqL8"
      }
    ]
  },
  {
    "id": "sea_lion_california",
    "name": "舊金山39號碼頭加州海獅",
    "icon": "🦭",
    "country": "美國・加州舊金山漁人碼頭",
    "lat": 37.809,
    "lon": -122.41,
    "tz": "America/Los_Angeles",
    "kind": "海洋生物",
    "tags": [
      "海獅",
      "舊金山",
      "39號碼頭",
      "曬太陽",
      "吠叫"
    ],
    "source": "PIER 39 Sea Lion Center",
    "url": "https://www.pier39.com/sealions/",
    "summary": "舊金山地標性的自然奇景。上千隻性格喧鬧的加州海獅擠在浮動木排甲板上曬太陽、互相推擠搶位，發出嘈雜熱鬧的吠叫聲。",
    "fact": "加州海獅游泳時速可達每小時40公里，智商非常高；自1989年洛馬普列塔大地震後，牠們突然自發佔據了39號碼頭木排。",
    "cams": [
      {
        "name": "🦭 舊金山39號碼頭海獅",
        "id": "2g811Eo7K8U"
      }
    ]
  },
  {
    "id": "sea_turtle_costarica",
    "name": "哥斯大黎加奧斯蒂奧納爾欖蠵龜大潮",
    "icon": "🐢",
    "country": "哥斯大黎加・瓜納卡斯特奧斯蒂奧納爾海灘",
    "lat": 9.997,
    "lon": -85.7,
    "tz": "America/Costa_Rica",
    "kind": "海洋生物",
    "tags": [
      "欖蠵龜",
      "產卵大潮",
      "哥斯大黎加",
      "海灘集結",
      "月夜奇景"
    ],
    "source": "Refugio Nacional de Vida Silvestre Ostional",
    "url": "https://www.sinac.go.cr/",
    "summary": "著名的「Arribada」（大集結產卵）。每月下弦月夜，數十萬隻欖蠵龜宛如接受遠古召喚般同時湧上沙灘挖坑產卵，景象宏偉肅穆。",
    "fact": "集結產卵策略是一種自然演化智慧——海龜透過同一時間產下數百萬枚卵，讓天敵掠食飽和，從而確保一定比例的小海龜成功孵化入海。",
    "cams": [
      {
        "name": "🐢 奧斯蒂奧納爾海龜海灘潮",
        "id": "M7lc1UVf-VE"
      }
    ]
  },
  {
    "id": "beaver_canada",
    "name": "加拿大班夫國家公園河狸水壩",
    "icon": "🦫",
    "country": "加拿大・亞伯達省班夫國家公園",
    "lat": 51.178,
    "lon": -115.571,
    "tz": "America/Edmonton",
    "kind": "哺乳類",
    "tags": [
      "河狸",
      "水獺",
      "工程師",
      "加拿大國獸",
      "水壩"
    ],
    "source": "Parks Canada / Banff Wildlife Cams",
    "url": "https://www.pc.gc.ca/en/pn-np/ab/banff",
    "summary": "大自然的生態水利工程師。河狸用其堅韌橙黃色門齒啃倒白楊木，在落磯山脈溪流築起堅固水壩，營造出生機盎然的濕地池塘生態。",
    "fact": "河狸門牙外層含有豐富鐵元素，因此呈現橙色且極度堅硬自我磨利；牠們建造的水壩有些長達數百公尺，甚至能從外太空衛星看見！",
    "cams": [
      {
        "name": "🦫 班夫落磯山河狸池塘水壩",
        "id": "B4-L2nfGcuE"
      }
    ]
  },
  {
    "id": "jellyfish_monterey",
    "name": "加州蒙特雷灣海月水母",
    "icon": "🪼",
    "country": "美國・加州蒙特雷灣水族館外海",
    "lat": 36.62,
    "lon": -121.905,
    "tz": "America/Los_Angeles",
    "kind": "海洋生物",
    "tags": [
      "水母",
      "海月水母",
      "深藍",
      "發光漂浮",
      "放鬆療癒"
    ],
    "source": "Monterey Bay Aquarium Live Jelly",
    "url": "https://www.montereybayaquarium.org/cams-videos/live-cams/jelly-cam",
    "summary": "深邃深藍背景前，半透明傘狀水母舒緩律動漂浮。傘緣細長觸手如絲綢般舞動，配合柔和光影，帶來極致靜謐的心靈療癒感。",
    "fact": "水母體內超過95%是水分，沒有大腦、心臟或骨骼，已經在地球各大洋中優雅漂浮了超過5億年，遠比恐龍古老。",
    "cams": [
      {
        "name": "🪼 蒙特雷海月水母",
        "id": "NUnJc82ptd4"
      }
    ]
  },
  {
    "id": "manta_ray_hawaii",
    "name": "夏威夷科納夜潛魔鬼魚（鬼蝠魟）",
    "icon": "🐟",
    "country": "美國・夏威夷大島科納外海",
    "lat": 19.64,
    "lon": -155.997,
    "tz": "Pacific/Honolulu",
    "kind": "海洋生物",
    "tags": [
      "鬼蝠魟",
      "蝠魟",
      "魔鬼魚",
      "夜潛",
      "浮游生物"
    ],
    "source": "Kona Manta Ray Cam / Explore.org",
    "url": "https://explore.org/livecams/manta-rays/manta-ray-cam",
    "summary": "夜間水下探照燈吸引大量浮游生物，翼展長達4公尺的溫柔巨獸鬼蝠魟在燈光光束中翻筋斗翻滾濾食，宛如水下幽雅芭蕾舞者。",
    "fact": "鬼蝠魟擁有所有魚類中相對體重最大、最發達的大腦，能通過鏡子測試展現自我意識，性格溫和無毒刺。",
    "cams": [
      {
        "name": "🐟 夏威夷科納夜潛魔鬼魚（鬼蝠魟） 生態影像",
        "id": "ZiuizFZoi_s"
      }
    ]
  },
  {
    "id": "snowy_owl",
    "name": "加拿大魁北克北極雪鴞雪原",
    "icon": "🦉",
    "country": "加拿大・魁北克北部昂加瓦半島",
    "lat": 59.0,
    "lon": -70.0,
    "tz": "America/Toronto",
    "kind": "鳥類",
    "tags": [
      "雪鴞",
      "白貓頭鷹",
      "哈利波特",
      "北極苔原",
      "金黃雙眼"
    ],
    "source": "Owl Research Institute / Explore.org",
    "url": "https://explore.org/livecams/birds/snowy-owl-cam",
    "summary": "哈利波特「嘿美」的原型。通體雪白點綴黑色斑紋，金黃色圓潤大眼警惕凝視極地苔原，是極少數完全在白天日間活動狩獵的貓頭鷹。",
    "fact": "雪鴞厚重如絨羽毛甚至連腳趾爪子都完全包裹，其濃密羽毛隔熱效率高到在零下50度嚴寒中體溫依然保持38度左右。",
    "cams": [
      {
        "name": "🦉 加拿大魁北克北極雪鴞雪原 生態影像",
        "id": "G7DDnsAtZ4Y"
      }
    ]
  },
  {
    "id": "georgia_whale_shark",
    "name": "喬治亞水族館巨型鯨鯊大洋池",
    "icon": "🦈",
    "country": "美國・喬治亞州亞特蘭大",
    "lat": 33.763,
    "lon": -84.395,
    "tz": "America/New_York",
    "kind": "海洋生物",
    "tags": [
      "鯨鯊",
      "大洋池",
      "海洋巨獸",
      "水族館",
      "點點星斑"
    ],
    "source": "Georgia Aquarium Ocean Voyager",
    "url": "https://www.georgiaaquarium.org/webcam/ocean-voyager/",
    "summary": "世界最大室內水體展館之一「遠洋航行者」。體長十餘公尺的海洋最大魚類——鯨鯊身上布滿白色星空斑點，與無數魔鬼魚和海龜同游。",
    "fact": "鯨鯊雖然體型與校車一樣大，但性情極端溫馴，只吃細小浮游生物與小蝦；每隻鯨鯊身上的白點圖案如同人類指紋般終生不變。",
    "cams": [
      {
        "name": "🦈 喬治亞水族館巨型鯨鯊大洋池 生態影像",
        "id": "HXnXZCL-878"
      }
    ]
  },
  {
    "id": "iguana_fiji",
    "name": "斐濟冠斑鬣蜥熱帶島嶼棲所",
    "icon": "🦎",
    "country": "斐濟・亞薩瓦群島亞杜瓦塔巴島",
    "lat": -16.8,
    "lon": 178.3,
    "tz": "Pacific/Fiji",
    "kind": "野生動物",
    "tags": [
      "冠鬣蜥",
      "斐濟",
      "翡翠綠",
      "熱帶島嶼",
      "極危"
    ],
    "source": "National Trust of Fiji",
    "url": "https://nationaltrust.org.fj/",
    "summary": "如同翠綠翡翠雕琢的南太平洋特有蜥蜴。頭部頂著明顯的金色冠刺，優雅攀附在芙蓉樹枝頭，背部飾有精緻的青白橫紋。",
    "fact": "斐濟冠鬣蜥在孵化後剛出世時呈現深墨綠色，幾小時內會轉化為光彩奪目的亮翡翠綠；受到威脅時能在幾分鐘內變為黑褐色。",
    "cams": [
      {
        "name": "🦎 斐濟冠斑鬣蜥熱帶島嶼棲所 生態影像",
        "id": "Q_Wd5de-VG4"
      }
    ]
  },
  {
    "id": "arctic_fox",
    "name": "冰島霍恩斯特蘭迪爾北極狐",
    "icon": "🦊",
    "country": "冰島・西峽灣霍恩斯特蘭迪爾自然保護區",
    "lat": 66.45,
    "lon": -22.5,
    "tz": "Atlantic/Reykjavik",
    "kind": "哺乳類",
    "tags": [
      "北極狐",
      "白狐",
      "冰島",
      "凍原雪地",
      "圓耳蓬尾"
    ],
    "source": "The Arctic Fox Centre Iceland",
    "url": "https://www.melrakki.is/",
    "summary": "冰島唯一的本土原生陸生哺乳動物。靈活小巧的身姿在北大西洋洶湧波濤旁的玄武岩海灘與冰雪懸崖間穿梭，覓食鳥蛋與小魚。",
    "fact": "北極狐的身體緊湊、耳朵小而圓、口鼻短，這些演化特徵能最大限度減少散熱；在零下70度酷寒下牠們的新陳代謝才會開始上升。",
    "cams": [
      {
        "name": "🦊 冰島霍恩斯特蘭迪爾北極狐 生態影像",
        "id": "5e4lsEe4Vew"
      }
    ]
  },
  {
    "id": "nautilus_palau",
    "name": "帛琉深海鸚鵡螺古老深淵",
    "icon": "🐚",
    "country": "帛琉・科羅爾外海垂直斷崖水下300米",
    "lat": 7.3,
    "lon": 134.45,
    "tz": "Pacific/Palau",
    "kind": "海洋生物",
    "tags": [
      "鸚鵡螺",
      "活化石",
      "深海深淵",
      "黃金螺旋",
      "古生代"
    ],
    "source": "Palau International Coral Reef Center",
    "url": "https://picrc.org/",
    "summary": "經歷數億年時光未曾改變的遠古活化石。其優美的黃金比例螺旋外殼在深海微光中浮動，依靠氣室滲透壓調節浮沉在深海懸崖覓食。",
    "fact": "鸚鵡螺的螺旋外殼內部由幾十個密封氣室組成，其生長曲線是完美的對數黃金螺旋；牠們早在恐龍出現前幾億年就生活在地球海洋中。",
    "cams": [
      {
        "name": "🐚 帛琉深海鸚鵡螺古老深淵 生態影像",
        "id": "YwfUskRgTOo"
      }
    ]
  },
  {
    "id": "sea_otter_alaska",
    "name": "阿拉斯加基奈峽灣北方海獺",
    "icon": "🦦",
    "country": "美國・阿拉斯加基奈峽灣冰川海灣",
    "lat": 59.9,
    "lon": -149.6,
    "tz": "America/Anchorage",
    "kind": "海洋生物",
    "tags": [
      "北方海獺",
      "阿拉斯加",
      "浮冰海灣",
      "巨藻森林",
      "海膽剋星"
    ],
    "source": "Alaska SeaLife Center",
    "url": "https://www.alaskasealife.org/",
    "summary": "漂浮在冰河漂流浮冰旁的北方海獺。成群海獺在巨藻海帶林中用海藻纏繞身軀當作安全錨，躺在水面上用胸口石塊敲開蚌殼進食。",
    "fact": "海獺是關鍵物種，牠們大量捕食海膽，從而防止海膽過度啃食破壞巨藻林，保護了整個沿海海洋生態系統的碳吸收平衡。",
    "cams": [
      {
        "name": "🦦 阿拉斯加基奈峽灣北方海獺 生態影像",
        "id": "1Zq5ZpKwq74"
      }
    ]
  },
  {
    "id": "narwhal",
    "name": "格陵蘭西北部一角鯨（獨角鯨）",
    "icon": "🐋",
    "country": "格陵蘭・巴芬灣與卡納克外海浮冰邊緣",
    "lat": 77.467,
    "lon": -69.233,
    "tz": "America/Thule",
    "kind": "海洋生物",
    "tags": [
      "一角鯨",
      "獨角鯨",
      "海洋獨角獸",
      "長牙",
      "北極深海"
    ],
    "source": "Greenland Institute of Natural Resources",
    "url": "https://natur.gl/en/",
    "summary": "傳說中的「海洋獨角獸」。在北極萬年浮冰裂縫間破水換氣，雄鯨那長達2.5公尺、呈逆時針螺旋紋路的修長長牙在水面交錯如劍客比試。",
    "fact": "一角鯨的長牙其實是一顆特化的左側門齒，牙齒內部布滿超過一千萬個神經末梢，能感測海水鹽度、溫度與氣壓微小變化。",
    "cams": [
      {
        "name": "🐋 格陵蘭西北部一角鯨（獨角鯨） 生態影像",
        "id": "vndHx6Aqtiw"
      }
    ]
  },
  {
    "id": "fennec_fox",
    "name": "撒哈拉大沙漠耳廓狐（大耳狐）",
    "icon": "🦊",
    "country": "埃及與阿爾及利亞邊界・撒哈拉沙漠沙丘",
    "lat": 24.5,
    "lon": 10.0,
    "tz": "Africa/Algiers",
    "kind": "野生動物",
    "tags": [
      "耳廓狐",
      "大耳狐",
      "撒哈拉沙漠",
      "金黃大耳",
      "最小犬科"
    ],
    "source": "Sahara Conservation Fund",
    "url": "https://www.saharaconservation.org/",
    "summary": "世界上體型最小的犬科動物，卻長著一雙長達15公分、不成比例的超大耳朵。夜間從沙洞中鑽出，在金色沙浪上輕盈覓食昆蟲蜥蜴。",
    "fact": "耳廓狐巨大的耳朵布滿微血管，能像散熱器一樣有效排出體內熱量；厚厚毛髮甚至覆蓋了腳掌底部，保護牠們不被滾燙沙子燙傷。",
    "cams": [
      {
        "name": "🦊 撒哈拉大沙漠耳廓狐（大耳狐） 生態影像",
        "id": "3KB0ZnqKehg"
      }
    ]
  },
  {
    "id": "cheetah_namibia",
    "name": "納米比亞獵豹保護基金會",
    "icon": "🐆",
    "country": "納米比亞・奧奇瓦龍戈高原",
    "lat": -20.467,
    "lon": 16.65,
    "tz": "Africa/Windhoek",
    "kind": "哺乳類",
    "tags": [
      "獵豹",
      "納米比亞",
      "保育",
      "極速",
      "荒野奔馳"
    ],
    "source": "Cheetah Conservation Fund (CCF)",
    "url": "https://cheetah.org/",
    "summary": "全球野生獵豹重要庇護所。鏡頭記錄獵豹在金合歡樹叢與紅土高原間優雅漫步、練習捕獵衝刺與群體社交的日常姿態。",
    "fact": "獵豹奔跑時尾巴就像船舵一樣，在極速急轉彎時左右擺動以平衡身體，防止在高速中失去重心摔倒。",
    "cams": [
      {
        "name": "🐆 納米比亞獵豹保護基金會 生態影像",
        "id": "bSZM7cP5nL8"
      }
    ]
  },
  {
    "id": "otter_japan",
    "name": "日本長野安曇野小爪水獺溪谷",
    "icon": "🦦",
    "country": "日本・長野縣安曇野北阿爾卑斯清溪",
    "lat": 36.31,
    "lon": 137.9,
    "tz": "Asia/Tokyo",
    "kind": "哺乳類",
    "tags": [
      "水獺",
      "亞洲小爪水獺",
      "長野",
      "清澈溪流",
      "靈活雙手"
    ],
    "source": "Shinshu Wildlife Trust",
    "url": "https://www.env.go.jp/park/chubu/",
    "summary": "靈巧活潑的亞洲小爪水獺在阿爾卑斯融雪清溪中穿梭潛泳。牠們像人類手指一樣靈巧的雙手在鵝卵石縫隙中捕捉小蟹與小魚。",
    "fact": "亞洲小爪水獺是世界上體型最小的水獺，指爪極度退化短小，使其前爪觸覺極為敏銳，能像人類雙手般靈巧握住石塊把玩！",
    "cams": [
      {
        "name": "🦦 日本長野安曇野小爪水獺溪谷 生態影像",
        "id": "Jh2iod6ux78"
      }
    ]
  },
  {
    "id": "hummingbird_jamaica",
    "name": "牙買加紅嘴長尾蜂鳥（醫生鳥）",
    "icon": "🦜",
    "country": "牙買加・蒙特哥貝洛克蘭茲鳥類保護區",
    "lat": 18.417,
    "lon": -77.917,
    "tz": "America/Jamaica",
    "kind": "鳥類",
    "tags": [
      "蜂鳥",
      "牙買加國鳥",
      "長尾",
      "花蜜",
      "懸停飛行"
    ],
    "source": "Rocklands Bird Sanctuary Jamaica",
    "url": "https://www.visitjamaica.com/",
    "summary": "牙買加國鳥「醫生鳥」。雄鳥身披金屬光澤翠綠羽毛與深黑長尾，如空中直升機般在朱槿花前高速懸停拍翅，吮吸甜美花蜜。",
    "fact": "蜂鳥是世界上唯一能夠真正倒退飛行和倒立飛行的鳥類，其心跳每分鐘可高達1200次，翅膀每秒拍打多達80次！",
    "cams": [
      {
        "name": "🦜 牙買加紅嘴長尾蜂鳥（醫生鳥） 生態影像",
        "id": "Iu6kH-Dd2Vc"
      }
    ]
  },
  {
    "id": "sea_dragon_australia",
    "name": "南澳草海龍海草礁岩秘境",
    "icon": "🐉",
    "country": "澳洲・南澳拉皮德灣碼頭水下",
    "lat": -35.533,
    "lon": 138.233,
    "tz": "Australia/Adelaide",
    "kind": "海洋生物",
    "tags": [
      "草海龍",
      "海龍",
      "海洋偽裝",
      "南澳",
      "絕美葉狀"
    ],
    "source": "South Australian Museum Marine Live",
    "url": "https://www.samuseum.sa.gov.au/",
    "summary": "如夢似幻的海洋擬態大師。草海龍身軀裝飾著如海藻般半透明葉狀附肢，在冰涼海灣金黃海草林中緩慢漂浮，與環境融為一體。",
    "fact": "草海龍與海馬一樣是由雄性負責育兒！雌龍將百枚鮮紅卵黏附在雄龍尾部下方特化育卵區，由雄龍守護至小海龍孵化。",
    "cams": [
      {
        "name": "🐉 南澳草海龍海草礁岩秘境 生態影像",
        "id": "zb7IObsR2II"
      }
    ]
  },
  {
    "id": "firefly_taiwan",
    "name": "台灣阿里山黑翅螢夜間秘境",
    "icon": "🪲",
    "country": "台灣・嘉義阿里山光華生態社區",
    "lat": 23.475,
    "lon": 120.683,
    "tz": "Asia/Taipei",
    "kind": "野生動物",
    "tags": [
      "螢火蟲",
      "黑翅螢",
      "阿里山",
      "星光森林",
      "生物螢光"
    ],
    "source": "阿里山國家風景區管理處",
    "url": "https://www.ali-nsa.net/",
    "summary": "春末夏初入夜時分，無光害的深山竹林與杉木林間，成千上萬隻黑翅螢同步閃爍微黃綠光芒，宛如墜入凡間的銀河星海。",
    "fact": "螢火蟲發出的光是「冷光」，其發光化學反應的能量轉化率高達98%，幾乎不散發熱量，光芒頻率用於同種求偶暗號交流。",
    "cams": [
      {
        "name": "🪲 台灣阿里山黑翅螢夜間秘境 生態影像",
        "id": "j2L_559nCjc"
      }
    ]
  }
];

if (typeof window !== 'undefined') {
  window.DEFAULT_SPOTS = DEFAULT_SPOTS;
}
