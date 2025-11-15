'use client';

const galleryImages = [
  {
    title: 'لیزر موهای زائد',
    image: '/images/gallery-1.jpg',
    gradient: 'from-rose-200 via-pink-200 to-rose-300',
    emoji: '✨'
  },
  {
    title: 'مراقبت پوست',
    image: '/images/gallery-2.jpg',
    gradient: 'from-pink-200 via-rose-200 to-pink-300',
    emoji: '💆'
  },
  {
    title: 'تزریقات زیبایی',
    image: '/images/gallery-3.jpg',
    gradient: 'from-rose-300 via-pink-200 to-rose-200',
    emoji: '💉'
  },
  {
    title: 'دستگاه‌های پیشرفته',
    image: '/images/gallery-4.jpg',
    gradient: 'from-pink-300 via-rose-200 to-pink-200',
    emoji: '⚡'
  },
  {
    title: 'مشاوره تخصصی',
    image: '/images/gallery-5.jpg',
    gradient: 'from-rose-200 via-pink-300 to-rose-200',
    emoji: '👩‍⚕️'
  },
  {
    title: 'خدمات حرفه‌ای',
    image: '/images/gallery-6.jpg',
    gradient: 'from-pink-200 via-rose-300 to-pink-200',
    emoji: '🌟'
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-rose-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            گالری <span className="bg-gradient-to-l from-rose-600 to-pink-600 bg-clip-text text-transparent">تصاویر</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            نگاهی به فضای مدرن کلینیک و خدمات تخصصی ما
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 aspect-square"
            >
              <img
                src={image.image}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div className={`w-full h-full bg-gradient-to-br ${image.gradient} hidden items-center justify-center`}>
                <div className="text-6xl opacity-80">{image.emoji}</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 right-4 left-4">
                  <h3 className="text-white font-bold text-lg">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-l from-rose-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">آماده تغییر هستید؟</h3>
          <p className="text-xl mb-8 opacity-90">اولین قدم را با ما بردارید و زیبایی طبیعی خود را کشف کنید</p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-rose-600 px-8 py-4 rounded-full font-bold hover:bg-gray-50 hover:scale-105 transition-all duration-300 inline-block"
          >
            دریافت مشاوره رایگان
          </button>
        </div>
      </div>
    </section>
  );
}

