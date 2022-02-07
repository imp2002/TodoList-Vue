<template>
  <ul class="todo-main">
    <AppItem
      v-for="todoObj in todos"
      :key="todoObj.id"
      :todo="todoObj"
      :check="check"
      :deleteTodo="deleteTodo" />
  </ul>
</template>

<script>
  import AppItem from './AppItem.vue'

  export default {
    name: 'AppList',
    components: {
      AppItem
    },
    props: ['todos', 'check', 'deleteTodo']
  }
</script>

<style scoped>
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>
