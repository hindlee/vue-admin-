<template>
    <div>
        <el-dialog 
            title="工位信息"
            v-if="dialogFormVisible" 
            :visible=true
            :before-close="close"
        >
            <el-form :model="form">
                <el-form-item v-for='title in label' :label="title[0]"  :label-width="formLabelWidth">
                    {{title[1]}}
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="close">取 消</el-button>
                <el-button type="primary" @click="close">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>

export default {

  name: 'nodeInfo',
 
  props:{

      dialogFormVisible:{
        type: Boolean,
        default: false
      },
 
      nodeInfo:{
          type: Object,
          default: null
      }
  },

  data(){
      return{
          formLabelWidth:'300px',
          label: []
      }
  },

  watch:{
      nodeInfo(data){
      }
  },

  computed:{
      form(){
          this.label=[]
          Object.entries(this.nodeInfo).forEach((item) => {
              if(item[0] !== 'children'){
                  this.label.push(item)
              }
          })
          return this.nodeInfo
      }
  },

  methods:{
      close(){
          this.$emit('changeVisibleNodeInfo')
      }
  }
}
</script>

