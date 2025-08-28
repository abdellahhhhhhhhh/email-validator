function emailValidator(email) {
  if (typeof email !== 'string') return false;

  // exactly one '@'
  const atCount = (email.match(/@/g) || []).length;
  if (atCount !== 1) return false;

  const [local, domain] = email.split('@');
  if (!local || !domain) return false;

  // domain contains a dot and doesn't end with a dot
  if (!domain.includes('.')) return false;
  if (domain.endsWith('.')) return false;

  // no spaces
  if (email.includes(' ')) return false;

  return true;
}
module.exports = emailValidator;
