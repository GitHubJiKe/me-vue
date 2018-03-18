<template>
  <div>
    <Box>
      <Row>
        <column><a href="https://github.com/GitHubJiKe">github</a></column>
        <column><a href="javascript:void(0)">wechat</a></column>
        <column><a href="https://githubjike.github.io/">Blog</a></column>
      </Row>
      <Row>
        <column>
          <HoverShowImage :imgSrc="githubqrcode" :iconSrc="github"></HoverShowImage>
        </column>
        <column>
          <HoverShowImage :imgSrc="wechatqrcode" :iconSrc="wexin"></HoverShowImage>
        </column>
        <column>
          <HoverShowImage :imgSrc="blogqrcode" :iconSrc="blog"></HoverShowImage>
        </column>
      </Row>
    </Box>
    <p>{{curYear}} 年已过了这么多了哎😔</p>
    <vm-progress
      :stroke-width="14"
      striped
      stroke-color="red"
      track-color="grey"
      :show-text="true"
      type="line"
      :percentage="percentage">
      {{curYear}}
    </vm-progress>
    <Box>
      <div class="input-group mb-3">
        <input type="text"
          class="form-control"
          placeholder="type something here..."
          v-model="inputContent"
          aria-describedby="basic-addon2">
      </div>
      <vue-qrcode v-if="inputContent" v-model="inputContent" :options="{size:250}"></vue-qrcode>
    </Box>
  </div>
</template>
<script>
import moment from 'moment'
import Row from '@/components/Row.vue'
import Column from '@/components/Column.vue'
import DividerLine from '@/components/DividerLine.vue'
import Box from '@/components/Box.vue'
import HoverShowImage from '@/components/HoverShowImage.vue'
import wechatqrcode from '../assets/wechatqrcode.png'
import githubqrcode from '../assets/githubqrcode.png'
import blogqrcode from '../assets/blogqrcode.png'
import wexin from '../assets/weixin.svg'
import github from '../assets/github.svg'
import blog from '../assets/blog.svg'
import VueQrcode from '@xkeshi/vue-qrcode'
export default {
  name: 'OthersPage',
  components: {
    Row,
    Column,
    DividerLine,
    Box,
    HoverShowImage,
    VueQrcode
  },
  data () {
    return {
      wechatqrcode,
      wexin,
      github,
      blog,
      githubqrcode,
      blogqrcode,
      curYear: moment().get('year'),
      qrCodeClass: 'qr-code',
      inputContent: ''
    }
  },
  computed: {
    percentage: function () {
      return moment().dayOfYear() / 366 * 100
    }
  },
  watch: {
    inputContent: function (val, oldVal) {
      return this.inputContent
    }
  }
}
</script>
<style scoped>

</style>
