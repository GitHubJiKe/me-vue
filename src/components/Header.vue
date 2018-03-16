<template>
  <header class="me-header">
    <i class="fas fa-align-justify"
     style="width:40px;height:40px;position:absolute;left:40px;top:15px;"
     @click="toggleMenu()"></i>
     <label style="position:absolute;left:80px;top:-2px;" @click="toggleMenu()">Me</label>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    toggleMenu: {
      type: Function,
      required: true
    }
  }
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
