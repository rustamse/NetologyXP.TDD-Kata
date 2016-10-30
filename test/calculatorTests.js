import assert from 'assert'
import sinon from 'sinon'
import {Calculator} from '../src/calculator'

// http://osherove.com/tdd-kata-1/
suite('TDD Kata Calculator tests', function () {
    let calculator = new Calculator();

    suite('when input sring is empty', function () {
        test('returns 0', function () {
            let expected = 0;

            let res = calculator.add("0");

            assert.equal(expected, res);
        });
    });

    suite('when input sring is 1', function () {
        test('returns 1', function () {
            let expected = 1;

            let res = calculator.add("1");

            assert.equal(expected, res);
        });
    });

    suite('when input sring is 1,2', function () {
        test('returns 3', function () {
            let expected = 3;

            let res = calculator.add("1,2");

            assert.equal(expected, res);
        });
    });

    suite('when input sring is 1,2,7', function () {
        test('returns 10', function () {
            let expected = 10;

            let res = calculator.add("1,2,7");

            assert.equal(expected, res);
        });
    });

    suite('when input sring is 1\n2', function () {
        test('returns 3', function () {
            let expected = 3;

            let res = calculator.add("1\n2");

            assert.equal(expected, res);
        });
    });

    suite('when input sring is 1,2\n7', function () {
        test('returns 10', function () {
            let expected = 10;

            let res = calculator.add("1,2\n7");

            assert.equal(expected, res);
        });
    });

    suite('when input sring is //;1;2', function () {
        test('returns 3', function () {
            let expected = 3;

            let res = calculator.add("//;1;2");

            assert.equal(expected, res);
        });
    });

    suite('when input sring contains negative numbers', function () {
        suite('when input sring is -1', function () {
            test('exception throws negatives not allowed', function () {

                assert.throws(()=> calculator.add('-1'), /negatives not allowed/);
            });
        });

        suite('when input string is -5,-6', function () {
            test('exception throws negatives not allowed for each number', function () {

                assert.throws(()=> calculator.add('-5,-6'), /negatives not allowed -5negatives not allowed -6/);
            });
        });
    });

});