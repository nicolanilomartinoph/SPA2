require('./bootstrap');
import Vue from 'vue'
import router from './router'
import Vuelidate from "vuelidate";

Vue.component(
    'passport-clients',
    require('./components/passport/Clients.vue').default
);

Vue.component(
    'passport-authorized-clients',
    require('./components/passport/AuthorizedClients.vue').default
);

Vue.component(
    'passport-personal-access-tokens',
    require('./components/passport/PersonalAccessTokens.vue').default
);

Vue.use(Vuelidate)

const app = new Vue({
    el: '#app',
    router,
    template:
        `<div class="container">
        <passport-clients />
        <passport-authorized-clients />
        <passport-personal-access-tokens />
            <router-view>
                
            </router-view>
        </div>`
});

// Encryption keys generated successfully.
// Personal access client created successfully.
// Client ID: 1
// Client secret: Vf3XKfuYpocKS7Vby3jhVCyRVx8SAFYel8ddJ7Xa

// Password grant client created successfully.
// Client ID: 2
// Client secret: 1tKu0JXEe3h6P8Jvq5OzR4EOFfI8yiOCeUhcxDvp

