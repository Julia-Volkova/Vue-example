<template>
  <div>
    <div
      id="on"
      @click="value = true"
      :class="{active: value}">On</div>
    <div
      id="off"
      @click="value = false"
      :class="{active: !value}">Off</div>
  </div>
</template>

<script>
  export default {
//    data() {
//      return {
//        isOn: true
//      };
//    },
    props: ['value']
  }
</script>

<style scoped>
  #on, #off {
    width: 40px;
    height: 20px;
    background-color: lightgray;
    padding: 2px;
    display: inline-block;
    margin: 10px -2px;
    box-sizing: content-box;
    cursor: pointer;
    text-align: center;
  }

  #on:hover, #on.active {
    background-color: lightgreen;
  }

  #off:hover, #off.active {
    background-color: lightcoral;
  }
</style>
