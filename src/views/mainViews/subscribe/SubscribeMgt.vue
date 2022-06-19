<template>
  <div>
    <div>
      <content-search>
        <template v-slot:searchLeft>
          <div></div>
        </template>
        <template v-slot:searchRight>
          <el-select
            v-model="select"
            placeholder="请选择订阅状态"
            size="small"
            :clearable="true"
          >
            <el-option label="已订阅" :value="true"></el-option>
            <el-option label="未订阅" :value="false"></el-option>
          </el-select>
          <el-button size="small" @click="commit(select)">
            搜索
          </el-button>
        </template>
      </content-search>
    </div>
    <div>
      <el-table
        :data="tableData"
        style="width: 100%"
        v-loading="!tableData.length"
      >
        <el-table-column prop="algoId" label="算法ID" width="15%">
        </el-table-column>
        <el-table-column prop="algoName" label="算法名称" width="15%">
        </el-table-column>
        <el-table-column prop="algoType" label="算法类型" width="15%">
        </el-table-column>
        <el-table-column prop="algoEdition" label="版本号" width="15%">
        </el-table-column>
        <el-table-column
          prop="algoTime"
          label="注册日期"
          width="25%"
        ></el-table-column>
        <el-table-column label="操作" width="15%">
          <template slot-scope="scope">
            <el-button
              @click="unsubscribeMsg(scope.row)"
              type="text"
              size="small"
              :scope="scope"
            >
              取消订阅</el-button
            >
            <el-button
              @click="$emit('detail', scope.row)"
              type="text"
              size="small"
              >详情
            </el-button>
          </template>
        </el-table-column>
      </el-table>
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
import contentSearch from "@/components/communal/ContentSearch.vue";
import { getAlgo } from "@/services/algo";
export default {
  name: "SubscribeMgt",
  data() {
    return {
      select: "",
      tableData: [],
    };
  },
  created() {
    this.requestAlgo();
  },
  methods: {
    async requestAlgo(params = undefined) {
      this.tableData = await getAlgo(params);
    },
    commit(msg) {
      this.requestAlgo({ algoName: msg });
    },
    unsubscribeMsg(data) {
      data.subscribe = false;
      this.$confirm("确认取消订阅该算法?", "取消确认", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          data.subscribe = false;
          this.$message({
            type: "success",
            message: "已取消订阅",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消修改",
          });
        });
    },
  },
  components: {
    contentSearch,
  },
};
</script>
<style scoped>
::v-deep .my-alogrithm {
  justify-content: right;
}
::v-deep .el-table__header,
::v-deep .el-table__body,
::v-deep .el-table__empty-block {
  width: 100% !important;
}
</style>