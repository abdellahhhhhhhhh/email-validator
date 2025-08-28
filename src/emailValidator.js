function emailValidator(email) {
  if (typeof email !== 'string') return false;
  return email.includes('@'); // règles suivantes plus tard
}
module.exports = emailValidator;
