import{b as F,c as I,e as P,g as M,h as D,i as N,j as S}from"./chunk-EP47IVYA.js";import{Db as A,Ga as u,Wb as R,Y as d,Ya as g,_ as p,_a as f,ab as y,cb as v,cc as b,db as C,ea as h,ia as m,la as c,oc as w}from"./chunk-GSKREWNA.js";var x=[{path:"",pathMatch:"full",redirectTo:"home"},{path:"home",loadComponent:()=>import("./chunk-FTOKWDTG.js").then(n=>n.HomeComponent)},{path:"as-png/:absCode",loadComponent:()=>import("./chunk-7GJAZL4W.js").then(n=>n.AsPNGComponent)},{path:"as-svg/:absCode",loadComponent:()=>import("./chunk-7GLBKQDM.js").then(n=>n.AsSVGComponent)}];var B="@",V=(()=>{let e=class e{constructor(o,r,i,s,a){this.doc=o,this.delegate=r,this.zone=i,this.animationType=s,this.moduleImpl=a,this._rendererFactoryPromise=null,this.scheduler=h(f,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-7FSLXMMW.js").then(r=>r)).catch(r=>{throw new d(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:i})=>{this._engine=r(this.animationType,this.doc);let s=new i(this.delegate,this._engine,this.zone);return this.delegate=s,s})}createRenderer(o,r){let i=this.delegate.createRenderer(o,r);if(i.\u0275type===0)return i;typeof i.throwOnSyntheticProps=="boolean"&&(i.throwOnSyntheticProps=!1);let s=new l(i);return r?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(a=>{let _=a.createRenderer(o,r);s.use(_),this.scheduler?.notify(9)}).catch(a=>{s.use(i)}),s}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(r){g()},e.\u0275prov=p({token:e,factory:e.\u0275fac});let n=e;return n})(),l=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let t of this.replay)t(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,t){this.delegate.appendChild(e,t)}insertBefore(e,t,o,r){this.delegate.insertBefore(e,t,o,r)}removeChild(e,t,o){this.delegate.removeChild(e,t,o)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,o,r){this.delegate.setAttribute(e,t,o,r)}removeAttribute(e,t,o){this.delegate.removeAttribute(e,t,o)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,o,r){this.delegate.setStyle(e,t,o,r)}removeStyle(e,t,o){this.delegate.removeStyle(e,t,o)}setProperty(e,t,o){this.shouldReplay(t)&&this.replay.push(r=>r.setProperty(e,t,o)),this.delegate.setProperty(e,t,o)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,o){return this.shouldReplay(t)&&this.replay.push(r=>r.listen(e,t,o)),this.delegate.listen(e,t,o)}shouldReplay(e){return this.replay!==null&&e.startsWith(B)}};function E(n="animations"){return v("NgAsyncAnimations"),c([{provide:y,useFactory:(e,t,o)=>new V(e,t,o,n),deps:[w,F,C]},{provide:u,useValue:n==="noop"?"NoopAnimations":"BrowserAnimations"}])}var O={providers:[b({eventCoalescing:!0}),M(x,N(),D()),E()]};var T=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=m({type:e,selectors:[["app-root"]],standalone:!0,features:[R],decls:1,vars:0,template:function(r,i){r&1&&A(0,"router-outlet")},dependencies:[S,P]});let n=e;return n})();I(T,O).catch(n=>console.error(n));
