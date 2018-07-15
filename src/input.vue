<template>
      <div class="g-input-wp">
            <input :value="value"
                   :disabled="disabled"
                   type="text"
                   class="g-input"
                   :class="{error}"
                   @change="$emit('change',$event.target.value)"
                   @input="$emit('input',$event.target.value)"
                   @focus="$emit('focus',$event.target.value)"
            />
            <template v-if="error">
      <icon name="icon-search" ></icon><span>{{error}}</span>
            </template>
      </div>
</template>

<script>
      import Icon from  './icon'
 export default{
     components:{Icon},
     name:'GuluInput',
     props:{
         value:{
             type:String,
         },
         disabled:{
             type:Boolean,
             default:false,
         },
         error:{
             type:String

         }
     }

 }
</script>

<style>
   .g-input-wp{display: inline-block;}
   .g-input{height: 32px; padding:1px 3px; border:1px solid #999; font-size: 14px; display: inline-block;}
   .g-input:hover{ border:1px solid #666;}
   .g-input:focus{ border:1px solid #333;outline: none}
   .g-input[disabled]{ border:1px solid #ccc;outline: none; cursor: not-allowed;}
   .g-input.error{ border:1px solid #f1453d;}
</style>