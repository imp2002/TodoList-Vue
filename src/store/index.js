import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  todos: JSON.parse(localStorage.getItem('todos')) || []
}

const getters = {
  total: state => {
    return state.todos.length
  },
  doneTotal: state => {
    return state.todos.filter(todo => todo.done).length
  }
}

const mutations = {
  addTodo(state, todo) {
    state.todos.unshift(todo)
  },
  deleteTodo(state, id) {
    state.todos = state.todos.filter(todo => todo.id !== id)
  },
  // 更新标题，编辑状态，完成状态
  updateTodo(state, todo) {
    return state.todos.map(item => (item.id === todo.id ? todo : item))
  },
  checkAll(state, checked) {
    state.todos.forEach(todo => {
      todo.done = checked
    })
  },
  clearChecked() {
    state.todos = state.todos.filter(todo => !todo.done)
  }
}

const actions = {}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default store
