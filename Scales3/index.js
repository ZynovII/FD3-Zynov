localStorage.clear();
function uniFactory(classRef) {
    return new classRef();
}
var Scales = /** @class */ (function () {
    function Scales(_storageEngin) {
        this.storageEngineObj = null;
        this.storageEngineObj = _storageEngin;
    }
    Scales.prototype.add = function (newProduct) {
        this.storageEngineObj.addItem(newProduct);
        return this;
    };
    Scales.prototype.getSumScale = function () {
        var sum = 0;
        for (var i = 0; i < this.storageEngineObj.getCount(); i++) {
            sum += this.storageEngineObj.getItem(i).getScale();
        }
        return sum;
    };
    Scales.prototype.getNameList = function () {
        var list = [];
        for (var i = 0; i < this.storageEngineObj.getCount(); i++) {
            list.push(this.storageEngineObj.getItem(i).getName());
        }
        return list;
    };
    return Scales;
}());
var ScalesStorageEngineArray = /** @class */ (function () {
    function ScalesStorageEngineArray() {
        this.productArr = [];
    }
    ScalesStorageEngineArray.prototype.addItem = function (item) {
        this.productArr.push(item);
    };
    ScalesStorageEngineArray.prototype.getItem = function (index) {
        return this.productArr[index];
    };
    ScalesStorageEngineArray.prototype.getCount = function () {
        return this.productArr.length;
    };
    return ScalesStorageEngineArray;
}());
var ScalesStorageEngineLocalStorage = /** @class */ (function () {
    function ScalesStorageEngineLocalStorage() {
        this.lsKey = 'Product';
    }
    ScalesStorageEngineLocalStorage.prototype.addItem = function (item) {
        var lsStore = localStorage[this.lsKey]
            ? JSON.parse(localStorage[this.lsKey])
            : [];
        lsStore.push(item);
        localStorage[this.lsKey] = JSON.stringify(lsStore);
    };
    ScalesStorageEngineLocalStorage.prototype.getItem = function (index) {
        var lsStore = JSON.parse(localStorage[this.lsKey]);
        return new Product(lsStore[index].name, lsStore[index].weight);
    };
    ScalesStorageEngineLocalStorage.prototype.getCount = function () {
        return JSON.parse(localStorage[this.lsKey]).length;
    };
    return ScalesStorageEngineLocalStorage;
}());
var Product = /** @class */ (function () {
    function Product(_name, _weight) {
        this.name = _name;
        this.weight = _weight;
    }
    Product.prototype.getScale = function () {
        return this.weight;
    };
    Product.prototype.getName = function () {
        return this.name;
    };
    return Product;
}());
var storageEngineArrObj = new ScalesStorageEngineArray();
var storageEngineLSObj = new ScalesStorageEngineLocalStorage();
var scalesArrObj = new Scales(storageEngineArrObj);
var scalesLocStorObj = new Scales(storageEngineLSObj);
var appleObj1 = new Product('Juicy Apple', 133);
var tomatoObj1 = new Product('Ripe Tomato', 154);
var appleObj2 = new Product('Regular Apple', 102);
var tomatoObj2 = new Product('Ordinary Tomato', 103);
var appleObj3 = new Product('Apple Laptop', 1370);
var tomatoObj3 = new Product('Rotten Tomato', 1998);
scalesArrObj.add(appleObj1).add(tomatoObj1)
    .add(appleObj2).add(tomatoObj2)
    .add(appleObj3).add(tomatoObj3);
scalesLocStorObj.add(appleObj1).add(tomatoObj1)
    .add(appleObj2).add(tomatoObj2)
    .add(appleObj3).add(tomatoObj3);
console.log('Total weight: ' + scalesArrObj.getSumScale() + ' gram' +
    '\nProduct list: ' + scalesArrObj.getNameList());
console.log('Total weight in LS: ' + scalesLocStorObj.getSumScale() + ' gram' +
    '\nProduct list in LS: ' + scalesLocStorObj.getNameList());
//# sourceMappingURL=index.js.map