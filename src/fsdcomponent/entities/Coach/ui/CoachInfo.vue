<template>
  <div class="container">
    <div class="info">
      <h1>{{ userInfo.name }}</h1>
      <h1>{{ userInfo.user }}</h1>
      <h1>{{ userInfo.bio }}</h1>
    </div>
    <img class="avatar" :src="userInfo.profile_pic" />
  </div>
</template>

<script>
import { getUser } from "../api/Get";
export default {
  mounted() {
    this.fetchInfo();
  },
  data() {
    return {
      userInfo: {},
    };
  },
  methods: {
    async fetchInfo() {
      this.userInfo = await getUser();
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  width: 100%;
}
.avatar {
  height: auto;
  // width: 10%;
  width: 50%;
}
</style>
