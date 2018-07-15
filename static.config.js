import axios from 'axios'



export default {
  getSiteData: async () => {
    const baseURL = 'http://www.lawyermarketingusa.io.php72-38.lan3-1.websitetestlink.com/'
    const { data: menus } = await axios.get(baseURL + '/index.php/wp-json/wp-api-menus/v2/menus/2')
    const { data: options } = await axios.get(baseURL + '/index.php/wp-json/wp/v2/options/')


    return {
      title: 'Lawyer Marketing Services',
      siteRoot: 'https://lawyermarketingusa.com/',
      siteCreator: 'Lawyer Marketing Services',
      siteCreatorURL: 'https://lawyermarketingusa.com/',
      menus,
      options
    }
  },
  getRoutes: async () => {
    const baseURL = 'http://www.lawyermarketingusa.io.php72-38.lan3-1.websitetestlink.com/'
    const { data: pages } = await axios.get(baseURL + '/index.php/wp-json/wp/v2/pages?per_page=99')
    const { data: posts } = await axios.get(baseURL + '/index.php/wp-json/wp/v2/posts?per_page=6')

    return [
      {
        path: '/blogs',
        component: 'src/pages/Blog',
        getData: () => ({
          posts,
        }),
        children: posts.map(post => ({
          path: `/${post.slug}`,
          component: 'src/singles/Post',
          getData: () => ({
            post,
          }),
        })),
      },
      {
        path: '/contact',
        component: 'src/pages/Contact',
      },
      {
        path: '/',
        component: 'src/pages/Home',
        getData: () => ({
          pages,
        }),
        children: pages.map(page => ({
        path: `/${page.slug}`,
        component: 'src/pages/Page',
          getData: () => ({
            page,
          }),
        })),
      },
      {
        is404: true,
        component: 'src/pages/404',
      },
    ]
  }
}