import './App.css'
import Navbar from './components/Nvabar/Navbar';
import Futter from './components/Futter/Futter';
import { BrowserRouter } from 'react-router-dom';
import Router from './router';
import { Box } from '@mui/material';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Box sx={{position:"fixed",width:'100%',background:'#fff'}}>
          <Navbar />
        </Box>
        <Router />
        <Futter />
      </BrowserRouter>
    </div>
  );
}

export default App;