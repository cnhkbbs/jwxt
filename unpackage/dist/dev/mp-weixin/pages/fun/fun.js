"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      role: "1",
      pictures: [
        {
          id: "1",
          url: "https://pic.imgdb.cn/item/656e9993c458853aef72abeb.png"
        },
        {
          id: "2",
          url: "https://pic.imgdb.cn/item/656e9993c458853aef72ac42.png"
        },
        {
          id: "3",
          url: "https://pic.imgdb.cn/item/656e9993c458853aef72acae.png"
        },
        {
          id: "4",
          url: "https://pic.imgdb.cn/item/656e9994c458853aef72ad03.png"
        },
        {
          id: "5",
          url: "https://pic.imgdb.cn/item/656e9993c458853aef72ab82.png"
        },
        {
          id: "6",
          url: "https://pic.imgdb.cn/item/656e99b8c458853aef730151.png"
        }
      ]
    };
  },
  onShow() {
    common_vendor.index.getStorage({
      key: "role",
      success: (res) => {
        this.role = res.data;
      },
      fail: (res) => {
        this.role = "1";
      }
    });
  },
  methods: {
    goToGradesPage() {
      if (this.role === "1") {
        common_vendor.index.navigateTo({
          url: "/pages/grades/grades"
        });
      } else {
        common_vendor.index.navigateTo({
          url: "/pages/studentlist/studentlist?refer=grades"
        });
      }
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
    goToVisitorRegistrationPage() {
      common_vendor.index.navigateTo({
        url: "/pages/visitorregistration/visitorregistration"
      });
    },
    goToGradesAnalysisPage() {
      if (this.role === "1") {
        common_vendor.index.navigateTo({
          url: "/pages/gradesanalysis/gradesanalysis"
        });
      } else {
        common_vendor.index.navigateTo({
          url: "/pages/studentlist/studentlist?refer=analysis"
        });
      }
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
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  _easycom_uni_section2();
}
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
if (!Math) {
  _easycom_uni_section();
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
    b: common_vendor.o((...args) => $options.goToGradesPage && $options.goToGradesPage(...args)),
    c: common_vendor.o((...args) => $options.goToCoursePage && $options.goToCoursePage(...args)),
    d: common_vendor.o((...args) => $options.goToGradesAnalysisPage && $options.goToGradesAnalysisPage(...args)),
    e: common_vendor.p({
      title: "我的服务",
      type: "line",
      padding: true
    }),
    f: common_vendor.o((...args) => $options.goToTomatoClockPage && $options.goToTomatoClockPage(...args)),
    g: common_vendor.o((...args) => $options.goToVisitorRegistrationPage && $options.goToVisitorRegistrationPage(...args)),
    h: common_vendor.p({
      title: "其他服务",
      type: "line",
      padding: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/vue/ycxy/pages/fun/fun.vue"]]);
wx.createPage(MiniProgramPage);
