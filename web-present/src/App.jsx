import { useState } from 'react';

const containerClass = 'mx-auto w-[calc(100%-32px)] max-w-[1180px] sm:w-[calc(100%-48px)]';
const headingClass = 'font-pixel text-[24px] leading-[1.45] tracking-[-1.5px] sm:text-[38px]';

const gameSteps = [
  { number: '01', title: 'WATCH', description: 'The device shows a sequence of illuminated tiles.', icon: 'empty' },
  { number: '02', title: 'HOLD', description: 'Keep the pattern in mind as the signal disappears.', icon: 'dot' },
  { number: '03', title: 'REPEAT', description: 'Press the buttons in order to advance the level.', icon: 'stripes' },
];

const hardware = [
  { id: '01', name: 'Arduino UNO R4 WiFi', role: 'MAIN CONTROLLER' },
  { id: '02', name: 'LCD display', role: 'SYSTEM OUTPUT' },
  { id: '03', name: '4× LED LIGHT', role: 'PATTERN SIGNAL' },
  { id: '04', name: '4× BUTTONS', role: 'PLAYER INPUT' },
  { id: '05', name: 'Buzzer', role: 'SOUND OUTPUT' },
  { id: '06', name: 'Breadboard', role: 'BASE BOARD' },
  { id: '07', name: 'Resistors', role: 'CURRENT LIMITER' },
  { id: '08', name: 'Jumper wires', role: 'CIRCUIT CONNECTION' },
];

const tools = ['VITE', 'TAILWIND CSS', 'Node.js และ npm', 'Git', 'Google Sheets'];

const contributors = [
  { name: 'นายพงศภัค บุญสนธิ', id: '68070111', photo: 'https://github.com/user-attachments/assets/9db36b67-555c-4d97-8e5d-1cdbd8f4d35a' },
  { name: 'นายปิยวัฒน์ ศุภพรฐากร', id: '68070106', photo: 'https://github.com/user-attachments/assets/f35e2995-9285-4d16-b0a7-e97d688ba469' },
  { name: 'นายภูรินท์ ลือประเสริฐ', id: '68070145', photo: 'https://github.com/user-attachments/assets/16475490-8b61-4c5e-b7c9-431076199f45'},
  { name: 'นายอภิรักษ์ นพเคราะห์', id: '68070204', photo: 'https://github.com/user-attachments/assets/e2ee1776-9e7a-4b8e-a74d-229b7c383d1b' },
];

const projectResources = [
  {
    type: 'POSTER.PDF',
    title: 'PROJECT POSTER',
    description: 'Open the project poster and overview board.',
    href: 'https://github.com/user-attachments/assets/2f8119ab-4e52-464f-9ff8-bca8b263558e',
  },
  {
    type: 'VIDEO.YOUTUBE',
    title: 'VIDEO PRESENTATION',
    description: 'Presentation link will be added here.',
    href: 'https://youtu.be/oftDVDsEXl8'
  },
  {
    type: 'WEB.LIVE',
    title: 'PROJECT WEBSITE',
    description: 'Launch the live Remember Me experience.',
    href: 'https://the-remember-me.vercel.app',
  },
  {
    type: 'SOURCE.GIT',
    title: 'SOURCE CODE',
    description: 'Browse the Arduino, web, and Apps Script code.',
    href: 'https://github.com/GuoyJeng/The-Remember-me',
  },
];

function scrollToSection(id) {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
}

function PixelMark() {
  return (
    <span className="grid h-7 w-7 grid-cols-2 gap-[3px]" aria-hidden="true">
      <i className="bg-black" />
      <i className="border-[3px] border-black bg-white" />
      <i className="border-[3px] border-black bg-white" />
      <i className="bg-black" />
    </span>
  );
}

function Brand() {
  return (
    <a href="#top" className="flex items-center gap-3 font-pixel text-[10px] leading-[1.2] tracking-[-1px] sm:text-xs">
      <PixelMark />
      <span>REMEMBER<br />ME</span>
    </a>
  );
}

