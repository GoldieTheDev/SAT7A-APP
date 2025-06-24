import React from 'react';
import { Instagram, Twitter, Smartphone, Download, Truck, Clock, Shield, MapPin } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2 space-x-reverse">
              <div className="bg-orange-500 p-2 rounded-lg">
                <Truck className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">سطحة نقل</span>
            </div>

            {/* Social Media & Download Links */}
            <div className="flex items-center space-x-4 space-x-reverse">
              {/* Social Media */}
              <div className="flex items-center space-x-3 space-x-reverse">
                <a 
                  href="https://instagram.com/sathanagl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-orange-500 transition-colors duration-200"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="https://x.com/sathanagl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-orange-500 transition-colors duration-200"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.tiktok.com/@sathanagl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-orange-500 transition-colors duration-200"
                >
                  <div className="w-5 h-5 bg-gray-600 hover:bg-orange-500 transition-colors duration-200 rounded-sm flex items-center justify-center">
                    <span className="text-white text-xs font-bold">T</span>
                  </div>
                </a>
              </div>

              {/* Download Buttons */}
              <div className="flex items-center space-x-2 space-x-reverse">
                <a 
                  href="https://apps.apple.com/sa/app/%D8%B3%D8%B7%D8%AD%D8%A9-%D9%86%D9%82%D9%84/id6741587735?l=ar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors duration-200 flex items-center space-x-1 space-x-reverse"
                >
                  <Smartphone className="h-4 w-4" />
                  <span>آيفون</span>
                </a>
                <a 
                  href="https://play.google.com/store/apps/details?id=com.emcan.sathaksa&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors duration-200 flex items-center space-x-1 space-x-reverse"
                >
                  <Download className="h-4 w-4" />
                  <span>أندرويد</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-500 to-red-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 rounded-full backdrop-blur-sm">
                <Truck className="h-10 w-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              تطبيق سطحة نقل هو<br />
              <span className="text-orange-200">خيارك الآمن في</span><br />
              الحالات الطارئة
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100 max-w-3xl mx-auto leading-relaxed">
              خدمة نقل احترافية وموثوقة متاحة ٢٤/٧ لخدمتك في أي وقت ومكان
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 sm:space-x-reverse">
              <a 
                href="https://apps.apple.com/sa/app/%D8%B3%D8%B7%D8%AD%D8%A9-%D9%86%D9%82%D9%84/id6741587735?l=ar"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center space-x-2 space-x-reverse shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Smartphone className="h-5 w-5" />
                <span>تحميل للآيفون</span>
              </a>
              <a 
                href="https://play.google.com/store/apps/details?id=com.emcan.sathaksa&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-200 flex items-center space-x-2 space-x-reverse shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Download className="h-5 w-5" />
                <span>تحميل للأندرويد</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              نقل آمن خدمة ممتازة راحة دائمة
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              وتتبع شحنتك بسهولة
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">خدمة ٢٤/٧</h3>
              <p className="text-gray-600 leading-relaxed">
                متاحون لخدمتك في أي وقت من اليوم، سبعة أيام في الأسبوع لضمان راحتك وأمانك
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">نقل آمن</h3>
              <p className="text-gray-600 leading-relaxed">
                نضمن سلامة مركبتك مع أحدث معدات النقل والفريق المدرب على أعلى مستوى
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">تتبع مباشر</h3>
              <p className="text-gray-600 leading-relaxed">
                تتبع موقع مركبتك لحظة بلحظة عبر التطبيق واطمئن على وصولها بأمان
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              سطحة دائماً جاهز لخدمتك أينما كنت
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              حمل التطبيق الآن وتمتع بخدمة نقل احترافية وسريعة في أي وقت
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 sm:space-x-reverse">
              <a 
                href="https://apps.apple.com/sa/app/%D8%B3%D8%B7%D8%AD%D8%A9-%D9%86%D9%82%D9%84/id6741587735?l=ar"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center space-x-2 space-x-reverse shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Smartphone className="h-5 w-5" />
                <span>متجر آبل</span>
              </a>
              <a 
                href="https://play.google.com/store/apps/details?id=com.emcan.sathaksa&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-200 flex items-center space-x-2 space-x-reverse shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Download className="h-5 w-5" />
                <span>جوجل بلاي</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 space-x-reverse mb-4 md:mb-0">
              <div className="bg-orange-500 p-2 rounded-lg">
                <Truck className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">سطحة نقل</span>
            </div>
            
            <div className="flex items-center space-x-6 space-x-reverse">
              <span className="text-gray-400">تابعنا على:</span>
              <a 
                href="https://instagram.com/sathanagl" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="https://x.com/sathanagl" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a 
                href="https://www.tiktok.com/@sathanagl" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
              >
                <div className="w-6 h-6 bg-gray-400 hover:bg-orange-500 transition-colors duration-200 rounded-sm flex items-center justify-center">
                  <span className="text-white text-xs font-bold">T</span>
                </div>
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 سطحة نقل. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;