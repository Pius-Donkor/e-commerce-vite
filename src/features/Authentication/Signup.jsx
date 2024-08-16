import { useState } from "react";
import toast from "react-hot-toast";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some((user) => user.username === username);

    if (userExists) {
      toast.error("Username already exists!");
    } else {
      users.push({ username, password });
      localStorage.setItem("users", JSON.stringify(users));
      toast.success("Signup successful! You can now log in.");
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
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
