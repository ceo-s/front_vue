<template>
  <div class="carousel">
    <arrow-icon
      v-if="itemsLength > 1"
      :color="'#bbb6c8'"
      @click="previousItem"
      :size="arrowSize"
      :direction="arrowDirection.previous"
    />
    <slot></slot>
    <arrow-icon
      v-if="itemsLength > 1"
      :color="'#bbb6c8'"
      @click="nextItem"
      :size="arrowSize"
      :direction="arrowDirection.next"
    />
  </div>
</template>

<script>
export default {
  name: "default-carousel",
  props: {
    currentItemIndex: {
      type: Number,
      default: () => 0,
    },
    itemsLength: {
      type: Number,
      default: () => 1,
    },
    direction: {
      type: String,
      default: () => "column",
    },
    arrowSize: {
      type: Number,
      default: () => 1,
    },
  },
  methods: {
    nextItem() {
      if (this.currentItemIndex === this.itemsLength - 1)
        this.$emit("update:currentItemIndex", 0);
      else this.$emit("update:currentItemIndex", this.currentItemIndex + 1);
    },
    previousItem() {
      if (this.currentItemIndex === 0)
        this.$emit("update:currentItemIndex", this.itemsLength - 1);
      else this.$emit("update:currentItemIndex", this.currentItemIndex - 1);
    },
  },
  computed: {
    arrowDirection() {
      if (this.direction === "column") {
        return { previous: "top", next: "bottom" };
      } else if (this.direction === "row") {
        return { previous: "left", next: "right" };
      }
      return null;
    },
    // positioning() {
    //   // return left
    // }
  },
};
</script>

<style lang="scss" scoped>
.carousel {
  @include flex-centered;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: v-bind(direction);
}
</style>
