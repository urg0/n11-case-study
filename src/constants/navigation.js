export const DASHBOARD_NAVIGATION = [
  {
    title: "Startup",
    links: [
      {
        title: "Startuplar",
        /* icon: UserLine.src, */
        path: "/dashboard",
      },
      {
        title: "Yatırımcı Talepleri",
        /* icon: Smile.src, */
        path: "/dashboard-new/investments",
      },
      {
        title: "Başvurular",
        /* icon: ChatSmile.src, */
        path: "/dashboard/applications",
      },
      {
        title: "GSYF",
        /* icon: Leaf.src, */
        path: "/dashboard/gsyf",
      },
    ],
  },
  {
    title: "Venture Capital",
    links: [
      {
        title: "VC Group",
        /* icon: Group.src, */
        path: "/dashboard/vcGroups",
        superadmin: true,
      },
      {
        title: "Kapalı Gruplar",
        /* icon: Lock.src, */
        path: "/dashboard/vipgroups",
        superadmin: true,
      },
    ],
  },
  {
    title: "Üye İşlemleri",
    links: [
      {
        title: "Üyeler",
        /* icon: UserLine.src, */
        path: "/dashboard/users",
      },
    ],
  },
  {
    title: "Eğitim",
    links: [
      {
        title: "Akademi",
        /* icon: Flashlight.src, */
        path: "/dashboard/academy",
      },
    ],
  },
];
