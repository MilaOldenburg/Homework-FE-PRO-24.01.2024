//1.Создать Rectangle класс как на примере Circle, наследуют от класса Shape и расширяют его функциональность для отображения конкретных фигур

//также добавить метод setStyle для родительского класса, принимает объект и применяет все стили которые есть в этом объекте 
/* 
let circle = new Circle();
circle.setStyle({
    background: "orange",
    borderRadius: "50px"
});*/

class Shape {
    constructor(className) {
        this.element = document.createElement("div");
        this.element.classList.add("shape", className);
    }

    render() {
        document.querySelector(".container").append(this.element);
    }

    setStyle(styles) {
        // Применяем стили к элементу формы
        Object.assign(this.element.style, styles);
    }
}

class Circle extends Shape {
    constructor() {
        super("circle");
    }
}

class Rectangle extends Shape {
    constructor() {
        super("rectangle");
    }
}

// Пример использования
let circle = new Circle();
circle.setStyle({
    background: "orange",
    borderRadius: "50px"
});
circle.render();

let rectangle = new Rectangle();
rectangle.setStyle({
    background: "green",
    width: "100px",
    height: "50px"
});
rectangle.render();


/*
class Shape {
    constructor() {
        this.styles = {};
    }

    setStyle(styles) {
        this.styles = { ...this.styles, ...styles };
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius ** 2;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}

// Пример 
let circle = new Circle(5);
circle.setStyle({
    background: "orange",
    borderRadius: "50px"
});

let rectangle = new Rectangle(10, 20);
rectangle.setStyle({
    background: "blue",
    border: "2px solid red"
});

console.log("Circle Area:", circle.getArea());
console.log("Rectangle Area:", rectangle.getArea());

console.log("Circle Styles:", circle.styles);
console.log("Rectangle Styles:", rectangle.styles);
*/


