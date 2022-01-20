import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import UserList from '../components/UserList'
function Home() {
  const [users,setUsers] = useState([])
  const getData = () =>{
    Axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(response => 
      /*console.log(response)*/ 
    /*console.log(response.data)*/ 
    setUsers(response.data))
    .catch(erreur => console.log(erreur))
  }

    useEffect(() => {
      getData()
    },[])
    
    return <div className="user-list">
      
    {users.map(user => <UserList key={`UserList_${user.id}`} user={user} />)}
  </div>;
}

export default Home;
