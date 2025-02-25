import Sidebar from './components/Sidebar';
import TopSection from './components/TopSection';
import MainSection from './components/MainSection';

function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex h-3/4  bg-white shadow-lg rounded-lg overflow-hidden w-3/4">
        <div className="w-1/4">
          <Sidebar />
        </div>

        <div className="flex-1 flex flex-col bg-gray-200">
          <div className=" basis-3/10 rounded-lg">
            <TopSection />
          </div>
          <div className=" basis-7/10 rounded-lg">
            <MainSection />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
