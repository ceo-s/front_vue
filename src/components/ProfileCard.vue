<template>
    <div class="container">
        <div class="info">
            <h1>{{ profileInfo.name }}</h1>
            <h1>{{ profileInfo.user }}</h1>
            <h1>{{ profileInfo.bio }}</h1>
        </div>
        <img class="avatar" :src="profileInfo.profile_pic">
    </div>
</template>

<script>
import axios from 'axios';
import { mapActions, mapState } from 'vuex'
export default {
    computed: {
        ...mapState({
                profileInfo: state => state.userInfo.profileInfo,
            }),
    }
}
</script>

<style lang="scss" scoped>
.container {
    height: 100vh;
    width: 100%;
}
.avatar {
    height: auto;
    // width: 10%;
    width: 50%;
}
</style>