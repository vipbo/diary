/**
 * @func检测 传入 数据（obj） 是否符合 目标类(type) 返回值：布尔
 * @params : type 、obj
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

/**
 * @func 检测 一个对象是不是一个空对象 返回值：布尔
 * @params : obj
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
/**
 * @func 为一个.56小数前边自动补零
 * @params : string
 *
 * 例子：
 * .56 --> 0.56
 *
 * */

function numAdd0(num) {
  let i = num.indexOf(".");
  if (i == 0) {
    return "0" + num.substr(i);
  } else {
    return num;
  }
}

/**
 * @func 将特殊字符转义
 * @params : string
 *
 *
 * */
function strDecode(content) {
  return content
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/ /g, "&nbsp;")
    .replace(/…/g, "&hellip;")
    .replace(/—/g, "&mdash;")
    .replace(/”/g, "&rdquo;")
    .replace(/‘/g, "&lsquo;")
    .replace(/“/g, "&ldquo;")
    .replace(/·/g, "&middot;")
    .replace(/’/g, "&rsquo;")
    .replace(/μ/g, "&mu;");
}
/**
 * @func 将转义字符反转
 * @params : string
 *
 *
 * */
function decodeStr(content) {
  return content
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/&hellip;/g, "…")
    .replace(/&mdash;/g, "—")
    .replace(/&rdquo;/g, "”")
    .replace(/&lsquo;/g, "‘")
    .replace(/&ldquo;/g, "“")
    .replace(/&middot;/g, "·")
    .replace(/&rsquo;/g, "’")
    .replace(/&mu;/g, "μ");
}
