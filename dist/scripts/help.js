!function(t){function e(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var r={};e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="dist/scripts/",e(e.s=0)}([function(t,e,r){"use strict";new Vue({el:"#news",delimiters:["[[","]]"],data:{msg:"",menu:"",arrLi:[{class:"first",title:"活动导览",id:5},{class:"two",title:"交通指引",id:6},{class:"three",title:"参会申请",id:7},{class:"four",title:"参会帮助",id:8}],arrIndex:0},created:function(){var t=this.arrLi[0].id,e=this;$.post("/api/v1/index/getMenu",function(t){e.menu=t}),$.post("/api/v1/server/getArticle",{category_id:t},function(t){e.msg=t})},methods:{chooseTitle:function(t,e){this.arrIndex=t,this.postFnc(e)},postFnc:function(t){var e=this;$.post("/api/v1/server/getArticle",{category_id:t},function(t){e.msg="",e.msg=t})}}})}]);