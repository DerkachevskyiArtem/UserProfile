import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router';

const user = {
  id: '12345',
  firstName: 'User',
  lastName: 'Userenko',
  imgSrc: 'https://example.com/picture.jpg',
  isMale: true,
  email: 'userUserenko@example.com',
  password: 'supersecurepassword123',
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App user = {user}/>
    </BrowserRouter>
  </StrictMode>
);
