import Validator from '../app';

test.each([
  ['qwerty', true],
  ['12345', false],
  ['1qwerty', false],
  ['qwerty1', false],
  ['qwerty123zxcv', true],
  ['qwerty1234zxcv', false],
  ['qwerty12345zxcv', false],
  ['qwerty12zxcv', true],
  ['-qwerty', false],
  ['qwerty-', false],
  ['_qwerty', false],
  ['qwerty_', false],
  ['qwerty-zxcvb_12a', true],
  ['a1a1a1a1a', true],
])('Validate username: %s', (username, expected) => {
  expect(Validator.validateUsername(username)).toBe(expected);
});
