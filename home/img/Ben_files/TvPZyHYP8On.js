;/*FB_PKG_DELIM*/

__d("LSDeleteThenInsertRankingRequest",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[];return b.sequence([function(c){return b.db.table(135).put({scoreType:a[0],requestId:a[1]})},function(a){return b.resolve(c)}])}a.__sproc_name__="LSRankingDeleteThenInsertRankingRequestStoredProcedure";a.__tables__=["ranking_requests"];e.exports=a}),null);
__d("LSDeleteThenInsertRankingScore",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[];return b.sequence([function(c){return b.db.table(134).put({contactId:a[0],scoreType:a[1],contactType:a[2],score:a[3],scoreIndex:a[4]})},function(a){return b.resolve(c)}])}a.__sproc_name__="LSRankingDeleteThenInsertRankingScoreStoredProcedure";a.__tables__=["ranking_scores"];e.exports=a}),null);
__d("LSUpdateIGE2EEEligibilityValue",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[];return b.sequence([function(c){return b.forEach(b.db.table(176).fetch([[[a[0]]]]),function(b){var c=b.update;b.item;return c({e2eeEligibility:a[1]})})},function(a){return b.resolve(c)}])}a.__sproc_name__="LSContactUpdateIGE2EEEligibilityValueStoredProcedure";a.__tables__=["ig_contact_info"];e.exports=a}),null);
__d("LSUpdateOrInsertOhaiGatewayKeyConfigs",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[];return b.sequence([function(c){return b.db.table(313).put({keyId:a[0],publicKey:a[1],kemId:a[2],kdfId:a[3],aeadId:a[4],expirationDate:a[5],lastUpdatedTime:a[6]})},function(a){return b.resolve(c)}])}a.__sproc_name__="LSOhaiUpdateOrInsertOhaiGatewayKeyConfigsStoredProcedure";a.__tables__=["ohai_gateway_key_configs"];e.exports=a}),null);