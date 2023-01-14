import { Routes, Route } from 'react-router-dom';

import GlobalStyle from './utils/GlobalStyleReset';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className="main">
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
      </Routes>
    </div>
  )
}

export default App;

//installed: styled-components, styled-reset, react-router-dom
