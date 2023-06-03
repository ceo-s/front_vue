<template>
  <div>
    <new-menu-button @click="popUpVisible = true"
      >Авторизироваться</new-menu-button
    >
    <pop-up v-model:visible="popUpVisible">
      <div class="form">
        <div class="buttons">
          <button
            :class="{ active: currentOption === 'CoachAuthorization' }"
            @click="
              currentOption = 'CoachAuthorization';
              direction2 = '100px';
            "
          >
            Войти
          </button>
          <button
            :class="{ active: currentOption === 'CoachRegistration' }"
            @click="
              currentOption = 'CoachRegistration';
              direction2 = '-100px';
            "
          >
            Зарегистрироваться
          </button>
        </div>
        <transition mode="out-in" name="option">
          <component :is="currentOption" @update="log"></component>
        </transition>
      </div>
    </pop-up>
  </div>
</template>

<script>
import CoachAuthorization from "@/components/entities/Coach/ui/CoachAuthorization.vue";
import CoachRegistration from "@/components/entities/Coach/ui/CoachRegistration.vue";
export default {
  components: {
    CoachAuthorization,
    CoachRegistration,
  },
  props: {
    defaultOption: { String },
  },
  mounted() {
    this.currentOption = this.defaultOption;
  },
  data() {
    return {
      popUpVisible: false,
      currentOption: "CoachAuthorization",
    };
  },
  methods: {
    log(e) {
      console.log(e);
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
  position: relative;
  display: flex;
  width: 100%;
  button {
    position: relative;
    @include drop-default;
    flex-grow: 1;
    height: 4em;
    cursor: pointer;
    color: black;
    font-size: 0.7em;
    font-weight: 600;
  }
  button::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background: #6be2d04d;
    inset: 0;
    z-index: -1;
    filter: blur(50px);
    opacity: 0;
    transition: opacity 1s;
  }
  button.active::after {
    opacity: 1;
  }
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
