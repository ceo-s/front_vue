<template>
  <div>
    <!-- <new-pop-up v-model:visible="visible"> -->
    <choose-authentication v-model="currentOption" />
    <form method="get">
      <div style="height: 160px">
        <transition mode="out-in" name="option">
          <component
            @update:password="log"
            :is="currentOption.value"
          ></component>
        </transition>
      </div>
      <default-button @click.prevent type="submit">Отправить</default-button>
    </form>
    <!-- </new-pop-up> -->
  </div>
</template>

<script>
import ChooseAuthentication from "@/components/features/Coach/ChooseAuthentication.vue";
import CoachAuthorization from "@/components/entities/Coach/ui/CoachAuthorization.vue";
import CoachRegistration from "@/components/entities/Coach/ui/CoachRegistration.vue";
export default {
  components: {
    CoachAuthorization,
    CoachRegistration,
    ChooseAuthentication,
  },
  data() {
    return {
      visible: true,
      options: [
        { name: "Login", value: "CoachAuthorization" },
        { name: "Registration", value: "CoachRegistration" },
      ],
      currentOption: { name: "Login", value: "CoachAuthorization" },
    };
  },
  methods: {
    log(val) {
      console.log(val.target);
    },
  },
};
</script>

<style lang="scss" scoped>
.option-leave-to,
.option-enter-from {
  opacity: 0;
}
.option-enter-active,
.option-leave-active {
  transition: 200ms;
}
</style>
