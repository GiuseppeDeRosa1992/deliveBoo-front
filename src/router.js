import {createRouter, createWebHistory} from 'vue-router';
import AppHome from './views/AppHome.vue';
import App from './App.vue';
import AppHeader from './components/AppHeader.vue';

const router = createRouter({
    history: createWebHistory(),
    routes:[
        
        {
            path:'/',
            name: 'home',
            component: AppHeader
        },
        {
            path:'/http://127.0.0.1:8000/login',
            name: 'login',
            component: AppHeader
        },
        {
            path:'/http://127.0.0.1:8000/register',
            name: 'login',
            component: AppHeader
        },
       
    ]
});

export{router};