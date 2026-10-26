const containerClass = 'mx-auto w-[calc(100%-32px)] max-w-[1180px] sm:w-[calc(100%-48px)]';

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
      <span>THE REMEMBER<br />ME</span>
    </a>
  );
}

function SiteHeader() {
  return (
    <header className={`${containerClass} flex min-h-[86px] items-center gap-4 border-b-[3px] border-black sm:min-h-[102px]`}>
      <Brand />

      <nav className="ml-auto hidden items-center gap-7 font-pixel text-[8px] md:flex" aria-label="Primary navigation">
        <a href="#about" className="border-b-2 border-transparent pb-1 hover:border-black">ABOUT</a>
        <a href="#build" className="border-b-2 border-transparent pb-1 hover:border-black">BUILD</a>
        <a href="#team" className="border-b-2 border-transparent pb-1 hover:border-black">TEAM</a>
      </nav>
    </header>
  );
}

export default SiteHeader;
