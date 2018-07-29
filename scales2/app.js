var Apple = /** @class */ (function () {
    function Apple(s, n) {
        this.scale = s;
        this.name = n;
    }
    Apple.prototype.getScale = function () {
        return this.scale;
    };
    Apple.prototype.getName = function () {
        return this.name;
    };
    return Apple;
}());
var Tomato = /** @class */ (function () {
    function Tomato(s, n) {
        this.scale = s;
        this.name = n;
    }
    Tomato.prototype.getScale = function () {
        return this.scale;
    };
    Tomato.prototype.getName = function () {
        return this.name;
    };
    return Tomato;
}());
var Scale = /** @class */ (function () {
    function Scale() {
        this.products = [];
    }
    Scale.prototype.addProduct = function (tr) {
        this.products.push(tr);
    };
    Scale.prototype.getSumScale = function () {
        return this.products.map(function (tr) { return tr.getScale(); }).reduce(function (accum, nextValue) { return accum + nextValue; }, 0);
    };
    Scale.prototype.getNameList = function () {
        return this.products.map(function (item) { return item.getName(); });
    };
    return Scale;
}());
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
scale.getSumScale();
scale.getNameList();
console.log("All products scale:" + scale.getSumScale());
console.log('Products name:' + scale.getNameList());
//# sourceMappingURL=app.js.map