<template>
  <div class="events">
    <h1>Veranstaltungsdetails</h1>
    <EventDetails></EventDetails>
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
