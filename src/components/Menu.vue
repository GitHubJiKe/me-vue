<template>
  <div class="me-menu" :style="`width:${menuWidth}`">
    <span class="me-menu-item" v-for="m in menus" :key="m.pageKey" :id="m.pageKey" @click="gotoPage(m.pageKey)">{{languageMap[m.title][languageType]}}</span>
  </div>
</template>

<script>
import router from '../router'
export default {
  name: 'Menu',
  data () {
    return {
      style: {
        'backgroundColor': '',
        'color': ''
      }
    }
  },
  props: {
    menus: {
      type: Array,
      default: function () { return [] }
    },
    menuWidth: {
      type: String,
      default: '14%'
    }
  },
  methods: {
    gotoPage: function (path) {
      let _id = '#' + path
      window.$(_id).css({'background-color': 'brown', 'color': 'white'})
      window.$(_id).siblings().css({'color': 'black', 'background-color': '#f2f2f2'})
      router.push({path})
    }
  },
  computed: {
    languageMap: function () {
      return this.$store.state.languageMap
    },
    languageType: function () {
      return this.$store.state.app.languageType
    }
  }
}

</script>
<style scoped>
.me-menu {
  position: fixed;
  height: 100%;
  background-color: #f2f2f2;
  left: 0px;
  top:60px;
  bottom: 0px;
}
.me-menu-item{
  width: 100%;
  height:60px;
  border: 1px solid azure;
  display: block;
  background-color: #f2f2f2;
  text-align: center;
  line-height: 60px;
  cursor: pointer;
  color: black;
  font-weight: bolder;
}
.actived {
  background-color: brown;
  color: white;
}
.me-menu-item:hover{
  background-color: brown;
  color: white;
}
</style>
