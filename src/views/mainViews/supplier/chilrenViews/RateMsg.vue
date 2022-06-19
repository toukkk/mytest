<template>
  <div class="rate-wrap">
    <div class="user-msg">
      <img :src="imageUrl" class="user-img" />
      <div>
        <h3>{{ user.name }}</h3>
        <div>微信号：{{ user.weChat }}</div>
      </div>
    </div>
    <div class="rate-column">
      <h3>用户{{ user.name }}您对该系统的评价如何：</h3>
      <div class="rate-score" id="rate">
        <div>
          <span>网络流畅：</span>
          <el-rate v-model="value1" show-text :color="colors" />
        </div>
        <div>
          <span>系统界面：</span>
          <el-rate v-model="value2" show-text :color="colors" />
        </div>
        <div>
          <span>操作体验：</span>
          <el-rate v-model="value3" show-text :color="colors" />
        </div>
        <div>
          <span>客服服务：</span>
          <el-rate v-model="value4" show-text :color="colors" />
        </div>
      </div>
      <h4>写下您的评语：</h4>
      <div class="rate-indent">
        <textarea placeholder="请输入内容" v-model="textarea"></textarea>
      </div>
      <h4>需要上传的图片：</h4>
      <div class="rate-indent">
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
        >
          <span>上传</span>
        </el-upload>
      </div>
      <div class="rate-buttom-flex">
        <button class="rate-button" @click="release">发布评价</button>
      </div>
    </div>
    <h2>用户评价：</h2>
    <div v-for="item in rateList" :key="item.name" class="item-indent">
      <img :src="item.url" class="item-img" />
      <span>用户 {{ item.name }}</span>
      <span class="item-span">评价:</span>
      <el-rate v-model="item.rate" :color="colors" />
      <p>{{ item.text }}</p>
    </div>
  </div>
</template>
<script>
import { getRate } from "@/services/algo";

export default {
  name: "RateMsg",
  data() {
    return {
      imageUrl: require("@/assets/image/avatar.jpeg"),
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"],
      user: this.$store.state.user.user,
      value1: null,
      value2: null,
      value3: null,
      value4: null,
      textarea: "",
      myRate: {},
      rateList: [],
    };
  },
  computed: {
    rate() {
      return (this.value1 + this.value2 + this.value3 + this.value4) / 4;
    },
  },
  mounted() {
    this.requestRate();
  },
  methods: {
    async requestRate() {
      this.rateList = await getRate();
    },
    release() {
      if (
        this.value1 == 0 ||
        this.value2 == 0 ||
        this.value3 == 0 ||
        this.value4 == 0
      ) {
        this.$confirm("有评分未填写完整,是否前往修改", {
          confirmButtonText: "是",
          cancelButtonText: "否",
          type: "warning",
        }).then(() => {
          //获取跳转id元素的位置
          // const target = document.getElementById("rate").offsetTop
          //将id元素的滚动条已到顶部
          document.getElementById("mainView").scrollTop = 0;
          // 将id元素展示到可是区域的顶部
          // document.getElementById("rate").scrollIntoView({'scroll-behavior': 'smooth'});
        });
      } else {
        this.myRate = {
          name: this.user.name,
          rate: this.rate,
          url: this.imageUrl,
          text: this.textarea,
        };
        this.$message({
          message: "发布成功",
          type: "success",
        });
      }
    },
  },
};
</script>
<style scoped>
::v-deep .el-rate {
  display: inline-block;
}
.rate-wrap {
  padding: 20px;
  width: 80%;
}
.user-msg {
  display: flex;
  width: 250px;
  justify-content: space-around;
  align-items: center;
  background-color: #f9f7f7;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 10%);
  margin-bottom: 10px;
}
.user-img {
  width: 50px;
  height: 50px;
}
.rate-column {
  border: 1px solid red;
  padding-left: 20px;
  padding-bottom: 20px;
  border-radius: 10px;
  width: 60%;
  max-width: 800px;
  min-width: 400px;
}
.rate-score > div {
  text-align: center;
  font-weight: bold;
  line-height: 2;
  font-size: 1.2em;
}
.rate-indent textarea {
  width: 90%;
  height: 180px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 16px;
  resize: none;
}
.rate-buttom-flex {
  display: flex;
  justify-content: flex-end;
}
.rate-button {
  /* float: right; */
  background-color: rgb(255, 255, 142);
  font-size: 1.3em;
  border-radius: 5px;
  line-height: 1.8;
  border: 1px solid rgb(151, 151, 151);
  margin: 10px 60px;
}
.item-indent,
.rate-indent {
  padding-left: 20px;
}
.item-indent {
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 10%);
  padding-top: 10px;
  padding-bottom: 10px;
}

.item-span {
  padding-left: 60px;
}
.item-img {
  width: 30px;
  height: 30px;
}
</style>