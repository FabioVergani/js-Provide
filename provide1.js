var w=window,
//
A=w.Array,
AP=A.prototype,
SliceMethod=AP.slice,
//
F=w.Function,
FP=F.prototype,
Bind=FP.bind=FP.bind||function(){
 var S=SliceMethod,i='prototype',f=this,g=function(){},
 b=function(){var e=this;return f.apply((e instanceof g)?e:o,i.concat(S.call(arguments)));};
 if((o=f[i])){g[i]=o;};
 b[i]=new g();
 i=arguments;
 o=i[0];
 i=S.call(i,1);
 return b;
},
Call=FP.call,
Slice=Call.bind(SliceMethod),
//
O=w.Object,
CreateObject=O.create.bind(null,null),
//
Provide=function(a,b){
 var o=a,m=b,p=m[0],e=((p in o)?o[p]:(o[p]=CreateObject()));
 return m.length===1?e:Provide(e,Slice(m,1));
};
//============================================================


//Provide(scope,namespace)
O=F=FP=A=AP=null;

/*test*/
(Provide(w,['a','b','c'])).zz=1;
Provide=null;
console.dir(w.a);
/*
a: Object
b: Object
c: Object
zz: 1
*/



