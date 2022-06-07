export default ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "b2f5363f7a14b58cf3f646aaf7450c39"),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT", "77b2c87dbab4e1697bec244226fbd1b3"),
  },
});
