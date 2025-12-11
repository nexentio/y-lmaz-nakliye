'use client';

import React, { useState, useRef, useEffect } from 'react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
        // Hide indicator when near bottom (within 50px)
        setShowScrollIndicator(scrollTop + clientHeight < scrollHeight - 50);
      }
    };

    const content = contentRef.current;
    if (content) {
      content.addEventListener('scroll', handleScroll);
      // Check initial state
      handleScroll();
    }

    return () => {
      if (content) {
        content.removeEventListener('scroll', handleScroll);
      }
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/10 z-[80] transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[90vh] z-[90] animate-scale-in">
        <div className="bg-[#1C1817] rounded-2xl shadow-2xl h-full flex flex-col m-4 border border-gray-700 relative">
          
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-700 shrink-0">
            <h2 className="text-2xl font-bold text-white">Gizlilik Politikası</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors p-2"
              aria-label="Kapat"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          {/* Content - Scrollable without visible scrollbar */}
          <div 
            ref={contentRef}
            className="flex-1 overflow-y-auto p-6 text-gray-300 scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            <div className="space-y-6 max-w-3xl">
              
              {/* Son Güncelleme */}
              <p className="text-sm text-gray-400">
                <strong>Son Güncelleme:</strong> {new Date().toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              {/* Giriş */}
              <section>
                <h3 className="text-xl font-bold text-white mb-3">1. Giriş</h3>
                <p className="leading-relaxed">
                  Yılmaz Nakliyat olarak, kişisel verilerinizin güvenliğini ve gizliliğini en üst düzeyde tutuyoruz. 
                  Bu gizlilik politikası, web sitemizi ziyaret ettiğinizde hangi bilgilerin toplandığını, 
                  nasıl kullanıldığını ve nasıl korunduğunu açıklamaktadır.
                </p>
              </section>

              {/* Toplanan Bilgiler */}
              <section>
                <h3 className="text-xl font-bold text-white mb-3">2. Toplanan Bilgiler</h3>
                <p className="leading-relaxed mb-3">
                  Web sitemizde aşağıdaki bilgiler toplanmaktadır:
                </p>
                <div className="space-y-3 ml-4">
                  <div>
                    <h4 className="font-semibold text-white mb-1">2.1. Zorunlu Çerezler</h4>
                    <p className="text-sm leading-relaxed">
                      Web sitesinin temel işlevlerini yerine getirmek için gerekli olan veriler. 
                      Dil tercihiniz, çerez onay durumunuz gibi bilgiler tarayıcınızın LocalStorage'ında saklanır.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">2.2. Analitik Veriler (Opsiyonel)</h4>
                    <p className="text-sm leading-relaxed">
                      Sayfa görüntüleme sayısı, ziyaret süresi, hangi sayfaların görüntülendiği gibi anonim kullanım istatistikleri. 
                      Bu veriler yalnızca web sitemizi iyileştirmek için kullanılır.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">2.3. Pazarlama Verileri (Opsiyonel)</h4>
                    <p className="text-sm leading-relaxed">
                      WhatsApp ve telefon butonlarına yapılan tıklama sayıları. Bu veriler hangi iletişim kanallarının 
                      daha etkili olduğunu anlamamıza yardımcı olur.
                    </p>
                  </div>
                </div>
              </section>

              {/* Verilerin Kullanımı */}
              <section>
                <h3 className="text-xl font-bold text-white mb-3">3. Verilerin Kullanımı</h3>
                <p className="leading-relaxed mb-3">
                  Toplanan veriler yalnızca aşağıdaki amaçlarla kullanılır:
                </p>
                <ul className="space-y-2 ml-6 list-disc list-outside">
                  <li>Web sitesinin temel işlevlerini sağlamak</li>
                  <li>Kullanıcı deneyimini iyileştirmek</li>
                  <li>Web sitesi performansını analiz etmek</li>
                  <li>İletişim kanallarının etkinliğini ölçmek</li>
                </ul>
              </section>

              {/* Veri Güvenliği */}
              <section>
                <h3 className="text-xl font-bold text-white mb-3">4. Veri Güvenliği ve Saklama</h3>
                <div className="bg-[#F94006]/10 border border-[#F94006]/30 rounded-lg p-4 mb-3">
                  <p className="font-semibold text-white mb-2">Önemli Güvenlik Bilgisi</p>
                  <p className="text-sm leading-relaxed">
                    Tüm veriler <strong className="text-white">yalnızca sizin tarayıcınızda</strong> saklanır. 
                    Hiçbir veri bizim sunucularımıza veya üçüncü taraf sunuculara aktarılmaz.
                  </p>
                </div>
                <ul className="space-y-2 ml-6 list-disc list-outside text-sm">
                  <li>Veriler tarayıcınızın LocalStorage'ında şifrelenmeden saklanır</li>
                  <li>Google Analytics, Facebook Pixel veya benzeri harici takip araçları kullanmıyoruz</li>
                  <li>Kişisel bilgileriniz (ad, soyad, e-posta, telefon) toplanmaz ve saklanmaz</li>
                  <li>İletişim formundan gönderilen bilgiler yalnızca size hizmet vermek için kullanılır</li>
                </ul>
              </section>

              {/* Üçüncü Taraf Hizmetler */}
              <section>
                <h3 className="text-xl font-bold text-white mb-3">5. Üçüncü Taraf Hizmetler</h3>
                <p className="leading-relaxed mb-3">
                  Web sitemizde kullanılan üçüncü taraf hizmetler:
                </p>
                <div className="space-y-3 ml-4">
                  <div>
                    <h4 className="font-semibold text-white mb-1">5.1. WhatsApp</h4>
                    <p className="text-sm leading-relaxed">
                      WhatsApp butonuna tıkladığınızda WhatsApp.com'a yönlendirilirsiniz. 
                      Bu noktadan sonra WhatsApp'ın kendi gizlilik politikası geçerlidir.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">5.2. Telefon Araması</h4>
                    <p className="text-sm leading-relaxed">
                      Telefon butonuna tıkladığınızda cihazınızın telefon uygulaması açılır. 
                      Hiçbir arama verisi kaydedilmez.
                    </p>
                  </div>
                </div>
              </section>

              {/* Haklarınız */}
              <section>
                <h3 className="text-xl font-bold text-white mb-3">6. Haklarınız</h3>
                <p className="leading-relaxed mb-3">
                  KVKK (Kişisel Verilerin Korunması Kanunu) kapsamında aşağıdaki haklara sahipsiniz:
                </p>
                <ul className="space-y-2 ml-6 list-disc list-outside">
                  <li>Verilerinizin silinmesini talep etme hakkı (tarayıcı geçmişinizi temizleyerek)</li>
                  <li>Çerez tercihlerinizi istediğiniz zaman değiştirme hakkı</li>
                  <li>Hangi verilerin toplandığını öğrenme hakkı</li>
                  <li>İletişim formundan gönderdiğiniz verilerin silinmesini talep etme hakkı</li>
                </ul>
              </section>

              {/* Çerez Yönetimi */}
              <section>
                <h3 className="text-xl font-bold text-white mb-3">7. Çerez Yönetimi</h3>
                <p className="leading-relaxed mb-3">
                  Çerez tercihlerinizi istediğiniz zaman değiştirebilirsiniz:
                </p>
                <div className="bg-black/30 border border-gray-700 rounded-lg p-4">
                  <ol className="space-y-2 ml-6 list-decimal list-outside text-sm">
                    <li>Tarayıcınızın LocalStorage'ını temizleyin</li>
                    <li>Sayfayı yenileyerek çerez tercih popup'ını tekrar açın</li>
                    <li>Tercihlerinizi yeniden belirleyin</li>
                  </ol>
                  <p className="text-xs text-gray-400 mt-3">
                    <strong>Not:</strong> Tarayıcınızın ayarlarından tüm LocalStorage verilerini silebilirsiniz.
                  </p>
                </div>
              </section>

              {/* Değişiklikler */}
              <section>
                <h3 className="text-xl font-bold text-white mb-3">8. Politika Değişiklikleri</h3>
                <p className="leading-relaxed">
                  Bu gizlilik politikası zaman zaman güncellenebilir. Önemli değişiklikler olduğunda, 
                  web sitemizde bildirim yapılacaktır. Politika değişikliklerini düzenli olarak kontrol etmenizi öneririz.
                </p>
              </section>

              {/* İletişim */}
              <section>
                <h3 className="text-xl font-bold text-white mb-3">9. İletişim</h3>
                <p className="leading-relaxed mb-3">
                  Gizlilik politikamız hakkında sorularınız veya talepleriniz için bizimle iletişime geçebilirsiniz:
                </p>
                <div className="bg-black/30 border border-gray-700 rounded-lg p-4">
                  <p className="text-sm"><strong className="text-white">Firma:</strong> Yılmaz Nakliyat</p>
                  <p className="text-sm"><strong className="text-white">Telefon:</strong> 0545 717 5150 / 0543 391 9863</p>
                  <p className="text-sm"><strong className="text-white">WhatsApp:</strong> 0545 717 5150</p>
                  <p className="text-sm"><strong className="text-white">Adres:</strong> Gaziantep, Türkiye</p>
                </div>
              </section>

              {/* KVKK Uyum */}
              <section>
                <h3 className="text-xl font-bold text-white mb-3">10. KVKK Uyumu</h3>
                <p className="leading-relaxed">
                  Yılmaz Nakliyat olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu'na (KVKK) tam uyum sağlıyoruz. 
                  Kişisel verileriniz, kanunun öngördüğü şekilde işlenmekte ve korunmaktadır.
                </p>
              </section>

            </div>
          </div>

          {/* Scroll Indicator - Only show when there's more content */}
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

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
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

