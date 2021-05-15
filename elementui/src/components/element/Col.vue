<template>
  <div :style="style" :class="['el-col', ...className]">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    span: {
      type: Number,
      default: 0,
    },
    offset: {
      type: Number,
      default: 0,
    },
    push: {
      type: Number,
      default: 0,
    },
    pull: {
      type: Number,
      default: 0,
    },
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object],
  },
  computed: {
    className() {
      let classArr = [];
      ["span", "offset", "push", "pull"].forEach((val) => {
        if (this[val]) {
          if (val === "span") {
            classArr.push(`el-col-${this[val]}`);
          } else {
            classArr.push(`el-col-${val}-${this[val]}`);
          }
        }
      });
      ["sm", "xs", "md", "lg", "xl"].forEach((size) => {
        if (typeof this[size] === "number") {
          classArr.push(`el-col-${size}-${this[size]}`);
        } else if (typeof this[size] === "object") {
          Object.keys(this[size]).forEach((prop) => {
            prop === "span"
              ? classArr.push(`el-col-${size}-${this[size][prop]}`)
              : classArr.push(`el-col-${size}-${prop}-${this[size][prop]}`);
          });
        }
      });
      return classArr;
    },
    gutter() {
      let parent = this.$parent;
      while (parent.$options.name !== "ElRow") {
        parent = parent.$parent;
      }

      return parent ? parent.gutter : 0;
    },
    style() {
      const style = {};
      style.paddingLeft = this.gutter / 2 + "px";
      style.paddingRight = style.paddingLeft;

      return style;
    },
  },
};
</script>
<style lang="scss" scoped>
.el-col {
  float: left;
  box-sizing: border-box;
}
@for $i from 0 through 24 {
  .el-col-#{$i} {
    width: $i / 24 * 100%;
  }
  .el-col-offset-#{$i} {
    margin-left: $i / 24 * 100%;
  }
  .el-col-push-#{$i} {
    transform: translateX($i / 24 * 100%);
  }
  .el-col-pull-#{$i} {
    transform: translateX(-$i / 24 * 100%);
  }
}
@media only screen and (max-width: 768px - 1) {
  @for $i from 0 through 24 {
    .el-col-xs-0 {
      display: none;
    }
    .el-col-xs-#{$i} {
      width: $i / 24 * 100%;
    }
    .el-col-xs-offset-#{$i} {
      margin-left: $i / 24 * 100%;
    }
    .el-col-xs-push-#{$i} {
      transform: translateX($i / 24 * 100%);
    }
    .el-col-xs-pull-#{$i} {
      transform: translateX(-$i / 24 * 100%);
    }
  }
}
@media only screen and (min-width: 768px) {
  @for $i from 0 through 24 {
    .el-col-sm-0 {
      display: none;
    }
    .el-col-sm-#{$i} {
      width: $i / 24 * 100%;
    }
    .el-col-sm-offset-#{$i} {
      margin-left: $i / 24 * 100%;
    }
    .el-col-sm-push-#{$i} {
      transform: translateX($i / 24 * 100%);
    }
    .el-col-sm-pull-#{$i} {
      transform: translateX(-$i / 24 * 100%);
    }
  }
}
@media only screen and (min-width: 992px) {
  @for $i from 0 through 24 {
    .el-col-md-0 {
      display: none;
    }
    .el-col-md-#{$i} {
      width: $i / 24 * 100%;
    }
    .el-col-md-offset-#{$i} {
      margin-left: $i / 24 * 100%;
    }
    .el-col-md-push-#{$i} {
      transform: translateX($i / 24 * 100%);
    }
    .el-col-md-pull-#{$i} {
      transform: translateX(-$i / 24 * 100%);
    }
  }
}
@media only screen and (min-width: 1200px) {
  @for $i from 0 through 24 {
    .el-col-lg-0 {
      display: none;
    }
    .el-col-lg-#{$i} {
      width: $i / 24 * 100%;
    }
    .el-col-lg-offset-#{$i} {
      margin-left: $i / 24 * 100%;
    }
    .el-col-lg-push-#{$i} {
      transform: translateX($i / 24 * 100%);
    }
    .el-col-lg-pull-#{$i} {
      transform: translateX(-$i / 24 * 100%);
    }
  }
}
@media only screen and (min-width: 1920px) {
  @for $i from 0 through 24 {
    .el-col-xl-0 {
      display: none;
    }
    .el-col-xl-#{$i} {
      width: $i / 24 * 100%;
    }
    .el-col-xl-offset-#{$i} {
      margin-left: $i / 24 * 100%;
    }
    .el-col-xl-push-#{$i} {
      transform: translateX($i / 24 * 100%);
    }
    .el-col-xl-pull-#{$i} {
      transform: translateX(-$i / 24 * 100%);
    }
  }
}
</style>