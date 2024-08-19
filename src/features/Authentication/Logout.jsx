import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import { useIsAuthenticated } from "../../context/AuthContext";

const LogoutButton = () => {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useIsAuthenticated();

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("currentUser");
    toast.success("Logged out successfully!");
    navigate("/"); // Redirect to login page
  };

  return <Button onClick={handleLogout}>Log Out</Button>;
};

export default LogoutButton;
