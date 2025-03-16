import TopBar from '../components/TopBar';
import SpeedBar from '../components/SpeedBar';
import ComplexLayout from '../components/ComplexLayout';

const Home: React.FC = () => {
  return (
    <div>
      <>
      <TopBar />
      <SpeedBar
        initialMin={150}
        initialSoll={200}
        initialIst={180}
        initialMax={245}
      />
      <ComplexLayout />

      </>
    </div>
  );
};

export default Home;
