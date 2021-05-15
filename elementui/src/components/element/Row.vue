<template>
  <div
    :style="style"
    :class="['el-row', { 'el-row--flex': this.type === 'flex' }]"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "ElRow",
  props: {
    gutter: {
      type: Number,
      default: 0,
    },
    type: {
      type: String,
      validator: (val) => val === "flex",
    },
    justify: {
      type: String,
      default: "start",
      validator: (val) =>
        ["start", "end", "center", "space-around", "space-between"].includes(
          val
        ),
    },
    align: {
      type: String,
      defalut: "top",
      validator: (val) => ["top", "middle", "bottom"].includes(val),
    },
  },
  computed: {
    style() {
      const style = {};
      style.marginLeft = -this.gutter / 2 + "px";
      style.marginRight = style.marginLeft;
      if(this.type === 'flex') {
          style.justifyContent = this.justify;
          style.alignItems = this.align;
      }
      return style;
    },
  },
};
</script>
<style lang="scss" scoped>
.el-row {
  &::after,
  &::before {
    display: block;
    content: "";
    clear: both;
  }
  &--flex {
    display: flex;
    &::after,
    &::before {
      display: none;
    }
  }
}
</style>