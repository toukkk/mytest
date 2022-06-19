<template>
  <div>
    <el-tabs>
      <el-tab-pane label="好友管理">
        <friend-mgt :tabData="tabData"></friend-mgt>
      </el-tab-pane>
      <el-tab-pane label="工具管理">
        <tool-mgt :part="part" @openDrawer="openDrawer"></tool-mgt>
      </el-tab-pane>
      <el-tab-pane label="用户设置">
        <user-set></user-set>
      </el-tab-pane>
      <el-tab-pane label="echarts">
        <div style="display: block;">
            <!-- <div id="charts1" style="width: 700px; height: 400px"></div>
        <div id="charts2" style="width: 700px; height: 400px"></div> -->
            <charts-item :option="option1" :id="option1.id"></charts-item>
            <charts-item :option="option2" :id="option2.id"></charts-item>
        </div>
      </el-tab-pane>
    </el-tabs>
    <el-drawer title="武器库" :visible.sync="drawer" size="30%">
      <div>
        <el-tabs tab-position="left" v-model="tool">
          <el-tab-pane
            v-for="item in part"
            :key="item.option"
            :name="item.option"
          >
            <div slot="label" @click="openInner(item.option)">
              {{ item.option }}
            </div>
            <div class="paging-tool-items">
              <div
                v-for="(item, index) in toolData"
                :key="index"
                class="paging-tool-item"
              >
                <el-popover placement="left" width="200" trigger="hover">
                  <h3 style="text-align: center">{{ item.name }}的属性</h3>
                  <div v-for="(math, index) in item.maths" :key="index">
                    <span>{{ math.attribute }}:</span>
                    <el-progress
                      :percentage="math.val"
                      :format="convertVal"
                    ></el-progress>
                  </div>
                  <img slot="reference" :src="imageUrl" />
                </el-popover>
                <span>{{ item.name }}</span>
                <div class="my-alogrithm paging-button">
                  <el-button
                    size="nimi"
                    type="primary"
                    class="my-button"
                    @click="discard(index)"
                    >丢弃</el-button
                  >
                  <el-button
                    size="nimi"
                    type="primary"
                    class="my-button"
                    @click="equip(item)"
                    >装备</el-button
                  >
                </div>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </el-drawer>
  </div>
</template>
<script>
import friendMgt from "../chilrenComponents/FriendMgt.vue";
import toolMgt from "../chilrenComponents/ToolMgt.vue";
import userSet from "../chilrenComponents/UserSetup.vue";
import chartsItem from "../chilrenComponents/ChartsItem.vue";
import { getFriends, getArms } from "@/services/algo";
// import * as echarts from "echarts";
export default {
  name: "PagingMsg",
  data() {
    return {
      imageUrl: require("@/assets/image/4.jpeg"),
      drawer: false,
      tool: "",
      tabData: [],
      toolData: [],
      part: [],
      option1: {
        id: 1,
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "5%",
          left: "center",
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 2,
            },
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "40",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1048, name: "Search Engine" },
              { value: 735, name: "Direct" },
              { value: 580, name: "Email" },
              { value: 484, name: "Union Ads" },
              { value: 300, name: "Video Ads" },
            ],
          },
        ],
      },
      option2: {
        id: 2,
        title: {
          text: "Stacked Line",
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "Email",
            type: "line",
            stack: "Total",
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: "Union Ads",
            type: "line",
            stack: "Total",
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: "Video Ads",
            type: "line",
            stack: "Total",
            data: [150, 232, 201, 154, 190, 330, 410],
          },
          {
            name: "Direct",
            type: "line",
            stack: "Total",
            data: [320, 332, 301, 334, 390, 330, 320],
          },
          {
            name: "Search Engine",
            type: "line",
            stack: "Total",
            data: [820, 932, 901, 934, 1290, 1330, 1320],
          },
        ],
      },
    };
  },
  mounted() {
    this.requestFriends();
    this.requestPart();
    // this.echarts();
  },
  methods: {
    async requestFriends() {
      this.tabData = await getFriends();
    },
    async requestTool(part = undefined) {
      this.toolData = await getArms({ name: "tool", part });
    },
    async requestPart(replace = undefined) {
      this.part = await getArms({ name: "part", replace });
    },
    // async getWeapon() {
    //   const { data } = await getArms();
    //   console.log(data);
    // },
    openDrawer(val) {
      this.drawer = true;
      this.tool = val;
      this.openInner(val);
    },
    openInner(val) {
      this.requestTool(val);
    },
    equip(tool) {
      this.requestPart(tool);
    },
    discard(index) {
      this.$confirm("确认丢弃该装备吗?", "丢弃确认", {
        confirmButtonText: "丢弃",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          // this.requestAlgo({ remover: index });
          this.toolData.splice(index, 1);
          this.$message({
            type: "success",
            message: "已丢弃",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消丢弃",
          });
        });
    },
    convertVal(val) {
      return val;
    },
    // echarts() {
    //   var chartDOM1 = document.getElementById("charts1");
    //   var myChart1 = echarts.init(chartDOM1);
    //   this.option1 && myChart1.setOption(this.option1);
    //   var chartDOM2 = document.getElementById("charts2");
    //   var myChart2 = echarts.init(chartDOM2);
    //   this.option2 && myChart2.setOption(this.option2);
    // },
  },
  components: {
    friendMgt,
    toolMgt,
    userSet,
    chartsItem,
  },
};
</script>
<style scoped>
.paging-tool-items {
  height: calc(100vh - 80px);
  overflow: auto;
}
.paging-tool-item {
  padding: 20px;
  text-align: center;
  width: 250px;
}
.paging-tool-item img {
  /* object-fit: fill; */
  width: 100%;
}
.paging-button {
  width: 100%;
  justify-content: space-around;
  padding: 15px 0;
}
</style>
