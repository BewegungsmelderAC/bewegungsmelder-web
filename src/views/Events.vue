<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100"
          >
            <h1 class="title">Was ist heute so los?</h1>
            <h4>
              Das ist die Veranstaltungsübersicht.
            </h4>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section">
        <EventList></EventList>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import EventList from '@/components/EventList.vue';

export default {
  name: 'Veranstaltungen',
  components: {
    EventList,
  },
};
</script>

<style lang="scss" scoped>
  .md-card-actions.text-center {
    display: flex;
    justify-content: center !important;
  }
  .contact-form {
    margin-top: 30px;
  }

  .md-has-textarea + .md-layout {
    margin-top: 15px;
  }
</style>
