<template>
    <div>
      <img src="../assets/main.png">
      <button  class="back_button"  v-on:click='back()'>Back to home</button>
    </div>
</template>
<script>
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
    }
</script>
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
