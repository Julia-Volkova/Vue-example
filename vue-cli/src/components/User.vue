<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>I'm an awesome User!</p>
    <button @click="changeName">Change my Name</button>
    <p style="margin-top: 10px;">Name is {{ name }}</p>
    <p style="margin-top: 10px;">Age is {{ age }}</p>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <app-user-detail :myName="name" @nameWasReset="name = $event" :resetFn="resetName" :userAge="age"></app-user-detail>
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit :myName="name" :userAge="age" @ageWasEdited="age = $event" :resetFn="resetName"></app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
  import UserDetail from './UserDetail.vue';
  import UserEdit from './UserEdit.vue';

  export default {
    data: function () {
      return {
        name: 'Julia',
        age: 27
      }
    },
    methods: {
      changeName() {
        this.name = 'Victor';
      },
      resetName() {
        this.name = 'Julia';
      }
    },
    components: {
      'app-user-detail': UserDetail,
      'app-user-edit': UserEdit
    }
  }
</script>

<style scoped>
  div {
    background-color: lightblue;
  }
</style>
