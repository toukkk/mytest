<template>
  <div :id="id" class="chart"></div>
</template>
<script>
import * as echarts from "echarts";
export default {
  name: "ChartsItem",
  props: {
    option: Object,
    id: Number,
  },
  data(){
    return {
      a:[],
    }
  },
  mounted() {
    this.test();
    console.log(!!this.a)
    console.log(this.a.length)
  },
  methods: {
    test() {
      var chartDOM = document.getElementById(this.id);
      console.log(chartDOM.clientHeight)
      var myChart = echarts.init(chartDOM);
      this.option && myChart.setOption(this.option);
    },
  },
};
</script>
<style scoped>
.chart {
  /* display: block; */
  width: 700px;
  height: 400px;
}
</style>
