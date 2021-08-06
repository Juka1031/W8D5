function curriedSum (numArgs) {
    let numbers = [];
    function _curriedSum(num) {
        numbers.push(num)
        if (numbers.length === numArgs) {
           let results = numbers.reduce((acc, ele) => acc + ele);
           return results
        }
        else {
        return _curriedSum}
    };
    return _curriedSum
}

Function.prototype.curry = function(numArgs) {
    const args = [];
    let that = this;
    return function _curriedSum(number) {
        args.push(number);
        if (args.length === numArgs) {
            that(...args)
           // return that.apply(undefined, args)
        }
        else {
            return _curriedSum;
        }
    }
}

Function.prototype.curry = function (numArgs) {
    const args = [];
    let that = this;
    return function _curriedSum(number) {
        args.push(number);
        if (args.length === numArgs) {
            return that.apply(undefined, args)
        }
        else {
            return _curriedSum;
        }
    }
}

