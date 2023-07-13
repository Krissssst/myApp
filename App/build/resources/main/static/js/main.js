import Vue from 'vue'
import VueResource from 'vue-resource'
import App from 'pages/App'

Vue.use(VueResource)

new Vuew({
    el: '#app',
    render: a => a(App)
})
