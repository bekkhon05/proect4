import './App.css'
import Navbar from './components/Nvabar/Navbar';
import Futter from './components/Futter/Futter';
import { BrowserRouter } from 'react-router-dom';
import { Box } from '@mui/system';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Futter />
      </BrowserRouter>
    </div>
  );
}

export default App;