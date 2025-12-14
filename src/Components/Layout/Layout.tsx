import React from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import style from "./Layout.module.scss";

const Layout: React.FunctionComponent = () => {
  return (
    <div className={style.layout}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Layout;
