import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import ProtectedRoute from './permissions/ProtectedRoute';
import AuthRoute from './permissions/AuthRoute';
import Home from "./views/Home"
import Auth from './views/Auth';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route exact path='/home' element={<ProtectedRoute />}>
            <Route path='/home/*' element={ <Home />} />
            <Route path="/home" element={ <Navigate to="/home/todolist" replace /> } />
          </Route>

          <Route exact path='/auth' element={<AuthRoute />}>
            <Route path='/auth/*' element={ <Auth />} />
            <Route path="/auth" element={ <Navigate to="/auth/Login" replace /> } />
          </Route>

          <Route path="/*" element={ <Navigate to="/auth" replace /> } />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
