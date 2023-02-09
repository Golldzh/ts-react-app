import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { IUser } from '../types/types';
import { useParams, useNavigate } from 'react-router-dom';

type UserItemPageParams = {
  id: string;
};

const UserItemPage:FC = () => {
  const params = useParams<UserItemPageParams>()
  const [user, setUser] = useState<IUser | null>(null);
  useEffect(() => {
    fetchUser()
  }, [])

  async function fetchUser() {
    try {
      const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id)
      setUser(response.data)
    } catch(e){
      alert(e)
    } 
  }

  const navigate = useNavigate();
  return (
    <div style={{display: "flex",
    flexDirection: 'column',
    justifyContent: 'space-around',
    margin:'0 auto',
    alignItems: 'center'}}>
      <button onClick={()=> navigate("/users")}>Back</button>
      <div>
      <h1>Страница пользователя {user?.name}</h1>
      <div>
        {user?.email}
      </div>
      <div>
        {user?.address.city} {user?.address.street}
      </div>
      </div>
    </div>
  );
};

export default UserItemPage;