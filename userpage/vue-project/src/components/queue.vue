<template>
<<<<<<< HEAD
  <el-table
    v-loading="loading"
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
=======
    <div>
      <img src="../assets/main.png">
      <button  class="back_button"  v-on:click='back()'>Back to home</button>
    </div>
>>>>>>> 0de994da18a15d92ed205824dbbb90b33a7ad4ec
</template>
<style>
  body {
    margin: 0;
  }
</style>

<script>
<<<<<<< HEAD
  export default {
    data() {
      return {
        tableData: [{
          date: '2017-12-24',
          name: 'xxx',
          address: '上海市闵行区东川路800号'
        }, {
          date: '2017-12-25',
          name: 'xxx',
          address: '二餐'
        }, {
          date: '2016-05-04',
          name: 'xxx',
          address: '三餐'
        }],
        loading: true
      };
=======
    export default{
        name: 'queue',
        data () {
            return {
            }
        },
        methods: {
            back: function () {
              this.$router.push('/home')
            }
        }
>>>>>>> 0de994da18a15d92ed205824dbbb90b33a7ad4ec
    }
  };
</script>
<<<<<<< HEAD
=======
<style>
  .back_button{
    display:inline;
    font-size: 14px;
    width: 100px;
    color: red;
    padding: 0 5px;
    cursor: pointer;
  }
</style>
>>>>>>> 0de994da18a15d92ed205824dbbb90b33a7ad4ec
