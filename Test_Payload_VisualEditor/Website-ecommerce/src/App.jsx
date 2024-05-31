// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PreviewPage from './Components/PreviewPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/preview" element={<PreviewPage />} />
        {/* Các routes khác của ứng dụng của bạn */}
      </Routes>
    </Router>
  );
}

export default App;
