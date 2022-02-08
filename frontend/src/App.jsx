import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './commponents/Home';
import SignIn from './commponents/SignIn';
import SignUp from './commponents/SignUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
