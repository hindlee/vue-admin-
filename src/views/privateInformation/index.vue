<template>
    <div id="information">
        <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="1">
                <router-link to='/private/privateInformation'>个人信息</router-link>
            </el-menu-item>
            <el-menu-item index="2">
                <router-link to='/private/privateInformation/change'>修改信息</router-link>
            </el-menu-item>

        </el-menu>
        <router-view></router-view>
    </div>
</template>

<script>
import router from '@/router'
export default {
    name: 'Information',
 
}
</script>

