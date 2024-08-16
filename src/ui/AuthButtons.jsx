import { useNavigate } from "react-router-dom";

export default function AuthButtons() {
  const navigate = useNavigate();
  return (
    <div className="relative w-[9rem] inline-block  ">
      <button
        onClick={() => navigate("/signup")}
        className="bg-[#0c8038] hover:bg-sunsetOrange transition-colors duration-200 px-3 py-1 rounded-3xl absolute z-10 w-fit"
      >
        Sign-Up
      </button>
      <button
        onClick={() => navigate("/login")}
        className="bg-emeraldGreen hover:bg-sunsetOrange transition-colors duration-200 rounded-3xl px-3 py-1 w-full text-right "
      >
        Login
      </button>
    </div>
  );
}
