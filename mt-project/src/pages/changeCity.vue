<template>
    <div class="page-changeCity">
        <el-row>
             <province />
        </el-row>
        <el-row>
            <hot :title="hotCity.title" :list='hotCity.list' />
        </el-row>
        <el-row>
            <hot :title="recentCity.title" :list='recentCity.list' />
        </el-row>
        <el-row>
          <category />
        </el-row>
    </div>
</template>
<script>
import province from '@/components/changeCity/province.vue'
import hot from '@/components/changeCity/hot.vue'
import category from '@/components/changeCity/category.vue'
import api from '@/axios.js'
export default {
  components: {
    province,
    hot,
    category
  },
  data () {
    return {
      hotCity: {
        title: '热门城市',
        list: []
      },
      recentCity: {
        title: '最近访问',
        list: []
      }
    }
  },
  mounted () {
    api.getHotCity.then(res => {
      this.hotCity.list = res
    })
    api.getRecentCity.then(res => {
      this.recentCity.list = res
    })
  }
}
</script>
<style lang="scss">
    @import '@/assets/css/changeCity/iselect.scss';
</style>