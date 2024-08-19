import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { generateId } from "../../helper";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSignup = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some((user) => user.email === email);

    if (userExists) {
      toast.error("email already exists!");
    } else {
      users.push({ user_id: generateId(), email, password });
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem(
        "currentUser",
        JSON.stringify({ user_id: generateId(), email, password })
      );
      toast.success("Signup successful! You can now log in.");
      navigate(-1);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100dvh-10rem)] bg-softWhite">
      <div className="bg-charcoal p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-softWhite mb-6 text-center">
          Sign Up
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
            onClick={handleSignup}
            className="w-full p-3 rounded-lg bg-emeraldGreen text-softWhite font-bold hover:bg-sunsetOrange transition-all duration-300 shadow-md"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
