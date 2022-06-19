<template>
  <div class="friends-wrap">
    <el-collapse>
      <el-collapse-item
        :title="item.name + '(' + item.gender + ')'"
        :name="index"
        :key="item.name"
        v-for="(item, index) in tabData"
      >
        <div class="img">
          <span>这就是我的{{ item.relationship }}</span>
          <span>----></span>
          <img :src="item.avatar" width="50px" height="50px" />
        </div>
        <div>座右铭：{{ item.motto }}</div>
        <div>描 述：{{ item.describe }}</div>
        <div>寄 语：{{ item.message }}</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: "FriendMgt",
  props: {
    tabData: Array,
  },
};
</script>
<style scoped>
.friends-wrap {
  padding: 20px;
  width: 90%;
}
.img{
  display: flex;
  align-content:center;
}
.img span{
  padding:20px;
}
</style>