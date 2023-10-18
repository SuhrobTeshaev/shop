import React from 'react'
import AppRoutes from './components/Routes/Routes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';


function App() {

  return (
    <div className="App">
      <Header/>
      <div className='container'>
        <Sidebar/>
        <AppRoutes/>
      </div>
    
    <Footer/>
    </div>
  );
}

export default App;
