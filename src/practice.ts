// npm i -g ts-node --> typescript 실행을 위한 라이브러리
// codeRunner --> vsCode extension 설치

// tsc -- init 실행, ourDir 수정
// npx tsc --> dist 경로(tsconfig.json에서 설정, "outDir": "./dist") 경로 아래에 컴파일된 js파일 생성

// interface 사용해보기

interface Shape {
    getArea(): number;
}

class Circle implements Shape {
    constructor(public radius: number) {
        this.radius = radius;
    }

    getArea(): number {
        return this.radius * this.radius * Math.PI; // 파이알제곱
    }

}

class Rectangle implements Shape {
    constructor(private width: number, private height: number) {
        this.width = width;
        this.height = height;
    }

    getArea(): number {
        return this.width * this.height;
    }
}

const circle = new Circle(3);
const rectangle = new Rectangle(3, 5);

console.log(circle.radius);
// console.log(rectangle.width);

const shapes: Shape[] = [new Circle(3), new Rectangle(3,5)]
shapes.forEach(shape => {
    console.log(shape.getArea());
})