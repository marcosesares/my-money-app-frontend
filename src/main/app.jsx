import "../common/template/dependencies";
import React from "react";
import { HashRouter } from "react-router-dom";

import Header from "../common/template/header";
import SideBar from "../common/template/sideBar";
import Footer from "../common/template/footer";
import Messages from "../common/messages/messages";
import MainRoutes from "./mainRoutes";

const App = (props) => (
  <HashRouter>
    <div className="wrapper">
      <Header />
      <SideBar />
      <MainRoutes></MainRoutes>
      <Footer />
      <Messages />
    </div>
  </HashRouter>
);

export default App;
