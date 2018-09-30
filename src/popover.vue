<template>
  <div class="we-popover-group"  ref="popover">
    <!--@click="onclick"-->
    <div ref="popcontwarp" class="we-popover" :class="{[`we-popover--${position}`]:true}" v-if="visible">
      <div class="we-popover-cont">
        <slot name="content" ></slot></div>
    </div>
    <div ref="anthor">
    <slot  ></slot></div>
  </div>
</template>

<script>
  export default {
    name:"WePopover",
    data(){
      return{
          visible:true,
      }
    },

    mounted () {
      if(this.trigger ==='click'){
        this.$refs.popover.addEventListener('click',this.onClick)
          console.log("click点击后执行")

      }else {
        this.$refs.popover.addEventListener('mouseenter',this.open)
          console.log("mouseenter后执行open")
        this.$refs.popover.addEventListener('mouseleave',this.close)
          console.log("mouseleave后执行close")
      }
    },
    destroyed(){//通过绑定Ref事件判断是Click还是mouseenter
      if(this.trigger==='click'){
        this.$refs.popover.removeEventListener('click',this.onClick)
      }else {
        this.$refs.popover.removeEventListener('mouseenter',this.open)
        this.$refs.popover.removeEventListener('mouseleave',this.close)
      }
    },

    props:{
      position:{
            type:String,
          default:'top-left',
          validator(value){
              return['top-left','top-center','top-right',
                  'bottom-left','bottom-center','bottom-right',
                  'left-top','left-center','left-bottom',
                  'right-top','right-center','right-bottom'].indexOf(value)>=0
          }
        },
      trigger:{
          type:String,
        default:'click',
        validator(value){
            return['click','hover'].indexOf(value)>=0
        }
      }
    }
    ,
    methods:{
      onClick(event){
          if(this.$refs.anthor.contains(event.target)){
              console.log('获取点击焦点事件')
              if(this.visible===true){
                  console.log('如果Visible=true执行关闭')
                  this.close()
                  console.log('已关闭')
              }
              else {
                  this.open()
                  console.log('执行打开tips')
              }
          }
      },
      open(){// 打开Tips
        this.visible=true
          console.log('this.visible=true Tips开')
        this.$nextTick(()=>{
          this.positionTips()//显示到目标位置
          console.log('将Tips显示到位置上')
          document.addEventListener('click', this.onclickDocument)//添加监听事件
          console.log('再次监听文档事件')
        })
      },
      close(){
          console.log('执行关闭')
        this.visible=false
          console.log('关')
           document.removeEventListener('click', this.onclickDocument)
      },

      positionTips(){//定位位置
        document.body.appendChild(this.$refs.popcontwarp)
        let{width,height,top,left}=this.$refs.anthor.getBoundingClientRect()//获取按钮坐标位置
        if(this.position==='top-left') {
          this.$refs.popcontwarp.style.left = left + window.scrollX + 'px'
          this.$refs.popcontwarp.style.top = top + window.scrollY + 'px'

        }
         else if(this.position==='bottom-left'){
            this.$refs.popcontwarp.style.left=left + window.scrollX+'px'
            this.$refs.popcontwarp.style.top=top+height+ window.scrollY+'px'
        }
        else if(this.position==='left-top'){
          this.$refs.popcontwarp.style.left=left + window.scrollX+'px'
          let {height:popheight} =this.$refs.popcontwarp.getBoundingClientRect()
          this.$refs.popcontwarp.style.top=top+ window.scrollY-(popheight-height)/2+'px'
        }
        else if(this.position==='right-top'){
          this.$refs.popcontwarp.style.left=left + width+ window.scrollX+'px'
          let {height:popheight} =this.$refs.popcontwarp.getBoundingClientRect()
          this.$refs.popcontwarp.style.top=top+ window.scrollY-(popheight-height)/2+'px'
        }

        }
      ,
        onclickDocument(e){// 监听文档事件
            if(this.$refs.popover&&(this.$refs.popover===e.target || this.$refs.popover.contains(e.target))){return}
            if(this.$refs.popcontwarp&&(this.$refs.popcontwarp===e.target || this.$refs.popcontwarp.contains(e.target))){return}
            console.log('如果点击是Popover外面或Popcontent则不执行关闭')
            this.close()

        }


    }
  }
