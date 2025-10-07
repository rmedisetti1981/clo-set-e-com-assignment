import React from "react";
import {Header, Content, Footer} from "../../common/barrel"

const PageLayout = ({ children }) => {
  return (
    <div className="page_layout">
      <Header />
      <Content>
        {children}
      </Content>
      <Footer />
    </div>
  );
};

export default PageLayout;
