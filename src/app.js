import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group.vue'
import input from './input.vue'

Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', ButtonGroup);
Vue.component('g-input', input);

new Vue({
    el:'#app',
    data:{
        loading1:false,
        loading2:true,
        loading3:false,
    }
})