<template>
  <div id="app">
    <el-row
    :gutter='20'
    :type='"flex"'
    :justify='"space-around"'
    :align='"top"'
    >
      <el-col 
      :span="4"
      :xs='4'
      :sm='8'
      :md='4'
      :lg='8'
      :xl='4'
      class="hidden-xs-only"
      >
        <div class="grid-content bg-purple-dark"></div>
      </el-col>
      <el-col :span="8"
      :xs='8'
      :sm='4'
      :md='8'
      :lg='4'
      :xl='8'>
        <div class="grid-content bg-purple-dark"></div>
      </el-col>
      <el-col :span="4"
      :xs='4'
      :sm='8'
      :md='4'
      :lg='8'
      :xl='4'>
        <div class="grid-content bg-purple-dark"></div>
      </el-col>
      <el-col :span="8"
      :xs='8'
      :sm='4'
      :md='8'
      :lg='4'
      :xl='8'>
        <div class="grid-content bg-purple-dark"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ElRow from '@element/Row.vue';
import ElCol from '@element/Col.vue';
export default {
  name: 'App',
  components: {
    ElRow,
    ElCol
  }
}
</script>

<style lang="scss">
body,html{
  margin: 0;
  padding: 0;
}
 .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
