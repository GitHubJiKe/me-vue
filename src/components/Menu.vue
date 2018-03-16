<template>
  <div class="me-menu">
    <span class="me-menu-item" v-for="(m,idx) in menus" :key="idx">Item</span>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    menus: {
      type: Array,
      default: function () { return [{}, {}, {}] }
    }
  }
}

</script>
<style scoped>
.me-menu {
  position: fixed;
  width: 200px;
  height: 100%;
  background: white;
  left: 0px;
  top:60px;
  bottom: 0px;
}
.me-menu-item{
  width: 200px;
  height:60px;
  border: 1px solid azure;
  display: block;
  background-color: aquamarine;
  text-align: center;
  line-height: 60px;
  cursor: pointer;
  color: black;
}
.me-menu-item:hover{
  background-color: brown;
  color: white;
}
</style>
