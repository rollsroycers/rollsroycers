import { defineCloudflareConfig } from "@opennextjs/cloudflare";
// @ts-expect-error - resolved by OpenNext bundler, not Next.js TS
import staticAssetsCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

export default defineCloudflareConfig({
  incrementalCache: () => staticAssetsCache,
});
