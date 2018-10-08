<template>
  <div id="app">
    <a class="test" @click="action()">跳转到One页面</a>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    action () {
      localStorage.setItem('name', 'OneTest')
      window.location.href = 'one.html'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
