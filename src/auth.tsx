import { Navigate } from "react-router-dom";

export const ProtectedRoute = (children: any) => {
  const user = sessionStorage.getItem("token");
  console.log(user);
  if (!user) {
    return <Navigate to={"/"} />;
  }
  return children;
};
