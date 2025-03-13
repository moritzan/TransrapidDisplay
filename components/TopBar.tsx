// components/TopBar.tsx
import Image from 'next/image';

const TopBar: React.FC = () => {
  return (
    <div className="bg-[#d0d0d5] text-black font-bold">
      <div className="flex items-center justify-between p-2">
        {/* Linke Seite: Logo und Text */}
        <div className="flex items-start space-x-4">
          <Image src="/icon1.png" alt="Transrapid Logo" width={50} height={50} />
          <div>
            <div className="text-xl text-blue-600">TRANSRAPID</div>
             <div className="text-sm p-1 mt-1">
                FZ <span className='mt-1 p-1 shadow-[inset_1px_1px_2px_1px_rgba(0,_0,_0,_0.35)]'>1</span> FP <span className='mt-1 p-1 shadow-[inset_1px_1px_2px_1px_rgba(0,_0,_0,_0.35)] px-1'>E1</span>
            </div>
          </div>
        </div>

        {/* Rechte Seite: Statusanzeigen */}
        <div className="flex items-center space-x-4">
            <div className='grid grid-cols-1  gap-2 justify-center'>
                <div className="shadow-[inset_1px_1px_2px_1px_rgba(0,_0,_0,_0.35)] bg-teal-400 p-2 rounded text-center">BETRIEBSART BLZ</div>
            <div className="shadow-[inset_1px_1px_2px_1px_rgba(0,_0,_0,_0.35)] bg-teal-400 p-2 rounded text-center">
                AUTOMATIKBETRIEB
            </div>

            </div>
        </div>

        <div className="flex items-center space-x-4">
        <div className="text-sm ">
                HALTEPLATZ in
                <div className='shadow-[inset_1px_1px_2px_1px_rgba(0,_0,_0,_0.35)] p-1 mt-1'> 4197 m</div>
            </div>
            <div className="text-sm">
                <div>18.03.06</div>
                <div className='shadow-[inset_1px_1px_2px_1px_rgba(0,_0,_0,_0.35)] p-1 mt-1'>13:02:21</div>
            </div>
      </div>
    </div>
</div>
  );
};

export default TopBar;