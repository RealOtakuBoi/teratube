
import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import {Box} from '@mui/material';
import Navbar from './Components/Navbar';
import Feed from './Components/Feed';
import VideoDetail from './Components/VideoDetail';
import ChannelDetail from './Components/ChannelDetail';
import SearchDetail from './Components/SearchDetail';





const App = () => (
  <BrowserRouter>
    <Box sx={{backgroundColor : '#000'}}>
      <Navbar />
      <Routes>
        <Route path='/' exact element ={<Feed />}/>
        <Route path='/video/:id' element ={<VideoDetail />}/>
        <Route path='/channel/:id' element ={<ChannelDetail />}/>
        <Route path='/search/:searchTerm' element ={<SearchDetail />}/>
      </Routes>
    </Box>
  </BrowserRouter>
)

export default App;
