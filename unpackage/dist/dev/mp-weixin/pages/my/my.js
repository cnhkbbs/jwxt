"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    goToGradesPage() {
      common_vendor.index.navigateTo({
        url: "/pages/grades/grades"
      });
    },
    goToCoursePage() {
      common_vendor.index.navigateTo({
        url: "/pages/course/course"
      });
    },
    userLogout() {
      common_vendor.index.removeStorage({
        key: "token",
        success: function(res) {
          console.log("success");
        }
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_grid_item2 = common_vendor.resolveComponent("uni-grid-item");
  const _easycom_uni_grid2 = common_vendor.resolveComponent("uni-grid");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  (_easycom_uni_grid_item2 + _easycom_uni_grid2 + _easycom_uni_section2)();
}
const _easycom_uni_grid_item = () => "../../uni_modules/uni-grid/components/uni-grid-item/uni-grid-item.js";
const _easycom_uni_grid = () => "../../uni_modules/uni-grid/components/uni-grid/uni-grid.js";
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
if (!Math) {
  (_easycom_uni_grid_item + _easycom_uni_grid + _easycom_uni_section)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $options.goToGradesPage()()),
    b: common_vendor.o(($event) => $options.goToGradesPage()()),
    c: common_vendor.o(($event) => $options.goToCoursePage()),
    d: common_vendor.o(($event) => $options.goToCoursePage()),
    e: common_vendor.o(($event) => $options.goToCoursePage()),
    f: common_vendor.p({
      column: 4
    }),
    g: common_vendor.p({
      title: "留言"
    }),
    h: common_vendor.p({
      title: "问题与反馈"
    }),
    i: common_vendor.p({
      title: "设置"
    }),
    j: common_vendor.p({
      title: "关于我们"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/acer/Desktop/temp/pages/my/my.vue"]]);
wx.createPage(MiniProgramPage);
