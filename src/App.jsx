import "./App.css";
import MadeLi from "./components/li-map.jsx";

function App() {
  return (
    <div className="w-[736px] h-[512px] flex drop-shadow-[#3D6CEC] bg-white border-white rounded-2xl my-24">
      <div className="w-[368px] h-[512px] border-none rounded-2xl bg-gradient-to-b from-[#7755FF] via-[#6943FF] to-[#2F2CE9] w-1/2">
        <h1 className="h-[31px] pl-28 my-[30px] text-2xl text-[#CAC9FF] mb-[20px] font-bold">
          Your Result
        </h1>
        <div className="w-[200px] h-[200px] mx-20 border-2 border-[#4D21C9] rounded-full bg-gradient-to-b from-[#4D21C9] via-[#2521C9] via-0% to-[#2521C9] to-0%">
          <h1 className="w-20 h-24 px-14 py-11 text-7xl text-white font-bold">
            76
          </h1>
          <h3 className="text-xl font-bold text-opacity-50 text-[#CAC9FF] px-16 mx-1 my-6">
            of 100
          </h3>
        </div>
        <h1 className="text-3xl text-center px-20 py-5 font-bold text-white">
          Great
        </h1>
        <p className="font-semibold text-lg text-[#CAC9FF] mx-14 block text-center">
          Your performance exceed 65% of the people conducting the test here!
        </p>
      </div>
      <div className="w-1/2 my-7 ml-10">
        <h1 className="h-8 text-2xl font-bold text-[#303B59]">Summary</h1>
        <MadeLi />
        <button>Continue</button>
      </div>
    </div>
  );
}

export default App;
