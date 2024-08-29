"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      host_url: "",
      baseFormData: {
        name: "",
        age: "",
        sex: 3,
        id: "",
        id_type: 1,
        datetimesingle: 1627529992399
      },
      sexs: [{
        text: "男",
        value: 0
      }, {
        text: "女",
        value: 1
      }],
      id_type: [
        {
          value: 1,
          text: "居民身份证"
        },
        {
          value: 2,
          text: "临时身份证"
        },
        {
          value: 3,
          text: "护照"
        },
        {
          value: 4,
          text: "港澳居民来往内地通行证"
        }
      ]
    };
  },
  onLoad() {
    this.host_url = getApp().globalData.host_url;
  },
  methods: {
    submitForm() {
      common_vendor.index.request({
        url: this.host_url + "/visitor_registration",
        method: "POST",
        data: this.baseFormData,
        success: (res) => {
          common_vendor.index.showToast({
            title: res.data.msg
          });
          setTimeout(() => {
            common_vendor.index.switchTab({
              url: "/pages/index/index"
            });
          }, 1e3);
        }
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_data_checkbox2 = common_vendor.resolveComponent("uni-data-checkbox");
  const _easycom_uni_data_select2 = common_vendor.resolveComponent("uni-data-select");
  const _easycom_uni_datetime_picker2 = common_vendor.resolveComponent("uni-datetime-picker");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  (_easycom_uni_easyinput2 + _easycom_uni_forms_item2 + _easycom_uni_data_checkbox2 + _easycom_uni_data_select2 + _easycom_uni_datetime_picker2 + _easycom_uni_forms2 + _easycom_uni_section2)();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_data_checkbox = () => "../../uni_modules/uni-data-checkbox/components/uni-data-checkbox/uni-data-checkbox.js";
const _easycom_uni_data_select = () => "../../uni_modules/uni-data-select/components/uni-data-select/uni-data-select.js";
const _easycom_uni_datetime_picker = () => "../../uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_uni_forms_item + _easycom_uni_data_checkbox + _easycom_uni_data_select + _easycom_uni_datetime_picker + _easycom_uni_forms + _easycom_uni_section)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $data.baseFormData.name = $event),
    b: common_vendor.p({
      placeholder: "请输入姓名",
      modelValue: $data.baseFormData.name
    }),
    c: common_vendor.p({
      label: "姓名",
      required: true
    }),
    d: common_vendor.o(($event) => $data.baseFormData.sex = $event),
    e: common_vendor.p({
      localdata: $data.sexs,
      modelValue: $data.baseFormData.sex
    }),
    f: common_vendor.p({
      label: "性别",
      required: true
    }),
    g: common_vendor.o(($event) => $data.baseFormData.id_type = $event),
    h: common_vendor.p({
      localdata: $data.id_type,
      modelValue: $data.baseFormData.id_type
    }),
    i: common_vendor.p({
      label: "证件类型",
      required: true
    }),
    j: common_vendor.o(($event) => $data.baseFormData.id = $event),
    k: common_vendor.p({
      placeholder: "证件号码",
      modelValue: $data.baseFormData.id
    }),
    l: common_vendor.p({
      label: "证件号码",
      required: true
    }),
    m: common_vendor.o(($event) => $data.baseFormData.introduction = $event),
    n: common_vendor.p({
      type: "textarea",
      placeholder: "请输入来访事由",
      modelValue: $data.baseFormData.introduction
    }),
    o: common_vendor.p({
      label: "来访事由"
    }),
    p: common_vendor.o(($event) => $data.baseFormData.datetimesingle = $event),
    q: common_vendor.p({
      type: "datetime",
      ["return-type"]: "timestamp",
      modelValue: $data.baseFormData.datetimesingle
    }),
    r: common_vendor.p({
      label: "预约来访时间"
    }),
    s: common_vendor.sr("baseForm", "d52c6396-1,d52c6396-0"),
    t: common_vendor.p({
      modelValue: $data.baseFormData
    }),
    v: common_vendor.o((...args) => $options.submitForm && $options.submitForm(...args)),
    w: common_vendor.p({
      title: "来访登记表",
      type: "line"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/vue/ycxy/pages/visitorregistration/visitorregistration.vue"]]);
wx.createPage(MiniProgramPage);
