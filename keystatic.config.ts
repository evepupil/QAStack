import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    tools: collection({
      label: 'Tools',
      slugField: 'title',
      path: 'content/tools/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        logo: fields.image({
          label: 'Logo',
          directory: 'public/images/tools',
          publicPath: '/images/tools/',
        }),
        description: fields.text({
          label: 'Short Description',
          multiline: true,
        }),
        affiliateLink: fields.url({
          label: 'Affiliate Link',
        }),
        pricing: fields.select({
          label: 'Pricing',
          options: [
            { label: 'Free', value: 'free' },
            { label: 'Paid', value: 'paid' },
            { label: 'Freemium', value: 'freemium' },
          ],
          defaultValue: 'free',
        }),
        tags: fields.multiselect({
          label: 'Tags',
          options: [
            { label: 'Automation', value: 'automation' },
            { label: 'API Testing', value: 'api-testing' },
            { label: 'UI Testing', value: 'ui-testing' },
            { label: 'Performance', value: 'performance' },
            { label: 'Security', value: 'security' },
            { label: 'Mobile', value: 'mobile' },
            { label: 'Load Testing', value: 'load-testing' },
            { label: 'Unit Testing', value: 'unit-testing' },
            { label: 'Integration Testing', value: 'integration-testing' },
            { label: 'E2E Testing', value: 'e2e-testing' },
          ],
        }),
        content: fields.mdx({
          label: 'Content',
          options: {
            image: {
              directory: 'public/images/content',
              publicPath: '/images/content/',
            },
          },
        }),
      },
    }),
    categories: collection({
      label: 'Categories',
      slugField: 'name',
      path: 'content/categories/*',
      schema: {
        name: fields.slug({ name: { label: 'Name' } }),
        description: fields.text({
          label: 'Description',
          multiline: true,
        }),
      },
    }),
  },
});
