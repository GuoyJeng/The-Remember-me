import SectionLabel from './SectionLabel.jsx';

const containerClass = 'mx-auto w-[calc(100%-32px)] max-w-[1180px] sm:w-[calc(100%-48px)]';
const headingClass = 'font-pixel text-[24px] leading-[1.45] tracking-[-1.5px] sm:text-[38px]';

const gameSteps = [
  { number: '01', title: 'WATCH', description: 'The device shows a sequence of illuminated tiles.', icon: 'empty' },
  { number: '02', title: 'HOLD', description: 'Keep the pattern in mind as the signal disappears.', icon: 'dot' },
  { number: '03', title: 'REPEAT', description: 'Press the buttons in order to advance the level.', icon: 'stripes' },
];

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

export default OverviewSection;
