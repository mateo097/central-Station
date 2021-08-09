import React, { useEffect, useState } from "react";
import "../Styles/free-market-framework.css";
import { Grid } from "@material-ui/core";
import { ProductCard, Input, Navbar, Slider, Title } from "../Components";
import Slide from "../Components/swiper/Swiper";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routers from "../configs/routes";
import PublicRoute from "../configs/public-routes";
import AdminPage from "../Views/Admin/AdminPage"
import HomePage from "./Home/HomePage";

import { Swiper, SwiperSlide } from "swiper/react";

function App() {
 

  return (
    <>
      <Router>
        <Route path="/" exact component={HomePage}/>
        <Route path="/admin"  component={AdminPage}/>
      </Router>
    
    </>
  );
}

export default App;
