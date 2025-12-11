'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

interface GoogleAnalyticsProps {
  measurementId: string;
}

export const GoogleAnalytics: React.FC<GoogleAnalyticsProps> = ({ measurementId }) => {
  const [consent, setConsent] = useState<any>(null);

  useEffect(() => {
    // Check cookie consent
    const storedConsent = localStorage.getItem('cookie-consent');
    if (storedConsent) {
      setConsent(JSON.parse(storedConsent));
    }

    // Listen for consent changes
    const handleStorageChange = () => {
      const newConsent = localStorage.getItem('cookie-consent');
      if (newConsent) {
        setConsent(JSON.parse(newConsent));
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Only load if analytics consent is given
  if (!consent || !consent.analytics) {
    return null;
  }

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

