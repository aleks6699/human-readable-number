module.exports = function toReadable(number) {
    const ones = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];

    const teens = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    const tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    const hundreds = "hundred";
    if (number < 10) {
        return ones[number];
    }

    if (number >= 10 && number < 20) {
        return teens[number - 10];
    }

    if (number >= 20 && number < 100) {
        const ten = Math.floor(number / 10);
        const one = number % 10;
        return tens[ten] + (one ? " " + ones[one] : "");
    }

    if (number >= 100 && number < 1000) {
        const hundred = Math.floor(number / 100);
        const remainder = number % 100;
        const remainderReadable = remainder ? " " + toReadable(remainder) : "";
        return ones[hundred] + " " + hundreds + remainderReadable;
    }

    return "";
};
