<template>
    <div>
        <div>
            <el-button type='primary' @click="appendWorkSecton">添加工位</el-button>
            <el-button type='primary' @click="renteWorkSection">租借工位</el-button>
        </div>
        <div style='width: 600px'>
            <el-tree 
                :data='data' 
                :props='defaultProps' 
                ref='tree'
                node-key='id'
                show-checkbox
                highlight-current
                check-strictly
            >
                <span class="custom-tree-node" slot-scope="{ node, data }">
                    <span>{{ node.label }}</span>
                    <span>{{ node.data.rentedState }}</span>
                    <span>
                        <el-button
                            type="text"
                            size="mini"
                            @click="() => detail(data)">
                            详细信息
                        </el-button>
                        <el-button
                            v-if="isWorkSection(data)"
                            type="text"
                            size="mini"
                            @click="() => append(data)">
                            Append
                        </el-button>
                        <el-button
                            type="text"
                            size="mini"
                            @click="() => remove(node, data)">
                            Delete
                        </el-button>
                    </span>
                </span>
            </el-tree>
        </div>
        <nodeInfo :dialogFormVisible='nodeInfoVisible' :nodeInfo='nodeInfo' v-on:changeVisibleNodeInfo='changeVisibleNodeInfo'></nodeInfo>
        <appendNode :visible='appendNodeVisible' :id='farNodeId' :data='appendNodeInfo' v-on:changeVisibleAppendNode='changeVisibleAppendNode'></appendNode>
    </div>
</template>

<script>
import store from '@/store'
import nodeInfo from './components/nodeInfo.vue'
import appendNode from './components/appendNode.vue'

    let id = 1000
export default{

    components: {
        nodeInfo,
        appendNode
    },

    data(){
        return{
            data: null,
            defaultProps: {
                children: 'children',
                label: 'label',
            },
            nodeInfoVisible: false,
            nodeInfo:null,
            appendNodeVisible: false,
            farNodeId:0,
            appendNodeInfo:{
                id: '',
                label: '',
                linkman: '',
                phone: '',
                company: '',
                isRented: null,
                rentedItem: '',
            }
        }
    },

    mounted(){
        this.getMap()
    },

    methods: {
        getMap(){
            store.dispatch('map/getMap').then((response)=>{
                this.data = this.putDisabledInRented(response)
            })   
        },

        //在已租的node信息中加入 disabled = true 属性   
        putDisabledInRented(data){
            data.forEach((item) => {
                if(item.children){
                    this.putDisabledInRented(item.children)
                }else{
                    if(item.isRented){
                        item.rentedState = '已租'    
                    }
                }   

            })
            return data
        },

        changeVisibleNodeInfo(){
            if(this.nodeInfoVisible){
                this.nodeInfoVisible=false
            }else{
                this.nodeInfoVisible=true
            }
        },
        

        changeVisibleAppendNode(){
            this.getMap()
            this.appendNodeInfo={
                id: 1001,
                label: '',
                linkman: '',
                phone: '',
        		company: '',
                isRented: null,
	        	rentedItem: '',
            }

            if(this.appendNodeVisible){
                this.appendNodeVisible=false
            }else{
                this.appendNodeVisible=true
            }
        },

        //展示节点详细信息
        detail(data){
            this.nodeInfo=data
            this.changeVisibleNodeInfo()
        },

        isWorkSection(data){
            return ('children' in data)
        },

        renteWorkSection(){
            this.$refs.tree.getCheckedNodes().forEach((item) => {
                store.dispatch('map/rentingMap',item.id)
            })
            this.getMap()
        },

        appendWorkSecton(){
            this.$refs.tree.getCheckedNodes().forEach((item) => {                                       
                this.append(item)
            });
        },

        append(data) {
            this.farNodeId=data.id
            this.changeVisibleAppendNode()
        },

        remove(node, data) {
            const parent = node.parent;
            const children = parent.data.children || parent.data;
            const index = children.findIndex(d => d.id === data.id);
            children.splice(index, 1);
        },
    }
}
</script>
<style>
.custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
}
</style>
