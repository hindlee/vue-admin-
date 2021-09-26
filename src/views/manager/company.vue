<template>
    <div>
        <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
                label="公司"
                width="180">
                <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                    <span style="margin-left: 10px">{{ scope.row.companyName }}</span>
                </template>
            </el-table-column>
            <el-table-column
                label="联络人"
                width="180">
                <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top">
                        <p>姓名: {{ scope.row.linkman }}</p>
                        <p>电话: {{ scope.row.phone }}</p>
                        <div slot="reference" class="name-wrapper">
                            <el-tag size="medium">{{ scope.row.linkman }}</el-tag>
                        </div>
                    </el-popover>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                        size="mini"
                        @click="checkRentedSections(scope.$index, scope.row)">已租工位</el-button>
                    <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <Section v-if='visible' :tableData='companyWorkSection' v-on:close='changeVisible'></Section>
    </div>
</template>

<script>
import store from '@/store'
import Section from './components/Section.vue'
export default {
    name: 'Test',

    components:{
        Section
    },

    data() {
        return {
            tableData: [{
                companyName: '可口可乐',
                linkman: '王小虎',
                phone: '18930024456'
            }],
            companyWorkSection:[],
            visible:false
        }
    },

    methods: {
        findCompanyWorkSection(nodes,companyname,data){
            data.forEach((item) => {
                if(!item.children){
                    if(item.company == companyname){
                        nodes.push(item)
                    }
                }else{
                    nodes.concat(this.findCompanyWorkSection(nodes,companyname,item.children))
                }
            })
            return nodes
        },

        changeVisible(){
            if(!this.visible)
            {
                this.visible=true
            }else{
                this.visible=false
            }
        },

        checkRentedSections(index, row) {
            store.dispatch('map/getMap').then((response) => {
                const nodes = new Array() 
                this.companyWorkSection=this.findCompanyWorkSection(nodes,row.companyName,response)
                this.changeVisible()
            })
        },
        handleDelete(index, row) {
            console.log(index, row);
        }
    }
}

</script>

