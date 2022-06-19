<template>
  <div>
    <div>
      <content-search @searchValue="commit">
        <template v-slot:searchLeft>
          <div></div>
        </template>
      </content-search>
    </div>
    <div>
      <el-table
        :data="tableData"
        style="width: 100%"
        v-loading="!tableData.length"
      >
        <el-table-column prop="algoId" label="算法ID" width="12.5%">
        </el-table-column>
        <el-table-column prop="algoName" label="算法名称" width="12.5%">
        </el-table-column>
        <el-table-column label="算法状态" width="12.5%">
          <template slot-scope="scope">
            <div
              class="point"
              :class="{ red: !scope.row.algoState, blue: scope.row.algoState }"
            ></div>
            已{{ !scope.row.algoState ? "下线" : "上线" }}
          </template>
        </el-table-column>
        <el-table-column prop="algoType" label="算法类型" width="12.5%">
        </el-table-column>
        <el-table-column prop="algoSupplier" label="供应商名称" width="12.5%">
        </el-table-column>
        <el-table-column prop="algoTime" label="注册日期" width="12.5%">
        </el-table-column>
        <el-table-column prop="algoEdition" label="算法版本" width="12.5%">
        </el-table-column>
        <el-table-column label="操作" width="12.5%">
          <template slot-scope="scope">
            <el-button
              @click="deleteMsg(scope.row, scope.$index)"
              type="text"
              size="small"
              :scope="scope"
            >
              删除</el-button
            >
            <el-button @click="stateMsg(scope.row)" type="text" size="small">
              {{ scope.row.algoState ? "下线" : "上线" }}
            </el-button>
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
    <div>{{ lenA }}</div>
    <el-button @click="testC">asdf</el-button>
  </div>
</template>
<script>
import contentSearch from "@/components/communal/ContentSearch.vue";
import { getAlgo } from "@/services/algo";

export default {
  name: "ServiceMarket",
  data() {
    return {
      tableData: [],
      a: [1, 2, 3, 4],
      test: { name: { id: "1" }, ke: "asdf" },
      name: "",
    };
  },
  computed: {
    lenA() {
      return this.a.length + 10;
    },
  },
  watch: {
    // test(newVal, olvVal) {
    //   alert(oldVal + "--" + val);
    // },
    "a.length": {
      handler(newVal) {
        alert(newVal);
      },
    },
  },
  created() {
    this.requestAlgo();
    this.a[1] = 3;
  },
  methods: {
    testC() {
      this.a.push(3);
    },
    async requestAlgo(params = undefined) {
      this.tableData = await getAlgo(params);
    },
    commit(msg) {
      this.requestAlgo({ algoName: msg });
    },
    deleteMsg(data, index) {
      this.$confirm("确认删除该记录吗?", "删除确认", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          if (data.algoId) {
            // this.requestAlgo({ remover: index });
            this.tableData.splice(index, 1);
            this.$message({
              type: "success",
              message: "删除成功",
            });
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    stateMsg(data) {
      if (data.algoState) {
        this.$confirm("确认下线该算法?", "确认下线", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
        })
          .then(() => {
            data.algoState = false;
            this.$message({
              type: "success",
              message: "已下线",
            });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消下线",
            });
          });
      } else {
        this.$confirm("确认上线该算法?", "确认上线", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
        })
          .then(() => {
            data.algoState = true;
            this.$message({
              type: "success",
              message: "已上线",
            });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消上线",
            });
          });
      }
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
.point {
  width: 8px;
  height: 8px;
  border-radius: 4px;
  display: inline-block;
}
.red {
  background-color: red;
}
.blue {
  background-color: blue;
}
</style>