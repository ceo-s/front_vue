<template>
    <div>
        <diet-options v-model="currentOption"/>
        <component :is="currentOption"/>
        <!-- <diet-list/> -->
        <!-- <diet-builder/> -->
    </div>
</template>

<script>
import DietList from '@/components/DietList.vue';
import DietOptions from '@/components/DietOptions.vue';
import DietBuilder from '@/components/DietBuilder.vue';
export default {
    components: {
        DietList, DietOptions, DietBuilder, 
    },
    data() {
        return {
            currentOption: "DietList"
        }
    },
    methods: {

    }
}
</script>

<style scoped>

</style>