"use strict";!function(){function t(){e=window.innerWidth*d,o=window.innerHeight*d,r=e*o,i.length=Math.sqrt(r)/25|0,h.width=e,h.height=o;var t,a;for(t=0,a=i.length;a>t;t++)i[t]||(i[t]={x:Math.random()*e,y:Math.random()*o,vx:1*Math.random()-.5,vy:1*Math.random()-.5,m:2*Math.random()+1,pos:Math.random()>=.5})}function a(t){var a={x:t.pageX,y:t.pageY},n=i[Math.floor(Math.random()*(i.length-1))];n.x=a.x,n.y=a.y,n.vx=0,n.vy=0,n.m=2*Math.random()+1}function n(){var t,a,m,r,d,h,v,s,l,M;for(requestAnimationFrame(n),y.clearRect(0,0,e,o),h=0,M=i.length-1;M>h;h++)for(v=h+1;M+1>v;v++){if(s=i[h],l=i[v],r=l.x-s.x,d=l.y-s.y,t=Math.sqrt(Math.pow(r,2)+Math.pow(d,2)),t<=s.m/2+l.m/2){if(s.m<=l.m){l.vx=l.m*l.vx/(s.m+l.m)+s.m*s.vx/(s.m+l.m),l.vy=l.m*l.vy/(s.m+l.m)+s.m*s.vy/(s.m+l.m),s.x=Math.random()*e,s.y=Math.random()*o,s.vx=1*Math.random()-.5,s.vy=1*Math.random()-.5,s.m=2*Math.random()+1;continue}if(l.m<=s.m){s.vx=s.m*s.vx/(s.m+l.m)+l.m*l.vx/(s.m+l.m),s.vy=s.m*s.vy/(s.m+l.m)+l.m*l.vy/(s.m+l.m),l.x=Math.random()*e,l.y=Math.random()*o,l.vx=1*Math.random()-.5,l.vy=1*Math.random()-.5,l.m=2*Math.random()+1;continue}}a={x:r/t,y:d/t},m=3*(s.m*l.m)/Math.pow(t,2);var c=100*m;if(!(.05>c)){var f=s.pos===l.pos?-1:1;y.beginPath(),1===f?y.strokeStyle="rgba(191,63,31,"+(1>c?c:1)+")":y.strokeStyle="rgba(31,63,191,"+(1>c?c:1)+")",y.moveTo(s.x,s.y),y.lineTo(l.x,l.y),y.stroke(),s.vx+=f*m*a.x/s.m,s.vy+=f*m*a.y/s.m,l.vx-=f*m*a.x/l.m,l.vy-=f*m*a.y/l.m}}for(x?y.fillStyle="#ffffff":y.fillStyle="#000000",h=0,M=i.length;M>h;h++)y.beginPath(),y.arc(i[h].x,i[h].y,i[h].m,0,2*Math.PI),y.fill(),i[h].x+=i[h].vx,i[h].y+=i[h].vy,(i[h].x>e+25||i[h].x<-25||i[h].y>o+25||i[h].y<-25)&&(i[h].x=Math.random()*e,i[h].y=Math.random()*o,i[h].vx=1*Math.random()-.5,i[h].vy=1*Math.random()-.5)}function m(t){t.stopPropagation(),x=!x,x?document.body.classList.add("nightmode"):document.body.classList.remove("nightmode")}var e,o,r,d=window.devicePixelRatio,i=new Array(Math.sqrt(r)/10|0),h=document.createElement("canvas"),y=h.getContext("2d"),v=document.getElementById("container"),s=document.getElementsByClassName("moon")[0],x=!1;1!==d&&(h.style.transform="scale("+1/d+")",h.style.transformOrigin="0 0"),h.id="nodegarden",v.appendChild(h),t(),n(),window.addEventListener("resize",t),v.addEventListener("click",a),s.addEventListener("click",m);var l=new Date;(l.getHours()>18||l.getHours()<6)&&switchNightMode()}();