(function(e){function t(t){for(var r,u,i=t[0],l=t[1],c=t[2],f=0,p=[];f<i.length;f++)u=i[f],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);s&&s(t);while(p.length)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var l=n[i];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var s=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},2095:function(e,t,n){},"2abd":function(e,t,n){"use strict";n("2095")},"56d7":function(e,t,n){"use strict";n.r(t);n("e623"),n("e379"),n("5dc8"),n("37e1");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("router-view")],1)},a=[],u=(n("034f"),n("2877")),i={},l=Object(u["a"])(i,o,a,!1,null,null,null),c=l.exports,s=n("8c4f"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[e.filebox?n("input",{attrs:{type:"file",accept:"image/jpeg, image/png"},on:{change:e.onImageChange}}):e._e(),n("button",{on:{click:function(t){return e.uploadImage()}}},[e._v("アップロード")])]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.uploadedImage,expression:"uploadedImage"}]},[n("div",[n("img",{staticClass:"imgstyle",attrs:{src:e.uploadedImage,alt:"画像がありません"}})]),n("button",{on:{click:function(t){return e.removeImage()}}},[e._v("戻る")])])])},p=[],d=n("bc3a"),g=n.n(d),m={data:function(){return{uploadedImage:"",filebox:!0}},methods:{onImageChange:function(e){console.log(e);var t=e.target.files||e.dataTransfer.files;this.createImage(t[0])},createImage:function(e){var t=this,n=new FileReader;n.onload=function(e){t.uploadedImage=e.target.result},n.readAsDataURL(e)},removeImage:function(){var e=this;this.uploadedImage=!1,this.filebox=!1,this.$nextTick((function(){e.filebox=!0}))},uploadImage:function(){var e=this,t=new FormData;t.append("image",this.uploadedImage),this.uploadedImage?(alert("画像のアップロードが完了しました。"),g.a.post("/grayscale",t).then((function(t){console.log(t),e.uploadedImage=t.data.result}))):alert("画像を選択してください。")}}},v=m,h=(n("2abd"),Object(u["a"])(v,f,p,!1,null,"95171076",null)),b=h.exports;r["a"].use(s["a"]);var y=[{path:"/",name:"Home",component:b}],w=new s["a"]({mode:"history",base:"",routes:y}),I=w;r["a"].config.productionTip=!1,new r["a"]({router:I,render:function(e){return e(c)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.e53e8bf9.js.map