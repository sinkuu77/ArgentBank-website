import { Routes, Route } from 'react-router-dom'


import './App.scss'

import  Home  from './pages/Home'
import  SignIn  from './pages/SignIn'
import  User  from './pages/User'
import  Error  from './pages/Error'
import Header from './containers/Header'
import Footer from './containers/Footer'


function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/sign-in' element={<SignIn />}/>
      <Route path='/user' element={<User />}/>
      <Route path='*' element={<Error />}/>
    </Routes>
    <Footer />
    </>
  );
}

export default App;
