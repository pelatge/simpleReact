import { hot } from 'react-hot-loader/root';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect
} from "react-router-dom";
import {Home,Blogs,About,ReduxView,ViewApi} from './Pages';

function App(){
   return (
      <>
      <Router>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/blogs" element={<Blogs/>}/>
      <Route path="/reduxview" element={<ReduxView />}/>
      <Route path="/viewapi" element={<ViewApi />}/>
      </Routes>
      </Router>
      </>
    );
  
}

export default hot(App);
