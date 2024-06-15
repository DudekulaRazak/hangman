import './App.css';
import Hangman from './Hangman';
import Welcome from './Welcome';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<Welcome/>}/>
      <Route path='/hangman' element={<Hangman/>}/>
    </Routes>
   </Router>
  );
}

export default App;
