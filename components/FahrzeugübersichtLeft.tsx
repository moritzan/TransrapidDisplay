// components/LeftPill.tsx
'use client'
import React, { useState } from 'react';

// Hilfs-Typen für die Zustände
type DoorStatus = 'open' | 'closed' | 'locked' | 'unknown';
type FireAlarmStatus = 'alarm' | 'noAlarm' | 'unknown';
type PassengerSignalStatus = 'active' | 'inactive' | 'unknown';
type InteriorLightStatus = 'on' | 'off' | 'unknown';
type ArrowDirection = 'up' | 'down';

interface LeftPillProps {
  // Hier könnten später noch initial Zustände als Props übergeben werden.
}

const FahrzeugübersichtLeft: React.FC<LeftPillProps> = () => {
  // State für den Richtungspfeil
  const [arrowDirection, setArrowDirection] = useState<ArrowDirection>('up');

  // State für die Türzustände (E1, M1, E2) - Array für jede Sektion
  const [e1DoorStatus, setE1DoorStatus] = useState<DoorStatus[]>(['closed', 'closed']);
  const [m1DoorStatus, setM1DoorStatus] = useState<DoorStatus[]>(['closed', 'closed']);
  const [e2DoorStatus, setE2DoorStatus] = useState<DoorStatus[]>(['closed', 'closed']);

  // State für Brandmelder, Fahrgastnotsignal und Innenbeleuchtung (E1, M1, E2)
  const [e1Statuses, setE1Statuses] = useState<[FireAlarmStatus, PassengerSignalStatus, InteriorLightStatus]>(['noAlarm', 'inactive', 'off']);
  const [m1Statuses, setM1Statuses] = useState<[FireAlarmStatus, PassengerSignalStatus, InteriorLightStatus]>(['noAlarm', 'inactive', 'off']);
  const [e2Statuses, setE2Statuses] = useState<[FireAlarmStatus, PassengerSignalStatus, InteriorLightStatus]>(['noAlarm', 'inactive', 'off']);

  // Hilfsfunktion zum zyklischen Wechseln von Zuständen (verbessert)
  const cycleStatus = <T,>(currentStatus: T, states: T[]): T => {
    const currentIndex = states.indexOf(currentStatus);
    const nextIndex = (currentIndex + 1) % states.length;
    return states[nextIndex];
  };

  // Handler-Funktionen für die Interaktionen
  const toggleArrowDirection = () => {
    setArrowDirection(arrowDirection === 'up' ? 'down' : 'up');
  };

  const handleDoorStatusClick = (section: 'e1' | 'm1' | 'e2', index: 0 | 1) => {
    const doorStates: DoorStatus[] = ['open', 'closed', 'locked', 'unknown'];
    switch (section) {
      case 'e1':
        setE1DoorStatus(prevStatus =>
          prevStatus.map((status, i) => (i === index ? cycleStatus(status, doorStates) : status))
        );
        break;
      case 'm1':
        setM1DoorStatus(prevStatus =>
          prevStatus.map((status, i) => (i === index ? cycleStatus(status, doorStates) : status))
        );
        break;
      case 'e2':
        setE2DoorStatus(prevStatus =>
          prevStatus.map((status, i) => (i === index ? cycleStatus(status, doorStates) : status))
        );
        break;
    }
  };



  const handleStatusClick = (section: 'e1' | 'm1' | 'e2', index: 0 | 1 | 2) => {
    switch (section) {
      case 'e1':
        const e1States: (FireAlarmStatus | PassengerSignalStatus | InteriorLightStatus)[] = [
          'alarm', 'noAlarm', 'unknown',  // FireAlarmStatus
          'active', 'inactive', 'unknown', // PassengerSignalStatus
          'on', 'off', 'unknown'          // InteriorLightStatus
        ];
        setE1Statuses(prev => prev.map((status, i) => i === index ? cycleStatus(status, e1States) : status) as [FireAlarmStatus, PassengerSignalStatus, InteriorLightStatus]);
        break;
      case 'm1':
        const m1States: (FireAlarmStatus | PassengerSignalStatus | InteriorLightStatus)[] = [
          'alarm', 'noAlarm', 'unknown',
          'active', 'inactive', 'unknown',
          'on', 'off', 'unknown'
        ];
        setM1Statuses(prev => prev.map((status, i) => i === index ? cycleStatus(status, m1States) : status) as [FireAlarmStatus, PassengerSignalStatus, InteriorLightStatus]);
        break;

      case 'e2':
        const e2States: (FireAlarmStatus | PassengerSignalStatus | InteriorLightStatus)[] = [
          'alarm', 'noAlarm', 'unknown',
          'active', 'inactive', 'unknown',
          'on', 'off', 'unknown'
        ];
        setE2Statuses(prev => prev.map((status, i) => i === index ? cycleStatus(status, e2States) : status) as [FireAlarmStatus, PassengerSignalStatus, InteriorLightStatus]);
        break;
    }
  };

  // Hilfsfunktionen zur Bestimmung des Icons und der Farbe
  const getDoorStatusColor = (status: DoorStatus): string => {
    switch (status) {
      case 'open': return 'bg-teal-400';
      case 'closed': return 'bg-teal-400';
      case 'locked': return 'bg-gray-500';
      case 'unknown': return 'bg-gray-300';
      default: return 'bg-gray-300'; // Sollte nie vorkommen
    }
  };

  const getDoorIcon = (status: DoorStatus) => {
    switch (status) {
      case 'open': return '🚪';
      case 'closed': return '🚪';
      case 'locked': return '🔒';
      case 'unknown': return '❓';
      default: return '❓'; // Sollte nie vorkommen
    }
  };

  const getFireAlarmIcon = (status: FireAlarmStatus) => {
    switch (status) {
      case 'alarm': return '🔥';
      case 'noAlarm': return '🧯';
      case 'unknown': return '❓';
      default: return '❓';
    }
  };

  const getPassengerSignalIcon = (status: PassengerSignalStatus) => {
    switch (status) {
      case 'active': return '🚨';
      case 'inactive': return '🔕';
      case 'unknown': return '❓';
      default: return '❓';
    }
  };

  const getInteriorLightIcon = (status: InteriorLightStatus) => {
    switch (status) {
      case 'on': return '💡';
      case 'off': return '⚫';
      case 'unknown': return '❓';
      default: return '❓';
    }
  };

  const getIconSize = (isDoorIcon: boolean) => {
    return isDoorIcon ? 'w-6 h-6' : 'w-5 h-5'; // Größere Icons für Türen
  };



  return (
    <div className="flex flex-col items-center w-32">
      {/* Oberer Halbkreis mit Pfeil */}
      <div
        className="w-full h-16 bg-gray-300 rounded-t-full flex items-center justify-center cursor-pointer"
        onClick={toggleArrowDirection}
      >
        <span className={`text-3xl transition-transform ${arrowDirection === 'up' ? 'rotate-0' : 'rotate-180'}`}>
          ↑
        </span>
      </div>

      {/* E1-Sektion */}
      <div className="w-full bg-gray-300  px-3 py-1">
      <div className='grid grid-cols-5 gap-1 items-center pr-1'>
      <div
            className={`rounded ${getDoorStatusColor(e1DoorStatus[0])} flex items-center justify-center cursor-pointer ${getIconSize(true)}`}
            onClick={() => handleDoorStatusClick('e1', 0)}
            >
            {getDoorIcon(e1DoorStatus[0])}
            </div>
            <div></div>
            <span className="text-teal-500 font-bold text-lg col-span-1 flex justify-center">E1</span>
            <div></div>
            <div
            className={`rounded ${getDoorStatusColor(e1DoorStatus[1])} flex items-center justify-center cursor-pointer ${getIconSize(true)}`}
            onClick={() => handleDoorStatusClick('e1', 1)}
            >
            {getDoorIcon(e1DoorStatus[1])}
            </div>
        </div>
      </div>

      {/* E1 - Icon-Reihe */}
      <div className="w-full bg-gray-300 px-3 py-1">
        <div className='grid grid-cols-5 gap-1 items-center'>
          <div className={`rounded ${getDoorStatusColor(e1DoorStatus[0])} flex items-center justify-center cursor-pointer ${getIconSize(true)}`} onClick={() => handleDoorStatusClick('e1', 0)}>
            {getDoorIcon(e1DoorStatus[0])}
          </div>
          <div className={`flex items-center justify-center cursor-pointer ${getIconSize(false)}`} onClick={() => handleStatusClick('e1', 0)}>
            {getFireAlarmIcon(e1Statuses[0])}
          </div>
          <div className={`flex items-center justify-center cursor-pointer ${getIconSize(false)}`} onClick={() => handleStatusClick('e1', 1)}>
            {getPassengerSignalIcon(e1Statuses[1])}
          </div>
          <div className={`flex items-center justify-center cursor-pointer ${getIconSize(false)}`} onClick={() => handleStatusClick('e1', 2)}>
            {getInteriorLightIcon(e1Statuses[2])}
          </div>
          <div className={`rounded ${getDoorStatusColor(e1DoorStatus[1])} flex items-center justify-center cursor-pointer ${getIconSize(true)}`} onClick={() => handleDoorStatusClick('e1', 1)}>
            {getDoorIcon(e1DoorStatus[1])}
          </div>
        </div>
      </div>

      {/* M1-Sektion */}
      <div className="w-full bg-gray-300  px-2 py-1">
      <div className='grid grid-cols-5 gap-1 items-center pr-1 pl-1'>
      <div
            className={`rounded ${getDoorStatusColor(m1DoorStatus[0])} flex items-center justify-center cursor-pointer ${getIconSize(true)}`}
            onClick={() => handleDoorStatusClick('m1', 0)}
            >
            {getDoorIcon(m1DoorStatus[0])}
            </div>
            <div></div>
            <span className="text-teal-500 font-bold text-lg col-span-1 flex justify-center">M1</span>
            <div></div>
            <div
            className={`rounded ${getDoorStatusColor(m1DoorStatus[1])} flex items-center justify-center cursor-pointer ${getIconSize(true)}`}
            onClick={() => handleDoorStatusClick('m1', 1)}
            >
            {getDoorIcon(m1DoorStatus[1])}
            </div>
        </div>
      </div>

      {/* M1 - Icon-Reihe */}
      <div className="w-full bg-gray-300 px-3 py-1">
        <div className='grid grid-cols-5 gap-1 items-center'>
           <div className={`rounded ${getDoorStatusColor(m1DoorStatus[0])} flex items-center justify-center cursor-pointer ${getIconSize(true)}`} onClick={() => handleDoorStatusClick('m1', 0)}>
            {getDoorIcon(m1DoorStatus[0])}
          </div>
          <div className={`flex items-center justify-center cursor-pointer ${getIconSize(false)}`}  onClick={() => handleStatusClick('m1', 0)}>
            {getFireAlarmIcon(m1Statuses[0])}
          </div>
          <div className={`flex items-center justify-center cursor-pointer ${getIconSize(false)}`} onClick={() => handleStatusClick('m1', 1)}>
            {getPassengerSignalIcon(m1Statuses[1])}
          </div>
          <div className={`flex items-center justify-center cursor-pointer ${getIconSize(false)}`} onClick={() => handleStatusClick('m1', 2)}>
            {getInteriorLightIcon(m1Statuses[2])}
          </div>
          <div className={`rounded ${getDoorStatusColor(m1DoorStatus[1])} flex items-center justify-center cursor-pointer ${getIconSize(true)}`} onClick={() => handleDoorStatusClick('m1', 1)}>
            {getDoorIcon(m1DoorStatus[1])}
          </div>
        </div>
      </div>

      {/* E2-Sektion */}
       <div className="w-full bg-gray-300  px-2 py-1">
        <div className='grid grid-cols-5 gap-1 items-center pr-1 pl-1'>
            <div
              className={`rounded ${getDoorStatusColor(e2DoorStatus[0])} flex items-center justify-center cursor-pointer ${getIconSize(true)}`}
              onClick={() => handleDoorStatusClick('e2', 0)}
            >
              {getDoorIcon(e2DoorStatus[0])}
            </div>
              <span className="text-teal-500 font-bold text-lg col-span-3 flex justify-center">E2</span>
            <div
              className={`rounded ${getDoorStatusColor(e2DoorStatus[1])} flex items-center justify-center cursor-pointer ${getIconSize(true)}`}
              onClick={() => handleDoorStatusClick('e2', 1)}
            >
            {getDoorIcon(e2DoorStatus[1])}
            </div>
        </div>
      </div>

      {/* E2 - Icon-Reihe */}
      <div className="w-full bg-gray-300 px-3 py-1">
        <div className='grid grid-cols-5 gap-1 items-center'>
            <div className={`rounded ${getDoorStatusColor(e2DoorStatus[0])} flex items-center justify-center cursor-pointer ${getIconSize(true)}`} onClick={() => handleDoorStatusClick('e2', 0)}>
            {getDoorIcon(e2DoorStatus[0])}
            </div>
              <div className={` flex items-center justify-center cursor-pointer ${getIconSize(false)}`} onClick={() => handleStatusClick('e2', 0)}>
              {getFireAlarmIcon(e2Statuses[0])}
              </div>
              <div className={`flex items-center justify-center cursor-pointer ${getIconSize(false)}`} onClick={() => handleStatusClick('e2', 1)}>
              {getPassengerSignalIcon(e2Statuses[1])}
              </div>
              <div className={`flex items-center justify-center cursor-pointer ${getIconSize(false)}`}  onClick={() => handleStatusClick('e2', 2)}>
              {getInteriorLightIcon(e2Statuses[2])}
              </div>
            <div className={`rounded ${getDoorStatusColor(e2DoorStatus[1])} flex items-center justify-center cursor-pointer ${getIconSize(true)}`} onClick={() => handleDoorStatusClick('e2', 1)}>
            {getDoorIcon(e2DoorStatus[1])}
            </div>
        </div>
      </div>

      {/* Unterer Halbkreis */}
      <div className="w-full h-16 bg-gray-300 rounded-b-full"></div>
    </div>
  );
};

export default FahrzeugübersichtLeft;