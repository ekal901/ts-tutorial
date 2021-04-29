"use strict";
// interface 사용해보기
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI; // 파이알제곱
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var circle = new Circle(3);
var rectangle = new Rectangle(3, 5);
console.log(circle.radius);
// console.log(rectangle.width);
var shapes = [new Circle(3), new Rectangle(3, 5)];
shapes.forEach(function (shape) {
    console.log(shape.getArea());
});
