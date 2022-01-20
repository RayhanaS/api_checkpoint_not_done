import React, { useEffect,useState } from 'react';
import SingleUser from '../components/SingleUser'
import PostList from '../components/PostList';
import Axios from 'axios';
function UserDetail({match,history}) {
  const [singleUser,setSingleUser] = useState({})
  const [posts,setPosts] = useState([])
  const getSingleUser = () =>{
    Axios.get(`https://jsonplaceholder.typicode.com/users/${match.params.userID}`)
    .then((response) => setSingleUser(response.data) )
    .catch((error) => console.log(error))
  }
  const getPostByUserID = () =>{
    Axios.get(`https://jsonplaceholder.typicode.com/users/${match.params.userID}/posts`)
    .then((response) => setPosts(response.data) )
    .catch((error) => console.log(error))
  }
  useEffect(() =>{
    getSingleUser();
    getPostByUserID();
  },)
  return( 
  <div>
    <SingleUser user={singleUser}/>
    <PostList post={posts}/>
  </div>);
}

export default UserDetail;
