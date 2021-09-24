<template>
    <div>
        <MyEcharts :options="options" :width="width" :height='height' v-on:touch='csle'></MyEcharts>
        <el-button @click="changeWidth">changeWidth</el-button>
        <el-button @click="changeOpt">changeOpt</el-button>
    </div>
</template>

<script>
import MyEcharts from  '@/components/VueEcharts.vue'
import { options } from './options.js'
import { Message } from 'element-ui'
export default {
  name: 'manage',
 
  components:{
      MyEcharts
  },
  data(){
      return{
         options:options,
         width:'1000px',
         height:'800px'
      }
  },
  methods:{
      changeWidth(){
          if(this.width=='600px'){
              this.width='800px'
          }else{
              this.width='600px'
          }
      },
      changeOpt(){
          /* if(this.options==options1){ */
          /*     this.options=options2 */
          /* }else{ */
          /*     this.options=options1 */
          /* } */
      },
      csle(params){
          Message({
              type: 'warning',
              message:params.name
          })
      }
  }
}
</script>

