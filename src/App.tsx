import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import InfoCards from './components/InfoCards';
import { Records } from './components/type';

function App() {
  const [records, setRecords] = useState<Records>([]);
  

  const fetchData =async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    setRecords(response?.data);
  }

  useEffect(() => {
    fetchData();
  }, [])
  
  return (
    <>
      {
        records.map((record, index) => {
          return <InfoCards 
            key={index}
            record={record} />
        })
      }
    </>
  );
}

export default App;