<template>
    <div class="m-product-categroy">
        <dl class="classic" v-if="classifyList">
            <dt>分类</dt>
            <dt>全部</dt>
            <dd v-for="item in classifyList" :key="item.type">
              <m-select :name='item.title' :list='item.subList' /> 
            </dd>
            
        </dl>
        <dl class="classic" v-if="areaList">
            <dt>区域</dt>
            <dt>全部</dt>
            <dd v-for="item in classifyList" :key="item.type">
              <m-select :name='item.title' :list='item.subList' /> 
            </dd>
          
        </dl>
    </div>
</template>
<script>
import api from '@/axios.js'
import MSelect from './select.vue'
export default {
  data () {
    return {
      classifyList: null,
      areaList: null
    }
  },
  components: {
    MSelect
  },
  mounted () {
    api.getFenleiList.then(res => {
      this.classifyList = res
    })
  }
}
</script>