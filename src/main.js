// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable space-before-function-paren */
/* eslint-disable quotes */
/* eslint-disable semi */
import Vue from "vue";

import App from "./App";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { store } from "./store";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  vuetify,
  store,
  components: { App },
  template: "<App/>"
});
