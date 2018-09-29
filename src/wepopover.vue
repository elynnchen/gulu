<template>
  <div class="weui-demo" >
    <h1 class="weui-demo-tit">we-Popover</h1>
    <div class="weui-demo-item">
      <h2 class="weui-demo-item-hd">基本样式</h2>
      <div class="weui-demo-item-bd">
        <div class="box">
          <h1>Click出TIPS</h1>
          <we-popover position="top-left"  trigger="click">
            <template slot="content" >
              我是TIPS内容
            </template>
              <button>向上弹出Tips</button>
          </we-popover>
          <we-popover position="bottom-left" trigger="click" >
            <template slot="content" >
              我是TIPS内容
            </template>
            <button>向下弹出Tips</button>
          </we-popover>
          <we-popover position="left-top" trigger="click" >
            <template slot="content" >
              我是TIPS内容
            </template>
            <button>向左弹出Tips</button>
          </we-popover>
          <we-popover position="right-top" trigger="click" >
            <template slot="content" >
              我是TIPS内容
            </template>
            <button>向右弹出Tips</button>
          </we-popover>
        </div>
        <div class="box">
          <h1>Hover出TIPS</h1>
          <we-popover position="top-left" trigger="hover" >
            <template slot="content" >
              我是TIPS内容
            </template>
            <button>向上弹出Tips</button>
          </we-popover>
          <we-popover position="bottom-left" trigger="hover" >
            <template slot="content" >
              我是TIPS内容
            </template>
            <button>向下弹出Tips</button>
          </we-popover>
          <we-popover position="left-top" trigger="hover" >
            <template slot="content" >
              我是TIPS内容
            </template>
            <button>向左弹出Tips</button>
          </we-popover>
          <we-popover position="right-top" trigger="hover" >
            <template slot="content" >
              我是TIPS内容
            </template>
            <button>向右弹出Tips</button>
          </we-popover>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import WePopover from 'weui/tips/popover'
export default {
  name: 'popover',
  components:{
    WePopover
  },
  methods:{

  }

}

</script>


<style>
  .box{min-height: 100px;}
  button{background: #f1f1f1;padding:3px;border:1px solid #ccc;}
  .we-popover-group{display: inline-block;}
  h1{margin-top:30px;font-size: 18px; display: inline-block}

</style>
