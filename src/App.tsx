import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card, { CardVariant } from './components/Card';
import UserList from './components/UserList';
import { IUser } from './types/types';

const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  useEffect(() => {
    fetchUsers()
  }, [])

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      setUsers(response.data)
    } catch(e){
      alert(e)
    } 
  }

  return (
    <div>
      <Card 
        variant={CardVariant.outlined}
        width='200px' 
        height='200px'
        onClick={()=> console.log('click')}
      >
        <button>Кнопка</button>
        <div>sdfvdf</div>
      </Card>
      <UserList users = {users}/>
    </div>
  );
};

export default App;