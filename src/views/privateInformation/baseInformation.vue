<template>
    <div>
        <div style = "padding: 25px">
            <el-button type = "primary"  @click = "getInformation1()">个人基本信息采集</el-button>
            <el-button type = "primary"  @click = "getInformation2()">个人技能信息采集</el-button>
        </div>
        <el-dialog
            title = "提示"
            :visible.sync="dialogVisible1"
            width = "30%"
            :before-close = "handleClose">

            <el-form ref = "form" label-width = "80px">
                <el-form-item style = "width: 300px" label = "姓名">
                    <el-input  v-model = "name"></el-input>
                </el-form-item>
                <el-form-item label = "性别">
                    <el-select style = "width: 100px" v-model = "gender" placeholder = "请选择性别">
                        <el-option label = "男" value = "man"></el-option>
                        <el-option label = "女" value = "woman"></el-option> 
                    </el-select>
                </el-form-item>
                <el-form-item style = "width: 300px" label = "年龄">
                    <el-input v-model ="age"></el-input>
                </el-form-item>
            </el-form>

            <span slot = "footer" class = "dialog-footer">
                <el-button @click = "dialogVisible1 = false">取 消</el-button>
                <el-button type = "primary" @click = "dialogVisible1 = false">确 定</el-button>
            </span>
        </el-dialog>
        <el-dialog
            title = "提示"
            :visible.sync = "dialogVisible2"
            width = "30%"
            :before-close = "handleClose">

            <el-form ref = "form" label-width = "80px">
                <el-form-item style = "width: 300px" label = "技能">
                    <el-input v-model = "ability"></el-input>
                </el-form-item>
            </el-form>

            <span slot = "footer" class = "dialog-footer">
                <el-button @click = "dialogVisible2 = false">取 消</el-button>
                <el-button type = "primary" @click = "dialogVisible2 = false">确 定</el-button>
            </span>
        </el-dialog>

        <el-divider></el-divider>
        
        <el-form ref = "form" label-width = "80px">
            <el-form-item style = "width: 300px" label = "姓名">
                <el-input disabled v-model = "name"></el-input>
            </el-form-item>
            <el-form-item label = "性别">
                <el-select disabled style = "width: 100px" v-model = "gender" placeholder = "请选择性别">
                    <el-option label = "男" value = "man"></el-option>
                    <el-option label = "女" value = "woman"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item style = "width: 300px" label = "年龄">
                <el-input disabled v-model = "age"></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import store from '@/store/modules/information'
import { Message } from 'element-ui';
import { mapGetters } from 'vuex'
export default {
    name: 'information',
    data() {
        return {
            dialogVisible1: false,
            dialogVisible2: false,
        }
    },
    computed: {
        name: function(){
            return store.state.name
        },
        gender: function(){
            return store.state.gender
        },
        age: function(){
            return store.state.age
        },
        ability: function(){
            return store.state.ability
        },
        ...mapGetters([
            'id',
            'token'
        ])
    },
    created() {
        const id = this.id
        const token = this.token
        const param = { id, token }
        this.$store.dispatch('information/getInformation', param)
    },
    methods: {
        handleClose(done) {
        },
        getInformation1() {
            this.dialogVisible1 = true
        },
        getInformation2() {
            this.dialogVisible2 = true
        },

        onSubmit() {
            console.log(store)
            console.log('submit!');
        },
        change(){
            console.log("change")
        }
    }
}
</script>

