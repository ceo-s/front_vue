<template>
  <div>
    <default-input v-model="searchQuery" :placeholder="'Поиск:'" />
    <multi-select-group
      v-if="optionsFieldsModels"
      @update:chosenOptions="updateSelectedFilterOptions"
      :optionsFieldsModels="optionsFieldsModels"
    />
    <default-select
      v-if="sortOptions"
      :options="sortOptions"
      v-model="selectedSortOption"
    />
  </div>
</template>

<script>
// import axios from "axios";
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
    this.itemsForComputing = this.items;
    this.debouncedSearch = debouncedSearch;
  },
  data() {
    return {
      itemsForComputing: [],
      searchQuery: "",
      selectedSortOption: { id: 0, name: "Sort:", value: "name", order: 1 },
      selectedFilterOptions: {},
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

<style lang="scss" scoped></style>
