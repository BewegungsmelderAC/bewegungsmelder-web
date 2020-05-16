<template>
  <div>
      <EventListEntry v-for="event in getEvents" :key="event.id"  :event='event'></EventListEntry>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import EventListEntry from './EventListEntry.vue';

export default {
  name: 'EventList',
  components: { EventListEntry },
  data() {
    return {
    };
  },
  methods: {
    refresh() {
      this.$store.dispatch('fetchEvents');
    },
    onEventTap() {
    },
  },
  created() {
    this.refresh();
  },
  computed: {
    ...mapGetters({
      getEvents: 'getEvents',
    }),
    eventCount() {
      return this.getEvents.length;
    },
    showList() {
      return (this.eventCount() !== 0);
    },
  },
};
</script>

<style lang="scss" scoped>
  .md-list {
    max-width: 100%;
    display: inline-block;
    vertical-align: top;
    border: 1px solid rgba(#000, .12);
  }
</style>
