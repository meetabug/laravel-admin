webpackJsonp([4],{"9RLD":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={mounted:function(){this.getList(),this.getRulesTree()},data:function(){return{tableData:[],form:{},addNewDialog:!1,saveForm:{title:"",rules:[],status:!0},menusTree:[],rulesTree:[],auth:{},rulesForm:{title:[{required:!0,message:"请输入管理组名称",trigger:"blur"}],menus:[{required:!0,message:"请选择菜单",trigger:"blur"}],rules:[{required:!0,message:"请选择权限",trigger:"blur"}]}}},methods:{onSearch:function(){this.getList()},onSubmit:function(){var e=this;this.getCheckedKeys(),this.$refs.saveForm.validate(function(t){if(!t)return console.log("error submit!!"),!1;e.$http.post("/api/system/group/save",e.saveForm).then(function(t){0===t.error?(e.$message({message:"保存成功",type:"success"}),e.addNewDialog=!1,e.getList()):e.$message({message:t.msg,type:"error"})})})},getList:function(){var e=this;this.$http.get("/api/system/group/list",this.form).then(function(t){e.tableData=t.data.list,e.auth=t.data.auth})},getRulesTree:function(){var e=this;this.$http.get("/api/system/rule/list",{status:1}).then(function(t){e.rulesTree=t.data.list})},handleAdd:function(){this.addNewDialog=!0,void 0!==this.$refs.saveForm&&this.$refs.saveForm.resetFields(),this.saveForm={title:"",rules:[],menus:[],status:!0},void 0!==this.$refs.tree&&this.$refs.tree.setCheckedKeys([])},editGroup:function(e){this.addNewDialog=!0,void 0!==this.$refs.saveForm&&this.$refs.saveForm.resetFields(),this.saveForm={id:e.id,title:e.title,rules:e.rules,status:1===e.status},void 0!==this.$refs.tree&&this.$refs.tree.setCheckedKeys(this.saveForm.rules)},getCheckedKeys:function(){this.saveForm.rules=this.$refs.tree.getCheckedKeys()}}}},"9cLn":function(e,t,s){var r=s("VU/8")(s("9RLD"),s("TJQo"),!1,null,null,null);e.exports=r.exports},TJQo:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("el-alert",{attrs:{title:"注意：上帝组拥有至高无上的权限.",type:"info"}}),e._v(" "),s("br"),e._v(" "),s("el-form",{attrs:{inline:!0,model:e.form,size:"small"}},[s("el-form-item",{attrs:{label:"ID"}},[s("el-input",{attrs:{placeholder:"ID"},model:{value:e.form.id,callback:function(t){e.$set(e.form,"id",t)},expression:"form.id"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"组名"}},[s("el-input",{attrs:{placeholder:"请输入权限组名"},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),e._v(" "),s("el-form-item",[s("el-button",{attrs:{type:"primary"},on:{click:e.onSearch}},[e._v("查询")])],1)],1),e._v(" "),s("el-row",[e.auth.canAdd?s("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.handleAdd}},[e._v("新增")]):e._e()],1),e._v(" "),s("el-table",{staticStyle:{"max-width":"900px"},attrs:{data:e.tableData}},[s("el-table-column",{attrs:{prop:"id",label:"ID",width:"100"}}),e._v(" "),s("el-table-column",{attrs:{prop:"title",label:"权限组名"}}),e._v(" "),s("el-table-column",{attrs:{label:"组状态",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.status?s("el-tag",{attrs:{type:"success",size:"small"}},[e._v("已启用")]):e._e(),e._v(" "),0==t.row.status?s("el-tag",{attrs:{type:"info",size:"small"}},[e._v("已禁用")]):e._e()]}}])}),e._v(" "),s("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[1!=t.row.id&&e.auth.canEdit?s("el-button",{attrs:{type:"text",size:"small"},on:{click:function(s){e.editGroup(t.row)}}},[e._v("编辑")]):e._e()]}}])})],1),e._v(" "),s("el-dialog",{attrs:{title:"新增/修改权限组",visible:e.addNewDialog,width:"35%"},on:{"update:visible":function(t){e.addNewDialog=t}}},[s("el-form",{ref:"saveForm",attrs:{model:e.saveForm,"label-width":"100px",size:"small",rules:e.rulesForm}},[s("el-form-item",{attrs:{label:"管理组名称",prop:"title"}},[s("el-input",{staticStyle:{width:"50%"},model:{value:e.saveForm.title,callback:function(t){e.$set(e.saveForm,"title",t)},expression:"saveForm.title"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"选择权限",prop:"rules"}},[s("el-tree",{ref:"tree",attrs:{data:e.rulesTree,"show-checkbox":"","node-key":"id","highlight-current":"","default-checked-keys":e.saveForm.rules,"check-strictly":!0}})],1),e._v(" "),s("el-form-item",{attrs:{label:"状态",prop:"status",required:""}},[s("el-switch",{attrs:{"active-text":"开启","inactive-text":"关闭"},model:{value:e.saveForm.status,callback:function(t){e.$set(e.saveForm,"status",t)},expression:"saveForm.status"}})],1),e._v(" "),s("el-form-item",[s("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("保存")]),e._v(" "),s("el-button",{on:{click:function(t){e.addNewDialog=!1}}},[e._v("取消")])],1)],1)],1)],1)},staticRenderFns:[]}}});