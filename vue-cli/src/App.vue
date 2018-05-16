<template>
  <div class="container">
    <div class="row">
      <header-server></header-server>
    </div>
    <hr>
    <div class="row">
      <servers></servers>
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
  import HeaderServer from './components/Shared/Header.vue';
  import Servers from './components/Server/Servers.vue';
  import ServersDetails from './components/Server/ServersDetails.vue';
  import FooterServer from './components/Shared/Footer.vue';

  export default {
    components: {
      'header-server': HeaderServer,
      'servers': Servers,
      'servers-details': ServersDetails,
      'footer-server': FooterServer
    }
  }
</script>

<style>

</style>
