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
  display: flex;
  width: 100%;
  button {
    @include drop-default;
    flex-grow: 1;
    opacity: 0.5;
    height: 40px;
    cursor: pointer;
    background: linear-gradient($color3, $color1 100%);
    font-size: 0.8em;
  }
  button.active {
    color: $font-color1;
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
