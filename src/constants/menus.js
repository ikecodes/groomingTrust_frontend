const menus = [
  {
    id: '1',
    name: 'about',
    path: '/about',
    sub: [
      {
        id: '1',
        name: 'about us',
        path: '/about',
      },
      {
        id: '2',
        name: 'staffs & trustees',
        path: '/staffs-and-trustees',
      },
      {
        id: '3',
        name: 'gallery',
        path: '/gallery',
      },
      {
        id: '4',
        name: 'FAQs',
        path: '/frequently-asked-questions',
      },
      {
        id: '5',
        name: 'contact us',
        path: '/contact-us',
      },
    ],
  },
  {
    id: '2',
    name: 'our portfolio',
    path: '/portfolio',
    sub: [],
  },
  {
    id: '3',
    name: 'program areas',
    path: '/program-areas',
    sub: [],
  },
  {
    id: '4',
    name: 'grants',
    path: '/grants',
    sub: [],
  },

  {
    id: '5',
    name: 'news',
    path: '/blog',
    sub: [
      {
        id: '1',
        name: 'blog',
        path: '/blog',
      },
      {
        id: '2',
        name: 'press',
        path: '/press',
      },
    ],
  },
];

export const adminMenu = [
  {
    id: '1',
    name: 'grants',
    path: '/admin-grants',
  },
  {
    id: '2',
    name: 'portfolio',
    path: '/admin-portfolio',
  },
  {
    id: '3',
    name: 'blog',
    path: '/admin-blog',
  },
  {
    id: '4',
    name: 'press',
    path: '/admin-press',
  },
  {
    id: '5',
    name: 'messages',
    path: '/admin-messages',
  },
  {
    id: '6',
    name: 'applications',
    path: '/admin-applications',
  },
];

export default menus;