</script>
<style>
  .we-popover-group{position:relative;margin-top:100px;}
  .we-popover {
    position: absolute;
    padding: 10px 15px 10px 15px;
    border: 1px solid #b2b2b2;
    background: #fff;
    box-shadow: 0 3px 7px -3px rgba(0, 0, 0, 0.2), 0 4px 8px -4px rgba(0, 0, 0, 0.2);
    border-radius: 4px;


  }
  .we-popover-cont {
    color: #333;
    font-size: 12px;
    text-align: left;
  }
  /*默认向下显示箭头*/
  .we-popover:after{content:"";position:absolute;/*top:-12px;left:9px;*/width:30px;height:12px;background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAMCAYAAAB1Lg0yAAABzklEQVQ4T62TMWjCUBCGL5pChQoqAeMm6NAuDi6SwaFb966WCEKtU+kiLXRwKC24lC5SC4K2rt27dXCQTIJLOyi4GSGoYCFDY1Iu5MkzjSaFPjheQt677+7/LwwAMADgAwA/RrVaPUgkEhWWZQ8ZhtmLx+OQTCYhEAiA16WqKgwGAxiNRmAYxpemae/D4bBSLpc/AGCJgVA6EE6KYLGQdrt9kUqlrrGAYDDoyl4sFiaw3+/f5HK5ewukWbsOAGYgFBcNRzAJU4VWq3UWDofvstksEwqFNsLn8zl0Oh1jNptdiaL4SLojMGs3AMAgYAKni6DhbLPZPIlEIg+CIPg5jvsFVxQFut3ucjqdnufz+RcAsHdpAq2La2CSjFZhDd5oNI45jnvKZDI70Wh0BZ9MJiBJ0reiKKeFQuF1AxTPE7Ap8aZFvhE4es7W6/Ujnuef0+n0Ls/zMB6PodfrqbIsi8Vi8c2CYrfEzzWgvTuvcNPzWq0mxGKxW5/Pt6/r+qcsy5elUkly8NQRSvvqNq3kl8OdTD4ZSOIddoi/Cr7j80pWp+TbpLaft08+fZeG0UPk6qNbx06DZwevJtZLsr90TOdzurdVWif5vBT472d+ACCipRMCyz2NAAAAAElFTkSuQmCC');/*-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);-moz-transform:rotate(180deg);transform:rotate(180deg);*/}



  /*无箭头*/
  .we-popover--noarrow:after{display: none;}


  .we-popover--top-left{left: 0;transform:translateY(-100%) ; margin-top:-10px; }
  .we-popover--top-left:after{left:0;}
  .we-popover--top-right{right: 0;bottom: 100%;margin-bottom: 12px;}
  .we-popover--top-center{left: 50%;bottom: 100%;margin-bottom:12px;transform:translate3d(-50%,0,0);}
  .we-popover--top-left:after,
  .we-popover--top-center:after,
  .we-popover--top-right:after{bottom: -12px; }
  .we-popover--top-center:after{left: 50%;margin-left: -15px;}
  .we-popover--top-right:after{right: 10px;}

  .we-popover--bottom-left{margin-top: 12px;}
  .we-popover--bottom-left:after{left:0;}
  .we-popover--bottom-center{left:50%;top:100%;margin-top: 12px;transform:translate3d(-50%,0,0);}
  .we-popover--bottom-right{right:0;top:100%;margin-top: 12px;}
  .we-popover--bottom-left:after,
  .we-popover--bottom-center:after,
  .we-popover--bottom-right:after{top: -12px;transform:rotate(180deg);}
  .we-popover--bottom-center:after{left: 50%;margin-left: -15px;}
  .we-popover--bottom-right:after{right: 10px;}


  .we-popover--left-top{margin-left: -8px; transform:translateX(-100%) ;}
  .we-popover--left-center{right: 100%;top:50%;margin-right: 12px;transform:translate3d(0,-50%,0);}
  .we-popover--left-bottom{right: 100%;bottom: 0;margin-right: 12px;}
  .we-popover--left-top:after,
  .we-popover--left-center:after,
  .we-popover--left-bottom:after{transform:rotate(-90deg);right:-21px;}
  .we-popover--left-top:after{top:12px;}
  .we-popover--left-center:after{top: 50%;margin-top: -7px;}
  .we-popover--left-bottom:after{bottom: 12px;}

  .we-popover--right-top{margin-left:8px;}
  .we-popover--right-center{left: 100%;top:50%;margin-left:12px;transform:translate3d(0,-50%,0);}
  .we-popover--right-bottom{left: 100%;bottom: 0;margin-left:12px;}
  .we-popover--right-top:after,
  .we-popover--right-center:after,
  .we-popover--right-bottom:after{transform:rotate(90deg);left:-21px;}
  .we-popover--right-top:after{top:12px;}
  .we-popover--right-center:after{top: 50%;margin-top: -7px;}
  .we-popover--right-bottom:after{bottom: 12px;}

</style>
