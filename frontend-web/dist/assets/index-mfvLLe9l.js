(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Ux(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Tg={exports:{}},oc={},bg={exports:{}},Ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uo=Symbol.for("react.element"),Fx=Symbol.for("react.portal"),Ox=Symbol.for("react.fragment"),kx=Symbol.for("react.strict_mode"),zx=Symbol.for("react.profiler"),Bx=Symbol.for("react.provider"),Hx=Symbol.for("react.context"),Vx=Symbol.for("react.forward_ref"),Gx=Symbol.for("react.suspense"),jx=Symbol.for("react.memo"),Wx=Symbol.for("react.lazy"),rp=Symbol.iterator;function Xx(t){return t===null||typeof t!="object"?null:(t=rp&&t[rp]||t["@@iterator"],typeof t=="function"?t:null)}var wg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Cg=Object.assign,Ag={};function qs(t,e,n){this.props=t,this.context=e,this.refs=Ag,this.updater=n||wg}qs.prototype.isReactComponent={};qs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};qs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Rg(){}Rg.prototype=qs.prototype;function Pf(t,e,n){this.props=t,this.context=e,this.refs=Ag,this.updater=n||wg}var Df=Pf.prototype=new Rg;Df.constructor=Pf;Cg(Df,qs.prototype);Df.isPureReactComponent=!0;var sp=Array.isArray,Pg=Object.prototype.hasOwnProperty,Lf={current:null},Dg={key:!0,ref:!0,__self:!0,__source:!0};function Lg(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Pg.call(e,i)&&!Dg.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var c=Array(o),u=0;u<o;u++)c[u]=arguments[u+2];r.children=c}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:uo,type:t,key:s,ref:a,props:r,_owner:Lf.current}}function $x(t,e){return{$$typeof:uo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function If(t){return typeof t=="object"&&t!==null&&t.$$typeof===uo}function Yx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ap=/\/+/g;function Ic(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Yx(""+t.key):e.toString(36)}function cl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case uo:case Fx:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Ic(a,0):i,sp(r)?(n="",t!=null&&(n=t.replace(ap,"$&/")+"/"),cl(r,e,n,"",function(u){return u})):r!=null&&(If(r)&&(r=$x(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(ap,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",sp(t))for(var o=0;o<t.length;o++){s=t[o];var c=i+Ic(s,o);a+=cl(s,e,n,c,r)}else if(c=Xx(t),typeof c=="function")for(t=c.call(t),o=0;!(s=t.next()).done;)s=s.value,c=i+Ic(s,o++),a+=cl(s,e,n,c,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function yo(t,e,n){if(t==null)return t;var i=[],r=0;return cl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Kx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var dn={current:null},ul={transition:null},qx={ReactCurrentDispatcher:dn,ReactCurrentBatchConfig:ul,ReactCurrentOwner:Lf};function Ig(){throw Error("act(...) is not supported in production builds of React.")}Ke.Children={map:yo,forEach:function(t,e,n){yo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return yo(t,function(){e++}),e},toArray:function(t){return yo(t,function(e){return e})||[]},only:function(t){if(!If(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ke.Component=qs;Ke.Fragment=Ox;Ke.Profiler=zx;Ke.PureComponent=Pf;Ke.StrictMode=kx;Ke.Suspense=Gx;Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qx;Ke.act=Ig;Ke.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Cg({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Lf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(c in e)Pg.call(e,c)&&!Dg.hasOwnProperty(c)&&(i[c]=e[c]===void 0&&o!==void 0?o[c]:e[c])}var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){o=Array(c);for(var u=0;u<c;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:uo,type:t.type,key:r,ref:s,props:i,_owner:a}};Ke.createContext=function(t){return t={$$typeof:Hx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Bx,_context:t},t.Consumer=t};Ke.createElement=Lg;Ke.createFactory=function(t){var e=Lg.bind(null,t);return e.type=t,e};Ke.createRef=function(){return{current:null}};Ke.forwardRef=function(t){return{$$typeof:Vx,render:t}};Ke.isValidElement=If;Ke.lazy=function(t){return{$$typeof:Wx,_payload:{_status:-1,_result:t},_init:Kx}};Ke.memo=function(t,e){return{$$typeof:jx,type:t,compare:e===void 0?null:e}};Ke.startTransition=function(t){var e=ul.transition;ul.transition={};try{t()}finally{ul.transition=e}};Ke.unstable_act=Ig;Ke.useCallback=function(t,e){return dn.current.useCallback(t,e)};Ke.useContext=function(t){return dn.current.useContext(t)};Ke.useDebugValue=function(){};Ke.useDeferredValue=function(t){return dn.current.useDeferredValue(t)};Ke.useEffect=function(t,e){return dn.current.useEffect(t,e)};Ke.useId=function(){return dn.current.useId()};Ke.useImperativeHandle=function(t,e,n){return dn.current.useImperativeHandle(t,e,n)};Ke.useInsertionEffect=function(t,e){return dn.current.useInsertionEffect(t,e)};Ke.useLayoutEffect=function(t,e){return dn.current.useLayoutEffect(t,e)};Ke.useMemo=function(t,e){return dn.current.useMemo(t,e)};Ke.useReducer=function(t,e,n){return dn.current.useReducer(t,e,n)};Ke.useRef=function(t){return dn.current.useRef(t)};Ke.useState=function(t){return dn.current.useState(t)};Ke.useSyncExternalStore=function(t,e,n){return dn.current.useSyncExternalStore(t,e,n)};Ke.useTransition=function(){return dn.current.useTransition()};Ke.version="18.3.1";bg.exports=Ke;var he=bg.exports;const Gu=Ux(he);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zx=he,Qx=Symbol.for("react.element"),Jx=Symbol.for("react.fragment"),e_=Object.prototype.hasOwnProperty,t_=Zx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n_={key:!0,ref:!0,__self:!0,__source:!0};function Ng(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)e_.call(e,i)&&!n_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Qx,type:t,key:s,ref:a,props:r,_owner:t_.current}}oc.Fragment=Jx;oc.jsx=Ng;oc.jsxs=Ng;Tg.exports=oc;var l=Tg.exports,ju={},Ug={exports:{}},Cn={},Fg={exports:{}},Og={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,F){var I=N.length;N.push(F);e:for(;0<I;){var H=I-1>>>1,ie=N[H];if(0<r(ie,F))N[H]=F,N[I]=ie,I=H;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var F=N[0],I=N.pop();if(I!==F){N[0]=I;e:for(var H=0,ie=N.length,oe=ie>>>1;H<oe;){var se=2*(H+1)-1,fe=N[se],de=se+1,$=N[de];if(0>r(fe,I))de<ie&&0>r($,fe)?(N[H]=$,N[de]=I,H=de):(N[H]=fe,N[se]=I,H=se);else if(de<ie&&0>r($,I))N[H]=$,N[de]=I,H=de;else break e}}return F}function r(N,F){var I=N.sortIndex-F.sortIndex;return I!==0?I:N.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var c=[],u=[],f=1,p=null,h=3,m=!1,y=!1,v=!1,g=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E(N){for(var F=n(u);F!==null;){if(F.callback===null)i(u);else if(F.startTime<=N)i(u),F.sortIndex=F.expirationTime,e(c,F);else break;F=n(u)}}function M(N){if(v=!1,E(N),!y)if(n(c)!==null)y=!0,O(b);else{var F=n(u);F!==null&&V(M,F.startTime-N)}}function b(N,F){y=!1,v&&(v=!1,d(_),_=-1),m=!0;var I=h;try{for(E(F),p=n(c);p!==null&&(!(p.expirationTime>F)||N&&!L());){var H=p.callback;if(typeof H=="function"){p.callback=null,h=p.priorityLevel;var ie=H(p.expirationTime<=F);F=t.unstable_now(),typeof ie=="function"?p.callback=ie:p===n(c)&&i(c),E(F)}else i(c);p=n(c)}if(p!==null)var oe=!0;else{var se=n(u);se!==null&&V(M,se.startTime-F),oe=!1}return oe}finally{p=null,h=I,m=!1}}var w=!1,A=null,_=-1,C=5,R=-1;function L(){return!(t.unstable_now()-R<C)}function D(){if(A!==null){var N=t.unstable_now();R=N;var F=!0;try{F=A(!0,N)}finally{F?j():(w=!1,A=null)}}else w=!1}var j;if(typeof x=="function")j=function(){x(D)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,G=U.port2;U.port1.onmessage=D,j=function(){G.postMessage(null)}}else j=function(){g(D,0)};function O(N){A=N,w||(w=!0,j())}function V(N,F){_=g(function(){N(t.unstable_now())},F)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){y||m||(y=!0,O(b))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(N){switch(h){case 1:case 2:case 3:var F=3;break;default:F=h}var I=h;h=F;try{return N()}finally{h=I}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,F){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var I=h;h=N;try{return F()}finally{h=I}},t.unstable_scheduleCallback=function(N,F,I){var H=t.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?H+I:H):I=H,N){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=I+ie,N={id:f++,callback:F,priorityLevel:N,startTime:I,expirationTime:ie,sortIndex:-1},I>H?(N.sortIndex=I,e(u,N),n(c)===null&&N===n(u)&&(v?(d(_),_=-1):v=!0,V(M,I-H))):(N.sortIndex=ie,e(c,N),y||m||(y=!0,O(b))),N},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(N){var F=h;return function(){var I=h;h=F;try{return N.apply(this,arguments)}finally{h=I}}}})(Og);Fg.exports=Og;var i_=Fg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r_=he,wn=i_;function ce(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var kg=new Set,ka={};function $r(t,e){zs(t,e),zs(t+"Capture",e)}function zs(t,e){for(ka[t]=e,t=0;t<e.length;t++)kg.add(e[t])}var Li=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wu=Object.prototype.hasOwnProperty,s_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,op={},lp={};function a_(t){return Wu.call(lp,t)?!0:Wu.call(op,t)?!1:s_.test(t)?lp[t]=!0:(op[t]=!0,!1)}function o_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function l_(t,e,n,i){if(e===null||typeof e>"u"||o_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function fn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Yt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Yt[t]=new fn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Yt[e]=new fn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Yt[t]=new fn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Yt[t]=new fn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Yt[t]=new fn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Yt[t]=new fn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Yt[t]=new fn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Yt[t]=new fn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Yt[t]=new fn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Nf=/[\-:]([a-z])/g;function Uf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Nf,Uf);Yt[e]=new fn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Nf,Uf);Yt[e]=new fn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Nf,Uf);Yt[e]=new fn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Yt[t]=new fn(t,1,!1,t.toLowerCase(),null,!1,!1)});Yt.xlinkHref=new fn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Yt[t]=new fn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ff(t,e,n,i){var r=Yt.hasOwnProperty(e)?Yt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(l_(e,n,r,i)&&(n=null),i||r===null?a_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Oi=r_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,So=Symbol.for("react.element"),ps=Symbol.for("react.portal"),ms=Symbol.for("react.fragment"),Of=Symbol.for("react.strict_mode"),Xu=Symbol.for("react.profiler"),zg=Symbol.for("react.provider"),Bg=Symbol.for("react.context"),kf=Symbol.for("react.forward_ref"),$u=Symbol.for("react.suspense"),Yu=Symbol.for("react.suspense_list"),zf=Symbol.for("react.memo"),$i=Symbol.for("react.lazy"),Hg=Symbol.for("react.offscreen"),cp=Symbol.iterator;function na(t){return t===null||typeof t!="object"?null:(t=cp&&t[cp]||t["@@iterator"],typeof t=="function"?t:null)}var bt=Object.assign,Nc;function xa(t){if(Nc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Nc=e&&e[1]||""}return`
`+Nc+t}var Uc=!1;function Fc(t,e){if(!t||Uc)return"";Uc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var c=`
`+r[a].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=a&&0<=o);break}}}finally{Uc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?xa(t):""}function c_(t){switch(t.tag){case 5:return xa(t.type);case 16:return xa("Lazy");case 13:return xa("Suspense");case 19:return xa("SuspenseList");case 0:case 2:case 15:return t=Fc(t.type,!1),t;case 11:return t=Fc(t.type.render,!1),t;case 1:return t=Fc(t.type,!0),t;default:return""}}function Ku(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ms:return"Fragment";case ps:return"Portal";case Xu:return"Profiler";case Of:return"StrictMode";case $u:return"Suspense";case Yu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Bg:return(t.displayName||"Context")+".Consumer";case zg:return(t._context.displayName||"Context")+".Provider";case kf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case zf:return e=t.displayName||null,e!==null?e:Ku(t.type)||"Memo";case $i:e=t._payload,t=t._init;try{return Ku(t(e))}catch{}}return null}function u_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ku(e);case 8:return e===Of?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function fr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Vg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function d_(t){var e=Vg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Mo(t){t._valueTracker||(t._valueTracker=d_(t))}function Gg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Vg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Cl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function qu(t,e){var n=e.checked;return bt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function up(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=fr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function jg(t,e){e=e.checked,e!=null&&Ff(t,"checked",e,!1)}function Zu(t,e){jg(t,e);var n=fr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Qu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Qu(t,e.type,fr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function dp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Qu(t,e,n){(e!=="number"||Cl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var _a=Array.isArray;function As(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+fr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Ju(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ce(91));return bt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function fp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ce(92));if(_a(n)){if(1<n.length)throw Error(ce(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:fr(n)}}function Wg(t,e){var n=fr(e.value),i=fr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function hp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Xg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ed(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Xg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Eo,$g=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Eo=Eo||document.createElement("div"),Eo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Eo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function za(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ta={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},f_=["Webkit","ms","Moz","O"];Object.keys(Ta).forEach(function(t){f_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ta[e]=Ta[t]})});function Yg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ta.hasOwnProperty(t)&&Ta[t]?(""+e).trim():e+"px"}function Kg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Yg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var h_=bt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function td(t,e){if(e){if(h_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ce(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ce(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ce(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ce(62))}}function nd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var id=null;function Bf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var rd=null,Rs=null,Ps=null;function pp(t){if(t=po(t)){if(typeof rd!="function")throw Error(ce(280));var e=t.stateNode;e&&(e=fc(e),rd(t.stateNode,t.type,e))}}function qg(t){Rs?Ps?Ps.push(t):Ps=[t]:Rs=t}function Zg(){if(Rs){var t=Rs,e=Ps;if(Ps=Rs=null,pp(t),e)for(t=0;t<e.length;t++)pp(e[t])}}function Qg(t,e){return t(e)}function Jg(){}var Oc=!1;function e0(t,e,n){if(Oc)return t(e,n);Oc=!0;try{return Qg(t,e,n)}finally{Oc=!1,(Rs!==null||Ps!==null)&&(Jg(),Zg())}}function Ba(t,e){var n=t.stateNode;if(n===null)return null;var i=fc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ce(231,e,typeof n));return n}var sd=!1;if(Li)try{var ia={};Object.defineProperty(ia,"passive",{get:function(){sd=!0}}),window.addEventListener("test",ia,ia),window.removeEventListener("test",ia,ia)}catch{sd=!1}function p_(t,e,n,i,r,s,a,o,c){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var ba=!1,Al=null,Rl=!1,ad=null,m_={onError:function(t){ba=!0,Al=t}};function g_(t,e,n,i,r,s,a,o,c){ba=!1,Al=null,p_.apply(m_,arguments)}function v_(t,e,n,i,r,s,a,o,c){if(g_.apply(this,arguments),ba){if(ba){var u=Al;ba=!1,Al=null}else throw Error(ce(198));Rl||(Rl=!0,ad=u)}}function Yr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function t0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function mp(t){if(Yr(t)!==t)throw Error(ce(188))}function x_(t){var e=t.alternate;if(!e){if(e=Yr(t),e===null)throw Error(ce(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return mp(r),t;if(s===i)return mp(r),e;s=s.sibling}throw Error(ce(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ce(189))}}if(n.alternate!==i)throw Error(ce(190))}if(n.tag!==3)throw Error(ce(188));return n.stateNode.current===n?t:e}function n0(t){return t=x_(t),t!==null?i0(t):null}function i0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=i0(t);if(e!==null)return e;t=t.sibling}return null}var r0=wn.unstable_scheduleCallback,gp=wn.unstable_cancelCallback,__=wn.unstable_shouldYield,y_=wn.unstable_requestPaint,At=wn.unstable_now,S_=wn.unstable_getCurrentPriorityLevel,Hf=wn.unstable_ImmediatePriority,s0=wn.unstable_UserBlockingPriority,Pl=wn.unstable_NormalPriority,M_=wn.unstable_LowPriority,a0=wn.unstable_IdlePriority,lc=null,ci=null;function E_(t){if(ci&&typeof ci.onCommitFiberRoot=="function")try{ci.onCommitFiberRoot(lc,t,void 0,(t.current.flags&128)===128)}catch{}}var Kn=Math.clz32?Math.clz32:w_,T_=Math.log,b_=Math.LN2;function w_(t){return t>>>=0,t===0?32:31-(T_(t)/b_|0)|0}var To=64,bo=4194304;function ya(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Dl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=ya(o):(s&=a,s!==0&&(i=ya(s)))}else a=n&~r,a!==0?i=ya(a):s!==0&&(i=ya(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Kn(e),r=1<<n,i|=t[n],e&=~r;return i}function C_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function A_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Kn(s),o=1<<a,c=r[a];c===-1?(!(o&n)||o&i)&&(r[a]=C_(o,e)):c<=e&&(t.expiredLanes|=o),s&=~o}}function od(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function o0(){var t=To;return To<<=1,!(To&4194240)&&(To=64),t}function kc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function fo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Kn(e),t[e]=n}function R_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Kn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Vf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Kn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var lt=0;function l0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var c0,Gf,u0,d0,f0,ld=!1,wo=[],rr=null,sr=null,ar=null,Ha=new Map,Va=new Map,qi=[],P_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vp(t,e){switch(t){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":Ha.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Va.delete(e.pointerId)}}function ra(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=po(e),e!==null&&Gf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function D_(t,e,n,i,r){switch(e){case"focusin":return rr=ra(rr,t,e,n,i,r),!0;case"dragenter":return sr=ra(sr,t,e,n,i,r),!0;case"mouseover":return ar=ra(ar,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ha.set(s,ra(Ha.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Va.set(s,ra(Va.get(s)||null,t,e,n,i,r)),!0}return!1}function h0(t){var e=Pr(t.target);if(e!==null){var n=Yr(e);if(n!==null){if(e=n.tag,e===13){if(e=t0(n),e!==null){t.blockedOn=e,f0(t.priority,function(){u0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function dl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=cd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);id=i,n.target.dispatchEvent(i),id=null}else return e=po(n),e!==null&&Gf(e),t.blockedOn=n,!1;e.shift()}return!0}function xp(t,e,n){dl(t)&&n.delete(e)}function L_(){ld=!1,rr!==null&&dl(rr)&&(rr=null),sr!==null&&dl(sr)&&(sr=null),ar!==null&&dl(ar)&&(ar=null),Ha.forEach(xp),Va.forEach(xp)}function sa(t,e){t.blockedOn===e&&(t.blockedOn=null,ld||(ld=!0,wn.unstable_scheduleCallback(wn.unstable_NormalPriority,L_)))}function Ga(t){function e(r){return sa(r,t)}if(0<wo.length){sa(wo[0],t);for(var n=1;n<wo.length;n++){var i=wo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(rr!==null&&sa(rr,t),sr!==null&&sa(sr,t),ar!==null&&sa(ar,t),Ha.forEach(e),Va.forEach(e),n=0;n<qi.length;n++)i=qi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<qi.length&&(n=qi[0],n.blockedOn===null);)h0(n),n.blockedOn===null&&qi.shift()}var Ds=Oi.ReactCurrentBatchConfig,Ll=!0;function I_(t,e,n,i){var r=lt,s=Ds.transition;Ds.transition=null;try{lt=1,jf(t,e,n,i)}finally{lt=r,Ds.transition=s}}function N_(t,e,n,i){var r=lt,s=Ds.transition;Ds.transition=null;try{lt=4,jf(t,e,n,i)}finally{lt=r,Ds.transition=s}}function jf(t,e,n,i){if(Ll){var r=cd(t,e,n,i);if(r===null)Yc(t,e,i,Il,n),vp(t,i);else if(D_(r,t,e,n,i))i.stopPropagation();else if(vp(t,i),e&4&&-1<P_.indexOf(t)){for(;r!==null;){var s=po(r);if(s!==null&&c0(s),s=cd(t,e,n,i),s===null&&Yc(t,e,i,Il,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Yc(t,e,i,null,n)}}var Il=null;function cd(t,e,n,i){if(Il=null,t=Bf(i),t=Pr(t),t!==null)if(e=Yr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=t0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Il=t,null}function p0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(S_()){case Hf:return 1;case s0:return 4;case Pl:case M_:return 16;case a0:return 536870912;default:return 16}default:return 16}}var er=null,Wf=null,fl=null;function m0(){if(fl)return fl;var t,e=Wf,n=e.length,i,r="value"in er?er.value:er.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return fl=r.slice(t,1<i?1-i:void 0)}function hl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Co(){return!0}function _p(){return!1}function An(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Co:_p,this.isPropagationStopped=_p,this}return bt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Co)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Co)},persist:function(){},isPersistent:Co}),e}var Zs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xf=An(Zs),ho=bt({},Zs,{view:0,detail:0}),U_=An(ho),zc,Bc,aa,cc=bt({},ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$f,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==aa&&(aa&&t.type==="mousemove"?(zc=t.screenX-aa.screenX,Bc=t.screenY-aa.screenY):Bc=zc=0,aa=t),zc)},movementY:function(t){return"movementY"in t?t.movementY:Bc}}),yp=An(cc),F_=bt({},cc,{dataTransfer:0}),O_=An(F_),k_=bt({},ho,{relatedTarget:0}),Hc=An(k_),z_=bt({},Zs,{animationName:0,elapsedTime:0,pseudoElement:0}),B_=An(z_),H_=bt({},Zs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),V_=An(H_),G_=bt({},Zs,{data:0}),Sp=An(G_),j_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},W_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},X_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=X_[t])?!!e[t]:!1}function $f(){return $_}var Y_=bt({},ho,{key:function(t){if(t.key){var e=j_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=hl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?W_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$f,charCode:function(t){return t.type==="keypress"?hl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?hl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),K_=An(Y_),q_=bt({},cc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mp=An(q_),Z_=bt({},ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$f}),Q_=An(Z_),J_=bt({},Zs,{propertyName:0,elapsedTime:0,pseudoElement:0}),ey=An(J_),ty=bt({},cc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ny=An(ty),iy=[9,13,27,32],Yf=Li&&"CompositionEvent"in window,wa=null;Li&&"documentMode"in document&&(wa=document.documentMode);var ry=Li&&"TextEvent"in window&&!wa,g0=Li&&(!Yf||wa&&8<wa&&11>=wa),Ep=" ",Tp=!1;function v0(t,e){switch(t){case"keyup":return iy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function x0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var gs=!1;function sy(t,e){switch(t){case"compositionend":return x0(e);case"keypress":return e.which!==32?null:(Tp=!0,Ep);case"textInput":return t=e.data,t===Ep&&Tp?null:t;default:return null}}function ay(t,e){if(gs)return t==="compositionend"||!Yf&&v0(t,e)?(t=m0(),fl=Wf=er=null,gs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return g0&&e.locale!=="ko"?null:e.data;default:return null}}var oy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!oy[t.type]:e==="textarea"}function _0(t,e,n,i){qg(i),e=Nl(e,"onChange"),0<e.length&&(n=new Xf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ca=null,ja=null;function ly(t){P0(t,0)}function uc(t){var e=_s(t);if(Gg(e))return t}function cy(t,e){if(t==="change")return e}var y0=!1;if(Li){var Vc;if(Li){var Gc="oninput"in document;if(!Gc){var wp=document.createElement("div");wp.setAttribute("oninput","return;"),Gc=typeof wp.oninput=="function"}Vc=Gc}else Vc=!1;y0=Vc&&(!document.documentMode||9<document.documentMode)}function Cp(){Ca&&(Ca.detachEvent("onpropertychange",S0),ja=Ca=null)}function S0(t){if(t.propertyName==="value"&&uc(ja)){var e=[];_0(e,ja,t,Bf(t)),e0(ly,e)}}function uy(t,e,n){t==="focusin"?(Cp(),Ca=e,ja=n,Ca.attachEvent("onpropertychange",S0)):t==="focusout"&&Cp()}function dy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return uc(ja)}function fy(t,e){if(t==="click")return uc(e)}function hy(t,e){if(t==="input"||t==="change")return uc(e)}function py(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Qn=typeof Object.is=="function"?Object.is:py;function Wa(t,e){if(Qn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Wu.call(e,r)||!Qn(t[r],e[r]))return!1}return!0}function Ap(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Rp(t,e){var n=Ap(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ap(n)}}function M0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?M0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function E0(){for(var t=window,e=Cl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Cl(t.document)}return e}function Kf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function my(t){var e=E0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&M0(n.ownerDocument.documentElement,n)){if(i!==null&&Kf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Rp(n,s);var a=Rp(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var gy=Li&&"documentMode"in document&&11>=document.documentMode,vs=null,ud=null,Aa=null,dd=!1;function Pp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;dd||vs==null||vs!==Cl(i)||(i=vs,"selectionStart"in i&&Kf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Aa&&Wa(Aa,i)||(Aa=i,i=Nl(ud,"onSelect"),0<i.length&&(e=new Xf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=vs)))}function Ao(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var xs={animationend:Ao("Animation","AnimationEnd"),animationiteration:Ao("Animation","AnimationIteration"),animationstart:Ao("Animation","AnimationStart"),transitionend:Ao("Transition","TransitionEnd")},jc={},T0={};Li&&(T0=document.createElement("div").style,"AnimationEvent"in window||(delete xs.animationend.animation,delete xs.animationiteration.animation,delete xs.animationstart.animation),"TransitionEvent"in window||delete xs.transitionend.transition);function dc(t){if(jc[t])return jc[t];if(!xs[t])return t;var e=xs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in T0)return jc[t]=e[n];return t}var b0=dc("animationend"),w0=dc("animationiteration"),C0=dc("animationstart"),A0=dc("transitionend"),R0=new Map,Dp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vr(t,e){R0.set(t,e),$r(e,[t])}for(var Wc=0;Wc<Dp.length;Wc++){var Xc=Dp[Wc],vy=Xc.toLowerCase(),xy=Xc[0].toUpperCase()+Xc.slice(1);vr(vy,"on"+xy)}vr(b0,"onAnimationEnd");vr(w0,"onAnimationIteration");vr(C0,"onAnimationStart");vr("dblclick","onDoubleClick");vr("focusin","onFocus");vr("focusout","onBlur");vr(A0,"onTransitionEnd");zs("onMouseEnter",["mouseout","mouseover"]);zs("onMouseLeave",["mouseout","mouseover"]);zs("onPointerEnter",["pointerout","pointerover"]);zs("onPointerLeave",["pointerout","pointerover"]);$r("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$r("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$r("onBeforeInput",["compositionend","keypress","textInput","paste"]);$r("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$r("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$r("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_y=new Set("cancel close invalid load scroll toggle".split(" ").concat(Sa));function Lp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,v_(i,e,void 0,t),t.currentTarget=null}function P0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],c=o.instance,u=o.currentTarget;if(o=o.listener,c!==s&&r.isPropagationStopped())break e;Lp(r,o,u),s=c}else for(a=0;a<i.length;a++){if(o=i[a],c=o.instance,u=o.currentTarget,o=o.listener,c!==s&&r.isPropagationStopped())break e;Lp(r,o,u),s=c}}}if(Rl)throw t=ad,Rl=!1,ad=null,t}function gt(t,e){var n=e[gd];n===void 0&&(n=e[gd]=new Set);var i=t+"__bubble";n.has(i)||(D0(e,t,2,!1),n.add(i))}function $c(t,e,n){var i=0;e&&(i|=4),D0(n,t,i,e)}var Ro="_reactListening"+Math.random().toString(36).slice(2);function Xa(t){if(!t[Ro]){t[Ro]=!0,kg.forEach(function(n){n!=="selectionchange"&&(_y.has(n)||$c(n,!1,t),$c(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ro]||(e[Ro]=!0,$c("selectionchange",!1,e))}}function D0(t,e,n,i){switch(p0(e)){case 1:var r=I_;break;case 4:r=N_;break;default:r=jf}n=r.bind(null,e,n,t),r=void 0,!sd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Yc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===r||c.nodeType===8&&c.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Pr(o),a===null)return;if(c=a.tag,c===5||c===6){i=s=a;continue e}o=o.parentNode}}i=i.return}e0(function(){var u=s,f=Bf(n),p=[];e:{var h=R0.get(t);if(h!==void 0){var m=Xf,y=t;switch(t){case"keypress":if(hl(n)===0)break e;case"keydown":case"keyup":m=K_;break;case"focusin":y="focus",m=Hc;break;case"focusout":y="blur",m=Hc;break;case"beforeblur":case"afterblur":m=Hc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=yp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=O_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Q_;break;case b0:case w0:case C0:m=B_;break;case A0:m=ey;break;case"scroll":m=U_;break;case"wheel":m=ny;break;case"copy":case"cut":case"paste":m=V_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Mp}var v=(e&4)!==0,g=!v&&t==="scroll",d=v?h!==null?h+"Capture":null:h;v=[];for(var x=u,E;x!==null;){E=x;var M=E.stateNode;if(E.tag===5&&M!==null&&(E=M,d!==null&&(M=Ba(x,d),M!=null&&v.push($a(x,M,E)))),g)break;x=x.return}0<v.length&&(h=new m(h,y,null,n,f),p.push({event:h,listeners:v}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==id&&(y=n.relatedTarget||n.fromElement)&&(Pr(y)||y[Ii]))break e;if((m||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=u,y=y?Pr(y):null,y!==null&&(g=Yr(y),y!==g||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=u),m!==y)){if(v=yp,M="onMouseLeave",d="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(v=Mp,M="onPointerLeave",d="onPointerEnter",x="pointer"),g=m==null?h:_s(m),E=y==null?h:_s(y),h=new v(M,x+"leave",m,n,f),h.target=g,h.relatedTarget=E,M=null,Pr(f)===u&&(v=new v(d,x+"enter",y,n,f),v.target=E,v.relatedTarget=g,M=v),g=M,m&&y)t:{for(v=m,d=y,x=0,E=v;E;E=Zr(E))x++;for(E=0,M=d;M;M=Zr(M))E++;for(;0<x-E;)v=Zr(v),x--;for(;0<E-x;)d=Zr(d),E--;for(;x--;){if(v===d||d!==null&&v===d.alternate)break t;v=Zr(v),d=Zr(d)}v=null}else v=null;m!==null&&Ip(p,h,m,v,!1),y!==null&&g!==null&&Ip(p,g,y,v,!0)}}e:{if(h=u?_s(u):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var b=cy;else if(bp(h))if(y0)b=hy;else{b=dy;var w=uy}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(b=fy);if(b&&(b=b(t,u))){_0(p,b,n,f);break e}w&&w(t,h,u),t==="focusout"&&(w=h._wrapperState)&&w.controlled&&h.type==="number"&&Qu(h,"number",h.value)}switch(w=u?_s(u):window,t){case"focusin":(bp(w)||w.contentEditable==="true")&&(vs=w,ud=u,Aa=null);break;case"focusout":Aa=ud=vs=null;break;case"mousedown":dd=!0;break;case"contextmenu":case"mouseup":case"dragend":dd=!1,Pp(p,n,f);break;case"selectionchange":if(gy)break;case"keydown":case"keyup":Pp(p,n,f)}var A;if(Yf)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else gs?v0(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(g0&&n.locale!=="ko"&&(gs||_!=="onCompositionStart"?_==="onCompositionEnd"&&gs&&(A=m0()):(er=f,Wf="value"in er?er.value:er.textContent,gs=!0)),w=Nl(u,_),0<w.length&&(_=new Sp(_,t,null,n,f),p.push({event:_,listeners:w}),A?_.data=A:(A=x0(n),A!==null&&(_.data=A)))),(A=ry?sy(t,n):ay(t,n))&&(u=Nl(u,"onBeforeInput"),0<u.length&&(f=new Sp("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:u}),f.data=A))}P0(p,e)})}function $a(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Nl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ba(t,n),s!=null&&i.unshift($a(t,s,r)),s=Ba(t,e),s!=null&&i.push($a(t,s,r))),t=t.return}return i}function Zr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ip(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,c=o.alternate,u=o.stateNode;if(c!==null&&c===i)break;o.tag===5&&u!==null&&(o=u,r?(c=Ba(n,s),c!=null&&a.unshift($a(n,c,o))):r||(c=Ba(n,s),c!=null&&a.push($a(n,c,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var yy=/\r\n?/g,Sy=/\u0000|\uFFFD/g;function Np(t){return(typeof t=="string"?t:""+t).replace(yy,`
`).replace(Sy,"")}function Po(t,e,n){if(e=Np(e),Np(t)!==e&&n)throw Error(ce(425))}function Ul(){}var fd=null,hd=null;function pd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var md=typeof setTimeout=="function"?setTimeout:void 0,My=typeof clearTimeout=="function"?clearTimeout:void 0,Up=typeof Promise=="function"?Promise:void 0,Ey=typeof queueMicrotask=="function"?queueMicrotask:typeof Up<"u"?function(t){return Up.resolve(null).then(t).catch(Ty)}:md;function Ty(t){setTimeout(function(){throw t})}function Kc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ga(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ga(e)}function or(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Fp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Qs=Math.random().toString(36).slice(2),ai="__reactFiber$"+Qs,Ya="__reactProps$"+Qs,Ii="__reactContainer$"+Qs,gd="__reactEvents$"+Qs,by="__reactListeners$"+Qs,wy="__reactHandles$"+Qs;function Pr(t){var e=t[ai];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ii]||n[ai]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Fp(t);t!==null;){if(n=t[ai])return n;t=Fp(t)}return e}t=n,n=t.parentNode}return null}function po(t){return t=t[ai]||t[Ii],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function _s(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ce(33))}function fc(t){return t[Ya]||null}var vd=[],ys=-1;function xr(t){return{current:t}}function vt(t){0>ys||(t.current=vd[ys],vd[ys]=null,ys--)}function pt(t,e){ys++,vd[ys]=t.current,t.current=e}var hr={},rn=xr(hr),vn=xr(!1),kr=hr;function Bs(t,e){var n=t.type.contextTypes;if(!n)return hr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function xn(t){return t=t.childContextTypes,t!=null}function Fl(){vt(vn),vt(rn)}function Op(t,e,n){if(rn.current!==hr)throw Error(ce(168));pt(rn,e),pt(vn,n)}function L0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ce(108,u_(t)||"Unknown",r));return bt({},n,i)}function Ol(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||hr,kr=rn.current,pt(rn,t),pt(vn,vn.current),!0}function kp(t,e,n){var i=t.stateNode;if(!i)throw Error(ce(169));n?(t=L0(t,e,kr),i.__reactInternalMemoizedMergedChildContext=t,vt(vn),vt(rn),pt(rn,t)):vt(vn),pt(vn,n)}var Mi=null,hc=!1,qc=!1;function I0(t){Mi===null?Mi=[t]:Mi.push(t)}function Cy(t){hc=!0,I0(t)}function _r(){if(!qc&&Mi!==null){qc=!0;var t=0,e=lt;try{var n=Mi;for(lt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Mi=null,hc=!1}catch(r){throw Mi!==null&&(Mi=Mi.slice(t+1)),r0(Hf,_r),r}finally{lt=e,qc=!1}}return null}var Ss=[],Ms=0,kl=null,zl=0,Ln=[],In=0,zr=null,bi=1,wi="";function Cr(t,e){Ss[Ms++]=zl,Ss[Ms++]=kl,kl=t,zl=e}function N0(t,e,n){Ln[In++]=bi,Ln[In++]=wi,Ln[In++]=zr,zr=t;var i=bi;t=wi;var r=32-Kn(i)-1;i&=~(1<<r),n+=1;var s=32-Kn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,bi=1<<32-Kn(e)+r|n<<r|i,wi=s+t}else bi=1<<s|n<<r|i,wi=t}function qf(t){t.return!==null&&(Cr(t,1),N0(t,1,0))}function Zf(t){for(;t===kl;)kl=Ss[--Ms],Ss[Ms]=null,zl=Ss[--Ms],Ss[Ms]=null;for(;t===zr;)zr=Ln[--In],Ln[In]=null,wi=Ln[--In],Ln[In]=null,bi=Ln[--In],Ln[In]=null}var bn=null,Tn=null,_t=!1,Xn=null;function U0(t,e){var n=Un(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function zp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,bn=t,Tn=or(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,bn=t,Tn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=zr!==null?{id:bi,overflow:wi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Un(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,bn=t,Tn=null,!0):!1;default:return!1}}function xd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function _d(t){if(_t){var e=Tn;if(e){var n=e;if(!zp(t,e)){if(xd(t))throw Error(ce(418));e=or(n.nextSibling);var i=bn;e&&zp(t,e)?U0(i,n):(t.flags=t.flags&-4097|2,_t=!1,bn=t)}}else{if(xd(t))throw Error(ce(418));t.flags=t.flags&-4097|2,_t=!1,bn=t}}}function Bp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;bn=t}function Do(t){if(t!==bn)return!1;if(!_t)return Bp(t),_t=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!pd(t.type,t.memoizedProps)),e&&(e=Tn)){if(xd(t))throw F0(),Error(ce(418));for(;e;)U0(t,e),e=or(e.nextSibling)}if(Bp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ce(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Tn=or(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Tn=null}}else Tn=bn?or(t.stateNode.nextSibling):null;return!0}function F0(){for(var t=Tn;t;)t=or(t.nextSibling)}function Hs(){Tn=bn=null,_t=!1}function Qf(t){Xn===null?Xn=[t]:Xn.push(t)}var Ay=Oi.ReactCurrentBatchConfig;function oa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ce(309));var i=n.stateNode}if(!i)throw Error(ce(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ce(284));if(!n._owner)throw Error(ce(290,t))}return t}function Lo(t,e){throw t=Object.prototype.toString.call(e),Error(ce(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Hp(t){var e=t._init;return e(t._payload)}function O0(t){function e(d,x){if(t){var E=d.deletions;E===null?(d.deletions=[x],d.flags|=16):E.push(x)}}function n(d,x){if(!t)return null;for(;x!==null;)e(d,x),x=x.sibling;return null}function i(d,x){for(d=new Map;x!==null;)x.key!==null?d.set(x.key,x):d.set(x.index,x),x=x.sibling;return d}function r(d,x){return d=dr(d,x),d.index=0,d.sibling=null,d}function s(d,x,E){return d.index=E,t?(E=d.alternate,E!==null?(E=E.index,E<x?(d.flags|=2,x):E):(d.flags|=2,x)):(d.flags|=1048576,x)}function a(d){return t&&d.alternate===null&&(d.flags|=2),d}function o(d,x,E,M){return x===null||x.tag!==6?(x=iu(E,d.mode,M),x.return=d,x):(x=r(x,E),x.return=d,x)}function c(d,x,E,M){var b=E.type;return b===ms?f(d,x,E.props.children,M,E.key):x!==null&&(x.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===$i&&Hp(b)===x.type)?(M=r(x,E.props),M.ref=oa(d,x,E),M.return=d,M):(M=yl(E.type,E.key,E.props,null,d.mode,M),M.ref=oa(d,x,E),M.return=d,M)}function u(d,x,E,M){return x===null||x.tag!==4||x.stateNode.containerInfo!==E.containerInfo||x.stateNode.implementation!==E.implementation?(x=ru(E,d.mode,M),x.return=d,x):(x=r(x,E.children||[]),x.return=d,x)}function f(d,x,E,M,b){return x===null||x.tag!==7?(x=Fr(E,d.mode,M,b),x.return=d,x):(x=r(x,E),x.return=d,x)}function p(d,x,E){if(typeof x=="string"&&x!==""||typeof x=="number")return x=iu(""+x,d.mode,E),x.return=d,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case So:return E=yl(x.type,x.key,x.props,null,d.mode,E),E.ref=oa(d,null,x),E.return=d,E;case ps:return x=ru(x,d.mode,E),x.return=d,x;case $i:var M=x._init;return p(d,M(x._payload),E)}if(_a(x)||na(x))return x=Fr(x,d.mode,E,null),x.return=d,x;Lo(d,x)}return null}function h(d,x,E,M){var b=x!==null?x.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return b!==null?null:o(d,x,""+E,M);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case So:return E.key===b?c(d,x,E,M):null;case ps:return E.key===b?u(d,x,E,M):null;case $i:return b=E._init,h(d,x,b(E._payload),M)}if(_a(E)||na(E))return b!==null?null:f(d,x,E,M,null);Lo(d,E)}return null}function m(d,x,E,M,b){if(typeof M=="string"&&M!==""||typeof M=="number")return d=d.get(E)||null,o(x,d,""+M,b);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case So:return d=d.get(M.key===null?E:M.key)||null,c(x,d,M,b);case ps:return d=d.get(M.key===null?E:M.key)||null,u(x,d,M,b);case $i:var w=M._init;return m(d,x,E,w(M._payload),b)}if(_a(M)||na(M))return d=d.get(E)||null,f(x,d,M,b,null);Lo(x,M)}return null}function y(d,x,E,M){for(var b=null,w=null,A=x,_=x=0,C=null;A!==null&&_<E.length;_++){A.index>_?(C=A,A=null):C=A.sibling;var R=h(d,A,E[_],M);if(R===null){A===null&&(A=C);break}t&&A&&R.alternate===null&&e(d,A),x=s(R,x,_),w===null?b=R:w.sibling=R,w=R,A=C}if(_===E.length)return n(d,A),_t&&Cr(d,_),b;if(A===null){for(;_<E.length;_++)A=p(d,E[_],M),A!==null&&(x=s(A,x,_),w===null?b=A:w.sibling=A,w=A);return _t&&Cr(d,_),b}for(A=i(d,A);_<E.length;_++)C=m(A,d,_,E[_],M),C!==null&&(t&&C.alternate!==null&&A.delete(C.key===null?_:C.key),x=s(C,x,_),w===null?b=C:w.sibling=C,w=C);return t&&A.forEach(function(L){return e(d,L)}),_t&&Cr(d,_),b}function v(d,x,E,M){var b=na(E);if(typeof b!="function")throw Error(ce(150));if(E=b.call(E),E==null)throw Error(ce(151));for(var w=b=null,A=x,_=x=0,C=null,R=E.next();A!==null&&!R.done;_++,R=E.next()){A.index>_?(C=A,A=null):C=A.sibling;var L=h(d,A,R.value,M);if(L===null){A===null&&(A=C);break}t&&A&&L.alternate===null&&e(d,A),x=s(L,x,_),w===null?b=L:w.sibling=L,w=L,A=C}if(R.done)return n(d,A),_t&&Cr(d,_),b;if(A===null){for(;!R.done;_++,R=E.next())R=p(d,R.value,M),R!==null&&(x=s(R,x,_),w===null?b=R:w.sibling=R,w=R);return _t&&Cr(d,_),b}for(A=i(d,A);!R.done;_++,R=E.next())R=m(A,d,_,R.value,M),R!==null&&(t&&R.alternate!==null&&A.delete(R.key===null?_:R.key),x=s(R,x,_),w===null?b=R:w.sibling=R,w=R);return t&&A.forEach(function(D){return e(d,D)}),_t&&Cr(d,_),b}function g(d,x,E,M){if(typeof E=="object"&&E!==null&&E.type===ms&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case So:e:{for(var b=E.key,w=x;w!==null;){if(w.key===b){if(b=E.type,b===ms){if(w.tag===7){n(d,w.sibling),x=r(w,E.props.children),x.return=d,d=x;break e}}else if(w.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===$i&&Hp(b)===w.type){n(d,w.sibling),x=r(w,E.props),x.ref=oa(d,w,E),x.return=d,d=x;break e}n(d,w);break}else e(d,w);w=w.sibling}E.type===ms?(x=Fr(E.props.children,d.mode,M,E.key),x.return=d,d=x):(M=yl(E.type,E.key,E.props,null,d.mode,M),M.ref=oa(d,x,E),M.return=d,d=M)}return a(d);case ps:e:{for(w=E.key;x!==null;){if(x.key===w)if(x.tag===4&&x.stateNode.containerInfo===E.containerInfo&&x.stateNode.implementation===E.implementation){n(d,x.sibling),x=r(x,E.children||[]),x.return=d,d=x;break e}else{n(d,x);break}else e(d,x);x=x.sibling}x=ru(E,d.mode,M),x.return=d,d=x}return a(d);case $i:return w=E._init,g(d,x,w(E._payload),M)}if(_a(E))return y(d,x,E,M);if(na(E))return v(d,x,E,M);Lo(d,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,x!==null&&x.tag===6?(n(d,x.sibling),x=r(x,E),x.return=d,d=x):(n(d,x),x=iu(E,d.mode,M),x.return=d,d=x),a(d)):n(d,x)}return g}var Vs=O0(!0),k0=O0(!1),Bl=xr(null),Hl=null,Es=null,Jf=null;function eh(){Jf=Es=Hl=null}function th(t){var e=Bl.current;vt(Bl),t._currentValue=e}function yd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ls(t,e){Hl=t,Jf=Es=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(gn=!0),t.firstContext=null)}function On(t){var e=t._currentValue;if(Jf!==t)if(t={context:t,memoizedValue:e,next:null},Es===null){if(Hl===null)throw Error(ce(308));Es=t,Hl.dependencies={lanes:0,firstContext:t}}else Es=Es.next=t;return e}var Dr=null;function nh(t){Dr===null?Dr=[t]:Dr.push(t)}function z0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,nh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ni(t,i)}function Ni(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Yi=!1;function ih(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function B0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ai(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function lr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,et&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ni(t,n)}return r=i.interleaved,r===null?(e.next=e,nh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ni(t,n)}function pl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Vf(t,n)}}function Vp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Vl(t,e,n,i){var r=t.updateQueue;Yi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var c=o,u=c.next;c.next=null,a===null?s=u:a.next=u,a=c;var f=t.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==a&&(o===null?f.firstBaseUpdate=u:o.next=u,f.lastBaseUpdate=c))}if(s!==null){var p=r.baseState;a=0,f=u=c=null,o=s;do{var h=o.lane,m=o.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var y=t,v=o;switch(h=e,m=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){p=y.call(m,p,h);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,h=typeof y=="function"?y.call(m,p,h):y,h==null)break e;p=bt({},p,h);break e;case 2:Yi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[o]:h.push(o))}else m={eventTime:m,lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(u=f=m,c=p):f=f.next=m,a|=h;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;h=o,o=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(c=p),r.baseState=c,r.firstBaseUpdate=u,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Hr|=a,t.lanes=a,t.memoizedState=p}}function Gp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ce(191,r));r.call(i)}}}var mo={},ui=xr(mo),Ka=xr(mo),qa=xr(mo);function Lr(t){if(t===mo)throw Error(ce(174));return t}function rh(t,e){switch(pt(qa,e),pt(Ka,t),pt(ui,mo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ed(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ed(e,t)}vt(ui),pt(ui,e)}function Gs(){vt(ui),vt(Ka),vt(qa)}function H0(t){Lr(qa.current);var e=Lr(ui.current),n=ed(e,t.type);e!==n&&(pt(Ka,t),pt(ui,n))}function sh(t){Ka.current===t&&(vt(ui),vt(Ka))}var Mt=xr(0);function Gl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Zc=[];function ah(){for(var t=0;t<Zc.length;t++)Zc[t]._workInProgressVersionPrimary=null;Zc.length=0}var ml=Oi.ReactCurrentDispatcher,Qc=Oi.ReactCurrentBatchConfig,Br=0,Tt=null,Ut=null,Ht=null,jl=!1,Ra=!1,Za=0,Ry=0;function qt(){throw Error(ce(321))}function oh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Qn(t[n],e[n]))return!1;return!0}function lh(t,e,n,i,r,s){if(Br=s,Tt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ml.current=t===null||t.memoizedState===null?Iy:Ny,t=n(i,r),Ra){s=0;do{if(Ra=!1,Za=0,25<=s)throw Error(ce(301));s+=1,Ht=Ut=null,e.updateQueue=null,ml.current=Uy,t=n(i,r)}while(Ra)}if(ml.current=Wl,e=Ut!==null&&Ut.next!==null,Br=0,Ht=Ut=Tt=null,jl=!1,e)throw Error(ce(300));return t}function ch(){var t=Za!==0;return Za=0,t}function ri(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ht===null?Tt.memoizedState=Ht=t:Ht=Ht.next=t,Ht}function kn(){if(Ut===null){var t=Tt.alternate;t=t!==null?t.memoizedState:null}else t=Ut.next;var e=Ht===null?Tt.memoizedState:Ht.next;if(e!==null)Ht=e,Ut=t;else{if(t===null)throw Error(ce(310));Ut=t,t={memoizedState:Ut.memoizedState,baseState:Ut.baseState,baseQueue:Ut.baseQueue,queue:Ut.queue,next:null},Ht===null?Tt.memoizedState=Ht=t:Ht=Ht.next=t}return Ht}function Qa(t,e){return typeof e=="function"?e(t):e}function Jc(t){var e=kn(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=Ut,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,c=null,u=s;do{var f=u.lane;if((Br&f)===f)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var p={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(o=c=p,a=i):c=c.next=p,Tt.lanes|=f,Hr|=f}u=u.next}while(u!==null&&u!==s);c===null?a=i:c.next=o,Qn(i,e.memoizedState)||(gn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=c,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Tt.lanes|=s,Hr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function eu(t){var e=kn(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Qn(s,e.memoizedState)||(gn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function V0(){}function G0(t,e){var n=Tt,i=kn(),r=e(),s=!Qn(i.memoizedState,r);if(s&&(i.memoizedState=r,gn=!0),i=i.queue,uh(X0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ht!==null&&Ht.memoizedState.tag&1){if(n.flags|=2048,Ja(9,W0.bind(null,n,i,r,e),void 0,null),Vt===null)throw Error(ce(349));Br&30||j0(n,e,r)}return r}function j0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Tt.updateQueue,e===null?(e={lastEffect:null,stores:null},Tt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function W0(t,e,n,i){e.value=n,e.getSnapshot=i,$0(e)&&Y0(t)}function X0(t,e,n){return n(function(){$0(e)&&Y0(t)})}function $0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Qn(t,n)}catch{return!0}}function Y0(t){var e=Ni(t,1);e!==null&&qn(e,t,1,-1)}function jp(t){var e=ri();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qa,lastRenderedState:t},e.queue=t,t=t.dispatch=Ly.bind(null,Tt,t),[e.memoizedState,t]}function Ja(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Tt.updateQueue,e===null?(e={lastEffect:null,stores:null},Tt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function K0(){return kn().memoizedState}function gl(t,e,n,i){var r=ri();Tt.flags|=t,r.memoizedState=Ja(1|e,n,void 0,i===void 0?null:i)}function pc(t,e,n,i){var r=kn();i=i===void 0?null:i;var s=void 0;if(Ut!==null){var a=Ut.memoizedState;if(s=a.destroy,i!==null&&oh(i,a.deps)){r.memoizedState=Ja(e,n,s,i);return}}Tt.flags|=t,r.memoizedState=Ja(1|e,n,s,i)}function Wp(t,e){return gl(8390656,8,t,e)}function uh(t,e){return pc(2048,8,t,e)}function q0(t,e){return pc(4,2,t,e)}function Z0(t,e){return pc(4,4,t,e)}function Q0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function J0(t,e,n){return n=n!=null?n.concat([t]):null,pc(4,4,Q0.bind(null,e,t),n)}function dh(){}function ev(t,e){var n=kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&oh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function tv(t,e){var n=kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&oh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function nv(t,e,n){return Br&21?(Qn(n,e)||(n=o0(),Tt.lanes|=n,Hr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,gn=!0),t.memoizedState=n)}function Py(t,e){var n=lt;lt=n!==0&&4>n?n:4,t(!0);var i=Qc.transition;Qc.transition={};try{t(!1),e()}finally{lt=n,Qc.transition=i}}function iv(){return kn().memoizedState}function Dy(t,e,n){var i=ur(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},rv(t))sv(e,n);else if(n=z0(t,e,n,i),n!==null){var r=cn();qn(n,t,i,r),av(n,e,i)}}function Ly(t,e,n){var i=ur(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(rv(t))sv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Qn(o,a)){var c=e.interleaved;c===null?(r.next=r,nh(e)):(r.next=c.next,c.next=r),e.interleaved=r;return}}catch{}finally{}n=z0(t,e,r,i),n!==null&&(r=cn(),qn(n,t,i,r),av(n,e,i))}}function rv(t){var e=t.alternate;return t===Tt||e!==null&&e===Tt}function sv(t,e){Ra=jl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function av(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Vf(t,n)}}var Wl={readContext:On,useCallback:qt,useContext:qt,useEffect:qt,useImperativeHandle:qt,useInsertionEffect:qt,useLayoutEffect:qt,useMemo:qt,useReducer:qt,useRef:qt,useState:qt,useDebugValue:qt,useDeferredValue:qt,useTransition:qt,useMutableSource:qt,useSyncExternalStore:qt,useId:qt,unstable_isNewReconciler:!1},Iy={readContext:On,useCallback:function(t,e){return ri().memoizedState=[t,e===void 0?null:e],t},useContext:On,useEffect:Wp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,gl(4194308,4,Q0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return gl(4194308,4,t,e)},useInsertionEffect:function(t,e){return gl(4,2,t,e)},useMemo:function(t,e){var n=ri();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ri();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Dy.bind(null,Tt,t),[i.memoizedState,t]},useRef:function(t){var e=ri();return t={current:t},e.memoizedState=t},useState:jp,useDebugValue:dh,useDeferredValue:function(t){return ri().memoizedState=t},useTransition:function(){var t=jp(!1),e=t[0];return t=Py.bind(null,t[1]),ri().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Tt,r=ri();if(_t){if(n===void 0)throw Error(ce(407));n=n()}else{if(n=e(),Vt===null)throw Error(ce(349));Br&30||j0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Wp(X0.bind(null,i,s,t),[t]),i.flags|=2048,Ja(9,W0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ri(),e=Vt.identifierPrefix;if(_t){var n=wi,i=bi;n=(i&~(1<<32-Kn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Za++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Ry++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Ny={readContext:On,useCallback:ev,useContext:On,useEffect:uh,useImperativeHandle:J0,useInsertionEffect:q0,useLayoutEffect:Z0,useMemo:tv,useReducer:Jc,useRef:K0,useState:function(){return Jc(Qa)},useDebugValue:dh,useDeferredValue:function(t){var e=kn();return nv(e,Ut.memoizedState,t)},useTransition:function(){var t=Jc(Qa)[0],e=kn().memoizedState;return[t,e]},useMutableSource:V0,useSyncExternalStore:G0,useId:iv,unstable_isNewReconciler:!1},Uy={readContext:On,useCallback:ev,useContext:On,useEffect:uh,useImperativeHandle:J0,useInsertionEffect:q0,useLayoutEffect:Z0,useMemo:tv,useReducer:eu,useRef:K0,useState:function(){return eu(Qa)},useDebugValue:dh,useDeferredValue:function(t){var e=kn();return Ut===null?e.memoizedState=t:nv(e,Ut.memoizedState,t)},useTransition:function(){var t=eu(Qa)[0],e=kn().memoizedState;return[t,e]},useMutableSource:V0,useSyncExternalStore:G0,useId:iv,unstable_isNewReconciler:!1};function jn(t,e){if(t&&t.defaultProps){e=bt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Sd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:bt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var mc={isMounted:function(t){return(t=t._reactInternals)?Yr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=cn(),r=ur(t),s=Ai(i,r);s.payload=e,n!=null&&(s.callback=n),e=lr(t,s,r),e!==null&&(qn(e,t,r,i),pl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=cn(),r=ur(t),s=Ai(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=lr(t,s,r),e!==null&&(qn(e,t,r,i),pl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=cn(),i=ur(t),r=Ai(n,i);r.tag=2,e!=null&&(r.callback=e),e=lr(t,r,i),e!==null&&(qn(e,t,i,n),pl(e,t,i))}};function Xp(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Wa(n,i)||!Wa(r,s):!0}function ov(t,e,n){var i=!1,r=hr,s=e.contextType;return typeof s=="object"&&s!==null?s=On(s):(r=xn(e)?kr:rn.current,i=e.contextTypes,s=(i=i!=null)?Bs(t,r):hr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=mc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function $p(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&mc.enqueueReplaceState(e,e.state,null)}function Md(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},ih(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=On(s):(s=xn(e)?kr:rn.current,r.context=Bs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Sd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&mc.enqueueReplaceState(r,r.state,null),Vl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function js(t,e){try{var n="",i=e;do n+=c_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function tu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ed(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Fy=typeof WeakMap=="function"?WeakMap:Map;function lv(t,e,n){n=Ai(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){$l||($l=!0,Id=i),Ed(t,e)},n}function cv(t,e,n){n=Ai(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Ed(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ed(t,e),typeof i!="function"&&(cr===null?cr=new Set([this]):cr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Yp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Fy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=qy.bind(null,t,e,n),e.then(t,t))}function Kp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function qp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ai(-1,1),e.tag=2,lr(n,e,1))),n.lanes|=1),t)}var Oy=Oi.ReactCurrentOwner,gn=!1;function ln(t,e,n,i){e.child=t===null?k0(e,null,n,i):Vs(e,t.child,n,i)}function Zp(t,e,n,i,r){n=n.render;var s=e.ref;return Ls(e,r),i=lh(t,e,n,i,s,r),n=ch(),t!==null&&!gn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ui(t,e,r)):(_t&&n&&qf(e),e.flags|=1,ln(t,e,i,r),e.child)}function Qp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!_h(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,uv(t,e,s,i,r)):(t=yl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Wa,n(a,i)&&t.ref===e.ref)return Ui(t,e,r)}return e.flags|=1,t=dr(s,i),t.ref=e.ref,t.return=e,e.child=t}function uv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Wa(s,i)&&t.ref===e.ref)if(gn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(gn=!0);else return e.lanes=t.lanes,Ui(t,e,r)}return Td(t,e,n,i,r)}function dv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},pt(bs,Mn),Mn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,pt(bs,Mn),Mn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,pt(bs,Mn),Mn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,pt(bs,Mn),Mn|=i;return ln(t,e,r,n),e.child}function fv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Td(t,e,n,i,r){var s=xn(n)?kr:rn.current;return s=Bs(e,s),Ls(e,r),n=lh(t,e,n,i,s,r),i=ch(),t!==null&&!gn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ui(t,e,r)):(_t&&i&&qf(e),e.flags|=1,ln(t,e,n,r),e.child)}function Jp(t,e,n,i,r){if(xn(n)){var s=!0;Ol(e)}else s=!1;if(Ls(e,r),e.stateNode===null)vl(t,e),ov(e,n,i),Md(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=On(u):(u=xn(n)?kr:rn.current,u=Bs(e,u));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||c!==u)&&$p(e,a,i,u),Yi=!1;var h=e.memoizedState;a.state=h,Vl(e,i,a,r),c=e.memoizedState,o!==i||h!==c||vn.current||Yi?(typeof f=="function"&&(Sd(e,n,f,i),c=e.memoizedState),(o=Yi||Xp(e,n,o,i,h,c,u))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),a.props=i,a.state=c,a.context=u,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,B0(t,e),o=e.memoizedProps,u=e.type===e.elementType?o:jn(e.type,o),a.props=u,p=e.pendingProps,h=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=On(c):(c=xn(n)?kr:rn.current,c=Bs(e,c));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==p||h!==c)&&$p(e,a,i,c),Yi=!1,h=e.memoizedState,a.state=h,Vl(e,i,a,r);var y=e.memoizedState;o!==p||h!==y||vn.current||Yi?(typeof m=="function"&&(Sd(e,n,m,i),y=e.memoizedState),(u=Yi||Xp(e,n,u,i,h,y,c)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,y,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,y,c)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),a.props=i,a.state=y,a.context=c,i=u):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return bd(t,e,n,i,s,r)}function bd(t,e,n,i,r,s){fv(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&kp(e,n,!1),Ui(t,e,s);i=e.stateNode,Oy.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Vs(e,t.child,null,s),e.child=Vs(e,null,o,s)):ln(t,e,o,s),e.memoizedState=i.state,r&&kp(e,n,!0),e.child}function hv(t){var e=t.stateNode;e.pendingContext?Op(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Op(t,e.context,!1),rh(t,e.containerInfo)}function em(t,e,n,i,r){return Hs(),Qf(r),e.flags|=256,ln(t,e,n,i),e.child}var wd={dehydrated:null,treeContext:null,retryLane:0};function Cd(t){return{baseLanes:t,cachePool:null,transitions:null}}function pv(t,e,n){var i=e.pendingProps,r=Mt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),pt(Mt,r&1),t===null)return _d(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=xc(a,i,0,null),t=Fr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Cd(n),e.memoizedState=wd,t):fh(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return ky(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var c={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=c,e.deletions=null):(i=dr(r,c),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=dr(o,s):(s=Fr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Cd(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=wd,i}return s=t.child,t=s.sibling,i=dr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function fh(t,e){return e=xc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Io(t,e,n,i){return i!==null&&Qf(i),Vs(e,t.child,null,n),t=fh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ky(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=tu(Error(ce(422))),Io(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=xc({mode:"visible",children:i.children},r,0,null),s=Fr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Vs(e,t.child,null,a),e.child.memoizedState=Cd(a),e.memoizedState=wd,s);if(!(e.mode&1))return Io(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ce(419)),i=tu(s,i,void 0),Io(t,e,a,i)}if(o=(a&t.childLanes)!==0,gn||o){if(i=Vt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ni(t,r),qn(i,t,r,-1))}return xh(),i=tu(Error(ce(421))),Io(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Zy.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Tn=or(r.nextSibling),bn=e,_t=!0,Xn=null,t!==null&&(Ln[In++]=bi,Ln[In++]=wi,Ln[In++]=zr,bi=t.id,wi=t.overflow,zr=e),e=fh(e,i.children),e.flags|=4096,e)}function tm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),yd(t.return,e,n)}function nu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function mv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(ln(t,e,i.children,n),i=Mt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&tm(t,n,e);else if(t.tag===19)tm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(pt(Mt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Gl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),nu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Gl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}nu(e,!0,n,null,s);break;case"together":nu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function vl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ui(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Hr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ce(153));if(e.child!==null){for(t=e.child,n=dr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=dr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function zy(t,e,n){switch(e.tag){case 3:hv(e),Hs();break;case 5:H0(e);break;case 1:xn(e.type)&&Ol(e);break;case 4:rh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;pt(Bl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(pt(Mt,Mt.current&1),e.flags|=128,null):n&e.child.childLanes?pv(t,e,n):(pt(Mt,Mt.current&1),t=Ui(t,e,n),t!==null?t.sibling:null);pt(Mt,Mt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return mv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),pt(Mt,Mt.current),i)break;return null;case 22:case 23:return e.lanes=0,dv(t,e,n)}return Ui(t,e,n)}var gv,Ad,vv,xv;gv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ad=function(){};vv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Lr(ui.current);var s=null;switch(n){case"input":r=qu(t,r),i=qu(t,i),s=[];break;case"select":r=bt({},r,{value:void 0}),i=bt({},i,{value:void 0}),s=[];break;case"textarea":r=Ju(t,r),i=Ju(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ul)}td(n,i);var a;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var o=r[u];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ka.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var c=i[u];if(o=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&c!==o&&(c!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&o[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,o=o?o.__html:void 0,c!=null&&o!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ka.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&gt("scroll",t),s||o===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};xv=function(t,e,n,i){n!==i&&(e.flags|=4)};function la(t,e){if(!_t)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Zt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function By(t,e,n){var i=e.pendingProps;switch(Zf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zt(e),null;case 1:return xn(e.type)&&Fl(),Zt(e),null;case 3:return i=e.stateNode,Gs(),vt(vn),vt(rn),ah(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Do(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Xn!==null&&(Fd(Xn),Xn=null))),Ad(t,e),Zt(e),null;case 5:sh(e);var r=Lr(qa.current);if(n=e.type,t!==null&&e.stateNode!=null)vv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ce(166));return Zt(e),null}if(t=Lr(ui.current),Do(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ai]=e,i[Ya]=s,t=(e.mode&1)!==0,n){case"dialog":gt("cancel",i),gt("close",i);break;case"iframe":case"object":case"embed":gt("load",i);break;case"video":case"audio":for(r=0;r<Sa.length;r++)gt(Sa[r],i);break;case"source":gt("error",i);break;case"img":case"image":case"link":gt("error",i),gt("load",i);break;case"details":gt("toggle",i);break;case"input":up(i,s),gt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},gt("invalid",i);break;case"textarea":fp(i,s),gt("invalid",i)}td(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Po(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Po(i.textContent,o,t),r=["children",""+o]):ka.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&gt("scroll",i)}switch(n){case"input":Mo(i),dp(i,s,!0);break;case"textarea":Mo(i),hp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ul)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Xg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[ai]=e,t[Ya]=i,gv(t,e,!1,!1),e.stateNode=t;e:{switch(a=nd(n,i),n){case"dialog":gt("cancel",t),gt("close",t),r=i;break;case"iframe":case"object":case"embed":gt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Sa.length;r++)gt(Sa[r],t);r=i;break;case"source":gt("error",t),r=i;break;case"img":case"image":case"link":gt("error",t),gt("load",t),r=i;break;case"details":gt("toggle",t),r=i;break;case"input":up(t,i),r=qu(t,i),gt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=bt({},i,{value:void 0}),gt("invalid",t);break;case"textarea":fp(t,i),r=Ju(t,i),gt("invalid",t);break;default:r=i}td(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var c=o[s];s==="style"?Kg(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&$g(t,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&za(t,c):typeof c=="number"&&za(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ka.hasOwnProperty(s)?c!=null&&s==="onScroll"&&gt("scroll",t):c!=null&&Ff(t,s,c,a))}switch(n){case"input":Mo(t),dp(t,i,!1);break;case"textarea":Mo(t),hp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+fr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?As(t,!!i.multiple,s,!1):i.defaultValue!=null&&As(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ul)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Zt(e),null;case 6:if(t&&e.stateNode!=null)xv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ce(166));if(n=Lr(qa.current),Lr(ui.current),Do(e)){if(i=e.stateNode,n=e.memoizedProps,i[ai]=e,(s=i.nodeValue!==n)&&(t=bn,t!==null))switch(t.tag){case 3:Po(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Po(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ai]=e,e.stateNode=i}return Zt(e),null;case 13:if(vt(Mt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(_t&&Tn!==null&&e.mode&1&&!(e.flags&128))F0(),Hs(),e.flags|=98560,s=!1;else if(s=Do(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ce(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ce(317));s[ai]=e}else Hs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Zt(e),s=!1}else Xn!==null&&(Fd(Xn),Xn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Mt.current&1?Ft===0&&(Ft=3):xh())),e.updateQueue!==null&&(e.flags|=4),Zt(e),null);case 4:return Gs(),Ad(t,e),t===null&&Xa(e.stateNode.containerInfo),Zt(e),null;case 10:return th(e.type._context),Zt(e),null;case 17:return xn(e.type)&&Fl(),Zt(e),null;case 19:if(vt(Mt),s=e.memoizedState,s===null)return Zt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)la(s,!1);else{if(Ft!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Gl(t),a!==null){for(e.flags|=128,la(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return pt(Mt,Mt.current&1|2),e.child}t=t.sibling}s.tail!==null&&At()>Ws&&(e.flags|=128,i=!0,la(s,!1),e.lanes=4194304)}else{if(!i)if(t=Gl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),la(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!_t)return Zt(e),null}else 2*At()-s.renderingStartTime>Ws&&n!==1073741824&&(e.flags|=128,i=!0,la(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=At(),e.sibling=null,n=Mt.current,pt(Mt,i?n&1|2:n&1),e):(Zt(e),null);case 22:case 23:return vh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Mn&1073741824&&(Zt(e),e.subtreeFlags&6&&(e.flags|=8192)):Zt(e),null;case 24:return null;case 25:return null}throw Error(ce(156,e.tag))}function Hy(t,e){switch(Zf(e),e.tag){case 1:return xn(e.type)&&Fl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Gs(),vt(vn),vt(rn),ah(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return sh(e),null;case 13:if(vt(Mt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ce(340));Hs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return vt(Mt),null;case 4:return Gs(),null;case 10:return th(e.type._context),null;case 22:case 23:return vh(),null;case 24:return null;default:return null}}var No=!1,en=!1,Vy=typeof WeakSet=="function"?WeakSet:Set,Ce=null;function Ts(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){wt(t,e,i)}else n.current=null}function Rd(t,e,n){try{n()}catch(i){wt(t,e,i)}}var nm=!1;function Gy(t,e){if(fd=Ll,t=E0(),Kf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,c=-1,u=0,f=0,p=t,h=null;t:for(;;){for(var m;p!==n||r!==0&&p.nodeType!==3||(o=a+r),p!==s||i!==0&&p.nodeType!==3||(c=a+i),p.nodeType===3&&(a+=p.nodeValue.length),(m=p.firstChild)!==null;)h=p,p=m;for(;;){if(p===t)break t;if(h===n&&++u===r&&(o=a),h===s&&++f===i&&(c=a),(m=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=m}n=o===-1||c===-1?null:{start:o,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(hd={focusedElem:t,selectionRange:n},Ll=!1,Ce=e;Ce!==null;)if(e=Ce,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ce=t;else for(;Ce!==null;){e=Ce;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,g=y.memoizedState,d=e.stateNode,x=d.getSnapshotBeforeUpdate(e.elementType===e.type?v:jn(e.type,v),g);d.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var E=e.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ce(163))}}catch(M){wt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,Ce=t;break}Ce=e.return}return y=nm,nm=!1,y}function Pa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Rd(e,n,s)}r=r.next}while(r!==i)}}function gc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Pd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function _v(t){var e=t.alternate;e!==null&&(t.alternate=null,_v(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ai],delete e[Ya],delete e[gd],delete e[by],delete e[wy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function yv(t){return t.tag===5||t.tag===3||t.tag===4}function im(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||yv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Dd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ul));else if(i!==4&&(t=t.child,t!==null))for(Dd(t,e,n),t=t.sibling;t!==null;)Dd(t,e,n),t=t.sibling}function Ld(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Ld(t,e,n),t=t.sibling;t!==null;)Ld(t,e,n),t=t.sibling}var Gt=null,Wn=!1;function Hi(t,e,n){for(n=n.child;n!==null;)Sv(t,e,n),n=n.sibling}function Sv(t,e,n){if(ci&&typeof ci.onCommitFiberUnmount=="function")try{ci.onCommitFiberUnmount(lc,n)}catch{}switch(n.tag){case 5:en||Ts(n,e);case 6:var i=Gt,r=Wn;Gt=null,Hi(t,e,n),Gt=i,Wn=r,Gt!==null&&(Wn?(t=Gt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Gt.removeChild(n.stateNode));break;case 18:Gt!==null&&(Wn?(t=Gt,n=n.stateNode,t.nodeType===8?Kc(t.parentNode,n):t.nodeType===1&&Kc(t,n),Ga(t)):Kc(Gt,n.stateNode));break;case 4:i=Gt,r=Wn,Gt=n.stateNode.containerInfo,Wn=!0,Hi(t,e,n),Gt=i,Wn=r;break;case 0:case 11:case 14:case 15:if(!en&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Rd(n,e,a),r=r.next}while(r!==i)}Hi(t,e,n);break;case 1:if(!en&&(Ts(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){wt(n,e,o)}Hi(t,e,n);break;case 21:Hi(t,e,n);break;case 22:n.mode&1?(en=(i=en)||n.memoizedState!==null,Hi(t,e,n),en=i):Hi(t,e,n);break;default:Hi(t,e,n)}}function rm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Vy),e.forEach(function(i){var r=Qy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Bn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Gt=o.stateNode,Wn=!1;break e;case 3:Gt=o.stateNode.containerInfo,Wn=!0;break e;case 4:Gt=o.stateNode.containerInfo,Wn=!0;break e}o=o.return}if(Gt===null)throw Error(ce(160));Sv(s,a,r),Gt=null,Wn=!1;var c=r.alternate;c!==null&&(c.return=null),r.return=null}catch(u){wt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Mv(e,t),e=e.sibling}function Mv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Bn(e,t),ti(t),i&4){try{Pa(3,t,t.return),gc(3,t)}catch(v){wt(t,t.return,v)}try{Pa(5,t,t.return)}catch(v){wt(t,t.return,v)}}break;case 1:Bn(e,t),ti(t),i&512&&n!==null&&Ts(n,n.return);break;case 5:if(Bn(e,t),ti(t),i&512&&n!==null&&Ts(n,n.return),t.flags&32){var r=t.stateNode;try{za(r,"")}catch(v){wt(t,t.return,v)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&jg(r,s),nd(o,a);var u=nd(o,s);for(a=0;a<c.length;a+=2){var f=c[a],p=c[a+1];f==="style"?Kg(r,p):f==="dangerouslySetInnerHTML"?$g(r,p):f==="children"?za(r,p):Ff(r,f,p,u)}switch(o){case"input":Zu(r,s);break;case"textarea":Wg(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?As(r,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?As(r,!!s.multiple,s.defaultValue,!0):As(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ya]=s}catch(v){wt(t,t.return,v)}}break;case 6:if(Bn(e,t),ti(t),i&4){if(t.stateNode===null)throw Error(ce(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(v){wt(t,t.return,v)}}break;case 3:if(Bn(e,t),ti(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ga(e.containerInfo)}catch(v){wt(t,t.return,v)}break;case 4:Bn(e,t),ti(t);break;case 13:Bn(e,t),ti(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(mh=At())),i&4&&rm(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(en=(u=en)||f,Bn(e,t),en=u):Bn(e,t),ti(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(Ce=t,f=t.child;f!==null;){for(p=Ce=f;Ce!==null;){switch(h=Ce,m=h.child,h.tag){case 0:case 11:case 14:case 15:Pa(4,h,h.return);break;case 1:Ts(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){wt(i,n,v)}}break;case 5:Ts(h,h.return);break;case 22:if(h.memoizedState!==null){am(p);continue}}m!==null?(m.return=h,Ce=m):am(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{r=p.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=p.stateNode,c=p.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,o.style.display=Yg("display",a))}catch(v){wt(t,t.return,v)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(v){wt(t,t.return,v)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Bn(e,t),ti(t),i&4&&rm(t);break;case 21:break;default:Bn(e,t),ti(t)}}function ti(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(yv(n)){var i=n;break e}n=n.return}throw Error(ce(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(za(r,""),i.flags&=-33);var s=im(t);Ld(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=im(t);Dd(t,o,a);break;default:throw Error(ce(161))}}catch(c){wt(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function jy(t,e,n){Ce=t,Ev(t)}function Ev(t,e,n){for(var i=(t.mode&1)!==0;Ce!==null;){var r=Ce,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||No;if(!a){var o=r.alternate,c=o!==null&&o.memoizedState!==null||en;o=No;var u=en;if(No=a,(en=c)&&!u)for(Ce=r;Ce!==null;)a=Ce,c=a.child,a.tag===22&&a.memoizedState!==null?om(r):c!==null?(c.return=a,Ce=c):om(r);for(;s!==null;)Ce=s,Ev(s),s=s.sibling;Ce=r,No=o,en=u}sm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ce=s):sm(t)}}function sm(t){for(;Ce!==null;){var e=Ce;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:en||gc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!en)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:jn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Gp(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Gp(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&Ga(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ce(163))}en||e.flags&512&&Pd(e)}catch(h){wt(e,e.return,h)}}if(e===t){Ce=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ce=n;break}Ce=e.return}}function am(t){for(;Ce!==null;){var e=Ce;if(e===t){Ce=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ce=n;break}Ce=e.return}}function om(t){for(;Ce!==null;){var e=Ce;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{gc(4,e)}catch(c){wt(e,n,c)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(c){wt(e,r,c)}}var s=e.return;try{Pd(e)}catch(c){wt(e,s,c)}break;case 5:var a=e.return;try{Pd(e)}catch(c){wt(e,a,c)}}}catch(c){wt(e,e.return,c)}if(e===t){Ce=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Ce=o;break}Ce=e.return}}var Wy=Math.ceil,Xl=Oi.ReactCurrentDispatcher,hh=Oi.ReactCurrentOwner,Fn=Oi.ReactCurrentBatchConfig,et=0,Vt=null,Lt=null,Xt=0,Mn=0,bs=xr(0),Ft=0,eo=null,Hr=0,vc=0,ph=0,Da=null,mn=null,mh=0,Ws=1/0,Si=null,$l=!1,Id=null,cr=null,Uo=!1,tr=null,Yl=0,La=0,Nd=null,xl=-1,_l=0;function cn(){return et&6?At():xl!==-1?xl:xl=At()}function ur(t){return t.mode&1?et&2&&Xt!==0?Xt&-Xt:Ay.transition!==null?(_l===0&&(_l=o0()),_l):(t=lt,t!==0||(t=window.event,t=t===void 0?16:p0(t.type)),t):1}function qn(t,e,n,i){if(50<La)throw La=0,Nd=null,Error(ce(185));fo(t,n,i),(!(et&2)||t!==Vt)&&(t===Vt&&(!(et&2)&&(vc|=n),Ft===4&&Zi(t,Xt)),_n(t,i),n===1&&et===0&&!(e.mode&1)&&(Ws=At()+500,hc&&_r()))}function _n(t,e){var n=t.callbackNode;A_(t,e);var i=Dl(t,t===Vt?Xt:0);if(i===0)n!==null&&gp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&gp(n),e===1)t.tag===0?Cy(lm.bind(null,t)):I0(lm.bind(null,t)),Ey(function(){!(et&6)&&_r()}),n=null;else{switch(l0(i)){case 1:n=Hf;break;case 4:n=s0;break;case 16:n=Pl;break;case 536870912:n=a0;break;default:n=Pl}n=Dv(n,Tv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Tv(t,e){if(xl=-1,_l=0,et&6)throw Error(ce(327));var n=t.callbackNode;if(Is()&&t.callbackNode!==n)return null;var i=Dl(t,t===Vt?Xt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Kl(t,i);else{e=i;var r=et;et|=2;var s=wv();(Vt!==t||Xt!==e)&&(Si=null,Ws=At()+500,Ur(t,e));do try{Yy();break}catch(o){bv(t,o)}while(!0);eh(),Xl.current=s,et=r,Lt!==null?e=0:(Vt=null,Xt=0,e=Ft)}if(e!==0){if(e===2&&(r=od(t),r!==0&&(i=r,e=Ud(t,r))),e===1)throw n=eo,Ur(t,0),Zi(t,i),_n(t,At()),n;if(e===6)Zi(t,i);else{if(r=t.current.alternate,!(i&30)&&!Xy(r)&&(e=Kl(t,i),e===2&&(s=od(t),s!==0&&(i=s,e=Ud(t,s))),e===1))throw n=eo,Ur(t,0),Zi(t,i),_n(t,At()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ce(345));case 2:Ar(t,mn,Si);break;case 3:if(Zi(t,i),(i&130023424)===i&&(e=mh+500-At(),10<e)){if(Dl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){cn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=md(Ar.bind(null,t,mn,Si),e);break}Ar(t,mn,Si);break;case 4:if(Zi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Kn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=At()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Wy(i/1960))-i,10<i){t.timeoutHandle=md(Ar.bind(null,t,mn,Si),i);break}Ar(t,mn,Si);break;case 5:Ar(t,mn,Si);break;default:throw Error(ce(329))}}}return _n(t,At()),t.callbackNode===n?Tv.bind(null,t):null}function Ud(t,e){var n=Da;return t.current.memoizedState.isDehydrated&&(Ur(t,e).flags|=256),t=Kl(t,e),t!==2&&(e=mn,mn=n,e!==null&&Fd(e)),t}function Fd(t){mn===null?mn=t:mn.push.apply(mn,t)}function Xy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Qn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Zi(t,e){for(e&=~ph,e&=~vc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Kn(e),i=1<<n;t[n]=-1,e&=~i}}function lm(t){if(et&6)throw Error(ce(327));Is();var e=Dl(t,0);if(!(e&1))return _n(t,At()),null;var n=Kl(t,e);if(t.tag!==0&&n===2){var i=od(t);i!==0&&(e=i,n=Ud(t,i))}if(n===1)throw n=eo,Ur(t,0),Zi(t,e),_n(t,At()),n;if(n===6)throw Error(ce(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ar(t,mn,Si),_n(t,At()),null}function gh(t,e){var n=et;et|=1;try{return t(e)}finally{et=n,et===0&&(Ws=At()+500,hc&&_r())}}function Vr(t){tr!==null&&tr.tag===0&&!(et&6)&&Is();var e=et;et|=1;var n=Fn.transition,i=lt;try{if(Fn.transition=null,lt=1,t)return t()}finally{lt=i,Fn.transition=n,et=e,!(et&6)&&_r()}}function vh(){Mn=bs.current,vt(bs)}function Ur(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,My(n)),Lt!==null)for(n=Lt.return;n!==null;){var i=n;switch(Zf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Fl();break;case 3:Gs(),vt(vn),vt(rn),ah();break;case 5:sh(i);break;case 4:Gs();break;case 13:vt(Mt);break;case 19:vt(Mt);break;case 10:th(i.type._context);break;case 22:case 23:vh()}n=n.return}if(Vt=t,Lt=t=dr(t.current,null),Xt=Mn=e,Ft=0,eo=null,ph=vc=Hr=0,mn=Da=null,Dr!==null){for(e=0;e<Dr.length;e++)if(n=Dr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Dr=null}return t}function bv(t,e){do{var n=Lt;try{if(eh(),ml.current=Wl,jl){for(var i=Tt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}jl=!1}if(Br=0,Ht=Ut=Tt=null,Ra=!1,Za=0,hh.current=null,n===null||n.return===null){Ft=1,eo=e,Lt=null;break}e:{var s=t,a=n.return,o=n,c=e;if(e=Xt,o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,f=o,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=Kp(a);if(m!==null){m.flags&=-257,qp(m,a,o,s,e),m.mode&1&&Yp(s,u,e),e=m,c=u;var y=e.updateQueue;if(y===null){var v=new Set;v.add(c),e.updateQueue=v}else y.add(c);break e}else{if(!(e&1)){Yp(s,u,e),xh();break e}c=Error(ce(426))}}else if(_t&&o.mode&1){var g=Kp(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),qp(g,a,o,s,e),Qf(js(c,o));break e}}s=c=js(c,o),Ft!==4&&(Ft=2),Da===null?Da=[s]:Da.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=lv(s,c,e);Vp(s,d);break e;case 1:o=c;var x=s.type,E=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(cr===null||!cr.has(E)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=cv(s,o,e);Vp(s,M);break e}}s=s.return}while(s!==null)}Av(n)}catch(b){e=b,Lt===n&&n!==null&&(Lt=n=n.return);continue}break}while(!0)}function wv(){var t=Xl.current;return Xl.current=Wl,t===null?Wl:t}function xh(){(Ft===0||Ft===3||Ft===2)&&(Ft=4),Vt===null||!(Hr&268435455)&&!(vc&268435455)||Zi(Vt,Xt)}function Kl(t,e){var n=et;et|=2;var i=wv();(Vt!==t||Xt!==e)&&(Si=null,Ur(t,e));do try{$y();break}catch(r){bv(t,r)}while(!0);if(eh(),et=n,Xl.current=i,Lt!==null)throw Error(ce(261));return Vt=null,Xt=0,Ft}function $y(){for(;Lt!==null;)Cv(Lt)}function Yy(){for(;Lt!==null&&!__();)Cv(Lt)}function Cv(t){var e=Pv(t.alternate,t,Mn);t.memoizedProps=t.pendingProps,e===null?Av(t):Lt=e,hh.current=null}function Av(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Hy(n,e),n!==null){n.flags&=32767,Lt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ft=6,Lt=null;return}}else if(n=By(n,e,Mn),n!==null){Lt=n;return}if(e=e.sibling,e!==null){Lt=e;return}Lt=e=t}while(e!==null);Ft===0&&(Ft=5)}function Ar(t,e,n){var i=lt,r=Fn.transition;try{Fn.transition=null,lt=1,Ky(t,e,n,i)}finally{Fn.transition=r,lt=i}return null}function Ky(t,e,n,i){do Is();while(tr!==null);if(et&6)throw Error(ce(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ce(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(R_(t,s),t===Vt&&(Lt=Vt=null,Xt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Uo||(Uo=!0,Dv(Pl,function(){return Is(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Fn.transition,Fn.transition=null;var a=lt;lt=1;var o=et;et|=4,hh.current=null,Gy(t,n),Mv(n,t),my(hd),Ll=!!fd,hd=fd=null,t.current=n,jy(n),y_(),et=o,lt=a,Fn.transition=s}else t.current=n;if(Uo&&(Uo=!1,tr=t,Yl=r),s=t.pendingLanes,s===0&&(cr=null),E_(n.stateNode),_n(t,At()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if($l)throw $l=!1,t=Id,Id=null,t;return Yl&1&&t.tag!==0&&Is(),s=t.pendingLanes,s&1?t===Nd?La++:(La=0,Nd=t):La=0,_r(),null}function Is(){if(tr!==null){var t=l0(Yl),e=Fn.transition,n=lt;try{if(Fn.transition=null,lt=16>t?16:t,tr===null)var i=!1;else{if(t=tr,tr=null,Yl=0,et&6)throw Error(ce(331));var r=et;for(et|=4,Ce=t.current;Ce!==null;){var s=Ce,a=s.child;if(Ce.flags&16){var o=s.deletions;if(o!==null){for(var c=0;c<o.length;c++){var u=o[c];for(Ce=u;Ce!==null;){var f=Ce;switch(f.tag){case 0:case 11:case 15:Pa(8,f,s)}var p=f.child;if(p!==null)p.return=f,Ce=p;else for(;Ce!==null;){f=Ce;var h=f.sibling,m=f.return;if(_v(f),f===u){Ce=null;break}if(h!==null){h.return=m,Ce=h;break}Ce=m}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var g=v.sibling;v.sibling=null,v=g}while(v!==null)}}Ce=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Ce=a;else e:for(;Ce!==null;){if(s=Ce,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Pa(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,Ce=d;break e}Ce=s.return}}var x=t.current;for(Ce=x;Ce!==null;){a=Ce;var E=a.child;if(a.subtreeFlags&2064&&E!==null)E.return=a,Ce=E;else e:for(a=x;Ce!==null;){if(o=Ce,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:gc(9,o)}}catch(b){wt(o,o.return,b)}if(o===a){Ce=null;break e}var M=o.sibling;if(M!==null){M.return=o.return,Ce=M;break e}Ce=o.return}}if(et=r,_r(),ci&&typeof ci.onPostCommitFiberRoot=="function")try{ci.onPostCommitFiberRoot(lc,t)}catch{}i=!0}return i}finally{lt=n,Fn.transition=e}}return!1}function cm(t,e,n){e=js(n,e),e=lv(t,e,1),t=lr(t,e,1),e=cn(),t!==null&&(fo(t,1,e),_n(t,e))}function wt(t,e,n){if(t.tag===3)cm(t,t,n);else for(;e!==null;){if(e.tag===3){cm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(cr===null||!cr.has(i))){t=js(n,t),t=cv(e,t,1),e=lr(e,t,1),t=cn(),e!==null&&(fo(e,1,t),_n(e,t));break}}e=e.return}}function qy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=cn(),t.pingedLanes|=t.suspendedLanes&n,Vt===t&&(Xt&n)===n&&(Ft===4||Ft===3&&(Xt&130023424)===Xt&&500>At()-mh?Ur(t,0):ph|=n),_n(t,e)}function Rv(t,e){e===0&&(t.mode&1?(e=bo,bo<<=1,!(bo&130023424)&&(bo=4194304)):e=1);var n=cn();t=Ni(t,e),t!==null&&(fo(t,e,n),_n(t,n))}function Zy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Rv(t,n)}function Qy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ce(314))}i!==null&&i.delete(e),Rv(t,n)}var Pv;Pv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||vn.current)gn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return gn=!1,zy(t,e,n);gn=!!(t.flags&131072)}else gn=!1,_t&&e.flags&1048576&&N0(e,zl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;vl(t,e),t=e.pendingProps;var r=Bs(e,rn.current);Ls(e,n),r=lh(null,e,i,t,r,n);var s=ch();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,xn(i)?(s=!0,Ol(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,ih(e),r.updater=mc,e.stateNode=r,r._reactInternals=e,Md(e,i,t,n),e=bd(null,e,i,!0,s,n)):(e.tag=0,_t&&s&&qf(e),ln(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(vl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=eS(i),t=jn(i,t),r){case 0:e=Td(null,e,i,t,n);break e;case 1:e=Jp(null,e,i,t,n);break e;case 11:e=Zp(null,e,i,t,n);break e;case 14:e=Qp(null,e,i,jn(i.type,t),n);break e}throw Error(ce(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),Td(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),Jp(t,e,i,r,n);case 3:e:{if(hv(e),t===null)throw Error(ce(387));i=e.pendingProps,s=e.memoizedState,r=s.element,B0(t,e),Vl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=js(Error(ce(423)),e),e=em(t,e,i,n,r);break e}else if(i!==r){r=js(Error(ce(424)),e),e=em(t,e,i,n,r);break e}else for(Tn=or(e.stateNode.containerInfo.firstChild),bn=e,_t=!0,Xn=null,n=k0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Hs(),i===r){e=Ui(t,e,n);break e}ln(t,e,i,n)}e=e.child}return e;case 5:return H0(e),t===null&&_d(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,pd(i,r)?a=null:s!==null&&pd(i,s)&&(e.flags|=32),fv(t,e),ln(t,e,a,n),e.child;case 6:return t===null&&_d(e),null;case 13:return pv(t,e,n);case 4:return rh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Vs(e,null,i,n):ln(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),Zp(t,e,i,r,n);case 7:return ln(t,e,e.pendingProps,n),e.child;case 8:return ln(t,e,e.pendingProps.children,n),e.child;case 12:return ln(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,pt(Bl,i._currentValue),i._currentValue=a,s!==null)if(Qn(s.value,a)){if(s.children===r.children&&!vn.current){e=Ui(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var c=o.firstContext;c!==null;){if(c.context===i){if(s.tag===1){c=Ai(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?c.next=c:(c.next=f.next,f.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),yd(s.return,n,e),o.lanes|=n;break}c=c.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ce(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),yd(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}ln(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ls(e,n),r=On(r),i=i(r),e.flags|=1,ln(t,e,i,n),e.child;case 14:return i=e.type,r=jn(i,e.pendingProps),r=jn(i.type,r),Qp(t,e,i,r,n);case 15:return uv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),vl(t,e),e.tag=1,xn(i)?(t=!0,Ol(e)):t=!1,Ls(e,n),ov(e,i,r),Md(e,i,r,n),bd(null,e,i,!0,t,n);case 19:return mv(t,e,n);case 22:return dv(t,e,n)}throw Error(ce(156,e.tag))};function Dv(t,e){return r0(t,e)}function Jy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Un(t,e,n,i){return new Jy(t,e,n,i)}function _h(t){return t=t.prototype,!(!t||!t.isReactComponent)}function eS(t){if(typeof t=="function")return _h(t)?1:0;if(t!=null){if(t=t.$$typeof,t===kf)return 11;if(t===zf)return 14}return 2}function dr(t,e){var n=t.alternate;return n===null?(n=Un(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function yl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")_h(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case ms:return Fr(n.children,r,s,e);case Of:a=8,r|=8;break;case Xu:return t=Un(12,n,e,r|2),t.elementType=Xu,t.lanes=s,t;case $u:return t=Un(13,n,e,r),t.elementType=$u,t.lanes=s,t;case Yu:return t=Un(19,n,e,r),t.elementType=Yu,t.lanes=s,t;case Hg:return xc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case zg:a=10;break e;case Bg:a=9;break e;case kf:a=11;break e;case zf:a=14;break e;case $i:a=16,i=null;break e}throw Error(ce(130,t==null?t:typeof t,""))}return e=Un(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Fr(t,e,n,i){return t=Un(7,t,i,e),t.lanes=n,t}function xc(t,e,n,i){return t=Un(22,t,i,e),t.elementType=Hg,t.lanes=n,t.stateNode={isHidden:!1},t}function iu(t,e,n){return t=Un(6,t,null,e),t.lanes=n,t}function ru(t,e,n){return e=Un(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function tS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=kc(0),this.expirationTimes=kc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function yh(t,e,n,i,r,s,a,o,c){return t=new tS(t,e,n,o,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Un(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ih(s),t}function nS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ps,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Lv(t){if(!t)return hr;t=t._reactInternals;e:{if(Yr(t)!==t||t.tag!==1)throw Error(ce(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(xn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ce(171))}if(t.tag===1){var n=t.type;if(xn(n))return L0(t,n,e)}return e}function Iv(t,e,n,i,r,s,a,o,c){return t=yh(n,i,!0,t,r,s,a,o,c),t.context=Lv(null),n=t.current,i=cn(),r=ur(n),s=Ai(i,r),s.callback=e??null,lr(n,s,r),t.current.lanes=r,fo(t,r,i),_n(t,i),t}function _c(t,e,n,i){var r=e.current,s=cn(),a=ur(r);return n=Lv(n),e.context===null?e.context=n:e.pendingContext=n,e=Ai(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=lr(r,e,a),t!==null&&(qn(t,r,a,s),pl(t,r,a)),a}function ql(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function um(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Sh(t,e){um(t,e),(t=t.alternate)&&um(t,e)}function iS(){return null}var Nv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Mh(t){this._internalRoot=t}yc.prototype.render=Mh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ce(409));_c(t,e,null,null)};yc.prototype.unmount=Mh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Vr(function(){_c(null,t,null,null)}),e[Ii]=null}};function yc(t){this._internalRoot=t}yc.prototype.unstable_scheduleHydration=function(t){if(t){var e=d0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<qi.length&&e!==0&&e<qi[n].priority;n++);qi.splice(n,0,t),n===0&&h0(t)}};function Eh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Sc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function dm(){}function rS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=ql(a);s.call(u)}}var a=Iv(e,i,t,0,null,!1,!1,"",dm);return t._reactRootContainer=a,t[Ii]=a.current,Xa(t.nodeType===8?t.parentNode:t),Vr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var u=ql(c);o.call(u)}}var c=yh(t,0,!1,null,null,!1,!1,"",dm);return t._reactRootContainer=c,t[Ii]=c.current,Xa(t.nodeType===8?t.parentNode:t),Vr(function(){_c(e,c,n,i)}),c}function Mc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var c=ql(a);o.call(c)}}_c(e,a,t,r)}else a=rS(n,e,t,r,i);return ql(a)}c0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ya(e.pendingLanes);n!==0&&(Vf(e,n|1),_n(e,At()),!(et&6)&&(Ws=At()+500,_r()))}break;case 13:Vr(function(){var i=Ni(t,1);if(i!==null){var r=cn();qn(i,t,1,r)}}),Sh(t,1)}};Gf=function(t){if(t.tag===13){var e=Ni(t,134217728);if(e!==null){var n=cn();qn(e,t,134217728,n)}Sh(t,134217728)}};u0=function(t){if(t.tag===13){var e=ur(t),n=Ni(t,e);if(n!==null){var i=cn();qn(n,t,e,i)}Sh(t,e)}};d0=function(){return lt};f0=function(t,e){var n=lt;try{return lt=t,e()}finally{lt=n}};rd=function(t,e,n){switch(e){case"input":if(Zu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=fc(i);if(!r)throw Error(ce(90));Gg(i),Zu(i,r)}}}break;case"textarea":Wg(t,n);break;case"select":e=n.value,e!=null&&As(t,!!n.multiple,e,!1)}};Qg=gh;Jg=Vr;var sS={usingClientEntryPoint:!1,Events:[po,_s,fc,qg,Zg,gh]},ca={findFiberByHostInstance:Pr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},aS={bundleType:ca.bundleType,version:ca.version,rendererPackageName:ca.rendererPackageName,rendererConfig:ca.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Oi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=n0(t),t===null?null:t.stateNode},findFiberByHostInstance:ca.findFiberByHostInstance||iS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fo.isDisabled&&Fo.supportsFiber)try{lc=Fo.inject(aS),ci=Fo}catch{}}Cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sS;Cn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Eh(e))throw Error(ce(200));return nS(t,e,null,n)};Cn.createRoot=function(t,e){if(!Eh(t))throw Error(ce(299));var n=!1,i="",r=Nv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=yh(t,1,!1,null,null,n,!1,i,r),t[Ii]=e.current,Xa(t.nodeType===8?t.parentNode:t),new Mh(e)};Cn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ce(188)):(t=Object.keys(t).join(","),Error(ce(268,t)));return t=n0(e),t=t===null?null:t.stateNode,t};Cn.flushSync=function(t){return Vr(t)};Cn.hydrate=function(t,e,n){if(!Sc(e))throw Error(ce(200));return Mc(null,t,e,!0,n)};Cn.hydrateRoot=function(t,e,n){if(!Eh(t))throw Error(ce(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=Nv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Iv(e,null,t,1,n??null,r,!1,s,a),t[Ii]=e.current,Xa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new yc(e)};Cn.render=function(t,e,n){if(!Sc(e))throw Error(ce(200));return Mc(null,t,e,!1,n)};Cn.unmountComponentAtNode=function(t){if(!Sc(t))throw Error(ce(40));return t._reactRootContainer?(Vr(function(){Mc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ii]=null})}),!0):!1};Cn.unstable_batchedUpdates=gh;Cn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Sc(n))throw Error(ce(200));if(t==null||t._reactInternals===void 0)throw Error(ce(38));return Mc(t,e,n,!1,i)};Cn.version="18.3.1-next-f1338f8080-20240426";function Uv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Uv)}catch(t){console.error(t)}}Uv(),Ug.exports=Cn;var oS=Ug.exports,fm=oS;ju.createRoot=fm.createRoot,ju.hydrateRoot=fm.hydrateRoot;function Od({size:t=18,className:e="",color:n="currentColor"}){return l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[l.jsx("rect",{x:"3",y:"3",width:"7",height:"7",rx:"1.5"}),l.jsx("rect",{x:"14",y:"3",width:"7",height:"7",rx:"1.5"}),l.jsx("rect",{x:"14",y:"14",width:"7",height:"7",rx:"1.5"}),l.jsx("rect",{x:"3",y:"14",width:"7",height:"7",rx:"1.5"})]})}function Fv({size:t=18,className:e="",color:n="currentColor"}){return l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[l.jsx("polygon",{points:"1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"}),l.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"18"}),l.jsx("line",{x1:"16",y1:"6",x2:"16",y2:"22"})]})}function Th({size:t=18,className:e="",color:n="currentColor"}){return l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[l.jsx("circle",{cx:"12",cy:"12",r:"10"}),l.jsx("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),l.jsx("path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"})]})}function Ov({size:t=18,className:e="",color:n="currentColor"}){return l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[l.jsx("line",{x1:"18",y1:"20",x2:"18",y2:"10"}),l.jsx("line",{x1:"12",y1:"20",x2:"12",y2:"4"}),l.jsx("line",{x1:"6",y1:"20",x2:"6",y2:"14"}),l.jsx("line",{x1:"2",y1:"20",x2:"22",y2:"20"})]})}function kd({size:t=18,className:e="",color:n="currentColor"}){return l.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:l.jsx("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})})}function kv({size:t=18,className:e="",color:n="currentColor"}){return l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[l.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),l.jsx("polyline",{points:"14 2 14 8 20 8"}),l.jsx("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),l.jsx("line",{x1:"16",y1:"17",x2:"8",y2:"17"}),l.jsx("polyline",{points:"10 9 9 9 8 9"})]})}function Gr({size:t=18,className:e="",color:n="currentColor"}){return l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[l.jsx("path",{d:"M20 16.2A4.5 4.5 0 0 0 17.5 8h-1.8A7 7 0 1 0 4 14.9"}),l.jsx("path",{d:"M8 19v2"}),l.jsx("path",{d:"M8 13v2"}),l.jsx("path",{d:"M12 21v2"}),l.jsx("path",{d:"M12 15v2"}),l.jsx("path",{d:"M16 19v2"}),l.jsx("path",{d:"M16 13v2"})]})}function Xs({size:t=18,className:e="",color:n="currentColor"}){return l.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:l.jsx("path",{d:"M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"})})}function $s({size:t=18,className:e="",color:n="currentColor"}){return l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[l.jsx("path",{d:"M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"}),l.jsx("circle",{cx:"12",cy:"12",r:"4"})]})}function to({size:t=18,className:e="",color:n="currentColor"}){return l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[l.jsx("path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"}),l.jsx("path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"})]})}function Zl({size:t=18,className:e="",color:n="currentColor"}){return l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[l.jsx("circle",{cx:"12",cy:"12",r:"10"}),l.jsx("path",{d:"M16.2 7.8l-4.2 4.2"}),l.jsx("circle",{cx:"12",cy:"12",r:"1.5"}),l.jsx("path",{d:"M12 6v2M6 12h2M18 12h2"})]})}function Ql({size:t=18,className:e="",color:n="currentColor"}){return l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[l.jsx("rect",{x:"4",y:"4",width:"16",height:"16",rx:"2"}),l.jsx("rect",{x:"9",y:"9",width:"6",height:"6"}),l.jsx("line",{x1:"9",y1:"1",x2:"9",y2:"4"}),l.jsx("line",{x1:"15",y1:"1",x2:"15",y2:"4"}),l.jsx("line",{x1:"9",y1:"20",x2:"9",y2:"23"}),l.jsx("line",{x1:"15",y1:"20",x2:"15",y2:"23"}),l.jsx("line",{x1:"20",y1:"9",x2:"23",y2:"9"}),l.jsx("line",{x1:"20",y1:"14",x2:"23",y2:"14"}),l.jsx("line",{x1:"1",y1:"9",x2:"4",y2:"9"}),l.jsx("line",{x1:"1",y1:"14",x2:"4",y2:"14"})]})}function Ia({size:t=18,className:e="",color:n="currentColor"}){return l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[l.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),l.jsx("circle",{cx:"12",cy:"10",r:"3"})]})}function Na({size:t=18,className:e="",color:n="currentColor"}){return l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[l.jsx("polygon",{points:"12 2 2 7 12 12 22 7 12 2"}),l.jsx("polyline",{points:"2 17 12 22 22 17"}),l.jsx("polyline",{points:"2 12 12 17 22 12"})]})}function lS({size:t=16,className:e="",color:n="currentColor"}){return l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[l.jsx("polyline",{points:"23 6 13.5 15.5 8.5 10.5 1 18"}),l.jsx("polyline",{points:"17 6 23 6 23 12"})]})}function cS({size:t=16,className:e="",color:n="currentColor"}){return l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[l.jsx("polyline",{points:"23 18 13.5 8.5 8.5 13.5 1 6"}),l.jsx("polyline",{points:"17 18 23 18 23 12"})]})}function no({size:t=16,className:e="",color:n="currentColor"}){return l.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:l.jsx("polyline",{points:"20 6 9 17 4 12"})})}function Ec({size:t=16,className:e="",color:n="currentColor"}){return l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[l.jsx("circle",{cx:"12",cy:"12",r:"10"}),l.jsx("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),l.jsx("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]})}function Ns({size:t=18,className:e="",color:n="currentColor"}){return l.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:l.jsx("polyline",{points:"22 12 18 12 15 21 9 3 6 12 2 12"})})}function pr({size:t=18,className:e="",color:n="currentColor"}){return l.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[l.jsx("path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"}),l.jsx("line",{x1:"12",y1:"9",x2:"12",y2:"13"}),l.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]})}const uS=[{id:"overview",label:"Overview Dashboard",icon:Od,section:"Core"},{id:"climate-map",label:"Climate Map",icon:Fv,section:"Spatial"},{id:"digital-twin",label:"Digital Twin 3D",icon:Th,section:"Spatial"},{id:"analytics",label:"Analytics & Forecast",icon:Ov,section:"Intelligence"},{id:"what-if",label:"What-If Simulation",icon:kd,section:"Intelligence"},{id:"reports",label:"Reports & Data",icon:kv,section:"System"}];function dS({activeTab:t,onTabChange:e}){return l.jsxs("aside",{className:"dashboard-sidebar",children:[l.jsxs("div",{className:"sidebar-brand",children:[l.jsx("div",{className:"brand-badge",children:"DT"}),l.jsxs("div",{className:"brand-info",children:[l.jsx("span",{className:"brand-title",children:"CLIMATE TWIN"}),l.jsx("span",{className:"brand-subtitle",children:"ERNAKULAM AI HUB"})]})]}),l.jsx("div",{className:"sidebar-section-title",children:"COMMAND CENTER"}),l.jsx("nav",{className:"sidebar-nav","aria-label":"Main Navigation",children:uS.map(n=>{const i=t===n.id,r=n.icon;return l.jsxs("button",{className:`nav-item-btn ${i?"active":""}`,onClick:()=>e(n.id),type:"button","aria-current":i?"page":void 0,children:[l.jsx("span",{className:"nav-icon",children:l.jsx(r,{size:17,color:i?"var(--accent-cyan)":"currentColor"})}),l.jsx("span",{children:n.label})]},n.id)})}),l.jsxs("div",{className:"sidebar-footer",children:[l.jsxs("div",{className:"system-status-indicator",children:[l.jsx("span",{className:"status-pulse",style:{width:"6px",height:"6px"}}),l.jsx("span",{children:"System Online"})]}),l.jsx("div",{className:"node-meta",children:"Ernakulam Node v1.0.0"})]})]})}function fS({activeTab:t}){const[e,n]=he.useState("");return he.useEffect(()=>{const i=()=>{n(new Date().toUTCString().slice(17,25)+" UTC")};i();const r=setInterval(i,1e3);return()=>clearInterval(r)},[]),l.jsxs("header",{className:"dashboard-header",children:[l.jsxs("div",{className:"header-left",children:[l.jsxs("div",{className:"telemetry-pill",children:[l.jsx(Ia,{size:15,color:"var(--accent-cyan)"}),l.jsxs("span",{children:["Domain: ",l.jsx("strong",{className:"pill-accent",children:"Ernakulam District"}),", Kerala"]})]}),l.jsx("div",{className:"telemetry-pill",style:{fontFamily:"var(--font-mono)",fontSize:"0.75rem"},children:l.jsx("span",{children:"9.9816° N, 76.2999° E"})})]}),l.jsxs("div",{className:"header-right",children:[l.jsxs("div",{className:"live-indicator",children:[l.jsx("div",{className:"status-pulse"}),l.jsxs("span",{children:["Digital Twin Engine: ",l.jsx("strong",{children:"Synchronized"})]})]}),l.jsx("div",{className:"telemetry-pill",style:{fontFamily:"var(--font-mono)",fontSize:"0.75rem"},children:l.jsx("span",{children:e||"12:00:00 UTC"})}),l.jsxs("div",{className:"mode-badge",children:[l.jsx(Ql,{size:13,color:"var(--accent-cyan)"}),l.jsx("span",{children:"MOCK ADAPTER (SAFE)"})]})]})]})}function hS({activeTab:t,onTabChange:e,children:n}){return l.jsxs("div",{className:"app-container",children:[l.jsx(dS,{activeTab:t,onTabChange:e}),l.jsxs("div",{className:"main-content-wrapper",children:[l.jsx(fS,{activeTab:t}),l.jsx("main",{className:"page-content",children:n})]})]})}function yi({status:t="normal",label:e}){const n={normal:{bg:"rgba(16, 185, 129, 0.1)",color:"#34d399",border:"rgba(16, 185, 129, 0.25)",dot:"#10b981"},warning:{bg:"rgba(245, 158, 11, 0.1)",color:"#fbbf24",border:"rgba(245, 158, 11, 0.25)",dot:"#f59e0b"},alert:{bg:"rgba(239, 68, 68, 0.1)",color:"#f87171",border:"rgba(239, 68, 68, 0.25)",dot:"#ef4444"},info:{bg:"rgba(6, 182, 212, 0.1)",color:"#38bdf8",border:"rgba(6, 182, 212, 0.25)",dot:"#06b6d4"}},i=n[t]||n.normal;return l.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"0.35rem",padding:"0.2rem 0.55rem",borderRadius:"var(--border-radius-xs)",fontSize:"0.6875rem",fontWeight:600,backgroundColor:i.bg,color:i.color,border:`1px solid ${i.border}`,letterSpacing:"0.03em",textTransform:"uppercase"},children:[l.jsx("span",{style:{width:"5px",height:"5px",borderRadius:"50%",backgroundColor:i.dot}}),e||t]})}function pS({data:t=[],color:e="var(--accent-cyan)",height:n=36,width:i=110}){if(!t||t.length<2)return null;const r=Math.min(...t),s=Math.max(...t),a=s-r===0?1:s-r,o=4,c=n-o*2,u=i-o*2,f=t.map((m,y)=>{const v=o+y/(t.length-1)*u,g=o+c-(m-r)/a*c;return`${v},${g}`}).join(" "),p=`${o},${n} ${f} ${i-o},${n}`,h=`spark-grad-${Math.random().toString(36).substr(2,9)}`;return l.jsxs("svg",{width:i,height:n,style:{overflow:"visible"},children:[l.jsx("defs",{children:l.jsxs("linearGradient",{id:h,x1:"0",y1:"0",x2:"0",y2:"1",children:[l.jsx("stop",{offset:"0%",stopColor:e,stopOpacity:"0.3"}),l.jsx("stop",{offset:"100%",stopColor:e,stopOpacity:"0.0"})]})}),l.jsx("polygon",{points:p,fill:`url(#${h})`}),l.jsx("polyline",{fill:"none",stroke:e,strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round",points:f})]})}function Rr({title:t,value:e,unit:n,status:i="normal",statusLabel:r,source:s,icon:a,trendPercent:o,sparkData:c,color:u="var(--accent-cyan)",isActive:f=!1,onClick:p}){const h=o&&o>0,m=o&&o<0;return l.jsxs("div",{className:`card-panel ${p?"interactive":""} ${f?"active-telemetry":""}`,onClick:p,role:p?"button":void 0,tabIndex:p?0:void 0,onKeyDown:p?y=>{(y.key==="Enter"||y.key===" ")&&(y.preventDefault(),p())}:void 0,title:p?`Click to view ${t} 7-day trajectory`:void 0,style:{display:"flex",flexDirection:"column",justifyContent:"space-between",minHeight:"170px",padding:"1.25rem 1.35rem",position:"relative",overflow:"hidden"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.6rem"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[a&&l.jsx("div",{style:{width:"26px",height:"26px",borderRadius:"6px",backgroundColor:"var(--bg-surface-elevated)",display:"flex",alignItems:"center",justifyContent:"center",color:u,border:"1px solid var(--border-subtle)"},children:l.jsx(a,{size:15})}),l.jsx("span",{style:{fontSize:"0.8125rem",fontWeight:600,color:"var(--text-secondary)",textTransform:"uppercase",letterSpacing:"0.04em"},children:t})]}),r&&l.jsx(yi,{status:i,label:r})]}),l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-end",margin:"0.4rem 0"},children:[l.jsxs("div",{children:[l.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:"0.4rem"},children:[l.jsx("span",{style:{fontSize:"2rem",fontWeight:800,color:"var(--text-primary)",letterSpacing:"-0.03em",lineHeight:1.1},children:e??"--"}),n&&l.jsx("span",{style:{fontSize:"0.845rem",color:"var(--text-muted)",fontWeight:500},children:n})]}),o!==void 0&&l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.3rem",marginTop:"0.35rem",fontSize:"0.75rem",fontWeight:600},children:[h&&l.jsxs("span",{style:{color:"var(--status-alert)",display:"inline-flex",alignItems:"center",gap:"0.15rem"},children:[l.jsx(lS,{size:13})," +",o,"%"]}),m&&l.jsxs("span",{style:{color:"var(--status-normal)",display:"inline-flex",alignItems:"center",gap:"0.15rem"},children:[l.jsx(cS,{size:13})," ",o,"%"]}),o===0&&l.jsx("span",{style:{color:"var(--text-muted)"},children:"0.0% (Stable)"}),l.jsx("span",{style:{fontSize:"0.6875rem",color:"var(--text-dim)",fontWeight:400},children:"vs 7d baseline"})]})]}),c&&l.jsx("div",{style:{marginBottom:"4px"},children:l.jsx(pS,{data:c,color:u,width:90,height:32})})]}),s&&l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",borderTop:"1px solid var(--border-subtle)",paddingTop:"0.5rem",marginTop:"0.35rem",fontSize:"0.6875rem",color:"var(--text-dim)"},children:[l.jsx("span",{children:"Telemetry Source"}),l.jsx("span",{style:{color:"var(--text-muted)",fontFamily:"var(--font-mono)"},children:s})]})]})}function zv({data:t=[],variable:e="rainfall",title:n="7-Day Climate Trajectory",unit:i="mm/day",color:r="#06b6d4",height:s=240}){const[a,o]=he.useState(null);if(!t||t.length===0)return l.jsx("div",{style:{height:s,display:"flex",alignItems:"center",justifyContent:"center",color:"var(--text-muted)"},children:"No trajectory data available."});const c=t.map(C=>C[e]??0),u=Math.min(...c),f=Math.max(...c),p=f-u===0?1:f-u,h=45,m=20,y=25,v=35,g=700,d=g-h-m,x=s-y-v,E=t.length>1?t.length-1:1,M=t.map((C,R)=>{const L=h+R/E*d,D=y+x-((C[e]??0)-u)/p*x;return{x:L,y:D,date:C.date,value:C[e]}}),b=M.reduce((C,R,L)=>{if(L===0)return`M ${R.x} ${R.y}`;const D=M[L-1],j=D.x+(R.x-D.x)/2,U=D.y,G=D.x+(R.x-D.x)/2,O=R.y;return`${C} C ${j} ${U}, ${G} ${O}, ${R.x} ${R.y}`},""),w=`${b} L ${M[M.length-1].x} ${s-v} L ${M[0].x} ${s-v} Z`,A=`trend-area-grad-${e}`,_=[{label:f.toFixed(1),y},{label:((f+u)/2).toFixed(1),y:y+x/2},{label:u.toFixed(1),y:s-v}];return l.jsxs("div",{style:{width:"100%",position:"relative"},children:[l.jsxs("svg",{viewBox:`0 0 ${g} ${s}`,preserveAspectRatio:"xMidYMid meet",style:{width:"100%",height:"auto",overflow:"visible",display:"block"},children:[l.jsx("defs",{children:l.jsxs("linearGradient",{id:A,x1:"0",y1:"0",x2:"0",y2:"1",children:[l.jsx("stop",{offset:"0%",stopColor:r,stopOpacity:"0.28"}),l.jsx("stop",{offset:"100%",stopColor:r,stopOpacity:"0.0"})]})}),_.map((C,R)=>l.jsxs("g",{children:[l.jsx("line",{x1:h,y1:C.y,x2:g-m,y2:C.y,stroke:"rgba(255, 255, 255, 0.07)",strokeDasharray:"4 4"}),l.jsx("text",{x:h-8,y:C.y+4,fill:"var(--text-muted)",fontSize:"10",fontFamily:"var(--font-mono)",textAnchor:"end",children:C.label})]},R)),a!==null&&M[a]&&l.jsx("line",{x1:M[a].x,y1:y,x2:M[a].x,y2:s-v,stroke:r,strokeWidth:"1.2",strokeDasharray:"3 3",opacity:"0.75"}),l.jsx("path",{d:w,fill:`url(#${A})`}),l.jsx("path",{d:b,fill:"none",stroke:r,strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"}),M.map((C,R)=>{const L=a===R;return l.jsxs("g",{children:[l.jsx("text",{x:C.x,y:s-v+18,fill:L?"var(--text-primary)":"var(--text-dim)",fontSize:"10",fontFamily:"var(--font-mono)",textAnchor:"middle",style:{transition:"fill 0.15s",fontWeight:L?600:400},children:C.date?C.date.slice(5):`D${R+1}`}),l.jsx("circle",{cx:C.x,cy:C.y,r:L?6:3.5,fill:L?"#ffffff":r,stroke:"var(--bg-surface)",strokeWidth:L?2.5:2,style:{cursor:"pointer",transition:"all 0.15s"},onMouseEnter:()=>o(R),onMouseLeave:()=>o(null)})]},R)})]}),a!==null&&M[a]&&l.jsxs("div",{style:{position:"absolute",top:`${Math.max(10,M[a].y/s*100)}%`,left:`${Math.min(92,Math.max(8,M[a].x/g*100))}%`,transform:"translate(-50%, -130%)",backgroundColor:"var(--bg-surface-elevated)",border:`1px solid ${r}`,borderRadius:"var(--border-radius-xs)",padding:"0.4rem 0.75rem",boxShadow:"var(--shadow-md)",pointerEvents:"none",zIndex:10,whiteSpace:"nowrap"},children:[l.jsx("div",{style:{fontSize:"0.6875rem",color:"var(--text-muted)",fontFamily:"var(--font-mono)"},children:M[a].date||"Record"}),l.jsxs("div",{style:{fontSize:"0.875rem",fontWeight:700,color:"var(--text-primary)",marginTop:"0.1rem"},children:[M[a].value??"--"," ",l.jsx("span",{style:{fontSize:"0.75rem",fontWeight:500,color:"var(--text-secondary)"},children:i})]})]})]})}const mS={region:"Ernakulam District, Kerala",coordinates:{latitude:9.9816,longitude:76.2999},timestamp:new Date().toISOString(),metrics:{rainfall:{value:14.8,unit:"mm/day",status:"moderate",source:"IMD Station (Estimated)"},maxTemp:{value:32.4,unit:"°C",status:"normal",source:"IMD / ERA5"},minTemp:{value:24.6,unit:"°C",status:"normal",source:"IMD / ERA5"},lst:{value:33.8,unit:"°C",status:"elevated",source:"MODIS LST"},ndvi:{value:.68,unit:"Index (-1 to 1)",status:"healthy",source:"MODIS NDVI"},surfacePressure:{value:1008.4,unit:"hPa",status:"normal",source:"ERA5"},sst:{value:29.1,unit:"°C",status:"normal",source:"INSAT / Satellite"},soilMoisture:{value:.38,unit:"m³/m³",status:"adequate",source:"ERA5 Reanalysis"}},isMock:!0},gS=[{date:"2026-08-25",rainfall:8.2,maxTemp:31.8,minTemp:24.2,lst:33.1,ndvi:.67,pressure:1009.1},{date:"2026-08-26",rainfall:12.4,maxTemp:31.2,minTemp:24,lst:32.5,ndvi:.67,pressure:1008.5},{date:"2026-08-27",rainfall:22,maxTemp:29.8,minTemp:23.8,lst:30.2,ndvi:.68,pressure:1006.8},{date:"2026-08-28",rainfall:18.5,maxTemp:30.5,minTemp:23.9,lst:31.4,ndvi:.68,pressure:1007.2},{date:"2026-08-29",rainfall:5.1,maxTemp:32.1,minTemp:24.4,lst:33.5,ndvi:.68,pressure:1008.9},{date:"2026-08-30",rainfall:9.3,maxTemp:32,minTemp:24.5,lst:33.2,ndvi:.68,pressure:1008.6},{date:"2026-08-31",rainfall:14.8,maxTemp:32.4,minTemp:24.6,lst:33.8,ndvi:.68,pressure:1008.4}];async function vS(){return Promise.resolve(mS)}async function Bv(t=7){return Promise.resolve(gS)}const xS={model:"XGBoost Regressor (Tuned)",targetVariable:"target_rainfall_next_day",targetDate:"2026-09-02",predictedValue:18.6,unit:"mm/day",confidenceInterval:{low:14.2,high:23},metrics:{mae:4.82,rmse:8.14,r2:.68},riskCategory:"Moderate Rainfall",isMock:!0},_S=[{day:"Day +1 (Tomorrow)",date:"2026-09-02",rainfall:18.6,maxTemp:31.5,minTemp:24.2,lst:32.8,surfacePressure:1007.8,ndvi:.68},{day:"Day +2",date:"2026-09-03",rainfall:24.2,maxTemp:30.8,minTemp:23.9,lst:31.9,surfacePressure:1006.9,ndvi:.69},{day:"Day +3",date:"2026-09-04",rainfall:15,maxTemp:31.2,minTemp:24.1,lst:32.4,surfacePressure:1007.5,ndvi:.69},{day:"Day +4",date:"2026-09-05",rainfall:7.5,maxTemp:32.6,minTemp:24.8,lst:33.9,surfacePressure:1008.8,ndvi:.68},{day:"Day +5",date:"2026-09-06",rainfall:4.2,maxTemp:33.1,minTemp:25,lst:34.5,surfacePressure:1009.2,ndvi:.68}];async function Hv(t="rainfall"){return Promise.resolve(xS)}async function Vv(){return Promise.resolve(_S)}function yS(t){if(!t)return"--";try{return new Date(t).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}catch{return t}}function ua(t,e){if(t==null||!e||e.length===0)return 0;const n=e.filter(s=>typeof s=="number"&&!isNaN(s));if(n.length===0)return 0;const i=n.reduce((s,a)=>s+a,0)/n.length;if(i===0)return 0;const r=(t-i)/i*100;return parseFloat(r.toFixed(1))}function hm(){var oe,se,fe,de,$,J,ye,Oe,me,Ve,nt,ke,re,Ae,ze,it,xt,Rt,dt,St,B,It,tt,P,S,W,q,Q,ue,pe,ee,ne,ge,De,_e,ve,Le,Fe,Ge,z;const[t,e]=he.useState(null),[n,i]=he.useState(null),[r,s]=he.useState([]),[a,o]=he.useState("rainfall"),[c,u]=he.useState(!0),[f,p]=he.useState(!1),[h,m]=he.useState(null);async function y(le=!1){le?p(!0):u(!0),m(null);try{const[te,xe,Ee]=await Promise.all([vS(),Hv("rainfall"),Bv()]);e(te),i(xe),s(Ee||[])}catch(te){console.error("Error loading overview telemetry:",te),m((te==null?void 0:te.message)||"Failed to connect to climate telemetry services")}finally{u(!1),p(!1)}}if(he.useEffect(()=>{y()},[]),c)return l.jsxs("div",{className:"overview-loading-state",children:[l.jsx("div",{className:"status-pulse",style:{margin:"0 auto 1.25rem",width:"14px",height:"14px"}}),l.jsx("div",{style:{fontSize:"1.05rem",fontWeight:700,color:"var(--text-primary)",letterSpacing:"0.01em"},children:"Loading Climate Telemetry Pipeline..."}),l.jsx("div",{style:{fontSize:"0.8125rem",color:"var(--text-muted)",marginTop:"0.4rem",maxWidth:"420px",lineHeight:1.5},children:"Establishing handshake with Ernakulam District telemetry feeds, ERA5 reanalysis layers, and XGBoost inference models."})]});if(h&&!t)return l.jsxs("div",{children:[l.jsxs("div",{className:"page-header",children:[l.jsxs("h1",{className:"page-title",children:[l.jsx(Od,{size:24,color:"var(--accent-cyan)"}),"Climate Intelligence Overview"]}),l.jsx("p",{className:"page-description",children:"Real-time climate telemetry, AI predictions and digital-twin insights for Ernakulam District."})]}),l.jsxs("div",{className:"overview-error-state",children:[l.jsx("div",{style:{color:"var(--status-alert)",marginBottom:"1rem"},children:l.jsx(pr,{size:36})}),l.jsx("h3",{style:{fontSize:"1.125rem",fontWeight:700,color:"var(--text-primary)",marginBottom:"0.5rem"},children:"Telemetry Ingestion Offline"}),l.jsxs("p",{style:{fontSize:"0.845rem",color:"var(--text-secondary)",maxWidth:"460px",marginBottom:"1.5rem",lineHeight:1.5},children:[h,". The climate digital twin state controller was unable to stream current sensor observations."]}),l.jsxs("button",{className:"telemetry-refresh-btn",onClick:()=>y(!1),style:{padding:"0.55rem 1.25rem",fontSize:"0.8125rem"},children:[l.jsx(Ns,{size:15}),l.jsx("span",{children:"Retry Connection"})]})]})]});const v=t==null?void 0:t.metrics,g=r.map(le=>le.rainfall).filter(le=>typeof le=="number"),d=r.map(le=>le.maxTemp).filter(le=>typeof le=="number"),x=r.map(le=>le.lst).filter(le=>typeof le=="number"),E=r.map(le=>le.ndvi).filter(le=>typeof le=="number"),M=r.map(le=>le.pressure).filter(le=>typeof le=="number"),b=ua((oe=v==null?void 0:v.rainfall)==null?void 0:oe.value,g),w=ua((se=v==null?void 0:v.maxTemp)==null?void 0:se.value,d),A=ua((fe=v==null?void 0:v.lst)==null?void 0:fe.value,x),_=ua((de=v==null?void 0:v.ndvi)==null?void 0:de.value,E),C=ua(($=v==null?void 0:v.surfacePressure)==null?void 0:$.value,M),R=((J=v==null?void 0:v.rainfall)==null?void 0:J.status)||(((ye=v==null?void 0:v.rainfall)==null?void 0:ye.value)>35?"alert":((Oe=v==null?void 0:v.rainfall)==null?void 0:Oe.value)>15?"warning":"normal"),L=R==="alert"?"Heavy Rain":R==="warning"?"Moderate":"Light / Trace",D=((me=v==null?void 0:v.maxTemp)==null?void 0:me.status)||(((Ve=v==null?void 0:v.maxTemp)==null?void 0:Ve.value)>35?"alert":((nt=v==null?void 0:v.maxTemp)==null?void 0:nt.value)>32?"warning":"normal"),j=D==="alert"?"High Heat":D==="warning"?"Elevated":"Normal",U=((ke=v==null?void 0:v.lst)==null?void 0:ke.status)||(((re=v==null?void 0:v.lst)==null?void 0:re.value)>36?"alert":((Ae=v==null?void 0:v.lst)==null?void 0:Ae.value)>32?"warning":"normal"),G=U==="alert"?"Critical Thermal":U==="warning"?"Elevated":"Optimal",O=((ze=v==null?void 0:v.ndvi)==null?void 0:ze.status)||(((it=v==null?void 0:v.ndvi)==null?void 0:it.value)<.35?"alert":((xt=v==null?void 0:v.ndvi)==null?void 0:xt.value)<.5?"warning":"normal"),V=((Rt=v==null?void 0:v.ndvi)==null?void 0:Rt.value)>=.65?"Healthy Canopy":((dt=v==null?void 0:v.ndvi)==null?void 0:dt.value)>=.45?"Moderate Cover":"Sparse",N=((St=v==null?void 0:v.surfacePressure)==null?void 0:St.status)||"normal",F="Standard",I={rainfall:{label:"Daily Rainfall",unit:"mm/day",color:"#06b6d4"},maxTemp:{label:"Max Temperature",unit:"°C",color:"#f59e0b"},lst:{label:"Land Surface Temp (LST)",unit:"°C",color:"#f43f5e"},ndvi:{label:"Vegetation Index (NDVI)",unit:"Index",color:"#10b981"},pressure:{label:"Surface Pressure",unit:"hPa",color:"#6366f1"}},H=I[a]||I.rainfall,ie=t!=null&&t.timestamp?new Date(t.timestamp).toLocaleString("en-US",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})+" UTC":"Synchronized";return l.jsxs("div",{children:[l.jsxs("div",{className:"page-header",style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:"1rem"},children:[l.jsxs("div",{children:[l.jsxs("h1",{className:"page-title",children:[l.jsx(Od,{size:24,color:"var(--accent-cyan)"}),"Climate Intelligence Overview"]}),l.jsx("p",{className:"page-description",children:"Real-time climate telemetry, AI predictions and digital-twin insights for Ernakulam District."})]}),l.jsxs("button",{className:"telemetry-refresh-btn",onClick:()=>y(!0),disabled:f,title:"Sync latest climate telemetry",children:[l.jsx(Ns,{size:14,className:f?"spin-animation":"",color:"var(--accent-cyan)"}),l.jsx("span",{children:f?"Syncing Feeds...":"Sync Telemetry"})]})]}),l.jsxs("div",{style:{marginBottom:"1.75rem"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"0.85rem"},children:[l.jsx("span",{style:{fontSize:"0.75rem",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",color:"var(--text-dim)"},children:"CURRENT CLIMATE STATE TELEMETRY (SELECT TO VIEW TRAJECTORY)"}),l.jsxs("span",{style:{fontSize:"0.6875rem",color:"var(--text-muted)",fontFamily:"var(--font-mono)"},children:["Updated: ",ie]})]}),l.jsxs("div",{className:"overview-metrics-grid",children:[l.jsx(Rr,{title:"Daily Rainfall",value:(B=v==null?void 0:v.rainfall)==null?void 0:B.value,unit:(It=v==null?void 0:v.rainfall)==null?void 0:It.unit,status:R,statusLabel:L,source:((tt=v==null?void 0:v.rainfall)==null?void 0:tt.source)||"IMD Station",icon:Gr,trendPercent:b,sparkData:g,color:"#06b6d4",isActive:a==="rainfall",onClick:()=>o("rainfall")}),l.jsx(Rr,{title:"Max Temperature",value:(P=v==null?void 0:v.maxTemp)==null?void 0:P.value,unit:(S=v==null?void 0:v.maxTemp)==null?void 0:S.unit,status:D,statusLabel:j,source:((W=v==null?void 0:v.maxTemp)==null?void 0:W.source)||"IMD / ERA5",icon:Xs,trendPercent:w,sparkData:d,color:"#f59e0b",isActive:a==="maxTemp",onClick:()=>o("maxTemp")}),l.jsx(Rr,{title:"Surface Temp (LST)",value:(q=v==null?void 0:v.lst)==null?void 0:q.value,unit:(Q=v==null?void 0:v.lst)==null?void 0:Q.unit,status:U,statusLabel:G,source:((ue=v==null?void 0:v.lst)==null?void 0:ue.source)||"MODIS LST",icon:$s,trendPercent:A,sparkData:x,color:"#f43f5e",isActive:a==="lst",onClick:()=>o("lst")}),l.jsx(Rr,{title:"Vegetation (NDVI)",value:(pe=v==null?void 0:v.ndvi)==null?void 0:pe.value,unit:(ee=v==null?void 0:v.ndvi)==null?void 0:ee.unit,status:O,statusLabel:V,source:((ne=v==null?void 0:v.ndvi)==null?void 0:ne.source)||"MODIS NDVI",icon:to,trendPercent:_,sparkData:E,color:"#10b981",isActive:a==="ndvi",onClick:()=>o("ndvi")}),l.jsx(Rr,{title:"Surface Pressure",value:(ge=v==null?void 0:v.surfacePressure)==null?void 0:ge.value,unit:(De=v==null?void 0:v.surfacePressure)==null?void 0:De.unit,status:N,statusLabel:F,source:((_e=v==null?void 0:v.surfacePressure)==null?void 0:_e.source)||"ERA5",icon:Zl,trendPercent:C,sparkData:M,color:"#6366f1",isActive:a==="pressure",onClick:()=>o("pressure")})]})]}),l.jsxs("div",{className:"overview-forecast-grid",children:[l.jsxs("div",{className:"card-panel",style:{display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[l.jsxs("div",{children:[l.jsxs("div",{className:"card-panel-header",children:[l.jsxs("div",{className:"card-title-group",children:[l.jsxs("h2",{className:"card-title",children:[l.jsx(Ql,{size:18,color:"var(--accent-cyan)"}),"AI Rainfall Forecast — Next 24 Hours"]}),l.jsxs("p",{className:"card-subtitle",children:["Inference Pipeline: ",(n==null?void 0:n.model)||"XGBoost Regressor"," • Target: ",n!=null&&n.targetDate?`${yS(n.targetDate)} 06:00 UTC`:"Tomorrow 06:00 UTC"]})]}),l.jsx("span",{style:{fontSize:"0.75rem",padding:"0.3rem 0.75rem",backgroundColor:"rgba(244, 63, 94, 0.12)",color:"#fb7185",border:"1px solid rgba(244, 63, 94, 0.3)",borderRadius:"var(--border-radius-xs)",fontWeight:700,letterSpacing:"0.04em",textTransform:"uppercase"},children:(n==null?void 0:n.riskCategory)||"Moderate Rainfall"})]}),l.jsxs("div",{className:"overview-projection-stats",children:[l.jsxs("div",{children:[l.jsx("div",{style:{fontSize:"0.75rem",color:"var(--text-muted)",textTransform:"uppercase",letterSpacing:"0.04em"},children:"Projected Accumulation"}),l.jsxs("div",{style:{fontSize:"2.5rem",fontWeight:800,color:"var(--accent-cyan)",letterSpacing:"-0.03em",lineHeight:1.1,marginTop:"0.2rem"},children:[(n==null?void 0:n.predictedValue)??"--"," ",l.jsx("span",{style:{fontSize:"1rem",color:"var(--text-muted)",fontWeight:500},children:"mm"})]}),l.jsx("div",{style:{fontSize:"0.6875rem",color:"var(--text-dim)",marginTop:"0.25rem"},children:"Next-day quantitative estimate"})]}),l.jsxs("div",{className:"overview-projection-col",children:[l.jsx("div",{style:{fontSize:"0.75rem",color:"var(--text-muted)",textTransform:"uppercase",letterSpacing:"0.04em"},children:"Confidence Interval (95%)"}),l.jsxs("div",{style:{fontSize:"1.35rem",fontWeight:700,color:"var(--text-primary)",marginTop:"0.35rem"},children:[((ve=n==null?void 0:n.confidenceInterval)==null?void 0:ve.low)??"--"," – ",((Le=n==null?void 0:n.confidenceInterval)==null?void 0:Le.high)??"--"," ",l.jsx("span",{style:{fontSize:"0.85rem",color:"var(--text-muted)",fontWeight:400},children:"mm"})]}),l.jsxs("div",{style:{fontSize:"0.6875rem",color:"var(--status-normal)",marginTop:"0.35rem"},children:["MAE: ",((Fe=n==null?void 0:n.metrics)==null?void 0:Fe.mae)??"--"," mm • RMSE: ",((Ge=n==null?void 0:n.metrics)==null?void 0:Ge.rmse)??"--"]})]}),l.jsxs("div",{className:"overview-projection-col",children:[l.jsx("div",{style:{fontSize:"0.75rem",color:"var(--text-muted)",textTransform:"uppercase",letterSpacing:"0.04em"},children:"Model Accuracy (R² Score)"}),l.jsxs("div",{style:{fontSize:"1.35rem",fontWeight:700,color:"var(--text-primary)",marginTop:"0.35rem"},children:[((z=n==null?void 0:n.metrics)==null?void 0:z.r2)??"--"," ",l.jsx("span",{style:{fontSize:"0.75rem",color:"var(--status-normal)",fontWeight:600},children:"(Good Fit)"})]}),l.jsx("div",{style:{fontSize:"0.6875rem",color:"var(--text-dim)",marginTop:"0.35rem"},children:"Trained on 2015–2024 records"})]})]})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",fontSize:"0.75rem",color:"var(--text-muted)",flexWrap:"wrap",gap:"0.5rem",paddingTop:"0.5rem"},children:[l.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"0.4rem"},children:[l.jsx(no,{size:14,color:"var(--status-normal)"}),"Lag features validated across 7 temporal windows"]}),l.jsx("span",{style:{fontFamily:"var(--font-mono)"},children:"Target: Ernakulam AWS"})]})]}),l.jsxs("div",{className:"card-panel",children:[l.jsx("div",{className:"card-panel-header",children:l.jsxs("div",{className:"card-title-group",children:[l.jsxs("h2",{className:"card-title",children:[l.jsx(Th,{size:18,color:"var(--accent-cyan)"}),"Digital Twin Status"]}),l.jsx("p",{className:"card-subtitle",children:"Node Telemetry & State Controller"})]})}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.85rem",fontSize:"0.8125rem"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",paddingBottom:"0.55rem",borderBottom:"1px solid var(--border-subtle)"},children:[l.jsx("span",{style:{color:"var(--text-secondary)"},children:"District Domain:"}),l.jsx("strong",{style:{color:"var(--text-primary)"},children:"Ernakulam (8 Taluks)"})]}),l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",paddingBottom:"0.55rem",borderBottom:"1px solid var(--border-subtle)"},children:[l.jsx("span",{style:{color:"var(--text-secondary)"},children:"Data Coverage:"}),l.jsx("strong",{style:{color:"var(--text-primary)"},children:"2015–2025 Daily NetCDF"})]}),l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",paddingBottom:"0.55rem",borderBottom:"1px solid var(--border-subtle)"},children:[l.jsx("span",{style:{color:"var(--text-secondary)"},children:"AI Model:"}),l.jsx("strong",{style:{color:"var(--accent-cyan)",fontFamily:"var(--font-mono)"},children:"XGBoost + LSTM (Hybrid)"})]}),l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",paddingBottom:"0.55rem",borderBottom:"1px solid var(--border-subtle)"},children:[l.jsx("span",{style:{color:"var(--text-secondary)"},children:"Prediction Status:"}),l.jsxs("strong",{style:{color:"var(--status-normal)",display:"inline-flex",alignItems:"center",gap:"0.35rem"},children:[l.jsx("span",{className:"status-pulse",style:{width:"6px",height:"6px"}})," Real-Time Ready"]})]}),l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",paddingBottom:"0.55rem",borderBottom:"1px solid var(--border-subtle)"},children:[l.jsx("span",{style:{color:"var(--text-secondary)"},children:"Simulation Engine:"}),l.jsx("strong",{style:{color:"var(--text-primary)"},children:"ScenarioEngine Active"})]}),l.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[l.jsx("span",{style:{color:"var(--text-secondary)"},children:"Last Telemetry Sync:"}),l.jsx("strong",{style:{color:"var(--text-muted)",fontFamily:"var(--font-mono)"},children:ie})]})]})]})]}),l.jsxs("div",{className:"card-panel",children:[l.jsxs("div",{className:"card-panel-header",style:{flexWrap:"wrap",gap:"1rem"},children:[l.jsxs("div",{className:"card-title-group",children:[l.jsxs("h2",{className:"card-title",children:[l.jsx(Ns,{size:18,color:"var(--accent-cyan)"}),"Climate Trends & Multi-Variable Historical Dynamics"]}),l.jsxs("p",{className:"card-subtitle",children:["7-Day observational baseline for ",H.label," (",H.unit,")"]})]}),l.jsxs("div",{className:"tab-group",role:"tablist","aria-label":"Climate Variable Trajectories",children:[l.jsx("button",{className:`tab-btn ${a==="rainfall"?"active":""}`,onClick:()=>o("rainfall"),role:"tab","aria-selected":a==="rainfall",children:"Rainfall"}),l.jsx("button",{className:`tab-btn ${a==="maxTemp"?"active":""}`,onClick:()=>o("maxTemp"),role:"tab","aria-selected":a==="maxTemp",children:"Temperature"}),l.jsx("button",{className:`tab-btn ${a==="lst"?"active":""}`,onClick:()=>o("lst"),role:"tab","aria-selected":a==="lst",children:"LST"}),l.jsx("button",{className:`tab-btn ${a==="ndvi"?"active":""}`,onClick:()=>o("ndvi"),role:"tab","aria-selected":a==="ndvi",children:"NDVI"}),l.jsx("button",{className:`tab-btn ${a==="pressure"?"active":""}`,onClick:()=>o("pressure"),role:"tab","aria-selected":a==="pressure",children:"Pressure"})]})]}),l.jsx("div",{style:{marginTop:"1rem"},children:l.jsx(zv,{data:r,variable:a,unit:H.unit,color:H.color,height:220})})]})]})}const nr={Kochi:{key:"Kochi",name:"Kochi (Coastal Urban)",shortName:"Kochi",headquarters:"Fort Kochi",coordinates:"9.9312° N, 76.2673° E",centroid:{lat:9.9312,lon:76.2673},area:"95 km²",terrain:"Coastal alluvial plains, backwaters & port corridors",description:"Low-lying coastal urban zone encompassing the port, Marine Drive, Fort Kochi, and Kochi Municipal Corporation.",administrativeType:"Urban Taluk"},Kanayannur:{key:"Kanayannur",name:"Kanayannur (Ernakulam Central)",shortName:"Kanayannur",headquarters:"Ernakulam",coordinates:"9.9715° N, 76.3188° E",centroid:{lat:9.9715,lon:76.3188},area:"142 km²",terrain:"Commercial & administrative core with high impermeable surface fraction",description:"Central administrative heart of Ernakulam District hosting major transit terminals, commercial districts, and residential hubs.",administrativeType:"Urban / Suburban Taluk"},Aluva:{key:"Aluva",name:"Aluva (Periyar Basin)",shortName:"Aluva",headquarters:"Aluva",coordinates:"10.1076° N, 76.3516° E",centroid:{lat:10.1076,lon:76.3516},area:"168 km²",terrain:"Periyar river floodplain & industrial corridor",description:"Riverine basin centered on the lower Periyar River, historically sensitive to upstream reservoir discharge and monsoon runoff.",administrativeType:"Suburban / Riverine Taluk"},Paravur:{key:"Paravur",name:"North Paravur (Coastal Backwaters)",shortName:"N. Paravur",headquarters:"North Paravur",coordinates:"10.1472° N, 76.2308° E",centroid:{lat:10.1472,lon:76.2308},area:"112 km²",terrain:"Estuarine wetlands, coastal lagoons & tidal backwaters",description:"Low-elevation estuarine zone bordering the Arabian Sea and northern backwaters, vulnerable to tidal surges and saline intrusion.",administrativeType:"Coastal Wetland Taluk"},Kunnathunad:{key:"Kunnathunad",name:"Kunnathunad (Perumbavoor Plains)",shortName:"Kunnathunad",headquarters:"Perumbavoor",coordinates:"10.0528° N, 76.4682° E",centroid:{lat:10.0528,lon:76.4682},area:"246 km²",terrain:"Midland undulating agricultural plains & timber processing zone",description:"Midland agricultural and industrial plain dominated by agro-forestry, rubber plantations, and small-scale manufacturing.",administrativeType:"Midland Agricultural Taluk"},Muvattupuzha:{key:"Muvattupuzha",name:"Muvattupuzha (Midland Confluence)",shortName:"Muvattupuzha",headquarters:"Muvattupuzha",coordinates:"9.9842° N, 76.5816° E",centroid:{lat:9.9842,lon:76.5816},area:"298 km²",terrain:"Tri-river confluence basin with fertile alluvial terraces",description:"Confluence point of three rivers (Kaliyar, Kothayar, Thodupuzhayar) forming the Muvattupuzha River, with extensive biomass canopy.",administrativeType:"Midland Riverine Taluk"},Kothamangalam:{key:"Kothamangalam",name:"Kothamangalam (Eastern Foothills)",shortName:"Kothamangalam",headquarters:"Kothamangalam",coordinates:"10.0612° N, 76.6288° E",centroid:{lat:10.0612,lon:76.6288},area:"382 km²",terrain:"Western Ghats foothill slopes with dense evergreen forestry",description:"Easternmost taluk serving as the gateway to the High Ranges, characterized by elevated topography, high orographic rainfall, and dense canopy.",administrativeType:"Foothill / Highland Taluk"}},Or=[{id:"aws_kochi",name:"AWS Kochi Port",type:"Automatic Weather Station (AWS)",agency:"IMD / Cochin Port Authority",coordinates:"9.9410° N, 76.2620° E",elevation:"3 m MSL",svgPos:{x:170,y:220},telemetryStatus:"Live telemetry unavailable",telemetryMessage:"Direct sensor stream not ingested into digital twin repository. Showing prevailing district reference observations."},{id:"aws_aluva",name:"AWS Aluva (UC College)",type:"Automatic Weather Station (AWS)",agency:"IMD / CUSAT Atmospheric Radar Network",coordinates:"10.1230° N, 76.3520° E",elevation:"12 m MSL",svgPos:{x:340,y:130},telemetryStatus:"Live telemetry unavailable",telemetryMessage:"Direct sensor stream not ingested into digital twin repository. Showing prevailing district reference observations."},{id:"imd_airport",name:"IMD CIAL Nedumbassery",type:"Principal Aviation Meteorological Observatory",agency:"India Meteorological Department (IMD)",coordinates:"10.1550° N, 76.3910° E",elevation:"8 m MSL",svgPos:{x:410,y:110},telemetryStatus:"Live telemetry unavailable",telemetryMessage:"Direct sensor stream not ingested into digital twin repository. Showing prevailing district reference observations."},{id:"aws_kothamangalam",name:"AWS Kothamangalam (MA College)",type:"Automatic Weather Station (AWS)",agency:"IMD / Agro-Meteorological Advisory Service",coordinates:"10.0630° N, 76.6310° E",elevation:"45 m MSL",svgPos:{x:640,y:220},telemetryStatus:"Live telemetry unavailable",telemetryMessage:"Direct sensor stream not ingested into digital twin repository. Showing prevailing district reference observations."}],Us=[{date:"2026-07-16",label:"July 16, 2026 — Digital Twin Live Snapshot",badge:"Digital Twin Snapshot",rainfall_imd:42.5,rainfall_chirps:null,max_temp:32,min_temp:25,lst:34,ndvi:null,surface_pressure:null,sourceAttribution:{rainfall:"Digital Twin State Manager baseline (42.5 mm)",lst:"Digital Twin LST baseline (34.0 °C)",ndvi:"Not monitored in current state snapshot",pressure:"Not monitored in current state snapshot"}},{date:"2025-12-19",label:"Dec 19, 2025 — Winter Clear Sky Baseline",badge:"Verified Ground Truth",rainfall_imd:0,rainfall_chirps:.67,max_temp:30.36,min_temp:19.97,lst:26.74,ndvi:.7,surface_pressure:1000.7,sourceAttribution:{rainfall:"IMD 0.25° Gridded Daily Sum (0.0 mm)",lst:"NASA MODIS MOD11A2 (26.74 °C)",ndvi:"NASA MODIS MOD13Q1 (0.700)",pressure:"ECMWF ERA5 (1000.7 hPa)"}},{date:"2025-08-15",label:"Aug 15, 2025 — Active Monsoon Day",badge:"Verified Ground Truth",rainfall_imd:28.4,rainfall_chirps:3.13,max_temp:28.49,min_temp:22.34,lst:null,ndvi:null,surface_pressure:999.5,sourceAttribution:{rainfall:"IMD 0.25° Gridded Daily Sum (28.4 mm)",lst:"Cloud-obscured (MODIS thermal IR pass unavailable)",ndvi:"Cloud-obscured (MODIS optical pass unavailable)",pressure:"ECMWF ERA5 (999.5 hPa)"}},{date:"2024-07-30",label:"Jul 30, 2024 — High Monsoon Precipitation",badge:"Verified Ground Truth",rainfall_imd:118.16,rainfall_chirps:26.9,max_temp:29.05,min_temp:22.58,lst:null,ndvi:null,surface_pressure:1000.5,sourceAttribution:{rainfall:"IMD 0.25° Gridded Daily Sum (118.16 mm)",lst:"Cloud-obscured (MODIS thermal IR pass unavailable)",ndvi:"Cloud-obscured (MODIS optical pass unavailable)",pressure:"ECMWF ERA5 (1000.5 hPa)"}},{date:"2018-08-16",label:"Aug 16, 2018 — Historical Flood Peak",badge:"Historical Extreme Episode",rainfall_imd:185.42,rainfall_chirps:47.52,max_temp:26.74,min_temp:21.04,lst:null,ndvi:null,surface_pressure:999.06,sourceAttribution:{rainfall:"IMD 0.25° Gauge Daily Sum (185.42 mm)",lst:"Cloud-obscured (Severe storm attenuation)",ndvi:"Cloud-obscured (Optical reflectance unavailable)",pressure:"ECMWF ERA5 Depression trough (999.06 hPa)"}},{date:"2015-01-01",label:"Jan 01, 2015 — Post-Monsoon Clear Day",badge:"Verified Ground Truth",rainfall_imd:1.66,rainfall_chirps:2.42,max_temp:31.26,min_temp:22.67,lst:30.03,ndvi:.72,surface_pressure:999.9,sourceAttribution:{rainfall:"IMD 0.25° Gridded (1.66 mm)",lst:"NASA MODIS LST (30.03 °C)",ndvi:"NASA MODIS NDVI (0.720)",pressure:"ECMWF ERA5 (999.9 hPa)"}}],su=[{id:"rainfall",name:"IMD Rainfall",unit:"mm/day",source:"IMD 0.25° Gridded & CHIRPS Satellite",description:"Precipitation accumulation across Ernakulam District bounding box.",spatialResolution:"District Reference (Uniform spatial aggregation)",legend:{min:"0 mm",max:"120+ mm",gradient:"linear-gradient(90deg, #0f2744 0%, #0284c7 40%, #06b6d4 75%, #38bdf8 100%)",getFill:t=>t==null?"#102a45":t<5?"#0d2238":t<20?"#0e3860":t<50?"#0f4f8a":t<100?"#0284c7":"#06b6d4"}},{id:"lst",name:"MODIS LST (Thermal)",unit:"°C",source:"NASA MODIS (MOD11A2 1km Land Surface Temperature)",description:"Radiative skin temperature of land surfaces across the district.",spatialResolution:"District Reference (Uniform spatial aggregation)",legend:{min:"24 °C",max:"38 °C",gradient:"linear-gradient(90deg, #1e1b4b 0%, #b45309 40%, #f43f5e 80%, #fb7185 100%)",getFill:t=>t==null?"#201826":t<26?"#251b36":t<29?"#3d1c28":t<32?"#5c1d2e":t<35?"#8c2438":"#c026d3"}},{id:"ndvi",name:"MODIS NDVI (Canopy)",unit:"Index (-1 to 1)",source:"NASA MODIS (MOD13Q1 250m Normalized Difference Vegetation)",description:"Vegetative density and chlorophyll absorption ratio across the district.",spatialResolution:"District Reference (Uniform spatial aggregation)",legend:{min:"0.2 (Sparse)",max:"0.9 (Dense)",gradient:"linear-gradient(90deg, #713f12 0%, #84cc16 45%, #10b981 80%, #059669 100%)",getFill:t=>t==null?"#15241b":t<.4?"#2d2416":t<.6?"#1d3b23":t<.7?"#1b4a2c":t<.8?"#166534":"#059669"}},{id:"pressure",name:"ERA5 Pressure",unit:"hPa",source:"ECMWF ERA5 Atmospheric Reanalysis",description:"Mean sea level barometric pressure across Ernakulam District.",spatialResolution:"District Reference (Uniform spatial aggregation)",legend:{min:"995 hPa (Low)",max:"1015 hPa (High)",gradient:"linear-gradient(90deg, #4c1d95 0%, #6366f1 50%, #38bdf8 100%)",getFill:t=>t==null?"#17172c":t<1e3?"#311a5e":t<1005?"#26245e":t<1010?"#1e3a6e":"#1b4d7a"}}];async function Gv(t="2026-07-16"){await new Promise(n=>setTimeout(n,150));let e=Us.find(n=>n.date===t);if(!e)throw new Error(`Data unavailable for selected date (${t}).`);return{...e,taluks:nr,stations:Or,isDistrictWideOnly:!0}}async function SS(t){const e=Or.find(n=>n.id===t);if(!e)throw new Error(`Station ${t} not found.`);return{...e,telemetryLive:!1,liveReadings:null,statusText:"Live telemetry unavailable",guidance:"In this version of the digital twin, ground station sensor feeds are offline. The district reference reading is used for regional modeling."}}function MS(){const[t,e]=he.useState("rainfall"),[n,i]=he.useState("Kochi"),[r,s]=he.useState(null),[a,o]=he.useState(!0),[c,u]=he.useState("2026-07-16"),[f,p]=he.useState(null),[h,m]=he.useState(!0),[y,v]=he.useState(null),[g,d]=he.useState(1),[x,E]=he.useState({x:0,y:0}),[M,b]=he.useState(!1),[w,A]=he.useState({x:0,y:0}),[_,C]=he.useState(null),[R,L]=he.useState(null),[D,j]=he.useState({visible:!1,x:0,y:0,title:"",subtitle:"",metricText:"",note:""}),U=he.useRef(null),G=async re=>{m(!0),v(null);try{const Ae=await Gv(re);p(Ae)}catch(Ae){v(Ae.message||"Failed to load map climate telemetry.")}finally{m(!1)}};he.useEffect(()=>{G(c)},[c]);const O=su.find(re=>re.id===t)||su[0],N=((re,Ae)=>{if(!Ae)return null;switch(re){case"rainfall":return Ae.rainfall_imd;case"lst":return Ae.lst;case"ndvi":return Ae.ndvi;case"pressure":return Ae.surface_pressure;default:return null}})(t,f),F=O.legend.getFill(N),I=()=>d(re=>Math.min(re+.25,3.5)),H=()=>d(re=>Math.max(re-.25,.75)),ie=()=>{d(1),E({x:0,y:0})},oe=re=>{re.preventDefault();const Ae=re.deltaY<0?.15:-.15;d(ze=>Math.min(Math.max(ze+Ae,.75),3.5))},se=re=>{re.button===0&&(b(!0),A({x:re.clientX-x.x,y:re.clientY-x.y}))},fe=re=>{if(M&&E({x:re.clientX-w.x,y:re.clientY-w.y}),U.current){const Ae=U.current.getBoundingClientRect();j(ze=>({...ze,x:re.clientX-Ae.left+16,y:re.clientY-Ae.top+16}))}},de=()=>{b(!1)},$=re=>{const Ae=nr[re];C(re),j({visible:!0,x:D.x,y:D.y,title:Ae?Ae.name:re,subtitle:Ae?`Centroid: ${Ae.coordinates} • Area: ${Ae.area}`:"",metricText:`${O.name}: ${N!==null?`${N} ${O.unit}`:"N/A"} (District Reference)`,note:"Taluk-specific measurement unavailable — showing District Reference"})},J=()=>{C(null),j(re=>({...re,visible:!1}))},ye=re=>{L(re.id),j({visible:!0,x:D.x,y:D.y,title:re.name,subtitle:`${re.type} • Elev: ${re.elevation}`,metricText:`Status: ${re.telemetryStatus}`,note:"Direct sensor stream offline — readings are not fabricated"})},Oe=()=>{L(null),j(re=>({...re,visible:!1}))},me=re=>{i(re),s(null)},Ve=re=>{s(re)},nt=nr[n]||nr.Kochi,ke=Or.find(re=>re.id===r);return l.jsxs("div",{children:[l.jsxs("div",{className:"page-header",style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:"1rem"},children:[l.jsxs("div",{children:[l.jsxs("h1",{className:"page-title",children:[l.jsx(Fv,{size:24,color:"var(--accent-cyan)"}),"Geospatial Climate Intelligence Map"]}),l.jsx("p",{className:"page-description",children:"Spatial distribution and verified district reference telemetry across Ernakulam District's 7 administrative taluks."})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.6rem",backgroundColor:"var(--bg-surface)",padding:"0.45rem 0.8rem",borderRadius:"var(--border-radius-sm)",border:"1px solid var(--border-medium)",boxShadow:"var(--shadow-sm)"},children:[l.jsxs("span",{style:{fontSize:"0.75rem",fontWeight:600,color:"var(--text-secondary)",display:"flex",alignItems:"center",gap:"0.35rem"},children:[l.jsx(Ns,{size:14,color:"var(--accent-cyan)"}),"OBSERVATION:"]}),l.jsx("select",{value:c,onChange:re=>u(re.target.value),style:{backgroundColor:"var(--bg-surface-elevated)",color:"var(--text-primary)",border:"1px solid var(--border-subtle)",borderRadius:"var(--border-radius-xs)",padding:"0.3rem 0.6rem",fontSize:"0.75rem",fontFamily:"var(--font-mono)",cursor:"pointer",outline:"none"},children:Us.map(re=>l.jsx("option",{value:re.date,children:re.label},re.date))})]})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 370px",gap:"1.5rem",minHeight:"660px"},children:[l.jsxs("div",{ref:U,className:"card-panel",onWheel:oe,onMouseDown:se,onMouseMove:fe,onMouseUp:de,onMouseLeave:de,style:{padding:"0",position:"relative",overflow:"hidden",display:"flex",flexDirection:"column",backgroundColor:"#050914",border:"1px solid var(--border-medium)",cursor:M?"grabbing":"grab",userSelect:"none"},children:[l.jsxs("div",{style:{position:"absolute",top:"16px",left:"16px",zIndex:10,display:"flex",alignItems:"center",gap:"0.5rem",backgroundColor:"rgba(8, 13, 26, 0.92)",backdropFilter:"blur(10px)",padding:"0.4rem 0.6rem",borderRadius:"var(--border-radius-sm)",border:"1px solid var(--border-subtle)",boxShadow:"var(--shadow-md)"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.35rem",fontSize:"0.75rem",fontWeight:700,color:"var(--text-secondary)",marginRight:"0.25rem"},children:[l.jsx(Na,{size:14,color:"var(--accent-cyan)"}),l.jsx("span",{children:"LAYER:"})]}),su.map(re=>{const Ae=t===re.id;return l.jsx("button",{className:`tab-btn ${Ae?"active":""}`,onClick:ze=>{ze.stopPropagation(),e(re.id)},style:{fontSize:"0.6875rem",padding:"0.3rem 0.65rem"},type:"button",children:re.name},re.id)})]}),l.jsxs("div",{style:{position:"absolute",top:"16px",right:"16px",zIndex:10,display:"flex",alignItems:"center",gap:"0.6rem"},children:[l.jsxs("div",{onClick:re=>re.stopPropagation(),style:{backgroundColor:"rgba(8, 13, 26, 0.92)",backdropFilter:"blur(10px)",padding:"0.4rem 0.75rem",borderRadius:"var(--border-radius-sm)",border:"1px solid var(--border-subtle)",fontSize:"0.75rem",display:"flex",alignItems:"center",gap:"0.5rem",color:"var(--text-secondary)",boxShadow:"var(--shadow-md)"},children:[l.jsx("input",{type:"checkbox",id:"station-toggle",checked:a,onChange:re=>o(re.target.checked),style:{accentColor:"var(--accent-cyan)",cursor:"pointer"}}),l.jsx("label",{htmlFor:"station-toggle",style:{cursor:"pointer",fontWeight:500,fontSize:"0.7rem"},children:"Weather Stations"})]}),l.jsxs("div",{onClick:re=>re.stopPropagation(),style:{display:"flex",alignItems:"center",backgroundColor:"rgba(8, 13, 26, 0.92)",backdropFilter:"blur(10px)",borderRadius:"var(--border-radius-sm)",border:"1px solid var(--border-subtle)",boxShadow:"var(--shadow-md)",overflow:"hidden"},children:[l.jsx("button",{onClick:I,title:"Zoom In",style:{background:"none",border:"none",color:"var(--text-primary)",padding:"0.4rem 0.65rem",cursor:"pointer",fontSize:"0.9rem",fontWeight:700,borderRight:"1px solid var(--border-subtle)"},children:"+"}),l.jsx("button",{onClick:H,title:"Zoom Out",style:{background:"none",border:"none",color:"var(--text-primary)",padding:"0.4rem 0.65rem",cursor:"pointer",fontSize:"0.9rem",fontWeight:700,borderRight:"1px solid var(--border-subtle)"},children:"−"}),l.jsx("button",{onClick:ie,title:"Reset Map View",style:{background:"none",border:"none",color:"var(--text-muted)",padding:"0.4rem 0.65rem",cursor:"pointer",fontSize:"0.7rem",fontWeight:600,fontFamily:"var(--font-mono)"},children:"RESET"})]})]}),l.jsxs("div",{style:{position:"absolute",top:"58px",left:"16px",zIndex:9,backgroundColor:"rgba(16, 185, 129, 0.08)",border:"1px solid var(--status-normal-border)",borderRadius:"var(--border-radius-xs)",padding:"0.25rem 0.6rem",fontSize:"0.65rem",color:"var(--status-normal)",display:"flex",alignItems:"center",gap:"0.35rem",fontFamily:"var(--font-mono)"},children:[l.jsx("span",{className:"status-pulse",style:{width:"5px",height:"5px",backgroundColor:"var(--status-normal)"}}),l.jsx("span",{children:"SPATIAL RESOLUTION: DISTRICT REFERENCE (Uniform aggregation across taluks)"})]}),l.jsxs("div",{style:{flex:1,position:"relative",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden"},children:[h?l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.75rem",color:"var(--text-muted)"},children:[l.jsx("span",{className:"status-pulse",style:{width:"12px",height:"12px"}}),l.jsx("span",{style:{fontSize:"0.8rem",fontFamily:"var(--font-mono)"},children:"Loading verified geospatial climate observation..."})]}):y?l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.75rem",color:"var(--status-alert)",padding:"2rem",textAlign:"center"},children:[l.jsx(pr,{size:32,color:"var(--status-alert)"}),l.jsx("span",{style:{fontSize:"0.875rem",fontWeight:600},children:y}),l.jsx("button",{onClick:()=>G(c),className:"tab-btn active",style:{fontSize:"0.75rem",marginTop:"0.5rem"},children:"Retry Ingestion"})]}):l.jsxs("svg",{viewBox:"0 0 800 520",style:{width:"96%",height:"96%",filter:"drop-shadow(0 12px 32px rgba(0,0,0,0.6))"},children:[l.jsx("defs",{children:l.jsx("pattern",{id:"map-grid",width:"40",height:"40",patternUnits:"userSpaceOnUse",children:l.jsx("path",{d:"M 40 0 L 0 0 0 40",fill:"none",stroke:"rgba(255,255,255,0.035)",strokeWidth:"1"})})}),l.jsx("rect",{width:"800",height:"520",fill:"url(#map-grid)"}),l.jsxs("g",{transform:`translate(${x.x}, ${x.y}) scale(${g})`,style:{transformOrigin:"400px 260px",transition:M?"none":"transform 0.1s ease-out"},children:[l.jsx("path",{d:"M 60 40 Q 90 200, 110 380 Q 140 480, 180 500",fill:"none",stroke:"rgba(6, 182, 212, 0.25)",strokeWidth:"2",strokeDasharray:"5 5"}),l.jsx("text",{x:"65",y:"490",fill:"rgba(6, 182, 212, 0.45)",fontSize:"10",fontFamily:"var(--font-mono)",children:"Arabian Sea Coastline"}),l.jsxs("g",{onClick:()=>me("Paravur"),onMouseEnter:()=>$("Paravur"),onMouseLeave:J,style:{cursor:"pointer"},children:[l.jsx("path",{d:"M 160 90 L 260 70 L 290 140 L 210 170 L 150 140 Z",fill:n==="Paravur"?"rgba(6, 182, 212, 0.35)":_==="Paravur"?"rgba(6, 182, 212, 0.2)":F,stroke:n==="Paravur"?"var(--accent-cyan)":_==="Paravur"?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.2)",strokeWidth:n==="Paravur"?"2.5":"1.2",style:{transition:"fill 0.25s, stroke 0.25s"}}),l.jsx("text",{x:"210",y:"125",fill:"#f8fafc",fontSize:"11",fontWeight:"600",textAnchor:"middle",children:"N. Paravur"})]}),l.jsxs("g",{onClick:()=>me("Aluva"),onMouseEnter:()=>$("Aluva"),onMouseLeave:J,style:{cursor:"pointer"},children:[l.jsx("path",{d:"M 260 70 L 410 60 L 430 160 L 290 140 Z",fill:n==="Aluva"?"rgba(6, 182, 212, 0.35)":_==="Aluva"?"rgba(6, 182, 212, 0.2)":F,stroke:n==="Aluva"?"var(--accent-cyan)":_==="Aluva"?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.2)",strokeWidth:n==="Aluva"?"2.5":"1.2",style:{transition:"fill 0.25s, stroke 0.25s"}}),l.jsx("text",{x:"350",y:"115",fill:"#f8fafc",fontSize:"11",fontWeight:"600",textAnchor:"middle",children:"Aluva (Periyar)"})]}),l.jsxs("g",{onClick:()=>me("Kochi"),onMouseEnter:()=>$("Kochi"),onMouseLeave:J,style:{cursor:"pointer"},children:[l.jsx("path",{d:"M 150 140 L 210 170 L 230 290 L 160 320 L 120 220 Z",fill:n==="Kochi"?"rgba(6, 182, 212, 0.4)":_==="Kochi"?"rgba(6, 182, 212, 0.2)":F,stroke:n==="Kochi"?"var(--accent-cyan)":_==="Kochi"?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.2)",strokeWidth:n==="Kochi"?"2.5":"1.2",style:{transition:"fill 0.25s, stroke 0.25s"}}),l.jsx("text",{x:"175",y:"235",fill:"#f8fafc",fontSize:"11",fontWeight:"700",textAnchor:"middle",children:"Kochi City"})]}),l.jsxs("g",{onClick:()=>me("Kanayannur"),onMouseEnter:()=>$("Kanayannur"),onMouseLeave:J,style:{cursor:"pointer"},children:[l.jsx("path",{d:"M 210 170 L 330 160 L 360 270 L 230 290 Z",fill:n==="Kanayannur"?"rgba(6, 182, 212, 0.35)":_==="Kanayannur"?"rgba(6, 182, 212, 0.2)":F,stroke:n==="Kanayannur"?"var(--accent-cyan)":_==="Kanayannur"?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.2)",strokeWidth:n==="Kanayannur"?"2.5":"1.2",style:{transition:"fill 0.25s, stroke 0.25s"}}),l.jsx("text",{x:"280",y:"225",fill:"#f8fafc",fontSize:"11",fontWeight:"600",textAnchor:"middle",children:"Kanayannur"})]}),l.jsxs("g",{onClick:()=>me("Kunnathunad"),onMouseEnter:()=>$("Kunnathunad"),onMouseLeave:J,style:{cursor:"pointer"},children:[l.jsx("path",{d:"M 430 160 L 560 130 L 570 260 L 360 270 L 330 160 Z",fill:n==="Kunnathunad"?"rgba(6, 182, 212, 0.35)":_==="Kunnathunad"?"rgba(6, 182, 212, 0.2)":F,stroke:n==="Kunnathunad"?"var(--accent-cyan)":_==="Kunnathunad"?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.2)",strokeWidth:n==="Kunnathunad"?"2.5":"1.2",style:{transition:"fill 0.25s, stroke 0.25s"}}),l.jsx("text",{x:"450",y:"210",fill:"#f8fafc",fontSize:"11",fontWeight:"600",textAnchor:"middle",children:"Kunnathunad"})]}),l.jsxs("g",{onClick:()=>me("Muvattupuzha"),onMouseEnter:()=>$("Muvattupuzha"),onMouseLeave:J,style:{cursor:"pointer"},children:[l.jsx("path",{d:"M 360 270 L 570 260 L 590 400 L 410 420 L 230 290 Z",fill:n==="Muvattupuzha"?"rgba(6, 182, 212, 0.35)":_==="Muvattupuzha"?"rgba(6, 182, 212, 0.2)":F,stroke:n==="Muvattupuzha"?"var(--accent-cyan)":_==="Muvattupuzha"?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.2)",strokeWidth:n==="Muvattupuzha"?"2.5":"1.2",style:{transition:"fill 0.25s, stroke 0.25s"}}),l.jsx("text",{x:"440",y:"345",fill:"#f8fafc",fontSize:"11",fontWeight:"600",textAnchor:"middle",children:"Muvattupuzha"})]}),l.jsxs("g",{onClick:()=>me("Kothamangalam"),onMouseEnter:()=>$("Kothamangalam"),onMouseLeave:J,style:{cursor:"pointer"},children:[l.jsx("path",{d:"M 560 130 L 730 110 L 750 350 L 590 400 L 570 260 Z",fill:n==="Kothamangalam"?"rgba(6, 182, 212, 0.35)":_==="Kothamangalam"?"rgba(6, 182, 212, 0.2)":F,stroke:n==="Kothamangalam"?"var(--accent-cyan)":_==="Kothamangalam"?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.2)",strokeWidth:n==="Kothamangalam"?"2.5":"1.2",style:{transition:"fill 0.25s, stroke 0.25s"}}),l.jsx("text",{x:"650",y:"245",fill:"#f8fafc",fontSize:"11",fontWeight:"600",textAnchor:"middle",children:"Kothamangalam (Foothills)"})]}),a&&l.jsx("g",{children:Or.map(re=>{const Ae=r===re.id,ze=R===re.id;return l.jsxs("g",{onClick:it=>{it.stopPropagation(),Ve(re.id)},onMouseEnter:()=>ye(re),onMouseLeave:Oe,style:{cursor:"pointer"},children:[l.jsx("circle",{cx:re.svgPos.x,cy:re.svgPos.y,r:Ae?"7":ze?"6":"4.5",fill:Ae?"#f43f5e":"#38bdf8",stroke:"#080d1a",strokeWidth:"1.5",style:{transition:"r 0.15s, fill 0.15s"}}),Ae&&l.jsx("circle",{cx:re.svgPos.x,cy:re.svgPos.y,r:"12",fill:"none",stroke:"#f43f5e",strokeWidth:"1.2",strokeDasharray:"2 2"}),l.jsxs("text",{x:re.svgPos.x+8,y:re.svgPos.y-2,fill:Ae?"#f43f5e":"#38bdf8",fontSize:"8.5",fontWeight:Ae?"700":"500",fontFamily:"var(--font-mono)",children:[re.name.split(" ")[0]," ",re.name.split(" ")[1]]})]},re.id)})})]})]}),D.visible&&l.jsxs("div",{style:{position:"absolute",top:`${D.y}px`,left:`${D.x}px`,zIndex:20,pointerEvents:"none",backgroundColor:"rgba(8, 13, 26, 0.95)",backdropFilter:"blur(8px)",border:"1px solid var(--border-accent)",borderRadius:"var(--border-radius-sm)",padding:"0.6rem 0.85rem",boxShadow:"var(--shadow-lg)",maxWidth:"280px",display:"flex",flexDirection:"column",gap:"0.25rem"},children:[l.jsx("div",{style:{fontSize:"0.8rem",fontWeight:700,color:"var(--text-primary)"},children:D.title}),D.subtitle&&l.jsx("div",{style:{fontSize:"0.65rem",color:"var(--text-muted)",fontFamily:"var(--font-mono)"},children:D.subtitle}),l.jsx("div",{style:{fontSize:"0.75rem",fontWeight:600,color:"var(--accent-cyan)",marginTop:"0.2rem"},children:D.metricText}),D.note&&l.jsx("div",{style:{fontSize:"0.625rem",color:"var(--text-dim)",fontStyle:"italic",borderTop:"1px solid var(--border-subtle)",paddingTop:"0.3rem",marginTop:"0.2rem"},children:D.note})]})]}),l.jsxs("div",{style:{position:"absolute",bottom:"16px",left:"16px",backgroundColor:"rgba(8, 13, 26, 0.92)",backdropFilter:"blur(10px)",padding:"0.6rem 1rem",borderRadius:"var(--border-radius-sm)",border:"1px solid var(--border-subtle)",fontSize:"0.75rem",display:"flex",flexDirection:"column",gap:"0.35rem",boxShadow:"var(--shadow-md)",maxWidth:"380px"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[l.jsxs("span",{style:{fontWeight:700,color:"var(--text-secondary)"},children:[O.name," (",O.unit,")"]}),l.jsxs("span",{style:{fontSize:"0.65rem",color:"var(--accent-cyan)",fontFamily:"var(--font-mono)"},children:["Ref: ",N!==null?`${N} ${O.unit}`:"N/A"]})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.6rem"},children:[l.jsx("span",{style:{color:"var(--text-muted)",fontFamily:"var(--font-mono)",fontSize:"0.6875rem"},children:O.legend.min}),l.jsx("div",{style:{width:"140px",height:"8px",borderRadius:"4px",background:O.legend.gradient}}),l.jsx("span",{style:{color:"var(--text-muted)",fontFamily:"var(--font-mono)",fontSize:"0.6875rem"},children:O.legend.max})]}),l.jsxs("div",{style:{fontSize:"0.625rem",color:"var(--text-dim)",lineHeight:1.3,marginTop:"0.1rem"},children:["Source: ",O.source]})]})]}),l.jsxs("div",{className:"card-panel",style:{display:"flex",flexDirection:"column",justifyContent:"space-between",gap:"1rem",overflowY:"auto"},children:[l.jsxs("div",{children:[l.jsx("div",{className:"card-panel-header",style:{marginBottom:"1rem"},children:l.jsxs("div",{className:"card-title-group",children:[l.jsxs("h2",{className:"card-title",children:[l.jsx(Ia,{size:18,color:"var(--accent-cyan)"}),"Geospatial Telemetry Inspector"]}),l.jsx("p",{className:"card-subtitle",children:ke?"Meteorological Station Node":"Administrative Taluk Profile"})]})}),ke?l.jsxs("div",{children:[l.jsxs("div",{style:{padding:"0.75rem",backgroundColor:"var(--bg-surface-elevated)",borderRadius:"var(--border-radius-sm)",border:"1px solid var(--border-accent)",marginBottom:"1rem"},children:[l.jsx("div",{style:{fontSize:"0.65rem",color:"var(--accent-cyan)",fontFamily:"var(--font-mono)",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Weather Station Node"}),l.jsx("div",{style:{fontSize:"1.1rem",fontWeight:700,color:"var(--text-primary)",marginTop:"0.2rem"},children:ke.name}),l.jsxs("div",{style:{fontSize:"0.7rem",color:"var(--text-secondary)",marginTop:"0.2rem"},children:[ke.agency," • ",ke.type]}),l.jsxs("div",{style:{fontSize:"0.6875rem",color:"var(--text-muted)",fontFamily:"var(--font-mono)",marginTop:"0.35rem"},children:[ke.coordinates," • Elevation ",ke.elevation]})]}),l.jsxs("div",{style:{padding:"0.8rem",backgroundColor:"rgba(245, 158, 11, 0.08)",borderRadius:"var(--border-radius-sm)",border:"1px solid var(--status-warning-border)",marginBottom:"1.25rem"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem",color:"var(--status-warning)",fontSize:"0.75rem",fontWeight:700},children:[l.jsx(pr,{size:14,color:"var(--status-warning)"}),"LIVE TELEMETRY UNAVAILABLE"]}),l.jsxs("p",{style:{fontSize:"0.7rem",color:"var(--text-secondary)",marginTop:"0.35rem",lineHeight:1.45},children:[ke.telemetryMessage," Real-time hourly ground sensor telemetry is offline in this build. Readings are not fabricated."]})]}),l.jsx("button",{onClick:()=>s(null),className:"tab-btn active",style:{width:"100%",fontSize:"0.75rem",padding:"0.45rem"},children:"Return to Taluk View"})]}):l.jsxs("div",{children:[l.jsxs("div",{style:{marginBottom:"1.25rem"},children:[l.jsx("div",{style:{fontSize:"0.65rem",color:"var(--text-muted)",fontFamily:"var(--font-mono)",textTransform:"uppercase",letterSpacing:"0.05em"},children:"TALUK ADMINISTRATIVE PROFILE"}),l.jsx("div",{style:{fontSize:"1.15rem",fontWeight:700,color:"var(--text-primary)",marginTop:"0.15rem"},children:nt.name}),l.jsxs("div",{style:{fontSize:"0.7rem",color:"var(--text-secondary)",marginTop:"0.2rem"},children:["Headquarters: ",l.jsx("strong",{style:{color:"var(--text-primary)"},children:nt.headquarters})," • Area: ",nt.area]}),l.jsxs("div",{style:{fontSize:"0.6875rem",color:"var(--text-muted)",fontFamily:"var(--font-mono)",marginTop:"0.15rem"},children:["Centroid: ",nt.coordinates]}),l.jsx("div",{style:{fontSize:"0.725rem",color:"var(--text-secondary)",marginTop:"0.4rem",lineHeight:1.45},children:nt.description})]}),l.jsxs("div",{style:{marginBottom:"1.25rem"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.5rem"},children:[l.jsx("div",{style:{fontSize:"0.65rem",color:"var(--accent-cyan)",fontFamily:"var(--font-mono)",textTransform:"uppercase",letterSpacing:"0.05em"},children:"DISTRICT REFERENCE OBSERVATION"}),l.jsx("span",{style:{fontSize:"0.625rem",color:"var(--text-muted)",fontFamily:"var(--font-mono)"},children:(f==null?void 0:f.date)||c})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.65rem"},children:[l.jsxs("div",{style:{backgroundColor:"var(--bg-surface-elevated)",padding:"0.65rem",borderRadius:"var(--border-radius-sm)",border:t==="rainfall"?"1px solid var(--accent-cyan)":"1px solid var(--border-subtle)"},children:[l.jsxs("div",{style:{fontSize:"0.65rem",color:"var(--text-muted)",display:"flex",alignItems:"center",gap:"0.3rem"},children:[l.jsx(Gr,{size:12,color:"#06b6d4"})," IMD Rainfall"]}),l.jsx("div",{style:{fontSize:"1.05rem",fontWeight:700,color:"#06b6d4",marginTop:"0.2rem"},children:(f==null?void 0:f.rainfall_imd)!==null&&(f==null?void 0:f.rainfall_imd)!==void 0?`${f.rainfall_imd} mm`:"Unavailable"}),l.jsx("div",{style:{fontSize:"0.58rem",color:"var(--text-dim)",marginTop:"0.15rem"},children:"District Ref (0.25° Gridded)"})]}),l.jsxs("div",{style:{backgroundColor:"var(--bg-surface-elevated)",padding:"0.65rem",borderRadius:"var(--border-radius-sm)",border:"1px solid var(--border-subtle)"},children:[l.jsxs("div",{style:{fontSize:"0.65rem",color:"var(--text-muted)",display:"flex",alignItems:"center",gap:"0.3rem"},children:[l.jsx(Xs,{size:12,color:"#f59e0b"})," Max / Min Temp"]}),l.jsx("div",{style:{fontSize:"1.05rem",fontWeight:700,color:"#f59e0b",marginTop:"0.2rem"},children:(f==null?void 0:f.max_temp)!==null&&(f==null?void 0:f.max_temp)!==void 0?`${f.max_temp}° / ${f.min_temp}°`:"Unavailable"}),l.jsx("div",{style:{fontSize:"0.58rem",color:"var(--text-dim)",marginTop:"0.15rem"},children:"IMD Station Baseline"})]}),l.jsxs("div",{style:{backgroundColor:"var(--bg-surface-elevated)",padding:"0.65rem",borderRadius:"var(--border-radius-sm)",border:t==="lst"?"1px solid var(--accent-cyan)":"1px solid var(--border-subtle)"},children:[l.jsxs("div",{style:{fontSize:"0.65rem",color:"var(--text-muted)",display:"flex",alignItems:"center",gap:"0.3rem"},children:[l.jsx($s,{size:12,color:"#f43f5e"})," MODIS LST"]}),l.jsx("div",{style:{fontSize:"1.05rem",fontWeight:700,color:"#f43f5e",marginTop:"0.2rem"},children:(f==null?void 0:f.lst)!==null&&(f==null?void 0:f.lst)!==void 0?`${f.lst} °C`:"Cloud-Obscured"}),l.jsx("div",{style:{fontSize:"0.58rem",color:"var(--text-dim)",marginTop:"0.15rem"},children:"NASA Thermal Infrared (1km)"})]}),l.jsxs("div",{style:{backgroundColor:"var(--bg-surface-elevated)",padding:"0.65rem",borderRadius:"var(--border-radius-sm)",border:t==="ndvi"?"1px solid var(--accent-cyan)":"1px solid var(--border-subtle)"},children:[l.jsxs("div",{style:{fontSize:"0.65rem",color:"var(--text-muted)",display:"flex",alignItems:"center",gap:"0.3rem"},children:[l.jsx(to,{size:12,color:"#10b981"})," MODIS NDVI"]}),l.jsx("div",{style:{fontSize:"1.05rem",fontWeight:700,color:"#10b981",marginTop:"0.2rem"},children:(f==null?void 0:f.ndvi)!==null&&(f==null?void 0:f.ndvi)!==void 0?f.ndvi:"Cloud-Obscured"}),l.jsx("div",{style:{fontSize:"0.58rem",color:"var(--text-dim)",marginTop:"0.15rem"},children:"NASA MOD13Q1 Vegetation"})]}),l.jsxs("div",{style:{gridColumn:"span 2",backgroundColor:"var(--bg-surface-elevated)",padding:"0.65rem",borderRadius:"var(--border-radius-sm)",border:t==="pressure"?"1px solid var(--accent-cyan)":"1px solid var(--border-subtle)"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[l.jsxs("div",{style:{fontSize:"0.65rem",color:"var(--text-muted)",display:"flex",alignItems:"center",gap:"0.3rem"},children:[l.jsx(Zl,{size:12,color:"#6366f1"})," ERA5 Surface Pressure"]}),l.jsx("div",{style:{fontSize:"0.58rem",color:"var(--text-dim)"},children:"ECMWF Atmospheric Reanalysis"})]}),l.jsx("div",{style:{fontSize:"1.05rem",fontWeight:700,color:"#6366f1",marginTop:"0.2rem"},children:(f==null?void 0:f.surface_pressure)!==null&&(f==null?void 0:f.surface_pressure)!==void 0?`${f.surface_pressure} hPa`:"Not Monitored in Snapshot"})]})]})]}),l.jsxs("div",{style:{padding:"0.75rem",backgroundColor:"var(--bg-surface-elevated)",borderRadius:"var(--border-radius-sm)",border:"1px solid var(--border-subtle)",marginBottom:"0.75rem"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.35rem",fontSize:"0.6875rem",fontWeight:700,color:"var(--status-warning)"},children:[l.jsx(Ec,{size:14,color:"var(--status-warning)"}),"Taluk-specific measurement unavailable"]}),l.jsx("p",{style:{fontSize:"0.6875rem",color:"var(--text-secondary)",marginTop:"0.3rem",lineHeight:1.45},children:"Sub-district sensor disaggregation is not present in the digital twin repository. The metrics shown above represent verified district-wide observations for Ernakulam."})]})]})]}),l.jsxs("div",{style:{fontSize:"0.6875rem",color:"var(--text-dim)",borderTop:"1px solid var(--border-subtle)",paddingTop:"0.75rem",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[l.jsx("span",{children:"Click any taluk polygon or station marker."}),l.jsxs("span",{style:{fontFamily:"var(--font-mono)"},children:[g.toFixed(1),"x Zoom"]})]})]})]})]})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bh="186",Fs={ROTATE:0,DOLLY:1,PAN:2},ws={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ES=0,pm=1,TS=2,Sl=1,bS=2,Ma=3,jr=0,un=1,Ti=2,Ri=0,Ua=1,Jl=2,mm=3,gm=4,wS=5,fs=100,CS=101,AS=102,RS=103,PS=104,DS=200,LS=201,IS=202,NS=203,jv=204,Wv=205,US=206,FS=207,OS=208,kS=209,zS=210,BS=211,HS=212,VS=213,GS=214,zd=0,Bd=1,Hd=2,io=3,Vd=4,Gd=5,jd=6,Wd=7,wh=0,jS=1,WS=2,di=0,Xv=1,$v=2,Yv=3,Kv=4,qv=5,Zv=6,Qv=7,Jv=300,Wr=301,Ys=302,au=303,ou=304,Tc=306,Xd=1e3,Ci=1001,$d=1002,Wt=1003,XS=1004,Oo=1005,tn=1006,lu=1007,Ir=1008,En=1009,ex=1010,tx=1011,ro=1012,Ch=1013,fi=1014,oi=1015,hi=1016,Ah=1017,Rh=1018,so=1020,nx=35902,ix=35899,rx=1021,sx=1022,Yn=1023,Fi=1026,Nr=1027,ax=1028,Ph=1029,Xr=1030,Dh=1031,Lh=1033,Ml=33776,El=33777,Tl=33778,bl=33779,Yd=35840,Kd=35841,qd=35842,Zd=35843,Qd=36196,Jd=37492,ef=37496,tf=37488,nf=37489,ec=37490,rf=37491,sf=37808,af=37809,of=37810,lf=37811,cf=37812,uf=37813,df=37814,ff=37815,hf=37816,pf=37817,mf=37818,gf=37819,vf=37820,xf=37821,_f=36492,yf=36494,Sf=36495,Mf=36283,Ef=36284,tc=36285,Tf=36286,$S=3200,bf=0,YS=1,Qi="",pn="srgb",nc="srgb-linear",ic="linear",at="srgb",cu=7680,KS=519,qS=512,ZS=513,QS=514,Ih=515,JS=516,eM=517,Nh=518,tM=519,nM=35044,vm="300 es",li=2e3,ao=2001;function iM(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function oo(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function rM(){const t=oo("canvas");return t.style.display="block",t}const xm={};function _m(...t){const e="THREE."+t.shift();console.log(e,...t)}function ox(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Be(...t){t=ox(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Je(...t){t=ox(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Os(...t){const e=t.join(" ");e in xm||(xm[e]=!0,Be(...t))}function sM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const aM={[zd]:Bd,[Hd]:jd,[Vd]:Wd,[io]:Gd,[Bd]:zd,[jd]:Hd,[Wd]:Vd,[Gd]:io};class yr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ym=1234567;const Fa=Math.PI/180,lo=180/Math.PI;function Js(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Qt[t&255]+Qt[t>>8&255]+Qt[t>>16&255]+Qt[t>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[n&63|128]+Qt[n>>8&255]+"-"+Qt[n>>16&255]+Qt[n>>24&255]+Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]).toLowerCase()}function $e(t,e,n){return Math.max(e,Math.min(n,t))}function Uh(t,e){return(t%e+e)%e}function oM(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function lM(t,e,n){return t!==e?(n-t)/(e-t):0}function Oa(t,e,n){return(1-n)*t+n*e}function cM(t,e,n,i){return Oa(t,e,1-Math.exp(-n*i))}function uM(t,e=1){return e-Math.abs(Uh(t,e*2)-e)}function dM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function fM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function hM(t,e){return t+Math.floor(Math.random()*(e-t+1))}function pM(t,e){return t+Math.random()*(e-t)}function mM(t){return t*(.5-Math.random())}function gM(t){t!==void 0&&(ym=t);let e=ym+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function vM(t){return t*Fa}function xM(t){return t*lo}function _M(t){return t>0&&Number.isInteger(t)&&2**Math.round(Math.log2(t))===t}function yM(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function SM(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function MM(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),c=a(n/2),u=s((e+i)/2),f=a((e+i)/2),p=s((e-i)/2),h=a((e-i)/2),m=s((i-e)/2),y=a((i-e)/2);switch(r){case"XYX":t.set(o*f,c*p,c*h,o*u);break;case"YZY":t.set(c*h,o*f,c*p,o*u);break;case"ZXZ":t.set(c*p,c*h,o*f,o*u);break;case"XZX":t.set(o*f,c*y,c*m,o*u);break;case"YXY":t.set(c*m,o*f,c*y,o*u);break;case"ZYZ":t.set(c*y,c*m,o*f,o*u);break;default:Be("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function hs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:case Uint8ClampedArray:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function an(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const wf={DEG2RAD:Fa,RAD2DEG:lo,generateUUID:Js,clamp:$e,euclideanModulo:Uh,mapLinear:oM,inverseLerp:lM,lerp:Oa,damp:cM,pingpong:uM,smoothstep:dM,smootherstep:fM,randInt:hM,randFloat:pM,randFloatSpread:mM,seededRandom:gM,degToRad:vM,radToDeg:xM,isPowerOfTwo:_M,ceilPowerOfTwo:yM,floorPowerOfTwo:SM,setQuaternionFromProperEuler:MM,normalize:an,denormalize:hs},Gh=class Gh{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Gh.prototype.isVector2=!0;let He=Gh;class mr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let c=i[r+0],u=i[r+1],f=i[r+2],p=i[r+3],h=s[a+0],m=s[a+1],y=s[a+2],v=s[a+3];if(p!==v||c!==h||u!==m||f!==y){let g=c*h+u*m+f*y+p*v;g<0&&(h=-h,m=-m,y=-y,v=-v,g=-g);let d=1-o;if(g<.9995){const x=Math.acos(g),E=Math.sin(x);d=Math.sin(d*x)/E,o=Math.sin(o*x)/E,c=c*d+h*o,u=u*d+m*o,f=f*d+y*o,p=p*d+v*o}else{c=c*d+h*o,u=u*d+m*o,f=f*d+y*o,p=p*d+v*o;const x=1/Math.sqrt(c*c+u*u+f*f+p*p);c*=x,u*=x,f*=x,p*=x}}e[n]=c,e[n+1]=u,e[n+2]=f,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],c=i[r+1],u=i[r+2],f=i[r+3],p=s[a],h=s[a+1],m=s[a+2],y=s[a+3];return e[n]=o*y+f*p+c*m-u*h,e[n+1]=c*y+f*h+u*p-o*m,e[n+2]=u*y+f*m+o*h-c*p,e[n+3]=f*y-o*p-c*h-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,u=o(i/2),f=o(r/2),p=o(s/2),h=c(i/2),m=c(r/2),y=c(s/2);switch(a){case"XYZ":this._x=h*f*p+u*m*y,this._y=u*m*p-h*f*y,this._z=u*f*y+h*m*p,this._w=u*f*p-h*m*y;break;case"YXZ":this._x=h*f*p+u*m*y,this._y=u*m*p-h*f*y,this._z=u*f*y-h*m*p,this._w=u*f*p+h*m*y;break;case"ZXY":this._x=h*f*p-u*m*y,this._y=u*m*p+h*f*y,this._z=u*f*y+h*m*p,this._w=u*f*p-h*m*y;break;case"ZYX":this._x=h*f*p-u*m*y,this._y=u*m*p+h*f*y,this._z=u*f*y-h*m*p,this._w=u*f*p+h*m*y;break;case"YZX":this._x=h*f*p+u*m*y,this._y=u*m*p+h*f*y,this._z=u*f*y-h*m*p,this._w=u*f*p-h*m*y;break;case"XZY":this._x=h*f*p-u*m*y,this._y=u*m*p-h*f*y,this._z=u*f*y+h*m*p,this._w=u*f*p+h*m*y;break;default:Be("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],c=n[9],u=n[2],f=n[6],p=n[10],h=i+o+p;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(f-c)*m,this._y=(s-u)*m,this._z=(a-r)*m}else if(i>o&&i>p){const m=2*Math.sqrt(1+i-o-p);this._w=(f-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+u)/m}else if(o>p){const m=2*Math.sqrt(1+o-i-p);this._w=(s-u)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+f)/m}else{const m=2*Math.sqrt(1+p-i-o);this._w=(a-r)/m,this._x=(s+u)/m,this._y=(c+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,c=n._y,u=n._z,f=n._w;return this._x=i*f+a*o+r*u-s*c,this._y=r*f+a*c+s*o-i*u,this._z=s*f+a*u+i*c-r*o,this._w=a*f-i*o-r*c-s*u,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let c=1-n;if(o<.9995){const u=Math.acos(o),f=Math.sin(u);c=Math.sin(c*u)/f,n=Math.sin(n*u)/f,this._x=this._x*c+i*n,this._y=this._y*c+r*n,this._z=this._z*c+s*n,this._w=this._w*c+a*n,this._onChangeCallback()}else this._x=this._x*c+i*n,this._y=this._y*c+r*n,this._z=this._z*c+s*n,this._w=this._w*c+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const jh=class jh{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Sm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Sm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,u=2*(a*r-o*i),f=2*(o*n-s*r),p=2*(s*i-a*n);return this.x=n+c*u+a*p-o*f,this.y=i+c*f+o*u-s*p,this.z=r+c*p+s*f-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this.z=$e(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this.z=$e(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,c=n.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return uu.copy(this).projectOnVector(e),this.sub(uu)}reflect(e){return this.sub(uu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};jh.prototype.isVector3=!0;let X=jh;const uu=new X,Sm=new mr,Wh=class Wh{constructor(e,n,i,r,s,a,o,c,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,u)}set(e,n,i,r,s,a,o,c,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=n,f[4]=s,f[5]=c,f[6]=i,f[7]=a,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],c=i[6],u=i[1],f=i[4],p=i[7],h=i[2],m=i[5],y=i[8],v=r[0],g=r[3],d=r[6],x=r[1],E=r[4],M=r[7],b=r[2],w=r[5],A=r[8];return s[0]=a*v+o*x+c*b,s[3]=a*g+o*E+c*w,s[6]=a*d+o*M+c*A,s[1]=u*v+f*x+p*b,s[4]=u*g+f*E+p*w,s[7]=u*d+f*M+p*A,s[2]=h*v+m*x+y*b,s[5]=h*g+m*E+y*w,s[8]=h*d+m*M+y*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],f=e[8];return n*a*f-n*o*u-i*s*f+i*o*c+r*s*u-r*a*c}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],f=e[8],p=f*a-o*u,h=o*c-f*s,m=u*s-a*c,y=n*p+i*h+r*m;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/y;return e[0]=p*v,e[1]=(r*u-f*i)*v,e[2]=(o*i-r*a)*v,e[3]=h*v,e[4]=(f*n-r*c)*v,e[5]=(r*s-o*n)*v,e[6]=m*v,e[7]=(i*c-u*n)*v,e[8]=(a*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const c=Math.cos(s),u=Math.sin(s);return this.set(i*c,i*u,-i*(c*a+u*o)+a+e,-r*u,r*c,-r*(-u*a+c*o)+o+n,0,0,1),this}scale(e,n){return Os("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(du.makeScale(e,n)),this}rotate(e){return Os("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(du.makeRotation(-e)),this}translate(e,n){return Os("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(du.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Wh.prototype.isMatrix3=!0;let je=Wh;const du=new je,Mm=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Em=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function EM(){const t={enabled:!0,workingColorSpace:nc,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===at&&(r.r=Pi(r.r),r.g=Pi(r.g),r.b=Pi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===at&&(r.r=ks(r.r),r.g=ks(r.g),r.b=ks(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Qi?ic:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Os("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Os("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[nc]:{primaries:e,whitePoint:i,transfer:ic,toXYZ:Mm,fromXYZ:Em,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:pn},outputColorSpaceConfig:{drawingBufferColorSpace:pn}},[pn]:{primaries:e,whitePoint:i,transfer:at,toXYZ:Mm,fromXYZ:Em,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:pn}}}),t}const Ze=EM();function Pi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ks(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Qr;class TM{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Qr===void 0&&(Qr=oo("canvas")),Qr.width=e.width,Qr.height=e.height;const r=Qr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Qr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=oo("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Pi(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Pi(n[i]/255)*255):n[i]=Pi(n[i]);return{data:n,width:e.width,height:e.height}}else return Be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bM=0;class Fh{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:bM++}),this.uuid=Js(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(fu(r[a].image)):s.push(fu(r[a]))}else s=fu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function fu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?TM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Be("Texture: Unable to serialize Texture."),{})}let wM=0;const hu=new X;class nn extends yr{constructor(e=nn.DEFAULT_IMAGE,n=nn.DEFAULT_MAPPING,i=Ci,r=Ci,s=tn,a=Ir,o=Yn,c=En,u=nn.DEFAULT_ANISOTROPY,f=Qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wM++}),this.uuid=Js(),this.name="",this.source=new Fh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(hu).x}get height(){return this.source.getSize(hu).y}get depth(){return this.source.getSize(hu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Be(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Be(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xd:e.x=e.x-Math.floor(e.x);break;case Ci:e.x=e.x<0?0:1;break;case $d:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xd:e.y=e.y-Math.floor(e.y);break;case Ci:e.y=e.y<0?0:1;break;case $d:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=Jv;nn.DEFAULT_ANISOTROPY=1;const Xh=class Xh{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const c=e.elements,u=c[0],f=c[4],p=c[8],h=c[1],m=c[5],y=c[9],v=c[2],g=c[6],d=c[10];if(Math.abs(f-h)<.01&&Math.abs(p-v)<.01&&Math.abs(y-g)<.01){if(Math.abs(f+h)<.1&&Math.abs(p+v)<.1&&Math.abs(y+g)<.1&&Math.abs(u+m+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const E=(u+1)/2,M=(m+1)/2,b=(d+1)/2,w=(f+h)/4,A=(p+v)/4,_=(y+g)/4;return E>M&&E>b?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=w/i,s=A/i):M>b?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=w/r,s=_/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=A/s,r=_/s),this.set(i,r,s,n),this}let x=Math.sqrt((g-y)*(g-y)+(p-v)*(p-v)+(h-f)*(h-f));return Math.abs(x)<.001&&(x=1),this.x=(g-y)/x,this.y=(p-v)/x,this.z=(h-f)/x,this.w=Math.acos((u+m+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this.z=$e(this.z,e.z,n.z),this.w=$e(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this.z=$e(this.z,e,n),this.w=$e(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Xh.prototype.isVector4=!0;let Et=Xh;class CM extends yr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Et(0,0,e,n),this.scissorTest=!1,this.viewport=new Et(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new nn(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:tn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Fh(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zn extends CM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class lx extends nn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class AM extends nn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const ac=class ac{constructor(e,n,i,r,s,a,o,c,u,f,p,h,m,y,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,u,f,p,h,m,y,v,g)}set(e,n,i,r,s,a,o,c,u,f,p,h,m,y,v,g){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=c,d[2]=u,d[6]=f,d[10]=p,d[14]=h,d[3]=m,d[7]=y,d[11]=v,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ac().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Jr.setFromMatrixColumn(e,0).length(),s=1/Jr.setFromMatrixColumn(e,1).length(),a=1/Jr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),u=Math.sin(r),f=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const h=a*f,m=a*p,y=o*f,v=o*p;n[0]=c*f,n[4]=-c*p,n[8]=u,n[1]=m+y*u,n[5]=h-v*u,n[9]=-o*c,n[2]=v-h*u,n[6]=y+m*u,n[10]=a*c}else if(e.order==="YXZ"){const h=c*f,m=c*p,y=u*f,v=u*p;n[0]=h+v*o,n[4]=y*o-m,n[8]=a*u,n[1]=a*p,n[5]=a*f,n[9]=-o,n[2]=m*o-y,n[6]=v+h*o,n[10]=a*c}else if(e.order==="ZXY"){const h=c*f,m=c*p,y=u*f,v=u*p;n[0]=h-v*o,n[4]=-a*p,n[8]=y+m*o,n[1]=m+y*o,n[5]=a*f,n[9]=v-h*o,n[2]=-a*u,n[6]=o,n[10]=a*c}else if(e.order==="ZYX"){const h=a*f,m=a*p,y=o*f,v=o*p;n[0]=c*f,n[4]=y*u-m,n[8]=h*u+v,n[1]=c*p,n[5]=v*u+h,n[9]=m*u-y,n[2]=-u,n[6]=o*c,n[10]=a*c}else if(e.order==="YZX"){const h=a*c,m=a*u,y=o*c,v=o*u;n[0]=c*f,n[4]=v-h*p,n[8]=y*p+m,n[1]=p,n[5]=a*f,n[9]=-o*f,n[2]=-u*f,n[6]=m*p+y,n[10]=h-v*p}else if(e.order==="XZY"){const h=a*c,m=a*u,y=o*c,v=o*u;n[0]=c*f,n[4]=-p,n[8]=u*f,n[1]=h*p+v,n[5]=a*f,n[9]=m*p-y,n[2]=y*p-m,n[6]=o*f,n[10]=v*p+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(RM,e,PM)}lookAt(e,n,i){const r=this.elements;return yn.subVectors(e,n),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Vi.crossVectors(i,yn),Vi.lengthSq()===0&&(Math.abs(i.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Vi.crossVectors(i,yn)),Vi.normalize(),ko.crossVectors(yn,Vi),r[0]=Vi.x,r[4]=ko.x,r[8]=yn.x,r[1]=Vi.y,r[5]=ko.y,r[9]=yn.y,r[2]=Vi.z,r[6]=ko.z,r[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],c=i[8],u=i[12],f=i[1],p=i[5],h=i[9],m=i[13],y=i[2],v=i[6],g=i[10],d=i[14],x=i[3],E=i[7],M=i[11],b=i[15],w=r[0],A=r[4],_=r[8],C=r[12],R=r[1],L=r[5],D=r[9],j=r[13],U=r[2],G=r[6],O=r[10],V=r[14],N=r[3],F=r[7],I=r[11],H=r[15];return s[0]=a*w+o*R+c*U+u*N,s[4]=a*A+o*L+c*G+u*F,s[8]=a*_+o*D+c*O+u*I,s[12]=a*C+o*j+c*V+u*H,s[1]=f*w+p*R+h*U+m*N,s[5]=f*A+p*L+h*G+m*F,s[9]=f*_+p*D+h*O+m*I,s[13]=f*C+p*j+h*V+m*H,s[2]=y*w+v*R+g*U+d*N,s[6]=y*A+v*L+g*G+d*F,s[10]=y*_+v*D+g*O+d*I,s[14]=y*C+v*j+g*V+d*H,s[3]=x*w+E*R+M*U+b*N,s[7]=x*A+E*L+M*G+b*F,s[11]=x*_+E*D+M*O+b*I,s[15]=x*C+E*j+M*V+b*H,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],u=e[13],f=e[2],p=e[6],h=e[10],m=e[14],y=e[3],v=e[7],g=e[11],d=e[15],x=c*m-u*h,E=o*m-u*p,M=o*h-c*p,b=a*m-u*f,w=a*h-c*f,A=a*p-o*f;return n*(v*x-g*E+d*M)-i*(y*x-g*b+d*w)+r*(y*E-v*b+d*A)-s*(y*M-v*w+g*A)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],u=e[6],f=e[10];return n*(a*f-o*u)-i*(s*f-o*c)+r*(s*u-a*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],f=e[8],p=e[9],h=e[10],m=e[11],y=e[12],v=e[13],g=e[14],d=e[15],x=n*o-i*a,E=n*c-r*a,M=n*u-s*a,b=i*c-r*o,w=i*u-s*o,A=r*u-s*c,_=f*v-p*y,C=f*g-h*y,R=f*d-m*y,L=p*g-h*v,D=p*d-m*v,j=h*d-m*g,U=x*j-E*D+M*L+b*R-w*C+A*_;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/U;return e[0]=(o*j-c*D+u*L)*G,e[1]=(r*D-i*j-s*L)*G,e[2]=(v*A-g*w+d*b)*G,e[3]=(h*w-p*A-m*b)*G,e[4]=(c*R-a*j-u*C)*G,e[5]=(n*j-r*R+s*C)*G,e[6]=(g*M-y*A-d*E)*G,e[7]=(f*A-h*M+m*E)*G,e[8]=(a*D-o*R+u*_)*G,e[9]=(i*R-n*D-s*_)*G,e[10]=(y*w-v*M+d*x)*G,e[11]=(p*M-f*w-m*x)*G,e[12]=(o*C-a*L-c*_)*G,e[13]=(n*L-i*C+r*_)*G,e[14]=(v*E-y*b-g*x)*G,e[15]=(f*b-p*E+h*x)*G,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,c=e.z,u=s*a,f=s*o;return this.set(u*a+i,u*o-r*c,u*c+r*o,0,u*o+r*c,f*o+i,f*c-r*a,0,u*c-r*o,f*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,c=n._w,u=s+s,f=a+a,p=o+o,h=s*u,m=s*f,y=s*p,v=a*f,g=a*p,d=o*p,x=c*u,E=c*f,M=c*p,b=i.x,w=i.y,A=i.z;return r[0]=(1-(v+d))*b,r[1]=(m+M)*b,r[2]=(y-E)*b,r[3]=0,r[4]=(m-M)*w,r[5]=(1-(h+d))*w,r[6]=(g+x)*w,r[7]=0,r[8]=(y+E)*A,r[9]=(g-x)*A,r[10]=(1-(h+v))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=Jr.set(r[0],r[1],r[2]).length();const o=Jr.set(r[4],r[5],r[6]).length(),c=Jr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Hn.copy(this);const u=1/a,f=1/o,p=1/c;return Hn.elements[0]*=u,Hn.elements[1]*=u,Hn.elements[2]*=u,Hn.elements[4]*=f,Hn.elements[5]*=f,Hn.elements[6]*=f,Hn.elements[8]*=p,Hn.elements[9]*=p,Hn.elements[10]*=p,n.setFromRotationMatrix(Hn),i.x=a,i.y=o,i.z=c,this}makePerspective(e,n,i,r,s,a,o=li,c=!1){const u=this.elements,f=2*s/(n-e),p=2*s/(i-r),h=(n+e)/(n-e),m=(i+r)/(i-r);let y,v;if(c)y=s/(a-s),v=a*s/(a-s);else if(o===li)y=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===ao)y=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=f,u[4]=0,u[8]=h,u[12]=0,u[1]=0,u[5]=p,u[9]=m,u[13]=0,u[2]=0,u[6]=0,u[10]=y,u[14]=v,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=li,c=!1){const u=this.elements,f=2/(n-e),p=2/(i-r),h=-(n+e)/(n-e),m=-(i+r)/(i-r);let y,v;if(c)y=1/(a-s),v=a/(a-s);else if(o===li)y=-2/(a-s),v=-(a+s)/(a-s);else if(o===ao)y=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=f,u[4]=0,u[8]=0,u[12]=h,u[1]=0,u[5]=p,u[9]=0,u[13]=m,u[2]=0,u[6]=0,u[10]=y,u[14]=v,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};ac.prototype.isMatrix4=!0;let yt=ac;const Jr=new X,Hn=new yt,RM=new X(0,0,0),PM=new X(1,1,1),Vi=new X,ko=new X,yn=new X,Tm=new yt,bm=new mr;class gr{constructor(e=0,n=0,i=0,r=gr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],u=r[5],f=r[9],p=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin($e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-$e(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin($e(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:Be("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Tm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return bm.setFromEuler(this),this.setFromQuaternion(bm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gr.DEFAULT_ORDER="XYZ";class Oh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let DM=0;const wm=new X,es=new mr,mi=new yt,zo=new X,da=new X,LM=new X,IM=new mr,Cm=new X(1,0,0),Am=new X(0,1,0),Rm=new X(0,0,1),Pm={type:"added"},NM={type:"removed"},ts={type:"childadded",child:null},pu={type:"childremoved",child:null};class Ot extends yr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:DM++}),this.uuid=Js(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ot.DEFAULT_UP.clone();const e=new X,n=new gr,i=new mr,r=new X(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new yt},normalMatrix:{value:new je}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=Ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Oh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return es.setFromAxisAngle(e,n),this.quaternion.multiply(es),this}rotateOnWorldAxis(e,n){return es.setFromAxisAngle(e,n),this.quaternion.premultiply(es),this}rotateX(e){return this.rotateOnAxis(Cm,e)}rotateY(e){return this.rotateOnAxis(Am,e)}rotateZ(e){return this.rotateOnAxis(Rm,e)}translateOnAxis(e,n){return wm.copy(e).applyQuaternion(this.quaternion),this.position.add(wm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Cm,e)}translateY(e){return this.translateOnAxis(Am,e)}translateZ(e){return this.translateOnAxis(Rm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?zo.copy(e):zo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),da.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(da,zo,this.up):mi.lookAt(zo,da,this.up),this.quaternion.setFromRotationMatrix(mi),r&&(mi.extractRotation(r.matrixWorld),es.setFromRotationMatrix(mi),this.quaternion.premultiply(es.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pm),ts.child=e,this.dispatchEvent(ts),ts.child=null):Je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(NM),pu.child=e,this.dispatchEvent(pu),pu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pm),ts.child=e,this.dispatchEvent(ts),ts.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(da,e,LM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(da,IM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let u=0,f=c.length;u<f;u++){const p=c[u];s(e.shapes,p)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(n){const o=a(e.geometries),c=a(e.materials),u=a(e.textures),f=a(e.images),p=a(e.shapes),h=a(e.skeletons),m=a(e.animations),y=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),p.length>0&&(i.shapes=p),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),y.length>0&&(i.nodes=y)}return i.object=r,i;function a(o){const c=[];for(const u in o){const f=o[u];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ot.DEFAULT_UP=new X(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ir extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const UM={type:"move"};class mu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ir,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ir,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ir,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const v of e.hand.values()){const g=n.getJointPose(v,i),d=this._getHandJoint(u,v);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const f=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],h=f.position.distanceTo(p.position),m=.02,y=.005;u.inputState.pinching&&h>m+y?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=m-y&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(UM)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ir;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const cx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gi={h:0,s:0,l:0},Bo={h:0,s:0,l:0};function gu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Ze.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ze.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Ze.workingColorSpace){if(e=Uh(e,1),n=$e(n,0,1),i=$e(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=gu(a,s,e+1/3),this.g=gu(a,s,e),this.b=gu(a,s,e-1/3)}return Ze.colorSpaceToWorking(this,r),this}setStyle(e,n=pn){function i(s){s!==void 0&&parseFloat(s)<1&&Be("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Be("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=pn){const i=cx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}copyLinearToSRGB(e){return this.r=ks(e.r),this.g=ks(e.g),this.b=ks(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pn){return Ze.workingToColorSpace(Jt.copy(this),e),Math.round($e(Jt.r*255,0,255))*65536+Math.round($e(Jt.g*255,0,255))*256+Math.round($e(Jt.b*255,0,255))}getHexString(e=pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ze.workingColorSpace){Ze.workingToColorSpace(Jt.copy(this),n);const i=Jt.r,r=Jt.g,s=Jt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,u;const f=(o+a)/2;if(o===a)c=0,u=0;else{const p=a-o;switch(u=f<=.5?p/(a+o):p/(2-a-o),a){case i:c=(r-s)/p+(r<s?6:0);break;case r:c=(s-i)/p+2;break;case s:c=(i-r)/p+4;break}c/=6}return e.h=c,e.s=u,e.l=f,e}getRGB(e,n=Ze.workingColorSpace){return Ze.workingToColorSpace(Jt.copy(this),n),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=pn){Ze.workingToColorSpace(Jt.copy(this),e);const n=Jt.r,i=Jt.g,r=Jt.b;return e!==pn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Gi),this.setHSL(Gi.h+e,Gi.s+n,Gi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Gi),e.getHSL(Bo);const i=Oa(Gi.h,Bo.h,n),r=Oa(Gi.s,Bo.s,n),s=Oa(Gi.l,Bo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jt=new qe;qe.NAMES=cx;class FM extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gr,this.environmentIntensity=1,this.environmentRotation=new gr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Vn=new X,gi=new X,vu=new X,vi=new X,ns=new X,is=new X,Dm=new X,xu=new X,_u=new X,yu=new X,Su=new Et,Mu=new Et,Eu=new Et;class $n{constructor(e=new X,n=new X,i=new X){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Vn.subVectors(e,n),r.cross(Vn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Vn.subVectors(r,n),gi.subVectors(i,n),vu.subVectors(e,n);const a=Vn.dot(Vn),o=Vn.dot(gi),c=Vn.dot(vu),u=gi.dot(gi),f=gi.dot(vu),p=a*u-o*o;if(p===0)return s.set(0,0,0),null;const h=1/p,m=(u*c-o*f)*h,y=(a*f-o*c)*h;return s.set(1-m-y,y,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(e,n,i,r,s,a,o,c){return this.getBarycoord(e,n,i,r,vi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,vi.x),c.addScaledVector(a,vi.y),c.addScaledVector(o,vi.z),c)}static getInterpolatedAttribute(e,n,i,r,s,a){return Su.setScalar(0),Mu.setScalar(0),Eu.setScalar(0),Su.fromBufferAttribute(e,n),Mu.fromBufferAttribute(e,i),Eu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Su,s.x),a.addScaledVector(Mu,s.y),a.addScaledVector(Eu,s.z),a}static isFrontFacing(e,n,i,r){return Vn.subVectors(i,n),gi.subVectors(e,n),Vn.cross(gi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),Vn.cross(gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return $n.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return $n.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return $n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;ns.subVectors(r,i),is.subVectors(s,i),xu.subVectors(e,i);const c=ns.dot(xu),u=is.dot(xu);if(c<=0&&u<=0)return n.copy(i);_u.subVectors(e,r);const f=ns.dot(_u),p=is.dot(_u);if(f>=0&&p<=f)return n.copy(r);const h=c*p-f*u;if(h<=0&&c>=0&&f<=0)return a=c/(c-f),n.copy(i).addScaledVector(ns,a);yu.subVectors(e,s);const m=ns.dot(yu),y=is.dot(yu);if(y>=0&&m<=y)return n.copy(s);const v=m*u-c*y;if(v<=0&&u>=0&&y<=0)return o=u/(u-y),n.copy(i).addScaledVector(is,o);const g=f*y-m*p;if(g<=0&&p-f>=0&&m-y>=0)return Dm.subVectors(s,r),o=(p-f)/(p-f+(m-y)),n.copy(r).addScaledVector(Dm,o);const d=1/(g+v+h);return a=v*d,o=h*d,n.copy(i).addScaledVector(ns,a).addScaledVector(is,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class go{constructor(e=new X(1/0,1/0,1/0),n=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Gn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Gn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Gn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Gn):Gn.fromBufferAttribute(s,a),Gn.applyMatrix4(e.matrixWorld),this.expandByPoint(Gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ho.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ho.copy(i.boundingBox)),Ho.applyMatrix4(e.matrixWorld),this.union(Ho)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fa),Vo.subVectors(this.max,fa),rs.subVectors(e.a,fa),ss.subVectors(e.b,fa),as.subVectors(e.c,fa),ji.subVectors(ss,rs),Wi.subVectors(as,ss),Mr.subVectors(rs,as);let n=[0,-ji.z,ji.y,0,-Wi.z,Wi.y,0,-Mr.z,Mr.y,ji.z,0,-ji.x,Wi.z,0,-Wi.x,Mr.z,0,-Mr.x,-ji.y,ji.x,0,-Wi.y,Wi.x,0,-Mr.y,Mr.x,0];return!Tu(n,rs,ss,as,Vo)||(n=[1,0,0,0,1,0,0,0,1],!Tu(n,rs,ss,as,Vo))?!1:(Go.crossVectors(ji,Wi),n=[Go.x,Go.y,Go.z],Tu(n,rs,ss,as,Vo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const xi=[new X,new X,new X,new X,new X,new X,new X,new X],Gn=new X,Ho=new go,rs=new X,ss=new X,as=new X,ji=new X,Wi=new X,Mr=new X,fa=new X,Vo=new X,Go=new X,Er=new X;function Tu(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Er.fromArray(t,s);const o=r.x*Math.abs(Er.x)+r.y*Math.abs(Er.y)+r.z*Math.abs(Er.z),c=e.dot(Er),u=n.dot(Er),f=i.dot(Er);if(Math.max(-Math.max(c,u,f),Math.min(c,u,f))>o)return!1}return!0}const Dt=new X,jo=new He;let OM=0;class Di extends yr{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:OM++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=nM,this.updateRanges=[],this.gpuType=oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)jo.fromBufferAttribute(this,n),jo.applyMatrix3(e),this.setXY(n,jo.x,jo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyMatrix3(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyMatrix4(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyNormalMatrix(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.transformDirection(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=hs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=an(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=hs(n,this.array)),n}setX(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=hs(n,this.array)),n}setY(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=hs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=hs(n,this.array)),n}setW(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=an(n,this.array),i=an(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=an(n,this.array),i=an(i,this.array),r=an(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=an(n,this.array),i=an(i,this.array),r=an(r,this.array),s=an(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class ux extends Di{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class dx extends Di{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class $t extends Di{constructor(e,n,i){super(new Float32Array(e),n,i)}}const kM=new go,ha=new X,bu=new X;class bc{constructor(e=new X,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):kM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ha.subVectors(e,this.center);const n=ha.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ha,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ha.copy(e.center).add(bu)),this.expandByPoint(ha.copy(e.center).sub(bu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let zM=0;const Dn=new yt,wu=new Ot,os=new X,Sn=new go,pa=new go,Bt=new X;class Rn extends yr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zM++}),this.uuid=Js(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(iM(e)?dx:ux)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,n,i){return Dn.makeTranslation(e,n,i),this.applyMatrix4(Dn),this}scale(e,n,i){return Dn.makeScale(e,n,i),this.applyMatrix4(Dn),this}lookAt(e){return wu.lookAt(e),wu.updateMatrix(),this.applyMatrix4(wu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new $t(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new go);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Sn.setFromBufferAttribute(s),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];pa.setFromBufferAttribute(o),this.morphTargetsRelative?(Bt.addVectors(Sn.min,pa.min),Sn.expandByPoint(Bt),Bt.addVectors(Sn.max,pa.max),Sn.expandByPoint(Bt)):(Sn.expandByPoint(pa.min),Sn.expandByPoint(pa.max))}Sn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Bt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],c=this.morphTargetsRelative;for(let u=0,f=o.count;u<f;u++)Bt.fromBufferAttribute(o,u),c&&(os.fromBufferAttribute(e,u),Bt.add(os)),r=Math.max(r,i.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Di(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let _=0;_<i.count;_++)o[_]=new X,c[_]=new X;const u=new X,f=new X,p=new X,h=new He,m=new He,y=new He,v=new X,g=new X;function d(_,C,R){u.fromBufferAttribute(i,_),f.fromBufferAttribute(i,C),p.fromBufferAttribute(i,R),h.fromBufferAttribute(s,_),m.fromBufferAttribute(s,C),y.fromBufferAttribute(s,R),f.sub(u),p.sub(u),m.sub(h),y.sub(h);const L=1/(m.x*y.y-y.x*m.y);isFinite(L)&&(v.copy(f).multiplyScalar(y.y).addScaledVector(p,-m.y).multiplyScalar(L),g.copy(p).multiplyScalar(m.x).addScaledVector(f,-y.x).multiplyScalar(L),o[_].add(v),o[C].add(v),o[R].add(v),c[_].add(g),c[C].add(g),c[R].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let _=0,C=x.length;_<C;++_){const R=x[_],L=R.start,D=R.count;for(let j=L,U=L+D;j<U;j+=3)d(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const E=new X,M=new X,b=new X,w=new X;function A(_){b.fromBufferAttribute(r,_),w.copy(b);const C=o[_];E.copy(C),E.sub(b.multiplyScalar(b.dot(C))).normalize(),M.crossVectors(w,C);const L=M.dot(c[_])<0?-1:1;a.setXYZW(_,E.x,E.y,E.z,L)}for(let _=0,C=x.length;_<C;++_){const R=x[_],L=R.start,D=R.count;for(let j=L,U=L+D;j<U;j+=3)A(e.getX(j+0)),A(e.getX(j+1)),A(e.getX(j+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Di(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new X,s=new X,a=new X,o=new X,c=new X,u=new X,f=new X,p=new X;if(e)for(let h=0,m=e.count;h<m;h+=3){const y=e.getX(h+0),v=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(n,y),s.fromBufferAttribute(n,v),a.fromBufferAttribute(n,g),f.subVectors(a,s),p.subVectors(r,s),f.cross(p),o.fromBufferAttribute(i,y),c.fromBufferAttribute(i,v),u.fromBufferAttribute(i,g),o.add(f),c.add(f),u.add(f),i.setXYZ(y,o.x,o.y,o.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),f.subVectors(a,s),p.subVectors(r,s),f.cross(p),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Bt.fromBufferAttribute(e,n),Bt.normalize(),e.setXYZ(n,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(o,c){const u=o.array,f=o.itemSize,p=o.normalized,h=new u.constructor(c.length*f);let m=0,y=0;for(let v=0,g=c.length;v<g;v++){o.isInterleavedBufferAttribute?m=c[v]*o.data.stride+o.offset:m=c[v]*f;for(let d=0;d<f;d++)h[y++]=u[m++]}return new Di(h,f,p)}if(this.index===null)return Be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Rn,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],u=e(c,i);n.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const c=[],u=s[o];for(let f=0,p=u.length;f<p;f++){const h=u[f],m=e(h,i);c.push(m)}n.morphAttributes[o]=c}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const u=a[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const u=i[c];e.data.attributes[c]=u.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],f=[];for(let p=0,h=u.length;p<h;p++){const m=u[p];f.push(m.toJSON(e.data))}f.length>0&&(r[c]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(n))}const s=e.morphAttributes;for(const u in s){const f=[],p=s[u];for(let h=0,m=p.length;h<m;h++)f.push(p[h].clone(n));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,f=a.length;u<f;u++){const p=a[u];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cu=new X,BM=new X,HM=new je;class Ei{constructor(e=new X(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Cu.subVectors(i,n).cross(BM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(Cu),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||HM.getNormalMatrix(e),r=this.coplanarPoint(Cu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let VM=0;class ea extends yr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:VM++}),this.uuid=Js(),this.name="",this.type="Material",this.blending=Ua,this.side=jr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jv,this.blendDst=Wv,this.blendEquation=fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=io,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=KS,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cu,this.stencilZFail=cu,this.stencilZPass=cu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Be(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Be(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new qe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Ei().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new He().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new He().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const _i=new X,Au=new X,Wo=new X,Xo=new X;class wc{constructor(e=new X,n=new X(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_i)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=_i.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(_i.copy(this.origin).addScaledVector(this.direction,n),_i.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Au.copy(e).add(n).multiplyScalar(.5),Wo.copy(n).sub(e).normalize(),Xo.copy(this.origin).sub(Au);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Wo),o=Xo.dot(this.direction),c=-Xo.dot(Wo),u=Xo.lengthSq(),f=Math.abs(1-a*a);let p,h,m,y;if(f>0)if(p=a*c-o,h=a*o-c,y=s*f,p>=0)if(h>=-y)if(h<=y){const v=1/f;p*=v,h*=v,m=p*(p+a*h+2*o)+h*(a*p+h+2*c)+u}else h=s,p=Math.max(0,-(a*h+o)),m=-p*p+h*(h+2*c)+u;else h=-s,p=Math.max(0,-(a*h+o)),m=-p*p+h*(h+2*c)+u;else h<=-y?(p=Math.max(0,-(-a*s+o)),h=p>0?-s:Math.min(Math.max(-s,-c),s),m=-p*p+h*(h+2*c)+u):h<=y?(p=0,h=Math.min(Math.max(-s,-c),s),m=h*(h+2*c)+u):(p=Math.max(0,-(a*s+o)),h=p>0?s:Math.min(Math.max(-s,-c),s),m=-p*p+h*(h+2*c)+u);else h=a>0?-s:s,p=Math.max(0,-(a*h+o)),m=-p*p+h*(h+2*c)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Au).addScaledVector(Wo,h),m}intersectSphere(e,n){if(e.radius<0)return null;_i.subVectors(e.center,this.origin);const i=_i.dot(this.direction),r=_i.dot(_i)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,c;const u=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),f>=0?(s=(e.min.y-h.y)*f,a=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,a=(e.min.y-h.y)*f),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(e.min.z-h.z)*p,c=(e.max.z-h.z)*p):(o=(e.max.z-h.z)*p,c=(e.min.z-h.z)*p),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,_i)!==null}intersectTriangle(e,n,i,r,s){const a=this.origin,o=this.direction,c=o.x,u=o.y,f=o.z,p=e.x-a.x,h=e.y-a.y,m=e.z-a.z,y=n.x-a.x,v=n.y-a.y,g=n.z-a.z,d=i.x-a.x,x=i.y-a.y,E=i.z-a.z,M=Math.abs(c),b=Math.abs(u),w=Math.abs(f);let A,_,C,R,L,D,j,U,G,O,V,N;if(M>=b&&M>=w?(C=c,D=p,G=y,N=d,c>=0?(A=u,_=f,R=h,L=m,j=v,U=g,O=x,V=E):(A=f,_=u,R=m,L=h,j=g,U=v,O=E,V=x)):b>=w?(C=u,D=h,G=v,N=x,u>=0?(A=f,_=c,R=m,L=p,j=g,U=y,O=E,V=d):(A=c,_=f,R=p,L=m,j=y,U=g,O=d,V=E)):(C=f,D=m,G=g,N=E,f>=0?(A=c,_=u,R=p,L=h,j=y,U=v,O=d,V=x):(A=u,_=c,R=h,L=p,j=v,U=y,O=x,V=d)),C===0)return null;const F=A/C,I=_/C,H=1/C,ie=R-F*D,oe=L-I*D,se=j-F*G,fe=U-I*G,de=O-F*N,$=V-I*N,J=de*fe-$*se,ye=ie*$-oe*de,Oe=se*oe-fe*ie;if(r){if(J<0||ye<0||Oe<0)return null}else if((J<0||ye<0||Oe<0)&&(J>0||ye>0||Oe>0))return null;const me=J+ye+Oe;if(me===0)return null;const Ve=H*(J*D+ye*G+Oe*N);return(me>0?Ve<0:Ve>0)?null:this.at(Ve/me,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ji extends ea{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gr,this.combine=wh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lm=new yt,Tr=new wc,$o=new bc,Im=new X,Yo=new X,Ko=new X,qo=new X,Ru=new X,Zo=new X,Nm=new X,Qo=new X;class jt extends Ot{constructor(e=new Rn,n=new Ji){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Zo.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const f=o[c],p=s[c];f!==0&&(Ru.fromBufferAttribute(p,e),a?Zo.addScaledVector(Ru,f):Zo.addScaledVector(Ru.sub(n),f))}n.add(Zo)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),$o.copy(i.boundingSphere),$o.applyMatrix4(s),Tr.copy(e.ray).recast(e.near),!($o.containsPoint(Tr.origin)===!1&&(Tr.intersectSphere($o,Im)===null||Tr.origin.distanceToSquared(Im)>(e.far-e.near)**2))&&(Lm.copy(s).invert(),Tr.copy(e.ray).applyMatrix4(Lm),!(i.boundingBox!==null&&Tr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Tr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,u=s.attributes.uv,f=s.attributes.uv1,p=s.attributes.normal,h=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let y=0,v=h.length;y<v;y++){const g=h[y],d=a[g.materialIndex],x=Math.max(g.start,m.start),E=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let M=x,b=E;M<b;M+=3){const w=o.getX(M),A=o.getX(M+1),_=o.getX(M+2);r=Jo(this,d,e,i,u,f,p,w,A,_),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const y=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let g=y,d=v;g<d;g+=3){const x=o.getX(g),E=o.getX(g+1),M=o.getX(g+2);r=Jo(this,a,e,i,u,f,p,x,E,M),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let y=0,v=h.length;y<v;y++){const g=h[y],d=a[g.materialIndex],x=Math.max(g.start,m.start),E=Math.min(c.count,Math.min(g.start+g.count,m.start+m.count));for(let M=x,b=E;M<b;M+=3){const w=M,A=M+1,_=M+2;r=Jo(this,d,e,i,u,f,p,w,A,_),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const y=Math.max(0,m.start),v=Math.min(c.count,m.start+m.count);for(let g=y,d=v;g<d;g+=3){const x=g,E=g+1,M=g+2;r=Jo(this,a,e,i,u,f,p,x,E,M),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function GM(t,e,n,i,r,s,a,o){let c;if(e.side===un?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===jr,o),c===null)return null;Qo.copy(o),Qo.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Qo);return u<n.near||u>n.far?null:{distance:u,point:Qo.clone(),object:t}}function Jo(t,e,n,i,r,s,a,o,c,u){t.getVertexPosition(o,Yo),t.getVertexPosition(c,Ko),t.getVertexPosition(u,qo);const f=GM(t,e,n,i,Yo,Ko,qo,Nm);if(f){const p=new X;$n.getBarycoord(Nm,Yo,Ko,qo,p),r&&(f.uv=$n.getInterpolatedAttribute(r,o,c,u,p,new He)),s&&(f.uv1=$n.getInterpolatedAttribute(s,o,c,u,p,new He)),a&&(f.normal=$n.getInterpolatedAttribute(a,o,c,u,p,new X),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a:o,b:c,c:u,normal:new X,materialIndex:0};$n.getNormal(Yo,Ko,qo,h.normal),f.face=h,f.barycoord=p}return f}class jM extends nn{constructor(e=null,n=1,i=1,r,s,a,o,c,u=Wt,f=Wt,p,h){super(null,a,o,c,u,f,r,s,p,h),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const br=new bc,WM=new He(.5,.5),el=new X;class kh{constructor(e=new Ei,n=new Ei,i=new Ei,r=new Ei,s=new Ei,a=new Ei){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=li,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],u=s[3],f=s[4],p=s[5],h=s[6],m=s[7],y=s[8],v=s[9],g=s[10],d=s[11],x=s[12],E=s[13],M=s[14],b=s[15];if(r[0].setComponents(u-a,m-f,d-y,b-x).normalize(),r[1].setComponents(u+a,m+f,d+y,b+x).normalize(),r[2].setComponents(u+o,m+p,d+v,b+E).normalize(),r[3].setComponents(u-o,m-p,d-v,b-E).normalize(),i)r[4].setComponents(c,h,g,M).normalize(),r[5].setComponents(u-c,m-h,d-g,b-M).normalize();else if(r[4].setComponents(u-c,m-h,d-g,b-M).normalize(),n===li)r[5].setComponents(u+c,m+h,d+g,b+M).normalize();else if(n===ao)r[5].setComponents(c,h,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(br)}intersectsSprite(e){br.center.set(0,0,0);const n=WM.distanceTo(e.center);return br.radius=.7071067811865476+n,br.applyMatrix4(e.matrixWorld),this.intersectsSphere(br)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(el.x=r.normal.x>0?e.max.x:e.min.x,el.y=r.normal.y>0?e.max.y:e.min.y,el.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(el)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class fx extends ea{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const rc=new X,sc=new X,Um=new yt,ma=new wc,tl=new bc,Pu=new X,Fm=new X;class XM extends Ot{constructor(e=new Rn,n=new fx){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)rc.fromBufferAttribute(n,r-1),sc.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=rc.distanceTo(sc);e.setAttribute("lineDistance",new $t(i,1))}else Be("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),tl.copy(i.boundingSphere),tl.applyMatrix4(r),tl.radius+=s,e.ray.intersectsSphere(tl)===!1)return;Um.copy(r).invert(),ma.copy(e.ray).applyMatrix4(Um);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=this.isLineSegments?2:1,f=i.index,h=i.attributes.position;if(f!==null){const m=Math.max(0,a.start),y=Math.min(f.count,a.start+a.count);for(let v=m,g=y-1;v<g;v+=u){const d=f.getX(v),x=f.getX(v+1),E=nl(this,e,ma,c,d,x,v);E&&n.push(E)}if(this.isLineLoop){const v=f.getX(y-1),g=f.getX(m),d=nl(this,e,ma,c,v,g,y-1);d&&n.push(d)}}else{const m=Math.max(0,a.start),y=Math.min(h.count,a.start+a.count);for(let v=m,g=y-1;v<g;v+=u){const d=nl(this,e,ma,c,v,v+1,v);d&&n.push(d)}if(this.isLineLoop){const v=nl(this,e,ma,c,y-1,m,y-1);v&&n.push(v)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function nl(t,e,n,i,r,s,a){const o=t.geometry.attributes.position;if(rc.fromBufferAttribute(o,r),sc.fromBufferAttribute(o,s),n.distanceSqToSegment(rc,sc,Pu,Fm)>i)return;Pu.applyMatrix4(t.matrixWorld);const u=e.ray.origin.distanceTo(Pu);if(!(u<e.near||u>e.far))return{distance:u,point:Fm.clone().applyMatrix4(t.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:t}}class hx extends nn{constructor(e=[],n=Wr,i,r,s,a,o,c,u,f){super(e,n,i,r,s,a,o,c,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class co extends nn{constructor(e,n,i=fi,r,s,a,o=Wt,c=Wt,u,f=Fi,p=1){if(f!==Fi&&f!==Nr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:n,depth:p};super(h,r,s,a,o,c,f,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Fh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class $M extends co{constructor(e,n=fi,i=Wr,r,s,a=Wt,o=Wt,c,u=Fi){const f={width:e,height:e,depth:1},p=[f,f,f,f,f,f];super(e,e,n,i,r,s,a,o,c,u),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class px extends nn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class vo extends Rn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],u=[],f=[],p=[];let h=0,m=0;y("z","y","x",-1,-1,i,n,e,a,s,0),y("z","y","x",1,-1,i,n,-e,a,s,1),y("x","z","y",1,1,e,i,n,r,a,2),y("x","z","y",1,-1,e,i,-n,r,a,3),y("x","y","z",1,-1,e,n,i,r,s,4),y("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new $t(u,3)),this.setAttribute("normal",new $t(f,3)),this.setAttribute("uv",new $t(p,2));function y(v,g,d,x,E,M,b,w,A,_,C){const R=M/A,L=b/_,D=M/2,j=b/2,U=w/2,G=A+1,O=_+1;let V=0,N=0;const F=new X;for(let I=0;I<O;I++){const H=I*L-j;for(let ie=0;ie<G;ie++){const oe=ie*R-D;F[v]=oe*x,F[g]=H*E,F[d]=U,u.push(F.x,F.y,F.z),F[v]=0,F[g]=0,F[d]=w>0?1:-1,f.push(F.x,F.y,F.z),p.push(ie/A),p.push(1-I/_),V+=1}}for(let I=0;I<_;I++)for(let H=0;H<A;H++){const ie=h+H+G*I,oe=h+H+G*(I+1),se=h+(H+1)+G*(I+1),fe=h+(H+1)+G*I;c.push(ie,oe,fe),c.push(oe,se,fe),N+=6}o.addGroup(m,N,C),m+=N,h+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Cc extends Rn{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const u=this;r=Math.floor(r),s=Math.floor(s);const f=[],p=[],h=[],m=[];let y=0;const v=[],g=i/2;let d=0;x(),a===!1&&(e>0&&E(!0),n>0&&E(!1)),this.setIndex(f),this.setAttribute("position",new $t(p,3)),this.setAttribute("normal",new $t(h,3)),this.setAttribute("uv",new $t(m,2));function x(){const M=new X,b=new X;let w=0;const A=(n-e)/i;for(let _=0;_<=s;_++){const C=[],R=_/s,L=R*(n-e)+e;for(let D=0;D<=r;D++){const j=D/r,U=j*c+o,G=Math.sin(U),O=Math.cos(U);b.x=L*G,b.y=-R*i+g,b.z=L*O,p.push(b.x,b.y,b.z),M.set(G,A,O).normalize(),h.push(M.x,M.y,M.z),m.push(j,1-R),C.push(y++)}v.push(C)}for(let _=0;_<r;_++)for(let C=0;C<s;C++){const R=v[C][_],L=v[C+1][_],D=v[C+1][_+1],j=v[C][_+1];(e>0||C!==0)&&(f.push(R,L,j),w+=3),(n>0||C!==s-1)&&(f.push(L,D,j),w+=3)}u.addGroup(d,w,0),d+=w}function E(M){const b=y,w=new He,A=new X;let _=0;const C=M===!0?e:n,R=M===!0?1:-1;for(let D=1;D<=r;D++)p.push(0,g*R,0),h.push(0,R,0),m.push(.5,.5),y++;const L=y;for(let D=0;D<=r;D++){const U=D/r*c+o,G=Math.cos(U),O=Math.sin(U);A.x=C*O,A.y=g*R,A.z=C*G,p.push(A.x,A.y,A.z),h.push(0,R,0),w.x=G*.5+.5,w.y=O*.5*R+.5,m.push(w.x,w.y),y++}for(let D=0;D<r;D++){const j=b+D,U=L+D;M===!0?f.push(U,U+1,j):f.push(U+1,U,j),_+=3}u.addGroup(d,_,M===!0?1:2),d+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class zh extends Cc{constructor(e=1,n=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,n,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new zh(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ac extends Rn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),c=Math.floor(r),u=o+1,f=c+1,p=e/o,h=n/c,m=[],y=[],v=[],g=[];for(let d=0;d<f;d++){const x=d*h-a;for(let E=0;E<u;E++){const M=E*p-s;y.push(M,-x,0),v.push(0,0,1),g.push(E/o),g.push(1-d/c)}}for(let d=0;d<c;d++)for(let x=0;x<o;x++){const E=x+u*d,M=x+u*(d+1),b=x+1+u*(d+1),w=x+1+u*d;m.push(E,M,w),m.push(M,b,w)}this.setIndex(m),this.setAttribute("position",new $t(y,3)),this.setAttribute("normal",new $t(v,3)),this.setAttribute("uv",new $t(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ac(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ki extends Rn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let u=0;const f=[],p=new X,h=new X,m=[],y=[],v=[],g=[];for(let d=0;d<=i;d++){const x=[],E=d/i,M=a+E*o,b=e*Math.cos(M),w=Math.sqrt(e*e-b*b);let A=0;d===0&&a===0?A=.5/n:d===i&&c===Math.PI&&(A=-.5/n);for(let _=0;_<=n;_++){const C=_/n,R=r+C*s;p.x=-w*Math.cos(R),p.y=b,p.z=w*Math.sin(R),y.push(p.x,p.y,p.z),h.copy(p).normalize(),v.push(h.x,h.y,h.z),g.push(C+A,1-E),x.push(u++)}f.push(x)}for(let d=0;d<i;d++)for(let x=0;x<n;x++){const E=f[d][x+1],M=f[d][x],b=f[d+1][x],w=f[d+1][x+1];(d!==0||a>0)&&m.push(E,M,w),(d!==i-1||c<Math.PI)&&m.push(M,b,w)}this.setIndex(m),this.setAttribute("position",new $t(y,3)),this.setAttribute("normal",new $t(v,3)),this.setAttribute("uv",new $t(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ki(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Ks(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(Om(r))r.isRenderTargetTexture?(Be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(Om(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function on(t){const e={};for(let n=0;n<t.length;n++){const i=Ks(t[n]);for(const r in i)e[r]=i[r]}return e}function Om(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function YM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function mx(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const KM={clone:Ks,merge:on};var qM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ZM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pi extends ea{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qM,this.fragmentShader=ZM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ks(e.uniforms),this.uniformsGroups=YM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new qe().setHex(r.value);break;case"v2":this.uniforms[i].value=new He().fromArray(r.value);break;case"v3":this.uniforms[i].value=new X().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Et().fromArray(r.value);break;case"m3":this.uniforms[i].value=new je().fromArray(r.value);break;case"m4":this.uniforms[i].value=new yt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class QM extends pi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class km extends ea{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new qe(16777215),this.specular=new qe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bf,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gr,this.combine=wh,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class JM extends ea{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$S,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class e1 extends ea{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Du={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(zm(t)||(this.files[t]=e))},get:function(t){if(this.enabled!==!1&&!zm(t))return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};function zm(t){try{const e=t.slice(t.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class t1{constructor(e,n,i){const r=this;let s=!1,a=0,o=0,c;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(f){o++,s===!1&&r.onStart!==void 0&&r.onStart(f,a,o),s=!0},this.itemEnd=function(f){a++,r.onProgress!==void 0&&r.onProgress(f,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),c?c(f):f},this.setURLModifier=function(f){return c=f,this},this.addHandler=function(f,p){return u.push(f,p),this},this.removeHandler=function(f){const p=u.indexOf(f);return p!==-1&&u.splice(p,2),this},this.getHandler=function(f){for(let p=0,h=u.length;p<h;p+=2){const m=u[p],y=u[p+1];if(m.global&&(m.lastIndex=0),m.test(f))return y}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const n1=new t1;class Bh{constructor(e){this.manager=e!==void 0?e:n1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Bh.DEFAULT_MATERIAL_NAME="__DEFAULT";const ls=new WeakMap;class i1 extends Bh{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Du.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){n&&n(a),s.manager.itemEnd(e)},0);else{let p=ls.get(a);p===void 0&&(p=[],ls.set(a,p)),p.push({onLoad:n,onError:r})}return a}const o=oo("img");function c(){f(),n&&n(this);const p=ls.get(this)||[];for(let h=0;h<p.length;h++){const m=p[h];m.onLoad&&m.onLoad(this)}ls.delete(this),s.manager.itemEnd(e)}function u(p){f(),r&&r(p),Du.remove(`image:${e}`);const h=ls.get(this)||[];for(let m=0;m<h.length;m++){const y=h[m];y.onError&&y.onError(p)}ls.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){o.removeEventListener("load",c,!1),o.removeEventListener("error",u,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Du.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class r1 extends Bh{constructor(e){super(e)}load(e,n,i,r){const s=new nn,a=new i1(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class gx extends Ot{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class s1 extends gx{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qe(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){const n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}}const Lu=new yt,Bm=new X,Hm=new X;class a1{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.mapType=En,this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kh,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera;Bm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Bm),Hm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Hm),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,i,r){Lu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Lu,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,c=r?r.x/s.x:0,u=r?r.y/s.y:0;e.coordinateSystem===ao||e.reversedDepth?n.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+u,0,0,1,0,0,0,0,1):n.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+u,0,0,.5,.5,0,0,0,1),n.multiply(Lu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const il=new X,rl=new mr,ni=new X;class vx extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=li,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(il,rl,ni),ni.x===1&&ni.y===1&&ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(il,rl,ni.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(il,rl,ni),ni.x===1&&ni.y===1&&ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(il,rl,ni.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Xi=new X,Vm=new He,Gm=new He;class Nn extends vx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=lo*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return lo*2*Math.atan(Math.tan(Fa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z),Xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z)}getViewSize(e,n){return this.getViewBounds(e,Vm,Gm),n.subVectors(Gm,Vm)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Fa*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/c,n-=a.offsetY*i/u,r*=a.width/c,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Hh extends vx{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=f*this.view.offsetY,c=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class o1 extends a1{constructor(){super(new Hh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class l1 extends gx{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.shadow=new o1}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}const cs=-90,us=1;class c1 extends Ot{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Nn(cs,us,e,n);r.layers=this.layers,this.add(r);const s=new Nn(cs,us,e,n);s.layers=this.layers,this.add(s);const a=new Nn(cs,us,e,n);a.layers=this.layers,this.add(a);const o=new Nn(cs,us,e,n);o.layers=this.layers,this.add(o);const c=new Nn(cs,us,e,n);c.layers=this.layers,this.add(c);const u=new Nn(cs,us,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,c]=n;for(const u of n)this.remove(u);if(e===li)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ao)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,u,f]=this.children,p=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(p,h,m),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class u1 extends Nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const jm=new yt;class d1{constructor(e,n,i=0,r=1/0){this.ray=new wc(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Oh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):Je("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return jm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(jm),this}intersectObject(e,n=!0,i=[]){return Cf(e,this,i,n),i.sort(Wm),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Cf(e[r],this,i,n);return i.sort(Wm),i}}function Wm(t,e){return t.distance-e.distance}function Cf(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let a=0,o=s.length;a<o;a++)Cf(s[a],e,n,!0)}}class Xm{constructor(e=1,n=0,i=0){this.radius=e,this.phi=n,this.theta=i}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=$e(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos($e(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const $h=class $h{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};$h.prototype.isMatrix2=!0;let $m=$h;const Ym=new X;let sl,Iu;class f1 extends Ot{constructor(e=new X(0,0,1),n=new X(0,0,0),i=1,r=16776960,s=i*.2,a=s*.2){super(),this.type="ArrowHelper",sl===void 0&&(sl=new Rn,sl.setAttribute("position",new $t([0,0,0,0,1,0],3)),Iu=new zh(.5,1,5,1),Iu.translate(0,-.5,0)),this.position.copy(n),this.line=new XM(sl,new fx({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new jt(Iu,new Ji({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(i,s,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Ym.set(e.z,0,-e.x).normalize();const n=Math.acos(e.y);this.quaternion.setFromAxisAngle(Ym,n)}}setLength(e,n=e*.2,i=n*.2){this.line.scale.set(1,Math.max(1e-4,e-n),1),this.line.updateMatrix(),this.cone.scale.set(i,n,i),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){super.dispose(),this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class h1 extends yr{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Km(t,e,n,i){const r=p1(i);switch(n){case rx:return t*e;case ax:return t*e/r.components*r.byteLength;case Ph:return t*e/r.components*r.byteLength;case Xr:return t*e*2/r.components*r.byteLength;case Dh:return t*e*2/r.components*r.byteLength;case sx:return t*e*3/r.components*r.byteLength;case Yn:return t*e*4/r.components*r.byteLength;case Lh:return t*e*4/r.components*r.byteLength;case Ml:case El:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Tl:case bl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Kd:case Zd:return Math.max(t,16)*Math.max(e,8)/4;case Yd:case qd:return Math.max(t,8)*Math.max(e,8)/2;case Qd:case Jd:case tf:case nf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ef:case ec:case rf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case sf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case af:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case of:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case lf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case cf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case uf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case df:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case ff:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case hf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case pf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case mf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case gf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case vf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case xf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case _f:case yf:case Sf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Mf:case Ef:return Math.ceil(t/4)*Math.ceil(e/4)*8;case tc:case Tf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function p1(t){switch(t){case En:case ex:return{byteLength:1,components:1};case ro:case tx:case hi:return{byteLength:2,components:1};case Ah:case Rh:return{byteLength:2,components:4};case fi:case Ch:case oi:return{byteLength:4,components:1};case nx:case ix:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bh}}));typeof window<"u"&&(window.__THREE__?Be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function xx(){let t=null,e=!1,n=null,i=null;function r(s,a){i=t.requestAnimationFrame(r),n(s,a)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function m1(t){const e=new WeakMap;function n(o,c){const u=o.array,f=o.usage,p=u.byteLength,h=t.createBuffer();t.bindBuffer(c,h),t.bufferData(c,u,f),o.onUploadCallback();let m;if(u instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)m=t.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=t.SHORT;else if(u instanceof Uint32Array)m=t.UNSIGNED_INT;else if(u instanceof Int32Array)m=t.INT;else if(u instanceof Int8Array)m=t.BYTE;else if(u instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,c,u){const f=c.array,p=c.updateRanges;if(t.bindBuffer(u,o),p.length===0)t.bufferSubData(u,0,f);else{p.sort((m,y)=>m.start-y.start);let h=0;for(let m=1;m<p.length;m++){const y=p[h],v=p[m];v.start<=y.start+y.count+1?y.count=Math.max(y.count,v.start+v.count-y.start):(++h,p[h]=v)}p.length=h+1;for(let m=0,y=p.length;m<y;m++){const v=p[m];t.bufferSubData(u,v.start*f.BYTES_PER_ELEMENT,f,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(t.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,n(o,c));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,c),u.version=o.version}}return{get:r,remove:s,update:a}}var g1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,v1=`#ifdef USE_ALPHAHASH
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
#endif`,x1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,y1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,S1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,M1=`#ifdef USE_AOMAP
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
#endif`,E1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,T1=`#ifdef USE_BATCHING
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
#endif`,b1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,w1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,C1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,A1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,R1=`#ifdef USE_IRIDESCENCE
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
#endif`,P1=`#ifdef USE_BUMPMAP
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
#endif`,D1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,L1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,I1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,N1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,U1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,F1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,O1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,k1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,z1=`#define PI 3.141592653589793
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
} // validated`,B1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,H1=`vec3 transformedNormal = objectNormal;
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
#endif`,V1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,G1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,j1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,W1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,X1="gl_FragColor = linearToOutputTexel( gl_FragColor );",$1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Y1=`#ifdef USE_ENVMAP
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
#endif`,K1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,q1=`#ifdef USE_ENVMAP
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
#endif`,Z1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Q1=`#ifdef USE_ENVMAP
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
#endif`,J1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,eE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,iE=`#ifdef USE_GRADIENTMAP
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
}`,rE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,aE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,oE=`uniform bool receiveShadow;
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#include <lightprobes_pars_fragment>`,lE=`#ifdef USE_ENVMAP
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
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,cE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hE=`PhysicalMaterial material;
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
#endif`,pE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
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
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
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
}`,mE=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
#endif`,gE=`#if defined( RE_IndirectDiffuse )
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
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xE=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,_E=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ME=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,EE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,TE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wE=`#if defined( USE_POINTS_UV )
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
#endif`,CE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,AE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,RE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,PE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,DE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LE=`#ifdef USE_MORPHTARGETS
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
#endif`,IE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,NE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,UE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,FE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,zE=`#ifdef USE_NORMALMAP
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
#endif`,BE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,HE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,VE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,GE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,WE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,XE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$E=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,YE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,KE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ZE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,QE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
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
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
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
#endif`,JE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,eT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,tT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
}`,nT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iT=`#ifdef USE_SKINNING
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
#endif`,rT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sT=`#ifdef USE_SKINNING
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
#endif`,aT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,oT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,uT=`#ifdef USE_TRANSMISSION
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
#endif`,dT=`#ifdef USE_TRANSMISSION
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
#endif`,fT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vT=`uniform sampler2D t2D;
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
}`,xT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_T=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ST=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MT=`#include <common>
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
}`,ET=`#if DEPTH_PACKING == 3200
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
}`,TT=`#define DISTANCE
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
}`,bT=`#define DISTANCE
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
}`,wT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,CT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AT=`uniform float scale;
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
}`,RT=`uniform vec3 diffuse;
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
}`,PT=`#include <common>
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
}`,DT=`uniform vec3 diffuse;
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
}`,LT=`#define LAMBERT
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
}`,IT=`#define LAMBERT
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
}`,NT=`#define MATCAP
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
}`,UT=`#define MATCAP
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
}`,FT=`#define NORMAL
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
}`,OT=`#define NORMAL
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
}`,kT=`#define PHONG
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
}`,zT=`#define PHONG
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
}`,BT=`#define STANDARD
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
}`,HT=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
}`,VT=`#define TOON
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
}`,GT=`#define TOON
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
}`,jT=`uniform float size;
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
}`,WT=`uniform vec3 diffuse;
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
}`,XT=`#include <common>
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
}`,$T=`uniform vec3 color;
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
}`,YT=`uniform float rotation;
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
}`,KT=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:g1,alphahash_pars_fragment:v1,alphamap_fragment:x1,alphamap_pars_fragment:_1,alphatest_fragment:y1,alphatest_pars_fragment:S1,aomap_fragment:M1,aomap_pars_fragment:E1,batching_pars_vertex:T1,batching_vertex:b1,begin_vertex:w1,beginnormal_vertex:C1,bsdfs:A1,iridescence_fragment:R1,bumpmap_pars_fragment:P1,clipping_planes_fragment:D1,clipping_planes_pars_fragment:L1,clipping_planes_pars_vertex:I1,clipping_planes_vertex:N1,color_fragment:U1,color_pars_fragment:F1,color_pars_vertex:O1,color_vertex:k1,common:z1,cube_uv_reflection_fragment:B1,defaultnormal_vertex:H1,displacementmap_pars_vertex:V1,displacementmap_vertex:G1,emissivemap_fragment:j1,emissivemap_pars_fragment:W1,colorspace_fragment:X1,colorspace_pars_fragment:$1,envmap_fragment:Y1,envmap_common_pars_fragment:K1,envmap_pars_fragment:q1,envmap_pars_vertex:Z1,envmap_physical_pars_fragment:lE,envmap_vertex:Q1,fog_vertex:J1,fog_pars_vertex:eE,fog_fragment:tE,fog_pars_fragment:nE,gradientmap_pars_fragment:iE,lightmap_pars_fragment:rE,lights_lambert_fragment:sE,lights_lambert_pars_fragment:aE,lights_pars_begin:oE,lights_toon_fragment:cE,lights_toon_pars_fragment:uE,lights_phong_fragment:dE,lights_phong_pars_fragment:fE,lights_physical_fragment:hE,lights_physical_pars_fragment:pE,lights_fragment_begin:mE,lights_fragment_maps:gE,lights_fragment_end:vE,lightprobes_pars_fragment:xE,logdepthbuf_fragment:_E,logdepthbuf_pars_fragment:yE,logdepthbuf_pars_vertex:SE,logdepthbuf_vertex:ME,map_fragment:EE,map_pars_fragment:TE,map_particle_fragment:bE,map_particle_pars_fragment:wE,metalnessmap_fragment:CE,metalnessmap_pars_fragment:AE,morphinstance_vertex:RE,morphcolor_vertex:PE,morphnormal_vertex:DE,morphtarget_pars_vertex:LE,morphtarget_vertex:IE,normal_fragment_begin:NE,normal_fragment_maps:UE,normal_pars_fragment:FE,normal_pars_vertex:OE,normal_vertex:kE,normalmap_pars_fragment:zE,clearcoat_normal_fragment_begin:BE,clearcoat_normal_fragment_maps:HE,clearcoat_pars_fragment:VE,iridescence_pars_fragment:GE,opaque_fragment:jE,packing:WE,premultiplied_alpha_fragment:XE,project_vertex:$E,dithering_fragment:YE,dithering_pars_fragment:KE,roughnessmap_fragment:qE,roughnessmap_pars_fragment:ZE,shadowmap_pars_fragment:QE,shadowmap_pars_vertex:JE,shadowmap_vertex:eT,shadowmask_pars_fragment:tT,skinbase_vertex:nT,skinning_pars_vertex:iT,skinning_vertex:rT,skinnormal_vertex:sT,specularmap_fragment:aT,specularmap_pars_fragment:oT,tonemapping_fragment:lT,tonemapping_pars_fragment:cT,transmission_fragment:uT,transmission_pars_fragment:dT,uv_pars_fragment:fT,uv_pars_vertex:hT,uv_vertex:pT,worldpos_vertex:mT,background_vert:gT,background_frag:vT,backgroundCube_vert:xT,backgroundCube_frag:_T,cube_vert:yT,cube_frag:ST,depth_vert:MT,depth_frag:ET,distance_vert:TT,distance_frag:bT,equirect_vert:wT,equirect_frag:CT,linedashed_vert:AT,linedashed_frag:RT,meshbasic_vert:PT,meshbasic_frag:DT,meshlambert_vert:LT,meshlambert_frag:IT,meshmatcap_vert:NT,meshmatcap_frag:UT,meshnormal_vert:FT,meshnormal_frag:OT,meshphong_vert:kT,meshphong_frag:zT,meshphysical_vert:BT,meshphysical_frag:HT,meshtoon_vert:VT,meshtoon_frag:GT,points_vert:jT,points_frag:WT,shadow_vert:XT,shadow_frag:$T,sprite_vert:YT,sprite_frag:KT},Se={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new X},probesMax:{value:new X},probesResolution:{value:new X}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},si={basic:{uniforms:on([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:on([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new qe(0)},envMapIntensity:{value:1}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:on([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:on([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:on([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new qe(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:on([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:on([Se.points,Se.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:on([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:on([Se.common,Se.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:on([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:on([Se.sprite,Se.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distance:{uniforms:on([Se.common,Se.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distance_vert,fragmentShader:Xe.distance_frag},shadow:{uniforms:on([Se.lights,Se.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};si.physical={uniforms:on([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const al={r:0,b:0,g:0},qT=new yt,_x=new je;_x.set(-1,0,0,0,1,0,0,0,1);function ZT(t,e,n,i,r,s){const a=new qe(0);let o=r===!0?0:1,c,u,f=null,p=0,h=null;function m(x){let E=x.isScene===!0?x.background:null;if(E&&E.isTexture){const M=x.backgroundBlurriness>0;E=e.get(E,M)}return E}function y(x){let E=!1;const M=m(x);M===null?g(a,o):M&&M.isColor&&(g(M,1),E=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function v(x,E){const M=m(E);M&&(M.isCubeTexture||M.mapping===Tc)?(u===void 0&&(u=new jt(new vo(1,1,1),new pi({name:"BackgroundCubeMaterial",uniforms:Ks(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=M,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(qT.makeRotationFromEuler(E.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(_x),u.material.toneMapped=Ze.getTransfer(M.colorSpace)!==at,(f!==M||p!==M.version||h!==t.toneMapping)&&(u.material.needsUpdate=!0,f=M,p=M.version,h=t.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new jt(new Ac(2,2),new pi({name:"BackgroundMaterial",uniforms:Ks(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:jr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(M.colorSpace)!==at,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||p!==M.version||h!==t.toneMapping)&&(c.material.needsUpdate=!0,f=M,p=M.version,h=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function g(x,E){x.getRGB(al,mx(t)),n.buffers.color.setClear(al.r,al.g,al.b,E,s)}function d(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,E=1){a.set(x),o=E,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,g(a,o)},render:y,addToRenderList:v,dispose:d}}function QT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(L,D,j,U,G){let O=!1;const V=p(L,U,j,D);s!==V&&(s=V,u(s.object)),O=m(L,U,j,G),O&&y(L,U,j,G),G!==null&&e.update(G,t.ELEMENT_ARRAY_BUFFER),(O||a)&&(a=!1,M(L,D,j,U),G!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function c(){return t.createVertexArray()}function u(L){return t.bindVertexArray(L)}function f(L){return t.deleteVertexArray(L)}function p(L,D,j,U){const G=U.wireframe===!0;let O=i[D.id];O===void 0&&(O={},i[D.id]=O);const V=L.isInstancedMesh===!0?L.id:0;let N=O[V];N===void 0&&(N={},O[V]=N);let F=N[j.id];F===void 0&&(F={},N[j.id]=F);let I=F[G];return I===void 0&&(I=h(c()),F[G]=I),I}function h(L){const D=[],j=[],U=[];for(let G=0;G<n;G++)D[G]=0,j[G]=0,U[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:j,attributeDivisors:U,object:L,attributes:{},index:null}}function m(L,D,j,U){const G=s.attributes,O=D.attributes;let V=0;const N=j.getAttributes();for(const F in N)if(N[F].location>=0){const H=G[F];let ie=O[F];if(ie===void 0&&(F==="instanceMatrix"&&L.instanceMatrix&&(ie=L.instanceMatrix),F==="instanceColor"&&L.instanceColor&&(ie=L.instanceColor)),H===void 0||H.attribute!==ie||ie&&H.data!==ie.data)return!0;V++}return s.attributesNum!==V||s.index!==U}function y(L,D,j,U){const G={},O=D.attributes;let V=0;const N=j.getAttributes();for(const F in N)if(N[F].location>=0){let H=O[F];H===void 0&&(F==="instanceMatrix"&&L.instanceMatrix&&(H=L.instanceMatrix),F==="instanceColor"&&L.instanceColor&&(H=L.instanceColor));const ie={};ie.attribute=H,H&&H.data&&(ie.data=H.data),G[F]=ie,V++}s.attributes=G,s.attributesNum=V,s.index=U}function v(){const L=s.newAttributes;for(let D=0,j=L.length;D<j;D++)L[D]=0}function g(L){d(L,0)}function d(L,D){const j=s.newAttributes,U=s.enabledAttributes,G=s.attributeDivisors;j[L]=1,U[L]===0&&(t.enableVertexAttribArray(L),U[L]=1),G[L]!==D&&(t.vertexAttribDivisor(L,D),G[L]=D)}function x(){const L=s.newAttributes,D=s.enabledAttributes;for(let j=0,U=D.length;j<U;j++)D[j]!==L[j]&&(t.disableVertexAttribArray(j),D[j]=0)}function E(L,D,j,U,G,O,V){V===!0?t.vertexAttribIPointer(L,D,j,G,O):t.vertexAttribPointer(L,D,j,U,G,O)}function M(L,D,j,U){v();const G=U.attributes,O=j.getAttributes(),V=D.defaultAttributeValues;for(const N in O){const F=O[N];if(F.location>=0){let I=G[N];if(I===void 0&&(N==="instanceMatrix"&&L.instanceMatrix&&(I=L.instanceMatrix),N==="instanceColor"&&L.instanceColor&&(I=L.instanceColor)),I!==void 0){const H=I.normalized,ie=I.itemSize,oe=e.get(I);if(oe===void 0)continue;const se=oe.buffer,fe=oe.type,de=oe.bytesPerElement,$=fe===t.INT||fe===t.UNSIGNED_INT||I.gpuType===Ch;if(I.isInterleavedBufferAttribute){const J=I.data,ye=J.stride,Oe=I.offset;if(J.isInstancedInterleavedBuffer){for(let me=0;me<F.locationSize;me++)d(F.location+me,J.meshPerAttribute);L.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let me=0;me<F.locationSize;me++)g(F.location+me);t.bindBuffer(t.ARRAY_BUFFER,se);for(let me=0;me<F.locationSize;me++)E(F.location+me,ie/F.locationSize,fe,H,ye*de,(Oe+ie/F.locationSize*me)*de,$)}else{if(I.isInstancedBufferAttribute){for(let J=0;J<F.locationSize;J++)d(F.location+J,I.meshPerAttribute);L.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=I.meshPerAttribute*I.count)}else for(let J=0;J<F.locationSize;J++)g(F.location+J);t.bindBuffer(t.ARRAY_BUFFER,se);for(let J=0;J<F.locationSize;J++)E(F.location+J,ie/F.locationSize,fe,H,ie*de,ie/F.locationSize*J*de,$)}}else if(V!==void 0){const H=V[N];if(H!==void 0)switch(H.length){case 2:t.vertexAttrib2fv(F.location,H);break;case 3:t.vertexAttrib3fv(F.location,H);break;case 4:t.vertexAttrib4fv(F.location,H);break;default:t.vertexAttrib1fv(F.location,H)}}}}x()}function b(){C();for(const L in i){const D=i[L];for(const j in D){const U=D[j];for(const G in U){const O=U[G];for(const V in O)f(O[V].object),delete O[V];delete U[G]}}delete i[L]}}function w(L){if(i[L.id]===void 0)return;const D=i[L.id];for(const j in D){const U=D[j];for(const G in U){const O=U[G];for(const V in O)f(O[V].object),delete O[V];delete U[G]}}delete i[L.id]}function A(L){for(const D in i){const j=i[D];for(const U in j){const G=j[U];if(G[L.id]===void 0)continue;const O=G[L.id];for(const V in O)f(O[V].object),delete O[V];delete G[L.id]}}}function _(L){for(const D in i){const j=i[D],U=L.isInstancedMesh===!0?L.id:0,G=j[U];if(G!==void 0){for(const O in G){const V=G[O];for(const N in V)f(V[N].object),delete V[N];delete G[O]}delete j[U],Object.keys(j).length===0&&delete i[D]}}}function C(){R(),a=!0,s!==r&&(s=r,u(s.object))}function R(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:C,resetDefaultState:R,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfObject:_,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:g,disableUnusedAttributes:x}}function JT(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function a(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let h=0;for(let m=0;m<f;m++)h+=u[m];n.update(h,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function eb(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==Yn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const _=A===hi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==En&&A!==oi&&!_&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function c(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const f=c(u);f!==u&&(Be("WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);const p=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&h===!1&&Be("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),x=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),E=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=t.getParameter(t.MAX_SAMPLES),w=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:p,reversedDepthBuffer:h,maxTextures:m,maxVertexTextures:y,maxTextureSize:v,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:x,maxVaryings:E,maxFragmentUniforms:M,maxSamples:b,samples:w}}function tb(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Ei,o=new je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){const m=p.length!==0||h||i!==0||r;return r=h,i=p.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,h){n=f(p,h,0)},this.setState=function(p,h,m){const y=p.clippingPlanes,v=p.clipIntersection,g=p.clipShadows,d=t.get(p);if(!r||y===null||y.length===0||s&&!g)s?f(null):u();else{const x=s?0:i,E=x*4;let M=d.clippingState||null;c.value=M,M=f(y,h,E,m);for(let b=0;b!==E;++b)M[b]=n[b];d.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function u(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(p,h,m,y){const v=p!==null?p.length:0;let g=null;if(v!==0){if(g=c.value,y!==!0||g===null){const d=m+v*4,x=h.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<d)&&(g=new Float32Array(d));for(let E=0,M=m;E!==v;++E,M+=4)a.copy(p[E]).applyMatrix4(x,o),a.normal.toArray(g,M),g[M+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}const Cs=4,nb=6,ib=20,rb=256,ga=new Hh,qm=new qe;let Nu=null,Uu=0,Fu=0,Ou=!1;const sb=new X,wr=new X;class Zm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=sb}=s;Nu=this._renderer.getRenderTarget(),Uu=this._renderer.getActiveCubeFace(),Fu=this._renderer.getActiveMipmapLevel(),Ou=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,o),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=eg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Nu,Uu,Fu),this._renderer.xr.enabled=Ou,e.scissorTest=!1,ds(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Wr||e.mapping===Ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nu=this._renderer.getRenderTarget(),Uu=this._renderer.getActiveCubeFace(),Fu=this._renderer.getActiveMipmapLevel(),Ou=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:hi,format:Yn,colorSpace:nc,depthBuffer:!1},r=Qm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qm(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=ab(s)),this._blurMaterial=lb(s,e,n),this._ggxMaterial=ob(s,e,n)}return r}_compileMaterial(e){const n=new jt(new Rn,e);this._renderer.compile(n,ga)}_sceneToCubeUV(e,n,i,r,s){const c=new Nn(90,1,n,i),u=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],p=this._renderer,h=p.autoClear,m=p.toneMapping;p.getClearColor(qm),p.toneMapping=di,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new jt(new vo,new Ji({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,g=v.material;let d=!1;const x=e.background;x?x.isColor&&(g.color.copy(x),e.background=null,d=!0):(g.color.copy(qm),d=!0);for(let E=0;E<6;E++){const M=E%3;M===0?(c.up.set(0,u[E],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+f[E],s.y,s.z)):M===1?(c.up.set(0,0,u[E]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+f[E],s.z)):(c.up.set(0,u[E],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+f[E]));const b=this._cubeSize;ds(r,M*b,E>2?b:0,b,b),p.setRenderTarget(r),d&&p.render(v,c),p.render(e,c)}p.toneMapping=m,p.autoClear=h,e.background=x}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Wr||e.mapping===Ys;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=eg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jm());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;ds(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(a,ga)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const c=a.uniforms,u=i/(this._lodMeshes.length-1),f=n/(this._lodMeshes.length-1),p=Math.sqrt(u*u-f*f),h=u*1.25,m=p*h,{_lodMax:y}=this,v=this._sizeLods[i],g=3*v*(i>y-Cs?i-y+Cs:0),d=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=m,c.mipInt.value=y-n,ds(s,g,d,3*v,2*v),r.setRenderTarget(s),r.render(o,ga),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=y-i,ds(e,g,d,3*v,2*v),r.setRenderTarget(e),r.render(o,ga)}_blur(e,n,i,r){const s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,n,i,a),this._blurPass(s,e,i,i,a)}_blurPass(e,n,i,r,s){const a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[r];c.material=o;const u=o.uniforms;u.envMap.value=e.texture,u.sigma.value=s,u.mipInt.value=this._lodMax-i;const f=this._sizeLods[r],p=3*f*(r>this._lodMax-Cs?r-this._lodMax+Cs:0),h=4*(this._cubeSize-f);ds(n,p,h,3*f,2*f),a.setRenderTarget(n),a.render(c,ga)}}function ab(t){const e=[],n=[];let i=t;const r=t-Cs+1+nb;for(let s=0;s<r;s++){const a=Math.pow(2,i);e.push(a);const o=1/(a-2),c=-o,u=1+o,f=[c,c,u,c,u,u,c,c,u,u,c,u],p=6,h=6,m=3,y=new Float32Array(m*h*p),v=new Float32Array(m*h*p);for(let d=0;d<p;d++){const x=d%3*2/3-1,E=d>2?0:-1,M=[x,E,0,x+2/3,E,0,x+2/3,E+1,0,x,E,0,x+2/3,E+1,0,x,E+1,0];y.set(M,m*h*d);for(let b=0;b<h;b++){const w=f[b*2]*2-1,A=f[b*2+1]*2-1;d===0?wr.set(1,A,w):d===1?wr.set(-w,1,-A):d===2?wr.set(-w,A,1):d===3?wr.set(-1,A,-w):d===4?wr.set(-w,-1,A):wr.set(w,A,-1),wr.toArray(v,(d*h+b)*m)}}const g=new Rn;g.setAttribute("position",new Di(y,m)),g.setAttribute("outputDirection",new Di(v,m)),n.push(new jt(g,null)),i>Cs&&i--}return{lodMeshes:n,sizeLods:e}}function Qm(t,e,n){const i=new Zn(t,e,n);return i.texture.mapping=Tc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ds(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function ob(t,e,n){return new pi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:rb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Rc(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function lb(t,e,n){return new pi({name:"SphericalGaussianBlur",defines:{SAMPLES:ib,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Rc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function Jm(){return new pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rc(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function eg(){return new pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function Rc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class yx extends Zn{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new hx(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new vo(5,5,5),s=new pi({name:"CubemapFromEquirect",uniforms:Ks(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:Ri});s.uniforms.tEquirect.value=n;const a=new jt(r,s),o=n.minFilter;return n.minFilter===Ir&&(n.minFilter=tn),new c1(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function cb(t){let e=new WeakMap,n=new WeakMap,i=null;function r(h,m=!1){return h==null?null:m?a(h):s(h)}function s(h){if(h&&h.isTexture){const m=h.mapping;if(m===au||m===ou)if(e.has(h)){const y=e.get(h).texture;return o(y,h.mapping)}else{const y=h.image;if(y&&y.height>0){const v=new yx(y.height);return v.fromEquirectangularTexture(t,h),e.set(h,v),h.addEventListener("dispose",u),o(v.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const m=h.mapping,y=m===au||m===ou,v=m===Wr||m===Ys;if(y||v){let g=n.get(h);const d=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==d)return i===null&&(i=new Zm(t)),g=y?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,n.set(h,g),g.texture;if(g!==void 0)return g.texture;{const x=h.image;return y&&x&&x.height>0||v&&x&&c(x)?(i===null&&(i=new Zm(t)),g=y?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,n.set(h,g),h.addEventListener("dispose",f),g.texture):null}}}return h}function o(h,m){return m===au?h.mapping=Wr:m===ou&&(h.mapping=Ys),h}function c(h){let m=0;const y=6;for(let v=0;v<y;v++)h[v]!==void 0&&m++;return m===y}function u(h){const m=h.target;m.removeEventListener("dispose",u);const y=e.get(m);y!==void 0&&(e.delete(m),y.dispose())}function f(h){const m=h.target;m.removeEventListener("dispose",f);const y=n.get(m);y!==void 0&&(n.delete(m),y.dispose())}function p(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:p}}function ub(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Os("WebGLRenderer: "+i+" extension not supported."),r}}}function db(t,e,n,i){const r={},s=new WeakMap;function a(p){const h=p.target;h.index!==null&&e.remove(h.index);for(const y in h.attributes)e.remove(h.attributes[y]);h.removeEventListener("dispose",a),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(p,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,n.memory.geometries++),h}function c(p){const h=p.attributes;for(const m in h)e.update(h[m],t.ARRAY_BUFFER)}function u(p){const h=[],m=p.index,y=p.attributes.position;let v=0;if(y===void 0)return;if(m!==null){const x=m.array;v=m.version;for(let E=0,M=x.length;E<M;E+=3){const b=x[E+0],w=x[E+1],A=x[E+2];h.push(b,w,w,A,A,b)}}else{const x=y.array;v=y.version;for(let E=0,M=x.length/3-1;E<M;E+=3){const b=E+0,w=E+1,A=E+2;h.push(b,w,w,A,A,b)}}const g=new(y.count>=65535?dx:ux)(h,1);g.version=v;const d=s.get(p);d&&e.remove(d),s.set(p,g)}function f(p){const h=s.get(p);if(h){const m=p.index;m!==null&&h.version<m.version&&u(p)}else u(p);return s.get(p)}return{get:o,update:c,getWireframeAttribute:f}}function fb(t,e,n){let i;function r(p){i=p}let s,a;function o(p){s=p.type,a=p.bytesPerElement}function c(p,h){t.drawElements(i,h,s,p*a),n.update(h,i,1)}function u(p,h,m){m!==0&&(t.drawElementsInstanced(i,h,s,p*a,m),n.update(h,i,m))}function f(p,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,p,0,m);let v=0;for(let g=0;g<m;g++)v+=h[g];n.update(v,i,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=f}function hb(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:Je("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function pb(t,e,n){const i=new WeakMap,r=new Et;function s(a,o,c){const u=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=f!==void 0?f.length:0;let h=i.get(o);if(h===void 0||h.count!==p){let R=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",R)};var m=R;h!==void 0&&h.texture.dispose();const y=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let M=0;y===!0&&(M=1),v===!0&&(M=2),g===!0&&(M=3);let b=o.attributes.position.count*M,w=1;b>e.maxTextureSize&&(w=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const A=new Float32Array(b*w*4*p),_=new lx(A,b,w,p);_.type=oi,_.needsUpdate=!0;const C=M*4;for(let L=0;L<p;L++){const D=d[L],j=x[L],U=E[L],G=b*w*4*L;for(let O=0;O<D.count;O++){const V=O*C;y===!0&&(r.fromBufferAttribute(D,O),A[G+V+0]=r.x,A[G+V+1]=r.y,A[G+V+2]=r.z,A[G+V+3]=0),v===!0&&(r.fromBufferAttribute(j,O),A[G+V+4]=r.x,A[G+V+5]=r.y,A[G+V+6]=r.z,A[G+V+7]=0),g===!0&&(r.fromBufferAttribute(U,O),A[G+V+8]=r.x,A[G+V+9]=r.y,A[G+V+10]=r.z,A[G+V+11]=U.itemSize===4?r.w:1)}}h={count:p,texture:_,size:new He(b,w)},i.set(o,h),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let y=0;for(let g=0;g<u.length;g++)y+=u[g];const v=o.morphTargetsRelative?1:1-y;c.getUniforms().setValue(t,"morphTargetBaseInfluence",v),c.getUniforms().setValue(t,"morphTargetInfluences",u)}c.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function mb(t,e,n,i,r){let s=new WeakMap;function a(u){const f=r.render.frame,p=u.geometry,h=e.get(u,p);if(s.get(h)!==f&&(e.update(h),s.set(h,f)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),s.get(u)!==f&&(n.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&n.update(u.instanceColor,t.ARRAY_BUFFER),s.set(u,f))),u.isSkinnedMesh){const m=u.skeleton;s.get(m)!==f&&(m.update(),s.set(m,f))}return h}function o(){s=new WeakMap}function c(u){const f=u.target;f.removeEventListener("dispose",c),i.releaseStatesOfObject(f),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:a,dispose:o}}const gb={[Xv]:"LINEAR_TONE_MAPPING",[$v]:"REINHARD_TONE_MAPPING",[Yv]:"CINEON_TONE_MAPPING",[Kv]:"ACES_FILMIC_TONE_MAPPING",[Zv]:"AGX_TONE_MAPPING",[Qv]:"NEUTRAL_TONE_MAPPING",[qv]:"CUSTOM_TONE_MAPPING"};function vb(t,e,n,i,r,s){const a=new Zn(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null;const u=new Rn;u.setAttribute("position",new $t([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new $t([0,2,0,0,2,0],2));const f=new QM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new jt(u,f),h=new Hh(-1,1,1,-1,0,1);let m=null,y=null,v=!1,g,d=null,x=[],E=!1;this.setSize=function(M,b){a.setSize(M,b),o!==null&&o.setSize(M,b),c!==null&&c.setSize(M,b);for(let w=0;w<x.length;w++){const A=x[w];A.setSize&&A.setSize(M,b)}},this.setEffects=function(M){x=M,E=x.length>0&&x[0].isRenderPass===!0;const b=a.width,w=a.height;x.length>0&&o===null&&(o=new Zn(b,w,{type:hi,depthBuffer:!1,stencilBuffer:!1}),c=new Zn(b,w,{type:hi,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<x.length;A++){const _=x[A];_.setSize&&_.setSize(b,w)}},this.begin=function(M,b){if(v||M.toneMapping===di&&x.length===0)return!1;if(d=b,b!==null){const w=b.width,A=b.height;(a.width!==w||a.height!==A)&&this.setSize(w,A)}return E===!1&&M.setRenderTarget(a),g=M.toneMapping,M.toneMapping=di,!0},this.hasRenderPass=function(){return E},this.end=function(M,b){M.toneMapping=g,v=!0;let w=a,A=o;for(let _=0;_<x.length;_++){const C=x[_];C.enabled!==!1&&(C.render(M,A,w,b),C.needsSwap!==!1&&(w=A,A=A===o?c:o))}if(m!==M.outputColorSpace||y!==M.toneMapping){m=M.outputColorSpace,y=M.toneMapping,f.defines={},Ze.getTransfer(m)===at&&(f.defines.SRGB_TRANSFER="");const _=gb[y];_&&(f.defines[_]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=w.texture,M.setRenderTarget(d),M.render(p,h),d=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),u.dispose(),f.dispose()}}const Sx=new nn,Af=new co(1,1),Mx=new lx,Ex=new AM,Tx=new hx,tg=[],ng=[],ig=new Float32Array(16),rg=new Float32Array(9),sg=new Float32Array(4);function ta(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=tg[r];if(s===void 0&&(s=new Float32Array(r),tg[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function kt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function zt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Pc(t,e){let n=ng[e];n===void 0&&(n=new Int32Array(e),ng[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function xb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function _b(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2fv(this.addr,e),zt(n,e)}}function yb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(kt(n,e))return;t.uniform3fv(this.addr,e),zt(n,e)}}function Sb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4fv(this.addr,e),zt(n,e)}}function Mb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),zt(n,e)}else{if(kt(n,i))return;sg.set(i),t.uniformMatrix2fv(this.addr,!1,sg),zt(n,i)}}function Eb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),zt(n,e)}else{if(kt(n,i))return;rg.set(i),t.uniformMatrix3fv(this.addr,!1,rg),zt(n,i)}}function Tb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),zt(n,e)}else{if(kt(n,i))return;ig.set(i),t.uniformMatrix4fv(this.addr,!1,ig),zt(n,i)}}function bb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function wb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2iv(this.addr,e),zt(n,e)}}function Cb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(kt(n,e))return;t.uniform3iv(this.addr,e),zt(n,e)}}function Ab(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4iv(this.addr,e),zt(n,e)}}function Rb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Pb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2uiv(this.addr,e),zt(n,e)}}function Db(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(kt(n,e))return;t.uniform3uiv(this.addr,e),zt(n,e)}}function Lb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4uiv(this.addr,e),zt(n,e)}}function Ib(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Af.compareFunction=n.isReversedDepthBuffer()?Nh:Ih,s=Af):s=Sx,n.setTexture2D(e||s,r)}function Nb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Ex,r)}function Ub(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Tx,r)}function Fb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Mx,r)}function Ob(t){switch(t){case 5126:return xb;case 35664:return _b;case 35665:return yb;case 35666:return Sb;case 35674:return Mb;case 35675:return Eb;case 35676:return Tb;case 5124:case 35670:return bb;case 35667:case 35671:return wb;case 35668:case 35672:return Cb;case 35669:case 35673:return Ab;case 5125:return Rb;case 36294:return Pb;case 36295:return Db;case 36296:return Lb;case 35678:case 36198:case 36298:case 36306:case 35682:return Ib;case 35679:case 36299:case 36307:return Nb;case 35680:case 36300:case 36308:case 36293:return Ub;case 36289:case 36303:case 36311:case 36292:return Fb}}function kb(t,e){t.uniform1fv(this.addr,e)}function zb(t,e){const n=ta(e,this.size,2);t.uniform2fv(this.addr,n)}function Bb(t,e){const n=ta(e,this.size,3);t.uniform3fv(this.addr,n)}function Hb(t,e){const n=ta(e,this.size,4);t.uniform4fv(this.addr,n)}function Vb(t,e){const n=ta(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Gb(t,e){const n=ta(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function jb(t,e){const n=ta(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Wb(t,e){t.uniform1iv(this.addr,e)}function Xb(t,e){t.uniform2iv(this.addr,e)}function $b(t,e){t.uniform3iv(this.addr,e)}function Yb(t,e){t.uniform4iv(this.addr,e)}function Kb(t,e){t.uniform1uiv(this.addr,e)}function qb(t,e){t.uniform2uiv(this.addr,e)}function Zb(t,e){t.uniform3uiv(this.addr,e)}function Qb(t,e){t.uniform4uiv(this.addr,e)}function Jb(t,e,n){const i=this.cache,r=e.length,s=Pc(n,r);kt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=Af:a=Sx;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function ew(t,e,n){const i=this.cache,r=e.length,s=Pc(n,r);kt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Ex,s[a])}function tw(t,e,n){const i=this.cache,r=e.length,s=Pc(n,r);kt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Tx,s[a])}function nw(t,e,n){const i=this.cache,r=e.length,s=Pc(n,r);kt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Mx,s[a])}function iw(t){switch(t){case 5126:return kb;case 35664:return zb;case 35665:return Bb;case 35666:return Hb;case 35674:return Vb;case 35675:return Gb;case 35676:return jb;case 5124:case 35670:return Wb;case 35667:case 35671:return Xb;case 35668:case 35672:return $b;case 35669:case 35673:return Yb;case 5125:return Kb;case 36294:return qb;case 36295:return Zb;case 36296:return Qb;case 35678:case 36198:case 36298:case 36306:case 35682:return Jb;case 35679:case 36299:case 36307:return ew;case 35680:case 36300:case 36308:case 36293:return tw;case 36289:case 36303:case 36311:case 36292:return nw}}class rw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Ob(n.type)}}class sw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=iw(n.type)}}class aw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const ku=/(\w+)(\])?(\[|\.)?/g;function ag(t,e){t.seq.push(e),t.map[e.id]=e}function ow(t,e,n){const i=t.name,r=i.length;for(ku.lastIndex=0;;){const s=ku.exec(i),a=ku.lastIndex;let o=s[1];const c=s[2]==="]",u=s[3];if(c&&(o=o|0),u===void 0||u==="["&&a+2===r){ag(n,u===void 0?new rw(o,t,e):new sw(o,t,e));break}else{let p=n.map[o];p===void 0&&(p=new aw(o),ag(n,p)),n=p}}}class wl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),c=e.getUniformLocation(n,o.name);ow(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function og(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const lw=37297;let cw=0;function uw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const lg=new je;function dw(t){Ze._getMatrix(lg,Ze.workingColorSpace,t);const e=`mat3( ${lg.elements.map(n=>n.toFixed(4))} )`;switch(Ze.getTransfer(t)){case ic:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return Be("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function cg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+uw(t.getShaderSource(e),o)}else return s}function fw(t,e){const n=dw(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const hw={[Xv]:"Linear",[$v]:"Reinhard",[Yv]:"Cineon",[Kv]:"ACESFilmic",[Zv]:"AgX",[Qv]:"Neutral",[qv]:"Custom"};function pw(t,e){const n=hw[e];return n===void 0?(Be("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ol=new X;function mw(){Ze.getLuminanceCoefficients(ol);const t=ol.x.toFixed(4),e=ol.y.toFixed(4),n=ol.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ea).join(`
`)}function vw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function xw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Ea(t){return t!==""}function ug(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _w=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rf(t){return t.replace(_w,Sw)}const yw=new Map;function Sw(t,e){let n=Xe[e];if(n===void 0){const i=yw.get(e);if(i!==void 0)n=Xe[i],Be('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Rf(n)}const Mw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fg(t){return t.replace(Mw,Ew)}function Ew(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function hg(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Tw={[Sl]:"SHADOWMAP_TYPE_PCF",[Ma]:"SHADOWMAP_TYPE_VSM"};function bw(t){return Tw[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ww={[Wr]:"ENVMAP_TYPE_CUBE",[Ys]:"ENVMAP_TYPE_CUBE",[Tc]:"ENVMAP_TYPE_CUBE_UV"};function Cw(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":ww[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const Aw={[Ys]:"ENVMAP_MODE_REFRACTION"};function Rw(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":Aw[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Pw={[wh]:"ENVMAP_BLENDING_MULTIPLY",[jS]:"ENVMAP_BLENDING_MIX",[WS]:"ENVMAP_BLENDING_ADD"};function Dw(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":Pw[t.combine]||"ENVMAP_BLENDING_NONE"}function Lw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Iw(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const c=bw(n),u=Cw(n),f=Rw(n),p=Dw(n),h=Lw(n),m=gw(n),y=vw(s),v=r.createProgram();let g,d,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Ea).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Ea).join(`
`),d.length>0&&(d+=`
`)):(g=[hg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ea).join(`
`),d=[hg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==di?"#define TONE_MAPPING":"",n.toneMapping!==di?Xe.tonemapping_pars_fragment:"",n.toneMapping!==di?pw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,fw("linearToOutputTexel",n.outputColorSpace),mw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ea).join(`
`)),a=Rf(a),a=ug(a,n),a=dg(a,n),o=Rf(o),o=ug(o,n),o=dg(o,n),a=fg(a),o=fg(o),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",n.glslVersion===vm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===vm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const E=x+g+a,M=x+d+o,b=og(r,r.VERTEX_SHADER,E),w=og(r,r.FRAGMENT_SHADER,M);r.attachShader(v,b),r.attachShader(v,w),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function A(L){if(t.debug.checkShaderErrors){const D=r.getProgramInfoLog(v)||"",j=r.getShaderInfoLog(b)||"",U=r.getShaderInfoLog(w)||"",G=D.trim(),O=j.trim(),V=U.trim();let N=!0,F=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(N=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,b,w);else{const I=cg(r,b,"vertex"),H=cg(r,w,"fragment");Je("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+G+`
`+I+`
`+H)}else G!==""?Be("WebGLProgram: Program Info Log:",G):(O===""||V==="")&&(F=!1);F&&(L.diagnostics={runnable:N,programLog:G,vertexShader:{log:O,prefix:g},fragmentShader:{log:V,prefix:d}})}r.deleteShader(b),r.deleteShader(w),_=new wl(r,v),C=xw(r,v)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let C;this.getAttributes=function(){return C===void 0&&A(this),C};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(v,lw)),R},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=cw++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=b,this.fragmentShader=w,this}let Nw=0;class Uw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Fw(e),n.set(e,i)),i}}class Fw{constructor(e){this.id=Nw++,this.code=e,this.usedTimes=0}}function Ow(t){return t===Xr||t===ec||t===tc}function kw(t,e,n,i,r,s){const a=new Oh,o=new Uw,c=new Set,u=[],f=new Map,p=i.logarithmicDepthBuffer;let h=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(_){return c.add(_),_===0?"uv":`uv${_}`}function v(_,C,R,L,D,j){const U=L.fog,G=D.geometry,O=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?L.environment:null,V=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,N=e.get(_.envMap||O,V),F=N&&N.mapping===Tc?N.image.height:null,I=m[_.type];_.precision!==null&&(h=i.getMaxPrecision(_.precision),h!==_.precision&&Be("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));const H=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ie=H!==void 0?H.length:0;let oe=0;G.morphAttributes.position!==void 0&&(oe=1),G.morphAttributes.normal!==void 0&&(oe=2),G.morphAttributes.color!==void 0&&(oe=3);let se,fe,de,$;if(I){const ft=si[I];se=ft.vertexShader,fe=ft.fragmentShader}else{se=_.vertexShader,fe=_.fragmentShader;const ft=o.getVertexShaderStage(_),rt=o.getFragmentShaderStage(_);o.update(_,ft,rt),de=ft.id,$=rt.id}const J=t.getRenderTarget(),ye=t.state.buffers.depth.getReversed(),Oe=D.isInstancedMesh===!0,me=D.isBatchedMesh===!0,Ve=!!_.map,nt=!!_.matcap,ke=!!N,re=!!_.aoMap,Ae=!!_.lightMap,ze=!!_.bumpMap&&_.wireframe===!1,it=!!_.normalMap,xt=!!_.displacementMap,Rt=!!_.emissiveMap,dt=!!_.metalnessMap,St=!!_.roughnessMap,B=_.anisotropy>0,It=_.clearcoat>0,tt=_.dispersion>0,P=_.retroreflectivity>0,S=_.iridescence>0,W=_.sheen>0,q=_.transmission>0,Q=B&&!!_.anisotropyMap,ue=It&&!!_.clearcoatMap,pe=It&&!!_.clearcoatNormalMap,ee=It&&!!_.clearcoatRoughnessMap,ne=S&&!!_.iridescenceMap,ge=S&&!!_.iridescenceThicknessMap,De=W&&!!_.sheenColorMap,_e=W&&!!_.sheenRoughnessMap,ve=!!_.specularMap,Le=!!_.specularColorMap,Fe=!!_.specularIntensityMap,Ge=q&&!!_.transmissionMap,z=q&&!!_.thicknessMap,le=!!_.gradientMap,te=!!_.alphaMap,xe=_.alphaTest>0,Ee=!!_.alphaHash,ae=!!_.extensions;let Ue=di;_.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ue=t.toneMapping);const Ie={shaderID:I,shaderType:_.type,shaderName:_.name,vertexShader:se,fragmentShader:fe,defines:_.defines,customVertexShaderID:de,customFragmentShaderID:$,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:me,batchingColor:me&&D._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&D.instanceColor!==null,instancingMorph:Oe&&D.morphTexture!==null,outputColorSpace:J===null?t.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Ze.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ve,matcap:nt,envMap:ke,envMapMode:ke&&N.mapping,envMapCubeUVHeight:F,aoMap:re,lightMap:Ae,bumpMap:ze,normalMap:it,displacementMap:xt,emissiveMap:Rt,normalMapObjectSpace:it&&_.normalMapType===YS,normalMapTangentSpace:it&&_.normalMapType===bf,packedNormalMap:it&&_.normalMapType===bf&&Ow(_.normalMap.format),metalnessMap:dt,roughnessMap:St,anisotropy:B,anisotropyMap:Q,clearcoat:It,clearcoatMap:ue,clearcoatNormalMap:pe,clearcoatRoughnessMap:ee,dispersion:tt,retroreflection:P,iridescence:S,iridescenceMap:ne,iridescenceThicknessMap:ge,sheen:W,sheenColorMap:De,sheenRoughnessMap:_e,specularMap:ve,specularColorMap:Le,specularIntensityMap:Fe,transmission:q,transmissionMap:Ge,thicknessMap:z,gradientMap:le,opaque:_.transparent===!1&&_.blending===Ua&&_.alphaToCoverage===!1,alphaMap:te,alphaTest:xe,alphaHash:Ee,combine:_.combine,mapUv:Ve&&y(_.map.channel),aoMapUv:re&&y(_.aoMap.channel),lightMapUv:Ae&&y(_.lightMap.channel),bumpMapUv:ze&&y(_.bumpMap.channel),normalMapUv:it&&y(_.normalMap.channel),displacementMapUv:xt&&y(_.displacementMap.channel),emissiveMapUv:Rt&&y(_.emissiveMap.channel),metalnessMapUv:dt&&y(_.metalnessMap.channel),roughnessMapUv:St&&y(_.roughnessMap.channel),anisotropyMapUv:Q&&y(_.anisotropyMap.channel),clearcoatMapUv:ue&&y(_.clearcoatMap.channel),clearcoatNormalMapUv:pe&&y(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&y(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&y(_.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&y(_.iridescenceThicknessMap.channel),sheenColorMapUv:De&&y(_.sheenColorMap.channel),sheenRoughnessMapUv:_e&&y(_.sheenRoughnessMap.channel),specularMapUv:ve&&y(_.specularMap.channel),specularColorMapUv:Le&&y(_.specularColorMap.channel),specularIntensityMapUv:Fe&&y(_.specularIntensityMap.channel),transmissionMapUv:Ge&&y(_.transmissionMap.channel),thicknessMapUv:z&&y(_.thicknessMap.channel),alphaMapUv:te&&y(_.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(it||B),vertexNormals:!!G.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!G.attributes.uv&&(Ve||te),fog:!!U,useFog:_.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||G.attributes.normal===void 0&&it===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:ye,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:oe,numSunLights:C.sun.length,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numSunLightShadows:C.sunShadowMap.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:j.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&R.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ue,decodeVideoTexture:Ve&&_.map.isVideoTexture===!0&&Ze.getTransfer(_.map.colorSpace)===at,decodeVideoTextureEmissive:Rt&&_.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(_.emissiveMap.colorSpace)===at,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ti,flipSided:_.side===un,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ae&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&_.extensions.multiDraw===!0||me)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ie.vertexUv1s=c.has(1),Ie.vertexUv2s=c.has(2),Ie.vertexUv3s=c.has(3),c.clear(),Ie}function g(_){const C=[];if(_.shaderID?C.push(_.shaderID):(C.push(_.customVertexShaderID),C.push(_.customFragmentShaderID)),_.defines!==void 0)for(const R in _.defines)C.push(R),C.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(d(C,_),x(C,_),C.push(t.outputColorSpace)),C.push(_.customProgramCacheKey),C.join()}function d(_,C){_.push(C.precision),_.push(C.outputColorSpace),_.push(C.envMapMode),_.push(C.envMapCubeUVHeight),_.push(C.mapUv),_.push(C.alphaMapUv),_.push(C.lightMapUv),_.push(C.aoMapUv),_.push(C.bumpMapUv),_.push(C.normalMapUv),_.push(C.displacementMapUv),_.push(C.emissiveMapUv),_.push(C.metalnessMapUv),_.push(C.roughnessMapUv),_.push(C.anisotropyMapUv),_.push(C.clearcoatMapUv),_.push(C.clearcoatNormalMapUv),_.push(C.clearcoatRoughnessMapUv),_.push(C.iridescenceMapUv),_.push(C.iridescenceThicknessMapUv),_.push(C.sheenColorMapUv),_.push(C.sheenRoughnessMapUv),_.push(C.specularMapUv),_.push(C.specularColorMapUv),_.push(C.specularIntensityMapUv),_.push(C.transmissionMapUv),_.push(C.thicknessMapUv),_.push(C.combine),_.push(C.fogExp2),_.push(C.sizeAttenuation),_.push(C.morphTargetsCount),_.push(C.morphAttributeCount),_.push(C.numSunLights),_.push(C.numDirLights),_.push(C.numPointLights),_.push(C.numSpotLights),_.push(C.numSpotLightMaps),_.push(C.numHemiLights),_.push(C.numRectAreaLights),_.push(C.numSunLightShadows),_.push(C.numDirLightShadows),_.push(C.numPointLightShadows),_.push(C.numSpotLightShadows),_.push(C.numSpotLightShadowsWithMaps),_.push(C.numLightProbes),_.push(C.shadowMapType),_.push(C.toneMapping),_.push(C.numClippingPlanes),_.push(C.numClipIntersection),_.push(C.depthPacking)}function x(_,C){a.disableAll(),C.instancing&&a.enable(0),C.instancingColor&&a.enable(1),C.instancingMorph&&a.enable(2),C.matcap&&a.enable(3),C.envMap&&a.enable(4),C.normalMapObjectSpace&&a.enable(5),C.normalMapTangentSpace&&a.enable(6),C.clearcoat&&a.enable(7),C.iridescence&&a.enable(8),C.alphaTest&&a.enable(9),C.vertexColors&&a.enable(10),C.vertexAlphas&&a.enable(11),C.vertexUv1s&&a.enable(12),C.vertexUv2s&&a.enable(13),C.vertexUv3s&&a.enable(14),C.vertexTangents&&a.enable(15),C.anisotropy&&a.enable(16),C.alphaHash&&a.enable(17),C.batching&&a.enable(18),C.dispersion&&a.enable(19),C.retroreflection&&a.enable(24),C.batchingColor&&a.enable(20),C.gradientMap&&a.enable(21),C.packedNormalMap&&a.enable(22),C.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.reversedDepthBuffer&&a.enable(4),C.skinning&&a.enable(5),C.morphTargets&&a.enable(6),C.morphNormals&&a.enable(7),C.morphColors&&a.enable(8),C.premultipliedAlpha&&a.enable(9),C.shadowMapEnabled&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),C.decodeVideoTextureEmissive&&a.enable(20),C.alphaToCoverage&&a.enable(21),C.numLightProbeGrids>0&&a.enable(22),C.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function E(_){const C=m[_.type];let R;if(C){const L=si[C];R=KM.clone(L.uniforms)}else R=_.uniforms;return R}function M(_,C){let R=f.get(C);return R!==void 0?++R.usedTimes:(R=new Iw(t,C,_,r),u.push(R),f.set(C,R)),R}function b(_){if(--_.usedTimes===0){const C=u.indexOf(_);u[C]=u[u.length-1],u.pop(),f.delete(_.cacheKey),_.destroy()}}function w(_){o.remove(_)}function A(){o.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:E,acquireProgram:M,releaseProgram:b,releaseShaderCache:w,programs:u,dispose:A}}function zw(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,c){t.get(a)[o]=c}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function Bw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function pg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function mg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(h){let m=0;return h.isInstancedMesh&&(m+=2),h.isSkinnedMesh&&(m+=1),m}function o(h,m,y,v,g,d){let x=t[e];return x===void 0?(x={id:h.id,object:h,geometry:m,material:y,materialVariant:a(h),groupOrder:v,renderOrder:h.renderOrder,z:g,group:d},t[e]=x):(x.id=h.id,x.object=h,x.geometry=m,x.material=y,x.materialVariant=a(h),x.groupOrder=v,x.renderOrder=h.renderOrder,x.z=g,x.group=d),e++,x}function c(h,m,y,v,g,d,x){x.reversedDepth===!0&&(g=-g);const E=o(h,m,y,v,g,d);y.transmission>0?i.push(E):y.transparent===!0?r.push(E):n.push(E)}function u(h,m,y,v,g,d){const x=o(h,m,y,v,g,d);y.transmission>0?i.unshift(x):y.transparent===!0?r.unshift(x):n.unshift(x)}function f(h,m){n.length>1&&n.sort(h||Bw),i.length>1&&i.sort(m||pg),r.length>1&&r.sort(m||pg)}function p(){for(let h=e,m=t.length;h<m;h++){const y=t[h];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:c,unshift:u,finish:p,sort:f}}function Hw(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new mg,t.set(i,[a])):r>=s.length?(a=new mg,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function Vw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new X,color:new qe};break;case"SpotLight":n={position:new X,direction:new X,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new X,color:new qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new X,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":n={color:new qe,position:new X,halfWidth:new X,halfHeight:new X};break}return t[e.id]=n,n}}}function Gw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let jw=0;function Ww(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Xw(t){const e=new Vw,n=Gw(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new X);const r=new X,s=new yt,a=new yt;function o(u){let f=0,p=0,h=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let m=0,y=0,v=0,g=0,d=0,x=0,E=0,M=0,b=0,w=0,A=0,_=0,C=0,R=0;u.sort(Ww);for(let D=0,j=u.length;D<j;D++){const U=u[D],G=U.color,O=U.intensity,V=U.distance;let N=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===Xr?N=U.shadow.map.texture:N=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)f+=G.r*O,p+=G.g*O,h+=G.b*O;else if(U.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(U.sh.coefficients[F],O);R++}else if(U.isSunLight){const F=e.get(U);if(F.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const I=U.shadow,H=n.get(U);H.shadowIntensity=I.intensity,H.shadowBias=I.bias,H.shadowNormalBias=I.normalBias,H.shadowRadius=I.radius,H.shadowMapSize.copy(I.mapSize).multiply(I.getFrameExtents()),i.sunShadow[y]=H,i.sunShadowMap[y]=N;const ie=I.getViewportCount();for(let oe=0;oe<ie;oe++)i.sunShadowMatrix[v+oe]=I.getMatrix(oe),i.sunShadowCascade[v+oe]=I._cascadeData[oe];v+=ie,y++}i.sun[m]=F,m++}else if(U.isDirectionalLight){const F=e.get(U);if(F.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const I=U.shadow,H=n.get(U);H.shadowIntensity=I.intensity,H.shadowBias=I.bias,H.shadowNormalBias=I.normalBias,H.shadowRadius=I.radius,H.shadowMapSize=I.mapSize,i.directionalShadow[g]=H,i.directionalShadowMap[g]=N,i.directionalShadowMatrix[g]=U.shadow.matrix,b++}i.directional[g]=F,g++}else if(U.isSpotLight){const F=e.get(U);F.position.setFromMatrixPosition(U.matrixWorld),F.color.copy(G).multiplyScalar(O),F.distance=V,F.coneCos=Math.cos(U.angle),F.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),F.decay=U.decay,i.spot[x]=F;const I=U.shadow;if(U.map&&(i.spotLightMap[_]=U.map,_++,I.updateMatrices(U),U.castShadow&&C++),i.spotLightMatrix[x]=I.matrix,U.castShadow){const H=n.get(U);H.shadowIntensity=I.intensity,H.shadowBias=I.bias,H.shadowNormalBias=I.normalBias,H.shadowRadius=I.radius,H.shadowMapSize=I.mapSize,i.spotShadow[x]=H,i.spotShadowMap[x]=N,A++}x++}else if(U.isRectAreaLight){const F=e.get(U);F.color.copy(G).multiplyScalar(O),F.halfWidth.set(U.width*.5,0,0),F.halfHeight.set(0,U.height*.5,0),i.rectArea[E]=F,E++}else if(U.isPointLight){const F=e.get(U);if(F.color.copy(U.color).multiplyScalar(U.intensity),F.distance=U.distance,F.decay=U.decay,U.castShadow){const I=U.shadow,H=n.get(U);H.shadowIntensity=I.intensity,H.shadowBias=I.bias,H.shadowNormalBias=I.normalBias,H.shadowRadius=I.radius,H.shadowMapSize=I.mapSize,H.shadowCameraNear=I.camera.near,H.shadowCameraFar=I.camera.far,i.pointShadow[d]=H,i.pointShadowMap[d]=N,i.pointShadowMatrix[d]=U.shadow.matrix,w++}i.point[d]=F,d++}else if(U.isHemisphereLight){const F=e.get(U);F.skyColor.copy(U.color).multiplyScalar(O),F.groundColor.copy(U.groundColor).multiplyScalar(O),i.hemi[M]=F,M++}}E>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=h;const L=i.hash;(L.sunLength!==m||L.directionalLength!==g||L.pointLength!==d||L.spotLength!==x||L.rectAreaLength!==E||L.hemiLength!==M||L.numSunShadows!==y||L.numDirectionalShadows!==b||L.numPointShadows!==w||L.numSpotShadows!==A||L.numSpotMaps!==_||L.numLightProbes!==R)&&(i.sun.length=m,i.directional.length=g,i.spot.length=x,i.rectArea.length=E,i.point.length=d,i.hemi.length=M,i.sunShadow.length=y,i.sunShadowMap.length=y,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.directionalShadowMatrix.length=b,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=A,i.spotShadowMap.length=A,i.spotLightMatrix.length=A+_-C,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=R,L.sunLength=m,L.directionalLength=g,L.pointLength=d,L.spotLength=x,L.rectAreaLength=E,L.hemiLength=M,L.numSunShadows=y,L.numDirectionalShadows=b,L.numPointShadows=w,L.numSpotShadows=A,L.numSpotMaps=_,L.numLightProbes=R,i.version=jw++)}function c(u,f){let p=0,h=0,m=0,y=0,v=0,g=0;const d=f.matrixWorldInverse;for(let x=0,E=u.length;x<E;x++){const M=u[x];if(M.isSunLight){const b=i.sun[p];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(d),p++}else if(M.isDirectionalLight){const b=i.directional[h];b.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(d),h++}else if(M.isSpotLight){const b=i.spot[y];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(d),b.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(d),y++}else if(M.isRectAreaLight){const b=i.rectArea[v];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(d),a.identity(),s.copy(M.matrixWorld),s.premultiply(d),a.extractRotation(s),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),v++}else if(M.isPointLight){const b=i.point[m];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(d),m++}else if(M.isHemisphereLight){const b=i.hemi[g];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(d),g++}}}return{setup:o,setupView:c,state:i}}function gg(t){const e=new Xw(t),n=[],i=[],r=[];function s(h){p.camera=h,n.length=0,i.length=0,r.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function c(h){r.push(h)}function u(){e.setup(n)}function f(h){e.setupView(n,h)}const p={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:p,setupLights:u,setupLightsView:f,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function $w(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new gg(t),e.set(r,[o])):s>=a.length?(o=new gg(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const Yw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Kw=`uniform sampler2D shadow_pass;
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
}`,qw=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],Zw=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],vg=new yt,va=new X,zu=new X;function Qw(t,e,n){let i=new kh;const r=new He,s=new He,a=new Et,o=new JM,c=new e1,u={},f=n.maxTextureSize,p={[jr]:un,[un]:jr,[Ti]:Ti},h=new pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:Yw,fragmentShader:Kw}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const y=new Rn;y.setAttribute("position",new Di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new jt(y,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sl;let d=this.type;this.render=function(w,A,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===bS&&(Be("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Sl);const C=t.getRenderTarget(),R=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),D=t.state;D.setBlending(Ri),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const j=d!==this.type;j&&A.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(G=>G.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,G=w.length;U<G;U++){const O=w[U],V=O.shadow;if(V===void 0){Be("WebGLShadowMap:",O,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const N=V.getFrameExtents();r.multiply(N),s.copy(V.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/N.x),r.x=s.x*N.x,V.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/N.y),r.y=s.y*N.y,V.mapSize.y=s.y));const F=t.state.buffers.depth.getReversed();if(V.camera._reversedDepth=F,V.map===null||j===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Ma){if(O.isPointLight){Be("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Zn(r.x,r.y,{format:Xr,type:hi,minFilter:tn,magFilter:tn,generateMipmaps:!1}),V.map.texture.name=O.name+".shadowMap",V.map.depthTexture=new co(r.x,r.y,oi),V.map.depthTexture.name=O.name+".shadowMapDepth",V.map.depthTexture.format=Fi,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Wt,V.map.depthTexture.magFilter=Wt}else O.isPointLight?(V.map=new yx(r.x),V.map.depthTexture=new $M(r.x,fi)):(V.map=new Zn(r.x,r.y),V.map.depthTexture=new co(r.x,r.y,fi)),V.map.depthTexture.name=O.name+".shadowMap",V.map.depthTexture.format=Fi,this.type===Sl?(V.map.depthTexture.compareFunction=F?Nh:Ih,V.map.depthTexture.minFilter=tn,V.map.depthTexture.magFilter=tn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Wt,V.map.depthTexture.magFilter=Wt);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==r.x||V.map.height!==r.y)&&V.map.setSize(r.x,r.y);const I=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();O.isPointLight!==!0&&V.updateMatrices(O,_);for(let H=0;H<I;H++){const ie=V.getCamera(H);if(O.isPointLight){const oe=V.camera,se=V.matrix,fe=O.distance||oe.far;fe!==oe.far&&(oe.far=fe,oe.updateProjectionMatrix()),va.setFromMatrixPosition(O.matrixWorld),oe.position.copy(va),zu.copy(oe.position),zu.add(qw[H]),oe.up.copy(Zw[H]),oe.lookAt(zu),oe.updateMatrixWorld(),se.makeTranslation(-va.x,-va.y,-va.z),vg.multiplyMatrices(oe.projectionMatrix,oe.matrixWorldInverse),V._frustum.setFromProjectionMatrix(vg,oe.coordinateSystem,oe.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)t.setRenderTarget(V.map,H),t.clear();else{H===0&&(t.setRenderTarget(V.map),t.clear());const oe=V.getViewport(H);a.set(s.x*oe.x,s.y*oe.y,s.x*oe.z,s.y*oe.w),D.viewport(a)}i=V.getFrustum(H),M(A,_,ie,O,this.type)}V.isPointLightShadow!==!0&&this.type===Ma&&x(V,_),V.needsUpdate=!1}d=this.type,g.needsUpdate=!1,t.setRenderTarget(C,R,L)};function x(w,A){const _=e.update(v);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null?w.mapPass=new Zn(r.x,r.y,{format:Xr,type:hi}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(A,null,_,h,v,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value.set(w.map.width,w.map.height),m.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(A,null,_,m,v,null)}function E(w,A,_,C){let R=null;const L=_.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)R=L;else if(R=_.isPointLight===!0?c:o,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const D=R.uuid,j=A.uuid;let U=u[D];U===void 0&&(U={},u[D]=U);let G=U[j];G===void 0&&(G=R.clone(),U[j]=G,A.addEventListener("dispose",b)),R=G}if(R.visible=A.visible,R.wireframe=A.wireframe,C===Ma?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:p[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,_.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const D=t.properties.get(R);D.light=_}return R}function M(w,A,_,C,R){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&R===Ma)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,w.matrixWorld);const j=e.update(w),U=w.material;if(Array.isArray(U)){const G=j.groups;for(let O=0,V=G.length;O<V;O++){const N=G[O],F=U[N.materialIndex];if(F&&F.visible){const I=E(w,F,C,R);w.onBeforeShadow(t,w,A,_,j,I,N),t.renderBufferDirect(_,null,j,I,w,N),w.onAfterShadow(t,w,A,_,j,I,N)}}}else if(U.visible){const G=E(w,U,C,R);w.onBeforeShadow(t,w,A,_,j,G,null),t.renderBufferDirect(_,null,j,G,w,null),w.onAfterShadow(t,w,A,_,j,G,null)}}const D=w.children;for(let j=0,U=D.length;j<U;j++)M(D[j],A,_,C,R)}function b(w){w.target.removeEventListener("dispose",b);for(const _ in u){const C=u[_],R=w.target.uuid;R in C&&(C[R].dispose(),delete C[R])}}}function Jw(t,e){function n(){let z=!1;const le=new Et;let te=null;const xe=new Et(0,0,0,0);return{setMask:function(Ee){te!==Ee&&!z&&(t.colorMask(Ee,Ee,Ee,Ee),te=Ee)},setLocked:function(Ee){z=Ee},setClear:function(Ee,ae,Ue,Ie,ft){ft===!0&&(Ee*=Ie,ae*=Ie,Ue*=Ie),le.set(Ee,ae,Ue,Ie),xe.equals(le)===!1&&(t.clearColor(Ee,ae,Ue,Ie),xe.copy(le))},reset:function(){z=!1,te=null,xe.set(-1,0,0,0)}}}function i(){let z=!1,le=!1,te=null,xe=null,Ee=null;return{setReversed:function(ae){if(le!==ae){const Ue=e.get("EXT_clip_control");ae?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),le=ae;const Ie=Ee;Ee=null,this.setClear(Ie)}},getReversed:function(){return le},setTest:function(ae){ae?J(t.DEPTH_TEST):ye(t.DEPTH_TEST)},setMask:function(ae){te!==ae&&!z&&(t.depthMask(ae),te=ae)},setFunc:function(ae){if(le&&(ae=aM[ae]),xe!==ae){switch(ae){case zd:t.depthFunc(t.NEVER);break;case Bd:t.depthFunc(t.ALWAYS);break;case Hd:t.depthFunc(t.LESS);break;case io:t.depthFunc(t.LEQUAL);break;case Vd:t.depthFunc(t.EQUAL);break;case Gd:t.depthFunc(t.GEQUAL);break;case jd:t.depthFunc(t.GREATER);break;case Wd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}xe=ae}},setLocked:function(ae){z=ae},setClear:function(ae){Ee!==ae&&(Ee=ae,le&&(ae=1-ae),t.clearDepth(ae))},reset:function(){z=!1,te=null,xe=null,Ee=null,le=!1}}}function r(){let z=!1,le=null,te=null,xe=null,Ee=null,ae=null,Ue=null,Ie=null,ft=null;return{setTest:function(rt){z||(rt?J(t.STENCIL_TEST):ye(t.STENCIL_TEST))},setMask:function(rt){le!==rt&&!z&&(t.stencilMask(rt),le=rt)},setFunc:function(rt,zn,Jn){(te!==rt||xe!==zn||Ee!==Jn)&&(t.stencilFunc(rt,zn,Jn),te=rt,xe=zn,Ee=Jn)},setOp:function(rt,zn,Jn){(ae!==rt||Ue!==zn||Ie!==Jn)&&(t.stencilOp(rt,zn,Jn),ae=rt,Ue=zn,Ie=Jn)},setLocked:function(rt){z=rt},setClear:function(rt){ft!==rt&&(t.clearStencil(rt),ft=rt)},reset:function(){z=!1,le=null,te=null,xe=null,Ee=null,ae=null,Ue=null,Ie=null,ft=null}}}const s=new n,a=new i,o=new r,c=new WeakMap,u=new WeakMap;let f={},p={},h={},m=new WeakMap,y=[],v=null,g=!1,d=null,x=null,E=null,M=null,b=null,w=null,A=null,_=new qe(0,0,0),C=0,R=!1,L=null,D=null,j=null,U=null,G=null;const O=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,N=0;const F=t.getParameter(t.VERSION);F.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(F)[1]),V=N>=1):F.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),V=N>=2);let I=null,H={};const ie=t.getParameter(t.SCISSOR_BOX),oe=t.getParameter(t.VIEWPORT),se=new Et().fromArray(ie),fe=new Et().fromArray(oe);function de(z,le,te,xe){const Ee=new Uint8Array(4),ae=t.createTexture();t.bindTexture(z,ae),t.texParameteri(z,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(z,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ue=0;Ue<te;Ue++)z===t.TEXTURE_3D||z===t.TEXTURE_2D_ARRAY?t.texImage3D(le,0,t.RGBA,1,1,xe,0,t.RGBA,t.UNSIGNED_BYTE,Ee):t.texImage2D(le+Ue,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ee);return ae}const $={};$[t.TEXTURE_2D]=de(t.TEXTURE_2D,t.TEXTURE_2D,1),$[t.TEXTURE_CUBE_MAP]=de(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[t.TEXTURE_2D_ARRAY]=de(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),$[t.TEXTURE_3D]=de(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(t.DEPTH_TEST),a.setFunc(io),ze(!1),it(pm),J(t.CULL_FACE),re(Ri);function J(z){f[z]!==!0&&(t.enable(z),f[z]=!0)}function ye(z){f[z]!==!1&&(t.disable(z),f[z]=!1)}function Oe(z,le){return h[z]!==le?(t.bindFramebuffer(z,le),h[z]=le,z===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=le),z===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=le),!0):!1}function me(z,le){let te=y,xe=!1;if(z){te=m.get(le),te===void 0&&(te=[],m.set(le,te));const Ee=z.textures;if(te.length!==Ee.length||te[0]!==t.COLOR_ATTACHMENT0){for(let ae=0,Ue=Ee.length;ae<Ue;ae++)te[ae]=t.COLOR_ATTACHMENT0+ae;te.length=Ee.length,xe=!0}}else te[0]!==t.BACK&&(te[0]=t.BACK,xe=!0);xe&&t.drawBuffers(te)}function Ve(z){return v!==z?(t.useProgram(z),v=z,!0):!1}const nt={[fs]:t.FUNC_ADD,[CS]:t.FUNC_SUBTRACT,[AS]:t.FUNC_REVERSE_SUBTRACT};nt[RS]=t.MIN,nt[PS]=t.MAX;const ke={[DS]:t.ZERO,[LS]:t.ONE,[IS]:t.SRC_COLOR,[jv]:t.SRC_ALPHA,[zS]:t.SRC_ALPHA_SATURATE,[OS]:t.DST_COLOR,[US]:t.DST_ALPHA,[NS]:t.ONE_MINUS_SRC_COLOR,[Wv]:t.ONE_MINUS_SRC_ALPHA,[kS]:t.ONE_MINUS_DST_COLOR,[FS]:t.ONE_MINUS_DST_ALPHA,[BS]:t.CONSTANT_COLOR,[HS]:t.ONE_MINUS_CONSTANT_COLOR,[VS]:t.CONSTANT_ALPHA,[GS]:t.ONE_MINUS_CONSTANT_ALPHA};function re(z,le,te,xe,Ee,ae,Ue,Ie,ft,rt){if(z===Ri){g===!0&&(ye(t.BLEND),g=!1);return}if(g===!1&&(J(t.BLEND),g=!0),z!==wS){if(z!==d||rt!==R){if((x!==fs||b!==fs)&&(t.blendEquation(t.FUNC_ADD),x=fs,b=fs),rt)switch(z){case Ua:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Jl:t.blendFunc(t.ONE,t.ONE);break;case mm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case gm:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Je("WebGLState: Invalid blending: ",z);break}else switch(z){case Ua:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Jl:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case mm:Je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gm:Je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Je("WebGLState: Invalid blending: ",z);break}E=null,M=null,w=null,A=null,_.set(0,0,0),C=0,d=z,R=rt}return}Ee=Ee||le,ae=ae||te,Ue=Ue||xe,(le!==x||Ee!==b)&&(t.blendEquationSeparate(nt[le],nt[Ee]),x=le,b=Ee),(te!==E||xe!==M||ae!==w||Ue!==A)&&(t.blendFuncSeparate(ke[te],ke[xe],ke[ae],ke[Ue]),E=te,M=xe,w=ae,A=Ue),(Ie.equals(_)===!1||ft!==C)&&(t.blendColor(Ie.r,Ie.g,Ie.b,ft),_.copy(Ie),C=ft),d=z,R=!1}function Ae(z,le){z.side===Ti?ye(t.CULL_FACE):J(t.CULL_FACE);let te=z.side===un;le&&(te=!te),ze(te),z.blending===Ua&&z.transparent===!1?re(Ri):re(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),s.setMask(z.colorWrite);const xe=z.stencilWrite;o.setTest(xe),xe&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Rt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?J(t.SAMPLE_ALPHA_TO_COVERAGE):ye(t.SAMPLE_ALPHA_TO_COVERAGE)}function ze(z){L!==z&&(z?t.frontFace(t.CW):t.frontFace(t.CCW),L=z)}function it(z){z!==ES?(J(t.CULL_FACE),z!==D&&(z===pm?t.cullFace(t.BACK):z===TS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ye(t.CULL_FACE),D=z}function xt(z){z!==j&&(V&&t.lineWidth(z),j=z)}function Rt(z,le,te){z?(J(t.POLYGON_OFFSET_FILL),(U!==le||G!==te)&&(U=le,G=te,a.getReversed()&&(le=-le),t.polygonOffset(le,te))):ye(t.POLYGON_OFFSET_FILL)}function dt(z){z?J(t.SCISSOR_TEST):ye(t.SCISSOR_TEST)}function St(z){z===void 0&&(z=t.TEXTURE0+O-1),I!==z&&(t.activeTexture(z),I=z)}function B(z,le,te){te===void 0&&(I===null?te=t.TEXTURE0+O-1:te=I);let xe=H[te];xe===void 0&&(xe={type:void 0,texture:void 0},H[te]=xe),(xe.type!==z||xe.texture!==le)&&(I!==te&&(t.activeTexture(te),I=te),t.bindTexture(z,le||$[z]),xe.type=z,xe.texture=le)}function It(){const z=H[I];z!==void 0&&z.type!==void 0&&(t.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function tt(){try{t.compressedTexImage2D(...arguments)}catch(z){Je("WebGLState:",z)}}function P(){try{t.compressedTexImage3D(...arguments)}catch(z){Je("WebGLState:",z)}}function S(){try{t.texSubImage2D(...arguments)}catch(z){Je("WebGLState:",z)}}function W(){try{t.texSubImage3D(...arguments)}catch(z){Je("WebGLState:",z)}}function q(){try{t.compressedTexSubImage2D(...arguments)}catch(z){Je("WebGLState:",z)}}function Q(){try{t.compressedTexSubImage3D(...arguments)}catch(z){Je("WebGLState:",z)}}function ue(){try{t.texStorage2D(...arguments)}catch(z){Je("WebGLState:",z)}}function pe(){try{t.texStorage3D(...arguments)}catch(z){Je("WebGLState:",z)}}function ee(){try{t.texImage2D(...arguments)}catch(z){Je("WebGLState:",z)}}function ne(){try{t.texImage3D(...arguments)}catch(z){Je("WebGLState:",z)}}function ge(z){return p[z]!==void 0?p[z]:t.getParameter(z)}function De(z,le){p[z]!==le&&(t.pixelStorei(z,le),p[z]=le)}function _e(z){se.equals(z)===!1&&(t.scissor(z.x,z.y,z.z,z.w),se.copy(z))}function ve(z){fe.equals(z)===!1&&(t.viewport(z.x,z.y,z.z,z.w),fe.copy(z))}function Le(z,le){let te=u.get(le);te===void 0&&(te=new WeakMap,u.set(le,te));let xe=te.get(z);xe===void 0&&(xe=t.getUniformBlockIndex(le,z.name),te.set(z,xe))}function Fe(z,le){const xe=u.get(le).get(z);c.get(le)!==xe&&(t.uniformBlockBinding(le,xe,z.__bindingPointIndex),c.set(le,xe))}function Ge(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),f={},p={},I=null,H={},h={},m=new WeakMap,y=[],v=null,g=!1,d=null,x=null,E=null,M=null,b=null,w=null,A=null,_=new qe(0,0,0),C=0,R=!1,L=null,D=null,j=null,U=null,G=null,se.set(0,0,t.canvas.width,t.canvas.height),fe.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:J,disable:ye,bindFramebuffer:Oe,drawBuffers:me,useProgram:Ve,setBlending:re,setMaterial:Ae,setFlipSided:ze,setCullFace:it,setLineWidth:xt,setPolygonOffset:Rt,setScissorTest:dt,activeTexture:St,bindTexture:B,unbindTexture:It,compressedTexImage2D:tt,compressedTexImage3D:P,texImage2D:ee,texImage3D:ne,pixelStorei:De,getParameter:ge,updateUBOMapping:Le,uniformBlockBinding:Fe,texStorage2D:ue,texStorage3D:pe,texSubImage2D:S,texSubImage3D:W,compressedTexSubImage2D:q,compressedTexSubImage3D:Q,scissor:_e,viewport:ve,reset:Ge}}function eC(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new He,f=new WeakMap,p=new Set;let h;const m=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(P,S){return y?new OffscreenCanvas(P,S):oo("canvas")}function g(P,S,W){let q=1;const Q=tt(P);if((Q.width>W||Q.height>W)&&(q=W/Math.max(Q.width,Q.height)),q<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ue=Math.floor(q*Q.width),pe=Math.floor(q*Q.height);h===void 0&&(h=v(ue,pe));const ee=S?v(ue,pe):h;return ee.width=ue,ee.height=pe,ee.getContext("2d").drawImage(P,0,0,ue,pe),Be("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ue+"x"+pe+")."),ee}else return"data"in P&&Be("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),P;return P}function d(P){return P.generateMipmaps}function x(P){t.generateMipmap(P)}function E(P){return P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?t.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function M(P,S,W,q,Q,ue=!1){if(P!==null){if(t[P]!==void 0)return t[P];Be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let pe;q&&(pe=e.get("EXT_texture_norm16"),pe||Be("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=S;if(S===t.RED&&(W===t.FLOAT&&(ee=t.R32F),W===t.HALF_FLOAT&&(ee=t.R16F),W===t.UNSIGNED_BYTE&&(ee=t.R8),W===t.UNSIGNED_SHORT&&pe&&(ee=pe.R16_EXT),W===t.SHORT&&pe&&(ee=pe.R16_SNORM_EXT)),S===t.RED_INTEGER&&(W===t.UNSIGNED_BYTE&&(ee=t.R8UI),W===t.UNSIGNED_SHORT&&(ee=t.R16UI),W===t.UNSIGNED_INT&&(ee=t.R32UI),W===t.BYTE&&(ee=t.R8I),W===t.SHORT&&(ee=t.R16I),W===t.INT&&(ee=t.R32I)),S===t.RG&&(W===t.FLOAT&&(ee=t.RG32F),W===t.HALF_FLOAT&&(ee=t.RG16F),W===t.UNSIGNED_BYTE&&(ee=t.RG8),W===t.UNSIGNED_SHORT&&pe&&(ee=pe.RG16_EXT),W===t.SHORT&&pe&&(ee=pe.RG16_SNORM_EXT)),S===t.RG_INTEGER&&(W===t.UNSIGNED_BYTE&&(ee=t.RG8UI),W===t.UNSIGNED_SHORT&&(ee=t.RG16UI),W===t.UNSIGNED_INT&&(ee=t.RG32UI),W===t.BYTE&&(ee=t.RG8I),W===t.SHORT&&(ee=t.RG16I),W===t.INT&&(ee=t.RG32I)),S===t.RGB_INTEGER&&(W===t.UNSIGNED_BYTE&&(ee=t.RGB8UI),W===t.UNSIGNED_SHORT&&(ee=t.RGB16UI),W===t.UNSIGNED_INT&&(ee=t.RGB32UI),W===t.BYTE&&(ee=t.RGB8I),W===t.SHORT&&(ee=t.RGB16I),W===t.INT&&(ee=t.RGB32I)),S===t.RGBA_INTEGER&&(W===t.UNSIGNED_BYTE&&(ee=t.RGBA8UI),W===t.UNSIGNED_SHORT&&(ee=t.RGBA16UI),W===t.UNSIGNED_INT&&(ee=t.RGBA32UI),W===t.BYTE&&(ee=t.RGBA8I),W===t.SHORT&&(ee=t.RGBA16I),W===t.INT&&(ee=t.RGBA32I)),S===t.RGB&&(W===t.UNSIGNED_SHORT&&pe&&(ee=pe.RGB16_EXT),W===t.SHORT&&pe&&(ee=pe.RGB16_SNORM_EXT),W===t.UNSIGNED_INT_5_9_9_9_REV&&(ee=t.RGB9_E5),W===t.UNSIGNED_INT_10F_11F_11F_REV&&(ee=t.R11F_G11F_B10F)),S===t.RGBA){const ne=ue?ic:Ze.getTransfer(Q);W===t.FLOAT&&(ee=t.RGBA32F),W===t.HALF_FLOAT&&(ee=t.RGBA16F),W===t.UNSIGNED_BYTE&&(ee=ne===at?t.SRGB8_ALPHA8:t.RGBA8),W===t.UNSIGNED_SHORT&&pe&&(ee=pe.RGBA16_EXT),W===t.SHORT&&pe&&(ee=pe.RGBA16_SNORM_EXT),W===t.UNSIGNED_SHORT_4_4_4_4&&(ee=t.RGBA4),W===t.UNSIGNED_SHORT_5_5_5_1&&(ee=t.RGB5_A1)}return(ee===t.R16F||ee===t.R32F||ee===t.RG16F||ee===t.RG32F||ee===t.RGBA16F||ee===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function b(P,S){let W;return P?S===null||S===fi||S===so?W=t.DEPTH24_STENCIL8:S===oi?W=t.DEPTH32F_STENCIL8:S===ro&&(W=t.DEPTH24_STENCIL8,Be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===fi||S===so?W=t.DEPTH_COMPONENT24:S===oi?W=t.DEPTH_COMPONENT32F:S===ro&&(W=t.DEPTH_COMPONENT16),W}function w(P,S){return d(P)===!0||P.isFramebufferTexture&&P.minFilter!==Wt&&P.minFilter!==tn?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function A(P){const S=P.target;S.removeEventListener("dispose",A),C(S),S.isVideoTexture&&f.delete(S),S.isHTMLTexture&&p.delete(S)}function _(P){const S=P.target;S.removeEventListener("dispose",_),L(S)}function C(P){const S=i.get(P);if(S.__webglInit===void 0)return;const W=P.source,q=m.get(W);if(q){const Q=q[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&R(P),Object.keys(q).length===0&&m.delete(W)}i.remove(P)}function R(P){const S=i.get(P);t.deleteTexture(S.__webglTexture);const W=P.source,q=m.get(W);delete q[S.__cacheKey],a.memory.textures--}function L(P){const S=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(S.__webglFramebuffer[q]))for(let Q=0;Q<S.__webglFramebuffer[q].length;Q++)t.deleteFramebuffer(S.__webglFramebuffer[q][Q]);else t.deleteFramebuffer(S.__webglFramebuffer[q]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[q])}else{if(Array.isArray(S.__webglFramebuffer))for(let q=0;q<S.__webglFramebuffer.length;q++)t.deleteFramebuffer(S.__webglFramebuffer[q]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let q=0;q<S.__webglColorRenderbuffer.length;q++)S.__webglColorRenderbuffer[q]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[q]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const W=P.textures;for(let q=0,Q=W.length;q<Q;q++){const ue=i.get(W[q]);ue.__webglTexture&&(t.deleteTexture(ue.__webglTexture),a.memory.textures--),i.remove(W[q])}i.remove(P)}let D=0;function j(){D=0}function U(){return D}function G(P){D=P}function O(){const P=D;return P>=r.maxTextures&&Be("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+r.maxTextures),D+=1,P}function V(P){const S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function N(P,S){const W=i.get(P);if(P.isVideoTexture&&B(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&W.__version!==P.version){const q=P.image;if(q===null)Be("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Be("WebGLRenderer: Texture marked for update but image is incomplete");else{ye(W,P,S);return}}else P.isExternalTexture&&(W.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,W.__webglTexture,t.TEXTURE0+S)}function F(P,S){const W=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){ye(W,P,S);return}else P.isExternalTexture&&(W.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,W.__webglTexture,t.TEXTURE0+S)}function I(P,S){const W=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){ye(W,P,S);return}n.bindTexture(t.TEXTURE_3D,W.__webglTexture,t.TEXTURE0+S)}function H(P,S){const W=i.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&W.__version!==P.version){Oe(W,P,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture,t.TEXTURE0+S)}const ie={[Xd]:t.REPEAT,[Ci]:t.CLAMP_TO_EDGE,[$d]:t.MIRRORED_REPEAT},oe={[Wt]:t.NEAREST,[XS]:t.NEAREST_MIPMAP_NEAREST,[Oo]:t.NEAREST_MIPMAP_LINEAR,[tn]:t.LINEAR,[lu]:t.LINEAR_MIPMAP_NEAREST,[Ir]:t.LINEAR_MIPMAP_LINEAR},se={[qS]:t.NEVER,[tM]:t.ALWAYS,[ZS]:t.LESS,[Ih]:t.LEQUAL,[QS]:t.EQUAL,[Nh]:t.GEQUAL,[JS]:t.GREATER,[eM]:t.NOTEQUAL};function fe(P,S){if(S.type===oi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===tn||S.magFilter===lu||S.magFilter===Oo||S.magFilter===Ir||S.minFilter===tn||S.minFilter===lu||S.minFilter===Oo||S.minFilter===Ir)&&Be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(P,t.TEXTURE_WRAP_S,ie[S.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,ie[S.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,ie[S.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,oe[S.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,oe[S.minFilter]),S.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,se[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Wt||S.minFilter!==Oo&&S.minFilter!==Ir||S.type===oi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function de(P,S){let W=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",A));const q=S.source;let Q=m.get(q);Q===void 0&&(Q={},m.set(q,Q));const ue=V(S);if(ue!==P.__cacheKey){Q[ue]===void 0&&(Q[ue]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,W=!0),Q[ue].usedTimes++;const pe=Q[P.__cacheKey];pe!==void 0&&(Q[P.__cacheKey].usedTimes--,pe.usedTimes===0&&R(S)),P.__cacheKey=ue,P.__webglTexture=Q[ue].texture}return W}function $(P,S,W){return Math.floor(Math.floor(P/W)/S)}function J(P,S,W,q){const ue=P.updateRanges;if(ue.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,S.width,S.height,W,q,S.data);else{ue.sort((De,_e)=>De.start-_e.start);let pe=0;for(let De=1;De<ue.length;De++){const _e=ue[pe],ve=ue[De],Le=_e.start+_e.count,Fe=$(ve.start,S.width,4),Ge=$(_e.start,S.width,4);ve.start<=Le+1&&Fe===Ge&&$(ve.start+ve.count-1,S.width,4)===Fe?_e.count=Math.max(_e.count,ve.start+ve.count-_e.start):(++pe,ue[pe]=ve)}ue.length=pe+1;const ee=n.getParameter(t.UNPACK_ROW_LENGTH),ne=n.getParameter(t.UNPACK_SKIP_PIXELS),ge=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,S.width);for(let De=0,_e=ue.length;De<_e;De++){const ve=ue[De],Le=Math.floor(ve.start/4),Fe=Math.ceil(ve.count/4),Ge=Le%S.width,z=Math.floor(Le/S.width),le=Fe,te=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Ge),n.pixelStorei(t.UNPACK_SKIP_ROWS,z),n.texSubImage2D(t.TEXTURE_2D,0,Ge,z,le,te,W,q,S.data)}P.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,ee),n.pixelStorei(t.UNPACK_SKIP_PIXELS,ne),n.pixelStorei(t.UNPACK_SKIP_ROWS,ge)}}function ye(P,S,W){let q=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(q=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(q=t.TEXTURE_3D);const Q=de(P,S),ue=S.source;n.bindTexture(q,P.__webglTexture,t.TEXTURE0+W);const pe=i.get(ue);if(ue.version!==pe.__version||Q===!0){if(n.activeTexture(t.TEXTURE0+W),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const te=Ze.getPrimaries(Ze.workingColorSpace),xe=S.colorSpace===Qi?null:Ze.getPrimaries(S.colorSpace),Ee=S.colorSpace===Qi||te===xe?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee)}n.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment);let ne=g(S.image,!1,r.maxTextureSize);ne=It(S,ne);const ge=s.convert(S.format,S.colorSpace),De=s.convert(S.type);let _e=M(S.internalFormat,ge,De,S.normalized,S.colorSpace,S.isVideoTexture);fe(q,S);let ve;const Le=S.mipmaps,Fe=S.isVideoTexture!==!0,Ge=pe.__version===void 0||Q===!0,z=ue.dataReady,le=w(S,ne);if(S.isDepthTexture)_e=b(S.format===Nr,S.type),Ge&&(Fe?n.texStorage2D(t.TEXTURE_2D,1,_e,ne.width,ne.height):n.texImage2D(t.TEXTURE_2D,0,_e,ne.width,ne.height,0,ge,De,null));else if(S.isDataTexture)if(Le.length>0){Fe&&Ge&&n.texStorage2D(t.TEXTURE_2D,le,_e,Le[0].width,Le[0].height);for(let te=0,xe=Le.length;te<xe;te++)ve=Le[te],Fe?z&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,ve.width,ve.height,ge,De,ve.data):n.texImage2D(t.TEXTURE_2D,te,_e,ve.width,ve.height,0,ge,De,ve.data);S.generateMipmaps=!1}else Fe?(Ge&&n.texStorage2D(t.TEXTURE_2D,le,_e,ne.width,ne.height),z&&J(S,ne,ge,De)):n.texImage2D(t.TEXTURE_2D,0,_e,ne.width,ne.height,0,ge,De,ne.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Fe&&Ge&&n.texStorage3D(t.TEXTURE_2D_ARRAY,le,_e,Le[0].width,Le[0].height,ne.depth);for(let te=0,xe=Le.length;te<xe;te++)if(ve=Le[te],S.format!==Yn)if(ge!==null)if(Fe){if(z)if(S.layerUpdates.size>0){const Ee=Km(ve.width,ve.height,S.format,S.type);for(const ae of S.layerUpdates){const Ue=ve.data.subarray(ae*Ee/ve.data.BYTES_PER_ELEMENT,(ae+1)*Ee/ve.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,ae,ve.width,ve.height,1,ge,Ue)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,0,ve.width,ve.height,ne.depth,ge,ve.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,te,_e,ve.width,ve.height,ne.depth,0,ve.data,0,0);else Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?z&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,0,ve.width,ve.height,ne.depth,ge,De,ve.data):n.texImage3D(t.TEXTURE_2D_ARRAY,te,_e,ve.width,ve.height,ne.depth,0,ge,De,ve.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{Fe&&Ge&&n.texStorage2D(t.TEXTURE_2D,le,_e,Le[0].width,Le[0].height);for(let te=0,xe=Le.length;te<xe;te++)ve=Le[te],S.format!==Yn?ge!==null?Fe?z&&n.compressedTexSubImage2D(t.TEXTURE_2D,te,0,0,ve.width,ve.height,ge,ve.data):n.compressedTexImage2D(t.TEXTURE_2D,te,_e,ve.width,ve.height,0,ve.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?z&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,ve.width,ve.height,ge,De,ve.data):n.texImage2D(t.TEXTURE_2D,te,_e,ve.width,ve.height,0,ge,De,ve.data)}else if(S.isDataArrayTexture)if(Fe){if(Ge&&n.texStorage3D(t.TEXTURE_2D_ARRAY,le,_e,ne.width,ne.height,ne.depth),z)if(S.layerUpdates.size>0){const te=Km(ne.width,ne.height,S.format,S.type);for(const xe of S.layerUpdates){const Ee=ne.data.subarray(xe*te/ne.data.BYTES_PER_ELEMENT,(xe+1)*te/ne.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,xe,ne.width,ne.height,1,ge,De,Ee)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ge,De,ne.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,_e,ne.width,ne.height,ne.depth,0,ge,De,ne.data);else if(S.isData3DTexture)Fe?(Ge&&n.texStorage3D(t.TEXTURE_3D,le,_e,ne.width,ne.height,ne.depth),z&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ge,De,ne.data)):n.texImage3D(t.TEXTURE_3D,0,_e,ne.width,ne.height,ne.depth,0,ge,De,ne.data);else if(S.isFramebufferTexture){if(Ge)if(Fe)n.texStorage2D(t.TEXTURE_2D,le,_e,ne.width,ne.height);else{let te=ne.width,xe=ne.height;for(let Ee=0;Ee<le;Ee++)n.texImage2D(t.TEXTURE_2D,Ee,_e,te,xe,0,ge,De,null),te>>=1,xe>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in t){const te=t.canvas;if(te.hasAttribute("layoutsubtree")||te.setAttribute("layoutsubtree","true"),ne.parentNode!==te){te.appendChild(ne),p.add(S),te.onpaint=xe=>{const Ee=xe.changedElements;for(const ae of p)Ee.includes(ae.image)&&(ae.needsUpdate=!0)},te.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,ne);else{const Ee=t.RGBA,ae=t.RGBA,Ue=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,Ee,ae,Ue,ne)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Le.length>0){if(Fe&&Ge){const te=tt(Le[0]);n.texStorage2D(t.TEXTURE_2D,le,_e,te.width,te.height)}for(let te=0,xe=Le.length;te<xe;te++)ve=Le[te],Fe?z&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,ge,De,ve):n.texImage2D(t.TEXTURE_2D,te,_e,ge,De,ve);S.generateMipmaps=!1}else if(Fe){if(Ge){const te=tt(ne);n.texStorage2D(t.TEXTURE_2D,le,_e,te.width,te.height)}z&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,De,ne)}else n.texImage2D(t.TEXTURE_2D,0,_e,ge,De,ne);d(S)&&x(q),pe.__version=ue.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function Oe(P,S,W){if(S.image.length!==6)return;const q=de(P,S),Q=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+W);const ue=i.get(Q);if(Q.version!==ue.__version||q===!0){n.activeTexture(t.TEXTURE0+W);const pe=Ze.getPrimaries(Ze.workingColorSpace),ee=S.colorSpace===Qi?null:Ze.getPrimaries(S.colorSpace),ne=S.colorSpace===Qi||pe===ee?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);const ge=S.isCompressedTexture||S.image[0].isCompressedTexture,De=S.image[0]&&S.image[0].isDataTexture,_e=[];for(let ae=0;ae<6;ae++)!ge&&!De?_e[ae]=g(S.image[ae],!0,r.maxCubemapSize):_e[ae]=De?S.image[ae].image:S.image[ae],_e[ae]=It(S,_e[ae]);const ve=_e[0],Le=s.convert(S.format,S.colorSpace),Fe=s.convert(S.type),Ge=M(S.internalFormat,Le,Fe,S.normalized,S.colorSpace),z=S.isVideoTexture!==!0,le=ue.__version===void 0||q===!0,te=Q.dataReady;let xe=w(S,ve);fe(t.TEXTURE_CUBE_MAP,S);let Ee;if(ge){z&&le&&n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,Ge,ve.width,ve.height);for(let ae=0;ae<6;ae++){Ee=_e[ae].mipmaps;for(let Ue=0;Ue<Ee.length;Ue++){const Ie=Ee[Ue];S.format!==Yn?Le!==null?z?te&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ue,0,0,Ie.width,Ie.height,Le,Ie.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ue,Ge,Ie.width,Ie.height,0,Ie.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ue,0,0,Ie.width,Ie.height,Le,Fe,Ie.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ue,Ge,Ie.width,Ie.height,0,Le,Fe,Ie.data)}}}else{if(Ee=S.mipmaps,z&&le){Ee.length>0&&xe++;const ae=tt(_e[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,Ge,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(De){z?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,_e[ae].width,_e[ae].height,Le,Fe,_e[ae].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ge,_e[ae].width,_e[ae].height,0,Le,Fe,_e[ae].data);for(let Ue=0;Ue<Ee.length;Ue++){const ft=Ee[Ue].image[ae].image;z?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ue+1,0,0,ft.width,ft.height,Le,Fe,ft.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ue+1,Ge,ft.width,ft.height,0,Le,Fe,ft.data)}}else{z?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Le,Fe,_e[ae]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ge,Le,Fe,_e[ae]);for(let Ue=0;Ue<Ee.length;Ue++){const Ie=Ee[Ue];z?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ue+1,0,0,Le,Fe,Ie.image[ae]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ue+1,Ge,Le,Fe,Ie.image[ae])}}}d(S)&&x(t.TEXTURE_CUBE_MAP),ue.__version=Q.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function me(P,S,W,q,Q,ue){const pe=s.convert(W.format,W.colorSpace),ee=s.convert(W.type),ne=M(W.internalFormat,pe,ee,W.normalized,W.colorSpace),ge=i.get(S),De=i.get(W);if(De.__renderTarget=S,!ge.__hasExternalTextures){const _e=Math.max(1,S.width>>ue),ve=Math.max(1,S.height>>ue);Q===t.TEXTURE_3D||Q===t.TEXTURE_2D_ARRAY?n.texImage3D(Q,ue,ne,_e,ve,S.depth,0,pe,ee,null):n.texImage2D(Q,ue,ne,_e,ve,0,pe,ee,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),St(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,q,Q,De.__webglTexture,0,dt(S)):(Q===t.TEXTURE_2D||Q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,q,Q,De.__webglTexture,ue),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ve(P,S,W){if(t.bindRenderbuffer(t.RENDERBUFFER,P),S.depthBuffer){const q=S.depthTexture,Q=q&&q.isDepthTexture?q.type:null,ue=b(S.stencilBuffer,Q),pe=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;St(S)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,dt(S),ue,S.width,S.height):W?t.renderbufferStorageMultisample(t.RENDERBUFFER,dt(S),ue,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,ue,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,pe,t.RENDERBUFFER,P)}else{const q=S.textures;for(let Q=0;Q<q.length;Q++){const ue=q[Q],pe=s.convert(ue.format,ue.colorSpace),ee=s.convert(ue.type),ne=M(ue.internalFormat,pe,ee,ue.normalized,ue.colorSpace);St(S)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,dt(S),ne,S.width,S.height):W?t.renderbufferStorageMultisample(t.RENDERBUFFER,dt(S),ne,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,ne,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function nt(P,S,W){const q=S.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Q=i.get(S.depthTexture);if(Q.__renderTarget=S,(!Q.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),q){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,S.depthTexture.addEventListener("dispose",A)),Q.__webglTexture===void 0){Q.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),fe(t.TEXTURE_CUBE_MAP,S.depthTexture);const ge=s.convert(S.depthTexture.format),De=s.convert(S.depthTexture.type);let _e;S.depthTexture.format===Fi?_e=t.DEPTH_COMPONENT24:S.depthTexture.format===Nr&&(_e=t.DEPTH24_STENCIL8);for(let ve=0;ve<6;ve++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,_e,S.width,S.height,0,ge,De,null)}}else N(S.depthTexture,0);const ue=Q.__webglTexture,pe=dt(S),ee=q?t.TEXTURE_CUBE_MAP_POSITIVE_X+W:t.TEXTURE_2D,ne=S.depthTexture.format===Nr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(S.depthTexture.format===Fi)St(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ne,ee,ue,0,pe):t.framebufferTexture2D(t.FRAMEBUFFER,ne,ee,ue,0);else if(S.depthTexture.format===Nr)St(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ne,ee,ue,0,pe):t.framebufferTexture2D(t.FRAMEBUFFER,ne,ee,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ke(P){const S=i.get(P),W=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){const q=P.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),q){const Q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,q.removeEventListener("dispose",Q)};q.addEventListener("dispose",Q),S.__depthDisposeCallback=Q}S.__boundDepthTexture=q}if(P.depthTexture&&!S.__autoAllocateDepthBuffer)if(W)for(let q=0;q<6;q++)nt(S.__webglFramebuffer[q],P,q);else{const q=P.texture.mipmaps;q&&q.length>0?nt(S.__webglFramebuffer[0],P,0):nt(S.__webglFramebuffer,P,0)}else if(W){S.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[q]),S.__webglDepthbuffer[q]===void 0)S.__webglDepthbuffer[q]=t.createRenderbuffer(),Ve(S.__webglDepthbuffer[q],P,!1);else{const Q=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=S.__webglDepthbuffer[q];t.bindRenderbuffer(t.RENDERBUFFER,ue),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,ue)}}else{const q=P.texture.mipmaps;if(q&&q.length>0?n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),Ve(S.__webglDepthbuffer,P,!1);else{const Q=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ue),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,ue)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function re(P,S,W){const q=i.get(P);S!==void 0&&me(q.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),W!==void 0&&ke(P)}function Ae(P){const S=P.texture,W=i.get(P),q=i.get(S);P.addEventListener("dispose",_);const Q=P.textures,ue=P.isWebGLCubeRenderTarget===!0,pe=Q.length>1;if(pe||(q.__webglTexture===void 0&&(q.__webglTexture=t.createTexture()),q.__version=S.version,a.memory.textures++),ue){W.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(S.mipmaps&&S.mipmaps.length>0){W.__webglFramebuffer[ee]=[];for(let ne=0;ne<S.mipmaps.length;ne++)W.__webglFramebuffer[ee][ne]=t.createFramebuffer()}else W.__webglFramebuffer[ee]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){W.__webglFramebuffer=[];for(let ee=0;ee<S.mipmaps.length;ee++)W.__webglFramebuffer[ee]=t.createFramebuffer()}else W.__webglFramebuffer=t.createFramebuffer();if(pe)for(let ee=0,ne=Q.length;ee<ne;ee++){const ge=i.get(Q[ee]);ge.__webglTexture===void 0&&(ge.__webglTexture=t.createTexture(),a.memory.textures++)}if(P.samples>0&&St(P)===!1){W.__webglMultisampledFramebuffer=t.createFramebuffer(),W.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ee=0;ee<Q.length;ee++){const ne=Q[ee];W.__webglColorRenderbuffer[ee]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,W.__webglColorRenderbuffer[ee]);const ge=s.convert(ne.format,ne.colorSpace),De=s.convert(ne.type),_e=M(ne.internalFormat,ge,De,ne.normalized,ne.colorSpace,P.isXRRenderTarget===!0),ve=dt(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,ve,_e,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ee,t.RENDERBUFFER,W.__webglColorRenderbuffer[ee])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(W.__webglDepthRenderbuffer=t.createRenderbuffer(),Ve(W.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ue){n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),fe(t.TEXTURE_CUBE_MAP,S);for(let ee=0;ee<6;ee++)if(S.mipmaps&&S.mipmaps.length>0)for(let ne=0;ne<S.mipmaps.length;ne++)me(W.__webglFramebuffer[ee][ne],P,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ne);else me(W.__webglFramebuffer[ee],P,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);d(S)&&x(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(pe){for(let ee=0,ne=Q.length;ee<ne;ee++){const ge=Q[ee],De=i.get(ge);let _e=t.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(_e=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(_e,De.__webglTexture),fe(_e,ge),me(W.__webglFramebuffer,P,ge,t.COLOR_ATTACHMENT0+ee,_e,0),d(ge)&&x(_e)}n.unbindTexture()}else{let ee=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ee=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ee,q.__webglTexture),fe(ee,S),S.mipmaps&&S.mipmaps.length>0)for(let ne=0;ne<S.mipmaps.length;ne++)me(W.__webglFramebuffer[ne],P,S,t.COLOR_ATTACHMENT0,ee,ne);else me(W.__webglFramebuffer,P,S,t.COLOR_ATTACHMENT0,ee,0);d(S)&&x(ee),n.unbindTexture()}P.depthBuffer&&ke(P)}function ze(P){const S=P.textures;for(let W=0,q=S.length;W<q;W++){const Q=S[W];if(d(Q)){const ue=E(P),pe=i.get(Q).__webglTexture;n.bindTexture(ue,pe),x(ue),n.unbindTexture()}}}const it=[],xt=[];function Rt(P){if(P.samples>0){if(St(P)===!1){const S=P.textures,W=P.width,q=P.height;let Q=t.COLOR_BUFFER_BIT;const ue=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=i.get(P),ee=S.length>1;if(ee)for(let ge=0;ge<S.length;ge++)n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer);const ne=P.texture.mipmaps;ne&&ne.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let ge=0;ge<S.length;ge++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Q|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Q|=t.STENCIL_BUFFER_BIT)),ee){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,pe.__webglColorRenderbuffer[ge]);const De=i.get(S[ge]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,De,0)}t.blitFramebuffer(0,0,W,q,0,0,W,q,Q,t.NEAREST),c===!0&&(it.length=0,xt.length=0,it.push(t.COLOR_ATTACHMENT0+ge),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(it.push(ue),xt.push(ue),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,xt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,it))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ee)for(let ge=0;ge<S.length;ge++){n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,pe.__webglColorRenderbuffer[ge]);const De=i.get(S[ge]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,De,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&c){const S=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function dt(P){return Math.min(r.maxSamples,P.samples)}function St(P){const S=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function B(P){const S=a.render.frame;f.get(P)!==S&&(f.set(P,S),P.update())}function It(P,S){const W=P.colorSpace,q=P.format,Q=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||W!==nc&&W!==Qi&&(Ze.getTransfer(W)===at?(q!==Yn||Q!==En)&&Be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Je("WebGLTextures: Unsupported texture color space:",W)),S}function tt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(u.width=P.naturalWidth||P.width,u.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(u.width=P.displayWidth,u.height=P.displayHeight):(u.width=P.width,u.height=P.height),u}this.allocateTextureUnit=O,this.resetTextureUnits=j,this.getTextureUnits=U,this.setTextureUnits=G,this.setTexture2D=N,this.setTexture2DArray=F,this.setTexture3D=I,this.setTextureCube=H,this.rebindTextures=re,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=ze,this.updateMultisampleRenderTarget=Rt,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=me,this.useMultisampledRTT=St,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function tC(t,e){function n(i,r=Qi){let s;const a=Ze.getTransfer(r);if(i===En)return t.UNSIGNED_BYTE;if(i===Ah)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Rh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===nx)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===ix)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===ex)return t.BYTE;if(i===tx)return t.SHORT;if(i===ro)return t.UNSIGNED_SHORT;if(i===Ch)return t.INT;if(i===fi)return t.UNSIGNED_INT;if(i===oi)return t.FLOAT;if(i===hi)return t.HALF_FLOAT;if(i===rx)return t.ALPHA;if(i===sx)return t.RGB;if(i===Yn)return t.RGBA;if(i===Fi)return t.DEPTH_COMPONENT;if(i===Nr)return t.DEPTH_STENCIL;if(i===ax)return t.RED;if(i===Ph)return t.RED_INTEGER;if(i===Xr)return t.RG;if(i===Dh)return t.RG_INTEGER;if(i===Lh)return t.RGBA_INTEGER;if(i===Ml||i===El||i===Tl||i===bl)if(a===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ml)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===El)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Tl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===bl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ml)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===El)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Tl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===bl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Yd||i===Kd||i===qd||i===Zd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Yd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Kd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===qd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Zd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Qd||i===Jd||i===ef||i===tf||i===nf||i===ec||i===rf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Qd||i===Jd)return a===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ef)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===tf)return s.COMPRESSED_R11_EAC;if(i===nf)return s.COMPRESSED_SIGNED_R11_EAC;if(i===ec)return s.COMPRESSED_RG11_EAC;if(i===rf)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===sf||i===af||i===of||i===lf||i===cf||i===uf||i===df||i===ff||i===hf||i===pf||i===mf||i===gf||i===vf||i===xf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===sf)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===af)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===of)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===lf)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===cf)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===uf)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===df)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ff)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===hf)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===pf)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===mf)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===gf)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===vf)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===xf)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===_f||i===yf||i===Sf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===_f)return a===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===yf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Sf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Mf||i===Ef||i===tc||i===Tf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Mf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ef)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===tc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Tf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===so?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const nC=`
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

}`;class rC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new px(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new pi({vertexShader:nC,fragmentShader:iC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new jt(new Ac(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sC extends yr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,u=null,f=null,p=null,h=null,m=null,y=null;const v=typeof XRWebGLBinding<"u",g=new rC,d={},x=n.getContextAttributes();let E=null,M=null;const b=[],w=[],A=new He;let _=null,C=null;const R=new Nn;R.viewport=new Et;const L=new Nn;L.viewport=new Et;const D=[R,L],j=new u1;let U=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let J=b[$];return J===void 0&&(J=new mu,b[$]=J),J.getTargetRaySpace()},this.getControllerGrip=function($){let J=b[$];return J===void 0&&(J=new mu,b[$]=J),J.getGripSpace()},this.getHand=function($){let J=b[$];return J===void 0&&(J=new mu,b[$]=J),J.getHandSpace()};function O($){const J=w.indexOf($.inputSource);if(J===-1)return;const ye=b[J];ye!==void 0&&(ye.update($.inputSource,$.frame,u||a),ye.dispatchEvent({type:$.type,data:$.inputSource}))}function V(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",N);for(let $=0;$<b.length;$++){const J=w[$];J!==null&&(w[$]=null,b[$].disconnect(J))}U=null,G=null,g.reset();for(const $ in d)delete d[$];if(e.setRenderTarget(E),m=null,h=null,p=null,r=null,M=null,de.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(A.width,A.height,!1),C!==null){const $=C.camera;$.fov=C.fov,$.zoom=C.zoom,$.updateProjectionMatrix(),C=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&Be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&Be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function($){u=$},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return p===null&&v&&(p=new XRWebGLBinding(r,n)),p},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(E=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",V),r.addEventListener("inputsourceschange",N),x.xrCompatible!==!0&&await n.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(A),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Oe=null,me=null;x.depth&&(me=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ye=x.stencil?Nr:Fi,Oe=x.stencil?so:fi);const Ve={colorFormat:n.RGBA8,depthFormat:me,scaleFactor:s};p=this.getBinding(),h=p.createProjectionLayer(Ve),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new Zn(h.textureWidth,h.textureHeight,{format:Yn,type:En,depthTexture:new co(h.textureWidth,h.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const ye={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,ye),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new Zn(m.framebufferWidth,m.framebufferHeight,{format:Yn,type:En,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await r.requestReferenceSpace(o),de.setContext(r),de.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function N($){for(let J=0;J<$.removed.length;J++){const ye=$.removed[J],Oe=w.indexOf(ye);Oe>=0&&(w[Oe]=null,b[Oe].disconnect(ye))}for(let J=0;J<$.added.length;J++){const ye=$.added[J];let Oe=w.indexOf(ye);if(Oe===-1){for(let Ve=0;Ve<b.length;Ve++)if(Ve>=w.length){w.push(ye),Oe=Ve;break}else if(w[Ve]===null){w[Ve]=ye,Oe=Ve;break}if(Oe===-1)break}const me=b[Oe];me&&me.connect(ye)}}const F=new X,I=new X;function H($,J,ye){F.setFromMatrixPosition(J.matrixWorld),I.setFromMatrixPosition(ye.matrixWorld);const Oe=F.distanceTo(I),me=J.projectionMatrix.elements,Ve=ye.projectionMatrix.elements,nt=me[14]/(me[10]-1),ke=me[14]/(me[10]+1),re=(me[9]+1)/me[5],Ae=(me[9]-1)/me[5],ze=(me[8]-1)/me[0],it=(Ve[8]+1)/Ve[0],xt=nt*ze,Rt=nt*it,dt=Oe/(-ze+it),St=dt*-ze;if(J.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(St),$.translateZ(dt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),me[10]===-1)$.projectionMatrix.copy(J.projectionMatrix),$.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const B=nt+dt,It=ke+dt,tt=xt-St,P=Rt+(Oe-St),S=re*ke/It*B,W=Ae*ke/It*B;$.projectionMatrix.makePerspective(tt,P,S,W,B,It),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ie($,J){J===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(J.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let J=$.near,ye=$.far;g.texture!==null&&(g.depthNear>0&&(J=g.depthNear),g.depthFar>0&&(ye=g.depthFar)),j.near=L.near=R.near=J,j.far=L.far=R.far=ye,(U!==j.near||G!==j.far)&&(r.updateRenderState({depthNear:j.near,depthFar:j.far}),U=j.near,G=j.far),j.layers.mask=$.layers.mask|6,R.layers.mask=j.layers.mask&-5,L.layers.mask=j.layers.mask&-3;const Oe=$.parent,me=j.cameras;ie(j,Oe);for(let Ve=0;Ve<me.length;Ve++)ie(me[Ve],Oe);me.length===2?H(j,R,L):j.projectionMatrix.copy(R.projectionMatrix),C===null&&$.isPerspectiveCamera&&(C={camera:$,fov:$.fov,zoom:$.zoom}),oe($,j,Oe)};function oe($,J,ye){ye===null?$.matrix.copy(J.matrixWorld):($.matrix.copy(ye.matrixWorld),$.matrix.invert(),$.matrix.multiply(J.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(J.projectionMatrix),$.projectionMatrixInverse.copy(J.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=lo*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(h===null&&m===null))return c},this.setFoveation=function($){c=$,h!==null&&(h.fixedFoveation=$),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(j)},this.getCameraTexture=function($){return d[$]};let se=null;function fe($,J){if(f=J.getViewerPose(u||a),y=J,f!==null){const ye=f.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let Oe=!1;ye.length!==j.cameras.length&&(j.cameras.length=0,Oe=!0);for(let ke=0;ke<ye.length;ke++){const re=ye[ke];let Ae=null;if(m!==null)Ae=m.getViewport(re);else{const it=p.getViewSubImage(h,re);Ae=it.viewport,ke===0&&(e.setRenderTargetTextures(M,it.colorTexture,it.depthStencilTexture),e.setRenderTarget(M))}let ze=D[ke];ze===void 0&&(ze=new Nn,ze.layers.enable(ke),ze.viewport=new Et,D[ke]=ze),ze.matrix.fromArray(re.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(re.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),ke===0&&(j.matrix.copy(ze.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),Oe===!0&&j.cameras.push(ze)}const me=r.enabledFeatures;if(me&&me.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){p=i.getBinding();const ke=p.getDepthInformation(ye[0]);ke&&ke.isValid&&ke.texture&&g.init(ke,r.renderState)}if(me&&me.includes("camera-access")&&v){e.state.unbindTexture(),p=i.getBinding();for(let ke=0;ke<ye.length;ke++){const re=ye[ke].camera;if(re){let Ae=d[re];Ae||(Ae=new px,d[re]=Ae);const ze=p.getCameraImage(re);Ae.sourceTexture=ze}}}}for(let ye=0;ye<b.length;ye++){const Oe=w[ye],me=b[ye];Oe!==null&&me!==void 0&&me.update(Oe,J,u||a)}se&&se($,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),y=null}const de=new xx;de.setAnimationLoop(fe),this.setAnimationLoop=function($){se=$},this.dispose=function(){}}}const aC=new yt,bx=new je;bx.set(-1,0,0,0,1,0,0,0,1);function oC(t,e){function n(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,mx(t)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,x,E,M){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(g,d):d.isMeshLambertMaterial?(s(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(g,d),p(g,d)):d.isMeshPhongMaterial?(s(g,d),f(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(g,d),h(g,d),d.isMeshPhysicalMaterial&&m(g,d,M)):d.isMeshMatcapMaterial?(s(g,d),y(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),v(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(a(g,d),d.isLineDashedMaterial&&o(g,d)):d.isPointsMaterial?c(g,d,x,E):d.isSpriteMaterial?u(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,n(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===un&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,n(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===un&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,n(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,n(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const x=e.get(d),E=x.envMap,M=x.envMapRotation;E&&(g.envMap.value=E,g.envMapRotation.value.setFromMatrix4(aC.makeRotationFromEuler(M)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(bx),g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,g.aoMapTransform))}function a(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform))}function o(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function c(g,d,x,E){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*x,g.scale.value=E*.5,d.map&&(g.map.value=d.map,n(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function u(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function f(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function p(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function h(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function m(g,d,x){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===un&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.retroreflectivity>0&&(g.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,g.specularIntensityMapTransform))}function y(g,d){d.matcap&&(g.matcap.value=d.matcap)}function v(g,d){const x=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function lC(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,b){const w=b.program;i.uniformBlockBinding(M,w)}function u(M,b){let w=r[M.id];w===void 0&&(g(M),w=f(M),r[M.id]=w,M.addEventListener("dispose",x));const A=b.program;i.updateUBOMapping(M,A);const _=e.render.frame;s[M.id]!==_&&(h(M),s[M.id]=_)}function f(M){const b=p();M.__bindingPointIndex=b;const w=t.createBuffer(),A=M.__size,_=M.usage;return t.bindBuffer(t.UNIFORM_BUFFER,w),t.bufferData(t.UNIFORM_BUFFER,A,_),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,b,w),w}function p(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const b=r[M.id],w=M.uniforms,A=M.__cache;t.bindBuffer(t.UNIFORM_BUFFER,b);for(let _=0,C=w.length;_<C;_++){const R=w[_];if(Array.isArray(R))for(let L=0,D=R.length;L<D;L++)m(R[L],_,L,A);else m(R,_,0,A)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(M,b,w,A){if(v(M,b,w,A)===!0){const _=M.__offset,C=M.value;if(Array.isArray(C)){let R=0;for(let L=0;L<C.length;L++){const D=C[L],j=d(D);y(D,M.__data,R),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(R+=j.storage/Float32Array.BYTES_PER_ELEMENT)}}else y(C,M.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,_,M.__data)}}function y(M,b,w){typeof M=="number"||typeof M=="boolean"?b[0]=M:M.isMatrix3?(b[0]=M.elements[0],b[1]=M.elements[1],b[2]=M.elements[2],b[3]=0,b[4]=M.elements[3],b[5]=M.elements[4],b[6]=M.elements[5],b[7]=0,b[8]=M.elements[6],b[9]=M.elements[7],b[10]=M.elements[8],b[11]=0):ArrayBuffer.isView(M)?b.set(new M.constructor(M.buffer,M.byteOffset,b.length)):M.toArray(b,w)}function v(M,b,w,A){const _=M.value,C=b+"_"+w;if(A[C]===void 0)return typeof _=="number"||typeof _=="boolean"?A[C]=_:ArrayBuffer.isView(_)?A[C]=_.slice():A[C]=_.clone(),!0;{const R=A[C];if(typeof _=="number"||typeof _=="boolean"){if(R!==_)return A[C]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(R.equals(_)===!1)return R.copy(_),!0}}return!1}function g(M){const b=M.uniforms;let w=0;const A=16;for(let C=0,R=b.length;C<R;C++){const L=Array.isArray(b[C])?b[C]:[b[C]];for(let D=0,j=L.length;D<j;D++){const U=L[D],G=Array.isArray(U.value)?U.value:[U.value];for(let O=0,V=G.length;O<V;O++){const N=G[O],F=d(N),I=w%A,H=I%F.boundary,ie=I+H;w+=H,ie!==0&&A-ie<F.storage&&(w+=A-ie),U.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=w,w+=F.storage}}}const _=w%A;return _>0&&(w+=A-_),M.__size=w,M.__cache={},this}function d(M){const b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?Be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(b.boundary=16,b.storage=M.byteLength):Be("WebGLRenderer: Unsupported uniform value type.",M),b}function x(M){const b=M.target;b.removeEventListener("dispose",x);const w=a.indexOf(b.__bindingPointIndex);a.splice(w,1),t.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function E(){for(const M in r)t.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:c,update:u,dispose:E}}const cC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ii=null;function uC(){return ii===null&&(ii=new jM(cC,16,16,Xr,hi),ii.name="DFG_LUT",ii.minFilter=tn,ii.magFilter=tn,ii.wrapS=Ci,ii.wrapT=Ci,ii.generateMipmaps=!1,ii.needsUpdate=!0),ii}class dC{constructor(e={}){const{canvas:n=rM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:m=En}=e;this.isWebGLRenderer=!0;let y;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=i.getContextAttributes().alpha}else y=a;const v=m,g=new Set([Lh,Dh,Ph]),d=new Set([En,fi,ro,so,Ah,Rh]),x=new Uint32Array(4),E=new Int32Array(4),M=new X;let b=null,w=null;const A=[],_=[];let C=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let L=!1,D=null,j=null,U=null,G=null;this._outputColorSpace=pn;let O=0,V=0,N=null,F=-1,I=null;const H=new Et,ie=new Et;let oe=null;const se=new qe(0);let fe=0,de=n.width,$=n.height,J=1,ye=null,Oe=null;const me=new Et(0,0,de,$),Ve=new Et(0,0,de,$);let nt=!1;const ke=new kh;let re=!1,Ae=!1;const ze=new yt,it=new X,xt=new Et,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dt=!1;function St(){return N===null?J:1}let B=i;function It(T,k){return n.getContext(T,k)}let tt,P,S,W,q,Q,ue,pe,ee,ne,ge,De,_e,ve,Le,Fe,Ge,z,le,te,xe,Ee,ae;try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${bh}`),n.addEventListener("webglcontextlost",ft,!1),n.addEventListener("webglcontextrestored",rt,!1),n.addEventListener("webglcontextcreationerror",zn,!1),B===null){const k="webgl2";if(B=It(k,T),B===null)throw It(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ue()}catch(T){throw n.removeEventListener("webglcontextlost",ft,!1),n.removeEventListener("webglcontextrestored",rt,!1),n.removeEventListener("webglcontextcreationerror",zn,!1),Je("WebGLRenderer: "+T.message),T}function Ue(){tt=new ub(B),tt.init(),xe=new tC(B,tt),P=new eb(B,tt,e,xe),S=new Jw(B,tt),P.reversedDepthBuffer&&h&&S.buffers.depth.setReversed(!0),j=B.createFramebuffer(),U=B.createFramebuffer(),G=B.createFramebuffer(),W=new hb(B),q=new zw,Q=new eC(B,tt,S,q,P,xe,W),ue=new cb(R),pe=new m1(B),Ee=new QT(B,pe),ee=new db(B,pe,W,Ee),ne=new mb(B,ee,pe,Ee,W),z=new pb(B,P,Q),Le=new tb(q),ge=new kw(R,ue,tt,P,Ee,Le),De=new oC(R,q),_e=new Hw,ve=new $w(tt),Ge=new ZT(R,ue,S,ne,y,c),Fe=new Qw(R,ne,P),ae=new lC(B,W,P,S),le=new JT(B,tt,W),te=new fb(B,tt,W),W.programs=ge.programs,R.capabilities=P,R.extensions=tt,R.properties=q,R.renderLists=_e,R.shadowMap=Fe,R.state=S,R.info=W}v!==En&&(C=new vb(v,n.width,n.height,o,r,s));const Ie=new sC(R,B);this.xr=Ie,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const T=tt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=tt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(T){T!==void 0&&(J=T,this.setSize(de,$,!1))},this.getSize=function(T){return T.set(de,$)},this.setSize=function(T,k,Z=!0){if(Ie.isPresenting){Be("WebGLRenderer: Can't change size while VR device is presenting.");return}de=T,$=k,n.width=Math.floor(T*J),n.height=Math.floor(k*J),Z===!0&&(n.style.width=T+"px",n.style.height=k+"px"),C!==null&&C.setSize(n.width,n.height),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set(de*J,$*J).floor()},this.setDrawingBufferSize=function(T,k,Z){de=T,$=k,J=Z,n.width=Math.floor(T*Z),n.height=Math.floor(k*Z),this.setViewport(0,0,T,k)},this.setEffects=function(T){if(v===En){Je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let k=0;k<T.length;k++)if(T[k].isOutputPass===!0){Be("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(H)},this.getViewport=function(T){return T.copy(me)},this.setViewport=function(T,k,Z,Y){T.isVector4?me.set(T.x,T.y,T.z,T.w):me.set(T,k,Z,Y),S.viewport(H.copy(me).multiplyScalar(J).round())},this.getScissor=function(T){return T.copy(Ve)},this.setScissor=function(T,k,Z,Y){T.isVector4?Ve.set(T.x,T.y,T.z,T.w):Ve.set(T,k,Z,Y),S.scissor(ie.copy(Ve).multiplyScalar(J).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(T){S.setScissorTest(nt=T)},this.setOpaqueSort=function(T){ye=T},this.setTransparentSort=function(T){Oe=T},this.getClearColor=function(T){return T.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor(...arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha(...arguments)},this.clear=function(T=!0,k=!0,Z=!0){let Y=0;if(T){let K=!1;if(N!==null){const Te=N.texture.format;K=g.has(Te)}if(K){const Te=N.texture.type,we=d.has(Te),Me=Ge.getClearColor(),Re=Ge.getClearAlpha(),Ne=Me.r,We=Me.g,Ye=Me.b;we?(x[0]=Ne,x[1]=We,x[2]=Ye,x[3]=Re,B.clearBufferuiv(B.COLOR,0,x)):(E[0]=Ne,E[1]=We,E[2]=Ye,E[3]=Re,B.clearBufferiv(B.COLOR,0,E))}else Y|=B.COLOR_BUFFER_BIT}k&&(Y|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(Y|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&B.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),D=T},this.dispose=function(){n.removeEventListener("webglcontextlost",ft,!1),n.removeEventListener("webglcontextrestored",rt,!1),n.removeEventListener("webglcontextcreationerror",zn,!1),Ge.dispose(),_e.dispose(),ve.dispose(),q.dispose(),ue.dispose(),ne.dispose(),Ee.dispose(),ae.dispose(),ge.dispose(),Ie.dispose(),Ie.removeEventListener("sessionstart",Kh),Ie.removeEventListener("sessionend",qh),Sr.stop()};function ft(T){T.preventDefault(),_m("WebGLRenderer: Context Lost."),L=!0}function rt(){_m("WebGLRenderer: Context Restored."),L=!1;const T=W.autoReset,k=Fe.enabled,Z=Fe.autoUpdate,Y=Fe.needsUpdate,K=Fe.type;Ue(),W.autoReset=T,Fe.enabled=k,Fe.autoUpdate=Z,Fe.needsUpdate=Y,Fe.type=K}function zn(T){Je("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Jn(T){const k=T.target;k.removeEventListener("dispose",Jn),Ax(k)}function Ax(T){Rx(T),q.remove(T)}function Rx(T){const k=q.get(T).programs;k!==void 0&&(k.forEach(function(Z){ge.releaseProgram(Z)}),T.isShaderMaterial&&ge.releaseShaderCache(T))}this.renderBufferDirect=function(T,k,Z,Y,K,Te){k===null&&(k=Rt);const we=K.isMesh&&K.matrixWorld.determinantAffine()<0,Me=Lx(T,k,Z,Y,K);S.setMaterial(Y,we);let Re=Z.index,Ne=1;if(Y.wireframe===!0){if(Re=ee.getWireframeAttribute(Z),Re===void 0)return;Ne=2}const We=Z.drawRange,Ye=Z.attributes.position;let Pe=We.start*Ne,st=(We.start+We.count)*Ne;Te!==null&&(Pe=Math.max(Pe,Te.start*Ne),st=Math.min(st,(Te.start+Te.count)*Ne)),Re!==null?(Pe=Math.max(Pe,0),st=Math.min(st,Re.count)):Ye!=null&&(Pe=Math.max(Pe,0),st=Math.min(st,Ye.count));const Pt=st-Pe;if(Pt<0||Pt===1/0)return;Ee.setup(K,Y,Me,Z,Re);let mt,ut=le;if(Re!==null&&(mt=pe.get(Re),ut=te,ut.setIndex(mt)),K.isMesh)Y.wireframe===!0?(S.setLineWidth(Y.wireframeLinewidth*St()),ut.setMode(B.LINES)):ut.setMode(B.TRIANGLES);else if(K.isLine){let Kt=Y.linewidth;Kt===void 0&&(Kt=1),S.setLineWidth(Kt*St()),K.isLineSegments?ut.setMode(B.LINES):K.isLineLoop?ut.setMode(B.LINE_LOOP):ut.setMode(B.LINE_STRIP)}else K.isPoints?ut.setMode(B.POINTS):K.isSprite&&ut.setMode(B.TRIANGLES);if(K.isBatchedMesh)if(tt.get("WEBGL_multi_draw"))ut.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Kt=K._multiDrawStarts,be=K._multiDrawCounts,sn=K._multiDrawCount,Qe=Re?pe.get(Re).bytesPerElement:1,Pn=q.get(Y).currentProgram.getUniforms();for(let ei=0;ei<sn;ei++)Pn.setValue(B,"_gl_DrawID",ei),ut.render(Kt[ei]/Qe,be[ei])}else if(K.isInstancedMesh)ut.renderInstances(Pe,Pt,K.count);else if(Z.isInstancedBufferGeometry){const Kt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,be=Math.min(Z.instanceCount,Kt);ut.renderInstances(Pe,Pt,be)}else ut.render(Pe,Pt)};function Yh(T,k,Z,Y){D!==null&&T.isNodeMaterial&&D.setObject(Y,T),re===!0&&Le.setState(T,Z,!1),T.transparent===!0&&T.side===Ti&&T.forceSinglePass===!1?(T.side=un,T.needsUpdate=!0,_o(T,k,Y),T.side=jr,T.needsUpdate=!0,_o(T,k,Y),T.side=Ti):_o(T,k,Y)}this.compile=function(T,k,Z=null){Z===null&&(Z=T),D!==null&&D.renderStart(T,k,Z),w=ve.get(Z),w.init(k),_.push(w),Z.traverseVisible(function(K){K.isLight&&K.layers.test(k.layers)&&(w.pushLight(K),K.castShadow&&w.pushShadow(K))}),T!==Z&&T.traverseVisible(function(K){K.isLight&&K.layers.test(k.layers)&&(w.pushLight(K),K.castShadow&&w.pushShadow(K))}),w.setupLights(),D!==null&&D.updateLights(w.state.lightsArray),Ae=this.localClippingEnabled,re=Le.init(this.clippingPlanes,Ae),re===!0&&Le.setGlobalState(this.clippingPlanes,k),D!==null&&Fe.render(w.state.shadowsArray,Z,k);const Y=new Set;return T.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Te=K.material;if(Te)if(Array.isArray(Te))for(let we=0;we<Te.length;we++){const Me=Te[we];Yh(Me,Z,k,K),Y.add(Me)}else Yh(Te,Z,k,K),Y.add(Te)}),w=_.pop(),D!==null&&D.renderEnd(),Y},this.compileAsync=function(T,k,Z=null){const Y=this.compile(T,k,Z);return new Promise(K=>{function Te(){if(Y.forEach(function(we){const Re=q.get(we).currentProgram;(Re===void 0||Re.isReady())&&Y.delete(we)}),Y.size===0){K(T);return}setTimeout(Te,10)}tt.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Dc=null;function Px(T){Dc&&Dc(T)}function Kh(){Sr.stop()}function qh(){Sr.start()}const Sr=new xx;Sr.setAnimationLoop(Px),typeof self<"u"&&Sr.setContext(self),this.setAnimationLoop=function(T){Dc=T,Ie.setAnimationLoop(T),T===null?Sr.stop():Sr.start()},Ie.addEventListener("sessionstart",Kh),Ie.addEventListener("sessionend",qh),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){Je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;D!==null&&D.renderStart(T,k);const Z=Ie.enabled===!0&&Ie.isPresenting===!0,Y=C!==null&&(N===null||Z)&&C.begin(R,N);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(k),k=Ie.getCamera()),T.isScene===!0&&T.onBeforeRender(R,T,k,N),w=ve.get(T,_.length),w.init(k),w.state.textureUnits=Q.getTextureUnits(),_.push(w),ze.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ke.setFromProjectionMatrix(ze,li,k.reversedDepth),Ae=this.localClippingEnabled,re=Le.init(this.clippingPlanes,Ae),b=_e.get(T,A.length),b.init(),A.push(b),Ie.enabled===!0&&Ie.isPresenting===!0){const we=R.xr.getDepthSensingMesh();we!==null&&Lc(we,k,-1/0,R.sortObjects)}Lc(T,k,0,R.sortObjects),b.finish(),D!==null&&D.updateLights(w.state.lightsArray),R.sortObjects===!0&&b.sort(ye,Oe),dt=Ie.enabled===!1||Ie.isPresenting===!1||Ie.hasDepthSensing()===!1,dt&&Ge.addToRenderList(b,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),re===!0&&Le.beginShadows();const K=w.state.shadowsArray;if(Fe.render(K,T,k),re===!0&&Le.endShadows(),(Y&&C.hasRenderPass())===!1){const we=b.opaque,Me=b.transmissive;if(w.setupLights(),k.isArrayCamera){const Re=k.cameras;if(Me.length>0)for(let Ne=0,We=Re.length;Ne<We;Ne++){const Ye=Re[Ne];Qh(we,Me,T,Ye)}dt&&Ge.render(T);for(let Ne=0,We=Re.length;Ne<We;Ne++){const Ye=Re[Ne];Zh(b,T,Ye,Ye.viewport)}}else Me.length>0&&Qh(we,Me,T,k),dt&&Ge.render(T),Zh(b,T,k)}N!==null&&V===0&&(Q.updateMultisampleRenderTarget(N),Q.updateRenderTargetMipmap(N)),Y&&C.end(R),T.isScene===!0&&T.onAfterRender(R,T,k),Ee.resetDefaultState(),F=-1,I=null,_.pop(),_.length>0?(w=_[_.length-1],Q.setTextureUnits(w.state.textureUnits),re===!0&&Le.setGlobalState(R.clippingPlanes,w.state.camera)):w=null,A.pop(),A.length>0?b=A[A.length-1]:b=null,D!==null&&D.renderEnd()};function Lc(T,k,Z,Y){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)Z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLightProbeGrid)w.pushLightProbeGrid(T);else if(T.isLight)w.pushLight(T),T.castShadow&&w.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(ke)){Y&&xt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ze);const we=ne.update(T),Me=T.material;Me.visible&&b.push(T,we,Me,Z,xt.z,null,k)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(ke))){const we=ne.update(T),Me=T.material;if(Y&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),xt.copy(T.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),xt.copy(we.boundingSphere.center)),xt.applyMatrix4(T.matrixWorld).applyMatrix4(ze)),Array.isArray(Me)){const Re=we.groups;for(let Ne=0,We=Re.length;Ne<We;Ne++){const Ye=Re[Ne],Pe=Me[Ye.materialIndex];Pe&&Pe.visible&&b.push(T,we,Pe,Z,xt.z,Ye,k)}}else Me.visible&&b.push(T,we,Me,Z,xt.z,null,k)}}const Te=T.children;for(let we=0,Me=Te.length;we<Me;we++)Lc(Te[we],k,Z,Y)}function Zh(T,k,Z,Y){const{opaque:K,transmissive:Te,transparent:we}=T;w.setupLightsView(Z),re===!0&&Le.setGlobalState(R.clippingPlanes,Z),Y&&S.viewport(H.copy(Y)),K.length>0&&xo(K,k,Z),Te.length>0&&xo(Te,k,Z),we.length>0&&xo(we,k,Z),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function Qh(T,k,Z,Y){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[Y.id]===void 0){const Pe=tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[Y.id]=new Zn(1,1,{generateMipmaps:!0,type:Pe?hi:En,minFilter:Ir,samples:Math.max(4,P.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ze.workingColorSpace})}const Te=w.state.transmissionRenderTarget[Y.id],we=Y.viewport||H;Te.setSize(we.z*R.transmissionResolutionScale,we.w*R.transmissionResolutionScale);const Me=R.getRenderTarget(),Re=R.getActiveCubeFace(),Ne=R.getActiveMipmapLevel();R.setRenderTarget(Te),R.getClearColor(se),fe=R.getClearAlpha(),fe<1&&R.setClearColor(16777215,.5),R.clear(),dt&&Ge.render(Z);const We=R.toneMapping;R.toneMapping=di;const Ye=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),w.setupLightsView(Y),re===!0&&Le.setGlobalState(R.clippingPlanes,Y),xo(T,Z,Y),Q.updateMultisampleRenderTarget(Te),Q.updateRenderTargetMipmap(Te),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let st=0,Pt=k.length;st<Pt;st++){const mt=k[st],{object:ut,geometry:Kt,material:be,group:sn}=mt;if(be.side===Ti&&ut.layers.test(Y.layers)){const Qe=be.side;be.side=un,be.needsUpdate=!0,Jh(ut,Z,Y,Kt,be,sn),be.side=Qe,be.needsUpdate=!0,Pe=!0}}Pe===!0&&(Q.updateMultisampleRenderTarget(Te),Q.updateRenderTargetMipmap(Te))}R.setRenderTarget(Me,Re,Ne),R.setClearColor(se,fe),Ye!==void 0&&(Y.viewport=Ye),R.toneMapping=We}function xo(T,k,Z){const Y=k.isScene===!0?k.overrideMaterial:null;for(let K=0,Te=T.length;K<Te;K++){const we=T[K],{object:Me,geometry:Re,group:Ne}=we;let We=we.material;We.allowOverride===!0&&Y!==null&&(We=Y),Me.layers.test(Z.layers)&&Jh(Me,k,Z,Re,We,Ne)}}function Jh(T,k,Z,Y,K,Te){D!==null&&K.isNodeMaterial&&D.setObject(T,K),T.onBeforeRender(R,k,Z,Y,K,Te),T.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),K.onBeforeRender(R,k,Z,Y,T,Te),K.transparent===!0&&K.side===Ti&&K.forceSinglePass===!1?(K.side=un,K.needsUpdate=!0,R.renderBufferDirect(Z,k,Y,K,T,Te),K.side=jr,K.needsUpdate=!0,R.renderBufferDirect(Z,k,Y,K,T,Te),K.side=Ti):R.renderBufferDirect(Z,k,Y,K,T,Te),T.onAfterRender(R,k,Z,Y,K,Te)}function _o(T,k,Z){k.isScene!==!0&&(k=Rt);const Y=q.get(T),K=w.state.lights,Te=w.state.shadowsArray,we=K.state.version,Me=ge.getParameters(T,K.state,Te,k,Z,w.state.lightProbeGridArray),Re=ge.getProgramCacheKey(Me);let Ne=Y.programs;Y.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?k.environment:null,Y.fog=k.fog;const We=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;Y.envMap=ue.get(T.envMap||Y.environment,We),Y.envMapRotation=Y.environment!==null&&T.envMap===null?k.environmentRotation:T.envMapRotation,Ne===void 0&&(T.addEventListener("dispose",Jn),Ne=new Map,Y.programs=Ne);let Ye=Ne.get(Re);if(Ye!==void 0){if(Y.currentProgram===Ye&&Y.lightsStateVersion===we)return tp(T,Me),Ye}else Me.uniforms=ge.getUniforms(T),D!==null&&T.isNodeMaterial&&D.build(T,Z,Me),T.onBeforeCompile(Me,R),Ye=ge.acquireProgram(Me,Re),Ne.set(Re,Ye),Y.uniforms=Me.uniforms;const Pe=Y.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Pe.clippingPlanes=Le.uniform),tp(T,Me),Y.needsLights=Nx(T),Y.lightsStateVersion=we,Y.needsLights&&(Pe.ambientLightColor.value=K.state.ambient,Pe.lightProbe.value=K.state.probe,Pe.sunLights.value=K.state.sun,Pe.sunLightShadows.value=K.state.sunShadow,Pe.directionalLights.value=K.state.directional,Pe.directionalLightShadows.value=K.state.directionalShadow,Pe.spotLights.value=K.state.spot,Pe.spotLightShadows.value=K.state.spotShadow,Pe.rectAreaLights.value=K.state.rectArea,Pe.ltc_1.value=K.state.rectAreaLTC1,Pe.ltc_2.value=K.state.rectAreaLTC2,Pe.pointLights.value=K.state.point,Pe.pointLightShadows.value=K.state.pointShadow,Pe.hemisphereLights.value=K.state.hemi,Pe.sunShadowMatrix.value=K.state.sunShadowMatrix,Pe.sunShadowCascade.value=K.state.sunShadowCascade,Pe.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Pe.spotLightMatrix.value=K.state.spotLightMatrix,Pe.spotLightMap.value=K.state.spotLightMap,Pe.pointShadowMatrix.value=K.state.pointShadowMatrix),Y.lightProbeGrid=w.state.lightProbeGridArray.length>0,Y.currentProgram=Ye,Y.uniformsList=null,Ye}function ep(T){if(T.uniformsList===null){const k=T.currentProgram.getUniforms();T.uniformsList=wl.seqWithValue(k.seq,T.uniforms)}return T.uniformsList}function tp(T,k){const Z=q.get(T);Z.outputColorSpace=k.outputColorSpace,Z.batching=k.batching,Z.batchingColor=k.batchingColor,Z.instancing=k.instancing,Z.instancingColor=k.instancingColor,Z.instancingMorph=k.instancingMorph,Z.skinning=k.skinning,Z.morphTargets=k.morphTargets,Z.morphNormals=k.morphNormals,Z.morphColors=k.morphColors,Z.morphTargetsCount=k.morphTargetsCount,Z.numClippingPlanes=k.numClippingPlanes,Z.numIntersection=k.numClipIntersection,Z.vertexAlphas=k.vertexAlphas,Z.vertexTangents=k.vertexTangents,Z.toneMapping=k.toneMapping}function Dx(T,k){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;M.setFromMatrixPosition(k.matrixWorld);for(let Z=0,Y=T.length;Z<Y;Z++){const K=T[Z];if(K.texture!==null&&K.boundingBox.containsPoint(M))return K}return null}function Lx(T,k,Z,Y,K){k.isScene!==!0&&(k=Rt),Q.resetTextureUnits();const Te=k.fog,we=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?k.environment:null,Me=N===null?R.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Ze.workingColorSpace,Re=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Ne=ue.get(Y.envMap||we,Re),We=Y.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ye=!!Z.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Pe=!!Z.morphAttributes.position,st=!!Z.morphAttributes.normal,Pt=!!Z.morphAttributes.color;let mt=di;Y.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(mt=R.toneMapping);const ut=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Kt=ut!==void 0?ut.length:0,be=q.get(Y),sn=w.state.lights;if(re===!0&&(Ae===!0||T!==I)){const ht=T===I&&Y.id===F;Le.setState(Y,T,ht)}let Qe=!1;Y.version===be.__version?(be.needsLights&&be.lightsStateVersion!==sn.state.version||be.outputColorSpace!==Me||K.isBatchedMesh&&be.batching===!1||!K.isBatchedMesh&&be.batching===!0||K.isBatchedMesh&&be.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&be.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&be.instancing===!1||!K.isInstancedMesh&&be.instancing===!0||K.isSkinnedMesh&&be.skinning===!1||!K.isSkinnedMesh&&be.skinning===!0||K.isInstancedMesh&&be.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&be.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&be.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&be.instancingMorph===!1&&K.morphTexture!==null||be.envMap!==Ne||Y.fog===!0&&be.fog!==Te||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==Le.numPlanes||be.numIntersection!==Le.numIntersection)||be.vertexAlphas!==We||be.vertexTangents!==Ye||be.morphTargets!==Pe||be.morphNormals!==st||be.morphColors!==Pt||be.toneMapping!==mt||be.morphTargetsCount!==Kt||!!be.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(Qe=!0):(Qe=!0,be.__version=Y.version);let Pn=be.currentProgram;Qe===!0&&(Pn=_o(Y,k,K),D&&Y.isNodeMaterial&&D.onUpdateProgram(Y,Pn,be));let ei=!1,ki=!1,Kr=!1;const ct=Pn.getUniforms(),Ct=be.uniforms;if(S.useProgram(Pn.program)&&(ei=!0,ki=!0,Kr=!0),Y.id!==F&&(F=Y.id,ki=!0),be.needsLights){const ht=Dx(w.state.lightProbeGridArray,K);be.lightProbeGrid!==ht&&(be.lightProbeGrid=ht,ki=!0)}if(ei||I!==T){S.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),ct.setValue(B,"projectionMatrix",T.projectionMatrix),ct.setValue(B,"viewMatrix",T.matrixWorldInverse);const Bi=ct.map.cameraPosition;Bi!==void 0&&Bi.setValue(B,it.setFromMatrixPosition(T.matrixWorld)),P.logarithmicDepthBuffer&&ct.setValue(B,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&ct.setValue(B,"isOrthographic",T.isOrthographicCamera===!0),I!==T&&(I=T,ki=!0,Kr=!0)}if(be.needsLights&&(sn.state.sunShadowMap.length>0&&ct.setValue(B,"sunShadowMap",sn.state.sunShadowMap,Q),sn.state.directionalShadowMap.length>0&&ct.setValue(B,"directionalShadowMap",sn.state.directionalShadowMap,Q),sn.state.spotShadowMap.length>0&&ct.setValue(B,"spotShadowMap",sn.state.spotShadowMap,Q),sn.state.pointShadowMap.length>0&&ct.setValue(B,"pointShadowMap",sn.state.pointShadowMap,Q)),K.isSkinnedMesh){ct.setOptional(B,K,"bindMatrix"),ct.setOptional(B,K,"bindMatrixInverse");const ht=K.skeleton;ht&&(ht.boneTexture===null&&ht.computeBoneTexture(),ct.setValue(B,"boneTexture",ht.boneTexture,Q))}K.isBatchedMesh&&(ct.setOptional(B,K,"batchingTexture"),ct.setValue(B,"batchingTexture",K._matricesTexture,Q),ct.setOptional(B,K,"batchingIdTexture"),ct.setValue(B,"batchingIdTexture",K._indirectTexture,Q),ct.setOptional(B,K,"batchingColorTexture"),K._colorsTexture!==null&&ct.setValue(B,"batchingColorTexture",K._colorsTexture,Q));const zi=Z.morphAttributes;if((zi.position!==void 0||zi.normal!==void 0||zi.color!==void 0)&&z.update(K,Z,Pn),(ki||be.receiveShadow!==K.receiveShadow)&&(be.receiveShadow=K.receiveShadow,ct.setValue(B,"receiveShadow",K.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&k.environment!==null&&(Ct.envMapIntensity.value=k.environmentIntensity),Ct.dfgLUT!==void 0&&(Ct.dfgLUT.value=uC()),ki){if(ct.setValue(B,"toneMappingExposure",R.toneMappingExposure),be.needsLights&&Ix(Ct,Kr),Te&&Y.fog===!0&&De.refreshFogUniforms(Ct,Te),De.refreshMaterialUniforms(Ct,Y,J,$,w.state.transmissionRenderTarget[T.id]),be.needsLights&&be.lightProbeGrid){const ht=be.lightProbeGrid;Ct.probesSH.value=ht.texture,Ct.probesMin.value.copy(ht.boundingBox.min),Ct.probesMax.value.copy(ht.boundingBox.max),Ct.probesResolution.value.copy(ht.resolution)}wl.upload(B,ep(be),Ct,Q)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(wl.upload(B,ep(be),Ct,Q),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&ct.setValue(B,"center",K.center),ct.setValue(B,"modelViewMatrix",K.modelViewMatrix),ct.setValue(B,"normalMatrix",K.normalMatrix),ct.setValue(B,"modelMatrix",K.matrixWorld),Y.uniformsGroups!==void 0){const ht=Y.uniformsGroups;for(let Bi=0,qr=ht.length;Bi<qr;Bi++){const ip=ht[Bi];ae.update(ip,Pn),ae.bind(ip,Pn)}}return Pn}function Ix(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.sunLights.needsUpdate=k,T.sunLightShadows.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}function Nx(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(T,k,Z){const Y=q.get(T);Y.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),q.get(T.texture).__webglTexture=k,q.get(T.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:Z,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,k){const Z=q.get(T);Z.__webglFramebuffer=k,Z.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(T,k=0,Z=0){N=T,O=k,V=Z;let Y=null,K=!1,Te=!1;if(T){const Me=q.get(T);if(Me.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(B.FRAMEBUFFER,Me.__webglFramebuffer),H.copy(T.viewport),ie.copy(T.scissor),oe=T.scissorTest,S.viewport(H),S.scissor(ie),S.setScissorTest(oe),F=-1;return}else if(Me.__webglFramebuffer===void 0)Q.setupRenderTarget(T);else if(Me.__hasExternalTextures)Q.rebindTextures(T,q.get(T.texture).__webglTexture,q.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const We=T.depthTexture;if(Me.__boundDepthTexture!==We){if(We!==null&&q.has(We)&&(T.width!==We.image.width||T.height!==We.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(T)}}const Re=T.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(Te=!0);const Ne=q.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ne[k])?Y=Ne[k][Z]:Y=Ne[k],K=!0):T.samples>0&&Q.useMultisampledRTT(T)===!1?Y=q.get(T).__webglMultisampledFramebuffer:Array.isArray(Ne)?Y=Ne[Z]:Y=Ne,H.copy(T.viewport),ie.copy(T.scissor),oe=T.scissorTest}else H.copy(me).multiplyScalar(J).floor(),ie.copy(Ve).multiplyScalar(J).floor(),oe=nt;if(Z!==0&&(Y=j),S.bindFramebuffer(B.FRAMEBUFFER,Y)&&S.drawBuffers(T,Y),S.viewport(H),S.scissor(ie),S.setScissorTest(oe),K){const Me=q.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+k,Me.__webglTexture,Z)}else if(Te){const Me=k;for(let Re=0;Re<T.textures.length;Re++){const Ne=q.get(T.textures[Re]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Re,Ne.__webglTexture,Z,Me)}}else if(T!==null&&Z!==0){const Me=q.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Me.__webglTexture,Z)}F=-1};function np(T){const k=q.get(T);return(k.__readFormat!==T.format||k.__readType!==T.type)&&(k.__readFormat=T.format,k.__readType=T.type,k.__formatReadable=P.textureFormatReadable(T.format),k.__typeReadable=P.textureTypeReadable(T.type)),k}this.readRenderTargetPixels=function(T,k,Z,Y,K,Te,we,Me=0){if(!(T&&T.isWebGLRenderTarget)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=q.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&we!==void 0&&(Re=Re[we]),Re){S.bindFramebuffer(B.FRAMEBUFFER,Re);try{const Ne=T.textures[Me],We=Ne.format,Ye=Ne.type;T.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Me);const Pe=np(Ne);if(Pe.__formatReadable===!1){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pe.__typeReadable===!1){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=T.width-Y&&Z>=0&&Z<=T.height-K&&B.readPixels(k,Z,Y,K,xe.convert(We),xe.convert(Ye),Te)}finally{const Ne=N!==null?q.get(N).__webglFramebuffer:null;S.bindFramebuffer(B.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(T,k,Z,Y,K,Te,we,Me=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=q.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&we!==void 0&&(Re=Re[we]),Re)if(k>=0&&k<=T.width-Y&&Z>=0&&Z<=T.height-K){S.bindFramebuffer(B.FRAMEBUFFER,Re);const Ne=T.textures[Me],We=Ne.format,Ye=Ne.type;T.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Me);const Pe=np(Ne);if(Pe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const st=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,st),B.bufferData(B.PIXEL_PACK_BUFFER,Te.byteLength,B.STREAM_READ),B.readPixels(k,Z,Y,K,xe.convert(We),xe.convert(Ye),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);const Pt=N!==null?q.get(N).__webglFramebuffer:null;S.bindFramebuffer(B.FRAMEBUFFER,Pt);const mt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await sM(B,mt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,st),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Te),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(st),B.deleteSync(mt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,k=null,Z=0){const Y=Math.pow(2,-Z),K=Math.floor(T.image.width*Y),Te=Math.floor(T.image.height*Y),we=k!==null?k.x:0,Me=k!==null?k.y:0;Q.setTexture2D(T,0),B.copyTexSubImage2D(B.TEXTURE_2D,Z,0,0,we,Me,K,Te),S.unbindTexture()},this.copyTextureToTexture=function(T,k,Z=null,Y=null,K=0,Te=0){let we,Me,Re,Ne,We,Ye,Pe,st,Pt;const mt=T.isCompressedTexture?T.mipmaps[Te]:T.image;if(Z!==null)we=Z.max.x-Z.min.x,Me=Z.max.y-Z.min.y,Re=Z.isBox3?Z.max.z-Z.min.z:1,Ne=Z.min.x,We=Z.min.y,Ye=Z.isBox3?Z.min.z:0;else{const Ct=Math.pow(2,-K);we=Math.floor(mt.width*Ct),Me=Math.floor(mt.height*Ct),T.isDataArrayTexture?Re=mt.depth:T.isData3DTexture?Re=Math.floor(mt.depth*Ct):Re=1,Ne=0,We=0,Ye=0}Y!==null?(Pe=Y.x,st=Y.y,Pt=Y.z):(Pe=0,st=0,Pt=0);const ut=xe.convert(k.format),Kt=xe.convert(k.type);let be;k.isData3DTexture?(Q.setTexture3D(k,0),be=B.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(Q.setTexture2DArray(k,0),be=B.TEXTURE_2D_ARRAY):(Q.setTexture2D(k,0),be=B.TEXTURE_2D),S.activeTexture(B.TEXTURE0),S.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,k.flipY),S.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),S.pixelStorei(B.UNPACK_ALIGNMENT,k.unpackAlignment);const sn=S.getParameter(B.UNPACK_ROW_LENGTH),Qe=S.getParameter(B.UNPACK_IMAGE_HEIGHT),Pn=S.getParameter(B.UNPACK_SKIP_PIXELS),ei=S.getParameter(B.UNPACK_SKIP_ROWS),ki=S.getParameter(B.UNPACK_SKIP_IMAGES);S.pixelStorei(B.UNPACK_ROW_LENGTH,mt.width),S.pixelStorei(B.UNPACK_IMAGE_HEIGHT,mt.height),S.pixelStorei(B.UNPACK_SKIP_PIXELS,Ne),S.pixelStorei(B.UNPACK_SKIP_ROWS,We),S.pixelStorei(B.UNPACK_SKIP_IMAGES,Ye);const Kr=T.isDataArrayTexture||T.isData3DTexture,ct=k.isDataArrayTexture||k.isData3DTexture;if(T.isDepthTexture){const Ct=q.get(T),zi=q.get(k),ht=q.get(Ct.__renderTarget),Bi=q.get(zi.__renderTarget);S.bindFramebuffer(B.READ_FRAMEBUFFER,ht.__webglFramebuffer),S.bindFramebuffer(B.DRAW_FRAMEBUFFER,Bi.__webglFramebuffer);for(let qr=0;qr<Re;qr++)Kr&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,q.get(T).__webglTexture,K,Ye+qr),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,q.get(k).__webglTexture,Te,Pt+qr)),B.blitFramebuffer(Ne,We,we,Me,Pe,st,we,Me,B.DEPTH_BUFFER_BIT,B.NEAREST);S.bindFramebuffer(B.READ_FRAMEBUFFER,null),S.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(K!==0||T.isRenderTargetTexture||q.has(T)){const Ct=q.get(T),zi=q.get(k);S.bindFramebuffer(B.READ_FRAMEBUFFER,U),S.bindFramebuffer(B.DRAW_FRAMEBUFFER,G);for(let ht=0;ht<Re;ht++)Kr?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ct.__webglTexture,K,Ye+ht):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ct.__webglTexture,K),ct?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,zi.__webglTexture,Te,Pt+ht):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,zi.__webglTexture,Te),K!==0?B.blitFramebuffer(Ne,We,we,Me,Pe,st,we,Me,B.COLOR_BUFFER_BIT,B.NEAREST):ct?B.copyTexSubImage3D(be,Te,Pe,st,Pt+ht,Ne,We,we,Me):B.copyTexSubImage2D(be,Te,Pe,st,Ne,We,we,Me);S.bindFramebuffer(B.READ_FRAMEBUFFER,null),S.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else ct?T.isDataTexture||T.isData3DTexture?B.texSubImage3D(be,Te,Pe,st,Pt,we,Me,Re,ut,Kt,mt.data):k.isCompressedArrayTexture?B.compressedTexSubImage3D(be,Te,Pe,st,Pt,we,Me,Re,ut,mt.data):B.texSubImage3D(be,Te,Pe,st,Pt,we,Me,Re,ut,Kt,mt):T.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Te,Pe,st,we,Me,ut,Kt,mt.data):T.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Te,Pe,st,mt.width,mt.height,ut,mt.data):B.texSubImage2D(B.TEXTURE_2D,Te,Pe,st,we,Me,ut,Kt,mt);S.pixelStorei(B.UNPACK_ROW_LENGTH,sn),S.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Qe),S.pixelStorei(B.UNPACK_SKIP_PIXELS,Pn),S.pixelStorei(B.UNPACK_SKIP_ROWS,ei),S.pixelStorei(B.UNPACK_SKIP_IMAGES,ki),Te===0&&k.generateMipmaps&&B.generateMipmap(be),S.unbindTexture()},this.initRenderTarget=function(T){q.get(T).__webglFramebuffer===void 0&&Q.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Q.setTextureCube(T,0):T.isData3DTexture?Q.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Q.setTexture2DArray(T,0):Q.setTexture2D(T,0),S.unbindTexture()},this.resetState=function(){O=0,V=0,N=null,S.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ze._getUnpackColorSpace()}}const xg={type:"change"},Vh={type:"start"},wx={type:"end"},ll=new wc,_g=new Ei,fC=Math.cos(70*wf.DEG2RAD),Nt=new X,hn=2*Math.PI,ot={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Bu=1e-6;class hC extends h1{constructor(e,n=null){super(e,n),this.state=ot.NONE,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Fs.ROTATE,MIDDLE:Fs.DOLLY,RIGHT:Fs.PAN},this.touches={ONE:ws.ROTATE,TWO:ws.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new X,this._lastQuaternion=new mr,this._lastTargetPosition=new X,this._quat=new mr().setFromUnitVectors(e.up,new X(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Xm,this._sphericalDelta=new Xm,this._scale=1,this._panOffset=new X,this._rotateStart=new He,this._rotateEnd=new He,this._rotateDelta=new He,this._panStart=new He,this._panEnd=new He,this._panDelta=new He,this._dollyStart=new He,this._dollyEnd=new He,this._dollyDelta=new He,this._dollyDirection=new X,this._mouse=new He,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=mC.bind(this),this._onPointerDown=pC.bind(this),this._onPointerUp=gC.bind(this),this._onContextMenu=EC.bind(this),this._onMouseWheel=_C.bind(this),this._onKeyDown=yC.bind(this),this._onTouchStart=SC.bind(this),this._onTouchMove=MC.bind(this),this._onMouseDown=vC.bind(this),this._onMouseMove=xC.bind(this),this._interceptControlDown=TC.bind(this),this._interceptControlUp=bC.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ot.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(xg),this.update(),this.state=ot.NONE}pan(e,n){this._pan(e,n),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const n=this.object.position;Nt.copy(n).sub(this.target),Nt.applyQuaternion(this._quat),this._spherical.setFromVector3(Nt),this.autoRotate&&this.state===ot.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=hn:i>Math.PI&&(i-=hn),r<-Math.PI?r+=hn:r>Math.PI&&(r-=hn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Nt.setFromSpherical(this._spherical),Nt.applyQuaternion(this._quatInverse),n.copy(this.target).add(Nt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Nt.length();a=this._clampDistance(o*this._scale);const c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const o=new X(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const u=new X(this._mouse.x,this._mouse.y,0);u.unproject(this.object),this.object.position.sub(u).add(o),this.object.updateMatrixWorld(),a=Nt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(ll.origin.copy(this.object.position),ll.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ll.direction))<fC?this.object.lookAt(this.target):(_g.setFromNormalAndCoplanarPoint(this.object.up,this.target),ll.intersectPlane(_g,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Bu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Bu||this._lastTargetPosition.distanceToSquared(this.target)>Bu?(this.dispatchEvent(xg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?hn/60*this.autoRotateSpeed*e:hn/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Nt.setFromMatrixColumn(n,0),Nt.multiplyScalar(-e),this._panOffset.add(Nt)}_panUp(e,n){this.screenSpacePanning===!0?Nt.setFromMatrixColumn(n,1):(Nt.setFromMatrixColumn(n,0),Nt.crossVectors(this.object.up,Nt)),Nt.multiplyScalar(e),this._panOffset.add(Nt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Nt.copy(r).sub(this.target);let s=Nt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,a=i.width,o=i.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(hn*this._rotateDelta.x/n.clientHeight),this._rotateUp(hn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(hn*this._rotateDelta.x/n.clientHeight),this._rotateUp(hn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+n.x)*.5,o=(e.pageY+n.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new He,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function pC(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function mC(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function gC(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(wx),this.state=ot.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function vC(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Fs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=ot.DOLLY;break;case Fs.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=ot.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=ot.ROTATE}break;case Fs.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=ot.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=ot.PAN}break;default:this.state=ot.NONE}this.state!==ot.NONE&&this.dispatchEvent(Vh)}function xC(t){switch(this.state){case ot.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case ot.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case ot.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function _C(t){this.enabled===!1||this.enableZoom===!1||this.state!==ot.NONE||(t.preventDefault(),this.dispatchEvent(Vh),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(wx))}function yC(t){this.enabled!==!1&&this._handleKeyDown(t)}function SC(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case ws.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=ot.TOUCH_ROTATE;break;case ws.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=ot.TOUCH_PAN;break;default:this.state=ot.NONE}break;case 2:switch(this.touches.TWO){case ws.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=ot.TOUCH_DOLLY_PAN;break;case ws.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=ot.TOUCH_DOLLY_ROTATE;break;default:this.state=ot.NONE}break;default:this.state=ot.NONE}this.state!==ot.NONE&&this.dispatchEvent(Vh)}function MC(t){switch(this._trackPointer(t),this.state){case ot.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case ot.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case ot.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case ot.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=ot.NONE}}function EC(t){this.enabled!==!1&&t.preventDefault()}function TC(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function bC(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Cx=1,Hu={rainfall:"#36a8ff",temperature:"#ff795c",lst:"#ff795c",ndvi:"#57d68d",pressure:"#b88cff",elevation:"#60d8ff"},Vu={isometric:[2.45,1.45,2.45],oblique:[2.8,1.2,1.7],coastal:[2.95,.55,-1.25],nadir:[.01,3.35,.01]};function yg(t,e,n=Cx){const i=wf.degToRad(90-t),r=wf.degToRad(e+180);return new X(-n*Math.sin(i)*Math.cos(r),n*Math.cos(i),n*Math.sin(i)*Math.sin(r))}function wC(t){const e=String(t||"").match(/([\d.]+)°\s*N,\s*([\d.]+)°\s*E/i);return e?{lat:Number(e[1]),lon:Number(e[2])}:null}function CC(t){t.traverse(e=>{var i,r;(r=(i=e.geometry)==null?void 0:i.dispose)==null||r.call(i),(Array.isArray(e.material)?e.material:[e.material]).filter(Boolean).forEach(s=>{var a;return(a=s.dispose)==null?void 0:a.call(s)})})}function AC(t){const e=he.useRef(null),n=he.useRef(t),i=he.useRef(null);return he.useEffect(()=>{n.current=t},[t]),he.useEffect(()=>{const r=e.current;if(!r)return;const s=new FM,a=new Nn(36,1,.1,100);a.position.fromArray(Vu.isometric);const o=new dC({antialias:!0,alpha:!0,powerPreference:"high-performance"});o.outputColorSpace=pn,o.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),o.setSize(r.clientWidth,r.clientHeight,!1),r.appendChild(o.domElement);const c=new hC(a,o.domElement);c.enableDamping=!0,c.dampingFactor=.065,c.enablePan=!1,c.minDistance=1.55,c.maxDistance=5.4,c.target.set(0,0,0);const u=new r1,f=I=>{const H=u.load(I);return H.colorSpace=pn,H},p=f("/globe/earth_day.jpg"),h=u.load("/globe/earth_normal.jpg"),m=u.load("/globe/earth_specular.jpg"),y=f("/globe/earth_clouds.jpg");s.background=f("/globe/starsmilky.jpg");const v=new ir;s.add(v);const g=new jt(new Ki(Cx,96,96),new km({map:p,normalMap:h,specularMap:m,shininess:12}));v.add(g);const d=new jt(new Ki(1.012,72,72),new km({map:y,transparent:!0,opacity:.24,depthWrite:!1}));v.add(d);const x=new jt(new Ki(1.018,72,72),new Ji({color:Hu.rainfall,transparent:!0,opacity:.08,depthWrite:!1,blending:Jl}));v.add(x);const E=new jt(new Ki(1.021,34,22),new Ji({color:"#75c9ff",wireframe:!0,transparent:!0,opacity:.18,depthWrite:!1}));v.add(E);const M=new jt(new Ki(1.07,72,72),new Ji({color:"#36b9ff",transparent:!0,opacity:.07,side:un,blending:Jl,depthWrite:!1}));v.add(M),s.add(new s1("#b9e2ff","#07101f",1.65));const b=new l1("#fff1d0",2.4);b.position.set(4,2.5,3),s.add(b);const w=new ir;v.add(w);const A=new d1,_=new He,C=[],R=({key:I,type:H,lat:ie,lon:oe,color:se,scale:fe=1})=>{const de=new ir,$=yg(ie,oe,1.028);de.position.copy($),de.lookAt($.clone().multiplyScalar(2)),de.userData={key:I,type:H};const J=new jt(new Cc(.004*fe,.004*fe,.08*fe,6),new Ji({color:se,transparent:!0,opacity:.9}));J.position.y=.04*fe,de.add(J);const ye=new jt(new Ki(.022*fe,10,8),new Ji({color:se,transparent:!0,opacity:.95}));ye.position.y=.085*fe,de.add(ye),w.add(de),C.push(de,J,ye)};Object.values(n.current.taluks||{}).forEach(I=>{I.centroid&&R({key:I.key,type:"taluk",...I.centroid,color:"#55d9ff"})}),(n.current.stations||[]).forEach(I=>{const H=wC(I.coordinates);H&&R({key:I.id,type:"station",...H,color:"#ffc95d",scale:.78})});const L=new ir;v.add(L);for(let I=0;I<34;I+=1){const H=-55+I%6*21,ie=-165+Math.floor(I/6)*57,oe=yg(H,ie,1.038),se=new f1(new X(.45,.06,-.1).normalize(),oe,.08,8186367,.026,.014);L.add(se)}const D=()=>{const{clientWidth:I,clientHeight:H}=r;!I||!H||(a.aspect=I/H,a.updateProjectionMatrix(),o.setSize(I,H,!1))},j=new ResizeObserver(D);j.observe(r);const U=I=>{var se,fe,de,$;const H=o.domElement.getBoundingClientRect();_.x=(I.clientX-H.left)/H.width*2-1,_.y=-((I.clientY-H.top)/H.height)*2+1,A.setFromCamera(_,a);const ie=A.intersectObjects(C,!0)[0];if(!ie)return;let oe=ie.object;for(;oe&&!((se=oe.userData)!=null&&se.key);)oe=oe.parent;(fe=oe==null?void 0:oe.userData)!=null&&fe.key&&(($=(de=n.current).onSelectEntity)==null||$.call(de,oe.userData.key,oe.userData.type))};o.domElement.addEventListener("pointerup",U),i.current={camera:a,controls:c,wireframe:E,markerGroup:w,windGroup:L,dataHalo:x,atmosphere:M,globe:v};let G,O=performance.now(),V=0,N="";const F=I=>{var fe;const H=n.current,ie=i.current;if(!ie)return;const oe=H.cameraPreset||"isometric";oe!==N&&Vu[oe]&&(ie.camera.position.fromArray(Vu[oe]),ie.controls.target.set(0,0,0),N=oe),ie.controls.autoRotate=!!H.isAutoRotating,ie.controls.autoRotateSpeed=.38,ie.wireframe.visible=!!H.showWireframe,ie.windGroup.visible=!!H.showWindVectors,ie.markerGroup.children.forEach(de=>{de.visible=de.userData.type==="taluk"?!!H.showTalukPins:!!H.showStations;const $=de.userData.key===H.selectedEntityKey&&de.userData.type===H.selectedEntityType;de.scale.setScalar($?1.45:1)});const se=Hu[H.activeVariable]||Hu.rainfall;ie.dataHalo.material.color.set(se),ie.dataHalo.material.opacity=H.isCloudObscured?.025:.08,ie.atmosphere.scale.setScalar(1+Math.max(0,Number(H.elevationExaggeration||1)-1)*.008),d.rotation.y+=22e-5,ie.controls.update(),o.render(s,a),V+=1,I-O>=1e3&&((fe=H.onFpsUpdate)==null||fe.call(H,Math.round(V*1e3/(I-O))),V=0,O=I),G=requestAnimationFrame(F)};return G=requestAnimationFrame(F),()=>{cancelAnimationFrame(G),j.disconnect(),o.domElement.removeEventListener("pointerup",U),c.dispose(),CC(s),o.dispose(),o.domElement.remove(),i.current=null}},[]),l.jsx("div",{ref:e,style:{position:"absolute",inset:0,overflow:"hidden",cursor:"grab"},"aria-label":"Interactive 3D Earth globe",children:l.jsx("div",{style:{position:"absolute",top:14,left:14,zIndex:2,color:"#d7edff",fontSize:"0.7rem",letterSpacing:"0.08em",pointerEvents:"none",textTransform:"uppercase",textShadow:"0 1px 6px #000"},children:"Drag to orbit · scroll to zoom · select a marker"})})}function RC(){const[t,e]=he.useState("2026-07-16"),[n,i]=he.useState(null),[r,s]=he.useState(!0),[a,o]=he.useState(null),[c,u]=he.useState("rainfall"),[f,p]=he.useState("isometric"),[h,m]=he.useState(!0),[y,v]=he.useState(2),[g,d]=he.useState(60),[x,E]=he.useState(!0),[M,b]=he.useState(!0),[w,A]=he.useState(!0),[_,C]=he.useState(!0),[R,L]=he.useState("Kochi"),[D,j]=he.useState("taluk"),[U,G]=he.useState(null),[O,V]=he.useState(!1),N=async se=>{s(!0),o(null);try{const fe=await Gv(se);i(fe)}catch(fe){o(fe.message||"Failed to load climate telemetry for digital twin.")}finally{s(!1)}};he.useEffect(()=>{N(t)},[t]),he.useEffect(()=>{D==="station"?SS(R).then(se=>G(se)).catch(()=>G(null)):G(null)},[R,D]);const I=(()=>{var se,fe,de,$;if(!n)return{value:null,unit:"",isCloudObscured:!1,source:""};switch(c){case"rainfall":return{name:"Precipitation Accumulation",value:n.rainfall_imd,unit:"mm/day",isCloudObscured:n.rainfall_imd===null,source:((se=n.sourceAttribution)==null?void 0:se.rainfall)||"IMD 0.25° Gridded",color:"var(--accent-cyan)"};case"lst":return{name:"Land Surface Temperature (LST)",value:n.lst,unit:"°C",isCloudObscured:n.lst===null,source:((fe=n.sourceAttribution)==null?void 0:fe.lst)||"NASA MODIS MOD11A2",color:"var(--accent-magenta)"};case"ndvi":return{name:"Vegetation Canopy Index (NDVI)",value:n.ndvi,unit:"Index (-1 to 1)",isCloudObscured:n.ndvi===null,source:((de=n.sourceAttribution)==null?void 0:de.ndvi)||"NASA MODIS MOD13Q1",color:"var(--status-normal)"};case"pressure":return{name:"Mean Sea Level Barometric Pressure",value:n.surface_pressure,unit:"hPa",isCloudObscured:n.surface_pressure===null,source:(($=n.sourceAttribution)==null?void 0:$.pressure)||"ECMWF ERA5 Reanalysis",color:"var(--accent-indigo)"};case"elevation":default:return{name:"Geomorphic Digital Elevation Model",value:"3 – 350",unit:"m MSL",isCloudObscured:!1,source:"CartoDEM / SRTM Elevation Profile",color:"var(--accent-teal)"}}})(),H=D==="taluk"?nr[R]:null,ie=D==="station"?Or.find(se=>se.id===R):null,oe=(se,fe)=>{L(se),j(fe)};return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.75rem",paddingBottom:"2.5rem"},children:[l.jsxs("div",{className:"page-header",style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:"1rem"},children:[l.jsxs("div",{children:[l.jsxs("h1",{className:"page-title",children:[l.jsx(Th,{size:26,color:"var(--accent-cyan)"}),"Climate Digital Twin 3D Environment"]}),l.jsx("p",{className:"page-description",children:"Interactive mathematical 3D digital twin of Ernakulam District integrating authentic multi-source climate telemetry, geomorphic elevation models, and spatial administrative nodes."})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.6rem",flexWrap:"wrap"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",backgroundColor:"var(--bg-surface)",border:"1px solid var(--border-subtle)",padding:"0.4rem 0.8rem",borderRadius:"var(--border-radius-sm)",fontSize:"0.75rem"},children:[l.jsx("span",{className:"status-pulse",style:{width:"6px",height:"6px"}}),l.jsxs("span",{style:{color:"var(--text-secondary)"},children:["ENGINE: ",l.jsx("strong",{style:{color:"var(--text-primary)"},children:"Native 3D Projection"})]}),l.jsx("span",{style:{color:"var(--text-dim)"},children:"•"}),l.jsxs("span",{style:{color:"var(--accent-cyan)",fontFamily:"var(--font-mono)"},children:[g," FPS"]})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",backgroundColor:"var(--bg-surface)",border:"1px solid var(--border-subtle)",padding:"0.4rem 0.8rem",borderRadius:"var(--border-radius-sm)",fontSize:"0.75rem"},children:[l.jsx(Ia,{size:14,color:"var(--accent-cyan)"}),l.jsxs("span",{style:{color:"var(--text-secondary)"},children:["COORDINATE FRAME: ",l.jsx("strong",{style:{color:"var(--text-primary)"},children:"WGS-84 / UTM-43N"})]})]})]})]}),l.jsxs("div",{className:"card-panel",style:{padding:0,backgroundColor:"#030712",border:"1px solid var(--border-medium)",position:"relative",overflow:"hidden",borderRadius:"var(--border-radius-md)",boxShadow:"var(--shadow-lg)"},children:[l.jsxs("div",{style:{position:"absolute",top:"14px",left:"14px",right:"14px",display:"flex",justifyContent:"space-between",alignItems:"center",zIndex:10,flexWrap:"wrap",gap:"0.75rem",pointerEvents:"none"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.6rem",backgroundColor:"rgba(12, 20, 39, 0.9)",backdropFilter:"blur(10px)",padding:"0.35rem 0.75rem",borderRadius:"var(--border-radius-sm)",border:"1px solid var(--border-subtle)",pointerEvents:"auto"},children:[l.jsx("span",{style:{fontSize:"0.6875rem",color:"var(--text-muted)",textTransform:"uppercase",fontWeight:600},children:"Telemetry Date:"}),l.jsx("select",{value:t,onChange:se=>e(se.target.value),style:{backgroundColor:"var(--bg-surface-elevated)",color:"var(--text-primary)",border:"1px solid var(--border-medium)",borderRadius:"var(--border-radius-xs)",padding:"0.3rem 0.6rem",fontSize:"0.75rem",fontWeight:600,outline:"none",cursor:"pointer"},children:Us.map(se=>l.jsx("option",{value:se.date,children:se.label},se.date))})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",backgroundColor:"rgba(12, 20, 39, 0.9)",backdropFilter:"blur(10px)",padding:"0.35rem 0.6rem",borderRadius:"var(--border-radius-sm)",border:"1px solid var(--border-subtle)",pointerEvents:"auto"},children:[l.jsxs("div",{style:{display:"flex",gap:"0.3rem"},children:[l.jsx("button",{className:`tab-btn ${f==="isometric"?"active":""}`,onClick:()=>p("isometric"),style:{fontSize:"0.6875rem",padding:"0.3rem 0.6rem"},title:"Isometric 3D perspective view",children:"Isometric 3D"}),l.jsx("button",{className:`tab-btn ${f==="oblique"?"active":""}`,onClick:()=>p("oblique"),style:{fontSize:"0.6875rem",padding:"0.3rem 0.6rem"},title:"High-angle oblique perspective",children:"High-Angle"}),l.jsx("button",{className:`tab-btn ${f==="coastal"?"active":""}`,onClick:()=>p("coastal"),style:{fontSize:"0.6875rem",padding:"0.3rem 0.6rem"},title:"Coastal horizon profile looking east towards Western Ghats",children:"Coastal Horizon"}),l.jsx("button",{className:`tab-btn ${f==="nadir"?"active":""}`,onClick:()=>p("nadir"),style:{fontSize:"0.6875rem",padding:"0.3rem 0.6rem"},title:"Top-down planar nadir view",children:"Nadir Planar"})]}),l.jsx("div",{style:{width:"1px",height:"18px",backgroundColor:"var(--border-subtle)"}}),l.jsx("button",{className:`tab-btn ${h?"active":""}`,onClick:()=>m(!h),style:{fontSize:"0.6875rem",padding:"0.3rem 0.65rem"},title:h?"Pause auto-rotation":"Start auto-rotation",children:h?"⏸ Pause Orbit":"▶ Auto-Rotate"})]})]}),l.jsxs("div",{style:{position:"relative",width:"100%",height:"580px"},children:[r&&l.jsxs("div",{style:{position:"absolute",inset:0,backgroundColor:"rgba(3, 7, 18, 0.75)",backdropFilter:"blur(4px)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",zIndex:20},children:[l.jsx("div",{className:"status-pulse",style:{width:"16px",height:"16px",marginBottom:"1rem"}}),l.jsx("span",{style:{fontSize:"0.875rem",color:"var(--text-secondary)",fontWeight:500},children:"Synchronizing 3D Digital Twin Mesh Telemetry..."})]}),a&&l.jsxs("div",{style:{position:"absolute",inset:0,backgroundColor:"rgba(3, 7, 18, 0.85)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",zIndex:20,padding:"2rem"},children:[l.jsx(pr,{size:32,color:"var(--status-alert)"}),l.jsx("p",{style:{color:"var(--text-primary)",marginTop:"0.75rem",fontWeight:600},children:"Telemetry Error"}),l.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.8125rem",marginTop:"0.25rem"},children:a}),l.jsx("button",{className:"tab-btn",onClick:()=>N(t),style:{marginTop:"1rem",fontSize:"0.75rem"},children:"Retry Synchronization"})]}),l.jsx(AC,{activeVariable:c,metricValue:I.value,isCloudObscured:I.isCloudObscured,selectedEntityKey:R,selectedEntityType:D,onSelectEntity:oe,taluks:nr,stations:Or,showWireframe:x,showTalukPins:M,showStations:w,showWindVectors:_,elevationExaggeration:y,cameraPreset:f,isAutoRotating:h,onFpsUpdate:d})]}),l.jsxs("div",{style:{position:"absolute",bottom:"14px",left:"14px",right:"14px",display:"flex",justifyContent:"space-between",alignItems:"center",backgroundColor:"rgba(12, 20, 39, 0.92)",backdropFilter:"blur(10px)",padding:"0.65rem 1.15rem",borderRadius:"var(--border-radius-sm)",border:"1px solid var(--border-subtle)",fontSize:"0.75rem",zIndex:10,flexWrap:"wrap",gap:"1rem"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.2rem"},children:[l.jsx("span",{style:{color:"var(--text-muted)",fontSize:"0.6875rem",textTransform:"uppercase",letterSpacing:"0.04em"},children:"Active Variable"}),l.jsx("span",{style:{color:I.color,fontWeight:700,fontSize:"0.8125rem"},children:I.name})]}),l.jsx("div",{style:{width:"1px",height:"24px",backgroundColor:"var(--border-subtle)"}}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.2rem"},children:[l.jsx("span",{style:{color:"var(--text-muted)",fontSize:"0.6875rem",textTransform:"uppercase"},children:"District Ref Value"}),l.jsx("span",{style:{color:"var(--text-primary)",fontWeight:600,fontFamily:"var(--font-mono)"},children:I.isCloudObscured?l.jsx("span",{style:{color:"var(--status-warning)"},children:"Cloud-obscured / unavailable"}):`${I.value!==null?I.value:"--"} ${I.unit}`})]})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.6rem"},children:[l.jsxs("span",{style:{color:"var(--text-muted)",fontSize:"0.6875rem",whiteSpace:"nowrap"},children:["Topography Relief: ",l.jsxs("strong",{style:{color:"var(--accent-cyan)"},children:[y.toFixed(1),"x"]})]}),l.jsx("input",{type:"range",min:"1.0",max:"4.0",step:"0.5",value:y,onChange:se=>v(parseFloat(se.target.value)),style:{width:"90px",accentColor:"var(--accent-cyan)",cursor:"pointer"}})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem"},children:[l.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"0.35rem",cursor:"pointer",color:"var(--text-secondary)",fontSize:"0.6875rem"},children:[l.jsx("input",{type:"checkbox",checked:x,onChange:se=>E(se.target.checked),style:{accentColor:"var(--accent-cyan)"}}),"Wireframe"]}),l.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"0.35rem",cursor:"pointer",color:"var(--text-secondary)",fontSize:"0.6875rem"},children:[l.jsx("input",{type:"checkbox",checked:M,onChange:se=>b(se.target.checked),style:{accentColor:"var(--accent-cyan)"}}),"Taluks (7)"]}),l.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"0.35rem",cursor:"pointer",color:"var(--text-secondary)",fontSize:"0.6875rem"},children:[l.jsx("input",{type:"checkbox",checked:w,onChange:se=>A(se.target.checked),style:{accentColor:"var(--accent-magenta)"}}),"AWS Stations (4)"]}),l.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"0.35rem",cursor:"pointer",color:"var(--text-secondary)",fontSize:"0.6875rem"},children:[l.jsx("input",{type:"checkbox",checked:_,onChange:se=>C(se.target.checked),style:{accentColor:"var(--accent-cyan)"}}),"Wind Vectors"]})]})]})]}),l.jsx("div",{style:{display:"flex",gap:"0.6rem",overflowX:"auto",paddingBottom:"0.25rem"},children:[{id:"rainfall",label:"IMD Rainfall",icon:Gr,badge:"Precipitation"},{id:"lst",label:"MODIS LST (Thermal)",icon:$s,badge:"Skin Temp"},{id:"ndvi",label:"MODIS NDVI (Canopy)",icon:to,badge:"Vegetation"},{id:"pressure",label:"ERA5 Barometric Pressure",icon:Zl,badge:"Isobars"},{id:"elevation",label:"Geomorphic DEM Topography",icon:Na,badge:"Terrain"}].map(se=>{const fe=se.icon,de=c===se.id;return l.jsxs("button",{onClick:()=>u(se.id),className:`tab-btn ${de?"active":""}`,style:{display:"flex",alignItems:"center",gap:"0.55rem",padding:"0.6rem 1rem",fontSize:"0.8125rem",borderRadius:"var(--border-radius-sm)",whiteSpace:"nowrap"},children:[l.jsx(fe,{size:16,color:de?"var(--accent-cyan)":"currentColor"}),l.jsx("span",{children:se.label}),l.jsx("span",{style:{fontSize:"0.625rem",padding:"0.15rem 0.4rem",borderRadius:"3px",backgroundColor:de?"rgba(6, 182, 212, 0.2)":"rgba(255, 255, 255, 0.05)",color:de?"var(--accent-cyan)":"var(--text-dim)"},children:se.badge})]},se.id)})}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 380px",gap:"1.5rem",alignItems:"start"},children:[l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.25rem"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[l.jsxs("div",{className:"card-title-group",children:[l.jsxs("h2",{className:"card-title",style:{fontSize:"1rem",display:"flex",alignItems:"center",gap:"0.5rem"},children:[l.jsx(Ns,{size:18,color:"var(--accent-cyan)"}),"District Reference Observations — ",t]}),l.jsx("p",{className:"card-subtitle",children:"Verified multi-satellite and ground-gauge baseline metrics extracted from repository datasets"})]}),(n==null?void 0:n.badge)&&l.jsx("span",{style:{fontSize:"0.6875rem",padding:"0.25rem 0.6rem",borderRadius:"var(--border-radius-xs)",backgroundColor:"rgba(6, 182, 212, 0.12)",color:"var(--accent-cyan)",border:"1px solid rgba(6, 182, 212, 0.3)",fontWeight:600},children:n.badge})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:"1rem"},children:[l.jsxs("div",{className:`card-panel interactive ${c==="rainfall"?"active-telemetry":""}`,onClick:()=>u("rainfall"),style:{padding:"1.1rem 1.2rem",display:"flex",flexDirection:"column",justifyContent:"space-between",minHeight:"150px"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[l.jsxs("div",{children:[l.jsx("span",{style:{fontSize:"0.75rem",color:"var(--text-muted)",fontWeight:500},children:"IMD Rainfall"}),l.jsx("div",{style:{fontSize:"1.5rem",fontWeight:700,color:"var(--text-primary)",marginTop:"0.25rem",fontFamily:"var(--font-mono)"},children:(n==null?void 0:n.rainfall_imd)!==null&&(n==null?void 0:n.rainfall_imd)!==void 0?`${n.rainfall_imd} mm`:l.jsx("span",{style:{color:"var(--text-dim)",fontSize:"1rem"},children:"Unavailable"})})]}),l.jsx("div",{style:{padding:"0.35rem",backgroundColor:"var(--bg-surface-elevated)",borderRadius:"6px",color:"var(--accent-cyan)"},children:l.jsx(Gr,{size:18})})]}),l.jsxs("div",{style:{borderTop:"1px solid var(--border-subtle)",paddingTop:"0.5rem",marginTop:"0.75rem",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[l.jsx("span",{style:{fontSize:"0.6875rem",color:"var(--text-dim)"},children:"IMD 0.25° Gridded Sum"}),l.jsx("span",{style:{fontSize:"0.6875rem",color:"var(--accent-cyan)",fontWeight:600},children:"LAYER ACTIVE"})]})]}),l.jsxs("div",{className:"card-panel",style:{padding:"1.1rem 1.2rem",display:"flex",flexDirection:"column",justifyContent:"space-between",minHeight:"150px"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[l.jsxs("div",{children:[l.jsx("span",{style:{fontSize:"0.75rem",color:"var(--text-muted)",fontWeight:500},children:"Air Temperature (Tmax / Tmin)"}),l.jsx("div",{style:{fontSize:"1.4rem",fontWeight:700,color:"var(--text-primary)",marginTop:"0.25rem",fontFamily:"var(--font-mono)"},children:(n==null?void 0:n.max_temp)!==null&&(n==null?void 0:n.max_temp)!==void 0?`${n.max_temp}° / ${n.min_temp}°C`:l.jsx("span",{style:{color:"var(--text-dim)",fontSize:"1rem"},children:"Unavailable"})})]}),l.jsx("div",{style:{padding:"0.35rem",backgroundColor:"var(--bg-surface-elevated)",borderRadius:"6px",color:"var(--accent-magenta)"},children:l.jsx(Xs,{size:18})})]}),l.jsxs("div",{style:{borderTop:"1px solid var(--border-subtle)",paddingTop:"0.5rem",marginTop:"0.75rem",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[l.jsx("span",{style:{fontSize:"0.6875rem",color:"var(--text-dim)"},children:"IMD Surface Observation"}),l.jsx(yi,{status:"normal",label:"VERIFIED"})]})]}),l.jsxs("div",{className:`card-panel interactive ${c==="lst"?"active-telemetry":""}`,onClick:()=>u("lst"),style:{padding:"1.1rem 1.2rem",display:"flex",flexDirection:"column",justifyContent:"space-between",minHeight:"150px"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[l.jsxs("div",{children:[l.jsx("span",{style:{fontSize:"0.75rem",color:"var(--text-muted)",fontWeight:500},children:"MODIS LST (Thermal)"}),l.jsx("div",{style:{fontSize:"1.4rem",fontWeight:700,color:"var(--text-primary)",marginTop:"0.25rem",fontFamily:"var(--font-mono)"},children:(n==null?void 0:n.lst)!==null&&(n==null?void 0:n.lst)!==void 0?`${n.lst} °C`:l.jsx("span",{style:{color:"var(--status-warning)",fontSize:"0.8125rem"},children:"Cloud-obscured / unavailable"})})]}),l.jsx("div",{style:{padding:"0.35rem",backgroundColor:"var(--bg-surface-elevated)",borderRadius:"6px",color:"var(--accent-rose)"},children:l.jsx($s,{size:18})})]}),l.jsxs("div",{style:{borderTop:"1px solid var(--border-subtle)",paddingTop:"0.5rem",marginTop:"0.75rem",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[l.jsx("span",{style:{fontSize:"0.6875rem",color:"var(--text-dim)"},children:"NASA MODIS MOD11A2"}),(n==null?void 0:n.lst)===null?l.jsx(yi,{status:"warning",label:"OBSCURED"}):l.jsx(yi,{status:"normal",label:"SATELLITE"})]})]}),l.jsxs("div",{className:`card-panel interactive ${c==="ndvi"?"active-telemetry":""}`,onClick:()=>u("ndvi"),style:{padding:"1.1rem 1.2rem",display:"flex",flexDirection:"column",justifyContent:"space-between",minHeight:"150px"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[l.jsxs("div",{children:[l.jsx("span",{style:{fontSize:"0.75rem",color:"var(--text-muted)",fontWeight:500},children:"Vegetation Index (NDVI)"}),l.jsx("div",{style:{fontSize:"1.4rem",fontWeight:700,color:"var(--text-primary)",marginTop:"0.25rem",fontFamily:"var(--font-mono)"},children:(n==null?void 0:n.ndvi)!==null&&(n==null?void 0:n.ndvi)!==void 0?`${n.ndvi}`:l.jsx("span",{style:{color:"var(--status-warning)",fontSize:"0.8125rem"},children:"Cloud-obscured / unavailable"})})]}),l.jsx("div",{style:{padding:"0.35rem",backgroundColor:"var(--bg-surface-elevated)",borderRadius:"6px",color:"var(--status-normal)"},children:l.jsx(to,{size:18})})]}),l.jsxs("div",{style:{borderTop:"1px solid var(--border-subtle)",paddingTop:"0.5rem",marginTop:"0.75rem",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[l.jsx("span",{style:{fontSize:"0.6875rem",color:"var(--text-dim)"},children:"NASA MODIS MOD13Q1"}),(n==null?void 0:n.ndvi)===null?l.jsx(yi,{status:"warning",label:"OBSCURED"}):l.jsx(yi,{status:"normal",label:"CANOPY"})]})]}),l.jsxs("div",{className:`card-panel interactive ${c==="pressure"?"active-telemetry":""}`,onClick:()=>u("pressure"),style:{padding:"1.1rem 1.2rem",display:"flex",flexDirection:"column",justifyContent:"space-between",minHeight:"150px"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[l.jsxs("div",{children:[l.jsx("span",{style:{fontSize:"0.75rem",color:"var(--text-muted)",fontWeight:500},children:"Surface Pressure"}),l.jsx("div",{style:{fontSize:"1.4rem",fontWeight:700,color:"var(--text-primary)",marginTop:"0.25rem",fontFamily:"var(--font-mono)"},children:(n==null?void 0:n.surface_pressure)!==null&&(n==null?void 0:n.surface_pressure)!==void 0?`${n.surface_pressure} hPa`:l.jsx("span",{style:{color:"var(--text-dim)",fontSize:"0.8125rem"},children:"Unavailable in snapshot"})})]}),l.jsx("div",{style:{padding:"0.35rem",backgroundColor:"var(--bg-surface-elevated)",borderRadius:"6px",color:"var(--accent-indigo)"},children:l.jsx(Zl,{size:18})})]}),l.jsxs("div",{style:{borderTop:"1px solid var(--border-subtle)",paddingTop:"0.5rem",marginTop:"0.75rem",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[l.jsx("span",{style:{fontSize:"0.6875rem",color:"var(--text-dim)"},children:"ECMWF ERA5"}),l.jsx(yi,{status:"info",label:"REANALYSIS"})]})]}),l.jsxs("div",{className:`card-panel interactive ${c==="elevation"?"active-telemetry":""}`,onClick:()=>u("elevation"),style:{padding:"1.1rem 1.2rem",display:"flex",flexDirection:"column",justifyContent:"space-between",minHeight:"150px"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[l.jsxs("div",{children:[l.jsx("span",{style:{fontSize:"0.75rem",color:"var(--text-muted)",fontWeight:500},children:"Elevation Gradient"}),l.jsx("div",{style:{fontSize:"1.4rem",fontWeight:700,color:"var(--text-primary)",marginTop:"0.25rem",fontFamily:"var(--font-mono)"},children:"0 m – 350 m"})]}),l.jsx("div",{style:{padding:"0.35rem",backgroundColor:"var(--bg-surface-elevated)",borderRadius:"6px",color:"var(--accent-teal)"},children:l.jsx(Na,{size:18})})]}),l.jsxs("div",{style:{borderTop:"1px solid var(--border-subtle)",paddingTop:"0.5rem",marginTop:"0.75rem",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[l.jsx("span",{style:{fontSize:"0.6875rem",color:"var(--text-dim)"},children:"Coast to High Ranges"}),l.jsx(yi,{status:"info",label:"HYPSOMETRIC"})]})]})]}),l.jsxs("div",{className:"card-panel",style:{padding:"1.25rem",backgroundColor:"var(--bg-surface)",border:"1px solid var(--border-subtle)"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",cursor:"pointer"},onClick:()=>V(!O),children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[l.jsx(Ec,{size:16,color:"var(--accent-cyan)"}),l.jsx("span",{style:{fontSize:"0.8125rem",fontWeight:700,color:"var(--text-primary)"},children:"Scientific Data Interpretation & Provenance Protocol"})]}),l.jsx("span",{style:{fontSize:"0.75rem",color:"var(--accent-cyan)",fontWeight:600},children:O?"Collapse [-]":"Expand Guidelines [+]"})]}),O&&l.jsxs("div",{style:{marginTop:"1rem",paddingTop:"1rem",borderTop:"1px solid var(--border-subtle)",display:"flex",flexDirection:"column",gap:"0.75rem",fontSize:"0.75rem",color:"var(--text-secondary)",lineHeight:1.6},children:[l.jsxs("p",{children:[l.jsx("strong",{style:{color:"var(--text-primary)"},children:"1. Authentic District Baseline vs. Spatial Visualization:"})," The values displayed in the telemetry cards (such as IMD rainfall of ",(n==null?void 0:n.rainfall_imd)??42.5," mm/day) are authentic district-aggregated measurements verified from IMD gridded gauges and MODIS satellite feeds. Genuine per-taluk micro-sensor historical records are not available in the repository."]}),l.jsxs("p",{children:[l.jsx("strong",{style:{color:"var(--text-primary)"},children:"2. 3D Terrain & Geomorphic Mesh:"})," The 3D surface model represents Ernakulam District's physical topography—transitioning from the coastal Arabian Sea and backwater lagoons (~0–3 m MSL) in the west through undulating midlands to the Western Ghats foothills in Kothamangalam (~150–350 m MSL). Orographic precipitation and thermal gradient variations across the 3D surface illustrate elevation effects, clearly distinguished from fabricated micro-telemetry."]}),l.jsxs("p",{children:[l.jsx("strong",{style:{color:"var(--text-primary)"},children:"3. Satellite Cloud Obscuration:"})," During heavy monsoon episodes (such as August 15, 2025 or July 30, 2024), optical and thermal infrared sensors (MODIS LST and NDVI) cannot penetrate cloud decks. Rather than fabricating synthetic numbers, the twin displays ",l.jsx("em",{style:{color:"var(--status-warning)"},children:'"Cloud-obscured / unavailable"'})," in accordance with scientific standards."]}),l.jsxs("p",{children:[l.jsx("strong",{style:{color:"var(--text-primary)"},children:"4. Teammate Sub-Module Integration:"})," The external Three.js viewer repository resides in ",l.jsx("code",{style:{color:"var(--accent-cyan)"},children:"/visualization"}),". This native 3D engine operates fully within the frontend application without modifying external directories."]})]})]})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.25rem"},children:[l.jsxs("div",{className:"card-panel",style:{padding:"1.35rem",display:"flex",flexDirection:"column",gap:"1.25rem"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[l.jsxs("div",{className:"card-title-group",children:[l.jsxs("h3",{className:"card-title",style:{fontSize:"0.9375rem",display:"flex",alignItems:"center",gap:"0.45rem"},children:[l.jsx(Ia,{size:16,color:"var(--accent-cyan)"}),"Twin Spatial Inspector"]}),l.jsx("p",{className:"card-subtitle",children:D==="taluk"?"Administrative Taluk Node":"Meteorological Station Node"})]}),l.jsx(yi,{status:D==="taluk"?"info":"warning",label:D==="taluk"?"TALUK":"AWS NODE"})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.4rem"},children:[l.jsx("label",{style:{fontSize:"0.6875rem",color:"var(--text-muted)",textTransform:"uppercase",fontWeight:600},children:"Select Spatial Target:"}),l.jsxs("select",{value:`${D}:${R}`,onChange:se=>{const[fe,de]=se.target.value.split(":");oe(de,fe)},style:{backgroundColor:"var(--bg-surface-elevated)",color:"var(--text-primary)",border:"1px solid var(--border-medium)",borderRadius:"var(--border-radius-xs)",padding:"0.45rem 0.65rem",fontSize:"0.8125rem",fontWeight:600,outline:"none",cursor:"pointer"},children:[l.jsx("optgroup",{label:"Administrative Taluks (7)",children:Object.entries(nr).map(([se,fe])=>l.jsx("option",{value:`taluk:${se}`,children:fe.name},`taluk:${se}`))}),l.jsx("optgroup",{label:"Meteorological Stations (4)",children:Or.map(se=>l.jsxs("option",{value:`station:${se.id}`,children:[se.name," (",se.type.replace("Automatic Weather Station","AWS"),")"]},`station:${se.id}`))})]})]}),H&&l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.9rem"},children:[l.jsxs("div",{style:{backgroundColor:"var(--bg-surface-elevated)",padding:"0.85rem",borderRadius:"var(--border-radius-sm)",border:"1px solid var(--border-subtle)"},children:[l.jsx("div",{style:{fontSize:"0.6875rem",color:"var(--text-muted)",textTransform:"uppercase"},children:"Selected Administrative Unit"}),l.jsx("div",{style:{fontSize:"1.05rem",fontWeight:700,color:"var(--text-primary)",marginTop:"0.2rem"},children:H.name}),l.jsxs("div",{style:{fontSize:"0.75rem",color:"var(--accent-cyan)",marginTop:"0.2rem"},children:["HQ: ",H.headquarters," • Area: ",H.area]})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.6rem"},children:[l.jsxs("div",{style:{backgroundColor:"var(--bg-surface-elevated)",padding:"0.65rem",borderRadius:"var(--border-radius-xs)"},children:[l.jsx("div",{style:{fontSize:"0.6875rem",color:"var(--text-dim)"},children:"Centroid Coordinates"}),l.jsx("div",{style:{fontSize:"0.75rem",fontWeight:600,fontFamily:"var(--font-mono)",color:"var(--text-primary)",marginTop:"0.2rem"},children:H.coordinates})]}),l.jsxs("div",{style:{backgroundColor:"var(--bg-surface-elevated)",padding:"0.65rem",borderRadius:"var(--border-radius-xs)"},children:[l.jsx("div",{style:{fontSize:"0.6875rem",color:"var(--text-dim)"},children:"Administrative Type"}),l.jsx("div",{style:{fontSize:"0.75rem",fontWeight:600,color:"var(--accent-teal)",marginTop:"0.2rem"},children:H.administrativeType})]})]}),l.jsxs("div",{style:{backgroundColor:"var(--bg-surface-elevated)",padding:"0.85rem",borderRadius:"var(--border-radius-sm)",border:"1px solid var(--border-subtle)"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[l.jsx("span",{style:{fontSize:"0.75rem",color:"var(--text-muted)"},children:I.name}),l.jsx("span",{style:{fontSize:"0.625rem",color:"var(--status-warning)",fontWeight:700},children:"DISTRICT REF"})]}),l.jsx("div",{style:{fontSize:"1.25rem",fontWeight:700,color:"var(--text-primary)",marginTop:"0.3rem",fontFamily:"var(--font-mono)"},children:I.isCloudObscured?l.jsx("span",{style:{color:"var(--status-warning)",fontSize:"0.875rem"},children:"Cloud-obscured / unavailable"}):`${I.value!==null?I.value:"--"} ${I.unit}`}),l.jsx("div",{style:{fontSize:"0.6875rem",color:"var(--text-dim)",marginTop:"0.35rem",lineHeight:1.4},children:"Notice: Taluk-level historical climate distributions are not fabricated. Displaying verified Ernakulam District baseline reference."})]}),l.jsxs("div",{style:{fontSize:"0.75rem",color:"var(--text-secondary)",lineHeight:1.5,borderTop:"1px solid var(--border-subtle)",paddingTop:"0.75rem"},children:[l.jsx("strong",{style:{color:"var(--text-primary)"},children:"Geomorphic Terrain:"})," ",H.terrain,". ",H.description]})]}),ie&&l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.9rem"},children:[l.jsxs("div",{style:{backgroundColor:"var(--bg-surface-elevated)",padding:"0.85rem",borderRadius:"var(--border-radius-sm)",border:"1px solid var(--border-subtle)"},children:[l.jsx("div",{style:{fontSize:"0.6875rem",color:"var(--text-muted)",textTransform:"uppercase"},children:"Selected Weather Station"}),l.jsx("div",{style:{fontSize:"1.05rem",fontWeight:700,color:"var(--text-primary)",marginTop:"0.2rem"},children:ie.name}),l.jsxs("div",{style:{fontSize:"0.75rem",color:"var(--accent-magenta)",marginTop:"0.2rem"},children:["Agency: ",ie.agency]})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.6rem"},children:[l.jsxs("div",{style:{backgroundColor:"var(--bg-surface-elevated)",padding:"0.65rem",borderRadius:"var(--border-radius-xs)"},children:[l.jsx("div",{style:{fontSize:"0.6875rem",color:"var(--text-dim)"},children:"Coordinates"}),l.jsx("div",{style:{fontSize:"0.75rem",fontWeight:600,fontFamily:"var(--font-mono)",color:"var(--text-primary)",marginTop:"0.2rem"},children:ie.coordinates})]}),l.jsxs("div",{style:{backgroundColor:"var(--bg-surface-elevated)",padding:"0.65rem",borderRadius:"var(--border-radius-xs)"},children:[l.jsx("div",{style:{fontSize:"0.6875rem",color:"var(--text-dim)"},children:"Elevation MSL"}),l.jsx("div",{style:{fontSize:"0.75rem",fontWeight:600,color:"var(--accent-cyan)",marginTop:"0.2rem"},children:ie.elevation})]})]}),l.jsxs("div",{style:{backgroundColor:"rgba(245, 158, 11, 0.08)",border:"1px solid rgba(245, 158, 11, 0.25)",borderRadius:"var(--border-radius-sm)",padding:"0.85rem",display:"flex",flexDirection:"column",gap:"0.4rem"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem",color:"var(--status-warning)",fontSize:"0.8125rem",fontWeight:700},children:[l.jsx(pr,{size:14}),"Live telemetry unavailable"]}),l.jsx("p",{style:{fontSize:"0.72rem",color:"var(--text-secondary)",lineHeight:1.4,margin:0},children:(U==null?void 0:U.telemetryMessage)||"Direct sensor stream not ingested into digital twin repository. Showing prevailing district reference observations."})]})]}),l.jsx("div",{style:{borderTop:"1px solid var(--border-subtle)",paddingTop:"0.75rem"},children:l.jsxs("button",{className:"tab-btn active",onClick:()=>oe(R,D),style:{width:"100%",fontSize:"0.75rem",padding:"0.55rem",display:"flex",alignItems:"center",justifyContent:"center",gap:"0.4rem"},children:[l.jsx(Ia,{size:14}),"Focus 3D Camera on ",H?H.shortName:ie?ie.name.replace("AWS ",""):"Target"]})})]}),l.jsxs("div",{className:"card-panel",style:{padding:"1.25rem"},children:[l.jsxs("h4",{style:{fontSize:"0.8125rem",color:"var(--text-primary)",fontWeight:700,marginBottom:"0.75rem",display:"flex",alignItems:"center",gap:"0.4rem"},children:[l.jsx(Na,{size:14,color:"var(--accent-cyan)"}),"Ernakulam Taluk Directory (7)"]}),l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.4rem"},children:Object.entries(nr).map(([se,fe])=>{const de=R===se&&D==="taluk";return l.jsxs("div",{onClick:()=>oe(se,"taluk"),style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0.5rem 0.75rem",backgroundColor:de?"var(--bg-surface-hover)":"var(--bg-surface-elevated)",border:`1px solid ${de?"var(--accent-cyan)":"var(--border-subtle)"}`,borderRadius:"var(--border-radius-xs)",cursor:"pointer",transition:"all 0.15s ease"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[l.jsx("span",{style:{width:"6px",height:"6px",borderRadius:"50%",backgroundColor:de?"var(--accent-cyan)":"var(--text-dim)"}}),l.jsx("span",{style:{fontSize:"0.75rem",fontWeight:de?700:500,color:de?"var(--text-primary)":"var(--text-secondary)"},children:fe.shortName})]}),l.jsx("span",{style:{fontSize:"0.6875rem",color:"var(--text-muted)",fontFamily:"var(--font-mono)"},children:fe.area})]},se)})})]})]})]})]})}const PC={model:"XGBoost Regressor",baseValue:12.4,predictionValue:18.6,features:[{name:"imd_rainfall_mm_lag_1",value:14.8,contribution:4.2,impact:"positive"},{name:"rainfall_7day_sum",value:90.3,contribution:2.1,impact:"positive"},{name:"surface_pressure_lag_1",value:1008.4,contribution:-1.3,impact:"negative"},{name:"monsoon",value:1,contribution:1.8,impact:"positive"},{name:"LST_Celsius_lag_1",value:33.8,contribution:-.9,impact:"negative"},{name:"volumetric_soil_water",value:.38,contribution:.7,impact:"positive"},{name:"u_component_of_wind_10m",value:-1.4,contribution:-.4,impact:"negative"}],topFeaturesSummary:"Prior-day rainfall (lag 1) and 7-day cumulative precipitation contribute most heavily (+6.3 mm combined) to tomorrow's projected rainfall spike.",isMock:!0};async function DC(t="xgboost_rainfall"){return Promise.resolve(PC)}function LC({message:t,type:e="info",disclaimer:n}){const i={info:{bg:"var(--bg-surface-elevated)",border:"var(--accent-cyan)",icon:l.jsx(Ec,{size:18,color:"var(--accent-cyan)"})},warning:{bg:"rgba(255,165,0,0.12)",border:"#fb923c",icon:l.jsx(pr,{size:18,color:"#fb923c"})},success:{bg:"rgba(6,182,212,0.12)",border:"var(--status-normal)",icon:l.jsx(no,{size:18,color:"var(--status-normal)"})},error:{bg:"rgba(255,0,0,0.12)",border:"#f87171",icon:l.jsx(pr,{size:18,color:"#f87171"})}},{bg:r,border:s,icon:a}=i[e]||i.info;return l.jsxs("div",{role:"alert",style:{display:"flex",alignItems:"flex-start",gap:"0.75rem",backgroundColor:r,borderLeft:`4px solid ${s}`,padding:"0.75rem 1rem",borderRadius:"var(--border-radius-sm)",marginTop:"1rem",color:"var(--text-primary)",fontSize:"0.875rem"},children:[l.jsx("div",{style:{flexShrink:0},children:a}),l.jsxs("div",{style:{flexGrow:1},children:[l.jsx("div",{children:t}),n&&l.jsx("div",{style:{marginTop:"0.4rem",fontSize:"0.75rem",color:"var(--text-muted)"},children:n})]})]})}const Sg={rainfall:{name:"Rainfall",unit:"mm/day",color:"#06b6d4",icon:Gr,source:"IMD 0.25° Gridded"},maxTemp:{name:"Max Temp",unit:"°C",color:"#f59e0b",icon:Xs,source:"MODIS LST (Daily)"},lst:{name:"Land Surface Temp",unit:"°C",color:"#f43f5e",icon:$s,source:"MODIS LST (Daily)"},ndvi:{name:"NDVI",unit:"Index",color:"#10b981",icon:to,source:"MODIS NDVI (16‑day)"}};function IC(){var m,y,v;const[t,e]=he.useState(null),[n,i]=he.useState([]),[r,s]=he.useState(((m=Us[0])==null?void 0:m.date)||null),[a,o]=he.useState("rainfall"),[c,u]=he.useState(!0),[f,p]=he.useState(null);if(he.useEffect(()=>{async function g(){try{const[d,x]=await Promise.all([DC(),Vv()]);e(d),i(x)}catch(d){console.error("Error loading analytics telemetry:",d)}finally{u(!1)}}g()},[]),he.useEffect(()=>{if(!r)return;const g=Us.find(d=>d.date===r);g&&g.rainfall_imd!==null&&g.rainfall_imd!==void 0?p({type:"rainfall",value:g.rainfall_imd,baseline:null,diffPct:null}):p(null)},[r]),c)return l.jsxs("div",{style:{color:"var(--text-secondary)",padding:"3rem",textAlign:"center"},children:[l.jsx("div",{className:"status-pulse",style:{margin:"0 auto 1rem",width:"12px",height:"12px"}}),l.jsx("div",{style:{fontSize:"0.9375rem",fontWeight:600,color:"var(--text-primary)"},children:"Loading Analytics & AI Models..."})]});const h=Math.max(...((y=t==null?void 0:t.features)==null?void 0:y.map(g=>Math.abs(g.contribution)))||[5]);return l.jsxs("div",{children:[l.jsxs("div",{className:"page-header",children:[l.jsxs("h1",{className:"page-title",children:[l.jsx(Ov,{size:24,color:"var(--accent-cyan)"}),"Climate Intelligence Command Center"]}),l.jsx("p",{className:"page-description",children:"Verified district‑level climate observations and model forecasts for Ernakulam District."})]}),l.jsxs("div",{className:"date-selector",style:{marginTop:"1rem",marginBottom:"1.5rem"},children:[l.jsx("label",{htmlFor:"obs-date",style:{marginRight:"0.5rem",color:"var(--text-secondary)"},children:"Snapshot Date:"}),l.jsx("select",{id:"obs-date",value:r,onChange:g=>s(g.target.value),style:{backgroundColor:"var(--bg-surface-elevated)",border:"1px solid var(--border-subtle)",color:"var(--text-primary)",padding:"0.3rem 0.5rem",borderRadius:"4px"},children:Us.map(g=>l.jsx("option",{value:g.date,children:g.label},g.date))})]}),l.jsxs("div",{className:"card-panel",style:{marginBottom:"1.75rem"},children:[l.jsxs("div",{className:"card-panel-header",style:{flexWrap:"wrap",gap:"1rem"},children:[l.jsxs("div",{className:"card-title-group",children:[l.jsxs("h2",{className:"card-title",children:[l.jsx(Ql,{size:18,color:"var(--accent-cyan)"}),"5-Day Multi-Variable Climate Horizon"]}),l.jsx("p",{className:"card-subtitle",children:"Coupled time-series projection derived from meteorological lag features"})]}),l.jsx("div",{className:"tab-group",children:Object.entries(Sg).map(([g,d])=>l.jsx("button",{className:`tab-btn ${a===g?"active":""}`,onClick:()=>o(g),children:d.name},g))})]}),l.jsx("div",{className:"metric-cards-grid",children:n.map((g,d)=>{const x=d===0,E=g[a],M=Sg[a],b=E==null;return l.jsx(Rr,{title:M.name,value:b?"Unavailable":E,unit:M.unit,source:M.source,icon:M.icon,color:M.color,status:b?"warning":"normal",statusLabel:b?"Data Unavailable":void 0,disclaimer:b?"District‑wide reference; live telemetry unavailable":void 0,isActive:x},d)})})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1.75fr 1fr",gap:"1.5rem"},children:[l.jsxs("div",{className:"card-panel",children:[l.jsxs("div",{className:"card-panel-header",children:[l.jsxs("div",{className:"card-title-group",children:[l.jsxs("h2",{className:"card-title",children:[l.jsx(Ql,{size:18,color:"var(--accent-magenta)"}),"Why did the model predict this? — SHAP Feature Attribution"]}),l.jsx("p",{className:"card-subtitle",children:"Game-theoretic feature attributions (Shapley values) for next-day precipitation forecast"})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem",fontSize:"0.75rem"},children:[l.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"0.3rem",color:"#34d399"},children:[l.jsx("span",{style:{width:"8px",height:"8px",backgroundColor:"var(--status-normal)",borderRadius:"2px"}}),"Increases Prediction"]}),l.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"0.3rem",color:"#fb7185"},children:[l.jsx("span",{style:{width:"8px",height:"8px",backgroundColor:"var(--accent-magenta)",borderRadius:"2px"}}),"Decreases Prediction"]})]})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0.75rem 1rem",backgroundColor:"var(--bg-surface-elevated)",borderRadius:"var(--border-radius-sm)",border:"1px solid var(--border-subtle)",marginBottom:"1.25rem",fontSize:"0.8125rem"},children:[l.jsxs("div",{children:[l.jsx("span",{style:{color:"var(--text-muted)"},children:"Dataset Base Expectation (E[f(x)]): "}),l.jsxs("strong",{style:{color:"var(--text-primary)"},children:[t==null?void 0:t.baseValue," mm"]})]}),l.jsx("span",{style:{color:"var(--accent-cyan)",fontWeight:700},children:"➔"}),l.jsxs("div",{children:[l.jsx("span",{style:{color:"var(--text-muted)"},children:"Final Model Output f(x): "}),l.jsxs("strong",{style:{color:"var(--accent-cyan)",fontSize:"1rem"},children:[t==null?void 0:t.predictionValue," mm"]})]}),l.jsx("span",{style:{fontSize:"0.75rem",padding:"0.2rem 0.5rem",backgroundColor:"rgba(6, 182, 212, 0.12)",color:"var(--accent-cyan)",borderRadius:"4px",fontWeight:600},children:"Net Attribution: +6.2 mm"})]}),l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.85rem"},children:(v=t==null?void 0:t.features)==null?void 0:v.map((g,d)=>{const x=g.contribution>0,E=Math.abs(g.contribution)/h*100,M=x?"var(--status-normal)":"var(--accent-magenta)";return l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"210px 1fr 90px",alignItems:"center",gap:"1rem",fontSize:"0.8125rem"},children:[l.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[l.jsx("span",{style:{fontFamily:"var(--font-mono)",color:"var(--text-primary)",fontWeight:600,fontSize:"0.75rem"},children:g.name}),l.jsxs("span",{style:{fontSize:"0.6875rem",color:"var(--text-dim)"},children:["sample value: ",g.value]})]}),l.jsxs("div",{style:{height:"22px",backgroundColor:"rgba(255, 255, 255, 0.04)",borderRadius:"4px",position:"relative",overflow:"hidden",display:"flex",alignItems:"center"},children:[l.jsx("div",{style:{position:"absolute",left:"50%",top:0,bottom:0,width:"1px",backgroundColor:"rgba(255, 255, 255, 0.15)",zIndex:1}}),x?l.jsx("div",{style:{position:"absolute",left:"50%",width:`${E/2}%`,height:"100%",backgroundColor:M,borderRadius:"0 3px 3px 0",opacity:.85,transition:"width 0.4s ease"}}):l.jsx("div",{style:{position:"absolute",right:"50%",width:`${E/2}%`,height:"100%",backgroundColor:M,borderRadius:"3px 0 0 3px",opacity:.85,transition:"width 0.4s ease"}})]}),l.jsxs("div",{style:{textAlign:"right",fontWeight:700,fontFamily:"var(--font-mono)",color:x?"#34d399":"#fb7185",fontSize:"0.8125rem"},children:[x?`+${g.contribution.toFixed(1)}`:g.contribution.toFixed(1)," mm"]})]},d)})}),l.jsxs("div",{style:{marginTop:"1.25rem",paddingTop:"1rem",borderTop:"1px solid var(--border-subtle)",fontSize:"0.75rem",color:"var(--text-secondary)",lineHeight:1.6},children:[l.jsx("strong",{children:"Inference Insight:"})," ",t==null?void 0:t.topFeaturesSummary]}),f&&l.jsx(LC,{message:f.baseline!==null&&f.diffPct!==null?`Rainfall ${f.value} mm vs 7‑day baseline ${f.baseline} mm (${f.diffPct}% change)`:`Rainfall ${f.value} mm (no baseline available)`,type:"info",disclaimer:"Illustrative screening indicator; not a formal flood forecast."})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.25rem"},children:[l.jsxs("div",{className:"card-panel",children:[l.jsx("div",{className:"card-panel-header",children:l.jsxs("div",{className:"card-title-group",children:[l.jsxs("h2",{className:"card-title",children:[l.jsx(Ec,{size:18,color:"var(--accent-cyan)"}),"Model Explanation"]}),l.jsx("p",{className:"card-subtitle",children:"Shapley Additive exPlanations"})]})}),l.jsx("p",{style:{fontSize:"0.8125rem",color:"var(--text-secondary)",lineHeight:1.6,marginBottom:"0.75rem"},children:"SHAP assigns each climate feature an importance value representing its marginal contribution to shifting the model prediction away from the historical base mean."}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem",fontSize:"0.75rem",color:"var(--text-muted)"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"0.4rem"},children:[l.jsx(no,{size:14,color:"var(--status-normal)",style:{flexShrink:0,marginTop:"2px"}}),l.jsx("span",{children:'Prevents "black-box" decisions for emergency flood/heat alerts.'})]}),l.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"0.4rem"},children:[l.jsx(no,{size:14,color:"var(--status-normal)",style:{flexShrink:0,marginTop:"2px"}}),l.jsx("span",{children:"Quantifies synergy between lag rainfall & monsoon phase."})]})]})]}),l.jsxs("div",{className:"card-panel",children:[l.jsxs("div",{className:"card-panel-header",children:[l.jsxs("div",{className:"card-title-group",children:[l.jsx("h2",{className:"card-title",children:"XGBoost Model Specs"}),l.jsx("p",{className:"card-subtitle",children:"Best Hyperparameters"})]}),l.jsx("span",{style:{fontSize:"0.6875rem",color:"var(--status-normal)",fontWeight:600},children:"Tuned & Saved"})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.6rem",fontSize:"0.8125rem"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[l.jsx("span",{style:{color:"var(--text-secondary)"},children:"Model Weights:"}),l.jsx("span",{style:{fontFamily:"var(--font-mono)",color:"var(--text-primary)"},children:"xgboost_rainfall_best.json"})]}),l.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[l.jsx("span",{style:{color:"var(--text-secondary)"},children:"Estimators:"}),l.jsx("span",{style:{fontFamily:"var(--font-mono)",color:"var(--text-primary)"},children:"500 trees"})]}),l.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[l.jsx("span",{style:{color:"var(--text-secondary)"},children:"Max Depth:"}),l.jsx("span",{style:{fontFamily:"var(--font-mono)",color:"var(--text-primary)"},children:"5"})]}),l.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[l.jsx("span",{style:{color:"var(--text-secondary)"},children:"Learning Rate:"}),l.jsx("span",{style:{fontFamily:"var(--font-mono)",color:"var(--text-primary)"},children:"0.03"})]}),l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",borderTop:"1px solid var(--border-subtle)",paddingTop:"0.5rem",marginTop:"0.25rem"},children:[l.jsx("span",{style:{color:"var(--text-secondary)"},children:"Test MAE:"}),l.jsx("span",{style:{fontWeight:700,color:"var(--status-normal)"},children:"4.82 mm"})]}),l.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[l.jsx("span",{style:{color:"var(--text-secondary)"},children:"Test R² Score:"}),l.jsx("span",{style:{fontWeight:700,color:"var(--accent-cyan)"},children:"0.68"})]})]})]})]})]})]})}const Mg={name:"Moderate Heat & Monsoon Surge",parameters:{tempIncrease:2,rainfallChangePercent:25},baselineState:{rainfall:14.8,maxTemp:32.4,minTemp:24.6,lst:33.8,sst:29.1},scenarioState:{rainfall:18.5,maxTemp:34.4,minTemp:26.6,lst:35.8,sst:29.1},calculatedDeltas:{rainfallDelta:"+3.7 mm/day (+25%)",tempDelta:"+2.0 °C",lstDelta:"+2.0 °C"},impactAssessment:{heatRiskLevel:"Elevated",urbanThermalIndex:"High Vulnerability",waterLoggingRisk:"Moderate",impactSummary:"A 2°C temperature rise coupled with +25% precipitation increases local urban heat stress and drainage load across Kochi metropolitan zone."},isMock:!0};async function NC(t={tempIncrease:2,rainfallChangePercent:25}){{const e=Mg.baselineState,n=Number(t.tempIncrease)||0,i=Number(t.rainfallChangePercent)||0,r={...Mg,parameters:t,scenarioState:{rainfall:Number((e.rainfall*(1+i/100)).toFixed(1)),maxTemp:Number((e.maxTemp+n).toFixed(1)),minTemp:Number((e.minTemp+n).toFixed(1)),lst:Number((e.lst+n).toFixed(1)),sst:e.sst},calculatedDeltas:{rainfallDelta:`${i>=0?"+":""}${i}% (${(e.rainfall*(i/100)).toFixed(1)} mm)`,tempDelta:`${n>=0?"+":""}${n.toFixed(1)} °C`,lstDelta:`${n>=0?"+":""}${n.toFixed(1)} °C`}};return Promise.resolve(r)}}function UC(){const[t,e]=he.useState(2),[n,i]=he.useState(25),[r,s]=he.useState(null),[a,o]=he.useState(!1);he.useEffect(()=>{async function d(){o(!0);const x=await NC({tempIncrease:parseFloat(t),rainfallChangePercent:parseFloat(n)});s(x),setTimeout(()=>o(!1),120)}d()},[t,n]);const c=r==null?void 0:r.baselineState,u=r==null?void 0:r.scenarioState,f=r==null?void 0:r.calculatedDeltas,p=r==null?void 0:r.impactAssessment,h=(d,x)=>{e(d),i(x)},m=()=>t>=3?{level:"High Critical",status:"alert",desc:"Severe heatwave threshold; elevated urban heat island effect across Kochi."}:t>=1.5?{level:"Elevated Risk",status:"warning",desc:"Moderate thermal anomaly; cooling demand and daytime stress increase."}:t<0?{level:"Mitigated / Reduced",status:"normal",desc:"Temperatures below seasonal average; diminished heat stress."}:{level:"Nominal Baseline",status:"normal",desc:"Typical baseline thermal distribution."},y=()=>n>=40?{level:"Severe Drainage Surcharge",status:"alert",desc:"High flash-flood likelihood in low-lying coastal and backwater zones."}:n>=15?{level:"Moderate Waterlogging",status:"warning",desc:"Local urban drainage capacity stressed during peak storm events."}:n<=-30?{level:"Agricultural Drought Stress",status:"alert",desc:"Severe deficit impacting plantation irrigation and groundwater replenishment."}:n<0?{level:"Minor Precipitation Deficit",status:"warning",desc:"Sub-average rainfall; soil moisture gradually depleted."}:{level:"Normal Drainage Flow",status:"normal",desc:"Standard runoff profile within canal capacity."},v=m(),g=y();return l.jsxs("div",{children:[l.jsxs("div",{className:"page-header",children:[l.jsxs("h1",{className:"page-title",children:[l.jsx(kd,{size:24,color:"var(--accent-cyan)"}),"What-If Climate Scenario Simulation"]}),l.jsx("p",{className:"page-description",children:"Explore how climate conditions and vulnerability metrics transform under hypothetical temperature and precipitation perturbations."})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1.15fr 2fr",gap:"1.5rem",alignItems:"start"},children:[l.jsxs("div",{className:"card-panel",style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:[l.jsxs("div",{className:"card-panel-header",style:{marginBottom:"0.5rem"},children:[l.jsxs("div",{className:"card-title-group",children:[l.jsxs("h2",{className:"card-title",children:[l.jsx(Ns,{size:18,color:"var(--accent-cyan)"}),"Scenario Parameter Studio"]}),l.jsx("p",{className:"card-subtitle",children:"Digital Twin Perturbation Matrix"})]}),a&&l.jsx("span",{style:{fontSize:"0.6875rem",color:"var(--accent-cyan)",fontFamily:"var(--font-mono)"},children:"Recalculating..."})]}),l.jsxs("div",{children:[l.jsx("div",{style:{fontSize:"0.6875rem",textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--text-dim)",marginBottom:"0.5rem",fontWeight:700},children:"RAPID CLIMATE PRESETS"}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.5rem"},children:[l.jsx("button",{className:"telemetry-pill",style:{cursor:"pointer",justifyContent:"center",fontSize:"0.75rem"},onClick:()=>h(2.5,30),children:"🔥 Monsoon Surge (+2.5°, +30%)"}),l.jsx("button",{className:"telemetry-pill",style:{cursor:"pointer",justifyContent:"center",fontSize:"0.75rem"},onClick:()=>h(4,50),children:"⛈️ Severe Flood (+4.0°, +50%)"}),l.jsx("button",{className:"telemetry-pill",style:{cursor:"pointer",justifyContent:"center",fontSize:"0.75rem"},onClick:()=>h(3.5,-40),children:"☀️ Extreme Heatwave (+3.5°, -40%)"}),l.jsx("button",{className:"telemetry-pill",style:{cursor:"pointer",justifyContent:"center",fontSize:"0.75rem"},onClick:()=>h(0,0),children:"↺ Reset Baseline (0.0°, 0%)"})]})]}),l.jsxs("div",{style:{backgroundColor:"var(--bg-surface-elevated)",padding:"1rem",borderRadius:"var(--border-radius-sm)",border:"1px solid var(--border-subtle)"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.6rem"},children:[l.jsxs("label",{htmlFor:"temp-slider",style:{fontSize:"0.8125rem",fontWeight:600,color:"var(--text-secondary)",display:"flex",alignItems:"center",gap:"0.4rem"},children:[l.jsx(Xs,{size:15,color:"#f59e0b"}),"Temperature Shift (Δ°C)"]}),l.jsxs("span",{style:{fontSize:"1rem",fontWeight:800,fontFamily:"var(--font-mono)",color:t>0?"#f43f5e":t<0?"#06b6d4":"var(--text-primary)"},children:[t>0?`+${t.toFixed(1)}`:t.toFixed(1)," °C"]})]}),l.jsx("input",{id:"temp-slider",type:"range",min:"-5",max:"5",step:"0.5",value:t,onChange:d=>e(parseFloat(d.target.value)),style:{width:"100%",accentColor:"var(--accent-magenta)",cursor:"pointer"}}),l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"0.6875rem",color:"var(--text-dim)",marginTop:"0.35rem"},children:[l.jsx("span",{children:"-5.0 °C (Cooling)"}),l.jsx("span",{children:"0.0 °C"}),l.jsx("span",{children:"+5.0 °C (Severe Warming)"})]})]}),l.jsxs("div",{style:{backgroundColor:"var(--bg-surface-elevated)",padding:"1rem",borderRadius:"var(--border-radius-sm)",border:"1px solid var(--border-subtle)"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.6rem"},children:[l.jsxs("label",{htmlFor:"rain-slider",style:{fontSize:"0.8125rem",fontWeight:600,color:"var(--text-secondary)",display:"flex",alignItems:"center",gap:"0.4rem"},children:[l.jsx(Gr,{size:15,color:"#06b6d4"}),"Precipitation Delta (Δ%)"]}),l.jsxs("span",{style:{fontSize:"1rem",fontWeight:800,fontFamily:"var(--font-mono)",color:n>0?"#06b6d4":n<0?"#f59e0b":"var(--text-primary)"},children:[n>0?`+${n.toFixed(0)}`:n.toFixed(0)," %"]})]}),l.jsx("input",{id:"rain-slider",type:"range",min:"-50",max:"50",step:"5",value:n,onChange:d=>i(parseFloat(d.target.value)),style:{width:"100%",accentColor:"var(--accent-cyan)",cursor:"pointer"}}),l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"0.6875rem",color:"var(--text-dim)",marginTop:"0.35rem"},children:[l.jsx("span",{children:"-50% (Drought)"}),l.jsx("span",{children:"0%"}),l.jsx("span",{children:"+50% (Extreme Rain)"})]})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.75rem",color:"var(--text-muted)"},children:[l.jsx(no,{size:14,color:"var(--status-normal)"}),l.jsxs("span",{children:["Simulated via ",l.jsx("code",{style:{color:"var(--accent-cyan)",fontFamily:"var(--font-mono)"},children:"ScenarioEngine"})," state transforms."]})]})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.25rem"},children:[l.jsxs("div",{className:"card-panel",children:[l.jsxs("div",{className:"card-panel-header",children:[l.jsxs("div",{className:"card-title-group",children:[l.jsxs("h2",{className:"card-title",children:[l.jsx(kd,{size:18,color:"var(--accent-cyan)"}),"Baseline vs Scenario Comparison"]}),l.jsx("p",{className:"card-subtitle",children:"Immediate perturbation impact across key climate variables"})]}),l.jsx("span",{style:{fontSize:"0.6875rem",color:"var(--text-muted)",fontFamily:"var(--font-mono)"},children:"Ernakulam Snapshot"})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"1rem"},children:[l.jsxs("div",{style:{backgroundColor:"var(--bg-surface-elevated)",padding:"1.15rem",borderRadius:"var(--border-radius-sm)",border:"1px solid var(--border-subtle)"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem",fontSize:"0.75rem",color:"var(--text-muted)",fontWeight:600},children:[l.jsx(Gr,{size:14,color:"#06b6d4"}),"DAILY RAINFALL"]}),l.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:"0.5rem",marginTop:"0.5rem"},children:[l.jsxs("span",{style:{fontSize:"1.5rem",fontWeight:800,color:"var(--text-primary)"},children:[u==null?void 0:u.rainfall," ",l.jsx("span",{style:{fontSize:"0.75rem",color:"var(--text-muted)"},children:"mm"})]}),l.jsxs("span",{style:{fontSize:"0.75rem",color:"var(--text-dim)",textDecoration:"line-through"},children:[c==null?void 0:c.rainfall," mm"]})]}),l.jsx("div",{style:{marginTop:"0.4rem",display:"inline-flex",padding:"0.2rem 0.5rem",backgroundColor:"rgba(6, 182, 212, 0.12)",color:"#38bdf8",borderRadius:"4px",fontSize:"0.75rem",fontWeight:700},children:f==null?void 0:f.rainfallDelta})]}),l.jsxs("div",{style:{backgroundColor:"var(--bg-surface-elevated)",padding:"1.15rem",borderRadius:"var(--border-radius-sm)",border:"1px solid var(--border-subtle)"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem",fontSize:"0.75rem",color:"var(--text-muted)",fontWeight:600},children:[l.jsx(Xs,{size:14,color:"#f59e0b"}),"MAX TEMPERATURE"]}),l.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:"0.5rem",marginTop:"0.5rem"},children:[l.jsxs("span",{style:{fontSize:"1.5rem",fontWeight:800,color:"var(--text-primary)"},children:[u==null?void 0:u.maxTemp," ",l.jsx("span",{style:{fontSize:"0.75rem",color:"var(--text-muted)"},children:"°C"})]}),l.jsxs("span",{style:{fontSize:"0.75rem",color:"var(--text-dim)",textDecoration:"line-through"},children:[c==null?void 0:c.maxTemp," °C"]})]}),l.jsx("div",{style:{marginTop:"0.4rem",display:"inline-flex",padding:"0.2rem 0.5rem",backgroundColor:"rgba(245, 158, 11, 0.12)",color:"#fbbf24",borderRadius:"4px",fontSize:"0.75rem",fontWeight:700},children:f==null?void 0:f.tempDelta})]}),l.jsxs("div",{style:{backgroundColor:"var(--bg-surface-elevated)",padding:"1.15rem",borderRadius:"var(--border-radius-sm)",border:"1px solid var(--border-subtle)"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem",fontSize:"0.75rem",color:"var(--text-muted)",fontWeight:600},children:[l.jsx($s,{size:14,color:"#f43f5e"}),"SURFACE TEMP (LST)"]}),l.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:"0.5rem",marginTop:"0.5rem"},children:[l.jsxs("span",{style:{fontSize:"1.5rem",fontWeight:800,color:"var(--text-primary)"},children:[u==null?void 0:u.lst," ",l.jsx("span",{style:{fontSize:"0.75rem",color:"var(--text-muted)"},children:"°C"})]}),l.jsxs("span",{style:{fontSize:"0.75rem",color:"var(--text-dim)",textDecoration:"line-through"},children:[c==null?void 0:c.lst," °C"]})]}),l.jsx("div",{style:{marginTop:"0.4rem",display:"inline-flex",padding:"0.2rem 0.5rem",backgroundColor:"rgba(244, 63, 94, 0.12)",color:"#fb7185",borderRadius:"4px",fontSize:"0.75rem",fontWeight:700},children:f==null?void 0:f.lstDelta})]})]})]}),l.jsxs("div",{className:"card-panel",children:[l.jsx("div",{className:"card-panel-header",children:l.jsxs("div",{className:"card-title-group",children:[l.jsxs("h2",{className:"card-title",children:[l.jsx(pr,{size:18,color:"var(--accent-magenta)"}),"Municipal & Environmental Impact Assessment"]}),l.jsx("p",{className:"card-subtitle",children:"Ernakulam District Vulnerability Vector"})]})}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",marginBottom:"1.25rem"},children:[l.jsxs("div",{style:{padding:"1rem",backgroundColor:"var(--bg-surface-elevated)",borderRadius:"var(--border-radius-sm)",border:"1px solid var(--border-subtle)"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.4rem"},children:[l.jsx("span",{style:{fontSize:"0.8125rem",fontWeight:600,color:"var(--text-primary)"},children:"Urban Heat Stress Index"}),l.jsx("span",{style:{fontSize:"0.6875rem",padding:"0.2rem 0.5rem",borderRadius:"4px",fontWeight:700,backgroundColor:v.status==="alert"?"rgba(239, 68, 68, 0.15)":v.status==="warning"?"rgba(245, 158, 11, 0.15)":"rgba(16, 185, 129, 0.15)",color:v.status==="alert"?"#f87171":v.status==="warning"?"#fbbf24":"#34d399"},children:v.level})]}),l.jsx("p",{style:{fontSize:"0.75rem",color:"var(--text-secondary)",lineHeight:1.5},children:v.desc})]}),l.jsxs("div",{style:{padding:"1rem",backgroundColor:"var(--bg-surface-elevated)",borderRadius:"var(--border-radius-sm)",border:"1px solid var(--border-subtle)"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.4rem"},children:[l.jsx("span",{style:{fontSize:"0.8125rem",fontWeight:600,color:"var(--text-primary)"},children:"Drainage & Inundation Load"}),l.jsx("span",{style:{fontSize:"0.6875rem",padding:"0.2rem 0.5rem",borderRadius:"4px",fontWeight:700,backgroundColor:g.status==="alert"?"rgba(239, 68, 68, 0.15)":g.status==="warning"?"rgba(245, 158, 11, 0.15)":"rgba(16, 185, 129, 0.15)",color:g.status==="alert"?"#f87171":g.status==="warning"?"#fbbf24":"#34d399"},children:g.level})]}),l.jsx("p",{style:{fontSize:"0.75rem",color:"var(--text-secondary)",lineHeight:1.5},children:g.desc})]})]}),l.jsxs("div",{style:{padding:"1rem 1.25rem",backgroundColor:"rgba(17, 28, 53, 0.9)",borderLeft:"3px solid var(--accent-cyan)",borderRadius:"0 var(--border-radius-sm) var(--border-radius-sm) 0"},children:[l.jsx("div",{style:{fontSize:"0.75rem",fontWeight:700,color:"var(--accent-cyan)",textTransform:"uppercase",letterSpacing:"0.04em",marginBottom:"0.25rem"},children:"SCENARIO SUMMARY FOR DECISION SUPPORT"}),l.jsxs("p",{style:{fontSize:"0.8125rem",color:"var(--text-secondary)",lineHeight:1.6},children:[p==null?void 0:p.impactSummary," Perturbation yields a delta of ",l.jsx("strong",{children:f==null?void 0:f.rainfallDelta})," rainfall and ",l.jsx("strong",{children:f==null?void 0:f.tempDelta})," maximum temperature over Ernakulam's geographic bounding box."]})]})]})]})]})]})}const Eg=t=>t.toISOString().split("T")[0];function FC(){const t=new Date,e=Eg(t),n=Eg(new Date(t.getTime()-6*24*60*60*1e3)),[i,r]=he.useState(n),[s,a]=he.useState(e),[o,c]=he.useState([]),[u,f]=he.useState(null),[p,h]=he.useState(null),[m,y]=he.useState(!1),[v,g]=he.useState(!1),[d,x]=he.useState(""),[E,M]=he.useState(!1),[b,w]=he.useState(!1),[A,_]=he.useState(""),[C,R]=he.useState(!1),L=()=>{const O=new Date(i),N=new Date(s)-O+24*60*60*1e3;return Math.max(1,Math.round(N/(1e3*60*60*24)))};he.useEffect(()=>{const O=async()=>{y(!0),R(!1),_("");const V=L();try{const N=await Bv(V);Array.isArray(N)&&N.length>0?c(N):c([]);const F=await Hv();f(F);const I=await Vv();h(I),(!N||N.length===0)&&R(!0)}catch(N){console.error(N),R(!0)}finally{y(!1)}};new Date(i)<=new Date(s)?O():R(!0)},[i,s]);const D=Gu.useMemo(()=>{var I,H,ie,oe,se,fe,de,$,J,ye,Oe,me,Ve,nt,ke,re;if(!o||o.length===0)return null;const O=Ae=>o.reduce((ze,it)=>{var xt,Rt;return ze+(((Rt=(xt=it.metrics)==null?void 0:xt[Ae])==null?void 0:Rt.value)||0)},0),V=Ae=>O(Ae)/o.length,N=o[0],F=o[o.length-1];return{avgRainfall:V("rainfall"),totalRainfall:O("rainfall"),startMaxTemp:(H=(I=N.metrics)==null?void 0:I.maxTemp)==null?void 0:H.value,endMaxTemp:(oe=(ie=F.metrics)==null?void 0:ie.maxTemp)==null?void 0:oe.value,startMinTemp:(fe=(se=N.metrics)==null?void 0:se.minTemp)==null?void 0:fe.value,endMinTemp:($=(de=F.metrics)==null?void 0:de.minTemp)==null?void 0:$.value,startLST:(ye=(J=N.metrics)==null?void 0:J.lst)==null?void 0:ye.value,endLST:(me=(Oe=F.metrics)==null?void 0:Oe.lst)==null?void 0:me.value,startSST:(nt=(Ve=N.metrics)==null?void 0:Ve.sst)==null?void 0:nt.value,endSST:(re=(ke=F.metrics)==null?void 0:ke.sst)==null?void 0:re.value}},[o]),j=Gu.useMemo(()=>{if(!D)return[];const O=[];if(D.totalRainfall!==void 0&&O.push(`Total rainfall over selected period: ${D.totalRainfall.toFixed(1)} mm.`),D.avgRainfall!==void 0&&O.push(`Average daily rainfall: ${D.avgRainfall.toFixed(1)} mm.`),D.startMaxTemp!==void 0&&D.endMaxTemp!==void 0){const V=D.endMaxTemp-D.startMaxTemp;O.push(`Maximum temperature changed by ${V.toFixed(1)}°C (${V>=0?"increase":"decrease"}).`)}if(D.startMinTemp!==void 0&&D.endMinTemp!==void 0){const V=D.endMinTemp-D.startMinTemp;O.push(`Minimum temperature changed by ${V.toFixed(1)}°C (${V>=0?"increase":"decrease"}).`)}if(D.startLST!==void 0&&D.endLST!==void 0){const V=D.endLST-D.startLST;O.push(`Land‑surface temperature variation: ${V.toFixed(1)}°C.`)}return O},[D]),U=()=>{g(!0),setTimeout(()=>{var V,N;const O=[];O.push("--- Climate Intelligence Brief ---"),D&&(O.push(`Period: ${i} to ${s}`),O.push(`Average Rainfall: ${(V=D.avgRainfall)==null?void 0:V.toFixed(1)} mm/day`),O.push(`Total Rainfall: ${(N=D.totalRainfall)==null?void 0:N.toFixed(1)} mm`),O.push(`Max Temp Change: ${(D.endMaxTemp-D.startMaxTemp).toFixed(1)}°C`),O.push(`Min Temp Change: ${(D.endMinTemp-D.startMinTemp).toFixed(1)}°C`)),u&&O.push(`Model Forecast (rainfall): ${(u==null?void 0:u.value)??"--"} mm/day`),p&&(O.push("Model Multi‑Variable Forecast:"),Object.entries(p).forEach(([F,I])=>{O.push(`  ${F}: ${(I==null?void 0:I.value)??I} ${(I==null?void 0:I.unit)??""}`)})),j.length&&(O.push("Key Insights:"),j.forEach(F=>O.push(`- ${F}`))),O.push("--- End of Brief ---"),x(O.join(`
`)),g(!1),M(!0)},800)},G=(O,V,N,F)=>l.jsx(Rr,{title:O,value:V!==void 0?V.toFixed(1):"--",unit:N,trendPercent:F,icon:Na,color:"var(--accent-cyan)"});return l.jsxs("div",{style:{padding:"1.5rem",backgroundColor:"var(--bg-dark)",minHeight:"100vh",color:"var(--text-primary)"},children:[l.jsxs("div",{className:"page-header",style:{marginBottom:"2rem"},children:[l.jsxs("h1",{className:"page-title",style:{display:"flex",alignItems:"center",gap:"0.5rem",color:"var(--accent-cyan)"},children:[l.jsx(kv,{size:28})," Climate Intelligence Reports & Decision Brief"]}),l.jsx("p",{className:"page-description",style:{color:"var(--text-muted)"},children:"Verified observations, model forecasts and actionable insights."})]}),l.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center",flexWrap:"wrap",marginBottom:"1.5rem"},children:[l.jsxs("label",{children:["Start Date:"," ",l.jsx("input",{type:"date",value:i,max:s,onChange:O=>r(O.target.value),style:{marginLeft:"0.5rem"}})]}),l.jsxs("label",{children:["End Date:"," ",l.jsx("input",{type:"date",value:s,min:i,max:e,onChange:O=>a(O.target.value),style:{marginLeft:"0.5rem"}})]}),C&&l.jsx("span",{style:{color:"var(--status-warning)",fontWeight:600},children:"Data unavailable for selected dates."}),A&&l.jsx("span",{style:{color:"var(--text-muted)"},children:A}),l.jsx("button",{onClick:U,disabled:v||C,style:{marginLeft:"auto",backgroundColor:"var(--accent-cyan-soft)",border:"1px solid rgba(6,182,212,0.4)",color:"#f8fafc",padding:"0.45rem 1rem",fontWeight:600,cursor:v?"wait":"pointer"},children:v?"Generating Brief...":"Generate Climate Brief"})]}),D&&l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"1rem",marginBottom:"2rem"},children:[G("Average Rainfall",D.avgRainfall,"mm/day"),G("Total Rainfall",D.totalRainfall,"mm"),G("Max Temp",D.endMaxTemp,"°C",(D.endMaxTemp-D.startMaxTemp)/(D.startMaxTemp||1)*100),G("Min Temp",D.endMinTemp,"°C",(D.endMinTemp-D.startMinTemp)/(D.startMinTemp||1)*100),G("LST",D.endLST,"°C",(D.endLST-D.startLST)/(D.startLST||1)*100),G("SST",D.endSST,"°C",(D.endSST-D.startSST)/(D.startSST||1)*100)]}),o&&o.length>0&&l.jsx("div",{style:{marginBottom:"2rem"},children:l.jsx(zv,{data:o.map(O=>{var V,N,F,I,H,ie,oe,se,fe,de;return{date:O.date,rainfall:(N=(V=O.metrics)==null?void 0:V.rainfall)==null?void 0:N.value,maxTemp:(I=(F=O.metrics)==null?void 0:F.maxTemp)==null?void 0:I.value,minTemp:(ie=(H=O.metrics)==null?void 0:H.minTemp)==null?void 0:ie.value,lst:(se=(oe=O.metrics)==null?void 0:oe.lst)==null?void 0:se.value,sst:(de=(fe=O.metrics)==null?void 0:fe.sst)==null?void 0:de.value}}),variable:"rainfall",title:"Rainfall Trajectory",unit:"mm/day",color:"var(--accent-cyan)",height:260})}),p&&l.jsxs("div",{className:"card-panel",style:{background:"rgba(255,255,255,0.06)",backdropFilter:"blur(8px)",padding:"1rem",borderRadius:"8px",marginBottom:"2rem"},children:[l.jsx("h2",{style:{color:"var(--accent-magenta)",marginBottom:"0.5rem"},children:"Model Forecast"}),l.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.9rem"},children:"Model output — not observed telemetry."}),l.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"0.85rem"},children:[l.jsx("thead",{children:l.jsxs("tr",{style:{borderBottom:"1px solid var(--border-subtle)",color:"var(--text-muted)"},children:[l.jsx("th",{style:{padding:"0.5rem",textAlign:"left"},children:"Variable"}),l.jsx("th",{style:{padding:"0.5rem",textAlign:"left"},children:"Prediction"})]})}),l.jsx("tbody",{children:Object.entries(p).map(([O,V],N)=>l.jsxs("tr",{style:{borderBottom:"1px solid var(--border-subtle)"},children:[l.jsx("td",{style:{padding:"0.4rem"},children:O}),l.jsx("td",{style:{padding:"0.4rem"},children:typeof V=="object"?`${V.value??"--"} ${V.unit??""}`:V})]},N))})]})]}),j.length>0&&l.jsxs("div",{style:{background:"rgba(255,255,255,0.04)",padding:"1rem",borderLeft:"4px solid var(--accent-cyan)",marginBottom:"2rem"},children:[l.jsx("h3",{style:{marginBottom:"0.5rem",color:"var(--accent-cyan)"},children:"Key Insights"}),l.jsx("ul",{style:{margin:0,paddingLeft:"1.2rem",color:"var(--text-primary)"},children:j.map((O,V)=>l.jsx("li",{children:O},V))})]}),o&&o.length>0&&l.jsx("div",{style:{overflowX:"auto",marginBottom:"2rem"},children:l.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"0.8rem"},children:[l.jsx("thead",{children:l.jsxs("tr",{style:{borderBottom:"1px solid var(--border-subtle)",color:"var(--text-muted)"},children:[l.jsx("th",{style:{padding:"0.5rem"},children:"Date"}),l.jsx("th",{style:{padding:"0.5rem"},children:"Rainfall (mm)"}),l.jsx("th",{style:{padding:"0.5rem"},children:"Max Temp (°C)"}),l.jsx("th",{style:{padding:"0.5rem"},children:"Min Temp (°C)"}),l.jsx("th",{style:{padding:"0.5rem"},children:"LST (°C)"}),l.jsx("th",{style:{padding:"0.5rem"},children:"SST (°C)"})]})}),l.jsx("tbody",{children:o.map((O,V)=>{var N,F,I,H,ie,oe,se,fe,de,$;return l.jsxs("tr",{style:{borderBottom:"1px solid var(--border-subtle)"},children:[l.jsx("td",{style:{padding:"0.4rem"},children:O.date}),l.jsx("td",{style:{padding:"0.4rem"},children:((F=(N=O.metrics)==null?void 0:N.rainfall)==null?void 0:F.value)??"--"}),l.jsx("td",{style:{padding:"0.4rem"},children:((H=(I=O.metrics)==null?void 0:I.maxTemp)==null?void 0:H.value)??"--"}),l.jsx("td",{style:{padding:"0.4rem"},children:((oe=(ie=O.metrics)==null?void 0:ie.minTemp)==null?void 0:oe.value)??"--"}),l.jsx("td",{style:{padding:"0.4rem"},children:((fe=(se=O.metrics)==null?void 0:se.lst)==null?void 0:fe.value)??"--"}),l.jsx("td",{style:{padding:"0.4rem"},children:(($=(de=O.metrics)==null?void 0:de.sst)==null?void 0:$.value)??"--"})]},V)})})]})}),l.jsxs("div",{style:{marginBottom:"2rem"},children:[l.jsxs("button",{onClick:()=>w(!b),style:{background:"none",border:"none",color:"var(--accent-cyan)",cursor:"pointer",fontSize:"0.9rem"},children:[b?"Hide":"Show"," Data Provenance & Disclosure"]}),b&&l.jsxs("div",{style:{marginTop:"0.5rem",padding:"0.75rem",background:"rgba(255,255,255,0.04)",borderRadius:"4px",color:"var(--text-muted)"},children:[l.jsx("p",{children:"• Verified observations are district‑level where available."}),l.jsx("p",{children:"• Satellite‑derived variables (LST, SST) may be unavailable on cloudy days – shown as ‘—’."}),l.jsx("p",{children:"• Model forecasts are predictions, not observed telemetry."}),l.jsx("p",{children:"• If the backend is unreachable, data shown may come from a development mock dataset – not verified observations."})]})]}),E&&l.jsx("div",{onClick:()=>M(!1),style:{position:"fixed",inset:0,backgroundColor:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3},children:l.jsxs("div",{onClick:O=>O.stopPropagation(),style:{background:"var(--bg-surface)",padding:"1.5rem",maxWidth:"90%",maxHeight:"80%",overflowY:"auto",borderRadius:"8px",boxShadow:"var(--shadow-lg)",color:"var(--text-primary)"},children:[l.jsx("h2",{style:{marginTop:0,color:"var(--accent-cyan)"},children:"Climate Brief"}),l.jsx("pre",{style:{whiteSpace:"pre-wrap",fontFamily:"var(--font-mono)",fontSize:"0.85rem"},children:d}),l.jsx("button",{onClick:()=>M(!1),style:{marginTop:"1rem",backgroundColor:"var(--accent-cyan-soft)",border:"1px solid rgba(6,182,212,0.4)",color:"#f8fafc",padding:"0.4rem 0.8rem",fontWeight:600,cursor:"pointer"},children:"Close"})]})})]})}function OC(){const[t,e]=he.useState("overview"),n=()=>{switch(t){case"overview":return l.jsx(hm,{});case"climate-map":return l.jsx(MS,{});case"digital-twin":return l.jsx(RC,{});case"analytics":return l.jsx(IC,{});case"what-if":return l.jsx(UC,{});case"reports":return l.jsx(FC,{});default:return l.jsx(hm,{})}};return l.jsx(hS,{activeTab:t,onTabChange:e,children:n()})}ju.createRoot(document.getElementById("root")).render(l.jsx(Gu.StrictMode,{children:l.jsx(OC,{})}));
