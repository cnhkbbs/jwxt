"use strict";const e=require("../../common/vendor.js"),a={data:()=>({formData:{username:"",password:"",role:1,host_url:""}}),onLoad(){this.host_url=getApp().globalData.host_url},methods:{submit(){""===this.formData.username?e.index.showToast({icon:"none",title:"请输入账号"}):""===this.formData.password?e.index.showToast({icon:"none",title:"请输入密码"}):e.index.request({url:this.host_url+"auth/login",method:"POST",data:`\r\n--XXX\r\nContent-Disposition: form-data; name="username"\r\n\r\n${this.formData.username}\r\n--XXX\r\nContent-Disposition: form-data; name="password"\r\n\r\n${this.formData.password}\r\n--XXX\r\nContent-Disposition: form-data; name="role"\r\n\r\n${this.formData.role}\r\n--XXX--`,header:{"content-type":"multipart/form-data; boundary=XXX"},success:a=>{const{data:t}=a;e.index.showToast({icon:"none",title:t.msg,success:()=>{t.token&&(e.index.setStorage({key:"token",data:t.token}),e.index.setStorage({key:"username",data:this.formData.username}),e.index.setStorage({key:"role",data:t.role}),e.index.setStorage({key:"name",data:t.name}),setTimeout((()=>{e.index.switchTab({url:"/pages/index/index"})}),1e3))}})}})},goToIndexPage(){e.index.switchTab({url:"/pages/index/index"})}}};const t=e._export_sfc(a,[["render",function(a,t,o,n,r,s){return{a:e.o((e=>r.formData.role=1)),b:e.n(1===r.formData.role?"checked":""),c:e.o((e=>r.formData.role=2)),d:e.n(2===r.formData.role?"checked":""),e:r.formData.username,f:e.o((e=>r.formData.username=e.detail.value)),g:r.formData.password,h:e.o((e=>r.formData.password=e.detail.value)),i:e.o(((...e)=>s.submit&&s.submit(...e))),j:e.o(((...e)=>s.goToIndexPage&&s.goToIndexPage(...e)))}}],["__scopeId","data-v-84363c8f"]]);wx.createPage(t);
