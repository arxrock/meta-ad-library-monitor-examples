---
name: competitor-ads-monitor
description: Track competitors' Facebook and Instagram ads from the Meta Ad Library. Use when the user asks what ads a brand is running, which new ads competitors launched or stopped, or which long-running ("winning") ads exist for a product or keyword.
---

# Competitor ads monitor (Meta Ad Library)

Use the Apify Actor `arxrock/meta-ad-library-monitor`. It reads the public Meta Ad Library (Facebook, Instagram, Messenger, Audience Network). No Facebook login is needed.

## How to call it

- **MCP**: connect to `https://mcp.apify.com?tools=arxrock/meta-ad-library-monitor` and call the tool `arxrock--meta-ad-library-monitor`.
- **API**: `POST https://api.apify.com/v2/acts/arxrock~meta-ad-library-monitor/run-sync-get-dataset-items` with an Apify token (`Authorization: Bearer ...`) or an agentic-payment prepaid token.

## Choose the input

| User wants | Input |
|---|---|
| Ads of specific brands | `pages`: page IDs or Ad Library URLs (`...view_all_page_id=123`) |
| Ads about a topic | `searchTerms`: keywords |
| Only what changed since last time | `mode: "changes"` and the SAME `monitorName` every time |
| Proven, long-running ads | `mode: "full"`, `minDaysRunning: 30` (or 60, 90) |
| A market | `country`: two-letter code (`US`, `IT`, `DE`) or `ALL` |
| Videos only | `mediaType: "video"` |

Keep `maxAdsPerSearch` small (50–200) for quick answers. To detect ENDED ads reliably, monitor pages and set `maxAdsPerSearch` above the page's total number of ads.

The first run of a monitor in `changes` mode returns every ad as `ACTIVE` (baseline). Later runs return only `NEW` and `ENDED` rows.

## Read the output

Each row has `status`, `pageName`, `bodyText`, `title`, `startDate`, `daysRunning`, `platforms`, `linkUrl`, `ctaText`, `imageUrls`, `videoUrls`, `variantsCount` and `adLibraryUrl`. `spend`, `impressions`, `reachEstimate` and `currency` are filled only when Meta publishes them (political/social-issue ads and some EU ads).

When you answer the user:
- group by brand, then NEW vs ENDED;
- quote the hook (first line of `bodyText`) and the offer;
- always include `adLibraryUrl` so the user can see the creative;
- say how many ads were checked, and that data comes from the public Meta Ad Library.

## Cost

$0.20 per 1,000 ads checked + $0.30 per 1,000 rows returned + $0.003 per keyword or page (lower on Apify Scale and Business plans). A weekly check of 5 competitor pages usually costs under $0.10.
