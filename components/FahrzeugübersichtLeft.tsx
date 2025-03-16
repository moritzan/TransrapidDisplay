// components/FahrzeuguebersichtLeft.tsx
'use client'
import React, { useState } from 'react';
import Image from 'next/image';

// Hilfs-Typen für die Zustände
type DoorStatus = 'open_released' | 'closed_released' | 'locked' | 'unknown';
type FireAlarmStatus = 'alarm' | 'noAlarm' | 'unknown';
type PassengerSignalStatus = 'active' | 'inactive' | 'unknown';
type InteriorLightStatus = 'on' | 'off' | 'unknown';
type ArrowDirection = 'up' | 'down';

interface LeftPillProps { }

const FahrzeuguebersichtLeft: React.FC<LeftPillProps> = () => {
    // State für den Richtungspfeil
    const [arrowDirection, setArrowDirection] = useState<ArrowDirection>('up');

    // State für die Türzustände (E1, M1, E2)
    const [e1DoorStatus, setE1DoorStatus] = useState<DoorStatus[]>(['locked', 'locked']);
    const [m1DoorStatus, setM1DoorStatus] = useState<DoorStatus[]>(['locked', 'locked']);
    const [e2DoorStatus, setE2DoorStatus] = useState<DoorStatus[]>(['locked', 'locked']);

    // State für Brandmelder, Fahrgastnotsignal und Innenbeleuchtung (E1, M1, E2)
    const [e1Statuses, setE1Statuses] = useState<[FireAlarmStatus, PassengerSignalStatus, InteriorLightStatus]>(['noAlarm', 'inactive', 'on']);
    const [m1Statuses, setM1Statuses] = useState<[FireAlarmStatus, PassengerSignalStatus, InteriorLightStatus]>(['noAlarm', 'inactive', 'on']);
    const [e2Statuses, setE2Statuses] = useState<[FireAlarmStatus, PassengerSignalStatus, InteriorLightStatus]>(['noAlarm', 'inactive', 'on']);

    // Hilfsfunktion zum zyklischen Wechseln von Zuständen (korrigiert und vereinfacht)
    const cycleStatus = <T,>(currentStatus: T, states: T[]): T => {
        const currentIndex = states.indexOf(currentStatus);
        const nextIndex = (currentIndex + 1) % states.length;
        return states[nextIndex];
    };


    // Handler-Funktionen für die Interaktionen
    const toggleArrowDirection = () => {
        setArrowDirection(prev => prev === 'up' ? 'down' : 'up');
    };

    const handleDoorStatusClick = (section: 'e1' | 'm1' | 'e2', index: 0 | 1) => {
        const doorStates: DoorStatus[] = ['open_released', 'closed_released', 'locked', 'unknown'];
        switch (section) {
            case 'e1':
                setE1DoorStatus(prevStatus => prevStatus.map((status, i) => (i === index ? cycleStatus(status, doorStates) : status)));
                break;
            case 'm1':
                setM1DoorStatus(prevStatus => prevStatus.map((status, i) => (i === index ? cycleStatus(status, doorStates) : status)));
                break;
            case 'e2':
                setE2DoorStatus(prevStatus => prevStatus.map((status, i) => (i === index ? cycleStatus(status, doorStates) : status)));
                break;
        }
    };

    const handleStatusClick = (section: 'e1' | 'm1' | 'e2', index: 0 | 1 | 2) => {
        switch (section) {
            case 'e1':
                setE1Statuses(prev => prev.map((status, i) => {
                    if (i === index) {
                        const states = i === 0 ? ['alarm', 'noAlarm', 'unknown'] as FireAlarmStatus[]
                                     : i === 1 ? ['active', 'inactive', 'unknown'] as PassengerSignalStatus[]
                                     : ['on', 'off', 'unknown'] as InteriorLightStatus[];
                        return cycleStatus(status as any, states); // Type Assertion hier
                    }
                    return status;
                }) as [FireAlarmStatus, PassengerSignalStatus, InteriorLightStatus]);
                break;

            case 'm1':
                setM1Statuses(prev => prev.map((status, i) => {
                    if (i === index) {
                        const states = i === 0 ? ['alarm', 'noAlarm', 'unknown'] as FireAlarmStatus[]
                                     : i === 1 ? ['active', 'inactive', 'unknown'] as PassengerSignalStatus[]
                                     : ['on', 'off', 'unknown'] as InteriorLightStatus[];
                        return cycleStatus(status as any, states); // Type Assertion hier
                    }
                    return status;
                }) as [FireAlarmStatus, PassengerSignalStatus, InteriorLightStatus]);
                break;

            case 'e2':
                setE2Statuses(prev => prev.map((status, i) => {
                    if (i === index) {
                        const states = i === 0 ? ['alarm', 'noAlarm', 'unknown'] as FireAlarmStatus[]
                                     : i === 1 ? ['active', 'inactive', 'unknown'] as PassengerSignalStatus[]
                                     : ['on', 'off', 'unknown'] as InteriorLightStatus[];
                        return cycleStatus(status as any, states); // Type Assertion hier
                    }
                    return status;
                }) as [FireAlarmStatus, PassengerSignalStatus, InteriorLightStatus]);
                break;
        }
    };


    // Namen der Bilddateien (ohne .png) in Variablen speichern.
    const iconNames = {
        doorUnknown: 'door_unknown',
        doorLocked: 'door_locked',
        doorOpenReleased: 'door_open_released',
        doorClosedReleased: 'door_closed_released',
        fireAlarm: 'fire_alarm',
        noFireAlarm: 'no_fire_alarm',
        fireAlarmUnknown: 'fire_alarm_unknown',
        passengerSignalActive: 'passenger_signal_active',
        passengerSignalInactive: 'passenger_signal_inactive',
        pasengerSignalUnknown: 'passenger_signal_unknown', // Tippfehler korrigiert
        lightOn: 'light_on',
        lightOff: 'light_off',
        lightUnknown: 'light_unknown',
        question: 'question',
        arrowUp: 'arrow_up',
        arrowDown: 'arrow_down'
    };

    // Deutlich verbesserte Icon-Auswahlfunktionen
    const getDoorIcon = (status: DoorStatus) => {
        switch (status) {
            case 'open_released': return iconNames.doorOpenReleased;
            case 'closed_released': return iconNames.doorClosedReleased;
            case 'locked': return iconNames.doorLocked;
            case 'unknown': return iconNames.doorUnknown;
        }
    };

    const getFireAlarmIcon = (status: FireAlarmStatus) => {
        switch (status) {
            case 'alarm': return iconNames.fireAlarm;
            case 'noAlarm': return iconNames.noFireAlarm;
            case 'unknown': return iconNames.fireAlarmUnknown; 
        }
    };

    const getPassengerSignalIcon = (status: PassengerSignalStatus) => {
        switch (status) {
            case 'active': return iconNames.passengerSignalActive;
            case 'inactive': return iconNames.passengerSignalInactive;
            case 'unknown': return iconNames.pasengerSignalUnknown; // Tippfehler korrigiert
        }
    };

    const getInteriorLightIcon = (status: InteriorLightStatus) => {
        switch (status) {
            case 'on': return iconNames.lightOn;
            case 'off': return iconNames.lightOff;
            case 'unknown': return iconNames.lightUnknown;
        }
    };


    const getIconSize = (isDoorIcon: boolean) => {
        return isDoorIcon ? 'w-6 h-6' : 'w-5 h-5';
    }

    return (
        <div className="flex flex-col items-center w-32 ">
            {/* Oberer Halbkreis mit Pfeil */}
            <div
                className="w-full h-16 bg-[#d0d0d5] rounded-t-full flex items-center justify-center cursor-pointer border  border-black"
                onClick={toggleArrowDirection}
            >
                <Image
                    src={`/${arrowDirection === 'up' ? iconNames.arrowUp : iconNames.arrowDown}.png`}
                    alt={arrowDirection === 'up' ? 'Pfeil nach oben' : 'Pfeil nach unten'}
                    width={32}
                    height={32}
                    className="transition-transform "
                />
            </div>

            {/* E1-Sektion */}
            <div className="w-full bg-[#d0d0d5] px-3 py-1 border border-black">
                <div className='grid grid-cols-5 gap-1 items-center'>
                    <div
                        className={`flex items-center justify-center cursor-pointer ${getIconSize(true)} `} //feste breite
                        onClick={() => handleDoorStatusClick('e1', 0)}
                    >
                        <Image src={`/${getDoorIcon(e1DoorStatus[0])}.png`} alt="Tür-Icon" width={24} height={24} />
                    </div>
                    <span className="text-black bg-teal-400 font-bold text-lg col-span-3 ml-2 mr-1 flex justify-center">E1</span> {/* feste breite */}
                    <div
                        className={`flex items-center justify-center cursor-pointer ${getIconSize(true)} `} //feste breite
                        onClick={() => handleDoorStatusClick('e1', 1)}
                    >
                        <Image src={`/${getDoorIcon(e1DoorStatus[1])}.png`} alt="Tür-Icon" width={24} height={24} />
                    </div>
                </div>
            </div>

            {/* E1 - Icon-Reihe */}
            <div className="w-full bg-[#d0d0d5] px-3 py-1 border border-black">
                <div className='grid grid-cols-5 gap-1 items-center'>
                    <div className={`rounded flex items-center justify-center cursor-pointer ${getIconSize(true)}`} onClick={() => handleDoorStatusClick('e1', 0)}>
                        <Image src={`/${getDoorIcon(e1DoorStatus[0])}.png`} alt="Tür-Icon" width={24} height={24} />
                    </div>
                    <div className={`flex items-center justify-center cursor-pointer ${getIconSize(false)}`} onClick={() => handleStatusClick('e1', 0)}>
                        <Image src={`/${getFireAlarmIcon(e1Statuses[0])}.png`} alt="Feueralarm-Icon" width={20} height={20} />
                    </div>
                    <div className={`flex items-center justify-center cursor-pointer ${getIconSize(false)}`} onClick={() => handleStatusClick('e1', 1)}>
                        <Image src={`/${getPassengerSignalIcon(e1Statuses[1])}.png`} alt="Notsignal-Icon" width={20} height={20} />
                    </div>
                    <div className={`flex items-center justify-center cursor-pointer ${getIconSize(false)}`} onClick={() => handleStatusClick('e1', 2)}>
                        <Image src={`/${getInteriorLightIcon(e1Statuses[2])}.png`} alt="Licht-Icon" width={20} height={20} />
                    </div>
                    <div className={`rounded flex items-center justify-center cursor-pointer ${getIconSize(true)}`} onClick={() => handleDoorStatusClick('e1', 1)}>
                        <Image src={`/${getDoorIcon(e1DoorStatus[1])}.png`} alt="Tür-Icon" width={24} height={24} />
                    </div>
                </div>
            </div>

            {/* M1-Sektion */}
            <div className="w-full bg-[#d0d0d5] px-3 py-1 border border-black">
                <div className='grid grid-cols-5 gap-1 items-center'>
                    <div
                        className={`flex items-center justify-center cursor-pointer ${getIconSize(true)} `} //feste breite
                        onClick={() => handleDoorStatusClick('m1', 0)}
                    >
                        <Image src={`/${getDoorIcon(m1DoorStatus[0])}.png`} alt="Tür-Icon" width={24} height={24} />
                    </div>
                    <span className="text-black bg-teal-400 font-bold text-lg col-span-3 ml-2 mr-1 flex justify-center">M1</span> {/* feste breite */}
                    <div
                        className={`flex items-center justify-center cursor-pointer ${getIconSize(true)} `} //feste breite
                        onClick={() => handleDoorStatusClick('m1', 1)}
                    >
                        <Image src={`/${getDoorIcon(m1DoorStatus[1])}.png`} alt="Tür-Icon" width={24} height={24} />
                    </div>
                </div>
            </div>

            {/* M1 - Icon-Reihe */}
            <div className="w-full bg-[#d0d0d5] px-3 py-1 border border-black">
                <div className='grid grid-cols-5 gap-1 items-center'>
                    <div className={`rounded flex items-center justify-center cursor-pointer ${getIconSize(true)}`} onClick={() => handleDoorStatusClick('m1', 0)}>
                        <Image src={`/${getDoorIcon(m1DoorStatus[0])}.png`} alt="Tür-Icon" width={24} height={24} />
                    </div>
                    <div className={`flex items-center justify-center cursor-pointer ${getIconSize(false)}`} onClick={() => handleStatusClick('m1', 0)}>
                        <Image src={`/${getFireAlarmIcon(m1Statuses[0])}.png`} alt="Feueralarm-Icon" width={20} height={20} />
                    </div>
                    <div className={`flex items-center justify-center cursor-pointer ${getIconSize(false)}`} onClick={() => handleStatusClick('m1', 1)}>
                        <Image src={`/${getPassengerSignalIcon(m1Statuses[1])}.png`} alt="Notsignal-Icon" width={20} height={20} />
                    </div>
                    <div className={`flex items-center justify-center cursor-pointer ${getIconSize(false)}`} onClick={() => handleStatusClick('m1', 2)}>
                        <Image src={`/${getInteriorLightIcon(m1Statuses[2])}.png`} alt="Licht-Icon" width={20} height={20} />
                    </div>
                    <div className={`rounded flex items-center justify-center cursor-pointer ${getIconSize(true)}`} onClick={() => handleDoorStatusClick('m1', 1)}>
                        <Image src={`/${getDoorIcon(m1DoorStatus[1])}.png`} alt="Tür-Icon" width={24} height={24} />
                    </div>
                </div>
            </div>

            {/* E2-Sektion */}

             <div className="w-full bg-[#d0d0d5] px-3 py-1 border border-black">
                <div className='grid grid-cols-5 gap-1 items-center'>
                    <div
                        className={`flex items-center justify-center cursor-pointer ${getIconSize(true)} `} //feste breite
                        onClick={() => handleDoorStatusClick('e2', 0)}
                    >
                        <Image src={`/${getDoorIcon(e2DoorStatus[0])}.png`} alt="Tür-Icon" width={24} height={24} />
                    </div>
                    <span className="text-black bg-teal-400 font-bold text-lg col-span-3 ml-2 mr-1 flex justify-center">M1</span> {/* feste breite */}
                    <div
                        className={`flex items-center justify-center cursor-pointer ${getIconSize(true)} `} //feste breite
                        onClick={() => handleDoorStatusClick('e2', 1)}
                    >
                        <Image src={`/${getDoorIcon(e2DoorStatus[1])}.png`} alt="Tür-Icon" width={24} height={24} />
                    </div>
                </div>
            </div>

            {/* E2 - Icon-Reihe */}
            <div className="w-full bg-[#d0d0d5] px-3 py-1  border border-black">
                <div className='grid grid-cols-5 gap-1 items-center'>
                    <div className={`rounded flex items-center justify-center cursor-pointer ${getIconSize(true)}`} onClick={() => handleDoorStatusClick('e2', 0)}>
                        <Image src={`/${getDoorIcon(e2DoorStatus[0])}.png`} alt="Tür-Icon" width={24} height={24} />
                    </div>
                    <div className={` flex items-center justify-center cursor-pointer ${getIconSize(false)}`} onClick={() => handleStatusClick('e2', 0)}>
                        <Image src={`/${getFireAlarmIcon(e2Statuses[0])}.png`} alt="Feueralarm-Icon" width={20} height={20} />
                    </div>
                    <div className={`flex items-center justify-center cursor-pointer ${getIconSize(false)}`} onClick={() => handleStatusClick('e2', 1)}>
                        <Image src={`/${getPassengerSignalIcon(e2Statuses[1])}.png`} alt="Notsignal-Icon" width={20} height={20} />
                    </div>
                    <div className={`flex items-center justify-center cursor-pointer ${getIconSize(false)}`} onClick={() => handleStatusClick('e2', 2)}>
                        <Image src={`/${getInteriorLightIcon(e2Statuses[2])}.png`} alt="Licht-Icon" width={20} height={20} />
                    </div>
                    <div className={`rounded flex items-center justify-center cursor-pointer ${getIconSize(true)}`} onClick={() => handleDoorStatusClick('e2', 1)}>
                        <Image src={`/${getDoorIcon(e2DoorStatus[1])}.png`} alt="Tür-Icon" width={24} height={24} />
                    </div>
                </div>
            </div>

            {/* Unterer Halbkreis */}
            <div className="w-full h-16 bg-[#d0d0d5] rounded-b-full border border-black"></div>
        </div>
    );
};

export default FahrzeuguebersichtLeft;