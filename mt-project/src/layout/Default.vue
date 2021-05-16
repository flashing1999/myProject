<template>
  <div class="layout-default">
    <el-container>
      <el-header height=''>
          <mt-header />
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer height=''>
        <mt-footer />
      </el-footer>
    </el-container>
  </div>
</template>
<script>
import MtHeader from '../components/header/index.vue'
import MtFooter from '../components/footer/index.vue'
export default {
  components: {
    MtHeader,
    MtFooter
  }
}
</script>
<style lang='scss'>
  @import '@/assets/css/public/layout.scss';
</style>