import { createRouter, createWebHistory } from "vue-router";
import WelcomeView from "../views/WelcomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "welcome",
      component: WelcomeView,
    },
    {
      path: "/home/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
      children: [
        // {
        //   path: "bike/:id",
        //   name: "bike",
        //   props: true,
        //   component: () => import("../views/BikeView.vue"),
        // },
      ],
    },
    {
      path: "/home/bike/:id",
      name: "bike",
      component: () => import("../views/BikeView.vue"),
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/BikeoView.vue"),
    },
    {
      path: "/auth/",
      name: "auth",
      component: () => import("../views/AuthView.vue"),
      children: [
        {
          path: "signin",
          name: "signin",
          component: () => import("../components/Auth/SignInComponent.vue"),
        },
        {
          path: "signup",
          name: "signup",
          component: () => import("../components/Auth/SignUpComponent.vue"),
        },
      ],
    },
  ],
});

export default router;
