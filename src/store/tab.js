import Vue from 'vue';
import Vuex,{Store} from 'vuex';

// import state from './state';

// 使用
Vue.use(Vuex);

const store = new Store({
    //公共数据
    state:{
        list: [],
        cartlist: []
    },

    getters:{

    },

    // 定义state的修改方式：mutations
    mutations:{
        // 添加商品
        addCartList(state, goods){
            state.cartlist.push(goods);
        },

        // 已添加购物车，修改数量
        changeQty(state, {qty, item_id}){
            state.cartlist.forEach(goods=>{
                if(goods.item_id == item_id){
                    goods.qty = qty;
                }
            });
        }
    },

    actions:{

    }
})

export default store;