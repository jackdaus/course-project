(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{CXQP:function(t,e,n){"use strict";n.r(e),n.d(e,"ShoppingListModule",(function(){return g}));var i=n("fXoL"),s=n("ozzT"),o=n("9rNa"),r=n("3Pt+"),c=n("ofXK");const b=["f"];function d(t,e){if(1&t){const t=i.Pb();i.Ob(0,"button",15),i.Wb("click",(function(){return i.lc(t),i.Yb().onDelete()})),i.rc(1,"Delete"),i.Nb()}}let u=(()=>{class t{constructor(t){this.shoppingListService=t,this.editMode=!1}ngOnInit(){this.subscription=this.shoppingListService.startedEditting.subscribe(t=>{this.editedItemIndex=t,this.editMode=!0,this.editedItem=this.shoppingListService.getIngredient(t),this.slForm.setValue({name:this.editedItem.name,amount:this.editedItem.amount})})}onSubmit(t){const e=new o.a(t.form.controls.name.value,t.form.controls.amount.value);this.editMode?this.shoppingListService.updateIngredient(this.editedItemIndex,e):this.shoppingListService.addIngredient(e),this.editMode=!1,t.reset()}onDelete(){this.shoppingListService.deleteIngredient(this.editedItemIndex),this.onClear()}onClear(){this.slForm.reset(),this.editMode=!1}ngOnDestroy(){this.subscription.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(i.Lb(s.a))},t.\u0275cmp=i.Fb({type:t,selectors:[["app-shopping-edit"]],viewQuery:function(t,e){var n;1&t&&i.vc(b,!0),2&t&&i.hc(n=i.Xb())&&(e.slForm=n.first)},decls:22,vars:4,consts:[[1,"row"],[1,"col-xs-12"],[3,"ngModel","ngSubmit"],["f","ngForm"],[1,"col-sm-5","form-group"],["for","name"],["type","text","id","name","ngModel","","name","name","required","",1,"form-control"],["nameInput","ngModel"],[1,"col-sm-2","form-group"],["for","amount"],["type","number","id","amount","ngModel","","name","amount","required","",1,"form-control",3,"pattern"],["amountInput","ngModel"],["type","submit",1,"btn","btn-success",3,"disabled"],["class","btn btn-danger","type","button",3,"click",4,"ngIf"],["type","button",1,"btn","btn-primary",3,"click"],["type","button",1,"btn","btn-danger",3,"click"]],template:function(t,e){if(1&t){const t=i.Pb();i.Ob(0,"div",0),i.Ob(1,"div",1),i.Ob(2,"form",2,3),i.Wb("ngSubmit",(function(){i.lc(t);const n=i.ic(3);return e.onSubmit(n)})),i.Ob(4,"div",0),i.Ob(5,"div",4),i.Ob(6,"label",5),i.rc(7,"Name"),i.Nb(),i.Mb(8,"input",6,7),i.Nb(),i.Ob(10,"div",8),i.Ob(11,"label",9),i.rc(12,"Amount"),i.Nb(),i.Mb(13,"input",10,11),i.Nb(),i.Nb(),i.Ob(15,"div",0),i.Ob(16,"div",1),i.Ob(17,"button",12),i.rc(18),i.Nb(),i.qc(19,d,2,0,"button",13),i.Ob(20,"button",14),i.Wb("click",(function(){return e.onClear()})),i.rc(21,"Clear"),i.Nb(),i.Nb(),i.Nb(),i.Nb(),i.Nb(),i.Nb()}if(2&t){const t=i.ic(3);i.Bb(13),i.dc("pattern","^[1-9]+[0*9]*$"),i.Bb(4),i.dc("disabled",!t.valid),i.Bb(1),i.sc(e.editMode?"Update":"Add"),i.Bb(1),i.dc("ngIf",e.editMode)}},directives:[r.u,r.m,r.n,r.l,r.o,r.a,r.s,r.p,r.q,c.k],styles:[""]}),t})();function p(t,e){if(1&t){const t=i.Pb();i.Ob(0,"a",4),i.Wb("click",(function(){i.lc(t);const n=e.index;return i.Yb().onEditItem(n)})),i.rc(1),i.Nb()}if(2&t){const t=e.$implicit;i.Bb(1),i.uc("",t.name," (",t.amount,")")}}let a=(()=>{class t{constructor(t){this.shoppingListService=t}ngOnInit(){this.ingredients=this.shoppingListService.getIngredients(),this.subscription=this.shoppingListService.ingredientsChanged.subscribe(t=>{this.ingredients=t})}onEditItem(t){this.shoppingListService.startedEditting.next(t)}ngOnDestroy(){this.subscription.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(i.Lb(s.a))},t.\u0275cmp=i.Fb({type:t,selectors:[["app-shopping-list"]],features:[i.Ab([])],decls:6,vars:1,consts:[[1,"row"],[1,"col-xs-10"],[1,"list-group"],["class","list-group-item","style","cursor: pointer",3,"click",4,"ngFor","ngForOf"],[1,"list-group-item",2,"cursor","pointer",3,"click"]],template:function(t,e){1&t&&(i.Ob(0,"div",0),i.Ob(1,"div",1),i.Mb(2,"app-shopping-edit"),i.Mb(3,"hr"),i.Ob(4,"ul",2),i.qc(5,p,2,2,"a",3),i.Nb(),i.Nb(),i.Nb()),2&t&&(i.Bb(5),i.dc("ngForOf",e.ingredients))},directives:[u,c.j],styles:[""]}),t})();var l=n("tyNb"),m=n("PCNd");let g=(()=>{class t{}return t.\u0275mod=i.Jb({type:t}),t.\u0275inj=i.Ib({factory:function(e){return new(e||t)},imports:[[m.a,l.f.forChild([{path:"",component:a}]),r.j]]}),t})()}}]);