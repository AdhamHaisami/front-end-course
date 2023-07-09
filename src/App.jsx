import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [data, setData] = useState({});

  const getData = async () => {
    const res = await axios.get('/api/test');
    
    setData(res.data);
  };
  useEffect(() => {
    getData();
  
   
  }, [])
  
  
  return <div>
    <h1>This is fron end application</h1>
<h1>Test</h1>
    <h3>{data.status}</h3>
    </div>
 
}

export default App
