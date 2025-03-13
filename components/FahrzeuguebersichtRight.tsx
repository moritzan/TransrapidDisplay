// components/FahrzeuguebersichtRight.tsx
'use client'
import React, { useState } from 'react';
import Image from 'next/image';

// Hilfs-Typen für die Zustände (angepasst an rechte Pille)
type HeadlightStatus = 'on' | 'off' | 'unknown'; // Scheinwerfer
type RearLightStatus = 'on' | 'off' | 'unknown'; // Schlussleuchten
type WindowHeatingStatus = 'on' | 'off' | 'unknown';  // Scheibenheizung
type PantographStatus = 'up' | 'down' | 'unknown'; // Stromabnehmer
type AirConditioningStatus = 'on' | 'off' | 'unknown'; // Klimaanlage
type TemperatureValue = number | 'unknown'; // Temperatur (numerisch oder 'unknown')
type ArrowDirection = 'up' | 'down'; // Fahrtrichtung

interface RightPillProps {
    // Keine Props benötigt, da wir interne States verwenden
}

const FahrzeuguebersichtRight: React.FC<RightPillProps> = () => {

    // State für den Richtungspfeil
    const [arrowDirection, setArrowDirection] = useState<ArrowDirection>('up');

    // States für E1, M1, E2 (Rechte Pille)
    const [e1Statuses, setE1Statuses] = useState<[HeadlightStatus, RearLightStatus, WindowHeatingStatus, PantographStatus, AirConditioningStatus]>(['off', 'off', 'off', 'down', 'off']);
    const [m1Statuses, setM1Statuses] = useState<[HeadlightStatus, RearLightStatus, WindowHeatingStatus, PantographStatus, AirConditioningStatus]>(['off', 'off', 'off', 'down', 'off']);
    const [e2Statuses, setE2Statuses] = useState<[HeadlightStatus, RearLightStatus, WindowHeatingStatus, PantographStatus, AirConditioningStatus]>(['off', 'off', 'off', 'down', 'off']);

    // State für die Temperaturanzeige
    const [e1Temperature, setE1Temperature] = useState<TemperatureValue>(22.0);
    const [m1Temperature, setM1Temperature] = useState<TemperatureValue>(22.0);
    const [e2Temperature, setE2Temperature] = useState<TemperatureValue>(22.0);


    // Hilfsfunktion zum zyklischen Wechseln von Zuständen (wiederverwendet)
    const cycleStatus = <T,>(currentStatus: T, states: T[]): T => {
        const currentIndex = states.indexOf(currentStatus);
        const nextIndex = (currentIndex + 1) % states.length;
        return states[nextIndex];
    };

    // Handler-Funktionen
     const toggleArrowDirection = () => {
        setArrowDirection(prev => prev === 'up' ? 'down' : 'up');
    };

    const handleStatusClick = (section: 'e1' | 'm1' | 'e2', index: 0 | 1 | 2 | 3 | 4) => {
        switch (section) {
            case 'e1':
                setE1Statuses(prev => prev.map((status, i) => {
                    if (i === index) {
                        const states = i === 0 ? ['on', 'off', 'unknown'] as HeadlightStatus[]
                                     : i === 1 ? ['on', 'off', 'unknown'] as RearLightStatus[]
                                     : i === 2 ? ['on', 'off', 'unknown'] as WindowHeatingStatus[]
                                     : i === 3 ? ['up', 'down', 'unknown'] as PantographStatus[]
                                     : ['on', 'off', 'unknown'] as AirConditioningStatus[];
                        return cycleStatus(status as any, states);
                    }
                    return status;
                }) as [HeadlightStatus, RearLightStatus, WindowHeatingStatus, PantographStatus, AirConditioningStatus]);
                break;
            case 'm1':
                setM1Statuses(prev => prev.map((status, i) => {
                    if (i === index) {
                        const states = i === 0 ? ['on', 'off', 'unknown'] as HeadlightStatus[]
                                     : i === 1 ? ['on', 'off', 'unknown'] as RearLightStatus[]
                                     : i === 2 ? ['on', 'off', 'unknown'] as WindowHeatingStatus[]
                                     : i === 3 ? ['up', 'down', 'unknown'] as PantographStatus[]
                                     : ['on', 'off', 'unknown'] as AirConditioningStatus[];
                        return cycleStatus(status as any, states);
                    }
                    return status;
                }) as [HeadlightStatus, RearLightStatus, WindowHeatingStatus, PantographStatus, AirConditioningStatus]);
                break;
            case 'e2':
                setE2Statuses(prev => prev.map((status, i) => {
                    if (i === index) {
                        const states = i === 0 ? ['on', 'off', 'unknown'] as HeadlightStatus[]
                                     : i === 1 ? ['on', 'off', 'unknown'] as RearLightStatus[]
                                     : i === 2 ? ['on', 'off', 'unknown'] as WindowHeatingStatus[]
                                     : i === 3 ? ['up', 'down', 'unknown'] as PantographStatus[]
                                     : ['on', 'off', 'unknown'] as AirConditioningStatus[];
                        return cycleStatus(status as any, states);
                    }
                    return status;
                }) as [HeadlightStatus, RearLightStatus, WindowHeatingStatus, PantographStatus, AirConditioningStatus]);
                break;
        }
    };

    // Hilfsfunktionen zur Bestimmung des Icons
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
        airConditioningOn: 'air_conditioning_on',
        airConditioningOff: 'air_conditioning_off',
        airConditioningUnknown: 'air_conditioning_unknown'
    };

    const getHeadlightIcon = (status: HeadlightStatus) => {
        switch (status) {
            case 'on':      return iconNames.headlightOn;
            case 'off':     return iconNames.headlightOff;
            case 'unknown': return iconNames.headlightUnknown;
        }
    };
    const getRearLightIcon = (status: RearLightStatus) => {
        switch (status) {
            case 'on':      return iconNames.rearLightOn;
            case 'off':     return iconNames.rearLightOff;
            case 'unknown': return iconNames.rearLightUnknown;
        }
    };
    const getWindowHeatingIcon = (status: WindowHeatingStatus) => {
        switch (status) {
            case 'on':      return iconNames.windowHeatingOn;
            case 'off':     return iconNames.windowHeatingOff;
            case 'unknown': return iconNames.windowHeatingUnknown;
        }
    };
    const getPantographIcon = (status: PantographStatus) => {
        switch (status) {
            case 'up':      return iconNames.pantographUp;
            case 'down':    return iconNames.pantographDown;
            case 'unknown': return iconNames.pantographUnknown;
        }
    };
    const getAirConditioningIcon = (status: AirConditioningStatus) => {
        switch (status) {
            case 'on':      return iconNames.airConditioningOn;
            case 'off':     return iconNames.airConditioningOff;
            case 'unknown': return iconNames.airConditioningUnknown;
        }
    };



    const getIconSize = () => 'w-5 h-5'; // Einheitliche Größe für alle Icons


    return (
        <div className="flex flex-col items-center w-32">
            {/* Oberer Halbkreis (Pfeil) */}
            <div
                className="w-full h-16 bg-[#d0d0d5] rounded-t-full flex items-center justify-center cursor-pointer border border-black"
                onClick={toggleArrowDirection}
            >
            </div>

            {/* E1-Sektion */}
            <div className="w-full bg-[#d0d0d5] px-3 py-1 border border-black">
                <div className='grid grid-cols-5 gap-1 items-center'>
                 <div className={`flex items-center justify-center cursor-pointer ${getIconSize()}`} onClick={() => handleStatusClick('e1', 0)}>
                        <Image src={`/${getHeadlightIcon(e1Statuses[0])}.png`} alt="Scheinwerfer-Icon" width={20} height={20} />
                    </div>
                    <div className={`flex items-center justify-center cursor-pointer ${getIconSize()}`} onClick={() => handleStatusClick('e1', 1)}>
                        <Image src={`/${getRearLightIcon(e1Statuses[1])}.png`} alt="Schlussleuchten-Icon" width={20} height={20} />
                    </div>
                    <div className={`flex items-center justify-center cursor-pointer ${getIconSize()}`} onClick={() => handleStatusClick('e1', 2)}>
                        <Image src={`/${getWindowHeatingIcon(e1Statuses[2])}.png`} alt="Scheibenheizung-Icon" width={20} height={20} />
                    </div>
                    <div className={`flex items-center justify-center cursor-pointer ${getIconSize()}`} onClick={() => handleStatusClick('e1', 3)}>
                        <Image src={`/${getPantographIcon(e1Statuses[3])}.png`} alt="Stromabnehmer-Icon" width={20} height={20} />
                    </div>
                    <div className={`flex items-center justify-center cursor-pointer ${getIconSize()}`} onClick={() => handleStatusClick('e1', 4)}>
                        <Image src={`/${getAirConditioningIcon(e1Statuses[4])}.png`} alt="Klimaanlage-Icon" width={20} height={20} />
                    </div>
                </div>
                <div className="text-center text-black bg-teal-400 font-bold">
                    {e1Temperature !== 'unknown' ? `${e1Temperature}°C` : '?'}
                </div>
            </div>

            {/* M1-Sektion */}
            <div className="w-full bg-[#d0d0d5] px-3 py-1 border border-black">
                <div className='grid grid-cols-5 gap-1 items-center'>
                <div className={`flex items-center justify-center cursor-pointer ${getIconSize()}`} onClick={() => handleStatusClick('m1', 0)}>
                        <Image src={`/${getHeadlightIcon(m1Statuses[0])}.png`} alt="Scheinwerfer-Icon" width={20} height={20} />
                    </div>
                    <div className={`flex items-center justify-center cursor-pointer ${getIconSize()}`} onClick={() => handleStatusClick('m1', 1)}>
                        <Image src={`/${getRearLightIcon(m1Statuses[1])}.png`} alt="Schlussleuchten-Icon" width={20} height={20} />
                    </div>
                    <div className={`flex items-center justify-center cursor-pointer ${getIconSize()}`} onClick={() => handleStatusClick('m1', 2)}>
                        <Image src={`/${getWindowHeatingIcon(m1Statuses[2])}.png`} alt="Scheibenheizung-Icon" width={20} height={20} />
                    </div>
                    <div className={`flex items-center justify-center cursor-pointer ${getIconSize()}`} onClick={() => handleStatusClick('m1', 3)}>
                        <Image src={`/${getPantographIcon(m1Statuses[3])}.png`} alt="Stromabnehmer-Icon" width={20} height={20} />
                    </div>
                    <div className={`flex items-center justify-center cursor-pointer ${getIconSize()}`} onClick={() => handleStatusClick('m1', 4)}>
                        <Image src={`/${getAirConditioningIcon(m1Statuses[4])}.png`} alt="Klimaanlage-Icon" width={20} height={20} />
                    </div>
                </div>
                 <div className="text-center text-black bg-teal-400 font-bold">
                   {m1Temperature !== 'unknown' ? `${m1Temperature}°C` : '?'}
                </div>
            </div>

            {/* E2-Sektion */}
            <div className="w-full bg-[#d0d0d5] px-3 py-1 border border-black">
                <div className='grid grid-cols-5 gap-1 items-center'>
                <div className={`flex items-center justify-center cursor-pointer ${getIconSize()}`} onClick={() => handleStatusClick('e2', 0)}>
                        <Image src={`/${getHeadlightIcon(e2Statuses[0])}.png`} alt="Scheinwerfer-Icon" width={20} height={20} />
                    </div>
                    <div className={`flex items-center justify-center cursor-pointer ${getIconSize()}`} onClick={() => handleStatusClick('e2', 1)}>
                        <Image src={`/${getRearLightIcon(e2Statuses[1])}.png`} alt="Schlussleuchten-Icon" width={20} height={20} />
                    </div>
                    <div className={`flex items-center justify-center cursor-pointer ${getIconSize()}`} onClick={() => handleStatusClick('e2', 2)}>
                        <Image src={`/${getWindowHeatingIcon(e2Statuses[2])}.png`} alt="Scheibenheizung-Icon" width={20} height={20} />
                    </div>
                    <div className={`flex items-center justify-center cursor-pointer ${getIconSize()}`} onClick={() => handleStatusClick('e2', 3)}>
                        <Image src={`/${getPantographIcon(e2Statuses[3])}.png`} alt="Stromabnehmer-Icon" width={20} height={20} />
                    </div>
                    <div className={`flex items-center justify-center cursor-pointer ${getIconSize()}`} onClick={() => handleStatusClick('e2', 4)}>
                        <Image src={`/${getAirConditioningIcon(e2Statuses[4])}.png`} alt="Klimaanlage-Icon" width={20} height={20} />
                    </div>
                </div>
                 <div className="text-center text-black bg-teal-400 font-bold">
                    {e2Temperature !== 'unknown' ? `${e2Temperature}°C` : '?'}
                </div>
            </div>

            {/* Unterer Halbkreis */}
            <div className="w-full h-16 bg-[#d0d0d5] rounded-b-full border border-black"></div>
        </div>
    );
};

export default FahrzeuguebersichtRight;