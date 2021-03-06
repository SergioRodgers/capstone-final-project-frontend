import { createApp } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import App from './App.vue'
import router from './router'
import 'mdb-ui-kit/css/mdb.min.css';

library.add(fas);
    

import "bootstrap/dist/css/bootstrap.css"

import "bootstrap/dist/js/bootstrap.js"

createApp(App)
.component('fa',FontAwesomeIcon)
.use(router).mount('#app')
