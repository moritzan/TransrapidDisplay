// components/ComplexLayout.tsx
import FahrzeugübersichtLeft from './FahrzeugübersichtLeft';
import DummyRectangle2 from './DummyRectangle2';
import FahrzeuguebersichtRight from './FahrzeuguebersichtRight';
import DummyBottomBox from './DummyBottomBox';
import BLFBFD from './BFDDisplay';
import RechteBox from './RechteBox'; 
import Meldungen from './Meldungen';

const ComplexLayout: React.FC = () => {
  return (
    <div className="flex justify-center"> {/* Äußerer Container für Zentrierung */}
      <div className="grid grid-cols-4 gap-4 p-2 w-full max-w-5xl ml-20 mr-20"> {/* Grid mit max-width */}
         {/* Linke Pille (Spalte 1, zentriert) */}
      <div className="col-span-1  flex  justify-start items-center">
        <FahrzeugübersichtLeft />
      </div>

      {/* Mittlere Rechtecke (Spalten 2 und 3, zentriert) */}
      <div className="col-span-1 col-start-2 flex justify-center">
        <BLFBFD />
      </div>
      <div className="col-span-1 col-start-3 flex justify-center">
        <RechteBox />
      </div>

       {/* Rechte Pille (Spalte 5, zentriert) */}
      <div className="col-span-1 col-start-4 flex justify-end items-center">
          <FahrzeuguebersichtRight/>
      </div>


      {/* Untere Box (Spalte 1-4, zentriert, etwas eingerückt) */}
      <div className="col-span-1 col-start-2">
        <div className="">
             <Meldungen />
        </div>
      </div>
    </div>
    </div>
  );
};

export default ComplexLayout;