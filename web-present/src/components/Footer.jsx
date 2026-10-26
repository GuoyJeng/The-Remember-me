const containerClass = 'mx-auto w-[calc(100%-32px)] max-w-[1180px] sm:w-[calc(100%-48px)]';

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

export default Footer;
