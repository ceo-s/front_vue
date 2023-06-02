<template>
  <div class="WHA">
    <!-- <pop-up v-model:visible="visible"> -->
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
    <div><h1>WTF</h1></div>
    <!-- </pop-up> -->
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
<script setup>
// import { onMounted } from "vue";

// onMounted(() => {
//   const scriptContainer = document.querySelector(".tgScript");
//   const tgScript = document.createElement("script");
//   tgScript.tgScript.async = true;
//   tgScript.src = "https://telegram.org/js/telegram-widget.js?22";

//   tgScript.setAttribute("data-size", "large");
//   tgScript.setAttribute("data-userpic", "true");
//   tgScript.setAttribute("data-telegram-login", "sokol_coach_bot");
//   tgScript.setAttribute("data-request-access", "write");
//   tgScript.setAttribute("data-onauth", "window.onTelegramAuth(user)");
//   scriptContainer.appendChild(tgScript);

//   window.onTelegramAuth = (user) => {
//     alert(
//       "Logged in as " +
//         user.first_name +
//         " " +
//         user.last_name +
//         " (" +
//         user.id +
//         (user.username ? ", @" + user.username : "") +
//         ")"
//     );
//   };
// });
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
