import Vue from 'vue';
import Vuex from 'vuex';
import Server from '@/server/events';

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    events: [],
    currentEvent: {},
  },
  getters: {
    getEvents: (state) => state.events || [],
    getCurrentEvent: (state) => state.currentEvent,
  },
  mutations: {
    saveEvents(state, events = []) {
      state.events = [...events];
    },
    saveCurrentEvent(state, event = {}) {
      state.currentEvent = event;
    },
  },
  actions: {
    async fetchEvents({ commit }) {
      const response = await Server.getAllEvents();
      if (response.status === 200) {
        console.log(response);
        commit('saveEvents', response.data);
      } else {
        console.error(response.data);
      }
    },
    async fetchEvent({ commit }, eventSlug) {
      const response = await Server.getEvent(eventSlug);
      if (response.status === 200) {
        console.log(response);
        commit('saveCurrentEvent', response.data);
      } else {
        console.error(response.data);
      }
    },
  },
});
