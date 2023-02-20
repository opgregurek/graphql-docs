import path from 'path';

export default {
  introspection: {
    type: 'sdl',
    paths: ['./schema.graphqls'],
  },
  website: {
    template: 'carbon-multi-page',
    staticAssets: path.join(__dirname, 'assets'),
    siteRoot: '/opgregurek/graphql-docs',
    options: {
      appTitle: 'Medium Article',
      queryGenerationFactories: {
        'DeserializableBoolean': 'true',
	'DeserializableInt': '0',
	'DateOnly': '2000-01-31',
	'DeserializableFloat': '0.0',
	'DeserializableDateTime': '2023-01-01T00:00:00+00:00'
      },
      appLogo: 'https://seeklogo.com/images/P/Pokemon-logo-497D61B223-seeklogo.com.png',
      pages: [{
        title: 'Medium Article',
        content: `
# Medium Article
Congratulations! You've successfully completed the Magidoc tutorial.
## Where to go next?
- Star the project on [GitHub](https://github.com/magidoc-org/magidoc) 
- Read the [documentation](https://magidoc.js.org/introduction/welcome)
`
      }],
    },
  },
}
