export function GET(request: Request) {
  const url = new URL("/how-it-works", new URL(request.url).origin);
  return Response.redirect(url, 308);
}
export function HEAD(request: Request) {
  const url = new URL("/how-it-works", new URL(request.url).origin);
  return Response.redirect(url, 308);
}