import moment from 'moment'
import swal from 'sweetalert'
export default {
  switchLanguage: (state, type) => {
    state.app.languageType = type
  },
  addOneComment: (state, comment) => {
    if (!comment) {
      swal({
        icon: 'warning',
        text: '请输入内容'
      })
    } else {
      if (state.comments.length > 100) {
        state.comments = []
      }
      let curTime = moment().format('YYYY-MM-DD HH:mm:ss')
      let c = { content: comment, time: curTime }
      state.comments.unshift(c)
    }
  },
  showHeaderAndFooter: (state, showHeaderAndFooter) => {
    state.app.showHeaderAndFooter = showHeaderAndFooter
  }
}
