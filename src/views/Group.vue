<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100"
          >
            <h1 class="title">Wer ist denn das?</h1>
            <h4>
              Hier gibt's die Gruppeninfos.
            </h4>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section">
        <GroupDetails></GroupDetails>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import GroupDetails from '../components/GroupDetails.vue';

export default {
  name: 'Gruppendetails',
  components: {
    GroupDetails,
  },
};
</script>
