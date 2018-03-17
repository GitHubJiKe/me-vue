<template>
  <div>
    <Box v-for="(v,idx) in jobs" :key="idx">
      <collapse :title="v.company[_languageType]">
        <Box style="text-align:left;">
          <ul>
            <li>{{v.position[_languageType]}}</li>
            <li>{{v.dates[0]}} ~ {{v.dates[1]}}</li><br/>
            <h5>{{WORKCONTENT}}:</h5>
            <ul>
                <li v-for="(vv,idx) in v.workContent" :key="idx">{{vv}}</li>
            </ul>
          </ul>
        </Box>
      </collapse>
    </Box>
  </div>
</template>

<script>
import Collapse from '@/components/Collapse.vue'
import Box from '@/components/Box.vue'
export default {
  name: 'WorkPage',
  components: {
    Collapse,
    Box
  },
  computed: {
    jobs: function () {
      return this.$store.state.workExperience
    },
    _languageType: function () {
      return this.$store.state.app.languageType
    },
    WORKCONTENT: function () {
      let {app, languageMap} = this.$store.state
      return languageMap['WORKCONTENT'][app.languageType]
    }
  }
}
</script>
<style scoped>

</style>
