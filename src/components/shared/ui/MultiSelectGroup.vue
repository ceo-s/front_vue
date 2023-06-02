<template>
  <div v-clickoutside="close" class="multi-select-group">
    <div
      ref="groups"
      @wheel.prevent="horizontalScroll"
      class="group-options-container"
    >
      <div
        :key="i"
        @click="toggleGroup(i)"
        class="group-option"
        :class="{ current: i === selectedGroup }"
        v-for="(fieldsModels, i) in optionsFieldsModels"
      >
        {{ fieldsModels.name }}
      </div>
    </div>
    <div :key="i" v-for="(options, i) in optionsGroup">
      <transition name="group">
        <multi-select
          @update:chosenOptions="
            updateChosenOptions($event, optionsFieldsModels[i].field)
          "
          v-show="selectedGroup === i"
          :options="options"
        />
      </transition>
    </div>
  </div>
</template>

<script>
import api from "../api/ky";
import MultiSelect from "./MultiSelect.vue";
export default {
  components: {
    MultiSelect,
  },
  props: {
    optionsFieldsModels: { Array },
  },
  mounted() {
    this.fetchOptions();
  },
  data() {
    return {
      selectedGroup: -1,
      chosenOptions: {},
      optionsGroup: [],
    };
  },
  methods: {
    updateChosenOptions(chosenOptions, field) {
      if (!chosenOptions.length) {
        delete this.chosenOptions[field];
      } else {
        this.chosenOptions[field] = chosenOptions.map((val) => val.id);
      }
      this.$emit("update:chosenOptions", this.chosenOptions);
    },
    toggleGroup(i) {
      if (this.selectedGroup === i) this.selectedGroup = -1;
      else this.selectedGroup = i;
    },
    close() {
      this.selectedGroup = -1;
    },
    async fetchOptions() {
      const fieldsModels = this.optionsFieldsModels;
      for (let i in fieldsModels) {
        const options = await api.get(`${fieldsModels[i].toModel}/`).json();
        this.optionsGroup.push(options);
      }
    },
    horizontalScroll(e) {
      this.$refs.groups.scrollBy({ left: e.deltaY < 0 ? -80 : 80 });
    },
  },
  compted: {},
};
</script>

<style lang="scss" scoped>
// .multi-select-group {
// // background: #232;
// }
.group-options-container {
  display: flex;
  width: 100%;
  position: relative;
  overflow-x: scroll;
}
.group-options-container::-webkit-scrollbar {
  display: flex;
}
.group-options-container::-webkit-scrollbar:horizontal {
}
.group-option {
  @include bordered;
  cursor: pointer;
  height: 30px;
  min-width: 100px;
  min-width: max-content;
  width: fit-content;
  padding: 0 1ch;
  position: relative;
  background: $color3;
}
.current {
  background: black;
}
.group-enter-from,
.group-leave-to {
  opacity: 0;
}
.group-enter-active,
.group-leave-active {
  transition: 400ms;
}
</style>
