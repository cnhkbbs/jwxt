"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/my/my.js";
  "./pages/postpage/postpage.js";
  "./pages/fun/fun.js";
  "./pages/grades/grades.js";
  "./pages/course/course.js";
  "./pages/login/login.js";
  "./pages/tomatoclock/tomatoclock.js";
  "./pages/campusmap/campusmap.js";
  "./pages/feedback/feedback.js";
  "./pages/about/about.js";
  "./pages/message/message.js";
  "./pages/visitorregistration/visitorregistration.js";
  "./pages/gradesanalysis/gradesanalysis.js";
  "./pages/userinfo/userinfo.js";
  "./pages/studentlist/studentlist.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  },
  // 全局变量
  globalData: {
    host_url: "https://api.sboxm.link/"
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/vue/ycxy/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
