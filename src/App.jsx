import Navbar from './components/Navigation/Navbar';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import './App.css';
import Products from './components/Products/Products';

function App() {
  return (
    <>
      <Navbar />
        <Main />
        <Products />
      <Footer />
    </>
  );
}

export default App;
