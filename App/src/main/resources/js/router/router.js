import Vue from 'vue'
import VueRouter from 'vue-router'
import MessagesList from 'js/pages/MessageList.vue'
import Auth from 'js/pages/Auth.vue'
import Profile from 'js/pages/Profile.vue'
import Subscriptions from 'pages/Subscriptions.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: MessagesList },
    { path: '/auth', component: Auth },
    { path: '/user/:id?', component: Profile },
    { path: '/subscriptions/:id', component: Subscriptions },
    { path: '*', component: MessagesList },
]

export default new VueRouter({
    mode: 'history',
    routes
})