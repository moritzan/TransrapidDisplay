'use client'
import { Funnel_Display } from "next/font/google";
import { useState } from "react";
type FahrtgastNotsignalStatus = 'off' | 'error' | 'unknown';
type BMAStatus = 'off' | 'error' | 'unknown';


type ButtonStatus = 'on' | 'off' | 'error' | 'unknown';



const Meldungen = () => {

  const [FahrgastNotsignal, setFahrgastnotsignal] = useState<ButtonStatus>('off');
  const [BMA, setBMA] = useState<ButtonStatus>('off');
  


    // Hilfsfunktion (zyklisches Wechseln)
    const cycleStatus = <T,>(currentStatus: T, states: T[]): T => {
      const currentIndex = states.indexOf(currentStatus);
      const nextIndex = (currentIndex + 1) % states.length;
      return states[nextIndex];
  };

  // Handler (Icon-Klicks) - Deutlich vereinfacht
  const handleFahrgastnotsignalClick = () => {
    const states: FahrtgastNotsignalStatus[] = ['off', 'error', 'unknown'];
    setFahrgastnotsignal(prev => cycleStatus(prev, states));
  };

  const handleBMAClick = () => {
    const states: BMAStatus[] = ['off', 'error', 'unknown'];
    setBMA(prev => cycleStatus(prev, states));
  };

  
  const getButtonStatusColor = (status: ButtonStatus): string => {
    switch (status) {
      case 'on':   return 'bg-green-500 text-black' ;
      case 'off': return 'bg-[#d0d0d5]; text-black';
      case 'error': return 'bg-red-500';
      case 'unknown': return 'bg-[#d0d0d5]; text-white';
      default:        return 'bg-gray-300'; // Sollte nie vorkommen
    }
  };


  return (
      <div className="border-r border-l border-b border border-black pl-4 pr-4 pb-4">
        BLF / BFD Meldungen
     
      <div className="pt-2 grid grid-cols-1 grid-rows-2 gap-0.5">
          <div className={`col-start-1 ${getButtonStatusColor(FahrgastNotsignal)}  text-black text-center cursor-pointer border border-black"`} onClick={() => handleFahrgastnotsignalClick()}>FAHRGASTNOTSIGNAL</div>
          <div className={`col-start-1 ${getButtonStatusColor(BMA)}  text-black text-center cursor-pointer border border-black"`} onClick={() => handleBMAClick()}>BRANDMELDEANLAGE</div>
      </div>
    </div>

      )
}
export default Meldungen