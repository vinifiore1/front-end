import { Navigate } from "react-router-dom";

interface IProps {
  children?: any;
}

export const ProtectedRoute = ({ children }: IProps) => {
  const user = sessionStorage.getItem("token");
  if (!user) {
    return <Navigate to={"/"} />;
  } else {
    return children;
  }
};
