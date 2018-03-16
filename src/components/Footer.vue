<template>
  <footer class="me-footer">
    <Row>
      <Column gravity="-2"></Column>
      <Column>by Peter Yuan</Column>
      <Column gravity="-2">
        <Select :change="switchLanguage">
          <option value="zh">中文</option>
          <option value="en">English</option>
        </Select>
      </Column>
    </Row>
  </footer>
</template>

<script>
import Row from '@/components/Row.vue'
import Column from '@/components/Column.vue'
import Select from '@/components/Select.vue'
export default {
  name: 'Footer',
  components: {
    Row,
    Column,
    Select
  },
  methods: {
    switchLanguage: function (e) {
      this.$store.dispatch('switchLanguage', e.target.value)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.me-footer {
  position: fixed;
  width: 100%;
  height: 60px;
  bottom: 0px;
  left: 0px;
  background-color: black;
  color: white;
  line-height: 60px;
}
</style>
