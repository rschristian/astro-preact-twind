function getRenderer() {
  return {
    name: "@astrojs/preact-twind",
    clientEntrypoint: "@rschristian/astro-preact-twind/client.js",
    serverEntrypoint: "@rschristian/astro-preact-twind/server.js",
    jsxImportSource: "preact",
    jsxTransformOptions: () => {
      return {
        plugins: [
            'babel-plugin-tailwind-grouping',
            ['@babel/plugin-transform-react-jsx', {
                runtime: "automatic", importSource: "preact"
            }],
        ]
      };
    }
  };
}
function getViteConfiguration() {
  return {
    optimizeDeps: {
      include: ["@rschristian/astro-preact-twind/client.js", "preact", "preact/jsx-runtime", "preact-render-to-string"],
      exclude: ["@rschristian/astro-preact-twind/server.js"]
    },
    ssr: {
      external: ["preact-render-to-string"]
    }
  };
}

export default function preactTwind() {
  return {
    // Astro requires a flag to use third-party integrations...
    // or you could just fool their check by providing the wrong name
    name: "@astrojs/preact-twind",
    hooks: {
      "astro:config:setup": ({ addRenderer }) => {
        addRenderer(getRenderer());
        return {
          vite: getViteConfiguration()
        };
      }
    }
  };
}
