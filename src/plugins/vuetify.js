import '@fortawesome/fontawesome-free/css/all.css'
import Vue from 'vue'
import Vuetify, { colors } from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'fa'
  },
  theme: {
    themes: {
      light: {
        primary: colors.indigo.base,
        secondary: colors.indigo.darken2,
        accent: colors.lightGreen.base,
        error: colors.red.darken1
      }
    }
  }
})
