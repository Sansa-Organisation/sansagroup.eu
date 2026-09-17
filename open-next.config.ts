import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig({
  // Enables R2 / D1 / KV bindings passthrough if added later in wrangler.toml
});
