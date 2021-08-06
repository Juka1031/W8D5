function sum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

function sumRef() {
    let sum = 0;
    const args = arguments;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
}

function sumRefAgain(...nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return sum;
}