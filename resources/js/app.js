require('./bootstrap');
import Vue from 'vue'
import router from './router'
import Vuelidate from "vuelidate";

Vue.use(Vuelidate)

const app = new Vue({
    el: '#app',
    router,
    template:
        `<div class="container">
            <router-view>
                
            </router-view>
        </div>`
});

