import { useLocation, Navigate } from "react-router-dom";
import { authStoreProvider } from "./ObservableAuthStore";
import { useContext } from "react";
import { observer } from "mobx-react";

const RequireAuth = observer(({ children }) => {
  const location = useLocation();
  const { user } = useContext(authStoreProvider);

  if (!user) {
    return (
      <Navigate to="/login" state={{ from: location }} />
    );
  }

  return children;
});

export default RequireAuth;
