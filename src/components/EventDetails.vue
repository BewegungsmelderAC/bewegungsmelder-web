<template>
  <div>
    <h2>{{ getEvent.name }}</h2>
    <h4>Von {{ getEvent.start }} bis {{ getEvent.end }}</h4>
    von <router-link :to="'/group/' + getEvent.group.slug ">{{ getEvent.group.name }}</router-link>
    <div v-html="getEvent.content"></div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
  name: 'EventDetails',
  data() {
    return {
      event_slug: this.$route.params.event_slug || '',
    };
  },
  created() {
    this.loadEvent();
  },
  methods: {
    async loadEvent() {
      try {
        await this.$store.dispatch('fetchEvent', this.event_slug);
      } catch (error) {
        console.error(error); // eslint-disable-line
      }
    },
  },
  computed: {
    ...mapGetters({
      getEvent: 'getCurrentEvent',
    }),
  },
};
</script>

<style scoped>

</style>
