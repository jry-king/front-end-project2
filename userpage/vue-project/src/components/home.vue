<template>
<el-container style="height: 500px; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-menu"></i>发现</template>
          <el-menu-item index="1-1">美食点评</el-menu-item>
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
    <el-header style="text-align: left; font-size: 20px">
      <el-cascader
        :options="options"
        v-model="selectedOptions3"
      ></el-cascader>
    </el-header>
    <el-main>
    </el-main>
  </el-container>
</el-container>
</template>
<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      };
      return {
        input:'',
        tableData: Array(20).fill(item),
        options: [ {
          value: '食堂',
          label: '食堂',
          children: [{
            value: 'basic',
            label: '四餐',
            children: [{
              value: 'layout',
              label: '甜魔烘培'
            }, {
              value: 'icon',
              label: '成都小菜'
            }, {
              value: 'button',
              label: '唐汇'
            },{
              value: 'button',
              label: '韩式鸟叔炸鸡'
            },{
              value: 'button',
              label: '泰式咖喱'
            },{
              value: 'button',
              label: '港式滑蛋饭'
            },{
              value: 'button',
              label: '顺德风味'
            },{
              value: 'button',
              label: '麻辣香锅'
            },{
              value: 'button',
              label: '广式拉肠粉'
            },{
              value: 'button',
              label: '风味小吃'
            },{
              value: 'button',
              label: '河南烩面'
            },

            ]
          }, {
            value: 'form',
            label: '二餐',
          }, {
            value: 'data',
            label: '三餐',
          }, {
            value: 'notice',
            label: '一餐',
          }, {
            value: '五餐',
            label: '五餐',
          }, {
            value: 'others',
            label: '六餐',
          }]
        }, {
          value: 'resource',
          label: '菜系',
          children: [{
            value: 'axure',
            label: '本帮菜'
          }, {
            value: 'sketch',
            label: '川菜'
          }, {
            value: 'docs',
            label: '西餐',
            children:[{
              value: 'layout',
              label: '二餐时光塔'
              }, {
              value: 'jimu',
              label: '四餐吉姆利德',
            },{
              value:'jimu1',
              label:'五餐吉姆利德'},
              {
                value:'liu',
                label:'六餐'}]
          }]
        }],
        selectedOptions3: ['食堂', '菜系']

      }
    }
  };
</script>
<style>
  .demo-input-label {
    display: inline-block;
    width: 130px;
  }
</style>
