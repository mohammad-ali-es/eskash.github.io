var UM=Object.defineProperty;var OM=(s,e,n)=>e in s?UM(s,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[e]=n;var ht=(s,e,n)=>OM(s,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();var gh={exports:{}},Cl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $v;function PM(){if($v)return Cl;$v=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(a,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var h in o)h!=="key"&&(c[h]=o[h])}else c=o;return o=c.ref,{$$typeof:s,type:a,key:u,ref:o!==void 0?o:null,props:c}}return Cl.Fragment=e,Cl.jsx=n,Cl.jsxs=n,Cl}var e_;function IM(){return e_||(e_=1,gh.exports=PM()),gh.exports}var L=IM(),vh={exports:{}},Ct={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t_;function FM(){if(t_)return Ct;t_=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),g=Symbol.iterator;function x(B){return B===null||typeof B!="object"?null:(B=g&&B[g]||B["@@iterator"],typeof B=="function"?B:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,S={};function y(B,ee,De){this.props=B,this.context=ee,this.refs=S,this.updater=De||M}y.prototype.isReactComponent={},y.prototype.setState=function(B,ee){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,ee,"setState")},y.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function F(){}F.prototype=y.prototype;function O(B,ee,De){this.props=B,this.context=ee,this.refs=S,this.updater=De||M}var R=O.prototype=new F;R.constructor=O,w(R,y.prototype),R.isPureReactComponent=!0;var I=Array.isArray;function N(){}var H={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function D(B,ee,De){var Te=De.ref;return{$$typeof:s,type:B,key:ee,ref:Te!==void 0?Te:null,props:De}}function G(B,ee){return D(B.type,ee,B.props)}function k(B){return typeof B=="object"&&B!==null&&B.$$typeof===s}function Z(B){var ee={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(De){return ee[De]})}var ce=/\/+/g;function ie(B,ee){return typeof B=="object"&&B!==null&&B.key!=null?Z(""+B.key):ee.toString(36)}function K(B){switch(B.status){case"fulfilled":return B.value;case"rejected":throw B.reason;default:switch(typeof B.status=="string"?B.then(N,N):(B.status="pending",B.then(function(ee){B.status==="pending"&&(B.status="fulfilled",B.value=ee)},function(ee){B.status==="pending"&&(B.status="rejected",B.reason=ee)})),B.status){case"fulfilled":return B.value;case"rejected":throw B.reason}}throw B}function V(B,ee,De,Te,qe){var re=typeof B;(re==="undefined"||re==="boolean")&&(B=null);var be=!1;if(B===null)be=!0;else switch(re){case"bigint":case"string":case"number":be=!0;break;case"object":switch(B.$$typeof){case s:case e:be=!0;break;case _:return be=B._init,V(be(B._payload),ee,De,Te,qe)}}if(be)return qe=qe(B),be=Te===""?"."+ie(B,0):Te,I(qe)?(De="",be!=null&&(De=be.replace(ce,"$&/")+"/"),V(qe,ee,De,"",function(st){return st})):qe!=null&&(k(qe)&&(qe=G(qe,De+(qe.key==null||B&&B.key===qe.key?"":(""+qe.key).replace(ce,"$&/")+"/")+be)),ee.push(qe)),1;be=0;var he=Te===""?".":Te+":";if(I(B))for(var Ue=0;Ue<B.length;Ue++)Te=B[Ue],re=he+ie(Te,Ue),be+=V(Te,ee,De,re,qe);else if(Ue=x(B),typeof Ue=="function")for(B=Ue.call(B),Ue=0;!(Te=B.next()).done;)Te=Te.value,re=he+ie(Te,Ue++),be+=V(Te,ee,De,re,qe);else if(re==="object"){if(typeof B.then=="function")return V(K(B),ee,De,Te,qe);throw ee=String(B),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.")}return be}function X(B,ee,De){if(B==null)return B;var Te=[],qe=0;return V(B,Te,"","",function(re){return ee.call(De,re,qe++)}),Te}function se(B){if(B._status===-1){var ee=B._result;ee=ee(),ee.then(function(De){(B._status===0||B._status===-1)&&(B._status=1,B._result=De)},function(De){(B._status===0||B._status===-1)&&(B._status=2,B._result=De)}),B._status===-1&&(B._status=0,B._result=ee)}if(B._status===1)return B._result.default;throw B._result}var pe=typeof reportError=="function"?reportError:function(B){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ee=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof B=="object"&&B!==null&&typeof B.message=="string"?String(B.message):String(B),error:B});if(!window.dispatchEvent(ee))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",B);return}console.error(B)},Ce={map:X,forEach:function(B,ee,De){X(B,function(){ee.apply(this,arguments)},De)},count:function(B){var ee=0;return X(B,function(){ee++}),ee},toArray:function(B){return X(B,function(ee){return ee})||[]},only:function(B){if(!k(B))throw Error("React.Children.only expected to receive a single React element child.");return B}};return Ct.Activity=v,Ct.Children=Ce,Ct.Component=y,Ct.Fragment=n,Ct.Profiler=o,Ct.PureComponent=O,Ct.StrictMode=a,Ct.Suspense=m,Ct.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,Ct.__COMPILER_RUNTIME={__proto__:null,c:function(B){return H.H.useMemoCache(B)}},Ct.cache=function(B){return function(){return B.apply(null,arguments)}},Ct.cacheSignal=function(){return null},Ct.cloneElement=function(B,ee,De){if(B==null)throw Error("The argument must be a React element, but you passed "+B+".");var Te=w({},B.props),qe=B.key;if(ee!=null)for(re in ee.key!==void 0&&(qe=""+ee.key),ee)!T.call(ee,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&ee.ref===void 0||(Te[re]=ee[re]);var re=arguments.length-2;if(re===1)Te.children=De;else if(1<re){for(var be=Array(re),he=0;he<re;he++)be[he]=arguments[he+2];Te.children=be}return D(B.type,qe,Te)},Ct.createContext=function(B){return B={$$typeof:u,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null},B.Provider=B,B.Consumer={$$typeof:c,_context:B},B},Ct.createElement=function(B,ee,De){var Te,qe={},re=null;if(ee!=null)for(Te in ee.key!==void 0&&(re=""+ee.key),ee)T.call(ee,Te)&&Te!=="key"&&Te!=="__self"&&Te!=="__source"&&(qe[Te]=ee[Te]);var be=arguments.length-2;if(be===1)qe.children=De;else if(1<be){for(var he=Array(be),Ue=0;Ue<be;Ue++)he[Ue]=arguments[Ue+2];qe.children=he}if(B&&B.defaultProps)for(Te in be=B.defaultProps,be)qe[Te]===void 0&&(qe[Te]=be[Te]);return D(B,re,qe)},Ct.createRef=function(){return{current:null}},Ct.forwardRef=function(B){return{$$typeof:h,render:B}},Ct.isValidElement=k,Ct.lazy=function(B){return{$$typeof:_,_payload:{_status:-1,_result:B},_init:se}},Ct.memo=function(B,ee){return{$$typeof:p,type:B,compare:ee===void 0?null:ee}},Ct.startTransition=function(B){var ee=H.T,De={};H.T=De;try{var Te=B(),qe=H.S;qe!==null&&qe(De,Te),typeof Te=="object"&&Te!==null&&typeof Te.then=="function"&&Te.then(N,pe)}catch(re){pe(re)}finally{ee!==null&&De.types!==null&&(ee.types=De.types),H.T=ee}},Ct.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},Ct.use=function(B){return H.H.use(B)},Ct.useActionState=function(B,ee,De){return H.H.useActionState(B,ee,De)},Ct.useCallback=function(B,ee){return H.H.useCallback(B,ee)},Ct.useContext=function(B){return H.H.useContext(B)},Ct.useDebugValue=function(){},Ct.useDeferredValue=function(B,ee){return H.H.useDeferredValue(B,ee)},Ct.useEffect=function(B,ee){return H.H.useEffect(B,ee)},Ct.useEffectEvent=function(B){return H.H.useEffectEvent(B)},Ct.useId=function(){return H.H.useId()},Ct.useImperativeHandle=function(B,ee,De){return H.H.useImperativeHandle(B,ee,De)},Ct.useInsertionEffect=function(B,ee){return H.H.useInsertionEffect(B,ee)},Ct.useLayoutEffect=function(B,ee){return H.H.useLayoutEffect(B,ee)},Ct.useMemo=function(B,ee){return H.H.useMemo(B,ee)},Ct.useOptimistic=function(B,ee){return H.H.useOptimistic(B,ee)},Ct.useReducer=function(B,ee,De){return H.H.useReducer(B,ee,De)},Ct.useRef=function(B){return H.H.useRef(B)},Ct.useState=function(B){return H.H.useState(B)},Ct.useSyncExternalStore=function(B,ee,De){return H.H.useSyncExternalStore(B,ee,De)},Ct.useTransition=function(){return H.H.useTransition()},Ct.version="19.2.7",Ct}var n_;function tm(){return n_||(n_=1,vh.exports=FM()),vh.exports}var ye=tm(),_h={exports:{}},Dl={},xh={exports:{}},yh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i_;function BM(){return i_||(i_=1,(function(s){function e(V,X){var se=V.length;V.push(X);e:for(;0<se;){var pe=se-1>>>1,Ce=V[pe];if(0<o(Ce,X))V[pe]=X,V[se]=Ce,se=pe;else break e}}function n(V){return V.length===0?null:V[0]}function a(V){if(V.length===0)return null;var X=V[0],se=V.pop();if(se!==X){V[0]=se;e:for(var pe=0,Ce=V.length,B=Ce>>>1;pe<B;){var ee=2*(pe+1)-1,De=V[ee],Te=ee+1,qe=V[Te];if(0>o(De,se))Te<Ce&&0>o(qe,De)?(V[pe]=qe,V[Te]=se,pe=Te):(V[pe]=De,V[ee]=se,pe=ee);else if(Te<Ce&&0>o(qe,se))V[pe]=qe,V[Te]=se,pe=Te;else break e}}return X}function o(V,X){var se=V.sortIndex-X.sortIndex;return se!==0?se:V.id-X.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var u=Date,h=u.now();s.unstable_now=function(){return u.now()-h}}var m=[],p=[],_=1,v=null,g=3,x=!1,M=!1,w=!1,S=!1,y=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function R(V){for(var X=n(p);X!==null;){if(X.callback===null)a(p);else if(X.startTime<=V)a(p),X.sortIndex=X.expirationTime,e(m,X);else break;X=n(p)}}function I(V){if(w=!1,R(V),!M)if(n(m)!==null)M=!0,N||(N=!0,Z());else{var X=n(p);X!==null&&K(I,X.startTime-V)}}var N=!1,H=-1,T=5,D=-1;function G(){return S?!0:!(s.unstable_now()-D<T)}function k(){if(S=!1,N){var V=s.unstable_now();D=V;var X=!0;try{e:{M=!1,w&&(w=!1,F(H),H=-1),x=!0;var se=g;try{t:{for(R(V),v=n(m);v!==null&&!(v.expirationTime>V&&G());){var pe=v.callback;if(typeof pe=="function"){v.callback=null,g=v.priorityLevel;var Ce=pe(v.expirationTime<=V);if(V=s.unstable_now(),typeof Ce=="function"){v.callback=Ce,R(V),X=!0;break t}v===n(m)&&a(m),R(V)}else a(m);v=n(m)}if(v!==null)X=!0;else{var B=n(p);B!==null&&K(I,B.startTime-V),X=!1}}break e}finally{v=null,g=se,x=!1}X=void 0}}finally{X?Z():N=!1}}}var Z;if(typeof O=="function")Z=function(){O(k)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,ie=ce.port2;ce.port1.onmessage=k,Z=function(){ie.postMessage(null)}}else Z=function(){y(k,0)};function K(V,X){H=y(function(){V(s.unstable_now())},X)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(V){V.callback=null},s.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<V?Math.floor(1e3/V):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_next=function(V){switch(g){case 1:case 2:case 3:var X=3;break;default:X=g}var se=g;g=X;try{return V()}finally{g=se}},s.unstable_requestPaint=function(){S=!0},s.unstable_runWithPriority=function(V,X){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var se=g;g=V;try{return X()}finally{g=se}},s.unstable_scheduleCallback=function(V,X,se){var pe=s.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?pe+se:pe):se=pe,V){case 1:var Ce=-1;break;case 2:Ce=250;break;case 5:Ce=1073741823;break;case 4:Ce=1e4;break;default:Ce=5e3}return Ce=se+Ce,V={id:_++,callback:X,priorityLevel:V,startTime:se,expirationTime:Ce,sortIndex:-1},se>pe?(V.sortIndex=se,e(p,V),n(m)===null&&V===n(p)&&(w?(F(H),H=-1):w=!0,K(I,se-pe))):(V.sortIndex=Ce,e(m,V),M||x||(M=!0,N||(N=!0,Z()))),V},s.unstable_shouldYield=G,s.unstable_wrapCallback=function(V){var X=g;return function(){var se=g;g=X;try{return V.apply(this,arguments)}finally{g=se}}}})(yh)),yh}var a_;function zM(){return a_||(a_=1,xh.exports=BM()),xh.exports}var Sh={exports:{}},Mi={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s_;function HM(){if(s_)return Mi;s_=1;var s=tm();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,p,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:m,containerInfo:p,implementation:_}}var u=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Mi.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Mi.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,_)},Mi.flushSync=function(m){var p=u.T,_=a.p;try{if(u.T=null,a.p=2,m)return m()}finally{u.T=p,a.p=_,a.d.f()}},Mi.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(m,p))},Mi.prefetchDNS=function(m){typeof m=="string"&&a.d.D(m)},Mi.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,v=h(_,p.crossOrigin),g=typeof p.integrity=="string"?p.integrity:void 0,x=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?a.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:g,fetchPriority:x}):_==="script"&&a.d.X(m,{crossOrigin:v,integrity:g,fetchPriority:x,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Mi.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=h(p.as,p.crossOrigin);a.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(m)},Mi.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,v=h(_,p.crossOrigin);a.d.L(m,_,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Mi.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=h(p.as,p.crossOrigin);a.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(m)},Mi.requestFormReset=function(m){a.d.r(m)},Mi.unstable_batchedUpdates=function(m,p){return m(p)},Mi.useFormState=function(m,p,_){return u.H.useFormState(m,p,_)},Mi.useFormStatus=function(){return u.H.useHostTransitionStatus()},Mi.version="19.2.7",Mi}var r_;function Gx(){if(r_)return Sh.exports;r_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Sh.exports=HM(),Sh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o_;function VM(){if(o_)return Dl;o_=1;var s=zM(),e=tm(),n=Gx();function a(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)i+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,r=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(r=i.return),t=i.return;while(t)}return i.tag===3?r:null}function u(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function h(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(a(188))}function p(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(a(188));return i!==t?null:t}for(var r=t,l=i;;){var f=r.return;if(f===null)break;var d=f.alternate;if(d===null){if(l=f.return,l!==null){r=l;continue}break}if(f.child===d.child){for(d=f.child;d;){if(d===r)return m(f),t;if(d===l)return m(f),i;d=d.sibling}throw Error(a(188))}if(r.return!==l.return)r=f,l=d;else{for(var E=!1,C=f.child;C;){if(C===r){E=!0,r=f,l=d;break}if(C===l){E=!0,l=f,r=d;break}C=C.sibling}if(!E){for(C=d.child;C;){if(C===r){E=!0,r=d,l=f;break}if(C===l){E=!0,l=d,r=f;break}C=C.sibling}if(!E)throw Error(a(189))}}if(r.alternate!==l)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?t:i}function _(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=_(t),i!==null)return i;t=t.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),F=Symbol.for("react.consumer"),O=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),G=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function Z(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var ce=Symbol.for("react.client.reference");function ie(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ce?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case w:return"Fragment";case y:return"Profiler";case S:return"StrictMode";case I:return"Suspense";case N:return"SuspenseList";case D:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case M:return"Portal";case O:return t.displayName||"Context";case F:return(t._context.displayName||"Context")+".Consumer";case R:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case H:return i=t.displayName||null,i!==null?i:ie(t.type)||"Memo";case T:i=t._payload,t=t._init;try{return ie(t(i))}catch{}}return null}var K=Array.isArray,V=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,se={pending:!1,data:null,method:null,action:null},pe=[],Ce=-1;function B(t){return{current:t}}function ee(t){0>Ce||(t.current=pe[Ce],pe[Ce]=null,Ce--)}function De(t,i){Ce++,pe[Ce]=t.current,t.current=i}var Te=B(null),qe=B(null),re=B(null),be=B(null);function he(t,i){switch(De(re,i),De(qe,t),De(Te,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?Mv(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=Mv(i),t=Ev(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ee(Te),De(Te,t)}function Ue(){ee(Te),ee(qe),ee(re)}function st(t){t.memoizedState!==null&&De(be,t);var i=Te.current,r=Ev(i,t.type);i!==r&&(De(qe,t),De(Te,r))}function et(t){qe.current===t&&(ee(Te),ee(qe)),be.current===t&&(ee(be),Tl._currentValue=se)}var bt,pt;function Tt(t){if(bt===void 0)try{throw Error()}catch(r){var i=r.stack.trim().match(/\n( *(at )?)/);bt=i&&i[1]||"",pt=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+bt+t+pt}var wt=!1;function Lt(t,i){if(!t||wt)return"";wt=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var Ne=function(){throw Error()};if(Object.defineProperty(Ne.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ne,[])}catch(xe){var de=xe}Reflect.construct(t,[],Ne)}else{try{Ne.call()}catch(xe){de=xe}t.call(Ne.prototype)}}else{try{throw Error()}catch(xe){de=xe}(Ne=t())&&typeof Ne.catch=="function"&&Ne.catch(function(){})}}catch(xe){if(xe&&de&&typeof xe.stack=="string")return[xe.stack,de.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),E=d[0],C=d[1];if(E&&C){var Y=E.split(`
`),fe=C.split(`
`);for(f=l=0;l<Y.length&&!Y[l].includes("DetermineComponentFrameRoot");)l++;for(;f<fe.length&&!fe[f].includes("DetermineComponentFrameRoot");)f++;if(l===Y.length||f===fe.length)for(l=Y.length-1,f=fe.length-1;1<=l&&0<=f&&Y[l]!==fe[f];)f--;for(;1<=l&&0<=f;l--,f--)if(Y[l]!==fe[f]){if(l!==1||f!==1)do if(l--,f--,0>f||Y[l]!==fe[f]){var Ee=`
`+Y[l].replace(" at new "," at ");return t.displayName&&Ee.includes("<anonymous>")&&(Ee=Ee.replace("<anonymous>",t.displayName)),Ee}while(1<=l&&0<=f);break}}}finally{wt=!1,Error.prepareStackTrace=r}return(r=t?t.displayName||t.name:"")?Tt(r):""}function nn(t,i){switch(t.tag){case 26:case 27:case 5:return Tt(t.type);case 16:return Tt("Lazy");case 13:return t.child!==i&&i!==null?Tt("Suspense Fallback"):Tt("Suspense");case 19:return Tt("SuspenseList");case 0:case 15:return Lt(t.type,!1);case 11:return Lt(t.type.render,!1);case 1:return Lt(t.type,!0);case 31:return Tt("Activity");default:return""}}function rn(t){try{var i="",r=null;do i+=nn(t,r),r=t,t=t.return;while(t);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var on=Object.prototype.hasOwnProperty,un=s.unstable_scheduleCallback,Ht=s.unstable_cancelCallback,jt=s.unstable_shouldYield,$=s.unstable_requestPaint,Bt=s.unstable_now,Pt=s.unstable_getCurrentPriorityLevel,z=s.unstable_ImmediatePriority,A=s.unstable_UserBlockingPriority,ne=s.unstable_NormalPriority,oe=s.unstable_LowPriority,ue=s.unstable_IdlePriority,Pe=s.log,He=s.unstable_setDisableYieldValue,_e=null,ge=null;function Be(t){if(typeof Pe=="function"&&He(t),ge&&typeof ge.setStrictMode=="function")try{ge.setStrictMode(_e,t)}catch{}}var Je=Math.clz32?Math.clz32:ot,We=Math.log,Ze=Math.LN2;function ot(t){return t>>>=0,t===0?32:31-(We(t)/Ze|0)|0}var je=256,at=262144,j=4194304;function Ve(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Se(t,i,r){var l=t.pendingLanes;if(l===0)return 0;var f=0,d=t.suspendedLanes,E=t.pingedLanes;t=t.warmLanes;var C=l&134217727;return C!==0?(l=C&~d,l!==0?f=Ve(l):(E&=C,E!==0?f=Ve(E):r||(r=C&~t,r!==0&&(f=Ve(r))))):(C=l&~d,C!==0?f=Ve(C):E!==0?f=Ve(E):r||(r=l&~t,r!==0&&(f=Ve(r)))),f===0?0:i!==0&&i!==f&&(i&d)===0&&(d=f&-f,r=i&-i,d>=r||d===32&&(r&4194048)!==0)?i:f}function Xe(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function tt(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Le(){var t=j;return j<<=1,(j&62914560)===0&&(j=4194304),t}function nt(t){for(var i=[],r=0;31>r;r++)i.push(t);return i}function rt(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function ln(t,i,r,l,f,d){var E=t.pendingLanes;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=r,t.entangledLanes&=r,t.errorRecoveryDisabledLanes&=r,t.shellSuspendCounter=0;var C=t.entanglements,Y=t.expirationTimes,fe=t.hiddenUpdates;for(r=E&~r;0<r;){var Ee=31-Je(r),Ne=1<<Ee;C[Ee]=0,Y[Ee]=-1;var de=fe[Ee];if(de!==null)for(fe[Ee]=null,Ee=0;Ee<de.length;Ee++){var xe=de[Ee];xe!==null&&(xe.lane&=-536870913)}r&=~Ne}l!==0&&Wt(t,l,0),d!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=d&~(E&~i))}function Wt(t,i,r){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-Je(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|r&261930}function Rn(t,i){var r=t.entangledLanes|=i;for(t=t.entanglements;r;){var l=31-Je(r),f=1<<l;f&i|t[l]&i&&(t[l]|=i),r&=~f}}function Jn(t,i){var r=i&-i;return r=(r&42)!==0?1:Ui(r),(r&(t.suspendedLanes|i))!==0?0:r}function Ui(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ji(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function wi(){var t=X.p;return t!==0?t:(t=window.event,t===void 0?32:qv(t.type))}function _i(t,i){var r=X.p;try{return X.p=t,i()}finally{X.p=r}}var ni=Math.random().toString(36).slice(2),pn="__reactFiber$"+ni,cn="__reactProps$"+ni,bn="__reactContainer$"+ni,ii="__reactEvents$"+ni,xi="__reactListeners$"+ni,ai="__reactHandles$"+ni,Vt="__reactResources$"+ni,yi="__reactMarker$"+ni;function Si(t){delete t[pn],delete t[cn],delete t[ii],delete t[xi],delete t[ai]}function ui(t){var i=t[pn];if(i)return i;for(var r=t.parentNode;r;){if(i=r[bn]||r[pn]){if(r=i.alternate,i.child!==null||r!==null&&r.child!==null)for(t=Dv(t);t!==null;){if(r=t[pn])return r;t=Dv(t)}return i}t=r,r=t.parentNode}return null}function Ri(t){if(t=t[pn]||t[bn]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function Q(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(a(33))}function me(t){var i=t[Vt];return i||(i=t[Vt]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function we(t){t[yi]=!0}var Oe=new Set,b={};function P(t,i){q(t,i),q(t+"Capture",i)}function q(t,i){for(b[t]=i,t=0;t<i.length;t++)Oe.add(i[t])}var U=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),W={},Me={};function Ge(t){return on.call(Me,t)?!0:on.call(W,t)?!1:U.test(t)?Me[t]=!0:(W[t]=!0,!1)}function Re(t,i,r){if(Ge(i))if(r===null)t.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+r)}}function Ie(t,i,r){if(r===null)t.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+r)}}function ze(t,i,r,l){if(l===null)t.removeAttribute(r);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttributeNS(i,r,""+l)}}function ke(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Qe(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ke(t,i,r){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,d=l.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(E){r=""+E,d.call(this,E)}}),Object.defineProperty(t,i,{enumerable:l.enumerable}),{getValue:function(){return r},setValue:function(E){r=""+E},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function vt(t){if(!t._valueTracker){var i=Qe(t)?"checked":"value";t._valueTracker=Ke(t,i,""+t[i])}}function ut(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var r=i.getValue(),l="";return t&&(l=Qe(t)?t.checked?"true":"false":t.value),t=l,t!==r?(i.setValue(t),!0):!1}function Mt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var At=/[\n"\\]/g;function qt(t){return t.replace(At,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function $e(t,i,r,l,f,d,E,C){t.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.type=E:t.removeAttribute("type"),i!=null?E==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+ke(i)):t.value!==""+ke(i)&&(t.value=""+ke(i)):E!=="submit"&&E!=="reset"||t.removeAttribute("value"),i!=null?Rt(t,E,ke(i)):r!=null?Rt(t,E,ke(r)):l!=null&&t.removeAttribute("value"),f==null&&d!=null&&(t.defaultChecked=!!d),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?t.name=""+ke(C):t.removeAttribute("name")}function Ln(t,i,r,l,f,d,E,C){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),i!=null||r!=null){if(!(d!=="submit"&&d!=="reset"||i!=null)){vt(t);return}r=r!=null?""+ke(r):"",i=i!=null?""+ke(i):r,C||i===t.value||(t.value=i),t.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=C?t.checked:!!l,t.defaultChecked=!!l,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(t.name=E),vt(t)}function Rt(t,i,r){i==="number"&&Mt(t.ownerDocument)===t||t.defaultValue===""+r||(t.defaultValue=""+r)}function Nn(t,i,r,l){if(t=t.options,i){i={};for(var f=0;f<r.length;f++)i["$"+r[f]]=!0;for(r=0;r<t.length;r++)f=i.hasOwnProperty("$"+t[r].value),t[r].selected!==f&&(t[r].selected=f),f&&l&&(t[r].defaultSelected=!0)}else{for(r=""+ke(r),i=null,f=0;f<t.length;f++){if(t[f].value===r){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function Un(t,i,r){if(i!=null&&(i=""+ke(i),i!==t.value&&(t.value=i),r==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=r!=null?""+ke(r):""}function fi(t,i,r,l){if(i==null){if(l!=null){if(r!=null)throw Error(a(92));if(K(l)){if(1<l.length)throw Error(a(93));l=l[0]}r=l}r==null&&(r=""),i=r}r=ke(i),t.defaultValue=r,l=t.textContent,l===r&&l!==""&&l!==null&&(t.value=l),vt(t)}function si(t,i){if(i){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=i;return}}t.textContent=i}var mt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Nt(t,i,r){var l=i.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,r):typeof r!="number"||r===0||mt.has(i)?i==="float"?t.cssFloat=r:t[i]=(""+r).trim():t[i]=r+"px"}function Sn(t,i,r){if(i!=null&&typeof i!="object")throw Error(a(62));if(t=t.style,r!=null){for(var l in r)!r.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&r[f]!==l&&Nt(t,f,l)}else for(var d in i)i.hasOwnProperty(d)&&Nt(t,d,i[d])}function It(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mn=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Vi=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Gi(t){return Vi.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function pa(){}var Vo=null;function Go(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ka=null,Xa=null;function ko(t){var i=Ri(t);if(i&&(t=i.stateNode)){var r=t[cn]||null;e:switch(t=i.stateNode,i.type){case"input":if($e(t,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),i=r.name,r.type==="radio"&&i!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+qt(""+i)+'"][type="radio"]'),i=0;i<r.length;i++){var l=r[i];if(l!==t&&l.form===t.form){var f=l[cn]||null;if(!f)throw Error(a(90));$e(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<r.length;i++)l=r[i],l.form===t.form&&ut(l)}break e;case"textarea":Un(t,r.value,r.defaultValue);break e;case"select":i=r.value,i!=null&&Nn(t,!!r.multiple,i,!1)}}}var _s=!1;function Xo(t,i,r){if(_s)return t(i,r);_s=!0;try{var l=t(i);return l}finally{if(_s=!1,(ka!==null||Xa!==null)&&(Kc(),ka&&(i=ka,t=Xa,Xa=ka=null,ko(i),t)))for(i=0;i<t.length;i++)ko(t[i])}}function xs(t,i){var r=t.stateNode;if(r===null)return null;var l=r[cn]||null;if(l===null)return null;r=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(a(231,i,typeof r));return r}var $i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pr=!1;if($i)try{var ve={};Object.defineProperty(ve,"passive",{get:function(){Pr=!0}}),window.addEventListener("test",ve,ve),window.removeEventListener("test",ve,ve)}catch{Pr=!1}var Fe=null,lt=null,St=null;function gn(){if(St)return St;var t,i=lt,r=i.length,l,f="value"in Fe?Fe.value:Fe.textContent,d=f.length;for(t=0;t<r&&i[t]===f[t];t++);var E=r-t;for(l=1;l<=E&&i[r-l]===f[d-l];l++);return St=f.slice(t,1<l?1-l:void 0)}function Et(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Mn(){return!0}function an(){return!1}function vn(t){function i(r,l,f,d,E){this._reactName=r,this._targetInst=f,this.type=l,this.nativeEvent=d,this.target=E,this.currentTarget=null;for(var C in t)t.hasOwnProperty(C)&&(r=t[C],this[C]=r?r(d):d[C]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Mn:an,this.isPropagationStopped=an,this}return v(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Mn)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Mn)},persist:function(){},isPersistent:Mn}),i}var On={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wn=vn(On),Wa=v({},On,{view:0,detail:0}),nr=vn(Wa),ir,ri,Ci,ba=v({},Wa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ar,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ci&&(Ci&&t.type==="mousemove"?(ir=t.screenX-Ci.screenX,ri=t.screenY-Ci.screenY):ri=ir=0,Ci=t),ir)},movementY:function(t){return"movementY"in t?t.movementY:ri}}),qa=vn(ba),fc=v({},ba,{dataTransfer:0}),dc=vn(fc),hc=v({},Wa,{relatedTarget:0}),yt=vn(hc),Ye=v({},On,{animationName:0,elapsedTime:0,pseudoElement:0}),Cn=vn(Ye),Fn=v({},On,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Tn=vn(Fn),ea=v({},On,{data:0}),qn=vn(ea),Ta={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wo(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Sf[t])?!!i[t]:!1}function ar(){return Wo}var Xy=v({},Wa,{key:function(t){if(t.key){var i=Ta[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Et(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?pc[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ar,charCode:function(t){return t.type==="keypress"?Et(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Et(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Wy=vn(Xy),qy=v({},ba,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wm=vn(qy),Yy=v({},Wa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ar}),Zy=vn(Yy),jy=v({},On,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ky=vn(jy),Qy=v({},ba,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Jy=vn(Qy),$y=v({},On,{newState:0,oldState:0}),eS=vn($y),tS=[9,13,27,32],Mf=$i&&"CompositionEvent"in window,qo=null;$i&&"documentMode"in document&&(qo=document.documentMode);var nS=$i&&"TextEvent"in window&&!qo,Rm=$i&&(!Mf||qo&&8<qo&&11>=qo),Cm=" ",Dm=!1;function Lm(t,i){switch(t){case"keyup":return tS.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ir=!1;function iS(t,i){switch(t){case"compositionend":return Nm(i);case"keypress":return i.which!==32?null:(Dm=!0,Cm);case"textInput":return t=i.data,t===Cm&&Dm?null:t;default:return null}}function aS(t,i){if(Ir)return t==="compositionend"||!Mf&&Lm(t,i)?(t=gn(),St=lt=Fe=null,Ir=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Rm&&i.locale!=="ko"?null:i.data;default:return null}}var sS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Um(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!sS[t.type]:i==="textarea"}function Om(t,i,r,l){ka?Xa?Xa.push(l):Xa=[l]:ka=l,i=iu(i,"onChange"),0<i.length&&(r=new Wn("onChange","change",null,r,l),t.push({event:r,listeners:i}))}var Yo=null,Zo=null;function rS(t){gv(t,0)}function mc(t){var i=Q(t);if(ut(i))return t}function Pm(t,i){if(t==="change")return i}var Im=!1;if($i){var Ef;if($i){var bf="oninput"in document;if(!bf){var Fm=document.createElement("div");Fm.setAttribute("oninput","return;"),bf=typeof Fm.oninput=="function"}Ef=bf}else Ef=!1;Im=Ef&&(!document.documentMode||9<document.documentMode)}function Bm(){Yo&&(Yo.detachEvent("onpropertychange",zm),Zo=Yo=null)}function zm(t){if(t.propertyName==="value"&&mc(Zo)){var i=[];Om(i,Zo,t,Go(t)),Xo(rS,i)}}function oS(t,i,r){t==="focusin"?(Bm(),Yo=i,Zo=r,Yo.attachEvent("onpropertychange",zm)):t==="focusout"&&Bm()}function lS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return mc(Zo)}function cS(t,i){if(t==="click")return mc(i)}function uS(t,i){if(t==="input"||t==="change")return mc(i)}function fS(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ki=typeof Object.is=="function"?Object.is:fS;function jo(t,i){if(ki(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var r=Object.keys(t),l=Object.keys(i);if(r.length!==l.length)return!1;for(l=0;l<r.length;l++){var f=r[l];if(!on.call(i,f)||!ki(t[f],i[f]))return!1}return!0}function Hm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Vm(t,i){var r=Hm(t);t=0;for(var l;r;){if(r.nodeType===3){if(l=t+r.textContent.length,t<=i&&l>=i)return{node:r,offset:i-t};t=l}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Hm(r)}}function Gm(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Gm(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function km(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=Mt(t.document);i instanceof t.HTMLIFrameElement;){try{var r=typeof i.contentWindow.location.href=="string"}catch{r=!1}if(r)t=i.contentWindow;else break;i=Mt(t.document)}return i}function Tf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var dS=$i&&"documentMode"in document&&11>=document.documentMode,Fr=null,Af=null,Ko=null,wf=!1;function Xm(t,i,r){var l=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;wf||Fr==null||Fr!==Mt(l)||(l=Fr,"selectionStart"in l&&Tf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ko&&jo(Ko,l)||(Ko=l,l=iu(Af,"onSelect"),0<l.length&&(i=new Wn("onSelect","select",null,i,r),t.push({event:i,listeners:l}),i.target=Fr)))}function sr(t,i){var r={};return r[t.toLowerCase()]=i.toLowerCase(),r["Webkit"+t]="webkit"+i,r["Moz"+t]="moz"+i,r}var Br={animationend:sr("Animation","AnimationEnd"),animationiteration:sr("Animation","AnimationIteration"),animationstart:sr("Animation","AnimationStart"),transitionrun:sr("Transition","TransitionRun"),transitionstart:sr("Transition","TransitionStart"),transitioncancel:sr("Transition","TransitionCancel"),transitionend:sr("Transition","TransitionEnd")},Rf={},Wm={};$i&&(Wm=document.createElement("div").style,"AnimationEvent"in window||(delete Br.animationend.animation,delete Br.animationiteration.animation,delete Br.animationstart.animation),"TransitionEvent"in window||delete Br.transitionend.transition);function rr(t){if(Rf[t])return Rf[t];if(!Br[t])return t;var i=Br[t],r;for(r in i)if(i.hasOwnProperty(r)&&r in Wm)return Rf[t]=i[r];return t}var qm=rr("animationend"),Ym=rr("animationiteration"),Zm=rr("animationstart"),hS=rr("transitionrun"),pS=rr("transitionstart"),mS=rr("transitioncancel"),jm=rr("transitionend"),Km=new Map,Cf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Cf.push("scrollEnd");function ma(t,i){Km.set(t,i),P(i,[t])}var gc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ta=[],zr=0,Df=0;function vc(){for(var t=zr,i=Df=zr=0;i<t;){var r=ta[i];ta[i++]=null;var l=ta[i];ta[i++]=null;var f=ta[i];ta[i++]=null;var d=ta[i];if(ta[i++]=null,l!==null&&f!==null){var E=l.pending;E===null?f.next=f:(f.next=E.next,E.next=f),l.pending=f}d!==0&&Qm(r,f,d)}}function _c(t,i,r,l){ta[zr++]=t,ta[zr++]=i,ta[zr++]=r,ta[zr++]=l,Df|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Lf(t,i,r,l){return _c(t,i,r,l),xc(t)}function or(t,i){return _c(t,null,null,i),xc(t)}function Qm(t,i,r){t.lanes|=r;var l=t.alternate;l!==null&&(l.lanes|=r);for(var f=!1,d=t.return;d!==null;)d.childLanes|=r,l=d.alternate,l!==null&&(l.childLanes|=r),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(f=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,f&&i!==null&&(f=31-Je(r),t=d.hiddenUpdates,l=t[f],l===null?t[f]=[i]:l.push(i),i.lane=r|536870912),d):null}function xc(t){if(50<_l)throw _l=0,Hd=null,Error(a(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var Hr={};function gS(t,i,r,l){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xi(t,i,r,l){return new gS(t,i,r,l)}function Nf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ya(t,i){var r=t.alternate;return r===null?(r=Xi(t.tag,i,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=i,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&65011712,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,i=t.dependencies,r.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r.refCleanup=t.refCleanup,r}function Jm(t,i){t.flags&=65011714;var r=t.alternate;return r===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=r.childLanes,t.lanes=r.lanes,t.child=r.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=r.memoizedProps,t.memoizedState=r.memoizedState,t.updateQueue=r.updateQueue,t.type=r.type,i=r.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function yc(t,i,r,l,f,d){var E=0;if(l=t,typeof t=="function")Nf(t)&&(E=1);else if(typeof t=="string")E=SM(t,r,Te.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case D:return t=Xi(31,r,i,f),t.elementType=D,t.lanes=d,t;case w:return lr(r.children,f,d,i);case S:E=8,f|=24;break;case y:return t=Xi(12,r,i,f|2),t.elementType=y,t.lanes=d,t;case I:return t=Xi(13,r,i,f),t.elementType=I,t.lanes=d,t;case N:return t=Xi(19,r,i,f),t.elementType=N,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case O:E=10;break e;case F:E=9;break e;case R:E=11;break e;case H:E=14;break e;case T:E=16,l=null;break e}E=29,r=Error(a(130,t===null?"null":typeof t,"")),l=null}return i=Xi(E,r,i,f),i.elementType=t,i.type=l,i.lanes=d,i}function lr(t,i,r,l){return t=Xi(7,t,l,i),t.lanes=r,t}function Uf(t,i,r){return t=Xi(6,t,null,i),t.lanes=r,t}function $m(t){var i=Xi(18,null,null,0);return i.stateNode=t,i}function Of(t,i,r){return i=Xi(4,t.children!==null?t.children:[],t.key,i),i.lanes=r,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var eg=new WeakMap;function na(t,i){if(typeof t=="object"&&t!==null){var r=eg.get(t);return r!==void 0?r:(i={value:t,source:i,stack:rn(i)},eg.set(t,i),i)}return{value:t,source:i,stack:rn(i)}}var Vr=[],Gr=0,Sc=null,Qo=0,ia=[],aa=0,ys=null,Aa=1,wa="";function Za(t,i){Vr[Gr++]=Qo,Vr[Gr++]=Sc,Sc=t,Qo=i}function tg(t,i,r){ia[aa++]=Aa,ia[aa++]=wa,ia[aa++]=ys,ys=t;var l=Aa;t=wa;var f=32-Je(l)-1;l&=~(1<<f),r+=1;var d=32-Je(i)+f;if(30<d){var E=f-f%5;d=(l&(1<<E)-1).toString(32),l>>=E,f-=E,Aa=1<<32-Je(i)+f|r<<f|l,wa=d+t}else Aa=1<<d|r<<f|l,wa=t}function Pf(t){t.return!==null&&(Za(t,1),tg(t,1,0))}function If(t){for(;t===Sc;)Sc=Vr[--Gr],Vr[Gr]=null,Qo=Vr[--Gr],Vr[Gr]=null;for(;t===ys;)ys=ia[--aa],ia[aa]=null,wa=ia[--aa],ia[aa]=null,Aa=ia[--aa],ia[aa]=null}function ng(t,i){ia[aa++]=Aa,ia[aa++]=wa,ia[aa++]=ys,Aa=i.id,wa=i.overflow,ys=t}var di=null,An=null,Kt=!1,Ss=null,sa=!1,Ff=Error(a(519));function Ms(t){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Jo(na(i,t)),Ff}function ig(t){var i=t.stateNode,r=t.type,l=t.memoizedProps;switch(i[pn]=t,i[cn]=l,r){case"dialog":kt("cancel",i),kt("close",i);break;case"iframe":case"object":case"embed":kt("load",i);break;case"video":case"audio":for(r=0;r<yl.length;r++)kt(yl[r],i);break;case"source":kt("error",i);break;case"img":case"image":case"link":kt("error",i),kt("load",i);break;case"details":kt("toggle",i);break;case"input":kt("invalid",i),Ln(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":kt("invalid",i);break;case"textarea":kt("invalid",i),fi(i,l.value,l.defaultValue,l.children)}r=l.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||i.textContent===""+r||l.suppressHydrationWarning===!0||yv(i.textContent,r)?(l.popover!=null&&(kt("beforetoggle",i),kt("toggle",i)),l.onScroll!=null&&kt("scroll",i),l.onScrollEnd!=null&&kt("scrollend",i),l.onClick!=null&&(i.onclick=pa),i=!0):i=!1,i||Ms(t,!0)}function ag(t){for(di=t.return;di;)switch(di.tag){case 5:case 31:case 13:sa=!1;return;case 27:case 3:sa=!0;return;default:di=di.return}}function kr(t){if(t!==di)return!1;if(!Kt)return ag(t),Kt=!0,!1;var i=t.tag,r;if((r=i!==3&&i!==27)&&((r=i===5)&&(r=t.type,r=!(r!=="form"&&r!=="button")||th(t.type,t.memoizedProps)),r=!r),r&&An&&Ms(t),ag(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));An=Cv(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));An=Cv(t)}else i===27?(i=An,Is(t.type)?(t=rh,rh=null,An=t):An=i):An=di?oa(t.stateNode.nextSibling):null;return!0}function cr(){An=di=null,Kt=!1}function Bf(){var t=Ss;return t!==null&&(Fi===null?Fi=t:Fi.push.apply(Fi,t),Ss=null),t}function Jo(t){Ss===null?Ss=[t]:Ss.push(t)}var zf=B(null),ur=null,ja=null;function Es(t,i,r){De(zf,i._currentValue),i._currentValue=r}function Ka(t){t._currentValue=zf.current,ee(zf)}function Hf(t,i,r){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===r)break;t=t.return}}function Vf(t,i,r,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var d=f.dependencies;if(d!==null){var E=f.child;d=d.firstContext;e:for(;d!==null;){var C=d;d=f;for(var Y=0;Y<i.length;Y++)if(C.context===i[Y]){d.lanes|=r,C=d.alternate,C!==null&&(C.lanes|=r),Hf(d.return,r,t),l||(E=null);break e}d=C.next}}else if(f.tag===18){if(E=f.return,E===null)throw Error(a(341));E.lanes|=r,d=E.alternate,d!==null&&(d.lanes|=r),Hf(E,r,t),E=null}else E=f.child;if(E!==null)E.return=f;else for(E=f;E!==null;){if(E===t){E=null;break}if(f=E.sibling,f!==null){f.return=E.return,E=f;break}E=E.return}f=E}}function Xr(t,i,r,l){t=null;for(var f=i,d=!1;f!==null;){if(!d){if((f.flags&524288)!==0)d=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var E=f.alternate;if(E===null)throw Error(a(387));if(E=E.memoizedProps,E!==null){var C=f.type;ki(f.pendingProps.value,E.value)||(t!==null?t.push(C):t=[C])}}else if(f===be.current){if(E=f.alternate,E===null)throw Error(a(387));E.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(Tl):t=[Tl])}f=f.return}t!==null&&Vf(i,t,r,l),i.flags|=262144}function Mc(t){for(t=t.firstContext;t!==null;){if(!ki(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function fr(t){ur=t,ja=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function hi(t){return sg(ur,t)}function Ec(t,i){return ur===null&&fr(t),sg(t,i)}function sg(t,i){var r=i._currentValue;if(i={context:i,memoizedValue:r,next:null},ja===null){if(t===null)throw Error(a(308));ja=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else ja=ja.next=i;return r}var vS=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(r,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(r){return r()})}},_S=s.unstable_scheduleCallback,xS=s.unstable_NormalPriority,Yn={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Gf(){return{controller:new vS,data:new Map,refCount:0}}function $o(t){t.refCount--,t.refCount===0&&_S(xS,function(){t.controller.abort()})}var el=null,kf=0,Wr=0,qr=null;function yS(t,i){if(el===null){var r=el=[];kf=0,Wr=qd(),qr={status:"pending",value:void 0,then:function(l){r.push(l)}}}return kf++,i.then(rg,rg),i}function rg(){if(--kf===0&&el!==null){qr!==null&&(qr.status="fulfilled");var t=el;el=null,Wr=0,qr=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function SS(t,i){var r=[],l={status:"pending",value:null,reason:null,then:function(f){r.push(f)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<r.length;f++)(0,r[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<r.length;f++)(0,r[f])(void 0)}),l}var og=V.S;V.S=function(t,i){X0=Bt(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&yS(t,i),og!==null&&og(t,i)};var dr=B(null);function Xf(){var t=dr.current;return t!==null?t:En.pooledCache}function bc(t,i){i===null?De(dr,dr.current):De(dr,i.pool)}function lg(){var t=Xf();return t===null?null:{parent:Yn._currentValue,pool:t}}var Yr=Error(a(460)),Wf=Error(a(474)),Tc=Error(a(542)),Ac={then:function(){}};function cg(t){return t=t.status,t==="fulfilled"||t==="rejected"}function ug(t,i,r){switch(r=t[r],r===void 0?t.push(i):r!==i&&(i.then(pa,pa),i=r),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,dg(t),t;default:if(typeof i.status=="string")i.then(pa,pa);else{if(t=En,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,dg(t),t}throw pr=i,Yr}}function hr(t){try{var i=t._init;return i(t._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(pr=r,Yr):r}}var pr=null;function fg(){if(pr===null)throw Error(a(459));var t=pr;return pr=null,t}function dg(t){if(t===Yr||t===Tc)throw Error(a(483))}var Zr=null,tl=0;function wc(t){var i=tl;return tl+=1,Zr===null&&(Zr=[]),ug(Zr,t,i)}function nl(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function Rc(t,i){throw i.$$typeof===g?Error(a(525)):(t=Object.prototype.toString.call(i),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function hg(t){function i(ae,J){if(t){var le=ae.deletions;le===null?(ae.deletions=[J],ae.flags|=16):le.push(J)}}function r(ae,J){if(!t)return null;for(;J!==null;)i(ae,J),J=J.sibling;return null}function l(ae){for(var J=new Map;ae!==null;)ae.key!==null?J.set(ae.key,ae):J.set(ae.index,ae),ae=ae.sibling;return J}function f(ae,J){return ae=Ya(ae,J),ae.index=0,ae.sibling=null,ae}function d(ae,J,le){return ae.index=le,t?(le=ae.alternate,le!==null?(le=le.index,le<J?(ae.flags|=67108866,J):le):(ae.flags|=67108866,J)):(ae.flags|=1048576,J)}function E(ae){return t&&ae.alternate===null&&(ae.flags|=67108866),ae}function C(ae,J,le,Ae){return J===null||J.tag!==6?(J=Uf(le,ae.mode,Ae),J.return=ae,J):(J=f(J,le),J.return=ae,J)}function Y(ae,J,le,Ae){var gt=le.type;return gt===w?Ee(ae,J,le.props.children,Ae,le.key):J!==null&&(J.elementType===gt||typeof gt=="object"&&gt!==null&&gt.$$typeof===T&&hr(gt)===J.type)?(J=f(J,le.props),nl(J,le),J.return=ae,J):(J=yc(le.type,le.key,le.props,null,ae.mode,Ae),nl(J,le),J.return=ae,J)}function fe(ae,J,le,Ae){return J===null||J.tag!==4||J.stateNode.containerInfo!==le.containerInfo||J.stateNode.implementation!==le.implementation?(J=Of(le,ae.mode,Ae),J.return=ae,J):(J=f(J,le.children||[]),J.return=ae,J)}function Ee(ae,J,le,Ae,gt){return J===null||J.tag!==7?(J=lr(le,ae.mode,Ae,gt),J.return=ae,J):(J=f(J,le),J.return=ae,J)}function Ne(ae,J,le){if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return J=Uf(""+J,ae.mode,le),J.return=ae,J;if(typeof J=="object"&&J!==null){switch(J.$$typeof){case x:return le=yc(J.type,J.key,J.props,null,ae.mode,le),nl(le,J),le.return=ae,le;case M:return J=Of(J,ae.mode,le),J.return=ae,J;case T:return J=hr(J),Ne(ae,J,le)}if(K(J)||Z(J))return J=lr(J,ae.mode,le,null),J.return=ae,J;if(typeof J.then=="function")return Ne(ae,wc(J),le);if(J.$$typeof===O)return Ne(ae,Ec(ae,J),le);Rc(ae,J)}return null}function de(ae,J,le,Ae){var gt=J!==null?J.key:null;if(typeof le=="string"&&le!==""||typeof le=="number"||typeof le=="bigint")return gt!==null?null:C(ae,J,""+le,Ae);if(typeof le=="object"&&le!==null){switch(le.$$typeof){case x:return le.key===gt?Y(ae,J,le,Ae):null;case M:return le.key===gt?fe(ae,J,le,Ae):null;case T:return le=hr(le),de(ae,J,le,Ae)}if(K(le)||Z(le))return gt!==null?null:Ee(ae,J,le,Ae,null);if(typeof le.then=="function")return de(ae,J,wc(le),Ae);if(le.$$typeof===O)return de(ae,J,Ec(ae,le),Ae);Rc(ae,le)}return null}function xe(ae,J,le,Ae,gt){if(typeof Ae=="string"&&Ae!==""||typeof Ae=="number"||typeof Ae=="bigint")return ae=ae.get(le)||null,C(J,ae,""+Ae,gt);if(typeof Ae=="object"&&Ae!==null){switch(Ae.$$typeof){case x:return ae=ae.get(Ae.key===null?le:Ae.key)||null,Y(J,ae,Ae,gt);case M:return ae=ae.get(Ae.key===null?le:Ae.key)||null,fe(J,ae,Ae,gt);case T:return Ae=hr(Ae),xe(ae,J,le,Ae,gt)}if(K(Ae)||Z(Ae))return ae=ae.get(le)||null,Ee(J,ae,Ae,gt,null);if(typeof Ae.then=="function")return xe(ae,J,le,wc(Ae),gt);if(Ae.$$typeof===O)return xe(ae,J,le,Ec(J,Ae),gt);Rc(J,Ae)}return null}function ct(ae,J,le,Ae){for(var gt=null,en=null,ft=J,Ot=J=0,Zt=null;ft!==null&&Ot<le.length;Ot++){ft.index>Ot?(Zt=ft,ft=null):Zt=ft.sibling;var tn=de(ae,ft,le[Ot],Ae);if(tn===null){ft===null&&(ft=Zt);break}t&&ft&&tn.alternate===null&&i(ae,ft),J=d(tn,J,Ot),en===null?gt=tn:en.sibling=tn,en=tn,ft=Zt}if(Ot===le.length)return r(ae,ft),Kt&&Za(ae,Ot),gt;if(ft===null){for(;Ot<le.length;Ot++)ft=Ne(ae,le[Ot],Ae),ft!==null&&(J=d(ft,J,Ot),en===null?gt=ft:en.sibling=ft,en=ft);return Kt&&Za(ae,Ot),gt}for(ft=l(ft);Ot<le.length;Ot++)Zt=xe(ft,ae,Ot,le[Ot],Ae),Zt!==null&&(t&&Zt.alternate!==null&&ft.delete(Zt.key===null?Ot:Zt.key),J=d(Zt,J,Ot),en===null?gt=Zt:en.sibling=Zt,en=Zt);return t&&ft.forEach(function(Vs){return i(ae,Vs)}),Kt&&Za(ae,Ot),gt}function _t(ae,J,le,Ae){if(le==null)throw Error(a(151));for(var gt=null,en=null,ft=J,Ot=J=0,Zt=null,tn=le.next();ft!==null&&!tn.done;Ot++,tn=le.next()){ft.index>Ot?(Zt=ft,ft=null):Zt=ft.sibling;var Vs=de(ae,ft,tn.value,Ae);if(Vs===null){ft===null&&(ft=Zt);break}t&&ft&&Vs.alternate===null&&i(ae,ft),J=d(Vs,J,Ot),en===null?gt=Vs:en.sibling=Vs,en=Vs,ft=Zt}if(tn.done)return r(ae,ft),Kt&&Za(ae,Ot),gt;if(ft===null){for(;!tn.done;Ot++,tn=le.next())tn=Ne(ae,tn.value,Ae),tn!==null&&(J=d(tn,J,Ot),en===null?gt=tn:en.sibling=tn,en=tn);return Kt&&Za(ae,Ot),gt}for(ft=l(ft);!tn.done;Ot++,tn=le.next())tn=xe(ft,ae,Ot,tn.value,Ae),tn!==null&&(t&&tn.alternate!==null&&ft.delete(tn.key===null?Ot:tn.key),J=d(tn,J,Ot),en===null?gt=tn:en.sibling=tn,en=tn);return t&&ft.forEach(function(NM){return i(ae,NM)}),Kt&&Za(ae,Ot),gt}function yn(ae,J,le,Ae){if(typeof le=="object"&&le!==null&&le.type===w&&le.key===null&&(le=le.props.children),typeof le=="object"&&le!==null){switch(le.$$typeof){case x:e:{for(var gt=le.key;J!==null;){if(J.key===gt){if(gt=le.type,gt===w){if(J.tag===7){r(ae,J.sibling),Ae=f(J,le.props.children),Ae.return=ae,ae=Ae;break e}}else if(J.elementType===gt||typeof gt=="object"&&gt!==null&&gt.$$typeof===T&&hr(gt)===J.type){r(ae,J.sibling),Ae=f(J,le.props),nl(Ae,le),Ae.return=ae,ae=Ae;break e}r(ae,J);break}else i(ae,J);J=J.sibling}le.type===w?(Ae=lr(le.props.children,ae.mode,Ae,le.key),Ae.return=ae,ae=Ae):(Ae=yc(le.type,le.key,le.props,null,ae.mode,Ae),nl(Ae,le),Ae.return=ae,ae=Ae)}return E(ae);case M:e:{for(gt=le.key;J!==null;){if(J.key===gt)if(J.tag===4&&J.stateNode.containerInfo===le.containerInfo&&J.stateNode.implementation===le.implementation){r(ae,J.sibling),Ae=f(J,le.children||[]),Ae.return=ae,ae=Ae;break e}else{r(ae,J);break}else i(ae,J);J=J.sibling}Ae=Of(le,ae.mode,Ae),Ae.return=ae,ae=Ae}return E(ae);case T:return le=hr(le),yn(ae,J,le,Ae)}if(K(le))return ct(ae,J,le,Ae);if(Z(le)){if(gt=Z(le),typeof gt!="function")throw Error(a(150));return le=gt.call(le),_t(ae,J,le,Ae)}if(typeof le.then=="function")return yn(ae,J,wc(le),Ae);if(le.$$typeof===O)return yn(ae,J,Ec(ae,le),Ae);Rc(ae,le)}return typeof le=="string"&&le!==""||typeof le=="number"||typeof le=="bigint"?(le=""+le,J!==null&&J.tag===6?(r(ae,J.sibling),Ae=f(J,le),Ae.return=ae,ae=Ae):(r(ae,J),Ae=Uf(le,ae.mode,Ae),Ae.return=ae,ae=Ae),E(ae)):r(ae,J)}return function(ae,J,le,Ae){try{tl=0;var gt=yn(ae,J,le,Ae);return Zr=null,gt}catch(ft){if(ft===Yr||ft===Tc)throw ft;var en=Xi(29,ft,null,ae.mode);return en.lanes=Ae,en.return=ae,en}finally{}}}var mr=hg(!0),pg=hg(!1),bs=!1;function qf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Yf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ts(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function As(t,i,r){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(sn&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=xc(t),Qm(t,null,r),i}return _c(t,l,i,r),xc(t)}function il(t,i,r){if(i=i.updateQueue,i!==null&&(i=i.shared,(r&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,r|=l,i.lanes=r,Rn(t,r)}}function Zf(t,i){var r=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,r===l)){var f=null,d=null;if(r=r.firstBaseUpdate,r!==null){do{var E={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};d===null?f=d=E:d=d.next=E,r=r.next}while(r!==null);d===null?f=d=i:d=d.next=i}else f=d=i;r={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=i:t.next=i,r.lastBaseUpdate=i}var jf=!1;function al(){if(jf){var t=qr;if(t!==null)throw t}}function sl(t,i,r,l){jf=!1;var f=t.updateQueue;bs=!1;var d=f.firstBaseUpdate,E=f.lastBaseUpdate,C=f.shared.pending;if(C!==null){f.shared.pending=null;var Y=C,fe=Y.next;Y.next=null,E===null?d=fe:E.next=fe,E=Y;var Ee=t.alternate;Ee!==null&&(Ee=Ee.updateQueue,C=Ee.lastBaseUpdate,C!==E&&(C===null?Ee.firstBaseUpdate=fe:C.next=fe,Ee.lastBaseUpdate=Y))}if(d!==null){var Ne=f.baseState;E=0,Ee=fe=Y=null,C=d;do{var de=C.lane&-536870913,xe=de!==C.lane;if(xe?(Yt&de)===de:(l&de)===de){de!==0&&de===Wr&&(jf=!0),Ee!==null&&(Ee=Ee.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});e:{var ct=t,_t=C;de=i;var yn=r;switch(_t.tag){case 1:if(ct=_t.payload,typeof ct=="function"){Ne=ct.call(yn,Ne,de);break e}Ne=ct;break e;case 3:ct.flags=ct.flags&-65537|128;case 0:if(ct=_t.payload,de=typeof ct=="function"?ct.call(yn,Ne,de):ct,de==null)break e;Ne=v({},Ne,de);break e;case 2:bs=!0}}de=C.callback,de!==null&&(t.flags|=64,xe&&(t.flags|=8192),xe=f.callbacks,xe===null?f.callbacks=[de]:xe.push(de))}else xe={lane:de,tag:C.tag,payload:C.payload,callback:C.callback,next:null},Ee===null?(fe=Ee=xe,Y=Ne):Ee=Ee.next=xe,E|=de;if(C=C.next,C===null){if(C=f.shared.pending,C===null)break;xe=C,C=xe.next,xe.next=null,f.lastBaseUpdate=xe,f.shared.pending=null}}while(!0);Ee===null&&(Y=Ne),f.baseState=Y,f.firstBaseUpdate=fe,f.lastBaseUpdate=Ee,d===null&&(f.shared.lanes=0),Ls|=E,t.lanes=E,t.memoizedState=Ne}}function mg(t,i){if(typeof t!="function")throw Error(a(191,t));t.call(i)}function gg(t,i){var r=t.callbacks;if(r!==null)for(t.callbacks=null,t=0;t<r.length;t++)mg(r[t],i)}var jr=B(null),Cc=B(0);function vg(t,i){t=ss,De(Cc,t),De(jr,i),ss=t|i.baseLanes}function Kf(){De(Cc,ss),De(jr,jr.current)}function Qf(){ss=Cc.current,ee(jr),ee(Cc)}var Wi=B(null),ra=null;function ws(t){var i=t.alternate;De(Gn,Gn.current&1),De(Wi,t),ra===null&&(i===null||jr.current!==null||i.memoizedState!==null)&&(ra=t)}function Jf(t){De(Gn,Gn.current),De(Wi,t),ra===null&&(ra=t)}function _g(t){t.tag===22?(De(Gn,Gn.current),De(Wi,t),ra===null&&(ra=t)):Rs()}function Rs(){De(Gn,Gn.current),De(Wi,Wi.current)}function qi(t){ee(Wi),ra===t&&(ra=null),ee(Gn)}var Gn=B(0);function Dc(t){for(var i=t;i!==null;){if(i.tag===13){var r=i.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||ah(r)||sh(r)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Qa=0,Ut=null,_n=null,Zn=null,Lc=!1,Kr=!1,gr=!1,Nc=0,rl=0,Qr=null,MS=0;function Bn(){throw Error(a(321))}function $f(t,i){if(i===null)return!1;for(var r=0;r<i.length&&r<t.length;r++)if(!ki(t[r],i[r]))return!1;return!0}function ed(t,i,r,l,f,d){return Qa=d,Ut=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,V.H=t===null||t.memoizedState===null?t0:md,gr=!1,d=r(l,f),gr=!1,Kr&&(d=yg(i,r,l,f)),xg(t),d}function xg(t){V.H=cl;var i=_n!==null&&_n.next!==null;if(Qa=0,Zn=_n=Ut=null,Lc=!1,rl=0,Qr=null,i)throw Error(a(300));t===null||jn||(t=t.dependencies,t!==null&&Mc(t)&&(jn=!0))}function yg(t,i,r,l){Ut=t;var f=0;do{if(Kr&&(Qr=null),rl=0,Kr=!1,25<=f)throw Error(a(301));if(f+=1,Zn=_n=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}V.H=n0,d=i(r,l)}while(Kr);return d}function ES(){var t=V.H,i=t.useState()[0];return i=typeof i.then=="function"?ol(i):i,t=t.useState()[0],(_n!==null?_n.memoizedState:null)!==t&&(Ut.flags|=1024),i}function td(){var t=Nc!==0;return Nc=0,t}function nd(t,i,r){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~r}function id(t){if(Lc){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}Lc=!1}Qa=0,Zn=_n=Ut=null,Kr=!1,rl=Nc=0,Qr=null}function Di(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Zn===null?Ut.memoizedState=Zn=t:Zn=Zn.next=t,Zn}function kn(){if(_n===null){var t=Ut.alternate;t=t!==null?t.memoizedState:null}else t=_n.next;var i=Zn===null?Ut.memoizedState:Zn.next;if(i!==null)Zn=i,_n=t;else{if(t===null)throw Ut.alternate===null?Error(a(467)):Error(a(310));_n=t,t={memoizedState:_n.memoizedState,baseState:_n.baseState,baseQueue:_n.baseQueue,queue:_n.queue,next:null},Zn===null?Ut.memoizedState=Zn=t:Zn=Zn.next=t}return Zn}function Uc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ol(t){var i=rl;return rl+=1,Qr===null&&(Qr=[]),t=ug(Qr,t,i),i=Ut,(Zn===null?i.memoizedState:Zn.next)===null&&(i=i.alternate,V.H=i===null||i.memoizedState===null?t0:md),t}function Oc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ol(t);if(t.$$typeof===O)return hi(t)}throw Error(a(438,String(t)))}function ad(t){var i=null,r=Ut.updateQueue;if(r!==null&&(i=r.memoCache),i==null){var l=Ut.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),r===null&&(r=Uc(),Ut.updateQueue=r),r.memoCache=i,r=i.data[i.index],r===void 0)for(r=i.data[i.index]=Array(t),l=0;l<t;l++)r[l]=G;return i.index++,r}function Ja(t,i){return typeof i=="function"?i(t):i}function Pc(t){var i=kn();return sd(i,_n,t)}function sd(t,i,r){var l=t.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=r;var f=t.baseQueue,d=l.pending;if(d!==null){if(f!==null){var E=f.next;f.next=d.next,d.next=E}i.baseQueue=f=d,l.pending=null}if(d=t.baseState,f===null)t.memoizedState=d;else{i=f.next;var C=E=null,Y=null,fe=i,Ee=!1;do{var Ne=fe.lane&-536870913;if(Ne!==fe.lane?(Yt&Ne)===Ne:(Qa&Ne)===Ne){var de=fe.revertLane;if(de===0)Y!==null&&(Y=Y.next={lane:0,revertLane:0,gesture:null,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null}),Ne===Wr&&(Ee=!0);else if((Qa&de)===de){fe=fe.next,de===Wr&&(Ee=!0);continue}else Ne={lane:0,revertLane:fe.revertLane,gesture:null,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null},Y===null?(C=Y=Ne,E=d):Y=Y.next=Ne,Ut.lanes|=de,Ls|=de;Ne=fe.action,gr&&r(d,Ne),d=fe.hasEagerState?fe.eagerState:r(d,Ne)}else de={lane:Ne,revertLane:fe.revertLane,gesture:fe.gesture,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null},Y===null?(C=Y=de,E=d):Y=Y.next=de,Ut.lanes|=Ne,Ls|=Ne;fe=fe.next}while(fe!==null&&fe!==i);if(Y===null?E=d:Y.next=C,!ki(d,t.memoizedState)&&(jn=!0,Ee&&(r=qr,r!==null)))throw r;t.memoizedState=d,t.baseState=E,t.baseQueue=Y,l.lastRenderedState=d}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function rd(t){var i=kn(),r=i.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=t;var l=r.dispatch,f=r.pending,d=i.memoizedState;if(f!==null){r.pending=null;var E=f=f.next;do d=t(d,E.action),E=E.next;while(E!==f);ki(d,i.memoizedState)||(jn=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),r.lastRenderedState=d}return[d,l]}function Sg(t,i,r){var l=Ut,f=kn(),d=Kt;if(d){if(r===void 0)throw Error(a(407));r=r()}else r=i();var E=!ki((_n||f).memoizedState,r);if(E&&(f.memoizedState=r,jn=!0),f=f.queue,cd(bg.bind(null,l,f,t),[t]),f.getSnapshot!==i||E||Zn!==null&&Zn.memoizedState.tag&1){if(l.flags|=2048,Jr(9,{destroy:void 0},Eg.bind(null,l,f,r,i),null),En===null)throw Error(a(349));d||(Qa&127)!==0||Mg(l,i,r)}return r}function Mg(t,i,r){t.flags|=16384,t={getSnapshot:i,value:r},i=Ut.updateQueue,i===null?(i=Uc(),Ut.updateQueue=i,i.stores=[t]):(r=i.stores,r===null?i.stores=[t]:r.push(t))}function Eg(t,i,r,l){i.value=r,i.getSnapshot=l,Tg(i)&&Ag(t)}function bg(t,i,r){return r(function(){Tg(i)&&Ag(t)})}function Tg(t){var i=t.getSnapshot;t=t.value;try{var r=i();return!ki(t,r)}catch{return!0}}function Ag(t){var i=or(t,2);i!==null&&Bi(i,t,2)}function od(t){var i=Di();if(typeof t=="function"){var r=t;if(t=r(),gr){Be(!0);try{r()}finally{Be(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ja,lastRenderedState:t},i}function wg(t,i,r,l){return t.baseState=r,sd(t,_n,typeof l=="function"?l:Ja)}function bS(t,i,r,l,f){if(Bc(t))throw Error(a(485));if(t=i.action,t!==null){var d={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){d.listeners.push(E)}};V.T!==null?r(!0):d.isTransition=!1,l(d),r=i.pending,r===null?(d.next=i.pending=d,Rg(i,d)):(d.next=r.next,i.pending=r.next=d)}}function Rg(t,i){var r=i.action,l=i.payload,f=t.state;if(i.isTransition){var d=V.T,E={};V.T=E;try{var C=r(f,l),Y=V.S;Y!==null&&Y(E,C),Cg(t,i,C)}catch(fe){ld(t,i,fe)}finally{d!==null&&E.types!==null&&(d.types=E.types),V.T=d}}else try{d=r(f,l),Cg(t,i,d)}catch(fe){ld(t,i,fe)}}function Cg(t,i,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(l){Dg(t,i,l)},function(l){return ld(t,i,l)}):Dg(t,i,r)}function Dg(t,i,r){i.status="fulfilled",i.value=r,Lg(i),t.state=r,i=t.pending,i!==null&&(r=i.next,r===i?t.pending=null:(r=r.next,i.next=r,Rg(t,r)))}function ld(t,i,r){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=r,Lg(i),i=i.next;while(i!==l)}t.action=null}function Lg(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function Ng(t,i){return i}function Ug(t,i){if(Kt){var r=En.formState;if(r!==null){e:{var l=Ut;if(Kt){if(An){t:{for(var f=An,d=sa;f.nodeType!==8;){if(!d){f=null;break t}if(f=oa(f.nextSibling),f===null){f=null;break t}}d=f.data,f=d==="F!"||d==="F"?f:null}if(f){An=oa(f.nextSibling),l=f.data==="F!";break e}}Ms(l)}l=!1}l&&(i=r[0])}}return r=Di(),r.memoizedState=r.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ng,lastRenderedState:i},r.queue=l,r=Jg.bind(null,Ut,l),l.dispatch=r,l=od(!1),d=pd.bind(null,Ut,!1,l.queue),l=Di(),f={state:i,dispatch:null,action:t,pending:null},l.queue=f,r=bS.bind(null,Ut,f,d,r),f.dispatch=r,l.memoizedState=t,[i,r,!1]}function Og(t){var i=kn();return Pg(i,_n,t)}function Pg(t,i,r){if(i=sd(t,i,Ng)[0],t=Pc(Ja)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=ol(i)}catch(E){throw E===Yr?Tc:E}else l=i;i=kn();var f=i.queue,d=f.dispatch;return r!==i.memoizedState&&(Ut.flags|=2048,Jr(9,{destroy:void 0},TS.bind(null,f,r),null)),[l,d,t]}function TS(t,i){t.action=i}function Ig(t){var i=kn(),r=_n;if(r!==null)return Pg(i,r,t);kn(),i=i.memoizedState,r=kn();var l=r.queue.dispatch;return r.memoizedState=t,[i,l,!1]}function Jr(t,i,r,l){return t={tag:t,create:r,deps:l,inst:i,next:null},i=Ut.updateQueue,i===null&&(i=Uc(),Ut.updateQueue=i),r=i.lastEffect,r===null?i.lastEffect=t.next=t:(l=r.next,r.next=t,t.next=l,i.lastEffect=t),t}function Fg(){return kn().memoizedState}function Ic(t,i,r,l){var f=Di();Ut.flags|=t,f.memoizedState=Jr(1|i,{destroy:void 0},r,l===void 0?null:l)}function Fc(t,i,r,l){var f=kn();l=l===void 0?null:l;var d=f.memoizedState.inst;_n!==null&&l!==null&&$f(l,_n.memoizedState.deps)?f.memoizedState=Jr(i,d,r,l):(Ut.flags|=t,f.memoizedState=Jr(1|i,d,r,l))}function Bg(t,i){Ic(8390656,8,t,i)}function cd(t,i){Fc(2048,8,t,i)}function AS(t){Ut.flags|=4;var i=Ut.updateQueue;if(i===null)i=Uc(),Ut.updateQueue=i,i.events=[t];else{var r=i.events;r===null?i.events=[t]:r.push(t)}}function zg(t){var i=kn().memoizedState;return AS({ref:i,nextImpl:t}),function(){if((sn&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function Hg(t,i){return Fc(4,2,t,i)}function Vg(t,i){return Fc(4,4,t,i)}function Gg(t,i){if(typeof i=="function"){t=t();var r=i(t);return function(){typeof r=="function"?r():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function kg(t,i,r){r=r!=null?r.concat([t]):null,Fc(4,4,Gg.bind(null,i,t),r)}function ud(){}function Xg(t,i){var r=kn();i=i===void 0?null:i;var l=r.memoizedState;return i!==null&&$f(i,l[1])?l[0]:(r.memoizedState=[t,i],t)}function Wg(t,i){var r=kn();i=i===void 0?null:i;var l=r.memoizedState;if(i!==null&&$f(i,l[1]))return l[0];if(l=t(),gr){Be(!0);try{t()}finally{Be(!1)}}return r.memoizedState=[l,i],l}function fd(t,i,r){return r===void 0||(Qa&1073741824)!==0&&(Yt&261930)===0?t.memoizedState=i:(t.memoizedState=r,t=q0(),Ut.lanes|=t,Ls|=t,r)}function qg(t,i,r,l){return ki(r,i)?r:jr.current!==null?(t=fd(t,r,l),ki(t,i)||(jn=!0),t):(Qa&42)===0||(Qa&1073741824)!==0&&(Yt&261930)===0?(jn=!0,t.memoizedState=r):(t=q0(),Ut.lanes|=t,Ls|=t,i)}function Yg(t,i,r,l,f){var d=X.p;X.p=d!==0&&8>d?d:8;var E=V.T,C={};V.T=C,pd(t,!1,i,r);try{var Y=f(),fe=V.S;if(fe!==null&&fe(C,Y),Y!==null&&typeof Y=="object"&&typeof Y.then=="function"){var Ee=SS(Y,l);ll(t,i,Ee,ji(t))}else ll(t,i,l,ji(t))}catch(Ne){ll(t,i,{then:function(){},status:"rejected",reason:Ne},ji())}finally{X.p=d,E!==null&&C.types!==null&&(E.types=C.types),V.T=E}}function wS(){}function dd(t,i,r,l){if(t.tag!==5)throw Error(a(476));var f=Zg(t).queue;Yg(t,f,i,se,r===null?wS:function(){return jg(t),r(l)})}function Zg(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:se,baseState:se,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ja,lastRenderedState:se},next:null};var r={};return i.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ja,lastRenderedState:r},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function jg(t){var i=Zg(t);i.next===null&&(i=t.alternate.memoizedState),ll(t,i.next.queue,{},ji())}function hd(){return hi(Tl)}function Kg(){return kn().memoizedState}function Qg(){return kn().memoizedState}function RS(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var r=ji();t=Ts(r);var l=As(i,t,r);l!==null&&(Bi(l,i,r),il(l,i,r)),i={cache:Gf()},t.payload=i;return}i=i.return}}function CS(t,i,r){var l=ji();r={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Bc(t)?$g(i,r):(r=Lf(t,i,r,l),r!==null&&(Bi(r,t,l),e0(r,i,l)))}function Jg(t,i,r){var l=ji();ll(t,i,r,l)}function ll(t,i,r,l){var f={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(Bc(t))$g(i,f);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var E=i.lastRenderedState,C=d(E,r);if(f.hasEagerState=!0,f.eagerState=C,ki(C,E))return _c(t,i,f,0),En===null&&vc(),!1}catch{}finally{}if(r=Lf(t,i,f,l),r!==null)return Bi(r,t,l),e0(r,i,l),!0}return!1}function pd(t,i,r,l){if(l={lane:2,revertLane:qd(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Bc(t)){if(i)throw Error(a(479))}else i=Lf(t,r,l,2),i!==null&&Bi(i,t,2)}function Bc(t){var i=t.alternate;return t===Ut||i!==null&&i===Ut}function $g(t,i){Kr=Lc=!0;var r=t.pending;r===null?i.next=i:(i.next=r.next,r.next=i),t.pending=i}function e0(t,i,r){if((r&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,r|=l,i.lanes=r,Rn(t,r)}}var cl={readContext:hi,use:Oc,useCallback:Bn,useContext:Bn,useEffect:Bn,useImperativeHandle:Bn,useLayoutEffect:Bn,useInsertionEffect:Bn,useMemo:Bn,useReducer:Bn,useRef:Bn,useState:Bn,useDebugValue:Bn,useDeferredValue:Bn,useTransition:Bn,useSyncExternalStore:Bn,useId:Bn,useHostTransitionStatus:Bn,useFormState:Bn,useActionState:Bn,useOptimistic:Bn,useMemoCache:Bn,useCacheRefresh:Bn};cl.useEffectEvent=Bn;var t0={readContext:hi,use:Oc,useCallback:function(t,i){return Di().memoizedState=[t,i===void 0?null:i],t},useContext:hi,useEffect:Bg,useImperativeHandle:function(t,i,r){r=r!=null?r.concat([t]):null,Ic(4194308,4,Gg.bind(null,i,t),r)},useLayoutEffect:function(t,i){return Ic(4194308,4,t,i)},useInsertionEffect:function(t,i){Ic(4,2,t,i)},useMemo:function(t,i){var r=Di();i=i===void 0?null:i;var l=t();if(gr){Be(!0);try{t()}finally{Be(!1)}}return r.memoizedState=[l,i],l},useReducer:function(t,i,r){var l=Di();if(r!==void 0){var f=r(i);if(gr){Be(!0);try{r(i)}finally{Be(!1)}}}else f=i;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=CS.bind(null,Ut,t),[l.memoizedState,t]},useRef:function(t){var i=Di();return t={current:t},i.memoizedState=t},useState:function(t){t=od(t);var i=t.queue,r=Jg.bind(null,Ut,i);return i.dispatch=r,[t.memoizedState,r]},useDebugValue:ud,useDeferredValue:function(t,i){var r=Di();return fd(r,t,i)},useTransition:function(){var t=od(!1);return t=Yg.bind(null,Ut,t.queue,!0,!1),Di().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,r){var l=Ut,f=Di();if(Kt){if(r===void 0)throw Error(a(407));r=r()}else{if(r=i(),En===null)throw Error(a(349));(Yt&127)!==0||Mg(l,i,r)}f.memoizedState=r;var d={value:r,getSnapshot:i};return f.queue=d,Bg(bg.bind(null,l,d,t),[t]),l.flags|=2048,Jr(9,{destroy:void 0},Eg.bind(null,l,d,r,i),null),r},useId:function(){var t=Di(),i=En.identifierPrefix;if(Kt){var r=wa,l=Aa;r=(l&~(1<<32-Je(l)-1)).toString(32)+r,i="_"+i+"R_"+r,r=Nc++,0<r&&(i+="H"+r.toString(32)),i+="_"}else r=MS++,i="_"+i+"r_"+r.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:hd,useFormState:Ug,useActionState:Ug,useOptimistic:function(t){var i=Di();i.memoizedState=i.baseState=t;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=r,i=pd.bind(null,Ut,!0,r),r.dispatch=i,[t,i]},useMemoCache:ad,useCacheRefresh:function(){return Di().memoizedState=RS.bind(null,Ut)},useEffectEvent:function(t){var i=Di(),r={impl:t};return i.memoizedState=r,function(){if((sn&2)!==0)throw Error(a(440));return r.impl.apply(void 0,arguments)}}},md={readContext:hi,use:Oc,useCallback:Xg,useContext:hi,useEffect:cd,useImperativeHandle:kg,useInsertionEffect:Hg,useLayoutEffect:Vg,useMemo:Wg,useReducer:Pc,useRef:Fg,useState:function(){return Pc(Ja)},useDebugValue:ud,useDeferredValue:function(t,i){var r=kn();return qg(r,_n.memoizedState,t,i)},useTransition:function(){var t=Pc(Ja)[0],i=kn().memoizedState;return[typeof t=="boolean"?t:ol(t),i]},useSyncExternalStore:Sg,useId:Kg,useHostTransitionStatus:hd,useFormState:Og,useActionState:Og,useOptimistic:function(t,i){var r=kn();return wg(r,_n,t,i)},useMemoCache:ad,useCacheRefresh:Qg};md.useEffectEvent=zg;var n0={readContext:hi,use:Oc,useCallback:Xg,useContext:hi,useEffect:cd,useImperativeHandle:kg,useInsertionEffect:Hg,useLayoutEffect:Vg,useMemo:Wg,useReducer:rd,useRef:Fg,useState:function(){return rd(Ja)},useDebugValue:ud,useDeferredValue:function(t,i){var r=kn();return _n===null?fd(r,t,i):qg(r,_n.memoizedState,t,i)},useTransition:function(){var t=rd(Ja)[0],i=kn().memoizedState;return[typeof t=="boolean"?t:ol(t),i]},useSyncExternalStore:Sg,useId:Kg,useHostTransitionStatus:hd,useFormState:Ig,useActionState:Ig,useOptimistic:function(t,i){var r=kn();return _n!==null?wg(r,_n,t,i):(r.baseState=t,[t,r.queue.dispatch])},useMemoCache:ad,useCacheRefresh:Qg};n0.useEffectEvent=zg;function gd(t,i,r,l){i=t.memoizedState,r=r(l,i),r=r==null?i:v({},i,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var vd={enqueueSetState:function(t,i,r){t=t._reactInternals;var l=ji(),f=Ts(l);f.payload=i,r!=null&&(f.callback=r),i=As(t,f,l),i!==null&&(Bi(i,t,l),il(i,t,l))},enqueueReplaceState:function(t,i,r){t=t._reactInternals;var l=ji(),f=Ts(l);f.tag=1,f.payload=i,r!=null&&(f.callback=r),i=As(t,f,l),i!==null&&(Bi(i,t,l),il(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var r=ji(),l=Ts(r);l.tag=2,i!=null&&(l.callback=i),i=As(t,l,r),i!==null&&(Bi(i,t,r),il(i,t,r))}};function i0(t,i,r,l,f,d,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,d,E):i.prototype&&i.prototype.isPureReactComponent?!jo(r,l)||!jo(f,d):!0}function a0(t,i,r,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(r,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(r,l),i.state!==t&&vd.enqueueReplaceState(i,i.state,null)}function vr(t,i){var r=i;if("ref"in i){r={};for(var l in i)l!=="ref"&&(r[l]=i[l])}if(t=t.defaultProps){r===i&&(r=v({},r));for(var f in t)r[f]===void 0&&(r[f]=t[f])}return r}function s0(t){gc(t)}function r0(t){console.error(t)}function o0(t){gc(t)}function zc(t,i){try{var r=t.onUncaughtError;r(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function l0(t,i,r){try{var l=t.onCaughtError;l(r.value,{componentStack:r.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function _d(t,i,r){return r=Ts(r),r.tag=3,r.payload={element:null},r.callback=function(){zc(t,i)},r}function c0(t){return t=Ts(t),t.tag=3,t}function u0(t,i,r,l){var f=r.type.getDerivedStateFromError;if(typeof f=="function"){var d=l.value;t.payload=function(){return f(d)},t.callback=function(){l0(i,r,l)}}var E=r.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(t.callback=function(){l0(i,r,l),typeof f!="function"&&(Ns===null?Ns=new Set([this]):Ns.add(this));var C=l.stack;this.componentDidCatch(l.value,{componentStack:C!==null?C:""})})}function DS(t,i,r,l,f){if(r.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=r.alternate,i!==null&&Xr(i,r,f,!0),r=Wi.current,r!==null){switch(r.tag){case 31:case 13:return ra===null?Qc():r.alternate===null&&zn===0&&(zn=3),r.flags&=-257,r.flags|=65536,r.lanes=f,l===Ac?r.flags|=16384:(i=r.updateQueue,i===null?r.updateQueue=new Set([l]):i.add(l),kd(t,l,f)),!1;case 22:return r.flags|=65536,l===Ac?r.flags|=16384:(i=r.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},r.updateQueue=i):(r=i.retryQueue,r===null?i.retryQueue=new Set([l]):r.add(l)),kd(t,l,f)),!1}throw Error(a(435,r.tag))}return kd(t,l,f),Qc(),!1}if(Kt)return i=Wi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==Ff&&(t=Error(a(422),{cause:l}),Jo(na(t,r)))):(l!==Ff&&(i=Error(a(423),{cause:l}),Jo(na(i,r))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=na(l,r),f=_d(t.stateNode,l,f),Zf(t,f),zn!==4&&(zn=2)),!1;var d=Error(a(520),{cause:l});if(d=na(d,r),vl===null?vl=[d]:vl.push(d),zn!==4&&(zn=2),i===null)return!0;l=na(l,r),r=i;do{switch(r.tag){case 3:return r.flags|=65536,t=f&-f,r.lanes|=t,t=_d(r.stateNode,l,t),Zf(r,t),!1;case 1:if(i=r.type,d=r.stateNode,(r.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ns===null||!Ns.has(d))))return r.flags|=65536,f&=-f,r.lanes|=f,f=c0(f),u0(f,t,r,l),Zf(r,f),!1}r=r.return}while(r!==null);return!1}var xd=Error(a(461)),jn=!1;function pi(t,i,r,l){i.child=t===null?pg(i,null,r,l):mr(i,t.child,r,l)}function f0(t,i,r,l,f){r=r.render;var d=i.ref;if("ref"in l){var E={};for(var C in l)C!=="ref"&&(E[C]=l[C])}else E=l;return fr(i),l=ed(t,i,r,E,d,f),C=td(),t!==null&&!jn?(nd(t,i,f),$a(t,i,f)):(Kt&&C&&Pf(i),i.flags|=1,pi(t,i,l,f),i.child)}function d0(t,i,r,l,f){if(t===null){var d=r.type;return typeof d=="function"&&!Nf(d)&&d.defaultProps===void 0&&r.compare===null?(i.tag=15,i.type=d,h0(t,i,d,l,f)):(t=yc(r.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(d=t.child,!wd(t,f)){var E=d.memoizedProps;if(r=r.compare,r=r!==null?r:jo,r(E,l)&&t.ref===i.ref)return $a(t,i,f)}return i.flags|=1,t=Ya(d,l),t.ref=i.ref,t.return=i,i.child=t}function h0(t,i,r,l,f){if(t!==null){var d=t.memoizedProps;if(jo(d,l)&&t.ref===i.ref)if(jn=!1,i.pendingProps=l=d,wd(t,f))(t.flags&131072)!==0&&(jn=!0);else return i.lanes=t.lanes,$a(t,i,f)}return yd(t,i,r,l,f)}function p0(t,i,r,l){var f=l.children,d=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(d=d!==null?d.baseLanes|r:r,t!==null){for(l=i.child=t.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~d}else l=0,i.child=null;return m0(t,i,d,r,l)}if((r&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&bc(i,d!==null?d.cachePool:null),d!==null?vg(i,d):Kf(),_g(i);else return l=i.lanes=536870912,m0(t,i,d!==null?d.baseLanes|r:r,r,l)}else d!==null?(bc(i,d.cachePool),vg(i,d),Rs(),i.memoizedState=null):(t!==null&&bc(i,null),Kf(),Rs());return pi(t,i,f,r),i.child}function ul(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function m0(t,i,r,l,f){var d=Xf();return d=d===null?null:{parent:Yn._currentValue,pool:d},i.memoizedState={baseLanes:r,cachePool:d},t!==null&&bc(i,null),Kf(),_g(i),t!==null&&Xr(t,i,l,!0),i.childLanes=f,null}function Hc(t,i){return i=Gc({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function g0(t,i,r){return mr(i,t.child,null,r),t=Hc(i,i.pendingProps),t.flags|=2,qi(i),i.memoizedState=null,t}function LS(t,i,r){var l=i.pendingProps,f=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(Kt){if(l.mode==="hidden")return t=Hc(i,l),i.lanes=536870912,ul(null,t);if(Jf(i),(t=An)?(t=Rv(t,sa),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:ys!==null?{id:Aa,overflow:wa}:null,retryLane:536870912,hydrationErrors:null},r=$m(t),r.return=i,i.child=r,di=i,An=null)):t=null,t===null)throw Ms(i);return i.lanes=536870912,null}return Hc(i,l)}var d=t.memoizedState;if(d!==null){var E=d.dehydrated;if(Jf(i),f)if(i.flags&256)i.flags&=-257,i=g0(t,i,r);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(a(558));else if(jn||Xr(t,i,r,!1),f=(r&t.childLanes)!==0,jn||f){if(l=En,l!==null&&(E=Jn(l,r),E!==0&&E!==d.retryLane))throw d.retryLane=E,or(t,E),Bi(l,t,E),xd;Qc(),i=g0(t,i,r)}else t=d.treeContext,An=oa(E.nextSibling),di=i,Kt=!0,Ss=null,sa=!1,t!==null&&ng(i,t),i=Hc(i,l),i.flags|=4096;return i}return t=Ya(t.child,{mode:l.mode,children:l.children}),t.ref=i.ref,i.child=t,t.return=i,t}function Vc(t,i){var r=i.ref;if(r===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(t===null||t.ref!==r)&&(i.flags|=4194816)}}function yd(t,i,r,l,f){return fr(i),r=ed(t,i,r,l,void 0,f),l=td(),t!==null&&!jn?(nd(t,i,f),$a(t,i,f)):(Kt&&l&&Pf(i),i.flags|=1,pi(t,i,r,f),i.child)}function v0(t,i,r,l,f,d){return fr(i),i.updateQueue=null,r=yg(i,l,r,f),xg(t),l=td(),t!==null&&!jn?(nd(t,i,d),$a(t,i,d)):(Kt&&l&&Pf(i),i.flags|=1,pi(t,i,r,d),i.child)}function _0(t,i,r,l,f){if(fr(i),i.stateNode===null){var d=Hr,E=r.contextType;typeof E=="object"&&E!==null&&(d=hi(E)),d=new r(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=vd,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},qf(i),E=r.contextType,d.context=typeof E=="object"&&E!==null?hi(E):Hr,d.state=i.memoizedState,E=r.getDerivedStateFromProps,typeof E=="function"&&(gd(i,r,E,l),d.state=i.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(E=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),E!==d.state&&vd.enqueueReplaceState(d,d.state,null),sl(i,l,d,f),al(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){d=i.stateNode;var C=i.memoizedProps,Y=vr(r,C);d.props=Y;var fe=d.context,Ee=r.contextType;E=Hr,typeof Ee=="object"&&Ee!==null&&(E=hi(Ee));var Ne=r.getDerivedStateFromProps;Ee=typeof Ne=="function"||typeof d.getSnapshotBeforeUpdate=="function",C=i.pendingProps!==C,Ee||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(C||fe!==E)&&a0(i,d,l,E),bs=!1;var de=i.memoizedState;d.state=de,sl(i,l,d,f),al(),fe=i.memoizedState,C||de!==fe||bs?(typeof Ne=="function"&&(gd(i,r,Ne,l),fe=i.memoizedState),(Y=bs||i0(i,r,Y,l,de,fe,E))?(Ee||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=fe),d.props=l,d.state=fe,d.context=E,l=Y):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,Yf(t,i),E=i.memoizedProps,Ee=vr(r,E),d.props=Ee,Ne=i.pendingProps,de=d.context,fe=r.contextType,Y=Hr,typeof fe=="object"&&fe!==null&&(Y=hi(fe)),C=r.getDerivedStateFromProps,(fe=typeof C=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(E!==Ne||de!==Y)&&a0(i,d,l,Y),bs=!1,de=i.memoizedState,d.state=de,sl(i,l,d,f),al();var xe=i.memoizedState;E!==Ne||de!==xe||bs||t!==null&&t.dependencies!==null&&Mc(t.dependencies)?(typeof C=="function"&&(gd(i,r,C,l),xe=i.memoizedState),(Ee=bs||i0(i,r,Ee,l,de,xe,Y)||t!==null&&t.dependencies!==null&&Mc(t.dependencies))?(fe||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,xe,Y),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,xe,Y)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||E===t.memoizedProps&&de===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&de===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=xe),d.props=l,d.state=xe,d.context=Y,l=Ee):(typeof d.componentDidUpdate!="function"||E===t.memoizedProps&&de===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&de===t.memoizedState||(i.flags|=1024),l=!1)}return d=l,Vc(t,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,r=l&&typeof r.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,t!==null&&l?(i.child=mr(i,t.child,null,f),i.child=mr(i,null,r,f)):pi(t,i,r,f),i.memoizedState=d.state,t=i.child):t=$a(t,i,f),t}function x0(t,i,r,l){return cr(),i.flags|=256,pi(t,i,r,l),i.child}var Sd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Md(t){return{baseLanes:t,cachePool:lg()}}function Ed(t,i,r){return t=t!==null?t.childLanes&~r:0,i&&(t|=Zi),t}function y0(t,i,r){var l=i.pendingProps,f=!1,d=(i.flags&128)!==0,E;if((E=d)||(E=t!==null&&t.memoizedState===null?!1:(Gn.current&2)!==0),E&&(f=!0,i.flags&=-129),E=(i.flags&32)!==0,i.flags&=-33,t===null){if(Kt){if(f?ws(i):Rs(),(t=An)?(t=Rv(t,sa),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:ys!==null?{id:Aa,overflow:wa}:null,retryLane:536870912,hydrationErrors:null},r=$m(t),r.return=i,i.child=r,di=i,An=null)):t=null,t===null)throw Ms(i);return sh(t)?i.lanes=32:i.lanes=536870912,null}var C=l.children;return l=l.fallback,f?(Rs(),f=i.mode,C=Gc({mode:"hidden",children:C},f),l=lr(l,f,r,null),C.return=i,l.return=i,C.sibling=l,i.child=C,l=i.child,l.memoizedState=Md(r),l.childLanes=Ed(t,E,r),i.memoizedState=Sd,ul(null,l)):(ws(i),bd(i,C))}var Y=t.memoizedState;if(Y!==null&&(C=Y.dehydrated,C!==null)){if(d)i.flags&256?(ws(i),i.flags&=-257,i=Td(t,i,r)):i.memoizedState!==null?(Rs(),i.child=t.child,i.flags|=128,i=null):(Rs(),C=l.fallback,f=i.mode,l=Gc({mode:"visible",children:l.children},f),C=lr(C,f,r,null),C.flags|=2,l.return=i,C.return=i,l.sibling=C,i.child=l,mr(i,t.child,null,r),l=i.child,l.memoizedState=Md(r),l.childLanes=Ed(t,E,r),i.memoizedState=Sd,i=ul(null,l));else if(ws(i),sh(C)){if(E=C.nextSibling&&C.nextSibling.dataset,E)var fe=E.dgst;E=fe,l=Error(a(419)),l.stack="",l.digest=E,Jo({value:l,source:null,stack:null}),i=Td(t,i,r)}else if(jn||Xr(t,i,r,!1),E=(r&t.childLanes)!==0,jn||E){if(E=En,E!==null&&(l=Jn(E,r),l!==0&&l!==Y.retryLane))throw Y.retryLane=l,or(t,l),Bi(E,t,l),xd;ah(C)||Qc(),i=Td(t,i,r)}else ah(C)?(i.flags|=192,i.child=t.child,i=null):(t=Y.treeContext,An=oa(C.nextSibling),di=i,Kt=!0,Ss=null,sa=!1,t!==null&&ng(i,t),i=bd(i,l.children),i.flags|=4096);return i}return f?(Rs(),C=l.fallback,f=i.mode,Y=t.child,fe=Y.sibling,l=Ya(Y,{mode:"hidden",children:l.children}),l.subtreeFlags=Y.subtreeFlags&65011712,fe!==null?C=Ya(fe,C):(C=lr(C,f,r,null),C.flags|=2),C.return=i,l.return=i,l.sibling=C,i.child=l,ul(null,l),l=i.child,C=t.child.memoizedState,C===null?C=Md(r):(f=C.cachePool,f!==null?(Y=Yn._currentValue,f=f.parent!==Y?{parent:Y,pool:Y}:f):f=lg(),C={baseLanes:C.baseLanes|r,cachePool:f}),l.memoizedState=C,l.childLanes=Ed(t,E,r),i.memoizedState=Sd,ul(t.child,l)):(ws(i),r=t.child,t=r.sibling,r=Ya(r,{mode:"visible",children:l.children}),r.return=i,r.sibling=null,t!==null&&(E=i.deletions,E===null?(i.deletions=[t],i.flags|=16):E.push(t)),i.child=r,i.memoizedState=null,r)}function bd(t,i){return i=Gc({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function Gc(t,i){return t=Xi(22,t,null,i),t.lanes=0,t}function Td(t,i,r){return mr(i,t.child,null,r),t=bd(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function S0(t,i,r){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Hf(t.return,i,r)}function Ad(t,i,r,l,f,d){var E=t.memoizedState;E===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:r,tailMode:f,treeForkCount:d}:(E.isBackwards=i,E.rendering=null,E.renderingStartTime=0,E.last=l,E.tail=r,E.tailMode=f,E.treeForkCount=d)}function M0(t,i,r){var l=i.pendingProps,f=l.revealOrder,d=l.tail;l=l.children;var E=Gn.current,C=(E&2)!==0;if(C?(E=E&1|2,i.flags|=128):E&=1,De(Gn,E),pi(t,i,l,r),l=Kt?Qo:0,!C&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&S0(t,r,i);else if(t.tag===19)S0(t,r,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"forwards":for(r=i.child,f=null;r!==null;)t=r.alternate,t!==null&&Dc(t)===null&&(f=r),r=r.sibling;r=f,r===null?(f=i.child,i.child=null):(f=r.sibling,r.sibling=null),Ad(i,!1,f,r,d,l);break;case"backwards":case"unstable_legacy-backwards":for(r=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&Dc(t)===null){i.child=f;break}t=f.sibling,f.sibling=r,r=f,f=t}Ad(i,!0,r,null,d,l);break;case"together":Ad(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function $a(t,i,r){if(t!==null&&(i.dependencies=t.dependencies),Ls|=i.lanes,(r&i.childLanes)===0)if(t!==null){if(Xr(t,i,r,!1),(r&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(a(153));if(i.child!==null){for(t=i.child,r=Ya(t,t.pendingProps),i.child=r,r.return=i;t.sibling!==null;)t=t.sibling,r=r.sibling=Ya(t,t.pendingProps),r.return=i;r.sibling=null}return i.child}function wd(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&Mc(t)))}function NS(t,i,r){switch(i.tag){case 3:he(i,i.stateNode.containerInfo),Es(i,Yn,t.memoizedState.cache),cr();break;case 27:case 5:st(i);break;case 4:he(i,i.stateNode.containerInfo);break;case 10:Es(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,Jf(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(ws(i),i.flags|=128,null):(r&i.child.childLanes)!==0?y0(t,i,r):(ws(i),t=$a(t,i,r),t!==null?t.sibling:null);ws(i);break;case 19:var f=(t.flags&128)!==0;if(l=(r&i.childLanes)!==0,l||(Xr(t,i,r,!1),l=(r&i.childLanes)!==0),f){if(l)return M0(t,i,r);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),De(Gn,Gn.current),l)break;return null;case 22:return i.lanes=0,p0(t,i,r,i.pendingProps);case 24:Es(i,Yn,t.memoizedState.cache)}return $a(t,i,r)}function E0(t,i,r){if(t!==null)if(t.memoizedProps!==i.pendingProps)jn=!0;else{if(!wd(t,r)&&(i.flags&128)===0)return jn=!1,NS(t,i,r);jn=(t.flags&131072)!==0}else jn=!1,Kt&&(i.flags&1048576)!==0&&tg(i,Qo,i.index);switch(i.lanes=0,i.tag){case 16:e:{var l=i.pendingProps;if(t=hr(i.elementType),i.type=t,typeof t=="function")Nf(t)?(l=vr(t,l),i.tag=1,i=_0(null,i,t,l,r)):(i.tag=0,i=yd(null,i,t,l,r));else{if(t!=null){var f=t.$$typeof;if(f===R){i.tag=11,i=f0(null,i,t,l,r);break e}else if(f===H){i.tag=14,i=d0(null,i,t,l,r);break e}}throw i=ie(t)||t,Error(a(306,i,""))}}return i;case 0:return yd(t,i,i.type,i.pendingProps,r);case 1:return l=i.type,f=vr(l,i.pendingProps),_0(t,i,l,f,r);case 3:e:{if(he(i,i.stateNode.containerInfo),t===null)throw Error(a(387));l=i.pendingProps;var d=i.memoizedState;f=d.element,Yf(t,i),sl(i,l,null,r);var E=i.memoizedState;if(l=E.cache,Es(i,Yn,l),l!==d.cache&&Vf(i,[Yn],r,!0),al(),l=E.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:E.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=x0(t,i,l,r);break e}else if(l!==f){f=na(Error(a(424)),i),Jo(f),i=x0(t,i,l,r);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(An=oa(t.firstChild),di=i,Kt=!0,Ss=null,sa=!0,r=pg(i,null,l,r),i.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(cr(),l===f){i=$a(t,i,r);break e}pi(t,i,l,r)}i=i.child}return i;case 26:return Vc(t,i),t===null?(r=Ov(i.type,null,i.pendingProps,null))?i.memoizedState=r:Kt||(r=i.type,t=i.pendingProps,l=au(re.current).createElement(r),l[pn]=i,l[cn]=t,mi(l,r,t),we(l),i.stateNode=l):i.memoizedState=Ov(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return st(i),t===null&&Kt&&(l=i.stateNode=Lv(i.type,i.pendingProps,re.current),di=i,sa=!0,f=An,Is(i.type)?(rh=f,An=oa(l.firstChild)):An=f),pi(t,i,i.pendingProps.children,r),Vc(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Kt&&((f=l=An)&&(l=lM(l,i.type,i.pendingProps,sa),l!==null?(i.stateNode=l,di=i,An=oa(l.firstChild),sa=!1,f=!0):f=!1),f||Ms(i)),st(i),f=i.type,d=i.pendingProps,E=t!==null?t.memoizedProps:null,l=d.children,th(f,d)?l=null:E!==null&&th(f,E)&&(i.flags|=32),i.memoizedState!==null&&(f=ed(t,i,ES,null,null,r),Tl._currentValue=f),Vc(t,i),pi(t,i,l,r),i.child;case 6:return t===null&&Kt&&((t=r=An)&&(r=cM(r,i.pendingProps,sa),r!==null?(i.stateNode=r,di=i,An=null,t=!0):t=!1),t||Ms(i)),null;case 13:return y0(t,i,r);case 4:return he(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=mr(i,null,l,r):pi(t,i,l,r),i.child;case 11:return f0(t,i,i.type,i.pendingProps,r);case 7:return pi(t,i,i.pendingProps,r),i.child;case 8:return pi(t,i,i.pendingProps.children,r),i.child;case 12:return pi(t,i,i.pendingProps.children,r),i.child;case 10:return l=i.pendingProps,Es(i,i.type,l.value),pi(t,i,l.children,r),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,fr(i),f=hi(f),l=l(f),i.flags|=1,pi(t,i,l,r),i.child;case 14:return d0(t,i,i.type,i.pendingProps,r);case 15:return h0(t,i,i.type,i.pendingProps,r);case 19:return M0(t,i,r);case 31:return LS(t,i,r);case 22:return p0(t,i,r,i.pendingProps);case 24:return fr(i),l=hi(Yn),t===null?(f=Xf(),f===null&&(f=En,d=Gf(),f.pooledCache=d,d.refCount++,d!==null&&(f.pooledCacheLanes|=r),f=d),i.memoizedState={parent:l,cache:f},qf(i),Es(i,Yn,f)):((t.lanes&r)!==0&&(Yf(t,i),sl(i,null,null,r),al()),f=t.memoizedState,d=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),Es(i,Yn,l)):(l=d.cache,Es(i,Yn,l),l!==f.cache&&Vf(i,[Yn],r,!0))),pi(t,i,i.pendingProps.children,r),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function es(t){t.flags|=4}function Rd(t,i,r,l,f){if((i=(t.mode&32)!==0)&&(i=!1),i){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if(K0())t.flags|=8192;else throw pr=Ac,Wf}else t.flags&=-16777217}function b0(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!zv(i))if(K0())t.flags|=8192;else throw pr=Ac,Wf}function kc(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?Le():536870912,t.lanes|=i,no|=i)}function fl(t,i){if(!Kt)switch(t.tailMode){case"hidden":i=t.tail;for(var r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function wn(t){var i=t.alternate!==null&&t.alternate.child===t.child,r=0,l=0;if(i)for(var f=t.child;f!==null;)r|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)r|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=r,i}function US(t,i,r){var l=i.pendingProps;switch(If(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wn(i),null;case 1:return wn(i),null;case 3:return r=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Ka(Yn),Ue(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(kr(i)?es(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Bf())),wn(i),null;case 26:var f=i.type,d=i.memoizedState;return t===null?(es(i),d!==null?(wn(i),b0(i,d)):(wn(i),Rd(i,f,null,l,r))):d?d!==t.memoizedState?(es(i),wn(i),b0(i,d)):(wn(i),i.flags&=-16777217):(t=t.memoizedProps,t!==l&&es(i),wn(i),Rd(i,f,t,l,r)),null;case 27:if(et(i),r=re.current,f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&es(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return wn(i),null}t=Te.current,kr(i)?ig(i):(t=Lv(f,l,r),i.stateNode=t,es(i))}return wn(i),null;case 5:if(et(i),f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&es(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return wn(i),null}if(d=Te.current,kr(i))ig(i);else{var E=au(re.current);switch(d){case 1:d=E.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:d=E.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":d=E.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":d=E.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":d=E.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof l.is=="string"?E.createElement("select",{is:l.is}):E.createElement("select"),l.multiple?d.multiple=!0:l.size&&(d.size=l.size);break;default:d=typeof l.is=="string"?E.createElement(f,{is:l.is}):E.createElement(f)}}d[pn]=i,d[cn]=l;e:for(E=i.child;E!==null;){if(E.tag===5||E.tag===6)d.appendChild(E.stateNode);else if(E.tag!==4&&E.tag!==27&&E.child!==null){E.child.return=E,E=E.child;continue}if(E===i)break e;for(;E.sibling===null;){if(E.return===null||E.return===i)break e;E=E.return}E.sibling.return=E.return,E=E.sibling}i.stateNode=d;e:switch(mi(d,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&es(i)}}return wn(i),Rd(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,r),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&es(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(t=re.current,kr(i)){if(t=i.stateNode,r=i.memoizedProps,l=null,f=di,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[pn]=i,t=!!(t.nodeValue===r||l!==null&&l.suppressHydrationWarning===!0||yv(t.nodeValue,r)),t||Ms(i,!0)}else t=au(t).createTextNode(l),t[pn]=i,i.stateNode=t}return wn(i),null;case 31:if(r=i.memoizedState,t===null||t.memoizedState!==null){if(l=kr(i),r!==null){if(t===null){if(!l)throw Error(a(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(557));t[pn]=i}else cr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;wn(i),t=!1}else r=Bf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=r),t=!0;if(!t)return i.flags&256?(qi(i),i):(qi(i),null);if((i.flags&128)!==0)throw Error(a(558))}return wn(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=kr(i),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(a(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[pn]=i}else cr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;wn(i),f=!1}else f=Bf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(qi(i),i):(qi(i),null)}return qi(i),(i.flags&128)!==0?(i.lanes=r,i):(r=l!==null,t=t!==null&&t.memoizedState!==null,r&&(l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),d=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==f&&(l.flags|=2048)),r!==t&&r&&(i.child.flags|=8192),kc(i,i.updateQueue),wn(i),null);case 4:return Ue(),t===null&&Kd(i.stateNode.containerInfo),wn(i),null;case 10:return Ka(i.type),wn(i),null;case 19:if(ee(Gn),l=i.memoizedState,l===null)return wn(i),null;if(f=(i.flags&128)!==0,d=l.rendering,d===null)if(f)fl(l,!1);else{if(zn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(d=Dc(t),d!==null){for(i.flags|=128,fl(l,!1),t=d.updateQueue,i.updateQueue=t,kc(i,t),i.subtreeFlags=0,t=r,r=i.child;r!==null;)Jm(r,t),r=r.sibling;return De(Gn,Gn.current&1|2),Kt&&Za(i,l.treeForkCount),i.child}t=t.sibling}l.tail!==null&&Bt()>Zc&&(i.flags|=128,f=!0,fl(l,!1),i.lanes=4194304)}else{if(!f)if(t=Dc(d),t!==null){if(i.flags|=128,f=!0,t=t.updateQueue,i.updateQueue=t,kc(i,t),fl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!d.alternate&&!Kt)return wn(i),null}else 2*Bt()-l.renderingStartTime>Zc&&r!==536870912&&(i.flags|=128,f=!0,fl(l,!1),i.lanes=4194304);l.isBackwards?(d.sibling=i.child,i.child=d):(t=l.last,t!==null?t.sibling=d:i.child=d,l.last=d)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Bt(),t.sibling=null,r=Gn.current,De(Gn,f?r&1|2:r&1),Kt&&Za(i,l.treeForkCount),t):(wn(i),null);case 22:case 23:return qi(i),Qf(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(r&536870912)!==0&&(i.flags&128)===0&&(wn(i),i.subtreeFlags&6&&(i.flags|=8192)):wn(i),r=i.updateQueue,r!==null&&kc(i,r.retryQueue),r=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==r&&(i.flags|=2048),t!==null&&ee(dr),null;case 24:return r=null,t!==null&&(r=t.memoizedState.cache),i.memoizedState.cache!==r&&(i.flags|=2048),Ka(Yn),wn(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function OS(t,i){switch(If(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Ka(Yn),Ue(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return et(i),null;case 31:if(i.memoizedState!==null){if(qi(i),i.alternate===null)throw Error(a(340));cr()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(qi(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(a(340));cr()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return ee(Gn),null;case 4:return Ue(),null;case 10:return Ka(i.type),null;case 22:case 23:return qi(i),Qf(),t!==null&&ee(dr),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return Ka(Yn),null;case 25:return null;default:return null}}function T0(t,i){switch(If(i),i.tag){case 3:Ka(Yn),Ue();break;case 26:case 27:case 5:et(i);break;case 4:Ue();break;case 31:i.memoizedState!==null&&qi(i);break;case 13:qi(i);break;case 19:ee(Gn);break;case 10:Ka(i.type);break;case 22:case 23:qi(i),Qf(),t!==null&&ee(dr);break;case 24:Ka(Yn)}}function dl(t,i){try{var r=i.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var f=l.next;r=f;do{if((r.tag&t)===t){l=void 0;var d=r.create,E=r.inst;l=d(),E.destroy=l}r=r.next}while(r!==f)}}catch(C){dn(i,i.return,C)}}function Cs(t,i,r){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var d=f.next;l=d;do{if((l.tag&t)===t){var E=l.inst,C=E.destroy;if(C!==void 0){E.destroy=void 0,f=i;var Y=r,fe=C;try{fe()}catch(Ee){dn(f,Y,Ee)}}}l=l.next}while(l!==d)}}catch(Ee){dn(i,i.return,Ee)}}function A0(t){var i=t.updateQueue;if(i!==null){var r=t.stateNode;try{gg(i,r)}catch(l){dn(t,t.return,l)}}}function w0(t,i,r){r.props=vr(t.type,t.memoizedProps),r.state=t.memoizedState;try{r.componentWillUnmount()}catch(l){dn(t,i,l)}}function hl(t,i){try{var r=t.ref;if(r!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof r=="function"?t.refCleanup=r(l):r.current=l}}catch(f){dn(t,i,f)}}function Ra(t,i){var r=t.ref,l=t.refCleanup;if(r!==null)if(typeof l=="function")try{l()}catch(f){dn(t,i,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(f){dn(t,i,f)}else r.current=null}function R0(t){var i=t.type,r=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":r.autoFocus&&l.focus();break e;case"img":r.src?l.src=r.src:r.srcSet&&(l.srcset=r.srcSet)}}catch(f){dn(t,t.return,f)}}function Cd(t,i,r){try{var l=t.stateNode;nM(l,t.type,r,i),l[cn]=i}catch(f){dn(t,t.return,f)}}function C0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Is(t.type)||t.tag===4}function Dd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||C0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Is(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ld(t,i,r){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(t,i):(i=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,i.appendChild(t),r=r._reactRootContainer,r!=null||i.onclick!==null||(i.onclick=pa));else if(l!==4&&(l===27&&Is(t.type)&&(r=t.stateNode,i=null),t=t.child,t!==null))for(Ld(t,i,r),t=t.sibling;t!==null;)Ld(t,i,r),t=t.sibling}function Xc(t,i,r){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?r.insertBefore(t,i):r.appendChild(t);else if(l!==4&&(l===27&&Is(t.type)&&(r=t.stateNode),t=t.child,t!==null))for(Xc(t,i,r),t=t.sibling;t!==null;)Xc(t,i,r),t=t.sibling}function D0(t){var i=t.stateNode,r=t.memoizedProps;try{for(var l=t.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);mi(i,l,r),i[pn]=t,i[cn]=r}catch(d){dn(t,t.return,d)}}var ts=!1,Kn=!1,Nd=!1,L0=typeof WeakSet=="function"?WeakSet:Set,oi=null;function PS(t,i){if(t=t.containerInfo,$d=fu,t=km(t),Tf(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var f=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{r.nodeType,d.nodeType}catch{r=null;break e}var E=0,C=-1,Y=-1,fe=0,Ee=0,Ne=t,de=null;t:for(;;){for(var xe;Ne!==r||f!==0&&Ne.nodeType!==3||(C=E+f),Ne!==d||l!==0&&Ne.nodeType!==3||(Y=E+l),Ne.nodeType===3&&(E+=Ne.nodeValue.length),(xe=Ne.firstChild)!==null;)de=Ne,Ne=xe;for(;;){if(Ne===t)break t;if(de===r&&++fe===f&&(C=E),de===d&&++Ee===l&&(Y=E),(xe=Ne.nextSibling)!==null)break;Ne=de,de=Ne.parentNode}Ne=xe}r=C===-1||Y===-1?null:{start:C,end:Y}}else r=null}r=r||{start:0,end:0}}else r=null;for(eh={focusedElem:t,selectionRange:r},fu=!1,oi=i;oi!==null;)if(i=oi,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,oi=t;else for(;oi!==null;){switch(i=oi,d=i.alternate,t=i.flags,i.tag){case 0:if((t&4)!==0&&(t=i.updateQueue,t=t!==null?t.events:null,t!==null))for(r=0;r<t.length;r++)f=t[r],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,r=i,f=d.memoizedProps,d=d.memoizedState,l=r.stateNode;try{var ct=vr(r.type,f);t=l.getSnapshotBeforeUpdate(ct,d),l.__reactInternalSnapshotBeforeUpdate=t}catch(_t){dn(r,r.return,_t)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,r=t.nodeType,r===9)ih(t);else if(r===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":ih(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=i.sibling,t!==null){t.return=i.return,oi=t;break}oi=i.return}}function N0(t,i,r){var l=r.flags;switch(r.tag){case 0:case 11:case 15:is(t,r),l&4&&dl(5,r);break;case 1:if(is(t,r),l&4)if(t=r.stateNode,i===null)try{t.componentDidMount()}catch(E){dn(r,r.return,E)}else{var f=vr(r.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(f,i,t.__reactInternalSnapshotBeforeUpdate)}catch(E){dn(r,r.return,E)}}l&64&&A0(r),l&512&&hl(r,r.return);break;case 3:if(is(t,r),l&64&&(t=r.updateQueue,t!==null)){if(i=null,r.child!==null)switch(r.child.tag){case 27:case 5:i=r.child.stateNode;break;case 1:i=r.child.stateNode}try{gg(t,i)}catch(E){dn(r,r.return,E)}}break;case 27:i===null&&l&4&&D0(r);case 26:case 5:is(t,r),i===null&&l&4&&R0(r),l&512&&hl(r,r.return);break;case 12:is(t,r);break;case 31:is(t,r),l&4&&P0(t,r);break;case 13:is(t,r),l&4&&I0(t,r),l&64&&(t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(r=XS.bind(null,r),uM(t,r))));break;case 22:if(l=r.memoizedState!==null||ts,!l){i=i!==null&&i.memoizedState!==null||Kn,f=ts;var d=Kn;ts=l,(Kn=i)&&!d?as(t,r,(r.subtreeFlags&8772)!==0):is(t,r),ts=f,Kn=d}break;case 30:break;default:is(t,r)}}function U0(t){var i=t.alternate;i!==null&&(t.alternate=null,U0(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&Si(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Dn=null,Oi=!1;function ns(t,i,r){for(r=r.child;r!==null;)O0(t,i,r),r=r.sibling}function O0(t,i,r){if(ge&&typeof ge.onCommitFiberUnmount=="function")try{ge.onCommitFiberUnmount(_e,r)}catch{}switch(r.tag){case 26:Kn||Ra(r,i),ns(t,i,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:Kn||Ra(r,i);var l=Dn,f=Oi;Is(r.type)&&(Dn=r.stateNode,Oi=!1),ns(t,i,r),Ml(r.stateNode),Dn=l,Oi=f;break;case 5:Kn||Ra(r,i);case 6:if(l=Dn,f=Oi,Dn=null,ns(t,i,r),Dn=l,Oi=f,Dn!==null)if(Oi)try{(Dn.nodeType===9?Dn.body:Dn.nodeName==="HTML"?Dn.ownerDocument.body:Dn).removeChild(r.stateNode)}catch(d){dn(r,i,d)}else try{Dn.removeChild(r.stateNode)}catch(d){dn(r,i,d)}break;case 18:Dn!==null&&(Oi?(t=Dn,Av(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,r.stateNode),uo(t)):Av(Dn,r.stateNode));break;case 4:l=Dn,f=Oi,Dn=r.stateNode.containerInfo,Oi=!0,ns(t,i,r),Dn=l,Oi=f;break;case 0:case 11:case 14:case 15:Cs(2,r,i),Kn||Cs(4,r,i),ns(t,i,r);break;case 1:Kn||(Ra(r,i),l=r.stateNode,typeof l.componentWillUnmount=="function"&&w0(r,i,l)),ns(t,i,r);break;case 21:ns(t,i,r);break;case 22:Kn=(l=Kn)||r.memoizedState!==null,ns(t,i,r),Kn=l;break;default:ns(t,i,r)}}function P0(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{uo(t)}catch(r){dn(i,i.return,r)}}}function I0(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{uo(t)}catch(r){dn(i,i.return,r)}}function IS(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new L0),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new L0),i;default:throw Error(a(435,t.tag))}}function Wc(t,i){var r=IS(t);i.forEach(function(l){if(!r.has(l)){r.add(l);var f=WS.bind(null,t,l);l.then(f,f)}})}function Pi(t,i){var r=i.deletions;if(r!==null)for(var l=0;l<r.length;l++){var f=r[l],d=t,E=i,C=E;e:for(;C!==null;){switch(C.tag){case 27:if(Is(C.type)){Dn=C.stateNode,Oi=!1;break e}break;case 5:Dn=C.stateNode,Oi=!1;break e;case 3:case 4:Dn=C.stateNode.containerInfo,Oi=!0;break e}C=C.return}if(Dn===null)throw Error(a(160));O0(d,E,f),Dn=null,Oi=!1,d=f.alternate,d!==null&&(d.return=null),f.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)F0(i,t),i=i.sibling}var ga=null;function F0(t,i){var r=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Pi(i,t),Ii(t),l&4&&(Cs(3,t,t.return),dl(3,t),Cs(5,t,t.return));break;case 1:Pi(i,t),Ii(t),l&512&&(Kn||r===null||Ra(r,r.return)),l&64&&ts&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(r=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=r===null?l:r.concat(l))));break;case 26:var f=ga;if(Pi(i,t),Ii(t),l&512&&(Kn||r===null||Ra(r,r.return)),l&4){var d=r!==null?r.memoizedState:null;if(l=t.memoizedState,r===null)if(l===null)if(t.stateNode===null){e:{l=t.type,r=t.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":d=f.getElementsByTagName("title")[0],(!d||d[yi]||d[pn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=f.createElement(l),f.head.insertBefore(d,f.querySelector("head > title"))),mi(d,l,r),d[pn]=t,we(d),l=d;break e;case"link":var E=Fv("link","href",f).get(l+(r.href||""));if(E){for(var C=0;C<E.length;C++)if(d=E[C],d.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&d.getAttribute("rel")===(r.rel==null?null:r.rel)&&d.getAttribute("title")===(r.title==null?null:r.title)&&d.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){E.splice(C,1);break t}}d=f.createElement(l),mi(d,l,r),f.head.appendChild(d);break;case"meta":if(E=Fv("meta","content",f).get(l+(r.content||""))){for(C=0;C<E.length;C++)if(d=E[C],d.getAttribute("content")===(r.content==null?null:""+r.content)&&d.getAttribute("name")===(r.name==null?null:r.name)&&d.getAttribute("property")===(r.property==null?null:r.property)&&d.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&d.getAttribute("charset")===(r.charSet==null?null:r.charSet)){E.splice(C,1);break t}}d=f.createElement(l),mi(d,l,r),f.head.appendChild(d);break;default:throw Error(a(468,l))}d[pn]=t,we(d),l=d}t.stateNode=l}else Bv(f,t.type,t.stateNode);else t.stateNode=Iv(f,l,t.memoizedProps);else d!==l?(d===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):d.count--,l===null?Bv(f,t.type,t.stateNode):Iv(f,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Cd(t,t.memoizedProps,r.memoizedProps)}break;case 27:Pi(i,t),Ii(t),l&512&&(Kn||r===null||Ra(r,r.return)),r!==null&&l&4&&Cd(t,t.memoizedProps,r.memoizedProps);break;case 5:if(Pi(i,t),Ii(t),l&512&&(Kn||r===null||Ra(r,r.return)),t.flags&32){f=t.stateNode;try{si(f,"")}catch(ct){dn(t,t.return,ct)}}l&4&&t.stateNode!=null&&(f=t.memoizedProps,Cd(t,f,r!==null?r.memoizedProps:f)),l&1024&&(Nd=!0);break;case 6:if(Pi(i,t),Ii(t),l&4){if(t.stateNode===null)throw Error(a(162));l=t.memoizedProps,r=t.stateNode;try{r.nodeValue=l}catch(ct){dn(t,t.return,ct)}}break;case 3:if(ou=null,f=ga,ga=su(i.containerInfo),Pi(i,t),ga=f,Ii(t),l&4&&r!==null&&r.memoizedState.isDehydrated)try{uo(i.containerInfo)}catch(ct){dn(t,t.return,ct)}Nd&&(Nd=!1,B0(t));break;case 4:l=ga,ga=su(t.stateNode.containerInfo),Pi(i,t),Ii(t),ga=l;break;case 12:Pi(i,t),Ii(t);break;case 31:Pi(i,t),Ii(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Wc(t,l)));break;case 13:Pi(i,t),Ii(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Yc=Bt()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Wc(t,l)));break;case 22:f=t.memoizedState!==null;var Y=r!==null&&r.memoizedState!==null,fe=ts,Ee=Kn;if(ts=fe||f,Kn=Ee||Y,Pi(i,t),Kn=Ee,ts=fe,Ii(t),l&8192)e:for(i=t.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(r===null||Y||ts||Kn||_r(t)),r=null,i=t;;){if(i.tag===5||i.tag===26){if(r===null){Y=r=i;try{if(d=Y.stateNode,f)E=d.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{C=Y.stateNode;var Ne=Y.memoizedProps.style,de=Ne!=null&&Ne.hasOwnProperty("display")?Ne.display:null;C.style.display=de==null||typeof de=="boolean"?"":(""+de).trim()}}catch(ct){dn(Y,Y.return,ct)}}}else if(i.tag===6){if(r===null){Y=i;try{Y.stateNode.nodeValue=f?"":Y.memoizedProps}catch(ct){dn(Y,Y.return,ct)}}}else if(i.tag===18){if(r===null){Y=i;try{var xe=Y.stateNode;f?wv(xe,!0):wv(Y.stateNode,!1)}catch(ct){dn(Y,Y.return,ct)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;r===i&&(r=null),i=i.return}r===i&&(r=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(r=l.retryQueue,r!==null&&(l.retryQueue=null,Wc(t,r))));break;case 19:Pi(i,t),Ii(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Wc(t,l)));break;case 30:break;case 21:break;default:Pi(i,t),Ii(t)}}function Ii(t){var i=t.flags;if(i&2){try{for(var r,l=t.return;l!==null;){if(C0(l)){r=l;break}l=l.return}if(r==null)throw Error(a(160));switch(r.tag){case 27:var f=r.stateNode,d=Dd(t);Xc(t,d,f);break;case 5:var E=r.stateNode;r.flags&32&&(si(E,""),r.flags&=-33);var C=Dd(t);Xc(t,C,E);break;case 3:case 4:var Y=r.stateNode.containerInfo,fe=Dd(t);Ld(t,fe,Y);break;default:throw Error(a(161))}}catch(Ee){dn(t,t.return,Ee)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function B0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;B0(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function is(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)N0(t,i.alternate,i),i=i.sibling}function _r(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:Cs(4,i,i.return),_r(i);break;case 1:Ra(i,i.return);var r=i.stateNode;typeof r.componentWillUnmount=="function"&&w0(i,i.return,r),_r(i);break;case 27:Ml(i.stateNode);case 26:case 5:Ra(i,i.return),_r(i);break;case 22:i.memoizedState===null&&_r(i);break;case 30:_r(i);break;default:_r(i)}t=t.sibling}}function as(t,i,r){for(r=r&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=t,d=i,E=d.flags;switch(d.tag){case 0:case 11:case 15:as(f,d,r),dl(4,d);break;case 1:if(as(f,d,r),l=d,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(fe){dn(l,l.return,fe)}if(l=d,f=l.updateQueue,f!==null){var C=l.stateNode;try{var Y=f.shared.hiddenCallbacks;if(Y!==null)for(f.shared.hiddenCallbacks=null,f=0;f<Y.length;f++)mg(Y[f],C)}catch(fe){dn(l,l.return,fe)}}r&&E&64&&A0(d),hl(d,d.return);break;case 27:D0(d);case 26:case 5:as(f,d,r),r&&l===null&&E&4&&R0(d),hl(d,d.return);break;case 12:as(f,d,r);break;case 31:as(f,d,r),r&&E&4&&P0(f,d);break;case 13:as(f,d,r),r&&E&4&&I0(f,d);break;case 22:d.memoizedState===null&&as(f,d,r),hl(d,d.return);break;case 30:break;default:as(f,d,r)}i=i.sibling}}function Ud(t,i){var r=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==r&&(t!=null&&t.refCount++,r!=null&&$o(r))}function Od(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&$o(t))}function va(t,i,r,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)z0(t,i,r,l),i=i.sibling}function z0(t,i,r,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:va(t,i,r,l),f&2048&&dl(9,i);break;case 1:va(t,i,r,l);break;case 3:va(t,i,r,l),f&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&$o(t)));break;case 12:if(f&2048){va(t,i,r,l),t=i.stateNode;try{var d=i.memoizedProps,E=d.id,C=d.onPostCommit;typeof C=="function"&&C(E,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(Y){dn(i,i.return,Y)}}else va(t,i,r,l);break;case 31:va(t,i,r,l);break;case 13:va(t,i,r,l);break;case 23:break;case 22:d=i.stateNode,E=i.alternate,i.memoizedState!==null?d._visibility&2?va(t,i,r,l):pl(t,i):d._visibility&2?va(t,i,r,l):(d._visibility|=2,$r(t,i,r,l,(i.subtreeFlags&10256)!==0||!1)),f&2048&&Ud(E,i);break;case 24:va(t,i,r,l),f&2048&&Od(i.alternate,i);break;default:va(t,i,r,l)}}function $r(t,i,r,l,f){for(f=f&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var d=t,E=i,C=r,Y=l,fe=E.flags;switch(E.tag){case 0:case 11:case 15:$r(d,E,C,Y,f),dl(8,E);break;case 23:break;case 22:var Ee=E.stateNode;E.memoizedState!==null?Ee._visibility&2?$r(d,E,C,Y,f):pl(d,E):(Ee._visibility|=2,$r(d,E,C,Y,f)),f&&fe&2048&&Ud(E.alternate,E);break;case 24:$r(d,E,C,Y,f),f&&fe&2048&&Od(E.alternate,E);break;default:$r(d,E,C,Y,f)}i=i.sibling}}function pl(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var r=t,l=i,f=l.flags;switch(l.tag){case 22:pl(r,l),f&2048&&Ud(l.alternate,l);break;case 24:pl(r,l),f&2048&&Od(l.alternate,l);break;default:pl(r,l)}i=i.sibling}}var ml=8192;function eo(t,i,r){if(t.subtreeFlags&ml)for(t=t.child;t!==null;)H0(t,i,r),t=t.sibling}function H0(t,i,r){switch(t.tag){case 26:eo(t,i,r),t.flags&ml&&t.memoizedState!==null&&MM(r,ga,t.memoizedState,t.memoizedProps);break;case 5:eo(t,i,r);break;case 3:case 4:var l=ga;ga=su(t.stateNode.containerInfo),eo(t,i,r),ga=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=ml,ml=16777216,eo(t,i,r),ml=l):eo(t,i,r));break;default:eo(t,i,r)}}function V0(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function gl(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];oi=l,k0(l,t)}V0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)G0(t),t=t.sibling}function G0(t){switch(t.tag){case 0:case 11:case 15:gl(t),t.flags&2048&&Cs(9,t,t.return);break;case 3:gl(t);break;case 12:gl(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,qc(t)):gl(t);break;default:gl(t)}}function qc(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];oi=l,k0(l,t)}V0(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:Cs(8,i,i.return),qc(i);break;case 22:r=i.stateNode,r._visibility&2&&(r._visibility&=-3,qc(i));break;default:qc(i)}t=t.sibling}}function k0(t,i){for(;oi!==null;){var r=oi;switch(r.tag){case 0:case 11:case 15:Cs(8,r,i);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var l=r.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:$o(r.memoizedState.cache)}if(l=r.child,l!==null)l.return=r,oi=l;else e:for(r=t;oi!==null;){l=oi;var f=l.sibling,d=l.return;if(U0(l),l===r){oi=null;break e}if(f!==null){f.return=d,oi=f;break e}oi=d}}}var FS={getCacheForType:function(t){var i=hi(Yn),r=i.data.get(t);return r===void 0&&(r=t(),i.data.set(t,r)),r},cacheSignal:function(){return hi(Yn).controller.signal}},BS=typeof WeakMap=="function"?WeakMap:Map,sn=0,En=null,Gt=null,Yt=0,fn=0,Yi=null,Ds=!1,to=!1,Pd=!1,ss=0,zn=0,Ls=0,xr=0,Id=0,Zi=0,no=0,vl=null,Fi=null,Fd=!1,Yc=0,X0=0,Zc=1/0,jc=null,Ns=null,$n=0,Us=null,io=null,rs=0,Bd=0,zd=null,W0=null,_l=0,Hd=null;function ji(){return(sn&2)!==0&&Yt!==0?Yt&-Yt:V.T!==null?qd():wi()}function q0(){if(Zi===0)if((Yt&536870912)===0||Kt){var t=at;at<<=1,(at&3932160)===0&&(at=262144),Zi=t}else Zi=536870912;return t=Wi.current,t!==null&&(t.flags|=32),Zi}function Bi(t,i,r){(t===En&&(fn===2||fn===9)||t.cancelPendingCommit!==null)&&(ao(t,0),Os(t,Yt,Zi,!1)),rt(t,r),((sn&2)===0||t!==En)&&(t===En&&((sn&2)===0&&(xr|=r),zn===4&&Os(t,Yt,Zi,!1)),Ca(t))}function Y0(t,i,r){if((sn&6)!==0)throw Error(a(327));var l=!r&&(i&127)===0&&(i&t.expiredLanes)===0||Xe(t,i),f=l?VS(t,i):Gd(t,i,!0),d=l;do{if(f===0){to&&!l&&Os(t,i,0,!1);break}else{if(r=t.current.alternate,d&&!zS(r)){f=Gd(t,i,!1),d=!1;continue}if(f===2){if(d=i,t.errorRecoveryDisabledLanes&d)var E=0;else E=t.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){i=E;e:{var C=t;f=vl;var Y=C.current.memoizedState.isDehydrated;if(Y&&(ao(C,E).flags|=256),E=Gd(C,E,!1),E!==2){if(Pd&&!Y){C.errorRecoveryDisabledLanes|=d,xr|=d,f=4;break e}d=Fi,Fi=f,d!==null&&(Fi===null?Fi=d:Fi.push.apply(Fi,d))}f=E}if(d=!1,f!==2)continue}}if(f===1){ao(t,0),Os(t,i,0,!0);break}e:{switch(l=t,d=f,d){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:Os(l,i,Zi,!Ds);break e;case 2:Fi=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(f=Yc+300-Bt(),10<f)){if(Os(l,i,Zi,!Ds),Se(l,0,!0)!==0)break e;rs=i,l.timeoutHandle=bv(Z0.bind(null,l,r,Fi,jc,Fd,i,Zi,xr,no,Ds,d,"Throttled",-0,0),f);break e}Z0(l,r,Fi,jc,Fd,i,Zi,xr,no,Ds,d,null,-0,0)}}break}while(!0);Ca(t)}function Z0(t,i,r,l,f,d,E,C,Y,fe,Ee,Ne,de,xe){if(t.timeoutHandle=-1,Ne=i.subtreeFlags,Ne&8192||(Ne&16785408)===16785408){Ne={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:pa},H0(i,d,Ne);var ct=(d&62914560)===d?Yc-Bt():(d&4194048)===d?X0-Bt():0;if(ct=EM(Ne,ct),ct!==null){rs=d,t.cancelPendingCommit=ct(nv.bind(null,t,i,d,r,l,f,E,C,Y,Ee,Ne,null,de,xe)),Os(t,d,E,!fe);return}}nv(t,i,d,r,l,f,E,C,Y)}function zS(t){for(var i=t;;){var r=i.tag;if((r===0||r===11||r===15)&&i.flags&16384&&(r=i.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var l=0;l<r.length;l++){var f=r[l],d=f.getSnapshot;f=f.value;try{if(!ki(d(),f))return!1}catch{return!1}}if(r=i.child,i.subtreeFlags&16384&&r!==null)r.return=i,i=r;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Os(t,i,r,l){i&=~Id,i&=~xr,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var f=i;0<f;){var d=31-Je(f),E=1<<d;l[d]=-1,f&=~E}r!==0&&Wt(t,r,i)}function Kc(){return(sn&6)===0?(xl(0),!1):!0}function Vd(){if(Gt!==null){if(fn===0)var t=Gt.return;else t=Gt,ja=ur=null,id(t),Zr=null,tl=0,t=Gt;for(;t!==null;)T0(t.alternate,t),t=t.return;Gt=null}}function ao(t,i){var r=t.timeoutHandle;r!==-1&&(t.timeoutHandle=-1,sM(r)),r=t.cancelPendingCommit,r!==null&&(t.cancelPendingCommit=null,r()),rs=0,Vd(),En=t,Gt=r=Ya(t.current,null),Yt=i,fn=0,Yi=null,Ds=!1,to=Xe(t,i),Pd=!1,no=Zi=Id=xr=Ls=zn=0,Fi=vl=null,Fd=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var f=31-Je(l),d=1<<f;i|=t[f],l&=~d}return ss=i,vc(),r}function j0(t,i){Ut=null,V.H=cl,i===Yr||i===Tc?(i=fg(),fn=3):i===Wf?(i=fg(),fn=4):fn=i===xd?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Yi=i,Gt===null&&(zn=1,zc(t,na(i,t.current)))}function K0(){var t=Wi.current;return t===null?!0:(Yt&4194048)===Yt?ra===null:(Yt&62914560)===Yt||(Yt&536870912)!==0?t===ra:!1}function Q0(){var t=V.H;return V.H=cl,t===null?cl:t}function J0(){var t=V.A;return V.A=FS,t}function Qc(){zn=4,Ds||(Yt&4194048)!==Yt&&Wi.current!==null||(to=!0),(Ls&134217727)===0&&(xr&134217727)===0||En===null||Os(En,Yt,Zi,!1)}function Gd(t,i,r){var l=sn;sn|=2;var f=Q0(),d=J0();(En!==t||Yt!==i)&&(jc=null,ao(t,i)),i=!1;var E=zn;e:do try{if(fn!==0&&Gt!==null){var C=Gt,Y=Yi;switch(fn){case 8:Vd(),E=6;break e;case 3:case 2:case 9:case 6:Wi.current===null&&(i=!0);var fe=fn;if(fn=0,Yi=null,so(t,C,Y,fe),r&&to){E=0;break e}break;default:fe=fn,fn=0,Yi=null,so(t,C,Y,fe)}}HS(),E=zn;break}catch(Ee){j0(t,Ee)}while(!0);return i&&t.shellSuspendCounter++,ja=ur=null,sn=l,V.H=f,V.A=d,Gt===null&&(En=null,Yt=0,vc()),E}function HS(){for(;Gt!==null;)$0(Gt)}function VS(t,i){var r=sn;sn|=2;var l=Q0(),f=J0();En!==t||Yt!==i?(jc=null,Zc=Bt()+500,ao(t,i)):to=Xe(t,i);e:do try{if(fn!==0&&Gt!==null){i=Gt;var d=Yi;t:switch(fn){case 1:fn=0,Yi=null,so(t,i,d,1);break;case 2:case 9:if(cg(d)){fn=0,Yi=null,ev(i);break}i=function(){fn!==2&&fn!==9||En!==t||(fn=7),Ca(t)},d.then(i,i);break e;case 3:fn=7;break e;case 4:fn=5;break e;case 7:cg(d)?(fn=0,Yi=null,ev(i)):(fn=0,Yi=null,so(t,i,d,7));break;case 5:var E=null;switch(Gt.tag){case 26:E=Gt.memoizedState;case 5:case 27:var C=Gt;if(E?zv(E):C.stateNode.complete){fn=0,Yi=null;var Y=C.sibling;if(Y!==null)Gt=Y;else{var fe=C.return;fe!==null?(Gt=fe,Jc(fe)):Gt=null}break t}}fn=0,Yi=null,so(t,i,d,5);break;case 6:fn=0,Yi=null,so(t,i,d,6);break;case 8:Vd(),zn=6;break e;default:throw Error(a(462))}}GS();break}catch(Ee){j0(t,Ee)}while(!0);return ja=ur=null,V.H=l,V.A=f,sn=r,Gt!==null?0:(En=null,Yt=0,vc(),zn)}function GS(){for(;Gt!==null&&!jt();)$0(Gt)}function $0(t){var i=E0(t.alternate,t,ss);t.memoizedProps=t.pendingProps,i===null?Jc(t):Gt=i}function ev(t){var i=t,r=i.alternate;switch(i.tag){case 15:case 0:i=v0(r,i,i.pendingProps,i.type,void 0,Yt);break;case 11:i=v0(r,i,i.pendingProps,i.type.render,i.ref,Yt);break;case 5:id(i);default:T0(r,i),i=Gt=Jm(i,ss),i=E0(r,i,ss)}t.memoizedProps=t.pendingProps,i===null?Jc(t):Gt=i}function so(t,i,r,l){ja=ur=null,id(i),Zr=null,tl=0;var f=i.return;try{if(DS(t,f,i,r,Yt)){zn=1,zc(t,na(r,t.current)),Gt=null;return}}catch(d){if(f!==null)throw Gt=f,d;zn=1,zc(t,na(r,t.current)),Gt=null;return}i.flags&32768?(Kt||l===1?t=!0:to||(Yt&536870912)!==0?t=!1:(Ds=t=!0,(l===2||l===9||l===3||l===6)&&(l=Wi.current,l!==null&&l.tag===13&&(l.flags|=16384))),tv(i,t)):Jc(i)}function Jc(t){var i=t;do{if((i.flags&32768)!==0){tv(i,Ds);return}t=i.return;var r=US(i.alternate,i,ss);if(r!==null){Gt=r;return}if(i=i.sibling,i!==null){Gt=i;return}Gt=i=t}while(i!==null);zn===0&&(zn=5)}function tv(t,i){do{var r=OS(t.alternate,t);if(r!==null){r.flags&=32767,Gt=r;return}if(r=t.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!i&&(t=t.sibling,t!==null)){Gt=t;return}Gt=t=r}while(t!==null);zn=6,Gt=null}function nv(t,i,r,l,f,d,E,C,Y){t.cancelPendingCommit=null;do $c();while($n!==0);if((sn&6)!==0)throw Error(a(327));if(i!==null){if(i===t.current)throw Error(a(177));if(d=i.lanes|i.childLanes,d|=Df,ln(t,r,d,E,C,Y),t===En&&(Gt=En=null,Yt=0),io=i,Us=t,rs=r,Bd=d,zd=f,W0=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,qS(ne,function(){return ov(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=V.T,V.T=null,f=X.p,X.p=2,E=sn,sn|=4;try{PS(t,i,r)}finally{sn=E,X.p=f,V.T=l}}$n=1,iv(),av(),sv()}}function iv(){if($n===1){$n=0;var t=Us,i=io,r=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||r){r=V.T,V.T=null;var l=X.p;X.p=2;var f=sn;sn|=4;try{F0(i,t);var d=eh,E=km(t.containerInfo),C=d.focusedElem,Y=d.selectionRange;if(E!==C&&C&&C.ownerDocument&&Gm(C.ownerDocument.documentElement,C)){if(Y!==null&&Tf(C)){var fe=Y.start,Ee=Y.end;if(Ee===void 0&&(Ee=fe),"selectionStart"in C)C.selectionStart=fe,C.selectionEnd=Math.min(Ee,C.value.length);else{var Ne=C.ownerDocument||document,de=Ne&&Ne.defaultView||window;if(de.getSelection){var xe=de.getSelection(),ct=C.textContent.length,_t=Math.min(Y.start,ct),yn=Y.end===void 0?_t:Math.min(Y.end,ct);!xe.extend&&_t>yn&&(E=yn,yn=_t,_t=E);var ae=Vm(C,_t),J=Vm(C,yn);if(ae&&J&&(xe.rangeCount!==1||xe.anchorNode!==ae.node||xe.anchorOffset!==ae.offset||xe.focusNode!==J.node||xe.focusOffset!==J.offset)){var le=Ne.createRange();le.setStart(ae.node,ae.offset),xe.removeAllRanges(),_t>yn?(xe.addRange(le),xe.extend(J.node,J.offset)):(le.setEnd(J.node,J.offset),xe.addRange(le))}}}}for(Ne=[],xe=C;xe=xe.parentNode;)xe.nodeType===1&&Ne.push({element:xe,left:xe.scrollLeft,top:xe.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<Ne.length;C++){var Ae=Ne[C];Ae.element.scrollLeft=Ae.left,Ae.element.scrollTop=Ae.top}}fu=!!$d,eh=$d=null}finally{sn=f,X.p=l,V.T=r}}t.current=i,$n=2}}function av(){if($n===2){$n=0;var t=Us,i=io,r=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||r){r=V.T,V.T=null;var l=X.p;X.p=2;var f=sn;sn|=4;try{N0(t,i.alternate,i)}finally{sn=f,X.p=l,V.T=r}}$n=3}}function sv(){if($n===4||$n===3){$n=0,$();var t=Us,i=io,r=rs,l=W0;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?$n=5:($n=0,io=Us=null,rv(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(Ns=null),Ji(r),i=i.stateNode,ge&&typeof ge.onCommitFiberRoot=="function")try{ge.onCommitFiberRoot(_e,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=V.T,f=X.p,X.p=2,V.T=null;try{for(var d=t.onRecoverableError,E=0;E<l.length;E++){var C=l[E];d(C.value,{componentStack:C.stack})}}finally{V.T=i,X.p=f}}(rs&3)!==0&&$c(),Ca(t),f=t.pendingLanes,(r&261930)!==0&&(f&42)!==0?t===Hd?_l++:(_l=0,Hd=t):_l=0,xl(0)}}function rv(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,$o(i)))}function $c(){return iv(),av(),sv(),ov()}function ov(){if($n!==5)return!1;var t=Us,i=Bd;Bd=0;var r=Ji(rs),l=V.T,f=X.p;try{X.p=32>r?32:r,V.T=null,r=zd,zd=null;var d=Us,E=rs;if($n=0,io=Us=null,rs=0,(sn&6)!==0)throw Error(a(331));var C=sn;if(sn|=4,G0(d.current),z0(d,d.current,E,r),sn=C,xl(0,!1),ge&&typeof ge.onPostCommitFiberRoot=="function")try{ge.onPostCommitFiberRoot(_e,d)}catch{}return!0}finally{X.p=f,V.T=l,rv(t,i)}}function lv(t,i,r){i=na(r,i),i=_d(t.stateNode,i,2),t=As(t,i,2),t!==null&&(rt(t,2),Ca(t))}function dn(t,i,r){if(t.tag===3)lv(t,t,r);else for(;i!==null;){if(i.tag===3){lv(i,t,r);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ns===null||!Ns.has(l))){t=na(r,t),r=c0(2),l=As(i,r,2),l!==null&&(u0(r,l,i,t),rt(l,2),Ca(l));break}}i=i.return}}function kd(t,i,r){var l=t.pingCache;if(l===null){l=t.pingCache=new BS;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(r)||(Pd=!0,f.add(r),t=kS.bind(null,t,i,r),i.then(t,t))}function kS(t,i,r){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&r,t.warmLanes&=~r,En===t&&(Yt&r)===r&&(zn===4||zn===3&&(Yt&62914560)===Yt&&300>Bt()-Yc?(sn&2)===0&&ao(t,0):Id|=r,no===Yt&&(no=0)),Ca(t)}function cv(t,i){i===0&&(i=Le()),t=or(t,i),t!==null&&(rt(t,i),Ca(t))}function XS(t){var i=t.memoizedState,r=0;i!==null&&(r=i.retryLane),cv(t,r)}function WS(t,i){var r=0;switch(t.tag){case 31:case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(r=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),cv(t,r)}function qS(t,i){return un(t,i)}var eu=null,ro=null,Xd=!1,tu=!1,Wd=!1,Ps=0;function Ca(t){t!==ro&&t.next===null&&(ro===null?eu=ro=t:ro=ro.next=t),tu=!0,Xd||(Xd=!0,ZS())}function xl(t,i){if(!Wd&&tu){Wd=!0;do for(var r=!1,l=eu;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var d=0;else{var E=l.suspendedLanes,C=l.pingedLanes;d=(1<<31-Je(42|t)+1)-1,d&=f&~(E&~C),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(r=!0,hv(l,d))}else d=Yt,d=Se(l,l===En?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||Xe(l,d)||(r=!0,hv(l,d));l=l.next}while(r);Wd=!1}}function YS(){uv()}function uv(){tu=Xd=!1;var t=0;Ps!==0&&aM()&&(t=Ps);for(var i=Bt(),r=null,l=eu;l!==null;){var f=l.next,d=fv(l,i);d===0?(l.next=null,r===null?eu=f:r.next=f,f===null&&(ro=r)):(r=l,(t!==0||(d&3)!==0)&&(tu=!0)),l=f}$n!==0&&$n!==5||xl(t),Ps!==0&&(Ps=0)}function fv(t,i){for(var r=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var E=31-Je(d),C=1<<E,Y=f[E];Y===-1?((C&r)===0||(C&l)!==0)&&(f[E]=tt(C,i)):Y<=i&&(t.expiredLanes|=C),d&=~C}if(i=En,r=Yt,r=Se(t,t===i?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,r===0||t===i&&(fn===2||fn===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Ht(l),t.callbackNode=null,t.callbackPriority=0;if((r&3)===0||Xe(t,r)){if(i=r&-r,i===t.callbackPriority)return i;switch(l!==null&&Ht(l),Ji(r)){case 2:case 8:r=A;break;case 32:r=ne;break;case 268435456:r=ue;break;default:r=ne}return l=dv.bind(null,t),r=un(r,l),t.callbackPriority=i,t.callbackNode=r,i}return l!==null&&l!==null&&Ht(l),t.callbackPriority=2,t.callbackNode=null,2}function dv(t,i){if($n!==0&&$n!==5)return t.callbackNode=null,t.callbackPriority=0,null;var r=t.callbackNode;if($c()&&t.callbackNode!==r)return null;var l=Yt;return l=Se(t,t===En?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(Y0(t,l,i),fv(t,Bt()),t.callbackNode!=null&&t.callbackNode===r?dv.bind(null,t):null)}function hv(t,i){if($c())return null;Y0(t,i,!0)}function ZS(){rM(function(){(sn&6)!==0?un(z,YS):uv()})}function qd(){if(Ps===0){var t=Wr;t===0&&(t=je,je<<=1,(je&261888)===0&&(je=256)),Ps=t}return Ps}function pv(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Gi(""+t)}function mv(t,i){var r=i.ownerDocument.createElement("input");return r.name=i.name,r.value=i.value,t.id&&r.setAttribute("form",t.id),i.parentNode.insertBefore(r,i),t=new FormData(t),r.parentNode.removeChild(r),t}function jS(t,i,r,l,f){if(i==="submit"&&r&&r.stateNode===f){var d=pv((f[cn]||null).action),E=l.submitter;E&&(i=(i=E[cn]||null)?pv(i.formAction):E.getAttribute("formAction"),i!==null&&(d=i,E=null));var C=new Wn("action","action",null,l,f);t.push({event:C,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ps!==0){var Y=E?mv(f,E):new FormData(f);dd(r,{pending:!0,data:Y,method:f.method,action:d},null,Y)}}else typeof d=="function"&&(C.preventDefault(),Y=E?mv(f,E):new FormData(f),dd(r,{pending:!0,data:Y,method:f.method,action:d},d,Y))},currentTarget:f}]})}}for(var Yd=0;Yd<Cf.length;Yd++){var Zd=Cf[Yd],KS=Zd.toLowerCase(),QS=Zd[0].toUpperCase()+Zd.slice(1);ma(KS,"on"+QS)}ma(qm,"onAnimationEnd"),ma(Ym,"onAnimationIteration"),ma(Zm,"onAnimationStart"),ma("dblclick","onDoubleClick"),ma("focusin","onFocus"),ma("focusout","onBlur"),ma(hS,"onTransitionRun"),ma(pS,"onTransitionStart"),ma(mS,"onTransitionCancel"),ma(jm,"onTransitionEnd"),q("onMouseEnter",["mouseout","mouseover"]),q("onMouseLeave",["mouseout","mouseover"]),q("onPointerEnter",["pointerout","pointerover"]),q("onPointerLeave",["pointerout","pointerover"]),P("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),P("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),P("onBeforeInput",["compositionend","keypress","textInput","paste"]),P("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),P("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),P("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),JS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(yl));function gv(t,i){i=(i&4)!==0;for(var r=0;r<t.length;r++){var l=t[r],f=l.event;l=l.listeners;e:{var d=void 0;if(i)for(var E=l.length-1;0<=E;E--){var C=l[E],Y=C.instance,fe=C.currentTarget;if(C=C.listener,Y!==d&&f.isPropagationStopped())break e;d=C,f.currentTarget=fe;try{d(f)}catch(Ee){gc(Ee)}f.currentTarget=null,d=Y}else for(E=0;E<l.length;E++){if(C=l[E],Y=C.instance,fe=C.currentTarget,C=C.listener,Y!==d&&f.isPropagationStopped())break e;d=C,f.currentTarget=fe;try{d(f)}catch(Ee){gc(Ee)}f.currentTarget=null,d=Y}}}}function kt(t,i){var r=i[ii];r===void 0&&(r=i[ii]=new Set);var l=t+"__bubble";r.has(l)||(vv(i,t,2,!1),r.add(l))}function jd(t,i,r){var l=0;i&&(l|=4),vv(r,t,l,i)}var nu="_reactListening"+Math.random().toString(36).slice(2);function Kd(t){if(!t[nu]){t[nu]=!0,Oe.forEach(function(r){r!=="selectionchange"&&(JS.has(r)||jd(r,!1,t),jd(r,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[nu]||(i[nu]=!0,jd("selectionchange",!1,i))}}function vv(t,i,r,l){switch(qv(i)){case 2:var f=AM;break;case 8:f=wM;break;default:f=fh}r=f.bind(null,i,r,t),f=void 0,!Pr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,r,{capture:!0,passive:f}):t.addEventListener(i,r,!0):f!==void 0?t.addEventListener(i,r,{passive:f}):t.addEventListener(i,r,!1)}function Qd(t,i,r,l,f){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var C=l.stateNode.containerInfo;if(C===f)break;if(E===4)for(E=l.return;E!==null;){var Y=E.tag;if((Y===3||Y===4)&&E.stateNode.containerInfo===f)return;E=E.return}for(;C!==null;){if(E=ui(C),E===null)return;if(Y=E.tag,Y===5||Y===6||Y===26||Y===27){l=d=E;continue e}C=C.parentNode}}l=l.return}Xo(function(){var fe=d,Ee=Go(r),Ne=[];e:{var de=Km.get(t);if(de!==void 0){var xe=Wn,ct=t;switch(t){case"keypress":if(Et(r)===0)break e;case"keydown":case"keyup":xe=Wy;break;case"focusin":ct="focus",xe=yt;break;case"focusout":ct="blur",xe=yt;break;case"beforeblur":case"afterblur":xe=yt;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":xe=qa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":xe=dc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":xe=Zy;break;case qm:case Ym:case Zm:xe=Cn;break;case jm:xe=Ky;break;case"scroll":case"scrollend":xe=nr;break;case"wheel":xe=Jy;break;case"copy":case"cut":case"paste":xe=Tn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":xe=wm;break;case"toggle":case"beforetoggle":xe=eS}var _t=(i&4)!==0,yn=!_t&&(t==="scroll"||t==="scrollend"),ae=_t?de!==null?de+"Capture":null:de;_t=[];for(var J=fe,le;J!==null;){var Ae=J;if(le=Ae.stateNode,Ae=Ae.tag,Ae!==5&&Ae!==26&&Ae!==27||le===null||ae===null||(Ae=xs(J,ae),Ae!=null&&_t.push(Sl(J,Ae,le))),yn)break;J=J.return}0<_t.length&&(de=new xe(de,ct,null,r,Ee),Ne.push({event:de,listeners:_t}))}}if((i&7)===0){e:{if(de=t==="mouseover"||t==="pointerover",xe=t==="mouseout"||t==="pointerout",de&&r!==Vo&&(ct=r.relatedTarget||r.fromElement)&&(ui(ct)||ct[bn]))break e;if((xe||de)&&(de=Ee.window===Ee?Ee:(de=Ee.ownerDocument)?de.defaultView||de.parentWindow:window,xe?(ct=r.relatedTarget||r.toElement,xe=fe,ct=ct?ui(ct):null,ct!==null&&(yn=c(ct),_t=ct.tag,ct!==yn||_t!==5&&_t!==27&&_t!==6)&&(ct=null)):(xe=null,ct=fe),xe!==ct)){if(_t=qa,Ae="onMouseLeave",ae="onMouseEnter",J="mouse",(t==="pointerout"||t==="pointerover")&&(_t=wm,Ae="onPointerLeave",ae="onPointerEnter",J="pointer"),yn=xe==null?de:Q(xe),le=ct==null?de:Q(ct),de=new _t(Ae,J+"leave",xe,r,Ee),de.target=yn,de.relatedTarget=le,Ae=null,ui(Ee)===fe&&(_t=new _t(ae,J+"enter",ct,r,Ee),_t.target=le,_t.relatedTarget=yn,Ae=_t),yn=Ae,xe&&ct)t:{for(_t=$S,ae=xe,J=ct,le=0,Ae=ae;Ae;Ae=_t(Ae))le++;Ae=0;for(var gt=J;gt;gt=_t(gt))Ae++;for(;0<le-Ae;)ae=_t(ae),le--;for(;0<Ae-le;)J=_t(J),Ae--;for(;le--;){if(ae===J||J!==null&&ae===J.alternate){_t=ae;break t}ae=_t(ae),J=_t(J)}_t=null}else _t=null;xe!==null&&_v(Ne,de,xe,_t,!1),ct!==null&&yn!==null&&_v(Ne,yn,ct,_t,!0)}}e:{if(de=fe?Q(fe):window,xe=de.nodeName&&de.nodeName.toLowerCase(),xe==="select"||xe==="input"&&de.type==="file")var en=Pm;else if(Um(de))if(Im)en=uS;else{en=lS;var ft=oS}else xe=de.nodeName,!xe||xe.toLowerCase()!=="input"||de.type!=="checkbox"&&de.type!=="radio"?fe&&It(fe.elementType)&&(en=Pm):en=cS;if(en&&(en=en(t,fe))){Om(Ne,en,r,Ee);break e}ft&&ft(t,de,fe),t==="focusout"&&fe&&de.type==="number"&&fe.memoizedProps.value!=null&&Rt(de,"number",de.value)}switch(ft=fe?Q(fe):window,t){case"focusin":(Um(ft)||ft.contentEditable==="true")&&(Fr=ft,Af=fe,Ko=null);break;case"focusout":Ko=Af=Fr=null;break;case"mousedown":wf=!0;break;case"contextmenu":case"mouseup":case"dragend":wf=!1,Xm(Ne,r,Ee);break;case"selectionchange":if(dS)break;case"keydown":case"keyup":Xm(Ne,r,Ee)}var Ot;if(Mf)e:{switch(t){case"compositionstart":var Zt="onCompositionStart";break e;case"compositionend":Zt="onCompositionEnd";break e;case"compositionupdate":Zt="onCompositionUpdate";break e}Zt=void 0}else Ir?Lm(t,r)&&(Zt="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(Zt="onCompositionStart");Zt&&(Rm&&r.locale!=="ko"&&(Ir||Zt!=="onCompositionStart"?Zt==="onCompositionEnd"&&Ir&&(Ot=gn()):(Fe=Ee,lt="value"in Fe?Fe.value:Fe.textContent,Ir=!0)),ft=iu(fe,Zt),0<ft.length&&(Zt=new qn(Zt,t,null,r,Ee),Ne.push({event:Zt,listeners:ft}),Ot?Zt.data=Ot:(Ot=Nm(r),Ot!==null&&(Zt.data=Ot)))),(Ot=nS?iS(t,r):aS(t,r))&&(Zt=iu(fe,"onBeforeInput"),0<Zt.length&&(ft=new qn("onBeforeInput","beforeinput",null,r,Ee),Ne.push({event:ft,listeners:Zt}),ft.data=Ot)),jS(Ne,t,fe,r,Ee)}gv(Ne,i)})}function Sl(t,i,r){return{instance:t,listener:i,currentTarget:r}}function iu(t,i){for(var r=i+"Capture",l=[];t!==null;){var f=t,d=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||d===null||(f=xs(t,r),f!=null&&l.unshift(Sl(t,f,d)),f=xs(t,i),f!=null&&l.push(Sl(t,f,d))),t.tag===3)return l;t=t.return}return[]}function $S(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function _v(t,i,r,l,f){for(var d=i._reactName,E=[];r!==null&&r!==l;){var C=r,Y=C.alternate,fe=C.stateNode;if(C=C.tag,Y!==null&&Y===l)break;C!==5&&C!==26&&C!==27||fe===null||(Y=fe,f?(fe=xs(r,d),fe!=null&&E.unshift(Sl(r,fe,Y))):f||(fe=xs(r,d),fe!=null&&E.push(Sl(r,fe,Y)))),r=r.return}E.length!==0&&t.push({event:i,listeners:E})}var eM=/\r\n?/g,tM=/\u0000|\uFFFD/g;function xv(t){return(typeof t=="string"?t:""+t).replace(eM,`
`).replace(tM,"")}function yv(t,i){return i=xv(i),xv(t)===i}function xn(t,i,r,l,f,d){switch(r){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||si(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&si(t,""+l);break;case"className":Ie(t,"class",l);break;case"tabIndex":Ie(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Ie(t,r,l);break;case"style":Sn(t,l,d);break;case"data":if(i!=="object"){Ie(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||r!=="href")){t.removeAttribute(r);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(r);break}l=Gi(""+l),t.setAttribute(r,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(r==="formAction"?(i!=="input"&&xn(t,i,"name",f.name,f,null),xn(t,i,"formEncType",f.formEncType,f,null),xn(t,i,"formMethod",f.formMethod,f,null),xn(t,i,"formTarget",f.formTarget,f,null)):(xn(t,i,"encType",f.encType,f,null),xn(t,i,"method",f.method,f,null),xn(t,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(r);break}l=Gi(""+l),t.setAttribute(r,l);break;case"onClick":l!=null&&(t.onclick=pa);break;case"onScroll":l!=null&&kt("scroll",t);break;case"onScrollEnd":l!=null&&kt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=r}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}r=Gi(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(r,""+l):t.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(r,""):t.removeAttribute(r);break;case"capture":case"download":l===!0?t.setAttribute(r,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(r,l):t.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(r,l):t.removeAttribute(r);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(r):t.setAttribute(r,l);break;case"popover":kt("beforetoggle",t),kt("toggle",t),Re(t,"popover",l);break;case"xlinkActuate":ze(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":ze(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":ze(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":ze(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":ze(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":ze(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":ze(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":ze(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":ze(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Re(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=mn.get(r)||r,Re(t,r,l))}}function Jd(t,i,r,l,f,d){switch(r){case"style":Sn(t,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=r}}break;case"children":typeof l=="string"?si(t,l):(typeof l=="number"||typeof l=="bigint")&&si(t,""+l);break;case"onScroll":l!=null&&kt("scroll",t);break;case"onScrollEnd":l!=null&&kt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=pa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!b.hasOwnProperty(r))e:{if(r[0]==="o"&&r[1]==="n"&&(f=r.endsWith("Capture"),i=r.slice(2,f?r.length-7:void 0),d=t[cn]||null,d=d!=null?d[r]:null,typeof d=="function"&&t.removeEventListener(i,d,f),typeof l=="function")){typeof d!="function"&&d!==null&&(r in t?t[r]=null:t.hasAttribute(r)&&t.removeAttribute(r)),t.addEventListener(i,l,f);break e}r in t?t[r]=l:l===!0?t.setAttribute(r,""):Re(t,r,l)}}}function mi(t,i,r){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":kt("error",t),kt("load",t);var l=!1,f=!1,d;for(d in r)if(r.hasOwnProperty(d)){var E=r[d];if(E!=null)switch(d){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:xn(t,i,d,E,r,null)}}f&&xn(t,i,"srcSet",r.srcSet,r,null),l&&xn(t,i,"src",r.src,r,null);return;case"input":kt("invalid",t);var C=d=E=f=null,Y=null,fe=null;for(l in r)if(r.hasOwnProperty(l)){var Ee=r[l];if(Ee!=null)switch(l){case"name":f=Ee;break;case"type":E=Ee;break;case"checked":Y=Ee;break;case"defaultChecked":fe=Ee;break;case"value":d=Ee;break;case"defaultValue":C=Ee;break;case"children":case"dangerouslySetInnerHTML":if(Ee!=null)throw Error(a(137,i));break;default:xn(t,i,l,Ee,r,null)}}Ln(t,d,C,Y,fe,E,f,!1);return;case"select":kt("invalid",t),l=E=d=null;for(f in r)if(r.hasOwnProperty(f)&&(C=r[f],C!=null))switch(f){case"value":d=C;break;case"defaultValue":E=C;break;case"multiple":l=C;default:xn(t,i,f,C,r,null)}i=d,r=E,t.multiple=!!l,i!=null?Nn(t,!!l,i,!1):r!=null&&Nn(t,!!l,r,!0);return;case"textarea":kt("invalid",t),d=f=l=null;for(E in r)if(r.hasOwnProperty(E)&&(C=r[E],C!=null))switch(E){case"value":l=C;break;case"defaultValue":f=C;break;case"children":d=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(a(91));break;default:xn(t,i,E,C,r,null)}fi(t,l,f,d);return;case"option":for(Y in r)if(r.hasOwnProperty(Y)&&(l=r[Y],l!=null))switch(Y){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:xn(t,i,Y,l,r,null)}return;case"dialog":kt("beforetoggle",t),kt("toggle",t),kt("cancel",t),kt("close",t);break;case"iframe":case"object":kt("load",t);break;case"video":case"audio":for(l=0;l<yl.length;l++)kt(yl[l],t);break;case"image":kt("error",t),kt("load",t);break;case"details":kt("toggle",t);break;case"embed":case"source":case"link":kt("error",t),kt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(fe in r)if(r.hasOwnProperty(fe)&&(l=r[fe],l!=null))switch(fe){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:xn(t,i,fe,l,r,null)}return;default:if(It(i)){for(Ee in r)r.hasOwnProperty(Ee)&&(l=r[Ee],l!==void 0&&Jd(t,i,Ee,l,r,void 0));return}}for(C in r)r.hasOwnProperty(C)&&(l=r[C],l!=null&&xn(t,i,C,l,r,null))}function nM(t,i,r,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,d=null,E=null,C=null,Y=null,fe=null,Ee=null;for(xe in r){var Ne=r[xe];if(r.hasOwnProperty(xe)&&Ne!=null)switch(xe){case"checked":break;case"value":break;case"defaultValue":Y=Ne;default:l.hasOwnProperty(xe)||xn(t,i,xe,null,l,Ne)}}for(var de in l){var xe=l[de];if(Ne=r[de],l.hasOwnProperty(de)&&(xe!=null||Ne!=null))switch(de){case"type":d=xe;break;case"name":f=xe;break;case"checked":fe=xe;break;case"defaultChecked":Ee=xe;break;case"value":E=xe;break;case"defaultValue":C=xe;break;case"children":case"dangerouslySetInnerHTML":if(xe!=null)throw Error(a(137,i));break;default:xe!==Ne&&xn(t,i,de,xe,l,Ne)}}$e(t,E,C,Y,fe,Ee,d,f);return;case"select":xe=E=C=de=null;for(d in r)if(Y=r[d],r.hasOwnProperty(d)&&Y!=null)switch(d){case"value":break;case"multiple":xe=Y;default:l.hasOwnProperty(d)||xn(t,i,d,null,l,Y)}for(f in l)if(d=l[f],Y=r[f],l.hasOwnProperty(f)&&(d!=null||Y!=null))switch(f){case"value":de=d;break;case"defaultValue":C=d;break;case"multiple":E=d;default:d!==Y&&xn(t,i,f,d,l,Y)}i=C,r=E,l=xe,de!=null?Nn(t,!!r,de,!1):!!l!=!!r&&(i!=null?Nn(t,!!r,i,!0):Nn(t,!!r,r?[]:"",!1));return;case"textarea":xe=de=null;for(C in r)if(f=r[C],r.hasOwnProperty(C)&&f!=null&&!l.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:xn(t,i,C,null,l,f)}for(E in l)if(f=l[E],d=r[E],l.hasOwnProperty(E)&&(f!=null||d!=null))switch(E){case"value":de=f;break;case"defaultValue":xe=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==d&&xn(t,i,E,f,l,d)}Un(t,de,xe);return;case"option":for(var ct in r)if(de=r[ct],r.hasOwnProperty(ct)&&de!=null&&!l.hasOwnProperty(ct))switch(ct){case"selected":t.selected=!1;break;default:xn(t,i,ct,null,l,de)}for(Y in l)if(de=l[Y],xe=r[Y],l.hasOwnProperty(Y)&&de!==xe&&(de!=null||xe!=null))switch(Y){case"selected":t.selected=de&&typeof de!="function"&&typeof de!="symbol";break;default:xn(t,i,Y,de,l,xe)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var _t in r)de=r[_t],r.hasOwnProperty(_t)&&de!=null&&!l.hasOwnProperty(_t)&&xn(t,i,_t,null,l,de);for(fe in l)if(de=l[fe],xe=r[fe],l.hasOwnProperty(fe)&&de!==xe&&(de!=null||xe!=null))switch(fe){case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(a(137,i));break;default:xn(t,i,fe,de,l,xe)}return;default:if(It(i)){for(var yn in r)de=r[yn],r.hasOwnProperty(yn)&&de!==void 0&&!l.hasOwnProperty(yn)&&Jd(t,i,yn,void 0,l,de);for(Ee in l)de=l[Ee],xe=r[Ee],!l.hasOwnProperty(Ee)||de===xe||de===void 0&&xe===void 0||Jd(t,i,Ee,de,l,xe);return}}for(var ae in r)de=r[ae],r.hasOwnProperty(ae)&&de!=null&&!l.hasOwnProperty(ae)&&xn(t,i,ae,null,l,de);for(Ne in l)de=l[Ne],xe=r[Ne],!l.hasOwnProperty(Ne)||de===xe||de==null&&xe==null||xn(t,i,Ne,de,l,xe)}function Sv(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function iM(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,r=performance.getEntriesByType("resource"),l=0;l<r.length;l++){var f=r[l],d=f.transferSize,E=f.initiatorType,C=f.duration;if(d&&C&&Sv(E)){for(E=0,C=f.responseEnd,l+=1;l<r.length;l++){var Y=r[l],fe=Y.startTime;if(fe>C)break;var Ee=Y.transferSize,Ne=Y.initiatorType;Ee&&Sv(Ne)&&(Y=Y.responseEnd,E+=Ee*(Y<C?1:(C-fe)/(Y-fe)))}if(--l,i+=8*(d+E)/(f.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var $d=null,eh=null;function au(t){return t.nodeType===9?t:t.ownerDocument}function Mv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ev(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function th(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var nh=null;function aM(){var t=window.event;return t&&t.type==="popstate"?t===nh?!1:(nh=t,!0):(nh=null,!1)}var bv=typeof setTimeout=="function"?setTimeout:void 0,sM=typeof clearTimeout=="function"?clearTimeout:void 0,Tv=typeof Promise=="function"?Promise:void 0,rM=typeof queueMicrotask=="function"?queueMicrotask:typeof Tv<"u"?function(t){return Tv.resolve(null).then(t).catch(oM)}:bv;function oM(t){setTimeout(function(){throw t})}function Is(t){return t==="head"}function Av(t,i){var r=i,l=0;do{var f=r.nextSibling;if(t.removeChild(r),f&&f.nodeType===8)if(r=f.data,r==="/$"||r==="/&"){if(l===0){t.removeChild(f),uo(i);return}l--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")l++;else if(r==="html")Ml(t.ownerDocument.documentElement);else if(r==="head"){r=t.ownerDocument.head,Ml(r);for(var d=r.firstChild;d;){var E=d.nextSibling,C=d.nodeName;d[yi]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&d.rel.toLowerCase()==="stylesheet"||r.removeChild(d),d=E}}else r==="body"&&Ml(t.ownerDocument.body);r=f}while(r);uo(i)}function wv(t,i){var r=t;t=0;do{var l=r.nextSibling;if(r.nodeType===1?i?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(i?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(t===0)break;t--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||t++;r=l}while(r)}function ih(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var r=i;switch(i=i.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":ih(r),Si(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}t.removeChild(r)}}function lM(t,i,r,l){for(;t.nodeType===1;){var f=r;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[yi])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var d=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=oa(t.nextSibling),t===null)break}return null}function cM(t,i,r){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!r||(t=oa(t.nextSibling),t===null))return null;return t}function Rv(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=oa(t.nextSibling),t===null))return null;return t}function ah(t){return t.data==="$?"||t.data==="$~"}function sh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function uM(t,i){var r=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||r.readyState!=="loading")i();else{var l=function(){i(),r.removeEventListener("DOMContentLoaded",l)};r.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function oa(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var rh=null;function Cv(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"||r==="/&"){if(i===0)return oa(t.nextSibling);i--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||i++}t=t.nextSibling}return null}function Dv(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(i===0)return t;i--}else r!=="/$"&&r!=="/&"||i++}t=t.previousSibling}return null}function Lv(t,i,r){switch(i=au(r),t){case"html":if(t=i.documentElement,!t)throw Error(a(452));return t;case"head":if(t=i.head,!t)throw Error(a(453));return t;case"body":if(t=i.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function Ml(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Si(t)}var la=new Map,Nv=new Set;function su(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var os=X.d;X.d={f:fM,r:dM,D:hM,C:pM,L:mM,m:gM,X:_M,S:vM,M:xM};function fM(){var t=os.f(),i=Kc();return t||i}function dM(t){var i=Ri(t);i!==null&&i.tag===5&&i.type==="form"?jg(i):os.r(t)}var oo=typeof document>"u"?null:document;function Uv(t,i,r){var l=oo;if(l&&typeof i=="string"&&i){var f=qt(i);f='link[rel="'+t+'"][href="'+f+'"]',typeof r=="string"&&(f+='[crossorigin="'+r+'"]'),Nv.has(f)||(Nv.add(f),t={rel:t,crossOrigin:r,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),mi(i,"link",t),we(i),l.head.appendChild(i)))}}function hM(t){os.D(t),Uv("dns-prefetch",t,null)}function pM(t,i){os.C(t,i),Uv("preconnect",t,i)}function mM(t,i,r){os.L(t,i,r);var l=oo;if(l&&t&&i){var f='link[rel="preload"][as="'+qt(i)+'"]';i==="image"&&r&&r.imageSrcSet?(f+='[imagesrcset="'+qt(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(f+='[imagesizes="'+qt(r.imageSizes)+'"]')):f+='[href="'+qt(t)+'"]';var d=f;switch(i){case"style":d=lo(t);break;case"script":d=co(t)}la.has(d)||(t=v({rel:"preload",href:i==="image"&&r&&r.imageSrcSet?void 0:t,as:i},r),la.set(d,t),l.querySelector(f)!==null||i==="style"&&l.querySelector(El(d))||i==="script"&&l.querySelector(bl(d))||(i=l.createElement("link"),mi(i,"link",t),we(i),l.head.appendChild(i)))}}function gM(t,i){os.m(t,i);var r=oo;if(r&&t){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+qt(l)+'"][href="'+qt(t)+'"]',d=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=co(t)}if(!la.has(d)&&(t=v({rel:"modulepreload",href:t},i),la.set(d,t),r.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(bl(d)))return}l=r.createElement("link"),mi(l,"link",t),we(l),r.head.appendChild(l)}}}function vM(t,i,r){os.S(t,i,r);var l=oo;if(l&&t){var f=me(l).hoistableStyles,d=lo(t);i=i||"default";var E=f.get(d);if(!E){var C={loading:0,preload:null};if(E=l.querySelector(El(d)))C.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":i},r),(r=la.get(d))&&oh(t,r);var Y=E=l.createElement("link");we(Y),mi(Y,"link",t),Y._p=new Promise(function(fe,Ee){Y.onload=fe,Y.onerror=Ee}),Y.addEventListener("load",function(){C.loading|=1}),Y.addEventListener("error",function(){C.loading|=2}),C.loading|=4,ru(E,i,l)}E={type:"stylesheet",instance:E,count:1,state:C},f.set(d,E)}}}function _M(t,i){os.X(t,i);var r=oo;if(r&&t){var l=me(r).hoistableScripts,f=co(t),d=l.get(f);d||(d=r.querySelector(bl(f)),d||(t=v({src:t,async:!0},i),(i=la.get(f))&&lh(t,i),d=r.createElement("script"),we(d),mi(d,"link",t),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function xM(t,i){os.M(t,i);var r=oo;if(r&&t){var l=me(r).hoistableScripts,f=co(t),d=l.get(f);d||(d=r.querySelector(bl(f)),d||(t=v({src:t,async:!0,type:"module"},i),(i=la.get(f))&&lh(t,i),d=r.createElement("script"),we(d),mi(d,"link",t),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function Ov(t,i,r,l){var f=(f=re.current)?su(f):null;if(!f)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(i=lo(r.href),r=me(f).hoistableStyles,l=r.get(i),l||(l={type:"style",instance:null,count:0,state:null},r.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){t=lo(r.href);var d=me(f).hoistableStyles,E=d.get(t);if(E||(f=f.ownerDocument||f,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,E),(d=f.querySelector(El(t)))&&!d._p&&(E.instance=d,E.state.loading=5),la.has(t)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},la.set(t,r),d||yM(f,t,r,E.state))),i&&l===null)throw Error(a(528,""));return E}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=r.async,r=r.src,typeof r=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=co(r),r=me(f).hoistableScripts,l=r.get(i),l||(l={type:"script",instance:null,count:0,state:null},r.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function lo(t){return'href="'+qt(t)+'"'}function El(t){return'link[rel="stylesheet"]['+t+"]"}function Pv(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function yM(t,i,r,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),mi(i,"link",r),we(i),t.head.appendChild(i))}function co(t){return'[src="'+qt(t)+'"]'}function bl(t){return"script[async]"+t}function Iv(t,i,r){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+qt(r.href)+'"]');if(l)return i.instance=l,we(l),l;var f=v({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),we(l),mi(l,"style",f),ru(l,r.precedence,t),i.instance=l;case"stylesheet":f=lo(r.href);var d=t.querySelector(El(f));if(d)return i.state.loading|=4,i.instance=d,we(d),d;l=Pv(r),(f=la.get(f))&&oh(l,f),d=(t.ownerDocument||t).createElement("link"),we(d);var E=d;return E._p=new Promise(function(C,Y){E.onload=C,E.onerror=Y}),mi(d,"link",l),i.state.loading|=4,ru(d,r.precedence,t),i.instance=d;case"script":return d=co(r.src),(f=t.querySelector(bl(d)))?(i.instance=f,we(f),f):(l=r,(f=la.get(d))&&(l=v({},r),lh(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),we(f),mi(f,"link",l),t.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,ru(l,r.precedence,t));return i.instance}function ru(t,i,r){for(var l=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,d=f,E=0;E<l.length;E++){var C=l[E];if(C.dataset.precedence===i)d=C;else if(d!==f)break}d?d.parentNode.insertBefore(t,d.nextSibling):(i=r.nodeType===9?r.head:r,i.insertBefore(t,i.firstChild))}function oh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function lh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var ou=null;function Fv(t,i,r){if(ou===null){var l=new Map,f=ou=new Map;f.set(r,l)}else f=ou,l=f.get(r),l||(l=new Map,f.set(r,l));if(l.has(t))return l;for(l.set(t,null),r=r.getElementsByTagName(t),f=0;f<r.length;f++){var d=r[f];if(!(d[yi]||d[pn]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var E=d.getAttribute(i)||"";E=t+E;var C=l.get(E);C?C.push(d):l.set(E,[d])}}return l}function Bv(t,i,r){t=t.ownerDocument||t,t.head.insertBefore(r,i==="title"?t.querySelector("head > title"):null)}function SM(t,i,r){if(r===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function zv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function MM(t,i,r,l){if(r.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var f=lo(l.href),d=i.querySelector(El(f));if(d){i=d._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=lu.bind(t),i.then(t,t)),r.state.loading|=4,r.instance=d,we(d);return}d=i.ownerDocument||i,l=Pv(l),(f=la.get(f))&&oh(l,f),d=d.createElement("link"),we(d);var E=d;E._p=new Promise(function(C,Y){E.onload=C,E.onerror=Y}),mi(d,"link",l),r.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(t.count++,r=lu.bind(t),i.addEventListener("load",r),i.addEventListener("error",r))}}var ch=0;function EM(t,i){return t.stylesheets&&t.count===0&&uu(t,t.stylesheets),0<t.count||0<t.imgCount?function(r){var l=setTimeout(function(){if(t.stylesheets&&uu(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+i);0<t.imgBytes&&ch===0&&(ch=62500*iM());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&uu(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>ch?50:800)+i);return t.unsuspend=r,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function lu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)uu(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var cu=null;function uu(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,cu=new Map,i.forEach(bM,t),cu=null,lu.call(t))}function bM(t,i){if(!(i.state.loading&4)){var r=cu.get(t);if(r)var l=r.get(null);else{r=new Map,cu.set(t,r);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<f.length;d++){var E=f[d];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(r.set(E.dataset.precedence,E),l=E)}l&&r.set(null,l)}f=i.instance,E=f.getAttribute("data-precedence"),d=r.get(E)||l,d===l&&r.set(null,f),r.set(E,f),this.count++,l=lu.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),d?d.parentNode.insertBefore(f,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),i.state.loading|=4}}var Tl={$$typeof:O,Provider:null,Consumer:null,_currentValue:se,_currentValue2:se,_threadCount:0};function TM(t,i,r,l,f,d,E,C,Y){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=nt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nt(0),this.hiddenUpdates=nt(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=d,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=Y,this.incompleteTransitions=new Map}function Hv(t,i,r,l,f,d,E,C,Y,fe,Ee,Ne){return t=new TM(t,i,r,E,Y,fe,Ee,Ne,C),i=1,d===!0&&(i|=24),d=Xi(3,null,null,i),t.current=d,d.stateNode=t,i=Gf(),i.refCount++,t.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:r,cache:i},qf(d),t}function Vv(t){return t?(t=Hr,t):Hr}function Gv(t,i,r,l,f,d){f=Vv(f),l.context===null?l.context=f:l.pendingContext=f,l=Ts(i),l.payload={element:r},d=d===void 0?null:d,d!==null&&(l.callback=d),r=As(t,l,i),r!==null&&(Bi(r,t,i),il(r,t,i))}function kv(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<i?r:i}}function uh(t,i){kv(t,i),(t=t.alternate)&&kv(t,i)}function Xv(t){if(t.tag===13||t.tag===31){var i=or(t,67108864);i!==null&&Bi(i,t,67108864),uh(t,67108864)}}function Wv(t){if(t.tag===13||t.tag===31){var i=ji();i=Ui(i);var r=or(t,i);r!==null&&Bi(r,t,i),uh(t,i)}}var fu=!0;function AM(t,i,r,l){var f=V.T;V.T=null;var d=X.p;try{X.p=2,fh(t,i,r,l)}finally{X.p=d,V.T=f}}function wM(t,i,r,l){var f=V.T;V.T=null;var d=X.p;try{X.p=8,fh(t,i,r,l)}finally{X.p=d,V.T=f}}function fh(t,i,r,l){if(fu){var f=dh(l);if(f===null)Qd(t,i,l,du,r),Yv(t,l);else if(CM(f,t,i,r,l))l.stopPropagation();else if(Yv(t,l),i&4&&-1<RM.indexOf(t)){for(;f!==null;){var d=Ri(f);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var E=Ve(d.pendingLanes);if(E!==0){var C=d;for(C.pendingLanes|=2,C.entangledLanes|=2;E;){var Y=1<<31-Je(E);C.entanglements[1]|=Y,E&=~Y}Ca(d),(sn&6)===0&&(Zc=Bt()+500,xl(0))}}break;case 31:case 13:C=or(d,2),C!==null&&Bi(C,d,2),Kc(),uh(d,2)}if(d=dh(l),d===null&&Qd(t,i,l,du,r),d===f)break;f=d}f!==null&&l.stopPropagation()}else Qd(t,i,l,null,r)}}function dh(t){return t=Go(t),hh(t)}var du=null;function hh(t){if(du=null,t=ui(t),t!==null){var i=c(t);if(i===null)t=null;else{var r=i.tag;if(r===13){if(t=u(i),t!==null)return t;t=null}else if(r===31){if(t=h(i),t!==null)return t;t=null}else if(r===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return du=t,null}function qv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Pt()){case z:return 2;case A:return 8;case ne:case oe:return 32;case ue:return 268435456;default:return 32}default:return 32}}var ph=!1,Fs=null,Bs=null,zs=null,Al=new Map,wl=new Map,Hs=[],RM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Yv(t,i){switch(t){case"focusin":case"focusout":Fs=null;break;case"dragenter":case"dragleave":Bs=null;break;case"mouseover":case"mouseout":zs=null;break;case"pointerover":case"pointerout":Al.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":wl.delete(i.pointerId)}}function Rl(t,i,r,l,f,d){return t===null||t.nativeEvent!==d?(t={blockedOn:i,domEventName:r,eventSystemFlags:l,nativeEvent:d,targetContainers:[f]},i!==null&&(i=Ri(i),i!==null&&Xv(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function CM(t,i,r,l,f){switch(i){case"focusin":return Fs=Rl(Fs,t,i,r,l,f),!0;case"dragenter":return Bs=Rl(Bs,t,i,r,l,f),!0;case"mouseover":return zs=Rl(zs,t,i,r,l,f),!0;case"pointerover":var d=f.pointerId;return Al.set(d,Rl(Al.get(d)||null,t,i,r,l,f)),!0;case"gotpointercapture":return d=f.pointerId,wl.set(d,Rl(wl.get(d)||null,t,i,r,l,f)),!0}return!1}function Zv(t){var i=ui(t.target);if(i!==null){var r=c(i);if(r!==null){if(i=r.tag,i===13){if(i=u(r),i!==null){t.blockedOn=i,_i(t.priority,function(){Wv(r)});return}}else if(i===31){if(i=h(r),i!==null){t.blockedOn=i,_i(t.priority,function(){Wv(r)});return}}else if(i===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function hu(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var r=dh(t.nativeEvent);if(r===null){r=t.nativeEvent;var l=new r.constructor(r.type,r);Vo=l,r.target.dispatchEvent(l),Vo=null}else return i=Ri(r),i!==null&&Xv(i),t.blockedOn=r,!1;i.shift()}return!0}function jv(t,i,r){hu(t)&&r.delete(i)}function DM(){ph=!1,Fs!==null&&hu(Fs)&&(Fs=null),Bs!==null&&hu(Bs)&&(Bs=null),zs!==null&&hu(zs)&&(zs=null),Al.forEach(jv),wl.forEach(jv)}function pu(t,i){t.blockedOn===i&&(t.blockedOn=null,ph||(ph=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,DM)))}var mu=null;function Kv(t){mu!==t&&(mu=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){mu===t&&(mu=null);for(var i=0;i<t.length;i+=3){var r=t[i],l=t[i+1],f=t[i+2];if(typeof l!="function"){if(hh(l||r)===null)continue;break}var d=Ri(r);d!==null&&(t.splice(i,3),i-=3,dd(d,{pending:!0,data:f,method:r.method,action:l},l,f))}}))}function uo(t){function i(Y){return pu(Y,t)}Fs!==null&&pu(Fs,t),Bs!==null&&pu(Bs,t),zs!==null&&pu(zs,t),Al.forEach(i),wl.forEach(i);for(var r=0;r<Hs.length;r++){var l=Hs[r];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Hs.length&&(r=Hs[0],r.blockedOn===null);)Zv(r),r.blockedOn===null&&Hs.shift();if(r=(t.ownerDocument||t).$$reactFormReplay,r!=null)for(l=0;l<r.length;l+=3){var f=r[l],d=r[l+1],E=f[cn]||null;if(typeof d=="function")E||Kv(r);else if(E){var C=null;if(d&&d.hasAttribute("formAction")){if(f=d,E=d[cn]||null)C=E.formAction;else if(hh(f)!==null)continue}else C=E.action;typeof C=="function"?r[l+1]=C:(r.splice(l,3),l-=3),Kv(r)}}}function Qv(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(E){return f=E})},focusReset:"manual",scroll:"manual"})}function i(){f!==null&&(f(),f=null),l||setTimeout(r,20)}function r(){if(!l&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(r,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),f!==null&&(f(),f=null)}}}function mh(t){this._internalRoot=t}gu.prototype.render=mh.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(a(409));var r=i.current,l=ji();Gv(r,l,t,i,null,null)},gu.prototype.unmount=mh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Gv(t.current,2,null,t,null,null),Kc(),i[bn]=null}};function gu(t){this._internalRoot=t}gu.prototype.unstable_scheduleHydration=function(t){if(t){var i=wi();t={blockedOn:null,target:t,priority:i};for(var r=0;r<Hs.length&&i!==0&&i<Hs[r].priority;r++);Hs.splice(r,0,t),r===0&&Zv(t)}};var Jv=e.version;if(Jv!=="19.2.7")throw Error(a(527,Jv,"19.2.7"));X.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=p(i),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var LM={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:V,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vu.isDisabled&&vu.supportsFiber)try{_e=vu.inject(LM),ge=vu}catch{}}return Dl.createRoot=function(t,i){if(!o(t))throw Error(a(299));var r=!1,l="",f=s0,d=r0,E=o0;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError)),i=Hv(t,1,!1,null,null,r,l,null,f,d,E,Qv),t[bn]=i.current,Kd(t),new mh(i)},Dl.hydrateRoot=function(t,i,r){if(!o(t))throw Error(a(299));var l=!1,f="",d=s0,E=r0,C=o0,Y=null;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(f=r.identifierPrefix),r.onUncaughtError!==void 0&&(d=r.onUncaughtError),r.onCaughtError!==void 0&&(E=r.onCaughtError),r.onRecoverableError!==void 0&&(C=r.onRecoverableError),r.formState!==void 0&&(Y=r.formState)),i=Hv(t,1,!0,i,r??null,l,f,Y,d,E,C,Qv),i.context=Vv(null),r=i.current,l=ji(),l=Ui(l),f=Ts(l),f.callback=null,As(r,f,l),r=l,i.current.lanes=r,rt(i,r),Ca(i),t[bn]=i.current,Kd(t),new gu(i)},Dl.version="19.2.7",Dl}var l_;function GM(){if(l_)return _h.exports;l_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),_h.exports=VM(),_h.exports}var kM=GM(),Da=Gx(),c_="1.3.25";function kx(s,e,n){return Math.max(s,Math.min(e,n))}function XM(s,e,n){return(1-n)*s+n*e}function WM(s,e,n,a){return XM(s,e,1-Math.exp(-n*a))}function qM(s,e){return(s%e+e)%e}var YM=class{constructor(){ht(this,"isRunning",!1);ht(this,"value",0);ht(this,"from",0);ht(this,"to",0);ht(this,"currentTime",0);ht(this,"lerp");ht(this,"duration");ht(this,"easing");ht(this,"onUpdate")}advance(s){var n;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=s;const a=kx(0,this.currentTime/this.duration,1);e=a>=1;const o=e?1:this.easing(a);this.value=this.from+(this.to-this.from)*o}else this.lerp?(this.value=WM(this.value,this.to,this.lerp*60,s),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(n=this.onUpdate)==null||n.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(s,e,{lerp:n,duration:a,easing:o,onStart:c,onUpdate:u}){this.from=this.value=s,this.to=e,this.lerp=n,this.duration=a,this.easing=o,this.currentTime=0,this.isRunning=!0,c==null||c(),this.onUpdate=u}};function ZM(s,e){let n;return function(...a){clearTimeout(n),n=setTimeout(()=>{n=void 0,s.apply(this,a)},e)}}var jM=class{constructor(s,e,{autoResize:n=!0,debounce:a=250}={}){ht(this,"width",0);ht(this,"height",0);ht(this,"scrollHeight",0);ht(this,"scrollWidth",0);ht(this,"debouncedResize");ht(this,"wrapperResizeObserver");ht(this,"contentResizeObserver");ht(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});ht(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});ht(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=s,this.content=e,n&&(this.debouncedResize=ZM(this.resize,a),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var s,e;(s=this.wrapperResizeObserver)==null||s.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Xx=class{constructor(){ht(this,"events",{})}emit(s,...e){var a;const n=this.events[s]||[];for(let o=0,c=n.length;o<c;o++)(a=n[o])==null||a.call(n,...e)}on(s,e){return this.events[s]?this.events[s].push(e):this.events[s]=[e],()=>{var n;this.events[s]=(n=this.events[s])==null?void 0:n.filter(a=>e!==a)}}off(s,e){var n;this.events[s]=(n=this.events[s])==null?void 0:n.filter(a=>e!==a)}destroy(){this.events={}}};const KM=100/6,Gs={passive:!1};function u_(s,e){return s===1?KM:s===2?e:1}var QM=class{constructor(s,e={wheelMultiplier:1,touchMultiplier:1}){ht(this,"touchStart",{x:0,y:0});ht(this,"lastDelta",{x:0,y:0});ht(this,"window",{width:0,height:0});ht(this,"emitter",new Xx);ht(this,"onTouchStart",s=>{const{clientX:e,clientY:n}=s.targetTouches?s.targetTouches[0]:s;this.touchStart.x=e,this.touchStart.y=n,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:s})});ht(this,"onTouchMove",s=>{const{clientX:e,clientY:n}=s.targetTouches?s.targetTouches[0]:s,a=-(e-this.touchStart.x)*this.options.touchMultiplier,o=-(n-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=n,this.lastDelta={x:a,y:o},this.emitter.emit("scroll",{deltaX:a,deltaY:o,event:s})});ht(this,"onTouchEnd",s=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:s})});ht(this,"onWheel",s=>{let{deltaX:e,deltaY:n,deltaMode:a}=s;const o=u_(a,this.window.width),c=u_(a,this.window.height);e*=o,n*=c,e*=this.options.wheelMultiplier,n*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:n,event:s})});ht(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=s,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Gs),this.element.addEventListener("touchstart",this.onTouchStart,Gs),this.element.addEventListener("touchmove",this.onTouchMove,Gs),this.element.addEventListener("touchend",this.onTouchEnd,Gs)}on(s,e){return this.emitter.on(s,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Gs),this.element.removeEventListener("touchstart",this.onTouchStart,Gs),this.element.removeEventListener("touchmove",this.onTouchMove,Gs),this.element.removeEventListener("touchend",this.onTouchEnd,Gs)}};const f_=s=>Math.min(1,1.001-2**(-10*s));var JM=class{constructor({wrapper:s=window,content:e=document.documentElement,eventsTarget:n=s,smoothWheel:a=!0,syncTouch:o=!1,syncTouchLerp:c=.075,touchInertiaExponent:u=1.7,duration:h,easing:m,lerp:p=.1,infinite:_=!1,orientation:v="vertical",gestureOrientation:g=v==="horizontal"?"both":"vertical",touchMultiplier:x=1,wheelMultiplier:M=1,autoResize:w=!0,prevent:S,virtualScroll:y,overscroll:F=!0,autoRaf:O=!1,anchors:R=!1,autoToggle:I=!1,allowNestedScroll:N=!1,__experimental__naiveDimensions:H=!1,naiveDimensions:T=H,stopInertiaOnNavigate:D=!1}={}){ht(this,"_isScrolling",!1);ht(this,"_isStopped",!1);ht(this,"_isLocked",!1);ht(this,"_preventNextNativeScrollEvent",!1);ht(this,"_resetVelocityTimeout",null);ht(this,"_rafId",null);ht(this,"_isDraggingSelection",!1);ht(this,"isTouching");ht(this,"isIos");ht(this,"time",0);ht(this,"userData",{});ht(this,"lastVelocity",0);ht(this,"velocity",0);ht(this,"direction",0);ht(this,"options");ht(this,"targetScroll");ht(this,"animatedScroll");ht(this,"animate",new YM);ht(this,"emitter",new Xx);ht(this,"dimensions");ht(this,"virtualScroll");ht(this,"onScrollEnd",s=>{s instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&s.stopPropagation()});ht(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});ht(this,"onTransitionEnd",s=>{var e;(e=s.propertyName)!=null&&e.includes("overflow")&&s.target===this.rootElement&&this.checkOverflow()});ht(this,"onClick",s=>{const e=s.composedPath().filter(a=>a instanceof HTMLAnchorElement&&a.href).map(a=>new URL(a.href)),n=new URL(window.location.href);if(this.options.anchors){const a=e.find(o=>n.host===o.host&&n.pathname===o.pathname&&o.hash);if(a){const o=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,c=decodeURIComponent(a.hash);this.scrollTo(c,o);return}}if(this.options.stopInertiaOnNavigate&&e.some(a=>n.host===a.host&&n.pathname!==a.pathname)){this.reset();return}});ht(this,"onPointerDown",s=>{s.button===1&&this.reset()});ht(this,"onVirtualScroll",s=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(s)===!1)return;const{deltaX:e,deltaY:n,event:a}=s;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:n,event:a}),a.ctrlKey||a.lenisStopPropagation)return;const o=a.type.includes("touch"),c=a.type.includes("wheel");if(o&&this.isIos&&(a.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(a)),this._isDraggingSelection)){a.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=a.type==="touchstart"||a.type==="touchmove";const u=e===0&&n===0;if(this.options.syncTouch&&o&&a.type==="touchstart"&&u&&!this.isStopped&&!this.isLocked){this.reset();return}const h=this.options.gestureOrientation==="vertical"&&n===0||this.options.gestureOrientation==="horizontal"&&e===0;if(u||h)return;let m=a.composedPath();m=m.slice(0,m.indexOf(this.rootElement));const p=this.options.prevent,_=Math.abs(e)>=Math.abs(n)?"horizontal":"vertical";if(m.find(M=>{var w,S,y,F,O;return M instanceof HTMLElement&&(typeof p=="function"&&(p==null?void 0:p(M))||((w=M.hasAttribute)==null?void 0:w.call(M,"data-lenis-prevent"))||_==="vertical"&&((S=M.hasAttribute)==null?void 0:S.call(M,"data-lenis-prevent-vertical"))||_==="horizontal"&&((y=M.hasAttribute)==null?void 0:y.call(M,"data-lenis-prevent-horizontal"))||o&&((F=M.hasAttribute)==null?void 0:F.call(M,"data-lenis-prevent-touch"))||c&&((O=M.hasAttribute)==null?void 0:O.call(M,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(M,{deltaX:e,deltaY:n}))}))return;if(this.isStopped||this.isLocked){a.cancelable&&a.preventDefault();return}if(!(this.options.syncTouch&&o||this.options.smoothWheel&&c)){this.isScrolling="native",this.animate.stop(),a.lenisStopPropagation=!0;return}let v=n;this.options.gestureOrientation==="both"?v=Math.abs(n)>Math.abs(e)?n:e:this.options.gestureOrientation==="horizontal"&&(v=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&n>0||this.animatedScroll===this.limit&&n<0))&&(a.lenisStopPropagation=!0),a.cancelable&&a.preventDefault();const g=o&&this.options.syncTouch,x=o&&a.type==="touchend";x&&(v=Math.sign(v)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+v,{programmatic:!1,...g?{lerp:x?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});ht(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const s=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-s,this.direction=Math.sign(this.animatedScroll-s),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});ht(this,"raf",s=>{const e=s-(this.time||s);this.time=s,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=c_,window.lenis||(window.lenis={}),window.lenis.version=c_,v==="horizontal"&&(window.lenis.horizontal=!0),o===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!s||s===document.documentElement)&&(s=window),typeof h=="number"&&typeof m!="function"?m=f_:typeof m=="function"&&typeof h!="number"&&(h=1),this.options={wrapper:s,content:e,eventsTarget:n,smoothWheel:a,syncTouch:o,syncTouchLerp:c,touchInertiaExponent:u,duration:h,easing:m,lerp:p,infinite:_,gestureOrientation:g,orientation:v,touchMultiplier:x,wheelMultiplier:M,autoResize:w,prevent:S,virtualScroll:y,overscroll:F,autoRaf:O,anchors:R,autoToggle:I,allowNestedScroll:N,naiveDimensions:T,stopInertiaOnNavigate:D},this.dimensions=new jM(s,e,{autoResize:w}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new QM(n,{touchMultiplier:x,wheelMultiplier:M}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(s,e){return this.emitter.on(s,e)}off(s,e){return this.emitter.off(s,e)}get overflow(){const s=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[s]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(s){this.isHorizontal?this.options.wrapper.scrollTo({left:s,behavior:"instant"}):this.options.wrapper.scrollTo({top:s,behavior:"instant"})}isTouchOnSelectionHandle(s){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const n=s.targetTouches[0]??s.changedTouches[0];if(!n)return!1;const a=e.getRangeAt(0).getClientRects();if(a.length===0)return!1;const o=a[0],c=a[a.length-1],u=40,h=Math.hypot(n.clientX-o.left,n.clientY-o.top)<=u,m=Math.hypot(n.clientX-c.right,n.clientY-c.bottom)<=u;return h||m}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(s,{offset:e=0,immediate:n=!1,lock:a=!1,programmatic:o=!0,lerp:c=o?this.options.lerp:void 0,duration:u=o?this.options.duration:void 0,easing:h=o?this.options.easing:void 0,onStart:m,onComplete:p,force:_=!1,userData:v}={}){if((this.isStopped||this.isLocked)&&!_)return;let g=s,x=e;if(typeof g=="string"&&["top","left","start","#"].includes(g))g=0;else if(typeof g=="string"&&["bottom","right","end"].includes(g))g=this.limit;else{let M=null;if(typeof g=="string"?(M=g.startsWith("#")?document.getElementById(g.slice(1)):document.querySelector(g),M||(g==="#top"?g=0:console.warn("Lenis: Target not found",g))):g instanceof HTMLElement&&(g!=null&&g.nodeType)&&(M=g),M){if(this.options.wrapper!==window){const R=this.rootElement.getBoundingClientRect();x-=this.isHorizontal?R.left:R.top}const w=M.getBoundingClientRect(),S=getComputedStyle(M),y=this.isHorizontal?Number.parseFloat(S.scrollMarginLeft):Number.parseFloat(S.scrollMarginTop),F=getComputedStyle(this.rootElement),O=this.isHorizontal?Number.parseFloat(F.scrollPaddingLeft):Number.parseFloat(F.scrollPaddingTop);g=(this.isHorizontal?w.left:w.top)+this.animatedScroll-(Number.isNaN(y)?0:y)-(Number.isNaN(O)?0:O)}}if(typeof g=="number"){if(g+=x,this.options.infinite){if(o){this.targetScroll=this.animatedScroll=this.scroll;const M=g-this.animatedScroll;M>this.limit/2?g-=this.limit:M<-this.limit/2&&(g+=this.limit)}}else g=kx(0,g,this.limit);if(g===this.targetScroll){m==null||m(this),p==null||p(this);return}if(this.userData=v??{},n){this.animatedScroll=this.targetScroll=g,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),p==null||p(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}o||(this.targetScroll=g),typeof u=="number"&&typeof h!="function"?h=f_:typeof h=="function"&&typeof u!="number"&&(u=1),this.animate.fromTo(this.animatedScroll,g,{duration:u,easing:h,lerp:c,onStart:()=>{a&&(this.isLocked=!0),this.isScrolling="smooth",m==null||m(this)},onUpdate:(M,w)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=M-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=M,this.setScroll(this.scroll),o&&(this.targetScroll=M),w||this.emit(),w&&(this.reset(),this.emit(),p==null||p(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(s,{deltaX:e,deltaY:n}){const a=Date.now();s._lenis||(s._lenis={});const o=s._lenis;let c,u,h,m,p,_,v,g,x,M;if(a-(o.time??0)>2e3){o.time=Date.now();const N=window.getComputedStyle(s);if(o.computedStyle=N,c=["auto","overlay","scroll"].includes(N.overflowX),u=["auto","overlay","scroll"].includes(N.overflowY),p=["auto"].includes(N.overscrollBehaviorX),_=["auto"].includes(N.overscrollBehaviorY),o.hasOverflowX=c,o.hasOverflowY=u,!(c||u))return!1;v=s.scrollWidth,g=s.scrollHeight,x=s.clientWidth,M=s.clientHeight,h=v>x,m=g>M,o.isScrollableX=h,o.isScrollableY=m,o.scrollWidth=v,o.scrollHeight=g,o.clientWidth=x,o.clientHeight=M,o.hasOverscrollBehaviorX=p,o.hasOverscrollBehaviorY=_}else h=o.isScrollableX,m=o.isScrollableY,c=o.hasOverflowX,u=o.hasOverflowY,v=o.scrollWidth,g=o.scrollHeight,x=o.clientWidth,M=o.clientHeight,p=o.hasOverscrollBehaviorX,_=o.hasOverscrollBehaviorY;if(!(c&&h||u&&m))return!1;const w=Math.abs(e)>=Math.abs(n)?"horizontal":"vertical";let S,y,F,O,R,I;if(w==="horizontal")S=Math.round(s.scrollLeft),y=v-x,F=e,O=c,R=h,I=p;else if(w==="vertical")S=Math.round(s.scrollTop),y=g-M,F=n,O=u,R=m,I=_;else return!1;return!I&&(S>=y||S<=0)?!0:(F>0?S<y:S>0)&&O&&R}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const s=this.options.wrapper;return this.isHorizontal?s.scrollX??s.scrollLeft:s.scrollY??s.scrollTop}get scroll(){return this.options.infinite?qM(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(s){this._isScrolling!==s&&(this._isScrolling=s,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(s){this._isStopped!==s&&(this._isStopped=s,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(s){this._isLocked!==s&&(this._isLocked=s,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let s="lenis";return this.options.autoToggle&&(s+=" lenis-autoToggle"),this.isStopped&&(s+=" lenis-stopped"),this.isLocked&&(s+=" lenis-locked"),this.isScrolling&&(s+=" lenis-scrolling"),this.isScrolling==="smooth"&&(s+=" lenis-smooth"),s}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(s=>{this.rootElement.classList.add(s)})}cleanUpClassName(){for(const s of Array.from(this.rootElement.classList))(s==="lenis"||s.startsWith("lenis-"))&&this.rootElement.classList.remove(s)}};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const nm="185",$M=0,d_=1,eE=2,Ju=1,tE=2,Hl=3,$s=0,zi=1,fa=2,ps=0,Lo=1,h_=2,p_=3,m_=4,nE=5,Tr=100,iE=101,aE=102,sE=103,rE=104,oE=200,lE=201,cE=202,uE=203,lp=204,cp=205,fE=206,dE=207,hE=208,pE=209,mE=210,gE=211,vE=212,_E=213,xE=214,up=0,fp=1,dp=2,Po=3,hp=4,pp=5,mp=6,gp=7,Wx=0,yE=1,SE=2,Fa=0,qx=1,Yx=2,Zx=3,jx=4,Kx=5,Qx=6,Jx=7,$x=300,Cr=301,Io=302,Mh=303,Eh=304,vf=306,$l=1e3,Ma=1001,vp=1002,gi=1003,ME=1004,_u=1005,Xn=1006,bh=1007,Ks=1008,da=1009,ey=1010,ty=1011,ec=1012,im=1013,Ha=1014,Pa=1015,gs=1016,am=1017,sm=1018,tc=1020,ny=35902,iy=35899,ay=1021,sy=1022,Ea=1023,vs=1026,Rr=1027,ry=1028,rm=1029,Dr=1030,om=1031,lm=1033,$u=33776,ef=33777,tf=33778,nf=33779,_p=35840,xp=35841,yp=35842,Sp=35843,Mp=36196,Ep=37492,bp=37496,Tp=37488,Ap=37489,rf=37490,wp=37491,Rp=37808,Cp=37809,Dp=37810,Lp=37811,Np=37812,Up=37813,Op=37814,Pp=37815,Ip=37816,Fp=37817,Bp=37818,zp=37819,Hp=37820,Vp=37821,Gp=36492,kp=36494,Xp=36495,Wp=36283,qp=36284,of=36285,Yp=36286,EE=3200,g_=0,bE=1,js="",Ti="srgb",lf="srgb-linear",cf="linear",hn="srgb",fo=7680,v_=519,TE=512,AE=513,wE=514,cm=515,RE=516,CE=517,um=518,DE=519,__=35044,x_="300 es",Ia=2e3,uf=2001;function LE(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function nc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function NE(){const s=nc("canvas");return s.style.display="block",s}const y_={};function S_(...s){const e="THREE."+s.shift();console.log(e,...s)}function oy(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=s[1];n&&n.isStackTrace?s[0]+=" "+n.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function xt(...s){s=oy(s);const e="THREE."+s.shift();{const n=s[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...s)}}function Jt(...s){s=oy(s);const e="THREE."+s.shift();{const n=s[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...s)}}function No(...s){const e=s.join(" ");e in y_||(y_[e]=!0,xt(...s))}function UE(s,e,n){return new Promise(function(a,o){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}const OE={[up]:fp,[dp]:mp,[hp]:gp,[Po]:pp,[fp]:up,[mp]:dp,[gp]:hp,[pp]:Po};class Ur{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(n)===-1&&a[e].push(n)}hasEventListener(e,n){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(n)!==-1}removeEventListener(e,n){const a=this._listeners;if(a===void 0)return;const o=a[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const a=n[e.type];if(a!==void 0){e.target=this;const o=a.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const Ei=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let M_=1234567;const Xl=Math.PI/180,ic=180/Math.PI;function Or(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Ei[s&255]+Ei[s>>8&255]+Ei[s>>16&255]+Ei[s>>24&255]+"-"+Ei[e&255]+Ei[e>>8&255]+"-"+Ei[e>>16&15|64]+Ei[e>>24&255]+"-"+Ei[n&63|128]+Ei[n>>8&255]+"-"+Ei[n>>16&255]+Ei[n>>24&255]+Ei[a&255]+Ei[a>>8&255]+Ei[a>>16&255]+Ei[a>>24&255]).toLowerCase()}function zt(s,e,n){return Math.max(e,Math.min(n,s))}function fm(s,e){return(s%e+e)%e}function PE(s,e,n,a,o){return a+(s-e)*(o-a)/(n-e)}function IE(s,e,n){return s!==e?(n-s)/(e-s):0}function Wl(s,e,n){return(1-n)*s+n*e}function FE(s,e,n,a){return Wl(s,e,1-Math.exp(-n*a))}function BE(s,e=1){return e-Math.abs(fm(s,e*2)-e)}function zE(s,e,n){return s<=e?0:s>=n?1:(s=(s-e)/(n-e),s*s*(3-2*s))}function HE(s,e,n){return s<=e?0:s>=n?1:(s=(s-e)/(n-e),s*s*s*(s*(s*6-15)+10))}function VE(s,e){return s+Math.floor(Math.random()*(e-s+1))}function GE(s,e){return s+Math.random()*(e-s)}function kE(s){return s*(.5-Math.random())}function XE(s){s!==void 0&&(M_=s);let e=M_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function WE(s){return s*Xl}function qE(s){return s*ic}function YE(s){return(s&s-1)===0&&s!==0}function ZE(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function jE(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function KE(s,e,n,a,o){const c=Math.cos,u=Math.sin,h=c(n/2),m=u(n/2),p=c((e+a)/2),_=u((e+a)/2),v=c((e-a)/2),g=u((e-a)/2),x=c((a-e)/2),M=u((a-e)/2);switch(o){case"XYX":s.set(h*_,m*v,m*g,h*p);break;case"YZY":s.set(m*g,h*_,m*v,h*p);break;case"ZXZ":s.set(m*v,m*g,h*_,h*p);break;case"XZX":s.set(h*_,m*M,m*x,h*p);break;case"YXY":s.set(m*x,h*_,m*M,h*p);break;case"ZYZ":s.set(m*M,m*x,h*_,h*p);break;default:xt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Ro(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Li(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const li={DEG2RAD:Xl,RAD2DEG:ic,generateUUID:Or,clamp:zt,euclideanModulo:fm,mapLinear:PE,inverseLerp:IE,lerp:Wl,damp:FE,pingpong:BE,smoothstep:zE,smootherstep:HE,randInt:VE,randFloat:GE,randFloatSpread:kE,seededRandom:XE,degToRad:WE,radToDeg:qE,isPowerOfTwo:YE,ceilPowerOfTwo:ZE,floorPowerOfTwo:jE,setQuaternionFromProperEuler:KE,normalize:Li,denormalize:Ro},Mm=class Mm{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,a=this.y,o=e.elements;return this.x=o[0]*n+o[3]*a+o[6],this.y=o[1]*n+o[4]*a+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=zt(this.x,e.x,n.x),this.y=zt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=zt(this.x,e,n),this.y=zt(this.y,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(zt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(zt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y;return n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const a=Math.cos(n),o=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*a-u*o+e.x,this.y=c*o+u*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Mm.prototype.isVector2=!0;let dt=Mm;class er{constructor(e=0,n=0,a=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=a,this._w=o}static slerpFlat(e,n,a,o,c,u,h){let m=a[o+0],p=a[o+1],_=a[o+2],v=a[o+3],g=c[u+0],x=c[u+1],M=c[u+2],w=c[u+3];if(v!==w||m!==g||p!==x||_!==M){let S=m*g+p*x+_*M+v*w;S<0&&(g=-g,x=-x,M=-M,w=-w,S=-S);let y=1-h;if(S<.9995){const F=Math.acos(S),O=Math.sin(F);y=Math.sin(y*F)/O,h=Math.sin(h*F)/O,m=m*y+g*h,p=p*y+x*h,_=_*y+M*h,v=v*y+w*h}else{m=m*y+g*h,p=p*y+x*h,_=_*y+M*h,v=v*y+w*h;const F=1/Math.sqrt(m*m+p*p+_*_+v*v);m*=F,p*=F,_*=F,v*=F}}e[n]=m,e[n+1]=p,e[n+2]=_,e[n+3]=v}static multiplyQuaternionsFlat(e,n,a,o,c,u){const h=a[o],m=a[o+1],p=a[o+2],_=a[o+3],v=c[u],g=c[u+1],x=c[u+2],M=c[u+3];return e[n]=h*M+_*v+m*x-p*g,e[n+1]=m*M+_*g+p*v-h*x,e[n+2]=p*M+_*x+h*g-m*v,e[n+3]=_*M-h*v-m*g-p*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,a,o){return this._x=e,this._y=n,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const a=e._x,o=e._y,c=e._z,u=e._order,h=Math.cos,m=Math.sin,p=h(a/2),_=h(o/2),v=h(c/2),g=m(a/2),x=m(o/2),M=m(c/2);switch(u){case"XYZ":this._x=g*_*v+p*x*M,this._y=p*x*v-g*_*M,this._z=p*_*M+g*x*v,this._w=p*_*v-g*x*M;break;case"YXZ":this._x=g*_*v+p*x*M,this._y=p*x*v-g*_*M,this._z=p*_*M-g*x*v,this._w=p*_*v+g*x*M;break;case"ZXY":this._x=g*_*v-p*x*M,this._y=p*x*v+g*_*M,this._z=p*_*M+g*x*v,this._w=p*_*v-g*x*M;break;case"ZYX":this._x=g*_*v-p*x*M,this._y=p*x*v+g*_*M,this._z=p*_*M-g*x*v,this._w=p*_*v+g*x*M;break;case"YZX":this._x=g*_*v+p*x*M,this._y=p*x*v+g*_*M,this._z=p*_*M-g*x*v,this._w=p*_*v-g*x*M;break;case"XZY":this._x=g*_*v-p*x*M,this._y=p*x*v-g*_*M,this._z=p*_*M+g*x*v,this._w=p*_*v+g*x*M;break;default:xt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const a=n/2,o=Math.sin(a);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,a=n[0],o=n[4],c=n[8],u=n[1],h=n[5],m=n[9],p=n[2],_=n[6],v=n[10],g=a+h+v;if(g>0){const x=.5/Math.sqrt(g+1);this._w=.25/x,this._x=(_-m)*x,this._y=(c-p)*x,this._z=(u-o)*x}else if(a>h&&a>v){const x=2*Math.sqrt(1+a-h-v);this._w=(_-m)/x,this._x=.25*x,this._y=(o+u)/x,this._z=(c+p)/x}else if(h>v){const x=2*Math.sqrt(1+h-a-v);this._w=(c-p)/x,this._x=(o+u)/x,this._y=.25*x,this._z=(m+_)/x}else{const x=2*Math.sqrt(1+v-a-h);this._w=(u-o)/x,this._x=(c+p)/x,this._y=(m+_)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let a=e.dot(n)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(zt(this.dot(e),-1,1)))}rotateTowards(e,n){const a=this.angleTo(e);if(a===0)return this;const o=Math.min(1,n/a);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const a=e._x,o=e._y,c=e._z,u=e._w,h=n._x,m=n._y,p=n._z,_=n._w;return this._x=a*_+u*h+o*p-c*m,this._y=o*_+u*m+c*h-a*p,this._z=c*_+u*p+a*m-o*h,this._w=u*_-a*h-o*m-c*p,this._onChangeCallback(),this}slerp(e,n){let a=e._x,o=e._y,c=e._z,u=e._w,h=this.dot(e);h<0&&(a=-a,o=-o,c=-c,u=-u,h=-h);let m=1-n;if(h<.9995){const p=Math.acos(h),_=Math.sin(p);m=Math.sin(m*p)/_,n=Math.sin(n*p)/_,this._x=this._x*m+a*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this._onChangeCallback()}else this._x=this._x*m+a*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this.normalize();return this}slerpQuaternions(e,n,a){return this.copy(e).slerp(n,a)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Em=class Em{constructor(e=0,n=0,a=0){this.x=e,this.y=n,this.z=a}set(e,n,a){return a===void 0&&(a=this.z),this.x=e,this.y=n,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(E_.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(E_.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,a=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*a+c[6]*o,this.y=c[1]*n+c[4]*a+c[7]*o,this.z=c[2]*n+c[5]*a+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,a=this.y,o=this.z,c=e.elements,u=1/(c[3]*n+c[7]*a+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*a+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*a+c[10]*o+c[14])*u,this}applyQuaternion(e){const n=this.x,a=this.y,o=this.z,c=e.x,u=e.y,h=e.z,m=e.w,p=2*(u*o-h*a),_=2*(h*n-c*o),v=2*(c*a-u*n);return this.x=n+m*p+u*v-h*_,this.y=a+m*_+h*p-c*v,this.z=o+m*v+c*_-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,a=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*a+c[8]*o,this.y=c[1]*n+c[5]*a+c[9]*o,this.z=c[2]*n+c[6]*a+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=zt(this.x,e.x,n.x),this.y=zt(this.y,e.y,n.y),this.z=zt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=zt(this.x,e,n),this.y=zt(this.y,e,n),this.z=zt(this.z,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(zt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const a=e.x,o=e.y,c=e.z,u=n.x,h=n.y,m=n.z;return this.x=o*m-c*h,this.y=c*u-a*m,this.z=a*h-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const a=e.dot(this)/n;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return Th.copy(this).projectOnVector(e),this.sub(Th)}reflect(e){return this.sub(Th.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(zt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y,o=this.z-e.z;return n*n+a*a+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,a){const o=Math.sin(n)*e;return this.x=o*Math.sin(a),this.y=Math.cos(n)*e,this.z=o*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,a){return this.x=e*Math.sin(n),this.y=a,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=a,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(e),this.y=n,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Em.prototype.isVector3=!0;let te=Em;const Th=new te,E_=new er,bm=class bm{constructor(e,n,a,o,c,u,h,m,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,a,o,c,u,h,m,p)}set(e,n,a,o,c,u,h,m,p){const _=this.elements;return _[0]=e,_[1]=o,_[2]=h,_[3]=n,_[4]=c,_[5]=m,_[6]=a,_[7]=u,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(e,n,a){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,o=n.elements,c=this.elements,u=a[0],h=a[3],m=a[6],p=a[1],_=a[4],v=a[7],g=a[2],x=a[5],M=a[8],w=o[0],S=o[3],y=o[6],F=o[1],O=o[4],R=o[7],I=o[2],N=o[5],H=o[8];return c[0]=u*w+h*F+m*I,c[3]=u*S+h*O+m*N,c[6]=u*y+h*R+m*H,c[1]=p*w+_*F+v*I,c[4]=p*S+_*O+v*N,c[7]=p*y+_*R+v*H,c[2]=g*w+x*F+M*I,c[5]=g*S+x*O+M*N,c[8]=g*y+x*R+M*H,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[1],o=e[2],c=e[3],u=e[4],h=e[5],m=e[6],p=e[7],_=e[8];return n*u*_-n*h*p-a*c*_+a*h*m+o*c*p-o*u*m}invert(){const e=this.elements,n=e[0],a=e[1],o=e[2],c=e[3],u=e[4],h=e[5],m=e[6],p=e[7],_=e[8],v=_*u-h*p,g=h*m-_*c,x=p*c-u*m,M=n*v+a*g+o*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/M;return e[0]=v*w,e[1]=(o*p-_*a)*w,e[2]=(h*a-o*u)*w,e[3]=g*w,e[4]=(_*n-o*m)*w,e[5]=(o*c-h*n)*w,e[6]=x*w,e[7]=(a*m-p*n)*w,e[8]=(u*n-a*c)*w,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,a,o,c,u,h){const m=Math.cos(c),p=Math.sin(c);return this.set(a*m,a*p,-a*(m*u+p*h)+u+e,-o*p,o*m,-o*(-p*u+m*h)+h+n,0,0,1),this}scale(e,n){return No("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ah.makeScale(e,n)),this}rotate(e){return No("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ah.makeRotation(-e)),this}translate(e,n){return No("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ah.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,a=e.elements;for(let o=0;o<9;o++)if(n[o]!==a[o])return!1;return!0}fromArray(e,n=0){for(let a=0;a<9;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}};bm.prototype.isMatrix3=!0;let Dt=bm;const Ah=new Dt,b_=new Dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),T_=new Dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function QE(){const s={enabled:!0,workingColorSpace:lf,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===hn&&(o.r=ms(o.r),o.g=ms(o.g),o.b=ms(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===hn&&(o.r=Uo(o.r),o.g=Uo(o.g),o.b=Uo(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===js?cf:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return No("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return No("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return s.define({[lf]:{primaries:e,whitePoint:a,transfer:cf,toXYZ:b_,fromXYZ:T_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ti},outputColorSpaceConfig:{drawingBufferColorSpace:Ti}},[Ti]:{primaries:e,whitePoint:a,transfer:hn,toXYZ:b_,fromXYZ:T_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ti}}}),s}const Qt=QE();function ms(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Uo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ho;class JE{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{ho===void 0&&(ho=nc("canvas")),ho.width=e.width,ho.height=e.height;const o=ho.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),a=ho}return a.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=nc("canvas");n.width=e.width,n.height=e.height;const a=n.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const o=a.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=ms(c[u]/255)*255;return a.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(ms(n[a]/255)*255):n[a]=ms(n[a]);return{data:n,width:e.width,height:e.height}}else return xt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $E=0;class dm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$E++}),this.uuid=Or(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,h=o.length;u<h;u++)o[u].isDataTexture?c.push(wh(o[u].image)):c.push(wh(o[u]))}else c=wh(o);a.url=c}return n||(e.images[this.uuid]=a),a}}function wh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?JE.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(xt("Texture: Unable to serialize Texture."),{})}let eb=0;const Rh=new te;class vi extends Ur{constructor(e=vi.DEFAULT_IMAGE,n=vi.DEFAULT_MAPPING,a=Ma,o=Ma,c=Xn,u=Ks,h=Ea,m=da,p=vi.DEFAULT_ANISOTROPY,_=js){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eb++}),this.uuid=Or(),this.name="",this.source=new dm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Rh).x}get height(){return this.source.getSize(Rh).y}get depth(){return this.source.getSize(Rh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const a=e[n];if(a===void 0){xt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){xt(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&a&&o.isVector2&&a.isVector2||o&&a&&o.isVector3&&a.isVector3||o&&a&&o.isMatrix3&&a.isMatrix3?o.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$x)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $l:e.x=e.x-Math.floor(e.x);break;case Ma:e.x=e.x<0?0:1;break;case vp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $l:e.y=e.y-Math.floor(e.y);break;case Ma:e.y=e.y<0?0:1;break;case vp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}vi.DEFAULT_IMAGE=null;vi.DEFAULT_MAPPING=$x;vi.DEFAULT_ANISOTROPY=1;const Tm=class Tm{constructor(e=0,n=0,a=0,o=1){this.x=e,this.y=n,this.z=a,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,a,o){return this.x=e,this.y=n,this.z=a,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,a=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*a+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*a+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*a+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*a+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,a,o,c;const m=e.elements,p=m[0],_=m[4],v=m[8],g=m[1],x=m[5],M=m[9],w=m[2],S=m[6],y=m[10];if(Math.abs(_-g)<.01&&Math.abs(v-w)<.01&&Math.abs(M-S)<.01){if(Math.abs(_+g)<.1&&Math.abs(v+w)<.1&&Math.abs(M+S)<.1&&Math.abs(p+x+y-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const O=(p+1)/2,R=(x+1)/2,I=(y+1)/2,N=(_+g)/4,H=(v+w)/4,T=(M+S)/4;return O>R&&O>I?O<.01?(a=0,o=.707106781,c=.707106781):(a=Math.sqrt(O),o=N/a,c=H/a):R>I?R<.01?(a=.707106781,o=0,c=.707106781):(o=Math.sqrt(R),a=N/o,c=T/o):I<.01?(a=.707106781,o=.707106781,c=0):(c=Math.sqrt(I),a=H/c,o=T/c),this.set(a,o,c,n),this}let F=Math.sqrt((S-M)*(S-M)+(v-w)*(v-w)+(g-_)*(g-_));return Math.abs(F)<.001&&(F=1),this.x=(S-M)/F,this.y=(v-w)/F,this.z=(g-_)/F,this.w=Math.acos((p+x+y-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=zt(this.x,e.x,n.x),this.y=zt(this.y,e.y,n.y),this.z=zt(this.z,e.z,n.z),this.w=zt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=zt(this.x,e,n),this.y=zt(this.y,e,n),this.z=zt(this.z,e,n),this.w=zt(this.w,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(zt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this.w=e.w+(n.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Tm.prototype.isVector4=!0;let Vn=Tm;class tb extends Ur{constructor(e=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},a),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=a.depth,this.scissor=new Vn(0,0,e,n),this.scissorTest=!1,this.viewport=new Vn(0,0,e,n),this.textures=[];const o={width:e,height:n,depth:a.depth},c=new vi(o),u=a.count;for(let h=0;h<u;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview,this.useArrayDepthTexture=a.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Xn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,a=1){if(this.width!==e||this.height!==n||this.depth!==a){this.width=e,this.height=n,this.depth=a;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=a,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,a=e.textures.length;n<a;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new dm(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ba extends tb{constructor(e=1,n=1,a={}){super(e,n,a),this.isWebGLRenderTarget=!0}}class ly extends vi{constructor(e=null,n=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:a,depth:o},this.magFilter=gi,this.minFilter=gi,this.wrapR=Ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class nb extends vi{constructor(e=null,n=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:a,depth:o},this.magFilter=gi,this.minFilter=gi,this.wrapR=Ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const gf=class gf{constructor(e,n,a,o,c,u,h,m,p,_,v,g,x,M,w,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,a,o,c,u,h,m,p,_,v,g,x,M,w,S)}set(e,n,a,o,c,u,h,m,p,_,v,g,x,M,w,S){const y=this.elements;return y[0]=e,y[4]=n,y[8]=a,y[12]=o,y[1]=c,y[5]=u,y[9]=h,y[13]=m,y[2]=p,y[6]=_,y[10]=v,y[14]=g,y[3]=x,y[7]=M,y[11]=w,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gf().fromArray(this.elements)}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(e){const n=this.elements,a=e.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,a){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),a.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(e,n,a){return this.set(e.x,n.x,a.x,0,e.y,n.y,a.y,0,e.z,n.z,a.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,a=e.elements,o=1/po.setFromMatrixColumn(e,0).length(),c=1/po.setFromMatrixColumn(e,1).length(),u=1/po.setFromMatrixColumn(e,2).length();return n[0]=a[0]*o,n[1]=a[1]*o,n[2]=a[2]*o,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,a=e.x,o=e.y,c=e.z,u=Math.cos(a),h=Math.sin(a),m=Math.cos(o),p=Math.sin(o),_=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const g=u*_,x=u*v,M=h*_,w=h*v;n[0]=m*_,n[4]=-m*v,n[8]=p,n[1]=x+M*p,n[5]=g-w*p,n[9]=-h*m,n[2]=w-g*p,n[6]=M+x*p,n[10]=u*m}else if(e.order==="YXZ"){const g=m*_,x=m*v,M=p*_,w=p*v;n[0]=g+w*h,n[4]=M*h-x,n[8]=u*p,n[1]=u*v,n[5]=u*_,n[9]=-h,n[2]=x*h-M,n[6]=w+g*h,n[10]=u*m}else if(e.order==="ZXY"){const g=m*_,x=m*v,M=p*_,w=p*v;n[0]=g-w*h,n[4]=-u*v,n[8]=M+x*h,n[1]=x+M*h,n[5]=u*_,n[9]=w-g*h,n[2]=-u*p,n[6]=h,n[10]=u*m}else if(e.order==="ZYX"){const g=u*_,x=u*v,M=h*_,w=h*v;n[0]=m*_,n[4]=M*p-x,n[8]=g*p+w,n[1]=m*v,n[5]=w*p+g,n[9]=x*p-M,n[2]=-p,n[6]=h*m,n[10]=u*m}else if(e.order==="YZX"){const g=u*m,x=u*p,M=h*m,w=h*p;n[0]=m*_,n[4]=w-g*v,n[8]=M*v+x,n[1]=v,n[5]=u*_,n[9]=-h*_,n[2]=-p*_,n[6]=x*v+M,n[10]=g-w*v}else if(e.order==="XZY"){const g=u*m,x=u*p,M=h*m,w=h*p;n[0]=m*_,n[4]=-v,n[8]=p*_,n[1]=g*v+w,n[5]=u*_,n[9]=x*v-M,n[2]=M*v-x,n[6]=h*_,n[10]=w*v+g}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ib,e,ab)}lookAt(e,n,a){const o=this.elements;return Ki.subVectors(e,n),Ki.lengthSq()===0&&(Ki.z=1),Ki.normalize(),ks.crossVectors(a,Ki),ks.lengthSq()===0&&(Math.abs(a.z)===1?Ki.x+=1e-4:Ki.z+=1e-4,Ki.normalize(),ks.crossVectors(a,Ki)),ks.normalize(),xu.crossVectors(Ki,ks),o[0]=ks.x,o[4]=xu.x,o[8]=Ki.x,o[1]=ks.y,o[5]=xu.y,o[9]=Ki.y,o[2]=ks.z,o[6]=xu.z,o[10]=Ki.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,o=n.elements,c=this.elements,u=a[0],h=a[4],m=a[8],p=a[12],_=a[1],v=a[5],g=a[9],x=a[13],M=a[2],w=a[6],S=a[10],y=a[14],F=a[3],O=a[7],R=a[11],I=a[15],N=o[0],H=o[4],T=o[8],D=o[12],G=o[1],k=o[5],Z=o[9],ce=o[13],ie=o[2],K=o[6],V=o[10],X=o[14],se=o[3],pe=o[7],Ce=o[11],B=o[15];return c[0]=u*N+h*G+m*ie+p*se,c[4]=u*H+h*k+m*K+p*pe,c[8]=u*T+h*Z+m*V+p*Ce,c[12]=u*D+h*ce+m*X+p*B,c[1]=_*N+v*G+g*ie+x*se,c[5]=_*H+v*k+g*K+x*pe,c[9]=_*T+v*Z+g*V+x*Ce,c[13]=_*D+v*ce+g*X+x*B,c[2]=M*N+w*G+S*ie+y*se,c[6]=M*H+w*k+S*K+y*pe,c[10]=M*T+w*Z+S*V+y*Ce,c[14]=M*D+w*ce+S*X+y*B,c[3]=F*N+O*G+R*ie+I*se,c[7]=F*H+O*k+R*K+I*pe,c[11]=F*T+O*Z+R*V+I*Ce,c[15]=F*D+O*ce+R*X+I*B,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[4],o=e[8],c=e[12],u=e[1],h=e[5],m=e[9],p=e[13],_=e[2],v=e[6],g=e[10],x=e[14],M=e[3],w=e[7],S=e[11],y=e[15],F=m*x-p*g,O=h*x-p*v,R=h*g-m*v,I=u*x-p*_,N=u*g-m*_,H=u*v-h*_;return n*(w*F-S*O+y*R)-a*(M*F-S*I+y*N)+o*(M*O-w*I+y*H)-c*(M*R-w*N+S*H)}determinantAffine(){const e=this.elements,n=e[0],a=e[4],o=e[8],c=e[1],u=e[5],h=e[9],m=e[2],p=e[6],_=e[10];return n*(u*_-h*p)-a*(c*_-h*m)+o*(c*p-u*m)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,a){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=a),this}invert(){const e=this.elements,n=e[0],a=e[1],o=e[2],c=e[3],u=e[4],h=e[5],m=e[6],p=e[7],_=e[8],v=e[9],g=e[10],x=e[11],M=e[12],w=e[13],S=e[14],y=e[15],F=n*h-a*u,O=n*m-o*u,R=n*p-c*u,I=a*m-o*h,N=a*p-c*h,H=o*p-c*m,T=_*w-v*M,D=_*S-g*M,G=_*y-x*M,k=v*S-g*w,Z=v*y-x*w,ce=g*y-x*S,ie=F*ce-O*Z+R*k+I*G-N*D+H*T;if(ie===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const K=1/ie;return e[0]=(h*ce-m*Z+p*k)*K,e[1]=(o*Z-a*ce-c*k)*K,e[2]=(w*H-S*N+y*I)*K,e[3]=(g*N-v*H-x*I)*K,e[4]=(m*G-u*ce-p*D)*K,e[5]=(n*ce-o*G+c*D)*K,e[6]=(S*R-M*H-y*O)*K,e[7]=(_*H-g*R+x*O)*K,e[8]=(u*Z-h*G+p*T)*K,e[9]=(a*G-n*Z-c*T)*K,e[10]=(M*N-w*R+y*F)*K,e[11]=(v*R-_*N-x*F)*K,e[12]=(h*D-u*k-m*T)*K,e[13]=(n*k-a*D+o*T)*K,e[14]=(w*O-M*I-S*F)*K,e[15]=(_*I-v*O+g*F)*K,this}scale(e){const n=this.elements,a=e.x,o=e.y,c=e.z;return n[0]*=a,n[4]*=o,n[8]*=c,n[1]*=a,n[5]*=o,n[9]*=c,n[2]*=a,n[6]*=o,n[10]*=c,n[3]*=a,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,a,o))}makeTranslation(e,n,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const a=Math.cos(n),o=Math.sin(n),c=1-a,u=e.x,h=e.y,m=e.z,p=c*u,_=c*h;return this.set(p*u+a,p*h-o*m,p*m+o*h,0,p*h+o*m,_*h+a,_*m-o*u,0,p*m-o*h,_*m+o*u,c*m*m+a,0,0,0,0,1),this}makeScale(e,n,a){return this.set(e,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,n,a,o,c,u){return this.set(1,a,c,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,a){const o=this.elements,c=n._x,u=n._y,h=n._z,m=n._w,p=c+c,_=u+u,v=h+h,g=c*p,x=c*_,M=c*v,w=u*_,S=u*v,y=h*v,F=m*p,O=m*_,R=m*v,I=a.x,N=a.y,H=a.z;return o[0]=(1-(w+y))*I,o[1]=(x+R)*I,o[2]=(M-O)*I,o[3]=0,o[4]=(x-R)*N,o[5]=(1-(g+y))*N,o[6]=(S+F)*N,o[7]=0,o[8]=(M+O)*H,o[9]=(S-F)*H,o[10]=(1-(g+w))*H,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,a){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const c=this.determinantAffine();if(c===0)return a.set(1,1,1),n.identity(),this;let u=po.set(o[0],o[1],o[2]).length();const h=po.set(o[4],o[5],o[6]).length(),m=po.set(o[8],o[9],o[10]).length();c<0&&(u=-u),_a.copy(this);const p=1/u,_=1/h,v=1/m;return _a.elements[0]*=p,_a.elements[1]*=p,_a.elements[2]*=p,_a.elements[4]*=_,_a.elements[5]*=_,_a.elements[6]*=_,_a.elements[8]*=v,_a.elements[9]*=v,_a.elements[10]*=v,n.setFromRotationMatrix(_a),a.x=u,a.y=h,a.z=m,this}makePerspective(e,n,a,o,c,u,h=Ia,m=!1){const p=this.elements,_=2*c/(n-e),v=2*c/(a-o),g=(n+e)/(n-e),x=(a+o)/(a-o);let M,w;if(m)M=c/(u-c),w=u*c/(u-c);else if(h===Ia)M=-(u+c)/(u-c),w=-2*u*c/(u-c);else if(h===uf)M=-u/(u-c),w=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=v,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,a,o,c,u,h=Ia,m=!1){const p=this.elements,_=2/(n-e),v=2/(a-o),g=-(n+e)/(n-e),x=-(a+o)/(a-o);let M,w;if(m)M=1/(u-c),w=u/(u-c);else if(h===Ia)M=-2/(u-c),w=-(u+c)/(u-c);else if(h===uf)M=-1/(u-c),w=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=v,p[9]=0,p[13]=x,p[2]=0,p[6]=0,p[10]=M,p[14]=w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,a=e.elements;for(let o=0;o<16;o++)if(n[o]!==a[o])return!1;return!0}fromArray(e,n=0){for(let a=0;a<16;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e[n+9]=a[9],e[n+10]=a[10],e[n+11]=a[11],e[n+12]=a[12],e[n+13]=a[13],e[n+14]=a[14],e[n+15]=a[15],e}};gf.prototype.isMatrix4=!0;let In=gf;const po=new te,_a=new In,ib=new te(0,0,0),ab=new te(1,1,1),ks=new te,xu=new te,Ki=new te,A_=new In,w_=new er;class tr{constructor(e=0,n=0,a=0,o=tr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=a,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,a,o=this._order){return this._x=e,this._y=n,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,a=!0){const o=e.elements,c=o[0],u=o[4],h=o[8],m=o[1],p=o[5],_=o[9],v=o[2],g=o[6],x=o[10];switch(n){case"XYZ":this._y=Math.asin(zt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,x),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,x),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(zt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,x),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-zt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,x),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(zt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(h,x));break;case"XZY":this._z=Math.asin(-zt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-_,x),this._y=0);break;default:xt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,a){return A_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(A_,n,a)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return w_.setFromEuler(this),this.setFromQuaternion(w_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}tr.DEFAULT_ORDER="XYZ";class hm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sb=0;const R_=new te,mo=new er,ls=new In,yu=new te,Ll=new te,rb=new te,ob=new er,C_=new te(1,0,0),D_=new te(0,1,0),L_=new te(0,0,1),N_={type:"added"},lb={type:"removed"},go={type:"childadded",child:null},Ch={type:"childremoved",child:null};class Hi extends Ur{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sb++}),this.uuid=Or(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Hi.DEFAULT_UP.clone();const e=new te,n=new tr,a=new er,o=new te(1,1,1);function c(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new In},normalMatrix:{value:new Dt}}),this.matrix=new In,this.matrixWorld=new In,this.matrixAutoUpdate=Hi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Hi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return mo.setFromAxisAngle(e,n),this.quaternion.multiply(mo),this}rotateOnWorldAxis(e,n){return mo.setFromAxisAngle(e,n),this.quaternion.premultiply(mo),this}rotateX(e){return this.rotateOnAxis(C_,e)}rotateY(e){return this.rotateOnAxis(D_,e)}rotateZ(e){return this.rotateOnAxis(L_,e)}translateOnAxis(e,n){return R_.copy(e).applyQuaternion(this.quaternion),this.position.add(R_.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(C_,e)}translateY(e){return this.translateOnAxis(D_,e)}translateZ(e){return this.translateOnAxis(L_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ls.copy(this.matrixWorld).invert())}lookAt(e,n,a){e.isVector3?yu.copy(e):yu.set(e,n,a);const o=this.parent;this.updateWorldMatrix(!0,!1),Ll.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ls.lookAt(Ll,yu,this.up):ls.lookAt(yu,Ll,this.up),this.quaternion.setFromRotationMatrix(ls),o&&(ls.extractRotation(o.matrixWorld),mo.setFromRotationMatrix(ls),this.quaternion.premultiply(mo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Jt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(N_),go.child=e,this.dispatchEvent(go),go.child=null):Jt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(lb),Ch.child=e,this.dispatchEvent(Ch),Ch.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ls.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ls.multiply(e.parent.matrixWorld)),e.applyMatrix4(ls),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(N_),go.child=e,this.dispatchEvent(go),go.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let a=0,o=this.children.length;a<o;a++){const u=this.children[a].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,a=[]){this[e]===n&&a.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,n,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ll,e,rb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ll,ob,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,a=e.y,o=e.z,c=this.matrix.elements;c[12]+=n-c[0]*n-c[4]*a-c[8]*o,c[13]+=a-c[1]*n-c[5]*a-c[9]*o,c[14]+=o-c[2]*n-c[6]*a-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].updateMatrixWorld(e)}updateWorldMatrix(e,n,a=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||a)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,a=!0),n===!0){const c=this.children;for(let u=0,h=c.length;u<h;u++)c[u].updateWorldMatrix(!1,!0,a)}}toJSON(e){const n=e===void 0||typeof e=="string",a={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const v=m[p];c(e.shapes,v)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));o.material=h}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];o.animations.push(c(e.animations,m))}}if(n){const h=u(e.geometries),m=u(e.materials),p=u(e.textures),_=u(e.images),v=u(e.shapes),g=u(e.skeletons),x=u(e.animations),M=u(e.nodes);h.length>0&&(a.geometries=h),m.length>0&&(a.materials=m),p.length>0&&(a.textures=p),_.length>0&&(a.images=_),v.length>0&&(a.shapes=v),g.length>0&&(a.skeletons=g),x.length>0&&(a.animations=x),M.length>0&&(a.nodes=M)}return a.object=o,a;function u(h){const m=[];for(const p in h){const _=h[p];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let a=0;a<e.children.length;a++){const o=e.children[a];this.add(o.clone())}return this}}Hi.DEFAULT_UP=new te(0,1,0);Hi.DEFAULT_MATRIX_AUTO_UPDATE=!0;Hi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Oa extends Hi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cb={type:"move"};class Dh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new te,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new te),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new te,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new te,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const a of e.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,a){let o=null,c=null,u=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const w of e.hand.values()){const S=n.getJointPose(w,a),y=this._getHandJoint(p,w);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const _=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],g=_.position.distanceTo(v.position),x=.02,M=.005;p.inputState.pinching&&g>x+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=x-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,a),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(o=n.getPose(e.targetRaySpace,a),o===null&&c!==null&&(o=c),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(cb)))}return h!==null&&(h.visible=o!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const a=new Oa;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[n.jointName]=a,e.add(a)}return e.joints[n.jointName]}}const cy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xs={h:0,s:0,l:0},Su={h:0,s:0,l:0};function Lh(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class $t{constructor(e,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,a)}set(e,n,a){if(n===void 0&&a===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qt.colorSpaceToWorking(this,n),this}setRGB(e,n,a,o=Qt.workingColorSpace){return this.r=e,this.g=n,this.b=a,Qt.colorSpaceToWorking(this,o),this}setHSL(e,n,a,o=Qt.workingColorSpace){if(e=fm(e,1),n=zt(n,0,1),a=zt(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,u=2*a-c;this.r=Lh(u,c,e+1/3),this.g=Lh(u,c,e),this.b=Lh(u,c,e-1/3)}return Qt.colorSpaceToWorking(this,o),this}setStyle(e,n=Ti){function a(c){c!==void 0&&parseFloat(c)<1&&xt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],h=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:xt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);xt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ti){const a=cy[e.toLowerCase()];return a!==void 0?this.setHex(a,n):xt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ms(e.r),this.g=ms(e.g),this.b=ms(e.b),this}copyLinearToSRGB(e){return this.r=Uo(e.r),this.g=Uo(e.g),this.b=Uo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ti){return Qt.workingToColorSpace(bi.copy(this),e),Math.round(zt(bi.r*255,0,255))*65536+Math.round(zt(bi.g*255,0,255))*256+Math.round(zt(bi.b*255,0,255))}getHexString(e=Ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Qt.workingColorSpace){Qt.workingToColorSpace(bi.copy(this),n);const a=bi.r,o=bi.g,c=bi.b,u=Math.max(a,o,c),h=Math.min(a,o,c);let m,p;const _=(h+u)/2;if(h===u)m=0,p=0;else{const v=u-h;switch(p=_<=.5?v/(u+h):v/(2-u-h),u){case a:m=(o-c)/v+(o<c?6:0);break;case o:m=(c-a)/v+2;break;case c:m=(a-o)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=_,e}getRGB(e,n=Qt.workingColorSpace){return Qt.workingToColorSpace(bi.copy(this),n),e.r=bi.r,e.g=bi.g,e.b=bi.b,e}getStyle(e=Ti){Qt.workingToColorSpace(bi.copy(this),e);const n=bi.r,a=bi.g,o=bi.b;return e!==Ti?`color(${e} ${n.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(e,n,a){return this.getHSL(Xs),this.setHSL(Xs.h+e,Xs.s+n,Xs.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,a){return this.r=e.r+(n.r-e.r)*a,this.g=e.g+(n.g-e.g)*a,this.b=e.b+(n.b-e.b)*a,this}lerpHSL(e,n){this.getHSL(Xs),e.getHSL(Su);const a=Wl(Xs.h,Su.h,n),o=Wl(Xs.s,Su.s,n),c=Wl(Xs.l,Su.l,n);return this.setHSL(a,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,a=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*a+c[6]*o,this.g=c[1]*n+c[4]*a+c[7]*o,this.b=c[2]*n+c[5]*a+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bi=new $t;$t.NAMES=cy;class ub extends Hi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new tr,this.environmentIntensity=1,this.environmentRotation=new tr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const xa=new te,cs=new te,Nh=new te,us=new te,vo=new te,_o=new te,U_=new te,Uh=new te,Oh=new te,Ph=new te,Ih=new Vn,Fh=new Vn,Bh=new Vn;class Sa{constructor(e=new te,n=new te,a=new te){this.a=e,this.b=n,this.c=a}static getNormal(e,n,a,o){o.subVectors(a,n),xa.subVectors(e,n),o.cross(xa);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,a,o,c){xa.subVectors(o,n),cs.subVectors(a,n),Nh.subVectors(e,n);const u=xa.dot(xa),h=xa.dot(cs),m=xa.dot(Nh),p=cs.dot(cs),_=cs.dot(Nh),v=u*p-h*h;if(v===0)return c.set(0,0,0),null;const g=1/v,x=(p*m-h*_)*g,M=(u*_-h*m)*g;return c.set(1-x-M,M,x)}static containsPoint(e,n,a,o){return this.getBarycoord(e,n,a,o,us)===null?!1:us.x>=0&&us.y>=0&&us.x+us.y<=1}static getInterpolation(e,n,a,o,c,u,h,m){return this.getBarycoord(e,n,a,o,us)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,us.x),m.addScaledVector(u,us.y),m.addScaledVector(h,us.z),m)}static getInterpolatedAttribute(e,n,a,o,c,u){return Ih.setScalar(0),Fh.setScalar(0),Bh.setScalar(0),Ih.fromBufferAttribute(e,n),Fh.fromBufferAttribute(e,a),Bh.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Ih,c.x),u.addScaledVector(Fh,c.y),u.addScaledVector(Bh,c.z),u}static isFrontFacing(e,n,a,o){return xa.subVectors(a,n),cs.subVectors(e,n),xa.cross(cs).dot(o)<0}set(e,n,a){return this.a.copy(e),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(e,n,a,o){return this.a.copy(e[n]),this.b.copy(e[a]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,a,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xa.subVectors(this.c,this.b),cs.subVectors(this.a,this.b),xa.cross(cs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Sa.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Sa.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,a,o,c){return Sa.getInterpolation(e,this.a,this.b,this.c,n,a,o,c)}containsPoint(e){return Sa.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Sa.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const a=this.a,o=this.b,c=this.c;let u,h;vo.subVectors(o,a),_o.subVectors(c,a),Uh.subVectors(e,a);const m=vo.dot(Uh),p=_o.dot(Uh);if(m<=0&&p<=0)return n.copy(a);Oh.subVectors(e,o);const _=vo.dot(Oh),v=_o.dot(Oh);if(_>=0&&v<=_)return n.copy(o);const g=m*v-_*p;if(g<=0&&m>=0&&_<=0)return u=m/(m-_),n.copy(a).addScaledVector(vo,u);Ph.subVectors(e,c);const x=vo.dot(Ph),M=_o.dot(Ph);if(M>=0&&x<=M)return n.copy(c);const w=x*p-m*M;if(w<=0&&p>=0&&M<=0)return h=p/(p-M),n.copy(a).addScaledVector(_o,h);const S=_*M-x*v;if(S<=0&&v-_>=0&&x-M>=0)return U_.subVectors(c,o),h=(v-_)/(v-_+(x-M)),n.copy(o).addScaledVector(U_,h);const y=1/(S+w+g);return u=w*y,h=g*y,n.copy(a).addScaledVector(vo,u).addScaledVector(_o,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class oc{constructor(e=new te(1/0,1/0,1/0),n=new te(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n+=3)this.expandByPoint(ya.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,a=e.count;n<a;n++)this.expandByPoint(ya.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const a=ya.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,h=c.count;u<h;u++)e.isMesh===!0?e.getVertexPosition(u,ya):ya.fromBufferAttribute(c,u),ya.applyMatrix4(e.matrixWorld),this.expandByPoint(ya);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Mu.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Mu.copy(a.boundingBox)),Mu.applyMatrix4(e.matrixWorld),this.union(Mu)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ya),ya.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,a;return e.normal.x>0?(n=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),n<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Nl),Eu.subVectors(this.max,Nl),xo.subVectors(e.a,Nl),yo.subVectors(e.b,Nl),So.subVectors(e.c,Nl),Ws.subVectors(yo,xo),qs.subVectors(So,yo),yr.subVectors(xo,So);let n=[0,-Ws.z,Ws.y,0,-qs.z,qs.y,0,-yr.z,yr.y,Ws.z,0,-Ws.x,qs.z,0,-qs.x,yr.z,0,-yr.x,-Ws.y,Ws.x,0,-qs.y,qs.x,0,-yr.y,yr.x,0];return!zh(n,xo,yo,So,Eu)||(n=[1,0,0,0,1,0,0,0,1],!zh(n,xo,yo,So,Eu))?!1:(bu.crossVectors(Ws,qs),n=[bu.x,bu.y,bu.z],zh(n,xo,yo,So,Eu))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ya).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ya).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const fs=[new te,new te,new te,new te,new te,new te,new te,new te],ya=new te,Mu=new oc,xo=new te,yo=new te,So=new te,Ws=new te,qs=new te,yr=new te,Nl=new te,Eu=new te,bu=new te,Sr=new te;function zh(s,e,n,a,o){for(let c=0,u=s.length-3;c<=u;c+=3){Sr.fromArray(s,c);const h=o.x*Math.abs(Sr.x)+o.y*Math.abs(Sr.y)+o.z*Math.abs(Sr.z),m=e.dot(Sr),p=n.dot(Sr),_=a.dot(Sr);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>h)return!1}return!0}const Qn=new te,Tu=new dt;let fb=0;class za extends Ur{constructor(e,n,a=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fb++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=a,this.usage=__,this.updateRanges=[],this.gpuType=Pa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,a){e*=this.itemSize,a*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[a+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)Tu.fromBufferAttribute(this,n),Tu.applyMatrix3(e),this.setXY(n,Tu.x,Tu.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)Qn.fromBufferAttribute(this,n),Qn.applyMatrix3(e),this.setXYZ(n,Qn.x,Qn.y,Qn.z);return this}applyMatrix4(e){for(let n=0,a=this.count;n<a;n++)Qn.fromBufferAttribute(this,n),Qn.applyMatrix4(e),this.setXYZ(n,Qn.x,Qn.y,Qn.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)Qn.fromBufferAttribute(this,n),Qn.applyNormalMatrix(e),this.setXYZ(n,Qn.x,Qn.y,Qn.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)Qn.fromBufferAttribute(this,n),Qn.transformDirection(e),this.setXYZ(n,Qn.x,Qn.y,Qn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let a=this.array[e*this.itemSize+n];return this.normalized&&(a=Ro(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=Li(a,this.array)),this.array[e*this.itemSize+n]=a,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ro(n,this.array)),n}setX(e,n){return this.normalized&&(n=Li(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ro(n,this.array)),n}setY(e,n){return this.normalized&&(n=Li(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ro(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Li(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ro(n,this.array)),n}setW(e,n){return this.normalized&&(n=Li(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,a){return e*=this.itemSize,this.normalized&&(n=Li(n,this.array),a=Li(a,this.array)),this.array[e+0]=n,this.array[e+1]=a,this}setXYZ(e,n,a,o){return e*=this.itemSize,this.normalized&&(n=Li(n,this.array),a=Li(a,this.array),o=Li(o,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=o,this}setXYZW(e,n,a,o,c){return e*=this.itemSize,this.normalized&&(n=Li(n,this.array),a=Li(a,this.array),o=Li(o,this.array),c=Li(c,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==__&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class uy extends za{constructor(e,n,a){super(new Uint16Array(e),n,a)}}class fy extends za{constructor(e,n,a){super(new Uint32Array(e),n,a)}}class Ai extends za{constructor(e,n,a){super(new Float32Array(e),n,a)}}const db=new oc,Ul=new te,Hh=new te;class _f{constructor(e=new te,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const a=this.center;n!==void 0?a.copy(n):db.setFromPoints(e).getCenter(a);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,a.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const a=this.center.distanceToSquared(e);return n.copy(e),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ul.subVectors(e,this.center);const n=Ul.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),o=(a-this.radius)*.5;this.center.addScaledVector(Ul,o/a),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ul.copy(e.center).add(Hh)),this.expandByPoint(Ul.copy(e.center).sub(Hh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let hb=0;const ca=new In,Vh=new Hi,Mo=new te,Qi=new oc,Ol=new oc,ci=new te;class ha extends Ur{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hb++}),this.uuid=Or(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(LE(e)?fy:uy)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,a=0){this.groups.push({start:e,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new Dt().getNormalMatrix(e);a.applyNormalMatrix(c),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ca.makeRotationFromQuaternion(e),this.applyMatrix4(ca),this}rotateX(e){return ca.makeRotationX(e),this.applyMatrix4(ca),this}rotateY(e){return ca.makeRotationY(e),this.applyMatrix4(ca),this}rotateZ(e){return ca.makeRotationZ(e),this.applyMatrix4(ca),this}translate(e,n,a){return ca.makeTranslation(e,n,a),this.applyMatrix4(ca),this}scale(e,n,a){return ca.makeScale(e,n,a),this.applyMatrix4(ca),this}lookAt(e){return Vh.lookAt(e),Vh.updateMatrix(),this.applyMatrix4(Vh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mo).negate(),this.translate(Mo.x,Mo.y,Mo.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Ai(a,3))}else{const a=Math.min(e.length,n.count);for(let o=0;o<a;o++){const c=e[o];n.setXYZ(o,c.x,c.y,c.z||0)}e.length>n.count&&xt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new te(-1/0,-1/0,-1/0),new te(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let a=0,o=n.length;a<o;a++){const c=n[a];Qi.setFromBufferAttribute(c),this.morphTargetsRelative?(ci.addVectors(this.boundingBox.min,Qi.min),this.boundingBox.expandByPoint(ci),ci.addVectors(this.boundingBox.max,Qi.max),this.boundingBox.expandByPoint(ci)):(this.boundingBox.expandByPoint(Qi.min),this.boundingBox.expandByPoint(Qi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _f);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new te,1/0);return}if(e){const a=this.boundingSphere.center;if(Qi.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const h=n[c];Ol.setFromBufferAttribute(h),this.morphTargetsRelative?(ci.addVectors(Qi.min,Ol.min),Qi.expandByPoint(ci),ci.addVectors(Qi.max,Ol.max),Qi.expandByPoint(ci)):(Qi.expandByPoint(Ol.min),Qi.expandByPoint(Ol.max))}Qi.getCenter(a);let o=0;for(let c=0,u=e.count;c<u;c++)ci.fromBufferAttribute(e,c),o=Math.max(o,a.distanceToSquared(ci));if(n)for(let c=0,u=n.length;c<u;c++){const h=n[c],m=this.morphTargetsRelative;for(let p=0,_=h.count;p<_;p++)ci.fromBufferAttribute(h,p),m&&(Mo.fromBufferAttribute(e,p),ci.add(Mo)),o=Math.max(o,a.distanceToSquared(ci))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,o=n.normal,c=n.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==a.count)&&(u=new za(new Float32Array(4*a.count),4),this.setAttribute("tangent",u));const h=[],m=[];for(let T=0;T<a.count;T++)h[T]=new te,m[T]=new te;const p=new te,_=new te,v=new te,g=new dt,x=new dt,M=new dt,w=new te,S=new te;function y(T,D,G){p.fromBufferAttribute(a,T),_.fromBufferAttribute(a,D),v.fromBufferAttribute(a,G),g.fromBufferAttribute(c,T),x.fromBufferAttribute(c,D),M.fromBufferAttribute(c,G),_.sub(p),v.sub(p),x.sub(g),M.sub(g);const k=1/(x.x*M.y-M.x*x.y);isFinite(k)&&(w.copy(_).multiplyScalar(M.y).addScaledVector(v,-x.y).multiplyScalar(k),S.copy(v).multiplyScalar(x.x).addScaledVector(_,-M.x).multiplyScalar(k),h[T].add(w),h[D].add(w),h[G].add(w),m[T].add(S),m[D].add(S),m[G].add(S))}let F=this.groups;F.length===0&&(F=[{start:0,count:e.count}]);for(let T=0,D=F.length;T<D;++T){const G=F[T],k=G.start,Z=G.count;for(let ce=k,ie=k+Z;ce<ie;ce+=3)y(e.getX(ce+0),e.getX(ce+1),e.getX(ce+2))}const O=new te,R=new te,I=new te,N=new te;function H(T){I.fromBufferAttribute(o,T),N.copy(I);const D=h[T];O.copy(D),O.sub(I.multiplyScalar(I.dot(D))).normalize(),R.crossVectors(N,D);const k=R.dot(m[T])<0?-1:1;u.setXYZW(T,O.x,O.y,O.z,k)}for(let T=0,D=F.length;T<D;++T){const G=F[T],k=G.start,Z=G.count;for(let ce=k,ie=k+Z;ce<ie;ce+=3)H(e.getX(ce+0)),H(e.getX(ce+1)),H(e.getX(ce+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0||a.count!==n.count)a=new za(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let g=0,x=a.count;g<x;g++)a.setXYZ(g,0,0,0);const o=new te,c=new te,u=new te,h=new te,m=new te,p=new te,_=new te,v=new te;if(e)for(let g=0,x=e.count;g<x;g+=3){const M=e.getX(g+0),w=e.getX(g+1),S=e.getX(g+2);o.fromBufferAttribute(n,M),c.fromBufferAttribute(n,w),u.fromBufferAttribute(n,S),_.subVectors(u,c),v.subVectors(o,c),_.cross(v),h.fromBufferAttribute(a,M),m.fromBufferAttribute(a,w),p.fromBufferAttribute(a,S),h.add(_),m.add(_),p.add(_),a.setXYZ(M,h.x,h.y,h.z),a.setXYZ(w,m.x,m.y,m.z),a.setXYZ(S,p.x,p.y,p.z)}else for(let g=0,x=n.count;g<x;g+=3)o.fromBufferAttribute(n,g+0),c.fromBufferAttribute(n,g+1),u.fromBufferAttribute(n,g+2),_.subVectors(u,c),v.subVectors(o,c),_.cross(v),a.setXYZ(g+0,_.x,_.y,_.z),a.setXYZ(g+1,_.x,_.y,_.z),a.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,a=e.count;n<a;n++)ci.fromBufferAttribute(e,n),ci.normalize(),e.setXYZ(n,ci.x,ci.y,ci.z)}toNonIndexed(){function e(h,m){const p=h.array,_=h.itemSize,v=h.normalized,g=new p.constructor(m.length*_);let x=0,M=0;for(let w=0,S=m.length;w<S;w++){h.isInterleavedBufferAttribute?x=m[w]*h.data.stride+h.offset:x=m[w]*_;for(let y=0;y<_;y++)g[M++]=p[x++]}return new za(g,_,v)}if(this.index===null)return xt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ha,a=this.index.array,o=this.attributes;for(const h in o){const m=o[h],p=e(m,a);n.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let _=0,v=p.length;_<v;_++){const g=p[_],x=e(g,a);m.push(x)}n.morphAttributes[h]=m}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,m=u.length;h<m;h++){const p=u[h];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const m in a){const p=a[m];e.data.attributes[m]=p.toJSON(e.data)}const o={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let v=0,g=p.length;v<g;v++){const x=p[v];_.push(x.toJSON(e.data))}_.length>0&&(o[m]=_,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const o=e.attributes;for(const p in o){const _=o[p];this.setAttribute(p,_.clone(n))}const c=e.morphAttributes;for(const p in c){const _=[],v=c[p];for(let g=0,x=v.length;g<x;g++)_.push(v[g].clone(n));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,_=u.length;p<_;p++){const v=u[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let pb=0;class lc extends Ur{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pb++}),this.uuid=Or(),this.name="",this.type="Material",this.blending=Lo,this.side=$s,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lp,this.blendDst=cp,this.blendEquation=Tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $t(0,0,0),this.blendAlpha=0,this.depthFunc=Po,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=v_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fo,this.stencilZFail=fo,this.stencilZPass=fo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const a=e[n];if(a===void 0){xt(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){xt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector2&&a&&a.isVector2||o&&o.isEuler&&a&&a.isEuler||o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Lo&&(a.blending=this.blending),this.side!==$s&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==lp&&(a.blendSrc=this.blendSrc),this.blendDst!==cp&&(a.blendDst=this.blendDst),this.blendEquation!==Tr&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Po&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==v_&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fo&&(a.stencilFail=this.stencilFail),this.stencilZFail!==fo&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==fo&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(c){const u=[];for(const h in c){const m=c[h];delete m.metadata,u.push(m)}return u}if(n){const c=o(e.textures),u=o(e.images);c.length>0&&(a.textures=c),u.length>0&&(a.images=u)}return a}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new $t().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let a=e.normalScale;Array.isArray(a)===!1&&(a=[a,a]),this.normalScale=new dt().fromArray(a)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new dt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let a=null;if(n!==null){const o=n.length;a=new Array(o);for(let c=0;c!==o;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ds=new te,Gh=new te,Au=new te,Ys=new te,kh=new te,wu=new te,Xh=new te;class pm{constructor(e=new te,n=new te(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ds)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ds.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ds.copy(this.origin).addScaledVector(this.direction,n),ds.distanceToSquared(e))}distanceSqToSegment(e,n,a,o){Gh.copy(e).add(n).multiplyScalar(.5),Au.copy(n).sub(e).normalize(),Ys.copy(this.origin).sub(Gh);const c=e.distanceTo(n)*.5,u=-this.direction.dot(Au),h=Ys.dot(this.direction),m=-Ys.dot(Au),p=Ys.lengthSq(),_=Math.abs(1-u*u);let v,g,x,M;if(_>0)if(v=u*m-h,g=u*h-m,M=c*_,v>=0)if(g>=-M)if(g<=M){const w=1/_;v*=w,g*=w,x=v*(v+u*g+2*h)+g*(u*v+g+2*m)+p}else g=c,v=Math.max(0,-(u*g+h)),x=-v*v+g*(g+2*m)+p;else g=-c,v=Math.max(0,-(u*g+h)),x=-v*v+g*(g+2*m)+p;else g<=-M?(v=Math.max(0,-(-u*c+h)),g=v>0?-c:Math.min(Math.max(-c,-m),c),x=-v*v+g*(g+2*m)+p):g<=M?(v=0,g=Math.min(Math.max(-c,-m),c),x=g*(g+2*m)+p):(v=Math.max(0,-(u*c+h)),g=v>0?c:Math.min(Math.max(-c,-m),c),x=-v*v+g*(g+2*m)+p);else g=u>0?-c:c,v=Math.max(0,-(u*g+h)),x=-v*v+g*(g+2*m)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(Gh).addScaledVector(Au,g),x}intersectSphere(e,n){ds.subVectors(e.center,this.origin);const a=ds.dot(this.direction),o=ds.dot(ds)-a*a,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),h=a-u,m=a+u;return m<0?null:h<0?this.at(m,n):this.at(h,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/n;return a>=0?a:null}intersectPlane(e,n){const a=this.distanceToPlane(e);return a===null?null:this.at(a,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let a,o,c,u,h,m;const p=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,g=this.origin;return p>=0?(a=(e.min.x-g.x)*p,o=(e.max.x-g.x)*p):(a=(e.max.x-g.x)*p,o=(e.min.x-g.x)*p),_>=0?(c=(e.min.y-g.y)*_,u=(e.max.y-g.y)*_):(c=(e.max.y-g.y)*_,u=(e.min.y-g.y)*_),a>u||c>o||((c>a||isNaN(a))&&(a=c),(u<o||isNaN(o))&&(o=u),v>=0?(h=(e.min.z-g.z)*v,m=(e.max.z-g.z)*v):(h=(e.max.z-g.z)*v,m=(e.min.z-g.z)*v),a>m||h>o)||((h>a||a!==a)&&(a=h),(m<o||o!==o)&&(o=m),o<0)?null:this.at(a>=0?a:o,n)}intersectsBox(e){return this.intersectBox(e,ds)!==null}intersectTriangle(e,n,a,o,c){kh.subVectors(n,e),wu.subVectors(a,e),Xh.crossVectors(kh,wu);let u=this.direction.dot(Xh),h;if(u>0){if(o)return null;h=1}else if(u<0)h=-1,u=-u;else return null;Ys.subVectors(this.origin,e);const m=h*this.direction.dot(wu.crossVectors(Ys,wu));if(m<0)return null;const p=h*this.direction.dot(kh.cross(Ys));if(p<0||m+p>u)return null;const _=-h*Ys.dot(Xh);return _<0?null:this.at(_/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Oo extends lc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tr,this.combine=Wx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const O_=new In,Mr=new pm,Ru=new _f,P_=new te,Cu=new te,Du=new te,Lu=new te,Wh=new te,Nu=new te,I_=new te,Uu=new te;class Hn extends Hi{constructor(e=new ha,n=new Oo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,n){const a=this.geometry,o=a.attributes.position,c=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(o,e);const h=this.morphTargetInfluences;if(c&&h){Nu.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=h[m],v=c[m];_!==0&&(Wh.fromBufferAttribute(v,e),u?Nu.addScaledVector(Wh,_):Nu.addScaledVector(Wh.sub(n),_))}n.add(Nu)}return n}raycast(e,n){const a=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Ru.copy(a.boundingSphere),Ru.applyMatrix4(c),Mr.copy(e.ray).recast(e.near),!(Ru.containsPoint(Mr.origin)===!1&&(Mr.intersectSphere(Ru,P_)===null||Mr.origin.distanceToSquared(P_)>(e.far-e.near)**2))&&(O_.copy(c).invert(),Mr.copy(e.ray).applyMatrix4(O_),!(a.boundingBox!==null&&Mr.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,n,Mr)))}_computeIntersections(e,n,a){let o;const c=this.geometry,u=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,v=c.attributes.normal,g=c.groups,x=c.drawRange;if(h!==null)if(Array.isArray(u))for(let M=0,w=g.length;M<w;M++){const S=g[M],y=u[S.materialIndex],F=Math.max(S.start,x.start),O=Math.min(h.count,Math.min(S.start+S.count,x.start+x.count));for(let R=F,I=O;R<I;R+=3){const N=h.getX(R),H=h.getX(R+1),T=h.getX(R+2);o=Ou(this,y,e,a,p,_,v,N,H,T),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const M=Math.max(0,x.start),w=Math.min(h.count,x.start+x.count);for(let S=M,y=w;S<y;S+=3){const F=h.getX(S),O=h.getX(S+1),R=h.getX(S+2);o=Ou(this,u,e,a,p,_,v,F,O,R),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}else if(m!==void 0)if(Array.isArray(u))for(let M=0,w=g.length;M<w;M++){const S=g[M],y=u[S.materialIndex],F=Math.max(S.start,x.start),O=Math.min(m.count,Math.min(S.start+S.count,x.start+x.count));for(let R=F,I=O;R<I;R+=3){const N=R,H=R+1,T=R+2;o=Ou(this,y,e,a,p,_,v,N,H,T),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const M=Math.max(0,x.start),w=Math.min(m.count,x.start+x.count);for(let S=M,y=w;S<y;S+=3){const F=S,O=S+1,R=S+2;o=Ou(this,u,e,a,p,_,v,F,O,R),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}}}function mb(s,e,n,a,o,c,u,h){let m;if(e.side===zi?m=a.intersectTriangle(u,c,o,!0,h):m=a.intersectTriangle(o,c,u,e.side===$s,h),m===null)return null;Uu.copy(h),Uu.applyMatrix4(s.matrixWorld);const p=n.ray.origin.distanceTo(Uu);return p<n.near||p>n.far?null:{distance:p,point:Uu.clone(),object:s}}function Ou(s,e,n,a,o,c,u,h,m,p){s.getVertexPosition(h,Cu),s.getVertexPosition(m,Du),s.getVertexPosition(p,Lu);const _=mb(s,e,n,a,Cu,Du,Lu,I_);if(_){const v=new te;Sa.getBarycoord(I_,Cu,Du,Lu,v),o&&(_.uv=Sa.getInterpolatedAttribute(o,h,m,p,v,new dt)),c&&(_.uv1=Sa.getInterpolatedAttribute(c,h,m,p,v,new dt)),u&&(_.normal=Sa.getInterpolatedAttribute(u,h,m,p,v,new te),_.normal.dot(a.direction)>0&&_.normal.multiplyScalar(-1));const g={a:h,b:m,c:p,normal:new te,materialIndex:0};Sa.getNormal(Cu,Du,Lu,g.normal),_.face=g,_.barycoord=v}return _}class gb extends vi{constructor(e=null,n=1,a=1,o,c,u,h,m,p=gi,_=gi,v,g){super(null,u,h,m,p,_,o,c,v,g),this.isDataTexture=!0,this.image={data:e,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const qh=new te,vb=new te,_b=new Dt;class br{constructor(e=new te(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,a,o){return this.normal.set(e,n,a),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,a){const o=qh.subVectors(a,n).cross(vb.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,a=!0){const o=e.delta(qh),c=this.normal.dot(o);if(c===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/c;return a===!0&&(u<0||u>1)?null:n.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return n<0&&a>0||a<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const a=n||_b.getNormalMatrix(e),o=this.coplanarPoint(qh).applyMatrix4(e),c=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Er=new _f,xb=new dt(.5,.5),Pu=new te;class dy{constructor(e=new br,n=new br,a=new br,o=new br,c=new br,u=new br){this.planes=[e,n,a,o,c,u]}set(e,n,a,o,c,u){const h=this.planes;return h[0].copy(e),h[1].copy(n),h[2].copy(a),h[3].copy(o),h[4].copy(c),h[5].copy(u),this}copy(e){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,n=Ia,a=!1){const o=this.planes,c=e.elements,u=c[0],h=c[1],m=c[2],p=c[3],_=c[4],v=c[5],g=c[6],x=c[7],M=c[8],w=c[9],S=c[10],y=c[11],F=c[12],O=c[13],R=c[14],I=c[15];if(o[0].setComponents(p-u,x-_,y-M,I-F).normalize(),o[1].setComponents(p+u,x+_,y+M,I+F).normalize(),o[2].setComponents(p+h,x+v,y+w,I+O).normalize(),o[3].setComponents(p-h,x-v,y-w,I-O).normalize(),a)o[4].setComponents(m,g,S,R).normalize(),o[5].setComponents(p-m,x-g,y-S,I-R).normalize();else if(o[4].setComponents(p-m,x-g,y-S,I-R).normalize(),n===Ia)o[5].setComponents(p+m,x+g,y+S,I+R).normalize();else if(n===uf)o[5].setComponents(m,g,S,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Er.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Er)}intersectsSprite(e){Er.center.set(0,0,0);const n=xb.distanceTo(e.center);return Er.radius=.7071067811865476+n,Er.applyMatrix4(e.matrixWorld),this.intersectsSphere(Er)}intersectsSphere(e){const n=this.planes,a=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let a=0;a<6;a++){const o=n[a];if(Pu.x=o.normal.x>0?e.max.x:e.min.x,Pu.y=o.normal.y>0?e.max.y:e.min.y,Pu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Pu)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class yb extends lc{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ff=new te,df=new te,F_=new In,Pl=new pm,Iu=new _f,Yh=new te,B_=new te;class Sb extends Hi{constructor(e=new ha,n=new yb){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,a=[0];for(let o=1,c=n.count;o<c;o++)ff.fromBufferAttribute(n,o-1),df.fromBufferAttribute(n,o),a[o]=a[o-1],a[o]+=ff.distanceTo(df);e.setAttribute("lineDistance",new Ai(a,1))}else xt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const a=this.geometry,o=this.matrixWorld,c=e.params.Line.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Iu.copy(a.boundingSphere),Iu.applyMatrix4(o),Iu.radius+=c,e.ray.intersectsSphere(Iu)===!1)return;F_.copy(o).invert(),Pl.copy(e.ray).applyMatrix4(F_);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,_=a.index,g=a.attributes.position;if(_!==null){const x=Math.max(0,u.start),M=Math.min(_.count,u.start+u.count);for(let w=x,S=M-1;w<S;w+=p){const y=_.getX(w),F=_.getX(w+1),O=Fu(this,e,Pl,m,y,F,w);O&&n.push(O)}if(this.isLineLoop){const w=_.getX(M-1),S=_.getX(x),y=Fu(this,e,Pl,m,w,S,M-1);y&&n.push(y)}}else{const x=Math.max(0,u.start),M=Math.min(g.count,u.start+u.count);for(let w=x,S=M-1;w<S;w+=p){const y=Fu(this,e,Pl,m,w,w+1,w);y&&n.push(y)}if(this.isLineLoop){const w=Fu(this,e,Pl,m,M-1,x,M-1);w&&n.push(w)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Fu(s,e,n,a,o,c,u){const h=s.geometry.attributes.position;if(ff.fromBufferAttribute(h,o),df.fromBufferAttribute(h,c),n.distanceSqToSegment(ff,df,Yh,B_)>a)return;Yh.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(Yh);if(!(p<e.near||p>e.far))return{distance:p,point:B_.clone().applyMatrix4(s.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:s}}class hy extends vi{constructor(e=[],n=Cr,a,o,c,u,h,m,p,_){super(e,n,a,o,c,u,h,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class py extends vi{constructor(e,n,a,o,c,u,h,m,p){super(e,n,a,o,c,u,h,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Fo extends vi{constructor(e,n,a=Ha,o,c,u,h=gi,m=gi,p,_=vs,v=1){if(_!==vs&&_!==Rr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:n,depth:v};super(g,o,c,u,h,m,_,a,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new dm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Mb extends Fo{constructor(e,n=Ha,a=Cr,o,c,u=gi,h=gi,m,p=vs){const _={width:e,height:e,depth:1},v=[_,_,_,_,_,_];super(e,e,n,a,o,c,u,h,m,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class my extends vi{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class cc extends ha{constructor(e=1,n=1,a=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:a,widthSegments:o,heightSegments:c,depthSegments:u};const h=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const m=[],p=[],_=[],v=[];let g=0,x=0;M("z","y","x",-1,-1,a,n,e,u,c,0),M("z","y","x",1,-1,a,n,-e,u,c,1),M("x","z","y",1,1,e,a,n,o,u,2),M("x","z","y",1,-1,e,a,-n,o,u,3),M("x","y","z",1,-1,e,n,a,o,c,4),M("x","y","z",-1,-1,e,n,-a,o,c,5),this.setIndex(m),this.setAttribute("position",new Ai(p,3)),this.setAttribute("normal",new Ai(_,3)),this.setAttribute("uv",new Ai(v,2));function M(w,S,y,F,O,R,I,N,H,T,D){const G=R/H,k=I/T,Z=R/2,ce=I/2,ie=N/2,K=H+1,V=T+1;let X=0,se=0;const pe=new te;for(let Ce=0;Ce<V;Ce++){const B=Ce*k-ce;for(let ee=0;ee<K;ee++){const De=ee*G-Z;pe[w]=De*F,pe[S]=B*O,pe[y]=ie,p.push(pe.x,pe.y,pe.z),pe[w]=0,pe[S]=0,pe[y]=N>0?1:-1,_.push(pe.x,pe.y,pe.z),v.push(ee/H),v.push(1-Ce/T),X+=1}}for(let Ce=0;Ce<T;Ce++)for(let B=0;B<H;B++){const ee=g+B+K*Ce,De=g+B+K*(Ce+1),Te=g+(B+1)+K*(Ce+1),qe=g+(B+1)+K*Ce;m.push(ee,De,qe),m.push(De,Te,qe),se+=6}h.addGroup(x,se,D),x+=se,g+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class mm extends ha{constructor(e=1,n=1,a=1,o=32,c=1,u=!1,h=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:a,radialSegments:o,heightSegments:c,openEnded:u,thetaStart:h,thetaLength:m};const p=this;o=Math.floor(o),c=Math.floor(c);const _=[],v=[],g=[],x=[];let M=0;const w=[],S=a/2;let y=0;F(),u===!1&&(e>0&&O(!0),n>0&&O(!1)),this.setIndex(_),this.setAttribute("position",new Ai(v,3)),this.setAttribute("normal",new Ai(g,3)),this.setAttribute("uv",new Ai(x,2));function F(){const R=new te,I=new te;let N=0;const H=(n-e)/a;for(let T=0;T<=c;T++){const D=[],G=T/c,k=G*(n-e)+e;for(let Z=0;Z<=o;Z++){const ce=Z/o,ie=ce*m+h,K=Math.sin(ie),V=Math.cos(ie);I.x=k*K,I.y=-G*a+S,I.z=k*V,v.push(I.x,I.y,I.z),R.set(K,H,V).normalize(),g.push(R.x,R.y,R.z),x.push(ce,1-G),D.push(M++)}w.push(D)}for(let T=0;T<o;T++)for(let D=0;D<c;D++){const G=w[D][T],k=w[D+1][T],Z=w[D+1][T+1],ce=w[D][T+1];(e>0||D!==0)&&(_.push(G,k,ce),N+=3),(n>0||D!==c-1)&&(_.push(k,Z,ce),N+=3)}p.addGroup(y,N,0),y+=N}function O(R){const I=M,N=new dt,H=new te;let T=0;const D=R===!0?e:n,G=R===!0?1:-1;for(let Z=1;Z<=o;Z++)v.push(0,S*G,0),g.push(0,G,0),x.push(.5,.5),M++;const k=M;for(let Z=0;Z<=o;Z++){const ie=Z/o*m+h,K=Math.cos(ie),V=Math.sin(ie);H.x=D*V,H.y=S*G,H.z=D*K,v.push(H.x,H.y,H.z),g.push(0,G,0),N.x=K*.5+.5,N.y=V*.5*G+.5,x.push(N.x,N.y),M++}for(let Z=0;Z<o;Z++){const ce=I+Z,ie=k+Z;R===!0?_.push(ie,ie+1,ce):_.push(ie+1,ie,ce),T+=3}p.addGroup(y,T,R===!0?1:2),y+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mm(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ga{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){xt("Curve: .getPoint() not implemented.")}getPointAt(e,n){const a=this.getUtoTmapping(e);return this.getPoint(a,n)}getPoints(e=5){const n=[];for(let a=0;a<=e;a++)n.push(this.getPoint(a/e));return n}getSpacedPoints(e=5){const n=[];for(let a=0;a<=e;a++)n.push(this.getPointAt(a/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let a,o=this.getPoint(0),c=0;n.push(0);for(let u=1;u<=e;u++)a=this.getPoint(u/e),c+=a.distanceTo(o),n.push(c),o=a;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const a=this.getLengths();let o=0;const c=a.length;let u;n?u=n:u=e*a[c-1];let h=0,m=c-1,p;for(;h<=m;)if(o=Math.floor(h+(m-h)/2),p=a[o]-u,p<0)h=o+1;else if(p>0)m=o-1;else{m=o;break}if(o=m,a[o]===u)return o/(c-1);const _=a[o],g=a[o+1]-_,x=(u-_)/g;return(o+x)/(c-1)}getTangent(e,n){let o=e-1e-4,c=e+1e-4;o<0&&(o=0),c>1&&(c=1);const u=this.getPoint(o),h=this.getPoint(c),m=n||(u.isVector2?new dt:new te);return m.copy(h).sub(u).normalize(),m}getTangentAt(e,n){const a=this.getUtoTmapping(e);return this.getTangent(a,n)}computeFrenetFrames(e,n=!1){const a=new te,o=[],c=[],u=[],h=new te,m=new In;for(let x=0;x<=e;x++){const M=x/e;o[x]=this.getTangentAt(M,new te)}c[0]=new te,u[0]=new te;let p=Number.MAX_VALUE;const _=Math.abs(o[0].x),v=Math.abs(o[0].y),g=Math.abs(o[0].z);_<=p&&(p=_,a.set(1,0,0)),v<=p&&(p=v,a.set(0,1,0)),g<=p&&a.set(0,0,1),h.crossVectors(o[0],a).normalize(),c[0].crossVectors(o[0],h),u[0].crossVectors(o[0],c[0]);for(let x=1;x<=e;x++){if(c[x]=c[x-1].clone(),u[x]=u[x-1].clone(),h.crossVectors(o[x-1],o[x]),h.length()>Number.EPSILON){h.normalize();const M=Math.acos(zt(o[x-1].dot(o[x]),-1,1));c[x].applyMatrix4(m.makeRotationAxis(h,M))}u[x].crossVectors(o[x],c[x])}if(n===!0){let x=Math.acos(zt(c[0].dot(c[e]),-1,1));x/=e,o[0].dot(h.crossVectors(c[0],c[e]))>0&&(x=-x);for(let M=1;M<=e;M++)c[M].applyMatrix4(m.makeRotationAxis(o[M],x*M)),u[M].crossVectors(o[M],c[M])}return{tangents:o,normals:c,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class gm extends Ga{constructor(e=0,n=0,a=1,o=1,c=0,u=Math.PI*2,h=!1,m=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=a,this.yRadius=o,this.aStartAngle=c,this.aEndAngle=u,this.aClockwise=h,this.aRotation=m}getPoint(e,n=new dt){const a=n,o=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const u=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=o;for(;c>o;)c-=o;c<Number.EPSILON&&(u?c=0:c=o),this.aClockwise===!0&&!u&&(c===o?c=-o:c=c-o);const h=this.aStartAngle+e*c;let m=this.aX+this.xRadius*Math.cos(h),p=this.aY+this.yRadius*Math.sin(h);if(this.aRotation!==0){const _=Math.cos(this.aRotation),v=Math.sin(this.aRotation),g=m-this.aX,x=p-this.aY;m=g*_-x*v+this.aX,p=g*v+x*_+this.aY}return a.set(m,p)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Eb extends gm{constructor(e,n,a,o,c,u){super(e,n,a,a,o,c,u),this.isArcCurve=!0,this.type="ArcCurve"}}function vm(){let s=0,e=0,n=0,a=0;function o(c,u,h,m){s=c,e=h,n=-3*c+3*u-2*h-m,a=2*c-2*u+h+m}return{initCatmullRom:function(c,u,h,m,p){o(u,h,p*(h-c),p*(m-u))},initNonuniformCatmullRom:function(c,u,h,m,p,_,v){let g=(u-c)/p-(h-c)/(p+_)+(h-u)/_,x=(h-u)/_-(m-u)/(_+v)+(m-h)/v;g*=_,x*=_,o(u,h,g,x)},calc:function(c){const u=c*c,h=u*c;return s+e*c+n*u+a*h}}}const z_=new te,H_=new te,Zh=new vm,jh=new vm,Kh=new vm;class bb extends Ga{constructor(e=[],n=!1,a="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=a,this.tension=o}getPoint(e,n=new te){const a=n,o=this.points,c=o.length,u=(c-(this.closed?0:1))*e;let h=Math.floor(u),m=u-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/c)+1)*c:m===0&&h===c-1&&(h=c-2,m=1);let p,_;this.closed||h>0?p=o[(h-1)%c]:(H_.subVectors(o[0],o[1]).add(o[0]),p=H_);const v=o[h%c],g=o[(h+1)%c];if(this.closed||h+2<c?_=o[(h+2)%c]:(z_.subVectors(o[c-1],o[c-2]).add(o[c-1]),_=z_),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let M=Math.pow(p.distanceToSquared(v),x),w=Math.pow(v.distanceToSquared(g),x),S=Math.pow(g.distanceToSquared(_),x);w<1e-4&&(w=1),M<1e-4&&(M=w),S<1e-4&&(S=w),Zh.initNonuniformCatmullRom(p.x,v.x,g.x,_.x,M,w,S),jh.initNonuniformCatmullRom(p.y,v.y,g.y,_.y,M,w,S),Kh.initNonuniformCatmullRom(p.z,v.z,g.z,_.z,M,w,S)}else this.curveType==="catmullrom"&&(Zh.initCatmullRom(p.x,v.x,g.x,_.x,this.tension),jh.initCatmullRom(p.y,v.y,g.y,_.y,this.tension),Kh.initCatmullRom(p.z,v.z,g.z,_.z,this.tension));return a.set(Zh.calc(m),jh.calc(m),Kh.calc(m)),a}copy(e){super.copy(e),this.points=[];for(let n=0,a=e.points.length;n<a;n++){const o=e.points[n];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,a=this.points.length;n<a;n++){const o=this.points[n];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,a=e.points.length;n<a;n++){const o=e.points[n];this.points.push(new te().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function V_(s,e,n,a,o){const c=(a-e)*.5,u=(o-n)*.5,h=s*s,m=s*h;return(2*n-2*a+c+u)*m+(-3*n+3*a-2*c-u)*h+c*s+n}function Tb(s,e){const n=1-s;return n*n*e}function Ab(s,e){return 2*(1-s)*s*e}function wb(s,e){return s*s*e}function ql(s,e,n,a){return Tb(s,e)+Ab(s,n)+wb(s,a)}function Rb(s,e){const n=1-s;return n*n*n*e}function Cb(s,e){const n=1-s;return 3*n*n*s*e}function Db(s,e){return 3*(1-s)*s*s*e}function Lb(s,e){return s*s*s*e}function Yl(s,e,n,a,o){return Rb(s,e)+Cb(s,n)+Db(s,a)+Lb(s,o)}class gy extends Ga{constructor(e=new dt,n=new dt,a=new dt,o=new dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=a,this.v3=o}getPoint(e,n=new dt){const a=n,o=this.v0,c=this.v1,u=this.v2,h=this.v3;return a.set(Yl(e,o.x,c.x,u.x,h.x),Yl(e,o.y,c.y,u.y,h.y)),a}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Nb extends Ga{constructor(e=new te,n=new te,a=new te,o=new te){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=a,this.v3=o}getPoint(e,n=new te){const a=n,o=this.v0,c=this.v1,u=this.v2,h=this.v3;return a.set(Yl(e,o.x,c.x,u.x,h.x),Yl(e,o.y,c.y,u.y,h.y),Yl(e,o.z,c.z,u.z,h.z)),a}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class vy extends Ga{constructor(e=new dt,n=new dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new dt){const a=n;return e===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(e).add(this.v1)),a}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new dt){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ub extends Ga{constructor(e=new te,n=new te){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new te){const a=n;return e===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(e).add(this.v1)),a}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new te){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _y extends Ga{constructor(e=new dt,n=new dt,a=new dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=a}getPoint(e,n=new dt){const a=n,o=this.v0,c=this.v1,u=this.v2;return a.set(ql(e,o.x,c.x,u.x),ql(e,o.y,c.y,u.y)),a}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ob extends Ga{constructor(e=new te,n=new te,a=new te){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=a}getPoint(e,n=new te){const a=n,o=this.v0,c=this.v1,u=this.v2;return a.set(ql(e,o.x,c.x,u.x),ql(e,o.y,c.y,u.y),ql(e,o.z,c.z,u.z)),a}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class xy extends Ga{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new dt){const a=n,o=this.points,c=(o.length-1)*e,u=Math.floor(c),h=c-u,m=o[u===0?u:u-1],p=o[u],_=o[u>o.length-2?o.length-1:u+1],v=o[u>o.length-3?o.length-1:u+2];return a.set(V_(h,m.x,p.x,_.x,v.x),V_(h,m.y,p.y,_.y,v.y)),a}copy(e){super.copy(e),this.points=[];for(let n=0,a=e.points.length;n<a;n++){const o=e.points[n];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,a=this.points.length;n<a;n++){const o=this.points[n];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,a=e.points.length;n<a;n++){const o=e.points[n];this.points.push(new dt().fromArray(o))}return this}}var G_=Object.freeze({__proto__:null,ArcCurve:Eb,CatmullRomCurve3:bb,CubicBezierCurve:gy,CubicBezierCurve3:Nb,EllipseCurve:gm,LineCurve:vy,LineCurve3:Ub,QuadraticBezierCurve:_y,QuadraticBezierCurve3:Ob,SplineCurve:xy});class Pb extends Ga{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const a=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new G_[a](n,e))}return this}getPoint(e,n){const a=e*this.getLength(),o=this.getCurveLengths();let c=0;for(;c<o.length;){if(o[c]>=a){const u=o[c]-a,h=this.curves[c],m=h.getLength(),p=m===0?0:1-u/m;return h.getPointAt(p,n)}c++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let a=0,o=this.curves.length;a<o;a++)n+=this.curves[a].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let a=0;a<=e;a++)n.push(this.getPoint(a/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let a;for(let o=0,c=this.curves;o<c.length;o++){const u=c[o],h=u.isEllipseCurve?e*2:u.isLineCurve||u.isLineCurve3?1:u.isSplineCurve?e*u.points.length:e,m=u.getPoints(h);for(let p=0;p<m.length;p++){const _=m[p];a&&a.equals(_)||(n.push(_),a=_)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,a=e.curves.length;n<a;n++){const o=e.curves[n];this.curves.push(o.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,a=this.curves.length;n<a;n++){const o=this.curves[n];e.curves.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,a=e.curves.length;n<a;n++){const o=e.curves[n];this.curves.push(new G_[o.type]().fromJSON(o))}return this}}class k_ extends Pb{constructor(e){super(),this.type="Path",this.currentPoint=new dt,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,a=e.length;n<a;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const a=new vy(this.currentPoint.clone(),new dt(e,n));return this.curves.push(a),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,a,o){const c=new _y(this.currentPoint.clone(),new dt(e,n),new dt(a,o));return this.curves.push(c),this.currentPoint.set(a,o),this}bezierCurveTo(e,n,a,o,c,u){const h=new gy(this.currentPoint.clone(),new dt(e,n),new dt(a,o),new dt(c,u));return this.curves.push(h),this.currentPoint.set(c,u),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),a=new xy(n);return this.curves.push(a),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,a,o,c,u){const h=this.currentPoint.x,m=this.currentPoint.y;return this.absarc(e+h,n+m,a,o,c,u),this}absarc(e,n,a,o,c,u){return this.absellipse(e,n,a,a,o,c,u),this}ellipse(e,n,a,o,c,u,h,m){const p=this.currentPoint.x,_=this.currentPoint.y;return this.absellipse(e+p,n+_,a,o,c,u,h,m),this}absellipse(e,n,a,o,c,u,h,m){const p=new gm(e,n,a,o,c,u,h,m);if(this.curves.length>0){const v=p.getPoint(0);v.equals(this.currentPoint)||this.lineTo(v.x,v.y)}this.curves.push(p);const _=p.getPoint(1);return this.currentPoint.copy(_),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class yy extends k_{constructor(e){super(e),this.uuid=Or(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let a=0,o=this.holes.length;a<o;a++)n[a]=this.holes[a].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,a=e.holes.length;n<a;n++){const o=e.holes[n];this.holes.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,a=this.holes.length;n<a;n++){const o=this.holes[n];e.holes.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,a=e.holes.length;n<a;n++){const o=e.holes[n];this.holes.push(new k_().fromJSON(o))}return this}}function Ib(s,e,n=2){const a=e&&e.length,o=a?e[0]*n:s.length;let c=Sy(s,0,o,n,!0);const u=[];if(!c||c.next===c.prev)return u;let h,m,p;if(a&&(c=Vb(s,e,c,n)),s.length>80*n){h=s[0],m=s[1];let _=h,v=m;for(let g=n;g<o;g+=n){const x=s[g],M=s[g+1];x<h&&(h=x),M<m&&(m=M),x>_&&(_=x),M>v&&(v=M)}p=Math.max(_-h,v-m),p=p!==0?32767/p:0}return ac(c,u,n,h,m,p,0),u}function Sy(s,e,n,a,o){let c;if(o===Jb(s,e,n,a)>0)for(let u=e;u<n;u+=a)c=X_(u/a|0,s[u],s[u+1],c);else for(let u=n-a;u>=e;u-=a)c=X_(u/a|0,s[u],s[u+1],c);return c&&Bo(c,c.next)&&(rc(c),c=c.next),c}function Lr(s,e){if(!s)return s;e||(e=s);let n=s,a;do if(a=!1,!n.steiner&&(Bo(n,n.next)||Pn(n.prev,n,n.next)===0)){if(rc(n),n=e=n.prev,n===n.next)break;a=!0}else n=n.next;while(a||n!==e);return e}function ac(s,e,n,a,o,c,u){if(!s)return;!u&&c&&qb(s,a,o,c);let h=s;for(;s.prev!==s.next;){const m=s.prev,p=s.next;if(c?Bb(s,a,o,c):Fb(s)){e.push(m.i,s.i,p.i),rc(s),s=p.next,h=p.next;continue}if(s=p,s===h){u?u===1?(s=zb(Lr(s),e),ac(s,e,n,a,o,c,2)):u===2&&Hb(s,e,n,a,o,c):ac(Lr(s),e,n,a,o,c,1);break}}}function Fb(s){const e=s.prev,n=s,a=s.next;if(Pn(e,n,a)>=0)return!1;const o=e.x,c=n.x,u=a.x,h=e.y,m=n.y,p=a.y,_=Math.min(o,c,u),v=Math.min(h,m,p),g=Math.max(o,c,u),x=Math.max(h,m,p);let M=a.next;for(;M!==e;){if(M.x>=_&&M.x<=g&&M.y>=v&&M.y<=x&&Vl(o,h,c,m,u,p,M.x,M.y)&&Pn(M.prev,M,M.next)>=0)return!1;M=M.next}return!0}function Bb(s,e,n,a){const o=s.prev,c=s,u=s.next;if(Pn(o,c,u)>=0)return!1;const h=o.x,m=c.x,p=u.x,_=o.y,v=c.y,g=u.y,x=Math.min(h,m,p),M=Math.min(_,v,g),w=Math.max(h,m,p),S=Math.max(_,v,g),y=Zp(x,M,e,n,a),F=Zp(w,S,e,n,a);let O=s.prevZ,R=s.nextZ;for(;O&&O.z>=y&&R&&R.z<=F;){if(O.x>=x&&O.x<=w&&O.y>=M&&O.y<=S&&O!==o&&O!==u&&Vl(h,_,m,v,p,g,O.x,O.y)&&Pn(O.prev,O,O.next)>=0||(O=O.prevZ,R.x>=x&&R.x<=w&&R.y>=M&&R.y<=S&&R!==o&&R!==u&&Vl(h,_,m,v,p,g,R.x,R.y)&&Pn(R.prev,R,R.next)>=0))return!1;R=R.nextZ}for(;O&&O.z>=y;){if(O.x>=x&&O.x<=w&&O.y>=M&&O.y<=S&&O!==o&&O!==u&&Vl(h,_,m,v,p,g,O.x,O.y)&&Pn(O.prev,O,O.next)>=0)return!1;O=O.prevZ}for(;R&&R.z<=F;){if(R.x>=x&&R.x<=w&&R.y>=M&&R.y<=S&&R!==o&&R!==u&&Vl(h,_,m,v,p,g,R.x,R.y)&&Pn(R.prev,R,R.next)>=0)return!1;R=R.nextZ}return!0}function zb(s,e){let n=s;do{const a=n.prev,o=n.next.next;!Bo(a,o)&&Ey(a,n,n.next,o)&&sc(a,o)&&sc(o,a)&&(e.push(a.i,n.i,o.i),rc(n),rc(n.next),n=s=o),n=n.next}while(n!==s);return Lr(n)}function Hb(s,e,n,a,o,c){let u=s;do{let h=u.next.next;for(;h!==u.prev;){if(u.i!==h.i&&jb(u,h)){let m=by(u,h);u=Lr(u,u.next),m=Lr(m,m.next),ac(u,e,n,a,o,c,0),ac(m,e,n,a,o,c,0);return}h=h.next}u=u.next}while(u!==s)}function Vb(s,e,n,a){const o=[];for(let c=0,u=e.length;c<u;c++){const h=e[c]*a,m=c<u-1?e[c+1]*a:s.length,p=Sy(s,h,m,a,!1);p===p.next&&(p.steiner=!0),o.push(Zb(p))}o.sort(Gb);for(let c=0;c<o.length;c++)n=kb(o[c],n);return n}function Gb(s,e){let n=s.x-e.x;if(n===0&&(n=s.y-e.y,n===0)){const a=(s.next.y-s.y)/(s.next.x-s.x),o=(e.next.y-e.y)/(e.next.x-e.x);n=a-o}return n}function kb(s,e){const n=Xb(s,e);if(!n)return e;const a=by(n,s);return Lr(a,a.next),Lr(n,n.next)}function Xb(s,e){let n=e;const a=s.x,o=s.y;let c=-1/0,u;if(Bo(s,n))return n;do{if(Bo(s,n.next))return n.next;if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const v=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(v<=a&&v>c&&(c=v,u=n.x<n.next.x?n:n.next,v===a))return u}n=n.next}while(n!==e);if(!u)return null;const h=u,m=u.x,p=u.y;let _=1/0;n=u;do{if(a>=n.x&&n.x>=m&&a!==n.x&&My(o<p?a:c,o,m,p,o<p?c:a,o,n.x,n.y)){const v=Math.abs(o-n.y)/(a-n.x);sc(n,s)&&(v<_||v===_&&(n.x>u.x||n.x===u.x&&Wb(u,n)))&&(u=n,_=v)}n=n.next}while(n!==h);return u}function Wb(s,e){return Pn(s.prev,s,e.prev)<0&&Pn(e.next,s,s.next)<0}function qb(s,e,n,a){let o=s;do o.z===0&&(o.z=Zp(o.x,o.y,e,n,a)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next;while(o!==s);o.prevZ.nextZ=null,o.prevZ=null,Yb(o)}function Yb(s){let e,n=1;do{let a=s,o;s=null;let c=null;for(e=0;a;){e++;let u=a,h=0;for(let p=0;p<n&&(h++,u=u.nextZ,!!u);p++);let m=n;for(;h>0||m>0&&u;)h!==0&&(m===0||!u||a.z<=u.z)?(o=a,a=a.nextZ,h--):(o=u,u=u.nextZ,m--),c?c.nextZ=o:s=o,o.prevZ=c,c=o;a=u}c.nextZ=null,n*=2}while(e>1);return s}function Zp(s,e,n,a,o){return s=(s-n)*o|0,e=(e-a)*o|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Zb(s){let e=s,n=s;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==s);return n}function My(s,e,n,a,o,c,u,h){return(o-u)*(e-h)>=(s-u)*(c-h)&&(s-u)*(a-h)>=(n-u)*(e-h)&&(n-u)*(c-h)>=(o-u)*(a-h)}function Vl(s,e,n,a,o,c,u,h){return!(s===u&&e===h)&&My(s,e,n,a,o,c,u,h)}function jb(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Kb(s,e)&&(sc(s,e)&&sc(e,s)&&Qb(s,e)&&(Pn(s.prev,s,e.prev)||Pn(s,e.prev,e))||Bo(s,e)&&Pn(s.prev,s,s.next)>0&&Pn(e.prev,e,e.next)>0)}function Pn(s,e,n){return(e.y-s.y)*(n.x-e.x)-(e.x-s.x)*(n.y-e.y)}function Bo(s,e){return s.x===e.x&&s.y===e.y}function Ey(s,e,n,a){const o=zu(Pn(s,e,n)),c=zu(Pn(s,e,a)),u=zu(Pn(n,a,s)),h=zu(Pn(n,a,e));return!!(o!==c&&u!==h||o===0&&Bu(s,n,e)||c===0&&Bu(s,a,e)||u===0&&Bu(n,s,a)||h===0&&Bu(n,e,a))}function Bu(s,e,n){return e.x<=Math.max(s.x,n.x)&&e.x>=Math.min(s.x,n.x)&&e.y<=Math.max(s.y,n.y)&&e.y>=Math.min(s.y,n.y)}function zu(s){return s>0?1:s<0?-1:0}function Kb(s,e){let n=s;do{if(n.i!==s.i&&n.next.i!==s.i&&n.i!==e.i&&n.next.i!==e.i&&Ey(n,n.next,s,e))return!0;n=n.next}while(n!==s);return!1}function sc(s,e){return Pn(s.prev,s,s.next)<0?Pn(s,e,s.next)>=0&&Pn(s,s.prev,e)>=0:Pn(s,e,s.prev)<0||Pn(s,s.next,e)<0}function Qb(s,e){let n=s,a=!1;const o=(s.x+e.x)/2,c=(s.y+e.y)/2;do n.y>c!=n.next.y>c&&n.next.y!==n.y&&o<(n.next.x-n.x)*(c-n.y)/(n.next.y-n.y)+n.x&&(a=!a),n=n.next;while(n!==s);return a}function by(s,e){const n=jp(s.i,s.x,s.y),a=jp(e.i,e.x,e.y),o=s.next,c=e.prev;return s.next=e,e.prev=s,n.next=o,o.prev=n,a.next=n,n.prev=a,c.next=a,a.prev=c,a}function X_(s,e,n,a){const o=jp(s,e,n);return a?(o.next=a.next,o.prev=a,a.next.prev=o,a.next=o):(o.prev=o,o.next=o),o}function rc(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function jp(s,e,n){return{i:s,x:e,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Jb(s,e,n,a){let o=0;for(let c=e,u=n-a;c<n;c+=a)o+=(s[u]-s[c])*(s[c+1]+s[u+1]),u=c;return o}class $b{static triangulate(e,n,a=2){return Ib(e,n,a)}}class Zl{static area(e){const n=e.length;let a=0;for(let o=n-1,c=0;c<n;o=c++)a+=e[o].x*e[c].y-e[c].x*e[o].y;return a*.5}static isClockWise(e){return Zl.area(e)<0}static triangulateShape(e,n){const a=[],o=[],c=[];W_(e),q_(a,e);let u=e.length;n.forEach(W_);for(let m=0;m<n.length;m++)o.push(u),u+=n[m].length,q_(a,n[m]);const h=$b.triangulate(a,o);for(let m=0;m<h.length;m+=3)c.push(h.slice(m,m+3));return c}}function W_(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function q_(s,e){for(let n=0;n<e.length;n++)s.push(e[n].x),s.push(e[n].y)}class uc extends ha{constructor(e=1,n=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:a,heightSegments:o};const c=e/2,u=n/2,h=Math.floor(a),m=Math.floor(o),p=h+1,_=m+1,v=e/h,g=n/m,x=[],M=[],w=[],S=[];for(let y=0;y<_;y++){const F=y*g-u;for(let O=0;O<p;O++){const R=O*v-c;M.push(R,-F,0),w.push(0,0,1),S.push(O/h),S.push(1-y/m)}}for(let y=0;y<m;y++)for(let F=0;F<h;F++){const O=F+p*y,R=F+p*(y+1),I=F+1+p*(y+1),N=F+1+p*y;x.push(O,R,N),x.push(R,I,N)}this.setIndex(x),this.setAttribute("position",new Ai(M,3)),this.setAttribute("normal",new Ai(w,3)),this.setAttribute("uv",new Ai(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uc(e.width,e.height,e.widthSegments,e.heightSegments)}}class hf extends ha{constructor(e=new yy([new dt(0,.5),new dt(-.5,-.5),new dt(.5,-.5)]),n=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:n};const a=[],o=[],c=[],u=[];let h=0,m=0;if(Array.isArray(e)===!1)p(e);else for(let _=0;_<e.length;_++)p(e[_]),this.addGroup(h,m,_),h+=m,m=0;this.setIndex(a),this.setAttribute("position",new Ai(o,3)),this.setAttribute("normal",new Ai(c,3)),this.setAttribute("uv",new Ai(u,2));function p(_){const v=o.length/3,g=_.extractPoints(n);let x=g.shape;const M=g.holes;Zl.isClockWise(x)===!1&&(x=x.reverse());for(let S=0,y=M.length;S<y;S++){const F=M[S];Zl.isClockWise(F)===!0&&(M[S]=F.reverse())}const w=Zl.triangulateShape(x,M);for(let S=0,y=M.length;S<y;S++){const F=M[S];x=x.concat(F)}for(let S=0,y=x.length;S<y;S++){const F=x[S];o.push(F.x,F.y,0),c.push(0,0,1),u.push(F.x,F.y)}for(let S=0,y=w.length;S<y;S++){const F=w[S],O=F[0]+v,R=F[1]+v,I=F[2]+v;a.push(O,R,I),m+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes;return eT(n,e)}static fromJSON(e,n){const a=[];for(let o=0,c=e.shapes.length;o<c;o++){const u=n[e.shapes[o]];a.push(u)}return new hf(a,e.curveSegments)}}function eT(s,e){if(e.shapes=[],Array.isArray(s))for(let n=0,a=s.length;n<a;n++){const o=s[n];e.shapes.push(o.uuid)}else e.shapes.push(s.uuid);return e}function zo(s){const e={};for(const n in s){e[n]={};for(const a in s[n]){const o=s[n][a];if(Y_(o))o.isRenderTargetTexture?(xt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][a]=null):e[n][a]=o.clone();else if(Array.isArray(o))if(Y_(o[0])){const c=[];for(let u=0,h=o.length;u<h;u++)c[u]=o[u].clone();e[n][a]=c}else e[n][a]=o.slice();else e[n][a]=o}}return e}function Ni(s){const e={};for(let n=0;n<s.length;n++){const a=zo(s[n]);for(const o in a)e[o]=a[o]}return e}function Y_(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function tT(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function Ty(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qt.workingColorSpace}const nT={clone:zo,merge:Ni};var iT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,aT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Va extends lc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=iT,this.fragmentShader=aT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zo(e.uniforms),this.uniformsGroups=tT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const a in e.uniforms){const o=e.uniforms[a];switch(this.uniforms[a]={},o.type){case"t":this.uniforms[a].value=n[o.value]||null;break;case"c":this.uniforms[a].value=new $t().setHex(o.value);break;case"v2":this.uniforms[a].value=new dt().fromArray(o.value);break;case"v3":this.uniforms[a].value=new te().fromArray(o.value);break;case"v4":this.uniforms[a].value=new Vn().fromArray(o.value);break;case"m3":this.uniforms[a].value=new Dt().fromArray(o.value);break;case"m4":this.uniforms[a].value=new In().fromArray(o.value);break;default:this.uniforms[a].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const a in e.extensions)this.extensions[a]=e.extensions[a];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class sT extends Va{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class rT extends lc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=EE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class oT extends lc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Qh={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(Z_(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!Z_(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Z_(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class lT{constructor(e,n,a){const o=this;let c=!1,u=0,h=0,m;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=a,this._abortController=null,this.itemStart=function(_){h++,c===!1&&o.onStart!==void 0&&o.onStart(_,u,h),c=!0},this.itemEnd=function(_){u++,o.onProgress!==void 0&&o.onProgress(_,u,h),u===h&&(c=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(_){o.onError!==void 0&&o.onError(_)},this.resolveURL=function(_){return _=_.normalize("NFC"),m?m(_):_},this.setURLModifier=function(_){return m=_,this},this.addHandler=function(_,v){return p.push(_,v),this},this.removeHandler=function(_){const v=p.indexOf(_);return v!==-1&&p.splice(v,2),this},this.getHandler=function(_){for(let v=0,g=p.length;v<g;v+=2){const x=p[v],M=p[v+1];if(x.global&&(x.lastIndex=0),x.test(_))return M}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const cT=new lT;class _m{constructor(e){this.manager=e!==void 0?e:cT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){const a=this;return new Promise(function(o,c){a.load(e,o,n,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}_m.DEFAULT_MATERIAL_NAME="__DEFAULT";const Eo=new WeakMap;class uT extends _m{constructor(e){super(e)}load(e,n,a,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,u=Qh.get(`image:${e}`);if(u!==void 0){if(u.complete===!0)c.manager.itemStart(e),setTimeout(function(){n&&n(u),c.manager.itemEnd(e)},0);else{let v=Eo.get(u);v===void 0&&(v=[],Eo.set(u,v)),v.push({onLoad:n,onError:o})}return u}const h=nc("img");function m(){_(),n&&n(this);const v=Eo.get(this)||[];for(let g=0;g<v.length;g++){const x=v[g];x.onLoad&&x.onLoad(this)}Eo.delete(this),c.manager.itemEnd(e)}function p(v){_(),o&&o(v),Qh.remove(`image:${e}`);const g=Eo.get(this)||[];for(let x=0;x<g.length;x++){const M=g[x];M.onError&&M.onError(v)}Eo.delete(this),c.manager.itemError(e),c.manager.itemEnd(e)}function _(){h.removeEventListener("load",m,!1),h.removeEventListener("error",p,!1)}return h.addEventListener("load",m,!1),h.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),Qh.add(`image:${e}`,h),c.manager.itemStart(e),h.src=e,h}}class fT extends _m{constructor(e){super(e)}load(e,n,a,o){const c=new vi,u=new uT(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(h){c.image=h,c.needsUpdate=!0,n!==void 0&&n(c)},a,o),c}}const Hu=new te,Vu=new er,La=new te;class Ay extends Hi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new In,this.projectionMatrix=new In,this.projectionMatrixInverse=new In,this.coordinateSystem=Ia,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Hu,Vu,La),La.x===1&&La.y===1&&La.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hu,Vu,La.set(1,1,1)).invert()}updateWorldMatrix(e,n,a=!1){super.updateWorldMatrix(e,n,a),this.matrixWorld.decompose(Hu,Vu,La),La.x===1&&La.y===1&&La.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hu,Vu,La.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Zs=new te,j_=new dt,K_=new dt;class ua extends Ay{constructor(e=50,n=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ic*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ic*2*Math.atan(Math.tan(Xl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,a){Zs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zs.x,Zs.y).multiplyScalar(-e/Zs.z),Zs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Zs.x,Zs.y).multiplyScalar(-e/Zs.z)}getViewSize(e,n){return this.getViewBounds(e,j_,K_),n.subVectors(K_,j_)}setViewOffset(e,n,a,o,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Xl*.5*this.fov)/this.zoom,a=2*n,o=this.aspect*a,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,p=u.fullHeight;c+=u.offsetX*o/m,n-=u.offsetY*a/p,o*=u.width/m,a*=u.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class wy extends Ay{constructor(e=-1,n=1,a=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=a,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,a,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=a-e,u=a+e,h=o+n,m=o-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,u=c+p*this.view.width,h-=_*this.view.offsetY,m=h-_*this.view.height}this.projectionMatrix.makeOrthographic(c,u,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const bo=-90,To=1;class dT extends Hi{constructor(e,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ua(bo,To,e,n);o.layers=this.layers,this.add(o);const c=new ua(bo,To,e,n);c.layers=this.layers,this.add(c);const u=new ua(bo,To,e,n);u.layers=this.layers,this.add(u);const h=new ua(bo,To,e,n);h.layers=this.layers,this.add(h);const m=new ua(bo,To,e,n);m.layers=this.layers,this.add(m);const p=new ua(bo,To,e,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[a,o,c,u,h,m]=n;for(const p of n)this.remove(p);if(e===Ia)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===uf)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of n)this.add(p),p.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,h,m,p,_]=this.children,v=e.getRenderTarget(),g=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const w=a.texture.generateMipmaps;a.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(a,0,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(a,1,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(a,2,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(a,3,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,m),e.setRenderTarget(a,4,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),a.texture.generateMipmaps=w,e.setRenderTarget(a,5,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,_),e.setRenderTarget(v,g,x),e.xr.enabled=M,a.texture.needsPMREMUpdate=!0}}class hT extends ua{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Q_=new In;class pT{constructor(e,n,a=0,o=1/0){this.ray=new pm(e,n),this.near=a,this.far=o,this.camera=null,this.layers=new hm,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):Jt("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Q_.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Q_),this}intersectObject(e,n=!0,a=[]){return Kp(e,this,a,n),a.sort(J_),a}intersectObjects(e,n=!0,a=[]){for(let o=0,c=e.length;o<c;o++)Kp(e[o],this,a,n);return a.sort(J_),a}}function J_(s,e){return s.distance-e.distance}function Kp(s,e,n,a){let o=!0;if(s.layers.test(e.layers)&&s.raycast(e,n)===!1&&(o=!1),o===!0&&a===!0){const c=s.children;for(let u=0,h=c.length;u<h;u++)Kp(c[u],e,n,!0)}}class mT{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,xt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const Am=class Am{constructor(e,n,a,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,a,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let a=0;a<4;a++)this.elements[a]=e[a+n];return this}set(e,n,a,o){const c=this.elements;return c[0]=e,c[2]=n,c[1]=a,c[3]=o,this}};Am.prototype.isMatrix2=!0;let $_=Am;function ex(s,e,n,a){const o=gT(a);switch(n){case ay:return s*e;case ry:return s*e/o.components*o.byteLength;case rm:return s*e/o.components*o.byteLength;case Dr:return s*e*2/o.components*o.byteLength;case om:return s*e*2/o.components*o.byteLength;case sy:return s*e*3/o.components*o.byteLength;case Ea:return s*e*4/o.components*o.byteLength;case lm:return s*e*4/o.components*o.byteLength;case $u:case ef:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case tf:case nf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case xp:case Sp:return Math.max(s,16)*Math.max(e,8)/4;case _p:case yp:return Math.max(s,8)*Math.max(e,8)/2;case Mp:case Ep:case Tp:case Ap:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case bp:case rf:case wp:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Rp:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Cp:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Dp:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Lp:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Np:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Up:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Op:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Pp:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Ip:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Fp:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Bp:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case zp:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Hp:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Vp:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Gp:case kp:case Xp:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Wp:case qp:return Math.ceil(s/4)*Math.ceil(e/4)*8;case of:case Yp:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function gT(s){switch(s){case da:case ey:return{byteLength:1,components:1};case ec:case ty:case gs:return{byteLength:2,components:1};case am:case sm:return{byteLength:2,components:4};case Ha:case im:case Pa:return{byteLength:4,components:1};case ny:case iy:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nm}}));typeof window<"u"&&(window.__THREE__?xt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nm);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ry(){let s=null,e=!1,n=null,a=null;function o(c,u){n(c,u),a=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&s!==null&&(a=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function vT(s){const e=new WeakMap;function n(h,m){const p=h.array,_=h.usage,v=p.byteLength,g=s.createBuffer();s.bindBuffer(m,g),s.bufferData(m,p,_),h.onUploadCallback();let x;if(p instanceof Float32Array)x=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)x=s.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?x=s.HALF_FLOAT:x=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)x=s.SHORT;else if(p instanceof Uint32Array)x=s.UNSIGNED_INT;else if(p instanceof Int32Array)x=s.INT;else if(p instanceof Int8Array)x=s.BYTE;else if(p instanceof Uint8Array)x=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)x=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:x,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:v}}function a(h,m,p){const _=m.array,v=m.updateRanges;if(s.bindBuffer(p,h),v.length===0)s.bufferSubData(p,0,_);else{v.sort((x,M)=>x.start-M.start);let g=0;for(let x=1;x<v.length;x++){const M=v[g],w=v[x];w.start<=M.start+M.count+1?M.count=Math.max(M.count,w.start+w.count-M.start):(++g,v[g]=w)}v.length=g+1;for(let x=0,M=v.length;x<M;x++){const w=v[x];s.bufferSubData(p,w.start*_.BYTES_PER_ELEMENT,_,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(s.deleteBuffer(m.buffer),e.delete(h))}function u(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=e.get(h);(!_||_.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,n(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,h,m),p.version=h.version}}return{get:o,remove:c,update:u}}var _T=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,yT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ST=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,MT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ET=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,TT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,AT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,wT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,RT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,CT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,DT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,LT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,NT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,UT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,OT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,PT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,IT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,FT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,BT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,zT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,HT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,VT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,GT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,kT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,XT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,WT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,YT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ZT="gl_FragColor = linearToOutputTexel( gl_FragColor );",jT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,KT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,QT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,JT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$T=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,e1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,t1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,n1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,i1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,a1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,s1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,r1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,o1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,l1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,c1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,u1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,f1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,d1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,h1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,p1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,m1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,g1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,v1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,x1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,y1=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,S1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,M1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,b1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,T1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,A1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,w1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,R1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,C1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,D1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,L1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,N1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,U1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,O1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,P1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,I1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,F1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,B1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,V1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,G1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,k1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,X1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,W1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,q1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Y1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Z1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,j1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,K1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Q1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,J1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,eA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,tA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,nA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,iA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,aA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,rA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,oA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,lA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,dA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,hA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,pA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,vA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _A=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,EA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,TA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,AA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,wA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,RA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,CA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,LA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,NA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,UA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,FA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,zA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,HA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,kA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,YA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ZA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,KA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,QA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ft={alphahash_fragment:_T,alphahash_pars_fragment:xT,alphamap_fragment:yT,alphamap_pars_fragment:ST,alphatest_fragment:MT,alphatest_pars_fragment:ET,aomap_fragment:bT,aomap_pars_fragment:TT,batching_pars_vertex:AT,batching_vertex:wT,begin_vertex:RT,beginnormal_vertex:CT,bsdfs:DT,iridescence_fragment:LT,bumpmap_pars_fragment:NT,clipping_planes_fragment:UT,clipping_planes_pars_fragment:OT,clipping_planes_pars_vertex:PT,clipping_planes_vertex:IT,color_fragment:FT,color_pars_fragment:BT,color_pars_vertex:zT,color_vertex:HT,common:VT,cube_uv_reflection_fragment:GT,defaultnormal_vertex:kT,displacementmap_pars_vertex:XT,displacementmap_vertex:WT,emissivemap_fragment:qT,emissivemap_pars_fragment:YT,colorspace_fragment:ZT,colorspace_pars_fragment:jT,envmap_fragment:KT,envmap_common_pars_fragment:QT,envmap_pars_fragment:JT,envmap_pars_vertex:$T,envmap_physical_pars_fragment:u1,envmap_vertex:e1,fog_vertex:t1,fog_pars_vertex:n1,fog_fragment:i1,fog_pars_fragment:a1,gradientmap_pars_fragment:s1,lightmap_pars_fragment:r1,lights_lambert_fragment:o1,lights_lambert_pars_fragment:l1,lights_pars_begin:c1,lights_toon_fragment:f1,lights_toon_pars_fragment:d1,lights_phong_fragment:h1,lights_phong_pars_fragment:p1,lights_physical_fragment:m1,lights_physical_pars_fragment:g1,lights_fragment_begin:v1,lights_fragment_maps:_1,lights_fragment_end:x1,lightprobes_pars_fragment:y1,logdepthbuf_fragment:S1,logdepthbuf_pars_fragment:M1,logdepthbuf_pars_vertex:E1,logdepthbuf_vertex:b1,map_fragment:T1,map_pars_fragment:A1,map_particle_fragment:w1,map_particle_pars_fragment:R1,metalnessmap_fragment:C1,metalnessmap_pars_fragment:D1,morphinstance_vertex:L1,morphcolor_vertex:N1,morphnormal_vertex:U1,morphtarget_pars_vertex:O1,morphtarget_vertex:P1,normal_fragment_begin:I1,normal_fragment_maps:F1,normal_pars_fragment:B1,normal_pars_vertex:z1,normal_vertex:H1,normalmap_pars_fragment:V1,clearcoat_normal_fragment_begin:G1,clearcoat_normal_fragment_maps:k1,clearcoat_pars_fragment:X1,iridescence_pars_fragment:W1,opaque_fragment:q1,packing:Y1,premultiplied_alpha_fragment:Z1,project_vertex:j1,dithering_fragment:K1,dithering_pars_fragment:Q1,roughnessmap_fragment:J1,roughnessmap_pars_fragment:$1,shadowmap_pars_fragment:eA,shadowmap_pars_vertex:tA,shadowmap_vertex:nA,shadowmask_pars_fragment:iA,skinbase_vertex:aA,skinning_pars_vertex:sA,skinning_vertex:rA,skinnormal_vertex:oA,specularmap_fragment:lA,specularmap_pars_fragment:cA,tonemapping_fragment:uA,tonemapping_pars_fragment:fA,transmission_fragment:dA,transmission_pars_fragment:hA,uv_pars_fragment:pA,uv_pars_vertex:mA,uv_vertex:gA,worldpos_vertex:vA,background_vert:_A,background_frag:xA,backgroundCube_vert:yA,backgroundCube_frag:SA,cube_vert:MA,cube_frag:EA,depth_vert:bA,depth_frag:TA,distance_vert:AA,distance_frag:wA,equirect_vert:RA,equirect_frag:CA,linedashed_vert:DA,linedashed_frag:LA,meshbasic_vert:NA,meshbasic_frag:UA,meshlambert_vert:OA,meshlambert_frag:PA,meshmatcap_vert:IA,meshmatcap_frag:FA,meshnormal_vert:BA,meshnormal_frag:zA,meshphong_vert:HA,meshphong_frag:VA,meshphysical_vert:GA,meshphysical_frag:kA,meshtoon_vert:XA,meshtoon_frag:WA,points_vert:qA,points_frag:YA,shadow_vert:ZA,shadow_frag:jA,sprite_vert:KA,sprite_frag:QA},it={common:{diffuse:{value:new $t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Dt}},envmap:{envMap:{value:null},envMapRotation:{value:new Dt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Dt},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new te},probesMax:{value:new te},probesResolution:{value:new te}},points:{diffuse:{value:new $t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0},uvTransform:{value:new Dt}},sprite:{diffuse:{value:new $t(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}}},Ua={basic:{uniforms:Ni([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:Ni([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new $t(0)},envMapIntensity:{value:1}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:Ni([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new $t(0)},specular:{value:new $t(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:Ni([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new $t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:Ni([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new $t(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:Ni([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:Ni([it.points,it.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:Ni([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:Ni([it.common,it.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:Ni([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:Ni([it.sprite,it.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new Dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Dt}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distance:{uniforms:Ni([it.common,it.displacementmap,{referencePosition:{value:new te},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distance_vert,fragmentShader:Ft.distance_frag},shadow:{uniforms:Ni([it.lights,it.fog,{color:{value:new $t(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};Ua.physical={uniforms:Ni([Ua.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Dt},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Dt},sheen:{value:0},sheenColor:{value:new $t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Dt},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Dt},attenuationDistance:{value:0},attenuationColor:{value:new $t(0)},specularColor:{value:new $t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Dt},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Dt}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};const Gu={r:0,b:0,g:0},JA=new In,Cy=new Dt;Cy.set(-1,0,0,0,1,0,0,0,1);function $A(s,e,n,a,o,c){const u=new $t(0);let h=o===!0?0:1,m,p,_=null,v=0,g=null;function x(F){let O=F.isScene===!0?F.background:null;if(O&&O.isTexture){const R=F.backgroundBlurriness>0;O=e.get(O,R)}return O}function M(F){let O=!1;const R=x(F);R===null?S(u,h):R&&R.isColor&&(S(R,1),O=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,c):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(s.autoClear||O)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function w(F,O){const R=x(O);R&&(R.isCubeTexture||R.mapping===vf)?(p===void 0&&(p=new Hn(new cc(1,1,1),new Va({name:"BackgroundCubeMaterial",uniforms:zo(Ua.backgroundCube.uniforms),vertexShader:Ua.backgroundCube.vertexShader,fragmentShader:Ua.backgroundCube.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(I,N,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(p)),p.material.uniforms.envMap.value=R,p.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(JA.makeRotationFromEuler(O.backgroundRotation)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(Cy),p.material.toneMapped=Qt.getTransfer(R.colorSpace)!==hn,(_!==R||v!==R.version||g!==s.toneMapping)&&(p.material.needsUpdate=!0,_=R,v=R.version,g=s.toneMapping),p.layers.enableAll(),F.unshift(p,p.geometry,p.material,0,0,null)):R&&R.isTexture&&(m===void 0&&(m=new Hn(new uc(2,2),new Va({name:"BackgroundMaterial",uniforms:zo(Ua.background.uniforms),vertexShader:Ua.background.vertexShader,fragmentShader:Ua.background.fragmentShader,side:$s,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=R,m.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,m.material.toneMapped=Qt.getTransfer(R.colorSpace)!==hn,R.matrixAutoUpdate===!0&&R.updateMatrix(),m.material.uniforms.uvTransform.value.copy(R.matrix),(_!==R||v!==R.version||g!==s.toneMapping)&&(m.material.needsUpdate=!0,_=R,v=R.version,g=s.toneMapping),m.layers.enableAll(),F.unshift(m,m.geometry,m.material,0,0,null))}function S(F,O){F.getRGB(Gu,Ty(s)),n.buffers.color.setClear(Gu.r,Gu.g,Gu.b,O,c)}function y(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return u},setClearColor:function(F,O=1){u.set(F),h=O,S(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(F){h=F,S(u,h)},render:M,addToRenderList:w,dispose:y}}function ew(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),a={},o=g(null);let c=o,u=!1;function h(k,Z,ce,ie,K){let V=!1;const X=v(k,ie,ce,Z);c!==X&&(c=X,p(c.object)),V=x(k,ie,ce,K),V&&M(k,ie,ce,K),K!==null&&e.update(K,s.ELEMENT_ARRAY_BUFFER),(V||u)&&(u=!1,R(k,Z,ce,ie),K!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function m(){return s.createVertexArray()}function p(k){return s.bindVertexArray(k)}function _(k){return s.deleteVertexArray(k)}function v(k,Z,ce,ie){const K=ie.wireframe===!0;let V=a[Z.id];V===void 0&&(V={},a[Z.id]=V);const X=k.isInstancedMesh===!0?k.id:0;let se=V[X];se===void 0&&(se={},V[X]=se);let pe=se[ce.id];pe===void 0&&(pe={},se[ce.id]=pe);let Ce=pe[K];return Ce===void 0&&(Ce=g(m()),pe[K]=Ce),Ce}function g(k){const Z=[],ce=[],ie=[];for(let K=0;K<n;K++)Z[K]=0,ce[K]=0,ie[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:ce,attributeDivisors:ie,object:k,attributes:{},index:null}}function x(k,Z,ce,ie){const K=c.attributes,V=Z.attributes;let X=0;const se=ce.getAttributes();for(const pe in se)if(se[pe].location>=0){const B=K[pe];let ee=V[pe];if(ee===void 0&&(pe==="instanceMatrix"&&k.instanceMatrix&&(ee=k.instanceMatrix),pe==="instanceColor"&&k.instanceColor&&(ee=k.instanceColor)),B===void 0||B.attribute!==ee||ee&&B.data!==ee.data)return!0;X++}return c.attributesNum!==X||c.index!==ie}function M(k,Z,ce,ie){const K={},V=Z.attributes;let X=0;const se=ce.getAttributes();for(const pe in se)if(se[pe].location>=0){let B=V[pe];B===void 0&&(pe==="instanceMatrix"&&k.instanceMatrix&&(B=k.instanceMatrix),pe==="instanceColor"&&k.instanceColor&&(B=k.instanceColor));const ee={};ee.attribute=B,B&&B.data&&(ee.data=B.data),K[pe]=ee,X++}c.attributes=K,c.attributesNum=X,c.index=ie}function w(){const k=c.newAttributes;for(let Z=0,ce=k.length;Z<ce;Z++)k[Z]=0}function S(k){y(k,0)}function y(k,Z){const ce=c.newAttributes,ie=c.enabledAttributes,K=c.attributeDivisors;ce[k]=1,ie[k]===0&&(s.enableVertexAttribArray(k),ie[k]=1),K[k]!==Z&&(s.vertexAttribDivisor(k,Z),K[k]=Z)}function F(){const k=c.newAttributes,Z=c.enabledAttributes;for(let ce=0,ie=Z.length;ce<ie;ce++)Z[ce]!==k[ce]&&(s.disableVertexAttribArray(ce),Z[ce]=0)}function O(k,Z,ce,ie,K,V,X){X===!0?s.vertexAttribIPointer(k,Z,ce,K,V):s.vertexAttribPointer(k,Z,ce,ie,K,V)}function R(k,Z,ce,ie){w();const K=ie.attributes,V=ce.getAttributes(),X=Z.defaultAttributeValues;for(const se in V){const pe=V[se];if(pe.location>=0){let Ce=K[se];if(Ce===void 0&&(se==="instanceMatrix"&&k.instanceMatrix&&(Ce=k.instanceMatrix),se==="instanceColor"&&k.instanceColor&&(Ce=k.instanceColor)),Ce!==void 0){const B=Ce.normalized,ee=Ce.itemSize,De=e.get(Ce);if(De===void 0)continue;const Te=De.buffer,qe=De.type,re=De.bytesPerElement,be=qe===s.INT||qe===s.UNSIGNED_INT||Ce.gpuType===im;if(Ce.isInterleavedBufferAttribute){const he=Ce.data,Ue=he.stride,st=Ce.offset;if(he.isInstancedInterleavedBuffer){for(let et=0;et<pe.locationSize;et++)y(pe.location+et,he.meshPerAttribute);k.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let et=0;et<pe.locationSize;et++)S(pe.location+et);s.bindBuffer(s.ARRAY_BUFFER,Te);for(let et=0;et<pe.locationSize;et++)O(pe.location+et,ee/pe.locationSize,qe,B,Ue*re,(st+ee/pe.locationSize*et)*re,be)}else{if(Ce.isInstancedBufferAttribute){for(let he=0;he<pe.locationSize;he++)y(pe.location+he,Ce.meshPerAttribute);k.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=Ce.meshPerAttribute*Ce.count)}else for(let he=0;he<pe.locationSize;he++)S(pe.location+he);s.bindBuffer(s.ARRAY_BUFFER,Te);for(let he=0;he<pe.locationSize;he++)O(pe.location+he,ee/pe.locationSize,qe,B,ee*re,ee/pe.locationSize*he*re,be)}}else if(X!==void 0){const B=X[se];if(B!==void 0)switch(B.length){case 2:s.vertexAttrib2fv(pe.location,B);break;case 3:s.vertexAttrib3fv(pe.location,B);break;case 4:s.vertexAttrib4fv(pe.location,B);break;default:s.vertexAttrib1fv(pe.location,B)}}}}F()}function I(){D();for(const k in a){const Z=a[k];for(const ce in Z){const ie=Z[ce];for(const K in ie){const V=ie[K];for(const X in V)_(V[X].object),delete V[X];delete ie[K]}}delete a[k]}}function N(k){if(a[k.id]===void 0)return;const Z=a[k.id];for(const ce in Z){const ie=Z[ce];for(const K in ie){const V=ie[K];for(const X in V)_(V[X].object),delete V[X];delete ie[K]}}delete a[k.id]}function H(k){for(const Z in a){const ce=a[Z];for(const ie in ce){const K=ce[ie];if(K[k.id]===void 0)continue;const V=K[k.id];for(const X in V)_(V[X].object),delete V[X];delete K[k.id]}}}function T(k){for(const Z in a){const ce=a[Z],ie=k.isInstancedMesh===!0?k.id:0,K=ce[ie];if(K!==void 0){for(const V in K){const X=K[V];for(const se in X)_(X[se].object),delete X[se];delete K[V]}delete ce[ie],Object.keys(ce).length===0&&delete a[Z]}}}function D(){G(),u=!0,c!==o&&(c=o,p(c.object))}function G(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:D,resetDefaultState:G,dispose:I,releaseStatesOfGeometry:N,releaseStatesOfObject:T,releaseStatesOfProgram:H,initAttributes:w,enableAttribute:S,disableUnusedAttributes:F}}function tw(s,e,n){let a;function o(m){a=m}function c(m,p){s.drawArrays(a,m,p),n.update(p,a,1)}function u(m,p,_){_!==0&&(s.drawArraysInstanced(a,m,p,_),n.update(p,a,_))}function h(m,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,m,0,p,0,_);let g=0;for(let x=0;x<_;x++)g+=p[x];n.update(g,a,1)}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h}function nw(s,e,n,a){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const H=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(H.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(H){return!(H!==Ea&&a.convert(H)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(H){const T=H===gs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(H!==da&&a.convert(H)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&H!==Pa&&!T)}function m(H){if(H==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";H="mediump"}return H==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const _=m(p);_!==p&&(xt("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const v=n.logarithmicDepthBuffer===!0,g=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&g===!1&&xt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const x=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),F=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),O=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=s.getParameter(s.MAX_SAMPLES),N=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:x,maxVertexTextures:M,maxTextureSize:w,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:F,maxVaryings:O,maxFragmentUniforms:R,maxSamples:I,samples:N}}function iw(s){const e=this;let n=null,a=0,o=!1,c=!1;const u=new br,h=new Dt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const x=v.length!==0||g||a!==0||o;return o=g,a=v.length,x},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,g){n=_(v,g,0)},this.setState=function(v,g,x){const M=v.clippingPlanes,w=v.clipIntersection,S=v.clipShadows,y=s.get(v);if(!o||M===null||M.length===0||c&&!S)c?_(null):p();else{const F=c?0:a,O=F*4;let R=y.clippingState||null;m.value=R,R=_(M,g,O,x);for(let I=0;I!==O;++I)R[I]=n[I];y.clippingState=R,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=F}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function _(v,g,x,M){const w=v!==null?v.length:0;let S=null;if(w!==0){if(S=m.value,M!==!0||S===null){const y=x+w*4,F=g.matrixWorldInverse;h.getNormalMatrix(F),(S===null||S.length<y)&&(S=new Float32Array(y));for(let O=0,R=x;O!==w;++O,R+=4)u.copy(v[O]).applyMatrix4(F,h),u.normal.toArray(S,R),S[R+3]=u.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,S}}const Qs=4,tx=[.125,.215,.35,.446,.526,.582],Ar=20,aw=256,Il=new wy,nx=new $t;let Jh=null,$h=0,ep=0,tp=!1;const sw=new te;class ix{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,a=.1,o=100,c={}){const{size:u=256,position:h=sw}=c;Jh=this._renderer.getRenderTarget(),$h=this._renderer.getActiveCubeFace(),ep=this._renderer.getActiveMipmapLevel(),tp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,a,o,m,h),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Jh,$h,ep),this._renderer.xr.enabled=tp,e.scissorTest=!1,Ao(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Cr||e.mapping===Io?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jh=this._renderer.getRenderTarget(),$h=this._renderer.getActiveCubeFace(),ep=this._renderer.getActiveMipmapLevel(),tp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:Xn,minFilter:Xn,generateMipmaps:!1,type:gs,format:Ea,colorSpace:lf,depthBuffer:!1},o=ax(e,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ax(e,n,a);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=rw(c)),this._blurMaterial=lw(c,e,n),this._ggxMaterial=ow(c,e,n)}return o}_compileMaterial(e){const n=new Hn(new ha,e);this._renderer.compile(n,Il)}_sceneToCubeUV(e,n,a,o,c){const m=new ua(90,1,n,a),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,x=v.toneMapping;v.getClearColor(nx),v.toneMapping=Fa,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Hn(new cc,new Oo({name:"PMREM.Background",side:zi,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,S=w.material;let y=!1;const F=e.background;F?F.isColor&&(S.color.copy(F),e.background=null,y=!0):(S.color.copy(nx),y=!0);for(let O=0;O<6;O++){const R=O%3;R===0?(m.up.set(0,p[O],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[O],c.y,c.z)):R===1?(m.up.set(0,0,p[O]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[O],c.z)):(m.up.set(0,p[O],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[O]));const I=this._cubeSize;Ao(o,R*I,O>2?I:0,I,I),v.setRenderTarget(o),y&&v.render(w,m),v.render(e,m)}v.toneMapping=x,v.autoClear=g,e.background=F}_textureToCubeUV(e,n){const a=this._renderer,o=e.mapping===Cr||e.mapping===Io;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=rx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sx());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;Ao(n,0,0,3*m,2*m),a.setRenderTarget(n),a.render(u,Il)}_applyPMREM(e){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);n.autoClear=a}_applyGGXFilter(e,n,a){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,h=this._lodMeshes[a];h.material=u;const m=u.uniforms,p=a/(this._lodMeshes.length-1),_=n/(this._lodMeshes.length-1),v=Math.sqrt(p*p-_*_),g=0+p*1.25,x=v*g,{_lodMax:M}=this,w=this._sizeLods[a],S=3*w*(a>M-Qs?a-M+Qs:0),y=4*(this._cubeSize-w);m.envMap.value=e.texture,m.roughness.value=x,m.mipInt.value=M-n,Ao(c,S,y,3*w,2*w),o.setRenderTarget(c),o.render(h,Il),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=M-a,Ao(e,S,y,3*w,2*w),o.setRenderTarget(e),o.render(h,Il)}_blur(e,n,a,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,a,o,"latitudinal",c),this._halfBlur(u,e,a,a,o,"longitudinal",c)}_halfBlur(e,n,a,o,c,u,h){const m=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Jt("blur direction must be either latitudinal or longitudinal!");const _=3,v=this._lodMeshes[o];v.material=p;const g=p.uniforms,x=this._sizeLods[a]-1,M=isFinite(c)?Math.PI/(2*x):2*Math.PI/(2*Ar-1),w=c/M,S=isFinite(c)?1+Math.floor(_*w):Ar;S>Ar&&xt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Ar}`);const y=[];let F=0;for(let H=0;H<Ar;++H){const T=H/w,D=Math.exp(-T*T/2);y.push(D),H===0?F+=D:H<S&&(F+=2*D)}for(let H=0;H<y.length;H++)y[H]=y[H]/F;g.envMap.value=e.texture,g.samples.value=S,g.weights.value=y,g.latitudinal.value=u==="latitudinal",h&&(g.poleAxis.value=h);const{_lodMax:O}=this;g.dTheta.value=M,g.mipInt.value=O-a;const R=this._sizeLods[o],I=3*R*(o>O-Qs?o-O+Qs:0),N=4*(this._cubeSize-R);Ao(n,I,N,3*R,2*R),m.setRenderTarget(n),m.render(v,Il)}}function rw(s){const e=[],n=[],a=[];let o=s;const c=s-Qs+1+tx.length;for(let u=0;u<c;u++){const h=Math.pow(2,o);e.push(h);let m=1/h;u>s-Qs?m=tx[u-s+Qs-1]:u===0&&(m=0),n.push(m);const p=1/(h-2),_=-p,v=1+p,g=[_,_,v,_,v,v,_,_,v,v,_,v],x=6,M=6,w=3,S=2,y=1,F=new Float32Array(w*M*x),O=new Float32Array(S*M*x),R=new Float32Array(y*M*x);for(let N=0;N<x;N++){const H=N%3*2/3-1,T=N>2?0:-1,D=[H,T,0,H+2/3,T,0,H+2/3,T+1,0,H,T,0,H+2/3,T+1,0,H,T+1,0];F.set(D,w*M*N),O.set(g,S*M*N);const G=[N,N,N,N,N,N];R.set(G,y*M*N)}const I=new ha;I.setAttribute("position",new za(F,w)),I.setAttribute("uv",new za(O,S)),I.setAttribute("faceIndex",new za(R,y)),a.push(new Hn(I,null)),o>Qs&&o--}return{lodMeshes:a,sizeLods:e,sigmas:n}}function ax(s,e,n){const a=new Ba(s,e,n);return a.texture.mapping=vf,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Ao(s,e,n,a,o){s.viewport.set(e,n,a,o),s.scissor.set(e,n,a,o)}function ow(s,e,n){return new Va({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:aw,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ps,depthTest:!1,depthWrite:!1})}function lw(s,e,n){const a=new Float32Array(Ar),o=new te(0,1,0);return new Va({name:"SphericalGaussianBlur",defines:{n:Ar,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:xf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ps,depthTest:!1,depthWrite:!1})}function sx(){return new Va({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ps,depthTest:!1,depthWrite:!1})}function rx(){return new Va({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ps,depthTest:!1,depthWrite:!1})}function xf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Dy extends Ba{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},o=[a,a,a,a,a,a];this.texture=new hy(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new cc(5,5,5),c=new Va({name:"CubemapFromEquirect",uniforms:zo(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:zi,blending:ps});c.uniforms.tEquirect.value=n;const u=new Hn(o,c),h=n.minFilter;return n.minFilter===Ks&&(n.minFilter=Xn),new dT(1,10,this).update(e,u),n.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,a=!0,o=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,a,o);e.setRenderTarget(c)}}function cw(s){let e=new WeakMap,n=new WeakMap,a=null;function o(g,x=!1){return g==null?null:x?u(g):c(g)}function c(g){if(g&&g.isTexture){const x=g.mapping;if(x===Mh||x===Eh)if(e.has(g)){const M=e.get(g).texture;return h(M,g.mapping)}else{const M=g.image;if(M&&M.height>0){const w=new Dy(M.height);return w.fromEquirectangularTexture(s,g),e.set(g,w),g.addEventListener("dispose",p),h(w.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture){const x=g.mapping,M=x===Mh||x===Eh,w=x===Cr||x===Io;if(M||w){let S=n.get(g);const y=S!==void 0?S.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==y)return a===null&&(a=new ix(s)),S=M?a.fromEquirectangular(g,S):a.fromCubemap(g,S),S.texture.pmremVersion=g.pmremVersion,n.set(g,S),S.texture;if(S!==void 0)return S.texture;{const F=g.image;return M&&F&&F.height>0||w&&F&&m(F)?(a===null&&(a=new ix(s)),S=M?a.fromEquirectangular(g):a.fromCubemap(g),S.texture.pmremVersion=g.pmremVersion,n.set(g,S),g.addEventListener("dispose",_),S.texture):null}}}return g}function h(g,x){return x===Mh?g.mapping=Cr:x===Eh&&(g.mapping=Io),g}function m(g){let x=0;const M=6;for(let w=0;w<M;w++)g[w]!==void 0&&x++;return x===M}function p(g){const x=g.target;x.removeEventListener("dispose",p);const M=e.get(x);M!==void 0&&(e.delete(x),M.dispose())}function _(g){const x=g.target;x.removeEventListener("dispose",_);const M=n.get(x);M!==void 0&&(n.delete(x),M.dispose())}function v(){e=new WeakMap,n=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:o,dispose:v}}function uw(s){const e={};function n(a){if(e[a]!==void 0)return e[a];const o=s.getExtension(a);return e[a]=o,o}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const o=n(a);return o===null&&No("WebGLRenderer: "+a+" extension not supported."),o}}}function fw(s,e,n,a){const o={},c=new WeakMap;function u(v){const g=v.target;g.index!==null&&e.remove(g.index);for(const M in g.attributes)e.remove(g.attributes[M]);g.removeEventListener("dispose",u),delete o[g.id];const x=c.get(g);x&&(e.remove(x),c.delete(g)),a.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function h(v,g){return o[g.id]===!0||(g.addEventListener("dispose",u),o[g.id]=!0,n.memory.geometries++),g}function m(v){const g=v.attributes;for(const x in g)e.update(g[x],s.ARRAY_BUFFER)}function p(v){const g=[],x=v.index,M=v.attributes.position;let w=0;if(M===void 0)return;if(x!==null){const F=x.array;w=x.version;for(let O=0,R=F.length;O<R;O+=3){const I=F[O+0],N=F[O+1],H=F[O+2];g.push(I,N,N,H,H,I)}}else{const F=M.array;w=M.version;for(let O=0,R=F.length/3-1;O<R;O+=3){const I=O+0,N=O+1,H=O+2;g.push(I,N,N,H,H,I)}}const S=new(M.count>=65535?fy:uy)(g,1);S.version=w;const y=c.get(v);y&&e.remove(y),c.set(v,S)}function _(v){const g=c.get(v);if(g){const x=v.index;x!==null&&g.version<x.version&&p(v)}else p(v);return c.get(v)}return{get:h,update:m,getWireframeAttribute:_}}function dw(s,e,n){let a;function o(v){a=v}let c,u;function h(v){c=v.type,u=v.bytesPerElement}function m(v,g){s.drawElements(a,g,c,v*u),n.update(g,a,1)}function p(v,g,x){x!==0&&(s.drawElementsInstanced(a,g,c,v*u,x),n.update(g,a,x))}function _(v,g,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,g,0,c,v,0,x);let w=0;for(let S=0;S<x;S++)w+=g[S];n.update(w,a,1)}this.setMode=o,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=_}function hw(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,u,h){switch(n.calls++,u){case s.TRIANGLES:n.triangles+=h*(c/3);break;case s.LINES:n.lines+=h*(c/2);break;case s.LINE_STRIP:n.lines+=h*(c-1);break;case s.LINE_LOOP:n.lines+=h*c;break;case s.POINTS:n.points+=h*c;break;default:Jt("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:a}}function pw(s,e,n){const a=new WeakMap,o=new Vn;function c(u,h,m){const p=u.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=_!==void 0?_.length:0;let g=a.get(h);if(g===void 0||g.count!==v){let G=function(){T.dispose(),a.delete(h),h.removeEventListener("dispose",G)};var x=G;g!==void 0&&g.texture.dispose();const M=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,y=h.morphAttributes.position||[],F=h.morphAttributes.normal||[],O=h.morphAttributes.color||[];let R=0;M===!0&&(R=1),w===!0&&(R=2),S===!0&&(R=3);let I=h.attributes.position.count*R,N=1;I>e.maxTextureSize&&(N=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const H=new Float32Array(I*N*4*v),T=new ly(H,I,N,v);T.type=Pa,T.needsUpdate=!0;const D=R*4;for(let k=0;k<v;k++){const Z=y[k],ce=F[k],ie=O[k],K=I*N*4*k;for(let V=0;V<Z.count;V++){const X=V*D;M===!0&&(o.fromBufferAttribute(Z,V),H[K+X+0]=o.x,H[K+X+1]=o.y,H[K+X+2]=o.z,H[K+X+3]=0),w===!0&&(o.fromBufferAttribute(ce,V),H[K+X+4]=o.x,H[K+X+5]=o.y,H[K+X+6]=o.z,H[K+X+7]=0),S===!0&&(o.fromBufferAttribute(ie,V),H[K+X+8]=o.x,H[K+X+9]=o.y,H[K+X+10]=o.z,H[K+X+11]=ie.itemSize===4?o.w:1)}}g={count:v,texture:T,size:new dt(I,N)},a.set(h,g),h.addEventListener("dispose",G)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",u.morphTexture,n);else{let M=0;for(let S=0;S<p.length;S++)M+=p[S];const w=h.morphTargetsRelative?1:1-M;m.getUniforms().setValue(s,"morphTargetBaseInfluence",w),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",g.texture,n),m.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:c}}function mw(s,e,n,a,o){let c=new WeakMap;function u(p){const _=o.render.frame,v=p.geometry,g=e.get(p,v);if(c.get(g)!==_&&(e.update(g),c.set(g,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==_&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),c.set(p,_))),p.isSkinnedMesh){const x=p.skeleton;c.get(x)!==_&&(x.update(),c.set(x,_))}return g}function h(){c=new WeakMap}function m(p){const _=p.target;_.removeEventListener("dispose",m),a.releaseStatesOfObject(_),n.remove(_.instanceMatrix),_.instanceColor!==null&&n.remove(_.instanceColor)}return{update:u,dispose:h}}const gw={[qx]:"LINEAR_TONE_MAPPING",[Yx]:"REINHARD_TONE_MAPPING",[Zx]:"CINEON_TONE_MAPPING",[jx]:"ACES_FILMIC_TONE_MAPPING",[Qx]:"AGX_TONE_MAPPING",[Jx]:"NEUTRAL_TONE_MAPPING",[Kx]:"CUSTOM_TONE_MAPPING"};function vw(s,e,n,a,o,c){const u=new Ba(e,n,{type:s,depthBuffer:o,stencilBuffer:c,samples:a?4:0,depthTexture:o?new Fo(e,n):void 0}),h=new Ba(e,n,{type:gs,depthBuffer:!1,stencilBuffer:!1}),m=new ha;m.setAttribute("position",new Ai([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Ai([0,2,0,0,2,0],2));const p=new sT({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),_=new Hn(m,p),v=new wy(-1,1,1,-1,0,1);let g=null,x=null,M=!1,w,S=null,y=[],F=!1;this.setSize=function(O,R){u.setSize(O,R),h.setSize(O,R);for(let I=0;I<y.length;I++){const N=y[I];N.setSize&&N.setSize(O,R)}},this.setEffects=function(O){y=O,F=y.length>0&&y[0].isRenderPass===!0;const R=u.width,I=u.height;for(let N=0;N<y.length;N++){const H=y[N];H.setSize&&H.setSize(R,I)}},this.begin=function(O,R){if(M||O.toneMapping===Fa&&y.length===0)return!1;if(S=R,R!==null){const I=R.width,N=R.height;(u.width!==I||u.height!==N)&&this.setSize(I,N)}return F===!1&&O.setRenderTarget(u),w=O.toneMapping,O.toneMapping=Fa,!0},this.hasRenderPass=function(){return F},this.end=function(O,R){O.toneMapping=w,M=!0;let I=u,N=h;for(let H=0;H<y.length;H++){const T=y[H];if(T.enabled!==!1&&(T.render(O,N,I,R),T.needsSwap!==!1)){const D=I;I=N,N=D}}if(g!==O.outputColorSpace||x!==O.toneMapping){g=O.outputColorSpace,x=O.toneMapping,p.defines={},Qt.getTransfer(g)===hn&&(p.defines.SRGB_TRANSFER="");const H=gw[x];H&&(p.defines[H]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=I.texture,O.setRenderTarget(S),O.render(_,v),S=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){u.depthTexture&&u.depthTexture.dispose(),u.dispose(),h.dispose(),m.dispose(),p.dispose()}}const Ly=new vi,Qp=new Fo(1,1),Ny=new ly,Uy=new nb,Oy=new hy,ox=[],lx=[],cx=new Float32Array(16),ux=new Float32Array(9),fx=new Float32Array(4);function Ho(s,e,n){const a=s[0];if(a<=0||a>0)return s;const o=e*n;let c=ox[o];if(c===void 0&&(c=new Float32Array(o),ox[o]=c),e!==0){a.toArray(c,0);for(let u=1,h=0;u!==e;++u)h+=n,s[u].toArray(c,h)}return c}function ei(s,e){if(s.length!==e.length)return!1;for(let n=0,a=s.length;n<a;n++)if(s[n]!==e[n])return!1;return!0}function ti(s,e){for(let n=0,a=e.length;n<a;n++)s[n]=e[n]}function yf(s,e){let n=lx[e];n===void 0&&(n=new Int32Array(e),lx[e]=n);for(let a=0;a!==e;++a)n[a]=s.allocateTextureUnit();return n}function _w(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function xw(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(ei(n,e))return;s.uniform2fv(this.addr,e),ti(n,e)}}function yw(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(ei(n,e))return;s.uniform3fv(this.addr,e),ti(n,e)}}function Sw(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(ei(n,e))return;s.uniform4fv(this.addr,e),ti(n,e)}}function Mw(s,e){const n=this.cache,a=e.elements;if(a===void 0){if(ei(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),ti(n,e)}else{if(ei(n,a))return;fx.set(a),s.uniformMatrix2fv(this.addr,!1,fx),ti(n,a)}}function Ew(s,e){const n=this.cache,a=e.elements;if(a===void 0){if(ei(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),ti(n,e)}else{if(ei(n,a))return;ux.set(a),s.uniformMatrix3fv(this.addr,!1,ux),ti(n,a)}}function bw(s,e){const n=this.cache,a=e.elements;if(a===void 0){if(ei(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),ti(n,e)}else{if(ei(n,a))return;cx.set(a),s.uniformMatrix4fv(this.addr,!1,cx),ti(n,a)}}function Tw(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function Aw(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(ei(n,e))return;s.uniform2iv(this.addr,e),ti(n,e)}}function ww(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(ei(n,e))return;s.uniform3iv(this.addr,e),ti(n,e)}}function Rw(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(ei(n,e))return;s.uniform4iv(this.addr,e),ti(n,e)}}function Cw(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function Dw(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(ei(n,e))return;s.uniform2uiv(this.addr,e),ti(n,e)}}function Lw(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(ei(n,e))return;s.uniform3uiv(this.addr,e),ti(n,e)}}function Nw(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(ei(n,e))return;s.uniform4uiv(this.addr,e),ti(n,e)}}function Uw(s,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o);let c;this.type===s.SAMPLER_2D_SHADOW?(Qp.compareFunction=n.isReversedDepthBuffer()?um:cm,c=Qp):c=Ly,n.setTexture2D(e||c,o)}function Ow(s,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),n.setTexture3D(e||Uy,o)}function Pw(s,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),n.setTextureCube(e||Oy,o)}function Iw(s,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),n.setTexture2DArray(e||Ny,o)}function Fw(s){switch(s){case 5126:return _w;case 35664:return xw;case 35665:return yw;case 35666:return Sw;case 35674:return Mw;case 35675:return Ew;case 35676:return bw;case 5124:case 35670:return Tw;case 35667:case 35671:return Aw;case 35668:case 35672:return ww;case 35669:case 35673:return Rw;case 5125:return Cw;case 36294:return Dw;case 36295:return Lw;case 36296:return Nw;case 35678:case 36198:case 36298:case 36306:case 35682:return Uw;case 35679:case 36299:case 36307:return Ow;case 35680:case 36300:case 36308:case 36293:return Pw;case 36289:case 36303:case 36311:case 36292:return Iw}}function Bw(s,e){s.uniform1fv(this.addr,e)}function zw(s,e){const n=Ho(e,this.size,2);s.uniform2fv(this.addr,n)}function Hw(s,e){const n=Ho(e,this.size,3);s.uniform3fv(this.addr,n)}function Vw(s,e){const n=Ho(e,this.size,4);s.uniform4fv(this.addr,n)}function Gw(s,e){const n=Ho(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function kw(s,e){const n=Ho(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function Xw(s,e){const n=Ho(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function Ww(s,e){s.uniform1iv(this.addr,e)}function qw(s,e){s.uniform2iv(this.addr,e)}function Yw(s,e){s.uniform3iv(this.addr,e)}function Zw(s,e){s.uniform4iv(this.addr,e)}function jw(s,e){s.uniform1uiv(this.addr,e)}function Kw(s,e){s.uniform2uiv(this.addr,e)}function Qw(s,e){s.uniform3uiv(this.addr,e)}function Jw(s,e){s.uniform4uiv(this.addr,e)}function $w(s,e,n){const a=this.cache,o=e.length,c=yf(n,o);ei(a,c)||(s.uniform1iv(this.addr,c),ti(a,c));let u;this.type===s.SAMPLER_2D_SHADOW?u=Qp:u=Ly;for(let h=0;h!==o;++h)n.setTexture2D(e[h]||u,c[h])}function eR(s,e,n){const a=this.cache,o=e.length,c=yf(n,o);ei(a,c)||(s.uniform1iv(this.addr,c),ti(a,c));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||Uy,c[u])}function tR(s,e,n){const a=this.cache,o=e.length,c=yf(n,o);ei(a,c)||(s.uniform1iv(this.addr,c),ti(a,c));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||Oy,c[u])}function nR(s,e,n){const a=this.cache,o=e.length,c=yf(n,o);ei(a,c)||(s.uniform1iv(this.addr,c),ti(a,c));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||Ny,c[u])}function iR(s){switch(s){case 5126:return Bw;case 35664:return zw;case 35665:return Hw;case 35666:return Vw;case 35674:return Gw;case 35675:return kw;case 35676:return Xw;case 5124:case 35670:return Ww;case 35667:case 35671:return qw;case 35668:case 35672:return Yw;case 35669:case 35673:return Zw;case 5125:return jw;case 36294:return Kw;case 36295:return Qw;case 36296:return Jw;case 35678:case 36198:case 36298:case 36306:case 35682:return $w;case 35679:case 36299:case 36307:return eR;case 35680:case 36300:case 36308:case 36293:return tR;case 36289:case 36303:case 36311:case 36292:return nR}}class aR{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.setValue=Fw(n.type)}}class sR{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=iR(n.type)}}class rR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,a){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const h=o[c];h.setValue(e,n[h.id],a)}}}const np=/(\w+)(\])?(\[|\.)?/g;function dx(s,e){s.seq.push(e),s.map[e.id]=e}function oR(s,e,n){const a=s.name,o=a.length;for(np.lastIndex=0;;){const c=np.exec(a),u=np.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&u+2===o){dx(n,p===void 0?new aR(h,s,e):new sR(h,s,e));break}else{let v=n.map[h];v===void 0&&(v=new rR(h),dx(n,v)),n=v}}}class af{constructor(e,n){this.seq=[],this.map={};const a=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let u=0;u<a;++u){const h=e.getActiveUniform(n,u),m=e.getUniformLocation(n,h.name);oR(h,m,this)}const o=[],c=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(e,n,a,o){const c=this.map[n];c!==void 0&&c.setValue(e,a,o)}setOptional(e,n,a){const o=n[a];o!==void 0&&this.setValue(e,a,o)}static upload(e,n,a,o){for(let c=0,u=n.length;c!==u;++c){const h=n[c],m=a[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,o)}}static seqWithValue(e,n){const a=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in n&&a.push(u)}return a}}function hx(s,e,n){const a=s.createShader(e);return s.shaderSource(a,n),s.compileShader(a),a}const lR=37297;let cR=0;function uR(s,e){const n=s.split(`
`),a=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=o;u<c;u++){const h=u+1;a.push(`${h===e?">":" "} ${h}: ${n[u]}`)}return a.join(`
`)}const px=new Dt;function fR(s){Qt._getMatrix(px,Qt.workingColorSpace,s);const e=`mat3( ${px.elements.map(n=>n.toFixed(4))} )`;switch(Qt.getTransfer(s)){case cf:return[e,"LinearTransferOETF"];case hn:return[e,"sRGBTransferOETF"];default:return xt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function mx(s,e,n){const a=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(a&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const h=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+uR(s.getShaderSource(e),h)}else return c}function dR(s,e){const n=fR(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const hR={[qx]:"Linear",[Yx]:"Reinhard",[Zx]:"Cineon",[jx]:"ACESFilmic",[Qx]:"AgX",[Jx]:"Neutral",[Kx]:"Custom"};function pR(s,e){const n=hR[e];return n===void 0?(xt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ku=new te;function mR(){Qt.getLuminanceCoefficients(ku);const s=ku.x.toFixed(4),e=ku.y.toFixed(4),n=ku.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gR(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gl).join(`
`)}function vR(s){const e=[];for(const n in s){const a=s[n];a!==!1&&e.push("#define "+n+" "+a)}return e.join(`
`)}function _R(s,e){const n={},a=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const c=s.getActiveAttrib(e,o),u=c.name;let h=1;c.type===s.FLOAT_MAT2&&(h=2),c.type===s.FLOAT_MAT3&&(h=3),c.type===s.FLOAT_MAT4&&(h=4),n[u]={type:c.type,location:s.getAttribLocation(e,u),locationSize:h}}return n}function Gl(s){return s!==""}function gx(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vx(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jp(s){return s.replace(xR,SR)}const yR=new Map;function SR(s,e){let n=Ft[e];if(n===void 0){const a=yR.get(e);if(a!==void 0)n=Ft[a],xt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Jp(n)}const MR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _x(s){return s.replace(MR,ER)}function ER(s,e,n,a){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function xx(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const bR={[Ju]:"SHADOWMAP_TYPE_PCF",[Hl]:"SHADOWMAP_TYPE_VSM"};function TR(s){return bR[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const AR={[Cr]:"ENVMAP_TYPE_CUBE",[Io]:"ENVMAP_TYPE_CUBE",[vf]:"ENVMAP_TYPE_CUBE_UV"};function wR(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":AR[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const RR={[Io]:"ENVMAP_MODE_REFRACTION"};function CR(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":RR[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const DR={[Wx]:"ENVMAP_BLENDING_MULTIPLY",[yE]:"ENVMAP_BLENDING_MIX",[SE]:"ENVMAP_BLENDING_ADD"};function LR(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":DR[s.combine]||"ENVMAP_BLENDING_NONE"}function NR(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function UR(s,e,n,a){const o=s.getContext(),c=n.defines;let u=n.vertexShader,h=n.fragmentShader;const m=TR(n),p=wR(n),_=CR(n),v=LR(n),g=NR(n),x=gR(n),M=vR(c),w=o.createProgram();let S,y,F=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(Gl).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(Gl).join(`
`),y.length>0&&(y+=`
`)):(S=[xx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gl).join(`
`),y=[xx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+_:"",n.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Fa?"#define TONE_MAPPING":"",n.toneMapping!==Fa?Ft.tonemapping_pars_fragment:"",n.toneMapping!==Fa?pR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,dR("linearToOutputTexel",n.outputColorSpace),mR(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Gl).join(`
`)),u=Jp(u),u=gx(u,n),u=vx(u,n),h=Jp(h),h=gx(h,n),h=vx(h,n),u=_x(u),h=_x(h),n.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",n.glslVersion===x_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===x_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const O=F+S+u,R=F+y+h,I=hx(o,o.VERTEX_SHADER,O),N=hx(o,o.FRAGMENT_SHADER,R);o.attachShader(w,I),o.attachShader(w,N),n.index0AttributeName!==void 0?o.bindAttribLocation(w,0,n.index0AttributeName):n.hasPositionAttribute===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w);function H(k){if(s.debug.checkShaderErrors){const Z=o.getProgramInfoLog(w)||"",ce=o.getShaderInfoLog(I)||"",ie=o.getShaderInfoLog(N)||"",K=Z.trim(),V=ce.trim(),X=ie.trim();let se=!0,pe=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if(se=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,w,I,N);else{const Ce=mx(o,I,"vertex"),B=mx(o,N,"fragment");Jt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+K+`
`+Ce+`
`+B)}else K!==""?xt("WebGLProgram: Program Info Log:",K):(V===""||X==="")&&(pe=!1);pe&&(k.diagnostics={runnable:se,programLog:K,vertexShader:{log:V,prefix:S},fragmentShader:{log:X,prefix:y}})}o.deleteShader(I),o.deleteShader(N),T=new af(o,w),D=_R(o,w)}let T;this.getUniforms=function(){return T===void 0&&H(this),T};let D;this.getAttributes=function(){return D===void 0&&H(this),D};let G=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=o.getProgramParameter(w,lR)),G},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=cR++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=I,this.fragmentShader=N,this}let OR=0;class PR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,a){const o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let a=n.get(e);return a===void 0&&(a=new Set,n.set(e,a)),a}_getShaderStage(e){const n=this.shaderCache;let a=n.get(e);return a===void 0&&(a=new IR(e),n.set(e,a)),a}}class IR{constructor(e){this.id=OR++,this.code=e,this.usedTimes=0}}function FR(s){return s===Dr||s===rf||s===of}function BR(s,e,n,a,o,c){const u=new hm,h=new PR,m=new Set,p=[],_=new Map,v=a.logarithmicDepthBuffer;let g=a.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(T){return m.add(T),T===0?"uv":`uv${T}`}function w(T,D,G,k,Z,ce){const ie=k.fog,K=Z.geometry,V=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?k.environment:null,X=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,se=e.get(T.envMap||V,X),pe=se&&se.mapping===vf?se.image.height:null,Ce=x[T.type];T.precision!==null&&(g=a.getMaxPrecision(T.precision),g!==T.precision&&xt("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const B=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ee=B!==void 0?B.length:0;let De=0;K.morphAttributes.position!==void 0&&(De=1),K.morphAttributes.normal!==void 0&&(De=2),K.morphAttributes.color!==void 0&&(De=3);let Te,qe,re,be;if(Ce){const rt=Ua[Ce];Te=rt.vertexShader,qe=rt.fragmentShader}else{Te=T.vertexShader,qe=T.fragmentShader;const rt=h.getVertexShaderStage(T),ln=h.getFragmentShaderStage(T);h.update(T,rt,ln),re=rt.id,be=ln.id}const he=s.getRenderTarget(),Ue=s.state.buffers.depth.getReversed(),st=Z.isInstancedMesh===!0,et=Z.isBatchedMesh===!0,bt=!!T.map,pt=!!T.matcap,Tt=!!se,wt=!!T.aoMap,Lt=!!T.lightMap,nn=!!T.bumpMap&&T.wireframe===!1,rn=!!T.normalMap,on=!!T.displacementMap,un=!!T.emissiveMap,Ht=!!T.metalnessMap,jt=!!T.roughnessMap,$=T.anisotropy>0,Bt=T.clearcoat>0,Pt=T.dispersion>0,z=T.iridescence>0,A=T.sheen>0,ne=T.transmission>0,oe=$&&!!T.anisotropyMap,ue=Bt&&!!T.clearcoatMap,Pe=Bt&&!!T.clearcoatNormalMap,He=Bt&&!!T.clearcoatRoughnessMap,_e=z&&!!T.iridescenceMap,ge=z&&!!T.iridescenceThicknessMap,Be=A&&!!T.sheenColorMap,Je=A&&!!T.sheenRoughnessMap,We=!!T.specularMap,Ze=!!T.specularColorMap,ot=!!T.specularIntensityMap,je=ne&&!!T.transmissionMap,at=ne&&!!T.thicknessMap,j=!!T.gradientMap,Ve=!!T.alphaMap,Se=T.alphaTest>0,Xe=!!T.alphaHash,tt=!!T.extensions;let Le=Fa;T.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(Le=s.toneMapping);const nt={shaderID:Ce,shaderType:T.type,shaderName:T.name,vertexShader:Te,fragmentShader:qe,defines:T.defines,customVertexShaderID:re,customFragmentShaderID:be,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:et,batchingColor:et&&Z._colorsTexture!==null,instancing:st,instancingColor:st&&Z.instanceColor!==null,instancingMorph:st&&Z.morphTexture!==null,outputColorSpace:he===null?s.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Qt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:bt,matcap:pt,envMap:Tt,envMapMode:Tt&&se.mapping,envMapCubeUVHeight:pe,aoMap:wt,lightMap:Lt,bumpMap:nn,normalMap:rn,displacementMap:on,emissiveMap:un,normalMapObjectSpace:rn&&T.normalMapType===bE,normalMapTangentSpace:rn&&T.normalMapType===g_,packedNormalMap:rn&&T.normalMapType===g_&&FR(T.normalMap.format),metalnessMap:Ht,roughnessMap:jt,anisotropy:$,anisotropyMap:oe,clearcoat:Bt,clearcoatMap:ue,clearcoatNormalMap:Pe,clearcoatRoughnessMap:He,dispersion:Pt,iridescence:z,iridescenceMap:_e,iridescenceThicknessMap:ge,sheen:A,sheenColorMap:Be,sheenRoughnessMap:Je,specularMap:We,specularColorMap:Ze,specularIntensityMap:ot,transmission:ne,transmissionMap:je,thicknessMap:at,gradientMap:j,opaque:T.transparent===!1&&T.blending===Lo&&T.alphaToCoverage===!1,alphaMap:Ve,alphaTest:Se,alphaHash:Xe,combine:T.combine,mapUv:bt&&M(T.map.channel),aoMapUv:wt&&M(T.aoMap.channel),lightMapUv:Lt&&M(T.lightMap.channel),bumpMapUv:nn&&M(T.bumpMap.channel),normalMapUv:rn&&M(T.normalMap.channel),displacementMapUv:on&&M(T.displacementMap.channel),emissiveMapUv:un&&M(T.emissiveMap.channel),metalnessMapUv:Ht&&M(T.metalnessMap.channel),roughnessMapUv:jt&&M(T.roughnessMap.channel),anisotropyMapUv:oe&&M(T.anisotropyMap.channel),clearcoatMapUv:ue&&M(T.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&M(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:He&&M(T.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&M(T.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&M(T.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&M(T.sheenColorMap.channel),sheenRoughnessMapUv:Je&&M(T.sheenRoughnessMap.channel),specularMapUv:We&&M(T.specularMap.channel),specularColorMapUv:Ze&&M(T.specularColorMap.channel),specularIntensityMapUv:ot&&M(T.specularIntensityMap.channel),transmissionMapUv:je&&M(T.transmissionMap.channel),thicknessMapUv:at&&M(T.thicknessMap.channel),alphaMapUv:Ve&&M(T.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(rn||$),vertexNormals:!!K.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!K.attributes.uv&&(bt||Ve),fog:!!ie,useFog:T.fog===!0,fogExp2:!!ie&&ie.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||K.attributes.normal===void 0&&rn===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ue,skinning:Z.isSkinnedMesh===!0,hasPositionAttribute:K.attributes.position!==void 0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:De,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numLightProbeGrids:ce.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&G.length>0,shadowMapType:s.shadowMap.type,toneMapping:Le,decodeVideoTexture:bt&&T.map.isVideoTexture===!0&&Qt.getTransfer(T.map.colorSpace)===hn,decodeVideoTextureEmissive:un&&T.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(T.emissiveMap.colorSpace)===hn,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===fa,flipSided:T.side===zi,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:tt&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(tt&&T.extensions.multiDraw===!0||et)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return nt.vertexUv1s=m.has(1),nt.vertexUv2s=m.has(2),nt.vertexUv3s=m.has(3),m.clear(),nt}function S(T){const D=[];if(T.shaderID?D.push(T.shaderID):(D.push(T.customVertexShaderID),D.push(T.customFragmentShaderID)),T.defines!==void 0)for(const G in T.defines)D.push(G),D.push(T.defines[G]);return T.isRawShaderMaterial===!1&&(y(D,T),F(D,T),D.push(s.outputColorSpace)),D.push(T.customProgramCacheKey),D.join()}function y(T,D){T.push(D.precision),T.push(D.outputColorSpace),T.push(D.envMapMode),T.push(D.envMapCubeUVHeight),T.push(D.mapUv),T.push(D.alphaMapUv),T.push(D.lightMapUv),T.push(D.aoMapUv),T.push(D.bumpMapUv),T.push(D.normalMapUv),T.push(D.displacementMapUv),T.push(D.emissiveMapUv),T.push(D.metalnessMapUv),T.push(D.roughnessMapUv),T.push(D.anisotropyMapUv),T.push(D.clearcoatMapUv),T.push(D.clearcoatNormalMapUv),T.push(D.clearcoatRoughnessMapUv),T.push(D.iridescenceMapUv),T.push(D.iridescenceThicknessMapUv),T.push(D.sheenColorMapUv),T.push(D.sheenRoughnessMapUv),T.push(D.specularMapUv),T.push(D.specularColorMapUv),T.push(D.specularIntensityMapUv),T.push(D.transmissionMapUv),T.push(D.thicknessMapUv),T.push(D.combine),T.push(D.fogExp2),T.push(D.sizeAttenuation),T.push(D.morphTargetsCount),T.push(D.morphAttributeCount),T.push(D.numDirLights),T.push(D.numPointLights),T.push(D.numSpotLights),T.push(D.numSpotLightMaps),T.push(D.numHemiLights),T.push(D.numRectAreaLights),T.push(D.numDirLightShadows),T.push(D.numPointLightShadows),T.push(D.numSpotLightShadows),T.push(D.numSpotLightShadowsWithMaps),T.push(D.numLightProbes),T.push(D.shadowMapType),T.push(D.toneMapping),T.push(D.numClippingPlanes),T.push(D.numClipIntersection),T.push(D.depthPacking)}function F(T,D){u.disableAll(),D.instancing&&u.enable(0),D.instancingColor&&u.enable(1),D.instancingMorph&&u.enable(2),D.matcap&&u.enable(3),D.envMap&&u.enable(4),D.normalMapObjectSpace&&u.enable(5),D.normalMapTangentSpace&&u.enable(6),D.clearcoat&&u.enable(7),D.iridescence&&u.enable(8),D.alphaTest&&u.enable(9),D.vertexColors&&u.enable(10),D.vertexAlphas&&u.enable(11),D.vertexUv1s&&u.enable(12),D.vertexUv2s&&u.enable(13),D.vertexUv3s&&u.enable(14),D.vertexTangents&&u.enable(15),D.anisotropy&&u.enable(16),D.alphaHash&&u.enable(17),D.batching&&u.enable(18),D.dispersion&&u.enable(19),D.batchingColor&&u.enable(20),D.gradientMap&&u.enable(21),D.packedNormalMap&&u.enable(22),D.vertexNormals&&u.enable(23),T.push(u.mask),u.disableAll(),D.fog&&u.enable(0),D.useFog&&u.enable(1),D.flatShading&&u.enable(2),D.logarithmicDepthBuffer&&u.enable(3),D.reversedDepthBuffer&&u.enable(4),D.skinning&&u.enable(5),D.morphTargets&&u.enable(6),D.morphNormals&&u.enable(7),D.morphColors&&u.enable(8),D.premultipliedAlpha&&u.enable(9),D.shadowMapEnabled&&u.enable(10),D.doubleSided&&u.enable(11),D.flipSided&&u.enable(12),D.useDepthPacking&&u.enable(13),D.dithering&&u.enable(14),D.transmission&&u.enable(15),D.sheen&&u.enable(16),D.opaque&&u.enable(17),D.pointsUvs&&u.enable(18),D.decodeVideoTexture&&u.enable(19),D.decodeVideoTextureEmissive&&u.enable(20),D.alphaToCoverage&&u.enable(21),D.numLightProbeGrids>0&&u.enable(22),D.hasPositionAttribute&&u.enable(23),T.push(u.mask)}function O(T){const D=x[T.type];let G;if(D){const k=Ua[D];G=nT.clone(k.uniforms)}else G=T.uniforms;return G}function R(T,D){let G=_.get(D);return G!==void 0?++G.usedTimes:(G=new UR(s,D,T,o),p.push(G),_.set(D,G)),G}function I(T){if(--T.usedTimes===0){const D=p.indexOf(T);p[D]=p[p.length-1],p.pop(),_.delete(T.cacheKey),T.destroy()}}function N(T){h.remove(T)}function H(){h.dispose()}return{getParameters:w,getProgramCacheKey:S,getUniforms:O,acquireProgram:R,releaseProgram:I,releaseShaderCache:N,programs:p,dispose:H}}function zR(){let s=new WeakMap;function e(u){return s.has(u)}function n(u){let h=s.get(u);return h===void 0&&(h={},s.set(u,h)),h}function a(u){s.delete(u)}function o(u,h,m){s.get(u)[h]=m}function c(){s=new WeakMap}return{has:e,get:n,remove:a,update:o,dispose:c}}function HR(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function yx(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Sx(){const s=[];let e=0;const n=[],a=[],o=[];function c(){e=0,n.length=0,a.length=0,o.length=0}function u(g){let x=0;return g.isInstancedMesh&&(x+=2),g.isSkinnedMesh&&(x+=1),x}function h(g,x,M,w,S,y){let F=s[e];return F===void 0?(F={id:g.id,object:g,geometry:x,material:M,materialVariant:u(g),groupOrder:w,renderOrder:g.renderOrder,z:S,group:y},s[e]=F):(F.id=g.id,F.object=g,F.geometry=x,F.material=M,F.materialVariant=u(g),F.groupOrder=w,F.renderOrder=g.renderOrder,F.z=S,F.group=y),e++,F}function m(g,x,M,w,S,y){const F=h(g,x,M,w,S,y);M.transmission>0?a.push(F):M.transparent===!0?o.push(F):n.push(F)}function p(g,x,M,w,S,y){const F=h(g,x,M,w,S,y);M.transmission>0?a.unshift(F):M.transparent===!0?o.unshift(F):n.unshift(F)}function _(g,x,M){n.length>1&&n.sort(g||HR),a.length>1&&a.sort(x||yx),o.length>1&&o.sort(x||yx),M&&(n.reverse(),a.reverse(),o.reverse())}function v(){for(let g=e,x=s.length;g<x;g++){const M=s[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:n,transmissive:a,transparent:o,init:c,push:m,unshift:p,finish:v,sort:_}}function VR(){let s=new WeakMap;function e(a,o){const c=s.get(a);let u;return c===void 0?(u=new Sx,s.set(a,[u])):o>=c.length?(u=new Sx,c.push(u)):u=c[o],u}function n(){s=new WeakMap}return{get:e,dispose:n}}function GR(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new te,color:new $t};break;case"SpotLight":n={position:new te,direction:new te,color:new $t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new te,color:new $t,distance:0,decay:0};break;case"HemisphereLight":n={direction:new te,skyColor:new $t,groundColor:new $t};break;case"RectAreaLight":n={color:new $t,position:new te,halfWidth:new te,halfHeight:new te};break}return s[e.id]=n,n}}}function kR(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let XR=0;function WR(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function qR(s){const e=new GR,n=kR(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new te);const o=new te,c=new In,u=new In;function h(p){let _=0,v=0,g=0;for(let D=0;D<9;D++)a.probe[D].set(0,0,0);let x=0,M=0,w=0,S=0,y=0,F=0,O=0,R=0,I=0,N=0,H=0;p.sort(WR);for(let D=0,G=p.length;D<G;D++){const k=p[D],Z=k.color,ce=k.intensity,ie=k.distance;let K=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===Dr?K=k.shadow.map.texture:K=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)_+=Z.r*ce,v+=Z.g*ce,g+=Z.b*ce;else if(k.isLightProbe){for(let V=0;V<9;V++)a.probe[V].addScaledVector(k.sh.coefficients[V],ce);H++}else if(k.isDirectionalLight){const V=e.get(k);if(V.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const X=k.shadow,se=n.get(k);se.shadowIntensity=X.intensity,se.shadowBias=X.bias,se.shadowNormalBias=X.normalBias,se.shadowRadius=X.radius,se.shadowMapSize=X.mapSize,a.directionalShadow[x]=se,a.directionalShadowMap[x]=K,a.directionalShadowMatrix[x]=k.shadow.matrix,F++}a.directional[x]=V,x++}else if(k.isSpotLight){const V=e.get(k);V.position.setFromMatrixPosition(k.matrixWorld),V.color.copy(Z).multiplyScalar(ce),V.distance=ie,V.coneCos=Math.cos(k.angle),V.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),V.decay=k.decay,a.spot[w]=V;const X=k.shadow;if(k.map&&(a.spotLightMap[I]=k.map,I++,X.updateMatrices(k),k.castShadow&&N++),a.spotLightMatrix[w]=X.matrix,k.castShadow){const se=n.get(k);se.shadowIntensity=X.intensity,se.shadowBias=X.bias,se.shadowNormalBias=X.normalBias,se.shadowRadius=X.radius,se.shadowMapSize=X.mapSize,a.spotShadow[w]=se,a.spotShadowMap[w]=K,R++}w++}else if(k.isRectAreaLight){const V=e.get(k);V.color.copy(Z).multiplyScalar(ce),V.halfWidth.set(k.width*.5,0,0),V.halfHeight.set(0,k.height*.5,0),a.rectArea[S]=V,S++}else if(k.isPointLight){const V=e.get(k);if(V.color.copy(k.color).multiplyScalar(k.intensity),V.distance=k.distance,V.decay=k.decay,k.castShadow){const X=k.shadow,se=n.get(k);se.shadowIntensity=X.intensity,se.shadowBias=X.bias,se.shadowNormalBias=X.normalBias,se.shadowRadius=X.radius,se.shadowMapSize=X.mapSize,se.shadowCameraNear=X.camera.near,se.shadowCameraFar=X.camera.far,a.pointShadow[M]=se,a.pointShadowMap[M]=K,a.pointShadowMatrix[M]=k.shadow.matrix,O++}a.point[M]=V,M++}else if(k.isHemisphereLight){const V=e.get(k);V.skyColor.copy(k.color).multiplyScalar(ce),V.groundColor.copy(k.groundColor).multiplyScalar(ce),a.hemi[y]=V,y++}}S>0&&(s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=it.LTC_FLOAT_1,a.rectAreaLTC2=it.LTC_FLOAT_2):(a.rectAreaLTC1=it.LTC_HALF_1,a.rectAreaLTC2=it.LTC_HALF_2)),a.ambient[0]=_,a.ambient[1]=v,a.ambient[2]=g;const T=a.hash;(T.directionalLength!==x||T.pointLength!==M||T.spotLength!==w||T.rectAreaLength!==S||T.hemiLength!==y||T.numDirectionalShadows!==F||T.numPointShadows!==O||T.numSpotShadows!==R||T.numSpotMaps!==I||T.numLightProbes!==H)&&(a.directional.length=x,a.spot.length=w,a.rectArea.length=S,a.point.length=M,a.hemi.length=y,a.directionalShadow.length=F,a.directionalShadowMap.length=F,a.pointShadow.length=O,a.pointShadowMap.length=O,a.spotShadow.length=R,a.spotShadowMap.length=R,a.directionalShadowMatrix.length=F,a.pointShadowMatrix.length=O,a.spotLightMatrix.length=R+I-N,a.spotLightMap.length=I,a.numSpotLightShadowsWithMaps=N,a.numLightProbes=H,T.directionalLength=x,T.pointLength=M,T.spotLength=w,T.rectAreaLength=S,T.hemiLength=y,T.numDirectionalShadows=F,T.numPointShadows=O,T.numSpotShadows=R,T.numSpotMaps=I,T.numLightProbes=H,a.version=XR++)}function m(p,_){let v=0,g=0,x=0,M=0,w=0;const S=_.matrixWorldInverse;for(let y=0,F=p.length;y<F;y++){const O=p[y];if(O.isDirectionalLight){const R=a.directional[v];R.direction.setFromMatrixPosition(O.matrixWorld),o.setFromMatrixPosition(O.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(S),v++}else if(O.isSpotLight){const R=a.spot[x];R.position.setFromMatrixPosition(O.matrixWorld),R.position.applyMatrix4(S),R.direction.setFromMatrixPosition(O.matrixWorld),o.setFromMatrixPosition(O.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(S),x++}else if(O.isRectAreaLight){const R=a.rectArea[M];R.position.setFromMatrixPosition(O.matrixWorld),R.position.applyMatrix4(S),u.identity(),c.copy(O.matrixWorld),c.premultiply(S),u.extractRotation(c),R.halfWidth.set(O.width*.5,0,0),R.halfHeight.set(0,O.height*.5,0),R.halfWidth.applyMatrix4(u),R.halfHeight.applyMatrix4(u),M++}else if(O.isPointLight){const R=a.point[g];R.position.setFromMatrixPosition(O.matrixWorld),R.position.applyMatrix4(S),g++}else if(O.isHemisphereLight){const R=a.hemi[w];R.direction.setFromMatrixPosition(O.matrixWorld),R.direction.transformDirection(S),w++}}}return{setup:h,setupView:m,state:a}}function Mx(s){const e=new qR(s),n=[],a=[],o=[];function c(g){v.camera=g,n.length=0,a.length=0,o.length=0}function u(g){n.push(g)}function h(g){a.push(g)}function m(g){o.push(g)}function p(){e.setup(n)}function _(g){e.setupView(n,g)}const v={lightsArray:n,shadowsArray:a,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:v,setupLights:p,setupLightsView:_,pushLight:u,pushShadow:h,pushLightProbeGrid:m}}function YR(s){let e=new WeakMap;function n(o,c=0){const u=e.get(o);let h;return u===void 0?(h=new Mx(s),e.set(o,[h])):c>=u.length?(h=new Mx(s),u.push(h)):h=u[c],h}function a(){e=new WeakMap}return{get:n,dispose:a}}const ZR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,KR=[new te(1,0,0),new te(-1,0,0),new te(0,1,0),new te(0,-1,0),new te(0,0,1),new te(0,0,-1)],QR=[new te(0,-1,0),new te(0,-1,0),new te(0,0,1),new te(0,0,-1),new te(0,-1,0),new te(0,-1,0)],Ex=new In,Fl=new te,ip=new te;function JR(s,e,n){let a=new dy;const o=new dt,c=new dt,u=new Vn,h=new rT,m=new oT,p={},_=n.maxTextureSize,v={[$s]:zi,[zi]:$s,[fa]:fa},g=new Va({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:ZR,fragmentShader:jR}),x=g.clone();x.defines.HORIZONTAL_PASS=1;const M=new ha;M.setAttribute("position",new za(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Hn(M,g),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ju;let y=this.type;this.render=function(N,H,T){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||N.length===0)return;this.type===tE&&(xt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ju);const D=s.getRenderTarget(),G=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),Z=s.state;Z.setBlending(ps),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const ce=y!==this.type;ce&&H.traverse(function(ie){ie.material&&(Array.isArray(ie.material)?ie.material.forEach(K=>K.needsUpdate=!0):ie.material.needsUpdate=!0)});for(let ie=0,K=N.length;ie<K;ie++){const V=N[ie],X=V.shadow;if(X===void 0){xt("WebGLShadowMap:",V,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;o.copy(X.mapSize);const se=X.getFrameExtents();o.multiply(se),c.copy(X.mapSize),(o.x>_||o.y>_)&&(o.x>_&&(c.x=Math.floor(_/se.x),o.x=c.x*se.x,X.mapSize.x=c.x),o.y>_&&(c.y=Math.floor(_/se.y),o.y=c.y*se.y,X.mapSize.y=c.y));const pe=s.state.buffers.depth.getReversed();if(X.camera._reversedDepth=pe,X.map===null||ce===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Hl){if(V.isPointLight){xt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Ba(o.x,o.y,{format:Dr,type:gs,minFilter:Xn,magFilter:Xn,generateMipmaps:!1}),X.map.texture.name=V.name+".shadowMap",X.map.depthTexture=new Fo(o.x,o.y,Pa),X.map.depthTexture.name=V.name+".shadowMapDepth",X.map.depthTexture.format=vs,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=gi,X.map.depthTexture.magFilter=gi}else V.isPointLight?(X.map=new Dy(o.x),X.map.depthTexture=new Mb(o.x,Ha)):(X.map=new Ba(o.x,o.y),X.map.depthTexture=new Fo(o.x,o.y,Ha)),X.map.depthTexture.name=V.name+".shadowMap",X.map.depthTexture.format=vs,this.type===Ju?(X.map.depthTexture.compareFunction=pe?um:cm,X.map.depthTexture.minFilter=Xn,X.map.depthTexture.magFilter=Xn):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=gi,X.map.depthTexture.magFilter=gi);X.camera.updateProjectionMatrix()}const Ce=X.map.isWebGLCubeRenderTarget?6:1;for(let B=0;B<Ce;B++){if(X.map.isWebGLCubeRenderTarget)s.setRenderTarget(X.map,B),s.clear();else{B===0&&(s.setRenderTarget(X.map),s.clear());const ee=X.getViewport(B);u.set(c.x*ee.x,c.y*ee.y,c.x*ee.z,c.y*ee.w),Z.viewport(u)}if(V.isPointLight){const ee=X.camera,De=X.matrix,Te=V.distance||ee.far;Te!==ee.far&&(ee.far=Te,ee.updateProjectionMatrix()),Fl.setFromMatrixPosition(V.matrixWorld),ee.position.copy(Fl),ip.copy(ee.position),ip.add(KR[B]),ee.up.copy(QR[B]),ee.lookAt(ip),ee.updateMatrixWorld(),De.makeTranslation(-Fl.x,-Fl.y,-Fl.z),Ex.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Ex,ee.coordinateSystem,ee.reversedDepth)}else X.updateMatrices(V);a=X.getFrustum(),R(H,T,X.camera,V,this.type)}X.isPointLightShadow!==!0&&this.type===Hl&&F(X,T),X.needsUpdate=!1}y=this.type,S.needsUpdate=!1,s.setRenderTarget(D,G,k)};function F(N,H){const T=e.update(w);g.defines.VSM_SAMPLES!==N.blurSamples&&(g.defines.VSM_SAMPLES=N.blurSamples,x.defines.VSM_SAMPLES=N.blurSamples,g.needsUpdate=!0,x.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Ba(o.x,o.y,{format:Dr,type:gs})),g.uniforms.shadow_pass.value=N.map.depthTexture,g.uniforms.resolution.value=N.mapSize,g.uniforms.radius.value=N.radius,s.setRenderTarget(N.mapPass),s.clear(),s.renderBufferDirect(H,null,T,g,w,null),x.uniforms.shadow_pass.value=N.mapPass.texture,x.uniforms.resolution.value=N.mapSize,x.uniforms.radius.value=N.radius,s.setRenderTarget(N.map),s.clear(),s.renderBufferDirect(H,null,T,x,w,null)}function O(N,H,T,D){let G=null;const k=T.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(k!==void 0)G=k;else if(G=T.isPointLight===!0?m:h,s.localClippingEnabled&&H.clipShadows===!0&&Array.isArray(H.clippingPlanes)&&H.clippingPlanes.length!==0||H.displacementMap&&H.displacementScale!==0||H.alphaMap&&H.alphaTest>0||H.map&&H.alphaTest>0||H.alphaToCoverage===!0){const Z=G.uuid,ce=H.uuid;let ie=p[Z];ie===void 0&&(ie={},p[Z]=ie);let K=ie[ce];K===void 0&&(K=G.clone(),ie[ce]=K,H.addEventListener("dispose",I)),G=K}if(G.visible=H.visible,G.wireframe=H.wireframe,D===Hl?G.side=H.shadowSide!==null?H.shadowSide:H.side:G.side=H.shadowSide!==null?H.shadowSide:v[H.side],G.alphaMap=H.alphaMap,G.alphaTest=H.alphaToCoverage===!0?.5:H.alphaTest,G.map=H.map,G.clipShadows=H.clipShadows,G.clippingPlanes=H.clippingPlanes,G.clipIntersection=H.clipIntersection,G.displacementMap=H.displacementMap,G.displacementScale=H.displacementScale,G.displacementBias=H.displacementBias,G.wireframeLinewidth=H.wireframeLinewidth,G.linewidth=H.linewidth,T.isPointLight===!0&&G.isMeshDistanceMaterial===!0){const Z=s.properties.get(G);Z.light=T}return G}function R(N,H,T,D,G){if(N.visible===!1)return;if(N.layers.test(H.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&G===Hl)&&(!N.frustumCulled||a.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,N.matrixWorld);const ce=e.update(N),ie=N.material;if(Array.isArray(ie)){const K=ce.groups;for(let V=0,X=K.length;V<X;V++){const se=K[V],pe=ie[se.materialIndex];if(pe&&pe.visible){const Ce=O(N,pe,D,G);N.onBeforeShadow(s,N,H,T,ce,Ce,se),s.renderBufferDirect(T,null,ce,Ce,N,se),N.onAfterShadow(s,N,H,T,ce,Ce,se)}}}else if(ie.visible){const K=O(N,ie,D,G);N.onBeforeShadow(s,N,H,T,ce,K,null),s.renderBufferDirect(T,null,ce,K,N,null),N.onAfterShadow(s,N,H,T,ce,K,null)}}const Z=N.children;for(let ce=0,ie=Z.length;ce<ie;ce++)R(Z[ce],H,T,D,G)}function I(N){N.target.removeEventListener("dispose",I);for(const T in p){const D=p[T],G=N.target.uuid;G in D&&(D[G].dispose(),delete D[G])}}}function $R(s,e){function n(){let j=!1;const Ve=new Vn;let Se=null;const Xe=new Vn(0,0,0,0);return{setMask:function(tt){Se!==tt&&!j&&(s.colorMask(tt,tt,tt,tt),Se=tt)},setLocked:function(tt){j=tt},setClear:function(tt,Le,nt,rt,ln){ln===!0&&(tt*=rt,Le*=rt,nt*=rt),Ve.set(tt,Le,nt,rt),Xe.equals(Ve)===!1&&(s.clearColor(tt,Le,nt,rt),Xe.copy(Ve))},reset:function(){j=!1,Se=null,Xe.set(-1,0,0,0)}}}function a(){let j=!1,Ve=!1,Se=null,Xe=null,tt=null;return{setReversed:function(Le){if(Ve!==Le){const nt=e.get("EXT_clip_control");Le?nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.ZERO_TO_ONE_EXT):nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.NEGATIVE_ONE_TO_ONE_EXT),Ve=Le;const rt=tt;tt=null,this.setClear(rt)}},getReversed:function(){return Ve},setTest:function(Le){Le?he(s.DEPTH_TEST):Ue(s.DEPTH_TEST)},setMask:function(Le){Se!==Le&&!j&&(s.depthMask(Le),Se=Le)},setFunc:function(Le){if(Ve&&(Le=OE[Le]),Xe!==Le){switch(Le){case up:s.depthFunc(s.NEVER);break;case fp:s.depthFunc(s.ALWAYS);break;case dp:s.depthFunc(s.LESS);break;case Po:s.depthFunc(s.LEQUAL);break;case hp:s.depthFunc(s.EQUAL);break;case pp:s.depthFunc(s.GEQUAL);break;case mp:s.depthFunc(s.GREATER);break;case gp:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Xe=Le}},setLocked:function(Le){j=Le},setClear:function(Le){tt!==Le&&(tt=Le,Ve&&(Le=1-Le),s.clearDepth(Le))},reset:function(){j=!1,Se=null,Xe=null,tt=null,Ve=!1}}}function o(){let j=!1,Ve=null,Se=null,Xe=null,tt=null,Le=null,nt=null,rt=null,ln=null;return{setTest:function(Wt){j||(Wt?he(s.STENCIL_TEST):Ue(s.STENCIL_TEST))},setMask:function(Wt){Ve!==Wt&&!j&&(s.stencilMask(Wt),Ve=Wt)},setFunc:function(Wt,Rn,Jn){(Se!==Wt||Xe!==Rn||tt!==Jn)&&(s.stencilFunc(Wt,Rn,Jn),Se=Wt,Xe=Rn,tt=Jn)},setOp:function(Wt,Rn,Jn){(Le!==Wt||nt!==Rn||rt!==Jn)&&(s.stencilOp(Wt,Rn,Jn),Le=Wt,nt=Rn,rt=Jn)},setLocked:function(Wt){j=Wt},setClear:function(Wt){ln!==Wt&&(s.clearStencil(Wt),ln=Wt)},reset:function(){j=!1,Ve=null,Se=null,Xe=null,tt=null,Le=null,nt=null,rt=null,ln=null}}}const c=new n,u=new a,h=new o,m=new WeakMap,p=new WeakMap;let _={},v={},g={},x=new WeakMap,M=[],w=null,S=!1,y=null,F=null,O=null,R=null,I=null,N=null,H=null,T=new $t(0,0,0),D=0,G=!1,k=null,Z=null,ce=null,ie=null,K=null;const V=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,se=0;const pe=s.getParameter(s.VERSION);pe.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(pe)[1]),X=se>=1):pe.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(pe)[1]),X=se>=2);let Ce=null,B={};const ee=s.getParameter(s.SCISSOR_BOX),De=s.getParameter(s.VIEWPORT),Te=new Vn().fromArray(ee),qe=new Vn().fromArray(De);function re(j,Ve,Se,Xe){const tt=new Uint8Array(4),Le=s.createTexture();s.bindTexture(j,Le),s.texParameteri(j,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(j,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let nt=0;nt<Se;nt++)j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?s.texImage3D(Ve,0,s.RGBA,1,1,Xe,0,s.RGBA,s.UNSIGNED_BYTE,tt):s.texImage2D(Ve+nt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,tt);return Le}const be={};be[s.TEXTURE_2D]=re(s.TEXTURE_2D,s.TEXTURE_2D,1),be[s.TEXTURE_CUBE_MAP]=re(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[s.TEXTURE_2D_ARRAY]=re(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),be[s.TEXTURE_3D]=re(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),h.setClear(0),he(s.DEPTH_TEST),u.setFunc(Po),nn(!1),rn(d_),he(s.CULL_FACE),wt(ps);function he(j){_[j]!==!0&&(s.enable(j),_[j]=!0)}function Ue(j){_[j]!==!1&&(s.disable(j),_[j]=!1)}function st(j,Ve){return g[j]!==Ve?(s.bindFramebuffer(j,Ve),g[j]=Ve,j===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Ve),j===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Ve),!0):!1}function et(j,Ve){let Se=M,Xe=!1;if(j){Se=x.get(Ve),Se===void 0&&(Se=[],x.set(Ve,Se));const tt=j.textures;if(Se.length!==tt.length||Se[0]!==s.COLOR_ATTACHMENT0){for(let Le=0,nt=tt.length;Le<nt;Le++)Se[Le]=s.COLOR_ATTACHMENT0+Le;Se.length=tt.length,Xe=!0}}else Se[0]!==s.BACK&&(Se[0]=s.BACK,Xe=!0);Xe&&s.drawBuffers(Se)}function bt(j){return w!==j?(s.useProgram(j),w=j,!0):!1}const pt={[Tr]:s.FUNC_ADD,[iE]:s.FUNC_SUBTRACT,[aE]:s.FUNC_REVERSE_SUBTRACT};pt[sE]=s.MIN,pt[rE]=s.MAX;const Tt={[oE]:s.ZERO,[lE]:s.ONE,[cE]:s.SRC_COLOR,[lp]:s.SRC_ALPHA,[mE]:s.SRC_ALPHA_SATURATE,[hE]:s.DST_COLOR,[fE]:s.DST_ALPHA,[uE]:s.ONE_MINUS_SRC_COLOR,[cp]:s.ONE_MINUS_SRC_ALPHA,[pE]:s.ONE_MINUS_DST_COLOR,[dE]:s.ONE_MINUS_DST_ALPHA,[gE]:s.CONSTANT_COLOR,[vE]:s.ONE_MINUS_CONSTANT_COLOR,[_E]:s.CONSTANT_ALPHA,[xE]:s.ONE_MINUS_CONSTANT_ALPHA};function wt(j,Ve,Se,Xe,tt,Le,nt,rt,ln,Wt){if(j===ps){S===!0&&(Ue(s.BLEND),S=!1);return}if(S===!1&&(he(s.BLEND),S=!0),j!==nE){if(j!==y||Wt!==G){if((F!==Tr||I!==Tr)&&(s.blendEquation(s.FUNC_ADD),F=Tr,I=Tr),Wt)switch(j){case Lo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case h_:s.blendFunc(s.ONE,s.ONE);break;case p_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case m_:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Jt("WebGLState: Invalid blending: ",j);break}else switch(j){case Lo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case h_:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case p_:Jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case m_:Jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Jt("WebGLState: Invalid blending: ",j);break}O=null,R=null,N=null,H=null,T.set(0,0,0),D=0,y=j,G=Wt}return}tt=tt||Ve,Le=Le||Se,nt=nt||Xe,(Ve!==F||tt!==I)&&(s.blendEquationSeparate(pt[Ve],pt[tt]),F=Ve,I=tt),(Se!==O||Xe!==R||Le!==N||nt!==H)&&(s.blendFuncSeparate(Tt[Se],Tt[Xe],Tt[Le],Tt[nt]),O=Se,R=Xe,N=Le,H=nt),(rt.equals(T)===!1||ln!==D)&&(s.blendColor(rt.r,rt.g,rt.b,ln),T.copy(rt),D=ln),y=j,G=!1}function Lt(j,Ve){j.side===fa?Ue(s.CULL_FACE):he(s.CULL_FACE);let Se=j.side===zi;Ve&&(Se=!Se),nn(Se),j.blending===Lo&&j.transparent===!1?wt(ps):wt(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),u.setFunc(j.depthFunc),u.setTest(j.depthTest),u.setMask(j.depthWrite),c.setMask(j.colorWrite);const Xe=j.stencilWrite;h.setTest(Xe),Xe&&(h.setMask(j.stencilWriteMask),h.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),h.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),un(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?he(s.SAMPLE_ALPHA_TO_COVERAGE):Ue(s.SAMPLE_ALPHA_TO_COVERAGE)}function nn(j){k!==j&&(j?s.frontFace(s.CW):s.frontFace(s.CCW),k=j)}function rn(j){j!==$M?(he(s.CULL_FACE),j!==Z&&(j===d_?s.cullFace(s.BACK):j===eE?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ue(s.CULL_FACE),Z=j}function on(j){j!==ce&&(X&&s.lineWidth(j),ce=j)}function un(j,Ve,Se){j?(he(s.POLYGON_OFFSET_FILL),(ie!==Ve||K!==Se)&&(ie=Ve,K=Se,u.getReversed()&&(Ve=-Ve),s.polygonOffset(Ve,Se))):Ue(s.POLYGON_OFFSET_FILL)}function Ht(j){j?he(s.SCISSOR_TEST):Ue(s.SCISSOR_TEST)}function jt(j){j===void 0&&(j=s.TEXTURE0+V-1),Ce!==j&&(s.activeTexture(j),Ce=j)}function $(j,Ve,Se){Se===void 0&&(Ce===null?Se=s.TEXTURE0+V-1:Se=Ce);let Xe=B[Se];Xe===void 0&&(Xe={type:void 0,texture:void 0},B[Se]=Xe),(Xe.type!==j||Xe.texture!==Ve)&&(Ce!==Se&&(s.activeTexture(Se),Ce=Se),s.bindTexture(j,Ve||be[j]),Xe.type=j,Xe.texture=Ve)}function Bt(){const j=B[Ce];j!==void 0&&j.type!==void 0&&(s.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function Pt(){try{s.compressedTexImage2D(...arguments)}catch(j){Jt("WebGLState:",j)}}function z(){try{s.compressedTexImage3D(...arguments)}catch(j){Jt("WebGLState:",j)}}function A(){try{s.texSubImage2D(...arguments)}catch(j){Jt("WebGLState:",j)}}function ne(){try{s.texSubImage3D(...arguments)}catch(j){Jt("WebGLState:",j)}}function oe(){try{s.compressedTexSubImage2D(...arguments)}catch(j){Jt("WebGLState:",j)}}function ue(){try{s.compressedTexSubImage3D(...arguments)}catch(j){Jt("WebGLState:",j)}}function Pe(){try{s.texStorage2D(...arguments)}catch(j){Jt("WebGLState:",j)}}function He(){try{s.texStorage3D(...arguments)}catch(j){Jt("WebGLState:",j)}}function _e(){try{s.texImage2D(...arguments)}catch(j){Jt("WebGLState:",j)}}function ge(){try{s.texImage3D(...arguments)}catch(j){Jt("WebGLState:",j)}}function Be(j){return v[j]!==void 0?v[j]:s.getParameter(j)}function Je(j,Ve){v[j]!==Ve&&(s.pixelStorei(j,Ve),v[j]=Ve)}function We(j){Te.equals(j)===!1&&(s.scissor(j.x,j.y,j.z,j.w),Te.copy(j))}function Ze(j){qe.equals(j)===!1&&(s.viewport(j.x,j.y,j.z,j.w),qe.copy(j))}function ot(j,Ve){let Se=p.get(Ve);Se===void 0&&(Se=new WeakMap,p.set(Ve,Se));let Xe=Se.get(j);Xe===void 0&&(Xe=s.getUniformBlockIndex(Ve,j.name),Se.set(j,Xe))}function je(j,Ve){const Xe=p.get(Ve).get(j);m.get(Ve)!==Xe&&(s.uniformBlockBinding(Ve,Xe,j.__bindingPointIndex),m.set(Ve,Xe))}function at(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),_={},v={},Ce=null,B={},g={},x=new WeakMap,M=[],w=null,S=!1,y=null,F=null,O=null,R=null,I=null,N=null,H=null,T=new $t(0,0,0),D=0,G=!1,k=null,Z=null,ce=null,ie=null,K=null,Te.set(0,0,s.canvas.width,s.canvas.height),qe.set(0,0,s.canvas.width,s.canvas.height),c.reset(),u.reset(),h.reset()}return{buffers:{color:c,depth:u,stencil:h},enable:he,disable:Ue,bindFramebuffer:st,drawBuffers:et,useProgram:bt,setBlending:wt,setMaterial:Lt,setFlipSided:nn,setCullFace:rn,setLineWidth:on,setPolygonOffset:un,setScissorTest:Ht,activeTexture:jt,bindTexture:$,unbindTexture:Bt,compressedTexImage2D:Pt,compressedTexImage3D:z,texImage2D:_e,texImage3D:ge,pixelStorei:Je,getParameter:Be,updateUBOMapping:ot,uniformBlockBinding:je,texStorage2D:Pe,texStorage3D:He,texSubImage2D:A,texSubImage3D:ne,compressedTexSubImage2D:oe,compressedTexSubImage3D:ue,scissor:We,viewport:Ze,reset:at}}function eC(s,e,n,a,o,c,u){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new dt,_=new WeakMap,v=new Set;let g;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(z,A){return M?new OffscreenCanvas(z,A):nc("canvas")}function S(z,A,ne){let oe=1;const ue=Pt(z);if((ue.width>ne||ue.height>ne)&&(oe=ne/Math.max(ue.width,ue.height)),oe<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const Pe=Math.floor(oe*ue.width),He=Math.floor(oe*ue.height);g===void 0&&(g=w(Pe,He));const _e=A?w(Pe,He):g;return _e.width=Pe,_e.height=He,_e.getContext("2d").drawImage(z,0,0,Pe,He),xt("WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+Pe+"x"+He+")."),_e}else return"data"in z&&xt("WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),z;return z}function y(z){return z.generateMipmaps}function F(z){s.generateMipmap(z)}function O(z){return z.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?s.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function R(z,A,ne,oe,ue,Pe=!1){if(z!==null){if(s[z]!==void 0)return s[z];xt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let He;oe&&(He=e.get("EXT_texture_norm16"),He||xt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let _e=A;if(A===s.RED&&(ne===s.FLOAT&&(_e=s.R32F),ne===s.HALF_FLOAT&&(_e=s.R16F),ne===s.UNSIGNED_BYTE&&(_e=s.R8),ne===s.UNSIGNED_SHORT&&He&&(_e=He.R16_EXT),ne===s.SHORT&&He&&(_e=He.R16_SNORM_EXT)),A===s.RED_INTEGER&&(ne===s.UNSIGNED_BYTE&&(_e=s.R8UI),ne===s.UNSIGNED_SHORT&&(_e=s.R16UI),ne===s.UNSIGNED_INT&&(_e=s.R32UI),ne===s.BYTE&&(_e=s.R8I),ne===s.SHORT&&(_e=s.R16I),ne===s.INT&&(_e=s.R32I)),A===s.RG&&(ne===s.FLOAT&&(_e=s.RG32F),ne===s.HALF_FLOAT&&(_e=s.RG16F),ne===s.UNSIGNED_BYTE&&(_e=s.RG8),ne===s.UNSIGNED_SHORT&&He&&(_e=He.RG16_EXT),ne===s.SHORT&&He&&(_e=He.RG16_SNORM_EXT)),A===s.RG_INTEGER&&(ne===s.UNSIGNED_BYTE&&(_e=s.RG8UI),ne===s.UNSIGNED_SHORT&&(_e=s.RG16UI),ne===s.UNSIGNED_INT&&(_e=s.RG32UI),ne===s.BYTE&&(_e=s.RG8I),ne===s.SHORT&&(_e=s.RG16I),ne===s.INT&&(_e=s.RG32I)),A===s.RGB_INTEGER&&(ne===s.UNSIGNED_BYTE&&(_e=s.RGB8UI),ne===s.UNSIGNED_SHORT&&(_e=s.RGB16UI),ne===s.UNSIGNED_INT&&(_e=s.RGB32UI),ne===s.BYTE&&(_e=s.RGB8I),ne===s.SHORT&&(_e=s.RGB16I),ne===s.INT&&(_e=s.RGB32I)),A===s.RGBA_INTEGER&&(ne===s.UNSIGNED_BYTE&&(_e=s.RGBA8UI),ne===s.UNSIGNED_SHORT&&(_e=s.RGBA16UI),ne===s.UNSIGNED_INT&&(_e=s.RGBA32UI),ne===s.BYTE&&(_e=s.RGBA8I),ne===s.SHORT&&(_e=s.RGBA16I),ne===s.INT&&(_e=s.RGBA32I)),A===s.RGB&&(ne===s.UNSIGNED_SHORT&&He&&(_e=He.RGB16_EXT),ne===s.SHORT&&He&&(_e=He.RGB16_SNORM_EXT),ne===s.UNSIGNED_INT_5_9_9_9_REV&&(_e=s.RGB9_E5),ne===s.UNSIGNED_INT_10F_11F_11F_REV&&(_e=s.R11F_G11F_B10F)),A===s.RGBA){const ge=Pe?cf:Qt.getTransfer(ue);ne===s.FLOAT&&(_e=s.RGBA32F),ne===s.HALF_FLOAT&&(_e=s.RGBA16F),ne===s.UNSIGNED_BYTE&&(_e=ge===hn?s.SRGB8_ALPHA8:s.RGBA8),ne===s.UNSIGNED_SHORT&&He&&(_e=He.RGBA16_EXT),ne===s.SHORT&&He&&(_e=He.RGBA16_SNORM_EXT),ne===s.UNSIGNED_SHORT_4_4_4_4&&(_e=s.RGBA4),ne===s.UNSIGNED_SHORT_5_5_5_1&&(_e=s.RGB5_A1)}return(_e===s.R16F||_e===s.R32F||_e===s.RG16F||_e===s.RG32F||_e===s.RGBA16F||_e===s.RGBA32F)&&e.get("EXT_color_buffer_float"),_e}function I(z,A){let ne;return z?A===null||A===Ha||A===tc?ne=s.DEPTH24_STENCIL8:A===Pa?ne=s.DEPTH32F_STENCIL8:A===ec&&(ne=s.DEPTH24_STENCIL8,xt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Ha||A===tc?ne=s.DEPTH_COMPONENT24:A===Pa?ne=s.DEPTH_COMPONENT32F:A===ec&&(ne=s.DEPTH_COMPONENT16),ne}function N(z,A){return y(z)===!0||z.isFramebufferTexture&&z.minFilter!==gi&&z.minFilter!==Xn?Math.log2(Math.max(A.width,A.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?A.mipmaps.length:1}function H(z){const A=z.target;A.removeEventListener("dispose",H),D(A),A.isVideoTexture&&_.delete(A),A.isHTMLTexture&&v.delete(A)}function T(z){const A=z.target;A.removeEventListener("dispose",T),k(A)}function D(z){const A=a.get(z);if(A.__webglInit===void 0)return;const ne=z.source,oe=x.get(ne);if(oe){const ue=oe[A.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&G(z),Object.keys(oe).length===0&&x.delete(ne)}a.remove(z)}function G(z){const A=a.get(z);s.deleteTexture(A.__webglTexture);const ne=z.source,oe=x.get(ne);delete oe[A.__cacheKey],u.memory.textures--}function k(z){const A=a.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),a.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(A.__webglFramebuffer[oe]))for(let ue=0;ue<A.__webglFramebuffer[oe].length;ue++)s.deleteFramebuffer(A.__webglFramebuffer[oe][ue]);else s.deleteFramebuffer(A.__webglFramebuffer[oe]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[oe])}else{if(Array.isArray(A.__webglFramebuffer))for(let oe=0;oe<A.__webglFramebuffer.length;oe++)s.deleteFramebuffer(A.__webglFramebuffer[oe]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let oe=0;oe<A.__webglColorRenderbuffer.length;oe++)A.__webglColorRenderbuffer[oe]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[oe]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const ne=z.textures;for(let oe=0,ue=ne.length;oe<ue;oe++){const Pe=a.get(ne[oe]);Pe.__webglTexture&&(s.deleteTexture(Pe.__webglTexture),u.memory.textures--),a.remove(ne[oe])}a.remove(z)}let Z=0;function ce(){Z=0}function ie(){return Z}function K(z){Z=z}function V(){const z=Z;return z>=o.maxTextures&&xt("WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+o.maxTextures),Z+=1,z}function X(z){const A=[];return A.push(z.wrapS),A.push(z.wrapT),A.push(z.wrapR||0),A.push(z.magFilter),A.push(z.minFilter),A.push(z.anisotropy),A.push(z.internalFormat),A.push(z.format),A.push(z.type),A.push(z.generateMipmaps),A.push(z.premultiplyAlpha),A.push(z.flipY),A.push(z.unpackAlignment),A.push(z.colorSpace),A.join()}function se(z,A){const ne=a.get(z);if(z.isVideoTexture&&$(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&ne.__version!==z.version){const oe=z.image;if(oe===null)xt("WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)xt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ue(ne,z,A);return}}else z.isExternalTexture&&(ne.__webglTexture=z.sourceTexture?z.sourceTexture:null);n.bindTexture(s.TEXTURE_2D,ne.__webglTexture,s.TEXTURE0+A)}function pe(z,A){const ne=a.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&ne.__version!==z.version){Ue(ne,z,A);return}else z.isExternalTexture&&(ne.__webglTexture=z.sourceTexture?z.sourceTexture:null);n.bindTexture(s.TEXTURE_2D_ARRAY,ne.__webglTexture,s.TEXTURE0+A)}function Ce(z,A){const ne=a.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&ne.__version!==z.version){Ue(ne,z,A);return}n.bindTexture(s.TEXTURE_3D,ne.__webglTexture,s.TEXTURE0+A)}function B(z,A){const ne=a.get(z);if(z.isCubeDepthTexture!==!0&&z.version>0&&ne.__version!==z.version){st(ne,z,A);return}n.bindTexture(s.TEXTURE_CUBE_MAP,ne.__webglTexture,s.TEXTURE0+A)}const ee={[$l]:s.REPEAT,[Ma]:s.CLAMP_TO_EDGE,[vp]:s.MIRRORED_REPEAT},De={[gi]:s.NEAREST,[ME]:s.NEAREST_MIPMAP_NEAREST,[_u]:s.NEAREST_MIPMAP_LINEAR,[Xn]:s.LINEAR,[bh]:s.LINEAR_MIPMAP_NEAREST,[Ks]:s.LINEAR_MIPMAP_LINEAR},Te={[TE]:s.NEVER,[DE]:s.ALWAYS,[AE]:s.LESS,[cm]:s.LEQUAL,[wE]:s.EQUAL,[um]:s.GEQUAL,[RE]:s.GREATER,[CE]:s.NOTEQUAL};function qe(z,A){if(A.type===Pa&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Xn||A.magFilter===bh||A.magFilter===_u||A.magFilter===Ks||A.minFilter===Xn||A.minFilter===bh||A.minFilter===_u||A.minFilter===Ks)&&xt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(z,s.TEXTURE_WRAP_S,ee[A.wrapS]),s.texParameteri(z,s.TEXTURE_WRAP_T,ee[A.wrapT]),(z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY)&&s.texParameteri(z,s.TEXTURE_WRAP_R,ee[A.wrapR]),s.texParameteri(z,s.TEXTURE_MAG_FILTER,De[A.magFilter]),s.texParameteri(z,s.TEXTURE_MIN_FILTER,De[A.minFilter]),A.compareFunction&&(s.texParameteri(z,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(z,s.TEXTURE_COMPARE_FUNC,Te[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===gi||A.minFilter!==_u&&A.minFilter!==Ks||A.type===Pa&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||a.get(A).__currentAnisotropy){const ne=e.get("EXT_texture_filter_anisotropic");s.texParameterf(z,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,o.getMaxAnisotropy())),a.get(A).__currentAnisotropy=A.anisotropy}}}function re(z,A){let ne=!1;z.__webglInit===void 0&&(z.__webglInit=!0,A.addEventListener("dispose",H));const oe=A.source;let ue=x.get(oe);ue===void 0&&(ue={},x.set(oe,ue));const Pe=X(A);if(Pe!==z.__cacheKey){ue[Pe]===void 0&&(ue[Pe]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,ne=!0),ue[Pe].usedTimes++;const He=ue[z.__cacheKey];He!==void 0&&(ue[z.__cacheKey].usedTimes--,He.usedTimes===0&&G(A)),z.__cacheKey=Pe,z.__webglTexture=ue[Pe].texture}return ne}function be(z,A,ne){return Math.floor(Math.floor(z/ne)/A)}function he(z,A,ne,oe){const Pe=z.updateRanges;if(Pe.length===0)n.texSubImage2D(s.TEXTURE_2D,0,0,0,A.width,A.height,ne,oe,A.data);else{Pe.sort((Je,We)=>Je.start-We.start);let He=0;for(let Je=1;Je<Pe.length;Je++){const We=Pe[He],Ze=Pe[Je],ot=We.start+We.count,je=be(Ze.start,A.width,4),at=be(We.start,A.width,4);Ze.start<=ot+1&&je===at&&be(Ze.start+Ze.count-1,A.width,4)===je?We.count=Math.max(We.count,Ze.start+Ze.count-We.start):(++He,Pe[He]=Ze)}Pe.length=He+1;const _e=n.getParameter(s.UNPACK_ROW_LENGTH),ge=n.getParameter(s.UNPACK_SKIP_PIXELS),Be=n.getParameter(s.UNPACK_SKIP_ROWS);n.pixelStorei(s.UNPACK_ROW_LENGTH,A.width);for(let Je=0,We=Pe.length;Je<We;Je++){const Ze=Pe[Je],ot=Math.floor(Ze.start/4),je=Math.ceil(Ze.count/4),at=ot%A.width,j=Math.floor(ot/A.width),Ve=je,Se=1;n.pixelStorei(s.UNPACK_SKIP_PIXELS,at),n.pixelStorei(s.UNPACK_SKIP_ROWS,j),n.texSubImage2D(s.TEXTURE_2D,0,at,j,Ve,Se,ne,oe,A.data)}z.clearUpdateRanges(),n.pixelStorei(s.UNPACK_ROW_LENGTH,_e),n.pixelStorei(s.UNPACK_SKIP_PIXELS,ge),n.pixelStorei(s.UNPACK_SKIP_ROWS,Be)}}function Ue(z,A,ne){let oe=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(oe=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(oe=s.TEXTURE_3D);const ue=re(z,A),Pe=A.source;n.bindTexture(oe,z.__webglTexture,s.TEXTURE0+ne);const He=a.get(Pe);if(Pe.version!==He.__version||ue===!0){if(n.activeTexture(s.TEXTURE0+ne),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){const Se=Qt.getPrimaries(Qt.workingColorSpace),Xe=A.colorSpace===js?null:Qt.getPrimaries(A.colorSpace),tt=A.colorSpace===js||Se===Xe?s.NONE:s.BROWSER_DEFAULT_WEBGL;n.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt)}n.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment);let ge=S(A.image,!1,o.maxTextureSize);ge=Bt(A,ge);const Be=c.convert(A.format,A.colorSpace),Je=c.convert(A.type);let We=R(A.internalFormat,Be,Je,A.normalized,A.colorSpace,A.isVideoTexture);qe(oe,A);let Ze;const ot=A.mipmaps,je=A.isVideoTexture!==!0,at=He.__version===void 0||ue===!0,j=Pe.dataReady,Ve=N(A,ge);if(A.isDepthTexture)We=I(A.format===Rr,A.type),at&&(je?n.texStorage2D(s.TEXTURE_2D,1,We,ge.width,ge.height):n.texImage2D(s.TEXTURE_2D,0,We,ge.width,ge.height,0,Be,Je,null));else if(A.isDataTexture)if(ot.length>0){je&&at&&n.texStorage2D(s.TEXTURE_2D,Ve,We,ot[0].width,ot[0].height);for(let Se=0,Xe=ot.length;Se<Xe;Se++)Ze=ot[Se],je?j&&n.texSubImage2D(s.TEXTURE_2D,Se,0,0,Ze.width,Ze.height,Be,Je,Ze.data):n.texImage2D(s.TEXTURE_2D,Se,We,Ze.width,Ze.height,0,Be,Je,Ze.data);A.generateMipmaps=!1}else je?(at&&n.texStorage2D(s.TEXTURE_2D,Ve,We,ge.width,ge.height),j&&he(A,ge,Be,Je)):n.texImage2D(s.TEXTURE_2D,0,We,ge.width,ge.height,0,Be,Je,ge.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){je&&at&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ve,We,ot[0].width,ot[0].height,ge.depth);for(let Se=0,Xe=ot.length;Se<Xe;Se++)if(Ze=ot[Se],A.format!==Ea)if(Be!==null)if(je){if(j)if(A.layerUpdates.size>0){const tt=ex(Ze.width,Ze.height,A.format,A.type);for(const Le of A.layerUpdates){const nt=Ze.data.subarray(Le*tt/Ze.data.BYTES_PER_ELEMENT,(Le+1)*tt/Ze.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Se,0,0,Le,Ze.width,Ze.height,1,Be,nt)}A.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Se,0,0,0,Ze.width,Ze.height,ge.depth,Be,Ze.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Se,We,Ze.width,Ze.height,ge.depth,0,Ze.data,0,0);else xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else je?j&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,Se,0,0,0,Ze.width,Ze.height,ge.depth,Be,Je,Ze.data):n.texImage3D(s.TEXTURE_2D_ARRAY,Se,We,Ze.width,Ze.height,ge.depth,0,Be,Je,Ze.data)}else{je&&at&&n.texStorage2D(s.TEXTURE_2D,Ve,We,ot[0].width,ot[0].height);for(let Se=0,Xe=ot.length;Se<Xe;Se++)Ze=ot[Se],A.format!==Ea?Be!==null?je?j&&n.compressedTexSubImage2D(s.TEXTURE_2D,Se,0,0,Ze.width,Ze.height,Be,Ze.data):n.compressedTexImage2D(s.TEXTURE_2D,Se,We,Ze.width,Ze.height,0,Ze.data):xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?j&&n.texSubImage2D(s.TEXTURE_2D,Se,0,0,Ze.width,Ze.height,Be,Je,Ze.data):n.texImage2D(s.TEXTURE_2D,Se,We,Ze.width,Ze.height,0,Be,Je,Ze.data)}else if(A.isDataArrayTexture)if(je){if(at&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ve,We,ge.width,ge.height,ge.depth),j)if(A.layerUpdates.size>0){const Se=ex(ge.width,ge.height,A.format,A.type);for(const Xe of A.layerUpdates){const tt=ge.data.subarray(Xe*Se/ge.data.BYTES_PER_ELEMENT,(Xe+1)*Se/ge.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Xe,ge.width,ge.height,1,Be,Je,tt)}A.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Be,Je,ge.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,We,ge.width,ge.height,ge.depth,0,Be,Je,ge.data);else if(A.isData3DTexture)je?(at&&n.texStorage3D(s.TEXTURE_3D,Ve,We,ge.width,ge.height,ge.depth),j&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Be,Je,ge.data)):n.texImage3D(s.TEXTURE_3D,0,We,ge.width,ge.height,ge.depth,0,Be,Je,ge.data);else if(A.isFramebufferTexture){if(at)if(je)n.texStorage2D(s.TEXTURE_2D,Ve,We,ge.width,ge.height);else{let Se=ge.width,Xe=ge.height;for(let tt=0;tt<Ve;tt++)n.texImage2D(s.TEXTURE_2D,tt,We,Se,Xe,0,Be,Je,null),Se>>=1,Xe>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in s){const Se=s.canvas;if(Se.hasAttribute("layoutsubtree")||Se.setAttribute("layoutsubtree","true"),ge.parentNode!==Se){Se.appendChild(ge),v.add(A),Se.onpaint=Xe=>{const tt=Xe.changedElements;for(const Le of v)tt.includes(Le.image)&&(Le.needsUpdate=!0)},Se.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ge);else{const tt=s.RGBA,Le=s.RGBA,nt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,tt,Le,nt,ge)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(ot.length>0){if(je&&at){const Se=Pt(ot[0]);n.texStorage2D(s.TEXTURE_2D,Ve,We,Se.width,Se.height)}for(let Se=0,Xe=ot.length;Se<Xe;Se++)Ze=ot[Se],je?j&&n.texSubImage2D(s.TEXTURE_2D,Se,0,0,Be,Je,Ze):n.texImage2D(s.TEXTURE_2D,Se,We,Be,Je,Ze);A.generateMipmaps=!1}else if(je){if(at){const Se=Pt(ge);n.texStorage2D(s.TEXTURE_2D,Ve,We,Se.width,Se.height)}j&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Be,Je,ge)}else n.texImage2D(s.TEXTURE_2D,0,We,Be,Je,ge);y(A)&&F(oe),He.__version=Pe.version,A.onUpdate&&A.onUpdate(A)}z.__version=A.version}function st(z,A,ne){if(A.image.length!==6)return;const oe=re(z,A),ue=A.source;n.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+ne);const Pe=a.get(ue);if(ue.version!==Pe.__version||oe===!0){n.activeTexture(s.TEXTURE0+ne);const He=Qt.getPrimaries(Qt.workingColorSpace),_e=A.colorSpace===js?null:Qt.getPrimaries(A.colorSpace),ge=A.colorSpace===js||He===_e?s.NONE:s.BROWSER_DEFAULT_WEBGL;n.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Be=A.isCompressedTexture||A.image[0].isCompressedTexture,Je=A.image[0]&&A.image[0].isDataTexture,We=[];for(let Le=0;Le<6;Le++)!Be&&!Je?We[Le]=S(A.image[Le],!0,o.maxCubemapSize):We[Le]=Je?A.image[Le].image:A.image[Le],We[Le]=Bt(A,We[Le]);const Ze=We[0],ot=c.convert(A.format,A.colorSpace),je=c.convert(A.type),at=R(A.internalFormat,ot,je,A.normalized,A.colorSpace),j=A.isVideoTexture!==!0,Ve=Pe.__version===void 0||oe===!0,Se=ue.dataReady;let Xe=N(A,Ze);qe(s.TEXTURE_CUBE_MAP,A);let tt;if(Be){j&&Ve&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Xe,at,Ze.width,Ze.height);for(let Le=0;Le<6;Le++){tt=We[Le].mipmaps;for(let nt=0;nt<tt.length;nt++){const rt=tt[nt];A.format!==Ea?ot!==null?j?Se&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Le,nt,0,0,rt.width,rt.height,ot,rt.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Le,nt,at,rt.width,rt.height,0,rt.data):xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?Se&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Le,nt,0,0,rt.width,rt.height,ot,je,rt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Le,nt,at,rt.width,rt.height,0,ot,je,rt.data)}}}else{if(tt=A.mipmaps,j&&Ve){tt.length>0&&Xe++;const Le=Pt(We[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Xe,at,Le.width,Le.height)}for(let Le=0;Le<6;Le++)if(Je){j?Se&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,0,0,We[Le].width,We[Le].height,ot,je,We[Le].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,at,We[Le].width,We[Le].height,0,ot,je,We[Le].data);for(let nt=0;nt<tt.length;nt++){const ln=tt[nt].image[Le].image;j?Se&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Le,nt+1,0,0,ln.width,ln.height,ot,je,ln.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Le,nt+1,at,ln.width,ln.height,0,ot,je,ln.data)}}else{j?Se&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,0,0,ot,je,We[Le]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,at,ot,je,We[Le]);for(let nt=0;nt<tt.length;nt++){const rt=tt[nt];j?Se&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Le,nt+1,0,0,ot,je,rt.image[Le]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Le,nt+1,at,ot,je,rt.image[Le])}}}y(A)&&F(s.TEXTURE_CUBE_MAP),Pe.__version=ue.version,A.onUpdate&&A.onUpdate(A)}z.__version=A.version}function et(z,A,ne,oe,ue,Pe){const He=c.convert(ne.format,ne.colorSpace),_e=c.convert(ne.type),ge=R(ne.internalFormat,He,_e,ne.normalized,ne.colorSpace),Be=a.get(A),Je=a.get(ne);if(Je.__renderTarget=A,!Be.__hasExternalTextures){const We=Math.max(1,A.width>>Pe),Ze=Math.max(1,A.height>>Pe);ue===s.TEXTURE_3D||ue===s.TEXTURE_2D_ARRAY?n.texImage3D(ue,Pe,ge,We,Ze,A.depth,0,He,_e,null):n.texImage2D(ue,Pe,ge,We,Ze,0,He,_e,null)}n.bindFramebuffer(s.FRAMEBUFFER,z),jt(A)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,oe,ue,Je.__webglTexture,0,Ht(A)):(ue===s.TEXTURE_2D||ue>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,oe,ue,Je.__webglTexture,Pe),n.bindFramebuffer(s.FRAMEBUFFER,null)}function bt(z,A,ne){if(s.bindRenderbuffer(s.RENDERBUFFER,z),A.depthBuffer){const oe=A.depthTexture,ue=oe&&oe.isDepthTexture?oe.type:null,Pe=I(A.stencilBuffer,ue),He=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;jt(A)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ht(A),Pe,A.width,A.height):ne?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ht(A),Pe,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,Pe,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,He,s.RENDERBUFFER,z)}else{const oe=A.textures;for(let ue=0;ue<oe.length;ue++){const Pe=oe[ue],He=c.convert(Pe.format,Pe.colorSpace),_e=c.convert(Pe.type),ge=R(Pe.internalFormat,He,_e,Pe.normalized,Pe.colorSpace);jt(A)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ht(A),ge,A.width,A.height):ne?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ht(A),ge,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,ge,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function pt(z,A,ne){const oe=A.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(s.FRAMEBUFFER,z),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ue=a.get(A.depthTexture);if(ue.__renderTarget=A,(!ue.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),oe){if(ue.__webglInit===void 0&&(ue.__webglInit=!0,A.depthTexture.addEventListener("dispose",H)),ue.__webglTexture===void 0){ue.__webglTexture=s.createTexture(),n.bindTexture(s.TEXTURE_CUBE_MAP,ue.__webglTexture),qe(s.TEXTURE_CUBE_MAP,A.depthTexture);const Be=c.convert(A.depthTexture.format),Je=c.convert(A.depthTexture.type);let We;A.depthTexture.format===vs?We=s.DEPTH_COMPONENT24:A.depthTexture.format===Rr&&(We=s.DEPTH24_STENCIL8);for(let Ze=0;Ze<6;Ze++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ze,0,We,A.width,A.height,0,Be,Je,null)}}else se(A.depthTexture,0);const Pe=ue.__webglTexture,He=Ht(A),_e=oe?s.TEXTURE_CUBE_MAP_POSITIVE_X+ne:s.TEXTURE_2D,ge=A.depthTexture.format===Rr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(A.depthTexture.format===vs)jt(A)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ge,_e,Pe,0,He):s.framebufferTexture2D(s.FRAMEBUFFER,ge,_e,Pe,0);else if(A.depthTexture.format===Rr)jt(A)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ge,_e,Pe,0,He):s.framebufferTexture2D(s.FRAMEBUFFER,ge,_e,Pe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Tt(z){const A=a.get(z),ne=z.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==z.depthTexture){const oe=z.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),oe){const ue=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,oe.removeEventListener("dispose",ue)};oe.addEventListener("dispose",ue),A.__depthDisposeCallback=ue}A.__boundDepthTexture=oe}if(z.depthTexture&&!A.__autoAllocateDepthBuffer)if(ne)for(let oe=0;oe<6;oe++)pt(A.__webglFramebuffer[oe],z,oe);else{const oe=z.texture.mipmaps;oe&&oe.length>0?pt(A.__webglFramebuffer[0],z,0):pt(A.__webglFramebuffer,z,0)}else if(ne){A.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(n.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[oe]),A.__webglDepthbuffer[oe]===void 0)A.__webglDepthbuffer[oe]=s.createRenderbuffer(),bt(A.__webglDepthbuffer[oe],z,!1);else{const ue=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Pe=A.__webglDepthbuffer[oe];s.bindRenderbuffer(s.RENDERBUFFER,Pe),s.framebufferRenderbuffer(s.FRAMEBUFFER,ue,s.RENDERBUFFER,Pe)}}else{const oe=z.texture.mipmaps;if(oe&&oe.length>0?n.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),bt(A.__webglDepthbuffer,z,!1);else{const ue=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Pe=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Pe),s.framebufferRenderbuffer(s.FRAMEBUFFER,ue,s.RENDERBUFFER,Pe)}}n.bindFramebuffer(s.FRAMEBUFFER,null)}function wt(z,A,ne){const oe=a.get(z);A!==void 0&&et(oe.__webglFramebuffer,z,z.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ne!==void 0&&Tt(z)}function Lt(z){const A=z.texture,ne=a.get(z),oe=a.get(A);z.addEventListener("dispose",T);const ue=z.textures,Pe=z.isWebGLCubeRenderTarget===!0,He=ue.length>1;if(He||(oe.__webglTexture===void 0&&(oe.__webglTexture=s.createTexture()),oe.__version=A.version,u.memory.textures++),Pe){ne.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(A.mipmaps&&A.mipmaps.length>0){ne.__webglFramebuffer[_e]=[];for(let ge=0;ge<A.mipmaps.length;ge++)ne.__webglFramebuffer[_e][ge]=s.createFramebuffer()}else ne.__webglFramebuffer[_e]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){ne.__webglFramebuffer=[];for(let _e=0;_e<A.mipmaps.length;_e++)ne.__webglFramebuffer[_e]=s.createFramebuffer()}else ne.__webglFramebuffer=s.createFramebuffer();if(He)for(let _e=0,ge=ue.length;_e<ge;_e++){const Be=a.get(ue[_e]);Be.__webglTexture===void 0&&(Be.__webglTexture=s.createTexture(),u.memory.textures++)}if(z.samples>0&&jt(z)===!1){ne.__webglMultisampledFramebuffer=s.createFramebuffer(),ne.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let _e=0;_e<ue.length;_e++){const ge=ue[_e];ne.__webglColorRenderbuffer[_e]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ne.__webglColorRenderbuffer[_e]);const Be=c.convert(ge.format,ge.colorSpace),Je=c.convert(ge.type),We=R(ge.internalFormat,Be,Je,ge.normalized,ge.colorSpace,z.isXRRenderTarget===!0),Ze=Ht(z);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ze,We,z.width,z.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,ne.__webglColorRenderbuffer[_e])}s.bindRenderbuffer(s.RENDERBUFFER,null),z.depthBuffer&&(ne.__webglDepthRenderbuffer=s.createRenderbuffer(),bt(ne.__webglDepthRenderbuffer,z,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Pe){n.bindTexture(s.TEXTURE_CUBE_MAP,oe.__webglTexture),qe(s.TEXTURE_CUBE_MAP,A);for(let _e=0;_e<6;_e++)if(A.mipmaps&&A.mipmaps.length>0)for(let ge=0;ge<A.mipmaps.length;ge++)et(ne.__webglFramebuffer[_e][ge],z,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ge);else et(ne.__webglFramebuffer[_e],z,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);y(A)&&F(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(He){for(let _e=0,ge=ue.length;_e<ge;_e++){const Be=ue[_e],Je=a.get(Be);let We=s.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(We=z.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(We,Je.__webglTexture),qe(We,Be),et(ne.__webglFramebuffer,z,Be,s.COLOR_ATTACHMENT0+_e,We,0),y(Be)&&F(We)}n.unbindTexture()}else{let _e=s.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(_e=z.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(_e,oe.__webglTexture),qe(_e,A),A.mipmaps&&A.mipmaps.length>0)for(let ge=0;ge<A.mipmaps.length;ge++)et(ne.__webglFramebuffer[ge],z,A,s.COLOR_ATTACHMENT0,_e,ge);else et(ne.__webglFramebuffer,z,A,s.COLOR_ATTACHMENT0,_e,0);y(A)&&F(_e),n.unbindTexture()}z.depthBuffer&&Tt(z)}function nn(z){const A=z.textures;for(let ne=0,oe=A.length;ne<oe;ne++){const ue=A[ne];if(y(ue)){const Pe=O(z),He=a.get(ue).__webglTexture;n.bindTexture(Pe,He),F(Pe),n.unbindTexture()}}}const rn=[],on=[];function un(z){if(z.samples>0){if(jt(z)===!1){const A=z.textures,ne=z.width,oe=z.height;let ue=s.COLOR_BUFFER_BIT;const Pe=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,He=a.get(z),_e=A.length>1;if(_e)for(let Be=0;Be<A.length;Be++)n.bindFramebuffer(s.FRAMEBUFFER,He.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Be,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,He.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Be,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,He.__webglMultisampledFramebuffer);const ge=z.texture.mipmaps;ge&&ge.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,He.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let Be=0;Be<A.length;Be++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(ue|=s.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(ue|=s.STENCIL_BUFFER_BIT)),_e){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,He.__webglColorRenderbuffer[Be]);const Je=a.get(A[Be]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Je,0)}s.blitFramebuffer(0,0,ne,oe,0,0,ne,oe,ue,s.NEAREST),m===!0&&(rn.length=0,on.length=0,rn.push(s.COLOR_ATTACHMENT0+Be),z.depthBuffer&&z.resolveDepthBuffer===!1&&(rn.push(Pe),on.push(Pe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,on)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,rn))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),_e)for(let Be=0;Be<A.length;Be++){n.bindFramebuffer(s.FRAMEBUFFER,He.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Be,s.RENDERBUFFER,He.__webglColorRenderbuffer[Be]);const Je=a.get(A[Be]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,He.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Be,s.TEXTURE_2D,Je,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,He.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&m){const A=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function Ht(z){return Math.min(o.maxSamples,z.samples)}function jt(z){const A=a.get(z);return z.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function $(z){const A=u.render.frame;_.get(z)!==A&&(_.set(z,A),z.update())}function Bt(z,A){const ne=z.colorSpace,oe=z.format,ue=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||ne!==lf&&ne!==js&&(Qt.getTransfer(ne)===hn?(oe!==Ea||ue!==da)&&xt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Jt("WebGLTextures: Unsupported texture color space:",ne)),A}function Pt(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(p.width=z.naturalWidth||z.width,p.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(p.width=z.displayWidth,p.height=z.displayHeight):(p.width=z.width,p.height=z.height),p}this.allocateTextureUnit=V,this.resetTextureUnits=ce,this.getTextureUnits=ie,this.setTextureUnits=K,this.setTexture2D=se,this.setTexture2DArray=pe,this.setTexture3D=Ce,this.setTextureCube=B,this.rebindTextures=wt,this.setupRenderTarget=Lt,this.updateRenderTargetMipmap=nn,this.updateMultisampleRenderTarget=un,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=et,this.useMultisampledRTT=jt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function tC(s,e){function n(a,o=js){let c;const u=Qt.getTransfer(o);if(a===da)return s.UNSIGNED_BYTE;if(a===am)return s.UNSIGNED_SHORT_4_4_4_4;if(a===sm)return s.UNSIGNED_SHORT_5_5_5_1;if(a===ny)return s.UNSIGNED_INT_5_9_9_9_REV;if(a===iy)return s.UNSIGNED_INT_10F_11F_11F_REV;if(a===ey)return s.BYTE;if(a===ty)return s.SHORT;if(a===ec)return s.UNSIGNED_SHORT;if(a===im)return s.INT;if(a===Ha)return s.UNSIGNED_INT;if(a===Pa)return s.FLOAT;if(a===gs)return s.HALF_FLOAT;if(a===ay)return s.ALPHA;if(a===sy)return s.RGB;if(a===Ea)return s.RGBA;if(a===vs)return s.DEPTH_COMPONENT;if(a===Rr)return s.DEPTH_STENCIL;if(a===ry)return s.RED;if(a===rm)return s.RED_INTEGER;if(a===Dr)return s.RG;if(a===om)return s.RG_INTEGER;if(a===lm)return s.RGBA_INTEGER;if(a===$u||a===ef||a===tf||a===nf)if(u===hn)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===$u)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===ef)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===tf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===nf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===$u)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===ef)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===tf)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===nf)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===_p||a===xp||a===yp||a===Sp)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===_p)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===xp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===yp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Sp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Mp||a===Ep||a===bp||a===Tp||a===Ap||a===rf||a===wp)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===Mp||a===Ep)return u===hn?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===bp)return u===hn?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(a===Tp)return c.COMPRESSED_R11_EAC;if(a===Ap)return c.COMPRESSED_SIGNED_R11_EAC;if(a===rf)return c.COMPRESSED_RG11_EAC;if(a===wp)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===Rp||a===Cp||a===Dp||a===Lp||a===Np||a===Up||a===Op||a===Pp||a===Ip||a===Fp||a===Bp||a===zp||a===Hp||a===Vp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===Rp)return u===hn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Cp)return u===hn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Dp)return u===hn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Lp)return u===hn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Np)return u===hn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Up)return u===hn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Op)return u===hn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Pp)return u===hn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Ip)return u===hn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Fp)return u===hn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Bp)return u===hn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===zp)return u===hn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Hp)return u===hn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Vp)return u===hn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Gp||a===kp||a===Xp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===Gp)return u===hn?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===kp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Xp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Wp||a===qp||a===of||a===Yp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(a===Wp)return c.COMPRESSED_RED_RGTC1_EXT;if(a===qp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===of)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Yp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===tc?s.UNSIGNED_INT_24_8:s[a]!==void 0?s[a]:null}return{convert:n}}const nC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class aC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const a=new my(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,a=new Va({vertexShader:nC,fragmentShader:iC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Hn(new uc(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sC extends Ur{constructor(e,n){super();const a=this;let o=null,c=1,u=null,h="local-floor",m=1,p=null,_=null,v=null,g=null,x=null,M=null;const w=typeof XRWebGLBinding<"u",S=new aC,y={},F=n.getContextAttributes();let O=null,R=null;const I=[],N=[],H=new dt;let T=null;const D=new ua;D.viewport=new Vn;const G=new ua;G.viewport=new Vn;const k=[D,G],Z=new hT;let ce=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let be=I[re];return be===void 0&&(be=new Dh,I[re]=be),be.getTargetRaySpace()},this.getControllerGrip=function(re){let be=I[re];return be===void 0&&(be=new Dh,I[re]=be),be.getGripSpace()},this.getHand=function(re){let be=I[re];return be===void 0&&(be=new Dh,I[re]=be),be.getHandSpace()};function K(re){const be=N.indexOf(re.inputSource);if(be===-1)return;const he=I[be];he!==void 0&&(he.update(re.inputSource,re.frame,p||u),he.dispatchEvent({type:re.type,data:re.inputSource}))}function V(){o.removeEventListener("select",K),o.removeEventListener("selectstart",K),o.removeEventListener("selectend",K),o.removeEventListener("squeeze",K),o.removeEventListener("squeezestart",K),o.removeEventListener("squeezeend",K),o.removeEventListener("end",V),o.removeEventListener("inputsourceschange",X);for(let re=0;re<I.length;re++){const be=N[re];be!==null&&(N[re]=null,I[re].disconnect(be))}ce=null,ie=null,S.reset();for(const re in y)delete y[re];e.setRenderTarget(O),x=null,g=null,v=null,o=null,R=null,qe.stop(),a.isPresenting=!1,e.setPixelRatio(T),e.setSize(H.width,H.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){c=re,a.isPresenting===!0&&xt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){h=re,a.isPresenting===!0&&xt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(re){p=re},this.getBaseLayer=function(){return g!==null?g:x},this.getBinding=function(){return v===null&&w&&(v=new XRWebGLBinding(o,n)),v},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(re){if(o=re,o!==null){if(O=e.getRenderTarget(),o.addEventListener("select",K),o.addEventListener("selectstart",K),o.addEventListener("selectend",K),o.addEventListener("squeeze",K),o.addEventListener("squeezestart",K),o.addEventListener("squeezeend",K),o.addEventListener("end",V),o.addEventListener("inputsourceschange",X),F.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(H),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,Ue=null,st=null;F.depth&&(st=F.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,he=F.stencil?Rr:vs,Ue=F.stencil?tc:Ha);const et={colorFormat:n.RGBA8,depthFormat:st,scaleFactor:c};v=this.getBinding(),g=v.createProjectionLayer(et),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),R=new Ba(g.textureWidth,g.textureHeight,{format:Ea,type:da,depthTexture:new Fo(g.textureWidth,g.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:F.stencil,colorSpace:e.outputColorSpace,samples:F.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const he={antialias:F.antialias,alpha:!0,depth:F.depth,stencil:F.stencil,framebufferScaleFactor:c};x=new XRWebGLLayer(o,n,he),o.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),R=new Ba(x.framebufferWidth,x.framebufferHeight,{format:Ea,type:da,colorSpace:e.outputColorSpace,stencilBuffer:F.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(m),p=null,u=await o.requestReferenceSpace(h),qe.setContext(o),qe.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function X(re){for(let be=0;be<re.removed.length;be++){const he=re.removed[be],Ue=N.indexOf(he);Ue>=0&&(N[Ue]=null,I[Ue].disconnect(he))}for(let be=0;be<re.added.length;be++){const he=re.added[be];let Ue=N.indexOf(he);if(Ue===-1){for(let et=0;et<I.length;et++)if(et>=N.length){N.push(he),Ue=et;break}else if(N[et]===null){N[et]=he,Ue=et;break}if(Ue===-1)break}const st=I[Ue];st&&st.connect(he)}}const se=new te,pe=new te;function Ce(re,be,he){se.setFromMatrixPosition(be.matrixWorld),pe.setFromMatrixPosition(he.matrixWorld);const Ue=se.distanceTo(pe),st=be.projectionMatrix.elements,et=he.projectionMatrix.elements,bt=st[14]/(st[10]-1),pt=st[14]/(st[10]+1),Tt=(st[9]+1)/st[5],wt=(st[9]-1)/st[5],Lt=(st[8]-1)/st[0],nn=(et[8]+1)/et[0],rn=bt*Lt,on=bt*nn,un=Ue/(-Lt+nn),Ht=un*-Lt;if(be.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(Ht),re.translateZ(un),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),st[10]===-1)re.projectionMatrix.copy(be.projectionMatrix),re.projectionMatrixInverse.copy(be.projectionMatrixInverse);else{const jt=bt+un,$=pt+un,Bt=rn-Ht,Pt=on+(Ue-Ht),z=Tt*pt/$*jt,A=wt*pt/$*jt;re.projectionMatrix.makePerspective(Bt,Pt,z,A,jt,$),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function B(re,be){be===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(be.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(o===null)return;let be=re.near,he=re.far;S.texture!==null&&(S.depthNear>0&&(be=S.depthNear),S.depthFar>0&&(he=S.depthFar)),Z.near=G.near=D.near=be,Z.far=G.far=D.far=he,(ce!==Z.near||ie!==Z.far)&&(o.updateRenderState({depthNear:Z.near,depthFar:Z.far}),ce=Z.near,ie=Z.far),Z.layers.mask=re.layers.mask|6,D.layers.mask=Z.layers.mask&-5,G.layers.mask=Z.layers.mask&-3;const Ue=re.parent,st=Z.cameras;B(Z,Ue);for(let et=0;et<st.length;et++)B(st[et],Ue);st.length===2?Ce(Z,D,G):Z.projectionMatrix.copy(D.projectionMatrix),ee(re,Z,Ue)};function ee(re,be,he){he===null?re.matrix.copy(be.matrixWorld):(re.matrix.copy(he.matrixWorld),re.matrix.invert(),re.matrix.multiply(be.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(be.projectionMatrix),re.projectionMatrixInverse.copy(be.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=ic*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(g===null&&x===null))return m},this.setFoveation=function(re){m=re,g!==null&&(g.fixedFoveation=re),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=re)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(Z)},this.getCameraTexture=function(re){return y[re]};let De=null;function Te(re,be){if(_=be.getViewerPose(p||u),M=be,_!==null){const he=_.views;x!==null&&(e.setRenderTargetFramebuffer(R,x.framebuffer),e.setRenderTarget(R));let Ue=!1;he.length!==Z.cameras.length&&(Z.cameras.length=0,Ue=!0);for(let pt=0;pt<he.length;pt++){const Tt=he[pt];let wt=null;if(x!==null)wt=x.getViewport(Tt);else{const nn=v.getViewSubImage(g,Tt);wt=nn.viewport,pt===0&&(e.setRenderTargetTextures(R,nn.colorTexture,nn.depthStencilTexture),e.setRenderTarget(R))}let Lt=k[pt];Lt===void 0&&(Lt=new ua,Lt.layers.enable(pt),Lt.viewport=new Vn,k[pt]=Lt),Lt.matrix.fromArray(Tt.transform.matrix),Lt.matrix.decompose(Lt.position,Lt.quaternion,Lt.scale),Lt.projectionMatrix.fromArray(Tt.projectionMatrix),Lt.projectionMatrixInverse.copy(Lt.projectionMatrix).invert(),Lt.viewport.set(wt.x,wt.y,wt.width,wt.height),pt===0&&(Z.matrix.copy(Lt.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Ue===!0&&Z.cameras.push(Lt)}const st=o.enabledFeatures;if(st&&st.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&w){v=a.getBinding();const pt=v.getDepthInformation(he[0]);pt&&pt.isValid&&pt.texture&&S.init(pt,o.renderState)}if(st&&st.includes("camera-access")&&w){e.state.unbindTexture(),v=a.getBinding();for(let pt=0;pt<he.length;pt++){const Tt=he[pt].camera;if(Tt){let wt=y[Tt];wt||(wt=new my,y[Tt]=wt);const Lt=v.getCameraImage(Tt);wt.sourceTexture=Lt}}}}for(let he=0;he<I.length;he++){const Ue=N[he],st=I[he];Ue!==null&&st!==void 0&&st.update(Ue,be,p||u)}De&&De(re,be),be.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:be}),M=null}const qe=new Ry;qe.setAnimationLoop(Te),this.setAnimationLoop=function(re){De=re},this.dispose=function(){}}}const rC=new In,Py=new Dt;Py.set(-1,0,0,0,1,0,0,0,1);function oC(s,e){function n(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function a(S,y){y.color.getRGB(S.fogColor.value,Ty(s)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function o(S,y,F,O,R){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?c(S,y):y.isMeshLambertMaterial?(c(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(c(S,y),v(S,y)):y.isMeshPhongMaterial?(c(S,y),_(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(c(S,y),g(S,y),y.isMeshPhysicalMaterial&&x(S,y,R)):y.isMeshMatcapMaterial?(c(S,y),M(S,y)):y.isMeshDepthMaterial?c(S,y):y.isMeshDistanceMaterial?(c(S,y),w(S,y)):y.isMeshNormalMaterial?c(S,y):y.isLineBasicMaterial?(u(S,y),y.isLineDashedMaterial&&h(S,y)):y.isPointsMaterial?m(S,y,F,O):y.isSpriteMaterial?p(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,n(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,n(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,n(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===zi&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,n(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===zi&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,n(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,n(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,n(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const F=e.get(y),O=F.envMap,R=F.envMapRotation;O&&(S.envMap.value=O,S.envMapRotation.value.setFromMatrix4(rC.makeRotationFromEuler(R)).transpose(),O.isCubeTexture&&O.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(Py),S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,n(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,n(y.aoMap,S.aoMapTransform))}function u(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,n(y.map,S.mapTransform))}function h(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function m(S,y,F,O){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*F,S.scale.value=O*.5,y.map&&(S.map.value=y.map,n(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,n(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function p(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,n(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,n(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function _(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function v(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function g(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,n(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,n(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function x(S,y,F){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,n(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,n(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,n(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,n(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,n(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===zi&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,n(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,n(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=F.texture,S.transmissionSamplerSize.value.set(F.width,F.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,n(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,n(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,n(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,n(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,n(y.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,y){y.matcap&&(S.matcap.value=y.matcap)}function w(S,y){const F=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(F.matrixWorld),S.nearDistance.value=F.shadow.camera.near,S.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function lC(s,e,n,a){let o={},c={},u=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(R,I){const N=I.program;a.uniformBlockBinding(R,N)}function p(R,I){let N=o[R.id];N===void 0&&(S(R),N=_(R),o[R.id]=N,R.addEventListener("dispose",F));const H=I.program;a.updateUBOMapping(R,H);const T=e.render.frame;c[R.id]!==T&&(g(R),c[R.id]=T)}function _(R){const I=v();R.__bindingPointIndex=I;const N=s.createBuffer(),H=R.__size,T=R.usage;return s.bindBuffer(s.UNIFORM_BUFFER,N),s.bufferData(s.UNIFORM_BUFFER,H,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,I,N),N}function v(){for(let R=0;R<h;R++)if(u.indexOf(R)===-1)return u.push(R),R;return Jt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(R){const I=o[R.id],N=R.uniforms,H=R.__cache;s.bindBuffer(s.UNIFORM_BUFFER,I);for(let T=0,D=N.length;T<D;T++){const G=N[T];if(Array.isArray(G))for(let k=0,Z=G.length;k<Z;k++)x(G[k],T,k,H);else x(G,T,0,H)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function x(R,I,N,H){if(w(R,I,N,H)===!0){const T=R.__offset,D=R.value;if(Array.isArray(D)){let G=0;for(let k=0;k<D.length;k++){const Z=D[k],ce=y(Z);M(Z,R.__data,G),typeof Z!="number"&&typeof Z!="boolean"&&!Z.isMatrix3&&!ArrayBuffer.isView(Z)&&(G+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}}else M(D,R.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,T,R.__data)}}function M(R,I,N){typeof R=="number"||typeof R=="boolean"?I[0]=R:R.isMatrix3?(I[0]=R.elements[0],I[1]=R.elements[1],I[2]=R.elements[2],I[3]=0,I[4]=R.elements[3],I[5]=R.elements[4],I[6]=R.elements[5],I[7]=0,I[8]=R.elements[6],I[9]=R.elements[7],I[10]=R.elements[8],I[11]=0):ArrayBuffer.isView(R)?I.set(new R.constructor(R.buffer,R.byteOffset,I.length)):R.toArray(I,N)}function w(R,I,N,H){const T=R.value,D=I+"_"+N;if(H[D]===void 0)return typeof T=="number"||typeof T=="boolean"?H[D]=T:ArrayBuffer.isView(T)?H[D]=T.slice():H[D]=T.clone(),!0;{const G=H[D];if(typeof T=="number"||typeof T=="boolean"){if(G!==T)return H[D]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(G.equals(T)===!1)return G.copy(T),!0}}return!1}function S(R){const I=R.uniforms;let N=0;const H=16;for(let D=0,G=I.length;D<G;D++){const k=Array.isArray(I[D])?I[D]:[I[D]];for(let Z=0,ce=k.length;Z<ce;Z++){const ie=k[Z],K=Array.isArray(ie.value)?ie.value:[ie.value];for(let V=0,X=K.length;V<X;V++){const se=K[V],pe=y(se),Ce=N%H,B=Ce%pe.boundary,ee=Ce+B;N+=B,ee!==0&&H-ee<pe.storage&&(N+=H-ee),ie.__data=new Float32Array(pe.storage/Float32Array.BYTES_PER_ELEMENT),ie.__offset=N,N+=pe.storage}}}const T=N%H;return T>0&&(N+=H-T),R.__size=N,R.__cache={},this}function y(R){const I={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(I.boundary=4,I.storage=4):R.isVector2?(I.boundary=8,I.storage=8):R.isVector3||R.isColor?(I.boundary=16,I.storage=12):R.isVector4?(I.boundary=16,I.storage=16):R.isMatrix3?(I.boundary=48,I.storage=48):R.isMatrix4?(I.boundary=64,I.storage=64):R.isTexture?xt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(I.boundary=16,I.storage=R.byteLength):xt("WebGLRenderer: Unsupported uniform value type.",R),I}function F(R){const I=R.target;I.removeEventListener("dispose",F);const N=u.indexOf(I.__bindingPointIndex);u.splice(N,1),s.deleteBuffer(o[I.id]),delete o[I.id],delete c[I.id]}function O(){for(const R in o)s.deleteBuffer(o[R]);u=[],o={},c={}}return{bind:m,update:p,dispose:O}}const cC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Na=null;function uC(){return Na===null&&(Na=new gb(cC,16,16,Dr,gs),Na.name="DFG_LUT",Na.minFilter=Xn,Na.magFilter=Xn,Na.wrapS=Ma,Na.wrapT=Ma,Na.generateMipmaps=!1,Na.needsUpdate=!0),Na}class fC{constructor(e={}){const{canvas:n=NE(),context:a=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:x=da}=e;this.isWebGLRenderer=!0;let M;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=a.getContextAttributes().alpha}else M=u;const w=x,S=new Set([lm,om,rm]),y=new Set([da,Ha,ec,tc,am,sm]),F=new Uint32Array(4),O=new Int32Array(4),R=new te;let I=null,N=null;const H=[],T=[];let D=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const G=this;let k=!1,Z=null,ce=null,ie=null,K=null;this._outputColorSpace=Ti;let V=0,X=0,se=null,pe=-1,Ce=null;const B=new Vn,ee=new Vn;let De=null;const Te=new $t(0);let qe=0,re=n.width,be=n.height,he=1,Ue=null,st=null;const et=new Vn(0,0,re,be),bt=new Vn(0,0,re,be);let pt=!1;const Tt=new dy;let wt=!1,Lt=!1;const nn=new In,rn=new te,on=new Vn,un={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ht=!1;function jt(){return se===null?he:1}let $=a;function Bt(b,P){return n.getContext(b,P)}try{const b={alpha:!0,depth:o,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${nm}`),n.addEventListener("webglcontextlost",ln,!1),n.addEventListener("webglcontextrestored",Wt,!1),n.addEventListener("webglcontextcreationerror",Rn,!1),$===null){const P="webgl2";if($=Bt(P,b),$===null)throw Bt(P)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(b){throw Jt("WebGLRenderer: "+b.message),b}let Pt,z,A,ne,oe,ue,Pe,He,_e,ge,Be,Je,We,Ze,ot,je,at,j,Ve,Se,Xe,tt,Le;function nt(){Pt=new uw($),Pt.init(),Xe=new tC($,Pt),z=new nw($,Pt,e,Xe),A=new $R($,Pt),z.reversedDepthBuffer&&g&&A.buffers.depth.setReversed(!0),ce=$.createFramebuffer(),ie=$.createFramebuffer(),K=$.createFramebuffer(),ne=new hw($),oe=new zR,ue=new eC($,Pt,A,oe,z,Xe,ne),Pe=new cw(G),He=new vT($),tt=new ew($,He),_e=new fw($,He,ne,tt),ge=new mw($,_e,He,tt,ne),j=new pw($,z,ue),ot=new iw(oe),Be=new BR(G,Pe,Pt,z,tt,ot),Je=new oC(G,oe),We=new VR,Ze=new YR(Pt),at=new $A(G,Pe,A,ge,M,m),je=new JR(G,ge,z),Le=new lC($,ne,z,A),Ve=new tw($,Pt,ne),Se=new dw($,Pt,ne),ne.programs=Be.programs,G.capabilities=z,G.extensions=Pt,G.properties=oe,G.renderLists=We,G.shadowMap=je,G.state=A,G.info=ne}nt(),w!==da&&(D=new vw(w,n.width,n.height,h,o,c));const rt=new sC(G,$);this.xr=rt,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const b=Pt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Pt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(b){b!==void 0&&(he=b,this.setSize(re,be,!1))},this.getSize=function(b){return b.set(re,be)},this.setSize=function(b,P,q=!0){if(rt.isPresenting){xt("WebGLRenderer: Can't change size while VR device is presenting.");return}re=b,be=P,n.width=Math.floor(b*he),n.height=Math.floor(P*he),q===!0&&(n.style.width=b+"px",n.style.height=P+"px"),D!==null&&D.setSize(n.width,n.height),this.setViewport(0,0,b,P)},this.getDrawingBufferSize=function(b){return b.set(re*he,be*he).floor()},this.setDrawingBufferSize=function(b,P,q){re=b,be=P,he=q,n.width=Math.floor(b*q),n.height=Math.floor(P*q),this.setViewport(0,0,b,P)},this.setEffects=function(b){if(w===da){Jt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let P=0;P<b.length;P++)if(b[P].isOutputPass===!0){xt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(B)},this.getViewport=function(b){return b.copy(et)},this.setViewport=function(b,P,q,U){b.isVector4?et.set(b.x,b.y,b.z,b.w):et.set(b,P,q,U),A.viewport(B.copy(et).multiplyScalar(he).round())},this.getScissor=function(b){return b.copy(bt)},this.setScissor=function(b,P,q,U){b.isVector4?bt.set(b.x,b.y,b.z,b.w):bt.set(b,P,q,U),A.scissor(ee.copy(bt).multiplyScalar(he).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(b){A.setScissorTest(pt=b)},this.setOpaqueSort=function(b){Ue=b},this.setTransparentSort=function(b){st=b},this.getClearColor=function(b){return b.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor(...arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha(...arguments)},this.clear=function(b=!0,P=!0,q=!0){let U=0;if(b){let W=!1;if(se!==null){const Me=se.texture.format;W=S.has(Me)}if(W){const Me=se.texture.type,Ge=y.has(Me),Re=at.getClearColor(),Ie=at.getClearAlpha(),ze=Re.r,ke=Re.g,Qe=Re.b;Ge?(F[0]=ze,F[1]=ke,F[2]=Qe,F[3]=Ie,$.clearBufferuiv($.COLOR,0,F)):(O[0]=ze,O[1]=ke,O[2]=Qe,O[3]=Ie,$.clearBufferiv($.COLOR,0,O))}else U|=$.COLOR_BUFFER_BIT}P&&(U|=$.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(U|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U!==0&&$.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),Z=b},this.dispose=function(){n.removeEventListener("webglcontextlost",ln,!1),n.removeEventListener("webglcontextrestored",Wt,!1),n.removeEventListener("webglcontextcreationerror",Rn,!1),at.dispose(),We.dispose(),Ze.dispose(),oe.dispose(),Pe.dispose(),ge.dispose(),tt.dispose(),Le.dispose(),Be.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",pn),rt.removeEventListener("sessionend",cn),bn.stop()};function ln(b){b.preventDefault(),S_("WebGLRenderer: Context Lost."),k=!0}function Wt(){S_("WebGLRenderer: Context Restored."),k=!1;const b=ne.autoReset,P=je.enabled,q=je.autoUpdate,U=je.needsUpdate,W=je.type;nt(),ne.autoReset=b,je.enabled=P,je.autoUpdate=q,je.needsUpdate=U,je.type=W}function Rn(b){Jt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Jn(b){const P=b.target;P.removeEventListener("dispose",Jn),Ui(P)}function Ui(b){Ji(b),oe.remove(b)}function Ji(b){const P=oe.get(b).programs;P!==void 0&&(P.forEach(function(q){Be.releaseProgram(q)}),b.isShaderMaterial&&Be.releaseShaderCache(b))}this.renderBufferDirect=function(b,P,q,U,W,Me){P===null&&(P=un);const Ge=W.isMesh&&W.matrixWorld.determinantAffine()<0,Re=me(b,P,q,U,W);A.setMaterial(U,Ge);let Ie=q.index,ze=1;if(U.wireframe===!0){if(Ie=_e.getWireframeAttribute(q),Ie===void 0)return;ze=2}const ke=q.drawRange,Qe=q.attributes.position;let Ke=ke.start*ze,vt=(ke.start+ke.count)*ze;Me!==null&&(Ke=Math.max(Ke,Me.start*ze),vt=Math.min(vt,(Me.start+Me.count)*ze)),Ie!==null?(Ke=Math.max(Ke,0),vt=Math.min(vt,Ie.count)):Qe!=null&&(Ke=Math.max(Ke,0),vt=Math.min(vt,Qe.count));const ut=vt-Ke;if(ut<0||ut===1/0)return;tt.setup(W,U,Re,q,Ie);let Mt,At=Ve;if(Ie!==null&&(Mt=He.get(Ie),At=Se,At.setIndex(Mt)),W.isMesh)U.wireframe===!0?(A.setLineWidth(U.wireframeLinewidth*jt()),At.setMode($.LINES)):At.setMode($.TRIANGLES);else if(W.isLine){let qt=U.linewidth;qt===void 0&&(qt=1),A.setLineWidth(qt*jt()),W.isLineSegments?At.setMode($.LINES):W.isLineLoop?At.setMode($.LINE_LOOP):At.setMode($.LINE_STRIP)}else W.isPoints?At.setMode($.POINTS):W.isSprite&&At.setMode($.TRIANGLES);if(W.isBatchedMesh)if(Pt.get("WEBGL_multi_draw"))At.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const qt=W._multiDrawStarts,$e=W._multiDrawCounts,Ln=W._multiDrawCount,Rt=Ie?He.get(Ie).bytesPerElement:1,Nn=oe.get(U).currentProgram.getUniforms();for(let Un=0;Un<Ln;Un++)Nn.setValue($,"_gl_DrawID",Un),At.render(qt[Un]/Rt,$e[Un])}else if(W.isInstancedMesh)At.renderInstances(Ke,ut,W.count);else if(q.isInstancedBufferGeometry){const qt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,$e=Math.min(q.instanceCount,qt);At.renderInstances(Ke,ut,$e)}else At.render(Ke,ut)};function wi(b,P,q){b.transparent===!0&&b.side===fa&&b.forceSinglePass===!1?(b.side=zi,b.needsUpdate=!0,Si(b,P,q),b.side=$s,b.needsUpdate=!0,Si(b,P,q),b.side=fa):Si(b,P,q)}this.compile=function(b,P,q=null){q===null&&(q=b),N=Ze.get(q),N.init(P),T.push(N),q.traverseVisible(function(W){W.isLight&&W.layers.test(P.layers)&&(N.pushLight(W),W.castShadow&&N.pushShadow(W))}),b!==q&&b.traverseVisible(function(W){W.isLight&&W.layers.test(P.layers)&&(N.pushLight(W),W.castShadow&&N.pushShadow(W))}),N.setupLights();const U=new Set;return b.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const Me=W.material;if(Me)if(Array.isArray(Me))for(let Ge=0;Ge<Me.length;Ge++){const Re=Me[Ge];wi(Re,q,W),U.add(Re)}else wi(Me,q,W),U.add(Me)}),N=T.pop(),U},this.compileAsync=function(b,P,q=null){const U=this.compile(b,P,q);return new Promise(W=>{function Me(){if(U.forEach(function(Ge){oe.get(Ge).currentProgram.isReady()&&U.delete(Ge)}),U.size===0){W(b);return}setTimeout(Me,10)}Pt.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let _i=null;function ni(b){_i&&_i(b)}function pn(){bn.stop()}function cn(){bn.start()}const bn=new Ry;bn.setAnimationLoop(ni),typeof self<"u"&&bn.setContext(self),this.setAnimationLoop=function(b){_i=b,rt.setAnimationLoop(b),b===null?bn.stop():bn.start()},rt.addEventListener("sessionstart",pn),rt.addEventListener("sessionend",cn),this.render=function(b,P){if(P!==void 0&&P.isCamera!==!0){Jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;Z!==null&&Z.renderStart(b,P);const q=rt.enabled===!0&&rt.isPresenting===!0,U=D!==null&&(se===null||q)&&D.begin(G,se);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(P),P=rt.getCamera()),b.isScene===!0&&b.onBeforeRender(G,b,P,se),N=Ze.get(b,T.length),N.init(P),N.state.textureUnits=ue.getTextureUnits(),T.push(N),nn.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),Tt.setFromProjectionMatrix(nn,Ia,P.reversedDepth),Lt=this.localClippingEnabled,wt=ot.init(this.clippingPlanes,Lt),I=We.get(b,H.length),I.init(),H.push(I),rt.enabled===!0&&rt.isPresenting===!0){const Ge=G.xr.getDepthSensingMesh();Ge!==null&&ii(Ge,P,-1/0,G.sortObjects)}ii(b,P,0,G.sortObjects),I.finish(),G.sortObjects===!0&&I.sort(Ue,st,P.reversedDepth),Ht=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,Ht&&at.addToRenderList(I,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),wt===!0&&ot.beginShadows();const W=N.state.shadowsArray;if(je.render(W,b,P),wt===!0&&ot.endShadows(),(U&&D.hasRenderPass())===!1){const Ge=I.opaque,Re=I.transmissive;if(N.setupLights(),P.isArrayCamera){const Ie=P.cameras;if(Re.length>0)for(let ze=0,ke=Ie.length;ze<ke;ze++){const Qe=Ie[ze];ai(Ge,Re,b,Qe)}Ht&&at.render(b);for(let ze=0,ke=Ie.length;ze<ke;ze++){const Qe=Ie[ze];xi(I,b,Qe,Qe.viewport)}}else Re.length>0&&ai(Ge,Re,b,P),Ht&&at.render(b),xi(I,b,P)}se!==null&&X===0&&(ue.updateMultisampleRenderTarget(se),ue.updateRenderTargetMipmap(se)),U&&D.end(G),b.isScene===!0&&b.onAfterRender(G,b,P),tt.resetDefaultState(),pe=-1,Ce=null,T.pop(),T.length>0?(N=T[T.length-1],ue.setTextureUnits(N.state.textureUnits),wt===!0&&ot.setGlobalState(G.clippingPlanes,N.state.camera)):N=null,H.pop(),H.length>0?I=H[H.length-1]:I=null,Z!==null&&Z.renderEnd()};function ii(b,P,q,U){if(b.visible===!1)return;if(b.layers.test(P.layers)){if(b.isGroup)q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(P);else if(b.isLightProbeGrid)N.pushLightProbeGrid(b);else if(b.isLight)N.pushLight(b),b.castShadow&&N.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Tt.intersectsSprite(b)){U&&on.setFromMatrixPosition(b.matrixWorld).applyMatrix4(nn);const Ge=ge.update(b),Re=b.material;Re.visible&&I.push(b,Ge,Re,q,on.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Tt.intersectsObject(b))){const Ge=ge.update(b),Re=b.material;if(U&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),on.copy(b.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),on.copy(Ge.boundingSphere.center)),on.applyMatrix4(b.matrixWorld).applyMatrix4(nn)),Array.isArray(Re)){const Ie=Ge.groups;for(let ze=0,ke=Ie.length;ze<ke;ze++){const Qe=Ie[ze],Ke=Re[Qe.materialIndex];Ke&&Ke.visible&&I.push(b,Ge,Ke,q,on.z,Qe)}}else Re.visible&&I.push(b,Ge,Re,q,on.z,null)}}const Me=b.children;for(let Ge=0,Re=Me.length;Ge<Re;Ge++)ii(Me[Ge],P,q,U)}function xi(b,P,q,U){const{opaque:W,transmissive:Me,transparent:Ge}=b;N.setupLightsView(q),wt===!0&&ot.setGlobalState(G.clippingPlanes,q),U&&A.viewport(B.copy(U)),W.length>0&&Vt(W,P,q),Me.length>0&&Vt(Me,P,q),Ge.length>0&&Vt(Ge,P,q),A.buffers.depth.setTest(!0),A.buffers.depth.setMask(!0),A.buffers.color.setMask(!0),A.setPolygonOffset(!1)}function ai(b,P,q,U){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[U.id]===void 0){const Ke=Pt.has("EXT_color_buffer_half_float")||Pt.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[U.id]=new Ba(1,1,{generateMipmaps:!0,type:Ke?gs:da,minFilter:Ks,samples:Math.max(4,z.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace})}const Me=N.state.transmissionRenderTarget[U.id],Ge=U.viewport||B;Me.setSize(Ge.z*G.transmissionResolutionScale,Ge.w*G.transmissionResolutionScale);const Re=G.getRenderTarget(),Ie=G.getActiveCubeFace(),ze=G.getActiveMipmapLevel();G.setRenderTarget(Me),G.getClearColor(Te),qe=G.getClearAlpha(),qe<1&&G.setClearColor(16777215,.5),G.clear(),Ht&&at.render(q);const ke=G.toneMapping;G.toneMapping=Fa;const Qe=U.viewport;if(U.viewport!==void 0&&(U.viewport=void 0),N.setupLightsView(U),wt===!0&&ot.setGlobalState(G.clippingPlanes,U),Vt(b,q,U),ue.updateMultisampleRenderTarget(Me),ue.updateRenderTargetMipmap(Me),Pt.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let vt=0,ut=P.length;vt<ut;vt++){const Mt=P[vt],{object:At,geometry:qt,material:$e,group:Ln}=Mt;if($e.side===fa&&At.layers.test(U.layers)){const Rt=$e.side;$e.side=zi,$e.needsUpdate=!0,yi(At,q,U,qt,$e,Ln),$e.side=Rt,$e.needsUpdate=!0,Ke=!0}}Ke===!0&&(ue.updateMultisampleRenderTarget(Me),ue.updateRenderTargetMipmap(Me))}G.setRenderTarget(Re,Ie,ze),G.setClearColor(Te,qe),Qe!==void 0&&(U.viewport=Qe),G.toneMapping=ke}function Vt(b,P,q){const U=P.isScene===!0?P.overrideMaterial:null;for(let W=0,Me=b.length;W<Me;W++){const Ge=b[W],{object:Re,geometry:Ie,group:ze}=Ge;let ke=Ge.material;ke.allowOverride===!0&&U!==null&&(ke=U),Re.layers.test(q.layers)&&yi(Re,P,q,Ie,ke,ze)}}function yi(b,P,q,U,W,Me){b.onBeforeRender(G,P,q,U,W,Me),b.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),W.onBeforeRender(G,P,q,U,b,Me),W.transparent===!0&&W.side===fa&&W.forceSinglePass===!1?(W.side=zi,W.needsUpdate=!0,G.renderBufferDirect(q,P,U,W,b,Me),W.side=$s,W.needsUpdate=!0,G.renderBufferDirect(q,P,U,W,b,Me),W.side=fa):G.renderBufferDirect(q,P,U,W,b,Me),b.onAfterRender(G,P,q,U,W,Me)}function Si(b,P,q){P.isScene!==!0&&(P=un);const U=oe.get(b),W=N.state.lights,Me=N.state.shadowsArray,Ge=W.state.version,Re=Be.getParameters(b,W.state,Me,P,q,N.state.lightProbeGridArray),Ie=Be.getProgramCacheKey(Re);let ze=U.programs;U.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?P.environment:null,U.fog=P.fog;const ke=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;U.envMap=Pe.get(b.envMap||U.environment,ke),U.envMapRotation=U.environment!==null&&b.envMap===null?P.environmentRotation:b.envMapRotation,ze===void 0&&(b.addEventListener("dispose",Jn),ze=new Map,U.programs=ze);let Qe=ze.get(Ie);if(Qe!==void 0){if(U.currentProgram===Qe&&U.lightsStateVersion===Ge)return Ri(b,Re),Qe}else Re.uniforms=Be.getUniforms(b),Z!==null&&b.isNodeMaterial&&Z.build(b,q,Re),b.onBeforeCompile(Re,G),Qe=Be.acquireProgram(Re,Ie),ze.set(Ie,Qe),U.uniforms=Re.uniforms;const Ke=U.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ke.clippingPlanes=ot.uniform),Ri(b,Re),U.needsLights=Oe(b),U.lightsStateVersion=Ge,U.needsLights&&(Ke.ambientLightColor.value=W.state.ambient,Ke.lightProbe.value=W.state.probe,Ke.directionalLights.value=W.state.directional,Ke.directionalLightShadows.value=W.state.directionalShadow,Ke.spotLights.value=W.state.spot,Ke.spotLightShadows.value=W.state.spotShadow,Ke.rectAreaLights.value=W.state.rectArea,Ke.ltc_1.value=W.state.rectAreaLTC1,Ke.ltc_2.value=W.state.rectAreaLTC2,Ke.pointLights.value=W.state.point,Ke.pointLightShadows.value=W.state.pointShadow,Ke.hemisphereLights.value=W.state.hemi,Ke.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ke.spotLightMatrix.value=W.state.spotLightMatrix,Ke.spotLightMap.value=W.state.spotLightMap,Ke.pointShadowMatrix.value=W.state.pointShadowMatrix),U.lightProbeGrid=N.state.lightProbeGridArray.length>0,U.currentProgram=Qe,U.uniformsList=null,Qe}function ui(b){if(b.uniformsList===null){const P=b.currentProgram.getUniforms();b.uniformsList=af.seqWithValue(P.seq,b.uniforms)}return b.uniformsList}function Ri(b,P){const q=oe.get(b);q.outputColorSpace=P.outputColorSpace,q.batching=P.batching,q.batchingColor=P.batchingColor,q.instancing=P.instancing,q.instancingColor=P.instancingColor,q.instancingMorph=P.instancingMorph,q.skinning=P.skinning,q.morphTargets=P.morphTargets,q.morphNormals=P.morphNormals,q.morphColors=P.morphColors,q.morphTargetsCount=P.morphTargetsCount,q.numClippingPlanes=P.numClippingPlanes,q.numIntersection=P.numClipIntersection,q.vertexAlphas=P.vertexAlphas,q.vertexTangents=P.vertexTangents,q.toneMapping=P.toneMapping}function Q(b,P){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;R.setFromMatrixPosition(P.matrixWorld);for(let q=0,U=b.length;q<U;q++){const W=b[q];if(W.texture!==null&&W.boundingBox.containsPoint(R))return W}return null}function me(b,P,q,U,W){P.isScene!==!0&&(P=un),ue.resetTextureUnits();const Me=P.fog,Ge=U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial?P.environment:null,Re=se===null?G.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Qt.workingColorSpace,Ie=U.isMeshStandardMaterial||U.isMeshLambertMaterial&&!U.envMap||U.isMeshPhongMaterial&&!U.envMap,ze=Pe.get(U.envMap||Ge,Ie),ke=U.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Qe=!!q.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),Ke=!!q.morphAttributes.position,vt=!!q.morphAttributes.normal,ut=!!q.morphAttributes.color;let Mt=Fa;U.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Mt=G.toneMapping);const At=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,qt=At!==void 0?At.length:0,$e=oe.get(U),Ln=N.state.lights;if(wt===!0&&(Lt===!0||b!==Ce)){const It=b===Ce&&U.id===pe;ot.setState(U,b,It)}let Rt=!1;U.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Ln.state.version||$e.outputColorSpace!==Re||W.isBatchedMesh&&$e.batching===!1||!W.isBatchedMesh&&$e.batching===!0||W.isBatchedMesh&&$e.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&$e.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&$e.instancing===!1||!W.isInstancedMesh&&$e.instancing===!0||W.isSkinnedMesh&&$e.skinning===!1||!W.isSkinnedMesh&&$e.skinning===!0||W.isInstancedMesh&&$e.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&$e.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&$e.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&$e.instancingMorph===!1&&W.morphTexture!==null||$e.envMap!==ze||U.fog===!0&&$e.fog!==Me||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==ot.numPlanes||$e.numIntersection!==ot.numIntersection)||$e.vertexAlphas!==ke||$e.vertexTangents!==Qe||$e.morphTargets!==Ke||$e.morphNormals!==vt||$e.morphColors!==ut||$e.toneMapping!==Mt||$e.morphTargetsCount!==qt||!!$e.lightProbeGrid!=N.state.lightProbeGridArray.length>0)&&(Rt=!0):(Rt=!0,$e.__version=U.version);let Nn=$e.currentProgram;Rt===!0&&(Nn=Si(U,P,W),Z&&U.isNodeMaterial&&Z.onUpdateProgram(U,Nn,$e));let Un=!1,fi=!1,si=!1;const mt=Nn.getUniforms(),Nt=$e.uniforms;if(A.useProgram(Nn.program)&&(Un=!0,fi=!0,si=!0),U.id!==pe&&(pe=U.id,fi=!0),$e.needsLights){const It=Q(N.state.lightProbeGridArray,W);$e.lightProbeGrid!==It&&($e.lightProbeGrid=It,fi=!0)}if(Un||Ce!==b){A.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),mt.setValue($,"projectionMatrix",b.projectionMatrix),mt.setValue($,"viewMatrix",b.matrixWorldInverse);const mn=mt.map.cameraPosition;mn!==void 0&&mn.setValue($,rn.setFromMatrixPosition(b.matrixWorld)),z.logarithmicDepthBuffer&&mt.setValue($,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&mt.setValue($,"isOrthographic",b.isOrthographicCamera===!0),Ce!==b&&(Ce=b,fi=!0,si=!0)}if($e.needsLights&&(Ln.state.directionalShadowMap.length>0&&mt.setValue($,"directionalShadowMap",Ln.state.directionalShadowMap,ue),Ln.state.spotShadowMap.length>0&&mt.setValue($,"spotShadowMap",Ln.state.spotShadowMap,ue),Ln.state.pointShadowMap.length>0&&mt.setValue($,"pointShadowMap",Ln.state.pointShadowMap,ue)),W.isSkinnedMesh){mt.setOptional($,W,"bindMatrix"),mt.setOptional($,W,"bindMatrixInverse");const It=W.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),mt.setValue($,"boneTexture",It.boneTexture,ue))}W.isBatchedMesh&&(mt.setOptional($,W,"batchingTexture"),mt.setValue($,"batchingTexture",W._matricesTexture,ue),mt.setOptional($,W,"batchingIdTexture"),mt.setValue($,"batchingIdTexture",W._indirectTexture,ue),mt.setOptional($,W,"batchingColorTexture"),W._colorsTexture!==null&&mt.setValue($,"batchingColorTexture",W._colorsTexture,ue));const Sn=q.morphAttributes;if((Sn.position!==void 0||Sn.normal!==void 0||Sn.color!==void 0)&&j.update(W,q,Nn),(fi||$e.receiveShadow!==W.receiveShadow)&&($e.receiveShadow=W.receiveShadow,mt.setValue($,"receiveShadow",W.receiveShadow)),(U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial)&&U.envMap===null&&P.environment!==null&&(Nt.envMapIntensity.value=P.environmentIntensity),Nt.dfgLUT!==void 0&&(Nt.dfgLUT.value=uC()),fi){if(mt.setValue($,"toneMappingExposure",G.toneMappingExposure),$e.needsLights&&we(Nt,si),Me&&U.fog===!0&&Je.refreshFogUniforms(Nt,Me),Je.refreshMaterialUniforms(Nt,U,he,be,N.state.transmissionRenderTarget[b.id]),$e.needsLights&&$e.lightProbeGrid){const It=$e.lightProbeGrid;Nt.probesSH.value=It.texture,Nt.probesMin.value.copy(It.boundingBox.min),Nt.probesMax.value.copy(It.boundingBox.max),Nt.probesResolution.value.copy(It.resolution)}af.upload($,ui($e),Nt,ue)}if(U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(af.upload($,ui($e),Nt,ue),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&mt.setValue($,"center",W.center),mt.setValue($,"modelViewMatrix",W.modelViewMatrix),mt.setValue($,"normalMatrix",W.normalMatrix),mt.setValue($,"modelMatrix",W.matrixWorld),U.uniformsGroups!==void 0){const It=U.uniformsGroups;for(let mn=0,Vi=It.length;mn<Vi;mn++){const Gi=It[mn];Le.update(Gi,Nn),Le.bind(Gi,Nn)}}return Nn}function we(b,P){b.ambientLightColor.needsUpdate=P,b.lightProbe.needsUpdate=P,b.directionalLights.needsUpdate=P,b.directionalLightShadows.needsUpdate=P,b.pointLights.needsUpdate=P,b.pointLightShadows.needsUpdate=P,b.spotLights.needsUpdate=P,b.spotLightShadows.needsUpdate=P,b.rectAreaLights.needsUpdate=P,b.hemisphereLights.needsUpdate=P}function Oe(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return se},this.setRenderTargetTextures=function(b,P,q){const U=oe.get(b);U.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,U.__autoAllocateDepthBuffer===!1&&(U.__useRenderToTexture=!1),oe.get(b.texture).__webglTexture=P,oe.get(b.depthTexture).__webglTexture=U.__autoAllocateDepthBuffer?void 0:q,U.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,P){const q=oe.get(b);q.__webglFramebuffer=P,q.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(b,P=0,q=0){se=b,V=P,X=q;let U=null,W=!1,Me=!1;if(b){const Re=oe.get(b);if(Re.__useDefaultFramebuffer!==void 0){A.bindFramebuffer($.FRAMEBUFFER,Re.__webglFramebuffer),B.copy(b.viewport),ee.copy(b.scissor),De=b.scissorTest,A.viewport(B),A.scissor(ee),A.setScissorTest(De),pe=-1;return}else if(Re.__webglFramebuffer===void 0)ue.setupRenderTarget(b);else if(Re.__hasExternalTextures)ue.rebindTextures(b,oe.get(b.texture).__webglTexture,oe.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const ke=b.depthTexture;if(Re.__boundDepthTexture!==ke){if(ke!==null&&oe.has(ke)&&(b.width!==ke.image.width||b.height!==ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ue.setupDepthRenderbuffer(b)}}const Ie=b.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(Me=!0);const ze=oe.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(ze[P])?U=ze[P][q]:U=ze[P],W=!0):b.samples>0&&ue.useMultisampledRTT(b)===!1?U=oe.get(b).__webglMultisampledFramebuffer:Array.isArray(ze)?U=ze[q]:U=ze,B.copy(b.viewport),ee.copy(b.scissor),De=b.scissorTest}else B.copy(et).multiplyScalar(he).floor(),ee.copy(bt).multiplyScalar(he).floor(),De=pt;if(q!==0&&(U=ce),A.bindFramebuffer($.FRAMEBUFFER,U)&&A.drawBuffers(b,U),A.viewport(B),A.scissor(ee),A.setScissorTest(De),W){const Re=oe.get(b.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+P,Re.__webglTexture,q)}else if(Me){const Re=P;for(let Ie=0;Ie<b.textures.length;Ie++){const ze=oe.get(b.textures[Ie]);$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0+Ie,ze.__webglTexture,q,Re)}}else if(b!==null&&q!==0){const Re=oe.get(b.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Re.__webglTexture,q)}pe=-1},this.readRenderTargetPixels=function(b,P,q,U,W,Me,Ge,Re=0){if(!(b&&b.isWebGLRenderTarget)){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=oe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ge!==void 0&&(Ie=Ie[Ge]),Ie){A.bindFramebuffer($.FRAMEBUFFER,Ie);try{const ze=b.textures[Re],ke=ze.format,Qe=ze.type;if(b.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+Re),!z.textureFormatReadable(ke)){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!z.textureTypeReadable(Qe)){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=b.width-U&&q>=0&&q<=b.height-W&&$.readPixels(P,q,U,W,Xe.convert(ke),Xe.convert(Qe),Me)}finally{const ze=se!==null?oe.get(se).__webglFramebuffer:null;A.bindFramebuffer($.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(b,P,q,U,W,Me,Ge,Re=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=oe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ge!==void 0&&(Ie=Ie[Ge]),Ie)if(P>=0&&P<=b.width-U&&q>=0&&q<=b.height-W){A.bindFramebuffer($.FRAMEBUFFER,Ie);const ze=b.textures[Re],ke=ze.format,Qe=ze.type;if(b.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+Re),!z.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!z.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ke=$.createBuffer();$.bindBuffer($.PIXEL_PACK_BUFFER,Ke),$.bufferData($.PIXEL_PACK_BUFFER,Me.byteLength,$.STREAM_READ),$.readPixels(P,q,U,W,Xe.convert(ke),Xe.convert(Qe),0);const vt=se!==null?oe.get(se).__webglFramebuffer:null;A.bindFramebuffer($.FRAMEBUFFER,vt);const ut=$.fenceSync($.SYNC_GPU_COMMANDS_COMPLETE,0);return $.flush(),await UE($,ut,4),$.bindBuffer($.PIXEL_PACK_BUFFER,Ke),$.getBufferSubData($.PIXEL_PACK_BUFFER,0,Me),$.deleteBuffer(Ke),$.deleteSync(ut),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,P=null,q=0){const U=Math.pow(2,-q),W=Math.floor(b.image.width*U),Me=Math.floor(b.image.height*U),Ge=P!==null?P.x:0,Re=P!==null?P.y:0;ue.setTexture2D(b,0),$.copyTexSubImage2D($.TEXTURE_2D,q,0,0,Ge,Re,W,Me),A.unbindTexture()},this.copyTextureToTexture=function(b,P,q=null,U=null,W=0,Me=0){let Ge,Re,Ie,ze,ke,Qe,Ke,vt,ut;const Mt=b.isCompressedTexture?b.mipmaps[Me]:b.image;if(q!==null)Ge=q.max.x-q.min.x,Re=q.max.y-q.min.y,Ie=q.isBox3?q.max.z-q.min.z:1,ze=q.min.x,ke=q.min.y,Qe=q.isBox3?q.min.z:0;else{const Nt=Math.pow(2,-W);Ge=Math.floor(Mt.width*Nt),Re=Math.floor(Mt.height*Nt),b.isDataArrayTexture?Ie=Mt.depth:b.isData3DTexture?Ie=Math.floor(Mt.depth*Nt):Ie=1,ze=0,ke=0,Qe=0}U!==null?(Ke=U.x,vt=U.y,ut=U.z):(Ke=0,vt=0,ut=0);const At=Xe.convert(P.format),qt=Xe.convert(P.type);let $e;P.isData3DTexture?(ue.setTexture3D(P,0),$e=$.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(ue.setTexture2DArray(P,0),$e=$.TEXTURE_2D_ARRAY):(ue.setTexture2D(P,0),$e=$.TEXTURE_2D),A.activeTexture($.TEXTURE0),A.pixelStorei($.UNPACK_FLIP_Y_WEBGL,P.flipY),A.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),A.pixelStorei($.UNPACK_ALIGNMENT,P.unpackAlignment);const Ln=A.getParameter($.UNPACK_ROW_LENGTH),Rt=A.getParameter($.UNPACK_IMAGE_HEIGHT),Nn=A.getParameter($.UNPACK_SKIP_PIXELS),Un=A.getParameter($.UNPACK_SKIP_ROWS),fi=A.getParameter($.UNPACK_SKIP_IMAGES);A.pixelStorei($.UNPACK_ROW_LENGTH,Mt.width),A.pixelStorei($.UNPACK_IMAGE_HEIGHT,Mt.height),A.pixelStorei($.UNPACK_SKIP_PIXELS,ze),A.pixelStorei($.UNPACK_SKIP_ROWS,ke),A.pixelStorei($.UNPACK_SKIP_IMAGES,Qe);const si=b.isDataArrayTexture||b.isData3DTexture,mt=P.isDataArrayTexture||P.isData3DTexture;if(b.isDepthTexture){const Nt=oe.get(b),Sn=oe.get(P),It=oe.get(Nt.__renderTarget),mn=oe.get(Sn.__renderTarget);A.bindFramebuffer($.READ_FRAMEBUFFER,It.__webglFramebuffer),A.bindFramebuffer($.DRAW_FRAMEBUFFER,mn.__webglFramebuffer);for(let Vi=0;Vi<Ie;Vi++)si&&($.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,oe.get(b).__webglTexture,W,Qe+Vi),$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,oe.get(P).__webglTexture,Me,ut+Vi)),$.blitFramebuffer(ze,ke,Ge,Re,Ke,vt,Ge,Re,$.DEPTH_BUFFER_BIT,$.NEAREST);A.bindFramebuffer($.READ_FRAMEBUFFER,null),A.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else if(W!==0||b.isRenderTargetTexture||oe.has(b)){const Nt=oe.get(b),Sn=oe.get(P);A.bindFramebuffer($.READ_FRAMEBUFFER,ie),A.bindFramebuffer($.DRAW_FRAMEBUFFER,K);for(let It=0;It<Ie;It++)si?$.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,Nt.__webglTexture,W,Qe+It):$.framebufferTexture2D($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Nt.__webglTexture,W),mt?$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,Sn.__webglTexture,Me,ut+It):$.framebufferTexture2D($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Sn.__webglTexture,Me),W!==0?$.blitFramebuffer(ze,ke,Ge,Re,Ke,vt,Ge,Re,$.COLOR_BUFFER_BIT,$.NEAREST):mt?$.copyTexSubImage3D($e,Me,Ke,vt,ut+It,ze,ke,Ge,Re):$.copyTexSubImage2D($e,Me,Ke,vt,ze,ke,Ge,Re);A.bindFramebuffer($.READ_FRAMEBUFFER,null),A.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else mt?b.isDataTexture||b.isData3DTexture?$.texSubImage3D($e,Me,Ke,vt,ut,Ge,Re,Ie,At,qt,Mt.data):P.isCompressedArrayTexture?$.compressedTexSubImage3D($e,Me,Ke,vt,ut,Ge,Re,Ie,At,Mt.data):$.texSubImage3D($e,Me,Ke,vt,ut,Ge,Re,Ie,At,qt,Mt):b.isDataTexture?$.texSubImage2D($.TEXTURE_2D,Me,Ke,vt,Ge,Re,At,qt,Mt.data):b.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,Me,Ke,vt,Mt.width,Mt.height,At,Mt.data):$.texSubImage2D($.TEXTURE_2D,Me,Ke,vt,Ge,Re,At,qt,Mt);A.pixelStorei($.UNPACK_ROW_LENGTH,Ln),A.pixelStorei($.UNPACK_IMAGE_HEIGHT,Rt),A.pixelStorei($.UNPACK_SKIP_PIXELS,Nn),A.pixelStorei($.UNPACK_SKIP_ROWS,Un),A.pixelStorei($.UNPACK_SKIP_IMAGES,fi),Me===0&&P.generateMipmaps&&$.generateMipmap($e),A.unbindTexture()},this.initRenderTarget=function(b){oe.get(b).__webglFramebuffer===void 0&&ue.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?ue.setTextureCube(b,0):b.isData3DTexture?ue.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?ue.setTexture2DArray(b,0):ue.setTexture2D(b,0),A.unbindTexture()},this.resetState=function(){V=0,X=0,se=null,A.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ia}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Qt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Qt._getUnpackColorSpace()}}const Iy=s=>{try{return new URLSearchParams(window.location.search).has(s)||window.location.hash.includes(s)||window.localStorage.getItem(s)!=null}catch{return!1}},dC=s=>{try{const e=new URLSearchParams(window.location.search),n=(e.has(s)?e.get(s)??"1":null)??(window.location.hash.includes(s)?window.location.hash.includes(`${s}=0`)?"0":"1":null)??window.localStorage.getItem(s);return n===null?null:n==="0"||n==="false"?"off":"on"}catch{return null}},Fy=dC("lite"),By=Fy==="on"||Iy("nolenis"),hC=Iy("litedebug"),Nr=()=>By||document.documentElement.hasAttribute("data-lite"),ap=170;function bx(s){const e=document.createElement("div");e.style.cssText=`position:fixed;inset:0;z-index:2147483000;background:#fff;opacity:0;transition:opacity ${ap}ms ease;pointer-events:none;will-change:opacity;`,document.body.appendChild(e),e.offsetHeight,e.style.opacity="1",window.setTimeout(()=>{try{s()}finally{requestAnimationFrame(()=>requestAnimationFrame(()=>{e.style.opacity="0",window.setTimeout(()=>e.remove(),ap+60)}))}},ap+20)}const xm={Red:{accent:"#DB0508",accentRgb:{r:219,g:5,b:8},activeTabBg:"#DB0508",activeTabBorder:"transparent",activeTabInk:"#ffffff",caseDividerLine:"#D3D2D2",caseFrameLine:"#D3D2D2",dividerColor:"#D3D2D2",footerActiveTabBg:"#DB0508",footerActiveTabBorder:"transparent",footerActiveTabInk:"#000000",footerBg:"#000000",footerHeaderBg:"#000000",footerHeaderHover:"#ffffff",footerHeaderInk:"#DB0508",footerHover:"#ffffff",footerInk:"#DB0508",headerHover:"#DB0508",headerInk:"#000000",heroText:"#000000",heroTyping:"#DB0508"},Blue:{accent:"#0D72E6",accentRgb:{r:13,g:114,b:230},activeTabBg:"#0D72E6",activeTabBorder:"transparent",activeTabInk:"#ffffff",caseDividerLine:"#D3D2D2",caseFrameLine:"#D3D2D2",dividerColor:"#D3D2D2",footerActiveTabBg:"#0D72E6",footerActiveTabBorder:"transparent",footerActiveTabInk:"#ffffff",footerBg:"#ffffff",footerHeaderBg:"#ffffff",footerHeaderHover:"#000000",footerHeaderInk:"#0D72E6",footerHover:"#000000",footerInk:"#0D72E6",headerHover:"#000000",headerInk:"#0D72E6",heroText:"#0D72E6",heroTyping:"#000000"},Black:{accent:"#000000",accentRgb:{r:0,g:0,b:0},activeTabBg:"#000000",activeTabBorder:"transparent",activeTabInk:"#ffffff",caseDividerLine:"#D3D2D2",caseFrameLine:"#D3D2D2",dividerColor:"#D3D2D2",footerActiveTabBg:"#ffffff",footerActiveTabBorder:"transparent",footerActiveTabInk:"#000000",footerBg:"#000000",footerHeaderBg:"#000000",footerHeaderHover:"#DB0508",footerHeaderInk:"#ffffff",footerHover:"#DB0508",footerInk:"#ffffff",headerHover:"#DB0508",headerInk:"#000000",heroText:"#000000",heroTyping:"#DB0508"}},ym="Black",pC=xm[ym].accent;function zy(s){const e=xm[s],n=document.documentElement;n.dataset.theme=s.toLowerCase(),n.style.setProperty("--theme-accent",e.accent),n.style.setProperty("--active-tab-bg",e.activeTabBg),n.style.setProperty("--active-tab-border",e.activeTabBorder),n.style.setProperty("--active-tab-ink",e.activeTabInk),n.style.setProperty("--case-divider-line",e.caseDividerLine),n.style.setProperty("--case-frame-line",e.caseFrameLine),n.style.setProperty("--divider-color",e.dividerColor),n.style.setProperty("--footer-active-tab-bg",e.footerActiveTabBg),n.style.setProperty("--footer-active-tab-border",e.footerActiveTabBorder),n.style.setProperty("--footer-active-tab-ink",e.footerActiveTabInk),n.style.setProperty("--footer-bg",e.footerBg),n.style.setProperty("--footer-header-bg",e.footerHeaderBg),n.style.setProperty("--footer-header-hover",e.footerHeaderHover),n.style.setProperty("--footer-header-ink",e.footerHeaderInk),n.style.setProperty("--footer-hover",e.footerHover),n.style.setProperty("--footer-ink",e.footerInk),n.style.setProperty("--header-hover-ink",e.headerHover),n.style.setProperty("--header-ink",e.headerInk),n.style.setProperty("--hero-text-color",e.heroText);


const a = document.querySelector('link[rel="icon"]');
if (a) {
    a.href = 'logored.png';
}



}zy(ym);"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");const Xu=[{title:"Design placeholder 01",tone:"ink",image:"/work/1.webp"},{title:"Design placeholder 02",tone:"paper",image:"/work/2.webp"},{title:"Design placeholder 03",tone:"lime",image:"/work/3.webp"},{title:"Design placeholder 04",tone:"stone",image:"/work/4.webp"},{title:"Design placeholder 05",tone:"blue",image:"/work/5.webp"},{title:"Design placeholder 06",tone:"rose",image:"/work/6.webp"},{title:"Design placeholder 07",tone:"mint",image:"/work/7.webp"},{title:"Design placeholder 08",tone:"paper",image:"/work/8.webp"},{title:"Design placeholder 09",tone:"blue",image:"/work/9.webp"},{title:"Design placeholder 10",tone:"stone",image:"/work/10.webp"},{title:"Design placeholder 11",tone:"lime",image:"/work/11.webp"},{title:"Design placeholder 12",tone:"ink",image:"/work/12.webp"},{title:"Design placeholder 13",tone:"paper",image:"/work/13.webp"}],mC={mint:"#f2f2f2",ink:"#f2f2f2",paper:"#f2f2f2",lime:"#f2f2f2",stone:"#f2f2f2",blue:"#f2f2f2",rose:"#f2f2f2"},Tx=["Builder Tool","Web Designer","Cybersecurity","Full-Stack","Web Development","Framework Specialist"],Ax=[{id: "design", label: "صفحه اصلی", path: "/"},{id: "about", label: "من", path: "/about"}],gC="/about/about-logo-photo-mask.webp";function wx(s){return s==="/about"?"about":"design"}function Wu(s){return s===null?"/design":`/design/${wr[s].slug}`}const vC=[{title:"Cursor for Food",blocks:[{kicker:"Conversion to 1st order was bad",kickerTone:"red",lead:"",text:"MVP pretended to be a smart dietitian, but in reality it behaved like a quiz with some features on top. You answered a fixed list of questions and received a static list of meals. Engagement was very low.",screens:["/screens/aida-mvp-1.png","/screens/aida-mvp-2.png","/screens/aida-mvp-3.png","/screens/aida-mvp-4.png"],screensCue:["Meal plan","Checkout"],media:"/aida-phone.mp4",side:"right"},{points:[{kicker:"So I made the conversation real",text:"The plan and the assistant now share one screen: ask for anything, and Aida rebuilds the plan in place. You give as much or as little as you want."},{kicker:"Brought the chat inside every meal",text:"Open a single meal and the conversation comes with you, so you refine it by talking instead of picking from preset swaps."},{kicker:"Made every food an editable item",text:"A product, a ready meal, or a recipe — each one is its own entity, so the assistant can change a single thing without regenerating everything."}],lead:"",text:"",reel:["/design-3.mp4","/design-1.mp4","/design-2.mp4","/design-4.mp4","/design-5.mp4","/design-6.mp4"],media:"/aida-phone.mp4",side:"left"}]},{title:"A Feeding System",blocks:[{kicker:"We couldn't get users to 2nd order",kickerTone:"red",lead:"",text:"What should someone do after ordering their best meal plan? In our case: do it again. That doesn't sound right, and neither did our conversion to a second order.",flow:["Checkout","1st plan ordered","?"],media:"/aida-phone.mp4",side:"right"},{points:[{kicker:"I turned the core into a calendar",text:"You get a schedule: what you eat, when it arrives, and in what form. It takes the daily guessing off your plate and fills the calendar for you, editable in plain language."},{kicker:"Moved the goal from a cart to the schedule",text:"Keep the calendar full, take a small cut of every order, and revenue becomes recurring."}],lead:"",text:"",reel:["/design-7.mp4","/design-8.mp4"],media:"/aida-phone.mp4",side:"left"},{kicker:"From prototype to Instacart",kickerIcon:"/instacart-logo.webp",lead:"",text:"It was incredibly gratifying when I first saw just how profitable my algorithms were for the company. I am Eskash someone who can drive significant growth for you.",system:!0,media:"/aida-phone.mp4",side:"right"}]}],_C=[{value:"x3.1",label:"First order CR"},{value:"x1.9",label:"Weekly retention"},{value:"",label:"Instacart Partnership",logo:"/instacart-logo.webp"}],xC="If I did it again, I'd double down harder on the “scheduling.” I think the real job of the product was never generating menus or chatting with an AI dietitian. The job was to fill every slot in someone's eating schedule and become their feeding system. I got there, but I'd commit to that framing earlier and push it further. The more we framed it as the thing that owns your eating, the clearer both the product and the business got.",yC=[{value:"48%",label:"Onboarding completion",trend:"up"},{value:"x4.2",label:"Sensor upsells"},{value:"x2",label:"Plain app retention"}],SC=["The bigger gap was engagement. This is a lifestyle-modification product, and those live or die on daily habit. We never really addressed that. I'd build in gamification the way Duolingo does: streaks, momentum, small wins — to keep people coming back long enough for the protocol to work."],MC=[{title:"From Hardware to Software",blocks:[{kicker:"UX was tied to hardware too much",kickerTone:"red",lead:"",text:"Product UX leaned on a glucose sensor to deliver value. That capped growth: hardware drove up cost, hurt CAC, and made scaling hard.",riser:"/sensor.webp?v=2",media:"/aida-phone.mp4",side:"right"},{points:[{kicker:"So I moved focus to the software",text:"I moved the sensor out of the center. The core experience became the software: a personalized metabolic health protocol, healthy recipes, smart food logging."},{kicker:"Isolated all glucose features",text:"Glucose tracking and the sensor moved to their own page — present for those who want it, no longer the price of entry."},{kicker:"Made hardware an upsell",text:"Instead of contacting support to buy a sensor, a user orders it right from the glucose page."}],lead:"",text:"",reel:["/aspect-software-1.mp4?v=1","/aspect-software-2.mp4?v=1","/aspect-glucose-1.mp4?v=2","/aspect-glucose-2.mp4?v=1"],media:"/aida-phone.mp4",side:"left"}]},{title:"Value ASAP",blocks:[{kicker:"40% onboarding completion",kickerTone:"red",lead:"",text:"Onboarding front-loaded everything: long health questionnaires & sensor setup instructions. Many people never finished, and dropped before reaching any value.",screens:["/oboarding-1.png","/oboarding-2.png","/oboarding-3.png","/oboarding-4.png"],screensCue:["40% completion rate"],screensCueTone:"red",media:"/aida-phone.mp4",side:"right"},{points:[{kicker:"So I cut sign up to one step",text:"I cut onboarding to a one-step sign up with a simple intro screen. Nothing blocks you from getting value straight out the door."},{kicker:"Made quizzes optional",text:"The health quiz became optional inside the chat with your coach, so it gathers context without blocking the conversation."},{kicker:"Relocated sensor activation to the glucose page",text:"Now we're showing the sensor tutorial after the user actually has it. Without blocking other parts of the experience."}],lead:"",text:"",reel:["/aspect-onboarding.mp4?v=2","/aspect-reel-1.mp4?v=3","/aspect-reel-2.mp4?v=3"],media:"/aida-phone.mp4",side:"left"}]}],EC=[{title:"Thinking in Space",leadLast:!0,blocks:[{kicker:"Concept: agentic mindmapping for AR glasses",lead:"",text:"The challenge isn't being an algorithm; the challenge is performing the work of an algorithm yourself.",screens:["/recall-shot-1.webp","/recall-shot-2.webp","/recall-shot-3.webp","/recall-shot-4.webp?v=2","/recall-shot-5.webp?v=2"],screensCycle:!0,badge:"/glasses.webp",media:"/aida-phone.mp4",side:"right"},{kicker:"Hardware broke the concept",kickerTone:"red",lead:"",text:"Glasses powerful enough to run this were too bulky to wear; the ones light enough were too weak to run it. So I killed the AR direction. The idea held, though. It just needed the right surface.",riserVideo:"/recall-riser.mp4?v=1",media:"/aida-phone.mp4",side:"left"}]},{title:"Granola 2.0",mark:"/granola-logo.png",blocks:[{kicker:"So I broke the talk into blocks",lead:"",text:"A transcript is a wall of text. I used IBIS to split the conversation into issues, positions and arguments as it happens, so raw talk arrives as structure, not noise.",wideVideo:"/recall-transcript.mp4",wideVideoMobile:"/recall-transcript-mobile.mp4",media:"/aida-phone.mp4",side:"left"},{kicker:"Merged the blocks into one canvas",lead:"",text:"Loose blocks are still a pile of cards. As they connect, the canvas merges them into one infographic in real time, following the flow of the argument.",reel:["/recall-canvas.mp4"],media:"/aida-phone.mp4",side:"left"},{kicker:"Converted discussion into visual sequence",lead:"",text:"A map that redraws every few seconds is unreadable. It grows the way a thought does, building around what is already there, so a glance mid-call shows where things stand.",reel:["/recall-map.mp4"],media:"/aida-phone.mp4",side:"right"}]}],bC="The calls were just the first place to put this. A teacher could explain a topic and have the diagram form as they talk; a therapist and client could watch the shape of a session appear on one shared page. Anywhere people talk to think, the talking can become something to look at. If I took it further, that's the direction I'd chase: real-time thinking made visible.",Rx={"ai-shopping-assistant":"/aida-phone-cover","pcos-management-app":"/aspect-phone","ai-organizer":"/recall-phone"},wr=[

  {eyebrow: "UI/UX Design",
    title: "فروشگاه اینترنتی",
    slug: "shop",
    tags: ["#Web", "#E-commerce"],
    platform: "Web",
    role: "طراح ارشد محصول",
    wins: "نرخ تبدیل ۴۰٪ افزایش یافت",
    name: "فروشگاه من",
    intro: "یک پلتفرم فروشگاهی کامل با تجربه کاربری روان و مدرن.",
    mark: "/logo.svg",
    externalLink: "/shop.html", 
	backgroundMedia: "assets/images/1.webp",
    chapters: [],
    stats: [],
    coda: ""
  },

  {eyebrow: "UI/UX Design",
    title: "سایت شرکتی",
    slug: "eldorado",
    tags: ["#Web", "#programmer"],
    platform: "Web",
    role: "وبسایت شرکتی خدمات برش سنگ",
    wins: "ارتباط  سازی مستقیم مشتری با شرکت",
    name: "factory",
    intro: "مشتری ها ثابت خواهند شد وقتی بدانند بدون واسته با شرکت در ارتباط هستند...",
    mark: "/logo.svg",
    externalLink: "/eldorado.html", 
		backgroundMedia: "assets/images/2.webp",
    chapters: [],
    stats: [],
    coda: ""
  },

  {eyebrow: "UI/UX Design",
    title: "داشبورد مدیریتی",
    slug: "dashboard",
    tags: ["#Web", "#management"],
    platform: "Web",
    role: "دقیق مدیریت کنید",
    wins: "با مدیریت بهتر سایت خود انرژی خودرا چندبرابر کنید",
    name: "مدیریت",
    intro: "چه میشود اگر بتوانید به تنهایی همه چیز را به سادگی مدیریت کنید؟",
    mark: "/logo.svg",
    	backgroundMedia: "assets/images/3.webp",
    externalLink: "/dashboard.html", 
    chapters: [],
    stats: [],
    coda: ""
  },

  {eyebrow: "UI/UX Design",
    title: "پلتفرم خدمات رسانی",
    slug: "platform",
    tags: ["#platform", "#all"],
    platform: "Web",
    role: "پلتفرم خدمات رسانی شهری",
    wins:"کاهش زمان خدمات دهی به مخاطبان",
    name: "platform full",
    intro: "میتوانید پلتفرمی برای حوزه خود داشته باشید با عملکردی بالا",
    mark: "/logo.svg",
    backgroundMedia: "assets/images/4.webp",
    externalLink: "/platform.html", 
    chapters: [],
    stats: [],
    coda: ""
  },

  {eyebrow: "UI/UX Design",
    title: "اپ کاریابی",
    slug: "karko",
    tags: ["#app", "#dev"],
    platform: "Web",
    role: "کاریابی آسان",
    wins: "پیدا کردن کار در کمتر از یک روز",
    name: "karko",
    intro: "مردم همیشه شمارا دوست خواهند داشت ، چون درد انهارا سریع درمان میکنید",
    mark: "/logo.svg",
    backgroundMedia: "assets/images/5.webp",
    externalLink: "/karko.html", 
    chapters: [],
    stats: [],
    coda: ""
  },

  {eyebrow: "UI/UX Design",
    title: "رزرو بلیط",
    slug: "travel",
    tags: ["#web-traveling", "#ticket"],
    platform: "Web",
    role: "خرید بلیط ارزان",
    wins: "60 درصد بهره وری بالاتر نسبت به نمونه های مشابه",
    name: "booking",
    intro: "چطور به آسانی به سفر برویم",
    mark: "/logo.svg",
    backgroundMedia: "assets/images/6.webp",
    externalLink: "/booking.html", 
    chapters: [],
    stats: [],
    coda: ""
  },

{eyebrow: "UI/UX Design",
    title: "خدمات چاپ",
    slug: "chap",
    tags: ["#website", "laravel"],
    platform: "Web",
    role: "وبسایت خدماتی",
    wins: "استفاده آسان کاربر",
    name: "چاپ آسان",
    intro: "مشتریان از پیچیدگی بیزارند ، سادگی را میخواهند...",
    mark: "/logo.svg",
    backgroundMedia: "assets/images/7.webp",
    externalLink: "/chap.html", 
    chapters: [],
    stats: [],
    coda: ""
  },


  {eyebrow: "UI/UX Design",
    title: "رسانه خبری",
    slug: "news",
    tags: ["#website", "laravel"],
    platform: "Web",
    role: "وبسایت خدماتی",
    wins: "در کمترین زمان و سریعتر از رقبا اخبار فوری را به اشتراک بگزارید",
    name: "رسانه خبری",
    intro: "ارسال تبلیغات انبوه",
    mark: "/logo.svg",
    backgroundMedia: "assets/images/8.webp",
    externalLink: "/news.html", 
    chapters: [],
    stats: [],
    coda: ""
  },

	
{eyebrow: "UI/UX Design",
    title: "دنیای انیمه",
    slug: "anime",
    tags: ["#web-otako", "created-to-framework"],
    platform: "Web",
    role: "اوتاکو هستید؟",
    wins: "جذب بسیار بالای جوانان",
    name: "تعاملی بهینه/وبسایت انیمه",
    intro: "برای مخاطب هدف خود طراحی کنیدو ماندگار شوید",
    mark: "/logo.svg",
    backgroundMedia: "assets/images/9.webp",
    externalLink: "/anime.html", 
    chapters: [],
    stats: [],
    coda: ""
  },

];function TC(s){const e=s.match(/^\/design\/([^/]+)\/?$/);if(!e)return null;const n=wr.findIndex(a=>a.slug===e[1]);return n===-1?null:n}function pf(){if(typeof document>"u")return 1120;const s=document.querySelector(".page");if(!s)return 1120;const e=getComputedStyle(s).getPropertyValue("--case-open-duration").trim(),n=parseFloat(e);return Number.isFinite(n)?/ms$/.test(e)?n:/s$/.test(e)?n*1e3:n:1120}function AC(s,e,n,a){const o=3*s,c=3*(n-s)-o,u=1-o-c,h=3*e,m=3*(a-e)-h,p=1-h-m,_=g=>((u*g+c)*g+o)*g,v=g=>((p*g+m)*g+h)*g;return g=>{let x=g;for(let M=0;M<8;M++){const w=_(x)-g;if(Math.abs(w)<1e-4)break;const S=(3*u*x+2*c)*x+o;if(Math.abs(S)<1e-6)break;x-=w/S}return v(Math.min(1,Math.max(0,x)))}}const wC=AC(.45,0,.18,1),RC=300,CC=-.12,DC=1100,LC=80,Cx=380,Dx=680,Lx=880;function Nx(s){const e=s.match(/^(\D*?)(\d+(?:\.\d+)?)(\D*)$/);if(!e)return null;const[,n,a,o]=e,c=a.indexOf(".");return{pre:n,post:o,num:parseFloat(a),decimals:c<0?0:a.length-c-1}}const qu=.66,NC=.08,jl=()=>typeof window<"u"&&window.matchMedia("(max-width: 760px)").matches,UC=.78,OC=.1,Yu=s=>{s.preventDefault()},mf=7.2,Ux=34,PC=46;function sp(s,e,n){const a=-s/2,o=-e/2,c=new yy;return c.moveTo(a+n,o),c.lineTo(a+s-n,o),c.quadraticCurveTo(a+s,o,a+s,o+n),c.lineTo(a+s,o+e-n),c.quadraticCurveTo(a+s,o+e,a+s-n,o+e),c.lineTo(a+n,o+e),c.quadraticCurveTo(a,o+e,a,o+e-n),c.lineTo(a,o+n),c.quadraticCurveTo(a,o,a+n,o),c}function Hy(s,e){const n=document.createElement("canvas"),a=n.getContext("2d");if(!a)return null;const o=2;a.font=e.font,e.letterSpacing&&(a.letterSpacing=e.letterSpacing);const c=a.measureText(s),u=Math.ceil((c.width+e.padding*2)*(e.widthMultiplier??1)),h=e.height;n.width=u*o,n.height=h*o,a.scale(o,o),a.clearRect(0,0,u,h),a.font=e.font,e.letterSpacing&&(a.letterSpacing=e.letterSpacing),a.textAlign="center",a.textBaseline="middle";const m=e.outline??0;m>0&&(a.lineWidth=m,a.lineJoin="round");const p=(g,x,M)=>{m>0?(a.strokeStyle=x,a.strokeText(g,M,h/2)):(a.fillStyle=x,a.fillText(g,M,h/2))},_=s.split(/(·)/);if(_.length>1){const g=_.reduce((M,w)=>M+a.measureText(w).width,0);let x=u/2-g/2;_.forEach(M=>{const w=a.measureText(M).width,S=M==="·"?e.bulletColor??e.accentColor??pC:e.textColor??"#000000";p(M,S,x+w/2),x+=w})}else{const g=a.measureText(s),x=((g.actualBoundingBoxRight??0)-(g.actualBoundingBoxLeft??0))/2;p(s,e.textColor??"#000000",u/2-x)}const v=new py(n);return v.colorSpace=Ti,v.generateMipmaps=!0,v.minFilter=Ks,v.magFilter=Xn,v.anisotropy=8,v.wrapS=$l,v.repeat.x=-1,v.offset.x=1,v}function Vy(s){s.wrapS=Ma,s.wrapT=Ma,s.needsUpdate=!0}function Do(s,e){const a=document.createElement("canvas").getContext("2d");return a?(a.font=e,a.measureText(s).width):0}function IC(s,e,n){const a=document.createElement("canvas"),o=a.getContext("2d");if(!o)return null;const c=2;o.font=n.font,Js()&&(o.letterSpacing=Js());const u=o.measureText(s).width,h=Math.ceil(u+n.padding*2),m=n.textureHeight;a.width=h*c,a.height=m*c,o.scale(c,c),o.clearRect(0,0,h,m),o.font=n.font,Js()&&(o.letterSpacing=Js()),o.textAlign="left",o.textBaseline="middle";const p=Math.max(0,Math.min(e,s.length)),_=o.measureText(s),v=((_.actualBoundingBoxRight??u)-(_.actualBoundingBoxLeft??0))/2;let g=h/2-v;const x=m/2;o.lineJoin="round",o.lineWidth=5;const M=n.accentColor!==n.restColor;for(let S=0;S<p;S+=1){const y=s[S];M&&S===p-1?(o.strokeStyle=n.restColor,o.strokeText(y,g,x)):(o.fillStyle=n.restColor,o.fillText(y,g,x)),g+=o.measureText(y).width}const w=new py(a);return w.colorSpace=Ti,w.minFilter=Xn,w.magFilter=Xn,w.wrapS=$l,w.repeat.x=-1,w.offset.x=1,w}function Zu(s,e,n,a){var u;const o=s.material,c=IC(e,n,a);c&&((u=o.map)==null||u.dispose(),o.map=c,o.color.set("#ffffff"),o.needsUpdate=!0)}function ju(s){s.geometry.dispose(),(Array.isArray(s.material)?s.material:[s.material]).forEach(n=>{var a;(a=n.map)==null||a.dispose(),n.dispose()})}function Bl(s,e){(Array.isArray(s.material)?s.material:[s.material]).forEach(a=>{a.opacity=e})}function FC(s){return 1-(1-s)**3}function Ox(s){return s>=1?1:1-2**(-10*s)}function $p(s,e){const n=Hy(s,{accentColor:e.accentColor,font:e.font,height:e.textureHeight,padding:e.texturePadding,textColor:e.textColor,bulletColor:e.bulletColor,widthMultiplier:e.textureWidthMultiplier,outline:e.outline,letterSpacing:e.letterSpacing});if(!n)return null;e.maskTexture&&Vy(n);const a=new mm(mf,mf,e.stripHeight,96,1,!0,e.thetaStart,e.thetaLength),o=new Oo({map:n,side:fa,transparent:!0,alphaTest:0,depthTest:!1,depthWrite:!1}),c=new Hn(a,o);return c.position.y=e.y,c.renderOrder=10,c}function Px(s,e,n){var c,u;const a=s.material,o=Hy(e,{accentColor:n.accentColor,bulletColor:n.bulletColor,font:n.font,height:n.textureHeight,padding:n.texturePadding,textColor:n.textColor,widthMultiplier:n.textureWidthMultiplier,outline:n.outline,letterSpacing:n.letterSpacing});o&&(n.maskTexture&&Vy(o),o.offset.x=((c=a.map)==null?void 0:c.offset.x)??1,(u=a.map)==null||u.dispose(),a.map=o,a.needsUpdate=!0)}const kl=["400 210px Anton, 'Arial Black', Impact, sans-serif","900 210px Montserrat, 'Arial Black', sans-serif"];let Co=0;const Xt={font:kl[0],stripHeight:1,textureHeight:293,texturePadding:15,gapWidth:3,referenceThetaLength:.92,y:2.08},wo=.5,Sm=1.31,hs={font:"600 52px Montserrat, Arial, sans-serif",stripHeight:.24,textureHeight:92,texturePadding:10,textureWidthMultiplier:1.45,thetaLength:.5,y:-1.9};function rp(s){const e=s.toUpperCase(),n="/ ESKASH",a=Do("PRODUCT",Xt.font)+Xt.gapWidth+Do(n,Xt.font),o=Xt.referenceThetaLength*(jl()?Sm:1)/a,c=Math.max(.08,Do(e,Xt.font)*o),u=Math.max(.08,Do(n,Xt.font)*o),h=Xt.gapWidth*o;return{design:n,designCenter:-(c+h)/2,designThetaLength:u,word:e,wordCenter:(u+h)/2,wordThetaLength:c}}const sf=0,Ku=0,BC=["-0.04em","-7px"],Js=()=>BC[Co]??"",zC=2.2,HC=(s,e)=>s.replace(/(\d+(?:\.\d+)?)px/,(n,a)=>`${Math.round(Number(a)*e)}px`);function Qu(s,e,n){const a=jl(),o=a?zC:1;return $p(s,{font:HC(Xt.font,o),stripHeight:Xt.stripHeight*(a?Sm:1),textureHeight:Math.round(Xt.textureHeight*o),texturePadding:Math.round(Xt.texturePadding*o),thetaLength:e,thetaStart:-e/2,textColor:n,outline:sf,letterSpacing:Js(),y:Xt.y})}const Kl="Multilingual Full-Stack Developer",Ql="Business Growth Tool Builder",Ix=`${Kl} · ${Ql} · `,VC=750,GC=.16;function em(s){const n=hs.thetaLength/hs.textureWidthMultiplier/Do(Kl,hs.font),a=s===Ql?-1:1,o=Do(s,hs.font)*n,c=a*(GC+o/2);return{textureWidthMultiplier:hs.thetaLength/o,thetaStart:c-hs.thetaLength/2}}function Fx(s,e,n,a,o=n){const c=new Oa,u=em(Kl),h=$p(Kl,{...hs,accentColor:n,maskTexture:!0,bulletColor:e?o:void 0,textColor:e?o:a,textureWidthMultiplier:u.textureWidthMultiplier,thetaStart:u.thetaStart});if(h){if(s){const _=h.material;_.map&&(_.map.offset.x=0)}h.userData.metaTextureStart=0,h.userData.metaTextureEnd=1,h.userData.metaText=Kl,c.add(h)}const m=em(Ql),p=$p(Ql,{...hs,accentColor:n,maskTexture:!0,bulletColor:e?o:void 0,textColor:e?o:a,textureWidthMultiplier:m.textureWidthMultiplier,thetaStart:m.thetaStart});if(p){if(s){const _=p.material;_.map&&(_.map.offset.x=2)}p.userData.metaTextureStart=2,p.userData.metaTextureEnd=1,p.userData.metaText=Ql,c.add(p)}return c}function op({className:s=""}){const[e,n]=ye.useState(0),a="mohammadali6es@gmail.com",o=async()=>{try{await navigator.clipboard.writeText(a)}catch{const c=document.createElement("textarea");c.value=a,c.setAttribute("readonly",""),c.style.position="fixed",c.style.opacity="0",document.body.appendChild(c),c.select(),document.execCommand("copy"),document.body.removeChild(c)}n(c=>c+1)};return L.jsxs("button",{className:`email-copy ${s}`.trim(),onClick:o,type:"button","data-click-burst":!0,children:[L.jsx("span",{children:a}),e>0&&L.jsx("span",{className:"copy-toast",children:"Copied!"},e)]})}function kC({clip:s="/aida-phone"}){const e=ye.useRef(null),n=ye.useRef(null);return ye.useEffect(()=>{const a=e.current,o=n.current;if(!a||!o)return;const c=a.closest(".case-section"),u=a.closest(".case-phone-mask");if(!c||!u)return;const h=c.closest(".page");for(const T of[a,o])T.muted=!0,T.playsInline=!0;a.getAttribute("src")||(a.src=`${s}.mp4?v=7`),o.getAttribute("src")||(o.src=`${s}-reversed.mp4?v=7`),o.playbackRate=4;const m=document.documentElement;let p=!1,_=0,v=!1;const g=()=>m.classList.contains("lenis-stopped")||c.classList.contains("case-section--open")||c.classList.contains("case-section--open-m")||c.classList.contains("case-section--post")||!!h&&(h.classList.contains("page--case-open")||h.classList.contains("page--case-open-m")||h.classList.contains("page--case-closing")||h.classList.contains("page--case-closing-m")||h.classList.contains("page--case-closing-far"));let x=!Nr();const M=()=>{o.style.display="none",o.pause(),u.style.display="",a.style.display="",a.pause();try{Number.isFinite(a.duration)&&a.duration>0&&(a.currentTime=a.duration)}catch{}};x||(Number.isFinite(a.duration)&&a.duration>0?M():a.addEventListener("loadedmetadata",M,{once:!0}));const w=T=>{if(o.style.display="none",o.pause(),!x){M();return}try{a.currentTime=0}catch{}u.style.display="",a.style.display="",a.play().catch(()=>{})},S=()=>{if(x){if(Nr()){y();return}u.style.display="",a.style.display="none",a.pause();try{a.currentTime=0}catch{}o.style.display="";try{o.currentTime=0}catch{}o.play().catch(()=>{})}},y=()=>{a.pause(),o.pause(),a.style.display="",o.style.display="none",u.style.display="none";try{a.currentTime=0}catch{}},F=()=>{p||y()};o.addEventListener("ended",F);const O=["pointerdown","keydown","touchstart"],R=()=>{if(x)return;x=!0;for(const D of O)window.removeEventListener(D,R);const T=c.classList.contains("case-section--seen")||c.classList.contains("case-section--phone-seen");u.style.display!=="none"&&T?(u.classList.add("is-fading"),u.style.opacity="0",window.setTimeout(()=>{p=!0,o.style.display="none",o.pause(),a.style.display="";try{a.currentTime=0}catch{}a.play().catch(()=>{}),u.style.opacity="1",window.setTimeout(()=>{u.classList.remove("is-fading"),u.style.opacity=""},260)},240)):(y(),p=!1)};for(const T of O)window.addEventListener(T,R,{passive:!0});const I=T=>{T!==p&&(p=T,T?w():S())},N=()=>{if(g()){_=performance.now()+pf()+300,!!h&&h.classList.contains("page--case-closing-far")&&!v&&(v=!0,p=!0,w());return}v=!1,c.hasAttribute("data-phone-shown")&&(p=!0,c.removeAttribute("data-phone-shown")),c.classList.contains("case-section--seen")||c.classList.contains("case-section--phone-seen")?I(!0):performance.now()>=_&&I(!1)},H=new MutationObserver(N);return H.observe(c,{attributes:!0,attributeFilter:["class"]}),h&&H.observe(h,{attributes:!0,attributeFilter:["class"]}),N(),()=>{H.disconnect(),o.removeEventListener("ended",F);for(const T of O)window.removeEventListener(T,R);for(const T of[a,o])try{T.pause(),T.removeAttribute("src"),T.load()}catch{}}},[]),L.jsxs("div",{className:"case-phone-mask","aria-hidden":"true",style:{display:"none"},children:[L.jsx("video",{className:"case-phone-video",ref:e,src:`${s}.mp4?v=7`,muted:!0,playsInline:!0,preload:"auto","aria-hidden":"true"}),L.jsx("video",{className:"case-phone-video",ref:n,src:`${s}-reversed.mp4?v=7`,muted:!0,playsInline:!0,preload:"auto","aria-hidden":"true",style:{display:"none"}})]})}function XC(){const s=(c,u,h)=>L.jsxs("div",{className:"ds-card ds-card--tok",children:[L.jsx("i",{className:"ds-tok__c "+c}),L.jsx("span",{className:"ds-tok__n",children:u}),L.jsx("span",{className:"ds-tok__x",children:h})]}),e=(c,u,h)=>L.jsxs("div",{className:"ds-bar "+c,children:[L.jsxs("div",{className:"ds-bar__lb",children:[L.jsx("span",{children:u}),L.jsxs("span",{children:[h,"%"]})]}),L.jsx("div",{className:"ds-bar__tr",children:L.jsx("i",{style:{width:`${h}%`}})})]}),n=c=>L.jsx("span",{className:"ds-card__l",children:c}),a=L.jsxs(L.Fragment,{children:[s("ds-c--green","Brand green","#85BA72"),L.jsxs("div",{className:"ds-card ds-card--pad",children:[n("Macros"),L.jsxs("div",{className:"ds-macros",children:[L.jsx("span",{className:"ds-macro ds-macro--p",children:L.jsx("em",{children:"35%"})}),L.jsx("span",{className:"ds-macro ds-macro--f",children:L.jsx("em",{children:"20%"})}),L.jsx("span",{className:"ds-macro ds-macro--c",children:L.jsx("em",{children:"45%"})})]})]}),L.jsx("div",{className:"ds-card ds-card--pad ds-card--center",children:L.jsxs("span",{className:"ds-seg__track",children:[L.jsx("span",{className:"ds-seg__opt",children:"Fattier"}),L.jsx("span",{className:"ds-seg__opt ds-seg__opt--on",children:"Balanced"}),L.jsx("span",{className:"ds-seg__opt",children:"Healthier"})]})}),s("ds-c--brown","Recipe","#B37D53"),L.jsxs("div",{className:"ds-card ds-card--pad ds-card--bars",children:[n("Macro split"),L.jsxs("div",{className:"ds-bars",children:[e("ds-bar--p","Proteins",35),e("ds-bar--f","Fats",20),e("ds-bar--c","Carbs",45)]})]}),L.jsxs("div",{className:"ds-card ds-card--center ds-card--prices",children:[L.jsx("span",{className:"ds-price ds-price--green",children:"$16.38"}),L.jsx("span",{className:"ds-price ds-price--tint",children:"from $5"})]}),L.jsxs("div",{className:"ds-card ds-card--type",children:[L.jsx("span",{className:"ds-type__ag",children:"Ag"}),L.jsxs("span",{className:"ds-type__meta",children:[L.jsx("b",{children:"Title"}),L.jsx("span",{children:"SF Pro · 15 · Medium"})]})]})]}),o=L.jsxs(L.Fragment,{children:[s("ds-c--yellow","Macro · Fats","#E5C224"),L.jsx("div",{className:"ds-card ds-card--center",children:L.jsxs("span",{className:"ds-inputbar",children:[L.jsx("span",{className:"ds-ib__btn","aria-hidden":"true",children:L.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.9",strokeLinecap:"round",children:L.jsx("path",{d:"M12 5v14M5 12h14"})})}),L.jsx("span",{className:"ds-ib__field",children:"Ask Aida"}),L.jsx("span",{className:"ds-ib__btn","aria-hidden":"true",children:L.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[L.jsx("rect",{x:"9",y:"3",width:"6",height:"11",rx:"3"}),L.jsx("path",{d:"M6 11a6 6 0 0 0 12 0M12 17v3"})]})})]})}),s("ds-c--orange","Macro · Carbs","#F5AC70"),L.jsxs("div",{className:"ds-card ds-card--meal",children:[L.jsx("span",{className:"ds-meal__thumb"}),L.jsxs("span",{className:"ds-meal__body",children:[L.jsx("span",{className:"ds-meal__title"}),L.jsxs("span",{className:"ds-meal__macros",children:[L.jsx("span",{className:"ds-macro ds-macro--p ds-macro--mini",children:"P"}),L.jsx("span",{className:"ds-macro ds-macro--f ds-macro--mini",children:"F"}),L.jsx("span",{className:"ds-macro ds-macro--c ds-macro--mini",children:"C"})]})]}),L.jsx("span",{className:"ds-meal__price",children:"from $5"})]}),s("ds-c--pink","Ready meal","#CB779A"),L.jsxs("div",{className:"ds-card ds-card--pad ds-card--notes",children:[n("Foundations"),L.jsxs("span",{className:"ds-note",children:[L.jsx("b",{children:"Radius · pills"}),L.jsx("span",{children:"fully rounded"})]}),L.jsxs("span",{className:"ds-note",children:[L.jsx("b",{children:"Radius · field"}),L.jsx("span",{children:"20px"})]}),L.jsxs("span",{className:"ds-note",children:[L.jsx("b",{children:"Shadow"}),L.jsx("span",{children:"green · y3 · b7.5"})]})]}),s("ds-c--blue","Product","#5A7BCF"),s("ds-c--ink","Ink","#212121")]});return L.jsxs("div",{className:"ds-wall",role:"img","aria-label":"Aida design system",children:[L.jsx("div",{className:"ds-wall__col ds-wall__col--up",children:L.jsxs("div",{className:"ds-wall__track",children:[a,a]})}),L.jsx("div",{className:"ds-wall__col ds-wall__col--down",children:L.jsxs("div",{className:"ds-wall__track",children:[o,o]})})]})}function zl({preload:s="none",...e}){const n=ye.useRef(null);return ye.useEffect(()=>{const a=n.current;return a&&typeof e.src=="string"&&!a.getAttribute("src")&&a.setAttribute("src",e.src),()=>{if(a)try{a.pause(),a.removeAttribute("src"),a.load()}catch{}}},[]),L.jsx("video",{ref:n,preload:s,...e})}function WC({clips:s}){const e=ye.useRef(null),n=ye.useRef([]),[a,o]=ye.useState(0),[c,u]=ye.useState(!1),[h,m]=ye.useState(!1),p=s.length;ye.useEffect(()=>{const x=e.current;if(!x)return;const M=new IntersectionObserver(([w])=>u(w.isIntersecting),{rootMargin:"0px 0px -20% 0px"});return M.observe(x),()=>M.disconnect()},[]),ye.useEffect(()=>()=>{n.current.forEach(x=>{if(x)try{x.pause(),x.removeAttribute("src"),x.load()}catch{}})},[]),ye.useEffect(()=>{n.current.forEach((x,M)=>{if(x)if(M===a&&c){try{x.currentTime=0}catch{}x.play().catch(()=>{})}else{x.pause();const w=(M-a+p)%p,S=p>2&&w<=Math.floor(p/2);if(c&&S)try{x.currentTime=0}catch{}}})},[a,c,p]);const _=x=>{if(x===a){if(p===1){m(!0);const M=e.current?getComputedStyle(e.current).getPropertyValue("--reel-flip-dur").trim():"",w=M?parseFloat(M)*(M.endsWith("ms")?1:1e3):720;window.setTimeout(()=>{const S=n.current[0];if(S){try{S.currentTime=0}catch{}S.play().catch(()=>{})}},w/2);return}o(M=>(M+1)%p)}},v=p>=5,g=x=>{if(v)return x===0?"front":x===1?"next":x===2?"next-2":x===p-1?"prev":x===p-2?"prev-2":"back"};return L.jsx("div",{className:"case-reel",ref:e,"aria-hidden":"true","data-wide":v?"":void 0,children:L.jsx("div",{className:"case-reel__stage",children:s.map((x,M)=>L.jsx("div",{className:"case-reel__card"+(p===1&&h?" case-reel__card--flip":""),"data-pos":(M-a+p)%p,"data-slot":g((M-a+p)%p),onAnimationEnd:p===1?()=>m(!1):void 0,children:L.jsx("video",{ref:w=>{n.current[M]=w},src:x,muted:!0,playsInline:!0,preload:"metadata",onEnded:()=>_(M)})},x))})})}function qC({screens:s,cue:e,cueRed:n,badge:a}){const o=ye.useRef(null),[c,u]=ye.useState(0),[h,m]=ye.useState(!1),p=s.length;ye.useEffect(()=>{const v=o.current;if(!v)return;const g=new IntersectionObserver(([x])=>m(x.isIntersecting),{rootMargin:"0px 0px -20% 0px"});return g.observe(v),()=>g.disconnect()},[]),ye.useEffect(()=>{if(!h||p<2)return;const v=window.setTimeout(()=>u(g=>(g+1)%p),5200);return()=>window.clearTimeout(v)},[h,p,c]);const _=()=>u(v=>(v+1)%p);return L.jsxs("div",{className:"case-screens case-screens--deck",ref:o,children:[L.jsx("div",{className:"case-screens__stack","aria-hidden":"true",children:s.map((v,g)=>{const x=(g-c+p)%p,M=x>p/2?x-p:x;return L.jsx("img",{className:"case-screens__shot",src:v,alt:"","data-pos":x,"data-slide":Math.abs(M)<=1?"near":"far",style:{"--pos":x,"--slide":M}},g)})}),a&&L.jsx("img",{className:"case-screens__badge",src:a,alt:"","aria-hidden":"true"}),e&&L.jsxs("div",{className:"case-screens__cue"+(n?" case-screens__cue--red":""),"aria-hidden":"true",children:[L.jsx("span",{className:"case-screens__line"}),L.jsx("span",{className:"case-screens__pill",children:e})]}),p>1&&L.jsx("button",{type:"button",className:"case-screens__next",onClick:_,"aria-label":"Next slide",children:L.jsx("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:L.jsx("path",{d:"M5 12h13M12.5 5.5 19 12l-6.5 6.5",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"})})})]}
)}function Jl({text:s,className:e,kicker:n,kickerTone:a,kickerIcon:o,highlight:c,highlightNamed:u=!1,highlightIcon:h,indexOffset:m=0,onLines:p}){const _=ye.useRef(null),[v,g]=ye.useState(null),x={done:!1},M=w=>{if(!c||x.done)return w;const S=w.indexOf(c);return S<0?w:(x.done=!0,L.jsxs(L.Fragment,{children:[w.slice(0,S),L.jsxs("span",{className:"rp-highlight"+(u?" rp-highlight--named":""),children:[h&&L.jsx("img",{className:"rp-highlight__icon",src:h,alt:"","aria-hidden":"true"}),c]}),w.slice(S+c.length)]}))};return ye.useLayoutEffect(()=>{g(null)},[s]),ye.useLayoutEffect(()=>{if(v!==null)return;const w=_.current;if(!w)return;const S=document.createTreeWalker(w,NodeFilter.SHOW_TEXT,{acceptNode:I=>{var N;return(N=I.parentElement)!=null&&N.closest("[data-rp-skip]")?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}}),y=[];let F=null,O;const R=(parseFloat(getComputedStyle(w).fontSize)||16)*.5;for(;O=S.nextNode();){const I=O,N=I.textContent||"",H=/\S+/g;let T;for(;T=H.exec(N);){const D=document.createRange();D.setStart(I,T.index),D.setEnd(I,T.index+T[0].length);const G=D.getClientRects(),k=G.length?G[0].top:D.getBoundingClientRect().top,Z=G.length?G[G.length-1].top:k;(F===null||Math.abs(k-F)>R)&&y.push([]),y[y.length-1].push(T[0]),F=Z}}y.length&&(g(y.map(I=>I.join(" "))),p==null||p(y.length))},[v,s,p]),ye.useEffect(()=>{var S;const w=()=>g(null);return window.addEventListener("resize",w),(S=document.fonts)==null||S.ready.then(()=>g(null)).catch(()=>{}),()=>window.removeEventListener("resize",w)},[]),L.jsxs("p",{ref:_,className:e,children:[n&&L.jsx("span",{className:"case-story__kicker"+(a?` case-story__kicker--${a}`:""),style:{"--rp-i":m},"data-rp-skip":!0,children:o?L.jsxs(L.Fragment,{children:[n.slice(0,n.lastIndexOf(" ")+1),L.jsxs("span",{className:"case-story__kicker-mark",children:[L.jsx("img",{className:"case-story__kicker-icon",src:o,alt:"","aria-hidden":"true"}),n.slice(n.lastIndexOf(" ")+1)]})]}):n}),v===null?M(s):v.map((w,S)=>L.jsx("span",{className:"rp-line",style:{"--rp-i":m+(n?1:0)+S},children:M(w)},S))]})}function YC({paragraphs:s,className:e}){const[n,a]=ye.useState(()=>s.map(()=>0));return L.jsx(L.Fragment,{children:s.map((o,c)=>L.jsx(Jl,{className:e,text:o,indexOffset:n.slice(0,c).reduce((u,h)=>u+h,0),onLines:u=>a(h=>h[c]===u?h:h.map((m,p)=>p===c?u:m))},c))})}function ZC({points:s}){const[e,n]=ye.useState(()=>s.map(()=>0));return L.jsx("div",{className:"case-story__text case-story__text--points",children:s.map((a,o)=>L.jsx(Jl,{className:"case-story__point",kicker:a.kicker,kickerTone:a.kickerTone,text:a.text,indexOffset:e.slice(0,o).reduce((c,u)=>c+u+1,0),onLines:c=>n(u=>u[o]===c?u:u.map((h,m)=>m===o?c:h))},o))})}const Bx=8,jC=128,zx=(s,e,n)=>Math.min(n,Math.max(s,e));function KC(){ye.useEffect(()=>{const s=e=>{var S,y;const n=(S=e.target)==null?void 0:S.closest("[data-click-burst], [data-click-bounce]");if(!n)return;const a=n.hasAttribute("data-click-burst");n.classList.remove("is-clicked");const o=n.getBoundingClientRect(),c=Math.max(o.width,o.height,1),u=zx(.9,1-8/c,.97).toFixed(3);n.style.setProperty("--bounce-scale",u),(y=n.closest(".tabs"))==null||y.style.setProperty("--bounce-scale",u),n.classList.add("is-clicked");const h=F=>{F.animationName!=="click-bounce"&&F.animationName!=="click-bounce-scale"||(n.removeEventListener("animationend",h),n.classList.remove("is-clicked"))};if(n.addEventListener("animationend",h),!a)return;const m=zx(.55,Math.hypot(o.width,o.height)/2/jC,1),p=14*m,_=7*m,v=Math.max(1.5,2*m),g=document.createElement("span");g.className="click-burst",g.style.left=`${o.left+o.width/2}px`,g.style.top=`${o.top+o.height/2}px`;const x=o.width/2,M=o.height/2,w=6*m+_/2;for(let F=0;F<Bx;F++){const O=360/Bx*F,R=O*Math.PI/180,I=Math.sin(R),N=-Math.cos(R),H=Math.abs(I)>1e-6?x/Math.abs(I):1/0,T=Math.abs(N)>1e-6?M/Math.abs(N):1/0,D=Math.min(H,T)+w,G=document.createElement("i");G.style.width=`${v.toFixed(2)}px`,G.style.height=`${_.toFixed(2)}px`,G.style.margin=`${(-_/2).toFixed(2)}px ${(-v/2).toFixed(2)}px`,G.style.setProperty("--a",`${O}deg`),G.style.setProperty("--x0",`${(I*D).toFixed(1)}px`),G.style.setProperty("--y0",`${(N*D).toFixed(1)}px`),G.style.setProperty("--x1",`${(I*(D+p)).toFixed(1)}px`),G.style.setProperty("--y1",`${(N*(D+p)).toFixed(1)}px`),g.appendChild(G)}document.body.appendChild(g),g.addEventListener("animationend",()=>g.remove(),{once:!0}),window.setTimeout(()=>g.remove(),900)};return document.addEventListener("pointerdown",s),()=>document.removeEventListener("pointerdown",s)},[])}function Hx(s,e,n=!1){if(!e)return s;const a=s.trim().split(" ");if(a.length<2)return L.jsx("em",{className:"case-title-italic",children:s});const o=a[a.length-1],c=a.slice(0,-1).join(" ");return n?L.jsxs(L.Fragment,{children:[L.jsx("span",{className:"case-title-line",children:c}),L.jsx("span",{className:"case-title-line",children:L.jsx("em",{className:"case-title-italic",children:o})})]}):L.jsxs(L.Fragment,{children:[c," ",L.jsx("em",{className:"case-title-italic",children:o})]})}function QC(){const s=ye.useRef(null);return ye.useEffect(()=>{const e=s.current;if(!e)return;const n=e.closest(".case-section");if(!n)return;const a=n.querySelector(".case-frame"),o=n.querySelector(".case-cover"),c=n.querySelector(".case-logo"),u=n.querySelector(".case-cover__content h2"),h=n.querySelector(".case-cover__content .case-tags"),m=n.querySelector(".case-phone-mask"),p=n.querySelector(".case-phone-video"),_=n.querySelector(".explore-cue"),v=n.querySelector(".case-button"),g=n.querySelector(".case-number"),x=document.querySelector(".site-header"),M=e.querySelector(".case-blowout__sheet"),w=e.querySelector(".case-blowout__outer"),S=e.querySelector(".case-blowout__inner"),y=e.querySelector(".case-blowout__tick--t"),F=e.querySelector(".case-blowout__tick--b"),O=e.querySelector(".case-blowout__tick--l"),R=e.querySelector(".case-blowout__tick--r");let I=window.innerWidth,N=window.innerHeight,H={x:0,y:0},T={x:0,y:0},D={minX:0,minY:0,maxX:0,maxY:0},G=!1,k=9,Z=1,ce=4.5,ie=n.classList.contains("case-section--open")?1:0,K=0,V=0,X=!1;const se=()=>{if(!a||X)return;const he=a.getBoundingClientRect();if(H={x:Math.round(he.left),y:Math.round(he.top)},T={x:Math.round(he.right),y:Math.round(he.bottom)},n.classList.contains("case-section--open"))G||(D={minX:Math.round(he.left),minY:Math.round(he.top),maxX:Math.round(I-he.right),maxY:Math.round(N-he.bottom)});else{const et=n.getBoundingClientRect();D={minX:Math.round(he.left-et.left),minY:Math.round(he.top-et.top),maxX:Math.round(et.right-he.right),maxY:Math.round(et.bottom-he.bottom)},G=!0}const Ue=Number.parseFloat(getComputedStyle(a,"::before").top);k=Math.round(Number.isFinite(Ue)?Ue:9);const st=Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--case-frame-stroke"));if(Z=Number.isFinite(st)?st:1,ce=k*.5,!X&&o&&u){const et=o.style.transform;o.style.transform="none";const bt=(c??u).getBoundingClientRect(),pt=(h??u).getBoundingClientRect();V=(bt.top+pt.bottom)/2,o.style.transform=et}if(!X&&m&&p){const et=m.style.transform;m.style.transform="none";const bt=p.getBoundingClientRect();bt.height>1&&bt.top+bt.height/2,m.style.transform=et}},pe=(he,Ue,st,et,bt)=>{he.style.left=`${Ue.toFixed(2)}px`,he.style.top=`${st.toFixed(2)}px`,he.style.width=`${Math.max(0,et).toFixed(2)}px`,he.style.height=`${Math.max(0,bt).toFixed(2)}px`},Ce=()=>{var ne,oe;if(I<2||N<2)return;const he=!!((ne=n.closest(".page"))!=null&&ne.classList.contains("page--case-closing-far")),Ue=1+CC*ie,st=N*qu/2,et=n.dataset.caseId==="ai-organizer"?N*.1*ie:(V-st)*ie,bt=T.y-k,pt=N*(qu+NC),Tt=(bt-pt)*ie,wt=K*(1-ie);if(o){const ue=wt-et;o.style.transform=!he&&(ie>1e-4||K!==0)?`translateY(${ue.toFixed(2)}px)`:""}const Lt=wt-Tt;m&&(m.style.transform=!he&&(ie>1e-4||K!==0)?`translateY(${Lt.toFixed(2)}px) scale(${Ue.toFixed(3)})`:""),n.style.setProperty("--case-reveal",ie.toFixed(3));const nn=N*qu,rn=bt+(nn-bt)*ie+wt,on=n.querySelector(".case-page-body");if(on&&(on.style.transform=`translateY(${(rn-nn).toFixed(2)}px)`),v){const ue=!!((oe=n.closest(".page"))!=null&&oe.classList.contains("page--case-closing-far")),Pe=n.classList.contains("case-section--open");if(ue)v.style.transition="",v.style.willChange="",v.style.opacity="",v.style.transform="";else if(Pe||ie>1e-4){const He=Math.min(1,ie/.35);v.style.transition="none",v.style.willChange="opacity, transform",v.style.opacity=`${(1-He).toFixed(3)}`,v.style.transform=`translateY(${(He*28).toFixed(2)}px)`}else v.style.transition="",v.style.willChange="",v.style.opacity="",v.style.transform=""}if(g)if(n.classList.contains("case-section--open")||ie>1e-4||K!==0){const Pe=.1*Math.max(I,N);g.style.transition="none",g.style.transform=`translateY(${(K*(1-ie)-(Pe+H.y)*ie).toFixed(2)}px)`,g.style.opacity=`${Math.max(0,1-ie/.35).toFixed(3)}`}else g.style.transition="",g.style.transform="",g.style.opacity="";if(_&&(K>0||ie>1e-4?_.style.opacity="0":(_.style.transform="",_.style.opacity="")),x)if(n.classList.contains("case-section--open")||ie>1e-4){const Pe=.1*Math.max(I,N),He=-Math.max(120,Pe+H.y+K)*ie;x.style.transition="none",x.style.transform=`translateY(${He.toFixed(2)}px)`,x.style.opacity="1"}else document.querySelector(".case-section--open")||(x.style.transition="",x.style.transform="",x.style.opacity="");if(X){n.toggleAttribute("data-blow-active",!0);const ue=n.querySelector(".case-page-body");ue&&(ue.style.clipPath="");return}const un=n.classList.contains("case-section--open")||ie>1e-4;n.toggleAttribute("data-blow-active",un),e.style.display=un?"block":"none";const Ht=.1*Math.max(I,N),jt=H.x+(-Ht-H.x)*ie,$=H.y+(-Ht-H.y)*ie+wt,Bt=T.x+(I+Ht-T.x)*ie,Pt=T.y+(N+Ht-T.y)*ie+wt,z=Bt-jt,A=Pt-$;{const ue=n.querySelector(".case-page-body");if(ue)if(he||ie<=1e-4)ue.style.clipPath="inset(0 0 100% 0)";else{const Pe=jt+k,He=Bt-k,_e=$+k,ge=Pt-k,Be=rn,Je=ue.offsetHeight||N,We=Math.max(0,_e-Be),Ze=Math.max(0,Pe),ot=Math.max(0,I-He),je=ge<N?Math.max(0,Be+Je-ge):0;ue.style.clipPath=`inset(${We.toFixed(1)}px ${ot.toFixed(1)}px ${je.toFixed(1)}px ${Ze.toFixed(1)}px)`}}if(un){const{minX:ue,minY:Pe,maxX:He,maxY:_e}=D;pe(M,jt-ue,$-Pe,z+ue+He,A+Pe+_e),pe(w,jt,$,z,A),pe(S,jt+k,$+k,z-k*2,A-k*2);const ge=(jt+Bt)/2,Be=($+Pt)/2;pe(y,ge-Z/2,$,Z,ce),pe(F,ge-Z/2,Pt-ce,Z,ce),pe(O,jt,Be-Z/2,ce,Z),pe(R,Bt-ce,Be-Z/2,ce,Z)}},B=()=>{I=window.innerWidth,N=window.innerHeight,se(),Ce(),X&&Te(!0)};B();const ee=new ResizeObserver(B);ee.observe(a??n),window.addEventListener("resize",B);const De=[w,S,y,F,O,R],Te=he=>{if(X=he,n.classList.toggle("case-section--settled",he),he){const Ue=n.getBoundingClientRect().top;e.style.position="absolute",e.style.top=`${(-Ue).toFixed(2)}px`,e.style.left="0px",e.style.width="100%",e.style.height="100vh",e.style.display="block",pe(M,0,0,I,Math.round(N*qu)+1);for(const st of De)st.style.display="none"}else{e.style.position="",e.style.top="",e.style.left="",e.style.width="",e.style.height="";for(const Ue of De)Ue.style.display=""}};let qe=0;const re=he=>{cancelAnimationFrame(qe),he===0&&Te(!1);const Ue=ie;if(he===Ue){he===1&&Te(!0);return}if(Nr()){ie=he,Ce(),he===1&&Te(!0);return}const st=pf(),et=performance.now(),bt=pt=>{const Tt=Math.min(1,(pt-et)/st);ie=Ue+(he-Ue)*wC(Tt),Ce(),Tt<1?qe=requestAnimationFrame(bt):(ie=he,Ce(),he===1&&Te(!0))};qe=requestAnimationFrame(bt)},be=new MutationObserver(()=>{const he=n.classList.contains("case-section--open"),Ue=n.hasAttribute("data-case-closing"),st=he&&!Ue;if(st){const et=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--case-dock-y"));K=Number.isFinite(et)?et:0}else K=0;B(),re(st?1:0)});return be.observe(n,{attributes:!0,attributeFilter:["class","data-case-closing"]}),n.classList.contains("case-section--open")&&ie>=1&&Te(!0),()=>{cancelAnimationFrame(qe),ee.disconnect(),be.disconnect(),window.removeEventListener("resize",B)}},[]),L.jsxs("div",{className:"case-blowout",ref:s,"aria-hidden":"true",children:[L.jsx("div",{className:"case-blowout__sheet"}),L.jsx("div",{className:"case-blowout__outer"}),L.jsx("div",{className:"case-blowout__inner"}),L.jsx("span",{className:"case-blowout__tick case-blowout__tick--t"}),L.jsx("span",{className:"case-blowout__tick case-blowout__tick--b"}),L.jsx("span",{className:"case-blowout__tick case-blowout__tick--l"}),L.jsx("span",{className:"case-blowout__tick case-blowout__tick--r"})]})}function JC({accentColor:s,heroTextColor:e,heroTypingColor:n,cursorEngaged:a,introReplayKey:o,paused:c,sceneCharacterVisible:u,snapCharacterVisible:h,spinIntroStarted:m,spinSlowdownStarted:p,textIntroStarted:_,onSceneReady:v,titleWord:g}){const x=ye.useRef(null),M=ye.useRef(c),w=ye.useRef(a),S=ye.useRef(m),y=ye.useRef(p),F=ye.useRef(u),O=ye.useRef(h),R=ye.useRef(_),I=ye.useRef(g),N=ye.useRef(null),H=ye.useRef(null),T=ye.useRef(null);return ye.useEffect(()=>{M.current=c},[c]),ye.useEffect(()=>{w.current=a},[a]),ye.useEffect(()=>{S.current=m},[m]),ye.useEffect(()=>{y.current=p},[p]),ye.useEffect(()=>{F.current=u},[u]),ye.useEffect(()=>{O.current=h},[h]),ye.useEffect(()=>{var D,G;R.current=_,_?(D=H.current)==null||D.call(H):(G=N.current)==null||G.call(N,I.current)},[_]),ye.useEffect(()=>{var D;I.current=g,(D=N.current)==null||D.call(N,g)},[g]),ye.useEffect(()=>{var D;(D=T.current)==null||D.call(T)},[o]),ye.useEffect(()=>{Co>=kl.length&&(Co=0),kl.forEach(G=>document.fonts.load(G).catch(()=>{}));const D=G=>{if(G.key.toLowerCase()!=="y"||G.metaKey||G.ctrlKey||G.altKey)return;const k=G.target;if(k&&(k.isContentEditable||/^(input|textarea|select)$/i.test(k.tagName)))return;Co=(Co+1)%kl.length;const Z=kl[Co];Xt.font=Z,document.fonts.load(Z).then(()=>{var ce;return(ce=T.current)==null?void 0:ce.call(T)},()=>{var ce;return(ce=T.current)==null?void 0:ce.call(T)})};return window.addEventListener("keydown",D),()=>window.removeEventListener("keydown",D)},[]),ye.useEffect(()=>{const D=x.current;if(!D)return;const G=window.matchMedia("(max-width: 760px)").matches,k=new fC({alpha:!0,antialias:!0,canvas:D,powerPreference:"high-performance"});k.setClearColor(16777215,0),k.setPixelRatio(Math.min(window.devicePixelRatio||1,G?3:1.75));const Z=D.closest(".work-hero"),ce=new ub,ie=new ua(Ux,1,.1,100);ie.position.set(0,0,0),ie.lookAt(0,0,1);const K=new Oa;K.position.y=.28,ce.add(K);const V=new Oa;K.add(V);const X=new Oa;K.add(X);const se=new Oa,pe=new Oa;X.add(se,pe),G&&(pe.visible=!1,V.scale.setScalar(1.2),V.position.y=-1.2,se.scale.setScalar(1.3),se.position.y=1.62,se.position.x=.06);const Ce={value:0},B=.055;let ee=null;const De=ve=>{ve.traverse(Fe=>{var Et;if(!(Fe instanceof Hn))return;const lt={value:0};Fe.userData.metaHoverUniform=lt,Fe.userData.metaHoverAmount=0,Fe.geometry.computeBoundingBox();const St=new te;(Et=Fe.geometry.boundingBox)==null||Et.getCenter(St),Fe.userData.metaPivot=St,Fe.userData.metaBasePos=Fe.position.clone();const gn=Fe.material;gn.onBeforeCompile=Mn=>{Mn.uniforms.uMetaHover=lt,Mn.uniforms.uMetaTime=Ce,Mn.fragmentShader=`uniform float uMetaHover;
uniform float uMetaTime;
${Mn.fragmentShader}`.replace("#include <dithering_fragment>",`#include <dithering_fragment>
  {
    // Metallic glint (like light raking across a coin): a single highlight sweeps
    // fast across the text — a wide soft halo with a sharp bright core.
    float _phase = fract(uMetaTime * 0.675);           // glint recurs ~every 1.5s (periodicity)
    float _c = _phase * 3.4 - 0.35;                    // crosses FAST in the first ~0.7s, then a gap
    float _d = vMapUv.x - _c;
    float _wide = exp(-_d * _d / 0.15);                // broad sheen (wide gradient)
    float _core = exp(-_d * _d / 0.006);               // sharp bright specular core
    float _band = clamp(_wide * 0.65 + _core, 0.0, 1.0);
    gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(1.0), uMetaHover * _band * 0.9);
  }`)},gn.customProgramCacheKey=()=>"meta-shimmer",gn.needsUpdate=!0})};let Te=!1,qe=!1,re=!1,be=!1;const he=()=>{Te||!qe||!re||be||(be=!0,v())},Ue=1.34,st=3.02,et=Ue/st,bt=new hf(sp(Ue,st,.14)),pt=bt.attributes.uv;for(let ve=0;ve<pt.count;ve+=1)pt.setXY(ve,(pt.getX(ve)+Ue/2)/Ue,(pt.getY(ve)+st/2)/st);pt.needsUpdate=!0;const Tt=.012,wt=.62,Lt=1,nn=1.045,rn=G?1.45*Sm:1,on=.42,un=.85,Ht=Ue+Tt*2,jt=st+Tt*2,$=.14+Tt,Bt=.006,Pt=.072,z=new $t(12105912),A=new $t(16185078),ne=ve=>{const Fe=sp(Ht+ve*2,jt+ve*2,$+ve);return Fe.holes.push(sp(Ht,jt,$)),new hf(Fe)},oe=()=>{const ve=new Oo({color:z.clone(),depthWrite:!1,opacity:0,transparent:!0}),Fe=new Hn(ne(Bt),ve);return Fe.position.z=.006,Fe.renderOrder=2,Fe.userData.thickness=Bt,Fe.userData.colorMix=0,Fe},ue=new fT,Pe=k.capabilities.getMaxAnisotropy();let He=0;const _e=()=>{He+=1,re=He>=2,he()},ge=ve=>{ve.colorSpace=Ti,ve.anisotropy=Pe,ve.generateMipmaps=!1,ve.minFilter=Xn,ve.magFilter=Xn},Be=ue.load("/characters/hero-character.webp",_e,void 0,_e),Je=ue.load("/characters/hero-character.webp",_e,void 0,_e);[Be,Je].forEach(ge);const We=3.88,Ze=836/2048,ot=We*Ze,je=new uc(ot,We);je.translate(0,We/2,0);const at=ve=>new Oo({alphaTest:.015,depthTest:!1,depthWrite:!1,map:ve,opacity:0,side:fa,transparent:!0}),j=at(Be),Ve=at(Je),Se=new Hn(je,j);Se.position.set(0,-.5-We/2,5.02),Se.renderOrder=120;const Xe=new Hn(je,Ve);Xe.position.copy(Se.position),Xe.renderOrder=121,K.add(Se,Xe),G&&(Se.visible=!1,Xe.visible=!1);const tt=new er().setFromAxisAngle(new te(0,1,0),Math.PI),Le=new tr,nt=new er,rt=[new te(-ot/2,0,0),new te(ot/2,0,0),new te(ot/2,We,0),new te(-ot/2,We,0)],ln=()=>{if(G)return;const ve=D.getBoundingClientRect();if(ve.width===0||ve.height===0)return;const Fe=document.documentElement.style;Se.updateMatrixWorld(!0);const lt=rt.map(an=>{const vn=an.clone();return Se.localToWorld(vn),vn.project(ie),{x:ve.left+(vn.x*.5+.5)*ve.width,y:ve.top+(-vn.y*.5+.5)*ve.height}}),St=Math.min(...lt.map(an=>an.x)),gn=Math.max(...lt.map(an=>an.x)),Et=Math.min(...lt.map(an=>an.y)),Mn=Math.max(...lt.map(an=>an.y));Fe.setProperty("--intro-reveal-left",`${St}px`),Fe.setProperty("--intro-reveal-top",`${Et}px`),Fe.setProperty("--intro-reveal-width",`${gn-St}px`),Fe.setProperty("--intro-reveal-height",`${Mn-Et}px`)},Wt=(ve,Fe)=>{if(Fe>et){const lt=et/Fe;ve.repeat.set(lt,1),ve.offset.set((1-lt)/2,0)}else{const lt=Fe/et;ve.repeat.set(1,lt),ve.offset.set(0,(1-lt)/2)}},Rn=G?[...Xu,...Xu.slice(0,3)]:[...Xu,...Xu],Jn=Math.PI*2/Rn.length,Ui=[],Ji=new pT,wi=new dt;Rn.forEach((ve,Fe)=>{const lt=bt.clone(),St=new Oo({color:ve.image?16777215:mC[ve.tone],opacity:0,side:fa,transparent:!0}),gn={value:0};if(ve.image){const vn=ue.load(ve.image,On=>{const Wn=On.image;Wn!=null&&Wn.width&&(Wn!=null&&Wn.height)&&Wt(On,Wn.width/Wn.height),On.needsUpdate=!0});vn.colorSpace=Ti,vn.anisotropy=Pe,St.map=vn,St.onBeforeCompile=On=>{On.uniforms.uSaturation=gn,On.fragmentShader=`uniform float uSaturation;
${On.fragmentShader}`.replace("#include <dithering_fragment>",`#include <dithering_fragment>
  float _luma = dot(gl_FragColor.rgb, vec3(0.2126, 0.7152, 0.0722));
  gl_FragColor.rgb = mix(vec3(_luma), gl_FragColor.rgb, uSaturation);`)},St.customProgramCacheKey=()=>"card-saturation"}const Et=new Hn(lt,St),Mn=oe();Et.userData.saturation=gn,Et.userData.outline=Mn;const an=Fe*Jn;Et.add(Mn),Et.scale.setScalar(rn),Et.position.set(Math.sin(an)*mf,0,Math.cos(an)*mf),Et.rotation.y=an+Math.PI,Ui.push(Et),V.add(Et)});let _i=0;const ni=new mT,pn=()=>{const ve=D.parentElement,{width:Fe,height:lt}=(ve??D).getBoundingClientRect(),St=getComputedStyle(ve??D),gn=Number.parseFloat(St.getPropertyValue("--scene-top-extra"))||0,Et=Number.parseFloat(St.getPropertyValue("--scene-bottom-extra"))||0,Mn=lt+Et,an=Math.max(1,lt-gn);k.setSize(Fe,Mn,!1),ie.fov=Fe<600?PC:Ux,ie.aspect=Fe/an,gn>0?ie.setViewOffset(Fe,an,0,-gn,Fe,Mn):ie.clearViewOffset(),ie.updateProjectionMatrix()},cn=[],bn=[],ii=[],xi=[];let ai=null,Vt=null,yi=!1,Si=!1,ui=R.current,Ri=0,Q=R.current?1:0;const me=new te;let we=null,Oe=0,b=null,P=0,q=null,U=0,W=0,Me=0,Ge=0,Re=0,Ie=0,ze=0,ke=null,Qe=0,Ke=0,vt=!1,ut=!0;const Mt=new $t("#ffffff"),At={accentColor:n,get font(){return Xt.font},padding:Xt.texturePadding,restColor:e,textureHeight:Xt.textureHeight},qt=ve=>{ve.traverse(Fe=>{Fe instanceof Hn&&ju(Fe)})},$e=ve=>{[...ve.children].forEach(Fe=>{ve.remove(Fe),qt(Fe)})},Ln=()=>{cn.length=0,bn.length=0,ii.length=0,xi.length=0,ai=null,Vt=null,[...X.children].forEach(ve=>{X.remove(ve),ve.traverse(Fe=>{Fe instanceof Hn&&ju(Fe)})})};let Rt=!1;const Nn=()=>{if(!Rt||!R.current||Te)return;cn.length=0,bn.length=0,ii.length=0,xi.length=0,$e(se),$e(pe),ai=null,Vt=null,yi=!1,ui=!1,we=null,Q=0;const ve=Fx(!0,!0,s,e,e);De(ve),pe.add(ve),Un(I.current)};T.current=Nn;const Un=ve=>{if(!Rt||!R.current||Te)return;const Fe=ni.getElapsedTime(),lt=rp(ve),St=!yi&&!ai,gn=e,Et=G?Xt.y-wo:Xt.y,Mn=G?Xt.y+wo:Xt.y,an=G?0:lt.designCenter,vn=G?0:lt.wordCenter;Vt?(bn.length=0,bn.push({duration:.58,fromRotationY:Vt.rotation.y,mesh:Vt,startTime:Fe,toRotationY:an})):(Vt=Qu(lt.design,lt.designThetaLength,gn),Vt&&(Vt.rotation.y=an,St?(Vt.position.y=Et-.28,Vt.scale.setScalar(.965),Bl(Vt,0),cn.push({colorSwap:{options:{font:Xt.font,textColor:e,textureHeight:Xt.textureHeight,texturePadding:Xt.texturePadding,outline:sf,letterSpacing:Js()},text:lt.design},duration:.72,fromColor:Mt,fromOpacity:0,fromScale:.965,fromY:Et-.28,mesh:Vt,removeOnComplete:!1,startTime:Fe+Ku,toColor:Mt,toOpacity:1,toScale:1,toY:Et})):Vt.position.y=Et,se.add(Vt)));const On=ai,Wn=.032,Wa=.058,nr=On?On.userData.word??"":"",ir=nr.length*Wn;On&&xi.push({charInterval:Wn,cooldownAt:null,lastCount:nr.length,mesh:On,mode:"erase",removeOnComplete:!0,startTime:Fe,word:nr});const ri=Qu(lt.word,lt.wordThetaLength,St?e:n);ri&&(ri.userData.word=lt.word,ri.rotation.y=vn,ri.position.y=St?Mn-.28:Mn,ri.scale.setScalar(St?.965:1),Bl(ri,St?0:1),se.add(ri),ai=ri,St?(cn.push({colorSwap:{options:{font:Xt.font,textColor:e,textureHeight:Xt.textureHeight,texturePadding:Xt.texturePadding,outline:sf,letterSpacing:Js()},text:lt.word},duration:.72,fromColor:Mt,fromOpacity:0,fromScale:.965,fromY:Mn-.28,mesh:ri,removeOnComplete:!1,startTime:Fe+Ku,toColor:Mt,toOpacity:1,toScale:1,toY:Mn}),yi=!0,!ui&&pe.children.length>0&&(ui=!0,pe.traverse(Ci=>{if(Ci instanceof Hn){const ba=Ci.material,qa=ba.map;qa&&(ii.push({colorSwap:{mesh:Ci,text:Ci.userData.metaText},duration:.72,fromColor:Mt,fromOffsetX:Ci.userData.metaTextureStart??qa.offset.x,fromOpacity:0,startTime:Fe,toColor:Mt,texture:qa,toOffsetX:Ci.userData.metaTextureEnd??1,toOpacity:1}),ba.opacity=0)}}))):(Zu(ri,lt.word,0,At),xi.push({charInterval:Wa,cooldownAt:null,lastCount:0,mesh:ri,mode:"type",removeOnComplete:!1,startTime:Fe+ir+.05,word:lt.word})))},fi=ve=>{if(!(ve instanceof Hn))return;const Fe=ve.material;Fe!=null&&Fe.map&&k.initTexture(Fe.map)},si=()=>{if(!Rt||Te||Vt||ai)return;const ve=rp(I.current),Fe=G?Xt.y-wo:Xt.y,lt=G?Xt.y+wo:Xt.y,St=G?0:ve.designCenter,gn=G?0:ve.wordCenter;Vt=Qu(ve.design,ve.designThetaLength,e),Vt&&(Vt.rotation.y=St,Vt.position.y=Fe,Bl(Vt,0),se.add(Vt),fi(Vt));const Et=Qu(ve.word,ve.wordThetaLength,e);Et&&(Et.userData.word=ve.word,Et.rotation.y=gn,Et.position.y=lt,Et.scale.setScalar(1),Bl(Et,0),se.add(Et),fi(Et)),ai=Et,Si=!0},mt=()=>{if(Te)return;if(!Si||yi||!Vt&&!ai){Un(I.current);return}const ve=ni.getElapsedTime(),Fe=rp(I.current),lt=G?Xt.y-wo:Xt.y,St=G?Xt.y+wo:Xt.y,gn={font:Xt.font,textColor:e,textureHeight:Xt.textureHeight,texturePadding:Xt.texturePadding,outline:sf,letterSpacing:Js()};Vt&&cn.push({colorSwap:{options:gn,text:Fe.design},duration:.72,fromColor:Mt,fromOpacity:0,fromScale:.965,fromY:lt-.28,mesh:Vt,removeOnComplete:!1,startTime:ve+Ku,toColor:Mt,toOpacity:1,toScale:1,toY:lt}),ai&&cn.push({colorSwap:{options:gn,text:Fe.word},duration:.72,fromColor:Mt,fromOpacity:0,fromScale:.965,fromY:St-.28,mesh:ai,removeOnComplete:!1,startTime:ve+Ku,toColor:Mt,toOpacity:1,toScale:1,toY:St}),yi=!0,Si=!1,!ui&&pe.children.length>0&&(ui=!0,pe.traverse(Et=>{if(Et instanceof Hn){const Mn=Et.material,an=Mn.map;an&&(ii.push({colorSwap:{mesh:Et,text:Et.userData.metaText},duration:.72,fromColor:Mt,fromOffsetX:Et.userData.metaTextureStart??an.offset.x,fromOpacity:0,startTime:ve,toColor:Mt,texture:an,toOffsetX:Et.userData.metaTextureEnd??1,toOpacity:1}),Mn.opacity=0)}}))};H.current=mt,N.current=Un;const Nt="fonts"in document?document.fonts:null,Sn=()=>{if(Te)return;Rt=!0,$e(pe);const ve=Fx(!R.current,!R.current,s,e,e);De(ve),pe.add(ve),pe.traverse(fi),R.current?Un(I.current):si(),qe=!0,he()};Nt?Nt.ready.then(Sn):Sn();const It=()=>{var dc,hc;const ve=ni.getElapsedTime(),Fe=Math.min(.05,Math.max(0,ve-Ri));if(Ri=ve,!ut||document.hidden||M.current){_i=requestAnimationFrame(It);return}y.current&&we===null&&(we=ve);const lt=.095,St=G?2.5:4.1,Et=1-(1-(we===null?0:Math.min(1,(ve-we)/3.6)))**2,Mn=S.current?li.lerp(St,lt,Et):lt,an=Z?getComputedStyle(Z):null,vn=an&&Number.parseFloat(an.getPropertyValue("--hero-cursor-x"))||0,On=an&&Number.parseFloat(an.getPropertyValue("--hero-cursor-y"))||0,Wn=q!==null;Wn||(Ge=vn,Re=On);const Wa=Wn?Ge:vn,nr=Wn?Re:On;q===null&&(Oe+=(Mn+ze)*Fe,ze*=Math.exp(-1.45*Fe),Math.abs(ze)<.01&&(ze=0));const ir=w.current&&!Nr()?1:0;Ie+=(ir-Ie)*.022,K.rotation.x=li.lerp(K.rotation.x,nr*-.075*Ie,.08),K.rotation.y=li.lerp(K.rotation.y,Wa*.14*Ie,.08),K.rotation.z=li.lerp(K.rotation.z,0,.08);const ri=0,Ci=-.5-We/2,ba=5.02;me.set(ri,Ci,ba).applyEuler(K.rotation),K.position.set(ri-me.x,.28+Ci-me.y,ba-me.z),Z==null||Z.style.setProperty("--hero-scene-tilt-y",K.rotation.x.toFixed(5));const qa=li.lerp(Math.max(j.opacity,Ve.opacity),F.current?1:0,.18),fc=O.current&&re;if(j.opacity=fc?0:qa,Ve.opacity=fc?qa:0,Le.set(K.rotation.x,0,0),nt.setFromEuler(Le),Se.quaternion.copy(K.quaternion).invert().multiply(nt).multiply(tt),Xe.quaternion.copy(Se.quaternion),ln(),V.rotation.y=Oe,(!b||!b.isConnected)&&(b=document.querySelector(".hero-marquee__track"),P=0),b&&(P<=0&&(P=b.scrollWidth/2),P>0)){const yt=Oe*VC%P,Ye=yt<0?yt+P:yt;b.style.transform=`translate3d(${-Ye}px, 0, 0)`}X.visible=R.current;for(let yt=cn.length-1;yt>=0;yt-=1){const Ye=cn[yt];if(ve<Ye.startTime)continue;const Cn=Math.min(1,(ve-Ye.startTime)/Ye.duration),Fn=Ye.ease?Ye.ease(Cn):Ox(Cn);if(Ye.mesh.position.y=li.lerp(Ye.fromY,Ye.toY,Fn),Ye.mesh.scale.setScalar(li.lerp(Ye.fromScale,Ye.toScale,Fn)),Bl(Ye.mesh,Math.min(1,Math.max(0,li.lerp(Ye.fromOpacity,Ye.toOpacity,Fn)))),Ye.fromColor&&Ye.toColor){const Tn=Ye.mesh.material,ea=Ye.colorDuration===void 0?Fn:FC(Math.min(1,Math.max(0,(ve-Ye.startTime-(Ye.colorDelay??0))/Ye.colorDuration)));Tn.color.copy(Ye.fromColor).lerp(Ye.toColor,ea)}Cn===1&&(cn.splice(yt,1),Ye.colorSwap&&(Px(Ye.mesh,Ye.colorSwap.text,Ye.colorSwap.options),Ye.mesh.material.color.set("#ffffff")),Ye.removeOnComplete&&(se.remove(Ye.mesh),ju(Ye.mesh)))}for(let yt=xi.length-1;yt>=0;yt-=1){const Ye=xi[yt];if(ve<Ye.startTime)continue;const Cn=Math.floor((ve-Ye.startTime)/Ye.charInterval),Fn=Ye.word.length;if(Ye.mode==="type"){const Tn=Math.min(Fn,Cn+1);Tn!==Ye.lastCount&&(Ye.lastCount=Tn,Zu(Ye.mesh,Ye.word,Tn,At)),Tn>=Fn&&(Ye.cooldownAt===null?Ye.cooldownAt=ve+.14:ve>=Ye.cooldownAt&&(Zu(Ye.mesh,Ye.word,Fn,{...At,accentColor:e,restColor:e}),xi.splice(yt,1)))}else{const Tn=Math.max(0,Fn-Cn);Tn!==Ye.lastCount&&(Ye.lastCount=Tn,Tn<=0?(Ye.removeOnComplete&&(se.remove(Ye.mesh),ju(Ye.mesh)),xi.splice(yt,1)):Zu(Ye.mesh,Ye.word,Tn,At))}}for(let yt=bn.length-1;yt>=0;yt-=1){const Ye=bn[yt],Cn=Math.min(1,(ve-Ye.startTime)/Ye.duration),Fn=1-(1-Cn)**3;Ye.mesh.rotation.y=li.lerp(Ye.fromRotationY,Ye.toRotationY,Fn),Cn===1&&bn.splice(yt,1)}for(let yt=ii.length-1;yt>=0;yt-=1){const Ye=ii[yt],Cn=Math.min(1,Math.max(0,(ve-Ye.startTime)/Ye.duration)),Fn=Ox(Cn);Ye.texture.offset.x=li.lerp(Ye.fromOffsetX,Ye.toOffsetX,Fn);const Tn=(dc=Ye.colorSwap)==null?void 0:dc.mesh.material;if(Tn){const qn=Math.min(1,Cn/.35);Tn.opacity=li.lerp(Ye.fromOpacity,Ye.toOpacity,qn),Ye.fromColor&&Ye.toColor&&Tn.color.copy(Ye.fromColor).lerp(Ye.toColor,Fn)}Cn===1&&(ii.splice(yt,1),(hc=Ye.colorSwap)!=null&&hc.mesh&&Ye.colorSwap.text&&(Px(Ye.colorSwap.mesh,Ye.colorSwap.text,{...hs,accentColor:s,textColor:e,maskTexture:!0,textureWidthMultiplier:em(Ye.colorSwap.text).textureWidthMultiplier}),Ye.colorSwap.mesh.material.color.set("#ffffff")))}if(Q+=((R.current?1:0)-Q)*.12,q===null&&vt&&R.current){const yt=Vi(Qe,Ke);ke=yt,D.classList.toggle("carousel-canvas--hovering",yt!==null),ee=yt?null:Gi(Qe,Ke)}for(const yt of Ui){const Ye=yt.userData.saturation,Cn=yt===ke?1:0;Ye&&(Ye.value+=(Cn-Ye.value)*.16);const Fn=yt.material;Fn.opacity+=(li.lerp(wt,Lt,Cn)*Q-Fn.opacity)*.16;const Tn=yt.scale.x,ea=rn*li.lerp(1,nn,Cn);yt.scale.setScalar(Tn+(ea-Tn)*.08);const qn=yt.userData.outline,Ta=qn==null?void 0:qn.material;if(qn&&Ta){Ta.opacity+=(li.lerp(on,un,Cn)*Q-Ta.opacity)*.16;const pc=qn.userData.colorMix+(Cn-qn.userData.colorMix)*.16;qn.userData.colorMix=pc,Ta.color.lerpColors(z,A,pc);const Sf=li.lerp(Bt,Pt,Cn),Wo=qn.userData.thickness,ar=Wo+(Sf-Wo)*.16;Math.abs(ar-Wo)>2e-4&&(qn.userData.thickness=ar,qn.geometry.dispose(),qn.geometry=ne(ar))}}Ce.value+=Fe,pe.traverse(yt=>{if(!(yt instanceof Hn)||yt.userData.metaHoverUniform===void 0)return;const Ye=yt.userData.metaHoverUniform,Cn=yt===ee?1:0,Fn=yt.userData.metaHoverAmount,Tn=Fn+(Cn-Fn)*.12;yt.userData.metaHoverAmount=Tn,Ye.value=Tn;const ea=1+Tn*B,qn=yt.userData.metaPivot,Ta=yt.userData.metaBasePos;yt.scale.setScalar(ea),yt.position.set(Ta.x+(1-ea)*qn.x,Ta.y+(1-ea)*qn.y,Ta.z+(1-ea)*qn.z)}),k.render(ce,ie),_i=requestAnimationFrame(It)},mn=6.5,Vi=(ve,Fe)=>{const lt=D.getBoundingClientRect();if(lt.width===0||lt.height===0||Ui.length===0)return null;wi.set((ve-lt.left)/lt.width*2-1,-((Fe-lt.top)/lt.height*2-1)),V.updateMatrixWorld(!0),Ji.setFromCamera(wi,ie);const St=Ji.intersectObjects(Ui,!1)[0];return(St==null?void 0:St.object)??null},Gi=(ve,Fe)=>{const lt=D.getBoundingClientRect();if(lt.width===0||lt.height===0||pe.children.length===0)return null;wi.set((ve-lt.left)/lt.width*2-1,-((Fe-lt.top)/lt.height*2-1)),K.updateMatrixWorld(!0),Ji.setFromCamera(wi,ie);const St=Ji.intersectObject(pe,!0)[0];return(St==null?void 0:St.object)??null},pa=ve=>Vi(ve.clientX,ve.clientY),Vo=ve=>pa(ve)!==null,Go=ve=>{const Fe=D.getBoundingClientRect();if(Fe.width===0||Fe.height===0)return!1;const lt=ve-Fe.top,St=Fe.height*.36,gn=Fe.height*.82;return lt>=St&&lt<=gn},ka=ve=>{const Fe=D.getBoundingClientRect();if(Fe.width===0||Fe.height===0)return null;const St=((ve.clientX-Fe.left)/Fe.width-.5)*2*Math.tan(li.degToRad(ie.fov)/2)*ie.aspect;return Math.atan2(St,1)},Xa=ve=>{const Fe=ka(ve);!R.current||q!==null||Fe===null||!Vo(ve)||(q=ve.pointerId,U=Fe+Oe,W=performance.now(),Me=0,ze=0,ke=null,ee=null,D.setPointerCapture(ve.pointerId),D.classList.add("carousel-canvas--dragging"),ve.preventDefault())},ko=ve=>{if(ve.pointerId!==q){Qe=ve.clientX,Ke=ve.clientY,vt=!0;return}const Fe=ka(ve);if(Fe===null)return;const lt=performance.now(),St=Math.max(16,lt-W),gn=U-Fe,Et=gn-Oe;Oe=gn,Me=Et/St*1e3,W=lt,ve.preventDefault()},_s=ve=>{ve.pointerId===q&&(q=null,ze=li.clamp(Me,-mn,mn),Me=0,D.classList.remove("carousel-canvas--dragging"),D.hasPointerCapture(ve.pointerId)&&D.releasePointerCapture(ve.pointerId))},Xo=()=>{vt=!1,q===null&&(ke=null,ee=null,D.classList.remove("carousel-canvas--hovering"))},xs=ve=>{if(Nr()||!R.current||q!==null||!Go(ve.clientY))return;const Fe=Math.abs(ve.deltaX)>.1?ve.deltaX:ve.shiftKey?ve.deltaY:0;if(Math.abs(Fe)<=.1)return;const lt=ve.deltaMode===WheelEvent.DOM_DELTA_LINE?18:ve.deltaMode===WheelEvent.DOM_DELTA_PAGE?window.innerWidth:1,St=Fe*lt*75e-5;Oe+=St*.35,ze=li.clamp(ze+St*7,-mn,mn),ve.preventDefault()};pn();const $i=new IntersectionObserver(([ve])=>{ut=!!(ve!=null&&ve.isIntersecting),Ri=ni.getElapsedTime()},{rootMargin:"180px 0px"});$i.observe(D),It(),window.addEventListener("resize",pn);const Pr=new ResizeObserver(()=>pn());return D.parentElement&&Pr.observe(D.parentElement),G||(D.addEventListener("pointerdown",Xa),D.addEventListener("pointermove",ko),D.addEventListener("pointerup",_s),D.addEventListener("pointercancel",_s),D.addEventListener("pointerleave",Xo),D.addEventListener("wheel",xs,{passive:!1})),()=>{Te=!0,cancelAnimationFrame(_i),$i.disconnect(),Pr.disconnect(),window.removeEventListener("resize",pn),D.removeEventListener("pointerdown",Xa),D.removeEventListener("pointermove",ko),D.removeEventListener("pointerup",_s),D.removeEventListener("pointercancel",_s),D.removeEventListener("pointerleave",Xo),D.removeEventListener("wheel",xs),Z==null||Z.style.removeProperty("--hero-scene-tilt-y"),N.current=null,H.current=null,T.current=null,Ln(),je.dispose(),j.dispose(),Ve.dispose(),Be.dispose(),Je.dispose(),k.dispose(),bt.dispose(),V.traverse(ve=>{ve instanceof Hn?(ve.geometry.dispose(),Array.isArray(ve.material)?ve.material.forEach(Fe=>Fe.dispose()):ve.material.dispose()):ve instanceof Sb&&(ve.geometry.dispose(),Array.isArray(ve.material)?ve.material.forEach(Fe=>Fe.dispose()):ve.material.dispose())})}},[s,e,n]),L.jsx("canvas",{className:"carousel-canvas",ref:x,"aria-label":"Rotating 3D project carousel"})}function $C(){const s=document.createElement("div");s.style.cssText="position:fixed;left:8px;bottom:8px;z-index:2147483647;font:11px/1.45 ui-monospace,Menlo,monospace;background:rgba(0,0,0,.82);color:#3f6;padding:7px 9px;border-radius:6px;white-space:pre;pointer-events:none;letter-spacing:.02em;",document.body.appendChild(s);let e=1/0;return{update(n){n.scrolling&&n.fps>0&&(e=Math.min(e,n.fps)),s.style.color=n.mode==="LITE"?"#fd0":"#3f6",s.textContent=`mode: ${n.mode}
fps: ${n.fps}${n.scrolling?"  ← scrolling":""}
worst scroll fps: ${e===1/0?"—":e}
window: ${n.badFrames}/${n.scrollFrames} bad (${Math.round(n.ratio*100)}%)`},destroy(){s.remove()}}}function e2(){const s=ye.useRef(null);return ye.useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches||window.matchMedia("(max-width: 760px)").matches||window.matchMedia("(hover: none) and (pointer: coarse)").matches)return;if(By){document.documentElement.setAttribute("data-lite","");return}let e=new JM({duration:.82,easing:O=>1-Math.pow(1-O,3),smoothWheel:!0,touchMultiplier:1.35,wheelMultiplier:1.18});s.current=e;const n=26,a=40,o=80,c=.35,u=40,h=260,m=Fy==="off";let p=0,_=0,v=-1/0,g=0,x=0,M=0;const w=()=>{v=performance.now()};window.addEventListener("scroll",w,{passive:!0}),window.addEventListener("wheel",w,{passive:!0});const S=hC?$C():null,y=()=>{document.documentElement.setAttribute("data-lite",""),e&&(e.destroy(),e=null),s.current=null},F=O=>{e&&e.raf(O);const R=_?O-_:0;_=O,M++;const I=O-v<150,N=M>u&&M<=h;!m&&e&&R>0&&(I||N)&&(g++,R>(I?n:a)&&x++,g>=o&&(x/g>c?y():(g=0,x=0))),S==null||S.update({mode:e?"LENIS":"LITE",fps:R>0?Math.round(1e3/R):0,scrolling:I,scrollFrames:g,badFrames:x,ratio:g?x/g:0}),(e||S)&&(p=requestAnimationFrame(F))};return p=requestAnimationFrame(F),()=>{cancelAnimationFrame(p),window.removeEventListener("scroll",w),window.removeEventListener("wheel",w),S==null||S.destroy(),e&&e.destroy(),s.current=null}},[]),s}const Gy=".logo, .header-location, .tabs-indicator, .tabs button, .email-copy, .social-link",Vx=()=>{document.querySelectorAll(Gy).forEach(s=>s.style.removeProperty("--fill-local-y"))};let ky=0;function t2(s,e,n){const a=ye.useRef(null);ye.useEffect(()=>{if(!s){document.documentElement.style.removeProperty("--footer-header-progress"),document.documentElement.style.removeProperty("--footer-reveal-progress"),Vx(),document.documentElement.style.setProperty("--hero-case-progress","1"),document.documentElement.style.setProperty("--first-case-dock-progress","1"),document.documentElement.style.removeProperty("--hero-cue-prelude-progress"),document.documentElement.style.removeProperty("--hero-cue-stretch-progress"),document.documentElement.style.removeProperty("--hero-cue-lift-progress"),n||document.documentElement.removeAttribute("data-footer-reveal"),document.documentElement.removeAttribute("data-header-black"),document.documentElement.removeAttribute("data-scrolled"),document.documentElement.removeAttribute("data-last-case-docked"),document.documentElement.removeAttribute("data-first-case-docked"),document.documentElement.style.removeProperty("--header-ink"),document.documentElement.style.removeProperty("--header-hover-ink"),document.documentElement.style.removeProperty("--active-tab-ink"),document.documentElement.style.removeProperty("--active-tab-bg"),document.documentElement.style.removeProperty("--active-tab-border");return}const o=document.documentElement,c=window.matchMedia("(max-width: 760px)").matches,u=document.querySelector(".footer-reveal"),h=document.querySelector(".case-stack"),m=document.querySelector('.case-section[data-case-index="0"]'),p=document.querySelector('.case-section[data-case-index="2"]');let _=0,v=!1,g=68;const x=new Map,M=()=>{const O=parseFloat(getComputedStyle(o).getPropertyValue("--header-height"));g=Number.isFinite(O)?O:68},w=(O,R)=>{x.get(O)!==R&&(o.style.setProperty(O,R),x.set(O,R))};M();const S=()=>{var De;v=!1;const O=(u==null?void 0:u.getBoundingClientRect().top)??window.innerHeight,R=(h==null?void 0:h.getBoundingClientRect().top)??window.innerHeight,I=(p==null?void 0:p.getBoundingClientRect().top)??Number.POSITIVE_INFINITY,N=((De=m==null?void 0:m.querySelector(".case-frame"))==null?void 0:De.getBoundingClientRect().top)??Number.POSITIVE_INFINITY,H=window.scrollY<g?0:Math.min(1,Math.max(0,1-O/g)),T=O<window.innerHeight?1:0,D=ky||window.innerHeight,G=Math.min(1,Math.max(0,(D-R)/Math.max(1,D-g))),k=Math.min(1,G/.168),Z=Math.min(1,G/.07),ce=1-Math.pow(1-Z,3),ie=Math.min(1,Math.max(0,(G-.07)/.1)),K=1-Math.pow(1-ie,3),V=document.querySelector(".site-header");if(V){const Te=V.getBoundingClientRect(),qe=Te.top-2+(1-H)*(Te.height+5);V.querySelectorAll(Gy).forEach(re=>{re.style.setProperty("--fill-local-y",`${(qe-re.getBoundingClientRect().top).toFixed(1)}px`)})}w("--footer-header-progress",H.toFixed(3)),w("--footer-reveal-progress",String(T)),w("--hero-case-progress",G.toFixed(3)),w("--hero-cue-prelude-progress",k.toFixed(3)),w("--hero-cue-stretch-progress",ce.toFixed(3)),w("--hero-cue-lift-progress",K.toFixed(3)),o.toggleAttribute("data-footer-reveal",T===1),o.toggleAttribute("data-header-black",O<=g),o.toggleAttribute("data-scrolled",window.scrollY>4),o.toggleAttribute("data-last-case-docked",I<=g);const X=g+174,se=g+74,pe=Math.min(1,Math.max(0,(X-N)/(X-se))),Ce=window.scrollY;a.current!==null&&Ce<a.current&&(a.current=null),pe>=1&&a.current===null&&(a.current=Ce);const B=a.current!==null?1:pe;w("--first-case-dock-progress",B.toFixed(3));const ee=window.innerHeight;document.querySelectorAll(".case-section").forEach(Te=>{if(Te.classList.contains("case-section--open"))return;const qe=Te.getBoundingClientRect(),re=Te.getAttribute("data-case-index")==="2"?.5:.55,be=c?Te.querySelector(".case-cover__content")??Te:Te,he=be===Te?qe.top:be.getBoundingClientRect().top;he<ee*(c?.88:re)?Te.classList.add("case-section--seen"):!c&&T!==1&&Te.classList.remove("case-section--seen"),c&&he<ee*1.22&&Te.classList.add("case-section--phone-seen")})},y=()=>{v||(v=!0,_=requestAnimationFrame(S))},F=()=>{M(),y()};return S(),window.addEventListener("scroll",y,{passive:!0}),window.addEventListener("resize",F),window.addEventListener("header:remeasure",y),()=>{cancelAnimationFrame(_),window.removeEventListener("scroll",y),window.removeEventListener("resize",F),window.removeEventListener("header:remeasure",y),document.documentElement.style.removeProperty("--footer-header-progress"),document.documentElement.style.removeProperty("--footer-reveal-progress"),Vx(),document.documentElement.style.removeProperty("--hero-case-progress"),document.documentElement.style.removeProperty("--hero-cue-prelude-progress"),document.documentElement.style.removeProperty("--hero-cue-stretch-progress"),document.documentElement.style.removeProperty("--hero-cue-lift-progress"),document.documentElement.removeAttribute("data-last-case-docked"),document.documentElement.removeAttribute("data-first-case-docked"),document.documentElement.style.removeProperty("--header-ink"),document.documentElement.style.removeProperty("--header-hover-ink"),document.documentElement.style.removeProperty("--active-tab-ink"),document.documentElement.style.removeProperty("--active-tab-bg"),document.documentElement.style.removeProperty("--active-tab-border")}},[s,e,n])}

function n2() {
  return L.jsx("img", {
    className: "intro-loader-logo",
    src: "logoblack.png",
    alt: "eskash",
    "aria-hidden": "true"
  });
}

function i2() {
  return L.jsx("img", {
    className: "footer-logo",
    src: "logored.png",
    alt: "eskash",
    "data-click-burst": !0,
    "aria-hidden": "true"
  });
}

function a2(){return L.jsx("div",{className:"intro-transition-character","aria-hidden":"true",children:L.jsxs("div",{className:"intro-transition-character-clip",children:[L.jsx("img",{className:"intro-transition-character-image",src:"/characters/hero-character.webp",alt:""}),L.jsx("span",{className:"intro-transition-ring"})]})})}function s2(){ye.useLayoutEffect(()=>{const s=document.querySelector(".site-header");if(!s)return;const e=()=>{if(getComputedStyle(s).display==="none")return;s.style.height="";const o=Math.ceil(s.getBoundingClientRect().height);s.style.height=`${o}px`;const c=o-2;c>0&&document.documentElement.style.setProperty("--header-height",`${c}px`)};e();const n=new ResizeObserver(e);n.observe(s),window.addEventListener("resize",e);const a=window.visualViewport;return a==null||a.addEventListener("resize",e),window.addEventListener("orientationchange",e),window.addEventListener("header:remeasure",e),()=>{n.disconnect(),window.removeEventListener("resize",e),a==null||a.removeEventListener("resize",e),window.removeEventListener("orientationchange",e),window.removeEventListener("header:remeasure",e)}},[])}function r2(s){const e=ye.useRef(null);ye.useEffect(()=>{const n=window.matchMedia("(hover: hover) and (pointer: fine)").matches,a=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(!n||a)return;const o=c=>{window.innerWidth===0||window.innerHeight===0||(e.current={x:Math.max(-1,Math.min(1,(c.clientX/window.innerWidth-.5)*2)),y:Math.max(-1,Math.min(1,(c.clientY/window.innerHeight-.5)*2))})};return window.addEventListener("pointermove",o),()=>window.removeEventListener("pointermove",o)},[]),ye.useEffect(()=>{const n=document.querySelector(".work-hero"),a=window.matchMedia("(hover: hover) and (pointer: fine)").matches,o=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(!s||!n||!a||o)return;let c=0,u=0,h=0;const m=(_,v)=>{n.style.setProperty("--hero-cursor-x",_.toFixed(4)),n.style.setProperty("--hero-cursor-y",v.toFixed(4))},p=()=>{const _=e.current??{x:0,y:0};u+=(_.x-u)*.075,h+=(_.y-h)*.075,m(u,h),c=window.requestAnimationFrame(p)};return m(0,0),c=window.requestAnimationFrame(p),()=>{window.cancelAnimationFrame(c),n.style.removeProperty("--hero-cursor-x"),n.style.removeProperty("--hero-cursor-y")}},[s])}function o2(){const[s,e]=ye.useState(()=>wx(window.location.pathname)),[n]=ye.useState(ym),[a,o]=ye.useState(null),[c,u]=ye.useState(null),[h,m]=ye.useState(null),[p,_]=ye.useState("off"),v=ye.useRef(null),g=ye.useRef(null),[x,M]=ye.useState(0),[w,S]=ye.useState(null),y=ye.useRef(null),[F,O]=ye.useState(!1),[R,I]=ye.useState(!1),[N,H]=ye.useState(!1),T=ye.useRef(null),D=ye.useRef(!1),G=ye.useRef(null),k=ye.useRef(null),Z=ye.useRef(null),ce=ye.useRef(!1),ie=ye.useRef(0),K=ye.useRef(0),V=ye.useRef(null),[X,se]=ye.useState(!1),[pe,Ce]=ye.useState(!1),B=ye.useRef(!1),ee=ye.useRef([]),[De,Te]=ye.useState(null),[qe,re]=ye.useState(!1),[be,he]=ye.useState(!1),[Ue,st]=ye.useState("loading"),[et,bt]=ye.useState(!1),[pt,Tt]=ye.useState(!1),[wt,Lt]=ye.useState(!1),[nn,rn]=ye.useState(!1),[on,un]=ye.useState(!1),[Ht,jt]=ye.useState(!1),[$,Bt]=ye.useState(0),[Pt,z]=ye.useState(0),A=ye.useRef(!1),ne=ye.useRef(null),oe=ye.useRef(null),ue=ye.useRef(a),Pe=ye.useRef(s),[He,_e]=ye.useState({left:0,width:0}),[ge,Be]=ye.useState(!1),Je=ye.useRef(null),We=ye.useRef(null),Ze=ye.useRef(null),ot=ye.useRef(null),je=s==="design",[at]=ye.useState(()=>typeof window<"u"&&(window.matchMedia("(max-width: 760px)").matches||!1)),j=a!==null,Ve=a!==null?wr[a]:null,Se=xm[n],Xe=Tx[$],tt=Ue==="loading"||Ue==="media",Le=Ue==="media"||Ue==="text"||Ue==="header"||Ue==="explore";s2();const nt=e2();t2(je&&!j,Se,je),r2(je&&(Ue==="text"||Ue==="header"||Ue==="explore")),ye.useEffect(()=>{zy(n)},[n,j,je]),KC(),ye.useEffect(()=>{const Q=()=>{const we=TC(window.location.pathname);if(e(wx(window.location.pathname)),at){if(we===null&&document.querySelector(".case-section--open-m")&&Vt.current){Vt.current();return}Da.flushSync(()=>{o(we),u(null)});const Oe=we===null?K.current:0;document.documentElement.offsetHeight,window.scrollTo(0,Oe);const b=nt.current;b&&(b.resize(),b.scrollTo(Oe,{immediate:!0,force:!0}));return}o(we),u(null)};return window.location.pathname!=="/"&&(window.history.replaceState(null,"","/"),e("design"),o(null),u(null)),window.scrollTo(0,0),window.addEventListener("popstate",Q),()=>window.removeEventListener("popstate",Q)},[]),ye.useEffect(()=>{const Q=window.setTimeout(()=>un(!0),700);return()=>window.clearTimeout(Q)},[]),ye.useEffect(()=>{Be(!1)},[a,s]),ye.useEffect(()=>{let Q=!1,me=3;const we=()=>{me-=1,!(Q||me>0)&&(he(!0),re(!0))},Oe=b=>{var W;const P=new Image;let q=!1;const U=()=>{q||(q=!0,we())};P.onload=U,P.onerror=U,P.src=b,P.complete&&((W=P.decode)==null||W.call(P).catch(()=>{}).finally(U))};return[gC,"/characters/hero-character.webp","/characters/hero-character.webp"].forEach(Oe),()=>{Q=!0}},[]),ye.useEffect(()=>{const Q=document.documentElement;let me=window.innerWidth;const we=()=>{const b=window.innerHeight||Q.clientHeight;b>0&&(Q.style.setProperty("--vh-lock",`${b}px`),ky=b,Q.style.setProperty("--wheel-h-lock",`${Math.round(Math.min(b*.66,500))}px`))};we();const Oe=()=>{window.innerWidth!==me&&(me=window.innerWidth,we())};return window.addEventListener("resize",Oe),window.addEventListener("orientationchange",we),()=>{window.removeEventListener("resize",Oe),window.removeEventListener("orientationchange",we),Q.style.removeProperty("--vh-lock")}},[]),ye.useEffect(()=>{var me;if(!at||!je||!Le)return;const Q=ot.current;Q&&((me=Q.decode)==null||me.call(Q).catch(()=>{}))},[at,je,Le]),ye.useLayoutEffect(()=>{if(!je)return;const Q=836/2048,me=document.documentElement.style,we=()=>{const P=document.querySelector(".screen-wheel");if(!P)return;const q=P.getBoundingClientRect();if(q.width===0||q.height===0)return;const U=q.height*1.16,W=U*Q,Me=q.bottom+q.height*.33;me.setProperty("--intro-reveal-left",`${q.left+q.width/2-W/2}px`),me.setProperty("--intro-reveal-top",`${Me-U}px`),me.setProperty("--intro-reveal-width",`${W}px`),me.setProperty("--intro-reveal-height",`${U}px`)};we();let Oe=window.innerWidth;const b=()=>{window.innerWidth!==Oe&&(Oe=window.innerWidth,we())};return window.addEventListener("resize",b),()=>window.removeEventListener("resize",b)},[at,je,Ue]),ye.useEffect(()=>{if(!(je?Ht&&qe&&be:be)||!on||A.current)return;A.current=!0,bt(!0);const we=900+150,Oe=window.setTimeout(()=>st("media"),we),b=window.setTimeout(()=>Lt(!0),we+850),P=window.setTimeout(()=>Tt(!0),we+1150),q=window.setTimeout(()=>rn(!0),we+1500),U=window.setTimeout(()=>st("text"),we+1950),W=window.setTimeout(()=>st("header"),we+2100),Me=window.setTimeout(()=>st("explore"),we+2100);return()=>{window.clearTimeout(Oe),window.clearTimeout(b),window.clearTimeout(P),window.clearTimeout(q),window.clearTimeout(U),window.clearTimeout(W),window.clearTimeout(Me)}},[be,qe,je,on,Ht]),ye.useEffect(()=>{if(!je||Ue!=="explore")return;const Q=window.setInterval(()=>{Bt(me=>(me+1)%Tx.length)},3e3);return()=>window.clearInterval(Q)},[Ue,je]),ye.useEffect(()=>{const Q=Pe.current;Pe.current=s,Q==="about"&&s==="design"&&Ue==="explore"&&z(me=>me+1)},[s,Ue]),ye.useLayoutEffect(()=>{var me;const Q=()=>{const Oe={about:We,design:Ze}[s].current,b=Je.current;!Oe||!b||Oe.offsetWidth&&_e({left:Oe.offsetLeft,width:Oe.offsetWidth})};return Q(),window.addEventListener("resize",Q),(me=document.fonts)==null||me.ready.then(Q),()=>window.removeEventListener("resize",Q)},[s,j]),ye.useLayoutEffect(()=>{var P;const Q=document.querySelector(".about-panel__logo"),me=document.querySelector(".about-panel__text");if(!Q||!me)return;const we=window.matchMedia("(max-width: 760px)"),Oe=()=>{if(we.matches){Q.style.height="";return}Q.style.height=`${Math.round(me.getBoundingClientRect().height)}px`};Oe();const b=new ResizeObserver(Oe);return b.observe(me),(P=document.fonts)==null||P.ready.then(Oe),()=>{b.disconnect(),Q.style.height=""}},[s]),ye.useLayoutEffect(()=>{if(at){ue.current=a;return}const Q=we=>{const Oe=Math.max(0,we),b=nt.current,P=()=>{b==null||b.scrollTo(Oe,{immediate:!0,force:!0}),window.scrollTo({left:0,top:Oe,behavior:"instant"})};P(),requestAnimationFrame(P)};a!==null&&k.current!==null&&(window.clearTimeout(k.current),k.current=null),a!==null&&(y.current!==null&&(window.clearTimeout(y.current),y.current=null),S(null));const me=ne.current;if(me&&a===me.index){const we=document.querySelector(`[data-case-index="${me.index}"]`),Oe=we==null?void 0:we.querySelector(".case-frame");if(we&&Oe){const b=Oe.getBoundingClientRect().top,P=Math.max(0,window.scrollY+b-me.targetViewportTop);ie.current=P,Q(P);const q=me.startViewportTop-me.targetViewportTop;document.documentElement.style.setProperty("--case-dock-y",`${q}`)}ne.current=null}if(a===null&&ue.current!==null){const we=document.querySelector(`[data-case-index="${ue.current}"]`);we&&(we.style.transition="",we.style.transform="",we.classList.add("case-section--seen")),document.documentElement.removeAttribute("data-hero-offscreen");const Oe=document.querySelector(".explore-cue");if(Oe&&(Oe.style.height="",Oe.style.position="",Oe.style.top="",Oe.style.left="",Oe.style.transform="",Oe.style.opacity=""),we){const b=we,P=nt.current,q=parseFloat(getComputedStyle(b).top)||44;let U=0;for(let Me=b;Me;Me=Me.offsetParent)U+=Me.offsetTop;const W=Math.max(0,U-q);P?(P.resize(),P.scrollTo(W,{immediate:!0,force:!0})):window.scrollTo({left:0,top:W,behavior:"instant"}),k.current!==null&&window.clearTimeout(k.current)}}ue.current=a},[a]),ye.useEffect(()=>{if(at||a===null||F)return;const Q=nt.current,me=()=>{const we=ie.current;window.scrollY<we-.5&&(Q?Q.scrollTo(we,{immediate:!0,force:!0}):window.scrollTo(0,we))};return Q?(Q.on("scroll",me),()=>Q.off("scroll",me)):(window.addEventListener("scroll",me,{passive:!0}),()=>window.removeEventListener("scroll",me))},[a,F]),ye.useEffect(()=>{if(a===null)return;const Q=document.querySelectorAll(".case-story__row, .case-story__coda, .case-stats__cell, .case-outro"),me=document.querySelectorAll(".case-next__slot");if(!Q.length&&!me.length)return;const we=window.matchMedia("(prefers-reduced-motion: reduce)").matches,Oe=ke=>{const Qe=Nx(ke.dataset.statValue??"");Qe&&(ke.textContent=`${Qe.pre}${0 .toFixed(Qe.decimals)}${Qe.post}`)},b=new Set,P=ke=>{const Qe=Nx(ke.dataset.statValue??"");if(!Qe)return;let Ke=null,vt=0;const ut=Mt=>{b.delete(vt),Ke===null&&(Ke=Mt);const At=Math.min(1,(Mt-Ke)/DC);if(At<1){const qt=1-Math.pow(1-At,3);ke.textContent=`${Qe.pre}${(Qe.num*qt).toFixed(Qe.decimals)}${Qe.post}`,vt=requestAnimationFrame(ut),b.add(vt)}else ke.textContent=ke.dataset.statValue??ke.textContent};vt=requestAnimationFrame(ut),b.add(vt)},q=new WeakSet,U=new WeakSet,W=new IntersectionObserver(ke=>{for(const Qe of ke){const Ke=Qe.target;if(Qe.isIntersecting){Ke.classList.add("is-in"),Ke.querySelectorAll("video").forEach(ut=>{ut.offsetParent!==null&&(ut.closest(".case-reel")||q.has(ut)||(q.add(ut),ut.play().catch(()=>{})))});const vt=Ke.querySelector(".case-stats__value");vt&&!we&&!U.has(vt)&&(U.add(vt),P(vt))}else at||Ke.classList.remove("is-in")}},{rootMargin:jl()?"0px 0px -34% 0px":"0px 0px -42% 0px"});we||document.querySelectorAll(".case-stats__value").forEach(Oe),Q.forEach(ke=>W.observe(ke));const Me=document.querySelectorAll(".case-story__row--riser, .case-story__row--riser-video"),Ge=Me.length?new IntersectionObserver(ke=>{for(const Qe of ke)Qe.target.classList.toggle("is-risen",Qe.isIntersecting)},{rootMargin:"2000px 0px -30% 0px"}):null;Me.forEach(ke=>Ge==null?void 0:Ge.observe(ke));const Re=document.querySelector(".case-next"),Ie=me[me.length-1],ze=new IntersectionObserver(ke=>{for(const Qe of ke)Re&&(Qe.isIntersecting?(Re.classList.add("is-in"),Re.querySelectorAll("video").forEach(Ke=>{q.has(Ke)||(q.add(Ke),Ke.play().catch(()=>{}))})):at||Re.classList.remove("is-in"))},{rootMargin:`0px 0px -${LC}px 0px`});return Ie&&ze.observe(Ie),()=>{W.disconnect(),ze.disconnect(),Ge==null||Ge.disconnect(),b.forEach(ke=>cancelAnimationFrame(ke))}},[a,at]),ye.useEffect(()=>{var Oe;if(a===null)return;const Q=document.createElement("canvas").getContext("2d"),me=()=>{Q&&document.querySelectorAll(".case-outro__row").forEach(b=>{const P=b.querySelector(".case-outro__title");if(!P)return;P.dataset.fullText||(P.dataset.fullText=P.textContent||"");const q=P.dataset.fullText;P.style.fontSize="",P.style.marginLeft="";const U=b.querySelector(".case-outro__logo");U&&(U.style.height="",U.style.width="",U.style.marginTop="");const W=getComputedStyle(P),Me=parseFloat(W.fontSize);if(!Me||!q)return;const Ge=(parseFloat(W.letterSpacing)||0)/Me,Re=(parseFloat(W.lineHeight)||Me*.9)/Me,Ie=(mt,Nt)=>{Q.font=`${W.fontStyle} ${W.fontWeight} ${mt}px ${W.fontFamily}`,"letterSpacing"in Q&&(Q.letterSpacing=`${Ge*mt}px`);const Sn=Q.measureText(Nt.toUpperCase()),mn=(Re*mt-(Sn.fontBoundingBoxAscent+Sn.fontBoundingBoxDescent))/2+Sn.fontBoundingBoxAscent;return{left:-Sn.actualBoundingBoxLeft,right:Sn.actualBoundingBoxRight,top:mn-Sn.actualBoundingBoxAscent}},ze=(mt,Nt)=>{let Sn=Me;for(let It=0;It<3;It++){const{left:mn,right:Vi}=Ie(Sn,mt),Gi=Vi-mn;if(!Number.isFinite(Gi)||Gi<=0)return 0;Sn*=Nt/Gi}return Sn},ke=q.split(/\s+/).filter(Boolean),Qe=U?Math.round(b.clientWidth*.012):0,Ke=jl(),vt=mt=>{if(!U)return 0;if(!Ke)return U.getBoundingClientRect().width;Q.font=`${W.fontStyle} ${W.fontWeight} ${mt}px ${W.fontFamily}`;const Nt=Q.measureText("H").actualBoundingBoxAscent;return U.style.height=`${Nt.toFixed(2)}px`,U.style.width="auto",U.style.marginTop="0px",U.getBoundingClientRect().width};let ut=U?U.getBoundingClientRect().width:0;const Mt=mt=>ze(q,b.clientWidth-mt-Qe);let At=Mt(ut);if(!Ke||!At||At>=b.clientWidth*.17||ke.length<2){if(Ke&&At&&(ut=vt(At),At=Mt(ut)),!At)return;const{left:mt,top:Nt}=Ie(At,q);if(!Number.isFinite(mt))return;P.textContent=q,P.style.fontSize=`${At.toFixed(2)}px`,P.style.marginLeft=`${(Qe-mt).toFixed(2)}px`,P.style.marginTop=Ke?`${(-Nt).toFixed(2)}px`:"",P.style.flex="",P.style.minWidth="",P.style.width="";return}const qt=(mt,Nt)=>Math.min(ze(ke.slice(0,mt).join(" "),b.clientWidth-Nt-Qe),ze(ke.slice(mt).join(" "),b.clientWidth));let $e=1,Ln=0;for(let mt=1;mt<ke.length;mt++){const Nt=qt(mt,ut);Nt>Ln&&(Ln=Nt,$e=mt)}const Rt=ke.slice(0,$e).join(" "),Nn=ke.slice($e).join(" ");if(!Ln)return;ut=vt(Ln);const Un=qt($e,ut),fi=Un;if(!Un)return;const si=(mt,Nt,Sn)=>{const{left:It}=Ie(Nt,mt),mn=document.createElement("span");return mn.className="case-outro__line",mn.textContent=mt,mn.style.display="block",mn.style.fontSize=`${Nt.toFixed(2)}px`,mn.style.marginLeft=`${(Sn-It).toFixed(2)}px`,mn.style.whiteSpace="nowrap",mn.style.textAlign="left",mn};P.textContent="",P.append(si(Rt,Un,Qe),si(Nn,fi,-(ut+Qe))),P.style.flex="1 1 auto",P.style.minWidth="0",P.style.width=`${(b.clientWidth-ut-Qe).toFixed(2)}px`,P.style.marginTop=`${(-Ie(Un,Rt).top).toFixed(2)}px`})};me(),(Oe=document.fonts)==null||Oe.ready.then(me).catch(()=>{});const we=Array.from(document.querySelectorAll(".case-outro__logo--img"));return we.forEach(b=>{b.complete||b.addEventListener("load",me)}),window.addEventListener("resize",me),()=>{window.removeEventListener("resize",me),we.forEach(b=>b.removeEventListener("load",me)),document.querySelectorAll(".case-outro__title").forEach(b=>{b.dataset.fullText&&(b.textContent=b.dataset.fullText),b.style.fontSize="",b.style.marginLeft="",b.style.marginTop="",b.style.flex="",b.style.minWidth="",b.style.width=""}),document.querySelectorAll(".case-outro__logo").forEach(b=>{b.style.height="",b.style.width="",b.style.marginTop=""})}},[a]),ye.useLayoutEffect(()=>{if(a===null||F||jl())return;const Q=nt.current,me=()=>{const P=document.querySelector(".case-section--settled")??document.querySelector(".case-section--open-m");if(!P)return;const q=window.innerHeight,U=q*UC,W=q*OC;P.querySelectorAll(".case-outro").forEach(Me=>{const Ge=Me.previousElementSibling,Re=Me.querySelector(".case-outro__row");if(!Ge||!Re)return;const Ie=Ge.getBoundingClientRect(),ze=Me.querySelector(".case-outro__title"),ke=ze?Math.max(0,-parseFloat(getComputedStyle(ze).marginTop)||0):0,Qe=Math.min(U,q-Re.getBoundingClientRect().height-W),Ke=Ie.top-Ie.bottom+ke+1,ut=Ie.top<=Qe-ke&&Ie.bottom>Qe?Math.max(Qe-Ie.bottom,Ke):0;Re.style.transform=`translate3d(0, ${ut.toFixed(2)}px, 0)`})};if(me(),Q)return Q.on("scroll",me),()=>{Q.off("scroll",me)};let we=0,Oe=-1;const b=()=>{window.scrollY!==Oe&&(Oe=window.scrollY,me()),we=requestAnimationFrame(b)};return we=requestAnimationFrame(b),()=>{cancelAnimationFrame(we)}},[a,F]),ye.useEffect(()=>()=>{oe.current!==null&&window.clearTimeout(oe.current),G.current!==null&&window.clearTimeout(G.current),k.current!==null&&window.clearTimeout(k.current),y.current!==null&&window.clearTimeout(y.current),T.current!==null&&window.clearTimeout(T.current),v.current!==null&&window.clearTimeout(v.current),g.current!==null&&window.clearTimeout(g.current)},[]);const rt=Q=>{const me=Ax.find(we=>we.id===Q);me&&(e(Q),o(null),u(null),Te(null),window.location.pathname!==me.path&&window.history.pushState(null,"",me.path))},ln=()=>{var Q;Z.current!==null&&(window.clearTimeout(Z.current),Z.current=null),ce.current||(ce.current=!0,(Q=nt.current)==null||Q.stop(),window.addEventListener("wheel",Yu,{passive:!1,capture:!0}),window.addEventListener("touchmove",Yu,{passive:!1,capture:!0}))},Wt=()=>{var Q;Z.current!==null&&(window.clearTimeout(Z.current),Z.current=null),ce.current&&(ce.current=!1,window.removeEventListener("wheel",Yu,{capture:!0}),window.removeEventListener("touchmove",Yu,{capture:!0}),(Q=nt.current)==null||Q.start())};ye.useEffect(()=>{if(!at)return;if(!je||Ue==="explore"){Wt();return}ln();const Q=window.setTimeout(Wt,12e3);return()=>window.clearTimeout(Q)},[at,je,Ue]);const Rn=Q=>{document.documentElement.offsetHeight,window.scrollTo({top:Q,left:0,behavior:"instant"});const me=nt.current;me&&(me.resize(),me.scrollTo(Q,{immediate:!0,force:!0}))},Jn="cubic-bezier(0.22, 1, 0.36, 1)",Ui=900,Ji=0,wi=Q=>{const me=document.documentElement;Q?(me.style.backgroundColor="#ffffff",document.body.style.backgroundColor="#ffffff"):(me.style.removeProperty("background-color"),document.body.style.removeProperty("background-color"))},_i=(Q,me)=>{if(!Q.length){me();return}const we=Q.reduce((Oe,b)=>{var U;const P=(U=b.effect)==null?void 0:U.getTiming(),q=Number((P==null?void 0:P.delay)??0)+Number((P==null?void 0:P.duration)??0);return Math.max(Oe,Number.isFinite(q)?q:0)},0);window.setTimeout(me,we)},ni=Q=>{ee.current.forEach(U=>U.cancel()),ee.current=[];const me=[];if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return me;const we=document.querySelector(".case-section--open-m");if(!we)return me;const Oe=Q?"reverse":"normal",b=Q?"forwards":"backwards";me.push(we.animate([{opacity:0,transform:"translateY(28px)"},{opacity:1,transform:"translateY(0)"}],{duration:Ui,easing:Jn,direction:Oe,fill:b}));const P=we.querySelector(".case-frame");P&&me.push(P.animate([{opacity:0,transform:"scale(0.94)",transformOrigin:"50% 40vh"},{opacity:1,transform:"scale(1)",transformOrigin:"50% 40vh"}],{duration:Ui,easing:Jn,direction:Oe,fill:b}));const q=we.querySelector(".case-page-body");return q&&me.push(q.animate([{transform:"translateY(120px)"},{transform:"translateY(0)"}],{duration:Ui,delay:Q?0:Ji,easing:Jn,direction:Oe,fill:b})),me},pn=(Q,me)=>{const we=[];if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return we;const Oe="cubic-bezier(0.4, 0, 0.2, 1)",b=Q?"reverse":"normal",P=Q?"backwards":"forwards",q=document.querySelector(".page");return q&&we.push(q.animate([{opacity:1},{opacity:0}],{duration:Cx,easing:Oe,direction:b,fill:P})),document.querySelectorAll(".case-stack, .work-hero, .hero-marquee, .footer-reveal").forEach(U=>{const W=`50% ${me-(U.getBoundingClientRect().top+window.scrollY)}px`;we.push(U.animate([{transform:"scale(1)",transformOrigin:W},{transform:"scale(1.04)",transformOrigin:W}],{duration:Cx,easing:Oe,direction:b,fill:P}))}),ee.current=we,we},cn=Q=>{if(!Q)return;Q.classList.add("case-section--seen"),Q.setAttribute("data-phone-shown","");const me=Q.querySelector(".case-phone-mask"),we=Q.querySelectorAll(".case-phone-video"),Oe=we[0],b=we[1];if(me&&(me.style.display=""),b&&(b.style.display="none",b.pause()),Oe){Oe.style.display="";try{Oe.currentTime=0}catch{}Oe.play().catch(()=>{})}},bn=()=>ni(!1),ii=()=>ni(!0),xi=Q=>{if(a!==null||D.current||B.current)return;document.querySelectorAll(".case-button.is-clicked").forEach(Oe=>Oe.classList.remove("is-clicked")),K.current=window.scrollY,B.current=!0,Ce(!0),wi(!0);const me=pn(!1,window.scrollY+window.innerHeight/2);_i(me,()=>{const Oe=Wu(Q);window.location.pathname!==Oe&&window.history.pushState(null,"",Oe),Rn(0),Da.flushSync(()=>{o(Q),Ce(!1)}),Rn(0),cn(document.querySelector(`[data-case-index="${Q}"]`)),me.forEach(P=>P.cancel()),requestAnimationFrame(()=>{window.scrollY!==0&&Rn(0)});const b=bn();_i(b,()=>wi(!1)),B.current=!1})},ai=()=>{if(a===null||D.current)return;D.current=!0;const Q=a;window.location.pathname!=="/design"&&window.history.pushState(null,"","/design");const me=ii();se(!0),_i(me,()=>{const Oe=K.current+window.innerHeight/2;Da.flushSync(()=>{o(null),se(!1)}),Rn(K.current),me.forEach(q=>q.cancel());const b=document.querySelector(`[data-case-index="${Q}"]`),P=document.querySelector(".page");if(b){b.classList.add("case-section--seen"),b.classList.add("case-section--reentry"),b.setAttribute("data-phone-shown","");const q=b.querySelector(".case-phone-mask"),U=b.querySelectorAll(".case-phone-video"),W=U[0],Me=U[1];if(q&&(q.style.display=""),Me&&(Me.style.display="none",Me.pause()),W){W.style.display="";try{W.currentTime=0}catch{}W.play().catch(()=>{})}}P==null||P.classList.add("page--case-reentry-m"),window.setTimeout(()=>{b==null||b.classList.remove("case-section--reentry"),P==null||P.classList.remove("page--case-reentry-m")},700),wi(!0),_i(pn(!0,Oe),()=>wi(!1)),D.current=!1,window.setTimeout(()=>window.dispatchEvent(new Event("header:remeasure")),720)})},Vt=ye.useRef(null);Vt.current=ai;const yi=Q=>{var vt;if(at){xi(Q);return}if(Nr()){bx(()=>Si(Q));return}const me=document.querySelector(`[data-case-index="${Q}"]`),we=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-height"))||68,Oe=we;oe.current!==null&&(window.clearTimeout(oe.current),oe.current=null);const b=me==null?void 0:me.querySelector(".case-frame"),P=(b==null?void 0:b.getBoundingClientRect().top)??Oe;ne.current={index:Q,startViewportTop:P,targetViewportTop:Oe};const q=document.querySelector(`[data-case-index="${Q+1}"]`),U=q==null?void 0:q.querySelector(".case-frame"),W=U==null?void 0:U.getBoundingClientRect(),Me=q==null?void 0:q.getBoundingClientRect(),Ge=!!W&&W.top<window.innerHeight&&W.bottom>we;if(Me&&Ge){const ut=document.documentElement.style;ut.setProperty("--case-drop-top",`${Me.top}px`),ut.setProperty("--case-drop-left",`${Me.left}px`),ut.setProperty("--case-drop-width",`${Me.width}px`),ut.setProperty("--case-drop-height",`${Me.height}px`)}const Re=(vt=document.querySelector(".work-hero"))==null?void 0:vt.getBoundingClientRect();if(Re){const ut=document.documentElement.style;ut.setProperty("--case-hero-top",`${Re.top}px`),ut.setProperty("--case-hero-left",`${Re.left}px`),ut.setProperty("--case-hero-width",`${Re.width}px`),ut.setProperty("--case-hero-height",`${Re.height}px`),document.documentElement.toggleAttribute("data-hero-offscreen",Q>0||Re.bottom<=0||Re.top>=window.innerHeight)}const Ie=document.querySelector(`[data-case-index="${Q-1}"]`),ze=Ie==null?void 0:Ie.getBoundingClientRect(),ke=!!ze&&ze.bottom>0&&ze.top<window.innerHeight;if(ke&&ze){const ut=document.documentElement.style;ut.setProperty("--case-prev-top",`${ze.top}px`),ut.setProperty("--case-prev-left",`${ze.left}px`),ut.setProperty("--case-prev-width",`${ze.width}px`),ut.setProperty("--case-prev-height",`${ze.height}px`)}const Qe=document.querySelector(".explore-cue");if(Qe){const ut=getComputedStyle(Qe),Mt=Qe.getBoundingClientRect();Qe.style.height=ut.height,Qe.style.position="fixed",Qe.style.top=`${Mt.top}px`,Qe.style.left="50%"}const Ke=Wu(Q);window.location.pathname!==Ke&&window.history.pushState(null,"",Ke),Da.flushSync(()=>{u(Ge?Q+1:null),Te(ke?Q-1:null),o(Q)}),ln(),Z.current=window.setTimeout(Wt,pf()+60)},Si=Q=>{var P,q,U;ie.current=0,(P=nt.current)==null||P.scrollTo(0,{immediate:!0,force:!0}),window.scrollTo({left:0,top:0,behavior:"instant"}),document.documentElement.style.setProperty("--case-dock-y","0"),Da.flushSync(()=>{u(null),Te(null),o(Q),M(W=>W+1)}),(q=nt.current)==null||q.scrollTo(0,{immediate:!0,force:!0}),window.scrollTo({left:0,top:0,behavior:"instant"});const me=document.querySelector(`[data-case-index="${Q}"]`),we=me==null?void 0:me.querySelector(".case-frame"),Oe=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-height"))||68;if(we){const W=Math.max(0,Math.round(window.scrollY+we.getBoundingClientRect().top-Oe));W>0&&(ie.current=W,(U=nt.current)==null||U.scrollTo(W,{immediate:!0,force:!0}),window.scrollTo({left:0,top:W,behavior:"instant"}),Da.flushSync(()=>M(Me=>Me+1)))}document.documentElement.toggleAttribute("data-hero-offscreen",!0);const b=Wu(Q);window.location.pathname!==b&&window.history.pushState(null,"",b)},ui=Q=>{if(at){if(a===null){xi(Q);return}if(Q===a||D.current||B.current)return;B.current=!0;const Me=ii();_i(Me,()=>{const Re=Wu(Q);window.location.pathname!==Re&&window.history.pushState(null,"",Re),Rn(0),Da.flushSync(()=>o(Q)),Rn(0),cn(document.querySelector(`[data-case-index="${Q}"]`)),Me.forEach(Ie=>Ie.cancel()),requestAnimationFrame(()=>{window.scrollY!==0&&Rn(0)}),bn(),B.current=!1});return}const me=document.querySelector(`.case-next__slot[data-teaser-index="${Q}"] .case-next__strip`),we=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(!me||we){Si(Q);return}const Oe=me.getBoundingClientRect(),b=me.parentElement;b&&(b.style.height=`${Oe.height}px`);const P=[...document.querySelectorAll(".case-next__strip")].filter(Me=>Me!==me),q=P.length?Math.min(...P.map(Me=>Me.getBoundingClientRect().top)):window.innerHeight;document.documentElement.style.setProperty("--teaser-dodge-y",`${Math.max(0,Math.round(window.innerHeight-q))}px`);const U=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-height"))||68,W=document.documentElement.style;W.setProperty("--teaser-dive-top",`${Oe.top}px`),W.setProperty("--teaser-dive-left",`${Oe.left}px`),W.setProperty("--teaser-dive-width",`${Oe.width}px`),W.setProperty("--teaser-dive-height",`${Oe.height}px`),W.setProperty("--teaser-dive-cover-top",`${U}px`),W.setProperty("--teaser-dive-ms",`${Dx}ms`),W.setProperty("--case-teaser-reveal-ms",`${Lx}ms`),m(Q)};ye.useEffect(()=>{if(h===null)return;const Q=h,me=document.querySelector(".case-next"),we=requestAnimationFrame(()=>me==null?void 0:me.classList.add("is-diving-open"));return v.current=window.setTimeout(()=>{v.current=null,Da.flushSync(()=>_("up")),Si(Q),m(null),g.current=window.setTimeout(()=>{g.current=null,_("lifting");const Oe=document.querySelector(`[data-case-index="${Q}"]`),b=Oe==null?void 0:Oe.querySelector(".case-phone-mask"),P=Oe==null?void 0:Oe.querySelector(".case-phone-video");if(b&&(b.style.display=""),P){P.style.display="";try{P.currentTime=0}catch{}P.play().catch(()=>{})}Oe==null||Oe.setAttribute("data-phone-shown","1"),g.current=window.setTimeout(()=>{g.current=null,_("off")},Lx)},40)},Dx),()=>{cancelAnimationFrame(we),v.current!==null&&(window.clearTimeout(v.current),v.current=null)}},[h]);const Ri=()=>{if(a===null||D.current)return;if(at){ai();return}if(Nr()){const W=a;window.location.pathname!=="/design"&&window.history.pushState(null,"","/design"),bx(()=>{Da.flushSync(()=>{O(!1),I(!1),u(null),Te(null),o(null)}),document.documentElement.style.setProperty("--case-dock-y","0");const Me=W!=null?document.querySelector(`[data-case-index="${W}"]`):null;if(Me){const Ge=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-height"))||56;window.scrollTo(0,Math.max(0,window.scrollY+Me.getBoundingClientRect().top-Ge))}});return}D.current=!0,ln(),oe.current!==null&&(window.clearTimeout(oe.current),oe.current=null);const Q=a,me=document.querySelector(`[data-case-index="${Q}"]`),we=me==null?void 0:me.querySelector(".case-frame"),Oe=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-height"))||68,b=we?we.getBoundingClientRect().top:Oe,P=Oe-b>window.innerHeight*.5,q=ie.current,U=()=>{I(P),O(!0),G.current!==null&&window.clearTimeout(G.current);const W=Q<wr.length-1?Q+1:null;G.current=window.setTimeout(()=>{G.current=null,Da.flushSync(()=>{O(!1),I(!1),u(null),Te(null),o(null),S(W)});const Me=document.querySelector(`[data-case-index="${Q}"]`);Me&&(Me.classList.add("case-section--seen"),Me.setAttribute("data-reveal-lock",""),window.setTimeout(()=>Me.removeAttribute("data-reveal-lock"),900)),D.current=!1,Wt(),y.current!==null&&window.clearTimeout(y.current),W!==null&&(y.current=window.setTimeout(()=>{y.current=null,S(null)},700))},pf()+40)};if(window.location.pathname!=="/design"&&window.history.pushState(null,"","/design"),P)H(!0),T.current!==null&&window.clearTimeout(T.current),T.current=window.setTimeout(()=>{T.current=null;const W=nt.current;W==null||W.scrollTo(q,{immediate:!0,force:!0}),window.scrollTo({left:0,top:q,behavior:"instant"}),U(),H(!1)},RC);else{const W=nt.current;W?W.scrollTo(q,{duration:.5,force:!0,onComplete:U}):(window.scrollTo({left:0,top:q,behavior:"instant"}),U())}};return ye.useEffect(()=>{if(!at||a===null)return;const Q=V.current;if(!Q)return;let me=0;const we=()=>{me=0;const b=Q.getBoundingClientRect(),P=b.left+b.width/2,q=b.top+b.height/2;Q.style.pointerEvents="none";let U=document.elementFromPoint(P,q);Q.style.pointerEvents="";let W=!1;for(;U&&U!==document.documentElement;){const Ge=getComputedStyle(U).backgroundColor.match(/rgba?\(([^)]+)\)/);if(Ge){const Re=Ge[1].split(",").map(ze=>parseFloat(ze)),Ie=Re[3];if(Ie===void 0||Ie>.1){W=(.299*Re[0]+.587*Re[1]+.114*Re[2])/255<.5;break}}U=U.parentElement}Q.classList.toggle("case-back--on-dark",W)},Oe=()=>{me||(me=requestAnimationFrame(we))};return me=requestAnimationFrame(we),window.addEventListener("scroll",Oe,{passive:!0}),()=>{window.removeEventListener("scroll",Oe),me&&cancelAnimationFrame(me),Q.classList.remove("case-back--on-dark")}},[at,a]),L.jsxs("main",{className:`page page--${s} page--intro-${Ue}${pt?" page--surged":""}${j?at?" page--case-open-m":" page--case-open":""}${X?" page--case-closing-m":""}${pe?" page--case-leaving-m":""}${F?" page--case-closing":""}${R?" page--case-closing-far":""}${N?" page--case-veil":""}${p==="lifting"?" page--teaser-reveal":""}`,style:Ve?{"--open-case-ink":Ve.ink}:void 0,children:[L.jsx("div",{className:"case-exit-veil","aria-hidden":"true"}),L.jsxs("div",{className:`intro-loader${et?" intro-loader--enter":""}${Ue==="media"?" intro-loader--transition":""}${wt?" intro-loader--fade":""}${tt?"":" intro-loader--done"}`,"aria-hidden":!tt,children:[L.jsx(n2,{}),L.jsx("span",{className:"intro-transition-dot","aria-hidden":"true"}),L.jsx(a2,{})]}),L.jsxs("header",{className:`site-header ${ge?"site-header--info-open":""}`.trim(),"aria-label":"Main navigation",children:[L.jsxs("div",{className:"brand-area",children:[L.jsx("span",{className:"logo-link","data-click-burst":!0,children:L.jsx("span",{className:"logo","aria-hidden":"true"})}),L.jsxs("span",{className:"header-location","data-click-burst":!0,children:[L.jsx("img",{"aria-hidden":"true",src:"/icons/location.svg",alt:""}),"Razavi Khorasan, Iran"]})]}),L.jsxs("nav",{className:"tabs","aria-label":"Portfolio sections",ref:Je,children:[L.jsx("span",{className:"tabs-indicator",style:{translate:`${He.left}px -50%`,width:`${He.width}px`}}),Ax.map(Q=>ye.createElement("button",{"aria-current":s===Q.id?"page":void 0,...s===Q.id?{"data-click-burst":""}:{"data-click-bounce":""},key:Q.id,onClick:()=>rt(Q.id),ref:Q.id==="about"?We:Ze,type:"button"},Q.label))]}),L.jsxs("div",{className:"header-contact","aria-label":"Contact links",children:[L.jsx(op,{}),L.jsx("a",{className:"social-link",href:"https://t.me/developer_fulll",target:"_blank",rel:"noreferrer","aria-label":"Telegram","data-click-bounce":!0,children:L.jsx("img",{"aria-hidden":"true",src:"/icons/telegram.svg",alt:""})}),L.jsx("a",{className:"social-link",href:"https://www.linkedin.com/in/eskash/",target:"_blank",rel:"noreferrer","aria-label":"LinkedIn","data-click-bounce":!0,children:L.jsx("img",{"aria-hidden":"true",src:"/icons/linkedin.svg",alt:""})})]}),L.jsx("button",{className:"header-info-toggle",type:"button","aria-expanded":ge,"aria-label":ge?"Close contact info":"Show contact info",onClick:()=>Be(Q=>!Q),"data-click-bounce":!0,children:L.jsxs("span",{className:"header-info-toggle__i","aria-hidden":"true",children:[L.jsx("span",{className:"header-info-toggle__i-dot"}),L.jsx("span",{className:"header-info-toggle__i-stem"})]})}),L.jsx("div",{className:"header-info-panel","aria-hidden":!ge,children:L.jsxs("div",{className:"header-info-panel__inner",children:[L.jsx(op,{}),L.jsxs("div",{className:"header-info-panel__socials",children:[L.jsx("a",{className:"social-link",href:"https://t.me/developer_fulll",target:"_blank",rel:"noreferrer","aria-label":"Telegram",tabIndex:ge?0:-1,"data-click-bounce":!0,children:L.jsx("img",{"aria-hidden":"true",src:"/icons/telegram.svg",alt:""})}),L.jsx("a",{className:"social-link",href:"https://www.linkedin.com/in/eskash/",target:"_blank",rel:"noreferrer","aria-label":"LinkedIn",tabIndex:ge?0:-1,"data-click-bounce":!0,children:L.jsx("img",{"aria-hidden":"true",src:"/icons/linkedin.svg",alt:""})})]})]})})]}),at&&L.jsx("div",{className:"header-top-fill","aria-hidden":"true"}),L.jsx("button",{className:`header-info-scrim ${ge?"header-info-scrim--on":""}`.trim(),type:"button",tabIndex:-1,"aria-hidden":"true",onClick:()=>Be(!1)}),L.jsxs("button",{ref:V,className:"case-back",type:"button",onClick:Ri,tabIndex:j?0:-1,"aria-hidden":!j,"aria-label":"Back to gallery","data-click-bounce":!0,children:[L.jsx("svg",{className:"case-back__arrow","aria-hidden":"true",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",children:L.jsx("path",{d:"M19 12H6M12 5l-7 7 7 7"})}),L.jsxs("svg",{className:"case-back__home","aria-hidden":"true",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[L.jsx("path",{d:"M4 11.5 12 5l8 6.5"}),L.jsx("path",{d:"M6 10.2V19.5h12V10.2"}),L.jsx("path",{d:"M10.2 19.5v-4.4h3.6v4.4"})]}),L.jsx("span",{className:"case-back__label",children:"Gallery"})]}),p!=="off"&&L.jsx("div",{className:`case-dive-curtain${p==="lifting"?" is-lifting":""}`,"aria-hidden":"true"}),L.jsxs("section",{className:"work-hero","aria-label":je?"Product design work":"About",children:[je&&L.jsxs("div",{className:"hero-intro",children:[L.jsxs("h1",{className:"sr-only",children:[Xe," Design"]}),L.jsxs("div",{className:"sr-only","aria-label":"Profile highlights",children:[L.jsx("span",{children:"Founding Product Designer"}),L.jsx("span",{children:"End-to-end / full stack"})]})]}),L.jsxs("div",{className:`screen-wheel${je?"":" screen-wheel--inactive"}`,"aria-hidden":!je,children:[L.jsx("div",{className:"carousel-stage",children:L.jsx(JC,{accentColor:Se.accent,cursorEngaged:Ue==="text"||Ue==="header"||Ue==="explore",heroTextColor:Se.heroText,heroTypingColor:Se.heroTyping,introReplayKey:Pt,paused:j||!je,sceneCharacterVisible:nn,snapCharacterVisible:nn,spinIntroStarted:pt,spinSlowdownStarted:pt,textIntroStarted:pt,onSceneReady:()=>jt(!0),titleWord:Xe})}),L.jsx("div",{className:"wheel-lens-blur wheel-lens-blur--left","aria-hidden":"true"}),L.jsx("div",{className:"wheel-lens-blur wheel-lens-blur--right","aria-hidden":"true"}),at&&je&&Le&&L.jsx("img",{ref:ot,className:"hero-character-dom",src:"/characters/hero-character.webp",alt:"","aria-hidden":"true",decoding:"sync",style:{opacity:nn?void 0:0}})]}),!je&&L.jsxs("div",{className:"about-panel","aria-label":"About",children:[L.jsx("span",{className:"about-panel__logo","aria-hidden":"true","data-click-burst":!0}),L.jsx("p",{className:"about-panel__text",children: "سلام، من محمد علی اسکاش هستم (اسکاش، یک لغت روسی است به معنای \"سرزمین یخی\" که به سیبری اشاره دارد). من یک برنامه‌نویس فول‌استک هستم و با زبان های مختلف کار می‌کنم و لاراول تخصص من است. فرقی نمی‌کند یک سایت فروشگاهی نیاز داشته باشید یا یک پلتفرم هوشمند؛ من هر چیزی را به لطف قدرت بی‌حد و مرز لاراول و فریم‌ورک‌های مشابه می‌سازم. ۷ سال است که در جهان سایبری ساکن هستم و با شرکت‌های زیادی همکاری کرده‌ام. سعی دارم با ساخت ابزارهای پیشرفته، سنگینی کار را برای کسب‌وکارها کم کنم، تا هر شرکتی بتواند انرژی خود را روی رشد و توسعه بگذارد نه مدیریت سخت و آشفته. چرا همین حالا با من تماس نمیگیرید؟"})]})]}),je&&L.jsxs(L.Fragment,{children:[L.jsx("div",{className:"hero-marquee","aria-hidden":"true",children:L.jsxs("div",{className:"hero-marquee__track",children:[L.jsx("span",{className:"hero-marquee__copy",children:Ix}),L.jsx("span",{className:"hero-marquee__copy",children:Ix})]})}),L.jsx("div",{className:"case-stack",id:"selected-work",children:wr.map((Q,me)=>{const we=at?me===a?" case-section--open-m":"":me===a?" case-section--open":me===c?" case-section--post":a===null?"":me===De?" case-section--prev":me<a?" case-section--pre":" case-section--away",Oe=a===null&&me===w?" case-section--reveal":"";return L.jsxs(ye.Fragment,{children:[me===wr.length-1&&L.jsx("div",{className:"case-divider-pin","aria-hidden":"true"}),L.jsxs("section",{"aria-label":`Selected product design case ${me+1}`,className:`case-section${we}${Oe}`,"data-case-index":me,"data-case-id":Q.slug,"data-case-closing":me===a&&F?"":void 0,id:me===0?"selected-work-start":void 0,style:{zIndex:me+5,"--case-ink":Q.ink},children:[me===0&&L.jsxs("a",{className:"explore-cue",href:"#selected-work-start","aria-label":"Explore selected work",children:[L.jsx("span",{children:"Explore"}),L.jsx("span",{className:"explore-arrow","aria-hidden":"true"})]}),!at&&L.jsx(QC,{},x),L.jsxs("div",{className:"case-frame",children:[L.jsxs("span",{className:"case-number","aria-hidden":"true",children:["case ",String(me+1).padStart(2,"0")]}),L.jsx(kC,{clip:Rx[Q.slug]??"/aida-phone-cover"}),L.jsxs("div",{className:"case-frame__safe","aria-hidden":"true",children:[L.jsx("span",{}),L.jsx("span",{}),L.jsx("span",{}),L.jsx("span",{})]}),
L.jsx("div", {
  className: "case-cover",
  children: [
    Q.backgroundMedia ? (
      L.jsx("img", {
        className: "case-bg-media",
        src: Q.backgroundMedia,
        alt: "",
        "aria-hidden": "true"
      })
    ) : null,
    L.jsxs("div", {
      className: "case-cover__content",
      children: [
        L.jsxs("div", {
          className: "case-crest",
          children: [
            L.jsx("span", {
              className: "case-funds",
              children: ("funds" in Q ? Q.funds.slice(0, 2) : []).map(b =>
                L.jsx("span", {
                  className: "case-fund",
                  "aria-hidden": "true",
                  style: {
                    aspectRatio: b.ratio,
                    maskImage: `url(${b.src})`,
                    WebkitMaskImage: `url(${b.src})`
                  }
                }, b.src)
              )
            }),
            L.jsx("img", {
              className: "case-logo" + ("mark" in Q ? " case-logo--mark" : ""),
              style: "markRatio" in Q ? { aspectRatio: Q.markRatio } : undefined,
              src: "mark" in Q ? Q.mark : "/case1-logo.svg",
              alt: "",
              "aria-hidden": "true"
            }),
            L.jsx("span", {
              className: "case-funds",
              children: ("funds" in Q ? Q.funds.slice(2) : []).map(b =>
                L.jsx("span", {
                  className: "case-fund",
                  "aria-hidden": "true",
                  style: {
                    aspectRatio: b.ratio,
                    maskImage: `url(${b.src})`,
                    WebkitMaskImage: `url(${b.src})`
                  }
                }, b.src)
              )
            })
          ]
        }),
        L.jsx("h2", {
          className: "titleVariant" in Q && Q.titleVariant === "editorial" ? "case-title--editorial" : undefined,
          children: Q.slug === "ai-shopping-assistant" ?
            L.jsx("span", { className: "case-title-line", children: "AI Dietitian" }) :
            Hx(Q.title, "titleVariant" in Q && Q.titleVariant === "editorial", true)
        }),
        L.jsxs("div", {
          className: "case-tags",
          children: [
            L.jsx("span", { className: "case-tag", children: Q.tags[0] }),
            L.jsx("span", { className: "case-tag", children: Q.tags[1] })
          ]
        }),
        L.jsx("button", {
          className: "case-button",
          type: "button",
          onClick: () => {
            const project = wr[me];
            if (project && project.externalLink) {
              window.location.href = project.externalLink;
            } else {
              yi(me);
            }
          },
          tabIndex: a === null ? 0 : -1,
          "data-click-bounce": !0,
          children: "مشاهده"
        })
      ]
    })
  ]
})
]}),me===a&&L.jsxs("div",{className:"case-page-body","aria-label":`${Q.title} case study`,style:"nameColor"in Q&&Q.nameColor?{"--case-name-accent":Q.nameColor}:void 0,children:["platform"in Q&&L.jsxs("div",{className:"case-meta-grid",children:[L.jsxs("div",{className:"case-meta-cell",children:[L.jsx("span",{className:"case-meta-label",children:"Platform"}),L.jsx("span",{className:"case-meta-value",children:Q.platform})]}),L.jsxs("div",{className:"case-meta-cell",children:[L.jsx("span",{className:"case-meta-label",children:"Role"}),L.jsx("span",{className:"case-meta-value",children:Q.role})]}),L.jsxs("div",{className:"case-meta-cell",children:[L.jsx("span",{className:"case-meta-label",children:"Wins"}),L.jsx("span",{className:"case-meta-value",children:Q.wins})]})]}),"intro"in Q&&Q.intro&&L.jsx(Jl,{className:"case-page-text",text:Q.intro,highlight:"name"in Q?Q.name:void 0,highlightNamed:!0})]}),me===a&&"chapters"in Q&&Q.chapters&&Q.chapters.map((b,P,q)=>L.jsx(ye.Fragment,{children:L.jsxs("div",{className:"case-story"+("leadLast"in b&&b.leadLast?" case-story--lead-last":""),children:[b.blocks.map((U,W)=>{var Me,Ge;return L.jsxs("div",{className:`case-story__row case-story__row--${U.side}`+("screens"in U&&U.screens?" case-story__row--screens":"")+("reel"in U&&U.reel?" case-story__row--reel":"")+("points"in U&&U.points?" case-story__row--points":"")+("riser"in U&&U.riser?" case-story__row--riser":"")+("riserVideo"in U&&U.riserVideo?" case-story__row--riser-video":"")+("wideVideo"in U&&U.wideVideo?" case-story__row--wide":"")+("flow"in U&&U.flow?" case-story__row--flow":"")+("system"in U&&U.system?" case-story__row--system":""),children:["points"in U&&U.points?L.jsx(ZC,{points:U.points}):L.jsx(Jl,{className:"case-story__text",kicker:"kicker"in U?U.kicker:void 0,kickerTone:"kickerTone"in U?U.kickerTone:void 0,kickerIcon:"kickerIcon"in U?U.kickerIcon:void 0,text:U.lead+U.text,highlight:"highlight"in U&&U.highlight||U.lead||void 0,highlightNamed:"highlight"in U&&!!U.highlight,highlightIcon:"highlightIcon"in U?U.highlightIcon:void 0}),L.jsx("div",{className:"case-story__media","aria-hidden":"true",children:"screens"in U&&U.screens?"screensCycle"in U&&U.screensCycle?L.jsx(qC,{screens:U.screens,cue:"screensCue"in U?(Me=U.screensCue)==null?void 0:Me[0]:void 0,cueRed:"screensCueTone"in U&&U.screensCueTone==="red",badge:"badge"in U?U.badge:void 0}):L.jsxs("div",{className:"case-screens",children:[L.jsx("div",{className:"case-screens__stack",children:U.screens.map((Re,Ie)=>L.jsx("span",{className:"case-screens__card",style:{"--i":Ie},children:L.jsx("img",{className:"case-screens__shot",src:Re,alt:""})},Ie))}),"screensCue"in U&&((Ge=U.screensCue)==null?void 0:Ge.map((Re,Ie)=>L.jsxs("div",{className:"case-screens__cue"+("screensCueTone"in U&&U.screensCueTone==="red"?" case-screens__cue--red":""),style:{"--q":Ie},children:[L.jsx("span",{className:"case-screens__line"}),L.jsx("span",{className:"case-screens__pill",children:Re})]},Re)))]}):"flow"in U&&U.flow?L.jsx("div",{className:"case-screens case-screens--flow",children:U.flow.map((Re,Ie)=>L.jsxs(ye.Fragment,{children:[Ie>0&&L.jsx("span",{className:"case-screens__line"+(Ie===U.flow.length-1?" case-screens__line--dead":""),style:{"--q":Ie}}),L.jsx("span",{className:"case-screens__pill",style:{"--q":Ie},children:Re})]},Re))}):"system"in U&&U.system?L.jsx(XC,{}):"reel"in U&&U.reel?L.jsx(WC,{clips:U.reel}):"riser"in U&&U.riser?L.jsx("img",{className:"case-story__riser",src:U.riser,alt:""}):"riserVideo"in U&&U.riserVideo?L.jsx(zl,{className:"case-story__riser--video",src:U.riserVideo,muted:!0,playsInline:!0,loop:!0,preload:"none"}):"wideVideo"in U&&U.wideVideo?L.jsxs(L.Fragment,{children:[L.jsx(zl,{className:"case-story__wide",src:U.wideVideo,muted:!0,playsInline:!0,loop:!0,preload:"none"}),"wideVideoMobile"in U&&U.wideVideoMobile?L.jsx(zl,{className:"case-story__wide case-story__wide--m",src:U.wideVideoMobile,muted:!0,playsInline:!0,preload:"none"}):null]}):L.jsx(zl,{src:U.media,muted:!0,playsInline:!0,preload:"none"})})]},W)}),P===q.length-1&&L.jsxs(L.Fragment,{children:["stats"in Q&&Q.stats&&L.jsx("div",{className:"case-stats",children:Q.stats.map((U,W)=>L.jsxs("div",{className:"case-stats__cell",children:[L.jsx("div",{className:"case-stats__figure",children:"logo"in U&&U.logo?L.jsx("img",{className:"case-stats__logo",src:U.logo,alt:"Instacart"}):L.jsxs(L.Fragment,{children:["trend"in U&&U.trend==="up"&&L.jsx("svg",{className:"case-stats__trend",viewBox:"0 0 64 100","aria-hidden":"true",children:L.jsx("path",{d:"M32 4 L62 48 L46 48 L46 96 L18 96 L18 48 L2 48 Z"})}),L.jsx("span",{className:"case-stats__value","data-stat-value":U.value,children:U.value})]})}),L.jsx(Jl,{className:"case-stats__label",text:U.label})]},W))}),"coda"in Q&&Q.coda&&L.jsx("div",{className:"case-story__coda",children:L.jsx(YC,{className:"case-story__text",paragraphs:Array.isArray(Q.coda)?Q.coda:[Q.coda]})})]})]})},P)),me===a&&"chapters"in Q&&L.jsx("aside",{className:"case-next","aria-label":"More cases",children:wr.map((b,P)=>({other:b,otherIndex:P})).filter(b=>b.otherIndex!==me).map(({other:b,otherIndex:P},q,U)=>{const W=h===P,Me=h!==null&&!W;return L.jsx("div",{className:"case-next__slot","data-teaser-index":P,"data-teaser-id":b.slug,children:L.jsxs("div",{className:`case-next__strip${W?" is-diving":""}${Me?" is-dodging":""}`,style:{"--i":U.length-1-q,"--strip-z":q},children:[L.jsx("img",{className:"case-next__logo",style:"markRatio"in b?{aspectRatio:b.markRatio}:void 0,src:"mark"in b?b.mark:"/case1-logo.svg",alt:"","aria-hidden":"true"}),L.jsx("span",{className:"case-next__title"+("titleVariant"in b&&b.titleVariant?` case-next__title--${b.titleVariant}`:""),children:Hx(b.title,"titleVariant"in b&&b.titleVariant==="editorial")}),L.jsx("div",{className:"case-next__media","aria-hidden":"true",children:L.jsx(zl,{src:`${Rx[b.slug]??"/aida-phone-cover"}.mp4`,muted:!0,playsInline:!0,preload:"none"})}),L.jsx("button",{
	
	  className: "case-button",
  type: "button",
  onClick: () => {
    const project = wr[P];
    if (project && project.externalLink) {
      // به صفحه HTML برو
      window.location.href = project.externalLink;
    } else {
      // اگر externalLink نداشت، ارور نشون بده
      console.warn("این پروژه لینک خارجی ندارد!");
    }
  },
  "data-click-bounce": !0,
  children: "مشاهده پروژه"})]})},
	


	b.slug)})})]})]},Q.eyebrow)})}),L.jsx("div",{className:"footer-reveal",children:L.jsxs("footer",{className:"site-footer","aria-label":"Footer",children:[L.jsxs("div",{className:"footer-contact","aria-label":"Footer contact links",children:[L.jsx(op,{className:"footer-email"}),!at&&L.jsxs(L.Fragment,{children:[L.jsx("a",{className:"social-link footer-social",href:"https://t.me/@developer_fulll/",target:"_blank",rel:"noreferrer","aria-label":"Telegram","data-click-bounce":!0,children:L.jsx("img",{"aria-hidden":"true",src:"/icons/telegram.svg",alt:""})}),L.jsx("a",{className:"social-link footer-social",href:"https://www.linkedin.com/in/eskash/",target:"_blank",rel:"noreferrer","aria-label":"LinkedIn","data-click-bounce":!0,children:L.jsx("img",{"aria-hidden":"true",src:"/icons/linkedin.svg",alt:""})})]})]}),L.jsx(i2,{}),at?L.jsxs("div",{className:"footer-bottom",children:[L.jsx("p",{className:"footer-year","data-click-burst":!0,children:"2026"}),L.jsxs("div",{className:"footer-socials","aria-label":"Footer social links",children:[L.jsx("a",{className:"social-link footer-social",href:"https://t.me/developer_fulll",target:"_blank",rel:"noreferrer","aria-label":"Telegram","data-click-bounce":!0,children:L.jsx("img",{"aria-hidden":"true",src:"/icons/telegram.svg",alt:""})}),L.jsx("a",{className:"social-link footer-social",href:"https://www.linkedin.com/in/eskash/",target:"_blank",rel:"noreferrer","aria-label":"LinkedIn","data-click-bounce":!0,children:L.jsx("img",{"aria-hidden":"true",src:"/icons/linkedin.svg",alt:""})})]})]}):L.jsx("p",{className:"footer-year","data-click-burst":!0,children:"2026"})]})})]})]})}kM.createRoot(document.getElementById("root")).render(L.jsx(ye.StrictMode,{children:L.jsx(o2,{})}));
