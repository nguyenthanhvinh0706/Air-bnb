import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Blog from "../views/Blog.vue";
import Rooms from "../views/Rooms.vue";
import RoomDetail from "../views/RoomDetail";
import Contact from "../views/Contact";
import SignIn from "../views/SignIn"
import SignUp from "../views/SignUp"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },

  {
    path: "/rooms",
    name: "Rooms",
    component: Rooms,
  },

  {
    path: "/roomdetail",
    name: "RoomDetail",
    component: RoomDetail,
  },

  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },

  {
    path: "/sign-in",
    name: "SignIn",
    component: SignIn,
  },

  {
    path: "/sign-up",
    name: "SignUp",
    component: SignUp,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "current",
});

export default router;
