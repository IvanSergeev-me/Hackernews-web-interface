import { Routes, Route } from "react-router-dom";
import type { IRoute } from "./routes";

interface AppRouterProps {
  routes: IRoute[];
}

const AppRouter = ({ routes }: AppRouterProps) => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route path={route.path} element={<route.element />} key={route.path} />
      ))}
    </Routes>
  );
};

export default AppRouter;
