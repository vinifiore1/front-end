import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import RegisterMain from "./pages/Register/RegisterMain";

const AppRouter = [
  {
    main: <Login />,
    exact: true,
    path: "/",
  },
  {
    main: <RegisterMain />,
    path: "/register",
  },
];

export const Router = () => {
  return (
    <Routes>
      {AppRouter.map((route, index) => (
        <Route key={index} path={route.path} element={route.main} />
      ))}
    </Routes>
  );
};
