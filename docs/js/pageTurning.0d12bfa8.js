(window.webpackJsonp=window.webpackJsonp||[]).push([["pageTurning"],{"0391":function(t,e,a){t.exports=a.p+"img/3.7463b122.jpeg"},1684:function(t,e,a){a.r(e),a("14d9");var i={name:"CustomButton",props:{type:{type:String,default:"default"},size:{type:String,default:"medium"},disabled:{type:Boolean,default:!1}},computed:{btnClasses(){return["custom-button","custom-button--"+this.type,"custom-button--"+this.size,{"custom-button--disabled":this.disabled}]}},methods:{handleClick(){this.disabled||this.$emit("click")}}},s=(a("d085"),a("2877")),r=(i=Object(s.a)(i,(function(){var t=this;return(0,t._self._c)("button",{class:t.btnClasses,on:{click:t.handleClick}},[t._t("default")],2)}),[],!1,null,"9977c82a",null).exports,{name:"LoaderComponent",props:{msg:{type:String,default:"加载中..."}},data:()=>({}),watch:{},computed:{},methods:{}}),n=(r=(a("bc28"),Object(s.a)(r,(function(){var t=this,e=t._self._c;return e("div",[t._m(0),e("div",{staticClass:"tips"},[e("span",[t._v(t._s(t.msg))])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"loadEffect"},[t("span"),t("span"),t("span"),t("span"),t("span"),t("span"),t("span"),t("span")])}],!1,null,null,null).exports),a("1157")),o=a.n(n);a("2618"),n={name:"TurnjsComponent",components:{CustomButton:i,LoaderComponent:r},props:{},data:()=>({turnPage:{width:0,height:0,imageList:[],currentPage:1,totalPage:1,loading:!1,show:!0}}),watch:{},computed:{},methods:{onTurn(){let t=this;this.$nextTick(()=>{o()("#book").turn({acceleration:!1,display:"double",duration:800,page:1,gradients:!0,autoCenter:!0,turnCorners:"bl,br",height:this.turnPage.height,width:this.turnPage.width,when:{turning:function(t,e,a){},turned:function(e,a){var i=t.turnPage.imageList.length;t.turnPage.currentPage=a<i?a:i}}})})},onTurnPre(){o()("#book").turn("previous")},onTurnNext(){o()("#book").turn("next")},async reset(){this.turnPage.show=!1,this.turnPage.loading=!0,await new Promise(t=>{setTimeout(()=>{t()},500)}),this.turnPage.imageList=[];for(let e=0;e<5;e++){var t=a("d1f7")("./"+e+".jpeg");this.turnPage.imageList.push(t)}this.turnPage.totalPage=this.turnPage.imageList.length,this.turnPage.show=!0,this.turnPage.loading=!1,setTimeout(()=>{this.$nextTick(()=>{var t=this.$refs.container.offsetWidth,e=this.$refs.container.offsetHeight;this.turnPage={...this.turnPage,width:t,height:e},this.turnPage.totalPage=this.turnPage.imageList.length,this.onTurn()})},500)}},created(){for(let e=0;e<14;e++){var t=a("d1f7")("./"+e+".jpeg");this.turnPage.imageList.push(t)}},mounted(){var t=this.$refs.container.offsetWidth,e=this.$refs.container.offsetHeight;this.turnPage={...this.turnPage,width:t,height:e},this.turnPage.totalPage=this.turnPage.imageList.length,this.onTurn(),o()(window).bind("keydown",(function(t){t.target&&"input"!==t.target.tagName.toLowerCase()&&(37===t.keyCode?o()("#book").turn("previous"):39===t.keyCode&&o()("#book").turn("next"))}))}},a("baad"),i=Object(s.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"wrap"},[e("div",{staticClass:"btns"},[e("custom-button",{attrs:{type:"primary"},on:{click:t.reset}},[t._v("初始化")]),e("custom-button",{attrs:{type:"success",disabled:1==t.turnPage.currentPage},on:{click:t.onTurnPre}},[t._v(" 上一页 ")]),e("custom-button",{attrs:{type:"success",disabled:t.turnPage.currentPage==t.turnPage.imageList.length},on:{click:t.onTurnNext}},[t._v(" 下一页 ")]),e("div",[t._v("更多官网demo可参考：utils/turnjs4/samples")])],1),e("div",{ref:"container",staticClass:"container"},[e("div",{staticClass:"view",style:{height:t.turnPage.height+"px"}},[e("div",{staticClass:"hard",staticStyle:{background:"#fff"},style:{width:t.turnPage.width/2+"px",height:t.turnPage.height+"px"}}),t.turnPage.show?e("div",{staticClass:"book",attrs:{id:"book"}},[t._l(t.turnPage.imageList,(function(t,a){return e("div",{key:a,staticClass:"page",class:{odd:a%2==0,even:a%2==1}},[e("div",{staticClass:"img"},[e("img",{attrs:{src:t}})])])})),t.turnPage.imageList.length%2==0?e("div",{staticStyle:{background:"#fff",width:"500px",height:"700px"}}):t._e()],2):t._e()]),t.turnPage.loading?e("div",{staticClass:"page-load",style:{width:t.turnPage.width/2+"px",height:t.turnPage.height+"px"}},[e("loader-component")],1):t._e(),e("div")])])}),[],!1,null,"7c99205d",null);e.default=i.exports},2618:function(t,e,a){(function(t){function e(t,e,a){if(a[0]&&"object"!=typeof a[0]){if(e[a[0]])return e[a[0]].apply(t,Array.prototype.slice.call(a,1));throw l(a[0]+" is not a method or property")}return e.init.apply(t,a)}function i(t,e,a,i){return{css:{position:"absolute",top:t,left:e,overflow:i||"hidden",zIndex:a||"auto"}}}function s(t,e,a,i,s){var n=1-s,o=n*n*n,h=s*s*s;return r(Math.round(o*t.x+3*s*n*n*e.x+3*s*s*n*a.x+h*i.x),Math.round(o*t.y+3*s*n*n*e.y+3*s*s*n*a.y+h*i.y))}function r(t,e){return{x:t,y:e}}function n(t,e,a){return f&&a?" translate3d("+t+"px,"+e+"px, 0px) ":" translate("+t+"px, "+e+"px) "}function o(t){return" rotate("+t+"deg) "}function h(t,e){return Object.prototype.hasOwnProperty.call(e,t)}function p(){for(var t=["Moz","Webkit","Khtml","O","ms"],e=t.length,a="";e--;)t[e]+"Transform"in document.body.style&&(a="-"+t[e].toLowerCase()+"-");return a}function d(t,e,a,i,s){var n=[];if("-webkit-"==w){for(u=0;u<s;u++)n.push("color-stop("+i[u][0]+", "+i[u][1]+")");t.css({"background-image":"-webkit-gradient(linear, "+e.x+"% "+e.y+"%,"+a.x+"% "+a.y+"%, "+n.join(",")+" )"})}else{e={x:e.x/100*t.width(),y:e.y/100*t.height()};for(var o=(a={x:a.x/100*t.width(),y:a.y/100*t.height()}).x-e.x,h=a.y-e.y,p=Math.atan2(h,o),d=p-Math.PI/2,g=Math.abs(t.width()*Math.sin(d))+Math.abs(t.height()*Math.cos(d)),l=Math.sqrt(h*h+o*o),c=(d=r(a.x<e.x?t.width():0,a.y<e.y?t.height():0),h=a=((o=-1/(h=Math.tan(p)))*d.x-d.y-h*e.x+e.y)/(o-h),a=o*a-o*d.x+d.y,Math.sqrt(Math.pow(h-e.x,2)+Math.pow(a-e.y,2))),u=0;u<s;u++)n.push(" "+i[u][1]+" "+100*(c+l*i[u][0])/g+"%");t.css({"background-image":w+"linear-gradient("+-p+"rad,"+n.join(",")+")"})}}function g(t,e,a){return t=u.Event(t),e.trigger(t,a),t.isDefaultPrevented()?"prevented":t.isPropagationStopped()?"stopped":""}function l(t){function e(t){this.name="TurnJsError",this.message=t}return new((e.prototype=new Error).constructor=e)(t)}function c(t){for(var e={top:0,left:0};e.left+=t.offsetLeft,e.top+=t.offsetTop,t=t.offsetParent;);return e}var u,f,v,w,m,b,x,y,P,_,M,j,z,k,O;a("d9e2"),a("14d9"),u=t,w="",m=Math.PI,b=m/2,x="ontouchstart"in window,y=x?{down:"touchstart",move:"touchmove",up:"touchend",over:"touchstart",out:"touchend"}:{down:"mousedown",move:"mousemove",up:"mouseup",over:"mouseover",out:"mouseout"},P={backward:["bl","tl"],forward:["br","tr"],all:["tl","bl","tr","br","l","r"]},_=["single","double"],M=["ltr","rtl"],j={acceleration:!0,display:"double",duration:600,page:1,gradients:!0,turnCorners:"bl,br",when:null},z={cornerSize:100},k={init:function(t){f="WebKitCSSMatrix"in window||"MozPerspective"in document.body.style,v=!(i=/AppleWebkit\/([0-9\.]+)/i.exec(navigator.userAgent))||534.3<parseFloat(i[1]),w=p();var e,a=0,i=this.data(),s=this.children();if(t=u.extend({width:this.width(),height:this.height(),direction:this.attr("dir")||this.css("direction")||"ltr"},j,t),i.opts=t,i.pageObjs={},i.pages={},i.pageWrap={},i.pageZoom={},i.pagePlace={},i.pageMv=[],i.zoom=1,i.totalPages=t.pages||0,i.eventHandlers={touchStart:u.proxy(k._touchStart,this),touchMove:u.proxy(k._touchMove,this),touchEnd:u.proxy(k._touchEnd,this),start:u.proxy(k._eventStart,this)},t.when)for(e in t.when)h(e,t.when)&&this.bind(e,t.when[e]);for(this.css({position:"relative",width:t.width,height:t.height}),this.turn("display",t.display),""!==t.direction&&this.turn("direction",t.direction),f&&!x&&t.acceleration&&this.transform(n(0,0,!0)),e=0;e<s.length;e++)"1"!=u(s[e]).attr("ignore")&&this.turn("addPage",s[e],++a);return u(this).bind(y.down,i.eventHandlers.touchStart).bind("end",k._eventEnd).bind("pressed",k._eventPressed).bind("released",k._eventReleased).bind("flip",k._flip),u(this).parent().bind("start",i.eventHandlers.start),u(document).bind(y.move,i.eventHandlers.touchMove).bind(y.up,i.eventHandlers.touchEnd),this.turn("page",t.page),i.done=!0,this},addPage:function(t,e){var a,i=!1,s=this.data(),r=s.totalPages+1;if(s.destroying)return!1;if(e=(a=/\bp([0-9]+)\b/.exec(u(t).attr("class")))?parseInt(a[1],10):e){if(e==r)i=!0;else if(r<e)throw l('Page "'+e+'" cannot be inserted')}else e=r,i=!0;return 1<=e&&e<=r&&(a="double"==s.display?e%2?" odd":" even":"",s.done&&this.turn("stop"),e in s.pageObjs&&k._movePages.call(this,e,1),i&&(s.totalPages=r),s.pageObjs[e]=u(t).css({float:"left"}).addClass("page p"+e+a),-1!=navigator.userAgent.indexOf("MSIE 9.0")&&s.pageObjs[e].hasClass("hard")&&s.pageObjs[e].removeClass("hard"),k._addPage.call(this,e),k._removeFromDOM.call(this)),this},_addPage:function(t){var e,a=this.data(),i=a.pageObjs[t];i&&(k._necessPage.call(this,t)?(a.pageWrap[t]||(a.pageWrap[t]=u("<div/>",{class:"page-wrapper",page:t,css:{position:"absolute",overflow:"hidden"}}),this.append(a.pageWrap[t]),a.pagePlace[t]||(a.pagePlace[t]=t,a.pageObjs[t].appendTo(a.pageWrap[t])),e=k._pageSize.call(this,t,!0),i.css({width:e.width,height:e.height}),a.pageWrap[t].css(e)),a.pagePlace[t]==t&&k._makeFlip.call(this,t)):(a.pagePlace[t]=0,a.pageObjs[t]&&a.pageObjs[t].remove()))},hasPage:function(t){return h(t,this.data().pageObjs)},center:function(t){var e=this.data(),a=u(this).turn("size"),i=0;return e.noCenter||("double"==e.display&&(t=this.turn("view",t||e.tpage||e.page),"ltr"==e.direction?t[0]?t[1]||(i+=a.width/4):i-=a.width/4:t[0]?t[1]||(i-=a.width/4):i+=a.width/4),u(this).css({marginLeft:i})),this},destroy:function(){var t=this,e=this.data();if("prevented"!=g("destroying",this)){for(e.destroying=!0,u.each(["end","first","flip","last","pressed","released","start","turning","turned","zooming","missing"],(function(e,a){t.unbind(a)})),this.parent().unbind("start",e.eventHandlers.start),u(document).unbind(y.move,e.eventHandlers.touchMove).unbind(y.up,e.eventHandlers.touchEnd);0!==e.totalPages;)this.turn("removePage",e.totalPages);return e.fparent&&e.fparent.remove(),e.shadow&&e.shadow.remove(),this.removeData(),e=null,this}},is:function(){return"object"==typeof this.data().pages},zoom:function(t){var e=this.data();if("number"!=typeof t)return e.zoom;if(t<.001||100<t)throw l(t+" is not a value for zoom");if("prevented"!=g("zooming",this,[t,e.zoom])){var a=this.turn("size"),i=this.turn("view"),s=1/e.zoom,r=Math.round(a.width*s*t);a=Math.round(a.height*s*t);e.zoom=t,u(this).turn("stop").turn("size",r,a),e.opts.autoCenter&&this.turn("center"),k._updateShadow.call(this);for(var n=0;n<i.length;n++)i[n]&&e.pageZoom[i[n]]!=e.zoom&&(this.trigger("zoomed",[i[n],i,e.pageZoom[i[n]],e.zoom]),e.pageZoom[i[n]]=e.zoom)}return this},_pageSize:function(t,e){var a,i,s=this.data(),r={};return"single"==s.display?(r.width=this.width(),r.height=this.height(),e&&(r.top=0,r.left=0,r.right="auto")):(a=this.width()/2,i=this.height(),s.pageObjs[t].hasClass("own-size")?(r.width=s.pageObjs[t].width(),r.height=s.pageObjs[t].height()):(r.width=a,r.height=i),e&&(e=t%2,r.top=(i-r.height)/2,"ltr"==s.direction?(r[e?"right":"left"]=a-r.width,r[e?"left":"right"]="auto"):(r[e?"left":"right"]=a-r.width,r[e?"right":"left"]="auto"))),r},_makeFlip:function(t){var e,a,i=this.data();return i.pages[t]||i.pagePlace[t]!=t||(e="single"==i.display,a=t%2,i.pages[t]=i.pageObjs[t].css(k._pageSize.call(this,t)).flip({page:t,next:a||e?t+1:t-1,turn:this}).flip("disable",i.disabled),k._setPageLoc.call(this,t),i.pageZoom[t]=i.zoom),i.pages[t]},_makeRange:function(){var t,e;if(!(this.data().totalPages<1))for(t=(e=this.turn("range"))[0];t<=e[1];t++)k._addPage.call(this,t)},range:function(t){var e,a,i,s=this.data();if(t=t||s.tpage||s.page||1,i=k._view.call(this,t),t<1||t>s.totalPages)throw l('"'+t+'" is not a valid page');return i[1]=i[1]||i[0],1<=i[0]&&i[1]<=s.totalPages?(t=Math.floor(2),s.totalPages-i[1]>i[0]?a=2*t-(e=Math.min(i[0]-1,t)):e=2*t-(a=Math.min(s.totalPages-i[1],t))):a=e=5,[Math.max(1,i[0]-e),Math.min(s.totalPages,i[1]+a)]},_necessPage:function(t){var e;return 0===t||(e=this.turn("range"),this.data().pageObjs[t].hasClass("fixed"))||t>=e[0]&&t<=e[1]},_removeFromDOM:function(){var t,e=this.data();for(t in e.pageWrap)h(t,e.pageWrap)&&!k._necessPage.call(this,t)&&k._removePageFromDOM.call(this,t)},_removePageFromDOM:function(t){var e,a=this.data();a.pages[t]&&(e=a.pages[t].data(),O._moveFoldingPage.call(a.pages[t],!1),e.f&&e.f.fwrapper&&e.f.fwrapper.remove(),a.pages[t].removeData(),a.pages[t].remove(),delete a.pages[t]),a.pageObjs[t]&&a.pageObjs[t].remove(),a.pageWrap[t]&&(a.pageWrap[t].remove(),delete a.pageWrap[t]),k._removeMv.call(this,t),delete a.pagePlace[t],delete a.pageZoom[t]},removePage:function(t){var e=this.data();if("*"==t)for(;0!==e.totalPages;)this.turn("removePage",e.totalPages);else{if(t<1||t>e.totalPages)throw l("The page "+t+" doesn't exist");e.pageObjs[t]&&(this.turn("stop"),k._removePageFromDOM.call(this,t),delete e.pageObjs[t]),k._movePages.call(this,t,-1),e.totalPages=e.totalPages-1,e.page>e.totalPages?(e.page=null,k._fitPage.call(this,e.totalPages)):(k._makeRange.call(this),this.turn("update"))}return this},_movePages:function(t,e){function a(t){var a=t+e,i=a%2,o=i?" odd ":" even ";r.pageObjs[t]&&(r.pageObjs[a]=r.pageObjs[t].removeClass("p"+t+" odd even").addClass("p"+a+o)),r.pagePlace[t]&&r.pageWrap[t]&&(r.pagePlace[a]=a,r.pageObjs[a].hasClass("fixed")?r.pageWrap[a]=r.pageWrap[t].attr("page",a):r.pageWrap[a]=r.pageWrap[t].css(k._pageSize.call(s,a,!0)).attr("page",a),r.pages[t]&&(r.pages[a]=r.pages[t].flip("options",{page:a,next:n||i?a+1:a-1})),e)&&(delete r.pages[t],delete r.pagePlace[t],delete r.pageZoom[t],delete r.pageObjs[t],delete r.pageWrap[t])}var i,s=this,r=this.data(),n="single"==r.display;if(0<e)for(i=r.totalPages;t<=i;i--)a(i);else for(i=t;i<=r.totalPages;i++)a(i)},display:function(t){var e=this.data(),a=e.display;if(void 0===t)return a;if(-1==u.inArray(t,_))throw l('"'+t+'" is not a value for display');switch(t){case"single":e.pageObjs[0]||(this.turn("stop").css({overflow:"hidden"}),e.pageObjs[0]=u("<div />",{class:"page p-temporal"}).css({width:this.width(),height:this.height()}).appendTo(this)),this.addClass("shadow");break;case"double":e.pageObjs[0]&&(this.turn("stop").css({overflow:""}),e.pageObjs[0].remove(),delete e.pageObjs[0]),this.removeClass("shadow")}return e.display=t,a&&(t=this.turn("size"),k._movePages.call(this,1,0),this.turn("size",t.width,t.height).turn("update")),this},direction:function(t){var e=this.data();if(void 0===t)return e.direction;if(t=t.toLowerCase(),-1==u.inArray(t,M))throw l('"'+t+'" is not a value for direction');return"rtl"==t&&u(this).attr("dir","ltr").css({direction:"ltr"}),e.direction=t,e.done&&this.turn("size",u(this).width(),u(this).height()),this},animating:function(){return 0<this.data().pageMv.length},corner:function(){var t,e,a=this.data();for(e in a.pages)if(h(e,a.pages)&&(t=a.pages[e].flip("corner")))return t;return!1},data:function(){return this.data()},disable:function(t){var e,a=this.data(),i=this.turn("view");for(e in a.disabled=void 0===t||!0===t,a.pages)h(e,a.pages)&&a.pages[e].flip("disable",!!a.disabled||-1==u.inArray(parseInt(e,10),i));return this},disabled:function(t){return void 0===t?!0===this.data().disabled:this.turn("disable",t)},size:function(t,e){if(void 0===t||void 0===e)return{width:this.width(),height:this.height()};this.turn("stop");var a,i,s=this.data(),r="double"==s.display?t/2:t;for(a in this.css({width:t,height:e}),s.pageObjs[0]&&s.pageObjs[0].css({width:r,height:e}),s.pageWrap)h(a,s.pageWrap)&&(i=k._pageSize.call(this,a,!0),s.pageObjs[a].css({width:i.width,height:i.height}),s.pageWrap[a].css(i),s.pages[a])&&s.pages[a].css({width:i.width,height:i.height});return this.turn("resize"),this},resize:function(){var t,e=this.data();for(e.pages[0]&&(e.pageWrap[0].css({left:-this.width()}),e.pages[0].flip("resize",!0)),t=1;t<=e.totalPages;t++)e.pages[t]&&e.pages[t].flip("resize",!0);k._updateShadow.call(this),e.opts.autoCenter&&this.turn("center")},_removeMv:function(t){for(var e=this.data(),a=0;a<e.pageMv.length;a++)if(e.pageMv[a]==t)return e.pageMv.splice(a,1),!0;return!1},_addMv:function(t){var e=this.data();k._removeMv.call(this,t),e.pageMv.push(t)},_view:function(t){var e=this.data();return t=t||e.page,"double"==e.display?t%2?[t-1,t]:[t,t+1]:[t]},view:function(t){var e=this.data();t=k._view.call(this,t);return"double"==e.display?[0<t[0]?t[0]:0,t[1]<=e.totalPages?t[1]:0]:[0<t[0]&&t[0]<=e.totalPages?t[0]:0]},stop:function(t,e){if(this.turn("animating")){var a,i,s,r=this.data();for(r.tpage&&(r.page=r.tpage,delete r.tpage),a=0;a<r.pageMv.length;a++)r.pageMv[a]&&r.pageMv[a]!==t&&(i=(s=r.pages[r.pageMv[a]]).data().f.opts,s.flip("hideFoldedPage",e),e||O._moveFoldingPage.call(s,!1),i.force)&&(i.next=i.page%2==0?i.page-1:i.page+1,delete i.force)}return this.turn("update"),this},pages:function(t){var e=this.data();if(t){if(t<e.totalPages)for(var a=e.totalPages;t<a;a--)this.turn("removePage",a);return e.totalPages=t,k._fitPage.call(this,e.page),this}return e.totalPages},_missing:function(t){var e=this.data();if(!(e.totalPages<1)){for(var a=this.turn("range",t),i=[],s=a[0];s<=a[1];s++)e.pageObjs[s]||i.push(s);0<i.length&&this.trigger("missing",[i])}},_fitPage:function(t){var e=this.data(),a=this.turn("view",t);if(k._missing.call(this,t),e.pageObjs[t]){e.page=t,this.turn("stop");for(var i=0;i<a.length;i++)a[i]&&e.pageZoom[a[i]]!=e.zoom&&(this.trigger("zoomed",[a[i],a,e.pageZoom[a[i]],e.zoom]),e.pageZoom[a[i]]=e.zoom);k._removeFromDOM.call(this),k._makeRange.call(this),k._updateShadow.call(this),this.trigger("turned",[t,a]),this.turn("update"),e.opts.autoCenter&&this.turn("center")}},_turnPage:function(t){var e,a,i=this.data(),s=i.pagePlace[t],r=this.turn("view"),n=this.turn("view",t);if(i.page!=t){var o=i.page;if("prevented"==g("turning",this,[t,n]))return void(o==i.page&&-1!=u.inArray(s,i.pageMv)&&i.pages[s].flip("hideFoldedPage",!0));-1!=u.inArray(1,n)&&this.trigger("first"),-1!=u.inArray(i.totalPages,n)&&this.trigger("last")}"single"==i.display?(e=r[0],a=n[0]):r[1]&&t>r[1]?(e=r[1],a=n[0]):r[0]&&t<r[0]&&(e=r[0],a=n[1]),o=i.opts.turnCorners.split(","),r=(s=i.pages[e].data().f).opts,n=s.point,k._missing.call(this,t),i.pageObjs[t]&&(this.turn("stop"),i.page=t,k._makeRange.call(this),i.tpage=a,r.next!=a&&(r.next=a,r.force=!0),this.turn("update"),s.point=n,"hard"==s.effect?"ltr"==i.direction?i.pages[e].flip("turnPage",e<t?"r":"l"):i.pages[e].flip("turnPage",e<t?"l":"r"):"ltr"==i.direction?i.pages[e].flip("turnPage",o[e<t?1:0]):i.pages[e].flip("turnPage",o[e<t?0:1]))},page:function(t){var e=this.data();if(void 0===t)return e.page;if(!e.disabled&&!e.destroying){if(0<(t=parseInt(t,10))&&t<=e.totalPages)return t!=e.page&&(e.done&&-1==u.inArray(t,this.turn("view"))?k._turnPage:k._fitPage).call(this,t),this;throw l("The page "+t+" does not exist")}},next:function(){return this.turn("page",Math.min(this.data().totalPages,k._view.call(this,this.data().page).pop()+1))},previous:function(){return this.turn("page",Math.max(1,k._view.call(this,this.data().page).shift()-1))},peel:function(t,e){var a=this.data(),i=this.turn("view");return e=void 0===e||!0===e,!1===t?this.turn("stop",null,e):"single"==a.display?a.pages[a.page].flip("peel",t,e):(i="ltr"==a.direction?-1!=t.indexOf("l")?i[0]:i[1]:-1!=t.indexOf("l")?i[1]:i[0],a.pages[i]&&a.pages[i].flip("peel",t,e)),this},_addMotionPage:function(){var t=u(this).data().f.opts,e=t.turn;e.data(),k._addMv.call(e,t.page)},_eventStart:function(t,e,a){var i=e.turn.data(),s=i.pageZoom[e.page];t.isDefaultPrevented()||(s&&s!=i.zoom&&(e.turn.trigger("zoomed",[e.page,e.turn.turn("view",e.page),s,i.zoom]),i.pageZoom[e.page]=i.zoom),"single"==i.display&&a&&("l"==a.charAt(1)&&"ltr"==i.direction||"r"==a.charAt(1)&&"rtl"==i.direction?(e.next=e.next<e.page?e.next:e.page-1,e.force=!0):e.next=e.next>e.page?e.next:e.page+1),k._addMotionPage.call(t.target)),k._updateShadow.call(e.turn)},_eventEnd:function(t,e,a){u(t.target).data().f;var i=(t=e.turn).data();a?(a=i.tpage||i.page)!=e.next&&a!=e.page||(delete i.tpage,k._fitPage.call(t,a||e.next,!0)):(k._removeMv.call(t,e.page),k._updateShadow.call(t),t.turn("update"))},_eventPressed:function(t){var e=(t=u(t.target).data().f).opts.turn,a=e.data();return a.pages,a.mouseAction=!0,e.turn("update"),t.time=(new Date).getTime()},_eventReleased:function(t,e){var a=u(t.target),i=a.data().f,s=i.opts.turn,r=s.data();e="single"==r.display?"br"==e.corner||"tr"==e.corner?e.x<a.width()/2:e.x>a.width()/2:e.x<0||e.x>a.width();((new Date).getTime()-i.time<200||e)&&(t.preventDefault(),k._turnPage.call(s,i.opts.next)),r.mouseAction=!1},_flip:function(t){t.stopPropagation(),(t=u(t.target).data().f.opts).turn.trigger("turn",[t.next]),t.turn.data().opts.autoCenter&&t.turn.turn("center",t.next)},_touchStart:function(){var t,e=this.data();for(t in e.pages)if(h(t,e.pages)&&!1===O._eventStart.apply(e.pages[t],arguments))return!1},_touchMove:function(){var t,e=this.data();for(t in e.pages)h(t,e.pages)&&O._eventMove.apply(e.pages[t],arguments)},_touchEnd:function(){var t,e=this.data();for(t in e.pages)h(t,e.pages)&&O._eventEnd.apply(e.pages[t],arguments)},calculateZ:function(t){for(var e,a,i,s=this,r=this.data(),n=this.turn("view"),o=n[0]||n[1],h=t.length-1,p={pageZ:{},partZ:{},pageV:{}},d=function(t){(t=s.turn("view",t))[0]&&(p.pageV[t[0]]=!0),t[1]&&(p.pageV[t[1]]=!0)},g=0;g<=h;g++)e=t[g],i=r.pages[e].data().f.opts.next,a=r.pagePlace[e],d(e),d(i),i=r.pagePlace[i]==i?i:e,p.pageZ[i]=r.totalPages-Math.abs(o-i),p.partZ[a]=2*r.totalPages-h+g;return p},update:function(){var t,e,a=this.data();if(this.turn("animating")&&0!==a.pageMv[0]){var i,s=this.turn("calculateZ",a.pageMv),r=this.turn("corner"),n=this.turn("view"),o=this.turn("view",a.tpage);for(t in a.pageWrap)h(t,a.pageWrap)&&(i=a.pageObjs[t].hasClass("fixed"),a.pageWrap[t].css({display:s.pageV[t]||i?"":"none",zIndex:(a.pageObjs[t].hasClass("hard")?s.partZ:s.pageZ)[t]||(i?-1:0)}),i=a.pages[t])&&(i.flip("z",s.partZ[t]||null),s.pageV[t]&&i.flip("resize"),a.tpage?i.flip("hover",!1).flip("disable",-1==u.inArray(parseInt(t,10),a.pageMv)&&t!=o[0]&&t!=o[1]):i.flip("hover",!1===r).flip("disable",t!=n[0]&&t!=n[1]))}else for(t in a.pageWrap)h(t,a.pageWrap)&&(e=k._setPageLoc.call(this,t),a.pages[t])&&a.pages[t].flip("disable",a.disabled||1!=e).flip("hover",!0).flip("z",null);return this},_updateShadow:function(){var t,e=this.data(),a=this.width(),s=this.height(),r="single"==e.display?a:a/2,n=this.turn("view");e.shadow||(e.shadow=u("<div />",{class:"shadow",css:i(0,0,0).css}).appendTo(this));for(var o=0;o<e.pageMv.length&&n[0]&&n[1];o++)n=this.turn("view",e.pages[e.pageMv[o]].data().f.opts.next),t=this.turn("view",e.pageMv[o]),n[0]=n[0]&&t[0],n[1]=n[1]&&t[1];switch(n[0]?n[1]?3:"ltr"==e.direction?2:1:"ltr"==e.direction?1:2){case 1:e.shadow.css({width:r,height:s,top:0,left:r});break;case 2:e.shadow.css({width:r,height:s,top:0,left:0});break;case 3:e.shadow.css({width:a,height:s,top:0,left:0})}},_setPageLoc:function(t){var e=this.data(),a=this.turn("view"),i=0;if(t==a[0]||t==a[1]?i=1:("single"==e.display&&t==a[0]+1||"double"==e.display&&t==a[0]-2||t==a[1]+2)&&(i=2),!this.turn("animating"))switch(i){case 1:e.pageWrap[t].css({zIndex:e.totalPages,display:""});break;case 2:e.pageWrap[t].css({zIndex:e.totalPages-1,display:""});break;case 0:e.pageWrap[t].css({zIndex:0,display:e.pageObjs[t].hasClass("fixed")?"":"none"})}return i},options:function(t){if(void 0===t)return this.data().opts;var e=this.data();if(u.extend(e.opts,t),t.pages&&this.turn("pages",t.pages),t.page&&this.turn("page",t.page),t.display&&this.turn("display",t.display),t.direction&&this.turn("direction",t.direction),t.width&&t.height&&this.turn("size",t.width,t.height),t.when)for(var a in t.when)h(a,t.when)&&this.unbind(a).bind(a,t.when[a]);return this},version:function(){return"4.1.0"}},O={init:function(t){return this.data({f:{disabled:!1,hover:!1,effect:this.hasClass("hard")?"hard":"sheet"}}),this.flip("options",t),O._addPageWrapper.call(this),this},setData:function(t){var e=this.data();return e.f=u.extend(e.f,t),this},options:function(t){var e=this.data().f;return t?(O.setData.call(this,{opts:u.extend({},e.opts||z,t)}),this):e.opts},z:function(t){var e=this.data().f;return e.opts["z-index"]=t,e.fwrapper&&e.fwrapper.css({zIndex:t||parseInt(e.parent.css("z-index"),10)||0}),this},_cAllowed:function(){var t=this.data().f,e=t.opts.page,a=t.opts.turn.data(),i=e%2;return"hard"==t.effect?"ltr"==a.direction?[i?"r":"l"]:[i?"l":"r"]:"single"==a.display?1==e?"ltr"==a.direction?P.forward:P.backward:e==a.totalPages?"ltr"==a.direction?P.backward:P.forward:P.all:"ltr"==a.direction?P[i?"forward":"backward"]:P[i?"backward":"forward"]},_cornerActivated:function(t){var e=this.data().f,a=this.width(),i=this.height(),s={x:t.x,y:t.y,corner:""},r=e.opts.cornerSize;if(s.x<=0||s.y<=0||a<=s.x||i<=s.y)return!1;switch(t=O._cAllowed.call(this),e.effect){case"hard":if(a-r<s.x)s.corner="r";else{if(!(s.x<r))return!1;s.corner="l"}break;case"sheet":if(s.y<r)s.corner+="t";else{if(!(i-r<=s.y))return!1;s.corner+="b"}if(s.x<=r)s.corner+="l";else{if(!(a-r<=s.x))return!1;s.corner+="r"}}return!(!s.corner||-1==u.inArray(s.corner,t))&&s},_isIArea:function(t){var e=this.data().f.parent.offset();return t=x&&t.originalEvent?t.originalEvent.touches[0]:t,O._cornerActivated.call(this,{x:t.pageX-e.left,y:t.pageY-e.top})},_c:function(t,e){switch(e=e||0,t){case"tl":return r(e,e);case"tr":return r(this.width()-e,e);case"bl":return r(e,this.height()-e);case"br":return r(this.width()-e,this.height()-e);case"l":return r(e,0);case"r":return r(this.width()-e,0)}},_c2:function(t){switch(t){case"tl":return r(2*this.width(),0);case"tr":return r(-this.width(),0);case"bl":return r(2*this.width(),this.height());case"br":return r(-this.width(),this.height());case"l":return r(2*this.width(),0);case"r":return r(-this.width(),0)}},_foldingPage:function(){var t,e=this.data().f;return e&&(t=e.opts).turn?"single"==(e=t.turn.data()).display?1<t.next||1<t.page?e.pageObjs[0]:null:e.pageObjs[t.next]:void 0},_backGradient:function(){var t,e=this.data().f;return(t=(t=e.opts.turn.data()).opts.gradients&&("single"==t.display||2!=e.opts.page&&e.opts.page!=t.totalPages-1))&&!e.bshadow&&(e.bshadow=u("<div/>",i(0,0,1)).css({position:"",width:this.width(),height:this.height()}).appendTo(e.parent)),t},type:function(){return this.data().f.effect},resize:function(t){var e,a=this.data().f,i=a.opts.turn.data(),s=this.width(),r=this.height();switch(a.effect){case"hard":t&&(a.wrapper.css({width:s,height:r}),a.fpage.css({width:s,height:r}),i.opts.gradients)&&(a.ashadow.css({width:s,height:r}),a.bshadow.css({width:s,height:r}));break;case"sheet":t&&(e=Math.round(Math.sqrt(Math.pow(s,2)+Math.pow(r,2))),a.wrapper.css({width:e,height:e}),a.fwrapper.css({width:e,height:e}).children(":first-child").css({width:s,height:r}),a.fpage.css({width:s,height:r}),i.opts.gradients&&a.ashadow.css({width:s,height:r}),O._backGradient.call(this))&&a.bshadow.css({width:s,height:r}),a.parent.is(":visible")&&(e=c(a.parent[0]),a.fwrapper.css({top:e.top,left:e.left}),e=c(a.opts.turn[0]),a.fparent.css({top:-e.top,left:-e.left})),this.flip("z",a.opts["z-index"])}},_addPageWrapper:function(){var t=this.data().f,e=t.opts.turn.data(),a=this.parent();if(t.parent=a,!t.wrapper)switch(t.effect){case"hard":(s={})[w+"transform-style"]="preserve-3d",s[w+"backface-visibility"]="hidden",t.wrapper=u("<div/>",i(0,0,2)).css(s).appendTo(a).prepend(this),t.fpage=u("<div/>",i(0,0,1)).css(s).appendTo(a),e.opts.gradients&&(t.ashadow=u("<div/>",i(0,0,0)).hide().appendTo(a),t.bshadow=u("<div/>",i(0,0,0)));break;case"sheet":var s=this.width(),r=this.height();Math.round(Math.sqrt(Math.pow(s,2)+Math.pow(r,2))),t.fparent=t.opts.turn.data().fparent,t.fparent||((s=u("<div/>",{css:{"pointer-events":"none"}}).hide()).data().flips=0,s.css(i(0,0,"auto","visible").css).appendTo(t.opts.turn),t.opts.turn.data().fparent=s,t.fparent=s),this.css({position:"absolute",top:0,left:0,bottom:"auto",right:"auto"}),t.wrapper=u("<div/>",i(0,0,this.css("z-index"))).appendTo(a).prepend(this),t.fwrapper=u("<div/>",i(a.offset().top,a.offset().left)).hide().appendTo(t.fparent),t.fpage=u("<div/>",i(0,0,0,"visible")).css({cursor:"default"}).appendTo(t.fwrapper),e.opts.gradients&&(t.ashadow=u("<div/>",i(0,0,1)).appendTo(t.fpage)),O.setData.call(this,t)}O.resize.call(this,!0)},_fold:function(t){var e=this.data().f,a=e.opts.turn.data(),i=O._c.call(this,t.corner),s=this.width(),h=this.height();switch(e.effect){case"hard":"l"==t.corner?t.x=Math.min(Math.max(t.x,0),2*s):t.x=Math.max(Math.min(t.x,s),-s);var p,g,l,c,u,f=a.totalPages,x=e.opts["z-index"]||f,y={overflow:"visible"},P=i.x?(i.x-t.x)/s:t.x/s,_=90*P,M=_<90;switch(t.corner){case"l":c="0% 50%",u="100% 50%",l=M?(g=(p=0)<e.opts.next-1,1):(p="100%",g=e.opts.page+1<f,0);break;case"r":c="100% 50%",u="0% 50%",_=-_,s=-s,l=M?(g=e.opts.next+1<f,p=0):(p="-100%",g=1!=e.opts.page,1)}y[w+"perspective-origin"]=u,e.wrapper.transform("rotateY("+_+"deg)translate3d(0px, 0px, "+(this.attr("depth")||0)+"px)",u),e.fpage.transform("translateX("+s+"px) rotateY("+(180+_)+"deg)",c),e.parent.css(y),M?(P=1-P,e.wrapper.css({zIndex:x+1}),e.fpage.css({zIndex:x})):(P-=1,e.wrapper.css({zIndex:x}),e.fpage.css({zIndex:x+1})),a.opts.gradients&&(g?e.ashadow.css({display:"",left:p,backgroundColor:"rgba(0,0,0,"+.5*P+")"}).transform("rotateY(0deg)"):e.ashadow.hide(),e.bshadow.css({opacity:1-P}),M?e.bshadow.parent()[0]!=e.wrapper[0]&&e.bshadow.appendTo(e.wrapper):e.bshadow.parent()[0]!=e.fpage[0]&&e.bshadow.appendTo(e.fpage),d(e.bshadow,r(100*l,0),r(100*(1-l),0),[[0,"rgba(0,0,0,0.3)"],[1,"rgba(0,0,0,0)"]],2));break;case"sheet":var j,z,k,C,T,W,A=this,F=0,S=(y=0,r(0,0)),E=r(0,0),L=r(0,0),D=O._foldingPage.call(this),I=(Math.tan(y),a.opts.acceleration),Z=e.wrapper.height(),q="t"==t.corner.substr(0,1),H="l"==t.corner.substr(1,1),R=function(){var e=r(0,0),n=r(0,0),o=(e.x=i.x?i.x-t.x:t.x,e.y=v?i.y?i.y-t.y:t.y:0,n.x=H?s-e.x/2:t.x+e.x/2,n.y=e.y/2,b-Math.atan2(e.y,e.x)),p=o-Math.atan2(n.y,n.x);p=Math.max(0,Math.sin(p)*Math.sqrt(Math.pow(n.x,2)+Math.pow(n.y,2)));if(F=o/m*180,L=r(p*Math.sin(o),p*Math.cos(o)),b<o&&(L.x=L.x+Math.abs(L.y*e.y/e.x),L.y=0,Math.round(L.x*Math.tan(m-o))<h))return t.y=Math.sqrt(Math.pow(h,2)+2*n.x*e.x),q&&(t.y=h-t.y),R();b<o&&(p=m-o,n=Z-h/Math.sin(p),S=r(Math.round(n*Math.cos(p)),Math.round(n*Math.sin(p))),H&&(S.x=-S.x),q)&&(S.y=-S.y),C=Math.round(L.y/Math.tan(o)+L.x);n=(e=s-C)*Math.cos(2*o),p=e*Math.sin(2*o);return E=r(Math.round(H?e-n:C+n),Math.round(q?p:h-p)),a.opts.gradients&&(C=e*Math.sin(o),n=O._c2.call(A,t.corner),p=Math.sqrt(Math.pow(n.x-t.x,2)+Math.pow(n.y-t.y,2))/s,W=Math.sin(b*(1<p?2-p:p)),T=Math.min(p,1),k=100<C?(C-100)/C:0,j=r(C*Math.sin(o)/s*100,C*Math.cos(o)/h*100),O._backGradient.call(A))&&(z=r(1.2*C*Math.sin(o)/s*100,1.2*C*Math.cos(o)/h*100),H||(z.x=100-z.x),q||(z.y=100-z.y)),L.x=Math.round(L.x),L.y=Math.round(L.y),!0},$=function(t,i,p,g){var l=["0","auto"],c=(s-Z)*p[0]/100,u=(h-Z)*p[1]/100,f=(l={left:l[i[0]],top:l[i[1]],right:l[i[2]],bottom:l[i[3]]},i={},90!=g&&-90!=g?H?-1:1:0),v=p[0]+"% "+p[1]+"%";A.css(l).transform(o(g)+n(t.x+f,t.y,I),v),e.fpage.css(l).transform(o(g)+n(t.x+E.x-S.x-s*p[0]/100,t.y+E.y-S.y-h*p[1]/100,I)+o((180/g-2)*g),v),e.wrapper.transform(n(-t.x+c-f,-t.y+u,I)+o(-g),v),e.fwrapper.transform(n(-t.x+S.x+c,-t.y+S.y+u,I)+o(-g),v),a.opts.gradients&&(p[0]&&(j.x=100-j.x),p[1]&&(j.y=100-j.y),i["box-shadow"]="0 0 20px rgba(0,0,0,"+.5*W+")",D.css(i),d(e.ashadow,r(H?100:0,q?0:100),r(j.x,j.y),[[k,"rgba(0,0,0,0)"],[.8*(1-k)+k,"rgba(0,0,0,"+.2*T+")"],[1,"rgba(255,255,255,"+.2*T+")"]],3),O._backGradient.call(A))&&d(e.bshadow,r(H?0:100,q?0:100),r(z.x,z.y),[[.6,"rgba(0,0,0,0)"],[.8,"rgba(0,0,0,"+.3*T+")"],[1,"rgba(0,0,0,0)"]],3)};switch(t.corner){case"l":case"r":break;case"tl":t.x=Math.max(t.x,1),R(),$(L,[1,0,0,1],[100,0],F);break;case"tr":t.x=Math.min(t.x,s-1),R(),$(r(-L.x,L.y),[0,0,0,1],[0,0],-F);break;case"bl":t.x=Math.max(t.x,1),R(),$(r(L.x,-L.y),[1,1,0,0],[100,100],-F);break;case"br":t.x=Math.min(t.x,s-1),R(),$(r(-L.x,-L.y),[0,1,1,0],[0,100],F)}}e.point=t},_moveFoldingPage:function(t){var e,a,i,s=this.data().f;s&&(i=(a=(e=s.opts.turn).data()).pagePlace,t?(i[t=s.opts.next]!=s.opts.page&&(s.folding&&O._moveFoldingPage.call(this,!1),O._foldingPage.call(this).appendTo(s.fpage),i[t]=s.opts.page,s.folding=t),e.turn("update")):s.folding&&(a.pages[s.folding]?(t=a.pages[s.folding].data().f,a.pageObjs[s.folding].appendTo(t.wrapper)):a.pageWrap[s.folding]&&a.pageObjs[s.folding].appendTo(a.pageWrap[s.folding]),s.folding in i&&(i[s.folding]=s.folding),delete s.folding))},_showFoldedPage:function(t,e){var a,i=O._foldingPage.call(this),s=this.data(),r=s.f,n=r.visible;if(i){if(!n||!r.point||r.point.corner!=t.corner){i="hover"==r.status||"peel"==r.status||r.opts.turn.data().mouseAction?t.corner:null,n=!1;if("prevented"==g("start",this,[r.opts,i]))return!1}if(e?(a=this,i=r.point&&r.point.corner==t.corner?r.point:O._c.call(this,t.corner,1),this.animatef({from:[i.x,i.y],to:[t.x,t.y],duration:500,frame:function(e){t.x=Math.round(e[0]),t.y=Math.round(e[1]),O._fold.call(a,t)}})):(O._fold.call(this,t),s.effect&&!s.effect.turning&&this.animatef(!1)),!n)switch(r.effect){case"hard":r.visible=!0,O._moveFoldingPage.call(this,!0),r.fpage.show(),r.opts.shadows&&r.bshadow.show();break;case"sheet":r.visible=!0,r.fparent.show().data().flips++,O._moveFoldingPage.call(this,!0),r.fwrapper.show(),r.bshadow&&r.bshadow.show()}return!0}return!1},hide:function(){var t=this.data().f,e=t.opts.turn.data(),a=O._foldingPage.call(this);switch(t.effect){case"hard":e.opts.gradients&&(t.bshadowLoc=0,t.bshadow.remove(),t.ashadow.hide()),t.wrapper.transform(""),t.fpage.hide();break;case"sheet":0==--t.fparent.data().flips&&t.fparent.hide(),this.css({left:0,top:0,right:"auto",bottom:"auto"}).transform(""),t.wrapper.transform(""),t.fwrapper.hide(),t.bshadow&&t.bshadow.hide(),a.transform("")}return t.visible=!1,this},hideFoldedPage:function(t){var e,a,i,n,o,h,p=this.data().f;p.point&&(e=this,a=p.point,i=function(){p.point=null,p.status="",e.flip("hide"),e.trigger("end",[p.opts,!1])},t?(n=O._c.call(this,a.corner),t="t"==a.corner.substr(0,1)?Math.min(0,a.y-n.y)/2:Math.max(0,a.y-n.y)/2,o=r(a.x,a.y+t),h=r(n.x,n.y-t),this.animatef({from:0,to:1,frame:function(t){t=s(a,o,h,n,t),a.x=t.x,a.y=t.y,O._fold.call(e,a)},complete:i,duration:800,hiding:!0})):(this.animatef(!1),i()))},turnPage:function(t){var e=this,a=this.data().f,i=a.opts.turn.data(),r=(t={corner:a.corner?a.corner.corner:t||O._cAllowed.call(this)[0]},a.point||O._c.call(this,t.corner,a.opts.turn?i.opts.elevation:0)),n=O._c2.call(this,t.corner);this.trigger("flip").animatef({from:0,to:1,frame:function(a){a=s(r,r,n,n,a),t.x=a.x,t.y=a.y,O._showFoldedPage.call(e,t)},complete:function(){e.trigger("end",[a.opts,!0])},duration:i.opts.duration,turning:!0}),a.corner=null},moving:function(){return"effect"in this.data()},isTurning:function(){return this.flip("moving")&&this.data().effect.turning},corner:function(){return this.data().f.corner},_eventStart:function(t){var e=this.data().f,a=e.opts.turn;if(!e.corner&&!e.disabled&&!this.flip("isTurning")&&e.opts.page==a.data().pagePlace[e.opts.page]){if(e.corner=O._isIArea.call(this,t),e.corner&&O._foldingPage.call(this))return this.trigger("pressed",[e.point]),O._showFoldedPage.call(this,e.corner),!1;e.corner=null}},_eventMove:function(t){var e,a=this.data().f;a.disabled||(t=x?t.originalEvent.touches:[t],a.corner?(e=a.parent.offset(),a.corner.x=t[0].pageX-e.left,a.corner.y=t[0].pageY-e.top,O._showFoldedPage.call(this,a.corner)):a.hover&&!this.data().effect&&this.is(":visible")&&((e=O._isIArea.call(this,t[0]))?("sheet"==a.effect&&2==e.corner.length||"hard"==a.effect)&&(a.status="hover",t=O._c.call(this,e.corner,a.opts.cornerSize/2),e.x=t.x,e.y=t.y,O._showFoldedPage.call(this,e,!0)):"hover"==a.status&&(a.status="",O.hideFoldedPage.call(this,!0))))},_eventEnd:function(){var t=this.data().f,e=t.corner;!t.disabled&&e&&"prevented"!=g("released",this,[t.point||e])&&O.hideFoldedPage.call(this,!0),t.corner=null},disable:function(t){return O.setData.call(this,{disabled:t}),this},hover:function(t){return O.setData.call(this,{hover:t}),this},peel:function(t,e){var a,i=this.data().f;if(t){if(-1==u.inArray(t,P.all))throw l("Corner "+t+" is not permitted");-1!=u.inArray(t,O._cAllowed.call(this))&&(a=O._c.call(this,t,i.opts.cornerSize/2),i.status="peel",O._showFoldedPage.call(this,{corner:t,x:a.x,y:a.y},e))}else i.status="",O.hideFoldedPage.call(this,e);return this}},window.requestAnim=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)},u.extend(u.fn,{flip:function(){return e(u(this[0]),O,arguments)},turn:function(){return e(u(this[0]),k,arguments)},transform:function(t,e){var a={};return e&&(a[w+"transform-origin"]=e),a[w+"transform"]=t,this.css(a)},animatef:function(t){var e=this.data();if(e.effect&&e.effect.stop(),t){t.to.length||(t.to=[t.to]),t.from.length||(t.from=[t.from]);for(var a=[],i=t.to.length,s=!0,r=this,n=(new Date).getTime(),o=function(){if(e.effect&&s){for(var h=[],p=Math.min(t.duration,(new Date).getTime()-n),d=0;d<i;d++)h.push(e.effect.easing(1,p,t.from[d],a[d],t.duration));t.frame(1==i?h[0]:h),p==t.duration?(delete e.effect,r.data(e),t.complete&&t.complete()):window.requestAnim(o)}},h=0;h<i;h++)a.push(t.to[h]-t.from[h]);e.effect=u.extend({stop:function(){s=!1},easing:function(t,e,a,i,s){return i*Math.sqrt(1-(e=e/s-1)*e)+a}},t),this.data(e),o()}else delete e.effect}}),u.isTouch=x,u.mouseEvents=y,u.cssPrefix=p,u.cssTransitionEnd=function(){var t,e=document.createElement("fakeelement"),a={transition:"transitionend",OTransition:"oTransitionEnd",MSTransition:"transitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(t in a)if(void 0!==e.style[t])return a[t]},u.findPos=c}).call(this,a("1157"))},"287b":function(t,e,a){t.exports=a.p+"img/11.0420fdd4.jpeg"},"347a":function(t,e,a){t.exports=a.p+"img/6.bc60a216.jpeg"},"357a":function(t,e,a){t.exports=a.p+"img/4.d9617881.jpeg"},"3cef":function(t,e,a){t.exports=a.p+"img/10.e8c3111b.jpeg"},"5c6c3":function(t,e,a){t.exports=a.p+"img/9.2f75528c.jpeg"},"6aa0":function(t,e,a){t.exports=a.p+"img/0.832e26d3.jpeg"},7249:function(t,e,a){t.exports=a.p+"img/2.888923cb.jpeg"},7747:function(t,e,a){t.exports=a.p+"img/1.8c795978.jpeg"},"8f0f":function(t,e,a){},b217:function(t,e,a){t.exports=a.p+"img/13.ca5aa2b9.jpeg"},b348:function(t,e,a){t.exports=a.p+"img/12.07a5dd8b.jpeg"},baad:function(t,e,a){a("8f0f")},bc28:function(t,e,a){a("ee77")},c09e:function(t,e,a){},c924:function(t,e,a){t.exports=a.p+"img/5.fa22f34a.jpeg"},ce4c:function(t,e,a){t.exports=a.p+"img/8.14d3feb5.jpeg"},d085:function(t,e,a){a("c09e")},d1f7:function(t,e,a){var i={"./0.jpeg":"6aa0","./1.jpeg":"7747","./10.jpeg":"3cef","./11.jpeg":"287b","./12.jpeg":"b348","./13.jpeg":"b217","./2.jpeg":"7249","./3.jpeg":"0391","./4.jpeg":"357a","./5.jpeg":"c924","./6.jpeg":"347a","./7.jpeg":"efa8","./8.jpeg":"ce4c","./9.jpeg":"5c6c3"};function s(t){return t=r(t),a(t)}function r(t){if(a.o(i,t))return i[t];throw(t=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",t}s.keys=function(){return Object.keys(i)},s.resolve=r,(t.exports=s).id="d1f7"},ee77:function(t,e,a){},efa8:function(t,e,a){t.exports=a.p+"img/7.d4bba3ed.jpeg"}}]);