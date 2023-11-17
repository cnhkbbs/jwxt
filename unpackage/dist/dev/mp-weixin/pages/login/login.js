"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      formData: {
        username: "",
        password: "",
        role: 1,
        host_url: ""
      }
    };
  },
  onLoad() {
    this.host_url = getApp().globalData.host_url;
  },
  methods: {
    submit() {
      if (this.formData.username === "") {
        common_vendor.index.showToast({
          icon: "none",
          title: "请输入账号"
        });
      } else if (this.formData.password === "") {
        common_vendor.index.showToast({
          icon: "none",
          title: "请输入密码"
        });
      } else {
        common_vendor.index.request({
          url: this.host_url + "auth/login",
          method: "POST",
          data: `\r
--XXX\r
Content-Disposition: form-data; name="username"\r
\r
${this.formData.username}\r
--XXX\r
Content-Disposition: form-data; name="password"\r
\r
${this.formData.password}\r
--XXX\r
Content-Disposition: form-data; name="role"\r
\r
${this.formData.role}\r
--XXX--`,
          header: {
            "content-type": "multipart/form-data; boundary=XXX"
          },
          success: (res) => {
            const {
              data
            } = res;
            common_vendor.index.showToast({
              icon: "none",
              title: data.msg,
              success: () => {
                if (data.token) {
                  common_vendor.index.setStorage({
                    key: "token",
                    data: data.token
                  });
                  common_vendor.index.setStorage({
                    key: "token",
                    data: data.token
                  });
                  common_vendor.index.switchTab({
                    url: "/pages/index/index"
                  });
                }
              }
            });
          }
        });
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $data.formData.role = 1),
    b: common_vendor.n($data.formData.role === 1 ? "checked" : ""),
    c: common_vendor.o(($event) => $data.formData.role = 2),
    d: common_vendor.n($data.formData.role === 2 ? "checked" : ""),
    e: $data.formData.username,
    f: common_vendor.o(($event) => $data.formData.username = $event.detail.value),
    g: $data.formData.password,
    h: common_vendor.o(($event) => $data.formData.password = $event.detail.value),
    i: common_vendor.o((...args) => $options.submit && $options.submit(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e4e4508d"], ["__file", "C:/Users/acer/Desktop/temp/pages/login/login.vue"]]);
wx.createPage(MiniProgramPage);
