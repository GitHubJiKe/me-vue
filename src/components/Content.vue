<template>
  <div class="me-content" :style="`width:${contentWidth};left:${contentLeft}`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Content',
  props: {
    contentLeft: {
      type: String,
      default: '17%'
    },
    contentWidth: {
      type: String,
      default: '80%'
    }
  }
}
</script>
<style scoped>
  .me-content{
    position: relative;
    height:auto;
    background-color: #ffffff;
    overflow-x: scroll;
  }
</style>
