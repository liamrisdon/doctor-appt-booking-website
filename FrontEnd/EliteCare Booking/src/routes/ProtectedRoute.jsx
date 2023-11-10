import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { authContext } from "../context/AuthContext.jsx";

// need to come back and work on this, need to add something in addition to token? to get it to redirect (token can be null and it still does not redirect to login)
const ProtectedRoute = ({ children }) => {
    const { token } = useContext(authContext);

    // need some additional val

    const accessibleRoute = token ? children : <Navigate to="/login" replace={true} />;

    return accessibleRoute;
}

export default ProtectedRoute;