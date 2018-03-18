<template>
  <div>
    <row style="margin-top:20px;">
      <column>
        <input type="text"
          class="form-control"
          placeholder="type your comment here and press enter to add"
          aria-describedby="basic-addon2"
          @keypress="onEnter">
      </column>
    </row>
    <row v-for="(c,idx) in comments" :key="idx">
      <column style="text-align:left;padding:20px;">
        <li style="border:1px solid black;padding:5px;border-radius:3px;">
          <label>{{c.content}}</label>
          <label style="float:right;">{{c.time}}</label>
        </li>
      </column>
    </row>
  </div>
</template>
<script>
import Row from '@/components/Row.vue'
import Column from '@/components/Column.vue'
import DividerLine from '@/components/DividerLine.vue'
import Box from '@/components/Box.vue'
export default {
  name: 'CommentPage',
  components: {
    Row,
    Column,
    DividerLine,
    Box
  },
  methods: {
    onEnter: function (e) {
      if (e.which === 13) {
        this.$store.dispatch('addOneComment', e.target.value)
      }
    }
  },
  computed: {
    comments: function () {
      return this.$store.state.comments
    }
  }
}
</script>
<style scoped>
</style>
