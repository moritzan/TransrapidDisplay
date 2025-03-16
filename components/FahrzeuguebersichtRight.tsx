// components/FahrzeuguebersichtRight.tsx
'use client'
import React, { useState } from 'react';
import Image from 'next/image';

// Hilfs-Typen (angepasst)
type HeadlightStatus = 'on' | 'off' | 'unknown';
type RearLightStatus = 'on' | 'off' | 'unknown';
type WindowHeatingStatus = 'on' | 'off' | 'unknown';
type PantographStatus = 'up' | 'down' | 'unknown';
type KlimaStatus = 'on' | 'off' | 'unknown';
type HeatingStatus = 'on' | 'off' | 'unknown';
type TemperatureValue = string | 'unknown';


interface RightPillProps { }

const FahrzeuguebersichtRight: React.FC<RightPillProps> = () => {

    // States (E1, M1, E2) - Vereinfacht, da jetzt im Grid
    const [e1Headlight, setE1Headlight] = useState<HeadlightStatus>('on');
    const [e1RearLight, setE1RearLight] = useState<RearLightStatus>('off');
    const [e1WindowHeating, setE1WindowHeating] = useState<WindowHeatingStatus>('on');
    const [e1Pantograph, setE1Pantograph] = useState<PantographStatus>('up');

  
    const [m1Pantograph, setM1Pantograph] = useState<PantographStatus>('up');

    const [e2Pantograph, setE2Pantograph] = useState<PantographStatus>('up');

    // States (Temperatur)
    const [e1Temperature, setE1Temperature] = useState<TemperatureValue>('12.1°');
    const [m1Temperature, setM1Temperature] = useState<TemperatureValue>('12.2°');
    const [e2Temperature, setE2Temperature] = useState<TemperatureValue>('12.3°');

    const [e1Klima, setE1Klima] = useState<KlimaStatus>('on');
    const [m1Klima, setM1Klima] = useState<KlimaStatus>('on');
    const [e2Klima, setE2Klima] = useState<KlimaStatus>('on');

    const [e1Heating, setE1Heating] = useState<HeatingStatus>('off');
    const [m1Heating, setM1Heating] = useState<KlimaStatus>('off');
    const [e2Heating, setE2Heating] = useState<KlimaStatus>('off');

    // Hilfsfunktion (zyklisches Wechseln)
    const cycleStatus = <T,>(currentStatus: T, states: T[]): T => {
        const currentIndex = states.indexOf(currentStatus);
        const nextIndex = (currentIndex + 1) % states.length;
        return states[nextIndex];
    };

    // Handler (Icon-Klicks) - Deutlich vereinfacht
    const handleKlimaClick = (section: 'e1' | 'm1' | 'e2') => {
        const states: KlimaStatus[] = ['on', 'off', 'unknown'];
        switch (section) {
            case 'e1': setE1Klima(prev => cycleStatus(prev, states)); break;
            case 'm1': setM1Klima(prev => cycleStatus(prev, states)); break;
            case 'e2': setE2Klima(prev => cycleStatus(prev, states)); break;
        }
    };

    // Handler (Icon-Klicks) - Deutlich vereinfacht
    const handleHeatingClick = (section: 'e1' | 'm1' | 'e2') => {
        const states: KlimaStatus[] = ['on', 'off', 'unknown'];
        switch (section) {
            case 'e1': setE1Heating(prev => cycleStatus(prev, states)); break;
            case 'm1': setM1Heating(prev => cycleStatus(prev, states)); break;
            case 'e2': setE2Heating(prev => cycleStatus(prev, states)); break;

        }
    };

    // Handler (Icon-Klicks) - Deutlich vereinfacht
    const handleHeadlightClick = (section: 'e1' | 'm1' | 'e2') => {
        const states: HeadlightStatus[] = ['on', 'off', 'unknown'];
        switch (section) {
            case 'e1': setE1Headlight(prev => cycleStatus(prev, states)); break;
        }
    };

    const handleRearLightClick = (section: 'e1' | 'm1' | 'e2') => {
        const states: RearLightStatus[] = ['on', 'off', 'unknown'];
        switch (section) {
            case 'e1': setE1RearLight(prev => cycleStatus(prev, states)); break;
        }
    };

    const handleWindowHeatingClick = (section: 'e1' | 'm1' | 'e2') => {
        const states: WindowHeatingStatus[] = ['on', 'off', 'unknown'];
        switch (section) {
            case 'e1': setE1WindowHeating(prev => cycleStatus(prev, states)); break;

        }
    };

    const handlePantographClick = (section: 'e1' | 'm1' | 'e2') => {
        const states: PantographStatus[] = ['up', 'down', 'unknown'];
        switch (section) {
            case 'e1': setE1Pantograph(prev => cycleStatus(prev, states)); break;
            case 'm1': setM1Pantograph(prev => cycleStatus(prev, states)); break;
            case 'e2': setE2Pantograph(prev => cycleStatus(prev, states)); break;
        }
    };


    // Icon-Namen (Objekt)
    const iconNames = {
        headlightOn: 'headlight_on',
        headlightOff: 'headlight_off',
        headlightUnknown: 'headlight_unknown',
        rearLightOn: 'rear_light_on',
        rearLightOff: 'rear_light_off',
        rearLightUnknown: 'rear_light_unknown',
        windowHeatingOn: 'window_heating_on',
        windowHeatingOff: 'window_heating_off',
        windowHeatingUnknown: 'window_heating_unknown',
        pantographUp: 'pantograph_up',
        pantographDown: 'pantograph_down',
        pantographUnknown: 'pantograph_unknown',
        arrowUp: 'arrow_up',
        arrowDown: 'arrow_down',
        arrowUpSmall: 'arrow_up_small',
        arrowDownSmall: 'arrow_down_small',
        klimaOn: 'klima_on',
        klimaOff: 'klima_off',
        klimaUnknown: 'klima_unknown',
        heatingOn: 'heating_on',
        heatingOff: 'heating_off',
        heatingUnknown: 'heating_unknown'
    };

    // Icon-Auswahl (Funktionen)
    const getHeadlightIcon = (status: HeadlightStatus) => iconNames[`headlight${status.charAt(0).toUpperCase() + status.slice(1)}` as keyof typeof iconNames] || iconNames.headlightUnknown;
    const getRearLightIcon = (status: RearLightStatus) => iconNames[`rearLight${status.charAt(0).toUpperCase() + status.slice(1)}` as keyof typeof iconNames] || iconNames.rearLightUnknown;
    const getWindowHeatingIcon = (status: WindowHeatingStatus) => iconNames[`windowHeating${status.charAt(0).toUpperCase() + status.slice(1)}` as keyof typeof iconNames] || iconNames.windowHeatingUnknown;
    const getPantographIcon = (status: PantographStatus) => iconNames[`pantograph${status.charAt(0).toUpperCase() + status.slice(1)}` as keyof typeof iconNames] || iconNames.pantographUnknown;
    const getKlimaIcon = (status: KlimaStatus) => iconNames[`klima${status.charAt(0).toUpperCase() + status.slice(1)}` as keyof typeof iconNames] || iconNames.klimaUnknown;
    const getHeatingIcon = (status: HeatingStatus) => iconNames[`heating${status.charAt(0).toUpperCase() + status.slice(1)}` as keyof typeof iconNames] || iconNames.heatingUnknown;

    // Icon-Größe
    const iconSize = 'w-6 h-6';
    const tempIconSize = 'w-4 h-4';

    return (
        <div className="flex flex-col items-center w-32">

            {/* Oberer Halbkreis */}
            <div
                className="w-full h-16 bg-[#d0d0d5] rounded-t-full flex items-center justify-center border  border-black"
            >
                <div className='grid grid-cols-3 gap-1 items-center px-2 py-1 '>
                    {/* Spalte 1 */}
                    <div className="flex flex-col items-center">
                        <div className={`cursor-pointer ${iconSize}`} onClick={() => handleHeadlightClick('e1')}>
                            <Image src={`/${getHeadlightIcon(e1Headlight)}.png`} alt="Scheinwerfer" width={20} height={20} />
                        </div>
                        <div className={`cursor-pointer ${iconSize}`} onClick={() => handleRearLightClick('e1')}>
                            <Image src={`/${getRearLightIcon(e1RearLight)}.png`} alt="Schlusslicht" width={20} height={20} />
                        </div>
                    </div>
                    {/* Spalte 2 */}
                    <div className="flex items-center justify-center">
                        <div className={`cursor-pointer ${iconSize}`} onClick={() => handleWindowHeatingClick('e1')}>
                            <Image src={`/${getWindowHeatingIcon(e1WindowHeating)}.png`} alt="Scheibenheizung" width={20} height={20} />
                        </div>
                    </div>
                    {/* Spalte 3 */}
                    <div className="flex flex-col items-center">
                        <div className={`cursor-pointer ${iconSize}`} onClick={() => handleHeadlightClick('e1')}>
                            <Image src={`/${getHeadlightIcon(e1Headlight)}.png`} alt="Scheinwerfer" width={20} height={20} />
                        </div>
                        <div className={`cursor-pointer ${iconSize}`} onClick={() => handleRearLightClick('e1')}>
                            <Image src={`/${getRearLightIcon(e1RearLight)}.png`} alt="Schlusslicht" width={20} height={20} />
                        </div>
                    </div>
                </div>
            </div>

            {/* E1-Sektion */}
            <div className='grid grid-cols-3 gap-1 items-center px-2 py-1 border border-black w-full'>
                    {/* Spalte 1 */}
                    <div className="flex flex-col items-center justify-center">
                        <div className={`cursor-pointer ${iconSize}`} onClick={() => handlePantographClick('e1')}>
                            <Image src={`/${getPantographIcon(e1Pantograph)}.png`} alt="Pantograph" width={20} height={20} />
                        </div>
                        <div className={`cursor-pointer ${iconSize}`} onClick={() => handlePantographClick('e1')}>
                            <Image src={`/${getPantographIcon(e1Pantograph)}.png`} alt="Pantograph" width={20} height={20} />
                        </div>
                    </div>
                    {/* Spalte 2 */}
                    <div className="grid grid-cols-2 grid-rows-2 gap-0">
                        <div className="col-span-2 text-center">{e1Temperature}</div>
                        <div className={`cursor-pointer row-start-2 text-center${iconSize}`} onClick={() => handleKlimaClick('e1')}>
                            <Image src={`/${getKlimaIcon(e1Klima)}.png`} alt="Klima" width={20} height={20} />
                        </div>
                        <div className={`cursor-pointer row-start-2 text-center${iconSize}`} onClick={() => handleHeatingClick('e1')}>
                            <Image src={`/${getHeatingIcon(e1Heating)}.png`} alt="Heating" width={20} height={20} />
                        </div>
                    </div>
                    {/* Spalte 3 */}
                    <div className="flex flex-col items-center">
                        <div className={`cursor-pointer ${iconSize}`} onClick={() => handlePantographClick('e1')}>
                            <Image src={`/${getPantographIcon(e1Pantograph)}.png`} alt="Pantograph" width={20} height={20} />
                        </div>
                        <div className={`cursor-pointer ${iconSize}`} onClick={() => handlePantographClick('e1')}>
                            <Image src={`/${getPantographIcon(e1Pantograph)}.png`} alt="Pantograph" width={20} height={20} />
                        </div>
                </div>
            </div>

            {/* M1-Sektion */}
            <div className='grid grid-cols-3 gap-1 items-center px-2 py-1 border border-black w-full'>
                    {/* Spalte 1 */}
                    <div className="flex flex-col items-center justify-center">
                        <div className={`cursor-pointer ${iconSize}`} onClick={() => handlePantographClick('m1')}>
                            <Image src={`/${getPantographIcon(m1Pantograph)}.png`} alt="Pantograph" width={20} height={20} />
                        </div>
                        <div className={`cursor-pointer ${iconSize}`} onClick={() => handlePantographClick('m1')}>
                            <Image src={`/${getPantographIcon(m1Pantograph)}.png`} alt="Pantograph" width={20} height={20} />
                        </div>
                    </div>
                    {/* Spalte 2 */}
                    <div className="grid grid-cols-2 grid-rows-2 gap-0">
                        <div className="col-span-2 text-center">{m1Temperature}</div>
                        <div className={`cursor-pointer row-start-2 text-center${iconSize}`} onClick={() => handleKlimaClick('m1')}>
                            <Image src={`/${getKlimaIcon(m1Klima)}.png`} alt="Klima" width={20} height={20} />
                        </div>
                        <div className={`cursor-pointer row-start-2 text-center${iconSize}`} onClick={() => handleHeatingClick('m1')}>
                            <Image src={`/${getHeatingIcon(m1Heating)}.png`} alt="Heating" width={20} height={20} />
                        </div>
                    </div>
                    {/* Spalte 3 */}
                    <div className="flex flex-col items-center">
                        <div className={`cursor-pointer ${iconSize}`} onClick={() => handlePantographClick('m1')}>
                            <Image src={`/${getPantographIcon(m1Pantograph)}.png`} alt="Pantograph" width={20} height={20} />
                        </div>
                        <div className={`cursor-pointer ${iconSize}`} onClick={() => handlePantographClick('m1')}>
                            <Image src={`/${getPantographIcon(m1Pantograph)}.png`} alt="Pantograph" width={20} height={20} />
                        </div>
                </div>
            </div>

            {/* E2-Sektion */}
            <div className='grid grid-cols-3 gap-1 items-center px-2 py-1 border border-black w-full'>
                    {/* Spalte 1 */}
                    <div className="flex flex-col items-center justify-center">
                        <div className={`cursor-pointer ${iconSize}`} onClick={() => handlePantographClick('e2')}>
                            <Image src={`/${getPantographIcon(e2Pantograph)}.png`} alt="Pantograph" width={20} height={20} />
                        </div>
                        <div className={`cursor-pointer ${iconSize}`} onClick={() => handlePantographClick('e2')}>
                            <Image src={`/${getPantographIcon(e2Pantograph)}.png`} alt="Pantograph" width={20} height={20} />
                        </div>
                    </div>
                    {/* Spalte 2 */}
                    <div className="grid grid-cols-2 grid-rows-2 gap-0">
                        <div className="col-span-2 text-center">{e2Temperature}</div>
                        <div className={`cursor-pointer row-start-2 text-center${iconSize}`} onClick={() => handleKlimaClick('e2')}>
                            <Image src={`/${getKlimaIcon(e2Klima)}.png`} alt="Klima" width={20} height={20} />
                        </div>
                        <div className={`cursor-pointer row-start-2 text-center${iconSize}`} onClick={() => handleHeatingClick('e2')}>
                            <Image src={`/${getHeatingIcon(e2Heating)}.png`} alt="Heating" width={20} height={20} />
                        </div>
                    </div>
                    {/* Spalte 3 */}
                    <div className="flex flex-col items-center">
                        <div className={`cursor-pointer ${iconSize}`} onClick={() => handlePantographClick('e2')}>
                            <Image src={`/${getPantographIcon(e2Pantograph)}.png`} alt="Pantograph" width={20} height={20} />
                        </div>
                        <div className={`cursor-pointer ${iconSize}`} onClick={() => handlePantographClick('e2')}>
                            <Image src={`/${getPantographIcon(e2Pantograph)}.png`} alt="Pantograph" width={20} height={20} />
                        </div>
                </div>
            </div>

            {/* Unterer Halbkreis */}
            <div className="w-full h-16 bg-[#d0d0d5] rounded-b-full border border-black"></div>
        </div>
    );
};

export default FahrzeuguebersichtRight;