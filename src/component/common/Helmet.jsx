import React, { Component } from "react";
import { Helmet } from "react-helmet";

class PageHelmet extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Kenny Ho </title>
          <meta
            name="description"
            content="Personal portfolio showcasing my skills and techniques"
          />
        </Helmet>
      </React.Fragment>
    );
  }
}

export default PageHelmet;
