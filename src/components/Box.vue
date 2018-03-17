<template>
  <div class="rounded border border-info me-box">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'Box'
}
</script>

<style scoped>
.me-box{
  padding:50px;
  margin-top:40px;
  margin-bottom:40px;
  margin-left:30px;
  margin-right:30px;
}
</style>
