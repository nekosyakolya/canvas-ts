import shape = require("./Shape");

export class Rectangle extends shape.Shape {
    private x1: number;
    private x2: number;
    private y1: number;
    private y2: number;
    private width: number;
    private height: number;

    constructor() {
        super();
        this.x1 = 10;
        this.x2 = 80;
        this.y1 = 10;
        this.y2 = 40;
        this.width = Math.abs(this.x1 - this.x2);
        this.height = Math.abs(this.y1 - this.y2);
    }
    public calculatePerimeter() {
        return parseFloat(((this.width * 2) + (this.height * 2)).toFixed(2));
    }
    public calculateArea() {
        return parseFloat((this.width * this.height).toFixed(2));
    }
    public draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.getFillColor();
        ctx.fillRect(this.x1, this.y1, this.width, this.height);
        ctx.lineWidth = 3;
        ctx.strokeStyle = this.getBorderColor();
        ctx.strokeRect(this.x1, this.y1, this.width, this.height);
    }

    public setCoordinates(x1: number, x2: number, y1: number, y2: number) {
        this.x1 = x1;
        this.x2 = x2;
        this.y1 = y1;
        this.y2 = y2;
        this.width = Math.abs(this.x1 - this.x2);
        this.height = Math.abs(this.y1 - this.y2);
    }
}
