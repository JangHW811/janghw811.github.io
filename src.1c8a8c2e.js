parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"H99C":[function(require,module,exports) {
var e=6,t=(1/(e+1)).toFixed(2),n=!1,o=0,a=0,r=null,c=/iphone/i.test(navigator.userAgent.toLowerCase());document.onreadystatechange=function(e){"complete"===document.readyState&&(document.querySelector(".progress").style.display="none",M()),null!=document.querySelector(".top_wrap h1")&&(document.querySelector(".top_wrap h1").innerHTML='<img style="width: 72px; height: 22px; vertical-align: text-top;" src="/content/images/sweetdreamstore_new.png">')};var i=navigator.userAgent.toLowerCase();window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach),Element.prototype.append||(Element.prototype.append=Element.prototype.appendChild),"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});var s=function(e){o=window.innerHeight,a=window.innerWidth,(n=a<768)?d():l()},l=function(){var n=a/o,c=o/a,s=document.querySelector(".parallaxScroll").offsetHeight,l=s+o,u=(window.pageYOffset/l).toFixed(2),d=parseInt(u/t);r!==d&&(r=d);var m=window.pageYOffset,y=l/e;document.querySelector(".background").style.top="-".concat(m/415,"%");var v=document.querySelector(".scrollDown");m>0?v.classList.add("hide"):v.classList.remove("hide");var p=document.querySelector(".fadeContainer"),f=document.querySelector(".layer0"),h=document.querySelector(".layer1"),g=document.querySelector(".layer2"),w=document.querySelector(".layer3"),S=document.querySelector(".layer4"),q=document.querySelector(".layer5");("Netscape"==navigator.appName&&-1!=i.indexOf("trident")||-1!=i.indexOf("msie"))&&(p.style.top=m>1440?"27%":"42%",m<15e3&&(p.style.transform="translateY(0)"));var L=s*c,b=300*n,x=4*c;f.style.opacity=x-Math.abs(m-(b-500))/(b-100)*n,h.style.opacity=x-Math.abs(m-y)/b*n,g.style.opacity=x-Math.abs(m-1.7*y)/b*n,w.style.opacity=x-Math.abs(m-2.4*y)/b*n,S.style.opacity=x-Math.abs(m-3.1*y)/b*n,q.style.opacity=-(x-(m-3.1*y)/b*n);var E=document.querySelector(".building1Layer"),C=document.querySelector(".building2Layer"),M=document.querySelector(".building3Layer"),k=document.querySelector(".building4Layer"),_=document.querySelector(".layerBuildingContainer"),Y=function(e,t){var n=t-o*(t/53)*m/(60*a);e.style.transform=n>=0?"translateY(".concat(n,"px)"):"translateY(0)"};Y(E,.6*o),Y(C,1.2*o),Y(M,1.8*o),Y(k,2.4*o);var A=100-m/40;_.style.top="".concat(A>=0?A:0,"vh");var I=1+(m-L)/3e3,N=document.querySelector(".header_menu_wrap")?document.querySelector(".header_menu_wrap").offsetHeight+10:0,O=m-(s-o)-N;if(L&&L<=m){var F=I<1?1:I>1.3?1.3:I;s-o<=m?(_.style.transform="translateY(-".concat(O,"px) scale(").concat(F,")"),p.style.transform="translateY(-".concat(O,"px)")):_.style.transform="scale(".concat(F,")")}else _.style.transform=null,p.style.transform=null},u=!0,d=function(t){var n=document.querySelector(".parallaxScroll").offsetHeight,r=n+o,i=a/o,s=o/a,l=window.pageYOffset,d=r/e;document.querySelector(".background").style.top="-".concat(l/415,"%");var m=document.querySelector(".scrollDown");l>0?m.classList.add("hide"):m.classList.remove("hide");var y=document.querySelector(".fadeContainer"),v=document.querySelector(".layer0"),p=document.querySelector(".layer1"),f=document.querySelector(".layer2"),h=document.querySelector(".layer3"),g=document.querySelector(".layer4"),w=document.querySelector(".layer5"),S=300*i,q=1*s;v.style.opacity=q-Math.abs(l-(S-100))/(S-100)*i,p.style.opacity=q-Math.abs(l-d)/S*i,f.style.opacity=q-Math.abs(l-2*d)/S*i,h.style.opacity=q-Math.abs(l-3*d)/S*i,g.style.opacity=q-Math.abs(l-4*d)/S*i,w.style.opacity=-(q-(l-4*d)/S*i);var L=document.querySelector(".building1Layer"),b=document.querySelector(".building2Layer"),x=document.querySelector(".building3Layer"),E=document.querySelector(".building4Layer"),k=document.querySelector(".layerBuildingContainer"),_=function(e,t){var n=t-1.2*(t/1e3*i)*l*i;e.style.transform=n>=0?"translateY(".concat(n,"px)"):"translateY(0)"};_(L,.2*o),_(b,.4*o),_(x,.6*o),_(E,.8*o);k.style.top="".concat(0,"vh");var Y=document.querySelector(".header_menu_wrap")?document.querySelector(".header_menu_wrap").offsetHeight+10:0,A=s>2?n/3.2*s:n/2.7*s,I=2+(l-A)/1e3,N=l-(n-o)-Y;if(A&&A<=l){var O=I<2?2:I>2.6?2.6:I;n-o<=l?(k.style.transform="translateY(-".concat(N,"px) scale(").concat(O,")"),y.style.transform="translateY(-".concat(N,"px)")):k.style.transform="scale(".concat(O,")")}else k.style.transform=null,y.style.transform=null;n<=l?u&&(c?(window.scrollTo(0,n),setTimeout(function(){u=!1},800)):(C(),setTimeout(function(){M()},800),u=!1)):u=!0},m=function(){o=window.innerHeight,a=window.innerWidth,n=a<768;document.querySelector(".parallaxScroll").offsetHeight;var e=document.querySelector(".youtubeContainer > img.youtubeFrame"),t=document.querySelector(".youtubeContainer > iframe"),r=n?window.visualViewport.width-20:.36*a,c=n?window.visualViewport.width-70:.31*a,i=n?(window.visualViewport.width-70)*(41/73):.31*a*(41/73);e.style.width="".concat(r,"px"),t.width="".concat(c,"px"),t.height="".concat(i,"px"),s()};window.addEventListener("scroll",s),window.addEventListener("resize",m),window.onload=function(){m()};var y=function(e){var t=e.humanItem,n=e.humans,o=e.index;n.forEach(function(e){e.classList.remove("active")}),"Netscape"==navigator.appName&&-1!=i.indexOf("trident")||-1!=i.indexOf("msie")?t.classList.add("active"):t.parentElement.classList.add("active"),document.querySelectorAll(".cardContainer > img").forEach(function(e,t){o===t?e.classList.add("active"):e.classList.remove("active")})};!function(){document.querySelector(".fingerToggle").addEventListener("click",function(e){document.querySelector(".fingerFrame").classList.toggle("open")});var e=document.querySelector(".peopleContainer").querySelectorAll(".humanContainer");e.forEach(function(t,n){return t.addEventListener("click",function(t){"Netscape"==navigator.appName&&-1!=i.indexOf("trident")||-1!=i.indexOf("msie")?y({humanItem:t.target.parentElement,humans:e,index:n}):y({humanItem:t.target,humans:e,index:n}),f=function(){}})});var t=document.querySelector(".alertMask");document.querySelectorAll(".alertMask .alert .closeEvent").forEach(function(e){e.addEventListener("click",function(e){t.style.display="none",M()})});var n=document.querySelector(".alertMask2");document.querySelectorAll(".alertMask2 .alert .closeEvent").forEach(function(e){e.addEventListener("click",function(e){n.style.display="none",M()})});var o=document.querySelector(".eventMask");document.querySelectorAll(".eventPopup .closeEvent").forEach(function(e){e.addEventListener("click",function(e){o.style.display="none",M()})}),document.querySelectorAll(".comingsoon").forEach(function(e){e.addEventListener("click",function(){t.style.display="flex",C()})})}();var v=function(e){var t=document.createElement("div");t.classList.add("star"),t.classList.add("star".concat(e%10)),t.classList.add("starRandom".concat(e)),document.querySelector(".background").append(t);var n=100*Math.random(),o=100*Math.random(),a=20*Math.random()+5;t.style.top="".concat(n,"vh"),t.style.left="".concat(o,"vw"),t.style.width="".concat(a,"px"),t.style.height="".concat(a,"px"),setTimeout(function(){return t.remove()},e%10*200+2e3)},p=function(e){var t=2e3*Math.random();setTimeout(function(){v(e)},t)};setInterval(function(){var e=Math.floor(100*Math.random());p(e)},50);var f=function(e){var t=document.querySelectorAll(".humanContainer");if("Netscape"==navigator.appName&&-1!=i.indexOf("trident")||-1!=i.indexOf("msie")){var n=t[e];y({humanItem:n,humans:t,index:e})}else{var o=t[e].firstChild;y({humanItem:o,humans:t,index:e})}var a=(e+1)%4;setTimeout(function(){return f(a)},3e3)};f(0);var h=function(e){return fetch(e).then(function(e){return e.json()})},g="https://event.navienhouse.com/assets/sweetdreamstore/211123/images/arrowRight.png",w="https://event.navienhouse.com/assets/sweetdreamstore/211123/images/frame.png",S=function(){h("https://event.navienhouse.com/sweetdreamstore/index.php/API/getVideo").then(function(e){var t=null==e?void 0:e.data,n=null==t?void 0:t.map(function(e,t){var n='\n                <a class="storyItemContainer">\n                    <div class="alignCenter">\n                        <img src="'.concat(null==e?void 0:e.thumbnail,'" />\n                        <div class="fontContainer">\n                        <p class="storyTitleFont">').concat(null==e?void 0:e.title,'</p>\n                        <p class="storyContentFont">').concat(null==e?void 0:e.description,'</p>\n                        </div>\n                    </div>\n                    <div class="alignCenter">\n                        <div class="arrowRight">\n                        <img src="').concat(g,'" />\n                        </div>\n                    </div>\n                </a>\n            ');return 0===t&&q(e),n}),o=document.querySelector(".storyListContainer");o.innerHTML=n.join(""),o.querySelectorAll(".storyItemContainer").forEach(function(e,n){return e.addEventListener("click",function(){var e=t[n];q(e)})})})},q=function(e){var t=document.querySelector(".youtubeContainer"),n='\n    <img src="'.concat(w,'" class="imgObjectFitContain youtubeFrame" />\n    <iframe\n      frameborder="0"\n      src="').concat(null==e?void 0:e.video_url,'"\n      class="positionAbsolute storyYoutube"\n    ></iframe>\n    <img src="').concat(null==e?void 0:e.episode_img,'" class="imgObjectFitContain flag youtubeBottomImage" />\n    ');t.innerHTML=n,m()};S();var L="https://event.navienhouse.com/assets/sweetdreamstore/211123/images/goodsFrame.png",b="https://event.navienhouse.com/assets/sweetdreamstore/211123/images/btn_arrow.png",x="https://event.navienhouse.com/assets/sweetdreamstore/211123/images/btn_arrow_gray.png",E=function(){h("https://event.navienhouse.com/sweetdreamstore/index.php/API/getProduct").then(function(e){var t=null==e?void 0:e.data,n=null==t?void 0:t.map(function(e,t){return'\n                    <a class="goodsItem '.concat("Y"!==(null==e?void 0:e.use_yn)?"comingsoon":"",'" ').concat("Y"===(null==e?void 0:e.use_yn)?'href="'.concat(e.link,'"'):"",' >\n                        <div class="goodsFrame">\n                          <img src="').concat(null==e?void 0:e.thumbnail,'" class="goods" alt="" />\n                          <img src="').concat(L,'" alt="" />\n                        </div>\n                        <p class="goodsDescription">').concat(null==e?void 0:e.description,'</p>\n                        <div class="center glowingContainer">\n                          ').concat("Y"===(null==e?void 0:e.effect)?'<div class="glowingDummy"></div>':"",'\n                          <div class="flag2 center">\n                            <span class="flagFont">').concat(null==e?void 0:e.button,' <img src="').concat("Y"===(null==e?void 0:e.use_yn)?b:x,'"/>\n                            </span>\n                          </div>\n                        </div>\n                    </a>\n              ')}),o=document.querySelector(".goodsContainer");o.innerHTML=n.join(""),o.querySelectorAll(".goodsItem").forEach(function(e,t){return e.addEventListener("click",function(){goodsItemClick(t)})}),document.querySelectorAll(".comingsoon").forEach(function(e){e.addEventListener("click",function(){document.querySelector(".alertMask").style.display="flex",C()})})})};E();var C=function(){document.body.classList.add("lock")},M=function(){document.body.classList.remove("lock")};window.console.log=function(){};
},{}]},{},["H99C"], null)
//# sourceMappingURL=/src.1c8a8c2e.js.map