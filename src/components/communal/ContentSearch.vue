<template>
  <div class="my-alogrithm">
    <slot name="searchLeft">
      <el-button
        size="mini"
        type="primary"
        class="my-button"
        @click="jumpRegister"
      >
        注册
      </el-button>
    </slot>
    <div class="my-alogrithm">
      <slot name="searchRight">
        <el-input placeholder="请输入算法名称" v-model="search" size="small">
        </el-input>
        <el-button icon="el-icon-search" size="small" @click="commit">
        </el-button>
      </slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "contentSearch",
  props: {},
  data() {
    return {
      search: '',
    };
  },
  mounted(){
    this.search = this.$store.state.search
  },
  beforeDestroy(){
    this.$store.commit('searchVal',this.search)
  },
  methods: {
    jumpRegister() {
      this.$router.push({
        name: "Register",
      });
    },
    commit() {
      this.$emit("searchValue", this.search);
    },
  },
};
</script>
<style scoped>
</style>