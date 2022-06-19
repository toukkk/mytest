<template>
  <div>
    <div class="my-alogrithm">
      <el-button
        size="mini"
        type="primary"
        class="my-button"
        @click="dialogVisible = true"
      >
        添加
      </el-button>
      <div class="my-alogrithm">
        <el-input placeholder="请输入供应商名称" v-model="search" size="small">
        </el-input>
        <el-button icon="el-icon-search" size="small" @click="commit(search)">
        </el-button>
      </div>
    </div>
    <div>
      <el-table
        :data="supplierData"
        v-loading="!supplierData.length"
        style="width: 100%"
      >
        <el-table-column prop="supplierName" label="供应商名称" width="20%">
        </el-table-column>
        <el-table-column prop="contacts" label="联系人" width="15%">
        </el-table-column>
        <el-table-column prop="post" label="联系人职务" width="15%">
        </el-table-column>
        <el-table-column prop="telephone" label="联系人电话" width="15%">
        </el-table-column>
        <el-table-column prop="mailbox" label="联系邮箱" width="20%">
        </el-table-column>
        <el-table-column label="操作" width="15%">
          <template slot-scope="scope">
            <el-button
              @click="deleteMsg(scope.row, scope.$index)"
              type="text"
              size="small"
            >
              删除
            </el-button>
            <el-button @click="supplierMsg(scope.row)" type="text" size="small">
              详情
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
        :total="supplierData.length"
        small
      >
      </el-pagination>
    </div>
    <div>
      <add-form
        v-if="dialogVisible"
        :dialogVisible.sync="dialogVisible"
        @addData="addData"
      />
    </div>
  </div>
</template>
<script>
import addForm from "@/components/dialogs/AddForm.vue";
import { getSupplier } from "@/services/algo";

export default {
  name: "SupplierMgt",
  data() {
    return {
      search: "",
      supplierData: [],
      dialogVisible: false,
    };
  },
  components: {
    addForm,
  },
  created() {
    this.request();
  },
  methods: {
    async request(params = undefined) {
      this.supplierData = await getSupplier(params);
    },
    commit(msg) {
      this.request({ supplierName: msg });
    },
    addData(data) {
      this.supplierData.push(data);
    },
    deleteMsg(data, index) {
      this.$confirm("确认删除该记录吗?", "删除确认", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          if (data.supplierName) {
            this.supplierData.splice(index, 1);
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
    supplierMsg(value) {
      this.$router.push({
        name: "Supplier",
        query: {
          name: value.supplierName,
          // data: JSON.stringify(value),
        },
      });
    },
  },
};
</script>
<style scoped>
::v-deep .el-table th.el-table__cell {
  color: rgb(142, 142, 142);
}
::v-deep .el-table__header,
::v-deep .el-table__body,
::v-deep .el-table__empty-block {
  width: 100% !important;
}
</style>