import { Routes, Route } from 'react-router-dom'
import  Home  from './pages/Home'
import  LogIn  from './pages/LogIn'
import  User  from './pages/User'
import  Error  from './pages/Error'


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<LogIn />}/>
      <Route path='/user' element={<User />}/>
      <Route path='/404' element={<Error />}/>
    </Routes>
  );
}

export default App;
