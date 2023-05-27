<template>
  <div>
    <default-button @click="visible = true">Add Program</default-button>
    <new-pop-up v-model:visible="visible">
      <create-program
        @update:program="$emit('update:program', $event), (visible = false)"
      />
    </new-pop-up>
  </div>
</template>

<script>
import CreateProgram from "@/fsdcomponent/entities/Diet/ui/CreateProgram.vue";
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
