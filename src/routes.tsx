import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./auth";
import Agendamento from "./pages/Agendamento/Agendamento";
import DashBoard from "./pages/DashBoard/DashBoard";
import Login from "./pages/Login/Login";
import RegisterSuccess from "./pages/Register/Register/RegisterSucess";
import RegisterMain from "./pages/Register/RegisterMain";
import Services from "./pages/Services/Services";

const AppRouter = [
  {
    main: <Login />,
    path: "/",
    auth: false,
  },
  {
    main: <RegisterMain />,
    path: "/register",
  },
  {
    main: <DashBoard />,
    path: "/home",
    auth: true,
  },
  {
    main: <RegisterSuccess />,
    path: "/register-success",
  },
  {
    main: <Agendamento />,
    path: "/agendamento",
    auth: true,
  },
  {
    main: <Services />,
    path: "/services",
    auth: true,
  },
];

export const Router = () => {
  return (
    <Routes>
      {AppRouter.map((route, index) => {
        return (
          <>
            <Route
              key={index}
              path={route.path}
              element={
                route.auth ? (
                  <ProtectedRoute>{route.main}</ProtectedRoute>
                ) : (
                  route.main
                )
              }
            />
          </>
        );
      })}
    </Routes>
  );
};
