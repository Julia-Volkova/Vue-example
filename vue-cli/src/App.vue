<template>
  <div class="container">
    <div class="row">
      <header-server></header-server>
    </div>
    <hr>
    <div class="row">
      <list-info-servers></list-info-servers>
      <servers-details></servers-details>
    </div>
    <hr>
    <div class="row">
      <footer-server></footer-server>
    </div>
  </div>
</template>

<script>
  // Locally components, only for App.vue
  import HeaderServer from './Header.vue';
  import ListInfo from './ListInfo.vue';
  import ServersDetails from './ServersDetails.vue';
  import FooterServer from './Footer.vue';

  export default {
    components: {
      'header-server': HeaderServer,
      'list-info-servers': ListInfo,
      'servers-details': ServersDetails,
      'footer-server': FooterServer
    }
  }
</script>

<style>

</style>
