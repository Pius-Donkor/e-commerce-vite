import toast from "react-hot-toast";
import { useHistory } from "react-router-dom";

const LogoutButton = () => {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    toast.success("Logged out successfully!");
    history.push("/login"); // Redirect to login page
  };

  return <button onClick={handleLogout}>Log Out</button>;
};

export default LogoutButton;
