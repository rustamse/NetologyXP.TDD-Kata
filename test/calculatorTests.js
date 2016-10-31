import assert from 'assert'
import sinon from 'sinon'
import {Calculator} from '../src/calculator'

// http://osherove.com/tdd-kata-1/
suite('TDD Kata Calculator tests', function () {

    let calculator = new Calculator();

    suite('when add empty string', function () {
        test('returns 0', function () {
            let expected = 0;

            let res = calculator.add('');

            assert.equal(res, expected);
        });
    });

    suite('when add 1', function () {
        test('returns 1', function () {
            let expected = 1;

            let res = calculator.add('1');

            assert.equal(res, expected);
        });
    });

    suite('when add 1,2', function () {
        test('returns 3', function () {
            let expected = 3;

            let res = calculator.add('1,2');

            assert.equal(res, expected);
        });
    });

    suite('when add 1\n2', function () {
        test('returns 3', function () {
            let expected = 3;

            let res = calculator.add('1\n2');

            assert.equal(res, expected);
        });
    });

    suite('when add 1\n2,3', function () {
        test('returns 6', function () {
            let expected = 6;

            let res = calculator.add('1\n2,3');

            assert.equal(res, expected);
        });
    });

    suite('when add //;\n1;2', function () {
        test('returns 3', function () {
            let expected = 3;

            let res = calculator.add('//;\n1;2');

            assert.equal(res, expected);
        });
    });

    suite('when add //;\n1;2\n1', function () {
        test('returns 4', function () {
            let expected = 4;

            let res = calculator.add('//;\n1;2\n1');

            assert.equal(res, expected);
        });
    });

    suite('when add -1', function () {
        test('exception negatives not allowed -1', function () {
            assert.throws(() => calculator.add('-1'), /negatives not allowed -1/);
        });
    });

    suite('when add -1,1,-2', function () {
        test('exception negatives not allowed -1negatives not allowed -2', function () {
            assert.throws(() => calculator.add('-1,1,-2'), /negatives not allowed -1negatives not allowed -2/);
        });
    });

    suite('when add 1,1002', function () {
        test('returns 1', function () {
            let expected = 1;

            let res = calculator.add('1,1002');

            assert.equal(res, expected);
        });
    });

    suite('when add //__\n1__2', function () {
        test('returns 3', function () {
            let expected = 3;

            let res = calculator.add('//__\n1__2');

            assert.equal(res, expected);
        });
    });

    suite('when add //[,][;]\n1,2;3', function () {
        test('returns 6', function () {
            let expected = 6;

            let res = calculator.add('//[,][;]\n1,2;3');

            assert.equal(res, expected);
        });
    });

    suite('when add //[,,,][;;]\n1,,,2;;3', function () {
        test('returns 6', function () {
            let expected = 6;

            let res = calculator.add('//[,,,][;;]\n1,,,2;;3');

            assert.equal(res, expected);
        });
    });

});