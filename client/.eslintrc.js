module.exports = {
    extends: ["airbnb-typescript", "next", "prettier"],
    env: { es6: true, browser: true, node: true },
    parser: "@typescript-eslint/parser",
    parserOptions: {
      project: "tsconfig.json",
      tsconfigRootDir: __dirname,
    },
    rules: {
      "import/no-extraneous-dependencies": [
        "error",
        {
          devDependencies: [
            "test.{ts,tsx,js,jsx}",
            "test-*.{ts,tsx,js,jsx}",
            "**/*{.,_}{test,spec}.{ts,tsx,js,jsx}",
            "**/jest.config.{ts,js}",
            "**/playwright.config.{ts,js}",
          ],
        },
      ],
      "import/extensions": [
        "error",
        "never",
        {
          json: "always",
        },
      ],
      "no-console": 1,
      "no-var": 2,
    },
  };
  