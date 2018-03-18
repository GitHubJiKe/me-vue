
export default {
  switchLanguage: (context, type) => {
    context.commit('switchLanguage', type)
  },
  addOneComment: (context, comment) => {
    context.commit('addOneComment', comment)
  }
}
