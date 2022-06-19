<template>
  <div class="step-wrap">
    <el-steps :active="action" align-center finish-status="success">
      <el-step
        :title="item.step"
        :description="item.text"
        :icon="item.icon"
        v-for="(item, index) in stepsList"
        :key="index"
      ></el-step>
    </el-steps>
    <div class="step-content">
      <div v-show="action === 0">
        <step-form ref="user"/>
      </div>
      <div v-show="action === 1">
        <contact-form ref="contact"/>
      </div>
      <div v-show="action === 2" class="step-content2">test3</div>
      <div v-show="action === 3" class="step-content3">test4</div>
      <div v-show="action === 4" class="step-content4">
        申请完成，感谢您的使用!
      </div>
    </div>
    <div class="step-flex">
      <el-button
        @click="goBack(-1)"
        :disabled="action < 1"
        icon="el-icon-arrow-left"
        >上一步</el-button
      >
      <el-button @click="submit()" :disabled="action > 4">
        下一步
        <i class="el-icon-arrow-right el-icon--right"></i>
      </el-button>
    </div>
  </div>
</template>
<script>
import stepForm from "../chilrenComponents/StepForms.vue";
import contactForm from "../chilrenComponents/ContactForm.vue";
export default {
  name: "ApprovalMsg",
  data() {
    return {
      action: 0,
      stepsList: [
        { step: "步骤一", text: "填写基本信息", icon: "el-icon-edit" },
        { step: "步骤二", text: "留下您的联系方式", icon: "el-icon-phone" },
        { step: "步骤三", text: "选择一些基本设置", icon: "el-icon-setting" },
        { step: "步骤四", text: "关于我们", icon: "el-icon-share" },
      ],
    };
  },
  created() {
    this.$confirm("您准备好了将成为我们的尊享会员吗", "确认", {
      confirmButtonText: "确认",
      cancelButtonText: "取消",
      type: "warning",
    }).catch(() => {
      this.$router.back();
    });
  },
  components: {
    stepForm,
    contactForm,
  },
  methods: {
    goBack(val) {
      this.action += val;
      if (this.action === 4) {
        this.$notify({
          title: "申请成功",
          message: "恭喜您成为我们系统的第13443位会员",
          type: "success",
        });
      }
      if (this.action === 5) {
        this.$router.push({ name: "Rate" });
      }
    },
    submit() {
      this.$refs["user"].$refs["form"].validate().then(() => {
        this.goBack(1);
      });
      // .catch(() => {
      //   console.log("2");
      // });
    },
  },
};
</script>
<style scoped>
.step-wrap {
  height: 100%;
}
.step-content {
  min-height: 355px;
  text-align: center;
  margin-top: 50px;
}
.step-content4 {
  line-height: 2;
  margin: 0px auto;
}
.step-flex {
  display: flex;
  justify-content: center;
}
.step-flex button {
  margin: 15px;
  padding: 12px;
}
</style>