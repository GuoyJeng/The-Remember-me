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

export default HardwareTable;
