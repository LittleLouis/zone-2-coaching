;/*FB_PKG_DELIM*/

__d("BladerunnerHandlersPresencePresenceHandlerTypes",["$InternalEnum"],(function(a,b,c,d,e,f){"use strict";c=(a=b("$InternalEnum"))({BuddyListPolling:1,AdditionalContactsPolling:2,Disabled:3,EnableRealtimeUpdatesOnly:4});d=a({ThriftCompact:1,Json:2,Dasm:3});f=a({Stream:1,Timed:2});b=a({Full:1,Incremental:2});var g=a({AdditionalContacts:1,PollingMode:2,PresenceReporting:3,ContextualPresenceReporting:4});a=a({AdditionalContacts:"additionalContacts",PollingModeAmendment:"pollingModeAmendment",PresenceReportingAmendment:"presenceReportingAmendment",ContextualPresenceReportingAmendment:"contextualPresenceReportingAmendment"});e.exports={LifecycleMode:f,PollingMode:c,PresenceAmendmentTypes:g,PresenceStreamAmendment$Types:a,PublishEncoding:d,PublishType:b}}),null);
__d("IGDBaseButton.react",["BaseButton.react","react","react-compiler-runtime"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react"),j={root:{userSelect:"x87ps6o",":active_opacity":"x1d5wrs8",$$css:!0},rootDisabled:{opacity:"xuzhngd",pointerEvents:"x47corl",$$css:!0}};function a(a){var b=d("react-compiler-runtime").c(7),e=a.children,f=a.disabled,g=a.onClick;a=a.ref;var h=f===!0&&j.rootDisabled,k;b[0]!==h?(k=[j.root,h],b[0]=h,b[1]=k):k=b[1];b[2]!==e||b[3]!==f||b[4]!==g||b[5]!==k?(h=i.jsx(c("BaseButton.react"),{disabled:f,onClick:g,ref:a,xstyle:k,children:e}),b[2]=e,b[3]=f,b[4]=g,b[5]=k,b[6]=h):h=b[6];return h}g["default"]=a}),98);
__d("react-relay",["react-relay/ReactRelayContext","react-relay/ReactRelayFragmentContainer","react-relay/ReactRelayLocalQueryRenderer","react-relay/ReactRelayPaginationContainer","react-relay/ReactRelayQueryRenderer","react-relay/ReactRelayRefetchContainer","react-relay/relay-hooks/EntryPointContainer.react","react-relay/relay-hooks/ProfilerContext","react-relay/relay-hooks/RelayEnvironmentProvider","react-relay/relay-hooks/loadEntryPoint","react-relay/relay-hooks/loadQuery","react-relay/relay-hooks/useClientQuery","react-relay/relay-hooks/useEntryPointLoader","react-relay/relay-hooks/useFragment","react-relay/relay-hooks/useLazyLoadQuery","react-relay/relay-hooks/useMutation","react-relay/relay-hooks/usePaginationFragment","react-relay/relay-hooks/usePrefetchableForwardPaginationFragment","react-relay/relay-hooks/usePreloadedQuery","react-relay/relay-hooks/useQueryLoader","react-relay/relay-hooks/useRefetchableFragment","react-relay/relay-hooks/useRelayEnvironment","react-relay/relay-hooks/useSubscribeToInvalidationState","react-relay/relay-hooks/useSubscription","relay-runtime"],(function(a,b,c,d,e,f){"use strict";a=b("react-relay/relay-hooks/loadQuery").loadQuery;e.exports={ConnectionHandler:(c=b("relay-runtime")).ConnectionHandler,QueryRenderer:b("react-relay/ReactRelayQueryRenderer"),LocalQueryRenderer:b("react-relay/ReactRelayLocalQueryRenderer"),MutationTypes:c.MutationTypes,RangeOperations:c.RangeOperations,ReactRelayContext:b("react-relay/ReactRelayContext"),applyOptimisticMutation:c.applyOptimisticMutation,commitLocalUpdate:c.commitLocalUpdate,commitMutation:c.commitMutation,createFragmentContainer:b("react-relay/ReactRelayFragmentContainer").createContainer,createPaginationContainer:b("react-relay/ReactRelayPaginationContainer").createContainer,createRefetchContainer:b("react-relay/ReactRelayRefetchContainer").createContainer,fetchQuery_DEPRECATED:c.fetchQuery_DEPRECATED,graphql:c.graphql,readInlineData:c.readInlineData,requestSubscription:c.requestSubscription,EntryPointContainer:b("react-relay/relay-hooks/EntryPointContainer.react"),RelayEnvironmentProvider:b("react-relay/relay-hooks/RelayEnvironmentProvider"),ProfilerContext:b("react-relay/relay-hooks/ProfilerContext"),fetchQuery:c.fetchQuery,loadQuery:a,loadEntryPoint:b("react-relay/relay-hooks/loadEntryPoint"),useClientQuery:b("react-relay/relay-hooks/useClientQuery"),useFragment:b("react-relay/relay-hooks/useFragment"),useLazyLoadQuery:b("react-relay/relay-hooks/useLazyLoadQuery"),useEntryPointLoader:b("react-relay/relay-hooks/useEntryPointLoader"),useQueryLoader:b("react-relay/relay-hooks/useQueryLoader"),useMutation:b("react-relay/relay-hooks/useMutation"),usePaginationFragment:b("react-relay/relay-hooks/usePaginationFragment"),usePreloadedQuery:b("react-relay/relay-hooks/usePreloadedQuery"),useRefetchableFragment:b("react-relay/relay-hooks/useRefetchableFragment"),usePrefetchableForwardPaginationFragment:b("react-relay/relay-hooks/usePrefetchableForwardPaginationFragment"),useRelayEnvironment:b("react-relay/relay-hooks/useRelayEnvironment"),useSubscribeToInvalidationState:b("react-relay/relay-hooks/useSubscribeToInvalidationState"),useSubscription:b("react-relay/relay-hooks/useSubscription")}}),null);
__d("useIGDTypingIndicatorSubscription_instagramRelayOperation",[],(function(a,b,c,d,e,f){e.exports="8071880052909777"}),null);
__d("useIGDTypingIndicatorSubscription.graphql",["useIGDTypingIndicatorSubscription_instagramRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input_data"}],c=[{alias:null,args:[{kind:"Variable",name:"input",variableName:"input_data"}],concreteType:"XDTDirectRealtimeEventResponse",kind:"LinkedField",name:"xdt_direct_realtime_event",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"event",storageKey:null},{alias:null,args:null,concreteType:"XDTDirectRealtimeOperation",kind:"LinkedField",name:"data",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"op",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"path",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"value",storageKey:null}],storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"useIGDTypingIndicatorSubscription",selections:c,type:"Subscription",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"useIGDTypingIndicatorSubscription",selections:c},params:{id:b("useIGDTypingIndicatorSubscription_instagramRelayOperation"),metadata:{is_distillery:!0,root_field_name:["xdt_direct_realtime_event"],subscriptionName:"xdt_direct_realtime_event"},name:"useIGDTypingIndicatorSubscription",operationKind:"subscription",text:null}}}();e.exports=a}),null);
__d("useIGDTypingIndicator",["FBLogger","IGDTypingIndicatorUtils","react","react-compiler-runtime","react-relay","useCurrentRoute","useIGDTypingIndicatorSubscription.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i;(i||d("react")).useMemo;var j=h!==void 0?h:h=b("useIGDTypingIndicatorSubscription.graphql");function a(a){var b=d("react-compiler-runtime").c(7),e=c("useCurrentRoute")();e=(e=e==null?void 0:(e=e.rootView.props)==null?void 0:e.viewer_igid)!=null?e:"";var f;b[0]!==a?(f=function(b){if(b!=null){b=d("IGDTypingIndicatorUtils").transformIGDTypingPayload(b);b!=null&&a(b)}},b[0]=a,b[1]=f):f=b[1];var g;b[2]!==e?(g={input_data:{user_id:e}},b[2]=e,b[3]=g):g=b[3];b[4]!==f||b[5]!==g?(e={onError:k,onNext:f,subscription:j,variables:g},b[4]=f,b[5]=g,b[6]=e):e=b[6];f=e;g=f;d("react-relay").useSubscription(g)}function k(a){c("FBLogger")("igd_web").catching(a).warn("IGD typing indicator: Error with subscription setup")}g["default"]=a}),98);
__d("IGDTypingIndicatorProvider.react",["IGDTypingIndicatorContext","IGDTypingIndicatorUtils","ReQL","ReQLSuspense","clearInterval","react","react-compiler-runtime","setInterval","useIGDTypingIndicator","useReStore"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||(i=d("react"));b=i;b.useCallback;var k=b.useEffect;b.useMemo;var l=b.useRef,m=b.useState,n=1e3,o=11e3;function a(a){var b=d("react-compiler-runtime").c(24);a=a.children;var e=(h||(h=c("useReStore")))(),g=m(),i=g[0],p=g[1];b[0]===Symbol["for"]("react.memo_cache_sentinel")?(g=[],b[0]=g):g=b[0];g=m(g);var q=g[0],r=g[1];b[1]===Symbol["for"]("react.memo_cache_sentinel")?(g=[],b[1]=g):g=b[1];g=m(g);var s=g[0],t=g[1],u=l(null),v=d("IGDTypingIndicatorUtils").useThreadIdFromIGId(e,i==null?void 0:i.threadIgId),w=d("IGDTypingIndicatorUtils").useContactIdFromSenderIGId(e,i==null?void 0:i.senderIgId),x;b[2]!==e.tables.messages||b[3]!==q?(g=function(){return d("ReQL").fromTableDescending(e.tables.messages).filter(function(a){var b=q.some(function(b){return d("IGDTypingIndicatorUtils").isNewMessageAfterTypingEvent(b,a)});return b})},x=[q,e.tables.messages],b[2]=e.tables.messages,b[3]=q,b[4]=g,b[5]=x):(g=b[4],x=b[5]);var y=d("ReQLSuspense").useArray(g,x,f.id+":58");b[6]!==y||b[7]!==q?(g=function(){var a=q.filter(function(a){return!y.some(function(b){return d("IGDTypingIndicatorUtils").isNewMessageAfterTypingEvent(a,b)})});t(function(){return a})},x=[q,y],b[6]=y,b[7]=q,b[8]=g,b[9]=x):(g=b[8],x=b[9]);k(g,x);b[10]!==i||b[11]!==w||b[12]!==v?(g=function(){if(i&&v!=null&&w!=null){i.senderIgId;i.threadIgId;var a=babelHelpers.objectWithoutPropertiesLoose(i,["senderIgId","threadIgId"]),b=babelHelpers["extends"]({},a,{senderId:w,threadKey:v});r(function(a){if(b.activityStatus===d("IGDTypingIndicatorUtils").IGDTypingStatus.STOPPED_TYPING)return a.filter(function(a){return!d("IGDTypingIndicatorUtils").shouldTypingEventStop(a,b)});var c=a.findIndex(function(a){return d("IGDTypingIndicatorUtils").isSameThreadSenderEvent(a,b)});return c===-1?[].concat(a,[b]):a.map(function(a,d){return d===c?babelHelpers["extends"]({},a,{timestamp:b.timestamp}):a})})}},x=[i,w,v],b[10]=i,b[11]=w,b[12]=v,b[13]=g,b[14]=x):(g=b[13],x=b[14]);k(g,x);b[15]!==q.length?(g=function(){q.length>0?u.current=c("setInterval")(function(){var a=Date.now();r(function(b){return b.filter(function(b){return b.timestamp+o>a})})},n):q.length===0&&u.current!=null&&(c("clearInterval")(u.current),u.current=null);return function(){u.current&&(c("clearInterval")(u.current),u.current=null)}},x=[q.length],b[15]=q.length,b[16]=x,b[17]=g):(x=b[16],g=b[17]);k(g,x);b[18]===Symbol["for"]("react.memo_cache_sentinel")?(g=function(a){p(a)},b[18]=g):g=b[18];x=g;c("useIGDTypingIndicator")(x);b[19]!==s?(g={typingEvents:s},b[19]=s,b[20]=g):g=b[20];x=g;s=x;b[21]!==a||b[22]!==s?(g=j.jsx(c("IGDTypingIndicatorContext").Provider,{value:s,children:a}),b[21]=a,b[22]=s,b[23]=g):g=b[23];return g}g["default"]=a}),98);
__d("IGDInboxContextProviders.react",["IGDInboxClickedThreadContextProvider","IGDProfessionalIGFolderContext.react","IGDTypingIndicatorProvider.react","react","react-compiler-runtime"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){var b=d("react-compiler-runtime").c(2);a=a.children;var e;b[0]!==a?(e=i.jsx(c("IGDTypingIndicatorProvider.react"),{children:i.jsx(d("IGDProfessionalIGFolderContext.react").IGDProfessionalFolderContextProvider,{children:i.jsx(d("IGDInboxClickedThreadContextProvider").IGDInboxClickedThreadContextProvider,{children:a})})}),b[0]=a,b[1]=e):e=b[1];return e}g.IGDInboxContextProviders=a}),98);
__d("IGDInboxLeftColumnPlaceholder.react",["IGDListCellPlaceholder.react","IGDSGlimmer.react","IGDSectionHeaderLayout.react","react","react-compiler-runtime","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||d("react"),k={leftColumn:{backgroundColor:"xvbhtw8",borderEndColor:"xopu45v",borderEndStyle:"xu3j5b3",borderEndWidth:"xm81vs4",height:"x5yr21d",overflowX:"x6ikm8r",overflowY:"x10wlt62",$$css:!0},mobile:{borderTopWidth:"x972fbf",borderEndWidth:"xcfux6l",borderBottomWidth:"x1qhh985",borderStartWidth:"xm0m39n",height:"x1dr59a3",$$css:!0},sectionHeaderIconGlimmer:{borderTopStartRadius:"x1lq5wgf",borderTopEndRadius:"xgqcy7u",borderBottomEndRadius:"x30kzoy",borderBottomStartRadius:"x9jhf4c",height:"x1fgtraw",marginTop:"x1xmf6yo",marginEnd:"x1emribx",marginBottom:"x1e56ztr",marginStart:"x1i64zmx",width:"xvy4d1p",$$css:!0},usernameGlimmer:{borderTopStartRadius:"x1lq5wgf",borderTopEndRadius:"xgqcy7u",borderBottomEndRadius:"x30kzoy",borderBottomStartRadius:"x9jhf4c",height:"x1ta3ar0",width:"xh8yej3",$$css:!0}};function l(){var a=d("react-compiler-runtime").c(1),b;a[0]===Symbol["for"]("react.memo_cache_sentinel")?(b=j.jsx(c("IGDSGlimmer.react"),{index:1,xstyle:k.usernameGlimmer}),a[0]=b):b=a[0];return b}function m(){var a=d("react-compiler-runtime").c(1);if(a[0]===Symbol["for"]("react.memo_cache_sentinel")){var b;b=j.jsxs(j.Fragment,{children:[j.jsx(b=c("IGDListCellPlaceholder.react"),{}),j.jsx(b,{}),j.jsx(b,{}),j.jsx(b,{}),j.jsx(b,{}),j.jsx(b,{}),j.jsx(b,{}),j.jsx(b,{}),j.jsx(b,{}),j.jsx(b,{}),j.jsx(b,{})]});a[0]=b}else b=a[0];return b}function a(a){var b=d("react-compiler-runtime").c(15);a=a.isMobile;a=a===void 0?!1:a;var e;b[0]!==a?(e=(h||(h=c("stylex"))).props(k.leftColumn,a?k.mobile:!1),b[0]=a,b[1]=e):e=b[1];var f;b[2]!==a?(f=a?j.jsx(c("IGDSGlimmer.react"),{index:1,xstyle:k.sectionHeaderIconGlimmer}):null,b[2]=a,b[3]=f):f=b[3];var g;b[4]!==f?(g=j.jsx(d("IGDSectionHeaderLayout.react").StartAdornment,{children:f}),b[4]=f,b[5]=g):g=b[5];b[6]===Symbol["for"]("react.memo_cache_sentinel")?(f=j.jsx(l,{}),b[6]=f):f=b[6];var i;b[7]===Symbol["for"]("react.memo_cache_sentinel")?(i=j.jsx(d("IGDSectionHeaderLayout.react").EndAdornment,{children:j.jsx(c("IGDSGlimmer.react"),{index:1,xstyle:k.sectionHeaderIconGlimmer})}),b[7]=i):i=b[7];b[8]!==a||b[9]!==g?(f=j.jsxs(d("IGDSectionHeaderLayout.react").Container,{isMobile:a,noBottomBorder:!0,children:[g,f,i]}),b[8]=a,b[9]=g,b[10]=f):f=b[10];b[11]===Symbol["for"]("react.memo_cache_sentinel")?(i=j.jsx(m,{}),b[11]=i):i=b[11];b[12]!==e||b[13]!==f?(a=j.jsxs("div",babelHelpers["extends"]({},e,{children:[f,i]})),b[12]=e,b[13]=f,b[14]=a):a=b[14];return a}g.IGDInboxLeftColumnPlaceholderUsernameGlimmer=l;g.IGDInboxLeftColumnPlaceholderThreadListLayout=m;g.IGDInboxLeftColumnPlaceholder=a}),98);
__d("IGDListCell.react",["BaseListCell.react","CometPressable.react","IGDListCellSelectedContext.react","emptyFunction","react","react-compiler-runtime","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||d("react"),k={addOnContainer:{display:"x78zum5",flexShrink:"x2lah0s",$$css:!0},addOnEndContainerPadding:{paddingStart:"x1ye3gou",$$css:!0},addOnStartContainerPadding:{paddingEnd:"xn6708d",$$css:!0},disabled:{opacity:"xbyyjgo",$$css:!0},pressable:{borderTopStartRadius:"x168nmei",borderTopEndRadius:"x13lgxp2",borderBottomEndRadius:"x5pf9jr",borderBottomStartRadius:"xo71vjh",display:"x1lliihq",marginTop:"xdj266r",marginEnd:"x11i5rnm",marginBottom:"xat24cr",marginStart:"x1mh8g0r",":active_backgroundColor":"xg6hnt2",":focus_backgroundColor":"x18wri0h",$$css:!0},pressableHover:{":hover_backgroundColor":"x1l895ks",$$css:!0},pressableSelected:{backgroundColor:"x19g9edo",":active_backgroundColor":"xmoo3j9",":focus_backgroundColor":"x1e9wozp",$$css:!0},pressableSelectedHover:{":hover_backgroundColor":"xoo1adm",$$css:!0}},l={large:{paddingTop:"x1y1aw1k",paddingBottom:"xwib8y2",paddingStart:"xbbxn1n",paddingEnd:"xxbr6pl",paddingLeft:null,paddingRight:null,$$css:!0},small:{paddingTop:"x1y1aw1k",paddingBottom:"xwib8y2",paddingStart:"x1swvt13",paddingEnd:"x1pi30zi",paddingLeft:null,paddingRight:null,$$css:!0}};function a(a){var b=d("react-compiler-runtime").c(44),e,f;b[0]!==a?(f=a.ref,e=babelHelpers.objectWithoutPropertiesLoose(a,["ref"]),b[0]=a,b[1]=e,b[2]=f):(e=b[1],f=b[2]);var g,i,l,n,o,p,q,r,s,t,u,v,w,x;if(b[3]!==e){a=e;g=a.addOnEnd;i=a.addOnStart;l=a.addOnStartVerticalAlign;n=a.content;o=a.disabled;x=a.hoverStateVisible;p=a.linkProps;q=a.noopOnPressWhenSelected;r=a.onHoverIn;s=a.onHoverOut;t=a.onPress;u=a.role;v=a.selected;w=a.size;a=babelHelpers.objectWithoutPropertiesLoose(a,["addOnEnd","addOnStart","addOnStartVerticalAlign","content","disabled","hoverStateVisible","linkProps","noopOnPressWhenSelected","onHoverIn","onHoverOut","onPress","role","selected","size"]);b[3]=e;b[4]=g;b[5]=i;b[6]=l;b[7]=n;b[8]=o;b[9]=p;b[10]=q;b[11]=r;b[12]=s;b[13]=t;b[14]=a;b[15]=u;b[16]=v;b[17]=w;b[18]=x}else g=b[4],i=b[5],l=b[6],n=b[7],o=b[8],p=b[9],q=b[10],r=b[11],s=b[12],t=b[13],a=b[14],u=b[15],v=b[16],w=b[17],x=b[18];e=x===void 0?!0:x;x=g!=null||n;var y=i||n,z;b[19]!==g||b[20]!==y?(z=g!=null?j.jsx("div",babelHelpers["extends"]({},(h||(h=c("stylex"))).props([k.addOnContainer,y&&k.addOnEndContainerPadding]),{children:g})):void 0,b[19]=g,b[20]=y,b[21]=z):z=b[21];b[22]!==i||b[23]!==x?(g=i!=null?j.jsx("div",babelHelpers["extends"]({},(h||(h=c("stylex"))).props([k.addOnContainer,x&&k.addOnStartContainerPadding]),{children:i})):void 0,b[22]=i,b[23]=x,b[24]=g):g=b[24];b[25]!==l||b[26]!==n||b[27]!==a||b[28]!==z||b[29]!==g?(y=j.jsx(c("BaseListCell.react"),babelHelpers["extends"]({addOnEnd:z,addOnStart:g,addOnStartVerticalAlign:l,content:n,role:"none"},a)),b[25]=l,b[26]=n,b[27]=a,b[28]=z,b[29]=g,b[30]=y):y=b[30];b[31]!==o||b[32]!==e||b[33]!==p||b[34]!==q||b[35]!==r||b[36]!==s||b[37]!==t||b[38]!==f||b[39]!==u||b[40]!==v||b[41]!==w||b[42]!==y?(i=j.jsx(m,{disabled:o,hoverStateVisible:e,linkProps:p,noopOnPressWhenSelected:q,onHoverIn:r,onHoverOut:s,onPress:t,ref:f,role:u,selected:v,size:w,children:y}),b[31]=o,b[32]=e,b[33]=p,b[34]=q,b[35]=r,b[36]=s,b[37]=t,b[38]=f,b[39]=u,b[40]=v,b[41]=w,b[42]=y,b[43]=i):i=b[43];return i}function m(a){var b=d("react-compiler-runtime").c(21),e=a.ref,f=a.children,g=a.disabled,h=a.hoverStateVisible,i=a.linkProps,m=a.noopOnPressWhenSelected,n=a.onHoverIn,o=a.onHoverOut,p=a.onPress,q=a.role,r=a.selected;a=a.size;a=l[a];var s=h===!0&&k.pressableHover,t;b[0]!==s?(t=[k.pressable,s],b[0]=s,b[1]=t):t=b[1];s=t;t=d("IGDListCellSelectedContext.react").useIsListCellSelected();r=Boolean(r)||t;b[2]!==h||b[3]!==r?(t=r&&[k.pressableSelected,h===!0&&k.pressableSelectedHover],b[2]=h,b[3]=r,b[4]=t):t=b[4];b[5]!==t?(h=[t],b[5]=t,b[6]=h):h=b[6];t=h;h=g===!0;m=Boolean(m)&&r?c("emptyFunction"):p;r=g===!0&&k.disabled;b[7]!==t||b[8]!==s||b[9]!==a||b[10]!==r?(p=[].concat(s,[a],t,[r]),b[7]=t,b[8]=s,b[9]=a,b[10]=r,b[11]=p):p=b[11];b[12]!==f||b[13]!==i||b[14]!==n||b[15]!==o||b[16]!==q||b[17]!==h||b[18]!==m||b[19]!==p?(g=j.jsx(c("CometPressable.react"),{disabled:h,linkProps:i,onHoverIn:n,onHoverOut:o,onPress:m,overlayDisabled:!0,overlayFocusRingPosition:"inset",ref:e,role:q,xstyle:p,children:f}),b[12]=f,b[13]=i,b[14]=n,b[15]=o,b[16]=q,b[17]=h,b[18]=m,b[19]=p,b[20]=g):g=b[20];return g}g["default"]=a}),98);
__d("PresenceCapabilityBit",["I64"],(function(a,b,c,d,e,f,g){"use strict";var h;b=(h||(h=d("I64"))).of_float(2);c=h.of_float(8);e=h.of_float(268435456);function a(){for(var a=arguments.length,b=new Array(a),c=0;c<a;c++)b[c]=arguments[c];return(h||(h=d("I64"))).to_string(b.reduce(function(a,b){return(h||(h=d("I64"))).or_(a,b)},h.zero))}g.VoiceIpEnabled=b;g.WebrtcEnabled=c;g.ReceivePublishWithEIMUID=e;g.combine=a}),98);
__d("PresenceUnifiedClient",["BladerunnerHandlersPresencePresenceHandlerTypes","FBLogger","Promise","RealtimeNexusSessionDataTypes","RequestStreamCommonRequestStreamCommonTypes","asyncToGeneratorRuntime","clearInterval","debounce","gkx","promiseDone","requireDeferred","setInterval","uuidv4"],(function(a,b,c,d,e,f,g){"use strict";var h,i=c("requireDeferred")("TransportSelectingClientSingleton").__setRef("PresenceUnifiedClient"),j=2.5*60*1e3,k=1e3;a=function(){function a(a){var b=this;this.$1=c("gkx")("9391");this.$2=!1;this.$3=new Map();this.$8=new Map();this.$9=d("RealtimeNexusSessionDataTypes").PresenceAvailability.IDLE;this.$10=new Set();this.$20=c("debounce")(function(){return b.$18()},k);this.$4=a;this.$11=(a=a.presenceReportingRequest)==null?void 0:a.capabilities}var e=a.prototype;e.$12=function(){this.$3.clear(),this.$13(),this.$5=null,c("clearInterval")(this.$7),this.$2=!1};e.$14=function(a){this.$1&&c("FBLogger")("rti_presence").info("Presence stream status update: %s",Number(a)),this.$6=a,a===d("RequestStreamCommonRequestStreamCommonTypes").FlowStatus.Started&&c("promiseDone")(this.reportUserPresence(this.$9))};e.$15=function(a){this.$1&&c("FBLogger")("rti_presence").debug(a)};e.$16=function(a){this.$1&&c("FBLogger")("rti_presence").catching(a).info("Presence stream: stream terminated"),this.$12()};e.$17=function(a){var b=this;try{a=JSON.parse(a);this.$1&&c("FBLogger")("rti_presence").debug("Presence stream map updated: %s",JSON.stringify(a.presenceUpdates.map(function(a){var b=a.userId;a=a.presenceStatus;return{id:b,ps:a}})).trim());a.publishType===d("BladerunnerHandlersPresencePresenceHandlerTypes").PublishType.Full&&this.$3.clear();a.presenceUpdates.forEach(function(a){b.$3.set(a.userId,a)});this.$13()}catch(a){this.$1&&c("FBLogger")("rti_presence").catching(a).info("Presence stream: Presence publish could not be parsed");return}};e.$13=function(){for(var a of this.$8.values())a(this.$3)};e.startAdditionalContactsPolling=function(){var a=this;c("clearInterval")(this.$7);this.$7=c("setInterval")(function(){c("promiseDone")(a.$18())},j)};e.stopAdditionalContactsPolling=function(){c("clearInterval")(this.$7)};e.$19=function(){var a=b("asyncToGeneratorRuntime").asyncToGenerator(function*(a){var b=this.$5;if(b==null){this.$1&&c("FBLogger")("rti_presence").info("Presence: stream: You cannot ammend a stream that is not open");return!1}a.presenceReportingAmendment!=null&&(a.presenceReportingAmendment.reportingArguments.capabilities=this.$11);a={payload:babelHelpers["extends"]({},a)};try{return yield b.amendWithAck(JSON.stringify(a))}catch(a){this.$1&&c("FBLogger")("rti_presence").catching(a).info("Presence: stream: Failed to amend stream with ack");return!1}});function d(b){return a.apply(this,arguments)}return d}();e.$18=function(){var a=Array.from(this.$10);this.$1&&c("FBLogger")("rti_presence").info("Presence: stream: requestAdditonalContactsPresence %s",JSON.stringify(a));if(a.length===0)return(h||(h=b("Promise"))).resolve(!0);a={additionalContacts:a};return this.$19({additionalContacts:a})};e.closeStream=function(){var a=b("asyncToGeneratorRuntime").asyncToGenerator(function*(){try{this.$5!=null&&(yield this.$5.cancel())}catch(a){this.$1&&c("FBLogger")("rti_presence").catching(a).info("Presence stream: error while closing stream")}finally{this.$12()}});function d(){return a.apply(this,arguments)}return d}();e.startStream=function(){var a=b("asyncToGeneratorRuntime").asyncToGenerator(function*(){var a=this;if(this.$2===!0||this.$5!=null)return;var b={method:"PresenceUnifiedJSON"};this.$2=!0;var e=JSON.stringify(babelHelpers["extends"]({},this.$4,{publishEncoding:d("BladerunnerHandlersPresencePresenceHandlerTypes").PublishEncoding.Json}));try{var f=(yield i.load());this.$5=(yield f.requestStream(b,e,{onData:function(b){return a.$17(b)},onFlowStatus:function(b){return a.$14(b)},onLog:function(b){return a.$15(b)},onTermination:function(b){return a.$16(b)}}))}catch(a){this.$1&&c("FBLogger")("rti_presence").catching(a).warn("Presence: stream: Failed to start presence stream")}finally{this.$2=!1}});function e(){return a.apply(this,arguments)}return e}();e.changeActiveStatusSetting=function(a){a={reportingArguments:{makeUserAvailableWhenInForeground:a,mutationId:c("uuidv4")()}};return this.$19({presenceReportingAmendment:a})};e.reportUserPresence=function(a){this.$9=a;if(this.$5==null)return(h||(h=b("Promise"))).resolve(!1);this.$1&&c("FBLogger")("rti_presence").info("Presence stream: report user presence: %s",Number(a));a={reportingArguments:{availability:a,foregrounded:Boolean(a===d("RealtimeNexusSessionDataTypes").PresenceAvailability.ACTIVE),mutationId:c("uuidv4")()}};return this.$19({presenceReportingAmendment:a})};e.addAdditionalContacts=function(a){for(a of a)this.$10.add(a);this.$20()};e.getPresenceMap=function(){return this.$3};e.registerListener=function(a){var b=this,d=c("uuidv4")();this.$8.set(d,a);return function(){b.$8["delete"](d)}};return a}();g.POLLING_INTERVAL_MS=j;g.REQUEST_ADDITIONAL_CONTACTS_DEBOUNCE_MS=k;g.PresenceUnifiedClient=a}),98);
__d("IGDMobilePresenceUnifiedClientSingleton",["BladerunnerHandlersPresencePresenceHandlerTypes","PresenceCapabilityBit","PresenceCommonPresenceCommonTypes","PresenceUnifiedClient","RealtimeNexusSessionDataTypes","uuidv4"],(function(a,b,c,d,e,f,g){"use strict";b=new(d("PresenceUnifiedClient").PresenceUnifiedClient)({appFamily:d("PresenceCommonPresenceCommonTypes").AppFamily.Instagram,pollingMode:d("BladerunnerHandlersPresencePresenceHandlerTypes").PollingMode.BuddyListPolling,appId:String(1217981644879628),presenceReportingRequest:{capabilities:(a=d("PresenceCapabilityBit")).combine(a.VoiceIpEnabled,a.WebrtcEnabled,a.ReceivePublishWithEIMUID),mutationId:c("uuidv4")(),availability:d("RealtimeNexusSessionDataTypes").PresenceAvailability.IDLE}});g.IGDMobilePresenceUnifiedClientSingleton=b}),98);
__d("IGDMqttSetupStub.react",[],(function(a,b,c,d,e,f){"use strict";function a(a){return null}f["default"]=a}),66);
__d("IGDProLogging",["ODS","QPLUserFlow","qpl"],(function(a,b,c,d,e,f,g){"use strict";var h,i=0;function j(){return c("QPLUserFlow").getActiveFlowIDs().includes(832772100)}function a(){j()||(i=Date.now(),c("QPLUserFlow").start(c("qpl")._(832772100,"855"),{instanceKey:i}))}function b(){j()&&c("QPLUserFlow").endSuccess(c("qpl")._(832772100,"855"),{instanceKey:i})}function k(a,b){(h||(h=d("ODS"))).bumpEntityKey(5506,a,b)}function e(){k("threadList","igd_pro_web.client.load_threads.primary")}function f(){k("threadList","igd_pro_web.client.load_threads.general")}function l(){k("threadInfo","igd_pro_web.client.move_thread.primary")}function m(){k("threadInfo","igd_pro_web.client.move_thread.general")}function n(){k("threadInfo","igd_pro_web.client.accept_thread.primary")}function o(){k("threadInfo","igd_pro_web.client.accept_thread.general")}g.QPLStart=a;g.QPLEndSuccess=b;g.ODSBumpLoadThreadsPrimary=e;g.ODSBumpLoadThreadsGeneral=f;g.ODSBumpMoveThreadPrimary=l;g.ODSBumpMoveThreadGeneral=m;g.ODSBumpAcceptRequestPrimary=n;g.ODSBumpAcceptRequestGeneral=o}),98);
__d("IGDSChevronDownOutline24Icon.react",["IGDSChevronDownPanoOutline24Icon.react","react","react-compiler-runtime"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){var b=d("react-compiler-runtime").c(2),e;b[0]!==a?(e=i.jsx(c("IGDSChevronDownPanoOutline24Icon.react"),babelHelpers["extends"]({},a)),b[0]=a,b[1]=e):e=b[1];return e}b=i.memo(a);g["default"]=b}),98);
__d("IGDSComposePanoOutlineIcon.react",["IGDSSVGIconBase.react","react","react-compiler-runtime"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){var b=d("react-compiler-runtime").c(5),e,f,g;b[0]===Symbol["for"]("react.memo_cache_sentinel")?(e=i.jsx("path",{d:"M12.202 3.203H5.25a3 3 0 0 0-3 3V18.75a3 3 0 0 0 3 3h12.547a3 3 0 0 0 3-3v-6.952",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"}),f=i.jsx("path",{d:"M10.002 17.226H6.774v-3.228L18.607 2.165a1.417 1.417 0 0 1 2.004 0l1.224 1.225a1.417 1.417 0 0 1 0 2.004Z",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"}),g=i.jsx("line",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",x1:"16.848",x2:"20.076",y1:"3.924",y2:"7.153"}),b[0]=e,b[1]=f,b[2]=g):(e=b[0],f=b[1],g=b[2]);b[3]!==a?(e=i.jsxs(c("IGDSSVGIconBase.react"),babelHelpers["extends"]({},a,{viewBox:"0 0 24 24",children:[e,f,g]})),b[3]=a,b[4]=e):e=b[4];return e}b=i.memo(a);g["default"]=b}),98);
__d("IGDSComposeOutlineIcon.react",["IGDSComposePanoOutlineIcon.react","react","react-compiler-runtime"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){var b=d("react-compiler-runtime").c(2),e;b[0]!==a?(e=i.jsx(c("IGDSComposePanoOutlineIcon.react"),babelHelpers["extends"]({},a)),b[0]=a,b[1]=e):e=b[1];return e}b=i.memo(a);g["default"]=b}),98);
__d("IGDThreadListNullstate.react",["fbt","IGDIsCompactModeContext.react","IGDSText.react","react","react-compiler-runtime"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||d("react");function a(){var a=d("react-compiler-runtime").c(3),b=d("IGDIsCompactModeContext.react").useIsCompactMode();if(b){a[0]===Symbol["for"]("react.memo_cache_sentinel")?(b=j.jsx("div",{className:"x1p5oq8j xxbr6pl xwxc41k xbbxn1n x15yg21f"}),a[0]=b):b=a[0];return b}a[1]===Symbol["for"]("react.memo_cache_sentinel")?(b={className:"x1p5oq8j xxbr6pl xwxc41k xbbxn1n xxsgkw5"},a[1]=b):b=a[1];a[2]===Symbol["for"]("react.memo_cache_sentinel")?(b=j.jsx("div",babelHelpers["extends"]({},b,{children:j.jsx(c("IGDSText.react"),{size:"body",textAlign:"center",children:h._(/*BTDS*/"__JHASH__RRc9C6O0xlH__JHASH__")})})),a[2]=b):b=a[2];return b}g["default"]=a}),226);
__d("IGPresenceUnifiedContext.react",["CometErrorBoundary.react","CometPlaceholder.react","HeroInteractionIgnoreWithDiv.react","deferredLoadComponent","react","requireDeferred","usePresenceUnifiedClientContext","usePresenceUnifiedMapContext"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));b=h;var j=b.useEffect,k=b.useState,l=c("deferredLoadComponent")(c("requireDeferred")("IGPresenceUnifiedSetup.react").__setRef("IGPresenceUnifiedContext.react"));function a(a){var b=a.children,e=a.client;a=a.presenceSetupQueryRef;var f=k(new Map()),g=f[0],h=f[1];j(function(){return e.registerListener(function(a){h(new Map(a))})},[e]);return i.jsx(d("usePresenceUnifiedClientContext").PresenceUnifiedClientContext.Provider,{value:e,children:i.jsxs(d("usePresenceUnifiedMapContext").PresenceUnifiedMapContext.Provider,{value:g,children:[i.jsx(c("HeroInteractionIgnoreWithDiv.react"),{children:i.jsx(c("CometErrorBoundary.react"),{fallback:function(){return i.jsx("span",{})},children:i.jsx(c("CometPlaceholder.react"),{fallback:null,children:i.jsx(l,{client:e,presenceSetupQueryRef:a})})})}),b]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("MAWGroupInvitesForThread",["LSMessagingThreadTypeUtil","LSThreadBitOffset"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var b=d("LSMessagingThreadTypeUtil").isArmadilloSecure(a.threadType),c=d("LSMessagingThreadTypeUtil").isGroup(a.threadType);a=d("LSThreadBitOffset").has(105,a);if(b&&c)return a;else return!1}g.isGroupInviteThread=a}),98);
__d("MWPThreadsForThreadList",["I64","ReQL"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a,b,c,e){if(c!=null){a=d("ReQL").fromTableDescending(a.tables.threads.index("parentThreadKeyLastActivityTimestampMs"),e).getKeyRange(b).bounds({gt:d("ReQL").key((h||(h=d("I64"))).zero)});e=c.minLastActivityTimestampMs;b=c.maxLastActivityTimestampMs;c=!(h||(h=d("I64"))).equal(e,(h||(h=d("I64"))).zero)&&!(h||(h=d("I64"))).equal(e,(h||(h=d("I64"))).one)?e:void 0;e=!(h||(h=d("I64"))).equal(b,(h||(h=d("I64"))).zero)&&!(h||(h=d("I64"))).equal(b,(h||(h=d("I64"))).one)?b:void 0;if(c!=null)if(e!=null)return a.bounds({gte:d("ReQL").key(c),lte:d("ReQL").key(e)});else return a.bounds({gte:d("ReQL").key(c)});else if(e!=null)return a.bounds({lte:d("ReQL").key(e)});return a}return d("ReQL").empty()}g.createIterable=a}),98);
__d("MWXacGating",["IgMsgrXacGatingManager","gkx"],(function(a,b,c,d,e,f,g){"use strict";function a(){if(c("IgMsgrXacGatingManager").is_groups_xac_enabled_for_viewer)return c("gkx")("26364");else return!1}g.isGroupsEnabled=a}),98);
__d("MessageRequestStatus",[],(function(a,b,c,d,e,f){a=Object.freeze({NOT_A_REQUEST:0,INCOMING_REQUEST:1,OUTGOING_REQUEST:2});f["default"]=a}),66);
__d("PolarisInboxTrayItemContainerElementProvider",["react","react-compiler-runtime"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));c=h;var j=c.useContext;c.useMemo;var k=c.useRef,l=i.createContext({containerRef:void 0});function a(a){var b=d("react-compiler-runtime").c(3);a=a.children;var c=k();b[0]===Symbol["for"]("react.memo_cache_sentinel")?(c={containerRef:c},b[0]=c):c=b[0];c=c;c=c;b[1]!==a?(c=i.jsx(l.Provider,{value:c,children:a}),b[1]=a,b[2]=c):c=b[2];return c}function b(){return j(l)}g.PolarisInboxTrayItemContainerElementProvider=a;g.usePolarisInboxTrayItemContainerElementProvider=b}),98);
__d("loadMoreLSThreads",["I64","LSFactory","LSThreadsRangesQueryStoredProcedure","Promise","ReQL","loadLSThreadsForTheFirstTime"],(function(a,b,c,d,e,f,g){"use strict";var h,i;function a(a,e){return d("ReQL").firstAsync(d("ReQL").fromTableAscending(a.threads_ranges_v2__generated).filter(function(a){return(i||(i=d("I64"))).equal(a.parentThreadKey,e)})).then(function(f){if(f!=null)if(!f.isLoadingBefore&&f.hasMoreBefore)return c("LSThreadsRangesQueryStoredProcedure")(c("LSFactory")(a),{additionalPagesToFetch:(i||(i=d("I64"))).zero,isLoadingAfter:!1,isLoadingBefore:!0,maxLastActivityTimestampMs:f.maxLastActivityTimestampMs,maxThreadKey:f.maxThreadKey,minLastActivityTimestampMs:f.minLastActivityTimestampMs,minThreadKey:f.minThreadKey,parentThreadKey:e,shouldSkipE2eeThreadsRanges:!1});else return(h||(h=b("Promise"))).resolve();else return c("loadLSThreadsForTheFirstTime")(a,e)})}g["default"]=a}),98);
__d("translatedServerString",[],(function(a,b,c,d,e,f){"use strict";function a(a){return a}f["default"]=a}),66);