<template>
  <div>
    <div class="shaow">
      <div class="icon" @click="handleCollapse">
        <i class="el-icon-s-fold"></i>
      </div>
    </div>
    <!-- <div class="underline"></div> -->
    <div class="subtitle">
      {{ $route.meta.title }}
    </div>
  </div>
</template>
<script>
export default {
  name: "mainTitle",
  props: {
    isCollapse: {
      type: Boolean,
      required: true,
    },
    navWidth: {
      type: String,
      default: "180px",
    },
  },
  methods: {
    handleCollapse() {
      if (this.isCollapse == false) {
        this.$emit("update:isCollapse", true);
      } else {
        this.$emit("update:isCollapse", false);
      }
      // this.navWidth == "150px"
      //   ? this.$emit("update:navWidth", "60px")
      //   : this.$emit("update:navWidth", "150px");
    },
  },
};
</script>
<style scoped>
/* .underline {
  height: 5px;
  background-color: rgba(224, 225, 228, 0.347);
} */
.icon {
  margin: 10px 20px;
  cursor: pointer;
  color: black;
  padding: 10px 0;
  width: 40px;
}
.shaow {
  box-shadow: 0 5px 2px rgba(224, 225, 228, 0.347);
}
.subtitle {
  margin: 15px;
  margin-left: 20px;
  font-size: 0.5em;
}
</style>