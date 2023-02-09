import React, { FC, PropsWithChildren } from 'react';
import { IUser } from '../types/types';

interface UserListProps extends PropsWithChildren{
  users: IUser[]
}
const UserList: FC<UserListProps> = 
  ({users}) => {
    return (
      <div>

      </div>
    );
};

export default UserList;