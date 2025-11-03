export default defineEventHandler((event) => {
  const allowedOrigins = [
    "https://klimov-static.onrender.com",
    "http://localhost:3000",
  ];

  const origin = getHeader(event, "origin");

  if (allowedOrigins.includes(origin)) {
    setHeader(event, "Access-Control-Allow-Origin", origin);
  }

  setHeader(
    event,
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  setHeader(
    event,
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );
  setHeader(event, "Access-Control-Allow-Credentials", "true");

  // Обробка preflight (OPTIONS)
  if (event.node.req.method === "OPTIONS") {
    event.node.res.statusCode = 204;
    event.node.res.end();
    return;
  }
});
