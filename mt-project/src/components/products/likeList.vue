<template>
  <div class="like-list">
    <ul v-if="list">
      <li v-for="item in list" :key="item.itemId">
        <div class="img-box">
          <img :src="item.imgUrl" alt="" />
        </div>
        <div class="title">
          {{ item.title }}
        </div>
        <div class="area">
          {{ item.areaName }}
        </div>
        <div class="score">
          <el-rate
            :value='item.score'
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}"
          >
          </el-rate>
        </div>
        <span class="price">
          {{ item.lowPrice }}
        </span>
      </li>
    </ul>
  </div>
</template>
<script>
import api from '@/axios.js'
export default {
  data () {
    return {
      list: null
    }
  },
  mounted () {
    api.getLikeList.then((res) => {
      this.list = res.slice(0, 2)
      for (let i = 0; i < this.list.length; i++) {
        this.list[i].imgUrl =
          'https://p1.meituan.net//bbia/f58fafc0be2bc3a69dfcac20260888c2201000.jpg@188w_106h_1e_1c'
      }
    })
  }
}
</script>
<style lang="scss">
@import "@/assets/css/products/like.scss";
</style>