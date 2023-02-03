import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import InfoCard from './components/InfoCard';
import { Records } from './components/type';

function App() {
  const [records, setRecords] = useState<Records>([]);
  const [loading, setLoading] = useState(true);
  
  const fetchData =async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    setRecords(response?.data);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [])
  
  if(loading)
    return <p>Loading..........</p>
  
  return (
    <>
      {
        records.map((record, index) => {
          return <InfoCard 
            key={index}
            record={record} />
        })
      }
    </>
  );
}

export default App;