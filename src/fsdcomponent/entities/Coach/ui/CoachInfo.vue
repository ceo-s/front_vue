<template>
  <div class="container">
    <div class="background-image">
      <img :src="userInfo.profile_pic" />
    </div>
    <div class="avatar">
      <img :src="userInfo.profile_pic" />
    </div>
    <div v-if="userInfo.name" class="info">
      <h1>{{ userInfo.name }}</h1>
      <h1>{{ userInfo.user.telegram }}</h1>
      <h1>{{ userInfo.bio }}</h1>
    </div>
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
$hat-height: 30vw;
.container {
  // height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: relative;
}
.background-image {
  // position: absolute;
  z-index: -1;
  width: 100%;
  height: $hat-height;
  object-fit: cover;
  overflow: hidden;
  object-position: 50% 50%;
}
.background-image img {
  width: 100%;
  object-position: 50% 50%;
  filter: blur(6px);
}
.info {
  width: 50%;
  background: black;
  @include flex-centered;
  flex-direction: column;
}
$avatar-size: 36vh;
.avatar {
  position: relative;
  height: $avatar-size;
  // width: 26em;
  overflow: hidden;
  background: wheat;
  border-radius: 50%;
  object-fit: cover;
  aspect-ratio: 1/1;
  margin: auto;
  margin-top: calc(-1 * $avatar-size / 2);
  // translate: 0px calc($hat-height - 13em);
}
.avatar img {
  width: 100%;

  // object-position: bottom;
}
</style>
