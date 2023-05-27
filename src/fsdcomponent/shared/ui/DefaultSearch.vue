<template>
  <div>
    <input
      class="search"
      :placeholder="placeholder"
      :value="modelValue"
      @input="performSearch"
      type="text"
    />
  </div>
</template>

<script>
import debouncedSearch from "@/misc/Search";
export default {
  name: "default-search",
  props: {
    modelValue: { String },
    placeholder: { String },
    itemsApiLink: { String },
    searchParams: { type: Array, default: () => ["name__icontains"] },
  },
  mounted() {
    this.debouncedSearch = debouncedSearch;
  },
  methods: {
    performSearch(e) {
      let query = e.target.value;
      this.debouncedSearch(
        this.emitResults,
        query,
        `${this.itemsApiLink}/filter/`,
        this.searchParams
      );
      this.$emit("update:modelValue", query);
    },
    async emitResults(resp) {
      this.$emit("update:searchResults", await resp);
    },
  },
  watch: {
    searchQuery(val) {
      this.debouncedSearch(
        this.emitResults,
        val,
        `${this.itemsApiLink}/filter/`,
        ["name__icontains"]
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.search {
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  border-radius: 4px;
  background: #ffffff52;
  /* margin: 10px; */
  /* background: #000; */
  padding-left: 6px;
  color: aliceblue;
  font-weight: bold;
}
.search::placeholder {
  width: 100%;
  color: rgba(182, 182, 182, 0.8);
  font-weight: 100;
}
</style>
