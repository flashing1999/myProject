<template>
  <div class="m-istyle">
    <dl :class='nav.class' @mouseover="changeIndex">
      <dt>{{ nav.title }}</dt>
      <dd
       v-for="(item,index) in nav.list"
       :key='index'
       :class="{'active': index == currentIndex }" 
       :data-index = 'index'
      >
      {{ item }}
      </dd>
    </dl>
    <ul class="ibody">
      <li
      v-for="(item,index) in currentList"
      :key='index'
      >
        <el-card :body-style="{padding: 0}" shadow="never">
          <img :src='item.image' alt class="image" />
          <div class="cbody">
            <div class="title">{{ item.title }}</div>
            <div class="sub-title">{{ item.subTitle }}</div>
            <div class="price-info">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont"></span>
                <span class="current-price numfont">{{ item.price + '元'}}</span>
              </span>
              <span class="sold bottom-right-info">{{ item.address }}</span>
            </div>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>
<script>
import api from '@/axios.js'
export default {
  props: ['nav'],
  data () {
    return {
      currentIndex: 0,
      navTitleList: [],
      dataObj: {},
      currentList: []
    }
  },
  methods: {
    changeIndex (e) {
      const dom = e.target
      if (dom.tagName !== 'DD') {
        return true
      }
      this.currentIndex = +dom.getAttribute('data-index')
      this.currentList = this.dataObj[this.navTitleList[this.currentIndex]]
    }
  },
  mounted () {
    api.getStyleList.then((res) => {
      this.dataObj = res
      for (const key in res) {
        this.navTitleList.push(key)
      }
      this.currentList = this.dataObj[this.navTitleList[this.currentIndex]]
      return this.currentList
    }).then(res => {

    })
  }
}
</script>
<style lang="scss">
 @import '@/assets/css/index/artistic.scss';
</style>