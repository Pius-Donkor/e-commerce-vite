/* eslint-disable react/prop-types */
import Button from "./Button";
import { useNavigate } from "react-router-dom";

export default function HomeBack({
  buttonColor = "green",
  textColor = "darkGray",
}) {
  const navigate = useNavigate();
  return (
    <div className="flex gap-4">
      <Button
        textColor={textColor}
        type={buttonColor}
        onClick={() => navigate("/")}
      >
        Home
      </Button>
      <Button
        textColor={textColor}
        type={buttonColor}
        onClick={() => navigate(-1)}
      >
        Back
      </Button>
    </div>
  );
}
