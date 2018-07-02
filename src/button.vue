<template>
    <button class="button" v-bind:class="{[`icon-${icon-postion}`]:true}">
        <svg v-if="icon" class="icon"> <use v-bind:xlink:href="`#${icon}`"></use></svg>
       <span class="tx"><slot></slot></span>
    </button>
</template>

<script>
    export default {
       props:['icon','IconPosition']
    }
</script>

<style>
    .icon{width:16px;height:16px; vertical-align: top;}
    .button{padding:5px 10px; color:#333;vertical-align: top;
        align-items: center;
        display: inline-flex; justify-content: center;}
    .button .tx{order: 2}
    .button .icon{order: 1}
    .button.icon-right .icon{order: 2}
    .button.icon-right .tx{order: 1}
</style>