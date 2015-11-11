var w=window,
Obj=w.Object.create.bind(null,null),
Slice=w.Function.prototype.call.bind(w.Array.prototype.slice),
Provide=function(a,b){var o=a,m=b,p=m[0],e=((p in o)?o[p]:(o[p]=Obj()));return m.length===0?e:Provide(e,Slice(m,1));};


//Provide(scope,namespace)
/*
(Provide(w,['a','b','c'])).zz=1;
Provide=null;
*/
