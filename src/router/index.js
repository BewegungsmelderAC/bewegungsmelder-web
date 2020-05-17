import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Event from '../views/Event.vue';
import Events from '../views/Events.vue';
import MainNavbar from '../layout/MainNavbar.vue';
import MainFooter from '../layout/MainFooter.vue';
import Groups from '../views/Groups.vue';
import Group from "../views/Group";

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
    name: 'event_details',
    components: { default: Event, header: MainNavbar, footer: MainFooter },
  },
  {
    path: '/groups',
    name: 'groups',
    components: { default: Groups, header: MainNavbar, footer: MainFooter },
  },
  {
    path: '/group/:group_slug',
    name: 'group_details',
    components: { default: Group, header: MainNavbar, footer: MainFooter },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
