/*!
 * PSPDFKit for Web 2024.6.0 (https://pspdfkit.com/web)
 *
 * Copyright (c) 2016-2024 PSPDFKit GmbH. All rights reserved.
 *
 * THIS SOURCE CODE AND ANY ACCOMPANYING DOCUMENTATION ARE PROTECTED BY INTERNATIONAL COPYRIGHT LAW
 * AND MAY NOT BE RESOLD OR REDISTRIBUTED. USAGE IS BOUND TO THE PSPDFKIT LICENSE AGREEMENT.
 * UNAUTHORIZED REPRODUCTION OR DISTRIBUTION IS SUBJECT TO CIVIL AND CRIMINAL PENALTIES.
 * This notice may not be removed from this file.
 *
 * PSPDFKit uses several open source third-party components: https://pspdfkit.com/acknowledgements/web/
 */
"use strict";(globalThis.webpackChunkPSPDFKit=globalThis.webpackChunkPSPDFKit||[]).push([[5362],{91126:(t,e,s)=>{s.r(e),s.d(e,{corePool:()=>c.mG,customFontsPromiseRef:()=>w,default:()=>y,loadModule:()=>b,normalizeCoreOptions:()=>c.DO,validateStandaloneConfiguration:()=>c.mn});var a=s(49568),i=s(85409),n=s(55994),o=s(41204),r=s(85410),c=s(92026),l=s(37506),u=s(85553),d=s(89055),h=s(68322),m=s(33075),p=s(7310),f=s(84318);let g;class y extends c.Ay{constructor(t){const e=t.baseUrl||(0,r.$_)(window.document),s=t.baseCoreUrl||e,a=t.baseProcessorEngineUrl||e,n={...t,baseUrl:e,baseCoreUrl:s,baseProcessorEngineUrl:a};if("string"!=typeof n.baseUrl)throw new i.uE("`baseUrl` is mandatory and must be a valid URL, e.g. `https://example.com/`");if("string"!=typeof n.document&&!(n.document instanceof ArrayBuffer))throw new i.uE("document must be either an URL to a supported document type (PDF and images), e.g. `https://example.com/document.pdf`, or an `ArrayBuffer`");if(g&&g!==n.licenseKey)throw new i.uE("Trying to re-use instance with a different licenseKey.\nUnfortunately we only allow one licenseKey per instance.\nPlease contact support for further assistance.");if("string"==typeof n.licenseKey&&n.licenseKey.startsWith("TRIAL-"))throw new i.uE("You're using the npm key instead of the license key. This key is used to download the PSPDFKit for Web package via the node package manager.\n\nLeave out the license key to activate as a trial.");super(n),this.destroyed=!1}async load(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=.2;t.progressCallback&&t.progressCallback("loading",e),this._isPDFJavaScriptEnabled=t.isPDFJavaScriptEnabled;const s=(0,m.sl)(this._state.baseUrl,this._state.document,this._state.productId,(()=>{e+=.3,t.progressCallback&&t.progressCallback("loading",e)})),n=await b(this.client,this._state).finally((()=>{e+=.3,t.progressCallback&&t.progressCallback("loading",e)}));(0,i.V1)(n);const{features:r,signatureFeatureAvailability:c}=n;if(this._state.productId===h.v.SharePoint&&"string"==typeof this._state.document&&Array.isArray(n.afu)){const t=new URL(this._state.document,this._state.baseUrl);if(!n.afu.some((e=>t.hostname.match(e))))throw new i.uE(`The document origin ${t.hostname} is not authorized.`)}const f=c===u.g.ELECTRONIC_SIGNATURES&&(0,d.UX)(r)&&this._state.forceLegacySignaturesFeature?u.g.LEGACY_SIGNATURES:c;this._state=this._state.set("features",(0,a.B8)(r)).set("signatureFeatureAvailability",f),g=this._state.licenseKey;const y=await s;let w,_=y.slice(0);try{this.destroyed?(_=null,w=await new Promise((()=>{}))):(w=await this.client.openDocument(y,t.password,"number"==typeof t.initialPageIndex?t.initialPageIndex:0),_=null)}catch(e){if("INVALID_PASSWORD"===e.message&&this._state.document instanceof ArrayBuffer&&(this._state=this._state.set("document",e.callArgs[0])),"IMAGE_DOCUMENTS_NOT_LICENSED"===e.message&&(e.message="The image documents feature is not enabled for your license key. Please contact support or sales to purchase the UI module for your product."),!(e instanceof i.uE&&e.message.includes("File not in PDF format or corrupted.")&&this._state.productId!==h.v.Salesforce))throw e;{(0,i.V1)(_);let s,a=(0,p.jU)();try{a||(a=(0,p.NY)({baseUrl:this._state.baseProcessorEngineUrl,mainThreadOrigin:this._state.appName||(0,o.D5)()||window.location.origin,licenseKey:this._state.licenseKey||void 0,customFonts:this._state.customFonts||void 0,dynamicFonts:this._state.dynamicFonts||void 0,fontSubstitutions:this._state.fontSubstitutions,processorEngine:this._state.processorEngine}),(0,p.Pm)(a)),s=await a,(0,i.V1)(s);const e=await s.toPdf(_);w=await this.client.openDocument(e,t.password,"number"==typeof t.initialPageIndex?t.initialPageIndex:0)}catch(t){throw"INVALID_PASSWORD"===t.message&&this._state.document instanceof ArrayBuffer&&(this._state=this._state.set("document",e.callArgs[0])),"IMAGE_DOCUMENTS_NOT_LICENSED"===t.message&&(t.message="The image documents feature is not enabled for your license key. Please contact support or sales to purchase the UI module for your product."),t}finally{_=null,s?.destroy(),(0,p.Pm)(null)}}}if(this._isPDFJavaScriptEnabled&&(this._initialChanges=await this.client.enablePDFJavaScriptSupport()),this._XFDF&&await this.client.importXFDF(this._XFDF.source,this._XFDF.keepCurrentAnnotations,this._XFDF.ignorePageRotation),this._instantJSON&&this._instantJSON.pdfId&&w.ID.permanent){const t=this._instantJSON.pdfId,e=w.ID;if(t.permanent!==e.permanent)throw new i.uE("Could not instantiate from Instant JSON: Permanent PDF ID mismatch.\nPlease use the same PDF document that was used to create this Instant JSON.\nFor more information, please visit: https://pspdfkit.com/guides/web/current/importing-exporting/instant-json/");if(t.changing!==e.changing)throw new i.uE("Could not instantiate from Instant JSON: Changing PDF ID mismatch.\nPlease use the same revision of this PDF document that was used to create this Instant JSON.\nFor more information, please visit: https://pspdfkit.com/guides/web/current/importing-exporting/instant-json/")}if(this._trustedCAsCallback)try{const t=await this._trustedCAsCallback();if(!Array.isArray(t))throw new i.uE("Certificates response must be an array");if(t.some((t=>!(t instanceof ArrayBuffer)&&"string"!=typeof t)))throw new i.uE("All certificates must be passed as ArrayBuffer (DER) or string (PEM)");await this.client.loadCertificates(t.map(l.PI))}catch(t){throw new i.uE(`Could not retrieve certificates for digital signatures validation: ${t.message}.`)}return this._state=this._state.set("documentResponse",w),{features:this._state.features,signatureFeatureAvailability:this._state.signatureFeatureAvailability,hasPassword:!!t.password,allowedTileScales:"all",evaluation:n.evaluation}}destroy(){this.destroyed=!0,super.destroy()}getCustomFontsPromise(){return w}}const w={current:void 0};async function b(t,e){w.current=w.current||(e.customFonts?(0,f.eY)(e.customFonts):void 0);const s=(0,r.f)(e.appName);return t.loadNativeModule(e.baseCoreUrl,{mainThreadOrigin:s,disableWebAssemblyStreaming:e.disableWebAssemblyStreaming,enableAutomaticLinkExtraction:e.enableAutomaticLinkExtraction,overrideMemoryLimit:e.overrideMemoryLimit,workerSpawnerFn:()=>(0,n.pj)(e.inlineWorkers)}).then((async()=>t.load(e.baseCoreUrl,e.licenseKey,{mainThreadOrigin:s,...w.current?{customFonts:await w.current}:null,dynamicFonts:e.dynamicFonts,productId:e.productId})))}}}]);