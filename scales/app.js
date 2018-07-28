var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Product = /** @class */ (function () {
    function Product(s, n) {
        this.scale = s;
        this.name = n;
    }
    Product.prototype.getScale = function () {
        return this.scale;
    };
    Product.prototype.getName = function () {
        return this.name;
    };
    return Product;
}());
var Scale = /** @class */ (function () {
    function Scale() {
        this.products = [];
    }
    Scale.prototype.addProduct = function (p) {
        this.products.push(p);
    };
    Scale.prototype.getSumScale = function () {
        return this.products.map(function (item) { return item.scale; }).reduce(function (accum, nextValue) { return accum + nextValue; }, 0);
    };
    Scale.prototype.getNumList = function () {
        console.log(this.products);
    };
    return Scale;
}());
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(s, n) {
        return _super.call(this, s, n) || this;
    }
    return Apple;
}(Product));
var Tomato = /** @class */ (function (_super) {
    __extends(Tomato, _super);
    function Tomato(s, n) {
        return _super.call(this, s, n) || this;
    }
    return Tomato;
}(Product));
var p1 = new Product(this.scale, this.name);
var a1 = new Apple(6, 'red apple');
var a2 = new Apple(6, 'yellow apple');
var a3 = new Apple(15, 'goldenRed apple');
var t1 = new Tomato(8, 'red tomato');
var t2 = new Tomato(7, 'yellow tomato');
var t3 = new Tomato(12, 'brown tomato');
var scale = new Scale;
scale.addProduct(a1);
scale.addProduct(a2);
scale.addProduct(a3);
scale.addProduct(t2);
scale.addProduct(t1);
scale.addProduct(t3);
scale.getNumList();
scale.getSumScale();
console.log("All products scale:" + scale.getSumScale());
//# sourceMappingURL=app.js.map