'use strict';

export class Calculator {
    constructor() {
    }

    add(inputString) {
        if (inputString.length == 0)
            return 0;

        let customDelimiter = this._findCustomDelimiter(inputString);
        let lineDelimiter = '\n';
        let stringDelimiter = customDelimiter == null ? ',' : customDelimiter;
        let inputStringWithoutMarker = customDelimiter == null ? inputString : inputString.substring(3);

        let splitter = new RegExp(lineDelimiter + '|' + stringDelimiter);

        let numbers = inputStringWithoutMarker.split(splitter);

        var sum = this._calcSum(numbers);
        return sum;
    }

    _findCustomDelimiter(numbersString) {
        let customDelimiterIndex = numbersString.indexOf('//');
        if (customDelimiterIndex == 0) {
            return numbersString[2];
        }
        else {
            return null;
        }
    }

    _calcSum(numbers) {
        let sum = 0;
        let errorMsg = '';
        for (let i = 0; i < numbers.length; i++) {
            var numberVal = parseInt(numbers[i]);
            if (numberVal < 0)
                errorMsg += 'negatives not allowed ' + numberVal;
            sum += numberVal;
        }

        if (errorMsg.length > 0) {
            throw new Error(errorMsg);
        }
        return sum;
    }
}