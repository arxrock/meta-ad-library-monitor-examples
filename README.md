# Facebook & Instagram Ads Library Monitor: examples

[![Apify Store](https://img.shields.io/badge/Apify%20Store-arxrock%2Fmeta--ad--library--monitor-1a6cf5)](https://apify.com/arxrock/meta-ad-library-monitor)
[![MCP](https://img.shields.io/badge/MCP-ready-ff7a00)](examples/mcp/README.md)
[![License: MIT](https://img.shields.io/badge/license-MIT-lightgrey)](LICENSE)

Ready-to-run examples for **[Facebook & Instagram Ads Library Scraper & Monitor](https://apify.com/arxrock/meta-ad-library-monitor)**, an Apify Actor that scrapes every Facebook and Instagram ad from the public Meta Ad Library with full details, and flags what changed: competitor ads that were launched (`NEW`) or stopped (`ENDED`) since your last check.

- Watch competitor pages or keywords on Facebook, Instagram or both, on a schedule, without a Facebook login or a Meta developer account.
- Find **winning ads**: the ones a brand keeps paying for month after month (you choose the minimum days).
- Get the changes in **Slack**, Make, Zapier, n8n or any webhook.
- Use it from **AI agents** through MCP; agents can even pay per use on their own.

▶ **[Watch the demo (56 s)](media/demo.mp4)**

## Quick start (no code)

1. Open the [Actor page](https://apify.com/arxrock/meta-ad-library-monitor) and click **Try for free**.
2. Paste competitor pages (any Ad Library URL works) or keywords, pick a country and the platforms.
3. Set **Mode** to *Changes (NEW / ENDED)* and give the monitor a name, then add a weekly **Schedule**.

## Examples

| What | File |
|---|---|
| Weekly competitor check, NEW and ENDED ads (Node.js) | [examples/node/monitor-competitors.mjs](examples/node/monitor-competitors.mjs) |
| Winning ads running 60+ days (Python) | [examples/python/monitor_competitors.py](examples/python/monitor_competitors.py) |
| One-call JSON with cURL | [examples/curl/run.sh](examples/curl/run.sh) |
| Slack, Make, Zapier, n8n alerts and the webhook JSON format | [examples/webhooks/README.md](examples/webhooks/README.md) |
| Claude, Cursor, VS Code, Claude Code via MCP | [examples/mcp/README.md](examples/mcp/README.md) |
| Agent Skill for Claude and other agents | [skills/competitor-ads-monitor/SKILL.md](skills/competitor-ads-monitor/SKILL.md) |

Install the skill in agents that support [Agent Skills](https://agentskills.io):

```bash
npx skills add arxrock/meta-ad-library-monitor-examples --skill competitor-ads-monitor
```

## Main input fields

| Field | Example | Notes |
|---|---|---|
| `pages` | `["15087023444"]` or Ad Library URLs | Competitor pages to watch |
| `searchTerms` | `["protein powder"]` | Keywords |
| `country` | `"US"`, `"IT"`, `"ALL"` | Two-letter code |
| `mode` | `"changes"` or `"full"` | `full`: every ad each run. `changes`: NEW and ENDED ads after the first (baseline) run |
| `monitorName` | `"competitors-us"` | Each name keeps its own memory |
| `minDaysRunning` | `60` | Winning ads: minimum days running, any number |
| `platforms` | `["instagram"]` | `facebook`, `instagram`, `messenger`, `audience_network`, `threads`, `whatsapp`; empty = all |
| `mediaType` | `"video"` | `all`, `image`, `video`, `meme`, `none` |
| `maxAdsPerSearch` | `200` | Per keyword or page |
| `webhookUrl` | Slack or any HTTPS URL | Summary after each run |

Each result row has `status`, `pageName`, `bodyText`, `title`, `startDate`, `daysRunning`, `platforms`, `linkUrl`, `ctaText`, `imageUrls`, `videoUrls`, `variantsCount` and `adLibraryUrl`. Spend, impressions and reach are included when Meta publishes them (political/social-issue ads and some EU ads).

## Pricing

Pay per use, proxy and compute included: **$0.20 per 1,000 ads checked + $0.30 per 1,000 rows + $0.003 per keyword or page** (10% off on Apify Scale, 20% off on Business). A weekly check of 5 competitor pages is about $0.08. The free Apify plan gets a preview (2 keywords/pages, 30 ads each).

## Links

- Actor: https://apify.com/arxrock/meta-ad-library-monitor
- Tutorial: [How to track competitor ads on Facebook & Instagram automatically](https://dev.to/arxrock/how-to-monitor-your-competitors-facebook-ads-automatically-and-get-only-what-changed-p5c)
- Questions or bugs: open an issue here or on the Actor page.

*Facebook, Instagram and Meta are referenced only to describe the public data source. This project is independent and is not endorsed by, sponsored by or affiliated with Meta.*
