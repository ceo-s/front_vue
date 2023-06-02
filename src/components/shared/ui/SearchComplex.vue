<template>
  <div ref="complex" class="complex">
    <div class="line">
      <input
        type="search"
        class="default"
        v-model="searchQuery"
        placeholder="Поиск:"
      />
      <default-select
        v-if="sortOptions"
        :options="sortOptions"
        v-model:currentOption="selectedSortOption"
      />
    </div>
    <div class="filters-button" @click="toggleFilters">
      <p>Фильтровать</p>
      <plus-icon
        class="plus"
        :class="{ opened: filtersActive }"
        :size="0.8"
        :color="'#bbb6c8'"
      />
    </div>
    <transition name="filters">
      <multi-select-group
        v-if="optionsFieldsModels"
        v-show="filtersActive"
        @update:chosenOptions="updateSelectedFilterOptions"
        :optionsFieldsModels="optionsFieldsModels"
      />
    </transition>
  </div>
</template>

<script>
import api from "../api/ky";
import debouncedSearch from "@/misc/Search";
import MultiSelectGroup from "../ui/MultiSelectGroup.vue";
export default {
  name: "search-complex",
  components: {
    MultiSelectGroup,
  },
  props: {
    items: { Array },
    itemsApiLink: { String },
    sortOptions: { Array },
    optionsFieldsModels: { Array },
  },
  mounted() {
    const unwatch = this.$watch("items", (val) => {
      if (val) {
        this.itemsForComputing = [...this.items];
        unwatch();
      }
    });
    this.debouncedSearch = debouncedSearch;
  },
  data() {
    return {
      itemsForComputing: [],
      searchQuery: "",
      selectedSortOption: { id: 0, name: "Sort:", value: "name", order: 1 },
      selectedFilterOptions: {},
      filtersActive: false,
    };
  },
  methods: {
    updateItems(items) {
      this.itemsForComputing = items;
      this.$emit("update:items", this.itemsComputed);
    },
    updateSelectedFilterOptions(options) {
      this.selectedFilterOptions = options;
      this.filter(options);
    },
    async search(resp) {
      this.updateItems(await resp);
    },
    async filter(filterOptions) {
      const data = await api
        .get(`${this.itemsApiLink}/chain_filter/`, {
          searchParams: { ...filterOptions },
        })
        .json();
      this.updateItems(data);
    },
    toggleFilters() {
      if (this.filtersActive) {
        this.$refs.complex.removeAttribute("filters");
        this.filtersActive = false;
      } else {
        this.$refs.complex.setAttribute("filters", "");
        this.filtersActive = true;
      }
    },
  },
  watch: {
    searchQuery(val) {
      if (JSON.stringify(this.selectedFilterOptions) === "{}") {
        this.debouncedSearch(this.search, val, `${this.itemsApiLink}/filter/`, [
          "name__icontains",
        ]);
      } else {
        this.$emit("update:items", this.itemsComputed);
      }
    },
    selectedSortOption: {
      handler() {
        this.$emit("update:items", this.itemsComputed);
      },
      deep: true,
    },
  },
  computed: {
    itemsComputed() {
      const items = this.itemsForComputing.filter((val) =>
        val.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
      console.log("AUE", this.itemsForComputing);
      const filterValue = this.selectedSortOption.value;
      if (
        items.length &&
        typeof items[0][this.selectedSortOption.value] === "string"
      ) {
        return items.sort((a, b) => {
          return (
            a[filterValue].localeCompare(b[filterValue]) *
            this.selectedSortOption.order
          );
        });
      } else {
        return items.sort((a, b) => {
          return a[filterValue] - b[filterValue];
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.complex {
  margin: 0 auto;
  position: relative;
  width: 80%;
  transition: 300ms;
  height: 6em;
}
.complex[filters] {
  height: 7em;
}
@media (width < 600px) {
  .complex {
    height: 5em;
  }
  .complex[filters] {
    height: 6em;
  }
}
input.default {
  height: 100%;
  border-radius: 1.4rem 0 0 1.4rem;
  width: 100%;
}
.line {
  display: flex;
  align-items: center;
  margin-bottom: 0.4em;
  height: 2.8rem;
  @media (width < 600px) {
    height: calc(2.8rem * 0.75);
  }
}
.filters-button {
  @include bordered;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.4rem;
  margin: 0.4em auto;
  width: 10em;
  border: 3px solid $color3;
  z-index: 1;
  font-size: 0.9em;
  @media (width < 600px) {
    font-size: 0.8em;
  }
}
.plus {
  transition: 300ms;
}
.opened {
  rotate: 45deg;
}
.filters-enter-from,
.filters-leave-to {
  opacity: 0;
  translate: 0 -50%;
}
.filters-enter-active,
.filters-leave-active {
  transition: 300ms;
}
</style>
