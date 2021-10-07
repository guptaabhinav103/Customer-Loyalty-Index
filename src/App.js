import React from "react";
import Contact from "./components/Contact";
import "./app.css";
import Header from "./components/Header";
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Data from "./components/Data";
import Work from "./components/Work";
import Login from "./components/Login";
function App() {
  return (
    <BrowserRouter>
      <div >
        <Header />
      </div>
      <Route
        path="/customers"
        component={Data}
        exact></Route>
      <Route
        path="/contact"
        component={Contact}
        exact></Route>
      <Route
        path="/"
        component={Contact}
        exact></Route>
      <Route
        path="/work"
        component={Work}
        exact></Route>
      <Route
        path="/login"
        component={Login}
        exact></Route>
    </BrowserRouter>
  );
}

export default App;
