<template>
  <ul class="todo-main">
    <AppItem v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj" />
  </ul>
</template>

<script>
  import AppItem from './AppItem.vue'

  export default {
    name: 'AppList',
    components: {
      AppItem
    },
    computed: {
      todos() {
        return this.$store.state.todos
      }
    },
    watch: {
      todos: {
        deep: true,
        handler(newValue) {
          localStorage.setItem('todos', JSON.stringify(newValue))
        }
      }
    }
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
