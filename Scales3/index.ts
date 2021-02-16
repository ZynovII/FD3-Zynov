localStorage.clear();
// function uniFactory<objtype>(classRef: { new (): objtype; }): objtype {
//     return new classRef();
// }

interface IStorageEngine {
    addItem(item:Product):void;
    getItem(index:number):Product;
    getCount():number;
}

class Scales<StorageEngine extends IStorageEngine> {

    storageEngineObj:IStorageEngine = null;

    // storageEngineObj:IStorageEngine = uniFactory<StorageEngine>(StorageEngine);

    constructor( _storageEngin:IStorageEngine ) {
        this.storageEngineObj = _storageEngin;
    }

    add(newProduct:Product):Scales<StorageEngine> {
        this.storageEngineObj.addItem(newProduct);
        return this;
    }
    getSumScale():number {
        let sum:number = 0;
        for (let i=0; i < this.storageEngineObj.getCount(); i++) {
            sum += this.storageEngineObj.getItem(i).getScale();
        }
        return sum;
    }
    getNameList():string[] {
        let list:string[] = [];
        for (let i=0; i < this.storageEngineObj.getCount(); i++) {
            list.push( this.storageEngineObj.getItem(i).getName() );
        }
        return list;
    }
}

class ScalesStorageEngineArray implements IStorageEngine {

    productArr:Product[] = [];

    addItem(item:Product):void {
        this.productArr.push(item);
    }
    getItem(index:number):Product{
        return this.productArr[index];
    }
    getCount():number {
        return this.productArr.length;
    }
}

class ScalesStorageEngineLocalStorage implements IStorageEngine {
    
    lsKey:string = 'Product';

    addItem(item:Product):void {
        let lsStore:Product[] = localStorage[this.lsKey]
            ? JSON.parse(localStorage[this.lsKey])
            : [] ;
        lsStore.push(item);
        localStorage[this.lsKey] = JSON.stringify(lsStore);
    }
    getItem(index:number):Product{
        let lsStore:any[] = JSON.parse(localStorage[this.lsKey]);
        return new Product( lsStore[index].name, lsStore[index].weight );
    }
    getCount():number {
        return JSON.parse(localStorage[this.lsKey]).length;
    }
}

class Product {
    private name:string;
    private weight:number;
    constructor(_name:string, _weight:number) {
        this.name = _name;
        this.weight = _weight;
    }

    getScale():number {
        return this.weight;
    }

    getName():string {
        return this.name;
    }
}
let storageEngineArrObj = new ScalesStorageEngineArray();
let storageEngineLSObj = new ScalesStorageEngineLocalStorage();

let scalesArrObj = new Scales(storageEngineArrObj);
let scalesLocStorObj = new Scales(storageEngineLSObj);

let appleObj1:Product = new Product('Juicy Apple', 133);
let tomatoObj1:Product = new Product('Ripe Tomato', 154);
let appleObj2:Product = new Product('Regular Apple', 102);
let tomatoObj2:Product = new Product('Ordinary Tomato', 103);
let appleObj3:Product = new Product('Apple Laptop', 1370);
let tomatoObj3:Product = new Product('Rotten Tomato', 1998);

scalesArrObj.add(appleObj1).add(tomatoObj1)
        .add(appleObj2).add(tomatoObj2)
        .add(appleObj3).add(tomatoObj3)
;
scalesLocStorObj.add(appleObj1).add(tomatoObj1)
        .add(appleObj2).add(tomatoObj2)
        .add(appleObj3).add(tomatoObj3)
;

console.log('Total weight: '+ scalesArrObj.getSumScale() + ' gram' +
'\nProduct list: '+scalesArrObj.getNameList());
console.log('Total weight in LS: '+ scalesLocStorObj.getSumScale() + ' gram' +
'\nProduct list in LS: '+scalesLocStorObj.getNameList());