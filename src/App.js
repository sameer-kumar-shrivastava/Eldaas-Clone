import './App.css';
import Navbar from './Components/Navbar/navbar';
import Dashboard from './Components/Dashboard/dashboard';
import Trending from './Components/Trending/trending';
import Featured from './Components/Featured/featured';

function App() {
  return (
    <div className='app-container'>
      <Navbar/>
      <Dashboard/>
      <Trending/>
      <Featured />    
    </div>
  );
}

export default App;
