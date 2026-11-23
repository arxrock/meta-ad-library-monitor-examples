# Alerts: Slack, Make, Zapier, n8n or your own endpoint

Set `webhookUrl` in the input. After each run the Actor sends one POST request.

## Slack

Create an [incoming webhook](https://api.slack.com/messaging/webhooks) and paste its `https://hooks.slack.com/...` URL. The channel gets a short message with the totals and up to 10 NEW and 10 ENDED ads, each with a link to the Ad Library.

```
Meta Ad Library Monitor - competitors-us (changes)
Ads checked: 312 | NEW: 7 | ENDED: 4 | rows: 11
NEW • BrandX: Black Friday: 40% off all stacks... view
ENDED • BrandY: Free shaker with your first order view
Open run
```

## Make, Zapier, n8n and custom endpoints

Use the "Custom webhook" / "Catch hook" / "Webhook" trigger URL of your tool. Any URL that is not Slack receives JSON:

```json
{
  "monitorName": "competitors-us",
  "mode": "changes",
  "runUrl": "https://console.apify.com/view/runs/RUN_ID",
  "summary": { "adsChecked": 312, "rows": 11, "new": 7, "ended": 4 },
  "itemsTruncated": false,
  "items": [
    {
      "status": "NEW",
      "pageName": "BrandX",
      "bodyText": "Black Friday: 40% off all stacks...",
      "startDate": "2026-11-20T00:00:00.000Z",
      "daysRunning": 2,
      "platforms": ["FACEBOOK", "INSTAGRAM"],
      "linkUrl": "https://brandx.example/black-friday",
      "adLibraryUrl": "https://www.facebook.com/ads/library/?id=..."
    }
  ]
}
```

`summary` always has the exact totals. `items` holds up to 500 rows, NEW and ENDED first; the complete data is always in the run's dataset.

Typical flows:
- **Google Sheets**: append one row per item (page, status, text, start date, Ad Library link).
- **Email digest**: send yourself `summary` plus the NEW ads every Monday.
- **CRM / agency reporting**: create a task when a client's competitor launches more than N new ads.

## Schedule it

In Apify Console open **Schedules**, pick the Actor (or one of its saved tasks) and run it daily or weekly. Keep the same `monitorName` so each run compares with the previous one.
