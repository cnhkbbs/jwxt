"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      host_url: "",
      username: "",
      token: "",
      role: "1",
      name: "",
      college: "",
      major: "",
      phone: "",
      is_teacher: false
    };
  },
  onLoad() {
    this.host_url = getApp().globalData.host_url;
  },
  onShow() {
    common_vendor.index.showLoading({
      title: "加载中"
    });
    this.prepareData();
    common_vendor.index.hideLoading();
  },
  methods: {
    async prepareData() {
      await this.loadUserData();
      this.checkRole();
      this.getUserInfo();
    },
    loadUserData() {
      return new Promise((resolve) => {
        let tokenPromise = this.getStorageData("token", "token");
        let usernamePromise = this.getStorageData("username", "username");
        let rolePromise = this.getStorageData("role", "role");
        Promise.all([tokenPromise, usernamePromise, rolePromise]).then(() => {
          resolve();
        }).catch(() => {
          common_vendor.index.navigateTo({
            url: "/pages/login/login"
          });
          resolve();
        });
      });
    },
    getStorageData(key, dataName) {
      return new Promise((resolve) => {
        common_vendor.index.getStorage({
          key,
          success: (res) => {
            this[dataName] = res.data;
            resolve();
          },
          fail: (res) => {
            resolve();
          }
        });
      });
    },
    checkRole() {
      if (this.role != "1") {
        this.is_teacher = true;
      }
    },
    getUserInfo() {
      setTimeout(() => {
        common_vendor.index.request({
          url: this.host_url + "members/user_info",
          method: "POST",
          data: {
            username: this.username,
            token: this.token,
            role: this.role
          },
          success: (res) => {
            if (res.statusCode != 200 && this.token != "") {
              common_vendor.index.showToast({
                title: "登录信息过期",
                icon: "error"
              });
              setTimeout(() => {
                common_vendor.index.navigateTo({
                  url: "/pages/login/login"
                });
              }, 1e3);
            } else {
              if (this.is_teacher) {
                this.name = res.data.name;
                this.phone = res.data.phone;
              } else {
                this.name = res.data.name;
                this.phone = res.data.phone;
                this.major = res.data.major;
                this.college = res.data.college;
              }
            }
          },
          fail: (res) => {
            common_vendor.index.showToast({
              title: "网络错误",
              icon: "error"
            });
          }
        });
      }, 10);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.name),
    b: common_vendor.t($data.phone),
    c: common_vendor.t($data.college),
    d: common_vendor.t($data.major),
    e: !$data.is_teacher,
    f: common_vendor.t($data.name),
    g: common_vendor.t($data.phone),
    h: $data.is_teacher
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/vue/jwxt/pages/userinfo/userinfo.vue"]]);
wx.createPage(MiniProgramPage);
