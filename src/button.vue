<template>
    <button class="button" v-bind:class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')" >
        <g-icon v-if="icon && !loading" :name="icon"></g-icon>
        <g-icon class="icon loading" name="icon-loading" v-if="loading"></g-icon>
       <span class="tx"><slot></slot></span>
    </button>
</template>

<script>
    export default {
        name:'GuluButton',/*name的作用是帮助开发者使用开发者具时进行标签命名*/
   /*   props:['icon','iconPosition']*//*第一种props写法*/
        props:{
            icon:{},
            loading:{
                type:Boolean,
                default:false
            },
            iconPosition:{
                type:String,
                default:'left',
                validator(value){
                    return !(value !== 'left' && value !== 'right');
                },/*用户给你的值 ,属性的检查器*/

            }
        }
    }
</script>

<style>

    .button{padding:5px 10px; color:#333;vertical-align: top;
        align-items: center;
        display: inline-flex; justify-content: center;}
    .button .tx{order: 2}
    .button .icon{order: 1}
    .button.icon-right .tx{order: 1}
    .button.icon-right .icon{order: 2}
    @keyframes loading {
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
.loading{ animation: loading 2s infinite linear;}

</style>