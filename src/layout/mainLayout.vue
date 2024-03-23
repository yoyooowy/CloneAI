<template>
  <div class="mainLayout" >
    <menuTop ref="menuTopRef" />
    <section class="app-main" @click="handleClickOutside">
      <router-view></router-view>
    </section>
    
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import menuTop from "@/components/menuTop.vue"
import { ref,onMounted, onUnmounted, nextTick } from 'vue';

const menuTopRef = ref(null);

const handleClickOutside = (event) => {
  menuTopRef.value.closeMenu()
}

</script>

<style lang="scss" scoped>
.app-main {
  padding-top: 48px;
}
</style>