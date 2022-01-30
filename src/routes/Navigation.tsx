import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import MainLayout from '../layout/MainLayout'
import Home from '../pages/Home'
import Users from '../pages/Users'
import About from '../pages/About'
import NotFound from '../pages/NotFound'

import Link from '../components/Link'

import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
            <img src={ logo } alt="React Logo" />
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch>/<Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Home />}/>
            <Route path="users" element={<Users />}/>
            <Route path="about" element={<About />}/>
            <Route path="*" element={<NotFound />}/>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
