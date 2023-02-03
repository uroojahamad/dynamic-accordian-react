import React, {useState} from "react";
import InfoBoxExpanded from "./InfoBoxExpanded";

const InfoCards = () => {

  const [display, setDisplay] = useState<boolean>(false);

  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-2 p-3 border border-slate-300 m-3 rounded-xl">
      <div className="flex-1 self-center">
        <h1 className="text-xl font-bold text-center">Hello Travles</h1>
      </div>
      <div className="flex flex-col flex-1 pl-7 justify-center border-l-2 border-r-2 border-slate-100">
        <span>
          <h2 className="text-lg font-semibold">Contact</h2>
        </span>
        <span>
          <h3>Minhaj Ahmad Khan</h3>
        </span>
      </div>
      <div className="flex flex-col flex-1 pl-7 justify-center border-r-2 border-slate-100">
        <span>
          <h2 className="text-lg font-semibold">City</h2>
        </span>
        <span>
          <h3>Lucknow</h3>
        </span>
      </div>
      <div className="flex flex-col flex-1 pl-7 justify-center border-r-2 border-slate-100">
        <span>
          <h2 className="text-lg font-semibold">State</h2>
        </span>
        <span>
          <h3>Uttar Pradesh</h3>
        </span>
      </div>
      <div className="flex-1 flex justify-center items-center m-4">
        <button className="text-slate-200 rounded-3xl flex-1 bg-red-600 p-3 m-4 shadow-md shadow-red-500 hover:shadow-lg hover:shadow-red-500" onClick={() => setDisplay(!display)}>
          View Details
        </button>
      </div>
      {display && <InfoBoxExpanded />}
    </div>
  );
};

export default InfoCards;