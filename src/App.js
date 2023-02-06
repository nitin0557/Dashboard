import "./App.less";
import React ,{useEffect} from "react";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import {
  Analytics,
  Dashboard,
  Financial,
  Monitor,
  Project,
  Reports,
  Stock,
  System,
} from "./pages/Dashboard";
import { Widgets, Widgets1, Widgets2, Widgets3 } from "./pages/Widgets";
import { Card, Cards,Cardsheader } from "./pages/CardList";
import Login from "./components/Login";
import { useSelector, useDispatch } from "react-redux";
import MainContainer from "./components/MainContainer";
import { login } from "./state/action-creators";
import Sidebar from "./components/Sidebar";
import CardsContainer from "./components/Card";






function App() {

  let isAuth = useSelector((state) => state.login.isAuthenticated);
const dispatch = useDispatch();

useEffect(() => {
  const isLoggedIn = localStorage.getItem("login");
  if (isLoggedIn === "1") {
    dispatch(login());
    isAuth = true;
  }
}, []);
  return (
    <>
      <Router>
        <Sidebar/>
        <Routes>
       
          <Route path="/dashboard" exact element={<MainContainer/>} />
          <Route path="/dashboard/analytics" exact element={<MainContainer/>} />
          <Route path="/dashboard/financial" exact element={<MainContainer/>} />
          <Route path="/dashboard/system" exact element={<MainContainer/>} />

          <Route path="/dashboard/stock" exact element={<MainContainer/>} />
          <Route path="/dashboard/monitor" exact element={<MainContainer/>} />
          <Route path="/dashboard/project" exact element={<MainContainer/>} />
          <Route path="/dashboard/reports" exact element={<MainContainer/>} />
          <Route path="/widgets" exact element={<MainContainer/>} />
          <Route path="/widgets/widgets1" exact element={<MainContainer/>} />
          <Route path="/widgets/widgets2" exact element={<MainContainer/>} />
          <Route path="/widgets/widgets3" exact element={<MainContainer/>} />
          <Route path="/cards" exact element={<MainContainer/>} />
          <Route path="/cards/cards" exact element={<MainContainer/>} />
          <Route path="/cards/cards-header" exact element={<MainContainer/>} />
        </Routes>
      </Router>
      <CardsContainer/>
     
    </>
  );
}

export default App;
