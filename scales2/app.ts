
interface IScalable {
    getScale ():number;
    getName():string;  
}

class Scale{
    products:Array<any>;
    sum:number;

    constructor(){
        this.products=[];
    }
    addProduct(tr:IScalable):void{
         this.products.push(tr);
        }
   
    
     getSumScale():number{
        return this.products.map(item => item.scale).reduce((accum, nextValue) => { return accum + nextValue }, 0)
        }
       
     
    public getNumList():void {
        console.log(this.products);
    }
  
}

class Apple implements IScalable{ 
    scale:number;
    name:string;

    constructor(s:number, n:string) {
        this.scale=s; 
        this.name=n;
    }
    getScale ():number{
                return this.scale;
            }
            getName():string{
                return this.name;
            }
  
 } 
 class Tomato implements IScalable{ 
    scale:number;
    name:string;

    constructor(s:number, n:string) {
        this.scale=s; 
        this.name=n;
    }
    getScale ():number{
        return this.scale;
    }
    getName():string{
        return this.name;
    }
 } 


let a1:Apple=new Apple(6,'red apple');
let a2:Apple=new Apple(6,'yellow apple');
let a3:Apple=new Apple(15,'goldenRed apple');
let t1:Tomato=new Tomato(8,'red tomato');
let t2:Tomato=new Tomato(7,'yellow tomato');
let t3:Tomato=new Tomato(12,'brown tomato');
let scale:Scale=new Scale;
scale.addProduct(a1);
scale.addProduct(a2);
scale.addProduct(a3);
scale.addProduct(t2);
scale.addProduct(t1);
scale.addProduct(t3);
scale.getSumScale();
scale.getNumList();

console.log("All products scale:"+scale.getSumScale());
