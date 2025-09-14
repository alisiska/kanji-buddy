import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { useState } from 'react';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import BookPage from './pages/BookPage';
import KnowledgeBank from './pages/KnowledgeBank';
import DashboardPage from './pages/DashboardPage';

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
        >
          <Route path='' element={<DashboardPage />} />
        </Route>
        <Route
          path='/bank'
          element={isLoggedIn ? <Dashboard /> : <Navigate to='/login' />}
        >
          <Route index element={<KnowledgeBank />} />
          <Route path='books/:id' element={<BookPage />} />
        </Route>

        {/* <Route
          path='/bank/books/:id'
          element={isLoggedIn ? <BookPage /> : <Navigate to='/login' />}
        /> */}

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
