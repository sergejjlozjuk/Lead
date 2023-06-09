import { useState } from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Popup from './Components/Popup/Popup';

function App() {
  const [response, setResponse] = useState({});
  return (
    <div className='App'>
      <Header />
      <Main />
      <Footer setResponse={setResponse} />
      <Popup response={response} />
    </div>
  );
}

export default App;
