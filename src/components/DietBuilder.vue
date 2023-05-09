<template>
    <div class="container">
    <div class="card">
        <diet-info class="block info"/>
        <!-- <div class="block allowed">
            Предпочтительные продукты
            <div class="add-button">Добавить:</div>
        </div> -->
        <!-- TODO добавить удаление по свайпу ил нажатию с подтвержением прямо из листа -->
        <diet-products class="block allowed">Предпочтительные продукты</diet-products>
        <diet-products class="block forbidden">Запрещённые продукты</diet-products>
        
        <diet-main class="block main"/>
        <div class="block dishes">
            Блюда для примера
            <div class="add-button">Добавить:</div>
        </div>
        <diet-days-reference class="block days">Примерный дневной рацион</diet-days-reference>
    </div>
    </div>
</template>

<script>
import DietProducts from '@/components/diet/DietProducts.vue';
import DietInfo from './diet/DietInfo.vue';
import DietMain from './diet/DietMain.vue';
import DietDaysReference from './diet/DietDaysReference.vue';
export default {
    components: {
        DietProducts, DietInfo, DietMain, DietDaysReference,
    }
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}
.card {
    display: grid;
    width: 90%;
    height: 90vh;
    background: #555;
    border-radius: 20px;
    grid-template-columns: repeat(16, 1fr);
    grid-template-rows: repeat(16, 1fr);
    gap: 20px;
    padding: 10px;
}
.block {
    background: #222;
    border-radius: 20px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.info {
    grid-column: 6/12;
    grid-row: 1/5;
    background: #d3d494;
}
.info > h3 {
    margin-top: auto;
    margin-bottom: auto;
}
.allowed {
    grid-column: 1/6;
    grid-row: 1/9;
    background: #6e9147;
}
.forbidden {
    grid-column: 1/6;
    grid-row: 9/17;
    background: #a34e4e;
}
.days {
    grid-column: 6/12;
    grid-row: 5/17;
    background: #c1b8ec;
    justify-content: space-between;
}
// .main {
    // grid-column: 6/12;
    // grid-row: 5/17;
    // background: #c1b8ec;
    // justify-content: space-between;
// }
.dishes {
    grid-column: 12/17;
    grid-row: 1/8;
    background: #549682;
}
.main {
    grid-column: 12/17;
    grid-row: 8/17;
    background: #94c9da;
}
// .days {
//     grid-column: 12/17;
//     grid-row: 8/17;
//     background: #94c9da;
// }
TODO вынести кнопку в UI при рефакторинге в FSD
.add-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80px;
    border: 2px solid #000;
    border-radius: 20px;
    margin-top: auto;
    cursor: pointer; 
}
</style>