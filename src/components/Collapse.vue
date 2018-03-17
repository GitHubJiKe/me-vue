<template>
  <div class="card">
    <h5 @click="toggleCollapse" class="title">
      {{title}} <i v-if="show" class="fas fa-angle-up li-item"></i>
      <i v-else class="fas fa-angle-down li-item"></i>
    </h5>
    <div :class="`collapse ${show}`">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Collapse',
  props: {
    title: {
      type: String,
      default: ''
    },
    show: {
      type: String,
      default: ''
    }
  },
  methods: {
    toggleCollapse: function () {
      this.show = this.show === 'show' ? '' : 'show'
    }
  }
}
</script>
<style scoped>
  .title{
    padding:10px;
    color:#007bff;
    cursor:pointer;
  }
  .li-item{
    float:right;
    margin-top:5px;
    margin-right: 22px;
  }
</style>
