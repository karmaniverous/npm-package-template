import _ from 'lodash';

/**
 * Returns whatever value is passed.
 *
 * @function foo
 * @param {any} value - Any value.
 * @returns {any} Whatever value it was passed.
 */
const foo = (value) => (_.isNil(value) ? 'nil' : value);

export default foo;
