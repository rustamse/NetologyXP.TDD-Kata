'use strict';

export class Calculator {
    constructor() {
    }

    add(inputString) {
        if (inputString.length == 0)
            return 0;

        let customDelimiter = this._findCustomDelimiter(inputString);
        console.info('del:' + inputString);
        let filteredString = customDelimiter == null ? inputString : inputString.substring(customDelimiter.length + 3);
        let stringDelimiter = customDelimiter == null ? ',' : customDelimiter;
        let regExp = new RegExp('\n|' + stringDelimiter);

        let numberStrings = filteredString.split(regExp);

        let sum = this._sumNumbers(numberStrings);

        return sum;
    }

    _sumNumbers(numberStrings) {
        let sum = 0;
        let exceptionMsg = '';
        for (let i = 0; i < numberStrings.length; i++) {
            let numString = numberStrings[i];
            let num = parseInt(numString);
            if (num < 0) {
                exceptionMsg += 'negatives not allowed ' + num;
            }
            if (num > 1000)
                continue;
            sum += num;
        }

        if (exceptionMsg.length > 0) {
            throw new Error(exceptionMsg);
        }

        return sum;
    }

    _findCustomDelimiter(inputString) {
        if (inputString.indexOf('//') == 0) {
            return inputString.substring(2, inputString.indexOf('\n'));
        }
        return null;
    }
}
