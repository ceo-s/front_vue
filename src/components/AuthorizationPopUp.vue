<template>
    <transition name="appear">
    <div v-if="$store.state.popUps.auth">
        <pop-up-back @update:visible="close">
        <pop-up class="popup">
            <div class="buttons">
                <my-button :class="{hide: !login}" @click="login = true">Login</my-button>
                <my-button :class="{hide: login}" @click="login = false">Registration</my-button>
            </div>
            <transition :name="currentChoice" mode="out-in">
            <login-form v-if="login"/>
            <registration-form v-else/>
            </transition>
        </pop-up>
        </pop-up-back>
    </div>
    </transition>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';
import RegistrationForm from '@/components/RegistrationForm.vue';
export default {
    data() {
        return {
            login: true,
            popOutSize: "width: 75%; height: 350px; padding-bottom: 20px; min-width: 300px;",
        }
    },
    components: {
        LoginForm, RegistrationForm
    },
    props: {
        
    },
    methods: {
        close() {
            this.$store.commit('popUps/setAuth', false)
        },
        highlight() {
            
        }
    },
    computed: {
        currentChoice() {
            let choice = this.login ? "login" : 'registration'
            return choice
        }
    }
}
</script>

<style scoped>
.popup {
    width: 75%;
    height: 350px;
    padding-bottom: 20px;
    min-width: 300px;
}
.buttons {
    display: flex;
    justify-content: center;

}
.hide {
    opacity: 0.5;
}
.appear-enter-from,
.appear-leave-to {
    opacity: 0;
}
.appear-enter-active,
.appear-leave-active {
    transition: 0.5s;
}

.login-enter-from {
    opacity: 0;
    translate: -15px;
}
.login-leave-to {
    opacity: 0;
    translate: 15px;
}
.login-enter-active{
    transition: 0.5s;
}
.login-leave-active {
    transition: 0.2s;
}
.registration-enter-from {
    opacity: 0;
    translate: 15px;
}
.registration-leave-to {
    opacity: 0;
    translate: -15px;
}
.registration-enter-active{
    transition: 0.5s;
}
.registration-leave-active {
    transition: 0.2s;
}
</style>