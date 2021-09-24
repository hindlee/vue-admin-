<template>
    <div>
        <el-dialog
            title="已租工位"
            :visible=true
            width="1200px"
            :before-close="handleClose"
        >
            <el-table :data="tableData">
                <template v-for="(item, index) in itemName">
                    <el-table-column :label="item" :prop="item"></el-table-column>
                </template>
            </el-table>           
        </el-dialog>
    </div>
</template>
<script>
  export default {
      props:['tableData'],

      data() {
          return {
              itemName: null
          };
      },
      mounted() {
          this.itemName=Object.keys(this.tableData[0])
      },
      methods: {
          handleClose(done) {
              this.$emit('close')
              done()
          },
      }
  };
</script>
