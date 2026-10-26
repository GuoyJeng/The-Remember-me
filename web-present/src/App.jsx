import { useState } from 'react';

const rankings = [
  ['01', 'A', 'ARCADEGHOST', '42', 'bg-black text-white'],
  ['02', 'K', 'KIMMI', '38', 'border-2 border-black bg-stripes'],
  ['03', 'J', 'JETPACK', '35', 'border-4 border-black'],
  ['04', 'M', 'MINDWAVE', '31', 'border-4 border-black bg-white'],
];

function Brand() {
  return (
    <a href="#top" className="flex items-center gap-3 font-pixel text-[10px] leading-[1.2] tracking-[-1px] sm:text-xs" aria-label="Remember Me home">
      <span className="grid h-[30px] w-[30px] grid-cols-2 gap-[3px]" aria-hidden="true">
        <i className="bg-black" /><i className="border-[3px] border-black bg-white" />
        <i className="border-[3px] border-black bg-white" /><i className="bg-black" />
      </span>
      <span>REMEMBER<br />ME</span>
    </a>
  );
}

function PixelButton({ children, className = '', onClick }) {
  return <button type="button" onClick={onClick} className={`border-[3px] border-black bg-black px-5 py-[17px] font-pixel text-[10px] leading-[1.3] text-white shadow-pixel transition active:translate-x-[6px] active:translate-y-[6px] active:shadow-none hover:bg-white hover:text-black ${className}`}>{children}</button>;
}

function StepIcon({ type }) {
  if (type === 'eyes') return <div className="mt-[18px] flex h-[62px] w-20 items-center gap-[11px] sm:mt-[33px]" aria-hidden="true">{[0, 1].map((key) => <i className="relative block h-[23px] w-[31px] bg-black after:absolute after:left-[11px] after:top-[7px] after:h-[9px] after:w-[9px] after:bg-white" key={key} />)}</div>;
  if (type === 'brain') return <div className="relative mt-[18px] h-[51px] w-[65px] border-[5px] border-current sm:mt-[33px]" aria-hidden="true"><i className="absolute left-[14px] top-[13px] h-[18px] w-[6px] bg-current" /><i className="absolute left-[28px] top-[7px] h-[30px] w-[6px] bg-current" /><i className="absolute left-[43px] top-[13px] h-[18px] w-[6px] bg-current" /></div>;
  return <div className="relative mt-[18px] h-[62px] w-20 sm:mt-[33px]" aria-hidden="true"><i className="absolute left-[31px] top-3 h-[50px] w-[22px] bg-current" /><i className="absolute left-[17px] top-px h-[39px] w-[11px] bg-current" /><i className="absolute left-[55px] top-2 h-[33px] w-[11px] bg-current" /></div>;
}

