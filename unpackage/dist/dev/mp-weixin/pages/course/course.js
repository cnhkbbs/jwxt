"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  onLoad() {
    this.host_url = getApp().globalData.host_url;
    this.loadUserData();
    setTimeout(() => {
      this.getCourse();
    }, 10);
  },
  onShow() {
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
    getCourse() {
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
          common_vendor.index.showToast({
            title: "网络错误",
            icon: "error"
          });
        }
      });
    },
    loadUserData() {
      common_vendor.index.getStorage({
        key: "token",
        success: (res) => {
          this.token = res.data;
        },
        fail: (res) => {
          common_vendor.index.navigateTo({
            url: "/pages/login/login"
          });
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
    a: common_vendor.f($data.course_lists, (item, index, i0) => {
      return {
        a: common_vendor.t(index + 1),
        b: "5447e983-11-" + i0 + "," + ("5447e983-10-" + i0),
        c: common_vendor.f(item, (subItem, subIndex, i1) => {
          return {
            a: common_vendor.t(subItem),
            b: subIndex,
            c: "5447e983-12-" + i0 + "-" + i1 + "," + ("5447e983-10-" + i0)
          };
        }),
        d: index,
        e: "5447e983-10-" + i0 + ",5447e983-0"
      };
    }),
    b: common_vendor.p({
      stripe: true,
      emptyText: "暂无更多数据"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/vue/jwxt/pages/course/course.vue"]]);
wx.createPage(MiniProgramPage);
