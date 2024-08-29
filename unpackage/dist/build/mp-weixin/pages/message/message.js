"use strict";const e=require("../../common/vendor.js"),t={data:()=>({host_url:"",username:"",token:"",show_no_message:!1,message:""}),onLoad(){this.host_url=getApp().globalData.host_url,this.prepareData()},methods:{async prepareData(){await this.loadUserData(),this.getMessage()},getMessage(){e.index.showLoading({title:"加载中"}),e.index.request({url:this.host_url+"message/",method:"POST",data:{username:this.username,token:this.token},success:t=>{e.index.hideLoading(),200!=t.statusCode&&""!=this.token?(e.index.showToast({title:"登录信息过期",icon:"error"}),setTimeout((()=>{e.index.navigateTo({url:"/pages/login/login"})}),1e3)):0===t.data.count?this.show_no_message=!0:this.message=t.data.msg},fail:t=>{e.index.hideLoading(),e.index.showToast({title:"网络错误",icon:"error"})}})},loadUserData(){const t=[];return new Promise(((s,a)=>{let o=this.getStorageData("token","token",t),r=this.getStorageData("username","username",t);Promise.all([o,r]).then((()=>{t.length>0?e.index.navigateTo({url:"/pages/login/login"}):s()})).catch((e=>{console.error("Promise.all failed with error:",e),a(e)}))}))},getStorageData(t,s,a){return new Promise(((o,r)=>{e.index.getStorage({key:t,success:e=>{this[s]=e.data,o()},fail:e=>{a.push(`${t} data retrieval failed.`),o()}})}))}}};const s=e._export_sfc(t,[["render",function(t,s,a,o,r,n){return{a:r.show_no_message,b:e.t(r.message),c:!r.show_no_message}}]]);wx.createPage(s);
