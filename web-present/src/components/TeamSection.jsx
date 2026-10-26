const containerClass = 'mx-auto w-[calc(100%-32px)] max-w-[1180px] sm:w-[calc(100%-48px)]';
const headingClass = 'font-pixel text-[24px] leading-[1.45] tracking-[-1.5px] sm:text-[38px]';

const contributors = [
  { name: 'นายพงศภัค บุญสนธิ', id: '68070111', photo: 'https://github.com/user-attachments/assets/9db36b67-555c-4d97-8e5d-1cdbd8f4d35a' },
  { name: 'นายปิยวัฒน์ ศุภพรฐากร', id: '68070106', photo: 'https://github.com/user-attachments/assets/f35e2995-9285-4d16-b0a7-e97d688ba469' },
  { name: 'นายภูรินท์ ลือประเสริฐ', id: '68070145', photo: 'https://github.com/user-attachments/assets/16475490-8b61-4c5e-b7c9-431076199f45' },
  { name: 'นายอภิรักษ์ นพเคราะห์', id: '68070204', photo: 'https://github.com/user-attachments/assets/e2ee1776-9e7a-4b8e-a74d-229b7c383d1b' },
];

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
                <h3 className="mt-5 min-h-[38px] font-chakra text-[18px] leading-1">{person.name}</h3>
                <p className="mb-0 mt-1 border-t-2 border-current pt-3 font-pixel text-[10px]">ID: {person.id}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
