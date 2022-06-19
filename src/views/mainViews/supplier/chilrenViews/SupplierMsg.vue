<template>
  <div class="supplier-wrap" v-loading="!supplier">
    <div>
      <h3>基础信息</h3>
      <p>供应商名称：{{ supplier.supplierName }}</p>
      <p>联系人：{{ supplier.contacts }}</p>
      <p>联系人职务：{{ supplier.post }}</p>
      <p>联系人电话：{{ supplier.telephone }}</p>
      <p>联系人邮箱：{{ supplier.mailbox }}</p>
    </div>
    <div>
      <h3>算法授权</h3>
      <el-button
        size="mini"
        type="primary"
        class="my-button"
        @click="addAlgoEmpower"
        >添加</el-button
      >
      <el-button
        size="mini"
        type="primary"
        class="my-button"
        @click="emptyMsg('algo')"
        >删除</el-button
      >
      <el-table :data="supplier.algoEmpower" style="width: 100%" size="small">
        <el-table-column label="算法名称" prop="algoName"></el-table-column>
        <el-table-column label="上线时间" prop="onLineDate"></el-table-column>
        <el-table-column label="操作" prop="">
          <template slot-scope="scope">
            <el-button
              @click="deleteMsg(scope.row, scope.$index)"
              type="text"
              size="small"
              >删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div>
      <h3>用户授权</h3>
      <el-button
        size="mini"
        type="primary"
        class="my-button"
        @click="addUserEmpower"
        >添加</el-button
      >
      <el-button
        size="mini"
        type="primary"
        class="my-button"
        @click="emptyMsg('user')"
        >删除</el-button
      >
      <el-table :data="supplier.userEmpower" style="width: 100%" size="small">
        <el-table-column label="用户名称" prop="userName"></el-table-column>
        <el-table-column label="授权日期" prop="empowerDate"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              @click="deleteMsg(scope.row, scope.$index)"
              type="text"
              size="small"
              >删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div>
      <add-list
        v-if="dialogAlgoVisible || dialogUserVisible"
        :dialogAlgoVisible.sync="dialogAlgoVisible"
        :dialogUserVisible.sync="dialogUserVisible"
        @algo="algoPush"
        @user="userPush"
      ></add-list>
    </div>
  </div>
</template>
<script>
import addList from "@/components/dialogs/AddList.vue";
import { getSupplier } from "@/services/algo";
import { deleteMsg, emptyMsg } from "@/communal/message";
export default {
  name: "SupplierMsg",
  data() {
    return {
      supplier: [],
      dialogAlgoVisible: false,
      dialogUserVisible: false,
    };
  },
  mounted() {
    this.request({ supplierName: this.$route.query.name });
  },
  methods: {
    async request(params = undefined) {
      this.supplier = await getSupplier(params);
      console.log(this.supplier)
    },
    deleteMsg,
    emptyMsg,
    addAlgoEmpower() {
      this.dialogAlgoVisible = true;
    },
    addUserEmpower() {
      this.dialogUserVisible = true;
    },
    algoPush(val) {
      this.supplier.algoEmpower = this.supplier.algoEmpower.concat(val);
    },
    userPush(val) {
      this.supplier.userEmpower = this.supplier.userEmpower.concat(val);
    },
  },
  components: {
    addList,
  },
};
</script>
<style scoped>
::v-deep .my-button {
  height: 25px;
  width: 40px;
  padding: 0;
  margin-bottom: 20px;
}
::v-deep .el-table th.el-table__cell {
  color: rgb(152, 151, 151);
}
.supplier-wrap {
  min-width: 250px;
  max-width: 500px;
  font-size: 0.8em;
}
.supplier-wrap > div {
  margin-bottom: 40px;
}
h3 {
  padding: 5px 0;
}
</style>