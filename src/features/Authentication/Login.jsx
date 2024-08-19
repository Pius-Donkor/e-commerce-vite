import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useIsAuthenticated } from "../../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setIsAuthenticated } = useIsAuthenticated();

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      toast.success("Login successful!");
      setIsAuthenticated(true);
      navigate(-1); // Redirect to home page or another page
    } else {
      toast.error("Invalid email or password!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100dvh-10rem)] bg-softWhite">
      <div className="bg-charcoal p-8 rounded-lg shadow-lg w-full max-w-md h-full">
        <h2 className="text-3xl font-bold text-softWhite mb-6 text-center">
          Login
        </h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-lg bg-lightGray text-charcoal placeholder-darkGray focus:outline-none focus:ring-2 focus:ring-emeraldGreen transition-all duration-300"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-lg bg-lightGray text-charcoal placeholder-darkGray focus:outline-none focus:ring-2 focus:ring-emeraldGreen transition-all duration-300"
          />
          <button
            onClick={handleLogin}
            className="w-full p-3 rounded-lg bg-emeraldGreen text-softWhite font-bold hover:bg-sunsetOrange transition-all duration-300 shadow-md"
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
}
