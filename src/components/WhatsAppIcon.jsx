import React from 'react';

/**
 * Official, Authentic WhatsApp Vector Emblem
 * Supports two-tone (green bubble + white handset) or custom fill colors.
 */
export default function WhatsAppIcon({
  className = 'size-5',
  bubbleColor = '#25D366',
  phoneColor = '#FFFFFF',
  ...props
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {/* 1. Official WhatsApp Speech Bubble with Tail */}
      <path
        d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z"
        fill={bubbleColor}
      />
      {/* 2. Official WhatsApp Phone Handset */}
      <path
        d="M8.53 7.33c-.16 0-.35.03-.53.27-.19.24-.72.71-.72 1.73s.74 2.01.85 2.15c.11.15 1.41 2.26 3.48 3.09.77.31 1.37.49 1.84.63.77.24 1.48.21 2.04.12.62-.09 1.91-.78 2.18-1.53.27-.75.27-1.4.19-1.53-.08-.14-.29-.22-.61-.38s-1.91-.94-2.21-1.05c-.29-.11-.51-.16-.72.16-.21.32-.83 1.05-1.01 1.26-.19.22-.37.24-.69.08-.32-.16-1.36-.5-2.59-1.6-.96-.85-1.6-1.91-1.79-2.23-.19-.32-.02-.49.14-.65.15-.14.32-.37.48-.56.16-.18.22-.32.32-.53.11-.22.05-.4-.03-.56-.08-.16-.72-1.75-.99-2.39-.26-.64-.53-.55-.72-.56z"
        fill={phoneColor}
      />
    </svg>
  );
}
