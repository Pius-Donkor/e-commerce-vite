import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function Button({
  children,
  type = "green",
  role = "button",
  link = "/",
  textColor = "white",
  onClick = () => {},
  disabled = false,
}) {
  const textColors = {
    white: "text-softWhite",
    lightDark: "text-lightGray",
    dark: "text-darkGray",
  };
  const styles = {
    orange:
      "py-1 px-4 bg-sunsetOrange hover:bg-emeraldGreen transition-colors duration-300  rounded-3xl border-none " +
      textColors[textColor],
    green:
      "py-1 px-4 bg-emeraldGreen hover:bg-sunsetOrange transition-colors duration-300  rounded-3xl border-none " +
      textColors[textColor],
    cartIncDec:
      "py-2 px-3 bg-emeraldGreen hover:bg-sunsetOrange transition-colors duration-300  rounded-full border-none" +
      textColors[textColor],
    submit:
      "block w-full mt-4 bg-emeraldGreen hover:bg-sunsetOrange text-white text-center py-2 rounded-md" +
      textColors[textColor],
  };
  return role === "button" ? (
    type === "submit" ? (
      <button
        disabled={disabled}
        onClick={onClick}
        type={type}
        className={`${styles[type]}`}
      >
        {children}
      </button>
    ) : (
      <button
        disabled={disabled}
        onClick={onClick}
        className={`${styles[type]}`}
      >
        {children}
      </button>
    )
  ) : (
    <Link to={link} className={`${styles[type]}`}>
      {children}
    </Link>
  );
}
