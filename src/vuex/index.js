import Vue from 'vue';
import Vuex from 'vuex';
import Http from '@/API/http'

const http = new Http();

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        post: {
            page: 0
        }
    },
    actions: {
        async getPosts({ commit, state },page) {

            // let resp = await http.createUrl({'Content-Type': 'application/json'},`${page}`,"post","posts");
            
            // console.log("actionLog statrted== ", resp );
            let posts = [1,2];

            commit('posts',{posts: posts, page: page});
            
        },
        async updatePost(data) {
             let resp = await http.createUrl({'Content-Type': 'application/json'}, data,"post","posts12");
            
            console.log("actionLog statrted== ", resp );
        }
    },
    mutations: {
        posts(state, data) {
            state.post.page = data.page;
            state.posts = data.posts;
        }
    },
    getters: {
        page: s => s.post.page 
    },  
    modules: {}
})

export default store;