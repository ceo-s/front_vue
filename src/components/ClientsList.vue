<template>
    <div>
        <div class="managment">
            <div style="width: 80%;">
                <my-input v-model="searchQuery" :placeholder="'Search:'"/>
                <filter-select/>
            </div>
            <div>
                <sort-select/>
            </div>
        </div>
        <list-display :column_width="column_width">
            <div v-for="client in clients" :key="client.id" class="client-card">
                <div class="photo-container">
                    <img src="" alt="">
                </div>
                <div class="content">
                    <h1>{{ client.name }}</h1>
                    <h2>{{ client.telegram }}</h2>
                    <my-button @click="$router.push(`/clients/${client.id}`)">Open</my-button>
                </div>
            </div>
        </list-display>
    </div>
</template>

<script>
import axios from 'axios';
import FilterSelect from '@/components/FilterSelect.vue'
import SortSelect from '@/components/SortSelect.vue';
import { mapState } from 'vuex';
export default {
    components: {
        FilterSelect, SortSelect,
    },
    data() {
        return {
            column_width: "600px",
        }
    },

    computed: {
        ...mapState({
            clients: state => state.userInfo.clients,
        }),
    },        
}
</script>

<style lang="scss" scoped>
$card_width: v-bind(column_width);
$card_height: 200px;
.managment {
    display: flex;
    gap: 20px;
}
.client-card {
    display: flex;
    width: $card_width;
    min-width: 300px;
    height: $card_height;
    background: #333;
}

.photo-container {
    background: #668;
    width: $card_height;
    height: 100%;
}
.content {
    width: calc(100% - $card_height);
    background: #998888;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 15px;
    padding-left: 15px;
}
</style>