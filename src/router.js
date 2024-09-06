import {createRouter, createWebHistory} from 'vue-router';
import AppHeader from './components/AppHeader.vue';
import AppHome from './views/AppHome.vue';
import AppMenu from './views/AppMenu.vue';



const router = createRouter({
    history: createWebHistory(),
    routes:[
        
        {
            path:'/',
            name: 'home',
            component: AppHome
        },
        {
            path:'/menu/:restaurant_id',
            name: 'menu',
            component: AppMenu
        },
        {
            path:'/http://127.0.0.1:8000/register',
            name: 'login',
            component: AppHeader
        },
       
    ]
});

export{router};