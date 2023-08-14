import { Routes, Route } from 'react-router-dom'
import './App.scss'
import  Home  from './pages/Home'
import  LogIn  from './pages/LogIn'
import  User  from './pages/User'
import  Error  from './pages/Error'
import Footer from './containers/Footer'


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<LogIn />}/>
      <Route path='/user' element={<User />}/>
      <Route path='/404' element={<Error />}/>
    </Routes>
    <Footer />
    </>
  );
}

export default App;
