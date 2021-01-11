<template>
  <div id="app">
    <!-- <div class="ss">
      <van-button type="primary">主要按钮</van-button>
      <van-button type="info">信息按钮</van-button>
    </div>-->
    <!-- <div class="uu" style="margin-top:.12rem">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
    </div>-->
    <!-- 选中的额时间 -->
    <!-- <div class="hh" style="width:2rem;height:.5rem;border:1px solid pink;margin:0 auto">{{value}}</div> -->
    <!-- 时间picker -->
    <!-- <van-datetime-picker
      v-model="currentDate"
      type="date"
      title="选择年月日"
      @confirm="handleTime"
      @cancel="handleEnd"
      :min-date="minDate"
      :max-date="maxDate"
    />-->
    <!-- <div class="box" style="width:2rem;height:50px;margin:0 auto">
      <span class="hour" style="background:red">00</span>
      :
      <span class="minute" style="background:red">00</span>
      :
      <span class="second" style="background:red">00</span>
    </div>
    <div class="btn-nn">
      <div
        style="padding:.02rem .05rem;background-color:green;display:inline-block;"
        @click="handleGG"
      >点击按钮</div>
      <div :class="[flag? 'dd' : 'mm']">11111111</div>
    </div>-->
    <!-- 地区联动 -->
    <!-- <el-cascader size="large" :options="options" v-model="selectedOptions" @change="handleChange"></el-cascader> -->
    <!-- <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
      <el-radio-button label="top">top</el-radio-button>
      <el-radio-button label="right">right</el-radio-button>
      <el-radio-button label="bottom">bottom</el-radio-button>
      <el-radio-button label="left">left</el-radio-button>
    </el-radio-group>
    <el-tabs :tab-position="tabPosition" style="height: 200px;">
      <el-tab-pane label="用户管理">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
    </el-tabs>-->
    <!-- 导出功能 -->
    <div>
      <!--导出按钮-->
      <el-button type="primary" style="margin:20px;" @click="exportExcelSelect">导出Excel</el-button>
      <!--原始表格-->
      <el-table :data="tableData" @selection-change="handleSelectionChange">
        <el-table-column type="selection"></el-table-column>
        <el-table-column prop="date" label="日期"></el-table-column>
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column label="详细地址">
          <el-table-column prop="province" label="省份"></el-table-column>
          <el-table-column prop="city" label="市区"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
          <el-table-column prop="zip" label="邮编"></el-table-column>
        </el-table-column>
        <el-table-column fixed="right" label="操作">
          <template>
            <el-button type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!--预览弹窗表格-->
      <el-dialog title="表格保存预览" width="70%" :visible.sync="selectWindow">
        <el-table :data="selectData" id="selectTable" height="380px">
          <el-table-column prop="date" label="日期"></el-table-column>
          <el-table-column prop="name" label="姓名"></el-table-column>
          <el-table-column label="详细地址">
            <el-table-column prop="province" label="省份"></el-table-column>
            <el-table-column prop="city" label="市区"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
            <el-table-column prop="zip" label="邮编"></el-table-column>
          </el-table-column>
        </el-table>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="exportExcel">确定保存</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import "./assets/index.css";
