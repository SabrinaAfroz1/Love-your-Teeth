
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import RequireAuth from './Pages/Auth/RequireAuth';
import Blog from './Pages/Blog/Blog';
import CheckOut from './Pages/Home/CheckOut/CheckOut';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='register' element={<Register></Register>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <CheckOut>

            </CheckOut>
          </RequireAuth>
        }></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
