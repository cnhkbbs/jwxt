"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      count_down_hour: 0,
      count_down_minute: 25,
      count_down_second: 0,
      remaining_hour: 0,
      remaining_minute: 0,
      remaining_second: 0,
      timer: null,
      selected_button_num: 0,
      show_set_time_box: true,
      show_chart_animation: true,
      chartData: {
        series: [
          {
            name: "时",
            data: 0
          },
          {
            name: "分",
            data: 0
          },
          {
            name: "秒",
            data: 0
          }
        ]
      },
      opts: {
        update: false,
        color: ["#1890FF", "#91CB74", "#FAC858"],
        title: {
          name: "专注",
          fontSize: 38,
          color: "#1890ff"
        },
        subtitle: {
          name: "是成功的关键",
          fontSize: 15,
          color: "#666666"
        },
        extra: {
          arcbar: {
            type: "circle",
            width: 16,
            backgroundColor: "#E9E9E9",
            startAngle: 1.5,
            endAngle: 0.25,
            gap: 5
          }
        }
      }
    };
  },
  onShow() {
  },
  methods: {
    buttonClick(hour, minute, second, button_num) {
      this.selected_button_num = button_num;
      this.count_down_hour = hour;
      this.count_down_second = second;
      this.count_down_minute = minute;
    },
    countDownStart() {
      let res = {
        series: [
          {
            name: "秒",
            data: 1
          },
          {
            name: "分",
            data: 1
          },
          {
            name: "时",
            data: 1
          }
        ]
      };
      this.chartData = res;
      setTimeout(() => {
        this.changeChartStatues();
      }, 1e3);
      this.show_set_time_box = !this.show_set_time_box;
      this.remaining_hour = this.count_down_hour;
      this.remaining_minute = this.count_down_minute;
      this.remaining_second = this.count_down_second;
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
      this.timer = setInterval(() => {
        this.updateCountdown();
      }, 1e3);
    },
    countDownStop() {
      console.log("计时结束");
      clearInterval(this.timer);
      this.timer = null;
      this.show_set_time_box = !this.show_set_time_box;
      this.changeChartStatues();
    },
    changeChartStatues() {
      this.opts["update"] = !this.opts["update"];
      this.show_chart_animation = !this.show_chart_animation;
    },
    updateCountdown() {
      if (this.remaining_second > 0) {
        this.remaining_second -= 1;
      } else {
        if (this.remaining_minute > 0) {
          this.remaining_minute -= 1;
          this.remaining_second = 59;
        } else {
          if (this.remaining_hour > 0) {
            this.remaining_hour -= 1;
            this.remaining_minute = 59;
            this.remaining_second = 59;
          } else {
            common_vendor.index.showToast({
              title: "时间到"
            });
            console.log("计时结束");
            clearInterval(this.timer);
            this.timer = null;
          }
        }
      }
      this.setCharData(this.remaining_hour, this.remaining_minute, this.remaining_second, this.count_down_hour);
    },
    setCharData(rema_hour, rema_minute, rema_second, coun_hour) {
      let res = {
        series: [
          {
            name: "秒",
            data: rema_second / 60
          },
          {
            name: "分",
            data: rema_minute / 60
          },
          {
            name: "时",
            data: rema_hour / coun_hour
          }
        ]
      };
      this.chartData = res;
    }
  }
};
if (!Array) {
  const _easycom_qiun_data_charts2 = common_vendor.resolveComponent("qiun-data-charts");
  const _easycom_uni_col2 = common_vendor.resolveComponent("uni-col");
  const _easycom_uni_row2 = common_vendor.resolveComponent("uni-row");
  const _easycom_uni_transition2 = common_vendor.resolveComponent("uni-transition");
  (_easycom_qiun_data_charts2 + _easycom_uni_col2 + _easycom_uni_row2 + _easycom_uni_transition2)();
}
const _easycom_qiun_data_charts = () => "../../uni_modules/qiun-data-charts/components/qiun-data-charts/qiun-data-charts.js";
const _easycom_uni_col = () => "../../uni_modules/uni-row/components/uni-col/uni-col.js";
const _easycom_uni_row = () => "../../uni_modules/uni-row/components/uni-row/uni-row.js";
const _easycom_uni_transition = () => "../../uni_modules/uni-transition/components/uni-transition/uni-transition.js";
if (!Math) {
  (_easycom_qiun_data_charts + _easycom_uni_col + _easycom_uni_row + _easycom_uni_transition)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: !$data.show_set_time_box,
    b: common_vendor.p({
      type: "arcbar",
      opts: $data.opts,
      chartData: $data.chartData,
      canvas2d: true,
      animation: $data.show_chart_animation,
      canvasId: "dXCwXFYykPudbpnyTCNtzAzQIuVstsYo"
    }),
    c: common_vendor.t($data.remaining_hour),
    d: common_vendor.t($data.remaining_minute),
    e: common_vendor.t($data.remaining_second),
    f: common_vendor.o((...args) => $options.countDownStop && $options.countDownStop(...args)),
    g: common_vendor.o(($event) => $options.buttonClick(0, 20, 0, 1)),
    h: $data.selected_button_num === 1 ? 1 : "",
    i: common_vendor.o(($event) => $options.buttonClick(0, 30, 0, 2)),
    j: $data.selected_button_num === 2 ? 1 : "",
    k: common_vendor.o(($event) => $options.buttonClick(0, 45, 0, 3)),
    l: $data.selected_button_num === 3 ? 1 : "",
    m: common_vendor.o(($event) => $options.buttonClick(1, 0, 0, 4)),
    n: $data.selected_button_num === 4 ? 1 : "",
    o: common_vendor.o(($event) => $options.buttonClick(1, 30, 0, 5)),
    p: $data.selected_button_num === 5 ? 1 : "",
    q: common_vendor.o(($event) => $options.buttonClick(2, 0, 0, 6)),
    r: $data.selected_button_num === 6 ? 1 : "",
    s: common_vendor.o((...args) => $options.countDownStart && $options.countDownStart(...args)),
    t: common_vendor.p({
      ["mode-class"]: "slide-top",
      show: $data.show_set_time_box,
      id: "set-time-box"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/acer/Desktop/temp/pages/tomatoclock/tomatoclock.vue"]]);
wx.createPage(MiniProgramPage);
