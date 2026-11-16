/**
 * Security & Sanitization Utilities
 * Hardens client-side state, form dispatches, and URL navigation against injection,
 * reverse tabnabbing, and automated bot spam.
 */

// Strip dangerous control characters (ASCII 0-31 except tab and newline, plus 127)
// eslint-disable-next-line no-control-regex
const CONTROL_CHARS_REGEX = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g;

// Standard email validation regex
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

/**
 * Sanitizes plain text input by trimming, stripping control characters, and capping length.
 */
export function sanitizeString(val, maxLength = 500) {
  if (typeof val !== 'string') return '';
  return val
    .replace(CONTROL_CHARS_REGEX, '')
    .trim()
    .slice(0, maxLength);
}

/**
 * Validates an email address.
 */
export function isValidEmail(email) {
  if (typeof email !== 'string') return false;
  const clean = email.trim();
  return clean.length >= 5 && clean.length <= 120 && EMAIL_REGEX.test(clean);
}

/**
 * Sanitizes phone numbers by allowing only digits, space, dash, and leading plus.
 */
export function sanitizePhone(phone, maxLength = 25) {
  if (typeof phone !== 'string') return '';
  return phone
    .replace(/[^\d+ -]/g, '')
    .trim()
    .slice(0, maxLength);
}

/**
 * Validates external URLs before opening to prevent javascript: or data: pseudo-protocol injection
 * and protects against reverse tabnabbing via 'noopener,noreferrer'.
 */
export function safeOpenExternal(url) {
  if (typeof url !== 'string') return false;
  const trimmed = url.trim();
  
  // Strict allowlist of safe schemes
  const isSafeProtocol =
    trimmed.startsWith('https://') ||
    trimmed.startsWith('http://') ||
    trimmed.startsWith('mailto:') ||
    trimmed.startsWith('tel:');

  if (!isSafeProtocol) {
    console.warn('[Security] Blocked attempt to navigate to unsafe protocol:', trimmed.slice(0, 30));
    return false;
  }

  // Open with noopener,noreferrer
  window.open(trimmed, '_blank', 'noopener,noreferrer');
  return true;
}

/**
 * Validates CSS id anchor selector to prevent DOM querySelector injection.
 */
export function isSafeCssId(selector) {
  return typeof selector === 'string' && /^#[a-zA-Z0-9_-]+$/.test(selector);
}
