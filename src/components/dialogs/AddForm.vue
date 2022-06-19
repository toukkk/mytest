<template>
  <div>
    <el-dialog
      title="新增供应商"
      :visible.sync="test"
      @close="closed"
      :close-on-click-modal="false"
    >
      <div style="width: 80%">
        <el-form
          :model="formData"
          :rules="rules"
          ref="formData"
          label-width="100px"
          class="demo-ruleForm"
          size="small"
        >
          <el-form-item label="供应商名称" prop="supplierName">
            <el-input
              placeholder="请输入供应商名称"
              v-model="formData.supplierName"
            ></el-input>
          </el-form-item>
          <el-form-item label="联系人" prop="contacts">
            <el-input
              placeholder="请输入联系人"
              v-model="formData.contacts"
            ></el-input>
          </el-form-item>
          <el-form-item label="职务" prop="post">
            <el-input
              placeholder="请输入职务"
              v-model="formData.post"
            ></el-input>
          </el-form-item>
          <el-form-item label="联系人电话" prop="telephone">
            <el-input
              placeholder="请输入联系人电话"
              v-model="formData.telephone"
            ></el-input>
          </el-form-item>
          <el-form-item label="联系人邮箱" prop="mailbox">
            <el-input
              placeholder="请输入联系人邮箱"
              v-model="formData.mailbox"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="resetForm('formData', formData)"
              >重 置</el-button
            >
            <el-button type="primary" @click="submitForm('formData', formData)"
              >创 建</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "AddFrom",
  props: {
    dialogVisible: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      test: false,
      data: {},
      formData: {
        supplierName: "",
        contacts: "",
        post: "",
        telephone: "",
        mailbox: "",
      },
      rules: {
        supplierName: [
          { required: true, message: "供应商名称不能为空", trigger: "blur" },
        ],
        contacts: [
          { required: true, message: "联系人不能为空", trigger: "blur" },
        ],
        post: [{ required: true, message: "职务不能为空", trigger: "blur" }],
        telephone: [
          { required: true, message: "联系人电话不能为空", trigger: "blur" },
          {
            pattern: /^1[345789]\d{9}$/,
            message: "请输入正确电话格式",
            trigger: "blur",
          },
        ],
        mailbox: [
          { required: true, message: "联系人邮箱不能为空", trigger: "blur" },
          // { pattern:/^([a-zA-Z0-9]|[0-9]){5, 11}+@[a-zA-Z0-9]+\.[a-zA-Z]{2, 4}$/ ,
          // message: "请输入正确邮箱格式", trigger: "blur"},
        ],
      },
    };
  },
  mounted() {
    this.test = this.dialogVisible;
  },
  methods: {
    closed() {
      (this.test = false), this.$emit("update:dialogVisible", false);
    },
    submitForm(ref, data) {
      this.$refs[ref].validate((value) => {
        if (!value) {
          return false;
        } else {
          this.$message({
            type: "success",
            message: "创建成功",
          });
        }
        this.$emit("addData", data);
        this.closed()
      });
    },
    resetForm(ref) {
      this.$refs[ref].resetFields();
    },
  },
};
</script>
<style scoped>
</style>