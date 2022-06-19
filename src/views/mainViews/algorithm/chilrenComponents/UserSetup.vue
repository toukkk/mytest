<template>
  <div class="set-wrap">
    <div class="user-upload-msg">
      <el-upload
        class="avatar-uploader"
        action="#"
        :show-file-list="false"
        :before-upload="beforeAvatarUpload"
      >
        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      <div>
        <h2>{{ user.name }}</h2>
        <div>微信号：{{ user.weChat }}</div>
      </div>
    </div>
    <div>
      <div><h3>照片墙展示</h3></div>
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :file-list="fileList"
      >
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="" />
      </el-dialog>
    </div>
    <div class="set-carousel">
      <div><h3>轮播图</h3></div>
      <el-carousel trigger="click" height="500px">
        <el-carousel-item v-for="item in fileList" :key="item.name">
          <img :src="item.url" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- <div style="height: 30px"></div> -->
  </div>
</template>
<script>
export default {
  name: "UserSetup",
  props: [],
  data() {
    return {
      imageUrl: require("@/assets/image/avatar.jpeg"),
      dialogImageUrl: "",
      dialogVisible: false,
      disabled: false,
      fileList: this.$store.state.fileList,
      user: this.$store.state.user.user,
    };
  },
  methods: {
    // handleAvatarSuccess(res, file) {
    //   this.imageUrl = URL.createObjectURL(file.raw);
    // },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      if (isJPG && isLt2M) {
        this.imageUrl = file.url;
      }
      return isJPG && isLt2M;
    },
    handlePictureCardPreview(file) {
      console.log(file);
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
  },
};
</script>
<style scoped>
.set-wrap {
  padding: 20px;
}
.user-upload-msg {
  display: flex;
  width: 300px;
  justify-content: space-around;
  background-color: #f4f4f4;
  padding: 40px 60px 40px 20px;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 20%);
}
.set-carousel {
  width: 800px;
  height: 500px;
  /* border: 1px solid rgb(244, 244, 197); */
  margin-bottom: 30px;
}
.set-carousel img {
  /* object-fit:fill; */
  width: 800px;
  height: 500px;
}
.avatar-uploader {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  width: 100px;
}
.avatar-uploader:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
}
.avatar {
  width: 100px;
  height: 100px;
  display: block;
}
</style>