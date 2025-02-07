import { Routes, Route } from 'react-router';
import PropTypes from 'prop-types';
import './App.css';
import Layout from './components/Layout';
import UserProfile from './components/UserProfile ';

function App({ user }) {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<UserProfile user={user} />} />
      </Route>
    </Routes>
  );
}

App.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
    isMale: PropTypes.bool,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }),
};

export default App;
