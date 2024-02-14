import './App.css';
// import Button from './componentss/button/Button';
// import User from './componentss/user/User';
// import Example from './componentss/example/example';
// import Header from './componentss/header/Header';
// import Modal from './componentss/modal/Modal';
import { useState } from 'react';
import CountPage from './page/countPage/CountPage';

function App() {
  // const navbar=['home', 'about us', 'contacts']; 
  const [show, setShow]=useState(false)

  const handleShow=()=>{
    setShow(!show)
  }
  return (
    <>
      {/* {
        show && <Modal/>
      }
      <button onClick={handleShow}>Open</button> */}
      <CountPage/>
    </>
    
  );
}

export default App;
