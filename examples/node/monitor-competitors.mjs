// Weekly competitor check: returns only the ads that were launched or stopped
// since the previous run of the same monitor.
// Usage: APIFY_TOKEN=... node monitor-competitors.mjs
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: process.env.APIFY_TOKEN });

const run = await client.actor('arxrock/meta-ad-library-monitor').call({
  // Page IDs or any URL copied from the Meta Ad Library
  pages: [
    'https://www.facebook.com/ads/library/?view_all_page_id=15087023444',
  ],
  country: 'US',
  mode: 'changes',              // first run = baseline, next runs = only NEW / ENDED
  monitorName: 'competitors-us', // each monitor name keeps its own memory
  maxAdsPerSearch: 500,
});

const { items } = await client.dataset(run.defaultDatasetId).listItems();
const fresh = items.filter((ad) => ad.status === 'NEW');
const stopped = items.filter((ad) => ad.status === 'ENDED');

console.log(`NEW: ${fresh.length} | ENDED: ${stopped.length}`);
for (const ad of fresh) {
  console.log(`NEW   ${ad.pageName}: ${(ad.bodyText || '').slice(0, 80)} -> ${ad.adLibraryUrl}`);
}
for (const ad of stopped) {
  console.log(`ENDED ${ad.pageName}: ${(ad.bodyText || '').slice(0, 80)}`);
}
