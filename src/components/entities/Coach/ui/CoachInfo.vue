<template>
  <div class="container">
    <div v-if="userInfo.name" class="info">
      <h1>{{ userInfo.name }}</h1>
      <h1>{{ userInfo.user.telegram }}</h1>
      <h1>{{ userInfo.bio }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // userInfo: {},
    };
  },
  methods: {
    async fetchInfo() {
      // this.userInfo = await getUser();
    },
  },
  computed: {
    userInfo() {
      return this.$store.state.userInfo.profileInfo;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  // height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: relative;
}

.info {
  margin-left: auto;
  margin-right: auto;
  @include flex-centered;
  width: 50%;
  // background: black;
  flex-direction: column;
}
</style>
