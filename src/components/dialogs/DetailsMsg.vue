<template>
  <div class="detail-wrapper">
    <el-dialog title="详情" :visible.sync="test" @close="closed">
      <div>
        <div class="img">
          <!-- require('@/assets/image/logo.png') -->
          <!-- <img alt = "Vue logo" fit = "fill" :src = "this.tableData.url" width = "150px" height = "200px"/>
            <div slot = "error" class = "image-slot">
              加载失败
            </div> -->
          <el-image :src="tableData.url" fit="contain">
            <div slot="placeholder" class="image-slot">
              加载中<span class="dot">...</span>
            </div>
            <div slot="error" class="image-slot">加载失败</div>
          </el-image>
        </div>
        <div>
          <p>版本号：{{ tableData.algoEdition }}</p>
          <p>算法ID: {{ tableData.algoId }}</p>
          <p>算法名称：{{ tableData.algoName }}</p>
          <p>算法类型：{{ tableData.algoType }}</p>
          <p>日期：{{ tableData.algoTime }}</p>
        </div>
        <div style="clear: both">
          这是一段内容。这是一段内容。这是一段内容。这是一段内容。这是一段内容。这是一段内容。这是一段内容。这是一段内容。这是一段内容。
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "DetailsMsg",
  props: {
    dialogVisible: {
      type: Boolean,
      required: true,
    },
    tableData: {
      type: Object,
    },
  },
  data() {
    return {
      test: false,
      // url: require(this.tableData.url)
    };
  },
  mounted() {
    this.test = this.dialogVisible;
  },
  methods: {
    closed() {
      (this.test = false), this.$emit("update:dialogVisible", false);
    },
  },
};
</script>
<style scoped>
/* .detail-wrapper {
  background: "../..//assets/image/1.jpeg";
} */
.img {
  float: left;
  margin: 10px;
  width: 150px;
  height: 200px;
}
</style>
