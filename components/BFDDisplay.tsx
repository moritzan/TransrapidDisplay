'use client'
import { Funnel_Display } from "next/font/google";
import { useState } from "react";
type SchwebeStatus = 'on' | 'off' | 'unknown';
type TragenStatus = 'on' | 'off' | 'unknown';
type FuehrenStatus = 'on' | 'off' | 'unknown';
type AntriebStatus = 'on' | 'off' | 'unknown';
type FahrtStatus = 'on' | 'off' | 'unknown';
type AbsetzenStatus = 'on' | 'off' | 'unknown';
type BLTStatus = 'on' | 'error' | 'unknown';
type BLFStatus = 'on' | 'error' | 'unknown';
type FunkStatus = 'on' | 'error' | 'unknown';
type OrtungStatus = 'on' | 'error' | 'unknown';
type BremsenStatus = 'on' | 'error' | 'unknown';
type ZwangshaltStatus = 'off' | 'error' | 'unknown';
type HemmungStatus = 'off' | 'error' | 'unknown';

type ButtonStatus = 'on' | 'off' | 'error' | 'unknown';



const BFDDisplay = () => {

  const [schweben, setSchweben] = useState<ButtonStatus>('on');
  const [tragen, setTragen] = useState<ButtonStatus>('on');
  const [fuehren, setFuehren] = useState<ButtonStatus>('on');
  const [antrieb, setAntrieb] = useState<ButtonStatus>('on');
  const [fahrt, setFahrt] = useState<ButtonStatus>('off'); 
  const [absetzen, setAbsetzen] = useState<ButtonStatus>('off');
  const [blt, setBlt] = useState<ButtonStatus>('on');
  const [blf, setBlf] = useState<ButtonStatus>('on');
  const [funk, setFunk] = useState<ButtonStatus>('on');
  const [ortung, setOrtung] = useState<ButtonStatus>('on');
  const [bremsen, setBremsen] = useState<ButtonStatus>('on');
  const [zwangshalt, setZwangshalt] = useState<ButtonStatus>('off');
  const [hemmung, setHemmung] = useState<ButtonStatus>('off');


    // Hilfsfunktion (zyklisches Wechseln)
    const cycleStatus = <T,>(currentStatus: T, states: T[]): T => {
      const currentIndex = states.indexOf(currentStatus);
      const nextIndex = (currentIndex + 1) % states.length;
      return states[nextIndex];
  };

  // Handler (Icon-Klicks) - Deutlich vereinfacht
  const handleSchwebenClick = () => {
    const states: SchwebeStatus[] = ['on', 'off', 'unknown'];
    setSchweben(prev => cycleStatus(prev, states));
  };

  const handleTragenClick = () => {
    const states: TragenStatus[] = ['on', 'off', 'unknown'];
    setTragen(prev => cycleStatus(prev, states));
  };

  const handleFuehrenClick = () => {
    const states: FuehrenStatus[] = ['on', 'off', 'unknown'];
    setFuehren(prev => cycleStatus(prev, states));
  };

  const handleAntriebClick = () => {
    const states: AntriebStatus[] = ['on', 'off', 'unknown'];
    setAntrieb(prev => cycleStatus(prev, states));
  };

  const handleFahrtClick = () => {
    const states: FahrtStatus[] = ['on', 'off', 'unknown'];
    setFahrt(prev => cycleStatus(prev, states));
  }

  const handleAbsetzenClick = () => {
    const states: AbsetzenStatus[] = ['on', 'off', 'unknown'];
    setAbsetzen(prev => cycleStatus(prev, states));
  }

  const handleBltClick = () => {
    const states: BLTStatus[] = ['on', 'error', 'unknown'];
    setBlt(prev => cycleStatus(prev, states));
  }

  const handleBlfClick = () => {
    const states: BLFStatus[] = ['on', 'error', 'unknown'];
    setBlf(prev => cycleStatus(prev, states));
  }

  const handleFunkClick = () => {
    const states: FunkStatus[] = ['on', 'error', 'unknown'];
    setFunk(prev => cycleStatus(prev, states));
  }

  const handleOrtungClick = () => {
    const states: OrtungStatus[] = ['on', 'error', 'unknown'];
    setOrtung(prev => cycleStatus(prev, states));
  }

  const handleBremsenClick = () => {
    const states: BremsenStatus[] = ['on', 'error', 'unknown'];
    setBremsen(prev => cycleStatus(prev, states));
  }

  const handleZwangshaltClick = () => {
    const states: ZwangshaltStatus[] = ['off', 'error', 'unknown'];
    setZwangshalt(prev => cycleStatus(prev, states));
  }

  const handleHemmungClick = () => {
    const states: HemmungStatus[] = ['off', 'error', 'unknown'];
    setHemmung(prev => cycleStatus(prev, states));
  }

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
        <div className="grid grid-cols-5 grid-rows-4 gap-0.5">
            <div className={`col-span-3 pl-4 pr-4 pt-1 pb-1 ${getButtonStatusColor(schweben)}  text-black text-center cursor-pointer border border-black`} onClick={() => handleSchwebenClick()}>ANGEHOBEN</div>
            <div className={`col-start-4 row-start-1 pt-1 pb-1 ${getButtonStatusColor(tragen)}  text-black text-center cursor-pointer border border-black"`} onClick={() => handleTragenClick()}>T</div>
            <div className={`col-start-5 row-start-1 pt-1 pb-1 ${getButtonStatusColor(fuehren)}  text-black text-center cursor-pointer border border-black"`} onClick={() => handleFuehrenClick()}>F</div>

            <div className={`col-span-5 col-start-1 row-start-2 pt-1 pb-1 ${getButtonStatusColor(antrieb)}  text-black text-center cursor-pointer border border-black"`} onClick={() => handleAntriebClick()}>ANTRIEB EIN</div>
            <div className={`col-span-5 row-start-3 pt-1 pb-1 ${getButtonStatusColor(fahrt)}  text-black text-center cursor-pointer border border-black"`} onClick={() => handleFahrtClick()}> FAHRT FREI</div>
            <div className={`col-span-5 row-start-4 pt-1 pb-1 ${getButtonStatusColor(absetzen)}  text-black text-center cursor-pointer border border-black"`} onClick={() => handleAbsetzenClick()}>ABSETZEN FREI</div>
        </div>

      
      <div className=" pt-2 grid grid-cols-2 grid-rows-3 gap-0.5">
          <div className={`col-start-1 row-start-1 ${getButtonStatusColor(blt)}  text-black text-center cursor-pointer border border-black"`} onClick={() => handleBltClick()}>BLT</div>
          <div className={`col-start-2 row-start-1 ${getButtonStatusColor(blf)}  text-black text-center cursor-pointer border border-black"`} onClick={() => handleBlfClick()}>BLF</div>
          <div className={`col-start-1 ${getButtonStatusColor(funk)}  text-black text-center cursor-pointer border border-black"`} onClick={() => handleFunkClick()}>FUNK</div>
          <div className={`col-start-2 ${getButtonStatusColor(ortung)}  text-black text-center cursor-pointer border border-black"`} onClick={() => handleOrtungClick()}>ORTUNG</div>
          <div className={`col-span-2 ${getButtonStatusColor(bremsen)}  text-black text-center cursor-pointer border border-black"`} onClick={() => handleBremsenClick()}>BREMSEN OK</div>
      </div>

      
      <div className="pt-2 grid grid-cols-1 grid-rows-2 gap-0.5">
          <div className={`col-start-1 ${getButtonStatusColor(zwangshalt)}  text-black text-center cursor-pointer border border-black"`} onClick={() => handleZwangshaltClick()}>ZWANGSHALT</div>
          <div className={`col-start-1 ${getButtonStatusColor(hemmung)}  text-black text-center cursor-pointer border border-black"`} onClick={() => handleHemmungClick()}>HEMMUNG</div>
      </div>
    </div>

      )
}
export default BFDDisplay