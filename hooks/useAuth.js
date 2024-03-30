import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";

export default function useAuth() {
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      console.warn("pegar usuario: ", user);
      if (user) {
        setUser(user);
        setUserName(user.displayName);
      } else {
        setUser(null);
        setUserName(null);
      }
    });
    return unsub;
  }, []);

  return { user, userName };
}
