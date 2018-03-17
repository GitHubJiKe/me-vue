<template>
  <Box>
    <Row>
      <Column gravity="-2">
        <label class="info-label">{{_languageMap.NAME[_languageType]}}: </label>
      </Column>
      <Column gravity="-2">
        <label class="info-content">{{_basicInfo.name}}</label></Column>
      <Column gravity="-2">
        <label class="info-label">{{_languageMap.SEX[_languageType]}}:</label>
      </Column>
      <Column gravity="-2">
        <label class="info-content">{{_basicInfo.sex}}</label>
      </Column>
      <Column gravity="-2">
        <label class="info-label">{{_languageMap.EDUCATION[_languageType]}}:</label>
      </Column>
      <Column gravity="-2">
        <label class="info-content">{{_basicInfo.education}}</label>
      </Column>
    </Row>
    <DividerLine></DividerLine>
    <Row>
      <Column gravity="-2">
        <label class="info-label">{{_languageMap.WORKYEARS[_languageType]}}:</label>
      </Column>
      <Column gravity="-2">
        <label class="info-content">{{_basicInfo.workyears}}</label>
      </Column>
      <Column gravity="-2">
        <label class="info-label">{{_languageMap.BIRTHDAY[_languageType]}}:</label>
      </Column>
      <Column gravity="-2">
        <label class="info-content">{{_basicInfo.birthday}}</label>
      </Column>
      <Column gravity="-2">
        <label class="info-label">{{_languageMap.CITY[_languageType]}}:</label>
      </Column>
      <Column gravity="-2">
        <label class="info-content">{{_basicInfo.city}}</label>
      </Column>
    </Row>
    <DividerLine></DividerLine>
    <Row>
      <Column gravity="-2">
        <label class="info-label">{{_languageMap.MOBILEPHONE[_languageType]}}:</label>
      </Column>
      <Column gravity="-2">
        <label class="info-content">{{_basicInfo.mobilephone}}</label>
      </Column>
      <Column gravity="-2">
        <label class="info-label">{{_languageMap.EMAIL[_languageType]}}:</label>
      </Column>
      <Column gravity="-2">
        <label class="info-content">{{_basicInfo.email}}</label>
      </Column>
      <Column gravity="-2">
        <label class="info-label">{{_languageMap.DESCRIPTION[_languageType]}}:</label>
      </Column>
      <Column gravity="-2">
        <label class="info-content">{{_basicInfo.description}}</label>
      </Column>
    </Row>
  </Box>
</template>

<script>
import Row from '@/components/Row.vue'
import Column from '@/components/Column.vue'
import Select from '@/components/Select.vue'
import DividerLine from '@/components/DividerLine.vue'
import Box from '@/components/Box.vue'
export default {
  name: 'HomePage',
  components: {
    Row,
    Column,
    Select,
    DividerLine,
    Box
  },
  computed: {
    _basicInfo: function () {
      let info = {}
      let { basicInfo, app } = this.$store.state
      let { languageType } = app
      for (let v in basicInfo) {
        info[v] = basicInfo[v][languageType]
      }
      return info
    },
    _languageMap: function () {
      return this.$store.state.languageMap
    },
    _languageType: function () {
      return this.$store.state.app.languageType
    }
  }
}
</script>

<style scoped>
.info-label{
  width: 150px;
  padding-right: 10px;
  text-align: right;
}
.info-content{
  width:100%;
  text-align: left;
}
</style>
