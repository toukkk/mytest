<template>
  <div>
    <content-search @searchValue="commit" />
    <content-table
      ref="table"
      :datas="tableData"
      :columns="columns"
      @detail="detail"
    />
  </div>
</template>
<script>
import contentSearch from "@/components/communal/ContentSearch.vue";
import contentTable from "@/components/communal/ContentTable.vue";
import { getAlgo } from "@/services/algo";

export default {
  name: "AlgorithmList",
  components: {
    contentTable,
    contentSearch,
  },
  data() {
    return {
      tableData: [],
      columns: [
        { prop: "algoId", label: "算法ID" },
        { prop: "algoName", label: "算法名称" },
        { prop: "algoType", label: "算法类型" },
        { prop: "algoEdition", label: "版本号" },
        { prop: "algoTime", label: "日期", width: "25%" },
      ],
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
    detail(val) {
      this.$emit("detail", val);
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
  },
};
</script>
<style scoped>
</style>