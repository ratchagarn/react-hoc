import React, { Component } from 'react';

export const FETCH_STATUS = {
  READY:   'READY',
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  ERROR:   'ERROR',
};

const updateStateLoading = () => {
  return {
    fetchStatus: FETCH_STATUS.LOADING,
  };
}

const updateStateSuccess = (users) => () => {
  return {
    users,
    fetchStatus: FETCH_STATUS.SUCCESS,
  }
};

const updateStateError = () => {
  return {
    fetchStatus: FETCH_STATUS.ERROR,
  };
}

const FetchUserData = (WrapperComponent) => {
  return class FetchUserData extends Component {
    constructor(props) {
	  super(props);
      
      this.state = {
        users: [],
        fetchStatus: FETCH_STATUS.READY,
      };
    }

    componentDidMount() {
      this.setState(updateStateLoading());

	  fetch('https://jsonplaceholder.typicode.com/users')
      	.then((resp) => resp.json())
      	.then((resp) => {
          if (resp.length) {
          	this.setState(updateStateSuccess(resp));
          }
          else {
            this.setState(updateStateError());
          }
      	})
    }

    render() {
      const { users, fetchStatus } = this.state;
      return <WrapperComponent {...this.props} users={users} fetchStatus={fetchStatus} />;
    }
  }
}

export default FetchUserData;