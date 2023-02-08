import { Routes, Route } from 'react-router-dom';

import GlobalStyle from './utils/GlobalStyleReset';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import FindIDPage from './pages/FindIDPage';
import SignupPage from './pages/SignupPage';
import UserProfile from './pages/UserProfile';
import Modify from './pages/Modify.js'

function App() {
  return (
    <div className="main">
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/findID" element={<FindIDPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/userprofile" element={<UserProfile/>}></Route>
        <Route path="/modify" element={ <Modify></Modify> } />
        <Route path="/myposting" element={ <div>내 게시물</div> } />

      </Routes>
    </div>
  )
}

export default App;

