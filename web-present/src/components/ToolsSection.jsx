import SectionLabel from './SectionLabel.jsx';

const containerClass = 'mx-auto w-[calc(100%-32px)] max-w-[1180px] sm:w-[calc(100%-48px)]';
const headingClass = 'font-pixel text-[24px] leading-[1.45] tracking-[-1.5px] sm:text-[38px]';

const tools = ['VITE', 'TAILWIND CSS', 'Node.js และ npm', 'Git', 'Google Sheets'];

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

export default ToolsSection;
