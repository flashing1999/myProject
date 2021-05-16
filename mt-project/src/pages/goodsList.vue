<template>
    <div class="page-product">
       <el-row>
           <crumbs />
       </el-row>
       <el-row>
           <el-col :span="19">
              <el-row>
                  <cate />
              </el-row>
              <el-row>
                  <list />
              </el-row>
           </el-col>
           <el-col :span="4">
              <h4>猜你喜欢</h4>
              <like-list />
           </el-col>
       </el-row>
    </div>
</template>
<script>
import crumbs from '@/components/products/crumbs.vue'
import cate from '@/components/products/cate.vue'
import list from '@/components/products/list.vue'
import LikeList from '@/components/products/likeList.vue'
export default {
  components: {
    crumbs,
    cate,
    list,
    LikeList
  }
}
</script>
<style lang="scss">
    @import '@/assets/css/products/index.scss';
</style>