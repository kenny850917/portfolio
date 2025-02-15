// React Required
import React, { Component } from "react";
import ReactDOM from "react-dom";

// Create Import File
import "./index.scss";

// Common Layout
// import Layout from "./component/common/App";

// Home layout
// import Demo from './page-demo/Demo';
// import MainDemo from './home/MainDemo';
// import Startup from './home/Startup';
// import Paralax from './home/Paralax';
// import HomePortfolio from './home/HomePortfolio';
// import DigitalAgency from './home/DigitalAgency';
// import CreativeAgency from './home/CreativeAgency';
// import PersonalPortfolio from './home/PersonalPortfolio';
// import Business from './home/Business';
// import StudioAgency from './home/StudioAgency';
// import PortfolioLanding from './home/PortfolioLanding';
// import CreativeLanding from './home/CreativeLanding';
// import HomeParticles from './home/HomeParticles';
// import CreativePortfolio from './home/CreativePortfolio';
// import DesignerPortfolio from './home/DesignerPortfolio';
// import InteriorLanding from './home/Interior';
// import CorporateBusiness from './home/CorporateBusiness';

// Dark Home Layout
// import DarkMainDemo from './dark/MainDemo';
import DarkPortfolioLanding from "./dark/PortfolioLanding";

// Element Layout
// import Service from "./elements/Service";
// import ServiceDetails from "./elements/ServiceDetails";
// import About from "./elements/About";
// import Contact from "./elements/Contact";
// import PortfolioDetails from "./elements/PortfolioDetails";
// import Blog from "./elements/Blog";
// import BlogDetails from "./elements/BlogDetails";
import error404 from "./elements/error404";

// Blocks Layout

// import Team from "./blocks/Team";
// import Counters from "./blocks/Counters";
// import Testimonial from "./blocks/Testimonial";
// import Portfolio from "./blocks/Portfolio";
// import VideoPopup from "./blocks/VideoPopup";
// import Gallery from "./blocks/Gallery";
// import Brand from "./blocks/Brand";
// import ProgressBar from "./blocks/ProgressBar";
// import ContactForm from "./blocks/ContactForm";
// import GoogleMap from "./blocks/GoogleMap";
// import Columns from "./blocks/Columns";
// import PricingTable from "./blocks/PricingTable";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

class Root extends Component {
  render() {
    return (
      <BrowserRouter basename={"/"}>
        <Switch>
          {/* <Route exact path={`${process.env.PUBLIC_URL}/`} component={Demo}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/main-demo`} component={MainDemo}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/dark-main-demo`} component={DarkMainDemo}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/startup`} component={Startup}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/paralax`} component={Paralax}/>

                    <Route exact path={`${process.env.PUBLIC_URL}/digital-agency`} component={DigitalAgency}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/creative-agency`} component={CreativeAgency}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/personal-portfolio`} component={PersonalPortfolio}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/studio-agency`} component={StudioAgency}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/business`} component={Business}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/portfolio-home`} component={HomePortfolio}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/portfolio-landing`} component={PortfolioLanding}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/creative-landing`} component={CreativeLanding}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/home-particles`} component={HomeParticles}/> */}
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/`}
            component={DarkPortfolioLanding}
          />

          <Route path={`${process.env.PUBLIC_URL}/404`} component={error404} />
          <Route component={error404} />
        </Switch>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.register();
