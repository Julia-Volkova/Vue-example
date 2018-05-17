<template>
  <div class="component">
    <h3>You may edit the User here</h3>
    <p>Edit me!</p>
    <p>User age: {{ userAge }}</p>
    <p>User name: {{ myName }}</p>
    <button @click="resetFn()">Reset name</button>
    <button @click="editAge">Edit age</button>
  </div>
</template>

<script>
  import { eventBus } from '../main';

  export default {
    props: {
      userAge: Number,
      myName: String,
      resetFn: Function
    },
    methods: {
      editAge() {
        this.userAge = 30;
//        this.$emit('ageWasEdited', this.userAge);
//        eventBus.$emit('ageWasEdited', this.userAge);
        eventBus.changeAge(this.userAge);
      }
    }
  }
</script>

<style scoped>
  div {
    background-color: lightgreen;
  }
</style>
