<template>
  <div id='app'>
    <Header :toggleMenu="toggleMenu"></Header>
    <Menu :menuWidth="menuWidth" :menus="this.$store.state.app.menus"></Menu>
    <Content :contentLeft="contentLeft" :contentWidth="contentWidth">
      <router-view/>
    </Content>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Menu from '@/components/Menu.vue'
import Content from '@/components/Content.vue'
export default {
  name: 'App',
  data () {
    return {
      menuWidth: '14%',
      contentLeft: '17%',
      contentWidth: '80%'
    }
  },
  components: {
    Footer,
    Header,
    Menu,
    Content
  },
  methods: {
    toggleMenu: function () {
      if (this.menuWidth === '14%') {
        this.menuWidth = '7%'
        this.contentLeft = '7%'
        this.contentWidth = '93%'
      } else {
        this.menuWidth = '14%'
        this.contentLeft = '17%'
        this.contentWidth = '80%'
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Helvetica,Droid Sans,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
