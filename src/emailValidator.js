function emailValidator(email) {
if (typeof email !== 'string') return false;


// No spaces anywhere
if (email.includes(' ')) return false;


// Exactly one '@'
const atCount = (email.match(/@/g) || []).length;
if (atCount !== 1) return false;


// Split into local and domain
const [local, domain] = email.split('@');
if (!local || !domain) return false; // text on both sides


// Domain must have a dot and must not end with a dot
if (!domain.includes('.')) return false;
if (domain.endsWith('.')) return false;


return true;
}
module.exports = emailValidator;
