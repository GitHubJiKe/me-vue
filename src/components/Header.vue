<template>
  <header class="me-header">
    <i class="fas fa-align-justify"
     style="width:40px;height:40px;position:absolute;left:40px;top:15px;"
     @click="toggleMenu()"></i>
     <label style="position:absolute;left:80px;top:-2px;" @click="toggleMenu()">Me</label>
     <i :class="`fas fa-music ${rotate?'stopRotate':'startRotate'}`"
      @click="playMusic"></i>
     <audio :src="piano" autoplay ref="audio"></audio>
  </header>
</template>

<script>
import piano from '../assets/piano.mp3'
export default {
  name: 'Header',
  data () {
    return {
      piano,
      rotate: false
    }
  },
  props: {
    toggleMenu: {
      type: Function,
      required: true
    }
  },
  methods: {
    playMusic: function () {
      this.rotate = !this.rotate
      if (this.rotate) {
        this.$refs.audio.pause()
      } else {
        this.$refs.audio.play()
      }
    }
  }
}
</script>

<style scoped>
.me-header {
  position: fixed;
  width: 100%;
  height: 60px;
  top: 0px;
  left: 0px;
  background-color: black;
  line-height: 60px;
  color: white;
  font-size: 24px;
  z-index: 10000;
}
.stopRotate{
  float:right;
  margin-top:15px;
  margin-right:15px;
  border: 1px solid white;
  border-radius: 50%;
  width: 35px;
  height:35px;
  padding-top: 2px;
  padding-right: 2px;
  }
@-webkit-keyframes _rotate_ {
  0%{
    -webkit-transform: rotate(0deg);
  }
  50%{
    -webkit-transform: rotate(180deg);
  }
  100%{
    -webkit-transform: rotate(360deg);
    }
}
.startRotate{
  transition: all 2s;
  transform:rotate(0deg);
  float:right;
  margin-top:15px;
  margin-right:15px;
  animation: _rotate_ 2s infinite linear ;
  border: 1px solid white;
  border-radius: 50%;
  width: 35px;
  height:35px;
  padding-top: 2px;
  padding-right: 2px;
}

</style>
