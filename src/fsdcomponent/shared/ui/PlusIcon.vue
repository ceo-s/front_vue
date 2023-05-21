<template>
  <button class="button">
    <svg
      class="plus"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="32px"
      height="32px"
      viewBox="0 0 533.333 533.333"
      style="enable-background: new 0 0 533.333 533.333"
      xml:space="preserve"
    >
      <g>
        <path
          d="M516.667,200H333.333V16.667C333.333,7.462,325.871,0,316.667,0h-100C207.462,0,200,7.462,200,16.667V200H16.667
		C7.462,200,0,207.462,0,216.667v100c0,9.204,7.462,16.666,16.667,16.666H200v183.334c0,9.204,7.462,16.666,16.667,16.666h100
		c9.204,0,16.667-7.462,16.667-16.666V333.333h183.333c9.204,0,16.667-7.462,16.667-16.666v-100
		C533.333,207.462,525.871,200,516.667,200z"
        />
      </g>
    </svg>
  </button>
</template>

<script>
export default {
  name: "plus-icon",
  props: {
    color: {
      type: String,
      default: "#000",
    },
    size: {
      type: Number,
      default: 1,
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  width: min-content;
  height: min-content;
  cursor: pointer;
  border: none;
  background: none;
}
.plus {
  width: calc(32px * v-bind(size));
  height: fit-content;
  fill: v-bind(color);
}
</style>
