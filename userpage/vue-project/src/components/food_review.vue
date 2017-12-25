<template>
<el-row>
  <el-col :span="8" v-for="item in 1":key="0" :offset="index > 0 ? 2 : 0">
    <el-card :body-style="{ padding: '30px' }">
      <img src="../../static/3.png" class="image">
      <span>炸薯条</span>
      <img src="../../static/4.png" class="image">
      <span>鸡排饭</span>
      <img src="../../static/2.png" class="image">
      <span>牛肉拉面</span>
      <div style="padding: 14px;">
        <span>food</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
        </div>
      </div>
    </el-card>
  </el-col>
  <el-col :span="8" v-for="item in 1":key="0" :offset="index > 0 ? 2 : 0">
    <el-card :body-style="{ padding: '30px' }">
      <img src="../../static/5.png" class="image">
      <span>贡丸桂林米粉</span>
      <img src="../../static/6.png" class="image">
      <span>金针菇拉面</span>
      <img src="../../static/7.png" class="image">
      <span>武汉热干面</span>
      <div style="margin-left:100px; padding: 14px;">

        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>
</template>
<style>
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>

<script>
  export default {
    data() {
      return {
        currentDate: new Date()
      };
    }
  }
</script>
<style>
  .back_button {
    display:inline;
    font-size: 14px;
    width: 100px;
    color: red;
    padding: 0 5px;
    cursor: pointer;
  }
</style>