import htmlToExcel from "@/utils/htmlToExcel";
import { Message } from "element-ui";
import { regionData, CodeToText } from "element-china-area-data";
export default {
  name: "App",
  data() {
    return {
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(),
      value: "1111",
      flag: true,
      options: regionData,
      selectedOptions: [],
      tabPosition: "left",
      //表格数据
      tableData: [
        {
          date: "2016-05-03",
          name: "王小天",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-02",
          name: "王小明",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "王小智",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-01",
          name: "王小红",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-08",
          name: "王小华",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-06",
          name: "王小丽",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-07",
          name: "王小花",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        }
      ],
      //表格中选中的数据
      selectData: [],
      selectWindow: false
    };
  },
  mounted() {
    // this.init();
    console.log( "111");
    window.addEventListener("scroll", this.onWindowScroll);
    // this.onWindowScroll();
  },
  methods: {
    exportExcel() {
      htmlToExcel.getExcel("#selectTable", "导出的自定义标题");
    },
    //显示预览弹窗
    exportExcelSelect() {
      Message("这是一条消息提示");
      if (this.selectData.length < 1) {
        Message.error("请选择要导出的内容！");
        return false;
      }
      this.selectWindow = true;
    },
    //选中数据
    handleSelectionChange(val) {
      this.selectData = val;
    },
    handleChange() {
      var loc = "";
      for (let i = 0; i < this.selectedOptions.length; i++) {
        loc += CodeToText[this.selectedOptions[i]];
      }
      alert(loc);
      console.log("111111");
    },
    handleTime(e) {
      var publishDate =
        e.getFullYear() + "-" + (e.getMonth() + 1) + "-" + e.getDate();
      this.value = publishDate;
    },
    handleEnd() {
      alert("取消选择");
    },
    // init() {
    //   // 1.获取元素
    //   var hour = document.querySelector(".hour"); //小时的盒子
    //   var minute = document.querySelector(".minute"); //分钟的盒子
    //   var second = document.querySelector(".second"); //秒数
    //   var inputTime = new Date().getTime() + Number(3 * 60 * 60 * 1000); //返回的是用户输入时间总的毫秒数
    //   countDown(); //我们先调用一次这个函数，防止第一次刷新页面有空白
    //   // 2.开启定时器
    //   setInterval(countDown, 1000);
    //   function countDown() {
    //     var nowTime = new Date(); //返回的是当前时间总的总的毫秒数
    //     var times = (inputTime - nowTime) / 1000; //times是剩余的总的秒数
    //     var h = parseInt((times / 60 / 60) % 24); //时
    //     // console.log(parseInt(h),"9999999");
    //     h = Math.abs(h);
    //     h = h < 10 ? "0" + h : h;
    //     hour.innerHTML = h; //把剩余的小时 给小时的盒子
    //     var m = parseInt((times / 60) % 60); //分
    //     m = Math.abs(m);
    //     m = m < 10 ? "0" + m : m;
    //     minute.innerHTML = m;
    //     var s = parseInt(times % 60); //当前的秒
    //     s = Math.abs(s);
    //     s = s < 10 ? "0" + s : s;
    //     second.innerHTML = s;
    //   }
    // },
    handleGG() {
      this.flag = !this.flag;
    }
    // onWindowScroll() {
    //   let dy = document.documentElement.scrollTop;
    //   let dx = document.documentElement.scrollLeft;
    //   let leftBox = document.getElementById("about-left-part");
    //   let parentBox = document.getElementById("about-box");
    //   if (leftBox && parentBox) {
    //     let parentBoxTop = parentBox.offsetTop;
    //     console.log(parentBoxTop);
    //     if (dy > parentBoxTop) {
    //       leftBox.style.top = "0px";
    //     } else {
    //       leftBox.style.top = parentBoxTop - dy + "px";
    //     }
    //     //处理横向滑动
    //     if (dx > 0) {
    //       leftBox.style.left = -dx + "px";
    //     } else {
    //       leftBox.style.left = parentBox.offsetLeft + "px";
    //     }
    //     if (!this.isClickLeftSwitch) {
    //       //处理标签的滚动范围
    //       for (let i = 0; i < this.contentHeaders.length - 1; i++) {
    //         let first = this.contentHeaders[i];
    //         let second = this.contentHeaders[i + 1];
    //         if (dy >= first.offTop && dy < second.offTop) {
    //           this.target = first.id;
    //           console.log(this.target);
    //           break;
    //         } else {
    //           this.isClickLeftSwitch = false;
    //         }
    //       }
    //     }
    //   }
    // },
    // onLeftItemClick() {
    //   this.isClickLeftSwitch = true;
    //   this.$router.push({ path: "/about#" + this.target });
    //   console.log(this.target);
    // }
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onWindowScroll);
  }
};
</script>

<style>
#app {
  width: 100%;
  box-sizing: border-box;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
.yy {
  font-size: 0.16rem;
}
.ss {
  width: 100%;
}
.dd {
  color: pink;
}
.mm {
  color: yellow;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.van-picker {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  border-top: 1px solid #f5f5f5;
}
.van-picker__toolbar {
  border-bottom: 1px solid #f5f5f5;
}
</style>
