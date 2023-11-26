"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  onLoad(opt) {
    this.host_url = getApp().globalData.host_url;
    this.studentid = opt.studentid;
  },
  onShow() {
    this.prepareData();
  },
  data() {
    return {
      host_url: "",
      token: "",
      username: "",
      role: "",
      grades_lists: {},
      studentid: ""
    };
  },
  methods: {
    async prepareData() {
      await this.loadUserData();
      this.getGrades();
    },
    getGrades() {
      common_vendor.index.request({
        url: this.host_url + "grades/get_grades",
        method: "POST",
        data: {
          token: this.token,
          username: this.username,
          role: this.role,
          student_id: this.studentid
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
            let res_data = res.data;
            res_data = res_data["grades"];
            const grades_lists = res_data;
            this.$set(this, "grades_lists", grades_lists);
          }
        },
        fail: (res) => {
          common_vendor.index.showToast({
            title: "网络错误",
            icon: "error"
          });
        }
      });
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
    }
  }
};
if (!Array) {
  const _easycom_uni_th2 = common_vendor.resolveComponent("uni-th");
  const _easycom_uni_tr2 = common_vendor.resolveComponent("uni-tr");
  const _easycom_uni_td2 = common_vendor.resolveComponent("uni-td");
  const _easycom_uni_table2 = common_vendor.resolveComponent("uni-table");
  (_easycom_uni_th2 + _easycom_uni_tr2 + _easycom_uni_td2 + _easycom_uni_table2)();
}
const _easycom_uni_th = () => "../../uni_modules/uni-table/components/uni-th/uni-th.js";
const _easycom_uni_tr = () => "../../uni_modules/uni-table/components/uni-tr/uni-tr.js";
const _easycom_uni_td = () => "../../uni_modules/uni-table/components/uni-td/uni-td.js";
const _easycom_uni_table = () => "../../uni_modules/uni-table/components/uni-table/uni-table.js";
if (!Math) {
  (_easycom_uni_th + _easycom_uni_tr + _easycom_uni_td + _easycom_uni_table)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.grades_lists, (item, index, i0) => {
      return {
        a: common_vendor.f(item, (subItem, subIndex, i1) => {
          return {
            a: common_vendor.t(subItem),
            b: subIndex,
            c: "9cdbcb3a-8-" + i0 + "-" + i1 + "," + ("9cdbcb3a-7-" + i0)
          };
        }),
        b: index,
        c: "9cdbcb3a-7-" + i0 + ",9cdbcb3a-0"
      };
    }),
    b: common_vendor.p({
      stripe: true,
      emptyText: "暂无更多数据"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/vue/jwxt/pages/grades/grades.vue"]]);
wx.createPage(MiniProgramPage);
