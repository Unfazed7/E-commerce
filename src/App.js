import React from 'react';
import './App.css';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import Layout from "./components/layout";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
function App() {
  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home />}/>
        <Route path="about" element={<About />}/>
        <Route path="contact" element={<Contact />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
  );
}
/*
Dont forget to add header components
 <NavLink to "/"> Home </NavLink>
                  <NavLink to ""> Our Stores </NavLink>
                  <NavLink to ""> Blogs </NavLink>
                  <NavLink to ""> Contact </NavLink>
*/
export default App;
