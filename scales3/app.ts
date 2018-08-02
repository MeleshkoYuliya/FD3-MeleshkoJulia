
interface IStorageEngine {
    getScale ():number;
    getName():string;   // глубина в мм
}
    
// хранилище однородных (похожих) объектов произвольного 
// класса StorageItem, реализующего интерфейс IStorageItem
class ScalesStorageEngineArray<StorageEngine extends IStorageEngine> {

    items: StorageEngine[];

    constructor() {
        this.items=[];
    }

    // сохранить объект на складе
    addItem(item:StorageEngine):number {
        let index:number=this.items.length;
        this.items.push(item);
     console.log("сохранён объект"
        +" наименование "+item.getName()+"вес"
         +item.getScale()
         );
        return index;
    }

    // получить сохранённый объект (объект продолжает храниться)
    getItem(index:number):StorageEngine {
        return this.items[index];
    }
    getCount():number{
        return;
    }
}

class Products implements IStorageEngine {

    // специально чтобы классы Computer и Car были несовместимыми
    price:number; 
    getScale():number{ return 200};  // ширина в мм
    getName():string { return 'product'};
}



// склад компьютеров
let productsStorageArea=new ScalesStorageEngineArray<Products>();

let product1:Products=new Products;
let product2:Products=new Products;
let product3:Products=new Products;

// сохраним на складе 3 компьютера
let productIndex1:number=productsStorageArea.addItem(product1);
let productIndex2:number=productsStorageArea.addItem(product2);
let productIndex3:number=productsStorageArea.addItem(product3);
   

// получим один из хранимых объектов
// мы можем без преобразования типа получить и Car, и Computer
let item11:Products=productsStorageArea.getItem(productIndex1);
let item12:Products=productsStorageArea.getItem(productIndex2);
