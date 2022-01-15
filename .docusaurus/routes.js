
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/documentation/__docusaurus/debug',
    component: ComponentCreator('/documentation/__docusaurus/debug','9a6'),
    exact: true
  },
  {
    path: '/documentation/__docusaurus/debug/config',
    component: ComponentCreator('/documentation/__docusaurus/debug/config','9b2'),
    exact: true
  },
  {
    path: '/documentation/__docusaurus/debug/content',
    component: ComponentCreator('/documentation/__docusaurus/debug/content','9eb'),
    exact: true
  },
  {
    path: '/documentation/__docusaurus/debug/globalData',
    component: ComponentCreator('/documentation/__docusaurus/debug/globalData','4d6'),
    exact: true
  },
  {
    path: '/documentation/__docusaurus/debug/metadata',
    component: ComponentCreator('/documentation/__docusaurus/debug/metadata','c5d'),
    exact: true
  },
  {
    path: '/documentation/__docusaurus/debug/registry',
    component: ComponentCreator('/documentation/__docusaurus/debug/registry','32c'),
    exact: true
  },
  {
    path: '/documentation/__docusaurus/debug/routes',
    component: ComponentCreator('/documentation/__docusaurus/debug/routes','e38'),
    exact: true
  },
  {
    path: '/documentation/blog',
    component: ComponentCreator('/documentation/blog','bc2'),
    exact: true
  },
  {
    path: '/documentation/blog/archive',
    component: ComponentCreator('/documentation/blog/archive','4d8'),
    exact: true
  },
  {
    path: '/documentation/blog/first-blog-post',
    component: ComponentCreator('/documentation/blog/first-blog-post','55c'),
    exact: true
  },
  {
    path: '/documentation/blog/long-blog-post',
    component: ComponentCreator('/documentation/blog/long-blog-post','d20'),
    exact: true
  },
  {
    path: '/documentation/blog/mdx-blog-post',
    component: ComponentCreator('/documentation/blog/mdx-blog-post','ebc'),
    exact: true
  },
  {
    path: '/documentation/blog/tags',
    component: ComponentCreator('/documentation/blog/tags','cac'),
    exact: true
  },
  {
    path: '/documentation/blog/tags/docusaurus',
    component: ComponentCreator('/documentation/blog/tags/docusaurus','1ab'),
    exact: true
  },
  {
    path: '/documentation/blog/tags/facebook',
    component: ComponentCreator('/documentation/blog/tags/facebook','2b3'),
    exact: true
  },
  {
    path: '/documentation/blog/tags/hello',
    component: ComponentCreator('/documentation/blog/tags/hello','c43'),
    exact: true
  },
  {
    path: '/documentation/blog/tags/hola',
    component: ComponentCreator('/documentation/blog/tags/hola','37f'),
    exact: true
  },
  {
    path: '/documentation/blog/welcome',
    component: ComponentCreator('/documentation/blog/welcome','22b'),
    exact: true
  },
  {
    path: '/documentation/markdown-page',
    component: ComponentCreator('/documentation/markdown-page','d54'),
    exact: true
  },
  {
    path: '/documentation/docs',
    component: ComponentCreator('/documentation/docs','98b'),
    routes: [
      {
        path: '/documentation/docs/dev/backend/start',
        component: ComponentCreator('/documentation/docs/dev/backend/start','562'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/documentation/docs/dev/frontend/start',
        component: ComponentCreator('/documentation/docs/dev/frontend/start','feb'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/documentation/docs/dev/google-cloud/start',
        component: ComponentCreator('/documentation/docs/dev/google-cloud/start','667'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/documentation/docs/dev/keycloak/start',
        component: ComponentCreator('/documentation/docs/dev/keycloak/start','94a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/documentation/docs/dev/serverless/attendances',
        component: ComponentCreator('/documentation/docs/dev/serverless/attendances','310'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/documentation/docs/dev/serverless/hybrid',
        component: ComponentCreator('/documentation/docs/dev/serverless/hybrid','22d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/documentation/docs/dev/serverless/start',
        component: ComponentCreator('/documentation/docs/dev/serverless/start','602'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/documentation/docs/dev/serverless/utilities',
        component: ComponentCreator('/documentation/docs/dev/serverless/utilities','4e1'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/documentation/docs/dev/start',
        component: ComponentCreator('/documentation/docs/dev/start','66b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/documentation/docs/intro',
        component: ComponentCreator('/documentation/docs/intro','9e8'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/documentation/docs/users/start',
        component: ComponentCreator('/documentation/docs/users/start','975'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/documentation/',
    component: ComponentCreator('/documentation/','d97'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
