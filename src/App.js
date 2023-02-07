import "./App.less";
import React, { useEffect } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import MainContainer from "./components/MainContainer";
import { login } from "./state/action-creators";
import Sidebar from "./components/Sidebar";
import Login from "./components/Login";
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
        <Routes>
          <Route path="/"  element={<Login />} />
          <Route path="/maincontainer"  element={<MainContainer />} />


          <Route path="/dashboard"  element={<MainContainer />} />
          <Route
            path="/dashboard/analytics"
            
            element={<MainContainer />}
          />
          <Route
            path="/dashboard/financial"
            
            element={<MainContainer />}
          />
          <Route path="/dashboard/system"  element={<MainContainer />} />
          <Route path="/dashboard/stock"  element={<MainContainer />} />
          <Route path="/dashboard/monitor"  element={<MainContainer />} />
          <Route path="/dashboard/project"  element={<MainContainer />} />
          <Route path="/dashboard/reports"  element={<MainContainer />} />
          <Route path="/widgets"  element={<MainContainer />} />
          <Route path="/widgets/widgets1"  element={<MainContainer />} />
          <Route path="/widgets/widgets2"  element={<MainContainer />} />
          <Route path="/widgets/widgets3"  element={<MainContainer />} />
          <Route path="/cards"  element={<MainContainer />} />
          <Route path="/cards/cards"  element={<MainContainer />} />
          <Route path="/cards/cards-header"  element={<MainContainer />} />
        </Routes>
      </Router>
      {/* <Sidebar/> */}
      
    </>
  );
}

export default App;
