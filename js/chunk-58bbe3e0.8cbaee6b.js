(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-58bbe3e0"],{6005:function(s,e,t){"use strict";t.r(e);var a=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"content"},[t("h1",[s._v(s._s(s.messages.SR_001_NOTIFICATION))]),t("p",[s._v(s._s(s.messages.SR_001_NOTIFICATION_DESCR))]),t("div",{staticClass:"my-3"},[s._m(0),t("h2",[s._v(s._s(s.messages.SR_001_NOTIFICATION_GENERAL))]),t("div",{staticClass:"subsection-container"},[t("ul",{staticClass:"application-options"},[t("li",{staticClass:"option-item"},[t("div",{staticClass:"option-item-info"},[t("label",{staticStyle:{"margin-bottom":"0px"}},[s._v(s._s(s.messages.SR_001_NOTIFICATION_MEETING_REMIND))])]),t("div",{staticClass:"option-checkboxes"},[t("label",[t("input",{directives:[{name:"model",rawName:"v-model",value:s.meetingRemind,expression:"meetingRemind"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(s.meetingRemind)?s._i(s.meetingRemind,null)>-1:s.meetingRemind},on:{change:function(e){var t=s.meetingRemind,a=e.target,i=!!a.checked;if(Array.isArray(t)){var n=null,c=s._i(t,n);a.checked?c<0&&(s.meetingRemind=t.concat([n])):c>-1&&(s.meetingRemind=t.slice(0,c).concat(t.slice(c+1)))}else s.meetingRemind=i}}})])])])])]),s._m(1),t("h2",[s._v(s._s(s.messages.SR_001_NOTIFICATION_CANDIDATE))]),t("div",{staticClass:"subsection-container"},[t("ul",{staticClass:"application-options"},[t("li",{staticClass:"option-item"},[t("div",{staticClass:"option-item-info"},[t("label",{staticStyle:{"margin-bottom":"0px"}},[s._v(s._s(s.messages.SR_001_NOTIFICATION_CANDIDATE_ASSIGN))])]),t("div",{staticClass:"option-checkboxes"},[t("label",[t("input",{directives:[{name:"model",rawName:"v-model",value:s.candidateAssign,expression:"candidateAssign"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(s.candidateAssign)?s._i(s.candidateAssign,null)>-1:s.candidateAssign},on:{change:function(e){var t=s.candidateAssign,a=e.target,i=!!a.checked;if(Array.isArray(t)){var n=null,c=s._i(t,n);a.checked?c<0&&(s.candidateAssign=t.concat([n])):c>-1&&(s.candidateAssign=t.slice(0,c).concat(t.slice(c+1)))}else s.candidateAssign=i}}})])])])])]),s._m(2),t("h2",[s._v(s._s(s.messages.SR_001_NOTIFICATION_TASKS))]),t("div",{staticClass:"subsection-container"},[t("ul",{staticClass:"application-options"},[t("li",{staticClass:"option-item"},[t("div",{staticClass:"option-item-info"},[t("label",{staticStyle:{"margin-bottom":"0px"}},[s._v(s._s(s.messages.SR_001_NOTIFICATION_TASK_ASSIGN_TO_YOU))])]),t("div",{staticClass:"option-checkboxes"},[t("label",[t("input",{directives:[{name:"model",rawName:"v-model",value:s.taskAssign,expression:"taskAssign"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(s.taskAssign)?s._i(s.taskAssign,null)>-1:s.taskAssign},on:{change:function(e){var t=s.taskAssign,a=e.target,i=!!a.checked;if(Array.isArray(t)){var n=null,c=s._i(t,n);a.checked?c<0&&(s.taskAssign=t.concat([n])):c>-1&&(s.taskAssign=t.slice(0,c).concat(t.slice(c+1)))}else s.taskAssign=i}}})])])]),t("li",{staticClass:"option-item"},[t("div",{staticClass:"option-item-info"},[t("label",{staticStyle:{"margin-bottom":"0px"}},[s._v(s._s(s.messages.SR_001_NOTIFICATION_TASK_DUAL_DAILY)+" ")])]),t("div",{staticClass:"option-checkboxes"},[t("label",[t("input",{directives:[{name:"model",rawName:"v-model",value:s.taskDuel,expression:"taskDuel"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(s.taskDuel)?s._i(s.taskDuel,null)>-1:s.taskDuel},on:{change:function(e){var t=s.taskDuel,a=e.target,i=!!a.checked;if(Array.isArray(t)){var n=null,c=s._i(t,n);a.checked?c<0&&(s.taskDuel=t.concat([n])):c>-1&&(s.taskDuel=t.slice(0,c).concat(t.slice(c+1)))}else s.taskDuel=i}}})])])])])])]),t("div",{staticClass:"my-2 clearfix"},[t("div",{staticClass:"float-right"},[t("button",{staticClass:"my-3 btn btn-blue default",on:{click:s.SaveUser}},[s.saveflag?s._e():t("i",{staticClass:"default fa fa-save"},[s._v("  ")]),s.saveflag?s._e():t("span",{staticClass:"default"},[s._v(s._s(s.messages.COMMON_SAVE))]),s.saveflag?t("i",{staticClass:"success fa fa-check"},[s._v("  ")]):s._e(),s.saveflag?t("span",{staticClass:"success"},[s._v(s._s(s.messages.COMMON_SAVED))]):s._e()])])])])},i=[function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"notification-headers"},[t("small",[t("strong",[s._v("Email")])])])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"notification-headers"},[t("small",[t("strong",[s._v("Email")])])])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"notification-headers"},[t("small",[t("strong",[s._v("Email")])])])}],n=t("cebc"),c=t("2b0e"),r=t("2f62"),l=c["default"].extend({name:"UserNotify",data:function(){return{meetingRemind:!0,candidateAssign:!0,taskAssign:!0,taskDuel:!0,saveflag:!1}},computed:Object(n["a"])({},Object(r["c"])(["currentUser","currentCompany"])),watch:{currentUser:function(s){var e=this;e.meetingRemind=s.currentUser.meetingRemind,e.candidateAssign=s.currentUser.candidateAssign,e.taskAssign=s.currentUser.taskAssign,e.taskDuel=s.currentUser.taskDuel}},mounted:function(){var s=this;s.currentUser&&(s.meetingRemind=s.currentUser.meetingRemind,s.candidateAssign=s.currentUser.candidateAssign,s.taskAssign=s.currentUser.taskAssign,s.taskDuel=s.currentUser.taskDuel)},methods:{SaveUser:function(){var s=this;s.currentUser&&(s.currentUser.meetingRemind=s.meetingRemind,s.currentUser.candidateAssign=s.candidateAssign,s.currentUser.taskAssign=s.taskAssign,s.currentUser.taskDuel=s.taskDuel,s.currentUser.update(),s.saveflag=!0,setTimeout(function(){s.saveflag=!1},2e3))}}}),o=l,d=(t("9519"),t("2877")),m=Object(d["a"])(o,a,i,!1,null,"157a8a5c",null);e["default"]=m.exports},"8cba":function(s,e,t){},9519:function(s,e,t){"use strict";var a=t("8cba"),i=t.n(a);i.a}}]);