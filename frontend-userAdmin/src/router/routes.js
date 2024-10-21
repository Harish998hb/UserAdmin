import Navbar from "layouts/top-navbar.vue";
import MainLayout from 'layouts/MainLayout.vue'

const routes = [
  {
    path: "/",
    component: {
      topNavBar:Navbar,
      layout:MainLayout,
    },
    children: [
      {
        path: "",
        component: { app_components: () => import("pages/IndexPage.vue") },
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
