// components/SpeedDisplay.tsx
'use client';
// components/SpeedDisplay.tsx
import React, { useState } from 'react';

interface SpeedDisplayProps {
  initialMin: number;
  initialSoll: number;
  initialIst: number;
  initialMax: number;
}

const SpeedDisplay: React.FC<SpeedDisplayProps> = ({
  initialMin,
  initialSoll,
  initialIst,
  initialMax,
}) => {
  const [min, setMin] = useState(initialMin);
  const [soll, setSoll] = useState(initialSoll);
  const [ist, setIst] = useState(initialIst);
  const [max, setMax] = useState(initialMax);

    // Berechnungen für die Balken (hilfsfunktionen)
    const calculateBarWidth = (value: number, maxValue: number): string => {
    const width = (value / maxValue) * 100;
        return `${Math.max(0, Math.min(width, 100))}%`; // Begrenze auf 0-100%
    };
    
    const rangeWidth = calculateBarWidth(max-min, 500);  // Breite des Range-Balkens
    const sollWidth = calculateBarWidth(ist, 500);  // Breite des Soll-Balkens
    const istWidth = calculateBarWidth(soll , 500);      // Breite des Ist-Balkens
    
     const rangeStart =  calculateBarWidth(min, 500);

  return (
    
    <div className="bg-[#d0d0d5] p-4  pr-36 pl-36 "> {/* Äußeres Padding (links/rechts) */}
      {/* Geschwindigkeitsanzeigen (jetzt nebeneinander) */}
      <div className=' border  border-black  p-4   pt-6 pr-4 pl-4'>
      <div className="flex items-center justify-between mb-4 ">
        <div className="flex items-center">
          <div className="text-sm mr-2">MIN</div>
          <div className="shadow-[inset_1px_1px_2px_1px_rgba(0,_0,_0,_0.35)] p-1">
            <input
              type="number"
              value={min}
              onChange={(e) => setMin(Math.max(0, parseInt(e.target.value, 10)))}
              className="w-16 text-center bg-transparent"
              min="0"
            />
          </div>
        </div>

        <div className="flex items-center">
          <div className="text-sm mr-2">SOLL</div>
          <div className="shadow-[inset_1px_1px_2px_1px_rgba(0,_0,_0,_0.35)] p-1">
            <input
              type="number"
              value={soll}
              onChange={(e) => setSoll(Math.max(0,parseInt(e.target.value, 10)))}
              className="w-16 text-center bg-transparent"
              min="0"
            />
          </div>
        </div>

        <div className="flex items-center">
          <div className="text-sm mr-2">IST</div>
          <div className="shadow-[inset_1px_1px_2px_1px_rgba(0,_0,_0,_0.35)] p-1 bg-teal-400">
            <input
              type="number"
              value={ist}
              onChange={(e) => setIst(Math.max(0, parseInt(e.target.value, 10)))}
              className="w-16 text-center bg-transparent"
              min="0"
            />
          </div>
        </div>

        <div className="flex items-center">
          <div className="text-sm mr-2">MAX</div>
          <div className="shadow-[inset_1px_1px_2px_1px_rgba(0,_0,_0,_0.35)] p-1">
            <input
              type="number"
              value={max}
              onChange={(e) => setMax( Math.max(0, parseInt(e.target.value, 10)))}
              className="w-16 text-center bg-transparent"
              min="0"
            />
          </div>
        </div>
      </div>

      {/* Balkenanzeige (jetzt untereinander, nicht abgerundet) */}
      <div className="shadow-[inset_1px_1px_2px_1px_rgba(0,_0,_0,_0.35)]">
        

      <div>
        {/* Range-Balken (MIN bis MAX) */}
        <div
            className="h-6 bg-green-600"
            style={{ width: rangeWidth, marginLeft: rangeStart }}
            ></div>
            <div className="border-b border-black"></div> {/* Volle Breite */}
        </div>
        
        {/* Container für SOLL-Balken + Border */}
        <div>
                <div
                className="h-6 bg-green-500"
                style={{ width: sollWidth }}
                ></div>
                <div className="border-b border-black"></div>  {/* Volle Breite */}
            </div>


        {/* IST-Balken */}
        <div
          className="h-6 bg-black"
          style={{ width: istWidth }}
        ></div>
      </div>
        

      {/* Messlatte */}
      <div className="flex justify-between mt-2 text-sm">
        <span>0</span>
        <span>100</span>
        <span>200</span>
        <span>300</span>
        <span>400</span>
        <span>500</span>
      </div>
    </div>
    </div>
      
  );
};

export default SpeedDisplay;