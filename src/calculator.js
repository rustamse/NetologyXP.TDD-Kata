'use strict';

export class Calculator {
    constructor() {
    }

    add(inputString) {
        if (inputString.length == 0)
            return 0;

        let customRegExp = this._findCustomRegExp(inputString);

        let regExp = customRegExp == null ? new RegExp('\n|,') : customRegExp;

        let filteredInputString = customRegExp == null ?
            inputString : inputString.substring(inputString.indexOf('\n') + 1);

        console.info('regStr = ' + filteredInputString);
        console.info('regExp = ' + regExp);

        let numStrings = filteredInputString.split(regExp);

        return this._sumNumbers(numStrings);
    }

    _sumNumbers(numStrings) {
        let sum = 0;
        let errMsg = '';
        for (let i = 0; i < numStrings.length; i++) {

            console.info('i = ' + i + ', val = ' + numStrings[i]);

            let num = parseInt(numStrings[i]);
            if (num < 0) {
                errMsg += 'negatives not allowed ' + num;
            }
            if (num > 1000)
                continue;

            sum += num;
        }

        if (errMsg.length > 0)
            throw new Error(errMsg);

        return sum;
    }

    _findCustomRegExp(inputString) {
        let markerIndex = inputString.indexOf('//');
        if (markerIndex != 0)
            return null;

        let delimsString = inputString.substring(2, inputString.indexOf('\n'));

        let isStartFromBracket = delimsString[0] == '[';
        if (!isStartFromBracket)
            return new RegExp(delimsString + '|\n');

        let regStr = '';
        let delimsWithFirstBracketArray = delimsString.split(']');
        for (let i = 0; i < delimsWithFirstBracketArray.length; i++) {
            if (delimsWithFirstBracketArray[i].length < 2)
                continue;

            let singleDelim = delimsWithFirstBracketArray[i].substring(1);
            regStr += singleDelim + '|';
        }

        return new RegExp(regStr + '\n');
    }

}
