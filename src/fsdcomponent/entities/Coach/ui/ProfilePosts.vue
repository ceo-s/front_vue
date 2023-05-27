<template>
  <div class="posts">
    <div :key="post.id" v-for="post in posts" class="post">
      <div class="text">
        <h1>{{ post.title }}</h1>
        <p>{{ post.content }}</p>
      </div>
      <div class="media">
        <div>
          <img :src="post.media" alt="Post picture" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { listPosts } from "../api/List";
const posts = ref();
onMounted(async () => {
  posts.value = await listPosts();
  console.log("Mounted");
  console.log(posts.value);
});
</script>

<style lang="scss" scoped>
.posts {
  width: 100%;
}
.post {
  display: flex;
  justify-content: space-around;
}
.post .text {
  padding: 20px;
}
.post .media {
  width: 40%;
}
.post .media div {
  width: 100%;
  object-fit: cover;
}
.media div img {
  width: 100%;
}
</style>
