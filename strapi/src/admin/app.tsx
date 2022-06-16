import favicon from "./extensions/favicon.ico";
import AuthLogo from "./extensions/gmb-logo-header.png";
import MenuLogo from "./extensions/logo-admin.png";

export default {
  config: {
    // Replace the Strapi logo in auth (login) views
    auth: {
      logo: AuthLogo,
    },

    // Replace the favicon
    head: {
      favicon: favicon,
    },

    // Replace the Strapi logo in the main navigation
    menu: {
      logo: MenuLogo,
    },

    // Add a new locale, other than 'en'
    locales: ["sk"],

    // Disable video tutorials
    tutorials: false,

    // Disable notifications about new Strapi releases
    notifications: {
      release: false,
    },
  },
  bootstrap() {},
};
