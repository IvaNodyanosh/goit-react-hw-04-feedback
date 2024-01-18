import React from 'react';
import ReactDOM from 'react-dom/client';
import { Feedback } from 'components/feedback';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Feedback />
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@300;600;800&display=swap');
    </style>
  </React.StrictMode>
);
