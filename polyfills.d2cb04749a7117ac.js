"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[461],{4050:(ee,J,Ee)=>{Ee(6876),Ee(6935)},6876:()=>{window.__Zone_disable_customElements=!0},6935:()=>{const ee=globalThis;function J(t){return(ee.__Zone_symbol_prefix||"__zone_symbol__")+t}const ge=Object.getOwnPropertyDescriptor,Pe=Object.defineProperty,De=Object.getPrototypeOf,_t=Object.create,Et=Array.prototype.slice,Me="addEventListener",Ze="removeEventListener",Ae=J(Me),je=J(Ze),ae="true",le="false",we=J("");function He(t,r){return Zone.current.wrap(t,r)}function xe(t,r,i,n,s){return Zone.current.scheduleMacroTask(t,r,i,n,s)}const H=J,Oe=typeof window<"u",me=Oe?window:void 0,K=Oe&&me||globalThis,Tt="removeAttribute";function Ve(t,r){for(let i=t.length-1;i>=0;i--)"function"==typeof t[i]&&(t[i]=He(t[i],r+"_"+i));return t}function We(t){return!t||!1!==t.writable&&!("function"==typeof t.get&&typeof t.set>"u")}const Xe=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,Se=!("nw"in K)&&typeof K.process<"u"&&"[object process]"===K.process.toString(),Be=!Se&&!Xe&&!(!Oe||!me.HTMLElement),qe=typeof K.process<"u"&&"[object process]"===K.process.toString()&&!Xe&&!(!Oe||!me.HTMLElement),Ne={},mt=H("enable_beforeunload"),Ye=function(t){if(!(t=t||K.event))return;let r=Ne[t.type];r||(r=Ne[t.type]=H("ON_PROPERTY"+t.type));const i=this||t.target||K,n=i[r];let s;return Be&&i===me&&"error"===t.type?(s=n&&n.call(this,t.message,t.filename,t.lineno,t.colno,t.error),!0===s&&t.preventDefault()):(s=n&&n.apply(this,arguments),"beforeunload"===t.type&&K[mt]&&"string"==typeof s?t.returnValue=s:null!=s&&!s&&t.preventDefault()),s};function $e(t,r,i){let n=ge(t,r);if(!n&&i&&ge(i,r)&&(n={enumerable:!0,configurable:!0}),!n||!n.configurable)return;const s=H("on"+r+"patched");if(t.hasOwnProperty(s)&&t[s])return;delete n.writable,delete n.value;const u=n.get,g=n.set,m=r.slice(2);let k=Ne[m];k||(k=Ne[m]=H("ON_PROPERTY"+m)),n.set=function(C){let E=this;!E&&t===K&&(E=K),E&&("function"==typeof E[k]&&E.removeEventListener(m,Ye),g&&g.call(E,null),E[k]=C,"function"==typeof C&&E.addEventListener(m,Ye,!1))},n.get=function(){let C=this;if(!C&&t===K&&(C=K),!C)return null;const E=C[k];if(E)return E;if(u){let w=u.call(this);if(w)return n.set.call(this,w),"function"==typeof C[Tt]&&C.removeAttribute(r),w}return null},Pe(t,r,n),t[s]=!0}function Ke(t,r,i){if(r)for(let n=0;n<r.length;n++)$e(t,"on"+r[n],i);else{const n=[];for(const s in t)"on"==s.slice(0,2)&&n.push(s);for(let s=0;s<n.length;s++)$e(t,n[s],i)}}const oe=H("originalInstance");function Re(t){const r=K[t];if(!r)return;K[H(t)]=r,K[t]=function(){const s=Ve(arguments,t);switch(s.length){case 0:this[oe]=new r;break;case 1:this[oe]=new r(s[0]);break;case 2:this[oe]=new r(s[0],s[1]);break;case 3:this[oe]=new r(s[0],s[1],s[2]);break;case 4:this[oe]=new r(s[0],s[1],s[2],s[3]);break;default:throw new Error("Arg list too long.")}},fe(K[t],r);const i=new r(function(){});let n;for(n in i)"XMLHttpRequest"===t&&"responseBlob"===n||function(s){"function"==typeof i[s]?K[t].prototype[s]=function(){return this[oe][s].apply(this[oe],arguments)}:Pe(K[t].prototype,s,{set:function(u){"function"==typeof u?(this[oe][s]=He(u,t+"."+s),fe(this[oe][s],u)):this[oe][s]=u},get:function(){return this[oe][s]}})}(n);for(n in r)"prototype"!==n&&r.hasOwnProperty(n)&&(K[t][n]=r[n])}function ue(t,r,i){let n=t;for(;n&&!n.hasOwnProperty(r);)n=De(n);!n&&t[r]&&(n=t);const s=H(r);let u=null;if(n&&(!(u=n[s])||!n.hasOwnProperty(s))&&(u=n[s]=n[r],We(n&&ge(n,r)))){const m=i(u,s,r);n[r]=function(){return m(this,arguments)},fe(n[r],u)}return u}function pt(t,r,i){let n=null;function s(u){const g=u.data;return g.args[g.cbIdx]=function(){u.invoke.apply(this,arguments)},n.apply(g.target,g.args),u}n=ue(t,r,u=>function(g,m){const k=i(g,m);return k.cbIdx>=0&&"function"==typeof m[k.cbIdx]?xe(k.name,m[k.cbIdx],k,s):u.apply(g,m)})}function fe(t,r){t[H("OriginalDelegate")]=r}let Je=!1,Ge=!1;function kt(){if(Je)return Ge;Je=!0;try{const t=me.navigator.userAgent;(-1!==t.indexOf("MSIE ")||-1!==t.indexOf("Trident/")||-1!==t.indexOf("Edge/"))&&(Ge=!0)}catch{}return Ge}function Qe(t){return"function"==typeof t}function et(t){return"number"==typeof t}let pe=!1;if(typeof window<"u")try{const t=Object.defineProperty({},"passive",{get:function(){pe=!0}});window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch{pe=!1}const vt={useG:!0},ne={},tt={},nt=new RegExp("^"+we+"(\\w+)(true|false)$"),rt=H("propagationStopped");function ot(t,r){const i=(r?r(t):t)+le,n=(r?r(t):t)+ae,s=we+i,u=we+n;ne[t]={},ne[t][le]=s,ne[t][ae]=u}function bt(t,r,i,n){const s=n&&n.add||Me,u=n&&n.rm||Ze,g=n&&n.listeners||"eventListeners",m=n&&n.rmAll||"removeAllListeners",k=H(s),C="."+s+":",E="prependListener",w="."+E+":",j=function(v,h,V){if(v.isRemoved)return;const G=v.callback;let W;"object"==typeof G&&G.handleEvent&&(v.callback=p=>G.handleEvent(p),v.originalDelegate=G);try{v.invoke(v,h,[V])}catch(p){W=p}const F=v.options;return F&&"object"==typeof F&&F.once&&h[u].call(h,V.type,v.originalDelegate?v.originalDelegate:v.callback,F),W};function x(v,h,V){if(!(h=h||t.event))return;const G=v||h.target||t,W=G[ne[h.type][V?ae:le]];if(W){const F=[];if(1===W.length){const p=j(W[0],G,h);p&&F.push(p)}else{const p=W.slice();for(let q=0;q<p.length&&(!h||!0!==h[rt]);q++){const I=j(p[q],G,h);I&&F.push(I)}}if(1===F.length)throw F[0];for(let p=0;p<F.length;p++){const q=F[p];r.nativeScheduleMicroTask(()=>{throw q})}}}const X=function(v){return x(this,v,!1)},Y=function(v){return x(this,v,!0)};function te(v,h){if(!v)return!1;let V=!0;h&&void 0!==h.useG&&(V=h.useG);const G=h&&h.vh;let W=!0;h&&void 0!==h.chkDup&&(W=h.chkDup);let F=!1;h&&void 0!==h.rt&&(F=h.rt);let p=v;for(;p&&!p.hasOwnProperty(s);)p=De(p);if(!p&&v[s]&&(p=v),!p||p[k])return!1;const q=h&&h.eventNameToString,I={},R=p[k]=p[s],b=p[H(u)]=p[u],O=p[H(g)]=p[g],Q=p[H(m)]=p[m];let $;h&&h.prepend&&($=p[H(h.prepend)]=p[h.prepend]);const N=V?function(o){if(!I.isExisting)return R.call(I.target,I.eventName,I.capture?Y:X,I.options)}:function(o){return R.call(I.target,I.eventName,o.invoke,I.options)},D=V?function(o){if(!o.isRemoved){const f=ne[o.eventName];let y;f&&(y=f[o.capture?ae:le]);const P=y&&o.target[y];if(P)for(let T=0;T<P.length;T++)if(P[T]===o){P.splice(T,1),o.isRemoved=!0,o.removeAbortListener&&(o.removeAbortListener(),o.removeAbortListener=null),0===P.length&&(o.allRemoved=!0,o.target[y]=null);break}}if(o.allRemoved)return b.call(o.target,o.eventName,o.capture?Y:X,o.options)}:function(o){return b.call(o.target,o.eventName,o.invoke,o.options)},he=h&&h.diff?h.diff:function(o,f){const y=typeof f;return"function"===y&&o.callback===f||"object"===y&&o.originalDelegate===f},se=Zone[H("UNPATCHED_EVENTS")],ke=t[H("PASSIVE_EVENTS")],a=function(o,f,y,P,T=!1,L=!1){return function(){const M=this||t;let Z=arguments[0];h&&h.transferEventName&&(Z=h.transferEventName(Z));let U=arguments[1];if(!U)return o.apply(this,arguments);if(Se&&"uncaughtException"===Z)return o.apply(this,arguments);let z=!1;if("function"!=typeof U){if(!U.handleEvent)return o.apply(this,arguments);z=!0}if(G&&!G(o,U,M,arguments))return;const de=pe&&!!ke&&-1!==ke.indexOf(Z),re=function l(o){if("object"==typeof o&&null!==o){const f={...o};return o.signal&&(f.signal=o.signal),f}return o}(function A(o,f){return!pe&&"object"==typeof o&&o?!!o.capture:pe&&f?"boolean"==typeof o?{capture:o,passive:!0}:o?"object"==typeof o&&!1!==o.passive?{...o,passive:!0}:o:{passive:!0}:o}(arguments[2],de)),_e=null==re?void 0:re.signal;if(null!=_e&&_e.aborted)return;if(se)for(let ce=0;ce<se.length;ce++)if(Z===se[ce])return de?o.call(M,Z,U,re):o.apply(this,arguments);const Ue=!!re&&("boolean"==typeof re||re.capture),lt=!(!re||"object"!=typeof re)&&re.once,At=Zone.current;let ze=ne[Z];ze||(ot(Z,q),ze=ne[Z]);const ut=ze[Ue?ae:le];let Le,ve=M[ut],ft=!1;if(ve){if(ft=!0,W)for(let ce=0;ce<ve.length;ce++)if(he(ve[ce],U))return}else ve=M[ut]=[];const ht=M.constructor.name,dt=tt[ht];dt&&(Le=dt[Z]),Le||(Le=ht+f+(q?q(Z):Z)),I.options=re,lt&&(I.options.once=!1),I.target=M,I.capture=Ue,I.eventName=Z,I.isExisting=ft;const Ce=V?vt:void 0;Ce&&(Ce.taskData=I),_e&&(I.options.signal=void 0);const ie=At.scheduleEventTask(Le,U,Ce,y,P);if(_e){I.options.signal=_e;const ce=()=>ie.zone.cancelTask(ie);o.call(_e,"abort",ce,{once:!0}),ie.removeAbortListener=()=>_e.removeEventListener("abort",ce)}return I.target=null,Ce&&(Ce.taskData=null),lt&&(I.options.once=!0),!pe&&"boolean"==typeof ie.options||(ie.options=re),ie.target=M,ie.capture=Ue,ie.eventName=Z,z&&(ie.originalDelegate=U),L?ve.unshift(ie):ve.push(ie),T?M:void 0}};return p[s]=a(R,C,N,D,F),$&&(p[E]=a($,w,function(o){return $.call(I.target,I.eventName,o.invoke,I.options)},D,F,!0)),p[u]=function(){const o=this||t;let f=arguments[0];h&&h.transferEventName&&(f=h.transferEventName(f));const y=arguments[2],P=!!y&&("boolean"==typeof y||y.capture),T=arguments[1];if(!T)return b.apply(this,arguments);if(G&&!G(b,T,o,arguments))return;const L=ne[f];let M;L&&(M=L[P?ae:le]);const Z=M&&o[M];if(Z)for(let U=0;U<Z.length;U++){const z=Z[U];if(he(z,T))return Z.splice(U,1),z.isRemoved=!0,0!==Z.length||(z.allRemoved=!0,o[M]=null,P||"string"!=typeof f)||(o[we+"ON_PROPERTY"+f]=null),z.zone.cancelTask(z),F?o:void 0}return b.apply(this,arguments)},p[g]=function(){const o=this||t;let f=arguments[0];h&&h.transferEventName&&(f=h.transferEventName(f));const y=[],P=st(o,q?q(f):f);for(let T=0;T<P.length;T++){const L=P[T];y.push(L.originalDelegate?L.originalDelegate:L.callback)}return y},p[m]=function(){const o=this||t;let f=arguments[0];if(f){h&&h.transferEventName&&(f=h.transferEventName(f));const y=ne[f];if(y){const L=o[y[le]],M=o[y[ae]];if(L){const Z=L.slice();for(let U=0;U<Z.length;U++){const z=Z[U];this[u].call(this,f,z.originalDelegate?z.originalDelegate:z.callback,z.options)}}if(M){const Z=M.slice();for(let U=0;U<Z.length;U++){const z=Z[U];this[u].call(this,f,z.originalDelegate?z.originalDelegate:z.callback,z.options)}}}}else{const y=Object.keys(o);for(let P=0;P<y.length;P++){const L=nt.exec(y[P]);let M=L&&L[1];M&&"removeListener"!==M&&this[m].call(this,M)}this[m].call(this,"removeListener")}if(F)return this},fe(p[s],R),fe(p[u],b),Q&&fe(p[m],Q),O&&fe(p[g],O),!0}let B=[];for(let v=0;v<i.length;v++)B[v]=te(i[v],n);return B}function st(t,r){if(!r){const u=[];for(let g in t){const m=nt.exec(g);let k=m&&m[1];if(k&&(!r||k===r)){const C=t[g];if(C)for(let E=0;E<C.length;E++)u.push(C[E])}}return u}let i=ne[r];i||(ot(r),i=ne[r]);const n=t[i[le]],s=t[i[ae]];return n?s?n.concat(s):n.slice():s?s.slice():[]}function Pt(t,r){const i=t.Event;i&&i.prototype&&r.patchMethod(i.prototype,"stopImmediatePropagation",n=>function(s,u){s[rt]=!0,n&&n.apply(s,u)})}const Ie=H("zoneTask");function ye(t,r,i,n){let s=null,u=null;i+=n;const g={};function m(C){const E=C.data;E.args[0]=function(){return C.invoke.apply(this,arguments)};const w=s.apply(t,E.args);return et(w)?E.handleId=w:(E.handle=w,E.isRefreshable=Qe(w.refresh)),C}function k(C){const{handle:E,handleId:w}=C.data;return u.call(t,null!=E?E:w)}s=ue(t,r+=n,C=>function(E,w){if(Qe(w[0])){var j;const x={isRefreshable:!1,isPeriodic:"Interval"===n,delay:"Timeout"===n||"Interval"===n?w[1]||0:void 0,args:w},X=w[0];w[0]=function(){try{return X.apply(this,arguments)}finally{const{handle:G,handleId:W,isPeriodic:F,isRefreshable:p}=x;!F&&!p&&(W?delete g[W]:G&&(G[Ie]=null))}};const Y=xe(r,w[0],x,m,k);if(!Y)return Y;const{handleId:te,handle:B,isRefreshable:v,isPeriodic:h}=Y.data;if(te)g[te]=Y;else if(B&&(B[Ie]=Y,v&&!h)){const V=B.refresh;B.refresh=function(){const{zone:G,state:W}=Y;return"notScheduled"===W?(Y._state="scheduled",G._updateTaskCount(Y,1)):"running"===W&&(Y._state="scheduling"),V.call(this)}}return null!==(j=null!=B?B:te)&&void 0!==j?j:Y}return C.apply(t,w)}),u=ue(t,i,C=>function(E,w){var j;const x=w[0];let X;et(x)?(X=g[x],delete g[x]):(X=null==x?void 0:x[Ie],X?x[Ie]=null:X=x),null!==(j=X)&&void 0!==j&&j.type?X.cancelFn&&X.zone.cancelTask(X):C.apply(t,w)})}function it(t,r,i){if(!i||0===i.length)return r;const n=i.filter(u=>u.target===t);if(!n||0===n.length)return r;const s=n[0].ignoreProperties;return r.filter(u=>-1===s.indexOf(u))}function ct(t,r,i,n){t&&Ke(t,it(t,r,i),n)}function Fe(t){return Object.getOwnPropertyNames(t).filter(r=>r.startsWith("on")&&r.length>2).map(r=>r.substring(2))}function Lt(t,r,i,n,s){const u=Zone.__symbol__(n);if(r[u])return;const g=r[u]=r[n];r[n]=function(m,k,C){return k&&k.prototype&&s.forEach(function(E){const w=`${i}.${n}::`+E,j=k.prototype;try{if(j.hasOwnProperty(E)){const x=t.ObjectGetOwnPropertyDescriptor(j,E);x&&x.value?(x.value=t.wrapWithCurrentZone(x.value,w),t._redefineProperty(k.prototype,E,x)):j[E]&&(j[E]=t.wrapWithCurrentZone(j[E],w))}else j[E]&&(j[E]=t.wrapWithCurrentZone(j[E],w))}catch{}}),g.call(r,m,k,C)},t.attachOriginToPatched(r[n],g)}const at=function be(){var r;const i=globalThis,n=!0===i[J("forceDuplicateZoneCheck")];if(i.Zone&&(n||"function"!=typeof i.Zone.__symbol__))throw new Error("Zone already loaded.");return null!==(r=i.Zone)&&void 0!==r||(i.Zone=function Ee(){const t=ee.performance;function r(A){t&&t.mark&&t.mark(A)}function i(A,_){t&&t.measure&&t.measure(A,_)}r("Zone");let n=(()=>{class _{static assertZonePatched(){if(ee.Promise!==I.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let e=_.current;for(;e.parent;)e=e.parent;return e}static get current(){return b.zone}static get currentTask(){return O}static __load_patch(e,d,S=!1){if(I.hasOwnProperty(e)){const N=!0===ee[J("forceDuplicateZoneCheck")];if(!S&&N)throw Error("Already loaded patch: "+e)}else if(!ee["__Zone_disable_"+e]){const N="Zone:"+e;r(N),I[e]=d(ee,_,R),i(N,N)}}get parent(){return this._parent}get name(){return this._name}constructor(e,d){this._parent=e,this._name=d?d.name||"unnamed":"<root>",this._properties=d&&d.properties||{},this._zoneDelegate=new u(this,this._parent&&this._parent._zoneDelegate,d)}get(e){const d=this.getZoneWith(e);if(d)return d._properties[e]}getZoneWith(e){let d=this;for(;d;){if(d._properties.hasOwnProperty(e))return d;d=d._parent}return null}fork(e){if(!e)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,e)}wrap(e,d){if("function"!=typeof e)throw new Error("Expecting function got: "+e);const S=this._zoneDelegate.intercept(this,e,d),N=this;return function(){return N.runGuarded(S,this,arguments,d)}}run(e,d,S,N){b={parent:b,zone:this};try{return this._zoneDelegate.invoke(this,e,d,S,N)}finally{b=b.parent}}runGuarded(e,d=null,S,N){b={parent:b,zone:this};try{try{return this._zoneDelegate.invoke(this,e,d,S,N)}catch(D){if(this._zoneDelegate.handleError(this,D))throw D}}finally{b=b.parent}}runTask(e,d,S){if(e.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(e.zone||te).name+"; Execution: "+this.name+")");const N=e,{type:D,data:{isPeriodic:Te=!1,isRefreshable:he=!1}={}}=e;if(e.state===B&&(D===q||D===p))return;const se=e.state!=V;se&&N._transitionTo(V,h);const ke=O;O=N,b={parent:b,zone:this};try{D==p&&e.data&&!Te&&!he&&(e.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,N,d,S)}catch(l){if(this._zoneDelegate.handleError(this,l))throw l}}finally{const l=e.state;if(l!==B&&l!==W)if(D==q||Te||he&&l===v)se&&N._transitionTo(h,V,v);else{const a=N._zoneDelegates;this._updateTaskCount(N,-1),se&&N._transitionTo(B,V,B),he&&(N._zoneDelegates=a)}b=b.parent,O=ke}}scheduleTask(e){if(e.zone&&e.zone!==this){let S=this;for(;S;){if(S===e.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${e.zone.name}`);S=S.parent}}e._transitionTo(v,B);const d=[];e._zoneDelegates=d,e._zone=this;try{e=this._zoneDelegate.scheduleTask(this,e)}catch(S){throw e._transitionTo(W,v,B),this._zoneDelegate.handleError(this,S),S}return e._zoneDelegates===d&&this._updateTaskCount(e,1),e.state==v&&e._transitionTo(h,v),e}scheduleMicroTask(e,d,S,N){return this.scheduleTask(new g(F,e,d,S,N,void 0))}scheduleMacroTask(e,d,S,N,D){return this.scheduleTask(new g(p,e,d,S,N,D))}scheduleEventTask(e,d,S,N,D){return this.scheduleTask(new g(q,e,d,S,N,D))}cancelTask(e){if(e.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(e.zone||te).name+"; Execution: "+this.name+")");if(e.state===h||e.state===V){e._transitionTo(G,h,V);try{this._zoneDelegate.cancelTask(this,e)}catch(d){throw e._transitionTo(W,G),this._zoneDelegate.handleError(this,d),d}return this._updateTaskCount(e,-1),e._transitionTo(B,G),e.runCount=-1,e}}_updateTaskCount(e,d){const S=e._zoneDelegates;-1==d&&(e._zoneDelegates=null);for(let N=0;N<S.length;N++)S[N]._updateTaskCount(e.type,d)}}return _.__symbol__=J,_})();const s={name:"",onHasTask:(A,_,c,e)=>A.hasTask(c,e),onScheduleTask:(A,_,c,e)=>A.scheduleTask(c,e),onInvokeTask:(A,_,c,e,d,S)=>A.invokeTask(c,e,d,S),onCancelTask:(A,_,c,e)=>A.cancelTask(c,e)};class u{get zone(){return this._zone}constructor(_,c,e){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this._zone=_,this._parentDelegate=c,this._forkZS=e&&(e&&e.onFork?e:c._forkZS),this._forkDlgt=e&&(e.onFork?c:c._forkDlgt),this._forkCurrZone=e&&(e.onFork?this._zone:c._forkCurrZone),this._interceptZS=e&&(e.onIntercept?e:c._interceptZS),this._interceptDlgt=e&&(e.onIntercept?c:c._interceptDlgt),this._interceptCurrZone=e&&(e.onIntercept?this._zone:c._interceptCurrZone),this._invokeZS=e&&(e.onInvoke?e:c._invokeZS),this._invokeDlgt=e&&(e.onInvoke?c:c._invokeDlgt),this._invokeCurrZone=e&&(e.onInvoke?this._zone:c._invokeCurrZone),this._handleErrorZS=e&&(e.onHandleError?e:c._handleErrorZS),this._handleErrorDlgt=e&&(e.onHandleError?c:c._handleErrorDlgt),this._handleErrorCurrZone=e&&(e.onHandleError?this._zone:c._handleErrorCurrZone),this._scheduleTaskZS=e&&(e.onScheduleTask?e:c._scheduleTaskZS),this._scheduleTaskDlgt=e&&(e.onScheduleTask?c:c._scheduleTaskDlgt),this._scheduleTaskCurrZone=e&&(e.onScheduleTask?this._zone:c._scheduleTaskCurrZone),this._invokeTaskZS=e&&(e.onInvokeTask?e:c._invokeTaskZS),this._invokeTaskDlgt=e&&(e.onInvokeTask?c:c._invokeTaskDlgt),this._invokeTaskCurrZone=e&&(e.onInvokeTask?this._zone:c._invokeTaskCurrZone),this._cancelTaskZS=e&&(e.onCancelTask?e:c._cancelTaskZS),this._cancelTaskDlgt=e&&(e.onCancelTask?c:c._cancelTaskDlgt),this._cancelTaskCurrZone=e&&(e.onCancelTask?this._zone:c._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;const d=e&&e.onHasTask;(d||c&&c._hasTaskZS)&&(this._hasTaskZS=d?e:s,this._hasTaskDlgt=c,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=this._zone,e.onScheduleTask||(this._scheduleTaskZS=s,this._scheduleTaskDlgt=c,this._scheduleTaskCurrZone=this._zone),e.onInvokeTask||(this._invokeTaskZS=s,this._invokeTaskDlgt=c,this._invokeTaskCurrZone=this._zone),e.onCancelTask||(this._cancelTaskZS=s,this._cancelTaskDlgt=c,this._cancelTaskCurrZone=this._zone))}fork(_,c){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,_,c):new n(_,c)}intercept(_,c,e){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,_,c,e):c}invoke(_,c,e,d,S){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,_,c,e,d,S):c.apply(e,d)}handleError(_,c){return!this._handleErrorZS||this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,_,c)}scheduleTask(_,c){let e=c;if(this._scheduleTaskZS)this._hasTaskZS&&e._zoneDelegates.push(this._hasTaskDlgtOwner),e=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,_,c),e||(e=c);else if(c.scheduleFn)c.scheduleFn(c);else{if(c.type!=F)throw new Error("Task is missing scheduleFn.");X(c)}return e}invokeTask(_,c,e,d){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,_,c,e,d):c.callback.apply(e,d)}cancelTask(_,c){let e;if(this._cancelTaskZS)e=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,_,c);else{if(!c.cancelFn)throw Error("Task is not cancelable");e=c.cancelFn(c)}return e}hasTask(_,c){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,_,c)}catch(e){this.handleError(_,e)}}_updateTaskCount(_,c){const e=this._taskCounts,d=e[_],S=e[_]=d+c;if(S<0)throw new Error("More tasks executed then were scheduled.");0!=d&&0!=S||this.hasTask(this._zone,{microTask:e.microTask>0,macroTask:e.macroTask>0,eventTask:e.eventTask>0,change:_})}}class g{constructor(_,c,e,d,S,N){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=_,this.source=c,this.data=d,this.scheduleFn=S,this.cancelFn=N,!e)throw new Error("callback is not defined");this.callback=e;const D=this;this.invoke=_===q&&d&&d.useG?g.invokeTask:function(){return g.invokeTask.call(ee,D,this,arguments)}}static invokeTask(_,c,e){_||(_=this),Q++;try{return _.runCount++,_.zone.runTask(_,c,e)}finally{1==Q&&Y(),Q--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(B,v)}_transitionTo(_,c,e){if(this._state!==c&&this._state!==e)throw new Error(`${this.type} '${this.source}': can not transition to '${_}', expecting state '${c}'${e?" or '"+e+"'":""}, was '${this._state}'.`);this._state=_,_==B&&(this._zoneDelegates=null)}toString(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}const m=J("setTimeout"),k=J("Promise"),C=J("then");let j,E=[],w=!1;function x(A){if(j||ee[k]&&(j=ee[k].resolve(0)),j){let _=j[C];_||(_=j.then),_.call(j,A)}else ee[m](A,0)}function X(A){0===Q&&0===E.length&&x(Y),A&&E.push(A)}function Y(){if(!w){for(w=!0;E.length;){const A=E;E=[];for(let _=0;_<A.length;_++){const c=A[_];try{c.zone.runTask(c,null,null)}catch(e){R.onUnhandledError(e)}}}R.microtaskDrainDone(),w=!1}}const te={name:"NO ZONE"},B="notScheduled",v="scheduling",h="scheduled",V="running",G="canceling",W="unknown",F="microTask",p="macroTask",q="eventTask",I={},R={symbol:J,currentZoneFrame:()=>b,onUnhandledError:$,microtaskDrainDone:$,scheduleMicroTask:X,showUncaughtError:()=>!n[J("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:$,patchMethod:()=>$,bindArguments:()=>[],patchThen:()=>$,patchMacroTask:()=>$,patchEventPrototype:()=>$,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>$,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>$,wrapWithCurrentZone:()=>$,filterProperties:()=>[],attachOriginToPatched:()=>$,_redefineProperty:()=>$,patchCallbacks:()=>$,nativeScheduleMicroTask:x};let b={parent:null,zone:new n(null,null)},O=null,Q=0;function $(){}return i("Zone","Zone"),n}()),i.Zone}();(function Zt(t){(function Nt(t){t.__load_patch("ZoneAwarePromise",(r,i,n)=>{const s=Object.getOwnPropertyDescriptor,u=Object.defineProperty,m=n.symbol,k=[],C=!1!==r[m("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],E=m("Promise"),w=m("then"),j="__creationTrace__";n.onUnhandledError=l=>{if(n.showUncaughtError()){const a=l&&l.rejection;a?console.error("Unhandled Promise rejection:",a instanceof Error?a.message:a,"; Zone:",l.zone.name,"; Task:",l.task&&l.task.source,"; Value:",a,a instanceof Error?a.stack:void 0):console.error(l)}},n.microtaskDrainDone=()=>{for(;k.length;){const l=k.shift();try{l.zone.runGuarded(()=>{throw l.throwOriginal?l.rejection:l})}catch(a){X(a)}}};const x=m("unhandledPromiseRejectionHandler");function X(l){n.onUnhandledError(l);try{const a=i[x];"function"==typeof a&&a.call(this,l)}catch{}}function Y(l){return l&&l.then}function te(l){return l}function B(l){return D.reject(l)}const v=m("state"),h=m("value"),V=m("finally"),G=m("parentPromiseValue"),W=m("parentPromiseState"),F="Promise.then",p=null,q=!0,I=!1,R=0;function b(l,a){return o=>{try{A(l,a,o)}catch(f){A(l,!1,f)}}}const O=function(){let l=!1;return function(o){return function(){l||(l=!0,o.apply(null,arguments))}}},Q="Promise resolved with itself",$=m("currentTaskTrace");function A(l,a,o){const f=O();if(l===o)throw new TypeError(Q);if(l[v]===p){let y=null;try{("object"==typeof o||"function"==typeof o)&&(y=o&&o.then)}catch(P){return f(()=>{A(l,!1,P)})(),l}if(a!==I&&o instanceof D&&o.hasOwnProperty(v)&&o.hasOwnProperty(h)&&o[v]!==p)c(o),A(l,o[v],o[h]);else if(a!==I&&"function"==typeof y)try{y.call(o,f(b(l,a)),f(b(l,!1)))}catch(P){f(()=>{A(l,!1,P)})()}else{l[v]=a;const P=l[h];if(l[h]=o,l[V]===V&&a===q&&(l[v]=l[W],l[h]=l[G]),a===I&&o instanceof Error){const T=i.currentTask&&i.currentTask.data&&i.currentTask.data[j];T&&u(o,$,{configurable:!0,enumerable:!1,writable:!0,value:T})}for(let T=0;T<P.length;)e(l,P[T++],P[T++],P[T++],P[T++]);if(0==P.length&&a==I){l[v]=R;let T=o;try{throw new Error("Uncaught (in promise): "+function g(l){return l&&l.toString===Object.prototype.toString?(l.constructor&&l.constructor.name||"")+": "+JSON.stringify(l):l?l.toString():Object.prototype.toString.call(l)}(o)+(o&&o.stack?"\n"+o.stack:""))}catch(L){T=L}C&&(T.throwOriginal=!0),T.rejection=o,T.promise=l,T.zone=i.current,T.task=i.currentTask,k.push(T),n.scheduleMicroTask()}}}return l}const _=m("rejectionHandledHandler");function c(l){if(l[v]===R){try{const a=i[_];a&&"function"==typeof a&&a.call(this,{rejection:l[h],promise:l})}catch{}l[v]=I;for(let a=0;a<k.length;a++)l===k[a].promise&&k.splice(a,1)}}function e(l,a,o,f,y){c(l);const P=l[v],T=P?"function"==typeof f?f:te:"function"==typeof y?y:B;a.scheduleMicroTask(F,()=>{try{const L=l[h],M=!!o&&V===o[V];M&&(o[G]=L,o[W]=P);const Z=a.run(T,void 0,M&&T!==B&&T!==te?[]:[L]);A(o,!0,Z)}catch(L){A(o,!1,L)}},o)}const S=function(){},N=r.AggregateError;class D{static toString(){return"function ZoneAwarePromise() { [native code] }"}static resolve(a){return a instanceof D?a:A(new this(null),q,a)}static reject(a){return A(new this(null),I,a)}static withResolvers(){const a={};return a.promise=new D((o,f)=>{a.resolve=o,a.reject=f}),a}static any(a){if(!a||"function"!=typeof a[Symbol.iterator])return Promise.reject(new N([],"All promises were rejected"));const o=[];let f=0;try{for(let T of a)f++,o.push(D.resolve(T))}catch{return Promise.reject(new N([],"All promises were rejected"))}if(0===f)return Promise.reject(new N([],"All promises were rejected"));let y=!1;const P=[];return new D((T,L)=>{for(let M=0;M<o.length;M++)o[M].then(Z=>{y||(y=!0,T(Z))},Z=>{P.push(Z),f--,0===f&&(y=!0,L(new N(P,"All promises were rejected")))})})}static race(a){let o,f,y=new this((L,M)=>{o=L,f=M});function P(L){o(L)}function T(L){f(L)}for(let L of a)Y(L)||(L=this.resolve(L)),L.then(P,T);return y}static all(a){return D.allWithCallback(a)}static allSettled(a){return(this&&this.prototype instanceof D?this:D).allWithCallback(a,{thenCallback:f=>({status:"fulfilled",value:f}),errorCallback:f=>({status:"rejected",reason:f})})}static allWithCallback(a,o){let f,y,P=new this((Z,U)=>{f=Z,y=U}),T=2,L=0;const M=[];for(let Z of a){Y(Z)||(Z=this.resolve(Z));const U=L;try{Z.then(z=>{M[U]=o?o.thenCallback(z):z,T--,0===T&&f(M)},z=>{o?(M[U]=o.errorCallback(z),T--,0===T&&f(M)):y(z)})}catch(z){y(z)}T++,L++}return T-=2,0===T&&f(M),P}constructor(a){const o=this;if(!(o instanceof D))throw new Error("Must be an instanceof Promise.");o[v]=p,o[h]=[];try{const f=O();a&&a(f(b(o,q)),f(b(o,I)))}catch(f){A(o,!1,f)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return D}then(a,o){var f;let y=null===(f=this.constructor)||void 0===f?void 0:f[Symbol.species];(!y||"function"!=typeof y)&&(y=this.constructor||D);const P=new y(S),T=i.current;return this[v]==p?this[h].push(T,P,a,o):e(this,T,P,a,o),P}catch(a){return this.then(null,a)}finally(a){var o;let f=null===(o=this.constructor)||void 0===o?void 0:o[Symbol.species];(!f||"function"!=typeof f)&&(f=D);const y=new f(S);y[V]=V;const P=i.current;return this[v]==p?this[h].push(P,y,a,a):e(this,P,y,a,a),y}}D.resolve=D.resolve,D.reject=D.reject,D.race=D.race,D.all=D.all;const Te=r[E]=r.Promise;r.Promise=D;const he=m("thenPatched");function se(l){const a=l.prototype,o=s(a,"then");if(o&&(!1===o.writable||!o.configurable))return;const f=a.then;a[w]=f,l.prototype.then=function(y,P){return new D((L,M)=>{f.call(this,L,M)}).then(y,P)},l[he]=!0}return n.patchThen=se,Te&&(se(Te),ue(r,"fetch",l=>function ke(l){return function(a,o){let f=l.apply(a,o);if(f instanceof D)return f;let y=f.constructor;return y[he]||se(y),f}}(l))),Promise[i.__symbol__("uncaughtPromiseErrors")]=k,D})})(t),function It(t){t.__load_patch("toString",r=>{const i=Function.prototype.toString,n=H("OriginalDelegate"),s=H("Promise"),u=H("Error"),g=function(){if("function"==typeof this){const E=this[n];if(E)return"function"==typeof E?i.call(E):Object.prototype.toString.call(E);if(this===Promise){const w=r[s];if(w)return i.call(w)}if(this===Error){const w=r[u];if(w)return i.call(w)}}return i.call(this)};g[n]=i,Function.prototype.toString=g;const m=Object.prototype.toString;Object.prototype.toString=function(){return"function"==typeof Promise&&this instanceof Promise?"[object Promise]":m.call(this)}})}(t),function Mt(t){t.__load_patch("util",(r,i,n)=>{const s=Fe(r);n.patchOnProperties=Ke,n.patchMethod=ue,n.bindArguments=Ve,n.patchMacroTask=pt;const u=i.__symbol__("BLACK_LISTED_EVENTS"),g=i.__symbol__("UNPATCHED_EVENTS");r[g]&&(r[u]=r[g]),r[u]&&(i[u]=i[g]=r[u]),n.patchEventPrototype=Pt,n.patchEventTarget=bt,n.isIEOrEdge=kt,n.ObjectDefineProperty=Pe,n.ObjectGetOwnPropertyDescriptor=ge,n.ObjectCreate=_t,n.ArraySlice=Et,n.patchClass=Re,n.wrapWithCurrentZone=He,n.filterProperties=it,n.attachOriginToPatched=fe,n._redefineProperty=Object.defineProperty,n.patchCallbacks=Lt,n.getGlobalObjects=()=>({globalSources:tt,zoneSymbolEventNames:ne,eventNames:s,isBrowser:Be,isMix:qe,isNode:Se,TRUE_STR:ae,FALSE_STR:le,ZONE_SYMBOL_PREFIX:we,ADD_EVENT_LISTENER_STR:Me,REMOVE_EVENT_LISTENER_STR:Ze})})}(t)})(at),function St(t){t.__load_patch("legacy",r=>{const i=r[t.__symbol__("legacyPatch")];i&&i()}),t.__load_patch("timers",r=>{const i="set",n="clear";ye(r,i,n,"Timeout"),ye(r,i,n,"Interval"),ye(r,i,n,"Immediate")}),t.__load_patch("requestAnimationFrame",r=>{ye(r,"request","cancel","AnimationFrame"),ye(r,"mozRequest","mozCancel","AnimationFrame"),ye(r,"webkitRequest","webkitCancel","AnimationFrame")}),t.__load_patch("blocking",(r,i)=>{const n=["alert","prompt","confirm"];for(let s=0;s<n.length;s++)ue(r,n[s],(g,m,k)=>function(C,E){return i.current.run(g,r,E,k)})}),t.__load_patch("EventTarget",(r,i,n)=>{(function Dt(t,r){r.patchEventPrototype(t,r)})(r,n),function Ct(t,r){if(Zone[r.symbol("patchEventTarget")])return;const{eventNames:i,zoneSymbolEventNames:n,TRUE_STR:s,FALSE_STR:u,ZONE_SYMBOL_PREFIX:g}=r.getGlobalObjects();for(let k=0;k<i.length;k++){const C=i[k],j=g+(C+u),x=g+(C+s);n[C]={},n[C][u]=j,n[C][s]=x}const m=t.EventTarget;m&&m.prototype&&r.patchEventTarget(t,r,[m&&m.prototype])}(r,n);const s=r.XMLHttpRequestEventTarget;s&&s.prototype&&n.patchEventTarget(r,n,[s.prototype])}),t.__load_patch("MutationObserver",(r,i,n)=>{Re("MutationObserver"),Re("WebKitMutationObserver")}),t.__load_patch("IntersectionObserver",(r,i,n)=>{Re("IntersectionObserver")}),t.__load_patch("FileReader",(r,i,n)=>{Re("FileReader")}),t.__load_patch("on_property",(r,i,n)=>{!function Ot(t,r){if(Se&&!qe||Zone[t.symbol("patchEvents")])return;const i=r.__Zone_ignore_on_properties;let n=[];if(Be){const s=window;n=n.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]);const u=function yt(){try{const t=me.navigator.userAgent;if(-1!==t.indexOf("MSIE ")||-1!==t.indexOf("Trident/"))return!0}catch{}return!1}()?[{target:s,ignoreProperties:["error"]}]:[];ct(s,Fe(s),i&&i.concat(u),De(s))}n=n.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let s=0;s<n.length;s++){const u=r[n[s]];u&&u.prototype&&ct(u.prototype,Fe(u.prototype),i)}}(n,r)}),t.__load_patch("customElements",(r,i,n)=>{!function Rt(t,r){const{isBrowser:i,isMix:n}=r.getGlobalObjects();(i||n)&&t.customElements&&"customElements"in t&&r.patchCallbacks(r,t.customElements,"customElements","define",["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback","formAssociatedCallback","formDisabledCallback","formResetCallback","formStateRestoreCallback"])}(r,n)}),t.__load_patch("XHR",(r,i)=>{!function C(E){const w=E.XMLHttpRequest;if(!w)return;const j=w.prototype;let X=j[Ae],Y=j[je];if(!X){const R=E.XMLHttpRequestEventTarget;if(R){const b=R.prototype;X=b[Ae],Y=b[je]}}const te="readystatechange",B="scheduled";function v(R){const b=R.data,O=b.target;O[g]=!1,O[k]=!1;const Q=O[u];X||(X=O[Ae],Y=O[je]),Q&&Y.call(O,te,Q);const $=O[u]=()=>{if(O.readyState===O.DONE)if(!b.aborted&&O[g]&&R.state===B){const _=O[i.__symbol__("loadfalse")];if(0!==O.status&&_&&_.length>0){const c=R.invoke;R.invoke=function(){const e=O[i.__symbol__("loadfalse")];for(let d=0;d<e.length;d++)e[d]===R&&e.splice(d,1);!b.aborted&&R.state===B&&c.call(R)},_.push(R)}else R.invoke()}else!b.aborted&&!1===O[g]&&(O[k]=!0)};return X.call(O,te,$),O[n]||(O[n]=R),q.apply(O,b.args),O[g]=!0,R}function h(){}function V(R){const b=R.data;return b.aborted=!0,I.apply(b.target,b.args)}const G=ue(j,"open",()=>function(R,b){return R[s]=0==b[2],R[m]=b[1],G.apply(R,b)}),F=H("fetchTaskAborting"),p=H("fetchTaskScheduling"),q=ue(j,"send",()=>function(R,b){if(!0===i.current[p]||R[s])return q.apply(R,b);{const O={target:R,url:R[m],isPeriodic:!1,args:b,aborted:!1},Q=xe("XMLHttpRequest.send",h,O,v,V);R&&!0===R[k]&&!O.aborted&&Q.state===B&&Q.invoke()}}),I=ue(j,"abort",()=>function(R,b){const O=function x(R){return R[n]}(R);if(O&&"string"==typeof O.type){if(null==O.cancelFn||O.data&&O.data.aborted)return;O.zone.cancelTask(O)}else if(!0===i.current[F])return I.apply(R,b)})}(r);const n=H("xhrTask"),s=H("xhrSync"),u=H("xhrListener"),g=H("xhrScheduled"),m=H("xhrURL"),k=H("xhrErrorBeforeScheduled")}),t.__load_patch("geolocation",r=>{r.navigator&&r.navigator.geolocation&&function gt(t,r){const i=t.constructor.name;for(let n=0;n<r.length;n++){const s=r[n],u=t[s];if(u){if(!We(ge(t,s)))continue;t[s]=(m=>{const k=function(){return m.apply(this,Ve(arguments,i+"."+s))};return fe(k,m),k})(u)}}}(r.navigator.geolocation,["getCurrentPosition","watchPosition"])}),t.__load_patch("PromiseRejectionEvent",(r,i)=>{function n(s){return function(u){st(r,s).forEach(m=>{const k=r.PromiseRejectionEvent;if(k){const C=new k(s,{promise:u.promise,reason:u.rejection});m.invoke(C)}})}}r.PromiseRejectionEvent&&(i[H("unhandledPromiseRejectionHandler")]=n("unhandledrejection"),i[H("rejectionHandledHandler")]=n("rejectionhandled"))}),t.__load_patch("queueMicrotask",(r,i,n)=>{!function wt(t,r){r.patchMethod(t,"queueMicrotask",i=>function(n,s){Zone.current.scheduleMicroTask("queueMicrotask",s[0])})}(r,n)})}(at)}},ee=>{ee(ee.s=4050)}]);