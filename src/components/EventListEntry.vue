<template>
    <md-card md-with-hover>
      <div  @click="redirectToDetails">
        <md-card-header>
          <div class="md-title">
            <md-avatar>
              <img :src="event.thumbnail" :alt="event.name">
            </md-avatar>
            {{ event.name }}
          </div>
        </md-card-header>
        <md-card-content>
          {{ event.start }} von {{ event.group.name }}
        </md-card-content>
        </div>
    </md-card>
</template>

<script>

export default {
  name: 'EventListEntry',
  props: {
    event: {
      type: Object,
      required: true,
    },
  },
  methods: {
    redirectToDetails() {
      this.$router.push({ name: 'event_details', params: { event_slug: this.event.slug } });
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
