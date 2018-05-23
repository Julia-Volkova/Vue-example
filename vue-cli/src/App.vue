<template>
  <div class="container">
    <form v-if="!isDisplayed">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <!-- Exercise 1 -->
          <!-- Create a Signup Form where you retrieve the following Information -->
          <!-- Full Name (First Name + Last Name) -->
          <!-- Mail -->
          <!-- Password -->
          <!-- Store Data? Yes/No -->

          <!-- Exercise 3 -->
          <!-- Edit the Example from above and create a custom "Full Name" Control -->
          <!-- which still holds the First Name and Last Name Input Field -->

          <app-full-name v-model="fullName"></app-full-name>

          <div class="col-lg-12" style="margin-bottom: 15px;">
            <input type="text" placeholder="Mail" v-model.lazy="mail">
          </div>

          <div class="col-lg-12" style="margin-bottom: 15px;">
            <input type="password" placeholder="Password" v-model="password">
          </div>

          <span style="margin-bottom: 15px; display: block;">Store Data?</span>
          <label for="">
            <input value="yes" type="radio" v-model="radio"> Yes
          </label>

          <label for="">
            <input value="no" type="radio" v-model="radio"> No
          </label>

          <!-- Exercise 2 -->
          <!-- Only display the Form if it has NOT been submitted -->
          <!-- Display the Data Summary ONCE the Form HAS been submitted -->

          <button style="display: block; margin-top: 20px;" type="submit" class="btn btn-primary" @click.prevent="showData">Show Data</button>

        </div>
      </div>
    </form>
    <hr>
    <div class="row" v-if="isDisplayed">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Full Name: {{ fullName }}</p>
            <p>Mail: {{ mail }}</p>
            <p>Password: {{ password }}</p>
            <p>Store in Database?: {{ radio }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import FullName from './FullName.vue';

  export default {
    data() {
      return {
        fullName: 'Julia Volkova',
        mail: 'julia.volkova090@gmail.com',
        password: '123123',
        radio: 'yes',
        isDisplayed: false
      }
    },
    methods: {
      showData() {
        this.isDisplayed = true;
      }
    },
    components: {
      'app-full-name': FullName
    }
  }
</script>

<style>
</style>
