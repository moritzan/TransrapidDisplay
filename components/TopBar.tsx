'use client'
// components/TopBar.tsx
import Image from 'next/image';
import { useEffect, useState } from 'react';

const TopBar: React.FC = () => {

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Funktion, die die Uhrzeit aktualisiert
    const updateTime = () => {
        setCurrentTime(new Date());
    };

    // Setze das Intervall (jede Sekunde)
    const intervalId = setInterval(updateTime, 1000);

    // Cleanup-Funktion: Wird aufgerufen, wenn die Komponente unmountet
    return () => clearInterval(intervalId);
}, []); // Leeres Abhängigkeitsarray [] sorgt dafür, dass useEffect nur einmal beim Mounten läuft


  return (
    <div className="bg-[#d0d0d5] text-black font-bold">
      <div className="flex items-center justify-between p-2">
        {/* Linke Seite: Logo und Text */}
        <div className="flex items-start space-x-4">
          <Image src="/icon1.png" alt="Transrapid Logo" width={50} height={50} />
          <div>
            <div className="text-xl text-blue-600">TRANSRAPID</div>
             <div className="text-sm p-1 mt-1">
                FZ <span className='mt-1 p-1 shadow-[inset_1px_1px_2px_1px_rgba(0,_0,_0,_0.35)]'>1</span> FP <span className='mt-1 p-1 shadow-[inset_1px_1px_2px_1px_rgba(0,_0,_0,_0.35)] px-1'>E1</span>
            </div>
          </div>
        </div>

        {/* Rechte Seite: Statusanzeigen */}
        <div className="flex items-center space-x-4">
            <div className='grid grid-cols-1  gap-2 justify-center'>
                <div className="shadow-[inset_1px_1px_2px_1px_rgba(0,_0,_0,_0.35)] bg-teal-400 p-2 rounded text-center">BETRIEBSART BLZ</div>
            <div className="shadow-[inset_1px_1px_2px_1px_rgba(0,_0,_0,_0.35)] bg-teal-400 p-2  rounded text-center">
                AUTOMATIKBETRIEB
            </div>

            </div>
        </div>

        <div className="flex items-center space-x-4">
        <div className="text-sm ">
                HALTEPLATZ in
                <div className='shadow-[inset_1px_1px_2px_1px_rgba(0,_0,_0,_0.35)] p-1 mt-1'> 4197 m</div>
            </div>
            <div className="text-sm">
                <div>{currentTime.toLocaleDateString()}</div>
                <div className='shadow-[inset_1px_1px_2px_1px_rgba(0,_0,_0,_0.35)] p-1 mt-1'>{currentTime.toLocaleTimeString()}</div>
            </div>
      </div>
    </div>
</div>
  );
};

export default TopBar;