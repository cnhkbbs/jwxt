"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      baseFormData: {
        name: "",
        age: "",
        introduction: "",
        sex: 2,
        hobby: [5],
        datetimesingle: 1627529992399
      },
      // 表单数据
      alignmentFormData: {
        name: "",
        age: ""
      },
      // 单选数据源
      sexs: [{
        text: "男",
        value: 0
      }, {
        text: "女",
        value: 1
      }],
      // 多选数据源
      hobbys: [{
        text: "跑步",
        value: 0
      }, {
        text: "游泳",
        value: 1
      }, {
        text: "绘画",
        value: 2
      }, {
        text: "足球",
        value: 3
      }, {
        text: "篮球",
        value: 4
      }, {
        text: "其他",
        value: 5
      }]
    };
  },
  methods: {}
};
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_data_checkbox2 = common_vendor.resolveComponent("uni-data-checkbox");
  const _easycom_uni_datetime_picker2 = common_vendor.resolveComponent("uni-datetime-picker");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  (_easycom_uni_easyinput2 + _easycom_uni_forms_item2 + _easycom_uni_data_checkbox2 + _easycom_uni_datetime_picker2 + _easycom_uni_forms2 + _easycom_uni_section2)();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_data_checkbox = () => "../../uni_modules/uni-data-checkbox/components/uni-data-checkbox/uni-data-checkbox.js";
const _easycom_uni_datetime_picker = () => "../../uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_uni_forms_item + _easycom_uni_data_checkbox + _easycom_uni_datetime_picker + _easycom_uni_forms + _easycom_uni_section)();
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
    d: common_vendor.o(($event) => $data.baseFormData.age = $event),
    e: common_vendor.p({
      placeholder: "请输入年龄",
      modelValue: $data.baseFormData.age
    }),
    f: common_vendor.p({
      label: "年龄",
      required: true
    }),
    g: common_vendor.o(($event) => $data.baseFormData.sex = $event),
    h: common_vendor.p({
      localdata: $data.sexs,
      modelValue: $data.baseFormData.sex
    }),
    i: common_vendor.p({
      label: "性别",
      required: true
    }),
    j: common_vendor.o(($event) => $data.baseFormData.hobby = $event),
    k: common_vendor.p({
      multiple: true,
      localdata: $data.hobbys,
      modelValue: $data.baseFormData.hobby
    }),
    l: common_vendor.p({
      label: "兴趣爱好",
      required: true
    }),
    m: common_vendor.o(($event) => $data.baseFormData.introduction = $event),
    n: common_vendor.p({
      type: "textarea",
      placeholder: "请输入自我介绍",
      modelValue: $data.baseFormData.introduction
    }),
    o: common_vendor.p({
      label: "详细地址"
    }),
    p: common_vendor.o(($event) => $data.baseFormData.datetimesingle = $event),
    q: common_vendor.p({
      type: "datetime",
      ["return-type"]: "timestamp",
      modelValue: $data.baseFormData.datetimesingle
    }),
    r: common_vendor.p({
      label: "出生年月"
    }),
    s: common_vendor.sr("baseForm", "76a8a79a-1,76a8a79a-0"),
    t: common_vendor.p({
      modelValue: $data.baseFormData
    }),
    v: common_vendor.o(($event) => _ctx.submit("customForm")),
    w: common_vendor.p({
      title: "登记表",
      type: "line"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/vue/jwxt/pages/visitorregistration/visitorregistration.vue"]]);
wx.createPage(MiniProgramPage);
