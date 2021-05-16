<template>
    <div class="m-products-list">
        <ul>
            <li class="s-nav-active">智能排序</li>
            <li class="s-nav-active">销量</li>
            <li class="s-nav-active">价格</li>
            <li class="s-nav-active">好评最多</li>
        </ul>
        <el-row>
            <item />
        </el-row>
    </div>
</template>
<script>
import item from './item.vue'
export default {
  components: {
    item
  }
}
</script>