<template>
    <div>
        <diet-options/>
        <!-- <diet-list/> -->
        <diet-builder/>
    </div>
</template>

<script>
import DietList from '@/components/DietList.vue';
import DietOptions from '@/components/DietOptions.vue';
import DietBuilder from '@/components/DietBuilder.vue';
export default {
    components: {
        DietList, DietOptions, DietBuilder
    }
}
</script>

<style scoped>

</style>