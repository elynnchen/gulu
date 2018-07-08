<template>
        <svg  class="icon"> <use v-bind:xlink:href="`#${name}`"></use></svg>
</template>

<script>
 export default{
     name:'GuluIcon',
     props:['name']
 }
</script>

<style>
    .icon{width:16px;height:16px; vertical-align: top; margin:0 2px; }
</style>