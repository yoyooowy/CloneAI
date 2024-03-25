<template>
  <div class="menu">
    <div v-if="!isMobile" @click="jump('/home')" class="logoBox">
      <img
        class="logo"
        src="@/assets/jojologo.png"
        alt="logo"
      />
      <span class="titleL">Clone</span>
      <span class="titleR">AI</span>
    </div>
    <!-- 大于760完全变成顶端菜单 小于760隐藏logo变成侧边菜单 小于325隐藏右边的信息 -->
    <el-menu
      v-if="!isMobile"
      :default-active="activeIndex"
      class="el-menu"
      mode="horizontal"
      background-color="#000000"
      text-color="#fff"
      active-text-color="#fff"
      :ellipsis="false"
      @select="handleSelect"
    >
      <!-- <el-menu-item index="logo">
      <img
        class="logo"
        src="@/assets/jojologo.png"
        alt="logo"
      />
      <span class="titleL">Clone</span>
      <span class="titleR">AI</span>
      </el-menu-item> -->
      <el-menu-item index="/home">首页</el-menu-item>
      <el-menu-item index="/digital_man">数字人</el-menu-item>
      <el-menu-item index="/interact">交互数字人</el-menu-item>
      <el-sub-menu index="/about" popper-class="subMenu">
        <template #title>关于我们</template>
        <el-menu-item index="/about">关于我们</el-menu-item>
        <el-menu-item index="2-2">关于 Chat AI</el-menu-item>
        <el-menu-item index="2-3">技术支持</el-menu-item>
        <el-menu-item index="2-3">帮助中心</el-menu-item>
      </el-sub-menu>
    </el-menu>


    <div class="logoBox" v-if="isMobile && !isCollapse " @click="jump('/home')">
      <img
        class="logo"
        src="@/assets/jojologo.png"
        alt="logo"
      />
      <span class="titleL">Clone</span>
      <span class="titleR">AI</span>
    </div>
    <el-menu
      v-if="isMobile"
      :default-active="activeIndex"
      class="el-menu"
      mode="vertical"
      :collapse="isCollapse"
      background-color="#000000"
      text-color="#fff"
      active-text-color="#fff"
      @select="handleSelect"
      :style="{display: isCollapse ? 'none' : ''}"
    >
      <!-- <el-menu-item index="0">
      <img
        class="logo"
        src="@/assets/jojologo.png"
        alt="logo"
      />
      <span class="titleL">Clone</span>
      <span class="titleR">AI</span>
      </el-menu-item> -->
      <el-menu-item index="/home">首页</el-menu-item>
      <el-menu-item index="/digital_man">数字人</el-menu-item>
      <el-menu-item index="/interact">交互数字人</el-menu-item>
      <el-sub-menu index="/about" popper-class="subMenu">
        <template #title>关于我们</template>
        <el-menu-item index="/about">关于我们</el-menu-item>
        <el-menu-item index="2-2">关于 Chat AI</el-menu-item>
        <el-menu-item index="2-3">技术支持</el-menu-item>
        <el-menu-item index="2-3">帮助中心</el-menu-item>
      </el-sub-menu>
    </el-menu>
    <el-icon :size="20" color="#ffffff" class="openBtn" v-if="isMobile && isCollapse" @click="openMenu">
      <Expand />
    </el-icon>
    <div class="flex-grow" />

    <div class="menu-right">
      <div class="score">积分 0</div>
      <img class="avatar" src="@/assets/defaultAvatar.png" alt="">
      <div class="account">18819772723</div>
    </div>

  </div>
</template>

<script setup>
import {ref, onMounted, onUnmounted,defineExpose} from 'vue'
import {Expand} from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const activeIndex = ref('/home')

const isMobile = ref(window.innerWidth < 760)
const isCollapse = ref(window.innerWidth < 760);
const menuMode = ref('horizontal') //horizontal vertical

const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
  if(key == 'logo') {
    activeIndex.value = '/home'
    router.push('home')
    return
  }
  activeIndex.value = key
  router.push(key)
}
const jump = () => {
  activeIndex.value = '/home'
  router.push('home')
}
const openMenu = () => {
  isCollapse.value = false;
}
const closeMenu = () => {
  isCollapse.value = true;
}

const handleResize = () => {
  isMobile.value = window.innerWidth < 760
  isCollapse.value = window.innerWidth < 760;
}
onMounted(() => {
  window.addEventListener('resize', handleResize);
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
})

defineExpose({closeMenu})
</script>

<style lang="scss" scoped>
.menu {
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 99;
  width: 100vw;
  height: 48px;
  background-color: #000000;
  .logoBox {
    padding-left:10px;
    cursor: pointer;
    .logo {
      width: 22px;
      height: 22px;
      margin-right: 10px;
    }
    .titleL {
      color: #fff;
      font-size: 20px;
      margin-right: 10px;
    }
    .titleR {
      color: #0695cd;
      font-size: 20px;
      font-weight: 700;
      margin-right: 24px;
    }
  }
  .el-menu {
    height: 48px;
    border: none;
    .el-menu-item.is-active {
      border-bottom: 2px solid #0695cd ;
    }
    .subMenu {
      border: none !important;
      .el-menu-item {
        // color: #0695cd;
      }
    }
  }
  .flex-grow {
    flex: 1;
  }
  .openBtn:hover {
    color: #0695cd; /* 鼠标悬停时改变图标颜色为蓝色 */
  }
  .openBtn {
    position: relative;
    left: 14px;
    z-index: 99;
    cursor: pointer;
  }
}

.menu-right {
  color: #fff;
  display: flex;
  align-items: center;
   font-size: 12px;
  .score{
   margin-right: 20px;
    padding: 4px 16px ;
    border-radius: 24px;
    background-color: #14baba;
    cursor: pointer;
  }
  .avatar {
    display: block;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    margin-right: 6px;
  }
  .account {
    margin-right: 30px;
    cursor: pointer;
  }
}
.flex-grow {
  flex-grow: 1;
}

@media screen and (max-width: 760px) {
  .menu {
    .el-menu {
      margin-top: 48px;
      padding-left: 0;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      overflow: hidden;
      width: 160px;
      padding: 6px;
      color: #fefefeA6;
      .el-menu-item {
        height: 42px;
      }
      // .el-menu-item:nth-child(1) {
      //   padding-left: 0;
      // }
      .el-menu-item.is-active {
        border: none;
        background-color: #0695cd;
        border-radius: 4px;
        color: #fff;
      }
    }
    
  }
}

.subMenu {
  border: none !important;
}
</style>