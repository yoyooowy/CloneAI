<template>
  <div>
    <menuTop/>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import menuTop from "@/components/menuTop.vue"
</script>

<style lang="scss" scoped>

</style>