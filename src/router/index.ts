import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import EditTable from "../views/edit-table.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "edit-table",
    component: EditTable
  },
  {
    path: "/edit-form",
    name: "edit-form",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/edit-form.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
