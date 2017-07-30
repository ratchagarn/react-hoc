import './UserList.css';

import React from 'react';
import FetchUserData, { FETCH_STATUS } from '../HOC/FetchUserData';

export const UserList = ({ keyword, users, fetchStatus }) => {
  return <div className="UserList">{getOutputByStatus()}</div>;
  
  function getOutputByStatus() {
    switch (fetchStatus) {
      case FETCH_STATUS.LOADING:
        return <div>Loading...</div>;

      case FETCH_STATUS.ERROR:
        return <div>Something went wrong! Can't display user list</div>;

      case FETCH_STATUS.SUCCESS:
        if (keyword.length > 1) {
          return (
            users
              .filter((user) => {
                const regExp = new RegExp(keyword, 'i');
                return regExp.test(user.name);
              })
              .map((user) => <UserItem user={user} />)
          );
        }
        else {
          return users.map((user) => <UserItem user={user} />);
        }
    }
  }
}

export function UserItem({ user }) {
  return (
    <div className="UserItem">
      <h5>{user.name}</h5>
      <p>{user.username}</p>
      <p>{user.email}</p>
    </div>
  );
}

export default FetchUserData(UserList);