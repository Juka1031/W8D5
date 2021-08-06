Function.prototype.myBindArgs = function (ctx) {
    let that = this; //save ctx to use it in function below
    let arr = (Array.from(arguments).slice(1))
    return function () {
        let arr2 = Array.from(arguments)
        if (arr.length === 0) {
            return that.apply(ctx, arr2);
        }
        else if (arr2.length === 0) {
            return that.apply(ctx, arr);
        }
        else {
            return that.apply(ctx, arr.concat(arr2));
        }
    };
};

Function.prototype.myBind = function (ctx, ...arr) {
    let that = this;

    return function (...arr2) {
        that.apply(ctx, arr.concat(arr2))
    }
}

class Cat {
    constructor(name) {
        this.name = name;
    }

    says(sound, person) {
        console.log(`${this.name} says ${sound} to ${person}!`);
        return true;
    }
}

class Dog {
    constructor(name) {
        this.name = name;
    }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

//   // bind time args are "meow" and "Kush", no call time args
markov.says.myBind(pavlov, "meow", "Kush")();
// //   // Pavlov says meow to Kush!
// //   // true

// // //   // no bind time args (other than context), call time args are "meow" and "a tree"
markov.says.myBind(pavlov)("meow", "a tree");
// // //   // Pavlov says meow to a tree!
// // //   // true

// // //   // bind time arg is "meow", call time arg is "Markov"
markov.says.myBind(pavlov, "meow")("Markov");
// // //   // Pavlov says meow to Markov!
// // //   // true

// // //   // no bind time args (other than context), call time args are "meow" and "me"
const notMarkovSays = markov.says.myBind(pavlov);
notMarkovSays("meow", "me");
// //   // Pavlov says meow to me!
// //   // true
