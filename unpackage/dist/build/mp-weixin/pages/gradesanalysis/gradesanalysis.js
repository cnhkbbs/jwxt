"use strict";const e=require("../../common/vendor.js"),t={onLoad(e){this.host_url=getApp().globalData.host_url,this.studentid=e.studentid,this.prepareData()},data:()=>({host_url:"",token:"",username:"",role:"",student_id:"",selected_value:0,selection_range:[],grades_lists:[],grades_lists_length:0,arcbar_chartData:{},column_chartData:{},arcbar_opts:{},column_opts:{color:["#FAC858","#EE6666","#FAC858","#EE6666","#73C0DE","#3CA272","#FC8452","#9A60B4","#ea7ccc"],padding:[15,15,0,5],enableScroll:!1,legend:{},xAxis:{disableGrid:!0},yAxis:{data:[{min:0}]},extra:{column:{type:"group",width:30,activeBgColor:"#000000",activeBgOpacity:.08,linearType:"custom",seriesGap:5,linearOpacity:.5,barBorderCircle:!0,customColor:["#FA7D8D","#EB88E2"]}}}}),methods:{async prepareData(){await this.loadUserData(),await this.getGrades(),this.getCourseList(),this.getPassRate()},async getGrades(){return new Promise((t=>{e.index.showLoading({title:"加载中"}),e.index.request({url:this.host_url+"grades/get_grades",method:"POST",data:{token:this.token,username:this.username,role:this.role,student_id:this.studentid},header:{"content-type":"application/json"},success:a=>{e.index.hideLoading(),200!=a.statusCode&&""!=this.token?(e.index.showToast({title:"登录信息过期",icon:"error"}),setTimeout((()=>{e.index.navigateTo({url:"/pages/login/login"})}))):(this.grades_lists=a.data.grades,this.grades_lists_length=this.grades_lists.length),t()},fail:a=>{e.index.hideLoading(),e.index.showToast({title:"网络错误",icon:"error"}),t()}})}))},changeCourse(){var e=this.selected_value;let t={categories:[this.selection_range[e].text],series:[{name:"平时",data:[this.grades_lists[e][2]]},{name:"期中",data:[this.grades_lists[e][3]]},{name:"期末",data:[this.grades_lists[e][4]]}]};this.column_chartData=t},getCourseList(){for(var e=[],t=0;t<this.grades_lists_length;t++)e.push({value:t,text:this.grades_lists[t][0]});this.selection_range=e,this.changeCourse()},getPassRate(){for(var e=this.grades_lists_length,t=0,a=0;a<e;a++)this.grades_lists[a][4]>=60&&t++;var s=t/e;let r={series:[{name:"及格率",color:"#2fc25b",data:s}]},i={color:["#1890FF","#91CB74","#FAC858","#EE6666","#73C0DE","#3CA272","#FC8452","#9A60B4","#ea7ccc"],title:{name:(100*s).toString()+"%",fontSize:35,color:"#2fc25b"},subtitle:{name:"及格率",fontSize:25,color:"#666666"},extra:{arcbar:{type:"default",width:12,backgroundColor:"#E9E9E9",startAngle:.75,endAngle:.25,gap:2,linearType:"custom"}}};this.arcbar_opts=JSON.parse(JSON.stringify(i)),this.arcbar_chartData=JSON.parse(JSON.stringify(r))},loadUserData(){const t=[];return new Promise(((a,s)=>{let r=this.getStorageData("token","token",t),i=this.getStorageData("username","username",t),o=this.getStorageData("role","role",t);Promise.all([r,i,o]).then((()=>{t.length>0?e.index.navigateTo({url:"/pages/login/login"}):a()})).catch((e=>{console.error("Promise.all failed with error:",e),s(e)}))}))},getStorageData(t,a,s){return new Promise(((r,i)=>{e.index.getStorage({key:t,success:e=>{this[a]=e.data,r()},fail:e=>{s.push(`${t} data retrieval failed.`),r()}})}))}}};if(!Array){(e.resolveComponent("qiun-data-charts")+e.resolveComponent("uni-data-select"))()}Math||((()=>"../../uni_modules/qiun-data-charts/components/qiun-data-charts/qiun-data-charts.js")+(()=>"../../uni_modules/uni-data-select/components/uni-data-select/uni-data-select.js"))();const a=e._export_sfc(t,[["render",function(t,a,s,r,i,o){return{a:e.p({type:"arcbar",opts:i.arcbar_opts,chartData:i.arcbar_chartData,canvas2d:!0,canvasId:"xLehDtwtzjlkEqFSFJjVpihSCFCxlACw"}),b:e.p({type:"column",opts:i.column_opts,chartData:i.column_chartData,canvas2d:!0,canvasId:"SktUEIBrIBHUGUhMhJyItaWvdlHPIQQZ","in-scroll-view":!0}),c:e.o(o.changeCourse),d:e.o((e=>i.selected_value=e)),e:e.p({localdata:i.selection_range,modelValue:i.selected_value})}}]]);wx.createPage(a);