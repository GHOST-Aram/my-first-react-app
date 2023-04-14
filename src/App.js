import './App.css';
import { Header } from './components';
import React from 'react'
// function App() {
//   return (
      // <div className="container">
      //  <Header/>
      // </div>
  //   );
  // }
  class App extends React.Component {
    render() {
      return (
        <div className="container">
           <Header/>
          </div>
      )
  }
    
}

export default App;
