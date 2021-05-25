// class
interface Ipoint {
    // x : number,
    // y : number,
    fn1 : () => void,
    fn2 : (p:Ipoint) => number
}

export class cat implements Ipoint {
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


