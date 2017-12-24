<template>
    <div>
      <table>
        <tr><td><p v-text="helps"></p></td></tr>
        <tr v-for = "item in items">
          <h2 v-on:click='toshow(item)'v-if='item.showLabel'>
            <p class='item-label'v-if="item.isFinished">{{item.label}}</p>
            <p class='item-status' v-if='item.isFinished'>Like</p>
            <button class='item-delete' v-if='item.showDelete'
                    v-on:click='deleteClick(item)'>dislike</button>
          </h2>
        </tr>
        <tr><td><button class="back_button" v-on:click='back()'>Back to home</button></td></tr>
      </table>

    </div>
</template>
<script>
  import Store from './store'
    export default{
        name: 'like',
        data () {
            return {
              items:  Store.fetch(),
              helps: "Click the text to 'dislike' it!",
              showDelte: 'false'
            }
        },
      watch: {
        items:　{
          handler: function (items) {
            Store.save(items)
          },
          deep: true
        }
      },
      methods:{
        deleteClick:function (item) {
          this.items.splice(this.items.indexOf(item),1)
          this.isFinished=false
          this.showDelete=false
        },
        back:function () {
          this.$router.push('/home')
        },
        toshow: function (item) {
            if(!item.showDelete){
                item.showDelete = true
            }
          else {
              item.showDelete = false
            }
        }
      }
    }
</script>
<style>
  table {
    border:0;
    height:350px;
    width:280px;
    font-family:"Times New Roman";
    font-size:20px;
  }
  tr {
    text_align:center;
    border:1px solid ;
    padding:3px;
  }
  .back_button {
    display:inline;
    font-size: 14px;
    width: 100px;
    color: red;
    padding: 0 5px;
    cursor: pointer;
  }
</style>