function PixelButton({ children, invert = false, onClick }) {
  const colors = invert
    ? 'bg-white text-black hover:bg-black hover:text-white'
    : 'bg-black text-white hover:bg-white hover:text-black';

  return (
    <button
      type="button"
      onClick={onClick}
      className={`border-[3px] border-black px-4 py-[15px] font-pixel text-[9px] leading-[1.4] shadow-pixel transition active:translate-x-[6px] active:translate-y-[6px] active:shadow-none ${colors}`}
    >
      {children}
    </button>
  );
}

function SectionLabel({ children }) {
  return <p className="mb-5 font-pixel text-[9px] tracking-[.4px]">// {children}</p>;
}

function SiteHeader({ soundEnabled, onToggleSound }) {
  return (
    <header className={`${containerClass} flex min-h-[86px] items-center gap-4 border-b-[3px] border-black sm:min-h-[102px]`}>
      <Brand />

      <nav className="ml-auto hidden items-center gap-7 font-pixel text-[8px] md:flex" aria-label="Primary navigation">
        <a href="#about" className="border-b-2 border-transparent pb-1 hover:border-black">ABOUT</a>
        <a href="#build" className="border-b-2 border-transparent pb-1 hover:border-black">BUILD</a>
        <a href="#team" className="border-b-2 border-transparent pb-1 hover:border-black">TEAM</a>
      </nav>

      {/* <button
        type="button"
        aria-pressed={soundEnabled}
        onClick={onToggleSound}
        className="border-2 border-black bg-white px-2 py-[10px] font-pixel text-[7px] shadow-[3px_3px_0_#000] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none sm:px-3 sm:text-[8px]"
      >
        {soundEnabled ? '◢ SOUND: ON' : '× SOUND: OFF'}
      </button> */}
    </header>
  );
}

