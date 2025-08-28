const emailValidator = require('../src/emailValidator');

describe("emailValidator - '@' presence", () => {
  test("fails when there is no @", () => {
    expect(emailValidator('user.example.com')).toBe(false);
  });
  test("passes shape when @ exists (other rules not yet enforced)", () => {
    expect(typeof emailValidator('user@example')).toBe('boolean');
  });
});

describe('emailValidator - domain dot rule', () => {
  test('fails when domain has no dot', () => {
    expect(emailValidator('user@example')).toBe(false);
  });
  test('fails when dot is last char of domain', () => {
    expect(emailValidator('user@example.')).toBe(false);
  });
  test('passes when domain has a dot not at the end', () => {
    expect(emailValidator('user@example.com')).toBe(true);
  });
});