let body = document.getElementsByTagName("body")[0];
let earth = document.createElement("div");
earth.id = "earth";
if(navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i)){
   earth.style.display = none;
}
earth.style.position = "fixed";
earth.style.bottom = "-35px";
earth.style.left = "0";
earth.style.height = "270px";
earth.style.width = "270px";
let earthScript = document.createElement("script");
earthScript.type = "text/javascript";
earthScript.src = "//rf.revolvermaps.com/0/0/8.js?i=5h1hb9gzci4&amp;m=1&amp;c=ff0000&amp;cr1=ffffff&amp;f=arial&amp;l=33&amp;lx=-160&amp;ly=-280&amp;rs=0&amp";
earthScript.setAttribute("async","async");
earth.appendChild(earthScript);
body.appendChild(earth);