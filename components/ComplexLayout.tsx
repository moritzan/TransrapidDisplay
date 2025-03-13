// components/ComplexLayout.tsx
import FahrzeugübersichtLeft from './FahrzeugübersichtLeft';
import DummyRectangle1 from './DummyRectangle1';
import DummyRectangle2 from './DummyRectangle2';
import DummyPillRight from './DummyPillRight';
import DummyBottomBox from './DummyBottomBox';

const ComplexLayout: React.FC = () => {
  return (
    <div className="flex justify-center"> {/* Äußerer Container für Zentrierung */}
      <div className="grid grid-cols-4 gap-4 p-4 w-full max-w-4xl"> {/* Grid mit max-width */}
         {/* Linke Pille (Spalte 1, zentriert) */}
      <div className="col-span-1 flex  justify-start items-center">
        <FahrzeugübersichtLeft />
      </div>

      {/* Mittlere Rechtecke (Spalten 2 und 3, zentriert) */}
      <div className="col-span-1 flex justify-center items-center">
        <DummyRectangle1 />
      </div>
      <div className="col-span-1 flex justify-center items-center">
        <DummyRectangle2 />
      </div>

       {/* Rechte Pille (Spalte 5, zentriert) */}
      <div className="col-span-1 flex justify-end items-center">
          <DummyPillRight/>
      </div>


      {/* Untere Box (Spalte 1-4, zentriert, etwas eingerückt) */}
      <div className="col-span-1 col-start-2">
        <div className="">
             <DummyBottomBox />
        </div>
      </div>
    </div>
    </div>
  );
};

export default ComplexLayout;