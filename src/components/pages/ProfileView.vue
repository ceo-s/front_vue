<template>
  <div style="position: relative; z-index: 1">
    <div class="background-image">
      <img :src="$store.state.userInfo.profileInfo.profile_pic" />
    </div>
    <div class="avatar">
      <img :src="$store.state.userInfo.profileInfo.profile_pic" />
    </div>
    <settings-icon v-if="!updating" @click="updating = true" :color="'white'" />

    <coach-info v-if="!updating" />
    <coach-info-editor @save="updating = false" v-else />

    <profile-posts />
    <!-- <add-profile-post /> -->
    <!-- <suspense>
      <template #default> </template>
      <template #fallback>Loading </template>
    </suspense> -->
  </div>
</template>

<script setup>
import CoachInfo from "../entities/Coach/ui/CoachInfo.vue";
import CoachInfoEditor from "../entities/Coach/ui/CoachInfoEditor.vue";
import AddProfilePost from "../features/Coach/AddProfilePost.vue";
import ProfilePosts from "../entities/Coach/ui/ProfilePosts.vue";
import { ref } from "vue";
const updating = ref(false);
</script>

<style lang="scss" scoped>
$hat-height: 30vw;
.background-image {
  // position: absolute;
  z-index: -1;
  width: 100%;
  height: 30vh;
  object-fit: cover;
  overflow: hidden;
  object-position: 50% 50%;
}
.background-image img {
  width: 100%;
  // object-position: 50% 50%;
  filter: blur(6px);
}
$avatar-size: 36vh;
.avatar {
  position: relative;
  width: 60%;
  max-width: $avatar-size;
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
