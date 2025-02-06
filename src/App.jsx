import { Routes, Route } from 'react-router';
import './App.css';
import Layout from './components/Layout';
import UserProfile from './components/UserProfile ';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<UserProfile />} />
      </Route>
    </Routes>
  );
}

export default App;
