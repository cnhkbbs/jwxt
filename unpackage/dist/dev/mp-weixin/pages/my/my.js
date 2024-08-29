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
          return 0;
        }
      });
      common_vendor.index.getStorage({
        key: "role",
        success: (res) => {
          this.role = res.data;
        },
        fail: (res) => {
          return 0;
        }
      });
      common_vendor.index.getStorage({
        key: "name",
        success: (res) => {
          this.name = res.data;
        },
        fail: (res) => {
          return 0;
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
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.name),
    b: $data.is_login,
    c: common_vendor.o((...args) => $options.goToLoginPage && $options.goToLoginPage(...args)),
    d: !$data.is_login,
    e: common_vendor.o((...args) => $options.goToMessgePage && $options.goToMessgePage(...args)),
    f: common_vendor.o((...args) => $options.goToUserInfoPage && $options.goToUserInfoPage(...args)),
    g: common_vendor.p({
      type: "right",
      size: "24"
    }),
    h: common_vendor.o((...args) => $options.goToFeedbackPage && $options.goToFeedbackPage(...args)),
    i: common_vendor.p({
      type: "right",
      size: "24"
    }),
    j: common_vendor.o((...args) => $options.goToAboutPage && $options.goToAboutPage(...args)),
    k: $data.is_login,
    l: common_vendor.o((...args) => $options.userLogout && $options.userLogout(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/vue/ycxy/pages/my/my.vue"]]);
wx.createPage(MiniProgramPage);
