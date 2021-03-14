const path = require('path')

module.exports = {
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    config.module.rules.map((rule) => {
      if (rule.oneOf) {
        rule.oneOf = rule.oneOf.slice().map((subRule) => {
          if (subRule.test instanceof RegExp && subRule.test.test('.scss')) {
            return {
              ...subRule,
              use: [
                ...subRule.use,
                {
                  loader: require.resolve('sass-resources-loader'),
                  options: {
                    resources: [path.resolve(__dirname, '../src/stories/**/*.scss')],
                  },
                },
              ],
            }
          }
          return subRule
        })
      }
      return rule
    })
    return config
  },
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/**/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    'storybook-addon-designs',
  ],
}
