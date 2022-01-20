import React from 'react';
import {Card,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
function UserCard({user}) {
  return (
  <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/147/147144.png" />
        <Card.Body>
            <Card.Title>{user.name}</Card.Title>
            <Card.Text>
            {user.email}
            </Card.Text>
           <Link to={`/user/${user.id}`}><Button variant="primary">Details</Button></Link> 
        </Card.Body>
        </Card>
  </div>
  );
}

export default UserCard;
