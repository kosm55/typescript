// console.log('hello from dsdsd version1')
// //
// const func= (name:string)=>{
//
// }
// func('vasya')

// let a:number=6;
// let b:string=a.toString();
//
// interface IUser {
//     name: string;
//     age:number;
//     house: number
// }
//  const user:IUser={
//     name: 'anna',
//     age:22,
//     house:15
// }

// interface IUser<DATA>{
//     name:string,
//     age:number,
//     house:number,
//     data:DATA
// }
// const user1:IUser<number[]>={
//     name: 'max',
//     age:25,
//     house:15,
//     data: [1,3,2,1,44]
// }
// const user2: IUser<string>={
//     name: 'anna',
//     age: 25,
//     house:85,
//     data:'dfdfdf'
// }
// console.log(user1,user2)
// interface IUser {
//     name: string;
//     age:number;
//     house: number
// }
// const user3:Partial<IUser>={
//     name:'vax'
// }

// class User{
//     private name:string;
//     age:number
//     constructor(name:string, age:number) {
//         this.name=name;
//         this.age=age
//     }
//     getName():string{
//         return this.name
// }
// }
// class User { private name: string;private age: number
//      constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age
//     }
//
//     getName(): string {
//         return this.name
//     }
//     getAge():number{
//     return this.age
//     }
// }
// const user1= new User('vex',22);
//
// console.log(user1.getName())
//
// const users:User[]=[
//     new User('max', 18),
//     new User('dew',55)
// ]
// class Car{
//     constructor(private brand:string, private sit:number ) {
//     }
//     start(){
//         console.log('brrr')
//     }
//     getInfo(){
//         console.log(`brand- ${this.brand}, sit-${this.sit}`)
//     }
// }
// const car1=new Car('bmw',20);
// car1.start()
// car1.getInfo()

// class ElectroCar extends Car{
//     constructor( brand:string,  sit:number,engine:number) {
//         super(brand, sit);
//     }
// }
//
// interface IElectric{
//      engine: number;
//     getStatus():boolean;
// }
//
// class Car implements IElectric{
//      engine: number;
//     constructor(private brand:string, private sit:number, engine: number) {
//         this.engine=engine
//     }
//     getStatus(): boolean {
//         return true
//     }
//     start(){
//         console.log('brrr')
//     }
//     getInfo(){
//         console.log(`brand- ${this.brand}, sit-${this.sit}`)
//     }
// }

abstract class Shape{
    abstract per():number
    abstract area():number
}
class Triangle extends Shape{
    constructor(private a:number, private b:number, private c:number) {
        super();
    }
    per(): number {
        return this.c*this.a/this.b
    }

    area(): number {
        return this.b/this.a+this.c
    }

}

class Rect extends Shape{
    constructor(private a:number, private b:number) {
        super();
    }
    per(): number {
        return this.a+this.b/2
    }

    area(): number {
        return this.a/this.b
    }

}
const shapes:Shape[]=[
    new Triangle(1,2,3),
    new Rect(1,2),
    new Triangle(5,6,6)
]

for (const shape of shapes) {
    console.log(shape.constructor['name']);
    console.log(shape.per());
    console.log(shape.area());
}