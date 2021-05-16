<template>
  <div v-if="productList">
    <dl class="s-item" v-for="(item,index) in productList" :key="item.address">
      <dt>
        <img :src='item.image' alt="图片" />
      </dt>
      <dd>
        <h3>
          <router-link :to="{name: 'productDeatil',params: {
            index
          }}">{{ item.title }}</router-link>
        </h3>
        <p>
          <el-rate :value='item.score' disabled show-score text-color="#ff9900" score-template="{value}"></el-rate>
          <span>很好</span>
          <span class="s-item-comment-total">{{ item.comment.length }}人评论</span>
        </p>
        <p>
          <span class="s-item-tab">
            <span></span>
          </span>
          <span class="s-item-addr"></span>
          <span> 
            {{ item.address }}
            <a href="#">
              <i class="el-icon-location"></i>
              查看地图
            </a>
          </span>
        </p>
        <p>
          <span class="s-item-price">人均{{ item.avgPrice }}￥</span>
        </p>
        <ul class="deal-items">
          <li class="items" v-for="deal in item.dealItems" :key="deal.title">
            <p class="deal-title">{{ deal.title }}</p>
            <p>
              <span class="deal-price">￥{{ deal.counterPrice }}</span>
              <span class="deal-old-price">门市价￥{{ deal.price }}</span>
              <span class="deal-sales">已售{{ deal.saleNum }}</span>
            </p>
          </li>
        </ul>
      </dd>
    </dl>
  </div>
</template>
<script>
import api from '@/axios.js'
export default {
  data () {
    return {
      productList: null
    }
  },
  mounted () {
    api.getProductList.then((res) => {
      this.productList = res
    })
  }
}
</script>