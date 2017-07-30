import './global.css';

import React from 'react';
import { render } from 'react-dom';
import UserApp from './components/UserApp';


const App = () => (
  <div className="App">
    <UserApp />
  </div>
);

render(<App />, document.getElementById('root'));
