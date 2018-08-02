// хранилище однородных (похожих) объектов произвольного 
// класса StorageItem, реализующего интерфейс IStorageItem
var ScalesStorageEngineArray = /** @class */ (function () {
    function ScalesStorageEngineArray() {
        this.items = [];
    }
    // сохранить объект на складе
    ScalesStorageEngineArray.prototype.addItem = function (item) {
        var index = this.items.length;
        this.items.push(item);
        console.log("сохранён объект"
            + " наименование " + item.getName() + "вес"
            + item.getScale());
        return index;
    };
    // получить сохранённый объект (объект продолжает храниться)
    ScalesStorageEngineArray.prototype.getItem = function (index) {
        return this.items[index];
    };
    ScalesStorageEngineArray.prototype.getCount = function () {
        return;
    };
    return ScalesStorageEngineArray;
}());
var Products = /** @class */ (function () {
    function Products() {
    }
    Products.prototype.getScale = function () { return 200; };
    ; // ширина в мм
    Products.prototype.getName = function () { return 'product'; };
    ;
    return Products;
}());
// склад компьютеров
var productsStorageArea = new ScalesStorageEngineArray();
var product1 = new Products;
var product2 = new Products;
var product3 = new Products;
// сохраним на складе 3 компьютера
var productIndex1 = productsStorageArea.addItem(product1);
var productIndex2 = productsStorageArea.addItem(product2);
var productIndex3 = productsStorageArea.addItem(product3);
// получим один из хранимых объектов
// мы можем без преобразования типа получить и Car, и Computer
var item11 = productsStorageArea.getItem(productIndex1);
var item12 = productsStorageArea.getItem(productIndex2);
//# sourceMappingURL=app.js.map