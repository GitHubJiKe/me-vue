<template>
  <div class="me-content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Content'
}
</script>
<style scoped>
  .me-content{
    position: absolute;
    width: 100%;
    left:200px;
    top:60px;
    height:auto;
    background-color: violet;
    overflow: auto;
  }
</style>
