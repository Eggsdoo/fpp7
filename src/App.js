import './App.css';
import Landing from './components/landing/Landing';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router basename='/fpp7'>
        <Routes>
          <Route path='/strong_and_free' element={<><Landing /></>}>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
