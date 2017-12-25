<template>
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
</template>
<style>
  body {
    margin: 0;
  }
</style>
<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2017-12-24',
          name: 'xxx',
          address: '上海市东川路800号'
        }],
        loading: true
      };
    }
  };
</script>
