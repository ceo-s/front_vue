<template>
    <div>
    <transition mode="out-in" name="builder">
    <list-display :key="programIndex" :column_width="column_width">
        <program-builder-day
        v-for="(day, i) in program"
        :key="i"
        :dayCardWidth="column_width"
        :day="day"/>
        <h1>Some</h1>
    </list-display>
    </transition>
    </div>
</template>

<script>
import ProgramBuilderDay from '@/components/ProgramBuilderDay.vue'
export default {
    components: {
        ProgramBuilderDay
    },
    props: {
        program: {Array},
        programIndex: {Number},
    },
    data() {
        return {
            // program: [
            //     {day: "Понедельник", exercises: [{name: "", sets: "", reps: "", weight: "", comment: ""}]},
            //     {day: "Вторник", exercises: [{name: "", sets: "", reps: "", weight: "", comment: ""}]},
            //     {day: "Среда", exercises: [{name: "", sets: "", reps: "", weight: "", comment: ""}]},
            //     {day: "Четверг", exercises: [{name: "", sets: "", reps: "", weight: "", comment: ""}]},
            //     {day: "Пятница", exercises: [{name: "", sets: "", reps: "", weight: "", comment: ""}]},
            //     {day: "Суббота", exercises: [{name: "", sets: "", reps: "", weight: "", comment: ""}]},
            //     {day: "Воскресенье", exercises: [{name: "", sets: "", reps: "", weight: "", comment: ""}]},
            // ],
            column_width: "300px",
        }
    },
    methods: {
        
        saveProgram() {
            this.$emit("save", this.program)
        },
    },
    emits: ["save"],
    computed: {

    },
    watch: {
        programIndex: {
            handler(newVal, oldVal) {
                console.log(newVal, oldVal)
                if (newVal > oldVal) this.weekChangeDirection = 1
                else if (newVal < oldVal) this.weekChangeDirection = -1
            },
            immediate: true
        }
    }
}
</script>

<style lang="scss" scoped>
$direction: v-bind(weekChangeDirection);
.builder-enter-from {
    opacity: 0;
    translate: calc($direction * (100px));
    // translate: -100px;
}
.builder-leave-to {
    opacity: 0;
    translate: calc($direction * (-100px));
    // translate: 100px;
}
.builder-enter-active, .builder-leave-active {
    transition: 0.6s;
}
</style>