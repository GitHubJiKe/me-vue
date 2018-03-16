<template>
  <header class="me-header">Header</header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.me-header {
  position: fixed;
  width: 100%;
  height: 60px;
  top: 0px;
  left: 0px;
  background-color: black;
  line-height: 60px;
  color: white;
  font-size: 24px;
  z-index: 10000;
}
</style>
