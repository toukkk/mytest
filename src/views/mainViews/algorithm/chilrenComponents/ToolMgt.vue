<template>
  <div class="config-wrap">
    <div
      class="config-item"
      v-for="item in part"
      :key="item.option"
      :style="{ backgroundImage: 'url(' + imageUrl + ')' }"
      @click="openDrawer(item.option)"
    >
      <!--item.url-->
      <i class="el-icon-plus"></i>
      <span>{{ item.option }}</span>
    </div>
    <div class="subject-item"></div>
  </div>
</template>
<script>
export default {
  name: "ToolMgt",
  props: {
    part: Array,
  },
  data() {
    return {
      imageUrl: require("@/assets/image/2.jpeg"),
    };
  },
  methods: {
    openDrawer(val) {
      this.$emit("openDrawer", val);
    },
  },
};
</script>
<style scoped>
::v-deep .el-icon-plus {
  font-size: 2em;
  font-weight: 800;
  padding: 40px;
}
.config-wrap {
  display: inline-grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-gap: 50px 20px;
  padding: 20px;
  width: 600px;
  height: 600px;
  background-color: rgb(235, 235, 235);
}
.config-item {
  background-size: 100% 110px;
  background-repeat: no-repeat;
  margin: 20px 0;
  text-align: center;
}
.subject-item {
  grid-row: 1/4;
  grid-column: 2/3;
  background-color: rgb(172, 179, 176);
  background-image: url("@/assets/image/5.gif");
  background-size: 100% 100%;
}

/* .config-wrap {
  display: fiex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-content: space-around;
  width: 600px;
  height: 600px;
  background-color: rgb(65, 89, 78);
}
.config-item {
  margin: 0;
  width: 100px;
  height: 90px;
  background-color: aquamarine;
}
.subject-item {
  margin: 0;
  width: 350px;
  height: 60px;
  background-color: rgb(172, 179, 176);
} */
</style>