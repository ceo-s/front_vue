<template>
  <div>
    <default-button @click="visible = true">Add Program</default-button>
    <pop-up style="overflow: visible" v-model:visible="visible">
      <create-program
        @update:program="$emit('update:program', $event), (visible = false)"
      />
    </pop-up>
  </div>
</template>

<script>
import CreateProgram from "@/components/entities/Diet/ui/CreateProgram.vue";
export default {
  components: {
    CreateProgram,
  },
  data() {
    return {
      visible: false,
    };
  },
};
</script>

<style lang="scss" scoped></style>
