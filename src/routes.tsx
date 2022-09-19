import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./auth";
import Homepage from "./pages/HomePage/Homepage";
import Login from "./pages/Login/Login";
import RegisterSuccess from "./pages/Register/Register/RegisterSucess";
import RegisterMain from "./pages/Register/RegisterMain";

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
    main: <Homepage />,
    path: "/home",
    auth: true,
  },
  {
    main: <RegisterSuccess />,
    path: "/register-success",
  },
];

export const Router = () => {
  return (
    <Routes>
      {AppRouter.map((route, index) => (
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
      ))}
    </Routes>
  );
};
