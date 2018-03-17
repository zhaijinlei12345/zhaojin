import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
// 数据管理，状态
const state = {
    count:1
};
// 修改状态，可以进行同步操作，一般不会写其他操作在里面
const mutations={
    add(state,number){
        state.count+=number;
    },
    reduce(state){
        state.count--;
    }
};
// 相当于计算属性，依赖state中的数据，返回新的数据
const getters = {
    count2(state){
        return state.count+=100;
    }
};
// actions可以进行异步操作,可以写一些逻辑操作
const actions = {
     addAction({commit}){
         commit('add',10);
         commit('reduce');
     },
     reduceAction({commit}){
         commit('reduce');
     }
}; 

//相当于向外的接口
export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
   
})