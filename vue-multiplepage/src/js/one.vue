<template>
  <a href="two.html" class="test" v-text="test"></a>
</template>

<script>
export default {
  name: 'one',
  data () {
    return {
      test: ''
    }
  },
  created () {
    this.test = localStorage.getItem('name')
  },
  mounted () {

  }
}
</script>

<style scoped>

</style>
