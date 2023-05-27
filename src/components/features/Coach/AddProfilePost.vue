<template>
  <div style="position: relative; z-index: 1">
    <hr style="border: 1px solid #000" />

    <button @click="visible = true" class="add-post">+</button>
    <new-pop-up v-model:visible="visible">
      <PostChoice @select:option="addPost" />
    </new-pop-up>
  </div>
</template>

<script setup>
import { ref } from "vue";
import PostChoice from "@/components/entities/Coach/ui/PostChoice.vue";
let visible = ref(false);
let log = (...args) => console.log(...args);
const addPost = (option) => (visible.value = false);
</script>

<style lang="scss" scoped>
.add-post {
  @include drop-default;
  @include flex-centered;
  cursor: pointer;
  position: relative;
  font-size: 4em;
  width: 70px;
  height: 70px;
  background: #15181c;
  margin: auto;
  margin-top: -35px;
  border-radius: 50%;
  color: #2cecb2;
}
.add-post::before {
  content: "";
  display: block;
  position: absolute;
  background: conic-gradient(#2cecb2, #ff40e5, #4473ff, #2cecb2);
  width: 76px;
  height: 76px;
  inset: -3px;
  z-index: -1;
  border-radius: 50%;
  transition: 200ms;
  animation: rotate-border 2s infinite linear;
  filter: blur(1px);
}
.add-post:hover::before {
  animation-play-state: paused;
}
.add-post:active::before {
  scale: 105%;
  filter: blur(3px);
}

@keyframes rotate-border {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
