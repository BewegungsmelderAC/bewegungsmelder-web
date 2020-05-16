import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Event from '../views/Event.vue';
import Events from '../views/Events.vue';
import MainNavbar from "../layout/MainNavbar";
import MainFooter from "../layout/MainFooter";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    components: { default: Home, header: MainNavbar, footer: MainFooter },
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    components: { default: About, header: MainNavbar, footer: MainFooter },
  },
  {
    path: '/events',
    name: 'events',
    components: { default: Events, header: MainNavbar, footer: MainFooter },
  },
  {
    path: '/event/:event_slug',
    name: 'details',
    components: { default: Event, header: MainNavbar, footer: MainFooter },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
