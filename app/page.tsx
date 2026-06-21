import BounceCards from './BounceCards';
import ScrollReveal from './ScrollReveal';
import AnimatedCounter from './AnimatedCounter';
import Preloader from './Preloader';
import TiltCard from './TiltCard'; // <--- IMPORT TILT CARD DITAMBAHKAN DI SINI

export default function Home() {
  const galleryImages = [
    "/convoi1.png",
    "/convoi2.png",
    "/convoi3.png",
    "/convoi4.png",
    "/convoi6.png",
  ];

  const transformStyles = [
    "rotate(10deg) translate(-170px)",
    "rotate(5deg) translate(-85px)",
    "rotate(-3deg)",
    "rotate(-10deg) translate(85px)",
    "rotate(2deg) translate(170px)"
  ];

  return (
    <>
      {/* --- KOMPONEN PRELOADER SINEMATIK --- */}
      <Preloader />

      <div className="flex flex-col min-h-screen bg-[#131110] text-[#e9e6dd] font-sans scroll-smooth overflow-x-hidden">
        {/* --- Navbar Section (Leather Texture) --- */}
        <nav className="w-full bg-[#0f0d0c]/90 backdrop-blur-md border-b border-[#c2ae8a]/20 py-4 px-6 md:px-12 flex justify-between items-center fixed top-0 z-50">
          <h1 className="text-2xl font-extrabold tracking-widest uppercase text-[#e9e6dd]">
            Black <span className="text-[#d1110b]">Cobra</span> Familia
          </h1>
          <ul className="hidden md:flex space-x-8 font-medium text-[#c2ae8a]">
            <li><a href="#beranda" className="hover:text-[#e9e6dd] transition-colors">Beranda</a></li>
            <li><a href="#tentang" className="hover:text-[#e9e6dd] transition-colors">Tentang</a></li>
            <li><a href="#kegiatan" className="hover:text-[#e9e6dd] transition-colors">Kegiatan</a></li>
            <li><a href="#galeri" className="hover:text-[#e9e6dd] transition-colors">Galeri</a></li>
          </ul>
        </nav>

        {/* --- Hero Section --- */}
        <main id="beranda" className="relative flex flex-col items-center justify-center text-center pt-48 pb-24 px-6 min-h-[90vh] overflow-hidden">
          
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{ backgroundImage: "url('/convoi1.png')" }}
          ></div>
          
          <div className="absolute inset-0 bg-gradient-radial from-[#31231a]/10 via-[#131110]/80 to-[#0f0d0c]"></div>

          <div className="relative z-10 flex flex-col items-center w-full">
            <div className="relative mb-10 animate-float group mt-8 md:mt-4">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#d1110b] to-[#c2ae8a] blur-[90px] opacity-40 group-hover:opacity-70 transition-opacity duration-700 rounded-full"></div>
              <img 
                src="/icon.png" 
                alt="Black Cobra Logo" 
                className="relative w-64 h-64 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.8)]"
              />
            </div>

            <div className="inline-block px-4 py-1.5 border border-[#c2ae8a]/30 rounded-full bg-[#c2ae8a]/10 text-[#c2ae8a] font-semibold text-sm mb-6 uppercase tracking-wider">
              Est. May 30, 2026
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-4 text-[#e9e6dd] uppercase">
              Black Cobra <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d1110b] to-[#a00]">Familia</span>
            </h2>
            
            <ScrollReveal
              scrollContainerRef={undefined}
              baseOpacity={0}
              enableBlur={true}
              baseRotation={0}
              blurStrength={4}
              textClassName="text-xl md:text-2xl text-[#c2ae8a] max-w-2xl mb-12 italic font-medium tracking-wide"
            >
              {'"Fun to Drive"'}
            </ScrollReveal>
            
            <a 
              href="https://discord.gg/6tUh4CFu9t"
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-[#d1110b] to-[#a00] text-white px-10 py-4 rounded-md font-bold text-lg hover:from-[#a00] hover:to-[#700] transition-all shadow-[0_4px_12px_rgba(209,17,11,0.5)] hover:shadow-[0_6px_20px_rgba(209,17,11,0.7)] hover:-translate-y-1"
            >
              Gabung Keluarga Kami
            </a>
          </div>
        </main>

        {/* --- Stats Section --- */}
        <section className="py-12 border-y border-[#c2ae8a]/20 bg-[#1a1715] flex justify-center">
          <div className="text-center px-10 py-6 rounded-md bg-[#131110] border border-[#c2ae8a]/20 shadow-inner">
            <p className="text-5xl font-black text-[#e9e6dd] mb-2">
              <AnimatedCounter endValue={32} duration={2} />
              <span className="text-[#d1110b]">+</span>
            </p>
            <p className="text-[#c2ae8a] uppercase tracking-widest text-sm font-semibold">Active Members</p>
          </div>
        </section>

        {/* --- About Section --- */}
        <section id="tentang" className="py-24 px-6 md:px-12 bg-[#131110] flex flex-col items-center">
          <div className="max-w-4xl mx-auto text-center border border-[#c2ae8a]/20 p-12 rounded-xl bg-[#0f0d0c]">
            <h3 className="text-3xl md:text-4xl font-black mb-8 uppercase tracking-wide text-[#e9e6dd]">Solidaritas Tanpa Batas</h3>
            
            <ScrollReveal
              scrollContainerRef={undefined}
              baseOpacity={0}
              enableBlur={true}
              baseRotation={2}
              blurStrength={8}
              textClassName="text-lg text-[#e9e6dd] leading-relaxed mb-8"
            >
              {"Berdiri sejak 30 Mei 2026, Black Cobra Familia bukan sekadar tempat kumpul biasa. Tujuan utama kami adalah membangun sebuah keluarga yang solid dalam hal apapun. Kami membuktikan bahwa solidaritas kami tinggi, tidak hanya di dalam game, tetapi berlanjut hingga ke kehidupan nyata (Real Life) dengan berbagai kegiatan positif."}
            </ScrollReveal>
            
          </div>
        </section>

        {/* --- Activities Section --- */}
        <section id="kegiatan" className="py-24 px-6 md:px-12 bg-[#0f0d0c]">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-black mb-12 text-center uppercase tracking-wide text-[#e9e6dd]">Apa Yang Kami Lakukan</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {['Touring Santai & Ride Santai', 'Convoy Besar', 'Balapan (Race)', 'Roleplay', 'Explore Map', 'Nongkrong Bareng & Event Mingguan'].map((item, index) => (
                
                /* --- DIV LAMA DIGANTI DENGAN TILTCARD --- */
                <TiltCard 
                  key={index} 
                  className="bg-[#1a1715] p-8 rounded-lg border border-[#c2ae8a]/10 hover:border-[#d1110b]/50 transition-colors group cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-[#d1110b]/20"
                >
                  <h4 className="text-xl font-bold text-[#e9e6dd] mb-3 group-hover:text-[#d1110b] transition-colors">{item}</h4>
                  <p className="text-[#c2ae8a] text-sm">Menikmati aspal bersama saudara-saudara Black Cobra Familia dengan penuh gaya dan kesolidan.</p>
                </TiltCard>

              ))}
            </div>
          </div>
        </section>

        {/* --- Animated Gallery Section --- */}
        <section id="galeri" className="py-24 px-6 md:px-12 bg-[#131110] text-center overflow-hidden">
           <div className="max-w-screen-xl 2xl:max-w-screen-3xl mx-auto flex flex-col justify-center items-center">
              <h3 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-wide text-[#e9e6dd]">Galeri Perjalanan</h3>
              
              <ScrollReveal
                scrollContainerRef={undefined}
                baseOpacity={0}
                enableBlur={true}
                baseRotation={0}
                blurStrength={6}
                textClassName="text-[#c2ae8a] mb-16 max-w-2xl mx-auto"
              >
                {"Dokumentasi momen seru dan convoy Black Cobra Familia."}
              </ScrollReveal>
              
              <div className="my-10">
                <BounceCards
                  className="custom-bounceCards"
                  images={galleryImages}
                  containerWidth={500}
                  containerHeight={300}
                  animationDelay={0.4}
                  animationStagger={0.08}
                  easeType="elastic.out(1, 0.5)"
                  transformStyles={transformStyles}
                  enableHover={true}
                />
              </div>
              
           </div>
        </section>

        {/* --- Footer & Contact --- */}
        <footer className="w-full bg-black py-16 px-6 border-t border-[#c2ae8a]/20 text-center relative z-50">
          <h2 className="text-2xl font-black text-[#e9e6dd] mb-6 uppercase tracking-widest">Black <span className="text-[#d1110b]">Cobra</span> Familia</h2>
          <div className="flex justify-center gap-4 mb-10 text-[#c2ae8a]">
            <a href="https://discord.gg/6tUh4CFu9t" className="hover:text-[#e9e6dd] font-medium transition-colors">Discord</a>
            <span className="text-[#c2ae8a]/30">•</span>
            <span className="text-[#c2ae8a]/60 cursor-not-allowed" title="Coming Soon">YouTube (Soon)</span>
            <span className="text-[#c2ae8a]/30">•</span>
            <span className="text-[#c2ae8a]/60 cursor-not-allowed" title="Coming Soon">TikTok (Soon)</span>
          </div>
          <p className="text-sm text-[#c2ae8a]/60">
            © {new Date().getFullYear()} Black Cobra Familia. Fun to Drive.
          </p>
        </footer>
      </div>
    </>
  );
}