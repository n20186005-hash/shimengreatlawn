# ShimenGreatLawn.com

石門大草坪獨立景點網站。網站使用臺灣繁體中文，採 Astro + Tailwind CSS + TypeScript，透過 Cloudflare Workers 靜態資產部署，不使用資料庫、登入、CMS 或第三方字型。

## 已完成內容

- 單頁式景點首頁，包含行前資訊、玩法、流蘇花季、十一份歷史、交通停車、行程與 FAQ
- 真實照片本地化，不使用遠端圖片熱連結
- 響應式圖片與 WebP 壓縮
- Google Analytics 4：`G-HXM22WWPKP`
- `TouristAttraction`、`WebSite`、`BreadcrumbList`、`FAQPage` JSON-LD（評分與評價不寫入結構化資料，僅於頁面展示）
- Open Graph、Twitter Card、canonical、robots.txt、sitemap.xml
- 行動版固定導航按鈕與無障礙導覽
- Google 地圖評分與評價區塊（4.5 / 5,219，同步自 Google 地圖使用者評價，同步時間 2026 年 9 月）
- 資料來源區塊（Sources），集中 Google 地圖、官方旅遊局與水利署等引用
- 關於本站、照片授權、隱私權與 404 頁面
- PWA 支援：web manifest、Service Worker 離線快取、各尺寸圖示
- Cloudflare Workers / Wrangler 設定

## 技術版本

專案使用以下主要套件範圍：

- Astro 7
- Tailwind CSS 4
- TypeScript 7
- pnpm 11
- Wrangler 4

## 本機開發

```bash
corepack enable
pnpm install
pnpm dev
```

預設開發網址通常為 `http://localhost:4321`。

## 型別檢查與建置

```bash
pnpm check
pnpm build
```

建置成果會輸出至 `dist/`。

## Cloudflare Workers 本機預覽

```bash
pnpm cf:dev
```

此命令會先建置 Astro，再以 Wrangler 啟動 Workers 靜態資產服務。

## 部署

首次部署前先登入 Cloudflare：

```bash
pnpm wrangler login
```

部署：

```bash
pnpm deploy
```

Cloudflare 建議新專案使用 Workers。此專案是純靜態網站，因此不需要 Astro Cloudflare SSR adapter；Wrangler 會把 `dist/` 作為 Workers 靜態資產發布。

## 綁定 ShimenGreatLawn.com

1. 在 Cloudflare Dashboard 開啟 `Workers & Pages`。
2. 進入 `shimen-great-lawn` Worker。
3. 在 `Settings / Domains & Routes` 加入自訂網域：
   - `shimengreatlawn.com`
   - `www.shimengreatlawn.com`
4. 建議把 `www` 301 轉向裸網域。
5. 確認 SSL/TLS 使用 `Full (strict)`。

Astro canonical 網址已設定為：

```text
https://shimengreatlawn.com
```

## GA4

GA4 已在 `src/layouts/BaseLayout.astro` 中加入，ID 由 `src/data/site.ts` 管理：

```ts
gaId: 'G-HXM22WWPKP'
```

## 內容維護

主要內容：

```text
src/pages/index.astro
```

網站共用資料：

```text
src/data/site.ts
```

最後核對日期目前為 `2026-09-16`。更新交通、停車或花季資訊後，請同步修改：

- 首頁可見日期或文字
- `src/data/site.ts` 的 `updated` / `updatedText`
- `public/sitemap.xml` 的 `lastmod`
- 關於頁與隱私權頁日期

## PWA 與圖示

網站支援安裝為獨立 App，圖示由下列腳本從 `public/images/og-shimen-great-lawn.jpg` 產生：

```bash
pnpm pwa:icons
```

產出位於：

```text
public/icons/icon-192.png
public/icons/icon-512.png
public/icons/icon-512-maskable.png
public/icons/apple-touch-icon.png
```

Service Worker 位於 `public/sw.js`，對導覽請求採 network-first、靜態資產採 cache-first，並在 `BaseLayout.astro` 中註冊。

## 圖片

圖片位於：

```text
public/images/
```

來源與授權已整理在：

```text
src/pages/about.astro
```

使用的主要授權：

- 草坪、日式房屋：Foxy Who (^∀^)/，CC BY-SA 3.0
- 集福宮與榕樹：Outlookxp，CC BY-SA 4.0
- 挑擔古道：Foxy1219，CC BY-SA 3.0
- 流蘇花近照：Tanaka Juuyoh，CC BY 2.0

照片已裁切、縮放並轉為 WebP。若替換圖片，應確認授權允許網站使用，並同步更新授權頁。

## 網站外部連結策略

主要景點頁只保留 Google Maps 導航外連。資料來源與照片授權外連集中在 `/about`，避免正文出現大量跳轉。

## 專案結構

```text
.
├── public/
│   ├── images/
│   ├── _headers
│   ├── favicon.svg
│   ├── robots.txt
│   ├── sitemap.xml
│   └── site.webmanifest
├── src/
│   ├── components/
│   ├── data/
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── astro.config.ts
├── package.json
├── tsconfig.json
└── wrangler.jsonc
```

## 注意

本站不是景點或政府機關官方網站。對外發布時，不要在 Logo、標題或結構化資料加入「官方網站」字樣。
