parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"H99C":[function(require,module,exports) {
var e=7,t=16e3,n=t+window.innerHeight,r=(1/(e+1)).toFixed(2),o=null,a=function(){var a=(window.pageYOffset/n).toFixed(2),c=parseInt(a/r);o!==c&&(o=c);var i=window.pageYOffset,l=n/e;document.querySelector(".background").style.top="-".concat(i/415,"%");var s=document.querySelector(".layer0"),u=document.querySelector(".layer1"),d=document.querySelector(".layer2"),y=document.querySelector(".layer3"),m=document.querySelector(".layer4"),f=document.querySelector(".layer5");s.style.opacity=2.2-Math.abs(i-100)/100,u.style.opacity=2.2-Math.abs(i-l)/200,d.style.opacity=2.2-Math.abs(i-2*l)/200,y.style.opacity=2.2-Math.abs(i-3*l)/200,m.style.opacity=2.2-Math.abs(i-4*l)/200,f.style.opacity=-(2.2-(i-4.5*l)/200);var g=document.querySelector(".building1Layer"),w=document.querySelector(".building2Layer"),v=document.querySelector(".building3Layer"),p=document.querySelector(".building4Layer"),q=document.querySelector(".layerBuildingContainer");console.log("positionY",i,o);var S=function(e,t,n){window.innerHeight,window.innerHeight;var r=n-window.innerHeight*(n/100)*i/(60*window.innerWidth);e.style.transform=r>=0?"translateY(".concat(r,"px)"):"translateY(0)"};S(g,0,700),S(w,0,1e3),S(v,0,1300),S(p,0,1600);var h=100-i/40;q.style.top="".concat(h>=0?h:0,"vh");var L=t-2500,b=i-L,E=i-(t-window.innerHeight),Y=1+b/600;L<=i?t-window.innerHeight<=i?(q.style.transform="translateY(-".concat(E,"px) scale(").concat(Y>1?Y:1,")"),f.style.transform="translateY(-".concat(E,"px)")):q.style.transform="scale(".concat(Y>1?Y:1,")"):(q.style.transform=null,f.style.transform=null)};window.addEventListener("scroll",a),window.addEventListener("resize",a),function(){document.querySelector(".fingerToggle").addEventListener("click",function(e){document.querySelector(".fingerFrame").classList.toggle("open")});var e=document.querySelector(".peopleContainer").querySelectorAll("a");e.forEach(function(t,n){return t.addEventListener("click",function(t){e.forEach(function(e){e.classList.remove("active")}),t.target.parentElement.classList.add("active"),document.querySelectorAll(".cardContainer > img").forEach(function(e,t){n===t?e.classList.add("active"):e.classList.remove("active")})})})}();
},{}]},{},["H99C"], null)
//# sourceMappingURL=/src.b88c3148.js.map