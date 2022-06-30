import pluginPkg from "../../package.json";
import Wysiwyg from "./components/Wysiwyg";
import pluginId from "./pluginId";

const name = pluginPkg.strapi.name;

export default {
  register(app) {
    /*app.addMenuLink({
      to: `/plugins/${pluginId}`,
      icon: PluginIcon,
      intlLabel: {
        id: `${pluginId}.plugin.name`,
        defaultMessage: name,
      },
      Component: async () => {
        const component = await import("./pages/App");

        return component;
      },
      permissions: [
        // Uncomment to set the permissions of the plugin here
        // {
        //   action: '', // the action name should be plugin::plugin-name.actionType
        //   subject: null,
        // },
      ],
    });*/

    const pluginDescription =
      pluginPkg.strapi.description || pluginPkg.description;
    const plugin = {
      description: pluginDescription,
      id: pluginId,
      isReady: true,
      name,
      trads: {},
    };
    app.addFields({ type: "wysiwyg", Component: Wysiwyg });

    app.registerPlugin(plugin);
    console.log("Plugin registered");
  },

  bootstrap() {},
};
