import{a as k}from"./chunk-TNI5SOW6.js";import{c as _,d as I,e as b,l as C}from"./chunk-DCDN6MXI.js";import{Fa as i,Ra as c,Ta as s,Ua as h,Y as u,Ya as o,Za as r,_a as d,cb as y,db as f,ib as m,jb as g,kb as x,pb as v}from"./chunk-7JH22RSN.js";var E=["data-ng-comp","genres"];function F(e,t){if(e&1&&(o(0,"li",2)(1,"span",3),m(2),r()()),e&2){let l=t.$implicit;i(2),g(l.name)}}var w=(()=>{let t=class t{constructor(){this.genres=[]}};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=u({type:t,selectors:[["","data-ng-comp","genres"]],inputs:{genres:"genres"},standalone:!0,features:[v],attrs:E,decls:2,vars:1,consts:[[1,"genres","list-group","list-group-horizontal"],["class","list-group-item",4,"ngFor","ngForOf"],[1,"list-group-item"],[1,"badge","bg-primary","p-2","fs-5"]],template:function(a,n){a&1&&(o(0,"ul",0),c(1,F,3,1,"li",1),r()),a&2&&(i(),s("ngForOf",n.genres))},dependencies:[b,_],styles:[`.genres .list-group{flex-wrap:wrap;text-align:center;justify-content:center;margin-bottom:1.5rem}.genres .list-group-item{background:none;background-color:transparent}
`],encapsulation:2});let e=t;return e})();var H=["data-ng-comp","movie-big-hero"];function T(e,t){if(e&1&&(o(0,"h2",12)(1,"span",13),m(2),r()()),e&2){let l=f();i(2),g(l.movie.tagline)}}function D(e,t){if(e&1&&d(0,"div",14),e&2){let l=f();s("genres",l.movie.genres)}}function j(e,t){if(e&1&&(o(0,"a",15)(1,"span"),m(2,"Details"),r(),d(3,"span",16),r()),e&2){let l=f();s("routerLink","movie/"+l.movie.id)}}var P=(()=>{let t=class t{constructor(){this.movie=[],this.isInHp=!1}scrollto(p){k.scrollto(p)}};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=u({type:t,selectors:[["","data-ng-comp","movie-big-hero"]],inputs:{movie:"movie",isInHp:"isInHp"},standalone:!0,features:[v],attrs:H,decls:14,vars:7,consts:[[1,"hero","container-fluid"],[1,"row"],[1,"col-lg-6","has-txt"],[1,"badge","bg-secondary","my-3","p-2","fs-3"],[1,"h2","display-5","fw-bolder","text-white","my-3"],["class","h3 mb-3",4,"ngIf"],["data-ng-comp","genres",3,"genres",4,"ngIf"],[1,"gap-3","d-flex","flex-column","align-items-center","justify-content-sm-center","justify-content-xl-start","my-3"],["href","#","class","btn btn-primary btn-lg p-4",3,"routerLink",4,"ngIf"],["type","button","aria-label","Scroll to the content",1,"btn","btn-danger","btn-lg","p-4","positioned-abs",3,"click"],["aria-hidden","true",1,"bi","bi-arrow-down-circle"],["id","section"],[1,"h3","mb-3"],[1,"badge","badge-as-tagline","d-block"],["data-ng-comp","genres",3,"genres"],["href","#",1,"btn","btn-primary","btn-lg","p-4",3,"routerLink"],["aria-hidden","true",1,"bi","bi-arrow-up-right-square-fill","ms-3"]],template:function(a,n){a&1&&(o(0,"section",0)(1,"div",1)(2,"div",2)(3,"span",3),m(4),r(),o(5,"h1",4),m(6),r(),c(7,T,3,1,"h2",5)(8,D,1,1,"div",6),o(9,"div",7),c(10,j,4,1,"a",8),o(11,"button",9),y("click",function(){return n.scrollto("section")}),d(12,"span",10),r()()()()(),d(13,"div",11)),a&2&&(h("background-image",n.movie.backdrop_path?"url(https://image.tmdb.org/t/p/original"+n.movie.backdrop_path+")":"url(assets/img/bg-hero.jpg)"),i(4),g(n.movie.release_date),i(2),x(" ",n.movie.title," "),i(),s("ngIf",n.movie.tagline),i(),s("ngIf",n.movie.genres),i(2),s("ngIf",n.isInHp))},dependencies:[b,I,C,w],encapsulation:2});let e=t;return e})();export{P as a};
