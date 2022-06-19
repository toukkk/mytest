<template>
  <div>
    <el-container>
      <div class="aside">
        <div class="aside-title">
          <transition name="title" :duration="{ enter: 1000, leave: 1000 }">
            <div v-if="!isCollapse">算法系统</div>
          </transition>
        </div>
        <el-aside width="" style="height: 50vh">
          <main-aside :isCollapse="isCollapse" />
        </el-aside>
      </div>
      <div style="width: 100%">
        <main-title :isCollapse.sync="isCollapse" />
        <el-main style="background-color: rgba(224, 225, 228, 0.347)">
          <div id="mainView">
            <keep-alive> <router-view @detail="detail" /></keep-alive>
          </div>
        </el-main>
      </div>
    </el-container>
    <detail-msg
      v-if="dialogVisible"
      :dialogVisible.sync="dialogVisible"
      :tableData="detailsData"
    />
  </div>
</template>
<script>
import mainTitle from "./heads/MainHeadTitle.vue";
import mainAside from "./heads/MainHeadAside.vue";
import detailMsg from "@/components/dialogs/DetailsMsg.vue";
export default {
  name: "mainPage",
  data() {
    return {
      isCollapse: false,
      // navWidth: "150px",
      dialogVisible: false,
      detailsData: {},
    };
  },
  components: {
    mainTitle,
    mainAside,
    detailMsg,
  },
  methods: {
    detail(data) {
      this.dialogVisible = true;
      this.detailsData = data;
    },
  },
};
</script>
<style>
@import "@/assets/css/base.css";
</style>
<style scoped>
::v-deep .el-aside {
  overflow: hidden;
}
.aside {
  background-color: #0e263f;
}
.aside-title {
  text-align: center;
  padding: 20px 0;
  color: white;
  width: 100%;
  height: 20px;
}
.aside {
  min-height: 100vh;
  /* position: fixed; */
}
#mainView {
  background-color: white;
  padding: 20px;
  height: calc(100vh - 174px);
  overflow: auto;
  scroll-behavior: smooth;
}
.title-enter-active,
.title-leave-active {
  transition: opacity 1s;
}
.title-enter,
.title-leave-to {
  opacity: 0;
}
</style>
