<template>
  <el-config-provider :locale="locale">
    <el-select model-value="foo" />
  </el-config-provider>
</template>

<script setup>
  import { ElConfigProvider } from 'element-plus'
  import locale from 'element-plus/lib/locale/lang/zh-cn.js'
</script>

<style>
  body {
    background: #000;
    color: #eee;
  }
</style>
