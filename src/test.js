/**
 * [description]
 * @returns {[type]} [description]
 */
export default function() {
    window.console.log("a")
}


{
    // ES5 合并数组
    var params = ['hello', true, 3];
    var other = [1, 2].concat(params);
    console.log(other);
} {
    // ES6 利用扩展运算符合并数组
    var params = ['hello', true, 3];
    var other = [
        1, 2, ...params
    ];
    console.log(other);
}