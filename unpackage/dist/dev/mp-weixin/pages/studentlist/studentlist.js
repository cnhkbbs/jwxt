"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  onLoad(opt) {
    this.host_url = getApp().globalData.host_url;
    this.refer = opt.refer;
  },
  onShow() {
    this.prepareData();
  },
  data() {
    return {
      host_url: "",
      student_list: [],
      token: "",
      username: "",
      refer: ""
    };
  },
  methods: {
    goNext(key) {
      if (this.refer === "grades") {
        this.goToGradesPage(key);
      } else if (this.refer === "analysis") {
        this.goToGradesAnalysisPage(key);
      }
    },
    goToGradesPage(stuid) {
      common_vendor.index.navigateTo({
        url: "/pages/grades/grades?studentid=" + stuid
      });
    },
    goToGradesAnalysisPage(stuid) {
      common_vendor.index.navigateTo({
        url: "/pages/gradesanalysis/gradesanalysis?studentid=" + stuid
      });
    },
    async prepareData() {
      await this.loadUserData();
      this.getStudentList();
    },
    loadUserData() {
      return new Promise((resolve) => {
        let tokenPromise = this.getStorageData("token", "token");
        let usernamePromise = this.getStorageData("username", "username");
        Promise.all([tokenPromise, usernamePromise]).then(() => {
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
    getStudentList() {
      common_vendor.index.request({
        url: this.host_url + "members/get_students",
        method: "POST",
        data: {
          token: this.token,
          username: this.username
        },
        header: {
          "content-type": "application/json"
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
            const student_list = res.data;
            this.$set(this, "student_list", student_list);
          }
        },
        fail: (res) => {
          console.log(res.data);
          common_vendor.index.navigateTo({
            url: "/pages/login/login"
          });
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.student_list, (value, key, i0) => {
      return {
        a: common_vendor.t(value),
        b: key,
        c: common_vendor.o(($event) => $options.goNext(key), key)
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/vue/jwxt/pages/studentlist/studentlist.vue"]]);
wx.createPage(MiniProgramPage);
