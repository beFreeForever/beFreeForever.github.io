import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../pages/Home.vue";
import PrimeGraph from "../pages/PrimeGraph.vue";
import Contacts from "../pages/Contacts.vue";
import Movie from "../pages/Movie.vue";
import PersonalAccount from "../pages/PersonalAccount.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/prime-graph",
    component: PrimeGraph
  },
  {
    path: "/contacts",
    component: Contacts
  },
  {
    path: "/movie",
    component: Movie
  },
  {
    path: "/account",
    component: PersonalAccount
  }
];

export default new VueRouter({
  mode: "history",
  routes
});
