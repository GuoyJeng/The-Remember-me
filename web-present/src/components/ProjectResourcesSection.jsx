const containerClass = 'mx-auto w-[calc(100%-32px)] max-w-[1180px] sm:w-[calc(100%-48px)]';
const headingClass = 'font-pixel text-[24px] leading-[1.45] tracking-[-1.5px] sm:text-[38px]';

const projectResources = [
  {
    type: 'POSTER.PDF',
    title: 'PROJECT POSTER',
    description: 'Open the project poster and overview board.',
    href: 'https://drive.google.com/file/d/1mtV2LsArOBwWM8FE5hLzeVkeXBHZ4h_w/view?usp=sharing',
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
    description: 'Launch the live THE REMEMBER ME experience.',
    href: 'https://the-remember-me.vercel.app',
  },
  {
    type: 'SOURCE.GIT',
    title: 'SOURCE CODE',
    description: 'Browse the Arduino, web, and Apps Script code.',
    href: 'https://github.com/GuoyJeng/The-Remember-me',
  },
];

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

export default ProjectResourcesSection;
