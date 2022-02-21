<template>
  <div id="root">
    <div class="todo-container">
      <h1>TodoList</h1>
      <div class="todo-wrap">
        <AppHeader />
        <AppList />
        <AppFooter />
      </div>
    </div>
  </div>
</template>

<script>
  import AppHeader from './components/AppHeader.vue'
  import AppList from './components/AppList.vue'
  import AppFooter from './components/AppFooter.vue'

  export default {
    name: 'App',
    components: { AppHeader, AppList, AppFooter }
  }
</script>

<style>
  /*base*/
  h1 {
    text-align: center;
    font-size: 50px;
    color: blue;
  }

  body {
    background: #fff;
  }

  .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
      0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }

  .btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
  }

  .btn-edit {
    color: #fff;
    background-color: gray;
    border: 1px solid rgb(89, 148, 170);
    margin-right: 5px;
  }

  .btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
  }

  .btn:focus {
    outline: none;
  }

  .todo-container {
    width: 600px;
    margin: 0 auto;
  }

  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
