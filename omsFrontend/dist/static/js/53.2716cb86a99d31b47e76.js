webpackJsonp([53],{B3pn:function(e,t,r){t=e.exports=r("FZ+f")(!1),t.push([e.i,"",""])},"HQ/U":function(e,t,r){"use strict";function o(e){r("llD4")}Object.defineProperty(t,"__esModule",{value:!0});var l=r("lLHC"),n=r("nSkA"),s=r("vMJZ"),a=r("0xDb"),u={components:{},props:["demand"],data:function(){return{route_path:this.$route.path.split("/"),ruleForm:{name:"",content1:"",content2:"",create_user:localStorage.getItem("username"),task_complete:0,action_user:"",pid:"",time:[]},rules:{name:[{required:!0,message:"请输入正确的内容",trigger:"blur"}],action_user:[{required:!0,message:"请输入正确的内容",trigger:"blur"}],content1:[{required:!0,message:"请输入正确的内容",trigger:"blur"}],time:[{required:!0,type:"array",message:"请输入正确的内容",trigger:"blur"}]},users:[],sendnotice:!1}},created:function(){this.getUsers()},methods:{postForm:function(e){var t=this;this.ruleForm.demand=this.demand,this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;t.ruleForm.start_time=t.ruleForm.time[0],t.ruleForm.end_time=t.ruleForm.time[1],t.ruleForm.pid="pps"+Object(a.a)(),Object(l.i)(t.ruleForm).then(function(e){if('"Created"'===e.statusText&&t.$message({type:"success",message:"恭喜你，新建成功"}),t.sendnotice){var r={action_user:t.ruleForm.action_user,title:"【"+t.ruleForm.type+"】"+t.ruleForm.title,message:"提交人: "+t.ruleForm.create_user+"\n指派人: "+t.ruleForm.action_user};Object(n.h)(r)}t.$emit("DialogStatus",!1)})})},resetForm:function(e){this.$refs[e].resetFields()},getUsers:function(){var e=this,t={groups__name:"ITDept"};Object(s.f)(t).then(function(t){e.users=t.data})}}},i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"名称",prop:"name"}},[r("el-input",{attrs:{placeholder:"请输入名称"},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"指派人",prop:"action_user"}},[r("el-select",{attrs:{filterable:"",placeholder:"请选择指派人"},model:{value:e.ruleForm.action_user,callback:function(t){e.$set(e.ruleForm,"action_user",t)},expression:"ruleForm.action_user"}},e._l(e.users,function(e){return r("el-option",{key:e.id,attrs:{value:e.username}})}))],1),e._v(" "),r("el-form-item",{attrs:{label:"内容",prop:"content1"}},[r("el-input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:10}},model:{value:e.ruleForm.content1,callback:function(t){e.$set(e.ruleForm,"content1",t)},expression:"ruleForm.content1"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"时间",prop:"time"}},[r("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd"},model:{value:e.ruleForm.time,callback:function(t){e.$set(e.ruleForm,"time",t)},expression:"ruleForm.time"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"发送通知",prop:"sendnotice"}},[r("el-checkbox",{model:{value:e.sendnotice,callback:function(t){e.sendnotice=t},expression:"sendnotice"}},[e._v("发送通知")])],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.postForm("ruleForm")}}},[e._v("提交")]),e._v(" "),r("el-button",{attrs:{type:"danger"},on:{click:function(t){e.resetForm("ruleForm")}}},[e._v("清空")])],1)],1)},m=[],c={render:i,staticRenderFns:m},p=c,d=r("VU/8"),f=o,F=d(u,p,!1,f,null,null);t.default=F.exports},llD4:function(e,t,r){var o=r("B3pn");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);r("rjj0")("2391cd8e",o,!0)}});