<template>
    <div>
        <el-dialog v-if='visible' :visible=true>
            <el-form  ref="form" :model="form" label-width="80px">
                <el-form-item label="地点名称">
                    <el-input v-model="form.label"></el-input>
                </el-form-item>
                <el-form-item label="出租">
                    <el-select v-model="form.isRented" placeholder="是否已经出租">
                        <el-option label="是" value= '1' ></el-option>
                        <el-option label="否" value= '' ></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item v-if='form.isRented' label="公司联系人">
                    <el-input v-model="form.linkman"></el-input>
                </el-form-item>
                <el-form-item v-if='form.isRented' label="公司名称">
                    <el-input v-model="form.company"></el-input>
                </el-form-item>
                <el-form-item v-if='form.isRented' label="联系人电话">
                    <el-input v-model="form.phone"></el-input>
                </el-form-item>
                <el-form-item v-if='form.isRented' label="出租时间">
                    <el-col :span="11">
                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                    </el-col>
                    <el-col class="line" :span="2">-</el-col>
                    <el-col :span="11">
                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date2" style="width: 100%;"></el-date-picker>
                    </el-col>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">立即创建</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
import store from '@/store'
export default {
    name: 'appendNode',

    props:{
        data:{
            type:Object,
            default: null
        },
        visible:{
            type: Boolean,
            default: false
        },
        id:{
            type: Number,
        }
    },

    data(){
        return{
            form:{
                id: '',
                label: '',
                linkman: '',
                phone: '',
                company: '',
                isRented: Boolean,
                rentedItem: '',
            }
        }
    },

    watch:{
        data(data){
            this.form = this.data
        }
    },

    mounted(){
    },

    methods:{
        onSubmit(){
            this.form.farNodeId = this.id
            store.dispatch('map/addWorkSection', this.form )
            this.$emit('changeVisibleAppendNode')
        }
    }
}
</script>

