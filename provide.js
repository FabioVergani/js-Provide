var w=window,
O=w.Object,Obj=O.create.bind(null,null),
F=w.Function,FP=F.prototype,
A=w.Array,AP=A.prototype,
Slice=FP.call.bind(AP.slice),
Provide=function(o,m){
 var p=m[0],e=((p in o)?o[p]:(o[p]=Obj()));
 if(m.length>1){return Provide(o,Slice(m,1));};
 return e;
};
//Provide(scope,namespace)
O=F=FP=A=AP=null;

/*
(Provide(w,['a','b','c'])).zz=1;
Provide=null;
*/
