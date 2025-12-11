'use client';

import Script from 'next/script';
import { useEffect } from 'react';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

interface GoogleAnalyticsProps {
  measurementId: string;
}

export const GoogleAnalytics: React.FC<GoogleAnalyticsProps> = ({ measurementId }) => {
  useEffect(() => {
    // Initialize gtag with consent mode (denied by default)
    if (typeof window !== 'undefined') {
      window.gtag = window.gtag || function() {
        (window as any).dataLayer = (window as any).dataLayer || [];
        (window as any).dataLayer.push(arguments);
      };
      
      // Set default consent to denied
      window.gtag('consent', 'default', {
        'analytics_storage': 'denied',
        'ad_storage': 'denied',
      });
    }

    // Check if user has given consent
    const checkConsent = () => {
      const storedConsent = localStorage.getItem('cookie-consent');
      if (storedConsent) {
        const consent = JSON.parse(storedConsent);
        
        // Update consent based on user preferences
        if (window.gtag) {
          window.gtag('consent', 'update', {
            'analytics_storage': consent.analytics ? 'granted' : 'denied',
            'ad_storage': consent.marketing ? 'granted' : 'denied',
          });
        }
      }
    };

    // Check consent on mount and when storage changes
    checkConsent();
    window.addEventListener('storage', checkConsent);
    
    // Also check periodically (for same-tab updates)
    const interval = setInterval(checkConsent, 1000);

    return () => {
      window.removeEventListener('storage', checkConsent);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}', {
              page_path: window.location.pathname,
              anonymize_ip: true,
            });
          `,
        }}
      />
    </>
  );
};

