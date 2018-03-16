<template>
  <div :class="`col-sm${gravity}`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Column',
  props: {
    gravity: {
      type: String,
      default: ''
    }
  }
}
</script>
