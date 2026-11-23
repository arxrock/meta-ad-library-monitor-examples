#!/usr/bin/env bash
# Run the Actor synchronously and get the ads as JSON in one call.
# Usage: APIFY_TOKEN=... ./run.sh
set -euo pipefail

curl -s -X POST \
  "https://api.apify.com/v2/acts/arxrock~meta-ad-library-monitor/run-sync-get-dataset-items" \
  -H "Authorization: Bearer ${APIFY_TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{
        "searchTerms": ["nike"],
        "country": "US",
        "maxAdsPerSearch": 50
      }'
