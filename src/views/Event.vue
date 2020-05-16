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
              Das sind die Veranstaltungsdetails.
            </h4>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section">
        <EventDetails></EventDetails>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import EventDetails from '../components/EventDetails.vue';

export default {
  name: 'Veranstaltungsdetails',
  components: {
    EventDetails,
  },
};
</script>