function ReadmePreview() {
  return (
    <div className="border-4 border-black bg-white shadow-panel">
      <div className="flex items-center justify-between border-b-[3px] border-black bg-black px-4 py-3 font-pixel text-[8px] text-white">
        <span>README.MD</span>
        <span>● LIVE</span>
      </div>

      <div className="relative min-h-[310px] overflow-hidden bg-grid bg-[size:12px_12px] p-5 sm:min-h-[360px] sm:p-7">
        <div className="relative z-10 border-[3px] border-black bg-white p-4 shadow-pixel sm:p-5">
          <p className="m-0 font-pixel text-[8px] leading-5"># PROJECT: REMEMBER ME</p>
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

function Hero({ readMode, onToggleReadMode }) {
  return (
    <section className={`${containerClass} grid grid-cols-1 gap-11 py-14 sm:py-20 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:gap-20 lg:py-24`}>
      <div>
        <div className="mb-5 flex items-center gap-2 font-pixel text-[8px]">
          <span className="h-2 w-2 animate-blink bg-black" />
          PHYSICAL COMPUTING PROJECT 2026
        </div>

        <h1 className="font-pixel text-[29px] leading-[1.28] tracking-[-2px] sm:text-[clamp(32px,4.4vw,61px)]">
          REMEMBER<br />
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

function StepIcon({ type }) {
  if (type === 'dot') {
    return <div className="mt-6 h-9 w-9 border-[5px] border-black bg-white"><i className="m-[5px] block h-3 w-3 bg-black" /></div>;
  }

  if (type === 'stripes') {
    return <div className="mt-6 h-9 w-9 border-[5px] border-black bg-stripes" />;
  }

  return <div className="mt-6 h-9 w-9 border-[5px] border-black bg-white" />;
}

function OverviewSection() {
  return (
    <section id="about" className={`${containerClass} py-20 sm:py-[116px]`}>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[.82fr_1.18fr] lg:gap-20">
        <div>
          <SectionLabel>OVERVIEW</SectionLabel>
          <h2 className={headingClass}>THE MEMORY<br />MISSION.</h2>
        </div>

        <div className="border-l-4 border-black pl-5 text-[15px] leading-7 sm:pl-7 sm:text-base">
          โครงงานนี้มุ่งเน้นประโยชน์เกี่ยวกับการฝึกความจำ ประโยชน์ที่ได้จากการเล่นคือผู้เล่นได้ฝึกทักษะด้านความจำ ซึ่งสามารถช่วยฝึกความจำสำหรับผู้สูงอายุได้ด้วย 
          <br /><br />
          <strong className="font-pixel text-[9px]">TYPE:</strong> WEB DEVELOPMENT / GAME DEVELOPMENT / IOT
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
        {gameSteps.map((step) => (
          <article key={step.number} className="flex min-h-[224px] flex-col border-[3px] border-black bg-white p-5 shadow-pixel">
            <span className="self-end font-pixel text-xs">{step.number}</span>
            <StepIcon type={step.icon} />
            <h3 className="mt-auto font-pixel text-sm">{step.title}</h3>
            <p className="mb-0 mt-3 text-sm leading-6">{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function HardwareTable() {
  return (
    <div className="border-4 border-white bg-white text-black shadow-white">
      <div className="grid grid-cols-[56px_1fr] border-b-[3px] border-black bg-black px-4 py-4 font-pixel text-[8px] text-white">
        <span>ID</span>
        <span>COMPONENT / ROLE</span>
      </div>

      {hardware.map((item, index) => (
        <div
          key={item.id}
          className={`grid min-h-[72px] grid-cols-[56px_1fr] items-center border-black px-4 ${index < hardware.length - 1 ? 'border-b-2' : ''}`}
        >
          <span className="font-pixel text-[10px]">{item.id}</span>
          <span>
            <strong className="block font-pixel text-[8px] leading-5 sm:text-[10px]">{item.name}</strong>
            <small className="text-xs">// {item.role}</small>
          </span>
        </div>
      ))}

      <div className="flex justify-between border-t-[3px] border-black bg-black px-4 py-3 font-pixel text-[7px] text-white">
        <span>ALL SYSTEMS NOMINAL</span>
        <span>●</span>
      </div>
    </div>
  );
}

function BuildSection() {
  return (
    <section id="build" className="bg-black px-4 py-20 text-white sm:px-6 sm:py-[110px]">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
        <div>
          <SectionLabel>HARDWARE CONFIG</SectionLabel>
          <h2 className={headingClass}>BUILT TO<br />BE PRESSED.</h2>
          <p className="mt-7 max-w-[395px] text-[15px] leading-7">
            A physical set of lights and buttons makes each memory sequence tangible, immediate, and satisfying to play.
          </p>
          <PixelButton invert onClick={() => scrollToSection('#team')}>MEET THE TEAM →</PixelButton>
        </div>

        <HardwareTable />
      </div>
    </section>
  );
}

function ToolsSection() {
  return (
    <section className={`${containerClass} grid grid-cols-1 gap-10 py-20 sm:py-[110px] lg:grid-cols-[1.03fr_.97fr] lg:gap-20`}>
      <div className="border-4 border-black bg-white shadow-panel">
        <div className="border-b-[3px] border-black bg-black px-4 py-3 font-pixel text-[8px] text-white">TOOLS.TXT</div>
        <div className="p-5 sm:p-7">
          <p className="font-pixel text-[9px] leading-6">$ SELECTED STACK</p>
          <ul className="m-0 list-none space-y-3 p-0 text-sm sm:text-base">
            {tools.map((tool) => (
              <li className="flex items-center gap-3" key={tool}>
                <i className="h-3 w-3 bg-black" />
                {tool}
              </li>
            ))}
          </ul>
          <div className="mt-7 border-[3px] border-black p-4 font-pixel text-[8px] leading-5">
            npm run dev<br />
            <span className="bg-black px-1 text-white">SERVER READY_</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <SectionLabel>WHY IT MATTERS</SectionLabel>
        <h2 className={headingClass}>SMALL GAME.<br />SHARP MIND.</h2>
        <p className="mt-6 max-w-[480px] text-[15px] leading-7">
          The score board turns each session into a record of progress. Players can challenge themselves, build confidence, and come back for one more level.
        </p>
      </div>
    </section>
  );
}

function TeamSection() {
  return (
    <section id="team" className="border-y-[3px] border-black bg-white">
      <div className={`${containerClass} py-20 sm:py-[110px]`}>
        <div className="mb-11 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <h2 className={headingClass}>Contributors</h2>
          </div>
          <span className="font-pixel text-[8px]">IT KMITL / 2026</span>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contributors.map((person) => {
            const cardColors = person.inverted ? 'bg-black text-white' : 'bg-white text-black';
            const avatarColors = person.inverted ? 'bg-white text-black' : 'bg-black text-white';

            return (
              <article key={person.id} className={`border-[3px] border-black p-4 shadow-pixel ${cardColors}`}>
                <div className={`mx-auto grid h-[150px] w-[150px] place-items-center overflow-hidden border-[3px] border-black font-pixel text-sm ${avatarColors}`}>
                  <img src={person.photo} alt={person.name} className="h-full w-full object-cover object-center" />
                </div>
                <h3 className="mt-5 min-h-[38px] font-pixel text-[16px] leading-5">{person.name}</h3>
                <p className="mb-0 mt-3 border-t-2 border-current pt-3 font-pixel text-[10px]">ID: {person.id}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProjectResourcesSection() {
  return (
    <section id="resources" className={`${containerClass} py-20 sm:py-[110px]`}>
      <div className="mb-11 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <h2 className={headingClass}>PROJECT LINK</h2>
        </div>
        <span className="font-pixel text-[8px]">4 RESOURCE SLOTS</span>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {projectResources.map((resource) => {
          const isAvailable = Boolean(resource.href);
          const isInverted = false;
          const colors = isInverted
            ? 'bg-black text-white hover:bg-white hover:text-black'
            : 'bg-white text-black hover:bg-black hover:text-white';
          const iconColors = isInverted
            ? 'border-white bg-black group-hover:border-black group-hover:bg-white'
            : 'border-black bg-white group-hover:border-white group-hover:bg-black';
          const filledPixel = isInverted
            ? 'h-3 w-3 bg-white group-hover:bg-black'
            : 'h-3 w-3 bg-black group-hover:bg-white';
          const outlinedPixel = isInverted
            ? 'border-white bg-black group-hover:border-black group-hover:bg-white'
            : 'border-black bg-white group-hover:border-white group-hover:bg-black';
          const content = (
            <>
              <div className={`grid h-[50px] w-[50px] place-items-center border-[3px] ${iconColors}`}>
                <span className="grid grid-cols-2 gap-[3px]">
                  <i className={filledPixel} />
                  <i className={`h-3 w-3 border-[3px] ${outlinedPixel}`} />
                  <i className={`h-3 w-3 border-[3px] ${outlinedPixel}`} />
                  <i className={filledPixel} />
                </span>
              </div>
              <p className="mt-6 font-pixel text-[8px]">{resource.type}</p>
              <h3 className="mt-3 font-pixel text-[11px] leading-5">{resource.title}</h3>
              <p className="mt-3 text-sm leading-6">{resource.description}</p>
              <span className="mt-auto border-t-2 border-current pt-4 font-pixel text-[8px]">
                {isAvailable ? 'OPEN RESOURCE ↗' : 'LINK REQUIRED'}
              </span>
            </>
          );

          const cardClass = `group flex min-h-[270px] flex-col border-[3px] border-black p-5 shadow-pixel transition duration-0 hover:-translate-y-1 ${colors}`;

          return isAvailable ? (
            <a key={resource.title} href={resource.href} target="_blank" rel="noreferrer" className={cardClass}>
              {content}
            </a>
          ) : (
            <article key={resource.title} className={cardClass} aria-label={`${resource.title}: link required`}>
              {content}
            </article>
          );
        })}
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

function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className={`${containerClass} flex min-h-[100px] flex-wrap items-center justify-between gap-4`}>
        <div className="flex items-center gap-3 font-pixel text-[9px]">
          <span className="grid h-7 w-7 grid-cols-2 gap-[3px]">
            <i className="bg-white" />
            <i className="border-[3px] border-white bg-black" />
            <i className="border-[3px] border-white bg-black" />
            <i className="bg-white" />
          </span>
          REMEMBER ME
        </div>
        <p className="m-0 font-pixel text-[7px]">© 2026 PHYSICAL COMPUTING</p>
      </div>
    </footer>
  );
}

export default function App() {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [readMode, setReadMode] = useState(false);

  return (
    <div id="top" className={`min-h-screen bg-white [-webkit-font-smoothing:none] ${readMode ? 'text-[15px]' : ''}`}>
      <SiteHeader soundEnabled={soundEnabled} onToggleSound={() => setSoundEnabled((enabled) => !enabled)} />

      <main>
        <Hero readMode={readMode} onToggleReadMode={() => setReadMode((enabled) => !enabled)} />
        <FeatureMarquee />
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
