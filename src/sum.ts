var sum = (num1, num2) => num1 + num2;
// 等同于
var sum = function(num1, num2) {
  return num1 + num2;
};



//匿名自执行函数可以传参：
(function(x,y){
   alert(x+y);
})(x , y);

var abc = new Function("x", "y", "return x+y;");  
alert(abc(2,3));

