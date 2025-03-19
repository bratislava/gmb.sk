export default ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  url: env("PUBLIC_URL", ""),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
