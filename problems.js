function divideByThree(num) {
    /* Returns the passed in number argument divided by three. */
    // Your code here
    return num / 3;
};

function averageOfTwo(num1, num2) {
    /* Returns the average of two numbers, num1 and num2. */
    // Your code here
    let avg = (num1 + num2) / 2;
    return avg;
};

function averageOfFour(num1, num2, num3, num4) {
    /* Takes in four numbers. The function should return the average of all of
    the numbers. */
    // Your code here
    let avg = (num1 + num2 + num3 + num4) / 4;
    return avg;
};

function doubler(nums) {
    /* Takes an array of numbers and returns a new array where every element of
    the original array is multiplied by 2. */
    // Your code here
    let i = 0;
    let doubled = [];
    while (i < nums.length) {
        doubled.push(nums[i] * 2);
        i++;
    }
    return doubled;
};

function combineArrays(arr1, arr2) {
    /* Takes in two arrays of numbers and returns the two arrays combined into
    a single array. **Hint**: Use the `Array.concat` method but be aware that
    calling this method won't permanently change, also known as **mutate**,
    either array. */
    // Your code here
    let comibnedArrays = [];
    combinedArrays = arr1.concat(arr2);
    return combinedArrays;
};

function wordWithinArray(word, arr) {
    /* Takes in both a word and an array of words as arguments and returns a
    boolean that returns true if that string is located inside of the array, or
    false if it does not. Use `Array.indexOf`. */
    // Your code here
    if (arr.indexOf(word)) {
        return true;
    }
    else {
        return false;
    }
};

function echo(str) {
    /* Takes in a string and returns that string "echo-ized". E.g.
    echo("Mom!"); // => returns "MOM! ... Mom! ... mom!"
    echo("hey"); // => returns "HEY ... hey ... hey"
    echo("JUMp"); // => returns "JUMP ... JUMp ... jump" */
    // Your code here
    let shout = str.toUpperCase();
    let whisper = str.toLowerCase();
    let echo = shout + " ... " + str + " ... " + whisper;
    return echo;
};

function fizzBuzz(max) {
    /* Takes a number, max and returns an array that contains every number from
    0 to max (not inclusive) that is divisible by either 3 or 5, **but not both**. */
    // Your code here
    let arr = [];
    let i = 1;
    while (i < max) {
        if ((i % 3 == 0) && (i % 5 != 0)) {
            arr.push(i);
        } else if ((i % 5 == 0) && (i % 3 != 0)) {
            arr.push(i);
        }
        i++;
    }
    return arr;
};

function hello(name) {
    /* Takes in a string name and returns a string saying "Hello, " to that name. */
    // Your code here
    let greeting = "Hello, " + name;
    return greeting;
};

function goodbye(name) {
    /* Takes in a string name and returns a string saying "Bye, " to that name. */
    // Your code here
    let farewell = "Bye, " + name;
    return farewell;
};

function isFive(num) {
    /* Takes in a number, num, and returns `true` if a number is equal to 5 and
    `false` if it is not. */
    // Your code here
    if (num == 5) {
        return true;
    } else {
        return false;
    }
};

function isOdd(num) {
    /* Takes in a number and returns `true` if the number is odd and returns
    `false` otherwise. Try writing this with and without `if` statements */
    // Your code here
    if (num % 2 == 0) {
        return false;
    } else {
        return true;
    }
};

function isSubString(searchString, subString) {
    /* Takes in two strings, `searchString` and `subString`. Should return
    `true` if `subString` is a part of the`searchString`, regardless of upper
    or lower case, and `false` if otherwise. */
    // Your code here
    let lowerSearchString = searchString.toLowerCase();
    let lowerSubString = subString.toLowerCase();
    if (lowerSearchString.indexOf(lowerSubString) == -1) {
        return false;
    } else {
        return true;
    }
};

function aCounter(word) {
    /* Takes in a word and returns the number of a's within that word. Counts
    both lowercase (a) and uppercase (A). Your job is to translate the following
    function to use a `for` loop instead of the `while` loop it is currently
    using. */

    /*
    let i = 0;
    let count = 0;
    while (i < word.length) {
        let char = word[i];
        if (char === "a" || char === "A") {
        count += 1;
        }
        i++;
    }
    return count;
    */
    // Your code here
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (char === "a" || char === "A") {
            count += 1;
        }
    }
    return count;
};

module.exports = {
    divideByThree,
    averageOfTwo,
    averageOfFour,
    doubler,
    combineArrays,
    wordWithinArray,
    echo,
    fizzBuzz,
    hello,
    goodbye,
    isFive,
    isOdd,
    isSubString,
    aCounter
}
