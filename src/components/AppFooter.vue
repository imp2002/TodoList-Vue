<template>
  <div class="todo-footer" v-show="total">
    <label>
      <input type="checkbox" v-model="isAllDone" />
      <span>已完成{{ doneTotal }} / 全部{{ total }}</span>
    </label>

    <button class="btn btn-danger" @click="clearChecked">清除已完成任务</button>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'AppFooter',
    data() {
      return {}
    },

    computed: {
      ...mapGetters(['total', 'doneTotal']),
      isAllDone: {
        get() {
          return this.total === this.doneTotal
        },
        set(value) {
          this.$store.commit('checkAll', value)
        }
      }
    },
    methods: {
      clearChecked() {
        this.$store.commit('clearChecked')
      }
    }
  }
</script>

<style>
  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>
