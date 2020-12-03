export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fc90c0b74b6730b14d79859',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-fsegall-studio',
                  apiId: '58d9d47f-5f82-43c8-bf08-86ca17f967ce'
                },
                {
                  buildHookId: '5fc90c0bd9332400ec72431b',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-fsegall',
                  apiId: '39c6b231-9ae4-47db-9ebb-e8072384c38c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fsegall/sanity-gatsby-blog-fsegall',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-fsegall.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
