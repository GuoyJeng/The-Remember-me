import PixelButton from './PixelButton.jsx';
import scrollToSection from './scrollToSection.jsx';

const containerClass = 'mx-auto w-[calc(100%-32px)] max-w-[1180px] sm:w-[calc(100%-48px)]';

function ReadmePreview() {
  return (
    <div className="border-4 border-black bg-white shadow-panel">
      <div className="flex items-center justify-between border-b-[3px] border-black bg-black px-4 py-3 font-pixel text-[8px] text-white">
        <span>README.MD</span>
        <span>● LIVE</span>
      </div>

      <div className="relative min-h-[310px] overflow-hidden bg-grid bg-[size:12px_12px] p-5 sm:min-h-[360px] sm:p-7">
        <div className="relative z-10 border-[3px] border-black bg-white p-4 shadow-pixel sm:p-5">
          <p className="m-0 font-pixel text-[8px] leading-5"># PROJECT: THE REMEMBER ME</p>
          <div className="my-4 h-[3px] w-full bg-black" />
          <p className="m-0 text-sm leading-6">[STATUS] READY PLAYER 01</p>
          <p className="mt-3 font-pixel text-[8px] leading-5">&gt; WATCH<br />&gt; REMEMBER<br />&gt; REPEAT</p>

          <div className="mt-5 grid grid-cols-4 gap-2" aria-label="Memory game pattern preview">
            {[0, 1, 2, 3].map((tile) => (
              <span
                key={tile}
                className={`aspect-square border-[3px] border-black ${tile === 1 ? 'bg-black' : tile === 0 ? 'bg-stripes' : 'bg-white'}`}
              />
            ))}
          </div>
        </div>

        <span className="absolute bottom-3 right-3 font-pixel text-[8px]">v1.0.0</span>
      </div>

      <div className="flex justify-between border-t-[3px] border-black px-4 py-3 font-pixel text-[7px]">
        <span>BLACK + WHITE EDITION</span>
        <span>◼</span>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className={`${containerClass} grid grid-cols-1 gap-11 py-14 sm:py-20 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:gap-20 lg:py-24`}>
      <div>
        <div className="mb-5 flex items-center gap-2 font-pixel text-[8px]">
          <span className="h-2 w-2 animate-blink bg-black" />
          PHYSICAL COMPUTING PROJECT 2026
        </div>

        <h1 className="font-pixel text-[29px] leading-[1.28] tracking-[-2px] sm:text-[clamp(32px,4.4vw,61px)]">
          THE REMEMBER<br />
          <span className="inline-block bg-black px-1 pb-1 pt-1 text-white">ME_</span>
        </h1>

        <p className="mt-6 max-w-[510px] text-[15px] leading-7 sm:text-base">
          A memory-training game where every light, button, and remembered sequence turns focus into a higher score.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-6">
          <PixelButton onClick={() => scrollToSection('#about')}>READ THE BRIEF ↓</PixelButton>
        </div>
      </div>

      <ReadmePreview />
    </section>
  );
}

export default Hero;
