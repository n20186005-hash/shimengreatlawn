/**
 * 單景點 SEO 實體綁定設定
 * 所有「實體屬性」集中在此，頁面與 JSON-LD 都從這裡取值，避免分散維護。
 */
export const site = {
  domain: 'shimengreatlawn.com',
  url: 'https://shimengreatlawn.com',

  /** 景點官方全稱 */
  name: '石門大草坪',
  /** 景點常用俗稱／域名對應含義 */
  shortName: '石門大草坪',
  nameEn: 'Shimen Great Lawn',

  /** 地理歸屬：景點 → 城市 → 省/市 → 國家 */
  city: '龍潭區',
  state: '桃園市',
  country: '臺灣',
  countryCode: 'TW',
  postalCode: '325',
  streetAddress: '佳安路2號',
  address: '325台灣桃園市龍潭區佳安里佳安路2號',

  latitude: 24.83509,
  longitude: 121.24165,

  /** Google 地圖分類 */
  category: '公園',

  /** Google 地圖分享短連結（評價來源） */
  mapsShareUrl: 'https://maps.app.goo.gl/xdpW2KryCeBkd1B97',
  /** Google 地圖導航連結 */
  mapUrl:
    'https://www.google.com/maps/dir/?api=1&destination=24.83509%2C121.24165&travelmode=driving',
  /** Google 地圖嵌入 src */
  mapsEmbedSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.841600735194!2d121.24165!3d24.835089999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34683d9796cee9e7%3A0xf7b638d45539169c!2z55-z6Zeo5aSn6I2J5Z2q!5e0!3m2!1szh-CN!2stw!4v1785322457765!5m2!1szh-CN!2stw',

  /** 周邊核心地標 */
  nearbyLandmark1: '十一份觀光文化園區',
  nearbyLandmark2: '石門水庫',

  /** 當地政府／官方旅遊局：本景點官方頁面（用於 sameAs 實體綁定） */
  govtTourismUrl: 'https://travel.tycg.gov.tw/zh-tw/travel/attraction/589',
  /** 官方旅遊入口網站（用於權威出站連結） */
  govtTourismPortalUrl: 'https://travel.tycg.gov.tw/',
  govtTourismName: '桃園市政府觀光旅遊局',

  /**
   * Google 地圖使用者評分與評價數
   * ⚠️ 僅用於頁面上呈現，不得寫入 JSON-LD 結構化資料，
   *    並需保留下列來源與同步時間說明，以符合 Google 第三方內容引用規範。
   */
  googleRating: 4.5,
  googleRatingValue: '4.5',
  googleReviewCount: 5219,
  googleReviewCountText: '5,219',
  /** 同步時間：2026 年 9 月 */
  ratingSyncedAt: '2026 年 9 月',
  ratingSyncedDate: '2026-09',

  /**
   * SEO Title：品牌詞優先，控制在約 28 個中文字內，避免 SERP 截斷。
   * 用字以繁體（zh-Hant-TW）為準，並納入查詢資料中實際有量的意圖詞：交通、停車、花季、野餐。
   */
  title: '石門大草坪｜桃園龍潭免費大草坪：交通停車、花季與野餐指南',
  /** Meta Description：控制在約 60 個中文字內，前段放最強的信任與定位訊號 */
  description:
    'Google 地圖 4.5 分。石門大草坪在桃園龍潭十一份，免費開放；整理即時天氣、交通停車、流蘇花季、野餐與毛孩注意事項。',
  locale: 'zh_TW',
  lang: 'zh-Hant-TW',
  gaId: 'G-HXM22WWPKP',

  updated: '2026-09-16',
  updatedText: '2026 年 9 月 16 日',
} as const;

/** 評分與評價來源說明：評價區塊使用 */
export const reviewSourceNote =
  '同步自 Google 地圖使用者評價，同步時間 2026 年 9 月；版權歸原作者與 Google 地圖所有';

/** 評分與評價來源說明：評分小字（單行）使用 */
export const ratingSourceLine =
  '評分與評價數同步自谷歌地圖（Google Maps）使用者評價 · 2026 年 9 月';

/**
 * 資料來源清單
 * 統一由來源區塊顯示，Google 相關外部連結一律保留。
 */
export const sources = [
  {
    label: 'Google 地圖：石門大草坪（評分、評價、地址與座標）',
    url: 'https://maps.app.goo.gl/xdpW2KryCeBkd1B97',
    note: '評價 · 同步時間 2026 年 9 月',
    extra: '同步自 Google 地圖使用者評價，同步時間 2026 年 9 月；版權歸原作者與 Google 地圖所有',
  },
  {
    label: 'Google 地圖嵌入地圖（位置與周邊道路）',
    url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.841600735194!2d121.24165!3d24.835089999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34683d9796cee9e7%3A0xf7b638d45539169c!2z55-z6Zeo5aSn6I2J5Z2q!5e0!3m2!1szh-CN!2stw!4v1785322457765!5m2!1szh-CN!2stw',
    note: '地圖 · 同步時間 2026 年 9 月',
  },
  {
    label: '桃園觀光導覽網：佳安里（石門十一份）',
    url: 'https://travel.tycg.gov.tw/zh-tw/travel/attraction/589',
    note: '官方旅遊局景點資料',
  },
  {
    label: '經濟部水利署：走讀十一份觀光文化園區',
    url: 'https://www.wra.gov.tw/epaper/Article_Detail.aspx?n=30173&s=7861',
    note: '歷史與園區沿革',
  },
  {
    label: '經濟部水利署：十一份園區景觀與植栽',
    url: 'https://www.wra.gov.tw/epaper/Article_Detail.aspx?n=30173&s=9109',
    note: '景觀與植栽（含流蘇花）',
  },
  {
    label: '北區水資源分署：大草坪場地使用說明',
    url: 'https://www.wra.gov.tw/wranb/cp.aspx?n=36953',
    note: '場地與使用規範',
  },
] as const;
