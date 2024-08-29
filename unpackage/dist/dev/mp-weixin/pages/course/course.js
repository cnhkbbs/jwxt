"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  onLoad() {
    this.host_url = getApp().globalData.host_url;
    this.prepareData();
  },
  data() {
    return {
      host_url: "",
      course_lists: [],
      token: "",
      username: ""
    };
  },
  methods: {
    async prepareData() {
      await this.loadUserData();
      this.getCourse();
    },
    getCourse() {
      common_vendor.index.showLoading({
        title: "加载中"
      });
      common_vendor.index.request({
        url: this.host_url + "courses/get_courses",
        method: "POST",
        data: {
          token: this.token,
          username: this.username
        },
        header: {
          "content-type": "application/json"
        },
        success: (res) => {
          common_vendor.index.hideLoading();
          if (res.statusCode != 200 && this.token != "") {
            common_vendor.index.showToast({
              title: "登录信息过期",
              icon: "error"
            });
            setTimeout(() => {
              common_vendor.index.navigateTo({
                url: "/pages/login/login"
              });
            });
          } else {
            const course_lists = res.data;
            this.$set(this, "course_lists", course_lists);
          }
        },
        fail: (res) => {
          common_vendor.index.hideLoading();
          common_vendor.index.showToast({
            title: "网络错误",
            icon: "error"
          });
        }
      });
    },
    loadUserData() {
      const errors = [];
      return new Promise((resolve, reject) => {
        let tokenPromise = this.getStorageData("token", "token", errors);
        let usernamePromise = this.getStorageData("username", "username", errors);
        Promise.all([tokenPromise, usernamePromise]).then(() => {
          if (errors.length > 0) {
            common_vendor.index.navigateTo({
              url: "/pages/login/login"
            });
          } else {
            resolve();
          }
        }).catch((err) => {
          console.error("Promise.all failed with error:", err);
          reject(err);
        });
      });
    },
    getStorageData(key, dataName, errors) {
      return new Promise((resolve, reject) => {
        common_vendor.index.getStorage({
          key,
          success: (res) => {
            this[dataName] = res.data;
            resolve();
          },
          fail: (res) => {
            errors.push(`${key} data retrieval failed.`);
            resolve();
          }
        });
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.course_lists, (item, index, i0) => {
      return {
        a: common_vendor.t(index + 1),
        b: common_vendor.f(item, (subitem, i, i1) => {
          return common_vendor.e({
            a: subitem === ""
          }, subitem === "" ? {} : {
            b: common_vendor.t(subitem)
          }, {
            c: i
          });
        }),
        c: index
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/vue/ycxy/pages/course/course.vue"]]);
wx.createPage(MiniProgramPage);
