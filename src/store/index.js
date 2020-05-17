import Vue from 'vue';
import Vuex from 'vuex';
import EventServer from '@/server/events';
import GroupServer from '@/server/groups';

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    events: [],
    currentEvent: {},
    currentGroup: {},
    groups: [],
  },
  getters: {
    getEvents: (state) => state.events || [],
    getCurrentEvent: (state) => state.currentEvent,
    getCurrentGroup: (state) => state.currentGroup,
    getGroups: (state) => state.groups || [],
  },
  mutations: {
    saveEvents(state, events = []) {
      state.events = [...events];
    },
    saveCurrentEvent(state, event = {}) {
      state.currentEvent = event;
    },
    saveCurrentGroup(state, group = {}) {
      state.currentGroup = group;
    },
    saveGroups(state, groups = []) {
      state.groups = [...groups];
    },
  },
  actions: {
    async fetchEvents({ commit }) {
      const response = await EventServer.getAllEvents();
      if (response.status === 200) {
        console.log(response);
        commit('saveEvents', response.data);
      } else {
        console.error(response.data);
      }
    },
    async fetchEvent({ commit }, eventSlug) {
      const response = await EventServer.getEvent(eventSlug);
      if (response.status === 200) {
        console.log(response);
        commit('saveCurrentEvent', response.data);
      } else {
        console.error(response.data);
      }
    },
    async fetchGroups({ commit }) {
      const response = await GroupServer.getAllGroups();
      if (response.status === 200) {
        console.log(response);
        commit('saveGroups', response.data);
      } else {
        console.error(response.data);
      }
    },
    async fetchGroup({ commit }, groupSlug) {
      const response = await GroupServer.getGroup(groupSlug);
      if (response.status === 200) {
        console.log(response);
        commit('saveCurrentGroup', response.data);
      } else {
        console.error(response.data);
      }
    },
  },
});
