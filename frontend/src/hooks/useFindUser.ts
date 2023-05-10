import { useState } from "react";
import { useNavigate } from "react-router";

export const useFindUser = () => {
  const [foundUser, setFoundUser] = useState<boolean | null>(null);
  const [isUserLoading, setIsUserLoading] = useState<boolean | null>(null);
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

    if (res.ok) {
      setFoundUser(true);
      setIsUserLoading(false);
    } else {
      setFoundUser(false);
      setIsUserLoading(false);
      navigate("/signup");
    }
  }
  return { findUser, isUserLoading, foundUser };
};