import Vue from "vue";
import Vuetify from "vuetify"; // loads all components
import "vuetify/dist/vuetify.min.css"; // all the css for components
import en from "vuetify/es5/locale/en";
import "@fortawesome/fontawesome-free/css/all.css";

Vue.use(Vuetify);

export default new Vuetify({
  lang: {
    locales: { en },
    current: "en",
  },
  icons: {
    iconfont: "fa",
  },
});
