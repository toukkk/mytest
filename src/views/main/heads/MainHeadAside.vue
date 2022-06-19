<template>
  <div>
    <el-menu
      :default-active="actions"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      text-color="#fff"
      active-text-color="#fff"
      @select="handleSelect"
      unique-opened
    >
      <template v-for="item in menuData">
        <el-menu-item
          v-if="!item.children"
          :index="item.routeName"
          :key="item.name"
        >
          <i :class="item.icon"></i>
          <span slot="title">{{ item.name }}</span>
        </el-menu-item>
        <el-submenu v-else :index="item.name" :key="item.name">
          <template slot="title">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.name }}</span>
          </template>
          <el-menu-item
            v-for="children in item.children"
            :key="children.name"
            :index="children.routeName"
          >
            <span slot="title">{{ children.name }}</span>
          </el-menu-item>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>
<script>
export default {
  props: {
    isCollapse: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      menuData: [
        {
          icon: { "el-icon-s-grid": true },
          name: "算法管理",
          children: [
            {
              routeName: "AlgorithmList",
              name: "算法列表",
            },
            {
              routeName: "Paging",
              name: "分页",
            },
            {
              routeName: "Approval",
              name: "申请会员",
            },
          ],
        },
        {
          routeName: "ServiceMarket",
          icon: { "el-icon-s-goods": true },
          name: "服务市场",
        },
        {
          routeName: "SubscribeMgt",
          icon: { "el-icon-message-solid": true },
          name: "订阅管理",
        },
        {
          icon: { "el-icon-s-home": true },
          name: "供应商管理",
          children: [
            {
              routeName: "SupplierMgt",
              name: "供应商列表",
            },
            {
              routeName: "Rate",
              name: "评分",
            },
          ],
        },
      ],
    };
  },
  computed: {
    actions() {
      if (this.$route.name == "Register") {
        return "AlgorithmList";
      } else if (this.$route.name == "Supplier") {
        return "SupplierMgt";
      } else {
        return this.$route.name;
      }
    },
  },
  methods: {
    handleSelect(index) {
      if (index == this.$route.name) return;
      this.$router.push({
        name: index,
      });
    },
  },
};
</script>
<style scoped>
::v-deep .el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 180px;
}
::v-deep .el-submenu__title:hover,
.el-menu-item:hover,
.el-menu-item:focus,
::v-deep .el-menu {
  background-color: #0e263f;
}
::v-deep .el-menu {
  border: 0;
}
::v-deep .el-menu-item.is-active {
  background-color: #33689f;
}
</style>