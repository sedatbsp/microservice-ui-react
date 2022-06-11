import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './pages/home/Home';
import { Profile } from './pages/profile/Profile';
import { Admin } from './pages/admin/Admin';
import { Login } from './pages/login/Login';
import { Register } from './pages/register/Register';
import { NotFound } from './pages/not-found/NotFound';
import { Unauthorized } from './pages/unauthorized/Unauthorized';
import { AuthGuard } from './guards/AuthGuard';
import { Role } from './models/Role';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/profile'
            element=
            {<AuthGuard roles={[Role.ADMIN, Role.USER]}>
              <Profile />
            </AuthGuard>
            }>
          </Route>
          <Route path='/admin'
            element=
            {<AuthGuard roles={[Role.ADMIN]}>
              <Admin />
            </AuthGuard>
            }>
          </Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/404' element={<NotFound />}></Route>
          <Route path='/401' element={<Unauthorized />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
