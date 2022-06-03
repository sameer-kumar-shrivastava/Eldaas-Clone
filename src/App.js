import './App.css';
import Navbar from './Components/Navbar/navbar';
import Dashboard from './Components/Dashboard/dashboard';
import Trending from './Components/Trending/trending';
import Featured from './Components/Featured/featured';
import Footer from './Components/Footer/footer';
function App() {
  return (
    <div className='app-container'>
      <Navbar/>
      <Dashboard/>
      <Trending/>
      <Featured />
      <Footer/>    
    </div>
  );
}

export default App;
