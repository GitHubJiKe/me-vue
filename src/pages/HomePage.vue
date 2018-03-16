<template>
  <div class="rounded border border-info" style="padding:30px;margin-top:40px;">
    <Row>
      <Column>
        <label class="info-label">Name: </label><label>Peter Yuan</label>
      </Column>
      <Column>
        <label class="info-label">Sex: </label><label>Male</label>
      </Column>
      <Column>
        <label class="info-label">Age: </label><label>25</label>
      </Column>
    </Row>
    <Row>
      <Column>
        <label class="info-label">Name: </label><label>Peter Yuan</label>
      </Column>
      <Column>
        <label class="info-label">Sex: </label><label>Male</label>
      </Column>
      <Column>
        <label class="info-label">Age: </label><label>25</label>
      </Column>
    </Row>
    <Row>
      <Column>
        <label class="info-label">Name: </label><label>Peter Yuan</label>
      </Column>
      <Column>
        <label class="info-label">Sex: </label><label>Male</label>
      </Column>
      <Column>
        <label class="info-label">Age: </label><label>25</label>
      </Column>
    </Row>
    <p class="divider-line"></p>
    <Row>
      <Column>
        <label class="info-label">Name: </label><label>Peter Yuan</label>
      </Column>
      <Column>
        <label class="info-label">Sex: </label><label>Male</label>
      </Column>
      <Column>
        <label class="info-label">Age: </label><label>25</label>
      </Column>
    </Row>
    <Row>
      <Column>
        <label class="info-label">Name: </label><label>Peter Yuan</label>
      </Column>
      <Column>
        <label class="info-label">Sex: </label><label>Male</label>
      </Column>
      <Column>
        <label class="info-label">Age: </label><label>25</label>
      </Column>
    </Row>
    <Row>
      <Column>
        <label class="info-label">Name: </label><label>Peter Yuan</label>
      </Column>
      <Column>
        <label class="info-label">Sex: </label><label>Male</label>
      </Column>
      <Column>
        <label class="info-label">Age: </label><label>25</label>
      </Column>
    </Row>
    <p class="divider-line"></p>
    <Row>
      <Column>
        <label class="info-label">Name: </label><label>Peter Yuan</label>
      </Column>
      <Column>
        <label class="info-label">Sex: </label><label>Male</label>
      </Column>
      <Column>
        <label class="info-label">Age: </label><label>25</label>
      </Column>
    </Row>
    <Row>
      <Column>
        <label class="info-label">Name: </label><label>Peter Yuan</label>
      </Column>
      <Column>
        <label class="info-label">Sex: </label><label>Male</label>
      </Column>
      <Column>
        <label class="info-label">Age: </label><label>25</label>
      </Column>
    </Row>
    <Row>
      <Column>
        <label class="info-label">Name: </label><label>Peter Yuan</label>
      </Column>
      <Column>
        <label class="info-label">Sex: </label><label>Male</label>
      </Column>
      <Column>
        <label class="info-label">Age: </label><label>25</label>
      </Column>
    </Row>
  </div>
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
.info-label{
  padding-right: 10px;
}
.divider-line{
  width: 100%;
  height: 0.5px;
  background-color: grey;
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>
