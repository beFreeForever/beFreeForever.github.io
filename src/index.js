import vue from 'vue';
import vuetify from 'vuetify';
import vueRouter from 'vue-router';
import app from './app.vue';
import index from './index.vue';
import info from './info.vue';

vue.use(vuetify);
vue.use(vueRouter);

let router = new vueRouter({
    routes: [
        { path: '/', component: index },
        { path: '/Info', component: info },
    ]
});

new vue({
    router: router,
    components: {
        'index': index
    },
    el: '#app',
    render: h => h(app)
})
