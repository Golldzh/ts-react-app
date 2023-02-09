import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import TodosPage from './TodosPage';
import UserItemPage from './UserItemPage';
import UserPage from './UserPage';

const AppRouter:FC = () => {
  return (
    <Routes>
      <Route 
          path= "/users"
          element= {<UserPage/>}/>
      <Route 
          path= "/todos"
          element= {<TodosPage/>}/>
      <Route 
          path= "/users/:id"
          element= {<UserItemPage/>}/>
    </Routes>
  );
};

export default AppRouter;