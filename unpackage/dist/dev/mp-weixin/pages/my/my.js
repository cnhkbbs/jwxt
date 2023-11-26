"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      host_url: "",
      token: "",
      username: "",
      role: "",
      name: "",
      is_login: false
    };
  },
  onLoad() {
    this.host_url = getApp().globalData.host_url;
  },
  onShow() {
    this.loadUserData();
  },
  methods: {
    goToLoginPage() {
      common_vendor.index.navigateTo({
        url: "/pages/login/login"
      });
    },
    goToFeedbackPage() {
      common_vendor.index.navigateTo({
        url: "/pages/feedback/feedback"
      });
    },
    goToMessgePage() {
      common_vendor.index.navigateTo({
        url: "/pages/message/message"
      });
    },
    goToAboutPage() {
      common_vendor.index.navigateTo({
        url: "/pages/about/about"
      });
    },
    goToUserInfoPage() {
      common_vendor.index.navigateTo({
        url: "/pages/userinfo/userinfo"
      });
    },
    loadUserData() {
      common_vendor.index.getStorage({
        key: "token",
        success: (res) => {
          this.token = res.data;
          this.is_login = true;
        },
        fail: (res) => {
          this.is_login = false;
          return 0;
        }
      });
      common_vendor.index.getStorage({
        key: "username",
        success: (res) => {
          this.username = res.data;
        },
        fail: (res) => {
          console.log("read username fail");
        }
      });
      common_vendor.index.getStorage({
        key: "role",
        success: (res) => {
          this.role = res.data;
        },
        fail: (res) => {
          console.log("read role fail");
        }
      });
      common_vendor.index.getStorage({
        key: "name",
        success: (res) => {
          this.name = res.data;
        },
        fail: (res) => {
          console.log("read name fail");
        }
      });
    },
    userLogout() {
      common_vendor.index.request({
        url: this.host_url + "auth/logout",
        method: "POST",
        data: {
          username: this.username,
          token: this.token
        },
        success: (res) => {
          common_vendor.index.showToast({
            title: "退出成功"
          });
          this.is_login = false;
        },
        fail: (err) => {
          console.error("err", err);
        }
      });
      common_vendor.index.removeStorage({
        key: "token"
      });
      common_vendor.index.removeStorage({
        key: "username"
      });
      common_vendor.index.removeStorage({
        key: "role"
      });
      common_vendor.index.removeStorage({
        key: "name"
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
    a: common_vendor.t($data.name),
    b: $data.is_login,
    c: common_vendor.o((...args) => $options.goToLoginPage && $options.goToLoginPage(...args)),
    d: !$data.is_login,
    e: common_vendor.o((...args) => $options.goToMessgePage && $options.goToMessgePage(...args)),
    f: common_vendor.o((...args) => $options.goToUserInfoPage && $options.goToUserInfoPage(...args)),
    g: common_vendor.o($options.goToFeedbackPage),
    h: common_vendor.p({
      title: "意见反馈"
    }),
    i: common_vendor.o($options.goToAboutPage),
    j: common_vendor.p({
      title: "关于"
    }),
    k: $data.is_login,
    l: common_vendor.o((...args) => $options.userLogout && $options.userLogout(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/vue/jwxt/pages/my/my.vue"]]);
wx.createPage(MiniProgramPage);
