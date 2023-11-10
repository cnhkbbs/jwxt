"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      pictures: [
        {
          id: "1",
          url: "http://cdn-hw-static2.shanhutech.cn/bizhi/staticwp/202211/4f182009973bd05e633a12096c9d986b--4261460870.jpg"
        },
        {
          id: "2",
          url: "http://cdn-hw-static2.shanhutech.cn/bizhi/staticwp/202209/3aec73edc257e4d7f679a4e9791d93e1--405277223.jpg"
        },
        {
          id: "3",
          url: "http://cdn-hw-static2.shanhutech.cn/bizhi/staticwp/202310/17e05efa4e03c4a62a9ef4dc8fbeb409--2755567652.jpg"
        },
        {
          id: "4",
          url: "http://cdn-hw-static2.shanhutech.cn/bizhi/staticwp/202308/d5394a3a31c3bd976198f6668f28ab5e--300955069.jpg"
        },
        {
          id: "5",
          url: "http://cdn-hw-static2.shanhutech.cn/bizhi/staticwp/202308/7d4cdf253feece60ab5c55c8e185008f--342728100.jpg"
        },
        {
          id: "6",
          url: "http://cdn-hw-static2.shanhutech.cn/bizhi/staticwp/202308/3d4cd72c4b547d123afeb5ec630de597--2966950063.jpg"
        }
      ]
    };
  },
  methods: {
    onPreviewImage(url) {
      common_vendor.index.previewImage({
        urls: this.pictures.map((v) => v.url),
        current: url
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.pictures, (item, k0, i0) => {
      return {
        a: common_vendor.o(($event) => $options.onPreviewImage(item.url), item.id),
        b: item.url,
        c: item.id
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/vue/wx_demo/pages/swiper/swiper.vue"]]);
wx.createPage(MiniProgramPage);
