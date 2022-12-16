/* eslint-env mocha */

// mocha imports
import chai from 'chai';
chai.should();

// subject imports
import { foo } from '../src/index.mjs';

describe('foo', async () => {
  it('with input', async () => {
    const input = 'bar';
    const output = foo(input);

    output.should.equal(input);
  });

  it('without input', async () => {
    const output = foo();

    output.should.equal('nil');
  });
});
