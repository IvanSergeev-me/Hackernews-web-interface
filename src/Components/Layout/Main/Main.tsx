import React from "react";
import AppRouter from "../../Router/AppRouter";
import { publicRoutes } from "../../Router/routes";

const Main: React.FunctionComponent = () => {
  const routes = publicRoutes;
  return (
    <main>
      <AppRouter routes={routes} />
    </main>
  );
};

export default Main;
