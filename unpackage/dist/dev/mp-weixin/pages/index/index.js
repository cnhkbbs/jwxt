"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      postList: [],
      host_url: "",
      notice: "",
      role: "1",
      guest_mode: false,
      show_notice: false
    };
  },
  onShow() {
    common_vendor.index.getStorage({
      key: "role",
      success: (res) => {
        this.role = res.data;
        this.guest_mode = false;
      },
      fail: (res) => {
        this.guest_mode = true;
      }
    });
  },
  onLoad() {
    this.host_url = getApp().globalData.host_url;
    this.getPostList();
    this.getNotice();
  },
  methods: {
    goToPostPage(title) {
      common_vendor.index.navigateTo({
        url: "/pages/postpage/postpage?title=" + title
      });
    },
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
    goToVisitorRegistrationPage() {
      common_vendor.index.navigateTo({
        url: "/pages/visitorregistration/visitorregistration"
      });
    },
    goToCampusMap() {
      common_vendor.index.navigateTo({
        url: "/pages/campusmap/campusmap"
      });
    },
    getPostList() {
      common_vendor.index.request({
        url: this.host_url + "posts/list",
        method: "POST",
        success: (res) => {
          const postList = res.data;
          this.$set(this, "postList", postList);
        },
        fail: (err) => {
          this.show_notice = true;
          console.log("请求失败", err);
        }
      });
    },
    getNotice() {
      common_vendor.index.request({
        url: this.host_url + "notice",
        success: (res) => {
          this.notice = res.data;
        },
        fail: (err) => {
          console.error("请求失败", err);
        }
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_notice_bar2 = common_vendor.resolveComponent("uni-notice-bar");
  _easycom_uni_notice_bar2();
}
const _easycom_uni_notice_bar = () => "../../uni_modules/uni-notice-bar/components/uni-notice-bar/uni-notice-bar.js";
if (!Math) {
  _easycom_uni_notice_bar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      ["show-icon"]: true,
      scrollable: true,
      text: $data.notice,
      speed: 50
    }),
    b: $data.show_notice,
    c: common_vendor.o((...args) => $options.goToGradesPage && $options.goToGradesPage(...args)),
    d: common_vendor.o((...args) => $options.goToCoursePage && $options.goToCoursePage(...args)),
    e: common_vendor.o((...args) => $options.goToCampusMap && $options.goToCampusMap(...args)),
    f: !$data.guest_mode,
    g: common_vendor.o((...args) => $options.goToCampusMap && $options.goToCampusMap(...args)),
    h: common_vendor.o((...args) => $options.goToVisitorRegistrationPage && $options.goToVisitorRegistrationPage(...args)),
    i: $data.guest_mode,
    j: common_vendor.f($data.postList, (item, index, i0) => {
      return {
        a: item.cover,
        b: common_vendor.t(item.title),
        c: common_vendor.t(item.author),
        d: index,
        e: common_vendor.o(($event) => $options.goToPostPage(item.title), index)
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/vue/ycxy/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
