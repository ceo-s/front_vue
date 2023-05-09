<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!-- <annotated-input
    :placeholder="'Exercise name'"
    :apiLink="'api/exercises/filter/'"
    :searchFields="['name__startswith']"
    /> -->
    <!-- <my-input/> -->
    <!-- <my-input-annotations/> -->
    <my-select/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
export default {
  setup() {
    Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    // new Date().toDateString()
    return date;
    }
  },
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data() {
    return {
    minDate: new Date().addDays(-30).toDateString(),
    maxDate: new Date().addDays(360).toDateString(),
    }
  },
  methods: {
    handle(date) {
      console.log(date);
    }
  }
}
</script>
