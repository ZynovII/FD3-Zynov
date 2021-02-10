var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Apple;
}(Product));
;
var Tomato = /** @class */ (function (_super) {
    __extends(Tomato, _super);
    function Tomato() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Tomato;
}(Product));
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