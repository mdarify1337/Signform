import React from 'react';
import ReactDOM from 'react-dom/client';
import './list.css';
import FunctionSignUpForm from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ValidInformation from './Information';
import ValidAccount from './checklist';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/SignIn" element={<FunctionSignUpForm/>} >
          </Route>
        <Route path="/login"  element={<ValidAccount/>}/>
      </Routes>
    </BrowserRouter>
);
reportWebVitals();
