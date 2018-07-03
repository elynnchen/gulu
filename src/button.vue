<template>
    <button class="button" v-bind:class="{[`icon-${iconPosition}`]:true}">
        <svg v-if="icon" class="icon"> <use v-bind:xlink:href="`#${icon}`"></use></svg>
       <span class="tx"><slot></slot></span>
    </button>
</template>

<script>
    export default {
   /*   props:['icon','iconPosition']*//*第一种props写法*/
        props:{
            icon:{},
            iconPosition:{
                type:String,
                default:'left',
                validator(value){
                    if(value!=='left'&& value=='right'){
                        return false
                    }
                    else {
                        return true
                    }

                }/*用户给你的值 ,属性的检查器*/
            }
        }

    }
</script>

<style>
    .icon{width:16px;height:16px; vertical-align: top; fill: red;}
    .button{padding:5px 10px; color:#333;vertical-align: top;
        align-items: center;
        display: inline-flex; justify-content: center;}
    .button .tx{order: 2}
    .button .icon{order: 1}
    .button.icon-right .tx{order: 1}
    .button.icon-right .icon{order: 2}

</style>