<template>
<div class="g-button-group"><slot></slot></div>
</template>

<script>
    export default{
        mounted(){
            for(let node of this.$el.children){
                if(node.nodeName.toLocaleLowerCase() !=='button'){
                    console.warn('g-button-group的子元素应是Button')
                }
            }


        }/*当button-group组件出现在在页面时会触发一个函数,检测组件不允许外包Dome结构*/
    }

</script>

<style>
.g-button-group{
    vertical-align: middle;
}
.g-button-group .button{border-radius:0; float:left; margin-left:-1px;}

.g-button-group:after{ content: ''; clear: both; height: 1px; display: block;}
</style>