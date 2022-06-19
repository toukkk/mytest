<template>
  <div>
    <el-form
      :model="contactForm"
      status-icon
      :rules="rules"
      ref="form"
      label-width="100px"
      class="demo-rlueForm"
    >
      <el-form-item label="电话" prop="ph">
        <el-input type="text" v-model="contactForm.userName"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input
          type="password"
          v-model="contactForm.pass"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input
          type="password"
          v-model="contactForm.checkPass"
          autocomplete="off"
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      contactForm: { userName: "", pass: "", checkPass: "" },
      rules: {
        pass: [{ required: true,trigger: "blur" }],
        checkPass: [
          { required: true, trigger: "blur" },
        ],
        userName: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
        ],
      },
    };
  },
};
</script>
<style scoped>
</style>