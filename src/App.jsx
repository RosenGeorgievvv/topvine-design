import Navbar from './components/Navigation/Navbar';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '500px' }}>
        <Main />
      </div>
      <Footer />
    </>
  );
}

export default App;
