<template>
    <div id="mylist">
      <h1 v-text="title"></h1>
      <input class = 'inputItem' v-model='newItem' v-on:keyup.enter = "addNew"
             placeholder="What to do?">
      <ul>
      <li v-for = "item in items" class="editing: item == editedItem">
        <h2 v-on:mouseenter='itemEnter(item)' v-on:mouseleave='itemLeave(item)'
            v-if='item.showLabel'>
          <input type="checkbox" v-on:click='toFinish(item)'>
          <p class='item-label'>item.label</p>
          <p class='item-status' v-if='item.isFinished'>finished</p>
          <button class='item-delete' v-if='item.showDelete'
                  v-on:click='deleteClick(item)'>Delete</button>
        </h2>
      </li>
      </ul>
    </div>
</template>
<script>
  import Store from './store' //导入store
    export default{
        name: '',
        data () {
            return {
              title: 'My todo list',
              items:  Store.fetch(),
              newItem: ''
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
        methods: {
          addNew: function () {
              alert("into addnew")
            if (!this.newItem){
              alert("empty item")
              return
            }
            this.items.push({
              id: this.items.length + 1,
              label: this.newItem,
              isFinished: false,
              showDelete: false,
              showLabel: true
            })
            this.newItem = ''
          },
          itemEnter:function (item) {
            item.showDelete = true
          },
          itemLeave:function (item) {
            item.showDelete = false
          },
          toFinish: function (item) {
            item.isFinished = !item.isFinished
          },
          deleteClick:function (item) {
            this.items.splice(this.items.indexOf(item),1)
          }
        }
    }
</script>
<style>
  #mylist {
    width: 500px;
    margin: 30px auto;
    display: flex;
    flex-direction: column;

  }
  .inputItem {
    width: 500px;
    height: 40px;
    padding: 0 5px;
  }
  .item-status {
    display: inline;
    background: green;
    color: white;
    padding: 0 5px;
    font-size: 15px;
  }
  .item-delete {
    display: inline;
    font-size: 14px;
    color: red;
    padding: 0 5px;
    cursor: pointer;
  }
  .item-label {
    display: inline;
  }
</style>
