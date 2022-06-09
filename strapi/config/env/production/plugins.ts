module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "strapi-provider-upload-ts-minio",
      providerOptions: {
        accessKey: env("MINIO_ACCESS_KEY"),
        secretKey: env("MINIO_SECRET_KEY"),
        bucket: env("MINIO_BUCKET", "strapi-city-gallery"),
        endPoint: env("MINIO_ENDPOINT", "localhost"),
        port: parseInt(env("MINIO_PORT", 9000), 10) || 9000,
        useSSL: env("MINIO_USE_SSL", false),
        folder: "upload",
        isDocker: true,
        host: env("MINIO_HOST", "localhost:9000"),
      },
    },
  },
});
