<template>
  <div>
    <h2>{{ group.name }}</h2>
    <div v-html="group.description"></div>
    <h3>Treffen</h3>
    <div>{{ group.meetup_description }}</div>
    <img :src="group.avatar" alt="Cover Image">
  </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
  name: 'GroupDetails',
  data() {
    return {
      group_slug: this.$route.params.group_slug || '',
    };
  },
  created() {
    this.loadGroup();
  },
  methods: {
    async loadGroup() {
      try {
        await this.$store.dispatch('fetchGroup', this.group_slug);
      } catch (error) {
        console.error(error); // eslint-disable-line
      }
    },
  },
  computed: {
    ...mapGetters({
      group: 'getCurrentGroup',
    }),
  },
};
</script>

<style scoped>

</style>
