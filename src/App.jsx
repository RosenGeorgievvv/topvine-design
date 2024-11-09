import Navbar from './components/Navigation/Navbar';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import './App.css';
import Products from './components/Products/Products';
import Solutions from './components/Solutions/Solutions';
import Info from './components/Info/Info';
import OrangeLine from './components/orangeLine';

function App() {
  return (
    <>
      <Navbar />
        <Main />
        <Products />
        <Solutions />
        <Info />
        <OrangeLine />
      <Footer />
    </>
  );
}

export default App;
