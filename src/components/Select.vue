<template>
  <select class="customer-select" @change="change">
    <slot></slot>
  </select>
</template>

<script>
export default {
  name: 'Select',
  props: {
    change: {
      type: Function
    }
  }
}
</script>
<style scoped>
  select{
    background-color: white;
  }
</style>
