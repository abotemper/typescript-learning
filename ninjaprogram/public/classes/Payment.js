//当一个类与interface联系在一起的时候
//事实上可以由类 implements 这个 interface，它必须有 interface中的要求
var Payment = /** @class */ (function () {
    //一个效果
    function Payment(
    //这里如果把readonly private public 这种type关键字拿掉，那么在比如说 format中便不能获取
    recipint, details, amount) {
        this.recipint = recipint;
        this.details = details;
        this.amount = amount;
    }
    //由于interface的原因，如果没有这个format那么就会报错
    Payment.prototype.format = function () {
        return "".concat(this.recipint, " owes ").concat(this.amount, " for ").concat(this.details);
    };
    return Payment;
}());
export { Payment };
