(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{OtHV:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class e{}var i=u("pMnS"),a=u("9AJC"),c=u("G0yt"),s=u("SVse");class d{constructor(l,n){this.router=l,this.pharmacyService=n,this.result=null,this.page=1,this.limit=10}ngOnInit(){this.getAllPrescriptions()}getAllPrescriptions(){this.pharmacyService.getPrescriptions(this.page,this.limit).subscribe(l=>{this.result=l,console.log(this.result)})}onClick(l){this.router.navigate(["app/prescription/",l])}pageChange(l){this.page=l,this.getAllPrescriptions()}}var o=u("iInd"),r=u("fF65"),p=[["div.table-responsive[_ngcontent-%COMP%] > div.dataTables_wrapper[_ngcontent-%COMP%] > div.row[_ngcontent-%COMP%]{margin:0}div.dataTables_wrapper[_ngcontent-%COMP%]   div.dataTables_length[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-weight:400;text-align:left;white-space:nowrap}div.dataTables_wrapper[_ngcontent-%COMP%]   div.dataTables_length[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{width:auto;display:inline-block}div.dataTables_wrapper[_ngcontent-%COMP%]   div.dataTables_filter[_ngcontent-%COMP%]{text-align:right}div.dataTables_wrapper[_ngcontent-%COMP%]   div.dataTables_filter[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-weight:400;white-space:nowrap;text-align:left}div.dataTables_wrapper[_ngcontent-%COMP%]   div.dataTables_filter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{margin-left:.5em;display:inline-block;width:auto}table.dataTable[_ngcontent-%COMP%]{clear:both;margin-top:6px!important;margin-bottom:6px!important;max-width:none!important;border-collapse:separate!important;border-spacing:0}div.dataTables_wrapper[_ngcontent-%COMP%]   div.dataTables_paginate[_ngcontent-%COMP%]{margin:0;white-space:nowrap;text-align:right}div.dataTables_wrapper[_ngcontent-%COMP%]   div.dataTables_paginate[_ngcontent-%COMP%]   ul.pagination[_ngcontent-%COMP%]{margin:2px 0;white-space:nowrap;justify-content:flex-end}tr[_ngcontent-%COMP%]{cursor:pointer}"]],m=t["\u0275crt"]({encapsulation:0,styles:p,data:{}});function g(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,9,"tr",[["class","odd"],["role","row"]],null,[[null,"click"]],(function(l,n,u){var t=!0,e=l.component;"click"===n&&(t=!1!==e.onClick(l.context.$implicit._id)&&t);return t}),null,null)),(l()(),t["\u0275eld"](1,0,null,null,1,"td",[["class","sorting_1"]],null,null,null,null,null)),(l()(),t["\u0275ted"](2,null,["",""])),(l()(),t["\u0275eld"](3,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t["\u0275ted"](4,null,["",""])),(l()(),t["\u0275eld"](5,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t["\u0275ted"](6,null,["",""])),(l()(),t["\u0275eld"](7,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t["\u0275ted"](8,null,["",""])),t["\u0275ppd"](9,1)],null,(function(l,n){l(n,2,0,n.context.index+1),l(n,4,0,null==n.context.$implicit?null:n.context.$implicit.patient.name),l(n,6,0,null==n.context.$implicit?null:n.context.$implicit.createdBy.name);var u=t["\u0275unv"](n,8,0,l(n,9,0,t["\u0275nov"](n.parent,0),null==n.context.$implicit?null:n.context.$implicit.createdAt));l(n,8,0,u)}))}function b(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,7,"ngb-pagination",[["role","navigation"]],null,[[null,"pageChange"]],(function(l,n,u){var t=!0,e=l.component;"pageChange"===n&&(t=!1!==(e.page=u)&&t);"pageChange"===n&&(t=!1!==e.pageChange(u)&&t);return t}),a.i,a.e)),t["\u0275did"](1,573440,null,6,c.Q,[c.R],{collectionSize:[0,"collectionSize"],page:[1,"page"],pageSize:[2,"pageSize"]},{pageChange:"pageChange"}),t["\u0275qud"](603979776,1,{tplEllipsis:0}),t["\u0275qud"](603979776,2,{tplFirst:0}),t["\u0275qud"](603979776,3,{tplLast:0}),t["\u0275qud"](603979776,4,{tplNext:0}),t["\u0275qud"](603979776,5,{tplNumber:0}),t["\u0275qud"](603979776,6,{tplPrevious:0})],(function(l,n){var u=n.component;l(n,1,0,null==u.result?null:u.result.totalDocs,u.page,u.limit)}),null)}function h(l){return t["\u0275vid"](0,[t["\u0275pid"](0,s.f,[t.LOCALE_ID]),(l()(),t["\u0275eld"](1,0,null,null,29,"div",[["class","row"]],null,null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,28,"div",[["class","col-sm-12"]],null,null,null,null,null)),(l()(),t["\u0275eld"](3,0,null,null,27,"div",[["class","card"]],null,null,null,null,null)),(l()(),t["\u0275eld"](4,0,null,null,26,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t["\u0275eld"](5,0,null,null,1,"h5",[["class","card-title m-b-0"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Hospital Prescriptions"])),(l()(),t["\u0275eld"](7,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),t["\u0275eld"](8,0,null,null,22,"div",[["class","table-responsive"]],null,null,null,null,null)),(l()(),t["\u0275eld"](9,0,null,null,21,"div",[["class","dataTables_wrapper dt-bootstrap4 no-footer"],["id","myTable_wrapper"]],null,null,null,null,null)),(l()(),t["\u0275eld"](10,0,null,null,15,"div",[["class","row"]],null,null,null,null,null)),(l()(),t["\u0275eld"](11,0,null,null,14,"div",[["class","col-sm-12"]],null,null,null,null,null)),(l()(),t["\u0275eld"](12,0,null,null,13,"table",[["aria-describedby","myTable_info"],["class","table table-striped dataTable no-footer"],["id","myTable"],["role","grid"]],null,null,null,null,null)),(l()(),t["\u0275eld"](13,0,null,null,9,"thead",[],null,null,null,null,null)),(l()(),t["\u0275eld"](14,0,null,null,8,"tr",[["role","row"]],null,null,null,null,null)),(l()(),t["\u0275eld"](15,0,null,null,1,"th",[["aria-controls","myTable"],["aria-label","No: activate to sort column descending"],["aria-sort","ascending"],["class","sorting_asc"],["colspan","1"],["rowspan","1"],["style","width: 61px;"],["tabindex","0"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["No"])),(l()(),t["\u0275eld"](17,0,null,null,1,"th",[["aria-controls","myTable"],["aria-label","Patient: activate to sort column ascending"],["class","sorting"],["colspan","1"],["rowspan","1"],["style","width: 202px;"],["tabindex","0"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Patient"])),(l()(),t["\u0275eld"](19,0,null,null,1,"th",[["aria-controls","myTable"],["aria-label","Doctor: activate to sort column ascending"],["class","sorting"],["colspan","1"],["rowspan","1"],["style","width: 166px;"],["tabindex","0"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Doctor"])),(l()(),t["\u0275eld"](21,0,null,null,1,"th",[["aria-controls","myTable"],["aria-label","Date: activate to sort column ascending"],["class","sorting"],["colspan","1"],["rowspan","1"],["style","width: 119px;"],["tabindex","0"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Date"])),(l()(),t["\u0275eld"](23,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,g)),t["\u0275did"](25,278528,null,0,s.n,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),t["\u0275eld"](26,0,null,null,0,"div",[["class","clearfix"]],null,null,null,null,null)),(l()(),t["\u0275eld"](27,0,null,null,3,"div",[["class","row"]],null,null,null,null,null)),(l()(),t["\u0275eld"](28,0,null,null,2,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,b)),t["\u0275did"](30,16384,null,0,s.o,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,25,0,null==u.result?null:u.result.docs),l(n,30,0,u.result&&(null==u.result?null:u.result.totalDocs)>u.limit)}),null)}var f=t["\u0275ccf"]("app-payments",d,(function(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-payments",[],null,null,null,h,m)),t["\u0275did"](1,114688,null,0,d,[o.l,r.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]);class v{constructor(l,n,u,t,e,i){this.activatedRoute=l,this.authService=n,this.pharmacyService=u,this.notificationService=t,this.notifyService=e,this.router=i,this.result=null}ngOnInit(){this.activatedRoute.params.subscribe(l=>{this.prescriptionID=l.id,this.prescriptionID&&this.get()})}get(){this.pharmacyService.getPrescription(this.prescriptionID).subscribe(l=>{200==+l.status&&(this.result=l.data.docs[0],console.log(this.result))})}updatePrescriptionStatus(){this.pharmacyService.updatePrescriptionStatus(this.prescriptionID).subscribe(l=>{200==+l.status&&(this.notifyService.success("Marked Successfully"),this.sendNotification(),this.result.isPrescriptionGiven=!0)})}sendNotification(){let l={createdBy:this.authService.currentUserValue._id,description:"Prescription is Provided ",category:5,sentTo:[this.result.patient._id,this.result.createdBy._id]};this.notificationService.sendNotification(l)}}var x=u("ccyI"),C=u("iHlq"),w=u("L3Gz"),y=[[""]],_=t["\u0275crt"]({encapsulation:0,styles:y,data:{}});function P(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,3,"div",[["class","custom-control custom-checkbox disabled mr-2"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,0,"input",[["class","custom-control-input"],["disabled",""],["id","customCheck5"],["type","checkbox"]],[[8,"checked",0]],null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,1,"label",[["class","custom-control-label"],["for","customCheck5"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Morning"]))],null,(function(l,n){l(n,1,0,null==n.parent.context.$implicit?null:n.parent.context.$implicit.time.morning)}))}function T(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,3,"div",[["class","custom-control custom-checkbox disabled mr-2"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,0,"input",[["class","custom-control-input"],["disabled",""],["id","customCheck6"],["type","checkbox"]],[[8,"checked",0]],null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,1,"label",[["class","custom-control-label"],["for","customCheck6"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Afternoon"]))],null,(function(l,n){l(n,1,0,null==n.parent.context.$implicit?null:n.parent.context.$implicit.time.afternoon)}))}function k(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,3,"div",[["class","custom-control custom-checkbox disabled mr-2"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,0,"input",[["class","custom-control-input"],["disabled",""],["id","customCheck7"],["type","checkbox"]],[[8,"checked",0]],null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,1,"label",[["class","custom-control-label"],["for","customCheck7"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Evening"]))],null,(function(l,n){l(n,1,0,null==n.parent.context.$implicit?null:n.parent.context.$implicit.time.evening)}))}function O(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,3,"div",[["class","custom-control custom-checkbox disabled mr-2"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,0,"input",[["class","custom-control-input"],["disabled",""],["id","customCheck8"],["type","checkbox"]],[[8,"checked",0]],null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,1,"label",[["class","custom-control-label"],["for","customCheck8"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Night"]))],null,(function(l,n){l(n,1,0,null==n.parent.context.$implicit?null:n.parent.context.$implicit.time.night)}))}function I(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,18,"tr",[],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,1,"td",[["class","text-center"]],null,null,null,null,null)),(l()(),t["\u0275ted"](2,null,[" "," "])),(l()(),t["\u0275eld"](3,0,null,null,1,"td",[["class","custom-width"]],null,null,null,null,null)),(l()(),t["\u0275ted"](4,null,[" "," "])),(l()(),t["\u0275eld"](5,0,null,null,1,"td",[["class","text-center"]],null,null,null,null,null)),(l()(),t["\u0275ted"](6,null,[""," "])),(l()(),t["\u0275eld"](7,0,null,null,1,"td",[["class","text-center"]],null,null,null,null,null)),(l()(),t["\u0275ted"](8,null,[" "," "])),(l()(),t["\u0275eld"](9,0,null,null,9,"td",[["class",""]],null,null,null,null,null)),(l()(),t["\u0275eld"](10,0,null,null,8,"div",[["class",""]],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,P)),t["\u0275did"](12,16384,null,0,s.o,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,T)),t["\u0275did"](14,16384,null,0,s.o,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,k)),t["\u0275did"](16,16384,null,0,s.o,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,O)),t["\u0275did"](18,16384,null,0,s.o,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,12,0,null==n.context.$implicit?null:n.context.$implicit.time.morning),l(n,14,0,null==n.context.$implicit?null:n.context.$implicit.time.afternoon),l(n,16,0,null==n.context.$implicit?null:n.context.$implicit.time.evening),l(n,18,0,null==n.context.$implicit?null:n.context.$implicit.time.night)}),(function(l,n){l(n,2,0,n.context.index+1),l(n,4,0,null==n.context.$implicit?null:n.context.$implicit.name),l(n,6,0,null==n.context.$implicit?null:n.context.$implicit.quantity),l(n,8,0,null==n.context.$implicit?null:n.context.$implicit.days)}))}function M(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,18,"div",[["class","row my-4"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,17,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,16,"div",[["class","table-responsive"]],null,null,null,null,null)),(l()(),t["\u0275eld"](3,0,null,null,15,"table",[["class","table table-hover"]],null,null,null,null,null)),(l()(),t["\u0275eld"](4,0,null,null,11,"thead",[],null,null,null,null,null)),(l()(),t["\u0275eld"](5,0,null,null,10,"tr",[],null,null,null,null,null)),(l()(),t["\u0275eld"](6,0,null,null,1,"th",[["class","text-center"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["#"])),(l()(),t["\u0275eld"](8,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Name"])),(l()(),t["\u0275eld"](10,0,null,null,1,"th",[["class","text-center"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Quantity"])),(l()(),t["\u0275eld"](12,0,null,null,1,"th",[["class","text-center"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Days"])),(l()(),t["\u0275eld"](14,0,null,null,1,"th",[["class",""]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Time"])),(l()(),t["\u0275eld"](16,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,I)),t["\u0275did"](18,278528,null,0,s.n,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var u=n.component;l(n,18,0,null==u.result?null:u.result.prescription)}),null)}function $(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"button",[["class","btn btn-primary"],["type","submit"]],null,[[null,"click"]],(function(l,n,u){var t=!0,e=l.component;"click"===n&&(t=!1!==e.updatePrescriptionStatus()&&t);return t}),null,null)),(l()(),t["\u0275eld"](1,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,[" Marka as Completed "]))],null,null)}function R(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"button",[["class","btn btn-success"],["type","button"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,[" Completed "]))],null,null)}function S(l){return t["\u0275vid"](0,[t["\u0275pid"](0,s.f,[t.LOCALE_ID]),(l()(),t["\u0275eld"](1,0,null,null,53,"div",[["class","row"]],null,null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,46,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),t["\u0275eld"](3,0,null,null,45,"div",[["class","card"]],null,null,null,null,null)),(l()(),t["\u0275eld"](4,0,null,null,44,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t["\u0275eld"](5,0,null,null,4,"h3",[],null,null,null,null,null)),(l()(),t["\u0275eld"](6,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Prescription"])),(l()(),t["\u0275eld"](8,0,null,null,1,"span",[["class","pull-right"]],null,null,null,null,null)),(l()(),t["\u0275ted"](9,null,["# "," "])),(l()(),t["\u0275eld"](10,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),t["\u0275eld"](11,0,null,null,37,"div",[["class","row"]],null,null,null,null,null)),(l()(),t["\u0275eld"](12,0,null,null,30,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),t["\u0275eld"](13,0,null,null,13,"div",[["class","pull-left"]],null,null,null,null,null)),(l()(),t["\u0275eld"](14,0,null,null,12,"address",[],null,null,null,null,null)),(l()(),t["\u0275eld"](15,0,null,null,3,"h3",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,[" \xa0"])),(l()(),t["\u0275eld"](17,0,null,null,1,"b",[["class","text-danger"]],null,null,null,null,null)),(l()(),t["\u0275ted"](18,null,[" "," "])),(l()(),t["\u0275eld"](19,0,null,null,7,"p",[["class","text-muted m-l-5"]],null,null,null,null,null)),(l()(),t["\u0275ted"](20,null,[" ",", "])),(l()(),t["\u0275eld"](21,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t["\u0275ted"](22,null,[" ",", "])),(l()(),t["\u0275eld"](23,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t["\u0275ted"](24,null,[" ",", "])),(l()(),t["\u0275eld"](25,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t["\u0275ted"](26,null,[" Phone: "," "])),(l()(),t["\u0275eld"](27,0,null,null,15,"div",[["class","pull-right text-right"]],null,null,null,null,null)),(l()(),t["\u0275eld"](28,0,null,null,14,"address",[],null,null,null,null,null)),(l()(),t["\u0275eld"](29,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["To,"])),(l()(),t["\u0275eld"](31,0,null,null,1,"h4",[["class","font-bold"]],null,null,null,null,null)),(l()(),t["\u0275ted"](32,null,["",""])),(l()(),t["\u0275eld"](33,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Doctor,"])),(l()(),t["\u0275eld"](35,0,null,null,1,"h4",[["class","font-bold"]],null,null,null,null,null)),(l()(),t["\u0275ted"](36,null,["",""])),(l()(),t["\u0275eld"](37,0,null,null,5,"p",[["class","m-t-30"]],null,null,null,null,null)),(l()(),t["\u0275eld"](38,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,[" Date :"])),(l()(),t["\u0275eld"](40,0,null,null,0,"i",[["class","fa fa-calendar"]],null,null,null,null,null)),(l()(),t["\u0275ted"](41,null,[" ",""])),t["\u0275ppd"](42,1),(l()(),t["\u0275eld"](43,0,null,null,5,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),t["\u0275eld"](44,0,null,null,4,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t["\u0275eld"](45,0,null,null,1,"label",[["for","form19"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Prescription"])),(l()(),t["\u0275and"](16777216,null,null,1,null,M)),t["\u0275did"](48,16384,null,0,s.o,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](49,0,null,null,5,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),t["\u0275eld"](50,0,null,null,4,"div",[["class","text-right"]],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,$)),t["\u0275did"](52,16384,null,0,s.o,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,R)),t["\u0275did"](54,16384,null,0,s.o,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,48,0,0!==(null==u.result?null:u.result.prescription.length)),l(n,52,0,!(null!=u.result&&u.result.isPrescriptionGiven)),l(n,54,0,null==u.result?null:u.result.isPrescriptionGiven)}),(function(l,n){var u=n.component;l(n,9,0,null==u.result?null:u.result._id),l(n,18,0,null==u.result?null:u.result.hospital.name),l(n,20,0,null==u.result?null:u.result.hospital.address),l(n,22,0,null==u.result?null:u.result.hospital.city),l(n,24,0,null==u.result?null:u.result.hospital.state),l(n,26,0,null==u.result?null:null==u.result.hospital?null:u.result.hospital.phone),l(n,32,0,null==u.result?null:null==u.result.patient?null:u.result.patient.name),l(n,36,0,null==u.result?null:null==u.result.createdBy?null:u.result.createdBy.name);var e=t["\u0275unv"](n,41,0,l(n,42,0,t["\u0275nov"](n,0),null==u.result?null:u.result.createdAt));l(n,41,0,e)}))}var D=t["\u0275ccf"]("app-invoice",v,(function(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-invoice",[],null,null,null,S,_)),t["\u0275did"](1,114688,null,0,v,[o.a,x.a,r.a,C.a,w.a,o.l],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),N=u("s7LF");class A{}var F=u("mtxq"),V=u("/ZwX"),q=u("hrfs"),L=u("wTG2"),z=u("CCdC"),G=u("pYyI"),E=u("PCNd");u.d(n,"PrescriptionModuleNgFactory",(function(){return B}));var B=t["\u0275cmf"](e,[],(function(l){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[i.a,f,D,a.a,a.b,a.n,a.o,a.k,a.l,a.m]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,s.q,s.p,[t.LOCALE_ID,[2,s.L]]),t["\u0275mpd"](4608,N.A,N.A,[]),t["\u0275mpd"](4608,N.e,N.e,[]),t["\u0275mpd"](4608,c.E,c.E,[t.ComponentFactoryResolver,t.Injector,c.Ab,c.F]),t["\u0275mpd"](1073742336,s.c,s.c,[]),t["\u0275mpd"](1073742336,o.p,o.p,[[2,o.u],[2,o.l]]),t["\u0275mpd"](1073742336,A,A,[]),t["\u0275mpd"](1073742336,N.z,N.z,[]),t["\u0275mpd"](1073742336,N.l,N.l,[]),t["\u0275mpd"](1073742336,N.w,N.w,[]),t["\u0275mpd"](1073742336,F.a,F.a,[]),t["\u0275mpd"](1073742336,c.c,c.c,[]),t["\u0275mpd"](1073742336,c.f,c.f,[]),t["\u0275mpd"](1073742336,c.g,c.g,[]),t["\u0275mpd"](1073742336,c.k,c.k,[]),t["\u0275mpd"](1073742336,c.l,c.l,[]),t["\u0275mpd"](1073742336,c.s,c.s,[]),t["\u0275mpd"](1073742336,c.z,c.z,[]),t["\u0275mpd"](1073742336,c.G,c.G,[]),t["\u0275mpd"](1073742336,c.N,c.N,[]),t["\u0275mpd"](1073742336,c.S,c.S,[]),t["\u0275mpd"](1073742336,c.X,c.X,[]),t["\u0275mpd"](1073742336,c.ab,c.ab,[]),t["\u0275mpd"](1073742336,c.db,c.db,[]),t["\u0275mpd"](1073742336,c.lb,c.lb,[]),t["\u0275mpd"](1073742336,c.ob,c.ob,[]),t["\u0275mpd"](1073742336,c.pb,c.pb,[]),t["\u0275mpd"](1073742336,c.qb,c.qb,[]),t["\u0275mpd"](1073742336,c.gb,c.gb,[]),t["\u0275mpd"](1073742336,c.H,c.H,[]),t["\u0275mpd"](1073742336,V.a,V.a,[]),t["\u0275mpd"](1073742336,q.b,q.b,[]),t["\u0275mpd"](1073742336,L.c,L.c,[]),t["\u0275mpd"](1073742336,z.c,z.c,[]),t["\u0275mpd"](1073742336,G.b,G.b,[]),t["\u0275mpd"](1073742336,E.a,E.a,[]),t["\u0275mpd"](1073742336,e,e,[]),t["\u0275mpd"](1024,o.j,(function(){return[[{path:"",children:[{path:"",component:d},{path:":id",component:v}]}]]}),[]),t["\u0275mpd"](256,L.d,L.e,[])])}))}}]);