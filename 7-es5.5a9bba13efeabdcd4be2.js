function _createForOfIteratorHelper(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=_unsupportedIterableToArray(e))){var t=0,i=function(){};return{s:i,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,n,c=!0,o=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return c=e.done,e},e:function(e){o=!0,n=e},f:function(){try{c||null==r.return||r.return()}finally{if(o)throw n}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"7Lvj":function(e,t,i){"use strict";i.r(t),i.d(t,"RecipesModule",(function(){return G}));var r=i("3Pt+"),n=function e(t,i,r,n,c){_classCallCheck(this,e),this.id=t,this.name=i,this.description=r,this.imagePath=n,this.ingredients=c},c=i("fXoL"),o=i("tyNb"),a=i("DBWA"),s=i("GXvH"),u=i("ofXK");function b(e,t){if(1&e){var i=c.Pb();c.Ob(0,"div",17),c.Ob(1,"div",18),c.Mb(2,"input",19),c.Nb(),c.Ob(3,"div",20),c.Mb(4,"input",21),c.Nb(),c.Ob(5,"div",20),c.Ob(6,"button",4),c.Wb("click",(function(){c.lc(i);var e=t.index;return c.Yb().onDeleteIngredient(e)})),c.rc(7,"x"),c.Nb(),c.Nb(),c.Nb()}2&e&&c.dc("formGroupName",t.index)}var l,p,d,f=((p=function(){function e(t,i,r,n){_classCallCheck(this,e),this.route=t,this.recipeService=i,this.router=r,this.dataStorageService=n,this.editMode=!1}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.route.params.subscribe((function(t){e.id=+t.id,e.editMode=null!=t.id,e.initForm()}))}},{key:"initForm",value:function(){var e="",t="",i="",n=new r.c([]);if(this.editMode){var c=this.recipeService.getRecipe(this.id);if(e=c.name,t=c.imagePath,i=c.description,c.ingredients){var o,a=_createForOfIteratorHelper(c.ingredients);try{for(a.s();!(o=a.n()).done;){var s=o.value;n.push(new r.g({name:new r.e(s.name,r.t.required),amount:new r.e(s.amount,[r.t.required,r.t.pattern(/^[1-9]+[0*9]*$/)])}))}}catch(u){a.e(u)}finally{a.f()}}}this.recipeForm=new r.g({name:new r.e(e,r.t.required),imagePath:new r.e(t,r.t.required),description:new r.e(i,r.t.required),ingredients:n})}},{key:"onSubmit",value:function(){var e=new n(2,this.recipeForm.value.name,this.recipeForm.value.description,this.recipeForm.value.imagePath,this.recipeForm.value.ingredients);if(this.editMode)this.recipeService.updateRecipe(this.id,e),this.router.navigate(["/recipes",this.id]);else{this.recipeService.addRecipe(e);var t=this.recipeService.getRecipes().length-1;this.router.navigate(["/recipes",t])}this.dataStorageService.storeRecipes()}},{key:"onDeleteIngredient",value:function(e){console.log(this.recipeForm.controls.ingredients),this.recipeForm.controls.ingredients.removeAt(e)}},{key:"onAddIngredient",value:function(){this.recipeForm.controls.ingredients.push(new r.g({name:new r.e(null,r.t.required),amount:new r.e(null,[r.t.required,r.t.pattern(/^[1-9]+[0*9]*$/)])}))}},{key:"onCancel",value:function(){this.router.navigate(["../"],{relativeTo:this.route})}},{key:"controls",get:function(){return this.recipeForm.get("ingredients").controls}}]),e}()).\u0275fac=function(e){return new(e||p)(c.Lb(o.a),c.Lb(a.a),c.Lb(o.c),c.Lb(s.a))},p.\u0275cmp=c.Fb({type:p,selectors:[["app-recipe-edit"]],decls:39,vars:4,consts:[[1,"row"],[1,"col-xs-12"],[3,"formGroup","ngSubmit"],["type","submit",1,"btn","btn-success",3,"disabled"],["type","button",1,"btn","btn-danger",3,"click"],[1,"form-group"],["for","name"],["type","text","id","name","formControlName","name",1,"form-control"],["for","imagePath"],["type","text","id","imagePath","formControlName","imagePath",1,"form-control"],["imagePath",""],[1,"img-responsive",3,"src"],["for","description"],["type","text","id","description","rows","6","formControlName","description",1,"form-control"],["formArrayName","ingredients",1,"col-xs-12"],["class","row","style","margin-top: 10px",3,"formGroupName",4,"ngFor","ngForOf"],["type","button",1,"btn",3,"click"],[1,"row",2,"margin-top","10px",3,"formGroupName"],[1,"col-xs-8"],["type","text","formControlName","name",1,"form-control"],[1,"col-xs-2"],["type","number","formControlName","amount",1,"form-control"]],template:function(e,t){if(1&e&&(c.Ob(0,"div",0),c.Ob(1,"div",1),c.Ob(2,"form",2),c.Wb("ngSubmit",(function(){return t.onSubmit()})),c.Ob(3,"div",0),c.Ob(4,"div",1),c.Ob(5,"button",3),c.rc(6,"Save"),c.Nb(),c.Ob(7,"button",4),c.Wb("click",(function(){return t.onCancel()})),c.rc(8,"Cancel"),c.Nb(),c.Nb(),c.Nb(),c.Ob(9,"div",0),c.Ob(10,"div",1),c.Ob(11,"div",5),c.Ob(12,"label",6),c.rc(13,"Name"),c.Nb(),c.Mb(14,"input",7),c.Nb(),c.Nb(),c.Nb(),c.Ob(15,"div",0),c.Ob(16,"div",1),c.Ob(17,"div",5),c.Ob(18,"label",8),c.rc(19,"Image URL"),c.Nb(),c.Mb(20,"input",9,10),c.Nb(),c.Nb(),c.Nb(),c.Ob(22,"div",0),c.Ob(23,"div",1),c.Mb(24,"img",11),c.Nb(),c.Nb(),c.Ob(25,"div",0),c.Ob(26,"div",1),c.Ob(27,"div",5),c.Ob(28,"label",12),c.rc(29,"Description"),c.Nb(),c.Mb(30,"textarea",13),c.Nb(),c.Nb(),c.Nb(),c.Ob(31,"div",0),c.Ob(32,"div",14),c.qc(33,b,8,1,"div",15),c.Nb(),c.Nb(),c.Mb(34,"hr"),c.Ob(35,"div",0),c.Ob(36,"div",1),c.Ob(37,"button",16),c.Wb("click",(function(){return t.onAddIngredient()})),c.rc(38,"Add Ingredient"),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb()),2&e){var i=c.ic(21);c.Bb(2),c.dc("formGroup",t.recipeForm),c.Bb(3),c.dc("disabled",!t.recipeForm.valid),c.Bb(19),c.dc("src",i.value,c.mc),c.Bb(9),c.dc("ngForOf",t.controls)}},directives:[r.u,r.m,r.h,r.a,r.l,r.f,r.d,u.j,r.i,r.p],styles:["input.ng-invalid.ng-touched[_ngcontent-%COMP%], textarea.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}"]}),p),v=((l=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||l)},l.\u0275cmp=c.Fb({type:l,selectors:[["app-recipe-start"]],decls:2,vars:0,template:function(e,t){1&e&&(c.Ob(0,"h3"),c.rc(1,"Please select a recipe."),c.Nb())},styles:[""]}),l),m=function(e){return["/recipes",e]},h=((d=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||d)},d.\u0275cmp=c.Fb({type:d,selectors:[["app-recipe-item"]],inputs:{recipe:"recipe",index:"index"},decls:8,vars:7,consts:[["routerLinkActive","active",1,"list-group-item","clearfix",2,"cursor","pointer",3,"routerLink"],[1,"pull-left"],[1,"list-group-item-heading"],[1,"list-group-item-text"],[1,"pull-right"],[1,"img-responsive",2,"max-height","50px",3,"src","alt"]],template:function(e,t){1&e&&(c.Ob(0,"a",0),c.Ob(1,"div",1),c.Ob(2,"h4",2),c.rc(3),c.Nb(),c.Ob(4,"p",3),c.rc(5),c.Nb(),c.Nb(),c.Ob(6,"span",4),c.Mb(7,"img",5),c.Nb(),c.Nb()),2&e&&(c.dc("routerLink",c.gc(5,m,t.index)),c.Bb(3),c.sc(t.recipe.name),c.Bb(2),c.sc(t.recipe.description),c.Bb(2),c.ec("src",t.recipe.imagePath,c.mc),c.ec("alt",t.recipe.name))},directives:[o.e,o.d],styles:[""]}),d);function g(e,t){if(1&e&&c.Mb(0,"app-recipe-item",4),2&e){var i=t.index;c.dc("recipe",t.$implicit)("index",i)}}var O,y,N=((y=function(){function e(t,i){_classCallCheck(this,e),this.recipeService=t,this.router=i}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.recipes=this.recipeService.getRecipes(),this.recipeSubscription=this.recipeService.recipesChanged.subscribe((function(t){e.recipes=t}))}},{key:"onNewRecipe",value:function(){this.router.navigate(["/recipes","new"])}},{key:"ngOnDestroy",value:function(){this.recipeSubscription.unsubscribe()}}]),e}()).\u0275fac=function(e){return new(e||y)(c.Lb(a.a),c.Lb(o.c))},y.\u0275cmp=c.Fb({type:y,selectors:[["app-recipe-list"]],decls:8,vars:1,consts:[[1,"row"],[1,"col-xs-12"],[1,"btn","btn-success",3,"click"],["routerLinkActive","active",3,"recipe","index",4,"ngFor","ngForOf"],["routerLinkActive","active",3,"recipe","index"]],template:function(e,t){1&e&&(c.Ob(0,"div",0),c.Ob(1,"div",1),c.Ob(2,"button",2),c.Wb("click",(function(){return t.onNewRecipe()})),c.rc(3,"New recipe"),c.Nb(),c.Nb(),c.Nb(),c.Mb(4,"hr"),c.Ob(5,"div",0),c.Ob(6,"div",1),c.qc(7,g,1,2,"app-recipe-item",3),c.Nb(),c.Nb()),2&e&&(c.Bb(7),c.dc("ngForOf",t.recipes))},directives:[u.j,h,o.d],styles:[""]}),y),k=((O=function(){function e(t){_classCallCheck(this,e),this.dataStorageService=t}return _createClass(e,[{key:"ngOnInit",value:function(){this.dataStorageService.retrieveRecipes().subscribe()}}]),e}()).\u0275fac=function(e){return new(e||O)(c.Lb(s.a))},O.\u0275cmp=c.Fb({type:O,selectors:[["app-recipes"]],decls:5,vars:0,consts:[[1,"ro"],[1,"col-md-5"],[1,"col-md-7"]],template:function(e,t){1&e&&(c.Ob(0,"div",0),c.Ob(1,"div",1),c.Mb(2,"app-recipe-list"),c.Nb(),c.Ob(3,"div",2),c.Mb(4,"router-outlet"),c.Nb(),c.Nb())},directives:[N,o.g],styles:[""]}),O),S=i("ozzT"),w=i("XiUz"),C=i("bTqV"),x=i("Qu3c"),F=i("NFeN");function _(e,t){if(1&e&&(c.Ob(0,"li",9),c.rc(1),c.Nb()),2&e){var i=t.$implicit;c.Bb(1),c.uc(" ",i.name," - ",i.amount," ")}}var I,L,A,R,M=((L=function(){function e(t,i,r,n,c){_classCallCheck(this,e),this.slService=t,this.recipeSerice=i,this.route=r,this.router=n,this.dataStorageService=c}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.route.params.subscribe((function(t){e.recipeIdFromRoute=t.id,e.recipe=e.recipeSerice.getRecipe(e.recipeIdFromRoute)}))}},{key:"sendToShoppingList",value:function(){var e,t=_createForOfIteratorHelper(this.recipe.ingredients);try{for(t.s();!(e=t.n()).done;){var i=e.value;this.slService.addIngredient(i)}}catch(r){t.e(r)}finally{t.f()}alert("Items sent to Shopping List!")}},{key:"editRecipe",value:function(){this.router.navigate(["edit"],{relativeTo:this.route})}},{key:"onDeleteRecipe",value:function(){this.recipeSerice.deleteRecipe(this.recipeIdFromRoute),this.dataStorageService.storeRecipes(),this.router.navigate(["recipes"])}}]),e}()).\u0275fac=function(e){return new(e||L)(c.Lb(S.a),c.Lb(a.a),c.Lb(o.a),c.Lb(o.c),c.Lb(s.a))},L.\u0275cmp=c.Fb({type:L,selectors:[["app-recipe-detail"]],decls:24,vars:5,consts:[[1,"row"],[1,"col-xs-12"],[1,"img-responsive",2,"max-height","300px",3,"src","alt"],["fxLayout","row","fxLayoutAlign","space-between end",1,"col-xs-12"],["mat-icon-button","","matTooltip","Send to shopping list",3,"click"],["mat-icon-button","","matTooltip","Edit recipe",3,"click"],["mat-icon-button","","matTooltip","Delete recipe",3,"click"],[1,"list-group"],["class","list-group-item",4,"ngFor","ngForOf"],[1,"list-group-item"]],template:function(e,t){1&e&&(c.Ob(0,"div",0),c.Ob(1,"div",1),c.Mb(2,"img",2),c.Nb(),c.Nb(),c.Ob(3,"div",0),c.Ob(4,"div",3),c.Ob(5,"h1"),c.rc(6),c.Nb(),c.Ob(7,"div"),c.Ob(8,"button",4),c.Wb("click",(function(){return t.sendToShoppingList()})),c.Ob(9,"mat-icon"),c.rc(10,"assignment"),c.Nb(),c.Nb(),c.Ob(11,"button",5),c.Wb("click",(function(){return t.editRecipe()})),c.Ob(12,"mat-icon"),c.rc(13,"edit"),c.Nb(),c.Nb(),c.Ob(14,"button",6),c.Wb("click",(function(){return t.onDeleteRecipe()})),c.Ob(15,"mat-icon"),c.rc(16,"delete"),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Ob(17,"div",0),c.Ob(18,"div",1),c.rc(19),c.Nb(),c.Nb(),c.Ob(20,"div",0),c.Ob(21,"div",1),c.Ob(22,"ul",7),c.qc(23,_,2,2,"li",8),c.Nb(),c.Nb(),c.Nb()),2&e&&(c.Bb(2),c.ec("alt",t.recipe.imagePath),c.dc("src",t.recipe.imagePath,c.mc),c.Bb(4),c.sc(t.recipe.name),c.Bb(13),c.tc(" ",t.recipe.description," "),c.Bb(4),c.dc("ngForOf",t.recipe.ingredients))},directives:[w.b,w.a,C.a,x.a,F.a,u.j],styles:[""]}),L),P=((I=function(){function e(t,i){_classCallCheck(this,e),this.dataStorageService=t,this.recipeService=i}return _createClass(e,[{key:"resolve",value:function(e,t){var i=this.recipeService.getRecipes();return 0===i.length?this.dataStorageService.retrieveRecipes():i}}]),e}()).\u0275fac=function(e){return new(e||I)(c.Sb(s.a),c.Sb(a.a))},I.\u0275prov=c.Hb({token:I,factory:I.\u0275fac,providedIn:"root"}),I),T=i("PCNd"),B=i("IzEk"),q=i("lJxs"),j=i("qXBG"),W=((A=function(){function e(t,i){_classCallCheck(this,e),this.authService=t,this.router=i}return _createClass(e,[{key:"canActivate",value:function(e,t){var i=this;return this.authService.user.pipe(Object(B.a)(1),Object(q.a)((function(e){return!!e||i.router.createUrlTree(["/auth"])})))}}]),e}()).\u0275fac=function(e){return new(e||A)(c.Sb(j.a),c.Sb(o.c))},A.\u0275prov=c.Hb({token:A,factory:A.\u0275fac,providedIn:"root"}),A),D=[{path:"",component:k,children:[{path:"",component:v},{path:"new",component:f,canActivate:[W]},{path:":id/edit",component:f,canActivate:[W]},{path:":id",component:M,resolve:[P]}]}],G=((R=function e(){_classCallCheck(this,e)}).\u0275mod=c.Jb({type:R}),R.\u0275inj=c.Ib({factory:function(e){return new(e||R)},imports:[[o.f.forChild(D),r.r,T.a]]}),R)}}]);