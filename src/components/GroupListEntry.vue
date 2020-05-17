<template>
  <md-card md-with-hover>
    <div  @click="redirectToDetails">
      <md-card-header>
        <div class="md-title">

          {{ group.name }}
        </div>
      </md-card-header>
      <md-card-content>
        Hier könnte noch was stehen
      </md-card-content>
    </div>
  </md-card>
</template>

<script>

export default {
  name: 'GroupListEntry',
  props: {
    group: {
      type: Object,
      required: true,
    },
  },
  methods: {
    redirectToDetails() {
      this.$router.push({ name: 'group_details', params: { group_slug: this.group.slug } });
    },
  },
};
</script>

<style lang="scss" scoped>
  .md-card {
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
</style>
