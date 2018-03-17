<template>
  <Box>
    <Collapse :title="Info.collageName" show="show">
      <Box style="text-align:left;">
        <ul>
          <li>{{Info.graduateDate}}</li>
          <li>{{Info.education}}</li>
          <li>{{Info.speciality}}</li>
          <li>{{Info.awards}}</li>
        </ul>
      </Box>
    </Collapse>
  </Box>
</template>
<script>
import Collapse from '@/components/Collapse.vue'
import Box from '@/components/Box.vue'
export default {
  name: 'EducationPage',
  components: {
    Collapse,
    Box
  },
  computed: {
    Info: function () {
      let _educationInfo = {}
      let { educationInfo, app } = this.$store.state
      for (let v in educationInfo) {
        _educationInfo[v] = educationInfo[v][app.languageType]
      }
      return _educationInfo
    }
  }
}
</script>
<style scoped>

</style>
