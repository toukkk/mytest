<template>
  <div class="form-wrap">
    <el-form
      :model="userForm"
      status-icon
      :rules="rules"
      ref="form"
      label-width="100px"
      class="demo-rlueForm"
    >
      <el-form-item label="用户名" prop="userName">
        <el-input type="text" v-model="userForm.userName"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input
          type="password"
          v-model="userForm.pass"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input
          type="password"
          v-model="userForm.checkPass"
          autocomplete="off"
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  // props: {
  //   userForm: {
  //     type: Object,
  //     default() {
  //       return {};
  //     },
  //   },
  // },
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.userForm.checkPass !== "") {
          this.$refs["form"].validateField("checkPass");
        }
        callback();
      }
    };
    const validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.userForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      userForm: { userName: "", pass: "", checkPass: "" },
      rules: {
        pass: [{ required: true, validator: validatePass, trigger: "blur" }],
        checkPass: [
          { required: true, validator: validatePass2, trigger: "blur" },
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
.form-wrap {
  width: 300px;
  margin: 0px auto;
}
</style>