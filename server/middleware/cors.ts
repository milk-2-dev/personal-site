export default defineEventHandler((event) => {
  const origin = getHeader(event, "origin");
  
  if (origin === "https://klimov-static.onrender.com") {
    setHeader(event, "Access-Control-Allow-Origin", origin);
    setHeader(event, "Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    setHeader(event, "Access-Control-Allow-Headers", "Content-Type, Authorization");
  }

  if (event.node.req.method === "OPTIONS") {
    event.node.res.statusCode = 204;
    event.node.res.end();
    return;
  }
});
