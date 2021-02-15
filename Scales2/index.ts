class Scales {

    productArr:IScaleble[] = [];
    
    add(newProduct:IScaleble):Scales {
        this.productArr.push(newProduct);
        return this;
    }
    
    getSumScale():number {
        return this.productArr.reduce( (sum:number, product:IScaleble) => {
            return sum + product.getScale();
        }, 0);
    }
    
    getNameList():string[] {
        return this.productArr.map( (product:IScaleble):string => product.getName() );
    }
}

interface IScaleble {
    getScale():number;
    getName():string;
}

class Apple implements IScaleble {
    name:string;
    weight:number;
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
};
class Tomato implements IScaleble {
    name:string;
    weight:number;
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
};

let scalesObj:Scales = new Scales();
let appleObj1:Apple = new Apple('Juicy Apple', 133);
let tomatoObj1:Tomato = new Tomato('Ripe Tomato', 154);
let appleObj2:Apple = new Apple('Regular Apple', 102);
let tomatoObj2:Tomato = new Tomato('Ordinary Tomato', 103);
let appleObj3:Apple = new Apple('Apple Laptop', 1370);
let tomatoObj3:Tomato = new Tomato('Rotten Tomato', 1998);

scalesObj.add(appleObj1).add(tomatoObj1)
        .add(appleObj2).add(tomatoObj2)
        .add(appleObj3).add(tomatoObj3)
;

console.log('Total weight: '+ scalesObj.getSumScale() + ' gram' +
'\nProduct list: '+scalesObj.getNameList());