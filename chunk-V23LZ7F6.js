import{b as _,c as M,d as x,e as y,l as w,o as F}from"./chunk-LY2TIMCI.js";import{$a as v,Fa as i,Ra as m,Ta as n,Y as d,Ya as l,Za as c,_a as f,ab as g,db as p,ib as u,jb as h,pb as C}from"./chunk-7JH22RSN.js";var I=["data-ng-movies-grid",""];function S(t,e){if(t&1&&(l(0,"li",4)(1,"a",5),f(2,"div",6),c()()),t&2){let o=p().$implicit,r=p();i(),n("routerLink","/movie/"+o.id),i(),n("src",o.backdrop_path)("title",o.title)("text",o.overview)("ratio",r.ratio)("caption",r.caption)}}function k(t,e){if(t&1&&(v(0),m(1,S,3,6,"li",3),g()),t&2){let o=e.$implicit;i(),n("ngIf",o.title)}}var T=(()=>{let e=class e{constructor(){this.title="Movies",this.ratio="square",this.caption="hdn",this.colsMd=3,this.colsXl=6,this.movies=[]}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=d({type:e,selectors:[["div","data-ng-movies-grid",""]],inputs:{title:"title",ratio:"ratio",caption:"caption",colsMd:"colsMd",colsXl:"colsXl",movies:"movies"},standalone:!0,features:[C],attrs:I,decls:5,vars:3,consts:[[1,"has-movies"],[1,"list-unstyled","row","g-0","row-cols-1",3,"ngClass"],[4,"ngFor","ngForOf"],["class","col",4,"ngIf"],[1,"col"],["href","#",1,"has-figure",3,"routerLink"],["data-ng-image","",3,"src","title","text","ratio","caption"]],template:function(a,s){a&1&&(l(0,"section",0)(1,"h2"),u(2),c(),l(3,"ul",1),m(4,k,2,1,"ng-container",2),c()()),a&2&&(i(2),h(s.title),i(),n("ngClass","row-cols-md-"+s.colsMd+" row-cols-xl-"+s.colsXl),i(),n("ngForOf",s.movies))},dependencies:[y,_,M,x,w,F]});let t=e;return t})();export{T as a};