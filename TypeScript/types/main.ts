
// 基础类型
function add(n1 : number,n2:number){
  return n1 + n2
}
console.log(add(1,4));

// 布尔值
let isTrue: boolean;
isTrue = true
console.log('布尔值',isTrue);

// 数字
let num: number = 2;
console.log('数字',num);

// 字符串
let str: string = 'abc';
console.log('字符串',str);

// 数组
let arr: number[] = [1,2,3]
let arr2: Array<number> = [1,2,3]
let arr3 = [1,2,3]
let arr4 = [1,'a']
// 存放任何类型
let arr5:any[] = [1,'a',true]
console.log('数组',arr)
console.log('数组',arr2)
console.log('数组',arr3)
console.log('数组',arr4)
console.log('数组',arr5)

// 元组-tuple  特殊数组 固定长度 固定类型
let ar:[number,string] = [1,'a']
ar[0] = 2
// ar.push(3)
console.log('元组',ar);

// 联合-union
let union: string | number | boolean
// union = '123'
// union = 1
function merge (n1: string | number, n2:string | number) {
  if(typeof n1 === 'string' || typeof n2 === 'string')
  return n1.toString() + n2.toString()
  else
  return n1 + n2
}
console.log('联合',ar);
console.log('联合',merge(1,2));
console.log('联合',merge('a','b'));

// 字面量类型-Literal
let union2: 0 | 1 | 2
union2 = 0
function merge2 (
    n1: string | number,
    n2:string | number,
    type:'number' | 'string') {

      if(type === 'string'){
        return n1.toString() + n2.toString()
      }
      if(typeof n1 === 'string' || typeof n2 === 'string')
        return n1.toString() + n2.toString()
      else
        return n1 + n2
}
console.log('字面量类型',merge2(1,2,'number'));
console.log('字面量类型',merge2(1,2,'string'));
console.log('字面量类型',merge2('a','b','string'));

// enum（枚举）
enum Color {
  red = 5,
  blue = 'str7'
}
let color = Color.blue
console.log('枚举',color);

// any 任意类型
let random:any = 1
// random = 'a'
// random = true
// random = {}
// random()
// '''
console.log('any 任意类型',random);

// unknown 未知类型
let randoms:unknown = 1
randoms = 'abc'
if(typeof randoms === 'function'){
  randoms()
}
if(typeof randoms === 'string'){
  randoms.substring(1,2)
}
console.log('unknown 未知类型',randoms);

// void 
function voidprint():void {
  console.log('voidvoid');
}
console.log('void',voidprint());

// undefined 
function undefinedprint():undefined {
  console.log('undefinedundefined');
  return
}
console.log('void',undefinedprint());

// never 
// function neverprint(msg:string,stu:number):never {
//   throw{
//     msg,
//     stu 
//   }
// }
// console.log('never',neverprint('not ...',404));

// Ttype Assertions（类型适配）
let msg:any
msg = 'strabc'
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
let log = (msg:string,code:number = 2) => {
  console.log(msg , code);
}
log('abc')

// Object（对象）
// let person:{
//   name: string,
//   age: number
// } = {
//   name : 'ckk',
//   age : 18
// }
let person:any = {
  name : 'ckk',
  age : 18
}
person.name = 123
console.log('对象', person);

// interface 
// let inFn = (obj) => {
//     console.log({x : obj.x , y:obj.y});
// }
// inFn({x: 1, y: 2})
// inFn({x: 'a', y: 'b'})
interface rule {
  x : number,
  y : number
}
let inFn = (obj: rule) => {
    console.log({x : obj.x , y:obj.y});
}
inFn({x:1, y:2})

// class
interface Ipoint {
    x : number,
    y : number,
    fn1 : () => void,
    fn2 : (p:Ipoint) => number
}
// 定义class 
// class cat implements Ipoint {
//   x: number
//   y: number
//   // 构造函数
//   constructor(x?,y:number = 2){
//     this.x = x
//     this.y = y
//   }

//   fn1 = () => {
//     console.log('x',this.x,'y',this.y)
//   }
//   fn2 = () => {
//     return this.x + this.y
//   }
// }
// let obj = new cat()
// obj.x = 1
// obj.y = 2
// console.log('class',obj.fn1());
// console.log('class',obj.fn2());

// let obj = new cat(1,2)
// let obj = new cat()
// console.log('class',obj.fn2());

class cat implements Ipoint {
  // x: number
  // y: number
  // 构造函数
  // access modifier 访问修饰符
  constructor(public x:number = 1, private y:number = 2){
    this.x = x
    this.y = y
  }

  fn1 = () => {
    console.log('x',this.x,'y',this.y)
  }
  fn2 = () => {
    return this.x + this.y
  }
}
let obj = new cat()
console.log('class',obj.fn2());

// access modifier 访问修饰符
let obj1 = new cat()
// public  公有属性 外部可访问
// obj1.x = 2
// private  内部属性 外部不可访问
// obj1.y = 2

