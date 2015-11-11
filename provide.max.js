var w=window,
O=w.Object,
C=O.create.bind(null,null),
F=w.Function,
FP=F.prototype,
A=w.Array,
AP=A.prototype,
Slice=FP.call.bind(AP.slice),
Provide=function(a,b){var o=a,m=b,p=m[0],e=((p in o)?o[p]:(o[p]=C()));return m.length===0?e:Provide(e,Slice(m,1));};



//Provide(scope,namespace)
O=F=FP=A=AP=null;

/*
(Provide(w,['a','b','c'])).zz=1;
Provide=null;
console.dir(w);
*/
