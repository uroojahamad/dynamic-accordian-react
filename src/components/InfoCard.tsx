import {useState} from "react";
import InfoBoxExpanded from "./InfoBoxExpanded";
import { Record } from "./type";

type InfoCardProps = {
  record: Record
}

const InfoCard = (props: InfoCardProps) => {

  const {record} = props;
  const {name, address, company} = record;
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleDetails = () => {
    setIsVisible(previousState => !previousState);
  }
  
  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-2 p-3 border border-slate-300 m-3 rounded-xl">
      <div className="flex-1 self-center">
        <h1 className="text-xl font-bold text-center">{company.name}</h1>
      </div>
      <div className="flex flex-col flex-1 pl-7 justify-center border-l-2 border-r-2 border-slate-100">
          <h2 className="text-lg font-semibold">Contact</h2>
          <p>{name}</p>
      </div>
      <div className="flex flex-col flex-1 pl-7 justify-center border-r-2 border-slate-100">
          <h2 className="text-lg font-semibold">City</h2>
          <p>{address.city}</p>
      </div>
      <div className="flex flex-col flex-1 pl-7 justify-center border-r-2 border-slate-100">
          <h2 className="text-lg font-semibold">Street</h2>
          <p>{address.street}</p>
      </div>
      <div className="flex-1 flex justify-center items-center m-4">
        <button className="text-slate-200 rounded-3xl flex-1 bg-red-500 p-3 m-4 shadow-md shadow-red-500 hover:shadow-lg hover:shadow-red-500 hover:bg-red-600" onClick={toggleDetails}>
         {isVisible ? 'Hide Details' : 'View Details'}
        </button>
      </div>
      {isVisible && <InfoBoxExpanded details={props.record}/>}
    </div>
  );
};

export default InfoCard;