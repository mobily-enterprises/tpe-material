!function(){"use strict";
/**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),s=new Map;class i{constructor(t,s){if(this._$cssResult$=!0,s!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let e=s.get(this.cssText);return t&&void 0===e&&(s.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const r=t=>new i("string"==typeof t?t:t+"",e),o=(t,...s)=>{const r=1===t.length?t[0]:s.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new i(r,e)},a=(e,s)=>{t?e.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((t=>{const s=document.createElement("style");s.textContent=t.cssText,e.appendChild(s)}))},n=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r(e)})(t):t
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */;var l,d;const c={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},h=(t,e)=>e!==t&&(e==e||t==t),u={attribute:!0,type:String,converter:c,reflect:!1,hasChanged:h};class p extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,s)=>{const i=this._$Eh(s,e);void 0!==i&&(this._$Eu.set(i,s),t.push(i))})),t}static createProperty(t,e=u){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){const r=this[t];this[e]=i,this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||u}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of e)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(n(t))}else void 0!==t&&e.push(n(t));return e}static _$Eh(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ev=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Ep(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,s;(null!==(e=this._$Em)&&void 0!==e?e:this._$Em=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var e;null===(e=this._$Em)||void 0===e||e.splice(this._$Em.indexOf(t)>>>0,1)}_$Ep(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return a(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$Eg(t,e,s=u){var i,r;const o=this.constructor._$Eh(t,s);if(void 0!==o&&!0===s.reflect){const a=(null!==(r=null===(i=s.converter)||void 0===i?void 0:i.toAttribute)&&void 0!==r?r:c.toAttribute)(e,s.type);this._$Ei=t,null==a?this.removeAttribute(o):this.setAttribute(o,a),this._$Ei=null}}_$AK(t,e){var s,i,r;const o=this.constructor,a=o._$Eu.get(t);if(void 0!==a&&this._$Ei!==a){const t=o.getPropertyOptions(a),n=t.converter,l=null!==(r=null!==(i=null===(s=n)||void 0===s?void 0:s.fromAttribute)&&void 0!==i?i:"function"==typeof n?n:null)&&void 0!==r?r:c.fromAttribute;this._$Ei=a,this[a]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,s){let i=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||h)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$Ei!==t&&(void 0===this._$ES&&(this._$ES=new Map),this._$ES.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$Ev=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ev}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(s)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Em)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ev}shouldUpdate(t){return!0}update(t){void 0!==this._$ES&&(this._$ES.forEach(((t,e)=>this._$Eg(e,this[e],t))),this._$ES=void 0),this._$ET()}updated(t){}firstUpdated(t){}}
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
var b,g;p.finalized=!0,p.elementProperties=new Map,p.elementStyles=[],p.shadowRootOptions={mode:"open"},null===(l=globalThis.reactiveElementPlatformSupport)||void 0===l||l.call(globalThis,{ReactiveElement:p}),(null!==(d=globalThis.reactiveElementVersions)&&void 0!==d?d:globalThis.reactiveElementVersions=[]).push("1.0.0-rc.4");const m=globalThis.trustedTypes,v=m?m.createPolicy("lit-html",{createHTML:t=>t}):void 0,f=`lit$${(Math.random()+"").slice(9)}$`,y="?"+f,x=`<${y}>`,w=document,k=(t="")=>w.createComment(t),E=t=>null===t||"object"!=typeof t&&"function"!=typeof t,_=Array.isArray,A=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,S=/-->/g,$=/>/g,C=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,V=/'/g,M=/"/g,P=/^(?:script|style|textarea)$/i,T=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),O=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),I=new WeakMap,F=w.createTreeWalker(w,129,null,!1),R=(t,e)=>{const s=t.length-1,i=[];let r,o=2===e?"<svg>":"",a=A;for(let e=0;e<s;e++){const s=t[e];let n,l,d=-1,c=0;for(;c<s.length&&(a.lastIndex=c,l=a.exec(s),null!==l);)c=a.lastIndex,a===A?"!--"===l[1]?a=S:void 0!==l[1]?a=$:void 0!==l[2]?(P.test(l[2])&&(r=RegExp("</"+l[2],"g")),a=C):void 0!==l[3]&&(a=C):a===C?">"===l[0]?(a=null!=r?r:A,d=-1):void 0===l[1]?d=-2:(d=a.lastIndex-l[2].length,n=l[1],a=void 0===l[3]?C:'"'===l[3]?M:V):a===M||a===V?a=C:a===S||a===$?a=A:(a=C,r=void 0);const h=a===C&&t[e+1].startsWith("/>")?" ":"";o+=a===A?s+x:d>=0?(i.push(n),s.slice(0,d)+"$lit$"+s.slice(d)+f+h):s+f+(-2===d?(i.push(void 0),e):h)}const n=o+(t[s]||"<?>")+(2===e?"</svg>":"");return[void 0!==v?v.createHTML(n):n,i]};class N{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,o=0;const a=t.length-1,n=this.parts,[l,d]=R(t,e);if(this.el=N.createElement(l,s),F.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=F.nextNode())&&n.length<a;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(f)){const s=d[o++];if(t.push(e),void 0!==s){const t=i.getAttribute(s.toLowerCase()+"$lit$").split(f),e=/([.?@])?(.*)/.exec(s);n.push({type:1,index:r,name:e[2],strings:t,ctor:"."===e[1]?B:"?"===e[1]?H:"@"===e[1]?q:j})}else n.push({type:6,index:r})}for(const e of t)i.removeAttribute(e)}if(P.test(i.tagName)){const t=i.textContent.split(f),e=t.length-1;if(e>0){i.textContent=m?m.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],k()),F.nextNode(),n.push({type:2,index:++r});i.append(t[e],k())}}}else if(8===i.nodeType)if(i.data===y)n.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf(f,t+1));)n.push({type:7,index:r}),t+=f.length-1}r++}}static createElement(t,e){const s=w.createElement("template");return s.innerHTML=t,s}}function z(t,e,s=t,i){var r,o,a,n;if(e===O)return e;let l=void 0!==i?null===(r=s._$Cl)||void 0===r?void 0:r[i]:s._$Cu;const d=E(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==d&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===d?l=void 0:(l=new d(t),l._$AT(t,s,i)),void 0!==i?(null!==(a=(n=s)._$Cl)&&void 0!==a?a:n._$Cl=[])[i]=l:s._$Cu=l),void 0!==l&&(e=z(t,l._$AS(t,e.values),l,i)),e}class U{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:s},parts:i}=this._$AD,r=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:w).importNode(s,!0);F.currentNode=r;let o=F.nextNode(),a=0,n=0,l=i[0];for(;void 0!==l;){if(a===l.index){let e;2===l.type?e=new D(o,o.nextSibling,this,t):1===l.type?e=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(e=new W(o,this,t)),this.v.push(e),l=i[++n]}a!==(null==l?void 0:l.index)&&(o=F.nextNode(),a++)}return r}m(t){let e=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class D{constructor(t,e,s,i){var r;this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cg=null===(r=null==i?void 0:i.isConnected)||void 0===r||r}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=z(this,t,e),E(t)?t===L||null==t||""===t?(this._$AH!==L&&this._$AR(),this._$AH=L):t!==this._$AH&&t!==O&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):(t=>{var e;return _(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==L&&E(this._$AH)?this._$AA.nextSibling.data=t:this.S(w.createTextNode(t)),this._$AH=t}T(t){var e;const{values:s,_$litType$:i}=t,r="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=N.createElement(i.h,this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===r)this._$AH.m(s);else{const t=new U(r,this),e=t.p(this.options);t.m(s),this.S(e),this._$AH=t}}_$AC(t){let e=I.get(t.strings);return void 0===e&&I.set(t.strings,e=new N(t)),e}M(t){_(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new D(this.A(k()),this.A(k()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class j{constructor(t,e,s,i,r){this.type=1,this._$AH=L,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=L}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const r=this.strings;let o=!1;if(void 0===r)t=z(this,t,e,0),o=!E(t)||t!==this._$AH&&t!==O,o&&(this._$AH=t);else{const i=t;let a,n;for(t=r[0],a=0;a<r.length-1;a++)n=z(this,i[s+a],e,a),n===O&&(n=this._$AH[a]),o||(o=!E(n)||n!==this._$AH[a]),n===L?t=L:t!==L&&(t+=(null!=n?n:"")+r[a+1]),this._$AH[a]=n}o&&!i&&this.k(t)}k(t){t===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class B extends j{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===L?void 0:t}}class H extends j{constructor(){super(...arguments),this.type=4}k(t){t&&t!==L?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class q extends j{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){var s;if((t=null!==(s=z(this,t,e,0))&&void 0!==s?s:L)===O)return;const i=this._$AH,r=t===L&&i!==L||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==L&&(i===L||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class W{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){z(this,t)}}
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
var K,Y,X;null===(b=globalThis.litHtmlPlatformSupport)||void 0===b||b.call(globalThis,N,D),(null!==(g=globalThis.litHtmlVersions)&&void 0!==g?g:globalThis.litHtmlVersions=[]).push("2.0.0-rc.5");class G extends p{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,s)=>{var i,r;const o=null!==(i=null==s?void 0:s.renderBefore)&&void 0!==i?i:e;let a=o._$litPart$;if(void 0===a){const t=null!==(r=null==s?void 0:s.renderBefore)&&void 0!==r?r:null;o._$litPart$=a=new D(e.insertBefore(k(),t),t,void 0,null!=s?s:{})}return a._$AI(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return O}}G.finalized=!0,G._$litElement$=!0,null===(K=globalThis.litElementHydrateSupport)||void 0===K||K.call(globalThis,{LitElement:G}),null===(Y=globalThis.litElementPlatformSupport)||void 0===Y||Y.call(globalThis,{LitElement:G}),(null!==(X=globalThis.litElementVersions)&&void 0!==X?X:globalThis.litElementVersions=[]).push("3.0.0-rc.4");const J=t=>class extends t{static get styles(){return[super.styles||[],o`             
          label div#label-text, ::slotted(*) {
            display: inline-block;
            vertical-align: text-bottom;
            /* It's also possible to control the width of the label with a custom 
            / CSS property **labels-mixin-input-label-width**.
            */
            width: var(--labels-mixin-input-label-width, auto);
            /* Make sure content larger than the element is clipped and show an ellipsis */
            overflow: hidden;
            text-overflow: ellipsis;
          }

        `]}static get properties(){return{label:{type:String},labelPosition:{type:String,attribute:"label-position"}}}constructor(){super(),this.labelPosition="before"}get labelTemplate(){return T`
        <label id="label" for="native">
          <div id="label-text">${this.label}</div>
          <slot id="label-slot" name="label"></slot>
        </label>
      `}get ifLabelBefore(){return"before"===this.labelPosition?this.labelTemplate:""}get ifLabelAfter(){return"after"===this.labelPosition?this.labelTemplate:""}},Z=t=>class extends t{static get properties(){return{validationMessagePosition:{type:String,attribute:"validation-message-position"},shownValidationMessage:{type:String,attribute:!1},validity:{type:Object,attribute:!1},validator:{type:Object}}}constructor(){super(),this.shownValidationMessage="",this.validator=()=>"",this.validationMessagePosition="before",this.validity={valid:!0,_customValidationMessage:""}}setCustomValidity(t){""===t?(this.validity={valid:!0,_customValidationMessage:""},this.toggleAttribute("valid",!0),""===t&&(this.shownValidationMessage="")):(this.validity={valid:!1,customError:!0,_customValidationMessage:t},this.toggleAttribute("valid",!1))}reportValidity(){if(!this.validity.customError){const t=this._runValidator();t&&this.setCustomValidity(t)}return this.shownValidationMessage="",this.validity.valid?(this.toggleAttribute("valid",!0),!0):(this.toggleAttribute("valid",!1),this.shownValidationMessage=this.validity._customValidationMessage,this.dispatchEvent(new CustomEvent("invalid",{cancelable:!0,bubbles:!1,composed:!0})),!1)}_runValidator(){let t,e;this.form&&this.form._getElementValueSource&&(t=this[this.form._getElementValueSource(this)],e=this.form.submitObject);const s=this.validator(t,e);s&&this.setCustomValidity(s)}checkValidity(){if(!this.validity.customError){const t=this._runValidator();t&&this.setCustomValidity(t)}return!!this.validity.valid||(this.dispatchEvent(new CustomEvent("invalid",{cancelable:!0,bubbles:!1,composed:!0})),!1)}get ifValidationMessageBefore(){return"after"===this.validationMessagePosition?"":this.validationMessageTemplate}get ifValidationMessageAfter(){return"before"===this.validationMessagePosition?"":this.validationMessageTemplate}get validationMessageTemplate(){return T`
        <span class="error-message">
          ${this.shownValidationMessage}
        </span>
      `}},Q=t=>class extends t{static get styles(){return[]}firstUpdated(){super.firstUpdated();const t=document.createElement("slot");t.setAttribute("name","style"),t.setAttribute("id","style-slot"),this.shadowRoot.appendChild(t);for(const e of t.assignedElements())"STYLE"===e.tagName&&this.shadowRoot.appendChild(e)}};const tt=new class{constructor(){this.elements={},this._definedElementsMap={}}register(t,e){this.elements[t]=e}defineAll(){for(const t in this.elements)this.define(t)}define(t){if(this._definedElementsMap[t])throw new Error("You can only tun tpeRegistry.define() once");customElements.define(t,this.elements[t]),this._definedElementsMap[t]=!0}};class et extends(Z(Q(J(G)))){static get properties(){return{name:{type:String},valueAs:{type:String,attribute:"value-as"},valueSeparator:{type:String,attribute:"value-separator"},clearOnSetValue:{type:Boolean,attribute:"clear-on-set-value"}}}constructor(){super(),this.labelForElement="ni",this.valueAs="text",this.removeIcon='<svg class="icon" height="15" viewBox="0 0 24 24" width="15"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>',this.itemElement="",this.itemElementConfig={},this.itemElementAttributes={},this.valueSeparator=","}static get styles(){return[super.styles,o`

        :host(:focus) {
          outline: none;
        }

        #list {
          display: flex;
          flex-wrap: wrap;
        }

        #list > span {
          position: relative;
          display: flex;
          font-size: 0.8em;
          width: max-content;
        }

        #list > span > *:not(button) {
          position: relative;
          /* display: inline-block; */
          padding: 3px 6px;
          padding-right: 24px;
          border: 1px solid #ddd;
          border-radius: 1em;
          margin: 2px;
          vertical-align: middle;
          line-height: 1em;
        }

        #list > span > *:not(button)[invalid] {
          background-color: pink;
          border-color: red;
        }

        #list > span:active > *:not(button), #list > span:focus > *:not(button), #list > span:hover > *:not(button) {
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
          background-color: #eee;
          outline: none;
        }
        #list > span:active > *:not(button), #list > span:focus > *:not(button) {
          border-color: #ccc;
        }

        #list > span button.remove {
          appearance: none;
          -moz-appearance: none;
          -webkit-appearance: none;
          fill: #999;
          border: none;
          padding: 0;
          /* display: inline-block; */
          position: absolute;
          top: 55%;
          right: 6px;
          transform: translateY(-50%);
          background: none;
        }

        #list > *:focus, #list > span *:active {
          outline: none;
        }

        #list > span button.remove svg {
          z-index: -1;
        }

        #list > span button.remove:hover {
          fill: #555;
        }

        input {
          box-sizing: border-box;
          margin: 0;
          outline: none;
          vertical-align: middle;
          height: 1.5em;
          border: none;
          font-size: 0.9em;
          min-width: 120px;
          flex: 1;
        }

        input:focus, input:hover {
          outline: none
        }

        span.error-message {
          color: red;
        }

        :invalid {
          background-color: pink;
          border: 1px solid #bb7777;
        }
      `]}render(){return T`
      ${this.ifLabelBefore}
      ${this.ifValidationMessageBefore}
      <div id="list" @click="${this._listClicked}">
        <input @keydown="${this._handleKeyEvents}" rows="1" id="ta" spellcheck="false" autocomplete="off" autocapitalize="off" autocorrect="off" dir="ltr" role="combobox" aria-autocomplete="list"/>
      </div>
      ${this.ifValidationMessageAfter}
      ${this.ifLabelAfter}
      <input id="ni" type="hidden" name="${this.name}">
    `}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.focus)}disconnectedCallback(){super.connectedCallback(),this.removeEventListener("click",this.focus)}firstUpdated(){this._tempValue&&(this.value=this._tempValue),this._updateNativeInputValue()}focus(){this.shadowRoot.querySelector("#ta").focus()}_listClicked(t){t.stopPropagation()}get value(){let t,e;switch(this.valueAs){case"json":t={},e=this.shadowRoot.querySelector("#list");for(const s of e.children){if("ta"===s.id)continue;t[s.firstChild.idValue]=s.firstChild.data}return t;default:t=[],e=this.shadowRoot.querySelector("#list");for(const s of e.children)"ta"!==s.id&&("text"===this.valueAs?null===s.getAttribute("invalid")&&t.push(s.firstChild.textValue):t.push(s.firstChild.idValue));return t.join(this.valueSeparator)}}set value(t){const e=this.shadowRoot.querySelector("#list");if(e){for(;(this.clearOnSetValue||""===t||null==t)&&e.firstChild&&"ta"!==e.firstChild.id;)e.removeChild(e.firstChild);if(Array.isArray(t))for(const e of t)this.pickedElement(e,!1,!0);else if("object"==typeof t&&null!==t)for(const e of Object.keys(t)){const s=t[e];this.pickedElement(s,!1,!0)}else if("string"==typeof t&&""!==t)for(const e of t.split(this.valueSeparator))this.pickedElement(e,!1,!0);this._tempValue=null,this._updateNativeInputValue(),this.setCustomValidity(""),this.reportValidity()}else this._tempValue=t}get validationMessage(){return this.validity._customValidationMessage}get autocompleteValue(){const t=this.shadowRoot.querySelector("#ta");return t?t.value:""}_pickCurrentValue(){"text"===this.valueAs&&this.pickedElement(this.shadowRoot.querySelector("#ta").value,!0)}_askToRemove(t){const e=t.currentTarget;this._removeItem(e.parentElement)}_updateNativeInputValue(){this.shadowRoot.querySelector("#ni").value=this.value}_removeItem(t,e="previous"){(t.previousElementSibling||t.nextElementSibling).focus(),t.remove(),this._updateNativeInputValue(),this.setCustomValidity(""),this.reportValidity()}_createRemoveBtn(){const t=document.createElement("button");return t.innerHTML=this.removeIcon,t.onclick=this._askToRemove.bind(this),t.classList.add("remove"),t}_handleKeyEvents(t){const e=t.currentTarget;switch(t.key){case"ArrowLeft":e.previousElementSibling&&(t.preventDefault(),e.previousElementSibling.focus());break;case"ArrowRight":"ta"!==e.id&&(t.preventDefault(),e.nextElementSibling?e.nextElementSibling.focus():e.parentElement.firstElementChild.focus());break;case"ArrowDown":this.parentElement.suggestions.length&&(t.preventDefault(),this.parentElement.focusNext());break;case"Backspace":case"Delete":"ta"===e.id&&e.parentElement.children.length>1&&!e.value?this._removeItem(e.previousElementSibling):"ta"!==e.id&&this._removeItem(e);break;case"Tab":case"Enter":if(!this.autocompleteValue)break;this.parentElement.suggestions.length?(t.preventDefault(),this.parentElement.pickFirst()):(t.preventDefault(),this._pickCurrentValue())}}get multiInputApi(){return!0}pickedElement(t,e=!1,s=!1){const i=document.createElement(this.itemElement),r=new i.constructor.PickedElement;r.config={...r.config,...this.itemElementConfig};for(const t of Object.keys(this.itemElementAttributes))r.setAttribute(t,this.itemElementAttributes[t]);if("string"==typeof t){if(!t.length)return;if(!(t=i.stringToData(t)).valid&&(r.toggleAttribute("invalid",!0),!e))return}r.data=t;const o=this.shadowRoot.querySelector("#list"),a=document.createElement("span");a.setAttribute("tabindex",-1);const n=this.shadowRoot.querySelector("#ta"),l=this._createRemoveBtn();a.onkeydown=this._handleKeyEvents.bind(this),l.setAttribute("tabindex",-1),a.appendChild(r),a.appendChild(l),o.insertBefore(a,n),n.value="",this._updateNativeInputValue(),s||(this.setCustomValidity(""),this.reportValidity())}setPickedElement(t,e,s){this.itemElement=t,this.itemElementConfig=e,this.itemElementAttributes=s}}tt.register("ee-autocomplete-input-spans",et);const st=["accessKey","accessKeyLabel","contentEditable","isContentEditable","contextMenu ","dataset","dir","draggable","dropzone","hidden","inert","innerText","itemScope ","itemType","itemId ","itemRef","itemProp","itemValue ","lang","noModule","nonce","offsetHeight","offsetLeft","offsetParent","offsetTop","offsetWidth","properties","spellcheck","tabIndex","title","translate","attachInternals","blur","click","focus","forceSpellCheck","style"],it=["length","name","method","target","action","encoding","enctype","acceptCharset","autocomplete","noValidate","requestAutocomplete","submit","checkValidity","reportValidity","reset","elements"],rt=["form","formAction","formEncType","formMethod","formNoValidate","formTarget","name","type","disabled","autofocus","required","value","checkValidity","validity","validationMessage","willValidate","checked","defaultChecked","indeterminate","alt","height","src","width","accept","allowdirs ","files","webkitdirectory ","webkitEntries ","autocomplete","max","maxLength","min","minLength","pattern","placeholder","readOnly","size","selectionStart","selectionEnd","selectionDirection","defaultValue","dirName","accessKey","list","multiple","files","labels","step","valueAsDate","valueAsNumber","autocapitalize ","inputmode","align ","useMap ","blur","click","focus","select","setSelectionRange","setRangeText","setCustomValidity","reportValidity","stepDown","stepUp"],ot=["accessKey","autofocus","disabled","form","formAction","formEnctype","formMethod","formNoValidate","formTarget","labels","menu ","name","tabIndex","type","willValidate","validationMessage","validity","value","checkValidity","reportValidity","setCustomValidity"],at=["autofocus","disabled","labels","length","multiple","name","options","required","selectedIndex","selectedOptions","size","type","validationMessage","validity","value","willValidate","add","blur","focus","item","namedItem","remove","checkValidity","reportValidity","setCustomValidity","form"],nt=["type","value","textLength","defaultValue","placeholder","rows","cols","autofocus","name","disabled","labels","maxLength","accessKey","readOnly","required","tabIndex","selectionStart","selectionEnd","selectionDirection","validity","willValidate","validationMessage","autocomplete ","autocapitalize ","inputMode ","wrap","blur","focus","select","setRangeText","setSelectionRange","checkValidity","reportValidity","setCustomValidity","form"],lt=["high","low","max","min","optimum","value","labels"],dt=["max","position","value","labels"],ct=t=>class extends t{firstUpdated(){this.native=this.shadowRoot.querySelector("#native"),this._reflectAttributesAndProperties()}get reflectProperties(){return st}get skipProperties(){return["style"]}get skipAttributes(){return["id","style","class"]}afterSettingProperty(){}getAttribute(t){return this.native&&-1===this.skipAttributes.indexOf(t)?this.native.getAttribute(t):super.getAttribute(t)}setAttribute(t,e){super.setAttribute(t,e),-1===this.skipAttributes.indexOf(t)&&this._setSubAttr(t,e)}removeAttribute(t){super.removeAttribute(t),-1===this.skipAttributes.indexOf(t)&&this._setSubAttr(t,null)}_setSubAttr(t,e){const s=t.split("::");if(this.native)if(1===s.length)null===e?this.native.removeAttribute(t):this.native.setAttribute(t,e);else if(2===s.length){const t=this.shadowRoot.querySelector(`#${s[0]}`);t&&(null===e?t.removeAttribute(s[1]):t.setAttribute(s[1],e))}}_reflectAttributesAndProperties(){for(const t of this.attributes){const e=t.name;-1===this.skipAttributes.indexOf(e)&&this._setSubAttr(e,super.getAttribute(e))}new MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type){const e=t.attributeName;if(-1!==this.skipAttributes.indexOf(e))return;if(-1!==e.indexOf("::"))return;const s=this.native.getAttribute(e);if(s===super.getAttribute(e))return;null===s?super.removeAttribute(e):super.setAttribute(e,s)}}))})).observe(this.native,{attributes:!0});const t=[...new Set(this.reflectProperties)],e=Object.getPrototypeOf(this);e._alreadyReflecting||(t.forEach((t=>{-1===this.skipProperties.indexOf(t)&&Object.defineProperty(Object.getPrototypeOf(this),t,{get:function(){const e=this.native;if(this.native)return"function"==typeof e[t]?e[t].bind(e):e[t]},set:function(e){const s=this.native;if(!s)return void(void 0!==e&&Object.defineProperty(this,t,{value:e,configurable:!0,writable:!0}));if("function"==typeof this.beforeSettingProperty&&this.beforeSettingProperty(t,e),"function"==typeof s[t])return;const i=s[t];s[t]=e,this.requestUpdate(t,i),"function"==typeof this.afterSettingProperty&&this.afterSettingProperty(t,e)},configurable:!0,enumerable:!0})})),e._alreadyReflecting=!0),t.forEach((t=>{if(-1!==this.skipProperties.indexOf(t))return;let e;Object.prototype.hasOwnProperty.call(this,t)&&(e=this[t],delete this[t],this[t]=e)}))}},ht=t=>class extends t{get skipAttributes(){return[...super.skipAttributes,"type"]}get reflectProperties(){return[...super.reflectProperties,...rt]}};!function(){const t=new WeakMap,e=new WeakMap,s=new WeakMap,i=new WeakMap,r=new WeakMap,o=new WeakMap,a=new WeakMap,n=new WeakMap,l=new WeakMap,d=new WeakMap,c=new WeakMap,h=new WeakMap,u=new WeakMap,p=new WeakMap,b={attributes:!0,attributeFilter:["disabled"]},g=new MutationObserver((t=>{for(const e of t){const t=e.target;if(t.constructor.formAssociated){const e=t.hasAttribute("disabled");t.toggleAttribute("internals-disabled",e),t.formDisabledCallback&&t.formDisabledCallback.apply(t,[t.hasAttribute("disabled")])}}})),m=t=>{s.get(t).forEach((t=>{t.remove()})),s.set(t,[])},v=(t,e)=>{const i=document.createElement("input");return i.type="hidden",i.name=t.getAttribute("name"),t.after(i),s.get(e).push(i),i},f=(t,e)=>{if(e.length){Array.from(e).forEach((e=>e.addEventListener("click",t.focus.bind(t))));let s=e[0].id;e[0].id||(s=`${e[0].htmlFor}_Label`,e[0].id=s),t.setAttribute("aria-labelledby",s)}},y=t=>{const e=t.target,s=n.get(e);if(s.size){if(Array.from(s).reverse().map((t=>i.get(t).reportValidity())).includes(!1))t.stopImmediatePropagation(),t.stopPropagation(),t.preventDefault();else if(p.get(e)){!1===p.get(e).call(e,t)&&t.preventDefault()}}},x=t=>{const e=n.get(t.target);e&&e.size&&e.forEach((t=>{t.constructor.formAssociated&&t.formResetCallback&&t.formResetCallback.apply(t)}))},w=(t,e,s)=>{if(e){e.onsubmit&&(p.set(e,e.onsubmit.bind(e)),e.onsubmit=null);const i=n.get(e);if(i)i.add(t);else{const s=new Set;s.add(t),n.set(e,s),e.addEventListener("submit",y),e.addEventListener("reset",x)}o.set(e,{ref:t,internals:s}),t.constructor.formAssociated&&t.formAssociatedCallback&&setTimeout((()=>{t.formAssociatedCallback.apply(t,[e])}),0)}},k=t=>{let e=t.parentNode;return e&&"FORM"!==e.tagName?e=k(e):e||"[object ShadowRoot]"!==t.toString()||(e=k(t.host)),e},E=(t,e,s=DOMException)=>{if(!t.constructor.formAssociated)throw new s(e)},_=(t,e,s)=>{const r=n.get(t);return r&&r.size&&r.forEach((t=>{i.get(t)[s]()||(e=!1)})),e},A=t=>{if(t.constructor.formAssociated){const e=i.get(t),{labels:s,form:r}=e;f(t,s),w(t,r,e)}},S={ariaAtomic:"aria-atomic",ariaAutoComplete:"aria-autocomplete",ariaBusy:"aria-busy",ariaChecked:"aria-checked",ariaColCount:"aria-colcount",ariaColIndex:"aria-colindex",ariaColSpan:"aria-colspan",ariaCurrent:"aria-current",ariaDisabled:"aria-disabled",ariaExpanded:"aria-expanded",ariaHasPopup:"aria-haspopup",ariaHidden:"aria-hidden",ariaKeyShortcuts:"aria-keyshortcuts",ariaLabel:"aria-label",ariaLevel:"aria-level",ariaLive:"aria-live",ariaModal:"aria-modal",ariaMultiLine:"aria-multiline",ariaMultiSelectable:"aria-multiselectable",ariaOrientation:"aria-orientation",ariaPlaceholder:"aria-placeholder",ariaPosInSet:"aria-posinset",ariaPressed:"aria-pressed",ariaReadOnly:"aria-readonly",ariaRelevant:"aria-relevant",ariaRequired:"aria-required",ariaRoleDescription:"aria-roledescription",ariaRowCount:"aria-rowcount",ariaRowIndex:"aria-rowindex",ariaRowSpan:"aria-rowspan",ariaSelected:"aria-selected",ariaSort:"aria-sort",ariaValueMax:"aria-valuemax",ariaValueMin:"aria-valuemin",ariaValueNow:"aria-valuenow",ariaValueText:"aria-valuetext"};class ${constructor(){this.badInput=!1,this.customError=!1,this.patternMismatch=!1,this.rangeOverflow=!1,this.rangeUnderflow=!1,this.stepMismatch=!1,this.tooLong=!1,this.tooShort=!1,this.typeMismatch=!1,this.valid=!0,this.valueMissing=!1,Object.seal(this)}}const C=t=>{let e=!0;for(let s in t)"valid"!==s&&!1!==t[s]&&(e=!1);return e};function V(t){t.forEach((t=>{const{addedNodes:e,removedNodes:r}=t,o=Array.from(e),n=Array.from(r);o.forEach((t=>{if(i.has(t)&&t.constructor.formAssociated){const e=i.get(t),{form:s}=e;w(t,s,e),f(t,e.labels)}if(d.has(t)){const e=d.get(t);Object.keys(S).filter((t=>null!==e[t])).forEach((s=>{t.setAttribute(S[s],e[s])})),d.delete(t)}})),n.forEach((t=>{const e=i.get(t);if(e&&s.get(e)&&m(e),a.has(t)){a.get(t).disconnect()}}))}))}function M(t){t.forEach((t=>{const{removedNodes:e}=t;e.forEach((e=>{const s=u.get(t.target);i.has(e)&&A(e),s.disconnect()}))}))}new MutationObserver(V);const P={childList:!0,subtree:!0},T=new WeakMap;class O extends Set{constructor(t){if(super(),!t||!t.tagName||-1===t.tagName.indexOf("-"))throw new TypeError("Illegal constructor");T.set(this,t)}add(t){if(!/^--/.exec(t)||"string"!=typeof t)throw new DOMException(`Failed to execute 'add' on 'CustomStateSet': The specified value ${t} must start with '--'.`);const e=super.add(t);return T.get(this).toggleAttribute(`state${t}`,!0),e}clear(){for(let[t]of this.entries())this.delete(t);super.clear()}delete(t){const e=super.delete(t);return T.get(this).toggleAttribute(`state${t}`,!1),e}}class L{constructor(r){if(!r||!r.tagName||-1===r.tagName.indexOf("-"))throw new TypeError("Illegal constructor");const o=r.getRootNode(),a=new $;this.states=new O(r),t.set(this,r),e.set(this,a),i.set(r,this),((t,e)=>{for(let s in S){e[s]=null;let i=null;const r=S[s];Object.defineProperty(e,s,{get:()=>i,set(s){i=s,t.isConnected?t.setAttribute(r,s):d.set(t,e)}})}})(r,this),((t,e)=>{s.set(e,[]);const i=t.hasAttribute("disabled");t.toggleAttribute("internals-disabled",i),g.observe(t,b)})(r,this),Object.seal(this),A(r),o instanceof DocumentFragment&&(t=>{const e=new MutationObserver(M);e.observe(t,{childList:!0}),u.set(t,e)})(o)}static get isPolyfilled(){return!0}checkValidity(){const s=t.get(this);E(s,"Failed to execute 'checkValidity' on 'ElementInternals': The target element is not a form-associated custom element.");const i=e.get(this);if(!i.valid){const t=new Event("invalid",{bubbles:!1,cancelable:!0,composed:!1});s.dispatchEvent(t)}return i.valid}get form(){const e=t.get(this);let s;return E(e,"Failed to read the 'form' property from 'ElementInternals': The target element is not a form-associated custom element."),!0===e.constructor.formAssociated&&(s=k(e)),s}get labels(){const e=t.get(this);E(e,"Failed to read the 'labels' property from 'ElementInternals': The target element is not a form-associated custom element.");const s=e.getAttribute("id"),i=e.getRootNode();return i&&s&&i?i.querySelectorAll(`[for=${s}]`):[]}reportValidity(){const e=t.get(this);E(e,"Failed to execute 'reportValidity' on 'ElementInternals': The target element is not a form-associated custom element.");const s=this.checkValidity(),i=h.get(this);if(i&&!e.constructor.formAssociated)throw new DOMException("Failed to execute 'setValidity' on 'ElementInternals': The target element is not a form-associated custom element.");return!s&&i&&(e.focus(),i.focus()),s}setFormValue(e){const s=t.get(this);if(E(s,"Failed to execute 'setFormValue' on 'ElementInternals': The target element is not a form-associated custom element."),m(this),null==e||e instanceof FormData)null!=e&&e instanceof FormData&&e.forEach(((t,e)=>{if("string"==typeof t){const i=v(s,this);i.name=e,i.value=t}}));else if(s.getAttribute("name")){v(s,this).value=e}l.set(s,e)}setValidity(s,i,o){const a=t.get(this);if(E(a,"Failed to execute 'setValidity' on 'ElementInternals': The target element is not a form-associated custom element."),!s)throw new TypeError("Failed to execute 'setValidity' on 'ElementInternals': 1 argument required, but only 0 present.");h.set(this,o);const n=e.get(this),l={};for(const t in s)l[t]=s[t];var d;0===Object.keys(l).length&&((d=n).badInput=!1,d.customError=!1,d.patternMismatch=!1,d.rangeOverflow=!1,d.rangeUnderflow=!1,d.stepMismatch=!1,d.tooLong=!1,d.tooShort=!1,d.typeMismatch=!1,d.valid=!0,d.valueMissing=!1);const c={...n,...l};delete c.valid;const{valid:u}=((t,e)=>(t.valid=C(e),Object.keys(e).forEach((s=>t[s]=e[s])),t))(n,c);if(!u&&!i)throw new DOMException("Failed to execute 'setValidity' on 'ElementInternals': The second argument should not be empty if one or more flags in the first argument are true.");r.set(this,u?"":i),a.toggleAttribute("internals-invalid",!u),a.toggleAttribute("internals-valid",u),a.setAttribute("aria-invalid",`${!u}`)}get shadowRoot(){const e=t.get(this);return c.get(e)?c.get(e):null}get validationMessage(){const e=t.get(this);return E(e,"Failed to read the 'validationMessage' property from 'ElementInternals': The target element is not a form-associated custom element."),r.get(this)}get validity(){const s=t.get(this);E(s,"Failed to read the 'validity' property from 'ElementInternals': The target element is not a form-associated custom element.");return e.get(this)}get willValidate(){const e=t.get(this);return E(e,"Failed to read the 'willValidate' property from 'ElementInternals': The target element is not a form-associated custom element."),!e.disabled&&!e.hasAttribute("disabled")}}if(window.CustomStateSet||(window.CustomStateSet=O),!window.ElementInternals){function t(...t){const e=i.apply(this,t),s=new MutationObserver(V);return c.set(this,e),s.observe(e,P),a.set(this,s),e}function e(...t){let e=r.apply(this,t);return _(this,e,"checkValidity")}function s(...t){let e=o.apply(this,t);return _(this,e,"reportValidity")}window.ElementInternals=L,Object.defineProperty(Element.prototype,"attachInternals",{get(){return()=>{if(-1===this.tagName.indexOf("-"))throw new Error("Failed to execute 'attachInternals' on 'HTMLElement': Unable to attach ElementInternals to non-custom elements.");return new L(this)}}});const i=Element.prototype.attachShadow;Element.prototype.attachShadow=t;new MutationObserver(V).observe(document.documentElement,P);const r=HTMLFormElement.prototype.checkValidity;HTMLFormElement.prototype.checkValidity=e;const o=HTMLFormElement.prototype.reportValidity;HTMLFormElement.prototype.reportValidity=s}}();const ut=t=>class extends t{get skipAttributes(){return[...super.skipAttributes,"form"]}get skipProperties(){return[...super.skipProperties,"form"]}static get formAssociated(){return!0}static get properties(){return{disabled:{type:Boolean},required:{type:Boolean}}}constructor(){super(),this.attachInternals&&(this.internals=this.attachInternals())}firstUpdated(){super.firstUpdated(),this.internals&&this.native&&(this._updateAssociatedForm(),this.native.addEventListener("input",(t=>{this._updateAssociatedForm()})))}connectedCallback(){super.connectedCallback(),this._assignFormProperty()}_updateAssociatedForm(){const t=new FormData;t.append(this.name,this.value),this.internals.setFormValue(t)}get form(){return this._assignFormProperty()}get name(){return this.getAttribute("name")}get type(){return this.localName}get willValidate(){return this.internals.willValidate}_assignFormProperty(){if(this.internals&&this.internals.form)return this.internals.form;let t=this;for(;(t=t.parentElement)&&"FORM"!==t.tagName&&"NN-FORM"!==t.tagName&&"EN-FORM"!==t.tagName&&!t.hasAttribute("as-form"););return t}},pt=t=>class extends t{static get properties(){return{nativeErrorMessages:{type:Boolean,attribute:"native-error-messages"},shownValidationMessage:{type:String,attribute:!1},validator:{type:Function},validationMessages:{type:Object,attribute:"validition-messages"},validationMessagePosition:{type:String,attribute:"validation-message-position"}}}static get styles(){return[super.styles||[],o`

          span.error-message {
            color: red;
          }

          :invalid {
            background-color: pink;
            border: var(--native-validator-mixin-input-border-invalid, 1px solid #bb7777);
          }
        `]}constructor(){super(),this.validator=()=>"",this.nativeValidationKeys=["badInput","customError","patternMismatch","rangeOverflow","rangeUnderflow","stepMismatch","valueMissing","tooLong","tooShort","typeMismatch"],this.validationMessages={},this.validationMessagePosition="before",this._showPrettyError=!1}get skipProperties(){return[...super.skipProperties,"checkValidity","reportValidity","setCustomValidity"]}get validationMessageTemplate(){return T`
        <span class="error-message">
          ${this.shownValidationMessage}
        </span>
      `}get ifValidationMessageBefore(){return"after"===this.validationMessagePosition?"":this.validationMessageTemplate}get ifValidationMessageAfter(){return"before"===this.validationMessagePosition?"":this.validationMessageTemplate}setCustomValidity(t){if(this.native)return this.native.setCustomValidity(t)}_runValidator(){let t,e;this.form&&this.form._getElementValueSource&&(t=this[this.form._getElementValueSource(this)],e=this.form.submitObject);const s=this.validator(t,e);s&&this.setCustomValidity(s)}reportValidity(){return!this.native||(this.native.validity.customError||this._runValidator(),this.shownValidationMessage="",this.nativeErrorMessages?(this._showPrettyError=!1,this.native.reportValidity()):(this._showPrettyError=!0,this.native.checkValidity()))}checkValidity(){return!this.native||(this.native.validity.customError||this._runValidator(),this._showPrettyError=!1,this.native.checkValidity())}firstUpdated(){super.firstUpdated(),this.native.oninput=t=>{this.setCustomValidity(""),this.reportValidity()},this.native.oninvalid=t=>{if(!this._showPrettyError)return;const e=t.target.validity;let s;for(const t of this.nativeValidationKeys)if(e[t]){s=t;break}const i=this.validationMessages[s];this.shownValidationMessage=i?"function"==typeof i?i(t.target.validationMessage):i:t.target.validationMessage}}};class bt extends(ut(pt(J(Q(ht(ct(G))))))){render(){return T`
      ${this.ifLabelBefore}
      ${this.ifValidationMessageBefore}
      <input type="checkbox" as-checkbox value-source="checked" id="native" real-time-event="click">
      ${this.ifValidationMessageAfter}
      ${this.ifLabelAfter}
    `}_updateAssociatedForm(){this.internals.setFormValue(this.checked?this.value:null)}}tt.register("nn-input-checkbox",bt);class gt extends(Q(G)){static get styles(){return[super.styles,o`
        :host {
          display: block;
          padding: 10px;
          border-bottom: 1px solid #ddd;
        }

        :host(:last-child) {
          border-bottom: unset;
        }

        :host(:hover) {
          background-color: #eee;
        }

        li {
          list-style: none;
        }

      `]}static get properties(){return{data:{type:Object,attribute:!1},config:{type:Object,attribute:!1}}}constructor(){super(),this.config={id:"id",countryName:"name",countryCapital:"capital"}}render(){return T`
    <li>${this.data[this.config.countryName]} (Capital: ${this.data[this.config.countryCapital]})</li>
    `}get idValue(){return this.data[this.config.id]}get textValue(){return this.data[this.config.countryName]}stringToData(t){return{[this.config.countryName]:t,valid:!0}}static get PickedElement(){return mt}}tt.register("ee-autocomplete-item-country",gt);class mt extends gt{static get styles(){return[o`
        :host {
          position: relative;
          display: inline-block;
          font-size: 0.9em;
        }
      `]}render(){return T`
      ${this.data[this.config.countryName]}
      <slot></slot>
    `}}tt.register("ee-autocomplete-item-country-view",mt);class vt extends(Q(G)){static get styles(){return[super.styles,o`
        :host {
          display: block;
          padding: 10px;
          border-bottom: 1px solid #ddd;
        }

        :host(:last-child) {
          border-bottom: unset;
        }

        :host(:hover) {
          background-color: #eee;
        }

        li {
          list-style: none;
        }

      `]}static get properties(){return{data:{type:Object,attribute:!1},config:{type:Object,attribute:!1}}}constructor(){super(),this.config={id:"id",emailName:"name",emailAddress:"email"}}render(){return T`
    <li>${this.textValue}</li>
    `}get idValue(){return this.data[this.config.id]}get textValue(){return this._textValueGetter()}_textValueGetter(t=!1){if(t)return this.data[this.config.emailName]||this.data[this.config.emailAddress];const e=this.data[this.config.emailName],s=this.data[this.config.emailAddress];return e&&s?`${e} <${s}>`:e||(s||"")}stringToData(t){let e,s;if(!t.match("@"))return{[this.config.emailName]:t,[this.config.emailAddress]:"",valid:!1};const i=t.match(/[^@<\s]+@[^@\s>]+/g);i&&(s=i[0]);const r=t.split(/\s+/);r.length>1&&(r.pop(),e=r.join(" ").replace(/"/g,""));const o=!!s;return{[this.config.emailName]:e,[this.config.emailAddress]:s,valid:o}}static get PickedElement(){return ft}}tt.register("ee-autocomplete-item-email",vt);class ft extends vt{static get styles(){return[o`
        :host {
          position: relative;
          display: inline-block;
          font-size: 0.9em;
        }
      `]}render(){return T`
      ${this._textValueGetter(!0)}
      <slot></slot>
    `}}tt.register("ee-autocomplete-item-email-view",ft);class yt extends(Q(G)){static get styles(){return[super.styles,o`
        :host {
          display: block;
          padding: 10px;
          border-bottom: 1px solid #ddd;
        }

        :host(:last-child) {
          border-bottom: unset;
        }

        :host(:hover) {
          background-color: #eee;
        }

        li {
          list-style: none;
          text-align: left;
        }

      `]}static get properties(){return{data:{type:Object,attribute:!1},config:{type:Object,attribute:!1}}}constructor(){super(),this.config={id:"id",path:"name"}}render(){return T`
    <li>${this.data[this.config.path]}</li>
    `}get idValue(){return this.data[this.config.id]}get textValue(){return this.data[this.config.path]}stringToData(t){return{[this.config.path]:t}}static get PickedElement(){return xt}}tt.register("ee-autocomplete-item-li",yt);class xt extends yt{static get styles(){return[super.styles,o`
        :host {
          display: inline-block;
        }
      `]}static get properties(){return{data:{type:Object,attribute:!1},config:{type:Object,attribute:!1}}}constructor(){super(),this.config={id:"id",path:"name"}}render(){return T`
      -${this.data[this.config.path]}-
    `}}tt.register("ee-autocomplete-item-li-view",xt);class wt extends(Q(G)){static get styles(){return[super.styles,o`
        :host {
          display: block;
          position: relative;
        }

        #suggestions-elements {
          box-sizing: border-box;
          background-color: white;
          position: absolute;
          z-index: 1000;
          max-height: 200px;
          max-width: calc(95% - 17px);
          overflow-y: scroll;
          top: 90%;
          left: 17px;
          visibility: hidden;
        }

        #suggestions-elements[populated] {
          width: auto;
          min-width: var(--ee-autocomplete-suggestions-min-width, 400px);
          box-shadow: 2px 2px 6px 0 rgba(0, 0, 0, 0.2), 0 0 2px 2px rgba(0, 0, 0, 0.05);
          padding: 10px;
        }

        #suggestions-elements > *[selected], #suggestions-elements > *:focus, #suggestions-elements > *:hover  {
          background-color: #eee;
        }

        [hidden] {
          display: none !important;
        }
      `]}static get properties(){return{url:{type:String},informational:{type:Boolean},target:{type:String},targetForId:{type:String,attribute:"target-for-id"},displaySingleSuggestion:{type:Boolean,attribute:"display-single-suggestion"},picked:{type:Boolean,reflect:!0},pickedData:{type:Object},suggestions:{type:Array,attribute:!1},itemElement:{type:String,attribute:"item-element"},itemElementConfig:{type:Object,attribute:"item-element-config"},itemElementAttributes:{type:Object,attribute:"item-element-attributes"}}}constructor(){super(),this.url="",this.target=null,this.targetForId=null,this.suggestions=[],this.pickedData={},this.itemElement="ee-autocomplete-item-li",this.itemElementConfig={},this.itemElementAttributes={},this._boundInputEvent=this._inputEvent.bind(this),this._boundKeydownEvent=this._keydownEvent.bind(this)}_findTarget(t){return null===t?this.children[0]:"string"==typeof t?this.querySelector(`#${t}`):"object"==typeof t?t:null}_findTargetForId(t){if("null"!==t){if("string"==typeof t)return""===t?this.querySelector("[name]:not([no-submit])"):this.querySelector(`#${t}`);if("object"==typeof t)return t}return null}connectedCallback(){if(super.connectedCallback(),this.targetElement=this._findTarget(this.target),this.targetForId=this._findTargetForId(this.targetForId),this.targetForId){this.picked=!!this.targetForId.getAttribute("value");new MutationObserver((t=>{t.forEach((t=>{"attributes"===t.type&&"value"===t.attributeName&&(this.picked=!!this.targetForId.getAttribute("value"),this.targetForId.getAttribute("value")||(this.pickedData=null))}))})).observe(this.targetForId,{attributes:!0})}this.targetElement?(this.targetElement.addEventListener("input",this._boundInputEvent),this.targetElement.addEventListener("keydown",this._boundKeydownEvent),this.targetElement.multiInputApi&&this.targetElement.setPickedElement(this.itemElement,this.itemElementConfig,this.itemElementAttributes),this.targetElement.setAttribute("aria-autocomplete","list"),this.targetElement.setAttribute("aria-controls","suggestions"),this.targetElement.toggleAttribute("aria-activedescendant",!0),this.setAttribute("role","combobox"),this.setAttribute("aria-owns","suggestions")):console.error("Target element not found")}disconnectedCallback(){this.targetElement&&(this.targetElement.removeEventListener("input",this._boundInputEvent),this.targetElement.removeEventListener("keydown",this._boundKeydownEvent))}render(){return T`
      <slot></slot>
      <div @click="${this._picked}" id="suggestions" role="listbox" @keydown=${this._handleKeyEvents}>
        <div id="suggestions-elements"></div>
      </div>
    `}_keydownEvent(t){switch(t.key){case"Escape":this.dismissSuggestions();break;case"KeyDown":if(this.suggestions.length){this.shadowRoot.querySelector("#suggestions-elements").firstChild.focus()}}}pickFirst(){this.shadowRoot.querySelector("#suggestions-elements").querySelector("[selected]").click()}focusNext(){if(!this.suggestions.length)return;const t=this.shadowRoot.querySelector("#suggestions-elements");let e=t.querySelector("[selected]")||t.firstElementChild;this.suggestions.length>1&&(e.toggleAttribute("selected",!1),e=e.nextElementSibling||e.previousElementSibling),e&&e.focus()}_picked(t){console.log(t.currentTarget,t.target),!this.informational&&this.targetElement&&t.target.tagName.toLowerCase()===this.itemElement&&(this.targetElement.multiInputApi?this.targetElement.pickedElement(t.target.data):(this.targetElement.value=t.target.textValue,this.targetForId&&(this.targetForId.value=t.target.idValue,this.picked=!0,this.pickedData=t.target.data)),this.dismissSuggestions(),this.targetElement.focus(),this._dispatchPickedEvent())}_dispatchPickedEvent(){if(!this.picked)return;const t=new CustomEvent("input",{composed:!0,bubbles:!0,cancelable:!1,detail:{synthetic:!0,data:this.pickedData}});this.targetElement.dispatchEvent(t)}_jsonCopy(t){return JSON.parse(JSON.stringify(t))}async updated(t){if(!t.has("suggestions"))return;const e=this.shadowRoot.querySelector("#suggestions-elements");if(e.innerHTML="",!this._autocompleteInFlight)if(this.targetElement.multiInputApi&&""===this.targetElement.autocompleteValue)e.toggleAttribute("populated",!1);else{for(const t of this.suggestions){const s=document.createElement(this.itemElement);s.config={...this._jsonCopy(s.config),...this._jsonCopy(this.itemElementConfig)};for(const t of Object.keys(this.itemElementAttributes))s.setAttribute(t,this.itemElementAttributes[t]);s.data=this._jsonCopy(t),s.setAttribute("tabindex",0),e.appendChild(s)}if(1===this.suggestions.length&&!this.targetElement.multiInputApi&&"function"==typeof this.targetElement.setSelectionRange){const t=e.firstChild,s=t.textValue;if(s.toUpperCase().startsWith(this.targetElement.value.toUpperCase())){const e=this.targetElement.value;this.targetElement.value=s,this.targetElement.setSelectionRange(e.length,s.length),this.targetForId&&(this.targetForId.value=t.idValue,this.picked=!0,this.pickedData=t.data,this.displaySingleSuggestion||(this.dismissSuggestions(),this._dispatchPickedEvent()))}}if(this.suggestions.length||e.toggleAttribute("populated",!1),this.suggestions.length){e.toggleAttribute("populated",!0),e.firstChild.toggleAttribute("selected",!0);const t=this._isOutOfViewport(e);t.any&&(console.log(t),console.log(e),e.style.transform=`translateY(${this._calcTranslateY(t.top,t.bottom,e)}px) translateX(${this._calcTranslateX(t.left,t.right)}px)`),e.style.visibility="unset"}}}_calcTranslateY(t,e,s){t=-1*Number(t),e=-1*Number(e);return t+(s&&e?-1*s.offsetHeight+-1*this.targetElement.offsetHeight:0)}_calcTranslateX(t,e){return(t=-1*Number(t))+(e=-1*Number(e))}_isOutOfViewport(t){const e=t.getBoundingClientRect(),s={};return s.top=e.top<0&&e.top,s.left=e.left<0&&e.left,s.bottom=e.bottom>(window.innerHeight||document.documentElement.clientHeight)&&e.bottom-window.innerHeight,s.right=e.right>(window.innerWidth||document.documentElement.clientWidth)&&e.right-window.innerWidth,s.any=!!(s.top||s.left||s.bottom||s.right),s.all=!!(s.top&&s.left&&s.bottom&&s.right),s}toggleSuggestions(){this.suggestions.length?(this.dismissSuggestions(),this.targetElement.value=""):this.openSuggestions()}openSuggestions(){this.targetElement.value=" ",this._inputEvent({})}dismissSuggestions(){this.shadowRoot.querySelector("#suggestions").toggleAttribute("populated",!1),this.suggestions=[]}_handleKeyEvents(t){const e=t.currentTarget.getRootNode().activeElement;if(this.suggestions.length&&e.parentElement)switch(t.key){case"ArrowUp":t.preventDefault(),e.previousElementSibling?e.previousElementSibling.focus():e.parentElement.lastElementChild.focus();break;case"ArrowDown":t.preventDefault(),e.nextElementSibling?e.nextElementSibling.focus():e.parentElement.firstElementChild.focus();break;case"Tab":case"Enter":this._picked(t),t.preventDefault(),this.targetElement.focus();break;case"Escape":this.dismissSuggestions(),this.targetElement.focus()}}async _inputEvent(t){if(console.log(t,this._autocompleteInFlight),0!==t.detail&&t.detail&&t.detail.synthetic)return;const e=this.targetElement;if(!e)return;if(this.dismissSuggestions(),this._autocompleteInFlight)return void(this._attemptedAutocompleteFlight=t);this.targetForId&&(this.targetForId.value="",this.picked=!1,this.pickedData=null),this._autocompleteInFlight=!0;const s=e.autocompleteValue||e.value;if(!s)return this._autocompleteInFlight=!1,void this.dismissSuggestions();const i=this.url+s,r={method:"GET",redirect:"follow"};let o,a=!1;try{o=await fetch(i,r)}catch(t){console.log("ERROR!",t),a=!0}if(a){console.log("Network error!");const t=new CustomEvent("autocomplete-error",{detail:{type:"network"},bubbles:!0,composed:!0});this.dispatchEvent(t)}else if(o.ok){const t=await o.json();this.suggestions=t;const e=new CustomEvent("form-ok",{detail:{response:o},bubbles:!0,composed:!0});this.dispatchEvent(e)}else{console.log("Fetch error!");const t=await o.json(),e=new CustomEvent("autocomplete-error",{detail:{type:"http",response:o,errs:t},bubbles:!0,composed:!0});this.dispatchEvent(e)}if(this._autocompleteInFlight=!1,this._attemptedAutocompleteFlight){const t=this._attemptedAutocompleteFlight;this._attemptedAutocompleteFlight=!1,this._inputEvent(t)}}}tt.register("ee-autocomplete",wt);class kt extends(Q(G)){static get styles(){return[o`
        :host {
          flex-grow: 1;
          flex-shrink: 1;
          box-sizing: border-box;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          padding: 3px;
          border: 1px solid transparent;
        }

        :host([selectable]:hover) {
          border: 1px solid var(--ee-cell-hover-border-color, #ddd);
          background-color: 1px solid var(--ee-cell-hover-background-color, #eee);
        }

        :host([sq]) {
          flex-grow: 0.25;
        }
        :host([sh]) {
          flex-grow: 0.5;
        }
        :host([s1]) {
          flex-grow: 1;
        }
        :host([s2]) {
          flex-grow: 2;
        }
        :host([s3]) {
          flex-grow: 3;
        }
        :host([s4]) {
          flex-grow: 4;
        }
        :host([s5]) {
          flex-grow: 5;
        }

        /*
         ::slotted(#dnd-handle) {
          cursor: pointer;
        }

        ::slotted(*) {
          cursor: pointer;
        }
        */

      `]}static get properties(){return{}}constructor(){super(),this.SOMETHING=!1}connectedCallback(){super.connectedCallback()}render(){return T`
      <slot></slot>
    `}}tt.register("ee-cell",kt);const Et=T`<svg class="icon" height="24" viewBox="0 0 24 24" width="24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></svg>`;class _t extends(Q(G)){static get styles(){return[o`
        /* The base style for the ee-drawer element.*/
       :host {
          --ee-drawer-width: 300px;
          --ee-drawer-background-color: #393939;
          --ee-drawer-selected-color: white;
          display: block;
          position: fixed;
          box-sizing: border-box;
          top: 0;
          left: 0;
          z-index: 1; /* z-index is 1 by default, which should fit most scenarios. But it can be adjust by the ee-drawer parent's CSS, is needed */ 
          width: 20px; /* It is reduced to 20px width, which is enough to provide a target are for dragging on the viewport's left edge  */
          height: 100vh;
          user-select: none;
        }

        /* Take entire viewport when opened */
        :host([opened]) {
          width: 100vw;
          height: 100vh;
        }

        /* This class contains the actual drawer UI. It is full height and aligned to the :host edges, but moved horizontally -100% (left) of it's width */
        #container {
          height: 100vh;
          position: absolute;
          top: 0;
          left: 0;
          overflow-x: hidden;
          background-color: var(--ee-drawer-background-color);
          will-change: transform;
          transform: translateX(-100%);
          transition: transform 0.3s ease-out;
        }

        /* Reposition the drawer content to the original left edge alignment when opened */
        :host([opened]) #container {
          will-change: transform;
          transform: translateX(0);
        }

        /* Only add the container shadow when opened */
        :host([backdrop][opened]) #container {
          box-shadow: var(--ee-drawer-shadow, 0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.14), 0 0 0 100vw rgba(0, 0, 0, 0.15))
        }

        /* The nav element styles.*/

        #nav  {
          box-sizing: border-box;
          width: 100%;
          min-width: var(--ee-drawer-width);
          height: 100%;
          padding: 30px 24px;
          background: var(--ee-drawer-background-color);
          position: relative;
          overflow: auto;
          padding-bottom: 64px;
        }

        /* This will style the drawer items. If the developer decides not to use an <a> tag, the item must have class="drawer-item"  */
        #nav ::slotted(a),
        #nav ::slotted(.drawer-item) {
          display: block;
          text-decoration: none;
          color: var(--ee-drawer-color, #ddd);
          line-height: 32px;
          padding: 0 24px;
          cursor: pointer;
          font-size: 0.9em;
        }

        #nav ::slotted(a[selected]),
        #nav ::slotted(.drawer-item[selected]) {
          color: var(--ee-drawer-selected-color);
          font-weight: bolder;
          border-left: 3px solid var(--ee-drawer-selected-color);
          background-color: rgba(255,255,255, 0.1);
        }

        #nav ::slotted(a:hover),
        #nav ::slotted(.drawer-item:hover) {
          background-color: rgba(255,255,255, 0.05);
        }

        /* A header item can be slotted with class="head". It can be a simple heading tag, or an element containing anything*/
        #nav ::slotted(.head) {
          color: var(--ee-drawer-color, white);
          box-sizing: border-box;
          width: 100%;
          border-bottom: 1px solid var(--ee-drawer-selected-color);
          padding: 6px 70% 6px 0;
          font-size: 1.15em;
          margin: 10px auto;
        }

        /* Close button styles */

        #close {
          -webkit-appearance: none;
          color: var(--ee-drawer-background-color);
          fill: var(--ee-drawer-background-color);
          position: absolute;
          right: 5px;
          z-index: 10;
          background-color: var(--ee-drawer-background-color);
          border: none;
          cursor: pointer;
          right: 0;
          height: 100%;
          box-sizing: border-box;
          padding: 0 2px;
        }

        #close svg {
          height: 20px;
          width: 20px;
        }

        #close:focus, #close:active {
          outline: none !important;
        }

        #close:active, #close:hover {
          filter: brightness(120%);
          fill: var(--ee-drawer-selected-color);
          color: var(--ee-drawer-selected-color);
        }
      `]}static get properties(){return{opened:{type:Boolean,reflect:!0},backdrop:{type:Boolean,reflect:!0},closeButton:{type:Boolean,attribute:"close-button"},closeThreshold:{type:Number},openThreshold:{type:Number}}}constructor(){super(),this.backdrop=!0,this.closeButton=!0,this.opened=!1,this.closeThreshold=.6,this.openThreshold=.6}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this._handleOutsideClick),this.addEventListener("touchstart",this._handleDragStart),this.addEventListener("touchmove",this._handleDrag),this.addEventListener("touchend",this._handleDragEnd),this.addEventListener("mousedown",this._handleDragStart),this.addEventListener("mousemove",this._handleDrag),this.addEventListener("mouseup",this._handleDragEnd)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this._handleOutsideClick),this.removeEventListener("touchstart",this._handleDragStart),this.removeEventListener("touchmove",this._handleDrag),this.removeEventListener("touchend",this._handleDragEnd),this.removeEventListener("mousedown",this._handleDragStart),this.removeEventListener("mousemove",this._handleDrag),this.removeEventListener("mouseup",this._handleDragEnd)}firstUpdated(){this.container=this.shadowRoot.querySelector("div#container")}render(){return T`
      <div id="container">
        ${this.closeButton?T`<button id="close" @click="${this.close}">${Et}</button>`:""}
        <nav id="nav">
          <slot></slot>
        </nav>
      </div>
    `}open(){this.opened=!0}close(){this.opened=!1}toggle(){this.opened=!this.opened}_handleOutsideClick(t){this.ignoreNextClick?this.ignoreNextClick=!1:"EE-DRAWER"===t.target.nodeName&&this.close()}_handleDragStart(t){this.dragStart="touchstart"===t.type?t.touches[0].clientX:t.clientX,this.opened||(this.style.width="100vw")}_handleDrag(t){if(void 0===this.dragStart)return;this.dragging=!0,t.preventDefault();const e=("touchmove"===t.type?t.touches[0].clientX:t.clientX)-this.dragStart,s=this.container.getBoundingClientRect().width,i=s-this.openThreshold*s,r=-1*(s-this.closeThreshold*s);return e<r?(this.close(),void this._finishDrag()):e>i?(this.open(),this.ignoreNextClick=!0,void this._finishDrag()):(requestAnimationFrame((()=>{this.container.style.transform=`translateX(calc(${this.opened?"":"-100% +"} ${e}px))`})),!1)}_handleDragEnd(t){this.dragging&&t.preventDefault(),this.dragStart=void 0,this.dragging=!1,this._finishDrag()}_finishDrag(){requestAnimationFrame((()=>{this.container.style.transform="",this.opened||(this.style.width="")}))}}tt.register("ee-drawer",_t);
/**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
const At=T`<svg class="icon" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>`;class St extends(Q(ct(G))){static get styles(){return[super.styles,o`
        :host {
          position: fixed;
          right: 16px;
          left: initial;
          bottom: 16px;
          top: initial;
        }
      `]}static get properties(){return{icon:{type:Object},label:{type:String}}}render(){return T`
      <button data-descr=${(t=>null!=t?t:L)(this.label)} id="native">
        ${this.icon?this.icon:At}
      </button>
    `}}tt.register("ee-fab",St);class $t extends(Q(G)){static get styles(){return[super.styles,o`
        @-webkit-keyframes fadeIn {
          0%   { opacity: 0; }
          100% { opacity: 1; }
        }
        @-moz-keyframes fadeIn {
          0%   { opacity: 0; }
          100% { opacity: 1; }
        }
        @-o-keyframes fadeIn {
          0%   { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes fadeIn {
          0%   { opacity: 0; }
          100% { opacity: 1; }
        }

        :host(:not([no-animation])) {
          min-height: 100vh;
          overflow-x: hidden;
          -webkit-animation: fadeIn 0.3s ease-in; /* Safari 4+ */
          -moz-animation:    fadeIn 0.3s ease-in; /* Fx 5+ */
          -o-animation:      fadeIn 0.3s ease-in; /* Opera 12+ */
          animation:         fadeIn 0.3s ease-in; /* IE 10+, Fx 29+ */
        }

      `]}render(){return T`
      <slot></slot>
    `}}tt.register("ee-fade-in",$t);class Ct extends(Q(G)){static get styles(){return[super.styles,o`
        :host {
          display: flex;
          box-sizing: border-box;
          width: 100%;
          align-items: center;
          position: relative;
          height: var(--ee-toolbar-height, 100%);
          max-height: var(--ee-toolbar-max-height, 96px);
          padding: 0 5px;
          pointer-events: none;
          font-size: var(--ee-toolbar-font-size, 20px);
        }

        :host ::slotted(*) {
          pointer-events: auto;
        }

        :host ::slotted(.icon) {
          font-size: 0;
        }

        :host ::slotted([title]) {
          display: flex;
          margin: auto 20px;
        }

        :host ::slotted([bottom-item]) {
          position: absolute;
          top: unset;
          bottom: 0;
          right: 0;
          left: 0;
        }

        :host ::slotted([top-item]) {
          position: absolute;
          top: 0;
          bottom: unset;
          right: 0;
          left: 0;
        }

        :host ::slotted([spacer]) {
          margin-left: 64px;
        }
      `]}render(){return T`
      <slot></slot>
    `}}tt.register("ee-toolbar",Ct);const Vt=T`<svg class="icon" height="24" viewBox="0 0 24 24" width="24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></svg>`,Mt=T`<svg class="icon" height="24" viewBox="0 0 24 24" width="24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>`;class Pt extends(Q(G)){static get styles(){return[super.styles,o`
        :host {
          display: block;
          width: 100%;
        }

        div#header {
          display: flex;
          width: 100%;
          position: sticky;
          top: 0;
          right: 0;
          width: 100%;
          max-width: 100%;
          text-align: center;
        }

        :host([menu]) div[header-title],
        :host([back]) div[header-title] {
          padding-right: 46px;
        }

        :host([menu][back]) div[header-title]{
          padding-right: 92px;
        }

        div[header-title], div[middle] {
          display: block;
        }

        div[header-title] h3,
        div[header-title] h5 {
          margin-block-start: 0.2em;
          margin-block-end: 0.2em;
        }

        div[header-title] h5 {
          text-align: start;
          display: flex;
        }

        div[middle] h1, div[middle] h2,
        div[middle] h3, div[middle] h4,
        div[middle] h5, div[middle] h6 {
          margin-block-start: 0.1em;
          margin-block-end: 0.1em;
        }

        .toolbar .subtitle {
          color: var(--ee-header-secondary-color, grey);
        }
        .toolbar button.icon {
          appearance: none;
          -webkit-appearance: none;
          font-size: inherit;
          vertical-align: middle;
          background: transparent;
          border: none;
          cursor: pointer;
          -webkit-appearance: none;
          height: 40px;
          width: 40px;
          padding: 4px;
          margin: auto 3px;
          border: 1px solid transparent;
          color: var(--ee-header-color, black);
        }

        .toolbar button.icon:focus, .toolbar button.icon:hover {
          outline: 0;
          border: 1px solid var(--ee-header-lines-color, #bdbdbd);
        }

        .toolbar button.icon:active {
          outline: 0;
          border: 1px solid #bdbdbd;
          box-shadow: none
          /* animation: fadeIn 0.1s ease-in; */
        }

        .toolbar button, .toolbar button svg {
          color: var(--ee-header-color);
          fill: var(--ee-header-color);
        }

        .toolbar div.actions {
          position: absolute;
          right: 20px;
          display: flex;
        }

        ::slotted([slot=actions]) {
          display: flex
        }

        .toolbar div.actions ::slotted(*[slot="actions"]) a {
          line-height: unset
        }

        .toolbar div.controls {
          align-items: left;
        }

        .toolbar div.controls ::slotted(*[slot="actions"]) {
          z-index: var(--ee-header-actions-z-index, 2)
        }

      `]}static get properties(){return{back:{type:Boolean,reflect:!0},menu:{type:Boolean,reflect:!0},backEvent:{type:Function,attribute:"back-event"},menuEvent:{type:Function,attribute:"menu-event"},headerTitle:{type:String,attribute:"header-title"},headerSubtitle:{type:String,attribute:"header-subtitle"}}}constructor(){super(),this.headerTitle=""}menuEvent(){}backEvent(){}render(){return T`
      <div id="header">
        <ee-toolbar class="toolbar">
          <div class="controls">
            ${this.menu?T`<button class="icon" title="Menu" @click="${this._menuEvent}">${Mt}</button>`:""}
            ${this.back?T`<button class="icon" title="Back" @click="${this._backEvent}">${Vt}</button>`:""}
            <slot name="controls"></slot>
          </div>
          <div header-title>
          ${this.headerTitle?T`
                <h3>${this.headerTitle}</h3>
                <h5>${this.headerSubtitle?T`<div class="subtitle">${this.headerSubtitle}</div>`:""} <slot name="header-subtitle"></slot></h5>
            `:T`
              <slot name="header-title"></slot>
            `}
          </div>
          <div middle>
            <slot name="middle"></slot>
          </div>
          <div class="actions">
            <slot name="actions"></slot>
          </div>
        </ee-toolbar>
        <slot name="sub-toolbar"></slot>
      </div>
    `}_menuEvent(){this.dispatchEvent(new CustomEvent("menu-clicked",{bubbles:!0,composed:!0})),this.menuEvent()}_backEvent(){this.dispatchEvent(new CustomEvent("back-clicked",{bubbles:!0,composed:!0})),this.backEvent()}}tt.register("ee-header",Pt);class Tt extends(Q(G)){static get styles(){return[super.styles,o`
        :host {
          display: block;
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 56px;
          z-index: 100;
        }

        :host nav {
          display: flex;
          width: 100%;
          height: 56px;
          background: var(--ee-navbar-background, white);
          color: var(--ee-navbar-color, black);
          fill: var(--ee-navbar-color, black);
        }

        :host nav > ::slotted(*[nav-item]) {
          margin: 0 auto;
          padding: 8px 12px;
          display: block;
          position: relative;
          opacity: 0.7;
          height: 24px;
          min-width: 80px;
          max-width: 168px;
          text-align: center;
        }

        :host nav > ::slotted(*[nav-item])::after {
          content: attr(item-label);
          position: absolute;
          top: 24px;
          left: 50%;
          line-height: 12px;
          font-size: 12px;
          transform: translateX(-50%);
          margin-top: 6px;
          padding: 6px;
          white-space: nowrap;
          text-transform: uppercase;
        }

        :host nav > ::slotted(*[selected]) {
          opacity: 1;
        }
      `]}static get properties(){return{selected:{type:String,reflect:!0},selectedAttribute:{type:String},eventBubbles:{type:Boolean}}}constructor(){super(),this.selected="",this.eventBubbles=!1,this.selectedAttribute="name"}render(){return T`
      <nav>
        <slot @slotchange="${this._manageSlotted}"></slot>
      </nav>
    `}connectedCallback(){super.connectedCallback(),this.addEventListener("clicked-slot",this._fireSelectedEvent)}_manageSlotted(t){const e=t.currentTarget.assignedNodes();for(const t of e)t.addEventListener("click",this._clickedSlotted.bind(this))}_clickedSlotted(t){console.log("slot clicked",this.selectedAttribute),this.dispatchEvent(new CustomEvent("clicked-slot",{detail:{event:t,selected:t.currentTarget.getAttribute(this.selectedAttribute)}}))}_fireSelectedEvent(t){this.dispatchEvent(new CustomEvent("selected-changed",{detail:{selected:t.detail.selected}})),this.selected=t.detail.selected}}tt.register("ee-nav-bar",Tt);class Ot extends(Q(G)){static get styles(){return[super.styles,o`
        :host {
          display: block;
          position: relative;
        }

        :host([inline]) {
          display: inline-block;
        }

        :host([status="loading"]) ::slotted(*),
        :host([status="saving"]) ::slotted(*),
        :host([status="loading-error"]) ::slotted(*),
        :host([status="saving-error"]) ::slotted(*) {
          z-index: 0;
        }

        #overlay {
          display: none; /* Hide by default */
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          text-align: center;
          transition: background var(--ee-network-transition-duration, 200ms);
        }

        #overlay.overlay-loading {
          display: block;
          color: var(--ee-network-overlay-loading-color, #666);
          background-color: var(--ee-network-overlay-loading-background-color, rgba(190, 190, 190, 0.75));
          z-index: 10;
        }

        #overlay.overlay-error {
          display: block;
          cursor: pointer; /* Hint that the object is clickable */
          color: var(--ee-network-overlay-error-color, #c00);
          background-color: var(--ee-network-overlay-error-background-color, rgba(255, 0, 0, 0.25));
          z-index: 10;
        }

        #overlay #statusMessage {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 100%;
        }

        #content-wrapper.overlay-error,
        :host([status="overlay-error"]) {
          pointer-events: none;
          opacity: 0.25;
          min-height: 1.25rem; /* FIXME: find a proper value, this is made up */
        }
      `]}static get properties(){return{manageLoadingErrors:{type:Boolean,attribute:"manage-loading-errors"},manageSavingErrors:{type:Boolean,attribute:"manage-saving-errors"},retryMethod:{type:Function,attribute:!1},noReloadOnTap:{type:Boolean,attribute:"no-reload-on-tap"},status:{type:String,reflect:!0},statusMessages:{type:Object,attribute:"status-messages"},messenger:{type:Function,attribute:!1},overlayClass:{type:String,attribute:!1},response:{type:Function,attribute:!1},prefetch:{type:Function,attribute:!1}}}constructor(){super(),this.manageLoadingErrors=!1,this.manageSavingErrors=!1,this.retryMethod=null,this.noReloadOnTap=!1,this.status="loaded",this.statusMessages={loading:"Loading…",saving:"Saving…",error:"An error has occurred. Click here to try again."},this.lastInitObject=null,this.lastUrl=null,this.response=this.prefetch=()=>{}}render(){return T`
      <slot></slot>
      <div id="overlay" class="${this.overlayClass}" @click="${this._overlayClicked}">
        <div id="statusMessage">${this.statusMessages[this.status]}</div>
      </div>
    `}firstUpdated(){this._setOverlay()}_setOverlay(){switch(this.status){case"loaded":case"saved":this.overlayClass="clear";break;case"loading":case"saving":this.overlayClass="overlay-loading";break;case"loading-error":this.overlayClass=this.manageLoadingErrors?"overlay-error":"clear";break;case"saving-error":this.overlayClass=this.manageSavingErrors?"overlay-error":"clear"}}async _overlayClicked(t){if(!this.noReloadOnTap&&(t.stopPropagation(),t.preventDefault(),"loading-error"===this.status||"saving-error"===this.status))if(this.retryMethod)this.retryMethod(this.status,this.lastUrl,this.lastInitObject);else{const t=await this.fetch(this.lastUrl,this.lastInitObject);t.ok&&this.dispatchEvent(new CustomEvent("retry-successful",{detail:{url:this.lastUrl,initObject:this.lastInitObject,fetched:t},composed:!0,bubbles:!1}))}}response(){}messenger(){}async fetch(t,e={}){this.lastUrl=t,this.lastInitObject=e;const s="GET"===(e&&e.method&&e.method.toUpperCase()||"GET");e.url=t,this.status=s?"loading":"saving",this._setOverlay(),this.messenger({status:this.status,url:t,initObject:e,networkElement:this}),this.prefetch(e);try{const i=await fetch(e.url,e),r=i.clone(),o=await r.json();return i.ok?this.status=s?"loaded":"saved":this.status=s?"loading-error":"saving-error",this._setOverlay(),this.messenger({status:this.status,url:t,initObject:e,response:i,networkElement:this}),this.response(i,o,e),i}catch(i){throw this.status=s?"loading-error":"saving-error",this._setOverlay(),this.messenger({status:this.status,url:t,initObject:e,networkElement:this}),this.response(null,null,e),i}}}tt.register("ee-network",Ot);class Lt extends(Q(G)){static get styles(){return[o`
        :host {
          box-sizing: border-box;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          align-items: center;
          width: 100%;
          border: 1px solid transparent;
          border-bottom: var(--ee-row-border-bottom, 1px solid #777);
        }

        :host(:last-child) {
          border-color: transparent;
        }

        :host([header]) {
          height: var(--ee-row-header-height, 2em);
          box-sizing: border-box;
          font-weight: bold;
          border-bottom: var(--ee-row-header-border-bottom, 2px solid #777);
        }

        :host(:hover:not([header])) {
          border: 1px solid var(--ee-row-hover-border-color, #ddd);
          background: var(--ee-row-hover-background, #eee) !important;
        }

        :host([frozen]) {
          position: sticky;
          top: 0;
          background: var(--ee-row-background, white);
        }

        :host([frozen][footer]) {
          bottom: 0;
          top: unset;
          border-top: var(--ee-row-border-bottom, 1px solid #777);
        }

        :host([size=small]) ::slotted(ee-cell) {
          flex-basis: 100%;
        }

        :host([size=medium]) ::slotted(ee-cell),
        :host([size=large]) ::slotted(ee-cell) {
          flex-basis: 0;
        }

        :host([size=medium]) ::slotted(ee-cell[extra]),
        :host([size=small]) ::slotted(ee-cell[extra])
        {
          display:none !important;
        }

        :host([size=small]) ::slotted(ee-cell[header]) {
          display: none !important;
        }

        /* Drag and Drop Styles */
        #dnd-handle, ::slotted(#dnd-handle) {
          display: none;
          max-width: 18px;
          height: 18px;
          cursor: move;
        }

        :host([header]) .handle,
        :host([header]) ::slotted(.handle) {
          pointer-events: none;
          visibility: hidden;
        }

        :host([draggable]) .handle,
        :host([draggable]) ::slotted(.handle) {
          display: block;
        }
      `]}static get properties(){return{header:{type:Boolean}}}constructor(){super()}render(){return T`
      <slot></slot>
    `}}tt.register("ee-row",Lt);class It extends(Q(G)){static get styles(){return[super.styles,o`
        :host {
          display: block;
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 12px;
          background-color: var(--ee-snackbar-background-color);
          color: var(--ee-snackbar-color);
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
          text-align: center;
          will-change: transform;
          transform: translate3d(0, 100%, 0);
          transition-property: visibility, transform;
          transition-duration: 0.2s;
          visibility: hidden;
        }

        :host([active]) {
          visibility: visible;
          transform: translate3d(0, 0, 0);
        }

        :host([theme="success"]) {
          background-color: green;
          color: white;
        }

        :host([theme="info"]) {
          background-color: gray;
          color: white;
        }

        :host([theme="error"]) {
          background-color: red;
          color: white;
        }
        @media (min-width: 460px) {
          :host {
            width: 320px;
            margin: auto;
          }
        }
      `]}render(){return T`
      ${this.message}
    `}static get properties(){return{active:{type:Boolean,reflect:!0},message:{type:String}}}_eventListener(t){const e=t.detail.theme||"info";this.setAttribute("theme",e),this.message=t.detail.message,this.show()}connectedCallback(){super.connectedCallback(),document.addEventListener("snack-bar",this.boundEventListener)}disconnectedCallback(){super.disconnectedCallBack(),document.removeEventListener("snack-bar",this.boundEventListener)}constructor(){super(),this.active=!1,this.boundEventListener=this._eventListener.bind(this),this.intervalId=null}show(){this.active=!0,this.intervalId&&clearInterval(this.intervalId),this.intervalId=setInterval((()=>{this.active=!1}),3e3)}}tt.register("ee-snack-bar",It);class Ft extends(Q(G)){static get styles(){return[super.styles||[],o`
        :host {
          display: block;
          width: 100%;
        }

        :host([striped]) ::slotted(ee-row:nth-child(odd)) {
          background-color: var(--ee-table-striped-odd-color, white)
        }

        :host([striped]) ::slotted(ee-row:nth-child(even)) {
          background-color: var(--ee-table-striped-even-color, whitesmoke)
        }
      `]}static get properties(){return{small:{type:String},medium:{type:String}}}constructor(){super(),this.small=600,this.medium=1024}_changeRowsSize(t){const e=this.shadowRoot.querySelector("slot").assignedElements();for(const s of e)s.setAttribute("size",t)}_handleResize(){window.matchMedia(`(max-width: ${this.small}px)`).matches?this._changeRowsSize("small"):window.matchMedia(`(max-width: ${this.medium}px)`).matches?this._changeRowsSize("medium"):this._changeRowsSize("large")}firstUpdated(){super.firstUpdated(),this._handleResize()}connectedCallback(){super.connectedCallback();(window.visualViewport||window).addEventListener("resize",(()=>{this._handleResize()}))}render(){return T`
      <slot @slotchange="${this._slotChanged}"></slot>
    `}_slotChanged(){this._handleResize()}}tt.register("ee-table",Ft);class Rt extends(Q(G)){static get styles(){return[super.styles,o`
        :host {
          position: relative;
          border-bottom: 1px solid var(var(--ee-tabs-lines-color, #bbb));
        }

        :host nav {
        display: flex; 
          position: var(--ee-tabs-nav-position, sticky);
          top:0;
          width: 100%;
          border-bottom: 1px solid var(--ee-tabs-lines-color, #bbb);
          height: var(--ee-tabs-height, 32px);
          z-index: var(--ee-tabs-z-index, 1);
          overflow: var(--ee-tabs-nav-overflow);
        }

        :host #contentContainer {
          height: 100%;
          padding: var(--ee-tabs-content-padding, 10px);
        }

        #contentContainer ::slotted(*) {
          display: none;
        }

        #contentContainer ::slotted([active]) {
          display: initial;
        }

        nav ::slotted(*) .icon {
          fill: var(--ee-tabs-color, black);
        }

        nav > ::slotted(*[active]) .icon {
          fill: var(--ee-tabs-active-color, black);
        }

        nav > ::slotted(*) {
          color: var(--ee-tabs-color, black);
          text-decoration: none;
          line-height: var(--ee-tabs-height, 20px);
          padding: 4px 12px;
          border: unset;
          border-left: 0.5px solid var(--ee-tabs-lines-color, #bbb);
          border-right: 0.5px solid var(--ee-tabs-lines-color, #bbb);
          border-bottom: 4px solid var(--ee-tabs-background-color, #bbb);
          font-size: 0.9em;
          border-radius: 0;
          width: 100%;
          text-align: center;
          background-color:  var(--ee-tabs-background-color, whitesmoke);
          cursor: default;
        }

        :host([min-width-tabs]) nav > ::slotted(*) {
          max-width: max-content;
        }

        nav > ::slotted(:last-child) {
          border-right-color: var(--ee-tabs-background-color, #bbb)
        }

        nav > ::slotted(:first-child) {
          border-left-color: var(--ee-tabs-background-color, #bbb)
        }

        nav > ::slotted([active]) {
          color: var(--ee-tabs-active-color);
          border-bottom: 4px solid var(--ee-tabs-active-color, black);
          background-color: var(--ee-tabs-active-background-color, white);
          font-weight: bold;
        }

        nav > ::slotted(:focus),
        nav > ::slotted(:hover) {
          /* outline:0 ; */
          border-left: 0.5px solid var(--ee-tabs-lines-color, #bbb);
          border-right: 0.5px solid var(--ee-tabs-lines-color, #bbb);
          border-bottom: 4px solid var(--ee-tabs-active-color, black);
          filter: brightness(115%)
        }

        nav > ::slotted(:active) {
          background: #cccccc;
          border-bottom: 4px solid #bdbdbd;
          box-shadow: none;
        }

        nav > ::slotted([disabled]) {
          box-shadow: none
        }

        nav > ::slotted(.icon:active) {
          background: #cccccc;
          border: unset;
          border-radius: 50%;
        }

        nav > ::slotted(.icon:hover) svg, :host > ::slotted(:hover) svg {
          fill: var(--ee-tabs-color, black);
        }
      `]}static get properties(){return{useHash:{type:Boolean,attribute:"use-hash"},passive:{type:Boolean},default:{type:String},nameAttribute:{type:String,attribute:"name-attribute"},minWidthTabs:{type:Boolean,reflect:!0,attribute:"min-width-tabs"}}}constructor(){super(),this.nameAttribute="name",this.useHash=!1,this.passive=!1}render(){return T`
    <nav>
      <slot id="tabs" @slotchange="${this._manageSlottedTabs}"></slot>
    </nav>
    <div id="contentContainer">
      <slot name="content"></slot>
    </div>
    `}_allTabs(){return this.shadowRoot.querySelector("slot#tabs").assignedElements()}_workoutHash(){let t;return this.useHash&&(t=window.location.hash?window.location.hash.substr(1):this.default?this.default:this._allTabs()[0]),t}firstUpdated(){super.firstUpdated();const t=this._workoutHash();this.select(t,!1),window.addEventListener("popstate",(t=>{const e=this._workoutHash();this.useHash&&this.select(e,!0)}))}_isActive(t){return t.hasAttribute("active")}select(t,e=!0){let s;if("string"==typeof t&&(t=this._allTabs().find((e=>e.getAttribute(this.nameAttribute)===t))),t&&(e&&(s=this.shadowRoot.querySelector('slot[name="content"]').assignedElements(),this.passive?this._clearAll(this._allTabs()):this._clearAll(this._allTabs(),s)),t.toggleAttribute("active",!0),t.active=!0,!this.passive)){const e=t.getAttribute(this.nameAttribute),i=s.find((t=>t.getAttribute(this.nameAttribute)===e));i&&(i.toggleAttribute("active",!0),i.active=!0)}}_clearAll(t,e){const s=t.find(this._isActive.bind(this));if(s&&(s.toggleAttribute("active",!1),s.active=!1),!this.passive){const t=e.find(this._isActive.bind(this));t&&(t.toggleAttribute("active",!1),t.active=!1)}}_manageSlottedTabs(t){for(const t of this._allTabs())t.addEventListener("click",(t=>{this.select.bind(this)(t.currentTarget)})),t.setAttribute("tabindex",1);!this.passive&&this.default&&this.select(this.default,!0)}}tt.register("ee-tabs",Rt);class Nt extends(Q(G)){get reflectProperties(){return[...super.reflectProperties,...it]}get skipProperties(){return[...super.skipProperties,"elements","checkValidity","reportValidity","reset","submit"]}static get properties(){return{fetchingElement:{type:String,attribute:"fetching-element"},recordId:{type:String,attribute:"record-id"},setFormAfterSubmit:{type:Boolean,attribute:"set-form-after-submit"},resetFormAfterSubmit:{type:Boolean,attribute:"reset-form-after-submit"},validateOnLoad:{type:Boolean,attribute:"validate-on-load"},validateOnRender:{type:Boolean,attribute:"validate-on-render"},submitCheckboxesAsNative:{type:Boolean,attribute:"submit-checkboxes-as-native"},noAutoload:{type:Boolean,attribute:"no-autoload"},presubmit:{type:Object,attribute:!1},response:{type:Object,attribute:!1},incomingData:{type:Object,attribute:!1},dataLoaded:{type:Object,attribute:!1},extrapolateErrors:{type:Object,attribute:!1}}}constructor(){super(),this.validateOnLoad=!1,this.validateOnRender=!1,this.fetchingElement=null,this.submitCheckboxesAsNative=!1,this._boundRealtimeSubmitter=this._realTimeSubmitter.bind(this),this.attemptedFlight=!1,this.inFlightMap=new WeakMap,this.attemptedFlightMap=new WeakMap,this.submitObject={},this.setAttribute("role","form")}reportValidity(){let t=!0;for(const e of this.elements)"function"==typeof e.reportValidity&&(e.setCustomValidity(""),e.reportValidity()||(t=!1));return t}clearAllCustomValidity(t){for(const e of t)"function"==typeof e.setCustomValidity&&e.setCustomValidity("")}checkValidity(){let t=!0;for(const e of this.elements)"function"==typeof e.checkValidity&&(e.setCustomValidity(""),e.checkValidity()||(t=!1));return t}reset(){for(const t of this.elements){const e=this._getElementValueSource(t);"function"==typeof t.setCustomValidity&&t.setCustomValidity(""),this._radioElement(t)?t[e]=null!==t.getAttribute(e):this._checkboxElement(t)?t[e]=t.hasAttribute(e):t[e]=t.getAttribute(e)}}createSubmitObject(t){const e={};for(const s of t){const t=s.getAttribute("name");if(null!=t&&(void 0===e[t]&&!s.hasAttribute("no-submit")))if(this._checkboxElement(s))if(this.submitCheckboxesAsNative){const s=this.getFormElementValue(t);s&&(e[t]=s)}else e[t]=!!this.getFormElementValue(t);else"file"===s.getAttribute("type")||null!==s.getAttribute("as-file")?e[t]=s:e[t]=this.getFormElementValue(t)}return e}getFormElementValue(t){const e=[...this.elements].filter((e=>e.getAttribute("name")===t));if(e.length){if(1===e.length){const t=e[0],s=this._getElementValueSource(t);return this._checkboxElement(t)?t[s]?t.value?t.value:"on":void 0:(this._selectElement(t),t[s])}{if(e.filter((t=>!this._radioElement(t))).length)return void console.error("Duplicate name",t,"for non-radio elements");const s=e.find((t=>t[this._getElementValueSource(t)]));return s?s.value:void 0}}console.error("Trying to set",t,"but no such element in form")}setFormElementValue(t,e,s){const i=[...this.elements].find((s=>this._radioElement(s)?s.getAttribute("name")===t&&s.value===e:s.getAttribute("name")===t));if((!i||"hidden"===i.getAttribute("type"))&&s)return;const r=this._getElementValueSource(i);if(this._checkboxElement(i))i[r]=!!e;else if(this._radioElement(i)){i[r]=!0;const t=[...this.elements].filter((t=>i!==t&&this._radioElement(i)));for(const e of t)e[r]=!1}else this._selectElement(i)?e?i[r]=e:i.selectedIndex=0:"file"===i.getAttribute("type")||null!==i.getAttribute("as-file")?i.fileName=e:i[r]=e}_selectElement(t){return!(void 0===t.selectedIndex&&!t.hasAttribute("as-select"))}_checkboxElement(t){return"checkbox"===t.getAttribute("type")||!!t.hasAttribute("as-checkbox")}_radioElement(t){return"radio"===t.getAttribute("type")||!!t.hasAttribute("as-radio")}_getElementValueSource(t){return"checkbox"===t.getAttribute("type")||"radio"===t.getAttribute("type")||t.hasAttribute("as-checkbox")||t.hasAttribute("as-radio")?"checked":t.getAttribute("value-source")?t.getAttribute("value-source"):"value"}get elements(){return[...this.querySelectorAll("[name]")].filter((t=>"A"!==t.tagName))}async _allChildrenCompleted(){for(const t of this.elements)void 0!==t.updateComplete&&await t.updateComplete}_realTimeSubmitter(t){this.submit(t.target)}connectedCallback(){super.connectedCallback(),this._allChildrenCompleted().then((()=>{for(const t of this.elements){const e=null!==t.getAttribute("real-time"),s=t.getAttribute("real-time-event")||"input";e&&s&&t.addEventListener(s,this._boundRealtimeSubmitter)}}))}disconnectedCallback(){super.disconnectedCallback();for(const t of this.elements){if(null===t.getAttribute("real-time"))continue;const e=t.getAttribute("real-time-event");e&&t.removeEventListener(e,this._boundRealtimeSubmitter)}}async firstUpdated(){super.firstUpdated(),this.validateOnRender&&(await this._allChildrenCompleted(),this.reportValidity())}setFormElementValues(t){for(const e in t)this.setFormElementValue(e,t[e],!0)}setRecordObject(t){t={...t};const e={};for(const t of this.elements)e[t.getAttribute("name")]=t;for(const s of Object.keys(e))t[s]=this.getFormElementValue(s);return t}extrapolateErrors(t){return t}async presubmit(t){}async response(t,e,s){}async incomingData(t,e){}async dataLoaded(t,e){}_disableElements(t){this.__disabled=new WeakMap;for(const e of t)e.disabled||e.hasAttribute("disabled")||(e.setAttribute("disabled",!0),e.disabled=!0,this.__disabled.set(e,!0))}_enableElements(t){this.__disabled=this.__disabled||new WeakMap;for(const e of t)this.__disabled.has(e)&&(e.removeAttribute("disabled"),e.disabled=!1,this.__disabled.delete(e))}_fetchEl(t){if(t){let e;e=t;let s=!1;for(;e.parentElement;)if(e=e.parentElement,"EE-NETWORK"===e.tagName||e.classList.contains("network")){s=!0;break}return s?e:window}if(this.fetchingElement)return"string"==typeof this.fetchingElement?this.querySelector(`#${this.fetchingElement}`):this.fetchingElement;{let t=this.querySelector("ee-network");return t||(t=this.querySelector(".network")),t||window}}async _wait(t){return new Promise((e=>{setTimeout(e,t)}))}async submit(t){if(t){if(this.clearAllCustomValidity([t]),this.submitObject=this.createSubmitObject([t]),"function"==typeof t.reportValidity&&!t.reportValidity())return}else if(this.clearAllCustomValidity(this.elements),this.submitObject=this.createSubmitObject(this.elements),!this.reportValidity())return;const e=new CustomEvent("submit",{cancelable:!0,bubbles:!0,composed:!0});if(this.dispatchEvent(e),e.defaultPrevented)return;const s=t||this;if(this.inFlightMap.has(s))return void this.inFlightMap.set(s,{attempted:!0});this.inFlightMap.set(s,{attempted:!1});let i=this.getAttribute("method");i&&"PUT"!==i.toUpperCase()&&(i="POST");const r=null===i?this.recordId?"PUT":"POST":i,o=this.getAttribute("action");if(!o)throw new Error("The submitted form has no action URL set");const a={url:o+(this.recordId?`/${this.recordId}`:""),method:r,headers:{"Content-Type":this.getAttribute("enctype")||"application/json"},redirect:"follow",body:this.submitObject};if(await this.presubmit(a),t||this._disableElements(this.elements),"multipart/form-data"===a.headers["Content-Type"]){delete a.headers["Content-Type"];const t=a.body,e=new FormData;for(const s in t)if(t[s]instanceof HTMLElement){const i=t[s].files;for(const t of i)e.append(s,t)}else void 0===t[s]||null===t[s]?e.append(s,""):e.append(s,t[s]);a.body=e}let n,l,d=!1;const c="application/json"===a.headers["Content-Type"]&&"object"==typeof a.body&&null!==a.body?JSON.stringify(a.body):a.body;try{const e={...a,body:c},s=this._fetchEl(t);n=await s.fetch(a.url,e)}catch(t){console.log("ERROR!",t),d=!0}if(d){console.log("Network error!"),t||(this._enableElements(this.elements),await this._wait(0));const e=new CustomEvent("form-error",{detail:{type:"network"},bubbles:!0,composed:!0});this.dispatchEvent(e),await this.response(null,null,a)}else if(n.ok){const e=await n.json();let i;if(this.inFlightMap.has(s)&&(i=this.inFlightMap.get(s).attempted),await this.incomingData(e,"submit"),this.setFormAfterSubmit&&!i)if(t){const t=s.name;this.setFormElementValues({[t]:e[t]})}else this.setFormElementValues(e);t||(this._enableElements(this.elements),await this._wait(0)),!this.resetFormAfterSubmit||i||t||this.reset(),await this.dataLoaded(e,"submit");const r=new CustomEvent("form-ok",{detail:{response:n},bubbles:!0,composed:!0});this.dispatchEvent(r),await this.response(n,e,a)}else{let e;try{e=await n.json()}catch(t){e={}}l=this.extrapolateErrors(e)||{};const s=new CustomEvent("form-error",{detail:{type:"http",response:n,errs:l},bubbles:!0,composed:!0});if(this.dispatchEvent(s),t||(this._enableElements(this.elements),await this._wait(0)),l.errors&&l.errors.length){const t={};for(const e of this.elements)t[e.getAttribute("name")]=e;for(const e of l.errors){const s=t[e.field];s&&s.setCustomValidity&&(s.setCustomValidity(e.message),s.reportValidity())}}await this.response(n,l,a)}if(this.inFlightMap.has(s)){const e=this.inFlightMap.get(s).attempted;this.inFlightMap.delete(s),e&&this.submit(t)}}async updated(t){if(await super.updated(),!this.noAutoload&&t.has("recordId")&&void 0!==this.recordId&&null!==this.recordId)return this.preloadData()}async preloadData(){const t=this.getAttribute("action");let e;if(t){let s;await this.updateComplete,this._disableElements(this.elements);try{const i=this._fetchEl();e=await i.fetch(t+"/"+this.recordId),s=await e.json()}catch(t){console.error("WARNING: Fetching element failed to fetch"),s={}}await this.incomingData(s,"autoload"),this.setFormElementValues(s),this._enableElements(this.elements),await this._wait(0),this.validateOnLoad&&this.reportValidity(),await this.dataLoaded(s,"autoload")}}render(){return T`
      <slot></slot>
    `}}tt.register("ee-form",Nt);class zt extends(ut(pt(Q(J(ht(ct(G))))))){static get styles(){return[super.styles,o`
        :host {
          display: flex;
          height: 30px;
        }

        #native {
          margin: auto 20px;
        }
      `]}static get properties(){return{shownValue:{type:String,attribute:!1}}}firstUpdated(){super.firstUpdated(),this.shownValue=this.shadowRoot.querySelector("#native").value}render(){return T`
      <slot @slotchange="${this.slotChanged}" id="range-amount-before" name="range-amount-before"></slot>
      ${this.ifLabelBefore}
      ${this.ifValidationMessageBefore}
      <input @change=${this.updateShownValue} type="range" id="native" real-time-event="input">
      ${this.ifValidationMessageAfter}
      ${this.ifLabelAfter}
      <slot @slotchange="${this.slotChanged}" id="range-amount-after" name="range-amount-after"></slot>
    `}_updateSpanInSlot(t,e){if(t){const s=t.assignedElements()[0];if(s){const t=s.querySelector("span#range-amount");t&&(t.innerHTML=Number(e))}}}updateShownValue(t){let e;this.shownValue=t.srcElement.value,e=this.shadowRoot.querySelector("slot#range-amount-before"),this._updateSpanInSlot(e,this.shownValue),e=this.shadowRoot.querySelector("slot#range-amount-after"),this._updateSpanInSlot(e,this.shownValue)}slotChanged(t){this._updateSpanInSlot(t.srcElement,this.shownValue)}}tt.register("ee-input-range",zt);class Ut extends(ut(pt(Q(ct(G))))){get skipAttributes(){return[...super.skipAttributes,"form"]}get reflectProperties(){return[...super.reflectProperties,...ot]}static get styles(){return[super.styles||[],o`
      /*  This is necessary as a workaround to this chrome bug:
      /   https://bugs.chromium.org/p/chromium/issues/detail?id=1061240&can=2&q=status%3Aunconfirmed&colspec=ID%20Stars%20Area%20Feature%20Status%20Summary%20Modified%20OS&sort=-id 
      */
        :host([disabled]) {
          pointer-events: none;
        }
      `]}render(){return T`
      <button @click="${this._clicked}" id="native">
        <slot></slot>
      </button>
    `}_clicked(t){"submit"===this.getAttribute("type")&&(this.form.requestSubmit?this.form.requestSubmit():this.form.submit())}}tt.register("nn-button",Ut);class Dt extends(ut(pt(ht(ct(G))))){render(){return T`
      <input type="button" id="native">
        <slot></slot>
     `}constructor(){super()}}tt.register("nn-input-button",Dt);class jt extends(ut(pt(Q(J(ht(ct(G))))))){render(){return T`
      ${this.ifLabelBefore}
      ${this.ifValidationMessageBefore}
      <input type="${this.type||"text"}" id="native" real-time-event="input" >
      ${this.ifValidationMessageAfter}
      ${this.ifLabelAfter}
      <slot id="datalist-slot" name="datalist"></slot>
    `}constructor(){super(),this._boundKeyEventListener=this._eventListener.bind(this)}static get properties(){return{submitOnEnter:{type:Boolean,attribute:"submit-on-enter"}}}_eventListener(t){this.form&&13===t.keyCode&&(1===this.form.elements.length||this.submitOnEnter)&&this.form.submit()}afterSettingProperty(t,e){super.afterSettingProperty(t,e),"value"===t&&this.internals&&this.internals.setFormValue(this.value)}firstUpdated(){super.firstUpdated(),this.addEventListener("keydown",this._boundKeyEventListener);const t=this.shadowRoot.querySelector("#datalist-slot"),e=t&&t.assignedElements()[0],s=e&&e.children;if(s&&s.length){const t=document.createElement("datalist");t.setAttribute("id","_datalist"),this.setAttribute("list","_datalist");for(const e of s){const s=document.createElement("option");s.setAttribute("value",e.getAttribute("value")),t.appendChild(s)}this.shadowRoot.appendChild(t)}}}tt.register("nn-input-text",jt);class Bt extends jt{constructor(){super(),this.type="color"}}tt.register("nn-input-color",Bt);class Ht extends jt{constructor(){super(),this.type="date"}}tt.register("nn-input-date",Ht);class qt extends jt{constructor(){super(),this.type="datetime-local"}}tt.register("nn-input-datetime-local",qt);class Wt extends jt{constructor(){super(),this.type="email"}}tt.register("nn-input-email",Wt);class Kt extends(ut(Q(ht(ct(G))))){static get styles(){return[super.styles,o`
        /* From https://zellwk.com/blog/hide-content-accessibly/ */
        [hidden] {
          border: 0;
          clip: rect(0 0 0 0);
          height: auto; /* new - was 1px */
          margin: 0; /* new - was -1px */
          overflow: hidden;
          padding: 0;
          position: absolute;
          width: 1px;
          white-space: nowrap; /* 1 */
        }
      `]}static get properties(){return{hideNative:{type:Boolean},fileName:{type:String},manyFilesText:{type:String,attribute:"many-files-text"},title:{type:String}}}constructor(){super(),this.manyFilesText="Multiple",this.title="",this.toggleAttribute("as-file",!0)}render(){return T`
      <input type="file" id="native" @change="${this.fileNameChanged}" ?hidden=${this.hideNative} title=${this.title}>
      ${this.fileName}
    `}fileNameChanged(t){const e=this.shadowRoot.querySelector("#native"),s=e.value;e.files.length>1?(this.fileName=this.manyFilesText+` (${e.files.length})`,this.title=Array.from(e.files).map((t=>t.name)).join("\n")):1===e.files.length?(this.fileName=s.slice(s.lastIndexOf("\\")+1),this.title=this.fileName):(this.fileName="",this.title="")}}tt.register("nn-input-file",Kt);class Yt extends jt{constructor(){super(),this.type="month"}}tt.register("nn-input-month",Yt);class Xt extends jt{constructor(){super(),this.type="number"}}tt.register("nn-input-number",Xt);class Gt extends jt{constructor(){super(),this.type="password"}}tt.register("nn-input-password",Gt);class Jt extends(ut(pt(J(Q(ht(ct(G))))))){render(){return T`
      ${this.ifLabelBefore}
      ${this.ifValidationMessageBefore}
      <input as-radio value-source="checked" @change="${this._excludeOthers}" type="radio" id="native" real-time-event="input">
      ${this.ifValidationMessageAfter}
      ${this.ifLabelAfter}
    `}firstUpdated(){super.firstUpdated(),this.setAttribute("type","radio")}_excludeOthers(t){const e=[...this.form.children].filter((t=>t!==this&&!!t.form&&t.getAttribute("name")&&t.getAttribute("name")===this.getAttribute("name")&&("radio"===t.getAttribute("type")||null!==t.getAttribute("as-radio"))));for(const t of e){const e=t.getAttribute("value-source")||"checked";t[e]=!1}this.internals&&this.internals.setFormValue(this.checked?this.value:null)}}tt.register("nn-input-radio",Jt);class Zt extends jt{constructor(){super(),this.type="range"}}tt.register("nn-input-range",Zt);class Qt extends jt{constructor(){super(),this.type="search"}}tt.register("nn-input-search",Qt);class te extends(ut(pt(ht(ct(G))))){render(){return T`
      <input @click="${this._formSubmit}" type="submit" id="native">
    `}_formSubmit(t){this.form&&this.form.submit()}}tt.register("nn-input-submit",te);class ee extends jt{constructor(){super(),this.type="tel"}}tt.register("nn-input-tel",ee);class se extends jt{constructor(){super(),this.type="time"}}tt.register("nn-input-time",se);class ie extends jt{constructor(){super(),this.type="url"}}tt.register("nn-input-url",ie);class re extends jt{constructor(){super(),this.type="week"}}tt.register("nn-input-week",re);class oe extends(Q(J(ct(G)))){get reflectProperties(){return[...super.reflectProperties,...lt]}render(){return T`
      ${this.ifLabelBefore}
      ${this.ifValidationMessageBefore}
      <meter id="native" real-time-event="input"></meter>
      ${this.ifValidationMessageAfter}
      ${this.ifLabelAfter}
    `}}tt.register("nn-meter",oe);class ae extends(Q(J(ct(G)))){static get properties(){return{}}static get styles(){return[o`
      progress {
        display: block; /* default: inline-block */
        width: 100%;
        margin: auto;
        padding: 2px;
        border: 0 none;
        background: #777;
        border-radius: 14px;
        box-shadow: inset 0px 1px 1px rgba(0,0,0,0.5), 0px 1px 0px rgba(255,255,255,0.2);
      }
      progress::-moz-progress-bar {
        border-radius: 12px;
        background: var(--nn-progress-color, #fff);
        box-shadow: inset 0 -2px 4px rgba(0,0,0,0.4), 0 2px 5px 0px rgba(0,0,0,0.3);
        
      }
      /* webkit */
      @media screen and (-webkit-min-device-pixel-ratio:0) {
        progress {
          height: 10px;
        }
      }
      progress::-webkit-progress-bar {
        background: transparent;
      }  
      progress::-webkit-progress-value {  
        border-radius: 12px;
        background: var(--nn-progress-color, #fff);
        box-shadow: inset 0 -2px 4px rgba(0,0,0,0.4), 0 2px 5px 0px rgba(0,0,0,0.3); 
      } 
      `]}get reflectProperties(){return[...super.reflectProperties,...dt]}render(){return T`
      ${this.ifLabelBefore}
      ${this.ifValidationMessageBefore}
      <progress id="native" real-time-event="input"></progress>
      ${this.ifValidationMessageAfter}
      ${this.ifLabelAfter}
    `}}tt.register("nn-progress",ae);class ne extends(ut(pt(J(ht(ct(G)))))){get reflectProperties(){return[...super.reflectProperties,...at]}render(){return T`
      ${this.ifLabelBefore}
      ${this.ifValidationMessageBefore}
      <div style="display: none">
        <slot id="slot" @slotchange="${this.refreshOptions}"></slot>
      </div>
      <select id="native" real-time-event="selected"></select>
      ${this.ifValidationMessageAfter}
      ${this.ifLabelAfter}
    `}async refreshOptions(t){const e=this.shadowRoot.querySelector("#native"),s=this.shadowRoot.querySelector("#slot");if(!e||!s)return;const i=s.assignedElements();e.innerHTML="";for(const t of i)e.appendChild(t.cloneNode(!0));this.value=this.value}}tt.register("nn-select",ne);class le extends(Q(ut(pt(J(ht(ct(G))))))){get reflectProperties(){return[...super.reflectProperties,...nt]}render(){return T`
      ${this.ifLabelBefore}
      ${this.ifValidationMessageBefore}
      <textarea name="" id="native" real-time-event="input"></textarea>
      ${this.ifValidationMessageAfter}
      ${this.ifLabelAfter}
    `}}tt.register("nn-textarea",le);const de=t=>class extends t{static get stylePatterns(){return{requiredLabelAsterisk:o`
          :host([required][label]) label div#label-text::after {
            content: '*';
            padding-left: 2px;
            position: relative;
          }
        `,hoverStyle:o`
          :host(:hover) {
            --mat-theme-box-shadow: var(--mat-theme-box-shadow2);
          }

          :host([disabled]:hover) {
            --mat-theme-box-shadow: none;
          }
        `,focusStyle:o`
          :host([has-focus]), :host([has-focus][outlined]) {
            --mat-theme-border: 2px solid var(--mat-primary-color);
            --mat-label-color: var(--mat-primary-color);
          }

          :host([has-focus]) #native {
            padding-bottom: -1px;
          }
        `,inputField:o`
          :host {
            position: relative;
            padding: 0 12px;
            padding-bottom: 16px;
            margin: 5px;
            min-width: var(--mat-form-element-min-width, fit-content);
            font-family: var(--font-family);
          }

          :host([disabled]) {
            --mat-input-color: var(--mat-boundaries-color, #999)
          }

          :host([dense]) {
            --mat-form-element-height: 40px;
            padding-bottom: 8px;
          }

          :host([dense]) #native {
            padding: var(--mat-form-element-padding, 14px 10px 0);
          }

          :host([outlined]) {
            --mat-background: white;
            --mat-theme-border: 2px solid #ccc;
          }

          :host([outlined]) #native {
            border-bottom: unset;
            border: var(--mat-input-border, var(--mat-theme-border));
            border-radius: var(--mat-input-border-radius, 4px);
          }

          #native {
            box-sizing: border-box;
            appearance: none;
            -moz-appearance: none;
            -webkit-appearance: none;
            box-sizing: border-box;
            display: block;
            border-radius: var(--mat-input-border-radius, 4px 4px 0 0);
            border-width: 0;
            border-style: solid;
            border-color: transparent;
            border-bottom: var(--mat-input-border, var(--mat-theme-border));
            color: var(--mat-input-color, inherit);
            background-color: var(--mat-background, #eee);
            width: 100%;
            font-size: 14px;
            padding:  var(--mat-form-element-padding, 20px 16px 0);
            height: var(--mat-form-element-height);
            box-shadow: var(--mat-theme-box-shadow);
          }

          #native:focus,
          #native:active {
            outline: none
          }

          #native::selection {
            background-color: var(--mat-background-dark);
          }

          :host(:not([disabled])) #native:invalid {
            background-color: var(--mat-error-color);
            color: var(--mat-error-text);
            border-color: var(--mat-error-text);
          }

          #native:disabled {
            filter: saturate(0);
            opacity: 0.85;
          }

          #native:disabled:hover {
            background-color: initial !important;
          }
        `,inputLabel:o`
           label {
            position: absolute;
            display: inline-flex;
            font-size: var(--mat-label-font-size, 14px);
            border: var(--mat-label-border, none);
            color: var(--mat-label-color,  var(--mat-primary-color-light));
            padding: var(--mat-label-padding, 0 6px);
            margin-left: var(--mat-label-margin-left, 8px);
            min-width: fit-content;
            white-space: nowrap;
            --half-height: calc(var(--mat-form-element-height) / 2);
            top: calc(var(--half-height) + 8px);
            transform: translateY(-50%);
            left: 12px;
            will-change: transform;
            transition: transform 0.1s ease-in-out;
          }

          :host([dense]) label {
            top: var(--half-height);
            left: var(--mat-label-margin-left, 8px);
          }

          :host(:not([disabled])) #native:invalid + label,
          :host(:not([disabled])) #native:invalid ~ label {
            background-color: none;
            --mat-label-color: darkred;
          }
        `,floatingLabel:o`
          :host([has-value]) label,
          #native:focus ~ label,
          #native:placeholder-shown ~ label {
            transform: translateY(calc(var(--half-height) / -1)) scale(0.8);
            transform-origin: 0 0;
            transition: transform 0.1s ease-in-out, background 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }

          :host([dense][has-value]) label,
          :host([dense]) #native:focus ~ label,
          :host([dense]) #native:placeholder-shown ~ label {
            background: var(--mat-label-background, transparent)
          }

          :host([outlined]:not([dense][has-value])) label,
          :host([outlined]:not([dense])) #native:focus ~ label,
          :host([outlined]:not([dense])) #native:placeholder-shown ~ label {
            transform: translateY(calc(var(--half-height) / -1)) scale(0.8);
            transform-origin: 0 0;
            background: var(--mat-label-background, transparent);
          }
        `,fixedLabel:o`
          label, #native:focus ~ label,
          :host([has-value]) label,
          #native:placeholder-shown ~ label {
            transform: translateY(calc(var(--half-height) / -1)) scale(0.8);
            transform-origin: 0 0;
          }

          :host([dense]) label, 
          :host([dense]) #native:focus ~ label,
          :host([dense]) :host([has-value]) label,
          :host([dense]) #native:placeholder-shown ~ label
           {
            top: var(--half-height);
            transform: translateY(calc(var(--half-height) / -1)) scale(0.8);
            left: 8px;
          }

        `,errorMessage:o`
          span.error-message {
            position: absolute;
            bottom: 0;
            left: 16px;
            font-size: 80%;
            white-space: nowrap;
            opacity: 0;
            line-height: 0;
          }

          :host(:not([disabled])) #native:invalid ~ span.error-message {
            opacity: 1;
          }
        `,hideNativeWidget:o`
          input {
            position: unset;
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;
          }
        `}}static get styles(){return[super.styles||[],o`
          @-webkit-keyframes fadeIn {
            0%   { opacity: 0; }
            100% { opacity: 1; }
          }
          @-moz-keyframes fadeIn {
            0%   { opacity: 0; }
            100% { opacity: 1; }
          }
          @-o-keyframes fadeIn {
            0%   { opacity: 0; }
            100% { opacity: 1; }
          }
          @keyframes fadeIn {
            0%   { opacity: 0; }
            100% { opacity: 1; }
          }

          @-webkit-keyframes fadeOut {
            0%   { opacity: 1; }
            100% { opacity: 0; }
          }
          @-moz-keyframes fadeOut {
            0%   { opacity: 1; }
            100% { opacity: 0; }
          }
          @-o-keyframes fadeOut {
            0%   { opacity: 1; }
            100% { opacity: 0; }
          }
          @keyframes fadeOut {
            0%   { opacity: 1; }
            100% { opacity: 0; }
          }

          :host {
            /* These properties as common to all elements and important to enable proper styling of native elements. */
            appearance: none;
            -moz-appearance: none;
            -webkit-appearance: none;
            box-sizing: border-box;
            /* These are the custom properties that make it possible to apply light themes, by changing colors and a few properties, like borders and shadows. */
            /* Default font */
            --mat-font-family: Roboto, sans-serif;
            /* The primary and secondary colors are applied to color accents and help with visual context. (Color Guidelines)[https://material.io/design/color/the-color-system.html#color-theme-creation] */
            --mat-primary-color: #455a64;
            --mat-primary-color-light: #718792;
            --mat-primary-color-dark: #1c313a;
            --mat-secondary-color: #512da8;
            --mat-secondary-color-light: #8559da;
            --mat-secondary-color-dark: #140078;
            --mat-boundaries-color: #999;
            --mat-primary-text: #333;
            --mat-secondary-text: #000;
            --mat-text-on-dark: #fff;
            --mat-text-on-light: #000;
             --mat-error-color: pink;
            --mat-error-text: darkred;
            /* Other aspects of the elements are used to convey the general look and feel of the theme. Material Design leans heavily on border and shadows. These are the default values taken from the guidelines. */
            --mat-theme-border-style: solid;
            --mat-theme-border-width: 1px;
            --mat-theme-border-color: var(--mat-boundaries-color);
            --mat-theme-border-radius: 4px;
            --mat-theme-border: var(--mat-theme-border-width) var(--mat-theme-border-style) var(--mat-theme-border-color);
            /* TPE uses five elevation levels */
            --mat-theme-box-shadow: none;
            --mat-theme-box-shadow1: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
            --mat-theme-box-shadow2: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            --mat-theme-box-shadow3: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
            --mat-theme-box-shadow4: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
            --mat-theme-box-shadow5: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
            --mat-theme-shadow-transition: box-shadow 0.3s cubic-bezier(.25,.8,.25,1);
            --mat-form-element-height: 56px;
            --mat-form-element-min-width: 280px;
            --mat-background: white;
            --mat-background-dark: #ccc;
            --mat-label-background: transparent;
          }

          :host([hidden]) {
            display: none;
          }

        `]}};class ce extends(de(et)){static get styles(){return[super.styles,o`
      `]}}tt.register("ee-autocomplete-input-spans",ce);class he extends(de(bt)){static get properties(){return{labelPosition:{type:String,attribute:!1},validationMessage:{type:String,attribute:!1}}}constructor(){super(),this.labelPosition="after",this.validationMessagePosition="after",this.label=""}firstUpdated(){super.firstUpdated&&super.firstUpdated(),this.shadowRoot.querySelector("label").addEventListener("click",(t=>{t.stopPropagation()}))}static get styles(){return[super.styles,super.stylePatterns.errorMessage,super.stylePatterns.hideNativeWidget,super.stylePatterns.requiredLabelAsterisk,o`
        :host {
          display: block;
          position: relative;
          padding-left: 24px;
          margin-bottom: 12px;
          cursor: pointer;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }

        :host::after:not(:disabled) {
          content: '';
          user-select: none;
          position: absolute;
          height: 8px;
          width: 8px;
          border-radius: 50%;
          left: 5px;
          top: 5px;
          will-change: transform;
        }

        :host(:hover:not(:disabled))::after {
          background: var(--mat-primary-color);
          opacity: 0.1;
          transform: scale(4);
          transition: all 0.3s ease-in-out;
        }

        :host([has-focus])::after {
          background: var(--mat-primary-color);
          opacity: 0.4 !important;
          transform: scale(4);
          transition: all 0.3s ease-in-out;
        }

        div#label-text {
          padding: var(--nn-checkbox-label-padding);
        }

        #native:invalid + label, #native:invalid ~ label {
          background-color: none;
          --mat-label-color: darkred;
        }

        label::before { /* Background box */
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          height: 15px;
          width: 15px;
          border: 2px solid var(--mat-boundaries-color);
          border-radius: 3px;
          transition: background-color 0.3s ease-in-out;
        }

        #native:checked ~ label::before {
          border-color: var(--mat-primary-color);
          background-color:  var(--mat-primary-color);
          transition: background-color 0.3s ease-in-out;
        }

        :host(:hover:not(:disabled)) label::before {
          filter: brightness(135%);
          transition: filter 0.3s ease-in-out;
          box-shadow: var(--mat-theme-box-shadow2);
        }

        #native:focus ~ label::before {
          box-shadow: var(--mat-theme-box-shadow2);
          border-color: var(--mat-primary-color);
          filter: brightness(135%);
        }

        #native:not([checked]):hover:not(:disabled) ~ label::before {
          filter: brightness(150%);
          background-color: var(--mat-primary-color);
          transition: background-color 0.3s ease-in-out;
        }

        label::after { /* Checkmark */
          content: "";
          position: absolute;
          left: 6px;
          top: 2px;
          opacity: 0;
          will-change: transform, opacity;
          transition: opacity 0.3s ease-out;
        }

        #native:checked ~ label::after {
          display: block;
          width: 5px;
          height: 10px;
          opacity: 1;
          border: solid white;
          border-radius: 2px;
          border-width: 0 3px 3px 0;
          -webkit-transform: rotate(405deg);
          -ms-transform: rotate(405deg);
          transform: rotate(405deg);
          transition: transform 0.3s ease-in-out, opacity 0.3s ease-in;
        }
      `]}}tt.register("nn-input-checkbox",he);class ue extends(de(gt)){static get styles(){return[super.styles,o`
      `]}}tt.register("ee-autocomplete-item-country",ue);class pe extends(de(mt)){static get styles(){return[super.styles,o`
      `]}}tt.register("ee-autocomplete-item-country-view",pe);class be extends(de(vt)){static get styles(){return[super.styles,o`
      `]}}tt.register("ee-autocomplete-item-email",be);class ge extends(de(ft)){static get styles(){return[super.styles,o`
      `]}}tt.register("ee-autocomplete-item-email-view",ge);class me extends(de(yt)){static get styles(){return[super.styles,o`
      `]}}tt.register("ee-autocomplete-item-li",me);class ve extends(de(xt)){static get styles(){return[super.styles,o`
      `]}}tt.register("ee-autocomplete-item-li-view",ve);class fe extends(de(wt)){static get styles(){return[super.styles,o`
      `]}}tt.register("ee-autocomplete",fe);class ye extends(de(kt)){static get styles(){return[super.styles,o`
        :host {
          display: flex;
        }

      `]}}tt.register("ee-cell",ye);class xe extends(de(_t)){static get styles(){return[super.styles,o`
      `]}}tt.register("ee-drawer",xe);class we extends(de(St)){static get styles(){return[super.styles,o`
        button:focus, button:active {
          outline:0 ;
        }

        button:active {
          border: none;
          filter: brightness(130%);
        }

        button[disabled] {
          box-shadow: none;
          opacity: 0.5;
          pointer-events: none;
        }

        button.icon:active {
          background: #cccccc;
          border: unset;
        }

        button {
          cursor: pointer;
          height: 56px;
          width: 56px;
          margin: 6px;
          border-radius: 50%;
          box-shadow: 4px 2px 10px 0 rgba(0,0,0,0.12);
          padding-top: 5px;
          fill: var(--mat-fab-color, white);
          background-color: var(--mat-fab-background, black);
          color: var(--mat-fab-color, white);
        }

        :host([mini]) button {
          height: 40px;
          width: 40px;
        }

        button[data-descr]::after {
          content: '';
          right: 0;
          display: inline-block;
          opacity: 0;
          position: absolute;
          width: 0;
          transform: translateY(-50%);
          top: 50%;
          text-align: center;
          white-space: nowrap;
          padding: 10px 16px;
        }

        button[data-descr]:hover::after {
          content: attr(data-descr);
          width: fit-content;
          opacity: 1;
          background-color: var(--mat-fab-background, black);
          color: var(--mat-fab-color, white);
          border-radius: calc(1em + 20px);
          z-index: 1;
          right: 105%;
          font-size: 1em;
          transition: all 0.3s ease-in-out;
        }

        button svg {
          width: var(--mat-fab-icon-width, 24px);
          height: var(--mat-fab-icon-height, 24px);
        }
      `]}}tt.register("ee-fab",we);class ke extends(de($t)){static get styles(){return[super.styles,o`
      `]}}tt.register("ee-fade-in",ke);class Ee extends(de(Pt)){static get styles(){return[super.styles,o`
      `]}}tt.register("ee-header",Ee);class _e extends(de(Tt)){static get styles(){return[super.styles,o`
      `]}}tt.register("ee-nav-bar",_e);class Ae extends(de(Ot)){static get styles(){return[super.styles,o`
      `]}}tt.register("ee-network",Ae);class Se extends(de(Lt)){static get styles(){return[super.styles,o`
      `]}}tt.register("ee-row",Se);class $e extends(de(It)){static get styles(){return[super.styles,o`
      `]}}tt.register("ee-snack-bar",$e);class Ce extends(de(Ft)){static get styles(){return[super.styles,o`
      `]}}tt.register("ee-table",Ce);class Ve extends(de(Rt)){static get styles(){return[super.styles,o`
        :host {
          --ee-tabs-selected-color: var(--mat-primary-color);
          --ee-tabs-active-color: var(--mat-primary-color);
          --ee-tabs-color: var(--mat-primary-text);
        }

        :host nav > ::slotted(:hover) {
          box-shadow: var(--mat-theme-box-shadow4);
        }

        :host nav > ::slotted(*) {
          border-bottom: 0 !important;
          transition: all 0.3s ease-in-out;
          position: relative;
          box-sizing: border-box;
        }

        :host nav > ::slotted([active]) {
          color: var(--ee-tabs-selected-color);
          border-bottom: 0;
        }

        :host nav > ::slotted(:focus),
        :host nav > ::slotted(:hover) {
          outline: 0;
          border-bottom: 0;
        }

        :host nav > ::slotted(*)::after,
        :host nav > ::slotted(:not([active]))::after {
          content: '';
          position: absolute;
          transition: height 0.3s ease-in-out, left 0.3s ease-in-out, right 0.3s ease-in-out;
          bottom: 0;
          left: 50%;
          right: 50%;
          height: 1px;
          background-color: var(--ee-tabs-selected-color);
        }

        :host nav > ::slotted(:focus)::after,
        :host nav > ::slotted(:hover)::after {
          height: 1px;
          left: 0.5px;
          right: 0.5px;
          transition: height 0.3s ease-in-out, left 0.3s ease-in-out, right 0.3s ease-in-out;
        }

        :host nav > ::slotted([active])::after {
          content: '';
          background-color: var(--ee-tabs-active-color);
          left: 0.5px;
          right: 0.5px;
          bottom: 0;
          height: 4px;
          transition: height 0.3s ease-in-out, left 0.3s ease-in-out, right 0.3s ease-in-out;;
        }

        :host nav > ::slotted(:active) {
          background: #cccccc;
          border-bottom: 0;
          box-shadow: none;
        }
      `]}}tt.register("ee-tabs",Ve);class Me extends(de(Ct)){static get styles(){return[super.styles,o`
      `]}}tt.register("ee-toolbar",Me);class Pe extends(de(Nt)){static get styles(){return[super.styles,o`
        :invalid {
          border: unset;
          border-bottom: var(--mat-input-border, var(--mat-theme-border));
        }

        ::slotted(*) fieldset {
          border-radius: 5px;
          border-style: solid;
          padding: 16px;
        }

        ::slotted(*) legend {
          padding-inline-start: 10px;
          padding-inline-end: 10px;
        }
      `]}}tt.register("en-form",Pe);class Te extends(de(zt)){static get properties(){return{labelPosition:{type:String,attribute:!1},validationMessage:{type:String,attribute:!1}}}constructor(){super(),this.labelPosition="after",this.validationMessagePosition="after"}static get styles(){return[super.styles,super.stylePatterns.inputField,super.stylePatterns.errorMessage,o`
        ::slotted(#range-amount) {}
      `]}}tt.register("en-input-range",Te);class Oe extends(de(Ut)){static get styles(){return[super.styles,o`
        :host {
          display: block;
          width: max-content;
          padding: 4px 10px;
        }

        button {
          display: var(--nn-button-display, inline);
          white-space: nowrap;
          height: var(--nn-button-height, 30px);
          -webkit-appearance: none;
          background-color: var(--mat-primary-color);
          border-radius: var(--nn-button-border-radius, 4px);
          border: var(--nn-button-border, var(--mat-theme-border));
          border-color: transparent;
          text-transform: uppercase;
          font-size: 14px;
          color: var(--nn-button-color, var(--mat-text-on-dark));
          fill: var(--nn-button-color, var(--mat-text-on-dark));
          border-image: none;
          width: 100%;
          align-items: center;
        }

        :host ::slotted(*) {
          vertical-align: middle;
          text-decoration: none !important;
        }

        #native:disabled {
          filter: saturate(0);
          opacity: 0.85;
        }

        #native:disabled:hover {
          background-color: grey;
          filter: brightness(130%);
        }

        button:hover {
          filter: brightness(130%);
        }

        button:active {
          outline: none;
        }

        button:focus {
          border-color: var(--mat-primary-color, rgba(255, 255, 255, 0.7));
          background-color: var(--mat-primary-color-light);
          filter: brightness(115%);
        }

        button:active {
          transition: all 0.2s ease-out;
          border-style: inset;
          border-color: var(--mat-primary-color);
        }

        :host([text]:not([outlined])) button,
        :host([text]:not([raised])) button {
          background-color: transparent;
          color: var(--nn-button-color, var(--mat-primary-color));
          fill: var(--nn-button-color, var(--mat-primary-color));
        }

        :host([text]:not([outlined])) button:focus,
        :host([text]:not([raised])) button:focus {
          background-color: transparent;
          color: var(--nn-button-color, var(--mat-primary-color));
          fill: var(--nn-button-color, var(--mat-primary-color));
          box-shadow: var(--mat-theme-box-shadow2);
        }

        :host([text]:not([outlined])) button:active,
        :host([text]:not([raised])) button:active {
          border-style: solid;
          border-width: 1px;
          border-color: transparent;
        }

        :host([text]:not([outlined])) button:hover,
        :host([text]:not([raised])) button:hover {
          background-color: var(--mat-primary-color-light);
          color: var(--mat-primary-color-dark);
          fill: var(--mat-primary-color-dark);
        }

        :host([outlined]:not([text])) button,
        :host([outlined]:not([raised])) button {
          background-color: transparent;
          color: var(--nn-button-color, var(--mat-primary-color));
          fill: var(--nn-button-color, var(--mat-primary-color));
          border: var(--nn-button-border, var(--mat-theme-border));
        }

        :host([outlined]:not([text])) button:hover,
        :host([outlined]:not([raised])) button:hover {
          background-color: var(--mat-primary-color-light);
          color: var(--mat-primary-color-dark);
          fill: var(--mat-primary-color-dark);
        }

        :host([raised]:not([text])) button,
        :host([raised]:not([outlined])) button {
          box-shadow: var(--mat-theme-box-shadow3);
          transition: box-shadow 0.2s ease-out;
        }

        :host([raised]:not([text])) button:active,
        :host([raised]:not([outlined])) button:active {
          box-shadow: none;
          transition: box-shadow 0.2s ease-out;
          filter: brightness(90%);
        }
      `]}}tt.register("nn-button",Oe);class Le extends(de(Dt)){static get styles(){return[super.styles,o`
        :host {
          display: inline-block;
          width: fit-content;
          padding: 10px;
        }

        :host > input {
          height: var(--button-height, 30px);
          -webkit-appearance: none;
          background-color: var(--nn-input-button-background, var(--mat-primary-color));
          border-radius: var(--nn-input-button-border-radius, 4px);
          border: var(--nn-input-button-border, var(--mat-theme-border));
          border-color: transparent;
          text-transform: uppercase;
          color: var(--nn-input-button-color, var(--mat-text-on-dark));
          border-image: none;
        }

        input:hover {
          filter: brightness(130%);
        }

        input:active, input:focus {
          outline: none;
        }

        input:active, :host([outlined]:not([text])) input:active {
          transition: all 0.2s ease-out;
          border-color: rgba(0, 0, 0, 0.1);
          border-style: inset;
          border-color: var(--mat-primary-color);
        }

        :host([text]:not([outlined])) input,
        :host([text]:not([raised])) input {
          background-color: transparent;
          color: var(--nn-input-button-color, var(--mat-primary-color));
        }

        :host([text]:not([outlined])) input:active,
        :host([text]:not([raised])) input:active {
          border-style: solid;
          border-width: 1px;
          border-color: transparent;
        }

        :host([text]:not([outlined])) input:hover,
        :host([text]:not([raised])) input:hover {
          background-color: var(--mat-primary-color-light);
          color: var(--mat-primary-color-dark)
        }

        :host([outlined]:not([text])) input,
        :host([outlined]:not([raised])) input {
          background-color: transparent;
          color: var(--nn-input-button-color, var(--mat-primary-color));
          border: var(--nn-input-button-border, var(--mat-theme-border));
        }

        :host([outlined]:not([text])) input:hover,
        :host([outlined]:not([raised])) input:hover {
          background-color: var(--mat-primary-color-light);
          color: var(--mat-primary-color-dark)
        }

        :host([raised]:not([text])) input,
        :host([raised]:not([outlined])) input {
          box-shadow: var(--mat-theme-box-shadow2);
          transition: box-shadow 0.2s ease-out;
        }

        :host([raised]:not([text])) input:active,
        :host([raised]:not([outlined])) input:active {
          box-shadow: none;
          transition: box-shadow 0.2s ease-out;
          filter: brightness(90%);
        }
      `]}}tt.register("nn-input-button",Le);class Ie extends(de(Bt)){static get styles(){return[super.styles,super.stylePatterns.hoverStyle,super.stylePatterns.focusStyle,o`
      :host {
          position: relative;
          padding: 0 12px;
          padding-bottom: 16px;
          margin: 10px;
        }
        
        #native {
          appearance: none;
          -moz-appearance: none;
          -webkit-appearance: none;
          box-sizing: border-box;
          display: block;
          border-radius: var(--mat-input-border-radius, 4px 4px 0 0);
          border-width: 0;
          border-style: none;
          border-color: transparent;
          background-color: var(--mat-background, #eee);
          padding: 6px;
          height: 40px;
          box-shadow: var(--mat-theme-box-shadow);
          transition: background-color 0.3s ease-in-out,
                      color 0.3s ease-in-out,
                      box-shadow 0.3s ease-in-out;
        }
        `]}}tt.register("nn-input-color",Ie);class Fe extends(de(Ht)){static get properties(){return{labelPosition:{type:String,attribute:!1},validationMessage:{type:String,attribute:!1}}}constructor(){super(),this.labelPosition="after",this.validationMessagePosition="after"}static get styles(){return[super.styles,super.stylePatterns.inputField,super.stylePatterns.inputLabel,super.stylePatterns.fixedLabel,super.stylePatterns.errorMessage,o`
      `]}}tt.register("nn-input-date",Fe);class Re extends(de(qt)){static get properties(){return{labelPosition:{type:String,attribute:!1},validationMessage:{type:String,attribute:!1}}}constructor(){super(),this.labelPosition="after",this.validationMessagePosition="after"}static get styles(){return[super.styles,super.stylePatterns.inputField,super.stylePatterns.inputLabel,super.stylePatterns.fixedLabel,super.stylePatterns.errorMessage,o`
      `]}}tt.register("nn-input-date-time-local",Re);class Ne extends(de(Wt)){static get styles(){return[super.styles,o`
      `]}}tt.register("nn-input-email",Ne);class ze extends(de(Kt)){static get styles(){return[super.styles,o`
        :host {
          display: block;
          min-width: 130px;
        }

        #filename {
          box-sizing: border-box;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin: 4px 10px;
          border-radius: 4px;
          border: 1px solid #ccc;
          background-color: whitesmoke;
        }
      `]}static get properties(){return{labelPosition:{type:String,attribute:!1},validationMessagePosition:{type:String,attribute:!1},buttonLabel:{type:String,attribute:"button-label"}}}constructor(){super(),this.labelPosition="after",this.validationMessagePosition="after",this.hideNative=!0,this.buttonLabel="Choose File"}render(){return T`
      <nn-button @click=${this._chooseFile}>${this.buttonLabel}</nn-button>
      <input type="file" id="native" @change="${this.fileNameChanged}" ?hidden=${this.hideNative} title=${this.title} >
      ${this.ifValidationMessageAfter}
      ${this.fileName?this.lit.html`
          <div id="filename" title="${this.title}">${this.fileName}</div>
        `:""}
      ${this.ifLabelAfter}
    `}_chooseFile(t){this.shadowRoot.querySelector("#native").click()}}tt.register("nn-input-file",ze);class Ue extends(de(Yt)){static get styles(){return[super.styles,o`
      `]}}tt.register("nn-input-month",Ue);class De extends(de(Xt)){static get styles(){return[super.styles,o`
      `]}}tt.register("nn-input-number",De);class je extends(de(Gt)){static get styles(){return[super.styles,o`
      `]}}tt.register("nn-input-password",je);class Be extends(de(Jt)){static get properties(){return{labelPosition:{type:String,attribute:!1},validationMessage:{type:String,attribute:!1}}}constructor(){super(),this.labelPosition="after",this.validationMessagePosition="after",this.label=""}firstUpdated(){super.firstUpdated&&super.firstUpdated(),this.shadowRoot.querySelector("label").addEventListener("click",(t=>{t.stopPropagation()}))}static get styles(){return[super.styles,super.stylePatterns.errorMessage,super.stylePatterns.hideNativeWidget,super.stylePatterns.requiredLabelAsterisk,o`
      :host {
        display: inline-block;
        position: relative;
        padding-left: 24px;
        margin-bottom: 12px;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      :host::after:not(:disabled) {
        content: '';
        user-select: none;
        position: absolute;
        height: 8px;
        width: 8px;
        border-radius: 50%;
        left: 5px;
        top: 5px;
        will-change: transform;
      }

      :host(:hover:not(:disabled))::after {
        background: var(--mat-primary-color);
        opacity: 0.1;
        transform: scale(4);
        transition: all 0.3s ease-in-out;
      }

      :host([has-focus])::after {
        background: var(--mat-primary-color);
        opacity: 0.4 !important;
        transform: scale(4);
        transition: all 0.3s ease-in-out;
      }

      div#label-text {
        padding: var(--nn-checkbox-label-padding);
      }

      #native:invalid + label, #native:invalid ~ label {
        background-color: none;
        --mat-label-color: darkred;
      }

      label::before { /* Background box */
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 15px;
        width: 15px;
        border: 2px solid var(--mat-boundaries-color);
        border-radius: 50%;
        transition: background-color 0.3s ease-in-out;
      }

      #native:checked ~ label::before {
        border-color: var(--mat-primary-color);
        background-color:  transparent;
        transition: background-color 0.3s ease-in-out;
      }

      :host(:hover:not(:disabled)) label::before {
        filter: brightness(135%);
        transition: filter 0.3s ease-in-out;
        box-shadow: var(--mat-theme-box-shadow2);
      }

      #native:focus ~ label::before {
        box-shadow: var(--mat-theme-box-shadow2);
        border-color: var(--mat-primary-color);
        filter: brightness(135%);
      }

      #native:not([checked]):hover:not(:disabled) ~ label::before {
        filter: brightness(150%);
        background-color: var(--mat-primary-color);
        transition: background-color 0.3s ease-in-out;
      }

      label::after {
        content: "";
        position: absolute;
        opacity: 0;
        width: 19px;
        height: 19px;
        will-change: transform, opacity;
        transition: opacity 0.3s ease-out;
      }        

      #native:checked ~ label::after {
        display: block;
        left: 0;
        top: 0;
        opacity: 1;
        background-color:  var(--mat-primary-color);
        border-radius: 50%;
        -webkit-transform: scale(0.5);
        -ms-transform: scale(0.5);
        transform: scale(0.5);
        transition: transform 0.3s ease-in-out, opacity 0.3s ease-in;
      }
      `]}}tt.register("nn-input-radio",Be);class He extends(de(Zt)){static get styles(){return[super.styles,o`
      `]}}tt.register("nn-input-range",He);class qe extends(de(Qt)){static get styles(){return[super.styles,o`
      `]}}tt.register("nn-input-search",qe);class We extends(de(te)){static get styles(){return[super.styles,o`
      `]}}tt.register("nn-input-submit",We);class Ke extends(de(ee)){static get styles(){return[super.styles,o`
      `]}}tt.register("nn-input-tel",Ke);const Ye=t=>class extends t{_observeInput(t){const e=t.currentTarget;this.toggleAttribute("has-value",Xe(e.value))}_observeFocus(t){this.toggleAttribute("has-focus",!0)}_observeBlur(t){this.toggleAttribute("has-focus",!1)}afterSettingProperty(t,e){super.afterSettingProperty(),"value"===t&&this.toggleAttribute("has-value",Xe(e))}firstUpdated(){super.firstUpdated(),this.native.addEventListener("input",this._observeInput.bind(this)),this.native.addEventListener("focus",this._observeFocus.bind(this)),this.native.addEventListener("blur",this._observeBlur.bind(this)),this.toggleAttribute("has-value",Xe(this.value))}};function Xe(t){return"undefined"!==t&&"null"!==t&&""!==t}class Ge extends(de(Ye(jt))){static get properties(){return{labelPosition:{type:String,attribute:!1},validationMessagePosition:{type:String,attribute:!1}}}constructor(){super(),this.labelPosition="after",this.validationMessagePosition="after"}firstUpdated(){super.firstUpdated();for(const t of["leading","trailing"]){const e=document.createElement("slot");e.setAttribute("name",t),this.shadowRoot.appendChild(e)}}static get styles(){return[super.styles,super.stylePatterns.inputField,super.stylePatterns.inputLabel,super.stylePatterns.floatingLabel,super.stylePatterns.hoverStyle,super.stylePatterns.focusStyle,super.stylePatterns.errorMessage,super.stylePatterns.requiredLabelAsterisk,o`
        #native[has-leading] {
          padding-left: 36px;
        }

        #native[has-trailing] {
          padding-right: 36px;
        }

        ::slotted([slot=leading]),
        ::slotted([slot=trailing]) {
          position: absolute;
          top: var( --mat-input-icon-top, 16px);
          left: var( --mat-input-icon-left, 16px);
          height: var( --mat-input-icon-height, 24px);
          width: var( --mat-input-icon-width, 24px);
        }

        ::slotted([slot=trailing]) {
          left: unset;
          right: var( --mat-input-icon-right, 16px);
        }

        :host([has-leading]) label{
          margin-left: 30px
        }
      `]}}tt.register("nn-input-text",Ge);class Je extends(de(se)){static get styles(){return[super.styles,o`
      `]}}tt.register("nn-input-time",Je);class Ze extends(de(ie)){static get styles(){return[super.styles,o`
      `]}}tt.register("nn-input-url",Ze);class Qe extends(de(re)){static get styles(){return[super.styles,o`
      `]}}tt.register("nn-input-week",Qe);class ts extends(de(oe)){static get styles(){return[super.styles,o`
      `]}}tt.register("nn-meter",ts);class es extends(de(ae)){static get styles(){return[super.styles,o`
      `]}}tt.register("nn-progress",es);class ss extends(de(Ye(ne))){static get properties(){return{labelPosition:{type:String,attribute:!1},validationMessage:{type:String,attribute:!1}}}constructor(){super(),this.labelPosition="after",this.validationMessagePosition="after"}connectedCallback(){super.connectedCallback(),this.onclick=()=>{this.native.click()}}static get styles(){return[super.styles,super.stylePatterns.inputField,super.stylePatterns.inputLabel,super.stylePatterns.fixedLabel,super.stylePatterns.errorMessage,super.stylePatterns.requiredLabelAsterisk,o`
        :host::after {
          position: absolute;
          content: '';
          border: 4px solid transparent;
          border-top-color: var(--mat-boundaries-color);
          right: 20px;
          bottom: 50%;
          user-select: none;
          pointer-events: none;
        }

        #native {
          width: 100%;
        }
      `]}}tt.register("nn-select",ss);class is extends(de(Ye(le))){static get properties(){return{labelPosition:{type:String,attribute:!1},validationMessage:{type:String,attribute:!1}}}constructor(){super(),this.labelPosition="after",this.validationMessagePosition="after"}static get styles(){return[super.styles,super.stylePatterns.inputField,super.stylePatterns.inputLabel,super.stylePatterns.floatingLabel,super.stylePatterns.errorMessage,super.stylePatterns.requiredLabelAsterisk,o`
        :host {
          --mat-form-element-height: 80px;
        }
        /* Following material design guidelines, non-resizeable textarea */
        textarea#native {
          font-family: var(--mat-font-family);
          padding-top: 12px;
          min-height: 80px;
          height: unset;
          padding-top: 30px;
          width: -webkit-fill-available;
          resize: none;
        }
      `]}}tt.register("nn-textarea",is),tt.defineAll()}();
