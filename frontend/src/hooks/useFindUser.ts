import { useState } from "react";
import { useNavigate } from "react-router";

export const useFindUser = () => {
  const [foundUser, setFoundUser] = useState<boolean | null>(null);
  const [isUserLoading, setIsUserLoading] = useState<boolean | null>(null);
  const [findUserError, setFindUserError] = useState<string | null>(null);
  const navigate = useNavigate();

  const findUser = async (email: string) => {
    setIsUserLoading(true);

    const res = await fetch('/api/user/finduser', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email })
    })
    const json = await res.json();

    if (res.ok) {
      setFoundUser(true);
      setIsUserLoading(false);
    } else {
      setFoundUser(false);
      setIsUserLoading(false);
      setFindUserError(json.error);
      if (res.status !== 400) navigate("/signup");
    }
  }
  return { findUser, isUserLoading, foundUser, findUserError };
};