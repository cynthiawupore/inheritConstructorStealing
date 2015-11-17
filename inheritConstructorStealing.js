// 借用构造函数
// 其基本思路是在子类型构造函数的内部调用父类型的构造函数

function Person(name){
  this.name = name;
  this.friends = ["Jack","John","Kim"];
}
function SuperPerson(name,sex){
 //继承Person
 Person.call(this,name);//call()将Person的运行作用域绑定到了SuperPerson上
 //如果要屏蔽父类型中的属性，要在继承语句之后添加
 //实例属性
 this.sex = sex;
}
var Tom = new SuperPerson("Tom","man");
Tom.friends.push("Amy");
console.log(Tom.friends);// ["Jack", "John", "Kim", "Amy"]
var David = new SuperPerson("David","man");
console.log(David.friends);//["Jack", "John", "Kim"]
console.log(David.name);//David