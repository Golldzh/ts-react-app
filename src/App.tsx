import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card, { CardVariant } from './components/Card';
import EventsExample from './components/EventsExample';
import List from './components/List';
import TodoItem from './components/TodoItem';
import UserItem from './components/UserItem';
import { ITodo, IUser } from './types/types';

const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [todos, setTodos] = useState<ITodo[]>([]);
  useEffect(() => {
    fetchUsers()
    fetchTodos()
  }, [])

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      setUsers(response.data)
    } catch(e){
      alert(e)
    } 
  }

  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
      setTodos(response.data)
    } catch(e){
      alert(e)
    } 
  }
  const [value, setValue] = useState<boolean>(false);
  return (
    <div>
      <Card 
        variant={CardVariant.outlined}
        width='500px' 
        height='50px'
        onClick={()=> console.log('click')}
      >
        <EventsExample value ={value} setValue={setValue}/>
      </Card>
      <List items = {users}
            renderItem={(user:IUser) => <UserItem user={user} key={user.id}/>}
      />
      {
        value &&
        <div>
          <h2 style={{margin: 10, textAlign: 'center'}}> ToDo:</h2>
          <List items = {todos}
              renderItem={(todo:ITodo) => <TodoItem todo={todo} key={todo.id}/>}
          />
        </div>
      }
    </div>
  );
};

export default App;