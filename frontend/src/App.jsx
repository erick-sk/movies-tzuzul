import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './commponents/Home';
import Signin from './commponents/Signin';
import Signup from './commponents/Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </Router>
  );
}

export default App;
