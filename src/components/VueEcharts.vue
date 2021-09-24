<template>
    <div :id="uuid" :style = "style"></div>
</template>

<script>

import * as echarts from 'echarts'

const idGen =  () => {
    return new Date().getTime()
}

export default{
    props:{

        height:{
            type:String,
            default:'400px'
        },
        width:{
            type:String,
            default:'600px'
        },
        options:{
            type:Object,
            default:null
        }

    },

    data(){
        return{
            uuid:null,     
            myChart:null
        }
    },

    watch:{
        width(){
            if(this.myChart){
                this.myChart.resize({
                    animation:{
                        duration:300
                    }
                })
            }
        },
        options(){
            if(this.myChart){
                this.myChart.setOption(this.options,{
                    notMerge:true
                })
            }
        }
    },

    computed:{
        style(){
            return{
                height:this.height,
                width:this.width
            }
        }
    },

    created(){
        this.uuid = idGen()
    },
    
    mounted(){
        this.myChart = echarts.init(document.getElementById(this.uuid));

        this.myChart.setOption(this.options);

        const _this = this
        this.myChart.on('click', function(params) {
            _this.touch(params)
        });
    
    },

    methods:{
        touch(params){
            this.$emit('touch', params)
        }
    }

  }
</script>
