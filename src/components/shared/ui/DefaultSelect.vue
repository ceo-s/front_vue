<template>
  <div class="select-container" v-clickoutside="close">
    <div class="select">
      <button class="sort" @click.stop="toggleSelect">
        <h3>{{ currentOption.name || "Sort:" }}</h3>
      </button>
      <button
        class="cross"
        style="margin-left: auto"
        @click="resetOption"
        v-if="currentOption.id"
      >
        ❌
      </button>
    </div>
    <dialog v-auto-animate ref="dialog">
      <button v-if="!currentOption.id" disabled class="option">
        Выберите вариант
      </button>
      <button
        class="option"
        :key="option.id"
        @click="chooseOption(option)"
        v-for="option in options"
      >
        <h3>{{ option.name }}</h3>
      </button>
    </dialog>
  </div>
</template>

<script>
export default {
  name: "default-select",
};
</script>
<script setup>
import { ref } from "vue";
const props = defineProps(["currentOption", "options"]);
const emit = defineEmits(["update:currentOption"]);
const dialog = ref(null);
const chooseOption = (option) => {
  emit("update:currentOption", option);
};
const resetOption = () => {
  emit("update:currentOption", {
    id: 0,
    name: "Sort:",
    value: "name",
    order: 1,
  });
};

const toggleSelect = () => {
  console.log(dialog.value.getAttribute("open"));
  if (dialog.value.getAttribute("open") === "") {
    close();
  } else {
    dialog.value.show();
  }
};
const close = () => {
  dialog.value.close();
};
</script>

<style lang="scss" scoped>
$height: 2.8rem;
$width: 8rem;
$scaling: 0.75;
.select-container {
  position: relative;
  height: 100%;
}
@keyframes enter {
  from {
    opacity: 0;
    translate: 0 calc(-1 * $height);
  }
  to {
    opacity: 1;
    translate: 0 0;
  }
}
dialog {
  z-index: 1;
  border: none;
  width: $width;
  background: $color3;
  max-height: 7rem;
  overflow-y: scroll;
  top: $height;
}
dialog[open] {
  display: flex;
  flex-direction: column;
  animation: enter 120ms linear;
}
.select {
  display: flex;
  height: 100%;
  z-index: 1;
  button {
    @include drop-default;
    cursor: pointer;
    // height: $height;
    height: 100%;
    background: $color3;
    // border-radius: 0 calc($height / 2) calc($height / 2) 0;
  }
  .sort {
    width: $width;
    border-left: 2px solid $color5;
  }
  .cross {
    // width: 3ch;
    position: absolute;
    right: 0;
    cursor: crosshair;
    background: none;
  }
}
.option {
  @include drop-default;
  min-height: 2rem;
  border-top: 1px solid $color5;
  border-left: 2px solid $color5;
  background: $color3;
  cursor: pointer;
}
.option:disabled {
  cursor: not-allowed;
  filter: grayscale(0.5);
}
@media (width < 600px) {
  dialog {
    width: calc($width * $scaling);
    top: calc($height * $scaling);
  }
  .select {
    button {
      height: calc($height * $scaling);
    }
    .sort {
      width: calc($width * $scaling);
    }
  }
}
</style>
