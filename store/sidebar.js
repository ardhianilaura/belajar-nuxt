export const state = () => ({
  items: [
    { title: 'Home', to: '/auth/home', icon: 'mdi-home' },
    { title: 'Ghibli List', to: '/auth/component', icon: 'mdi-format-list-bulleted' },
    { title: 'Fetch', to: '/auth/fetch', icon: 'mdi-restart' },
    { title: 'Table', to: '/auth/table', icon: 'mdi-table' },
    {
      title: 'Genres',
      to: '/auth/about',
      icon: 'mdi-book-multiple',
      children: [
        {
          title: 'Action',
          to: '/auth/dropdown/1',
        },
        {
          title: 'Adventure',
          to: '/auth/dropdown/2',
        },
        {
          title: 'Fantasy',
          to: '/auth/dropdown/3',
        },
        {
          title: 'Thriller',
          to: '/auth/dropdown/4',
        },
        {
          title: 'Comedy',
          to: '/auth/dropdown/5',
        }
      ],
    },
  ],
})
