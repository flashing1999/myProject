<template>
    <div class="category" v-if="cityList">
        <dl class="m-categroy">
            <dt>按拼音首字母选择：</dt>
            <dd
            v-for="item in list"
            :key="item"
            >
            <a :href="'#city' + item">{{ item }}</a>
            </dd>
        </dl>
        <dl 
        
        class="m-categroy-section"
        v-for='item in cityList'
        :key="item.title"
        >
            <dt :id='"city" + item.title'>{{ item.title }}</dt>
            <dd>
                <span
                v-for="city in item.list"
                :key="city.id"    
                >
                {{ city.name }}
                </span>
            </dd>
        </dl>
    </div>
</template>
<script>
import api from '@/axios.js'
export default {
  data () {
    return {
      list: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      cityList: null
    }
  },
  methods: {
    setCityList (arr) {
      const list = this.list.split('')
      this.cityList = []
      for (let i = 0; i < list.length; i++) {
        this.cityList[i] = {}
        this.cityList[i].title = list[i]
        this.cityList[i].list = arr.filter(item => item.firstChar === list[i])
      }
    }
  },
  mounted () {
    api.getProvince.then(res => {
      const list = []
      for (let i = 0; i < res.length; i++) {
        let item = res[i]
        list.push(...item.cityInfoList)
      }
      this.setCityList(list)
    })
  }
}
</script>
<style lang="scss">
 @import '@/assets/css/changecity/categroy.scss';
</style>