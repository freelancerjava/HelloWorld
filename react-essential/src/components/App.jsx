import React from 'react';
import '../components/App.scss';

// import ThemeSwitcher from "./ThemeSwitcher";

import ContactList from "./ContactList"



class App extends React.Component {

  

  render() {
    return (
      <div className="App">
        <ContactList />
      </div>
    );
  }
}

export default App;


