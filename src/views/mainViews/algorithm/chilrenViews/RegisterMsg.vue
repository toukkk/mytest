<template>
  <div>
    <div class="register-wrap" v-loading="tableData.length == 0">
      <div
        v-for="(data, index) in tableData"
        :key="index"
        class="register-frame"
      >
        <div>
          <div class="img-frame">
            <img :src="data.url" fit="fill" />
          </div>
          <div>
            <p>{{ data.algoId }}</p>
            <p>{{ data.algoName }}</p>
            <p>版本号：{{ data.algoEdition }}</p>
            <p>发布日期：{{ data.algoTime }}</p>
          </div>
          <div class="flex">
            <el-button
              size="mini"
              type="primary"
              class="my-button"
              @click="registerMsg"
            >
              注册
            </el-button>
            <el-button
              size="mini"
              type="primary"
              class="details-button my-button"
              @click="$emit('detail', data)"
            >
              查看详情
            </el-button>
          </div>
        </div>
      </div>
    </div>
    <div class="my-pagination">
      <el-pagination
        background
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableData.length"
        small
      />
    </div>
  </div>
</template>
<script>
import { getAlgo } from "@/services/algo";

export default {
  name: "RegisterMsg",
  data() {
    return {
      tableData: [],
    };
  },
  created() {
    this.requestAlgo();
  },
  methods: {
    registerMsg() {
      this.$message({
        type: "success",
        message: "注册成功!",
      });
      this.$confirm("注册成功, 是否跳转到算法列表?", "消息提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      }).then(() => {
        this.$router.push({
          name: "AlgorithmList",
        });
      });
    },
    async requestAlgo(params = undefined) {
      this.tableData = await getAlgo(params);
      //解构item并map()
      // this.tableData.map(item => {
      //   return {
      //     ...item,
      // url:require(item.url)
      //   }
      // })
      console.log(this.tableData);
    },
  },
};
</script>
<style scoped>
.register-wrap {
  display: flex;
  font-size: 12px;
  min-height: 200px;
}
.register-frame {
  border: 2px solid #a9adb48c;
  margin-right: 20px;
  padding: 5px;
  width: 170px;
  /* box-shadow: 2px 2px rgba(194, 193, 193, 0.5); */
}
/* .img-frame {
  width: 100%;
  height: 85;
} */
p {
  margin-top: 0;
}
img {
  width: 100%;
  height: 85px;
}
.details-button {
  color: black;
  background-color: white;
  border-color: #c0c4cc;
}
.flex {
  display: flex;
  justify-content: space-around;
}
</style>