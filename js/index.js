!function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){"use strict";var d=a("../modules/dl-buttons.js"),e=a("../modules/latest-version.js");e.getLatestVersion(d.doButtons);var f,g,h,i,j,k=document.querySelector("#c"),l=k.getContext("2d"),m=!0,n=!1,o=32,p=Date.now(),q=1e3/o,r=($(window).width(),window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||setTimeout,{speed:0,count:40,images:["/img/flowers/flower-1.png","/img/flowers/flower-2.png","/img/flowers/flower-3.png","/img/flowers/flower-4.png","/img/flowers/flower-5.png","/img/flowers/flower-6.png","/img/flowers/flower-7.png","/img/flowers/flower-8.png","/img/flowers/flower-9.png","/img/flowers/flower-10.png"],size:{min:16,max:64}}),s=function(){var a=this,b=function(a,b){return Math.floor(Math.random()*(b-a+1))+a},c=function(a,b){return Math.random()*(a-b)+b},d=[],e=function(){var a,d,e,f,g,h,i,j,m,n,o,p,q=new Image,s=!1,t=function(){f=b(r.size.min,r.size.max),a=b(f,k.width),d=-f,e=c(1,2),h=0,i=b(1,2)/100,g=c(-1.5,1.5),j=0,n=b(0,1)?-1:1,m=.5+1*Math.random(),o=1,p=b(1,25)<=10?-c(.01,.05):0};q.onload=function(){s=!0,t(),d=b(-f,k.height)},q.src=r.images[b(0,r.images.length-1)],this.draw=function(){s&&(d+=e,h+=i,a+=Math.cos(h),a+=g,j+=n*m,j<0?j=360:j>360&&(j=0),o+=p,(o<=0||o>=1)&&(p*=-1),l.save(),l.translate(a,d),l.translate(f/2,f/2),l.rotate(j*Math.PI/180),l.scale(o,1),l.drawImage(q,-(f/2),-(f/2),f,f),l.restore(),d>=k.height+f&&t())}};this.updateCanvasSize=function(){k.width=k.parentNode.offsetWidth,k.height=k.parentNode.offsetHeight,f=k.width/2,g=k.height/2},this.start=function(){if(m){m=!1;for(var a=0;a<r.count;a++)d.push(new e);this.draw()}else n&&(n=!1,this.draw())},this.draw=function(){var a=this;if(setTimeout(function(){j=window.requestAnimationFrame(a.draw.bind(a))},30),h=Date.now(),i=h-p,i>q){p=h-i%q,l.clearRect(0,0,k.width,k.height);for(var b=0;b<d.length;b++)d[b].draw()}},this.updateCanvasSize(),window.addEventListener("resize",function(){return a.updateCanvasSize()})},t=new s;t.start()},{"../modules/dl-buttons.js":2,"../modules/latest-version.js":3}],2:[function(a,b,c){"use strict";function d(a){var b,c,d,h=f.detectOS(),i=!1;if(h){switch(h){case"Windows32":b="GitKraken v4.0 - For (32-bit) Windows 7+",c="windows",d="/download/windows",i=!0;break;case"Windows64":b="GitKraken v4.0 - For (64-bit) Windows 7+",c="windows",d="/download/windows64",i=!0;break;case"MacOS":b="GitKraken v4.0 - For Mac OS 10.9+",c="apple",d="/download/mac",i=!0;break;case"Linux":b="GitKraken v4.0 - For Ubuntu LTS 14.04+, Debian 8+",c="linux",i=!0;break;default:b="GitKraken v4.0 - Windows / Mac / Linux",d="/download"}$(g).prepend('<a class="button os button--basic"><span class="maintext"><span class="os-icon"></span>Free Download</span></a><div class="secondary-cta"><a class="all-downloads" href="/download">Current version & all platforms</a></div>');var j=$(".button.os");$(j).attr("class");"Linux"==h?($(j).addClass("multi-trigger"),$(j).attr("href",null),$(j).on("click",function(){e()})):($(j).attr("href",d),$(j).addClass("direct-dl-link").attr("data-os",h));var k=$(".button.os .os-icon");void 0==c?$(k).html(""):$(k).html('<i class="fa mrs os fa-'+c+'"></i>')}i===!1?$(".all-downloads").remove():$(g).addClass("os-context")}function e(a){var b="/download/linux-deb",c="/download/linux-gzip",d="/download/linux-deb-2",e="/download/linux-gzip-2",f=document.createElement("a"),h=document.createElement("a"),i=document.createElement("a"),j=document.createElement("a");$(f).attr("class","button--basic button multi direct-dl-link mls mrs mts"),$(h).attr("class","button--basic button multi direct-dl-link mls mrs mts"),$(i).attr("class","button--basic button multi direct-dl-link mls mrs mts"),$(j).attr("class","button--basic button multi direct-dl-link mls mrs mts"),$(f).attr("href",b),$(h).attr("href",c),$(i).attr("href",d),$(j).attr("href",e),$(f).attr("data-os","Linux Deb").html('<span class="maintext">Ubuntu 14.04 LTS (.deb)</span>'),$(h).attr("data-os","Linux Gzip").html('<span class="maintext">Ubuntu 14.04 LTS (tar.gz)</span>'),$(i).attr("data-os","Linux Deb").html('<span class="maintext">Ubuntu 18.04 LTS (.deb)</span>'),$(j).attr("data-os","Linux Gzip").html('<span class="maintext">Ubuntu 18.04 LTS (tar.gz)</span>'),$(g).prepend(j).prepend(i).prepend(h).prepend(f),$(".button.os").remove(),a&&a()}var f=a("./os-detect.js"),g=$(".dl-container");$(".dl-container .button.all");b.exports.doButtons=d},{"./os-detect.js":4}],3:[function(a,b,c){"use strict";!function(a,c){function d(a){var b={date:"Friday, October 12, 2018",name:"4.0.6"};a&&a(b)}b.exports.getLatestVersion=d}(window,document)},{}],4:[function(a,b,c){"use strict";var d=a("../utils.js");b.exports.detectOS=function(){var a=[{s:"Windows32",r:["Windows","Win32"]},{s:"Windows64",r:["WOW64","Win64"]},{s:"MacOS",r:["MacPPC","MacIntel","Mac_PowerPC","Macintosh"]},{s:"Linux",r:["X11","Linux"]}],b=navigator.userAgent,c="none";for(var e in a){var f=a[e];for(var g in f.r){var h=f.r[g];if(b.indexOf(h)!=-1){c=f.s;break}}}var i=d.getQueryString();return i.os?i.os:c}},{"../utils.js":5}],5:[function(a,b,c){"use strict";!function(a,c){function d(a,b){var d=c.createElement("script");d.src=a+"?v=20181024",d.async=!b,c.body.appendChild(d)}function e(a){return location.host.indexOf(".com")==-1?"https://devweb.axosoft.com"+a:"featuredev.axosoft.com"==location.hostname?"https://devweb.axosoft.com"+a:"https://"+location.hostname+a}function f(a,b){var c=a.getAttribute("class");if(c&&c.length>0){var d=c.split(" ");d.indexOf(b)==-1&&(d.push(b),c=d.join(" "),a.setAttribute("class",c))}else a.setAttribute("class",b);return a}function g(a,b){var c=a.getAttribute("class");if(c&&c.length>0){var d=c.split(" "),e=d.indexOf(b);e>-1&&(d.splice(e,1),c=d.join(" "),a.setAttribute("class",c))}return a}function h(a,b){var c=a.getAttribute("class");if(c&&c.length>0){var d=c.split(" "),e=d.indexOf(b);a=e>-1?g(a,b):f(a,b)}else a.setAttribute("class",b);return a}function i(){for(var b,c=[],d=a.location.href.slice(a.location.href.indexOf("?")+1).split("&"),e=0;e<d.length;e++)b=d[e].split("="),c.push(b[0]),c[b[0]]=b[1];return c}function j(a){for(var b=[],c=0;c<a.sourceFields.length;c++)b.push($("#"+a.sourceFields[c]).val());var d=b.join(a.glue),e=a.newField,f={name:e,value:d};return f}function k(b,c){for(var d=c.name,e=!1,f=0;f<b.length;f++)b[f].name.indexOf(d)!==-1&&(e=!0,b[f].value.indexOf(c.find)!==-1?b[f].value=c.replace:(a.console.log("will replace with: "+c.elseReplace),b[f].value=c.elseReplace));if(e===!1){var g={name:c.name,value:c.elseReplace};b.push(g)}return b}function l(a,b){var c=b-a.toString().length+1;return Array(+(c>0&&c)).join("0")+a}function m(){var a=c.URL.split("?")[1];if(void 0!=a){var b={};if(a.indexOf("&")!==-1)for(var d=a.split("&"),e=0;e<d.length;e++){var f=d[e].split("=");b[f[0]]=f[1]}else{var f=a.split("=");b[f[0]]=f[1]}return b}return!1}function n(a){for(var b=a+"=",d=c.cookie.split(";"),e=0;e<d.length;e++){for(var f=d[e];" "==f.charAt(0);)f=f.substring(1);if(0==f.indexOf(b))return f.substring(b.length,f.length)}return""}function o(){var a,b=c.createElement("fakeelement"),d={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"};for(a in d)if(void 0!==b.style[a])return d[a]}function p(b){a.location.hash&&(a.scrollTo(0,0),setTimeout(function(){a.scrollTo(0,0)},1),setTimeout(function(){if(null!=$(a.location.hash).offset()){var c=$(a.location.hash).offset().top-b;$(a).stop(!0).scrollTo(c,{duration:800,interrupt:!1})}},100))}function q(b){$('a[href^="#"]').on("click",function(c){c.preventDefault();var d=$(this.hash).offset().top-b;$(a).stop(!0).scrollTo(d,{duration:800,interrupt:!1})})}function r(){var b=arguments.length<=0||void 0===arguments[0]?50:arguments[0],c=$(a).height()/(100/b),d=$(a).height()-c,e=$(a).scrollTop(),f=e+c,g=e+d,h={vpPosInnerTop:f,vpPosInnerBtm:g};return h}function s(a){var b=arguments.length<=1||void 0===arguments[1]?50:arguments[1],c=$(a);if(0==c.length)return!1;var d=c.offset().top,e=d+$(c).height(),f=r(b);return f.vpPosInnerTop<e&&f.vpPosInnerBtm>d}b.exports.injectScript=d,b.exports.endPoint=e,b.exports.redirectToPathname=function(b){a.location.pathname=b},b.exports.addClass=f,b.exports.removeClass=g,b.exports.toggleClass=h,b.exports.getUrlVars=i,b.exports.joinFields=j,b.exports.modifyFormArray=k,b.exports.zeroPad=l,b.exports.getQueryString=m,b.exports.getCookie=n,b.exports.whichTransitionEvent=o,b.exports.pageLoadScrollOffset=p,b.exports.scrollOffset=q,b.exports.getViewportPosition=r,b.exports.isIdInView=s}(window,document)},{}]},{},[1]);