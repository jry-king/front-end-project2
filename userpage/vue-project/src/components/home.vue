<template>
  <el-container style="height: 750px; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1', '3']">
        <el-submenu index="1">
          <template class="faxian" slot="title"><i class="el-icon-menu"></i>发现</template>
          <el-menu-item name="1" index="1-1"></el-menu-item>
            <a href="http://localhost:8080/#/food_review" target="_blank">美食点评</a>
          <el-menu-item index="1-2">
            美食榜
          </el-menu-item>
          <el-menu-item-group title="资讯">
            <el-menu-item index="1-3">
              <a href="http://localhost:8080/#/queue" target="_blank">排队相关</a>
            </el-menu-item>
            <el-menu-item index="1-3">
              本周菜单
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-message"></i>消息</template>
          <el-menu-item-group>
            <el-menu-item index="2-1">
              <a href="http://localhost:8080/#/forum">论坛</a>>
            </el-menu-item>
            <el-menu-item index="2-2">
              <a href="http://localhost:8080/#/like">收藏</a>
            </el-menu-item>
            <el-badge :value="3" class="item">
              <el-button  :plain="true" @click="open" size="medium">
                <a href="http://localhost:8080/#/like">赞</a>
              </el-button>
            </el-badge>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header style="text-align: left; font-size: 20px">
      </el-header>
      <el-dropdown @command="handleCommand" placement="top">
        <span class="el-dropdown-link">
          下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="zhujiemian">主界面</el-dropdown-item>
          <el-dropdown-item command="jipaifan">鸡排饭</el-dropdown-item>
          <el-dropdown-item command="niuroulamian">牛肉拉面</el-dropdown-item>
          <el-dropdown-item command="shutiao">薯条</el-dropdown-item>
          <el-dropdown-item command="choudoufu">臭豆腐</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-main v-show="zhujiemian">
        <!-- 图片轮播-->
        <el-carousel :interval="4000" type="card" height="330px">
          <el-carousel-item v-for="item in 1" :key="item">
            <img src='../../static/4.png'>
            <h3>{{ item }}</h3>
          </el-carousel-item>
          <el-carousel-item v-for="item in 1" :key="item">
            <img src='../../static/3.png'>
            <h3>{{ item }}</h3>
          </el-carousel-item>
          <el-carousel-item v-for="item in 1" :key="item">
            <img src='../../static/2.png'>
            <h3>{{ item }}</h3>
          </el-carousel-item>
          <el-carousel-item v-for="item in 1" :key="item">
            <img src='../../static/1.png'>
            <h3>{{ item }}</h3>
          </el-carousel-item>
          <el-carousel-item v-for="item in 1" :key="item">
            <img src='../../static/5.png'>
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
        <!-- 评价&简介-->
        <el-collapse v-model="activeNames" @change="handleChange"
                     style="background-color: lightskyblue;width:900px">
          <el-collapse-item class="el-icon-check" title="今日科普：四餐铁板烧" name="1"
                            style="background-color:lightskyblue; font-size:30px" >
            <div style="background-color: lightskyblue; font-size:15px">   交大几乎每个餐厅都有铁板烧窗口。和其它餐厅的铁板烧比起来，四餐的铁板烧略显中庸。
              四餐的铁板烧可选的种类较多。 就口味而言，无论是炒面炒饭蛋包饭，还是猪排鸡排龙利鱼，都能尝到些铁板烧特有的酥香。 但菜的量与其它餐厅相比略显不足，若是想一饱口福，也许这个窗口并不能让你过瘾。
            </div>
            <div style="background-color: lightblue; font-size:20px">饱腹指数：3/5</div>
            <div style="background-color: lightblue; font-size:20px">推荐指数：3/5</div>
          </el-collapse-item>
          <el-collapse-item class="el-icon-star-on" title="今日推荐:土耳其烤肉饭" name="1"
                            style="background-color:lightskyblue; font-size:30px" >
            <div style="background-color: lightskyblue; font-size:15px">
              四餐的烤肉饭销售已久，其公道的价格和不错的味道总是能在正餐时间吸引到大量的食客。 除了直接点选标价牌提供的种类以外，同学们也可以自己在各种烤肉与素菜中选择搭配，吃到自己喜欢的组合。
              烤肉的种类很多，鸡肉牛肉猪肉应有尽有。烤肉的味道和外卖的烤肉饭有点相近，不过比外卖要好吃、正宗一些。 而一盘烤肉饭的量相当足，无论男生女生都能吃饱。总体而言，可以长期光顾，不知道吃什么的时候就可以来一碗。 </div>
            <div class="el-icon-location-outline" style="background-color: lightblue; font-size:20px">窗口：四餐-土耳其烤肉饭</div>
            <div style="background-color: lightblue; font-size:20px">饱腹指数：4/5</div>
            <div style="background-color: lightblue; font-size:20px">推荐指数：5/5</div>
          </el-collapse-item>
        </el-collapse>
      </el-main>
      <el-main v-show="jipaifan">
        <img src="../../static/4.png">
        <p>Welcome to 鸡排饭</p>
        <span>价格：15元</span>
      </el-main>
      <el-main v-show="niuroulamian">
        <img src="../../static/2.png">
        <p>Welcome to 牛肉拉面</p>
        <span>价格：12元</span>
      </el-main>
      <el-main v-show="shutiao">
        <img src="../../static/3.png">
        <p>Welcome to 薯条</p>
        <span>价格：4元</span>
      </el-main>
      <el-main v-show="choudoufu">
        <img src="../../static/1.png">
        <p>Welcome to 臭豆腐</p>
        <span>价格：3元</span>
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
  //import ElAlert from "../../node_modules/element-ui/packages/alert/src/main";
 // import ElDropdown from "../../node_modules/element-ui/packages/dropdown/src/dropdown";
  export default {
   // components: {
     // ElDropdown,
     // ElAlert},
    data() {
      const item = {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      };
      return {
        zan:false,
        zhujiemian: true,
        jipaifan: false,
        niuroulamian: false,
        shutiao: false,
        choudoufu: false,
        input:'',
       // tableData: Array(20).fill(item),
        //selectedOptions3: ['食堂', '菜系'],
        activeNames: ['1']
      }
    },
    methods: {
      handleCommand(command) {
        this.$message('click on item ' + command);
        this.zhujiemian = (command === "zhujiemian")
        this.jipaifan = (command === "jipaifan")
        this.niuroulamian = ( command === "niuroulamian")
        this.shutiao = (command === "shutiao")
        this.choudoufu = (command === "choudoufu")
      },
      open() {
        this.$message('刚刚有人给你点赞了！');
        this.zan=true;
      }
    }
    };
</script>
<style>
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .demo-input-label {
    display: inline-block;
    width: 100px;
  }
  .el-carousel-item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    height:30px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

</style>
