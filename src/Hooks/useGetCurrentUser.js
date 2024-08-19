import { useState } from "react";

export default function useGetCurrentUser() {
  const [currentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser"))
  );
  return currentUser;
}
