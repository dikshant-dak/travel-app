import React,{useState, useEffect} from 'react';
import Header from '@/components/Header';
import axios from 'axios';

const Users = () => {
    const [user, setUser] = useState();

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get("http://localhost:8005/customers");
    
            setUser(response.data);
            console.log(response.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
        fetchData();
      }, []);
  return (
    <div>
        <Header />
        {user ? (
        <div style={{whiteSpace: "pre-wrap"}}>{JSON.stringify(user, null, 2)}</div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  )
}

export default Users;
