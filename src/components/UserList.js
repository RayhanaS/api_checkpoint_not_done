import React from 'react';
import UserCard from './UserCard';
import {Spinner} from 'react-bootstrap';
function UserList({user}) {
  return(
   <div>
    <UserCard user={user}/>
    {/* <Spinner animation="border" /> */}
  </div>
  ) 
}

export default UserList;
