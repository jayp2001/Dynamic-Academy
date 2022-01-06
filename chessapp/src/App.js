import logo from "./logo.svg";
import "./App.css";
// import { Route, Router } from "react-router-dom";
import * as ROUTES from "./Constants/RouteC.js";
import MainPage from "./Pages/Mainpage/mainPage";
import Login from "./Pages/Login/login";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOMEPAGE} element={<MainPage />} />
          <Route path={ROUTES.LOGIN} element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
