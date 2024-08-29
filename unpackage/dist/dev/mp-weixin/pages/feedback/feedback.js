"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      host_url: "",
      feedback_text: "",
      show_warming: false,
      username: "",
      token: ""
    };
  },
  onLoad() {
    this.host_url = getApp().globalData.host_url;
    this.loadUserData();
  },
  methods: {
    checkInput() {
      if (this.feedback_text.length <= 5) {
        this.show_warming = true;
        return false;
      } else {
        this.show_warming = false;
        return true;
      }
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
    },
    submitFeedback() {
      if (this.checkInput()) {
        common_vendor.index.request({
          url: this.host_url + "feedback/",
          method: "POST",
          data: {
            username: this.username,
            token: this.token,
            msg: this.feedback_text
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
              common_vendor.index.showToast({
                title: res.data.msg
              });
              setTimeout(() => {
                common_vendor.index.switchTab({
                  url: "/pages/my/my"
                });
              }, 1e3);
            }
          },
          fail: (res) => {
            common_vendor.index.showToast({
              title: "网络错误",
              icon: "error"
            });
          }
        });
      }
    }
  }
};
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_easyinput2 + _easycom_uni_forms_item2 + _easycom_uni_forms2)();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_uni_forms_item + _easycom_uni_forms)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $data.feedback_text = $event),
    b: common_vendor.p({
      type: "textarea",
      placeholder: "写下您的建议或意见吧(●'◡'●)",
      modelValue: $data.feedback_text
    }),
    c: $data.show_warming,
    d: common_vendor.o((...args) => $options.submitFeedback && $options.submitFeedback(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/vue/ycxy/pages/feedback/feedback.vue"]]);
wx.createPage(MiniProgramPage);
