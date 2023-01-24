import { Routes, Route } from 'react-router-dom';

import GlobalStyle from './utils/GlobalStyleReset';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import FindIDPage from './pages/FindIDPage';
import SignupPage from './pages/FindIDPage';

function App() {
  return (
    <div className="main">
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/findID" element={<FindIDPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
      </Routes>
    </div>
  )
}

export default App;

//installed: styled-components, styled-reset, react-router-dom
