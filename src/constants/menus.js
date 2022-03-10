const menus = [
  {
    id: '1',
    name: 'about',
    path: '/about',
    sub: [
      {
        id: '1',
        name: 'about',
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
        name: 'contact',
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
    name: 'grants',
    path: '/grants',
    sub: [],
  },

  {
    id: '4',
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

export default menus;
