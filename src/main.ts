import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import './registerServiceWorker'
import Vuex from 'vuex';

import firebase from 'firebase/app';

// https://shakee93.github.io/vue-toasted/
import Toasted from 'vue-toasted';

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

// @ts-ignore
Vue.use(Toasted, {
    position: 'top-right',
    iconPack: 'fontawesome',
    duration: 2000
});

// bulma UI framework for Vue https://buefy.org/documentation/button
// import Buefy from 'buefy';
// import 'buefy/dist/buefy.min.css';
// Vue.use(Buefy);
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.slim.min';

import 'bootstrap/dist/js/bootstrap.min';

Vue.use(BootstrapVue);

import '@/assets/app-layout.scss';
import '@/assets/custom.css';
import VueLogger from 'vuejs-logger';
import {fauth} from "@/firebase";
import {store} from "@/store/store";


Vue.use(VueLogger, {
    logLevel: process.env.NODE_ENV === 'production' ? 'error' : 'debug',
});

Vue.config.productionTip = false;
Vue.config.devtools = process.env.NODE_ENV !== 'production';

import VModal from 'vue-js-modal'

Vue.use(VModal);

import Datetime from 'vue-datetime'
// You need a specific loader for CSS files
import 'vue-datetime/dist/vue-datetime.css'

Vue.use(Datetime)


import VuejsDialog from 'vuejs-dialog';


// include the default style
import 'vuejs-dialog/dist/vuejs-dialog.min.css';

// Tell Vue to install the plugin.
Vue.use(VuejsDialog);

/*
By default, the plugin will use "modal" name for the component.
If you need to change it, you can do so by providing "componentName" param.

Example:

Vue.use(VModal, { componentName: "foo-modal" })
...
<foo-modal name="bar"></foo-modal>
*/

import 'moment/locale/vi';
import * as moment from "moment";
moment.locale('vi');

Vue.config.productionTip = false


// Wrap the vue instance in a Firebase onAuthStateChanged method
// This stops the execution of the navigation guard 'beforeEach'
// method until the Firebase initialization ends
firebase.auth().onAuthStateChanged(function (user) {
    new Vue({
        router,
        store,
        render: h => h(App)
    }).$mount('#app');
});
// fauth.onAuthStateChanged(async user => {
//     if (user) {
//         this.currentUser = firebase.auth().currentUser; //await new User().getCurrentUser();
//     } else {
//         this.currentUser = null;
//         this.$router.push('/login');
//     }
// })
