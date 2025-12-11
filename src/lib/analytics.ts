// Google Analytics helper functions

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

// Track page views
export const trackPageView = (url: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Track events
export const trackEvent = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track WhatsApp button click
export const trackWhatsAppClick = () => {
  trackEvent({
    action: 'click',
    category: 'engagement',
    label: 'whatsapp_button',
  });
};

// Track Phone button click
export const trackPhoneClick = () => {
  trackEvent({
    action: 'click',
    category: 'engagement',
    label: 'phone_button',
  });
};

// Track contact form submission
export const trackContactForm = () => {
  trackEvent({
    action: 'submit',
    category: 'engagement',
    label: 'contact_form',
  });
};

