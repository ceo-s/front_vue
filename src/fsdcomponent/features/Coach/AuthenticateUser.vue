<template>
  <div>
    <new-menu-button @click="log">Авторизироваться</new-menu-button>
    <new-pop-up v-model:visible="popUpVisible">
      <div class="form">
        <div class="buttons">
          <default-button
            @click="
              currentOption = 'CoachAuthorization';
              direction2 = '100px';
            "
            >Authorization</default-button
          >
          <default-button
            @click="
              currentOption = 'CoachRegistration';
              direction2 = '-100px';
            "
            >Registration</default-button
          >
        </div>
        <transition mode="out-in" name="option">
          <component :is="currentOption"></component>
        </transition>
      </div>
    </new-pop-up>
  </div>
</template>

<script>
import CoachAuthorization from "@/fsdcomponent/entities/Coach/ui/CoachAuthorization.vue";
import CoachRegistration from "@/fsdcomponent/entities/Coach/ui/CoachRegistration.vue";
export default {
  components: {
    CoachAuthorization,
    CoachRegistration,
  },
  data() {
    return {
      popUpVisible: false,
      currentOption: "CoachAuthorization",
    };
  },
  methods: {
    log(ev) {
      console.log("suke", ev);
      this.popUpVisible = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  height: 350px;
  transition: 2s;
  width: 300px;
  overflow: hidden;
}
.buttons {
  display: flex;
}
.option-leave-to,
.option-enter-from {
  opacity: 0;
}
.option-enter-active,
.option-leave-active {
  transition: 300ms ease-in-out;
}
</style>
