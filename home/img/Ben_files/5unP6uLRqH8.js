;/*FB_PKG_DELIM*/

__d("E2EELinkPreviewXMADataType",[],(function(a,b,c,d,e,f){a=Object.freeze({FALLBACK:1,FB_CLIENT_FETCH:2,OEMBED:4});f["default"]=a}),66);
__d("EBFormatUtils",["I64","WATimeUtils"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a,b){if(a!=null)return(h||(h=d("I64"))).min(a,h.of_float(d("WATimeUtils").millisTime()));switch(b){case"before":return(h||(h=d("I64"))).of_float(d("WATimeUtils").millisTime());case"after":return(h||(h=d("I64"))).zero;default:b;return(h||(h=d("I64"))).max_int}}function b(a,b){switch(b){case"before":return[a,0];case"after":return[0,a];default:b;return[Math.ceil(a/2),Math.ceil(a/2)]}}g.adjustTs=a;g.adjustCount=b}),98);
__d("IGDSErrorOutlineIcon.react",["IGDSErrorPanoOutlineIcon.react","react","react-compiler-runtime"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){var b=d("react-compiler-runtime").c(2),e;b[0]!==a?(e=i.jsx(c("IGDSErrorPanoOutlineIcon.react"),babelHelpers["extends"]({},a)),b[0]=a,b[1]=e):e=b[1];return e}b=i.memo(a);g["default"]=b}),98);
__d("genArrayBufferFromFile",["Promise"],(function(a,b,c,d,e,f){"use strict";var g;function a(a){return"arrayBuffer"in a&&typeof a.arrayBuffer==="function"?a.arrayBuffer():new(g||(g=b("Promise")))(function(b,c){var d=new FileReader();d.onload=function(){var a=d.result;a instanceof ArrayBuffer?b(a):c()};d.onerror=function(){c(d.error)};d.readAsArrayBuffer(a)})}f["default"]=a}),66);
__d("genIsNonAnimatedWebPFile",["genArrayBufferFromFile"],(function(a,b,c,d,e,f,g){"use strict";var h=8;function a(a){return c("genArrayBufferFromFile")(a).then(function(a){a=new Uint8Array(a);var b=a.slice(12,16).reduce(function(a,b,c){return a+String.fromCharCode(b)},"");if(b==="VP8X"){b=a[20];b=b.toString(2).padStart(8,"0");if(b[6]==="1")return!i(a)}return!0})}function i(a){var b=12,c=0;while(c<2&&b+h<a.length){var d=j(a,b);d==="ANMF"&&c++;d=k(a,b+4);var e=d%2;d=h+d+e;b+=d}return c>1}function j(a,b){return a.slice(b,b+4).reduce(function(a,b,c){return a+String.fromCharCode(b)},"")}function k(a,b){return parseInt(a.slice(b,b+4).reduce(function(a,b,c){return b.toString(2).padStart(8,"0")+a},""),2)}g["default"]=a}),98);
__d("LSGetAttachmentType",["LSIntEnum","MessagingAttachmentType","asyncToGeneratorRuntime","cometIsMimeTypeForMedia","genIsNonAnimatedWebPFile"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a){return i.apply(this,arguments)}function i(){i=b("asyncToGeneratorRuntime").asyncToGenerator(function*(a){return a.type==="image/webp"?(h||(h=d("LSIntEnum"))).ofNumber((yield c("genIsNonAnimatedWebPFile")(a))?c("MessagingAttachmentType").IMAGE:c("MessagingAttachmentType").VIDEO):j(a)});return i.apply(this,arguments)}function j(a){a=a.type;if(d("cometIsMimeTypeForMedia").isMimeTypeForPhoto(a))return(h||(h=d("LSIntEnum"))).ofNumber(c("MessagingAttachmentType").IMAGE);else if(a==="audio/wav")return(h||(h=d("LSIntEnum"))).ofNumber(c("MessagingAttachmentType").AUDIO);else if(a==="image/gif")return(h||(h=d("LSIntEnum"))).ofNumber(c("MessagingAttachmentType").ANIMATED_IMAGE);else if(d("cometIsMimeTypeForMedia").isMimeTypeForVideo(a))return(h||(h=d("LSIntEnum"))).ofNumber(c("MessagingAttachmentType").VIDEO);else return(h||(h=d("LSIntEnum"))).ofNumber(c("MessagingAttachmentType").FILE)}g.LSGetAttachmentType=a;g.LSGetAttachmentTypeSyncButLessAccurate=j}),98);
__d("LSIssueNewTaskWithExtraOperationsAndGetTaskID",["LSIssueNewTaskAndGetTaskID","LSMailboxTaskCompletionApiOnTaskInsertion"],(function(a,b,c,d,e,f){function a(){var a=arguments,c=a[a.length-1],d=[],e=[];return c.sequence([function(f){return c.sequence([function(e){return c.storedProcedure(b("LSIssueNewTaskAndGetTaskID"),a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],c.i64.cast([0,0])).then(function(a){return a=a,d[0]=a[0],a})},function(a){return c.storedProcedure(b("LSMailboxTaskCompletionApiOnTaskInsertion"),d[0])},function(a){return e[0]=d[0]}])},function(a){return c.resolve(e)}])}a.__sproc_name__="LSCoreIssueNewTaskWithExtraOperationsAndGetTaskIDStoredProcedure";a.__tables__=[];e.exports=a}),null);
__d("LSMessageContentType",[],(function(a,b,c,d,e,f){a=Object.freeze({TEXT:1,MEDIA_PREVIEW:2,AUDIO_CLIP:4,XMA_FALLBACK:8,LWA_WAVE:16,ADMIN:32,FILE_ATTACHMENT:64,GLYPH:128,TOMBSTONE:256,STORY_REPLY:512,SINGLE_XMA:1024,HSCROLL_XMA:2048,STICKER:4096,FORWARD_INDICATOR:8192,ANIMATED_IMAGE:16384,NULL_STATE:32768,ENCRYPTION_PLACEHOLDER:65536,FUTUREPROOF_PLACEHOLDER:131072,UNAVAILABLE_PLACEHOLDER:262144,LOCATION_PLACEHOLDER:524288,POLL_CREATION_PLACEHOLDER:1048576,CONTACT_SHARE_PLACEHOLDER:2097152,STORY_MENTION_PLACEHOLDER:4194304,META_AI_MESSAGE_PLACEHOLDER:8388608,BUMP_MESSAGE_PLACEHOLDER:16777216,BUMP_MESSAGE_ORIGINAL_UNAVAILABLE_PLACEHOLDER:33554432,STICKER_RECEIVER_FETCH_UNSUPPORTED_PLACEHOLDER:67108864,RECEIVER_FETCH:134217728,STORY_MENTION:268435456,XMA_RECEIVER_FETCH:536870912,NOTE_MENTION_PLACEHOLDER:1073741824,POST_MENTION_PLACEHOLDER:2147483648,LIVE_LOCATION_PLACEHOLDER:4294967296,MESSENGER_MEMORY_PLACEHOLDER:8589934592});f["default"]=a}),66);
__d("LSMessagingInitiatingSource",[],(function(a,b,c,d,e,f){a=Object.freeze({FACEBOOK_CHAT:0,FACEBOOK_INBOX:1,ROOMS_SIDE_CHAT:2,FACEBOOK_FULLSCREEN:3,NONE:4,CREATOR_MESSAGING_BIIM:5,CREATOR_MESSAGING_FBM:6,CREATOR_MESSAGING_MBS_WEB:7});f["default"]=a}),66);
__d("LSPlatformWaitForTaskCompletion",["I64","Promise","asyncToGeneratorRuntime","emptyFunction","err","justknobx","promiseDone","uuidv4"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=["acs_sync"];function a(a,b,c,d){return k.apply(this,arguments)}function k(){k=b("asyncToGeneratorRuntime").asyncToGenerator(function*(a,e,g,k){var l=new Set(),m=[],n=0,o=!0,p,q,r=new(i||(i=b("Promise")))(function(a,b){p=a,q=b}),s=c("uuidv4")(),t=!0,u=(yield a.runInTransaction(function(){var i=b("asyncToGeneratorRuntime").asyncToGenerator(function*(i){yield i.mailbox_task_completion_notification_context.add({notificationName:g,notificationScopeKey:s});var r=a.tables.pending_tasks.subscribe(function(a,b){a=(h||(h=d("I64"))).to_string(a[0]);if(b.operation==="add"||b.operation==="put"){var e=b.value;if(c("justknobx")._("2903")&&j.some(function(a){return e.queueName.startsWith(a)}))return;if(k!=null&&e.queueName!==k)return;l.add(a)}else l["delete"](a)}),v=c("emptyFunction"),w=a.tables.mailbox_task_completion_api_tasks.subscribe(function(a,b){if(b.operation==="add"||b.operation==="put"&&b.value.notificationScopeKey===s){a=(h||(h=d("I64"))).to_string(b.value.taskId);l["delete"](a);b=b.value.success;b==null?t&&(m.push(a),n+=1):(o=b&&o,n-=1)}});v=a.subscribeToCommit(function(){n===0&&l.size===0&&(w(),r(),v(),c("promiseDone")(a.runInTransaction(function(){var a=b("asyncToGeneratorRuntime").asyncToGenerator(function*(a){for(var b of m)yield a.mailbox_task_completion_api_tasks["delete"]((h||(h=d("I64"))).of_string(b))});return function(b){return a.apply(this,arguments)}}(),"readwrite","background",void 0,f.id+":150")),o?p(u):q(c("err")("Not all tasks for "+g+" succeeded")))});try{var x=(yield e(i));yield i.mailbox_task_completion_notification_context["delete"](s);return x}catch(a){v();w();r();throw a}});return function(a){return i.apply(this,arguments)}}(),"readwrite",void 0,void 0,f.id+":66"));t=!1;return r});return k.apply(this,arguments)}g["default"]=a}),98);
__d("LSPredefineTraceForTask",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[],d=[];return b.sequence([function(d){return b.sequence([function(d){return c[0]=b.i64.of_float(Date.now()),b.forEach(b.db.table(2).fetch([[[a[1]]]]),function(b){var d=b.update;b.item;return d({dataTraceId:a[0],initTraceTimestampMs:c[0]})})},function(d){return b.db.table(153).add({traceId:a[0],initTimestampMs:c[0],foregroundTimestampMs:b.i64.cast([0,0]),traceType:b.i64.cast([0,1]),shouldFlush:!1,contextOne:a[2],contextTwo:b.i64.to_string(a[1]),predefinedId:a[3]})}])},function(a){return b.resolve(d)}])}a.__sproc_name__="LSDataTracePredefineTraceForTaskStoredProcedure";a.__tables__=["pending_tasks","data_trace_meta"];e.exports=a}),null);
__d("MWLSContactTypeExactUtils",["I64","LSContactTypeExact","LSIntEnum"],(function(a,b,c,d,e,f,g){"use strict";var h,i;function a(a){if((h||(h=d("I64"))).equal(a,(i||(i=d("LSIntEnum"))).ofNumber(c("LSContactTypeExact").IG_USER))||(h||(h=d("I64"))).equal(a,(i||(i=d("LSIntEnum"))).ofNumber(c("LSContactTypeExact").IG_BUSINESS_USER)))return!0;else return(h||(h=d("I64"))).equal(a,(i||(i=d("LSIntEnum"))).ofNumber(c("LSContactTypeExact").IG_CREATOR_USER))}g.isIgContact=a}),98);
__d("MWMediaRenderQplUtils",["CurrentUser","E2EELinkPreviewXMADataType","I64","LSAuthorityLevel","LSBitFlag","LSIntEnum","LSMessageContentType","LSMessageReplySourceType","LSMessageReplySourceTypeV2","LSMessagingInitiatingSource","LSReplyMessageAttachmentType","LSXmaContentType","MAWLoggerUtils","MNLSXMALayoutType","MessagingAttachmentType","MessagingThreadType","QPLUserFlow","ServerTime","VisibilityAPI","VisibilityState","justknobx","mergeDeep","objectEntries","performanceAbsoluteNow","qpl","react","setTimeout"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j,k,l=i||d("react"),m=l.useEffect,n=l.useLayoutEffect,o=l.useMemo,p=l.useRef,q=60*60*24,r=3*q,s=7*q,t=2*s,u=4*s,v=c("qpl")._(25302828,"2195"),w=c("justknobx")._("2945"),x=1e3,y=c("objectEntries")(c("LSMessageContentType")).reduce(function(a,b){var c=b[0];b=b[1];a.set(b,c);return a},new Map()),z=c("objectEntries")(c("LSReplyMessageAttachmentType")).reduce(function(a,b){var c=b[0];b=b[1];a.set(b,c);return a},new Map());function a(a){return A(a.displayedContentTypes)}function A(a){if(d("LSBitFlag").has((j||(j=d("LSIntEnum"))).ofNumber(1024),a)){var b;return(b=y.get(1024))!=null?b:"UNKNOWN"}return(b=y.get((k||(k=d("I64"))).to_float(a)))!=null?b:"UNKNOWN"}function b(a){return a==null?"UNKNOWN":(a=z.get((k||(k=d("I64"))).to_int32(a)))!=null?a:"UNKNOWN"}function B(a){var b;if((k||(k=d("I64"))).equal(a,(j||(j=d("LSIntEnum"))).ofNumber(c("MessagingAttachmentType").ANIMATED_IMAGE)))b=(j||(j=d("LSIntEnum"))).ofNumber(16384);else if((k||(k=d("I64"))).equal(a,(j||(j=d("LSIntEnum"))).ofNumber(c("MessagingAttachmentType").IMAGE)))b=(j||(j=d("LSIntEnum"))).ofNumber(2);else if((k||(k=d("I64"))).equal(a,(j||(j=d("LSIntEnum"))).ofNumber(c("MessagingAttachmentType").VIDEO)))b=(j||(j=d("LSIntEnum"))).ofNumber(2);else if((k||(k=d("I64"))).equal(a,(j||(j=d("LSIntEnum"))).ofNumber(c("MessagingAttachmentType").AUDIO)))b=(j||(j=d("LSIntEnum"))).ofNumber(4);else if((k||(k=d("I64"))).equal(a,(j||(j=d("LSIntEnum"))).ofNumber(c("MessagingAttachmentType").FILE)))b=(j||(j=d("LSIntEnum"))).ofNumber(64);else if((k||(k=d("I64"))).equal(a,(j||(j=d("LSIntEnum"))).ofNumber(c("MessagingAttachmentType").FILE)))b=(j||(j=d("LSIntEnum"))).ofNumber(64);else if((k||(k=d("I64"))).equal(a,(j||(j=d("LSIntEnum"))).ofNumber(c("MessagingAttachmentType").XMA)))b=(j||(j=d("LSIntEnum"))).ofNumber(1024);else return"UNKNOWN";return A(b)}var C=c("objectEntries")(c("MessagingAttachmentType")).reduce(function(a,b){var c=b[0];b=b[1];a.set(b,c);return a},new Map());function e(a){return D(a.attachmentType)}function D(a){return(a=C.get((k||(k=d("I64"))).to_float(a)))!=null?a:"UNKNOWN"}var E=c("objectEntries")(c("MessagingThreadType")).reduce(function(a,b){var c=b[0];b=b[1];a.set(b,c);return a},new Map());function f(a){a=a.threadType;return F(a)}function F(a){return(a=E.get((k||(k=d("I64"))).to_float(a)))!=null?a:"UNKNOWN"}var G=c("objectEntries")(c("LSXmaContentType")).reduce(function(a,b){var c=b[0];b=b[1];a.set(b,c);return a},new Map());function H(a){return(a=G.get((k||(k=d("I64"))).to_float(a)))!=null?a:"UNKNOWN"}var I=c("objectEntries")(c("LSMessagingInitiatingSource")).reduce(function(a,b){var c=b[0];b=b[1];a.set(b,c);return a},new Map());function J(a){return a!=null?(a=I.get((k||(k=d("I64"))).to_float(a)))!=null?a:"UNKNOWN":"UNKNOWN"}var K=c("objectEntries")(c("E2EELinkPreviewXMADataType")).reduce(function(a,b){var c=b[0];b=b[1];a.set(b,c);return a},new Map());function L(a){return(a=K.get((k||(k=d("I64"))).to_float(a)))!=null?a:"UNKNOWN"}var M=c("objectEntries")(c("LSMessageReplySourceType")).reduce(function(a,b){var c=b[0];b=b[1];a.set(b,c);return a},new Map());function N(a){return(a=M.get((k||(k=d("I64"))).to_float(a)))!=null?a:"UNKNOWN"}var O=c("objectEntries")(c("MNLSXMALayoutType")).reduce(function(a,b){var c=b[0];b=b[1];a.set(b,c);return a},new Map());function P(a){return a==null?"UNKNOWN":(a=O.get((k||(k=d("I64"))).to_float(a)))!=null?a:"UNKNOWN"}var Q=c("objectEntries")(c("LSMessageReplySourceTypeV2")).reduce(function(a,b){var c=b[0];b=b[1];a.set(b,c);return a},new Map());function R(a){return(a=Q.get((k||(k=d("I64"))).to_float(a)))!=null?a:"UNKNOWN"}function S(a,b,e,f){var g=(h||(h=c("performanceAbsoluteNow")))(),i=function(d,e){c("QPLUserFlow").addPoint(a,"window_visibility_change_"+(e?"hidden":"visible"),{instanceKey:b}),e&&c("QPLUserFlow").addAnnotations(a,{bool:{window_was_hidden:!0}},{instanceKey:b})},j=function(a){var b=d("VisibilityAPI").canUseVisibilityAPI?d("VisibilityAPI").isVisibilityHidden():void 0;b={bool:{window_is_hidden_on_end:b}};return a!=null?c("mergeDeep")(a,b):b};return{addAnnotations:function(d){c("QPLUserFlow").addAnnotations(a,d,{instanceKey:b})},addPoint:function(d,e){c("QPLUserFlow").addPoint(a,d,{data:e,instanceKey:b})},endCancel:function(f){e!=null&&(e.current=!0);var g=(h||(h=c("performanceAbsoluteNow")))(),k=j();d("VisibilityState").unsubscribe(i);c("setTimeout")(function(){c("QPLUserFlow").endCancel(a,{annotations:k,cancelReason:f,instanceKey:b,timestamp:g})},x)},endFail:function(f,g){e!=null&&(e.current=!0);var k=(h||(h=c("performanceAbsoluteNow")))(),l=c("mergeDeep")(j(g),{string:{fail_reason:f}});d("VisibilityState").unsubscribe(i);c("setTimeout")(function(){c("QPLUserFlow").endFailure(a,"render-failure",{annotations:l,instanceKey:b,timestamp:k})},x)},endSuccess:function(f,g){e!=null&&(e.current=!0);var k=(g=g)!=null?g:(h||(h=c("performanceAbsoluteNow")))(),l=j(f);d("VisibilityState").unsubscribe(i);c("setTimeout")(function(){c("QPLUserFlow").endSuccess(a,{annotations:l,instanceKey:b,timestamp:k})},x)},getInstanceKey:function(){return b},start:function(a){var e,j=g;e=(e=f)!=null?e:{};if(a!=null&&a.isManualRetry===!0){var k;j=(h||(h=c("performanceAbsoluteNow")))();e=c("mergeDeep")(e,{bool:{is_manual_retry:!0},"int":{manual_retry_count:((k=a.manualRetryCount)!=null?k:0)+1},string:{previousManualRetryErrorDetails:a.previousManualRetryErrorDetails}})}c("QPLUserFlow").start(v,{annotations:e,cancelOnUnload:!0,instanceKey:b,timeoutInMs:w,timestamp:j});d("VisibilityState").subscribe(i)}}}function T(a,b,e){var f=a.attachmentType,g=p(!1),h=o(function(){var h=d("MAWLoggerUtils").getInstanceKey(),i=c("CurrentUser").getAppID();i={string:{app_id:(i=i)!=null?i:void 0,attachment_type:D(f),content_type:B(f),entry_point:e,thread_type:F(b),transport_key:a.transportKey,xma_content_type:a.xmaContentType!=null?H(a.xmaContentType):void 0}};return babelHelpers["extends"]({},S(v,h,g,i))},[a.messageId]);n(function(){h==null?void 0:h.start()},[h]);m(function(){return function(){g.current===!1&&(h==null?void 0:h.getInstanceKey())!=null&&(h==null?void 0:h.endCancel(706))}},[h]);return h}function U(a,b,c){a=a+(b?"0":"1")+(c?"1":"0");return d("MAWLoggerUtils").getInstanceKeyFromId(a)}function V(a,b,e,f,g){g===void 0&&(g={});b=(k||(k=d("I64"))).le(b,(j||(j=d("LSIntEnum"))).ofNumber(c("LSAuthorityLevel").OPTIMISTIC));a=U(a,b,e);c("QPLUserFlow").endFailure(v,f,{annotations:g,instanceKey:a})}function W(a,b,e,f,g){g===void 0&&(g={});b=(k||(k=d("I64"))).le(b,(j||(j=d("LSIntEnum"))).ofNumber(c("LSAuthorityLevel").OPTIMISTIC));a=U(a,b,e);c("QPLUserFlow").addPoint(v,f,{data:g,instanceKey:a})}function X(a){var b=(k||(k=d("I64"))).of_float(d("ServerTime").getMillis());b=k.to_float(k.sub(b,a))/1e3;b<q?a="less_than_one_day":b<r?a="between_one_and_three_days":b<s?a="between_three_days_and_one_week":b<t?a="between_one_and_two_weeks":b<u?a="between_two_weeks_and_one_month":a="more_than_one_month";return a}function Y(a){if(a==null||a<=0)return"invalid_duration";else if(a<=30)return"duration less than 30 seconds";else if(a<=1*60)return"duration between 30 seconds and 1 minute";else if(a<=2*60)return"duration between 1 minute and 2 minutes";else if(a<=3*60)return"duration between 2 minutes and 3 minutes";else if(a<=5*60)return"duration between 3 minutes and 5 minutes";else if(a<=10*60)return"duration between 5 minutes and 10 minutes";else if(a<=30*60)return"duration between 10 minutes and 30 minutes";else if(a<=1*60*60)return"duration between 30 minutes and 1 hour";else if(a<=2*60*60)return"duration between 1 hour and 2 hours";else return"duration above 2 hours"}g.event=v;g.QPL_TIMEOUT=w;g.QPL_END_DELAY_MS=x;g.getMessageContentTypeString=a;g.getMessageContentTypeStringFromEnum=A;g.getReplyMessageAttachmentTypeStringFromEnum=b;g.deriveMessageContentTypeStringFromAttachmentTypeLessAccurate=B;g.getAttachmentTypeString=e;g.getAttachmentTypeStringFromEnum=D;g.getThreadTypeString=f;g.getThreadTypeStringFromEnum=F;g.getXmaContentTypeStringFromEnum=H;g.getMessagingInitiationSourceStringFromEnum=J;g.getE2EELinkPreviewXMADataTypeStringFromEnum=L;g.getMessageReplySourceTypeStringFromEnum=N;g.getMessageXmaLayoutTypeStringFromEnum=P;g.getMessageReplySourceTypeV2StringFromEnum=R;g.createQplFlowCommon=S;g.useCommonMediaRenderQplForAttachment=T;g.getThreadViewMediaRenderQplInstanceKey=U;g.endThreadViewMediaRenderQpl=V;g.addThreadViewMediaRenderQplPoint=W;g.calculateDiffBucketFromTimestamp=X;g.convertDurationToStringBucket=Y}),98);
__d("MWPReplyContext.react",["I64","emptyFunction","react","requireDeferred"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=h||(h=d("react"));b=h;e=b.createContext;var k=b.useCallback,l=b.useMemo,m=b.useState,n=c("requireDeferred")("MWPReplyLogging").__setRef("MWPReplyContext.react"),o=e({clearReply:c("emptyFunction"),reply:void 0,setReply:c("emptyFunction")});function p(a){try{return JSON.parse(a)}catch(a){return}}function a(a){var b=a.children,c=a.clearThreadReply,e=a.getRepliesState,f=a.persistRepliesState,g=a.senderId;a=a.threadKey;e=e!=null&&a!=null?p(e((i||(i=d("I64"))).to_string(a))):void 0;a=m(e);var h=a[0],q=a[1],r=k(function(a,b){n.onReady(function(c){c.logClearReply(b,a,h!=null)});q();if(c!=null)return c((i||(i=d("I64"))).to_string(a))},[c,h]),s=k(function(a,b){n.onReady(function(c){c.logSetReply(h,a,b)});q(a);if(f!=null)return f({messageId:a.messageId,offlineThreadingId:a.offlineThreadingId,senderId:g,sendStatusV2:a.sendStatusV2,threadKey:(i||(i=d("I64"))).to_string(b),timestampMs:a.timestampMs})},[f,h,g]);e=l(function(){return{clearReply:r,reply:h,setReply:s}},[h,s,r]);return j.jsx(o.Provider,{value:e,children:b})}a.displayName=a.name+" [from "+f.id+"]";g.MWPReplyContext=o;g.MWPReplyContextProvider=a}),98);
__d("ReQLSubscribe",["ErrorGuard","ReQL","promiseDone"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a,b){a=a.take(1);var e=(h||(h=c("ErrorGuard"))).guard(b),f=!1,g=null,i=a.subscribe(function(a,b){if(f)return;switch(b.operation){case"delete":(g==null||g.current!==void 0)&&(g={current:void 0},e(g.current));return;case"add":case"put":((a=g)==null?void 0:a.current)!==b.value&&(g={current:b.value},e(g.current))}});c("promiseDone")(d("ReQL").firstAsync(a),function(a){!f&&g==null&&(g={current:a},e(a))});return function(){f||(f=!0,i==null?void 0:i())}}g.subscribeToFirst=a}),98);
__d("coerceMessagingThreadTypeToLSThreadType",["LSIntEnum"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a){return(h||(h=d("LSIntEnum"))).unwrapIntEnum(a)}g["default"]=a}),98);
__d("isThreadLevelCutoverEnabled",["qex"],(function(a,b,c,d,e,f,g){"use strict";function a(){return c("qex")._("564")===!0}g["default"]=a}),98);