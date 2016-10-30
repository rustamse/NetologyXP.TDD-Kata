import assert from 'assert'
import sinon from 'sinon'
import {Calculator} from '../src/calculator'

// http://osherove.com/tdd-kata-1/
suite('TDD Kata Calculator add tests', function () {

    var calculator = new Calculator();

    suite('When add empty string', function () {
        test('returns 0', function () {
            var expected = 0;

            var res = calculator.add("");

            assert.equal(expected, res);
        });
    });

    suite('When add 1 string', function () {
        test('returns 1', function () {
            var expected = 1;

            var res = calculator.add("1");

            assert.equal(expected, res);
        });
    });

    suite('When add 1,2 string', function () {
        test('returns 3', function () {
            var expected = 3;

            var res = calculator.add("1,2");

            assert.equal(expected, res);
        });
    });

    suite('When add 1,2,3 string', function () {
        test('returns 6', function () {
            var expected = 6;

            var res = calculator.add("1,2,3");

            assert.equal(expected, res);
        });
    });

    suite('When add 1\n2 string', function () {
        test('returns 3', function () {
            var expected = 3;

            var res = calculator.add("1\n2");

            assert.equal(expected, res);
        });
    });

    suite('When add 1,2\n7 string', function () {
        test('returns 10', function () {
            var expected = 10;

            var res = calculator.add("1,2\n7");

            assert.equal(expected, res);
        });
    });

    suite('When add //;\n1;2 string', function () {
        test('returns 3', function () {
            var expected = 3;

            var res = calculator.add("//;\n1;2");

            assert.equal(expected, res);
        });
    });

    suite('When add //;\n1;2\n1 string', function () {
        test('returns 4', function () {
            var expected = 4;

            var res = calculator.add("//;\n1;2\n1");

            assert.equal(expected, res);
        });
    });

    suite('When add -1 string', function () {
        test('exception', function () {
            assert.throws(() => calculator.add("-1"), /negatives not allowed -1/);
        });
    });

    suite('When add 1\n-1,-2 string', function () {
        test('exception', function () {
            assert.throws(() => calculator.add("1\n-1,-2"), /negatives not allowed -1negatives not allowed -2/);
        });
    });

    suite('When add 1,1002 string', function () {
        test('returns 1', function () {
            var expected = 1;

            var res = calculator.add("1,1002");

            assert.equal(expected, res);
        });
    });

    suite('When add //__\n1__2 string', function () {
        test('returns 3', function () {
            var expected = 3;

            var res = calculator.add("//__\n1__2");

            assert.equal(expected, res);
        });
    });

});