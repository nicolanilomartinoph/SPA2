require('./bootstrap');
import Vue from 'vue'
import router from './router'

const app = new Vue({
    el: '#app',
    router,
    template:
        `<div class="container">
            <router-view>
                
            </router-view>
        </div>`
});



