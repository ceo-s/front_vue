<template>
  <div @click="openClientPage" class="client">
    <div class="icon">
      <img :src="clientIcon" alt="" />
    </div>
    <div class="content">
      <h2>{{ client.name }}</h2>
      <h3>{{ client.telegram }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    client: {
      type: Object,
    },
    extended: { Boolean },
  },
  data() {
    return {
      link: "",
      // color: "",
    };
  },
  methods: {
    defineGender() {
      let gender = this.client.gender;
      if (gender === "M") {
        this.link = "@/assets/male-icon.png";
        // this.color = "#4f56ff";
      } else {
        this.link = "@/assets/female-icon.png";
        // this.color = "#e15ec7";
      }
    },
    openClientPage() {
      console.log("wth");
      this.$router.push(`clients/${this.client.id}`);
    },
  },
  computed: {
    color() {
      let gender = this.client.gender;
      return gender === "M" ? "#4f56ff" : "#ff4980";
    },
    clientIcon() {
      let gender = this.client.gender;
      return gender === "M"
        ? require("@/assets/male-icon.png")
        : require("@/assets/female-icon.png");
    },
    descriptionDemo() {
      let description = this.client.description.slice(0, 40);
      return description + (this.client.description.length > 10 ? "..." : "");
    },
  },
};
</script>

<style lang="scss" scoped>
.client {
  position: relative;
  @include bordered;
  // @include neon-border(45deg, $color-blue, $color-pink, 2px, 6px);
  display: flex;
  align-items: center;
  width: 100%;
  min-width: 360px;
  width: fit-content;
  background: $color2;
  padding: 0.8em;
  gap: 1em;
  cursor: pointer;
  transition: translate 200ms;
  transition-delay: 200ms;
  .icon {
    border: 2px solid v-bind(color);
    box-shadow: 0 0 10px v-bind(color);
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    img {
      // filter: drop-shadow(0 0 4px $color-blue);
      width: 100%;
    }
  }
  .content {
    text-align: start;
    flex-direction: column;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis ellipsis;
  }
}
.client:hover {
  translate: 0 -10px;
  transition-delay: 0ms;
}
</style>
