import Vue from 'vue';
import VueMaterial from 'vue-material';
import App from './App.vue';
import router from './router';
import store from './store';
import 'vue-material/dist/vue-material.css';
import MaterialKit from './plugins/material-kit';


Vue.config.productionTip = false;
Vue.use(VueMaterial);
Vue.use(MaterialKit);

const NavbarStore = {
  showNavbar: false,
};

Vue.mixin({
  data() {
    return {
      NavbarStore,
    };
  },
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
