import React, { Component } from 'react';
import SearchBox from './SearchBox';
import UserList from './UserList';


export default class UserApp extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      keyword: '',
    };
  }
  
  render() {
    const { keyword } = this.state;

    return (
      <div className="UserApp">
        <SearchBox
          value={keyword}
          placeholder="Search by name"
          onChange={this.onSearchBoxChangeHandler} />
      	<UserList keyword={keyword} />
      </div>
    );
  }
  
  onSearchBoxChangeHandler = (event) => {
    this.setState({
      keyword: event.target.value,
    });
  }
};
