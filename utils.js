/**  检测 传入 数据（obj） 是否符合 目标类(type) 返回值：布尔
 *   params : type 、obj
 *
 * 例子：
 * isType("String")('text') // true
 * isType("Number")(1) // true
 * isType("Array")([])
 * isType("Object")({})
 * isType("Object")({ name: '吉姆' })
 * isType("Function")(function fn() { })
 *
 * */
function isType(type) {
  return function(obj) {
    return {}.toString.call(obj) === "[object " + type + "]";
  };
}

/**  检测 一个对象是不是一个空对象 返回值：布尔
 *   params : obj
 *
 * 例子：
 * isEmptyObject({}) //true
 * isEmptyObject({name:'吉姆格林'}) //false
 *
 * */
function isEmptyObject(obj) {
  var p;
  for (p in obj) {
    return false;
  }
  return true;
}
