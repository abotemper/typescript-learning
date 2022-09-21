//当一个类与interface联系在一起的时候
//事实上可以由类 implements 这个 interface，它必须有 interface中的要求
var Invoice2 = /** @class */ (function () {
    //一个效果
    function Invoice2(
    //这里如果把readonly private public 这种type关键字拿掉，那么在比如说 format中便不能获取
    client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    //由于interface的原因，如果没有这个format那么就会报错
    Invoice2.prototype.format = function () {
        return "".concat(this.client, " owes ").concat(this.amount, " for ").concat(this.details);
    };
    return Invoice2;
}());
export { Invoice2 };
