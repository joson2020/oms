webpackJsonp([45],{WpqJ:function(e,t,r){"use strict";function o(e){r("eGSQ")}Object.defineProperty(t,"__esModule",{value:!0});var n=r("BO1k"),a=r.n(n),l=r("EMlb"),s=r("nSkA"),i=r("QmSG"),u=r("0xDb"),c={components:{},data:function(){return{route_path:this.$route.path.split("/"),ruleForm:{name:"",type:"",content:"",create_user:localStorage.getItem("username"),pid:""},rules:{name:[{required:!0,message:"请输入正确的内容",trigger:"blur"}],content:[{required:!0,message:"请输入正确的内容",trigger:"blur"}],type:[{required:!0,message:"请输入正确的内容",trigger:"blur"}]},toolbars:{preview:!0,bold:!0,italic:!0,header:!0,underline:!0,strikethrough:!0,ol:!0,help:!0},uploadurl:i.uploadurl,types:[],img_file:{},sendnotice:!1,fileList:[],count:0,enclosureData:[],enclosureForm:{project:"",create_user:localStorage.getItem("username"),file:""}}},created:function(){this.getTypes()},methods:{postForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;t.ruleForm.pid="dm"+Object(u.a)(),Object(l.u)(t.ruleForm).then(function(e){'"Created"'===e.statusText&&t.$message({type:"success",message:"恭喜你，新建成功"});var r=!0,o=!1,n=void 0;try{for(var i,c=a()(t.fileList);!(r=(i=c.next()).done);r=!0){var p=i.value,m=new FormData;m.append("username",t.enclosureForm.create_user),m.append("file",p),m.append("create_time",Object(u.a)(p.uid)),m.append("type",p.type),m.append("archive",t.route_path[1]),Object(s.i)(m).then(function(r){t.enclosureForm.file=r.data.filepath,t.enclosureForm.project=e.data.id,Object(l.t)(t.enclosureForm)})}}catch(e){o=!0,n=e}finally{try{!r&&c.return&&c.return()}finally{if(o)throw n}}if(t.sendnotice){var d={action_user:t.ruleForm.action_user.join(),title:"【"+t.ruleForm.type+"】"+t.ruleForm.title,message:"提交人: "+t.ruleForm.create_user+"\n指派人: "+t.ruleForm.action_user+"\n任务地址: http://"+window.location.host+"/#/projects/editproject/"+t.ruleForm.id};Object(s.h)(d)}t.$router.push("/projects/demands")})})},resetForm:function(e){this.$refs[e].resetFields()},getTypes:function(){var e=this;Object(l.n)().then(function(t){e.types=t.data})},imgAdd:function(e,t){var r=this.$refs.md,o=new FormData;o.append("username",this.ruleForm.create_user),o.append("file",t),o.append("create_time",Object(u.a)(t.lastModified)),o.append("type",t.type),o.append("archive",this.route_path[1]),Object(s.i)(o).then(function(t){r.$imglst2Url([[e,t.data.file]])})},handleSuccess:function(e,t){this.fileList.push(t.raw),this.count+=1},handleRemove:function(e,t){this.fileList.remove(e),this.count-=1}}},p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"components-container",staticStyle:{height:"100vh"}},[r("el-card",[r("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"名称",prop:"name"}},[r("el-input",{attrs:{placeholder:"请输入名称"},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"类型",prop:"type"}},[r("el-select",{attrs:{placeholder:"请选择类型"},model:{value:e.ruleForm.type,callback:function(t){e.$set(e.ruleForm,"type",t)},expression:"ruleForm.type"}},e._l(e.types,function(e){return r("el-option",{key:e.id,attrs:{value:e.name}})}))],1),e._v(" "),r("el-form-item",{attrs:{label:"内容",prop:"content"}},[r("mavon-editor",{ref:"md",staticStyle:{"z-index":"1"},attrs:{code_style:"monokai",toolbars:e.toolbars},on:{imgAdd:e.imgAdd},model:{value:e.ruleForm.content,callback:function(t){e.$set(e.ruleForm,"content",t)},expression:"ruleForm.content"}}),e._v(" "),r("a",{staticClass:"tips"},[e._v(" Tip：截图可以直接 Ctrl + v 粘贴到内容里面")])],1),e._v(" "),r("el-form-item",{attrs:{label:"附件"}},[r("el-upload",{ref:"upload",attrs:{action:e.uploadurl,"on-success":e.handleSuccess,"on-remove":e.handleRemove,"file-list":e.fileList}},[r("el-button",{attrs:{slot:"trigger",size:"mini",type:"success",plain:"",disabled:e.count>4},slot:"trigger"},[e._v("\n            上传\n          ")]),e._v(" "),r("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[r("p",[e._v("上传文件不超过10m，"),r("a",{staticStyle:{color:"red"}},[e._v("最多只能上传5个文件")])])])],1),e._v(" "),r("hr",{staticClass:"heng"})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.postForm("ruleForm")}}},[e._v("提交")]),e._v(" "),r("el-button",{attrs:{type:"danger"},on:{click:function(t){e.resetForm("ruleForm")}}},[e._v("清空")])],1)],1)],1)],1)},m=[],d={render:p,staticRenderFns:m},f=d,h=r("VU/8"),v=o,F=h(c,f,!1,v,null,null);t.default=F.exports},ZwG4:function(e,t,r){t=e.exports=r("FZ+f")(!1),t.push([e.i,".addticket{margin:50px;width:80%}",""])},eGSQ:function(e,t,r){var o=r("ZwG4");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);r("rjj0")("b825a2bc",o,!0)}});