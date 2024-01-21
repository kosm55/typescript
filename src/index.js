// console.log('hello from dsdsd version1')
// //
// const func= (name:string)=>{
//
// }
// func('vasya')
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(a, b, c) {
        var _this = _super.call(this) || this;
        _this.a = a;
        _this.b = b;
        _this.c = c;
        return _this;
    }
    Triangle.prototype.per = function () {
        return this.c * this.a / this.b;
    };
    Triangle.prototype.area = function () {
        return this.b / this.a + this.c;
    };
    return Triangle;
}(Shape));
var Rect = /** @class */ (function (_super) {
    __extends(Rect, _super);
    function Rect(a, b) {
        var _this = _super.call(this) || this;
        _this.a = a;
        _this.b = b;
        return _this;
    }
    Rect.prototype.per = function () {
        return this.a + this.b / 2;
    };
    Rect.prototype.area = function () {
        return this.a / this.b;
    };
    return Rect;
}(Shape));
var shapes = [
    new Triangle(1, 2, 3),
    new Rect(1, 2),
    new Triangle(5, 6, 6)
];
for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
    var shape = shapes_1[_i];
    console.log(shape.constructor['name']);
    console.log(shape.per());
    console.log(shape.area());
}
