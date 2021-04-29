// 基础类型
function add(n1, n2) {
    return n1 + n2;
}
console.log(add(1, 4));
// 布尔值
var isTrue;
isTrue = true;
console.log('布尔值', isTrue);
// 数字
var num = 2;
console.log('数字', num);
// 字符串
var str = 'abc';
console.log('字符串', str);
// 数组
var arr = [1, 2, 3];
var arr2 = [1, 2, 3];
var arr3 = [1, 2, 3];
var arr4 = [1, 'a'];
// 存放任何类型
var arr5 = [1, 'a', true];
console.log('数组', arr);
console.log('数组', arr2);
console.log('数组', arr3);
console.log('数组', arr4);
console.log('数组', arr5);
// 元组-tuple  特殊数组 固定长度 固定类型
var ar = [1, 'a'];
ar[0] = 2;
// ar.push(3)
console.log('元组', ar);
// 联合-union
var union;
// union = '123'
// union = 1
function merge(n1, n2) {
    if (typeof n1 === 'string' || typeof n2 === 'string')
        return n1.toString() + n2.toString();
    else
        return n1 + n2;
}
console.log('联合', ar);
console.log('联合', merge(1, 2));
console.log('联合', merge('a', 'b'));
// 字面量类型-Literal
var union2;
union2 = 0;
function merge2(n1, n2, type) {
    if (type === 'string') {
        return n1.toString() + n2.toString();
    }
    if (typeof n1 === 'string' || typeof n2 === 'string')
        return n1.toString() + n2.toString();
    else
        return n1 + n2;
}
console.log('字面量类型', merge2(1, 2, 'number'));
console.log('字面量类型', merge2(1, 2, 'string'));
console.log('字面量类型', merge2('a', 'b', 'string'));
// enum（枚举）
var Color;
(function (Color) {
    Color[Color["red"] = 5] = "red";
    Color["blue"] = "str7";
})(Color || (Color = {}));
var color = Color.blue;
console.log('枚举', color);
// any 任意类型
var random = 1;
// random = 'a'
// random = true
// random = {}
// random()
// '''
console.log('any 任意类型', random);
// unknown 未知类型
var randoms = 1;
randoms = 'abc';
if (typeof randoms === 'function') {
    randoms();
}
if (typeof randoms === 'string') {
    randoms.substring(1, 2);
}
console.log('unknown 未知类型', randoms);
// void 
function voidprint() {
    console.log('voidvoid');
}
console.log('void', voidprint());
// undefined 
function undefinedprint() {
    console.log('undefinedundefined');
    return;
}
console.log('void', undefinedprint());
// never 
// function neverprint(msg:string,stu:number):never {
//   throw{
//     msg,
//     stu 
//   }
// }
// console.log('never',neverprint('not ...',404));
// Ttype Assertions（类型适配）
var msg;
msg = 'strabc';
// msg.endWith('c')
// 转化为string类型
// 方法1
// let adds = (<string>msg).endsWith('c')
// 方法2
// let adds = (msg as string).endsWith('c')
// console.log('Ttype Assertions（类型适配）', adds);
// 函数类型
// let log = function(){}
// let log = () => {}
// let log = (msg:string,code?:number) => {
//   console.log(msg , code);
// }
// log('abc')
var log = function (msg, code) {
    if (code === void 0) { code = 2; }
    console.log(msg, code);
};
log('abc');
// Object（对象）
// let person:{
//   name: string,
//   age: number
// } = {
//   name : 'ckk',
//   age : 18
// }
var person = {
    name: 'ckk',
    age: 18
};
person.name = 123;
console.log('对象', person);
var inFn = function (obj) {
    console.log({ x: obj.x, y: obj.y });
};
inFn({ x: 1, y: 2 });
// class
