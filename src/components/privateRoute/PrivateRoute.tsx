import { useLoginContext } from "../../contexts/LoginContext";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {
  const { isLogin } = useLoginContext();
  return <>{isLogin ? <Outlet /> : <Navigate to="/login" />}</>;
}

export default PrivateRoute;
