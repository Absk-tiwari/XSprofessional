import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getUser } from "../services/auth";

export function useAuthGuard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    getUser()
      .then((data) => {
        setUser(data); // User is authenticated
        setLoading(false);
      })
      .catch((e) => {
        setUser(null); // Not authenticated
        setLoading(false);
        // console.log(e)
        router.push("/login"); // Redirect to login page
      });
  }, []);

  if(!loading) {
    return { user, loading };
  }
  if(loading) return <p>Loading...</p>
}
