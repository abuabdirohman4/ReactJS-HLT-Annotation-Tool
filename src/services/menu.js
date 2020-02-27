export default async function getMenuData() {
  return [
    {
      title: 'Projects',
      key: 'dashboards',
      icon: 'lnr lnr-pencil',
      children: [
        {
          title: 'Create New Projects',
          key: 'dashboardAnalytics',
          url: '/dashboard/analytics',
        },
        {
          title: 'Open Recent Projects',
          key: 'tablesAntd',
          url: '/tables/antd',
        },
        {
          title: 'Edit Projects',
          key: 'dashboardEcommerce',
          url: '/dashboard/antd',
        },
        {
          title: 'Wordpress Post',
          key: 'extraAppsWordpressPosts',
          url: '/extra-apps/wordpress-posts',
        },
        {
          title: 'Digitalocean Create',
          key: 'extraAppsDigitaloceanCreate',
          url: '/extra-apps/digitalocean-create',
        },
        {
          title: 'Digitalocean Droplets',
          key: 'extraAppsDigitaloceanDroplets',
          url: '/extra-apps/digitalocean-droplets',
        },
        {
          title: 'Wordpress Add',
          key: 'extraAppsWordpressAdd',
          url: '/extra-apps/wordpress-add',
        },
      ],
    },
  ]
}
