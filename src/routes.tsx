import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./auth";
import Login from "./pages/Login/Login";
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
    main: <div>TESTE</div>,
    path: "/teste-auth",
    auth: true,
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
