<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu"
      mode="horizontal"
      background-color="#000000"
      text-color="#fff"
      active-text-color="#fff"
      :ellipsis="false"
      @select="handleSelect"
    >
      <el-menu-item index="0">
        <!-- <img
          style="width: 100px"
          src="/images/element-plus-logo.svg"
          alt="Element logo"
        /> -->
        <span class="titleL">Clone</span>
        <span class="titleR">AI</span>
      </el-menu-item>
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">数字人</el-menu-item>
      <el-menu-item index="3">交互数字人</el-menu-item>
      <el-sub-menu index="4">
        <template #title>关于我们</template>
        <el-menu-item index="2-1">关于我们</el-menu-item>
        <el-menu-item index="2-2">关于 Chat AI</el-menu-item>
        <el-menu-item index="2-3">技术支持</el-menu-item>
        <el-menu-item index="2-3">帮助中心</el-menu-item>
      </el-sub-menu>

      <div class="flex-grow" />
      <div class="menu-right">
        <div class="score">积分 0</div>
        <div class="account">
          
        </div>
      </div>
    </el-menu>
  </div>
</template>

<script setup>
import {ref} from 'vue'
const activeIndex = ref('1')
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>

<style lang="scss" scoped>
.titleL {
  color: #fff;
  font-size: 22px;
  margin-right: 10px;
  left: calc;
}
.titleR {
  color: #0695cd;
  font-size: 22px;
  font-weight: 700;
  margin-right: 24px;
}
.menu-right {
  color: #fff;
  .score{
    background-color: #14baba;
  }
}
.flex-grow {
  flex-grow: 1;
}
</style>