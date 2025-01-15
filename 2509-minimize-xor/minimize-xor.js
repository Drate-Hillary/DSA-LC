/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var minimizeXor = function (num1, num2) {

    const setBitsNum2 = num2.toString(2).split('1').length - 1;
    let x = 0;

    const setBitsPosition = [];

    let bitsRetain = setBitsNum2;
    for (let i = 31; i >= 0; i--) {
        if (num1 & (1 << i)) {
            setBitsPosition.push(i);
        }
    }

    let bitsToUse = setBitsNum2;
    for (let j = 0; j < setBitsPosition.length && bitsToUse > 0; j++) {
        x |= (1 << setBitsPosition[j]);
        bitsToUse--;
    }

    for (let k = 0; k < 32 && bitsToUse > 0; k++) {
        if (!(x & (1 << k))) {
            x |= (1 << k);
            bitsToUse--;
        }
    }

    return x;
};