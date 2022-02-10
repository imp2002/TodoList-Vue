<template>
  <div id="root">
    <div class="todo-container">
      <h1>TodoList</h1>
      <div class="todo-wrap">
        <AppHeader :addTodo="addTodo" />
        <AppList :todos="todos" :check="check" :deleteTodo="deleteTodo" />
        <AppFooter
          :todos="todos"
          :checkAll="checkAll"
          :clearDoneTodo="clearDoneTodo" />
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
    components: { AppHeader, AppList, AppFooter },
    data() {
      return {
        todos: JSON.parse(localStorage.getItem('todos')) || []
      }
    },
    methods: {
      // 添加一个todo
      addTodo(todoObj) {
        this.todos.unshift(todoObj)
      },
      // 勾选,取消勾选
      check(id) {
        this.todos.forEach(todo => {
          if (todo.id === id) todo.done = !todo.done
        })
      },
      // 删除一个todo
      deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id)
      },
      // 全选,取消全选
      checkAll(done) {
        this.todos.forEach(todo => {
          todo.done = done
        })
      },
      // 清除所有已经完成的todo
      clearDoneTodo() {
        this.todos = this.todos.filter(todo => {
          return !todo.done
        })
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
