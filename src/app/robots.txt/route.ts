export const dynamic = 'force-static';
export function GET() {
  const body = `User-agent: *\nAllow: /\nSitemap: https://commandrot.com/sitemap.xml\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain' } });
}
