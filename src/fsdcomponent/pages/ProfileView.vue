<template>
  <div style="position: relative; z-index: 1">
    <coach-info />
    <profile-posts />
    <add-profile-post />
    <!-- <suspense>
      <template #default> </template>
      <template #fallback>Loading </template>
    </suspense> -->
  </div>
</template>

<script setup>
import CoachInfo from "../entities/Coach/ui/CoachInfo.vue";
import AddProfilePost from "../features/Coach/AddProfilePost.vue";
import ProfilePosts from "../entities/Coach/ui/ProfilePosts.vue";
</script>

<style lang="scss" scoped></style>
