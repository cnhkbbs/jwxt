"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      pictures: [
        {
          id: "1",
          url: "http://cdn-hw-static2.shanhutech.cn/bizhi/staticwp/202211/4f182009973bd05e633a12096c9d986b--4261460870.jpg"
        },
        {
          id: "2",
          url: "http://cdn-hw-static2.shanhutech.cn/bizhi/staticwp/202209/3aec73edc257e4d7f679a4e9791d93e1--405277223.jpg"
        },
        {
          id: "3",
          url: "http://cdn-hw-static2.shanhutech.cn/bizhi/staticwp/202310/17e05efa4e03c4a62a9ef4dc8fbeb409--2755567652.jpg"
        },
        {
          id: "4",
          url: "http://cdn-hw-static2.shanhutech.cn/bizhi/staticwp/202308/d5394a3a31c3bd976198f6668f28ab5e--300955069.jpg"
        },
        {
          id: "5",
          url: "http://cdn-hw-static2.shanhutech.cn/bizhi/staticwp/202308/7d4cdf253feece60ab5c55c8e185008f--342728100.jpg"
        },
        {
          id: "6",
          url: "http://cdn-hw-static2.shanhutech.cn/bizhi/staticwp/202308/3d4cd72c4b547d123afeb5ec630de597--2966950063.jpg"
        }
      ]
    };
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
    goToTomatoClockPage() {
      common_vendor.index.navigateTo({
        url: "/pages/tomatoclock/tomatoclock"
      });
    },
    onPreviewImage(url) {
      common_vendor.index.previewImage({
        urls: this.pictures.map((v) => v.url),
        current: url
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
    a: common_vendor.f($data.pictures, (item, k0, i0) => {
      return {
        a: common_vendor.o(($event) => $options.onPreviewImage(item.url), item.id),
        b: item.url,
        c: item.id
      };
    }),
    b: common_vendor.o(($event) => $options.goToGradesPage()),
    c: common_vendor.o(($event) => $options.goToCoursePage()),
    d: common_vendor.o(($event) => $options.goToCoursePage()),
    e: common_vendor.p({
      column: 4
    }),
    f: common_vendor.p({
      title: "功能一览",
      type: "line",
      padding: true
    }),
    g: common_vendor.o((...args) => $options.goToTomatoClockPage && $options.goToTomatoClockPage(...args)),
    h: common_vendor.o(($event) => $options.goToCoursePage()),
    i: common_vendor.p({
      column: 4
    }),
    j: common_vendor.p({
      title: "其他功能",
      type: "line",
      padding: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/acer/Desktop/temp/pages/fun/fun.vue"]]);
wx.createPage(MiniProgramPage);
