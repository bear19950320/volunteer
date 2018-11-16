import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

export default new vuex.Store({
    scoreData:{
        score: 0,
        subject: '文科',
        position: 0
    }
})