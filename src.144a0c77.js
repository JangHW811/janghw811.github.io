parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"H99C":[function(require,module,exports) {
var e=6,t=(1/(e+1)).toFixed(2),n=!1,o=0,a=0,r=null;document.onreadystatechange=function(e){console.log("document.readyState",document.readyState),"complete"===document.readyState&&(document.querySelector(".progress").style.display="none",document.body.style.overflowY="auto"),null!=document.querySelector(".top_wrap h1")&&(document.querySelector(".top_wrap h1").innerHTML='<img style="width: 72px; height: 22px; vertical-align: text-top;" src="/content/images/sweetdreamstore_new.png">')};var c=navigator.userAgent.toLowerCase();window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach),Element.prototype.append||(Element.prototype.append=Element.prototype.appendChild),"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});var i=function(){o=window.innerHeight,a=window.innerWidth,(n=a<768)?s():l()},l=function(){console.log("scroll",a);var n=a/o,i=o/a,l=16e3+o,s=(window.pageYOffset/l).toFixed(2),u=parseInt(s/t);r!==u&&(r=u);var d=window.pageYOffset,m=l/e;document.querySelector(".background").style.top="-".concat(d/415,"%");var y=document.querySelector(".scrollDown");d>0?y.classList.add("hide"):y.classList.remove("hide");var v=document.querySelector(".fadeContainer"),p=document.querySelector(".layer0"),f=document.querySelector(".layer1"),h=document.querySelector(".layer2"),g=document.querySelector(".layer3"),w=document.querySelector(".layer4"),S=document.querySelector(".layer5");("Netscape"==navigator.appName&&-1!=c.indexOf("trident")||-1!=c.indexOf("msie"))&&(v.style.top=d>1440?"27%":"42%",d<15e3&&(v.style.transform="translateY(0)"));var q=180*n,b=7.6*i;p.style.opacity=b-Math.abs(d-(q-100))/(q-100),f.style.opacity=b-Math.abs(d-m)/q,h.style.opacity=b-Math.abs(d-2*m)/q,g.style.opacity=b-Math.abs(d-3*m)/q,w.style.opacity=b-Math.abs(d-4*m)/q,S.style.opacity=-(b-(d-4*m)/q);var L=document.querySelector(".building1Layer"),x=document.querySelector(".building2Layer"),E=document.querySelector(".building3Layer"),C=document.querySelector(".building4Layer"),M=document.querySelector(".layerBuildingContainer"),Y=function(e,t){var n=t-o*(t/100)*d/(60*a);e.style.transform=n>=0?"translateY(".concat(n,"px)"):"translateY(0)"};Y(L,700),Y(x,1e3),Y(E,1300),Y(C,1600);var _=100-d/40;M.style.top="".concat(_>=0?_:0,"vh");var k=1+(d-8e3)/3e3,I=document.querySelector(".header_menu_wrap")?document.querySelector(".header_menu_wrap").offsetHeight+10:0,A=d-(16e3-o)-I;if(8e3<=d){var N=k<1?1:k>1.3?1.3:k;16e3-o<=d?(M.style.transform="translateY(-".concat(A,"px) scale(").concat(N,")"),v.style.transform="translateY(-".concat(A,"px)")):M.style.transform="scale(".concat(N,")")}else M.style.transform=null,v.style.transform=null},s=function(){var t=document.querySelector(".parallaxScroll").offsetHeight,n=t+o,r=a/o,c=o/a,i=window.pageYOffset,l=n/e;document.querySelector(".background").style.top="-".concat(i/415,"%");var s=document.querySelector(".scrollDown");i>0?s.classList.add("hide"):s.classList.remove("hide");var u=document.querySelector(".fadeContainer"),d=document.querySelector(".layer0"),m=document.querySelector(".layer1"),y=document.querySelector(".layer2"),v=document.querySelector(".layer3"),p=document.querySelector(".layer4"),f=document.querySelector(".layer5"),h=400*r,g=1.2*c;d.style.opacity=g-Math.abs(i-(h-100))/(h-100)*r,m.style.opacity=g-Math.abs(i-l)/h*r,y.style.opacity=g-Math.abs(i-2*l)/h*r,v.style.opacity=g-Math.abs(i-3*l)/h*r,p.style.opacity=g-Math.abs(i-4*l)/h*r,f.style.opacity=-(g-(i-4*l)/h*r);var w=document.querySelector(".building1Layer"),S=document.querySelector(".building2Layer"),q=document.querySelector(".building3Layer"),b=document.querySelector(".building4Layer"),L=document.querySelector(".layerBuildingContainer"),x=function(e,t){var n=t-.54*(t/1e3*r)*i*r;e.style.transform=n>=0?"translateY(".concat(n,"px)"):"translateY(0)"};x(w,.2*o),x(S,.4*o),x(q,.6*o),x(b,.8*o);L.style.top="".concat(0,"vh");var E=document.querySelector(".header_menu_wrap")?document.querySelector(".header_menu_wrap").offsetHeight+10:0,C=c>2?t/2.7*c:t/2.4*c,M=2+(i-C)/3e3,Y=i-(t-o)-E;if(console.log("position",i,C,c),C&&C<=i){var _=M<2?2:M>2.6?2.6:M;t-o<=i?(L.style.transform="translateY(-".concat(Y,"px) scale(").concat(_,")"),u.style.transform="translateY(-".concat(Y,"px)")):L.style.transform="scale(".concat(_,")")}else L.style.transform=null,u.style.transform=null},u=function(){o=window.innerHeight,a=window.innerWidth,n=a<768,console.log("resize",a);var e=document.querySelector(".parallaxScroll").offsetHeight;console.log("parallaxScrollHeight",e);var t=document.querySelector(".youtubeContainer > img.youtubeFrame"),r=document.querySelector(".youtubeContainer > iframe"),c=n?window.visualViewport.width-20:.36*a;console.log("containerWidth",c,n);var l=n?window.visualViewport.width-70:.31*a,s=n?(window.visualViewport.width-70)*(41/73):.31*a*(41/73);t.style.width="".concat(c,"px"),r.width="".concat(l,"px"),r.height="".concat(s,"px"),i()};window.addEventListener("scroll",i),window.addEventListener("resize",u),window.onload=function(){u()};var d=function(e){var t=e.humanItem,n=e.humans,o=e.index;n.forEach(function(e){e.classList.remove("active")}),"Netscape"==navigator.appName&&-1!=c.indexOf("trident")||-1!=c.indexOf("msie")?t.classList.add("active"):t.parentElement.classList.add("active"),document.querySelectorAll(".cardContainer > img").forEach(function(e,t){o===t?e.classList.add("active"):e.classList.remove("active")})};!function(){document.querySelector(".fingerToggle").addEventListener("click",function(e){document.querySelector(".fingerFrame").classList.toggle("open")});var e=document.querySelector(".peopleContainer").querySelectorAll(".humanContainer");e.forEach(function(t,n){return t.addEventListener("click",function(t){"Netscape"==navigator.appName&&-1!=c.indexOf("trident")||-1!=c.indexOf("msie")?d({humanItem:t.target.parentElement,humans:e,index:n}):d({humanItem:t.target,humans:e,index:n}),v=function(){}})});var t=document.querySelector(".alertMask");document.querySelectorAll(".alertMask .alert .closeEvent").forEach(function(e){e.addEventListener("click",function(e){t.style.display="none",document.body.style.overflowY="auto"})});var n=document.querySelector(".alertMask2");document.querySelectorAll(".alertMask2 .alert .closeEvent").forEach(function(e){e.addEventListener("click",function(e){n.style.display="none",document.body.style.overflowY="auto"})}),document.querySelectorAll(".comingsoon").forEach(function(e){e.addEventListener("click",function(){t.style.display="flex",document.body.style.overflowY="hidden"})})}();var m=function(e){var t=document.createElement("div");t.classList.add("star"),t.classList.add("star".concat(e%10)),t.classList.add("starRandom".concat(e)),document.querySelector(".background").append(t);var n=100*Math.random(),o=100*Math.random(),a=20*Math.random()+5;t.style.top="".concat(n,"vh"),t.style.left="".concat(o,"vw"),t.style.width="".concat(a,"px"),t.style.height="".concat(a,"px"),setTimeout(function(){return t.remove()},e%10*200+2e3)},y=function(e){var t=2e3*Math.random();setTimeout(function(){m(e)},t)};setInterval(function(){var e=Math.floor(100*Math.random());y(e)},50);var v=function(e){var t=document.querySelectorAll(".humanContainer");if("Netscape"==navigator.appName&&-1!=c.indexOf("trident")||-1!=c.indexOf("msie")){var n=t[e];d({humanItem:n,humans:t,index:e})}else{var o=t[e].firstChild;d({humanItem:o,humans:t,index:e})}var a=(e+1)%4;setTimeout(function(){return v(a)},3e3)};v(0);var p=function(e){return fetch(e).then(function(e){return e.json()})},f="https://event.navienhouse.com/assets/sweetdreamstore/211123/images/arrowRight.png",h="https://event.navienhouse.com/assets/sweetdreamstore/211123/images/frame.png",g=function(){p("https://event.navienhouse.com/sweetdreamstore/index.php/API/getVideo").then(function(e){var t=null==e?void 0:e.data,n=null==t?void 0:t.map(function(e,t){var n='\n                <a class="storyItemContainer">\n                    <div class="alignCenter">\n                        <img src="'.concat(null==e?void 0:e.thumbnail,'" />\n                        <div class="fontContainer">\n                        <p class="storyTitleFont">').concat(null==e?void 0:e.title,'</p>\n                        <p class="storyContentFont">').concat(null==e?void 0:e.description,'</p>\n                        </div>\n                    </div>\n                    <div class="alignCenter">\n                        <div class="arrowRight">\n                        <img src="').concat(f,'" />\n                        </div>\n                    </div>\n                </a>\n            ');return 0===t&&w(e),n}),o=document.querySelector(".storyListContainer");o.innerHTML=n.join(""),o.querySelectorAll(".storyItemContainer").forEach(function(e,n){return e.addEventListener("click",function(){var e=t[n];w(e)})})})},w=function(e){var t=document.querySelector(".youtubeContainer"),n='\n    <img src="'.concat(h,'" class="imgObjectFitContain youtubeFrame" />\n    <iframe\n      frameborder="0"\n      src="').concat(null==e?void 0:e.video_url,'"\n      class="positionAbsolute storyYoutube"\n    ></iframe>\n    <img src="').concat(null==e?void 0:e.episode_img,'" class="imgObjectFitContain flag youtubeBottomImage" />\n    ');t.innerHTML=n,u()};g();var S="https://event.navienhouse.com/assets/sweetdreamstore/211123/images/goodsFrame.png",q="https://event.navienhouse.com/assets/sweetdreamstore/211123/images/btn_arrow.png",b="https://event.navienhouse.com/assets/sweetdreamstore/211123/images/btn_arrow_gray.png",L=function(){p("https://event.navienhouse.com/sweetdreamstore/index.php/API/getProduct").then(function(e){var t=null==e?void 0:e.data,n=null==t?void 0:t.map(function(e,t){return'\n                    <a class="goodsItem '.concat("Y"!==(null==e?void 0:e.use_yn)?"comingsoon":"",'" ').concat("Y"===(null==e?void 0:e.use_yn)?'href="'.concat(e.link,'"'):"",' >\n                        <div class="goodsFrame">\n                          <img src="').concat(null==e?void 0:e.thumbnail,'" class="goods" alt="" />\n                          <img src="').concat(S,'" alt="" />\n                        </div>\n                        <p class="goodsDescription">').concat(null==e?void 0:e.description,'</p>\n                        <div class="center glowingContainer">\n                          ').concat("Y"===(null==e?void 0:e.effect)?'<div class="glowingDummy"></div>':"",'\n                          <div class="flag2 center">\n                            <span class="flagFont">').concat(null==e?void 0:e.button,' <img src="').concat("Y"===(null==e?void 0:e.use_yn)?q:b,'"/>\n                            </span>\n                          </div>\n                        </div>\n                    </a>\n              ')}),o=document.querySelector(".goodsContainer");o.innerHTML=n.join(""),o.querySelectorAll(".goodsItem").forEach(function(e,t){return e.addEventListener("click",function(){goodsItemClick(t)})}),document.querySelectorAll(".comingsoon").forEach(function(e){e.addEventListener("click",function(){document.querySelector(".alertMask").style.display="flex",document.body.style.overflowY="hidden"})})})};L();
},{}]},{},["H99C"], null)
//# sourceMappingURL=/src.144a0c77.js.map