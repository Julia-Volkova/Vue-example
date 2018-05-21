<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <br>
        <button @click="currentTemplate = 'app-blue'" class="btn btn-primary">Load Blue Template</button>
        <button @click="currentTemplate = 'app-green'" class="btn btn-success">Load Green Template</button>
        <button @click="currentTemplate = 'app-red'" class="btn btn-danger">Load Red Template</button>
        <hr>
        <keep-alive>
          <component :is="currentTemplate">
              <h2 slot="blue">Hello) I'm a text from blue template)</h2>

              <h2 slot="green">Hello) I'm a text from green template)</h2>

              <h2 slot="red">Hello) I'm a text from red template)</h2>
          </component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
  import Blue from './components/Blue.vue';
  import Green from './components/Green.vue';
  import Red from './components/Red.vue';

  export default {
    data: function () {
      return {
        currentTemplate: 'app-blue'
      }
    },
    components: {
      'app-blue': Blue,
      'app-green': Green,
      'app-red': Red
    }
  }
</script>

<style>
</style>
