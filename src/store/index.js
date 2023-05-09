import { createStore } from 'vuex'
import { auth } from '@/store/auth'
import { popUps } from '@/store/popUps'
import { userInfo } from '@/store/userInfo'
import { libs } from '@/store/libs'

const store = createStore({
  modules: {
    auth: auth,
    popUps: popUps,
    userInfo: userInfo,
    libs: libs,
  }
})

export default store