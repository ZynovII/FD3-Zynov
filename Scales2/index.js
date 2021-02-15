var Scales = /** @class */ (function () {
    function Scales() {
        this.productArr = [];
    }
    Scales.prototype.add = function (newProduct) {
        this.productArr.push(newProduct);
        return this;
    };
    Scales.prototype.getSumScale = function () {
        return this.productArr.reduce(function (sum, product) {
            return sum + product.getScale();
        }, 0);
    };
    Scales.prototype.getNameList = function () {
        return this.productArr.map(function (product) { return product.getName(); });
    };
    return Scales;
}());
var Apple = /** @class */ (function () {
    function Apple(_name, _weight) {
        this.name = _name;
        this.weight = _weight;
    }
    Apple.prototype.getScale = function () {
        return this.weight;
    };
    Apple.prototype.getName = function () {
        return this.name;
    };
    return Apple;
}());
;
var Tomato = /** @class */ (function () {
    function Tomato(_name, _weight) {
        this.name = _name;
        this.weight = _weight;
    }
    Tomato.prototype.getScale = function () {
        return this.weight;
    };
    Tomato.prototype.getName = function () {
        return this.name;
    };
    return Tomato;
}());
;
var scalesObj = new Scales();
var appleObj1 = new Apple('Juicy Apple', 133);
var tomatoObj1 = new Tomato('Ripe Tomato', 154);
var appleObj2 = new Apple('Regular Apple', 102);
var tomatoObj2 = new Tomato('Ordinary Tomato', 103);
var appleObj3 = new Apple('Apple Laptop', 1370);
var tomatoObj3 = new Tomato('Rotten Tomato', 1998);
scalesObj.add(appleObj1).add(tomatoObj1)
    .add(appleObj2).add(tomatoObj2)
    .add(appleObj3).add(tomatoObj3);
console.log('Total weight: ' + scalesObj.getSumScale() + ' gram' +
    '\nProduct list: ' + scalesObj.getNameList());
//# sourceMappingURL=index.js.map