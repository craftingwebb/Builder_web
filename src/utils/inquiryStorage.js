// Inquiry and newsletter persistence layer with popup blocker detection

const INQUIRIES_STORAGE_KEY = 'sa_inquiries_log';
const NEWSLETTER_STORAGE_KEY = 'sa_newsletter_subscribers';

/**
 * Generates an auditable, human-readable reference ID.
 * Example: SA-2026-784912
 */
export function generateReferenceId(prefix = 'SA') {
  const year = new Date().getFullYear();
  const randomSuffix = Math.floor(100000 + Math.random() * 900000);
  return `${prefix}-${year}-${randomSuffix}`;
}

/**
 * Saves an inquiry to local storage registry.
 */
export function saveInquiryToRegistry(inquiryData) {
  try {
    const existingRaw = localStorage.getItem(INQUIRIES_STORAGE_KEY);
    const registry = existingRaw ? JSON.parse(existingRaw) : [];

    const record = {
      refId: generateReferenceId(inquiryData.typePrefix || 'SA'),
      createdAt: new Date().toISOString(),
      status: 'pending_whatsapp_confirmation',
      ...inquiryData,
    };

    // Store up to 100 most recent inquiries
    registry.unshift(record);
    if (registry.length > 100) {
      registry.splice(100);
    }

    localStorage.setItem(INQUIRIES_STORAGE_KEY, JSON.stringify(registry));
    console.info(`[Registry] Inquiry recorded with Ref: ${record.refId}`, record);
    return record;
  } catch (err) {
    console.error('[Registry] Failed to write to localStorage:', err);
    return {
      refId: generateReferenceId(inquiryData.typePrefix || 'SA'),
      createdAt: new Date().toISOString(),
      status: 'recorded_session_only',
      ...inquiryData,
    };
  }
}

/**
 * Saves a newsletter subscriber with deduplication.
 */
export function saveNewsletterSubscriber(email) {
  try {
    const existingRaw = localStorage.getItem(NEWSLETTER_STORAGE_KEY);
    const list = existingRaw ? JSON.parse(existingRaw) : [];

    const normalized = email.trim().toLowerCase();
    const alreadyExists = list.some((item) => item.email.toLowerCase() === normalized);

    if (alreadyExists) {
      return {
        success: true,
        isDuplicate: true,
        message: 'This email is already registered for our intelligence briefings.',
      };
    }

    const subscriber = {
      email: normalized,
      subscribedAt: new Date().toISOString(),
      source: 'website_footer',
    };

    list.unshift(subscriber);
    localStorage.setItem(NEWSLETTER_STORAGE_KEY, JSON.stringify(list));
    console.info(`[Newsletter] Subscribed: ${normalized}`);

    return {
      success: true,
      isDuplicate: false,
      message: 'Thank you for subscribing! Your email has been registered in our intelligence registry.',
    };
  } catch (err) {
    console.error('[Newsletter] Storage failed:', err);
    return {
      success: true,
      isDuplicate: false,
      message: 'Thank you for subscribing! Your request has been acknowledged.',
    };
  }
}

/**
 * Safely opens a WhatsApp URL and tests if the popup was blocked by the browser.
 * Returns { isBlocked: boolean }
 */
export function openWhatsAppWithDetection(waUrl) {
  if (typeof window === 'undefined') return { isBlocked: false };

  try {
    const newWin = window.open(waUrl, '_blank', 'noopener,noreferrer');
    if (!newWin || newWin.closed || typeof newWin.closed === 'undefined') {
      return { isBlocked: true };
    }
    return { isBlocked: false };
  } catch (err) {
    console.warn('[Popup Blocked]', err);
    return { isBlocked: true };
  }
}
