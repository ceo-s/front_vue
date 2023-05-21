<template>
  <div>
    <my-input v-model="searchQuery" :placeholder="'Поиск:'" />
    <multi-select-group
      v-if="optionsFieldsModels"
      @update:chosenOptions="updateSelectedFilterOptions"
      :optionsFieldsModels="optionsFieldsModels"
    />
    <my-select
      v-if="sortOptions"
      :options="sortOptions"
      v-model="selectedSortOption"
    />
  </div>
</template>

<script>
import axios from "axios";
import debouncedSearch from "@/misc/Search";
// import MultiSelectGroup from "@/components/UI/MultiSelectGroup.vue";
export default {
  components: {
    // MultiSelectGroup,
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
      // this.$emit("update:items", this.sort(items))
      this.$emit("update:items", this.itemsComputed);
    },
    updateSelectedFilterOptions(options) {
      this.selectedFilterOptions = options;
      this.filter(options);
    },
    search(resp) {
      this.updateItems(resp);
    },
    async filter(filterOptions) {
      const qs = require("qs");
      let data = (
        await axios.get(`api/${this.itemsApiLink}/chain_filter/`, {
          params: { ...filterOptions },
          paramsSerializer: (params) => {
            return qs.stringify(params, {
              arrayFormat: "comma",
              encode: false,
            });
          },
        })
      ).data;
      this.updateItems(data);
    },
    // sort(items) {
    //     return items.filter((val) => val.name.toLowerCase()
    //         .includes(this.searchQuery.toLowerCase())).sort((a, b) => {
    //         return a[this.selectedSortOption.value].localeCompare(b.name) * this.selectedSortOption.order
    //     })

    // },
  },
  watch: {
    searchQuery(val) {
      if (JSON.stringify(this.selectedFilterOptions) === "{}") {
        this.debouncedSearch(
          this.search,
          val,
          `api/${this.itemsApiLink}/filter/`,
          ["name__icontains"]
        );
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
      return this.itemsForComputing
        .filter((val) =>
          val.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        )
        .sort((a, b) => {
          console.log(typeof a[this.selectedSortOption.value]);
          console.log(this.selectedSortOption.value);
          if (typeof a[this.selectedSortOption.value] === "string") {
            console.log("yes it is string");
            return (
              a[this.selectedSortOption.value].localeCompare(
                b[this.selectedSortOption.value]
              ) * this.selectedSortOption.order
            );
          } else {
            console.log("no it is not string");
            return (
              a[this.selectedSortOption.value] -
              b[this.selectedSortOption.value]
            );
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
