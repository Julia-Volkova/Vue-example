<template>
    <div class="">
        <h3>Some User Details</h3>
        <p>User loaded has ID: {{ $route.params.id }}</p>
        <router-link tag="button" class="btn btn-success" :to="link">Edit user</router-link>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        link: {
          name: 'userEdit',
          params: this.$route.params.id,
          query: {
            locale: 'en',
            q: 100
          },
          hash: '#data',
        }
      }
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        vm.link;
      });
    },
  }
</script>