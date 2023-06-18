<template>
  <div class="container">
    <form class="inputs" @submit.prevent="saveChanges" action="">
      <input class="default" type="text" v-model="userInfo.name" />
      <input class="default" type="text" v-model="userInfo.user.telegram" />
      <input class="default" type="text" v-model="userInfo.bio" />
      <default-button type="submit" :size="0.9" class="save-button"
        >Сохранить</default-button
      >
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { updateProfileInfo } from "../api/Update";
const userInfo = ref();
const store = useStore();
const emits = defineEmits(["save"]);
userInfo.value = structuredClone(store.state.userInfo.profileInfo);
const saveChanges = async (e) => {
  await updateProfileInfo(userInfo.value);
  console.log(userInfo.value);
  console.log(e);
  await store.dispatch("userInfo/fetchProfileInfo");
  emits("save");
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
.inputs {
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  // align-items: center;
  width: 300px;
  gap: 0.6em;
  input {
    height: 2.4em;
  }
}
.save-button {
  margin-left: auto;
  margin-right: auto;
}
</style>
