'use client';

import React, { useState, useEffect } from 'react';
import { PrivacyPolicyModal } from './PrivacyPolicyModal';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

export const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const settingsContentRef = React.useRef<HTMLDivElement>(null);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true, can't be disabled
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show banner after a short delay
      setTimeout(() => setShowBanner(true), 1000);
    }
    
    // TEST MODE: Always show banner (remove this in production)
    // Uncomment the line below to always show the banner for testing
    // setTimeout(() => setShowBanner(true), 1000);
  }, []);

  // Handle scroll indicator for settings modal
  useEffect(() => {
    const handleScroll = () => {
      if (settingsContentRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = settingsContentRef.current;
        setShowScrollIndicator(scrollTop + clientHeight < scrollHeight - 50);
      }
    };

    const content = settingsContentRef.current;
    if (content && showSettings) {
      content.addEventListener('scroll', handleScroll);
      handleScroll();
    }

    return () => {
      if (content) {
        content.removeEventListener('scroll', handleScroll);
      }
    };
  }, [showSettings]);

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    localStorage.setItem('cookie-consent', JSON.stringify(allAccepted));
    setShowBanner(false);
    setShowSettings(false);
  };

  const rejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    localStorage.setItem('cookie-consent', JSON.stringify(onlyNecessary));
    setShowBanner(false);
    setShowSettings(false);
  };

  const savePreferences = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    setShowBanner(false);
    setShowSettings(false);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/10 z-[60] transition-opacity duration-300"
        onClick={() => !showSettings && setShowBanner(false)}
      />

      {/* Main Banner */}
      {!showSettings ? (
        <div className="fixed bottom-0 left-0 right-0 md:bottom-6 md:left-6 md:right-auto md:max-w-md z-[70] animate-slide-up">
          <div className="bg-[#1C1817] rounded-t-2xl md:rounded-2xl shadow-2xl p-6 md:p-8 border border-gray-700">
            <div>
              <h3 className="text-lg font-bold text-white mb-3">
                Çerez Kullanımı
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-4">
                Yılmaz Nakliyat olarak, size daha iyi hizmet verebilmek ve web sitemizi geliştirmek için çerezler kullanıyoruz. 
                Çerezleri kabul ederek deneyiminizi iyileştirebilirsiniz.
              </p>
            </div>

            {/* Cookie Info Summary */}
            <div className="bg-black/30 rounded-lg p-4 mb-4 text-xs text-gray-300 border border-gray-700">
              <p className="mb-3 text-white font-semibold text-sm">Veri Gizliliği ve Güvenlik</p>
              <p className="mb-3 leading-relaxed">
                Web sitemizde toplanan tüm veriler yalnızca tarayıcınızda güvenle saklanır. 
                Hiçbir kişisel bilginiz harici sunuculara gönderilmez veya üçüncü taraflarla paylaşılmaz.
              </p>
              <div className="space-y-1 pt-2 border-t border-gray-700">
                <p className="text-gray-400">
                  <span className="text-white font-medium">Zorunlu:</span> Temel site işlevleri
                </p>
                <p className="text-gray-400">
                  <span className="text-white font-medium">Analitik:</span> Kullanım istatistikleri
                </p>
                <p className="text-gray-400">
                  <span className="text-white font-medium">Pazarlama:</span> İletişim kanalı tercihleri
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={acceptAll}
                className="flex-1 bg-[#F94006] hover:bg-[#E03800] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Tümünü Kabul Et
              </button>
              <button
                onClick={rejectAll}
                className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Reddet
              </button>
              <button
                onClick={() => setShowSettings(true)}
                className="flex-1 border-2 border-gray-600 hover:border-[#F94006] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Özelleştir
              </button>
            </div>

            {/* Privacy Link */}
            <p className="text-xs text-gray-400 mt-4 text-center">
              Daha fazla bilgi için{' '}
              <button 
                onClick={() => setShowPrivacyPolicy(true)} 
                className="text-[#F94006] hover:underline"
              >
                Gizlilik Politikası
              </button>
              'nı inceleyebilirsiniz.
            </p>
          </div>
        </div>
      ) : (
        /* Settings Modal */
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[90vh] z-[70] animate-scale-in">
          <div className="bg-[#1C1817] rounded-2xl shadow-2xl h-full flex flex-col m-4 border border-gray-700 relative">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700 shrink-0">
              <h3 className="text-2xl font-bold text-white">
                Çerez Ayarları
              </h3>
              <button
                onClick={() => setShowSettings(false)}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Kapat"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            {/* Content - Scrollable without visible scrollbar */}
            <div 
              ref={settingsContentRef}
              className="flex-1 overflow-y-auto p-6 scrollbar-hide"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              <p className="text-sm text-gray-300 mb-6">
                Hangi çerezlere izin vermek istediğinizi seçebilirsiniz. Tercihleriniz kaydedilecektir.
              </p>

            {/* Cookie Categories */}
            <div className="space-y-4">
              {/* Necessary Cookies */}
              <div className="border border-gray-700 rounded-lg p-4 bg-black/30">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="font-bold text-white">Zorunlu Çerezler</h4>
                    <p className="text-xs text-gray-400">Her zaman aktif</p>
                  </div>
                  <div className="bg-gray-700 rounded-full px-3 py-1 text-xs font-semibold text-gray-300">
                    Zorunlu
                  </div>
                </div>
                <p className="text-sm text-gray-300 mt-2">
                  Bu çerezler web sitesinin temel işlevlerini yerine getirmek için gereklidir. 
                  Navigasyon, dil tercihleri ve site güvenliği için kullanılır.
                </p>
                <div className="mt-2 text-xs text-gray-400">
                  <strong className="text-gray-300">Saklanan veriler:</strong> Dil tercihi, çerez onayı
                  <br />
                  <strong className="text-gray-300">Konum:</strong> Tarayıcınızın LocalStorage'ı
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="border border-gray-700 rounded-lg p-4 bg-black/30">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="font-bold text-white">Analitik Çerezler</h4>
                    <p className="text-xs text-gray-400">Opsiyonel</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#F94006]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-600 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#F94006]"></div>
                  </label>
                </div>
                <p className="text-sm text-gray-300 mt-2">
                  Web sitemizi nasıl kullandığınızı anlamamıza yardımcı olur. 
                  Hangi sayfaların en çok ziyaret edildiğini ve kullanıcı deneyimini nasıl iyileştirebileceğimizi gösterir.
                </p>
                <div className="mt-2 text-xs text-gray-400">
                  <strong className="text-gray-300">Saklanan veriler:</strong> Sayfa görüntüleme sayısı, ziyaret süresi, tıklama verileri
                  <br />
                  <strong className="text-gray-300">Konum:</strong> Tarayıcınızın LocalStorage'ı
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="border border-gray-700 rounded-lg p-4 bg-black/30">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="font-bold text-white">Pazarlama Çerezler</h4>
                    <p className="text-xs text-gray-400">Opsiyonel</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#F94006]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-600 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#F94006]"></div>
                  </label>
                </div>
                <p className="text-sm text-gray-300 mt-2">
                  İletişim butonlarının (WhatsApp, Telefon) kullanımını takip eder. 
                  Hangi iletişim yöntemlerinin daha etkili olduğunu anlamamıza yardımcı olur.
                </p>
                <div className="mt-2 text-xs text-gray-400">
                  <strong className="text-gray-300">Saklanan veriler:</strong> WhatsApp tıklama, telefon tıklama sayıları
                  <br />
                  <strong className="text-gray-300">Konum:</strong> Tarayıcınızın LocalStorage'ı
                </div>
              </div>
            </div>

            {/* Info Box */}
            <div className="bg-[#F94006]/10 border border-[#F94006]/30 rounded-lg p-4 mt-6">
              <div className="text-sm text-gray-300">
                <strong className="text-white">Gizliliğiniz Önemli!</strong>
                <p className="mt-1">
                  Tüm veriler sadece tarayıcınızda saklanır. Hiçbir kişisel veri üçüncü taraf sunuculara gönderilmez. 
                  Google Analytics veya benzeri harici takip araçları kullanmıyoruz.
                </p>
              </div>
            </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <button
                  onClick={savePreferences}
                  className="flex-1 bg-[#F94006] hover:bg-[#E03800] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  Tercihleri Kaydet
                </button>
                <button
                  onClick={acceptAll}
                  className="flex-1 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  Tümünü Kabul Et
                </button>
              </div>
            </div>

            {/* Scroll Indicator */}
            {showScrollIndicator && (
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none animate-bounce-slow">
                <div className="bg-[#F94006] rounded-full p-3 animate-pulse-subtle">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 10l5 5 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <PrivacyPolicyModal isOpen={showPrivacyPolicy} onClose={() => setShowPrivacyPolicy(false)} />

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes scale-in {
          from {
            transform: translate(-50%, -50%) scale(0.9);
            opacity: 0;
          }
          to {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes pulse-subtle {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.6;
          }
        }
        
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
        
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        
        .animate-pulse-subtle {
          animation: pulse-subtle 2s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

