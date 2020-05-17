<template>
  <div>
    <GroupListEntry v-for="group in groups" :key="group.id"  :group='group'></GroupListEntry>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import GroupListEntry from './GroupListEntry.vue';

export default {
  name: 'EventList',
  components: { GroupListEntry },
  data() {
    return {
    };
  },
  methods: {
    refresh() {
      this.$store.dispatch('fetchGroups');
    },
    onEventTap() {
    },
  },
  created() {
    this.refresh();
  },
  computed: {
    ...mapGetters({
      groups: 'getGroups',
    }),
    groupCount() {
      return this.groups.length;
    },
    showList() {
      return (this.groupCount() !== 0);
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
