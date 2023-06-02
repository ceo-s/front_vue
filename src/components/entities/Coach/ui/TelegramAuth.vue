<template>
  <div class="tgScript"></div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const scriptContainer = document.querySelector(".tgScript");
  const tgScript = document.createElement("script");
  tgScript.async = true;
  tgScript.src = "https://telegram.org/js/telegram-widget.js?22";

  tgScript.setAttribute("data-size", "large");
  tgScript.setAttribute("data-userpic", "true");
  tgScript.setAttribute("data-telegram-login", "sokol_coach_bot");
  tgScript.setAttribute("data-request-access", "write");
  tgScript.setAttribute("data-onauth", "window.onTelegramAuth(user)");
  scriptContainer.appendChild(tgScript);

  window.onTelegramAuth = (user) => {
    alert(
      "Logged in as " +
        user.first_name +
        " " +
        user.last_name +
        " (" +
        user.id +
        (user.username ? ", @" + user.username : "") +
        ")"
    );
  };
});
</script>

<style lang="scss" scoped></style>
