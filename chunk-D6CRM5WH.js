function w(e){let t={};e=m(e),t.mainGroup=e.substring(0,4);let r=e.match(new RegExp("(?<=H)([^A-Z]*)"));r&&(t.H={title:"Header",string:r[0],obj:B(r[0]??"")});let s=e.match(new RegExp("(?<=S)([^A-Z]*)"));s&&(t.S={title:"Bar",string:s[0],obj:B(s[0]??"")});let o=e.match(new RegExp("(?<=A)([^A-Z]*)"));o&&(t.A={title:"Spacer",string:o[0],obj:B(o[0]??"")});let a=e.match(new RegExp("(?<=G)([^A-Z]*)"));if(a){let h=a[0]??"",l=b(h),f=t.A?.obj?.s??0,u=$(l,f);t.G={title:"Geometry",string:h,array:l,svgPath:u.path,viewBox:u.viewBox}}let n=e.match(new RegExp("(?<=C)([^A-Z]*)"));return n&&(t.C={title:"Checksum",string:n[0]}),t}function m(e){let t="";for(let r of e)r==="I"&&(t+="l"),r!==" "&&(t+=r);return t}function $(e,t=50){let r=10,s="M0,0",o=0,a=0,n=0,h=0,l=0,f=0,u=0,p=0,d=(c,i)=>{c<l&&(l=c),i<f&&(f=i),c>u&&(u=c),i>p&&(p=i)};e.forEach(c=>{if(c.field==="l"){if(n!==h&&k(n,h)){let i=t/2;o=o+Math.round(i*Math.cos((n-90)*Math.PI/180)),a=a+Math.round(t*Math.sin((n-90)*Math.PI/180)),s+=`A${i},${i},0,0,1,${o},${a}`,r+=i}o+=Math.round(c.value*Math.cos(n*Math.PI/180)),a-=Math.round(c.value*Math.sin(n*Math.PI/180)),s+=`L${o},${a}`,d(o,a)}else c.field==="w"&&(h=n,n+=c.value,n=n%360)});let A=l-r,M=f-r,v=u-l+2*r,x=p-f+2*r,g=`${A} ${M} ${v} ${x}`;return{path:s,viewBox:g}}function B(e){let t={};return e.split("@").forEach(s=>{let o=s.substring(0,1);o!==""&&(t[o]=s.substring(1))}),t}function b(e){let t=[];return e.split("@").forEach(s=>{let o=s.substring(0,1);o!==""&&t.push({field:o,value:parseFloat(s.substring(1))})}),t}function k(e,t){return e===t||Math.abs(e-t)===180}export{w as a};
