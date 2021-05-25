"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cat = void 0;
var cat = /** @class */ (function () {
    // x: number
    // y: number
    // 构造函数
    // access modifier 访问修饰符
    function cat(x, y) {
        var _this = this;
        if (x === void 0) { x = 1; }
        if (y === void 0) { y = 2; }
        this.x = x;
        this.y = y;
        this.fn1 = function () {
            console.log('x', _this.x, 'y', _this.y);
        };
        this.fn2 = function () {
            return _this.x + _this.y;
        };
        this.x = x;
        this.y = y;
    }
    return cat;
}());
exports.cat = cat;
