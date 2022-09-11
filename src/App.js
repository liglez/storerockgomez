/**
 *  fragment <></>
 */
// import logo from './logo.svg';
// import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import {BrowserRouter} from 'react-router-dom';
import CardProvider from './context/CartContext';

const App =() => {

  return (
    <CardProvider>
      <BrowserRouter>
          <Header />
          <Main mensaje='Item List Container mesaje'/> 
        <Footer />
      </BrowserRouter> 
    </CardProvider>
  );
}

export default App;
