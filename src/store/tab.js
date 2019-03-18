import Vue from 'vue';
import Vuex,{Store} from 'vuex';

// import state from './state';

// 使用
Vue.use(Vuex);

const store = new Store({
    //公共数据
    state:{
        list:[]
    }
})

export default store;