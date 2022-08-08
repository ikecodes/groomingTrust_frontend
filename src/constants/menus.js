const menus = [
  {
    id: "1",
    name: "about",
    path: "/about",
    sub: [
      {
        id: "1",
        name: "about us",
        path: "/about",
      },
      {
        id: "2",
        name: "our team",
        path: "/our-team",
      },
      {
        id: "3",
        name: "FAQs",
        path: "/frequently-asked-questions",
      },
      {
        id: "4",
        name: "contact us",
        path: "/contact-us",
      },
    ],
  },
  {
    id: "2",
    name: "our portfolio",
    path: "/portfolio",
    sub: [],
  },
  {
    id: "3",
    name: "grants",
    path: "/grants",
    sub: [
      {
        id: "1",
        name: "apply for grants",
        path: "/grants",
      },
      {
        id: "2",
        name: "awardees",
        path: "/awardees",
      },
    ],
  },

  {
    id: "4",
    name: "media",
    path: "/blog",
    sub: [
      {
        id: "1",
        name: "blog",
        path: "/blog",
      },
      {
        id: "2",
        name: "press",
        path: "/press",
      },
      {
        id: "3",
        name: "gallery",
        path: "/gallery",
      },
    ],
  },
];

export const adminMenu = [
  {
    id: "1",
    name: "grants",
    path: "/admin-grants",
  },
  {
    id: "2",
    name: "portfolio",
    path: "/admin-portfolio",
  },
  {
    id: "3",
    name: "blog",
    path: "/admin-blog",
  },
  {
    id: "4",
    name: "press",
    path: "/admin-press",
  },
  {
    id: "5",
    name: "messages",
    path: "/admin-messages",
  },
  {
    id: "6",
    name: "applications",
    path: "/admin-applications",
  },
  {
    id: "7",
    name: "gallery",
    path: "/admin-gallery",
  },
  {
    id: "8",
    name: "staff/trustees",
    path: "/admin-staff-trustees",
  },
];

export default menus;
