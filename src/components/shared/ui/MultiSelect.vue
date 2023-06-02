<template>
  <div class="multi-select">
    <transition-group name="list">
      <div
        :key="chosen.id"
        @click="reset(chosen)"
        v-for="chosen in chosenOptions"
        class="option chosen"
      >
        <h4>{{ chosen.name }}</h4>
        <!-- <h4>{{ chosen.id }}</h4> -->
      </div>
      <div
        :key="option.id"
        @click="choose(option)"
        v-for="option in notChosenOptions"
        class="option"
      >
        <h4>{{ option.name }}</h4>
        <!-- <h4>{{ option.id }}</h4> -->
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "new-multi-select",
  props: {
    options: { Array },
  },
  data() {
    return {
      chosenOptions: [],
    };
  },
  methods: {
    choose(option) {
      this.chosenOptions.push(option);
      this.$emit("update:chosenOptions", this.chosenOptions);
    },
    reset(option) {
      this.chosenOptions = this.chosenOptions.filter((x) => x !== option);
      this.$emit("update:chosenOptions", this.chosenOptions);
    },
  },
  computed: {
    notChosenOptions() {
      return this.options.filter((x) => !this.chosenOptions.includes(x));
    },
  },
};
</script>

<style lang="scss" scoped>
.multi-select {
  display: flex;
  gap: 0.2em;
  width: 100%;
  height: fit-content;
  flex-wrap: wrap;
  position: absolute;
  z-index: 0;
}
.multi-select::before {
  content: "";
  width: 100%;
  height: 100%;
  z-index: -1;
  background: $color2;
  filter: blur(30px);
  position: absolute;
  inset: 0;
  // opacity: 0.7;
}
.option {
  @include bordered;
  // margin: 2px;
  // display: flex;
  // align-items: center;
  // justify-content: center;
  padding: 0 14px 0 14px;
  height: 24px;
  min-width: 40px;
  width: fit-content;
  background: $color1;
  border: 2px solid $color-pink;
  cursor: pointer;
}
.chosen {
  border: 3px solid $color-turquoise;
}
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
