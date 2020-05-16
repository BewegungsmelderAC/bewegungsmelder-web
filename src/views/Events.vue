<template>
  <div class="events">
    <h1>Veranstaltungsübersicht</h1>
    <EventList></EventList>
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
