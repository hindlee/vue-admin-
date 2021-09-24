<template>
    <div>
        <el-dialog title='租借细节' :visible='dialogFormVisible'>
            <el-form :model="form">
                <el-form-item label="公司名称" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="选择租期" :label-width="formLabelWidth">
                    <el-select v-model="form.time" placeholder="请选择租借时间">
                        <el-option label="一年" value="1"></el-option>
                        <el-option label="两年" value="2"></el-option>
                    </el-select>
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
  name: 'Test',

  props:{
      dialogFormVisible:{
        type: Boolean,
        default: false
      }
  },
 
  data(){
      return{
          form: {
              name:'',
              time:''
          },
          formLabelWidth: '120px'
      }
  },

  methods:{
      close(){
          this.$emit('dialog')
      }
  }
}
</script>
