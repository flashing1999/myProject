<template>
  <div>
    <span class="name">省份</span>
    <m-select 
    :list='provinceList'
     :showWrap="showProvinceWrap" 
     :value='provinceValue'
      :title='provinceTitle'
      :isCity='false'
      @change_wrap='changeProWrap'     
      @change_value='changeProValue'     
      />

    <m-select 
    :list='cityList'
     :showWrap="showCityWrap" 
     :value='cityValue'
      :title='cityTitle'
      :isCity='true'
      @change_wrap='changeCityWrap'
      @change_value='changeCityValue'
      />

    <span>直接搜索：</span>
    <el-select
      v-model="searchWord"
      filterable
      remote
      reserve-keyword
      placeholder="请输入关键词"
      :remote-method="remoteMethod"
      :loading="loading"
    >
      <el-option v-for="item in searchList" :key="item" :label="item" :value="item"></el-option>
    </el-select>
  </div>
</template>
<script>
import MSelect from './select.vue'
import api from '@/axios.js'
export default {
  components: {
    MSelect
  },
  data () {
    return {
      searchWord: '',
      searchList: [],
      loading: false,

      provinceList: [],
      provinceValue: '省份',
      provinceTitle: '选择省份',
      showProvinceWrap: false,

      cityValue: '城市',
      cityTitle: '选择城市',
      showCityWrap: false
    }
  },
  methods: {
    remoteMethod () {},
    changeProWrap (isShow) {
      this.showProvinceWrap = isShow
      this.showCityWrap = false
    },
    changeCityWrap (isShow) {
      this.showProvinceWrap = false
      this.showCityWrap = isShow
    },
    changeCityValue (val) {
      this.cityValue = val
    },
    changeProValue (val) {
      this.provinceValue = val
    }
  },
  computed: {
    cityList () {
      if (this.provinceList.length === 0) {
        return []
      } else if (this.provinceValue === '省份' && this.provinceList.length !== 0) {
        return this.provinceList[0].cityInfoList
      } else {
        let city = this.provinceList.filter(item => item.provinceName === this.provinceValue)
        return city[0].cityInfoList
      }
    }
  },
  mounted () {
    api.getProvince.then(res => {
      this.provinceList = res
    })
  }
}
</script>
