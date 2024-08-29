"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  onLoad(opt) {
    this.host_url = getApp().globalData.host_url;
    this.refer = opt.refer;
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
    },
    getStudentList() {
      common_vendor.index.showLoading({
        title: "加载中"
      });
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
            }, 1e3);
          } else {
            const student_list = res.data;
            this.$set(this, "student_list", student_list);
          }
        },
        fail: (res) => {
          common_vendor.index.hideLoading();
          console.log(res.data);
          common_vendor.index.navigateTo({
            url: "/pages/login/login"
          });
        }
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
    a: common_vendor.f($data.student_list, (value, key, i0) => {
      return {
        a: common_vendor.t(key),
        b: common_vendor.t(value),
        c: "f45480ce-0-" + i0,
        d: key,
        e: common_vendor.o(($event) => $options.goNext(key), key)
      };
    }),
    b: common_vendor.p({
      type: "right",
      size: "26"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/vue/ycxy/pages/studentlist/studentlist.vue"]]);
wx.createPage(MiniProgramPage);
