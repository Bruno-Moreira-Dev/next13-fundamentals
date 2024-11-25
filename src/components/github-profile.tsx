"use client";

import { useState, useEffect } from "react";

export function GithubProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(
        "https://api.github.com/users/Bruno-Moreira-Dev"
      );
      const userData = await response.json();
      setUser(userData);
    };
    fetchUser();
  }, []);

  if (!user) {
    return <div>Carregando...</div>;
  }

  return <pre>{JSON.stringify(user, null, 2)}</pre>;
}
