<template>
  <div>
    <img class="hover-icon"
      @mouseover="show"
      @mouseout="noshow"
      :src="iconSrc"/>
    <img :class="`${ImgClass} animated zoomIn`"
      style="width:280px;height:280px;margin-top:10px;"
      :src="imgSrc"/>
  </div>
</template>

<script>
export default {
  name: 'HoverShowImage',
  data () {
    return {
      ImgClass: 'noshow'
    }
  },
  props: {
    imgSrc: {
      type: String,
      default: '',
      required: true
    },
    iconSrc: {
      type: String,
      default: '',
      required: true
    }
  },
  methods: {
    show: function () {
      this.ImgClass = 'show'
    },
    noshow: function () {
      this.ImgClass = 'noshow'
    }
  }
}
</script>
<style scoped>
  .hover-icon{
    width:30px;
    height:30px;
    cursor: pointer;
  }
  .noshow{
    display: none;
  }
  .show{
    display: block;
  }
</style>
