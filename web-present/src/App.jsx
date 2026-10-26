import { useState } from 'react';
import TeamSection from './components/TeamSection.jsx';
import ProjectResourcesSection from './components/ProjectResourcesSection.jsx';
import OverviewSection from './components/OverviewSection.jsx';
import ToolsSection from './components/ToolsSection.jsx';
import BuildSection from './components/BuildSection.jsx';
import PixelButton from './components/PixelButton.jsx';
import Hero from './components/Hero.jsx';
import SiteHeader from './components/SiteHeader.jsx';
import Footer from './components/Footer.jsx';

function FeatureMarquee() {
  const items = ['FOCUS', 'MEMORIZE', 'RECALL', 'LEVEL UP'];

  return (
    <section className="overflow-hidden border-y-[3px] border-black bg-black text-white" aria-label="Game features">
      <div className="flex w-max gap-7 py-[14px] font-pixel text-[10px] animate-crawl">
        {Array.from({ length: 2 }, (_, group) => (
          <div key={group} className="flex gap-7">
            {items.map((item) => (
              <span key={`${group}-${item}`} className="flex gap-7">
                <span>{item}</span>
                <b>✦</b>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-20 text-center text-white sm:py-[100px]">
      <div className="absolute inset-0 bg-whiteGrid bg-[size:26px_26px]" aria-hidden="true" />
      <div className="relative z-10">
        <p className="font-pixel text-[9px]">// END OF FILE</p>
        <h2 className="mt-6 font-pixel text-[28px] leading-[1.4] tracking-[-1.5px] sm:text-[48px]">READY TO<br />REMEMBER?</h2>
        <PixelButton invert onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>RETURN TO START ↑</PixelButton>
        <p className="mt-8 font-pixel text-[8px]">FOCUS • MEMORIZE • RECALL • LEVEL UP</p>
      </div>
    </section>
  );
}

export default function App() {
  const [readMode, setReadMode] = useState(false);

  return (
    <div id="top" className={`min-h-screen bg-white [-webkit-font-smoothing:none] ${readMode ? 'text-[15px]' : ''}`}>
      <SiteHeader />

      <main>
        <Hero />
        {/* <FeatureMarquee /> */}
        <OverviewSection />
        <BuildSection />
        <ToolsSection />
        <ProjectResourcesSection />
        <TeamSection />
        {/* <CallToAction /> */}
      </main>

      <Footer />
    </div>
  );
}
