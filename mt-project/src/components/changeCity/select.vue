<template>
    <div class="choose-wrap" v-document-click='hideWrap'>
        <div class="choose" @click='changeShowWrap(true,$event)'>
            <span>{{ value }}</span>
            <i class="el-icon-caret-bottom"></i>
            <div class="mt-content" 
            :class="{
                'active': showWrap
                }">
                <h2>{{ title }}</h2>
                <div class="wrapper" :class='{"city": isCity}'>
                <div 
                class="col"
                v-for="(curList,index) in renderList"
                :key='index'
                >
                    <span class="mt-item"
                    v-for="item in curList"
                    :key="item.provinceCode"
                    @click='changeValue(!isCity ? item.provinceName : item.name,$event)'
                    :class="{
                        'active': value == (!isCity ? item.provinceName : item.name)
                    }"
                    >
                        {{ !isCity ? item.provinceName : item.name}}
                    </span>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    },
    showWrap: {
      type: Boolean
    },
    isCity: {},
    value: {},
    title: {}
  },
  data () {
    return {

    }
  },
  computed: {
    renderList () {
      if (this.list.length === 0) {
        return false
      }
      const col = Math.ceil(this.list.length / 3)
      const result = []
      for (let i = 0; i < col; i++) {
        result.push(this.list.slice(i * 12, i * 12 + 12))
      }
      return result
    }
  },
  methods: {
    changeShowWrap (show, e) {
      e.stopPropagation()
      this.$emit('change_wrap', show)
    },
    changeValue (val, e) {
      e.stopPropagation()
      this.$emit('change_value', val)
      this.changeShowWrap(false, e)
    },
    hideWrap (e) {
      this.changeShowWrap(false, e)
    }
  }
}
</script>
<style lang="scss">
    @import '@/assets/css/changeCity/select.scss';
</style>