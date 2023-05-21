<template>
    <div>
    <exercises-list/>
    <exercise-pop-up/>    
    </div>
</template>

<script>
import ExercisesList from '@/components/ExercisesList.vue';
import ExercisePopUp from '@/components/ExercisePopUp.vue';
export default {
    components: {
        ExercisesList, ExercisePopUp
    },
    data() {
        return {
            
        }
    },
    methods: {
    },
}
</script>

<style scoped>

</style>