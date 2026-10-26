import SectionLabel from './SectionLabel.jsx';
import scrollToSection from './scrollToSection.jsx';
import PixelButton from './PixelButton.jsx';
import HardwareTable from './HardwareTable.jsx';

const headingClass = 'font-pixel text-[24px] leading-[1.45] tracking-[-1.5px] sm:text-[38px]';

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

export default BuildSection;
