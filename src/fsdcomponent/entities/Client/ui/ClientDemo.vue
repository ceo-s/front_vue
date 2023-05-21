<template>
  <div class="client">
    <h2>{{ client.name }}</h2>
    <h3>{{ client.telegram }}</h3>
    <div v-if="extended">
      <p>{{ descriptionDemo }}</p>
      <default-button class="button" @click="openClientPage"
        >Подробнее</default-button
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    client: {
      type: Object,
      default() {
        return {
          id: 1,
          name: "Alex",
          telegram: "alex",
          description: "Cool guy",
        };
      },
    },
    extended: { Boolean },
  },
  data() {
    return {
      // clientDetails: {},
    };
  },
  methods: {
    openClientPage() {
      console.log("wth");
      this.$router.push(`clients2/${this.client.id}`);
    },
  },
  computed: {
    descriptionDemo() {
      return (
        this.client.description.slice(0, 300) +
        (this.client.description.length > 300 ? "..." : "")
      );
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./main.scss";
.client {
  // padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  // width: 300px;
  // height: 300px;
  // background: #555;
}
.button {
  margin-top: auto;
}
</style>
