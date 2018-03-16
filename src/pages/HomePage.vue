<template>
  <Row>
    <Column >
      <img src="../assets/logo.png">
    </Column>
    <Column >
      <img src="../assets/logo.png">
    </Column>
    <Column >
      <Select>
        <option>Item1</option>
        <option>Item1</option>
        <option>Item1</option>
        <option>Item1</option>
        <option>Item1</option>
        <option>Item1</option>
        <option>Item1</option>
        <option>Item1</option>
        <option>Item1</option>
      </Select>
    </Column>
  </Row>
</template>

<script>
import Row from '@/components/Row.vue'
import Column from '@/components/Column.vue'
import Select from '@/components/Select.vue'
export default {
  name: 'HomePage',
  components: {
    Row,
    Column,
    Select
  }
}
</script>

<style scoped>
</style>
