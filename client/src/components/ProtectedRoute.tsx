import { Navigate, Outlet } from 'react-router-dom';

 
const ProtectedRoute = ({ authenticated }:any) => {

  if (authenticated === false) {
    return <Navigate to="/" />; // or loading indicator/spinner/etc
  }

  return <Outlet />
};
 
export default ProtectedRoute;