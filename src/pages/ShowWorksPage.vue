<template>
  <div>
    <Box v-for="(v,idx) in works" :key="idx">
      <Collapse :title="v[_languageType]">
        <Box style="text-align:left;">
          <h5>
            <a :href="v.link">{{v[_languageType]}}</a>
            <span style="color:brown;">{{v.company[_languageType]}}</span>
          </h5>
          <label>
            {{v.description}}
          </label>
          <h5>我的职责：</h5>
          <ul>
            <li v-for="(vv,idx) in v.dutys" :key="idx">{{vv}}</li>
          </ul>
        </Box>
      </Collapse>
    </Box>
  </div>
</template>
<script>
import Collapse from '@/components/Collapse.vue'
import Box from '@/components/Box.vue'
export default {
  name: 'ShowWorksPage',
  computed: {
    works: function () {
      return this.$store.state.works
    },
    _languageType: function () {
      return this.$store.state.app.languageType
    }
  },
  components: {
    Collapse,
    Box
  }
}
</script>
<style scoped>

</style>
