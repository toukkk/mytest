<template>
  <div>
    <el-table :data="datas" style="width: 100%">
      <!-- element-loading-target = "document.querySelector('.el-table__body-wrapper')" -->
      <el-table-column
        :prop="item.prop"
        :label="item.label"
        :width="item.width || '15%'"
        v-for="(item, index) in columns"
        :key="index"
      >
      </el-table-column>
      <el-table-column label="操作" width="15%">
        <template slot-scope="scope">
          <el-button
            @click="subscribeMsg(scope.row)"
            type="text"
            size="small"
            :scope="scope"
          >
            订阅
          </el-button>
          <el-button @click="serviceMsg" type="text" size="small">
            发布
          </el-button>
          <el-button type="text" size="small">
            <el-dropdown placement="bottom">
              <el-button type="text" size="small">更多</el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click.native="$emit('detail', scope.row)">
                  详情
                </el-dropdown-item>
                <slot name="delete"></slot>
                <el-dropdown-item
                  @click.native="deleteMsg(scope.row, scope.$index)"
                >
                  删除
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-button>
        </template>
      </el-table-column>
    </el-table>
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
export default {
  name: "contentTable",
  data() {
    return {
      tableData: [],
    };
  },
  props: ["datas", "columns"], //options:{type:'primary',click: () => {}}
  mounted() {},
  methods: {
    subscribeMsg(data) {
      data.subscribe = true;
      this.$message({
        type: "success",
        message: "订阅成功!",
      });
      this.$confirm("订阅成功, 是否跳转到订阅管理?", "消息提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      }).then(() => {
        this.$router.push({
          name: "SubscribeMgt",
        });
      });
    },
    serviceMsg() {
      this.$message({
        type: "success",
        message: "发布成功!",
      });
      this.$confirm("发布成功, 是否跳转到服务市场?", "消息提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        this.$router.push({
          name: "ServiceMarket",
        });
      });
    },
    deleteMsg(data, index) {
      this.$parent.deleteMsg(data, index);
      // this.$emit("deleteMsg",{data, index})
    },
  },
};
</script>
<style scoped>
::v-deep .el-table__header,
::v-deep .el-table__body,
::v-deep .el-table__empty-block {
  width: 100% !important;
}
</style>