export default function App() {
  const [soundOn, setSoundOn] = useState(true);
  const [activeTile, setActiveTile] = useState(1);
  const [playing, setPlaying] = useState(false);
  const [prompt, setPrompt] = useState('WATCH CAREFULLY...');
  const [level, setLevel] = useState(1);

  const play = async () => {
    if (playing) return;
    setPlaying(true);
    document.querySelector('#memory-module')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    const sequence = [1, 3, 0, 2, 1, 0];
    for (let index = 0; index < sequence.length; index += 1) {
      await new Promise((resolve) => setTimeout(resolve, index ? 350 : 650));
      setPrompt('WATCH CAREFULLY...'); setLevel(index + 1); setActiveTile(sequence[index]);
      await new Promise((resolve) => setTimeout(resolve, 460)); setActiveTile(-1);
    }
    setLevel(1); setPrompt('YOUR TURN!'); setPlaying(false);
  };

  return (
    <div className="overflow-hidden">
      <header className="mx-auto flex min-h-[86px] w-[calc(100%-32px)] max-w-[1200px] items-center justify-between gap-6 border-b-[3px] border-black sm:min-h-[104px] sm:w-[calc(100%-48px)]">
        <Brand />
        <nav className="ml-auto hidden items-center gap-[30px] font-pixel text-[9px] md:flex" aria-label="Primary navigation">
          <a className="border-b-2 border-transparent pb-1 hover:border-black" href="#how-to-play">HOW TO PLAY</a>
          <a className="border-b-2 border-transparent pb-1 hover:border-black" href="#high-scores">HIGH SCORES</a>
        </nav>
        <button type="button" aria-pressed={soundOn} onClick={() => setSoundOn(!soundOn)} className="border-2 border-black bg-white px-2 py-2.5 font-pixel text-[7px] shadow-[3px_3px_0_#000] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none sm:px-3 sm:text-[8px]">
          <span className="mr-1 text-xs" aria-hidden="true">{soundOn ? '◢' : '×'}</span> SOUND: {soundOn ? 'ON' : 'OFF'}
        </button>
      </header>

      <main id="top">
        <section className="mx-auto grid w-[calc(100%-32px)] max-w-[1200px] grid-cols-1 items-center gap-[51px] py-[51px] sm:w-[calc(100%-48px)] sm:py-[66px] md:grid-cols-[1.02fr_.98fr] md:gap-[clamp(45px,8vw,126px)] md:py-[95px]" aria-labelledby="page-title">
          <div className="max-w-[590px]">
            <p className="mb-[21px] font-pixel text-[9px] tracking-[.5px]"><span className="mr-2 inline-block h-[9px] w-[9px] animate-blink bg-black" /> READY PLAYER 01</p>
            <h1 id="page-title" className="font-pixel text-[34px] leading-[1.25] tracking-[-2px] sm:text-[clamp(34px,4.2vw,62px)]">TRAIN YOUR<br /><span className="inline-block bg-black px-[7px] pb-1 pt-1 text-white">MEMORY.</span></h1>
            <p className="my-[30px] max-w-[455px] text-[15px] leading-[1.7] sm:text-base">Watch the pattern. Remember the sequence. Prove your brain has still got it.</p>
            <div className="flex flex-wrap items-center gap-[27px]">
              <PixelButton onClick={play}>START GAME <span className="ml-2 text-base">→</span></PixelButton>
              <a className="border-b-2 border-transparent pb-1 font-pixel text-[9px] hover:border-black" href="#how-to-play">LEARN THE RULES ↓</a>
            </div>
          </div>

          <div id="memory-module" className="w-full max-w-[540px] border-4 border-black bg-white shadow-panel" aria-label="Game preview">
            <div className="flex justify-between border-b-[3px] border-black px-4 py-[13px] pb-[11px] font-pixel text-[8px]"><span>MEMORY MODULE</span><span className="animate-blink">● LIVE</span></div>
            <div className="relative min-h-[324px] bg-grid bg-[size:10px_10px] px-7 py-[33px] sm:min-h-[366px] sm:px-9 sm:py-9">
              {['left-2 top-2 border-l-4 border-t-4', 'right-2 top-2 border-r-4 border-t-4', 'bottom-2 left-2 border-b-4 border-l-4', 'bottom-2 right-2 border-b-4 border-r-4'].map((corner) => <i className={`absolute h-5 w-5 border-black ${corner}`} key={corner} />)}
              <div className="relative z-10 inline-block border-2 border-black bg-white px-[9px] pb-[5px] pt-[7px] font-pixel text-[9px]">LEVEL <strong className="ml-1 text-[13px]">{String(level).padStart(2, '0')}</strong></div>
              <div className="relative z-10 mx-auto mb-[14px] mt-[18px] grid w-[220px] grid-cols-2 gap-3 sm:w-[260px]" aria-label="Four memory tiles">
                {[0, 1, 2, 3].map((tile) => <button type="button" key={tile} aria-label={`Memory tile ${tile + 1}`} onClick={() => { if (!playing) { setActiveTile(tile); setPrompt('NICE MOVE!'); } }} className={`aspect-square border-4 border-black shadow-[4px_4px_0_#000] ${activeTile === tile ? 'bg-black' : tile === 0 ? 'bg-stripes' : 'bg-white'} hover:bg-black`} />)}
              </div>
              <p className="relative z-10 mx-auto w-max max-w-full bg-white px-[7px] py-[5px] text-center font-pixel text-[8px]">{prompt}</p>
              <div className="relative z-10 mt-[15px] flex justify-center gap-[5px]">{Array.from({ length: 6 }, (_, index) => <i className={`h-[6px] w-[18px] border-2 border-black ${index < 2 ? 'bg-black' : 'bg-white'}`} key={index} />)}</div>
            </div>
            <p className="m-0 border-t-[3px] border-black px-4 py-[11px] pb-[9px] font-pixel text-[7px]">SYSTEM STATUS: <strong className="bg-black px-[5px] py-[3px] text-white">NOMINAL</strong></p>
          </div>
        </section>

        <section className="overflow-hidden border-y-[3px] border-black bg-black text-white" aria-label="Game features"><div className="flex w-max items-center gap-[29px] py-[15px] pb-[13px] font-pixel text-[11px] animate-crawl">{Array.from({ length: 2 }, (_, repeat) => <div className="flex items-center gap-[29px]" key={repeat}>{['FOCUS', 'MEMORIZE', 'RECALL', 'LEVEL UP'].map((word) => <span className="contents" key={word}><span>{word}</span><b className="text-[13px]">✦</b></span>)}</div>)}</div></section>

        <section id="how-to-play" className="mx-auto w-[calc(100%-32px)] max-w-[1200px] py-20 sm:w-[calc(100%-48px)] sm:py-[110px] md:pb-[124px]" aria-labelledby="how-title">
          <div className="max-w-[620px]"><p className="mb-[21px] font-pixel text-[9px] tracking-[.5px]">// THE MISSION</p><h2 id="how-title" className="font-pixel text-[25px] leading-[1.4] tracking-[-2px] sm:text-[clamp(25px,3vw,40px)]">SIMPLE RULES.<br />SERIOUS FOCUS.</h2></div>
          <div className="mt-[38px] grid grid-cols-1 gap-[23px] pr-[7px] sm:mt-12 sm:grid-cols-3 sm:gap-[26px]">
            {[['01', 'eyes', 'WATCH', 'The tiles flash in a secret pattern. Pay attention—there are no repeats.'], ['02', 'brain', 'REMEMBER', 'Hold the sequence in your mind. Each new level adds one more move.'], ['03', 'hand', 'REPEAT', 'Tap the pattern back perfectly. One wrong tile and it’s game over.']].map(([num, icon, heading, body], index) => <article className={`flex min-h-[260px] flex-col border-[3px] border-black p-[18px] shadow-[7px_7px_0_#000] sm:min-h-[330px] sm:p-6 ${index === 1 ? 'bg-black text-white' : 'bg-white'}`} key={num}><span className="self-end font-pixel text-xs">{num}</span><StepIcon type={icon} /><h3 className="mt-auto font-pixel text-base tracking-[-1px]">{heading}</h3><p className="mb-0 mt-[15px] text-sm leading-[1.6]">{body}</p></article>)}
          </div>
        </section>

        <section id="high-scores" className="grid grid-cols-1 items-center gap-[50px] bg-black px-6 py-20 text-white sm:px-[max(24px,calc((100%-1200px)/2))] sm:py-[106px] md:grid-cols-[.84fr_1.16fr] md:gap-[clamp(56px,10vw,154px)]" aria-labelledby="scores-title">
          <div><p className="mb-[21px] font-pixel text-[9px] tracking-[.5px]">// HALL OF FAME</p><h2 id="scores-title" className="font-pixel text-[25px] leading-[1.4] tracking-[-2px] sm:text-[clamp(25px,3vw,40px)]">TOP MINDS<br />ON RECORD.</h2><p className="my-[27px] max-w-[395px] text-[15px] leading-[1.7]">Think you can make the board? The next high score could have your name stamped on it.</p><PixelButton className="border-white bg-white text-black shadow-[6px_6px_0_#fff] hover:bg-black hover:text-white">VIEW ALL SCORES <span className="ml-2 text-base">↗</span></PixelButton></div>
          <div className="w-[calc(100%-8px)] max-w-[620px] border-4 border-white bg-white text-black shadow-white"><div className="grid grid-cols-[54px_1fr_42px] bg-black px-[15px] py-4 font-pixel text-[7px] text-white sm:grid-cols-[85px_1fr_70px] sm:text-[8px]"><span>RANK</span><span>PLAYER</span><span className="text-right">LEVEL</span></div><ol className="m-0 list-none p-0">{rankings.map(([rank, letter, player, score, avatar]) => <li className="grid min-h-[62px] grid-cols-[54px_1fr_42px] items-center border-b-2 border-black px-[9px] py-2 sm:grid-cols-[85px_1fr_70px] sm:px-[14px]" key={rank}><strong className="font-pixel text-[11px]">{rank}</strong><span className="flex items-center gap-[7px] font-pixel text-[7px] sm:gap-[11px] sm:text-[9px]"><i className={`grid h-[27px] w-[27px] place-items-center font-pixel text-[9px] not-italic sm:h-[31px] sm:w-[31px] sm:text-[11px] ${avatar}`}>{letter}</i>{player}</span><b className="text-right font-pixel text-[11px] sm:text-sm">{score}</b></li>)}</ol><div className="flex justify-between bg-black px-[14px] py-3 pb-[10px] font-pixel text-[8px] text-white"><span>UPDATED TODAY</span><span>↻</span></div></div>
        </section>

        <section className="relative grid min-h-[460px] place-content-center overflow-hidden px-6 py-[100px] text-center" aria-label="Play now"><div className="absolute inset-0 bg-cross bg-[size:120px_120px]" aria-hidden="true" /><div className="relative z-10"><p className="mb-[25px] font-pixel text-[9px] tracking-[.5px]">YOUR TURN</p><h2 className="font-pixel text-[31px] leading-[1.35] tracking-[-2px] sm:text-[clamp(31px,4vw,54px)]">HOW FAR CAN<br />YOU GO?</h2><PixelButton onClick={play} className="mt-[34px] bg-white text-black">PLAY NOW <span className="ml-2 text-base">→</span></PixelButton><p className="mt-[30px] font-pixel text-[8px]">NO ACCOUNT. NO EXCUSES.</p></div></section>
      </main>

      <footer className="mx-auto flex min-h-[105px] w-[calc(100%-32px)] flex-wrap items-start justify-between gap-5 border-t-[3px] border-black py-6 sm:w-[calc(100%-48px)] sm:items-center sm:py-0"><Brand /><p className="order-3 m-0 w-full font-pixel text-[7px] sm:order-none sm:w-auto sm:text-[8px]">© 2026 REMEMBER ME PROJECT</p><a className="border-b-2 border-black pb-[3px] font-pixel text-[7px] sm:text-[8px]" href="#top">BACK TO TOP ↑</a></footer>
    </div>
  );
}
