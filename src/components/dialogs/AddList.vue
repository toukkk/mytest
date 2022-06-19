<template>
  <div>
    <div v-for="(item, index) in listData" :key="index">
      <el-dialog
        :title="item.title + '列表'"
        :visible.sync="item.test"
        @close="closed"
        :close-on-click-modal="false"
      >
        <div>
          <el-button
            class="my-button"
            size="nimi"
            type="primary"
            @click="upSeletion"
            >选择</el-button
          >
          <el-table
            :data="item.list"
            :ref="item.name"
            style="width: 100%"
            size="small"
            @selection-change="selectionMsg"
          >
            <el-table-column type="selection" width="5%"> </el-table-column>
            <el-table-column
              :label="item.title + '名称'"
              prop="Name"
              width="75%"
            ></el-table-column>
            <el-table-column label="操作" width="20%">
              <template slot-scope="scope">
                <el-button
                  @click="selectionRow(scope.row, item.name)"
                  type="text"
                  size="small"
                  >选择
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script>
export default {
  name: "AddList",
  props: {
    dialogUserVisible: {
      type: Boolean,
      required: true,
    },
    dialogAlgoVisible: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      listData: [
        {
          list: [{ Name: "表情包" }, { Name: "动态图" }],
          title: "算法",
          name: "algoNameList",
          test: false,
        },
        {
          list: [{ Name: "tiezhu" }, { Name: "ergou" }],
          title: "用户",
          name: "userNameList",
          test: false,
        },
      ],
      multipleSelection: [],
    };
  },
  mounted() {
    this.listData[0].test = this.dialogAlgoVisible;
    this.listData[1].test = this.dialogUserVisible;
  },
  methods: {
    closed() {
      this.listData[0].test = false;
      this.$emit("update:dialogAlgoVisible", false);
      this.listData[1].test = false;
      this.$emit("update:dialogUserVisible", false);
    },
    selectionRow(data, ref) {
      this.$refs[ref][0].toggleRowSelection(data);
    },
    selectionMsg(val) {
      this.multipleSelection = val;
    },
    upSeletion() {
      if (this.dialogAlgoVisible) {
        let value = this.multipleSelection.map((val) => {
          val.algoName = val.Name;
          val.onLineDate = "未上线";
          delete val.Name;
          return val;
        });
        this.$emit("algo", value);
      } else {
        let value = this.multipleSelection.map((val) => {
          val.userName = val.Name;
          val.empowerDate = "未授权";
          delete val.Name;
          return val;
        });
        this.$emit("user", value);
      }
      this.closed();
    },
  },
};
</script>
<style scoped>
::v-deep .el-table-column--selection .cell,
::v-deep .el-table th.el-table__cell > .cell {
  padding-right: 10px;
  padding-left: 10px;
}
::v-deep .el-table__header,
::v-deep .el-table__body,
::v-deep .el-table__empty-block {
  width: 100% !important;
}
</style>