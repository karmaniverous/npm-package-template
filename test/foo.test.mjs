/* eslint-env mocha */

// mocha imports
import chai from 'chai';
chai.should();

// subject imports
import { foo } from '../src/index.mjs';

describe('foo', function () {
  it('with input', function () {
    const input = 'bar';
    const output = foo(input);

    output.should.equal(input);
  });

  it('without input', function () {
    const output = foo();

    output.should.equal('nil');
  });
});
