(this["webpackJsonparea-calculator"]=this["webpackJsonparea-calculator"]||[]).push([[0],{16:function(e,a,t){e.exports={headerContainer:"Header_headerContainer__1rZjy",headerContainer__title:"Header_headerContainer__title__gwwGF"}},22:function(e,a,t){e.exports={materialCalcContainer:"MaterialCalculation_materialCalcContainer__2weV3"}},27:function(e,a,t){e.exports=t(39)},32:function(e,a,t){},33:function(e,a,t){},39:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),l=t(11),r=t.n(l),i=(t(32),t(33),t(12)),c=t(16),m=t.n(c),u=function(e){return Object(i.a)(e),o.a.createElement("div",{className:m.a.headerContainer},o.a.createElement("div",{className:m.a.headerContainer__title},"\u0418\u043c\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430:"))},h=t(22),p=t.n(h),s=function(e){return Object(i.a)(e),o.a.createElement("div",{className:p.a.materialCalcContainer},"MaterialCalculation")},d=t(4),_=t(6),v=t.n(_),C=t(26),A=t(9),E={isAreaCalculated:!1,bottomArea:null,overlapArea:null,slopeAreaByDepth:null,slopeAreaBySlopeAngle:null,slopeAreaBySlopeRatio:null},g=Object(d.b)((function(e){return{}}),{areaCalculatedSuccess:function(){return{type:"AREA_CALCULATED_SUCCESS"}},setWorkArea:function(e,a,t,n,o){return{type:"SET_WORK_AREA",payload:{bottomArea:e,overlapArea:a,slopeAreaByDepth:t,slopeAreaBySlopeAngle:n,slopeAreaBySlopeRatio:o}}},calculateWorkArea:function(e){var a,t,n,o=e.bottomLength,l=e.bottomWidth,r=e.horizonLength,i=e.horizonWidth,c=e.overlap,m=e.depth,u=e.slopeAngle,h=e.slopeRatio,p=e.depthSelect,s=e.slopeAngleSelect,d=e.slopeRatioSelect,_=o*l,v=(r+2*c)*(i+2*c)-r*i;m&&p?a=2*((o+r)/2*Math.sqrt(Math.pow(m,2)+Math.pow((r-o)/2,2))+(l+i)/2*Math.sqrt(Math.pow(m,2)+Math.pow((i-l)/2,2))):a=null;u&&s?t=2*((o+r)/2*((r-o)/2/Math.cos(u*Math.PI/180))+(l+i)/2*((i-l)/2/Math.cos(u*Math.PI/180))):t=null;h&&d?n=2*((o+r)/2*((r-o)/2/Math.cos(u*Math.PI/180))+(l+i)/2*((i-l)/2/Math.cos(u*Math.PI/180))):n=null;return{bottomArea:_,overlapArea:v,slopeAreaByDepth:a,slopeAreaBySlopeAngle:t,slopeAreaBySlopeRatio:n}}})((function(e){var a=e.setWorkArea,t=e.areaCalculatedSuccess,n=(e.calculateWorkArea,Object(C.a)({initialValues:{bottomLength:null,bottomWidth:null,horizonLength:null,horizonWidth:null,overlap:1.5,depth:null,slopeAngle:null,slopeRatio:null,depthSelect:!0,slopeAngleSelect:!1,slopeRatioSelect:!1},onSubmit:function(e){var n,o,l,r=e.bottomLength,i=e.bottomWidth,c=e.horizonLength,m=e.horizonWidth,u=e.overlap,h=e.depth,p=e.slopeAngle,s=e.slopeRatio,d=r*i,_=(c+2*u)*(m+2*u)-c*m;if(h){var v=Math.sqrt(Math.pow(h,2)+Math.pow((c-r)/2,2)),C=Math.sqrt(Math.pow(h,2)+Math.pow((m-i)/2,2));n=Math.round(2*((r+c)/2*v+(i+m)/2*C))}else n=null;if(p){var A=(c-r)/2/Math.cos(p*Math.PI/180),E=(m-i)/2/Math.cos(p*Math.PI/180);o=Math.round(2*((r+c)/2*A+(i+m)/2*E))}else o=null;if(s){var g=s.split(":"),b=Math.sqrt(Math.pow((c-r)/2*g[1]/g[0],2)+Math.pow((c-r)/2,2)),S=Math.sqrt(Math.pow((m-i)/2*g[1]/g[0],2)+Math.pow((m-i)/2,2));l=Math.round(2*((r+c)/2*b+(i+m)/2*S))}else l=null;a(d,_,n,o,l),t()}}));return o.a.createElement("div",{className:v.a.commonDataForm},o.a.createElement("form",{onSubmit:n.handleSubmit},o.a.createElement("div",{className:v.a.commonDataForm__fullForm},o.a.createElement("div",{className:v.a.commonDataForm__imageDataForm},"commonDataForm__imageDataForm"),o.a.createElement("div",{className:v.a.commonDataForm__initialDataForm},o.a.createElement("div",null,"\u0414\u043b\u0438\u043d\u0430 \u043f\u043e \u0433\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0443:",o.a.createElement("input",{id:"horizonLength",name:"horizonLength",type:"number",onChange:n.handleChange,value:n.values.horizonLength}),"\u043c"),o.a.createElement("div",null,"\u0428\u0438\u0440\u0438\u043d\u0430 \u043f\u043e \u0433\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0443:",o.a.createElement("input",{id:"horizonWidth",name:"horizonWidth",type:"number",onChange:n.handleChange,value:n.values.horizonWidth}),"\u043c"),o.a.createElement("div",null,"\u0414\u043b\u0438\u043d\u0430 \u043f\u043e \u0434\u043d\u0443:",o.a.createElement("input",{id:"bottomLength",name:"bottomLength",type:"number",onChange:n.handleChange,value:n.values.bottomLength}),"\u043c"),o.a.createElement("div",null,"\u0428\u0438\u0440\u0438\u043d\u0430 \u043f\u043e \u0434\u043d\u0443:",o.a.createElement("input",{id:"bottomWidth",name:"bottomWidth",type:"number",onChange:n.handleChange,value:n.values.bottomWidth}),"\u043c"),o.a.createElement("div",null,"\u041d\u0430\u043f\u0443\u0441\u043a \u0434\u043b\u044f \u0430\u043d\u043a\u0435\u0440\u043d\u043e\u0439 \u0442\u0440\u0430\u043d\u0448\u0435\u0438:",o.a.createElement("input",{id:"overlap",name:"overlap",type:"number",onChange:n.handleChange,value:n.values.overlap}),"\u043c"),o.a.createElement("div",null,"\u0413\u043b\u0443\u0431\u0438\u043d\u0430:",o.a.createElement("input",{id:"depth",name:"depth",type:"number",onChange:n.handleChange,value:n.values.depth}),"\u043c",o.a.createElement("input",{id:"depthSelect",name:"Select",type:"radio",onChange:n.handleChange,value:n.values.depthSelect})),o.a.createElement("div",null,"\u0423\u0433\u043e\u043b \u0437\u0430\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u043e\u0442\u043a\u043e\u0441\u043e\u0432:",o.a.createElement("input",{id:"slopeAngle",name:"slopeAngle",type:"number",onChange:n.handleChange,value:n.values.slopeAngle}),"\xb0",o.a.createElement("input",{id:"slopeAngleSelect",name:"Select",type:"radio",onChange:n.handleChange,value:n.values.slopeAngleSelect})),o.a.createElement("div",null,"\u0423\u043a\u043b\u043e\u043d \u043e\u0442\u043a\u043e\u0441\u043e\u0432:",o.a.createElement("input",{id:"slopeRatio",name:"slopeRatio",type:"text",onChange:n.handleChange,value:n.values.slopeRatio}),o.a.createElement("input",{id:"slopeRatioSelect",name:"Select",type:"radio",onChange:n.handleChange,value:n.values.slopeRatioSelect})))),o.a.createElement("div",{className:v.a.commonDataForm__submitButton},o.a.createElement("button",{type:"submit"},"\u0420\u0430\u0441\u0447\u0435\u0442 \u043f\u043b\u043e\u0449\u0430\u0434\u0438 \u0441\u0432\u0430\u0440\u043e\u0447\u043d\u044b\u0445 \u0440\u0430\u0431\u043e\u0442"))))})),b=t(7),S=t.n(b),D=t(19),M=function(e){return e.app.overlapArea},f=function(e){return e.app.bottomArea},y=Object(D.a)((function(e){return[e.app.slopeAreaByDepth,e.app.slopeAreaBySlopeAngle,e.app.slopeAreaBySlopeRatio]}),(function(e){return Math.max.apply(null,e)})),F=Object(D.a)(y,M,f,(function(e,a,t){return e+a+t})),w=Object(d.b)((function(e){return{isAreaCalculated:e.app.isAreaCalculated,bottomArea:f(e),slopeArea:y(e),overlapArea:M(e),sumArea:F(e)}}),{})((function(e){var a=e.isAreaCalculated,t=e.bottomArea,n=e.slopeArea,l=e.overlapArea,r=e.sumArea;return o.a.createElement(o.a.Fragment,null,a&&o.a.createElement("div",{className:S.a.areaCalcContainer},o.a.createElement("div",{className:S.a.areaCalcContainer__areaItem}," ","\u041f\u043b\u043e\u0449\u0430\u0434\u044c \u0434\u043d\u0430: ".concat(t," \u043c\xb2")," "),o.a.createElement("div",{className:S.a.areaCalcContainer__areaItem}," ","\u041f\u043b\u043e\u0449\u0430\u0434\u044c \u0431\u043e\u043a\u043e\u0432\u043e\u0439 \u043f\u043e\u0432\u0435\u0440\u0445\u043d\u043e\u0441\u0442\u0438: ".concat(n," \u043c\xb2")," "),o.a.createElement("div",{className:S.a.areaCalcContainer__areaItem}," ","\u041f\u043b\u043e\u0449\u0430\u0434\u044c \u043d\u0430\u043f\u0443\u0441\u043a\u0430 \u043d\u0430 \u0430\u043d\u043a\u0435\u0440\u043e\u0432\u043a\u0443: ".concat(l," \u043c\xb2")," "),o.a.createElement("div",{className:S.a.areaCalcContainer__sumArea}," ","\u041e\u0431\u0449\u0430\u044f \u043f\u043b\u043e\u0449\u0430\u044c \u0440\u0430\u0431\u043e\u0442: ".concat(r," \u043c\xb2")," ")))})),R=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(u,null),o.a.createElement(g,null),o.a.createElement(w,null),o.a.createElement(s,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=t(8),W=Object(O.b)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"AREA_CALCULATED_SUCCESS":return Object(A.a)(Object(A.a)({},e),{},{isAreaCalculated:!0});case"SET_WORK_AREA":return Object(A.a)(Object(A.a)({},e),a.payload);default:return e}}}),L=Object(O.c)(W,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());r.a.render(o.a.createElement(d.a,{store:L},o.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,a,t){e.exports={commonDataForm:"InitialData_commonDataForm__3fsyN",commonDataForm__fullForm:"InitialData_commonDataForm__fullForm__1FKAx",commonDataForm__imageDataForm:"InitialData_commonDataForm__imageDataForm__3lhCo",commonDataForm__initialDataForm:"InitialData_commonDataForm__initialDataForm__3RiE7",commonDataForm__submitButton:"InitialData_commonDataForm__submitButton__2ZJD9"}},7:function(e,a,t){e.exports={areaCalcContainer:"AreaCalculation_areaCalcContainer__OYLME"}}},[[27,1,2]]]);
//# sourceMappingURL=main.8aece3e2.chunk.js.map