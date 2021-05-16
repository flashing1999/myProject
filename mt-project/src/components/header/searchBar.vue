<template>
    <div class="search-panel">
        <el-row class="m-header-searchbar">
            <el-col :span='3' class="left">
               <router-link to='/'> <img src="http://s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt=""></router-link>
            </el-col>
            <el-col :span="15" class="center">
                <el-row class="wrapper">
                    <el-input v-model="searchWorld" placeholder="请输入内容" @focus='handleFocus' @blur='handleBlur' @input='getSearchList'></el-input>
                    <el-button type="success" icon="el-icon-search"></el-button>
                    <dl class="hotPlace" v-if="isHotPlace">
                        <dt>热门搜索</dt>
                        <dd 
                        v-for="(item,index) in hotPlaceList" 
                        :key = 'index'
                        >
                            <router-link :to='{ name: "goods",params: {name:item}}'>{{ item }}</router-link>
                        </dd>
                    </dl>
                    <dl class="searchList" v-if="isSearchList">
                        <dd
                        v-for="(item,index) in filterList" 
                        :key = 'index'
                        >
                            <router-link :to='{ name: "goods",params: {name:item}}'>{{ item }}</router-link>
                        </dd>
                    </dl>
                </el-row>
                <el-row class="suggest">
                    <router-link
                     href="#"
                     v-for="(item,index) in hotPlaceList"
                     :key = 'index'
                     :to="{name: 'goods',params: {name: item }}"
                    >{{ item }}</router-link>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import api from '@/axios.js'
export default {
  data () {
    return {
      searchWorld: '',
      isFocus: false,
      hotPlaceList: [],
      searchList: [],
      filterList: [],
      timer: null
    }
  },
  computed: {
    isHotPlace () {
      return this.isFocus && !this.searchWorld
    },
    isSearchList () {
      return this.isFocus && this.searchWorld
    }
  },
  methods: {
    handleFocus () {
      this.isFocus = true
    },
    handleBlur () {
      setTimeout(() => {
        this.isFocus = false
      }, 200)
    },
    getSearchList () {
      if (!this.timer) {
        this.timer = setTimeout(() => {
          this.filterList = this.searchList.filter((item) => {
            return item.indexOf(this.searchWorld) !== -1
          })
          clearTimeout(this.timer)
          this.timer = null
        }, 500)
      }
    }
  },
  mounted () {
    api.getHotList.then(res => {
      this.hotPlaceList = res
    })
    api.getSearchList.then(res => {
      this.searchList = res.list
    })
  }
}
</script>
<style lang="scss">
    @import '@/assets/css/public/header/search.scss';
</style>