import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { useState } from 'react';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('loggedIn') === 'true'
  );

  return (
    <Router>
      <Routes>
        {/* Login page */}
        <Route
          path='/login'
          element={
            isLoggedIn ? (
              <Navigate to='/dashboard' />
            ) : (
              <Login
                onLogin={() => {
                  setIsLoggedIn(true);
                  localStorage.setItem('loggedIn', 'true');
                }}
              />
            )
          }
        />

        {/* All dashboard routes */}
        <Route
          path='/dashboard'
          element={isLoggedIn ? <Dashboard /> : <Navigate to='/login' />}
        />
        <Route
          path='/bank'
          element={isLoggedIn ? <Dashboard /> : <Navigate to='/login' />}
        />
        <Route
          path='/analytics'
          element={isLoggedIn ? <Dashboard /> : <Navigate to='/login' />}
        />
        <Route
          path='/settings'
          element={isLoggedIn ? <Dashboard /> : <Navigate to='/login' />}
        />

        {/* Default redirect */}
        <Route path='/' element={<Navigate to='/dashboard' />} />
        <Route path='*' element={<Navigate to='/dashboard' />} />
      </Routes>
    </Router>
  );
}
