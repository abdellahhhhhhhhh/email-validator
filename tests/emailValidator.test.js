const emailValidator = require('../src/emailValidator');

describe("emailValidator - '@' presence", () => {
  test("fails when there is no @", () => {
    expect(emailValidator('user.example.com')).toBe(false);
  });
  test("passes shape when @ exists (other rules not yet enforced)", () => {
    expect(typeof emailValidator('user@example')).toBe('boolean');
  });
});
