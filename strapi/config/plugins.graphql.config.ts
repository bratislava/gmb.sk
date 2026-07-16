const graphqlConfig = {
  defaultLimit: 100,
  generateArtifacts: true,
  artifacts: {
    // When changing schema path, also change watchIgnoreFiles in strapi/config/admin.js
    schema: true,
  },
  v4CompatibilityMode: true,
}

export default graphqlConfig
