declare global {
   interface Window {
      gtag: (...args: unknown[]) => void;
   }
}

export const GA_MEASUREMENT_ID = 'G-3V5KXKCXN2';

export const pageview = (url: string) => {
   if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', GA_MEASUREMENT_ID, {
         page_path: url,
      });
   }
}; 