"use strict";(self.webpackChunkmaterial_pro_angular_lite=self.webpackChunkmaterial_pro_angular_lite||[]).push([[612],{9612:(ft,U,n)=>{n.r(U),n.d(U,{DashboardModule:()=>ht});var C=n(1896),l=n(6814),h=n(4349),m=n(5861),Y=n(4157),f=n(4265),v=n(9347),b=n(1476),c=n(9538),Z=n(3566),N=n(3519),_=n.n(N),t=n(5879),q=n(6223),x=n(9240),Q=n(8005),p=n(1578),y=n(2296),u=n(5195),T=n(9157),M=n(617),A=n(2032);function E(o,s){1&o&&t._UZ(0,"th",18)}function J(o,s){if(1&o&&(t.TgZ(0,"td",19),t._UZ(1,"img",20),t.qZA()),2&o){const i=s.$implicit,e=t.oxw(2);t.xp6(1),t.hYB("src","",e.imgUser,"",i.img,"",t.LSH)}}function P(o,s){1&o&&(t.TgZ(0,"th",21),t._uU(1,"Usuario"),t.qZA())}function H(o,s){if(1&o&&(t.TgZ(0,"td",22),t._uU(1),t.TgZ(2,"p"),t._uU(3),t._UZ(4,"br"),t.TgZ(5,"small"),t._uU(6),t.qZA()()()),2&o){const i=s.$implicit;t.xp6(1),t.hij(" ",i.origin," "),t.xp6(2),t.hij(" ",i.name,""),t.xp6(3),t.Oqu(i.email)}}function L(o,s){1&o&&t._UZ(0,"th",18)}function B(o,s){if(1&o){const i=t.EpF();t.TgZ(0,"button",24),t.NdJ("click",function(){t.CHM(i);const a=t.oxw().$implicit,r=t.oxw(2);return t.KtG(r.add(a.uid))}),t.TgZ(1,"mat-icon"),t._uU(2,"group_add"),t.qZA()()}}function j(o,s){if(1&o&&(t.TgZ(0,"td",19),t.YNc(1,B,3,0,"button",23),t.qZA()),2&o){const i=s.$implicit,e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",i.uid!==e.yo&&!e.value)}}function R(o,s){1&o&&t._UZ(0,"tr",25)}const z=function(o){return{"fila-sin-time":o}};function G(o,s){1&o&&t._UZ(0,"tr",26),2&o&&t.Q6J("ngClass",t.VKq(1,z,s.$implicit.oid))}function k(o,s){if(1&o&&(t.TgZ(0,"tr",27)(1,"td",28),t._uU(2),t.qZA()()),2&o){t.oxw();const i=t.MAs(5);t.xp6(2),t.hij(' No data matching the filter "',i.value,'" ')}}const $=function(){return[5,10,25,100]};function X(o,s){if(1&o){const i=t.EpF();t.TgZ(0,"div")(1,"mat-form-field",3)(2,"mat-label"),t._uU(3,"Filter"),t.qZA(),t.TgZ(4,"input",4,5),t.NdJ("keyup",function(a){t.CHM(i);const r=t.oxw();return t.KtG(r.applyFilter(a))}),t.qZA()(),t.TgZ(6,"table",6),t.ynx(7,7),t.YNc(8,E,1,0,"th",8),t.YNc(9,J,2,2,"td",9),t.BQk(),t.ynx(10,10),t.YNc(11,P,2,0,"th",11),t.YNc(12,H,7,3,"td",12),t.BQk(),t.ynx(13,13),t.YNc(14,L,1,0,"th",8),t.YNc(15,j,2,1,"td",9),t.BQk(),t.YNc(16,R,1,0,"tr",14),t.YNc(17,G,1,3,"tr",15),t.YNc(18,k,3,1,"tr",16),t.qZA(),t._UZ(19,"mat-paginator",17),t.qZA()}if(2&o){const i=t.oxw();t.xp6(6),t.Q6J("dataSource",i.dataSource),t.xp6(10),t.Q6J("matHeaderRowDef",i.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",i.displayedColumns),t.xp6(2),t.Q6J("pageSizeOptions",t.DdM(4,$))}}function K(o,s){if(1&o&&(t.TgZ(0,"div",29)(1,"mat-card",30),t._UZ(2,"img",31),t.TgZ(3,"mat-card-content")(4,"div",32),t._UZ(5,"img",33),t.qZA(),t.TgZ(6,"h3",34),t._uU(7),t.qZA(),t.TgZ(8,"h6",35),t._uU(9),t.qZA(),t.TgZ(10,"div",36)(11,"div",37)(12,"button",38)(13,"mat-icon",39),t._uU(14,"feedback"),t.qZA()()(),t.TgZ(15,"div",37)(16,"h3",40),t._uU(17,"23,469"),t.qZA(),t.TgZ(18,"small"),t._uU(19,"Followers"),t.qZA()(),t.TgZ(20,"div",37)(21,"button",38)(22,"mat-icon"),t._uU(23,"add_alert"),t.qZA()()()()()(),t.TgZ(24,"mat-card",30),t._uU(25,"Publicado"),t.qZA()()),2&o){const i=t.oxw();t.xp6(2),t.hYB("src","",i.imgFondo,"",i.data.row.fondo,"",t.LSH),t.xp6(3),t.hYB("src","",i.imgUser,"",i.data.row.img,"",t.LSH),t.xp6(2),t.Oqu(i.data.row.name),t.xp6(2),t.Oqu(i.data.row.email)}}const w=f.N.base_url;let O=(()=>{class o{constructor(i,e,a,r,d,g,F){this.dialogRef=i,this.data=e,this.fb=a,this.userService=r,this.router=d,this._bottomSheet=g,this.utilsService=F,this.value=!1,this.displayedColumns=["img","origin","email"],this.usuarios=[],this.imgUser=w+"/upload/usuarios/",this.imgFondo=w+"/upload/fondo/",this.yo=this.userService.user.uid,this.update=!!e,this.getUser()}getUser(){var i=this;return(0,m.Z)(function*(){try{const a=(yield i.utilsService.getUsuarios()).usuarios||[],r=[];yield Promise.all(a.map(function(){var d=(0,m.Z)(function*(g){(yield i.isFriend(g.uid))||r.push(g)});return function(g){return d.apply(this,arguments)}}())),i.usuarios=[...i.usuarios,...r],i.dataSource=new c.by(i.usuarios),i.dataSource.paginator=i.paginator}catch(e){console.error(e)}})()}ngAfterViewInit(){this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}applyFilter(i){this.dataSource.filter=i.target.value.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}applyFilterString(i){this.dataSource.filter=i.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}add(i){var e=this;return(0,m.Z)(function*(){try{yield e.utilsService.setFriend(i),e.onNoClick(),_().mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:2e3,timerProgressBar:!0,didOpen:d=>{d.addEventListener("mouseenter",_().stopTimer),d.addEventListener("mouseleave",_().resumeTimer)}}).fire({icon:"success",title:"Nuevo usuario a seguir."}),e.router.navigate(["/preload"])}catch(a){console.error("Error al agregar amigo",a)}})()}onNoClick(){this.dialogRef.close()}consola(i){console.log(i)}isFriend(i){var e=this;return(0,m.Z)(function*(){try{e.value=yield e.utilsService.isFriend(i)}catch(a){console.error("Error al obtener amigos",a)}})()}static#t=this.\u0275fac=function(e){return new(e||o)(t.Y36(v.so),t.Y36(v.WI),t.Y36(q.qu),t.Y36(x.i),t.Y36(C.F0),t.Y36(Q.ch),t.Y36(p.F))};static#i=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-dialog-usuarios"]],viewQuery:function(e,a){if(1&e&&(t.Gf(b.NW,5),t.Gf(Z.YE,5)),2&e){let r;t.iGM(r=t.CRH())&&(a.paginator=r.first),t.iGM(r=t.CRH())&&(a.sort=r.first)}},inputs:{tipe:"tipe"},decls:3,vars:2,consts:[[2,"width","100vh","height","70vh"],[4,"ngIf"],["style","height: 100%;",4,"ngIf"],[1,"custom-mat-form-field",2,"margin","0 0 -10px"],["matInput","","placeholder","Ex. Mia",3,"keyup"],["input",""],["mat-table","","matSort","",1,"demo-table",3,"dataSource"],["matColumnDef","img"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","","class","text-center",4,"matCellDef"],["matColumnDef","origin"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","email"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"ngClass",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["aria-label","Select page of users",3,"pageSizeOptions"],["mat-header-cell",""],["mat-cell","",1,"text-center"],["img","","alt","user",1,"img-circle",2,"width","40px",3,"src"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-icon-button","","aria-label","Example icon button with a vertical three dot icon",3,"click",4,"ngIf"],["mat-icon-button","","aria-label","Example icon button with a vertical three dot icon",3,"click"],["mat-header-row",""],["mat-row","",3,"ngClass"],[1,"mat-row"],["colspan","4",1,"mat-cell"],[2,"height","100%"],[1,"oh","text-center","little-profile"],["mat-card-image","","alt","Photo of a Shiba Inu",2,"height","20vh","object-fit","cover",3,"src"],[1,"pro-img"],["width","100","alt","user",1,"img-circle",3,"src"],[1,"m-b-0"],[1,"m-t-0"],[1,"row","m-t-30"],[1,"col-4"],["mat-icon-button","",2,"margin-right","10px"],["matBadgeColor","warn"],[1,"m-0","font-light"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0),t.YNc(1,X,20,5,"div",1),t.YNc(2,K,26,6,"div",2),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf",!a.update),t.xp6(1),t.Q6J("ngIf",a.update))},dependencies:[l.mk,l.O5,y.RK,u.a8,u.dn,u.G2,c.BZ,c.fO,c.as,c.w1,c.Dz,c.nj,c.ge,c.ev,c.XQ,c.Gk,c.Ee,T.KE,T.hX,M.Hw,A.Nt,b.NW,Z.YE,Z.nU]})}return o})();function W(o,s){if(1&o){const i=t.EpF();t.TgZ(0,"div",6)(1,"a",7),t.NdJ("click",function(){const r=t.CHM(i).$implicit,d=t.oxw();return t.KtG(d.openDialog(r.user))}),t.TgZ(2,"div",8),t._UZ(3,"img",9),t.qZA(),t.TgZ(4,"div",10)(5,"h5"),t._uU(6),t.qZA(),t.TgZ(7,"span",11),t._uU(8),t.qZA()()()()}if(2&o){const i=s.$implicit,e=t.oxw();t.xp6(3),t.Q6J("src",e.imgUser+i.user.img,t.LSH),t.xp6(3),t.hij("",i.user.name," "),t.xp6(2),t.Oqu(i.user.email)}}const V=f.N.base_url;let tt=(()=>{class o{constructor(i,e,a){this.userService=i,this.utilsService=e,this.dialog=a,this.friends=[],this.imgUser=V+"/upload/usuarios/"}ngOnInit(){var i=this;return(0,m.Z)(function*(){yield i.getFriends()})()}getFriends(){var i=this;return(0,m.Z)(function*(){try{const e=yield i.utilsService.getFriends(),a=[];for(const r of e)a.push(yield i.utilsService.getUserByUID(r.fid));i.friends=a}catch(e){console.error("Error al obtener amigos",e)}})()}openDialog(i){let e;e=i?this.dialog.open(O,{data:{row:i}}):this.dialog.open(O),e.afterClosed().subscribe(a=>{console.log("The dialog was closed")})}static#t=this.\u0275fac=function(e){return new(e||o)(t.Y36(x.i),t.Y36(p.F),t.Y36(v.uw))};static#i=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-contacts"]],standalone:!0,features:[t.jDz],decls:10,vars:1,consts:[[1,"p-20","bg-info","position-relative"],[1,"card-title","text-white","m-0"],[1,"card-subtitle","text-white","m-0","op-5"],["mat-mini-fab","","color","accent",1,"add-contact",3,"click"],[1,"message-box","contact-box","p-20"],["class","message-widget contact-widget",4,"ngFor","ngForOf"],[1,"message-widget","contact-widget"],[3,"click"],[1,"user-img"],["alt","user",1,"img-circle",3,"src"],[1,"mail-contnet"],[1,"mail-desc"]],template:function(e,a){1&e&&(t.TgZ(0,"mat-card")(1,"div",0)(2,"h4",1),t._uU(3,"Seguidos"),t.qZA(),t.TgZ(4,"h6",2),t._uU(5,"Usuarios a los que sigues"),t.qZA(),t.TgZ(6,"button",3),t.NdJ("click",function(){return a.openDialog()}),t._uU(7,"+"),t.qZA()(),t.TgZ(8,"div",4),t.YNc(9,W,9,3,"div",5),t.qZA()()),2&e&&(t.xp6(9),t.Q6J("ngForOf",a.friends))},dependencies:[h.O,y.nh,u.a8,l.ax],encapsulation:2})}return o})();var it=n(3680),et=n(8525),S=n(4104);function ot(o,s){if(1&o&&(t.TgZ(0,"div",5)(1,"div",23),t._UZ(2,"img",17),t.qZA()()),2&o){const i=t.oxw().$implicit,e=t.oxw();t.xp6(2),t.hYB("src","",e.imgUrl,"",i.img,"",t.LSH)}}function at(o,s){if(1&o&&(t.TgZ(0,"button",24),t._uU(1,"Check Now"),t.qZA()),2&o){const i=t.oxw().$implicit;t.s9C("color",i.origin)}}function nt(o,s){if(1&o&&(t.TgZ(0,"div",15)(1,"div",16),t._UZ(2,"img",17),t.qZA(),t.TgZ(3,"div",18)(4,"h4",19),t._uU(5),t.ALo(6,"currency"),t.TgZ(7,"small",20),t._uU(8),t.ALo(9,"date"),t.qZA()(),t.TgZ(10,"p",20),t._uU(11),t.qZA(),t.YNc(12,ot,3,2,"div",21),t.YNc(13,at,2,1,"button",22),t.qZA()()),2&o){const i=s.$implicit,e=t.oxw();t.xp6(2),t.hYB("src","",e.imgUrl,"",i.img,"",t.LSH),t.xp6(3),t.hij("",t.xi3(6,7,i.cant.toString(),"EUR")," "),t.xp6(3),t.hij("(",t.lcZ(9,10,i.createAt),")"),t.xp6(3),t.Oqu(i.origin),t.xp6(1),t.Q6J("ngIf",""!==i.origin),t.xp6(1),t.Q6J("ngIf",""===i.origin)}}const rt=f.N.base_url;let st=(()=>{class o{constructor(i,e){this.usuarioService=i,this.utilsService=e,this.imgUrl=rt+"/upload/incomes/",this.usuario=i.user,e.getMovByUID().then(r=>{r.forEach(d=>{"http://localhost:3000/api/upload/incomes/card.png"===d.img&&(d.img="card.png")}),this.activityData=r})}ngOnInit(){}static#t=this.\u0275fac=function(e){return new(e||o)(t.Y36(x.i),t.Y36(p.F))};static#i=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-activity-timeline"]],standalone:!0,features:[t.jDz],decls:36,vars:1,consts:[["mat-stretch-tabs","false"],["label","Activity"],["class","d-flex no-blcok",4,"ngFor","ngForOf"],["label","Profile"],[1,"basic-form"],[1,"row"],[1,"col-12"],["appearance","outline"],["matInput","","placeholder","Some text value"],["matInput","","placeholder","EmailId","type","email"],["matInput","","placeholder","Password","type","password"],["placeholder","Select"],["value","option"],["matInput","","placeholder","Textarea"],["mat-flat-button","","color","primary"],[1,"d-flex","no-blcok"],[1,"m-r-20"],["width","50","alt","Image",1,"img-circle",3,"src"],[1,"p-b-20","b-b","m-b-30"],[1,"m-0"],[1,"text-muted"],["class","row",4,"ngIf"],["mat-raised-button","",3,"color",4,"ngIf"],[1,"col-md-3"],["mat-raised-button","",3,"color"]],template:function(e,a){1&e&&(t.TgZ(0,"mat-card")(1,"mat-tab-group",0)(2,"mat-tab",1)(3,"mat-card-content"),t.YNc(4,nt,14,12,"div",2),t._uU(5,"> "),t.qZA()(),t.TgZ(6,"mat-tab",3)(7,"mat-card-content")(8,"mat-card-title"),t._uU(9,"Form Basic Layouts"),t.qZA(),t.TgZ(10,"form",4)(11,"div",5)(12,"div",6)(13,"mat-form-field",7),t._UZ(14,"input",8),t.qZA()(),t.TgZ(15,"div",6)(16,"mat-form-field",7),t._UZ(17,"input",9),t.qZA()(),t.TgZ(18,"div",6)(19,"mat-form-field",7),t._UZ(20,"input",10),t.qZA()(),t.TgZ(21,"div",6)(22,"mat-form-field",7)(23,"mat-select",11)(24,"mat-option",12),t._uU(25,"Option"),t.qZA(),t.TgZ(26,"mat-option",12),t._uU(27,"Option2"),t.qZA(),t.TgZ(28,"mat-option",12),t._uU(29,"Option3"),t.qZA()()()(),t.TgZ(30,"div",6)(31,"mat-form-field",7),t._UZ(32,"textarea",13),t.qZA()(),t.TgZ(33,"div",6)(34,"button",14),t._uU(35,"Update Profile"),t.qZA()()()()()()()()),2&e&&(t.xp6(4),t.Q6J("ngForOf",a.activityData))},dependencies:[h.O,it.ey,y.lW,u.a8,u.dn,u.n5,T.KE,A.Nt,et.gD,S.uX,S.SP,l.O5,l.ax,l.ez,l.H9,l.uU],encapsulation:2})}return o})();var ct=n(3486);function lt(o,s){1&o&&(t.TgZ(0,"div",1)(1,"div",2)(2,"div",3),t._UZ(3,"div",4),t.TgZ(4,"p"),t._uU(5,"Cargando..."),t.qZA()(),t._UZ(6,"div",5),t.qZA()())}function dt(o,s){1&o&&(t.TgZ(0,"div",1)(1,"div",6),t._UZ(2,"app-profile")(3,"app-contacts"),t.qZA(),t.TgZ(4,"div",7),t._UZ(5,"app-activity-timeline"),t.qZA()())}let D=(()=>{class o{constructor(i){this.utilsService=i,sessionStorage.setItem("pag","dash")}ngAfterViewInit(){}ngOnInit(){var i=this;return(0,m.Z)(function*(){sessionStorage.setItem("pag","futuro");try{i.resp=yield i.getSaving()}catch(e){console.error(e)}})()}getSaving(){var i=this;return(0,m.Z)(function*(){try{return yield i.utilsService.getIncomes()}catch(e){throw console.error(e),e}})()}static#t=this.\u0275fac=function(e){return new(e||o)(t.Y36(p.F))};static#i=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-dashboard"]],standalone:!0,features:[t.jDz],decls:3,vars:2,consts:[["class","row",4,"ngIf"],[1,"row"],[1,"body"],[1,"preload-container"],[1,"loader"],[1,"content"],[1,"col-lg-3","col-sm-12"],[1,"col-lg-9","col-sm-12"]],template:function(e,a){1&e&&(t._UZ(0,"app-top-dash"),t.YNc(1,lt,7,0,"div",0),t.YNc(2,dt,6,0,"div",0)),2&e&&(t.xp6(1),t.Q6J("ngIf",!a.resp),t.xp6(1),t.Q6J("ngIf",a.resp))},dependencies:[Y.d,tt,st,ct.s,l.ez,l.O5],styles:['@charset "UTF-8";.body[_ngcontent-%COMP%]{margin:0;padding:0;font-family:Arial,sans-serif;background-color:#f0f0f0}.preload-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;position:fixed;top:0;left:0;width:100%;height:100%;background-color:#fffdfdcc;color:#005562;z-index:1000;opacity:1;transition:opacity .5s}.loader[_ngcontent-%COMP%]{border:8px solid #f3f3f3;border-top:8px solid #005562;border-radius:50%;width:60px;height:60px;animation:_ngcontent-%COMP%_spin 2s linear infinite}@keyframes _ngcontent-%COMP%_spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.content[_ngcontent-%COMP%]{display:none}.loaded[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{display:block}.loaded[_ngcontent-%COMP%]   .preload-container[_ngcontent-%COMP%]{opacity:0;pointer-events:none;display:none}']})}return o})();const mt=[{path:"",component:D}];var I=n(6903),ut=n(3394);const pt=["chart"];let gt=(()=>{class o{constructor(i,e){this.incomeService=i,this.utilsService=e,this.chart=Object.create(null),this.incomes=[],this.incomesActive=[],this.cantIng=0,this.cantGast=0,this.cantSaving=[],this.chartOptions={series:[{name:"Ingresos",data:[this.cantIng]}],chart:{type:"bar",fontFamily:"Poppins,sans-serif",height:320},grid:{borderColor:"rgba(0,0,0,.2)",strokeDashArray:6},plotOptions:{bar:{horizontal:!1,columnWidth:"90%"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:["Ene"]},legend:{show:!1},fill:{colors:["#209287"],opacity:1},tooltip:{theme:"dark"}}}ngOnInit(){this.getIncomes()}nuevo(){this.chartOptions={series:[{name:"Ingresos",data:[this.cantIng]}],chart:{type:"bar",height:200},grid:{strokeDashArray:0},plotOptions:{bar:{horizontal:!1,columnWidth:"90%"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:["Ene"]},legend:{show:!0},fill:{colors:["#209287","#209287"],opacity:1},tooltip:{theme:"dark"}}}getIncomes(){var i=this;return(0,m.Z)(function*(){try{const e=yield i.utilsService.getIncomes();i.cantIng=e[1],i.cantGast=e[0],i.nuevo()}catch(e){console.error(e)}})()}static#t=this.\u0275fac=function(e){return new(e||o)(t.Y36(ut.t),t.Y36(p.F))};static#i=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-spinner"]],viewQuery:function(e,a){if(1&e&&t.Gf(pt,5),2&e){let r;t.iGM(r=t.CRH())&&(a.chart=r.first)}},standalone:!0,features:[t.jDz],decls:3,vars:11,consts:[[3,"series","chart","dataLabels","plotOptions","yaxis","legend","fill","stroke","tooltip","xaxis","grid"]],template:function(e,a){1&e&&(t.TgZ(0,"mat-card-content")(1,"div"),t._UZ(2,"apx-chart",0),t.qZA()()),2&e&&(t.xp6(2),t.Q6J("series",a.chartOptions.series)("chart",a.chartOptions.chart)("dataLabels",a.chartOptions.dataLabels)("plotOptions",a.chartOptions.plotOptions)("yaxis",a.chartOptions.yaxis)("legend",a.chartOptions.legend)("fill",a.chartOptions.fill)("stroke",a.chartOptions.stroke)("tooltip",a.chartOptions.tooltip)("xaxis",a.chartOptions.xaxis)("grid",a.chartOptions.grid))},dependencies:[I.X,I.x,h.O,u.dn]})}return o})(),ht=(()=>{class o{static#t=this.\u0275fac=function(e){return new(e||o)};static#i=this.\u0275mod=t.oAB({type:o});static#e=this.\u0275inj=t.cJS({imports:[l.ez,h.O,C.Bz.forChild(mt),D,gt]})}return o})()}}]);