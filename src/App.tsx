import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupPage from './Pages/signUp/signUp';
import HomePage from './Pages/Home/Home';



const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" Component={SignupPage} />
        <Route path="/" Component={HomePage} />
      </Routes>
    </Router>
  );
};

export default App;
