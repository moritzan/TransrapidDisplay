'use client'
import { useState } from "react";
import Image from 'next/image';
type LightStatus = 'off' | 'on' | 'unknown';






const RechteBox = () => {



  const [lightStatus, setLightStatus] = useState<LightStatus>('on');

// Namen der Bilddateien (ohne .png) in Variablen speichern.
const iconNames = {
    lightOn: 'light_on',
    lightOff: 'light_off',
    lightUnknown: 'light_unknown',
    question: 'question'
};

const getLightIcon = (status: LightStatus) => {
    switch (status) {
        case 'on': return iconNames.lightOn;
        case 'off': return iconNames.lightOff;
        case 'unknown': return iconNames.lightUnknown;
    }
};

    // Hilfsfunktion (zyklisches Wechseln)
    const cycleStatus = <T,>(currentStatus: T, states: T[]): T => {
      const currentIndex = states.indexOf(currentStatus);
      const nextIndex = (currentIndex + 1) % states.length;
      return states[nextIndex];
  };

  // Handler (Icon-Klicks) - Deutlich vereinfacht
  const handleLightClick = () => {
    const states: LightStatus[] = ['off', 'on', 'unknown'];
    setLightStatus(prev => cycleStatus(prev, states));
  };


  {/*}
  const getButtonStatusColor = (status: ButtonStatus): string => {
    switch (status) {
      case 'on':   return 'bg-green-500 text-black' ;
      case 'off': return 'bg-[#d0d0d5]; text-black';
      case 'error': return 'bg-red-500';
      case 'unknown': return 'bg-[#d0d0d5]; text-white';
      default:        return 'bg-gray-300'; // Sollte nie vorkommen
    }
  };
  */}


  return (
      <div className=" w-full border-r border-l border-b border border-black pl-4 pr-4 pb-4">
        BLF / BFD Meldungen
     
      <div className=" pt-1 pb-1 cursor-pointer flex justify-between items-center border border-black" onClick={() => handleLightClick()}>
        <div className={`col-start-1 pl-2 text-black text-center"`}>
            BELEUCHTUNG
        </div>
        <Image className="mr-2" src={`/${getLightIcon(lightStatus)}.png`} alt="Licht-Icon" width={24} height={24}/>
      </div>
    </div>

      )
}
export default RechteBox