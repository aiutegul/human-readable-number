module.exports = function toReadable(number) {
    let units = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
    };

    let tens = {
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    };

    if (number < 20) {
        return units[number];
    } else if (number < 100) {
        let dec = Math.floor(number / 10);
        let unit = number % 10;
        if (unit == 0) return tens[dec];
        else return tens[dec] + " " + units[unit];
    } else {
        let hun = Math.floor(number / 100);
        let rem = number % 100;
        if (rem == 0)
            return units[hun] + " hundred";
        if (rem < 20) return units[hun] + " hundred " + units[rem];
        else {
            let dec2 = Math.floor(rem / 10);
            let unit2 = rem % 10;
            if (unit2 == 0) return units[hun] + " hundred " + tens[dec2];
            else
                return (
                    units[hun] + " hundred " + tens[dec2] + " " + units[unit2]
                );
        }
    }
};
