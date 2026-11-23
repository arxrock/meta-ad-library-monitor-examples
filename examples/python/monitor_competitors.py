"""Find "winning" ads: ads a brand has kept paying for 60+ days.

Usage:
    pip install apify-client
    APIFY_TOKEN=... python monitor_competitors.py
"""
import os

from apify_client import ApifyClient

client = ApifyClient(os.environ["APIFY_TOKEN"])

run = client.actor("arxrock/meta-ad-library-monitor").call(
    run_input={
        "searchTerms": ["protein powder"],
        "country": "US",
        "mode": "full",
        "minDaysRunning": 60,  # only ads running for at least 60 days
        "maxAdsPerSearch": 200,
    }
)

for ad in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(f'{ad["daysRunning"]:>4} days | {ad["pageName"]} | {(ad.get("bodyText") or "")[:70]}')
    print(f'          {ad["adLibraryUrl"]}')
