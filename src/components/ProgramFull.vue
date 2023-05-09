<template>
    <div>
    <cycle-detail-pop-up v-if="$store.state.popUps.cycleDetail"/>
    <transition mode="out-in" name="full">
        <div :key="cycle_id" class="container">
            <div @dragover="overDrag" @dragenter.prevent @dragover.prevent ref="weeks" class="weeks">
                <div
                draggable="true"
                @dragstart="startDrag($event, i)"
                @dragend="endDrag"
                @click="currentWeek = i"
                v-for="(week, i) in cycleWeeks"
                :key="week.id"
                :class="{current: i == currentWeek, dragging: weekDragging && weekDragIndex === i}"
                class="week">{{ week.time_start }}</div>
                <div v-if="!weekDragging" @click="addWeek" class="week add">+</div>
                <div v-else @drop="deleteWeek" @dragenter.prevent @dragover.prevent class="week bin">DELETE</div>
                <div class="settings" @click="$store.commit('popUps/setCycleDetail', cycle_id)">SETTINGS</div>
            </div>
            
        <program-builder
        :programIndex="currentWeek"
        v-slide="slideWeeks"
        v-model:program="cycleWeeks[currentWeek].weekly_program"/>
        
        <my-button @click="cycleSave">Confirm</my-button>
        </div>
    </transition>
    </div>
</template>

<script>
import axios from 'axios';
import draggable from 'vuedraggable'
import ProgramBuilder from './ProgramBuilder.vue';
import CycleDetailPopUp from './CycleDetailPopUp.vue';
import misc from '@/misc'
export default {
    components: {
        ProgramBuilder, draggable, CycleDetailPopUp
    },
    props: {
        cycle_id: {Number},
    },
    data() {
        return {
            cycleWeeks: [
            "some", "another", "other",
            "some", "another", "other",
            "some", "another", "other",

            ],
            currentWeek: 0,
            touch: {
                start: 0,
                end: 0,
            },
            weekDragging: false,
            weekDragIndex: 0,
        }
    },
    methods: {
        async fetchWeeks(cycle_id) {
            await axios.get('http://127.0.0.1:8000/api/tprograms/get_cycle_programs/',
            {params: {cycle_id: cycle_id}})
                .then((resp) => {
                    this.cycleWeeks = resp.data;
                })
                .catch(ex => console.log(ex))
        },
        async cycleSave() {
            await axios.post('http://127.0.0.1:8000/api/tprograms/save_cycle_programs/', 
            {cycle: this.cycleWeeks, cycle_id: this.cycle_id})
                .then((resp) => {

                })
                .catch(ex => console.log(ex))
        },
        slideWeeks(direction) {
            if (direction.x) {
                if (direction.x > 0 && this.currentWeek < this.cycleWeeks.length - 1) this.currentWeek++
                else if (direction.x < 0 && this.currentWeek > 0) this.currentWeek--
            }
        },
        addWeek() {
            const lastWeek = this.cycleWeeks.at(-1)
            const formatter = new Intl.DateTimeFormat("ru", {
                year: "numeric", month: "2-digit", day: "2-digit"
            })
            let time_start = new Date(lastWeek.time_start)
            let time_finish = new Date(lastWeek.time_finish)
            time_start.setDate(time_start.getDate() + 7)
            time_finish.setDate(time_finish.getDate() + 7)
            time_start = time_start.toISOString().split('T')[0]
            time_finish = time_finish.toISOString().split('T')[0]
            const newWeek = structuredClone(lastWeek)
            newWeek.id++
            newWeek.time_start = time_start
            newWeek.time_finish = time_finish
            newWeek.weekly_program = structuredClone(misc.WeeklyProgram)
            this.cycleWeeks.push(newWeek)
            console.log(this.cycleWeeks);
        },
        startDrag(event, weekIndex) {
            this.weekDragIndex = weekIndex
            this.weekDragging = true
            event.dataTransfer.dropEffect = 'move'
            event.dataTransfer.effectAllowed = 'move'
            event.dataTransfer.setData('weekIndex', weekIndex)
        },
        endDrag(event) {
            this.weekDragging = false
        },
        overDrag(event) {
            console.log(event)
            const weeks_container = this.$refs.weeks
            let week = weeks_container.querySelector(".dragging")
            let weeks = [...weeks_container.querySelectorAll(":not(.dragging)")]
            let nextWeek = weeks.find(el => {
                return event.clientX <= el.offsetLeft + el.offsetWidth / 2
            })
            weeks_container.insertBefore(week, nextWeek)
            console.log(nextWeek)
        },
        deleteWeek(event) {
            let weekIndex = event.dataTransfer.getData('weekIndex')
            console.log(weekIndex)
            this.cycleWeeks = this.cycleWeeks.filter((val, i) => i != weekIndex ? val : null)
        },
    },
    watch: {
        cycle_id: {
            handler(cycle_id) {
                this.fetchWeeks(cycle_id)
                console.log("Watcher cycle_id here")
            }
        },
    },
    
}
</script>

<style lang="scss" scoped>
// $direction: v-bind(weekChangeDirection);
.container {
    width: 100%;
    height: 100%;
    // background: #e2cfcf;

}
.weeks {
    width: 100%;
    height: fit-content;
    display: flex;
    margin-bottom: 10px;
    overflow-x: scroll;
    // flex-wrap: wrap;
}
.week {
    height: 40px;
    width: 90px;
    min-width: 70px;
    border: 1px solid #000;
    border-left: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
}
.week:nth-child(1) {
    border-left: 1px solid #000;
}
.current {
    background: darkcyan;
}
.add {
    background: #444;
}
.bin {
    background: rgb(214, 22, 22);
}
.full-enter-from{
    opacity: 0;
    translate: 0 100px;
}
.full-leave-to {
    opacity: 0;
    // translate: 0 100px;
}
.full-enter-active, .full-leave-active {
    transition: 0.4s;
}
.dragging {
    opacity: 0.5;
    background: #000;
}
.settings {
    align-self: flex-end;
    cursor: pointer;
}
</style>