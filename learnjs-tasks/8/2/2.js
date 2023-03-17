function Obj1(){}
let obj1 = new Obj1()
let res = new obj1.constructor();

function Obj2(){}
Obj2.prototype = {}
let obj2 = new Obj2()
res = new obj2.constructor()//res.constructor == Object