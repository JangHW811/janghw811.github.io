parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"H99C":[function(require,module,exports) {
var e=7,t=(1/(e+1)).toFixed(2),r=window.innerHeight,a=window.innerWidth,o=null,n=a<768,c=navigator.userAgent.toLowerCase();window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach),Element.prototype.append||(Element.prototype.append=Element.prototype.appendChild);var l=function(){n?u():i()},i=function(){var l=16e3+r,i=(window.pageYOffset/l).toFixed(2),u=parseInt(i/t);o!==u&&(o=u);var s=window.pageYOffset,d=l/e;document.querySelector(".background").style.top="-".concat(s/415,"%");var y=document.querySelector(".fadeContainer"),m=document.querySelector(".layer0"),p=document.querySelector(".layer1"),f=document.querySelector(".layer2"),h=document.querySelector(".layer3"),v=document.querySelector(".layer4"),w=document.querySelector(".layer5");("Netscape"==navigator.appName&&-1!=c.indexOf("trident")||-1!=c.indexOf("msie"))&&(y.style.top=s>1440?"27%":"42%",s<15e3&&(y.style.transform="translateY(0)"));m.style.opacity=2.7-Math.abs(s-300)/300,p.style.opacity=2.7-Math.abs(s-d)/400,f.style.opacity=2.7-Math.abs(s-2*d)/400,h.style.opacity=2.7-Math.abs(s-3*d)/400,v.style.opacity=2.7-Math.abs(s-4*d)/400,w.style.opacity=-(2.7-(s-4.5*d)/400);var q=document.querySelector(".building1Layer"),S=document.querySelector(".building2Layer"),g=document.querySelector(".building3Layer"),b=document.querySelector(".building4Layer"),L=document.querySelector(".layerBuildingContainer"),M=function(e,t){var o=t-r*(t/100)*s/(60*a);e.style.transform=o>=0?"translateY(".concat(o,"px)"):"translateY(0)"};M(q,700),M(S,1e3),M(g,1300),M(b,1600);var x=100-s/40;L.style.top="".concat(x>=0?x:0,"vh");var E=n?2:1,Y=n?2.6:1.3,C=E+(s-8e3)/3e3,_=document.querySelector(".header_menu_wrap")?document.querySelector(".header_menu_wrap").offsetHeight+10:0,k=s-(16e3-r)-_;if(8e3<=s){var N=C<E?E:C>Y?Y:C;16e3-r<=s?(L.style.transform="translateY(-".concat(k,"px) scale(").concat(N,")"),y.style.transform="translateY(-".concat(k,"px)")):L.style.transform="scale(".concat(N,")")}else L.style.transform=null,y.style.transform=null},u=function(){var t=20*r,o=t+r,n=a/r,c=r/a,l=window.pageYOffset,i=o/e;document.querySelector(".background").style.top="-".concat(l/415,"%");var u=document.querySelector(".fadeContainer"),s=document.querySelector(".layer0"),d=document.querySelector(".layer1"),y=document.querySelector(".layer2"),m=document.querySelector(".layer3"),p=document.querySelector(".layer4"),f=document.querySelector(".layer5"),h=400*n,v=2.7*n;s.style.opacity=v-Math.abs(l-(h-100))/(h-100)*n,d.style.opacity=v-Math.abs(l-i)/h*n,y.style.opacity=v-Math.abs(l-2*i)/h*n,m.style.opacity=v-Math.abs(l-3*i)/h*n,p.style.opacity=v-Math.abs(l-4*i)/h*n,f.style.opacity=-(v-(l-4.5*i)/h*n);var w=document.querySelector(".building1Layer"),q=document.querySelector(".building2Layer"),S=document.querySelector(".building3Layer"),g=document.querySelector(".building4Layer"),b=document.querySelector(".layerBuildingContainer"),L=function(e,t){var r=t-t/1e3*n*l/3*n;e.style.transform=r>=0?"translateY(".concat(r,"px)"):"translateY(0)"};L(w,.2*r),L(q,.4*r),L(S,.6*r),L(g,.8*r);b.style.top="".concat(0,"vh");var M=document.querySelector(".header_menu_wrap")?document.querySelector(".header_menu_wrap").offsetHeight+10:0,x=t/3*c,E=2+(l-x)/3e3,Y=l-(t-r)-M;if(x&&x<=l){var C=E<2?2:E>2.6?2.6:E;t-r<=l?(b.style.transform="translateY(-".concat(Y,"px) scale(").concat(C,")"),u.style.transform="translateY(-".concat(Y,"px)")):b.style.transform="scale(".concat(C,")")}else b.style.transform=null,u.style.transform=null},s=function(){n=a<768,r=window.innerHeight,a=window.innerWidth;var e=document.querySelector(".youtubeContainer > img.youtubeFrame"),t=document.querySelector(".youtubeContainer > iframe"),o=n?window.visualViewport.width-20:.36*a,c=n?window.visualViewport.width-70:.31*a,i=n?(window.visualViewport.width-70)*(41/73):.31*a*(41/73);e.style.width="".concat(o,"px"),t.width="".concat(c,"px"),t.height="".concat(i,"px"),l()};s(),window.addEventListener("scroll",l),window.addEventListener("resize",s),function(){document.querySelector(".fingerToggle").addEventListener("click",function(e){document.querySelector(".fingerFrame").classList.toggle("open")});var e=document.querySelector(".peopleContainer").querySelectorAll(".humanContainer");e.forEach(function(t,r){return t.addEventListener("click",function(t){e.forEach(function(e){e.classList.remove("active")}),t.target.parentElement.classList.add("active"),document.querySelectorAll(".cardContainer > img").forEach(function(e,t){r===t?e.classList.add("active"):e.classList.remove("active")})})})}();var d=function(e){var t=document.createElement("div");t.classList.add("star"),t.classList.add("star".concat(e%10)),t.classList.add("starRandom".concat(e)),document.querySelector(".background").append(t);var r=100*Math.random(),a=100*Math.random(),o=20*Math.random()+5;t.style.top="".concat(r,"vh"),t.style.left="".concat(a,"vw"),t.style.width="".concat(o,"px"),t.style.height="".concat(o,"px"),setTimeout(function(){return t.remove()},e%10*200+2e3)},y=function(e){var t=2e3*Math.random();setTimeout(function(){d(e)},t)};setInterval(function(){Math.floor(100*Math.random())},50);
},{}]},{},["H99C"], null)
//# sourceMappingURL=/src.b03827cb.js.map