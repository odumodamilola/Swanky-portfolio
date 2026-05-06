import { siteImages } from '../assets/siteImages';

export default function VideoHero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src={siteImages.heroSplash} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--gradient-hero-from)] via-[var(--gradient-hero-via)] to-[var(--color-void)]" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-[5vw]">
        <h1 className="font-display italic text-[10vw] md:text-[8vw] text-[#F0EDE6] text-center leading-none">
          OLALEKAN ISIAKA
        </h1>
      </div>
    </section>
  );
}
