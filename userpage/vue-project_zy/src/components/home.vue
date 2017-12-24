<template>
<el-container style="height: 500px; border: 1px solid #eee">
  <el-aside width="180px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-menu"></i>发现</template>
          <el-menu-item index="1-1">
            <a href="http://localhost:8080/#/food_review" target="_blank"
                >美食点评</a>
          </el-menu-item>
          <el-menu-item index="1-2">美食榜</el-menu-item>
        <el-menu-item-group title="资讯">
          <el-menu-item index="1-3">排队相关</el-menu-item>
          <el-menu-item index="1-3">本周菜单</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-message"></i>消息</template>
        <el-menu-item-group>
          <el-menu-item index="1-1">评论</el-menu-item>
          <el-menu-item index="1-2">赞</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
  <el-container>
    <el-header style="text-align: left; font-size: 20px" height="70px">
      <el-cascader :options="options"
        v-model="selectedOptions2" ></el-cascader>
    </el-header>
    <el-main>
      <!-- 图片轮播-->
      <h1></h1>
      <el-carousel :interval="4000" type="card" height="300px">
        <el-carousel-item v-for="item in 6" :key="item">
          <h3>{{ item }}<img src='../../static/1.png'></h3>
        </el-carousel-item>
      </el-carousel>
      <!-- 评价&简介-->
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="反馈 Feedback" name="1">
          <div>交大几乎每个餐厅都有铁板烧窗口。和其它餐厅的铁板烧比起来，四餐的铁板烧略显中庸。
            四餐的铁板烧可选的种类较多。 就口味而言，无论是炒面炒饭蛋包饭，还是猪排鸡排龙利鱼，都能尝到些铁板烧特有的酥香。 但菜的量与其它餐厅相比略显不足，若是想一饱口福，也许这个窗口并不能让你过瘾。
            </div>
          <div>饱腹指数：3/5</div>
          <div>推荐指数：3/5</div>
        </el-collapse-item>
      </el-collapse>
    </el-main>
  </el-container>
</el-container>
</template>
<script>
  export default {
    data() {
      return {
        input: '',
        tableData: Array(20).fill(item),
        options: [
          {
            value: '食堂', label: '食堂',
            children: [
              {
                value: 'basic', label: '四餐',
                children: [
                  {value: 'layout', label: '甜魔烘培'},
                  {value: 'icon', label: '成都小菜'},
                  {value: 'button', label: '唐汇'},
                  {value: 'button', label: '韩式鸟叔炸鸡'},
                  {value: 'button', label: '泰式咖喱'},
                  {value: 'button', label: '港式滑蛋饭'},
                  {value: 'button', label: '顺德风味'},
                  {value: 'button', label: '麻辣香锅'},
                  {value: 'button', label: '广式拉肠粉'},
                  {value: 'button', label: '风味小吃'},
                  {value: 'button', label: '河南烩面'}
                ]
              },
              {value: 'form', label: '二餐',},
              {value: 'data', label: '三餐',},
              {value: 'notice', label: '一餐',},
              {value: '五餐', label: '五餐',},
              {value: 'others', label: '六餐',}
            ]
          },
          {
            value: 'resource', label: '菜系', children: [{
            value: 'axure',
            label: '本帮菜'
          },
            {value: 'sketch', label: '川菜'},
            {
              value: 'docs', label: '西餐', children: [
              {value: 'layout', label: '二餐时光塔'},
              {value: 'jimu', label: '四餐吉姆利德',},
              {value: 'jimu1', label: '五餐吉姆利德'},
              {value: 'liu', label: '六餐'}]
            }]
          }],
        selectedOptions2: ['食堂', '菜系'],
        activeNames: ['1'],
      }
    }
  };
</script>
<style>
  .el-header {
  background-color: #aeddda;
  color: #433;
  line-height: 60px;
}
  .el-aside {
  color: #333;
  }
  .demo-input-label {
    display: inline-block;
    width: 130px;
  }
  .el-carousel-item h3 {
    color: #ddd5d4;
    font-size: 14px;
    opacity: 0.75;
    line-height: 20px;
    height:300px;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #dddfd7;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

</style>
