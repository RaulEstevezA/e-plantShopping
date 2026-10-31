import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const cloudflareBeacon = `<!-- Cloudflare Web Analytics -->
<script
  type="module"
  src="https://static.cloudflareinsights.com/beacon.min.js"
  data-cf-beacon='{"token":"e39c213b71d04ecea667fe1a7c72f355"}'>
</script>
<!-- End Cloudflare Web Analytics -->
`

// Vite drops external module scripts from index.html, so the beacon is added after it processes the page.
const cloudflareWebAnalytics = () => ({
  name: 'cloudflare-web-analytics',
  apply: 'build',
  transformIndexHtml: {
    order: 'post',
    handler: (html) => {
      const end = html.lastIndexOf('</body>')
      return `${html.slice(0, end)}${cloudflareBeacon}${html.slice(end)}`
    },
  },
})

// https://vitejs.dev/config/
export default defineConfig({
  base: "/demos/e-plantShopping/",
  plugins: [react(), cloudflareWebAnalytics()],
})
