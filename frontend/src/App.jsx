import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Movies from './pages/Movies';
import SeeMovie from './pages/SeeMovie';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
        </Route>

        <Route path="/signin" element={<SignIn />} />

        <Route path="/signup" element={<SignUp />} />

        <Route path="/movies" element={<Layout />}>
          <Route index element={<Movies />} />
          <Route path=":id" element={<SeeMovie />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
