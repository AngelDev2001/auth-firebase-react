import { useContext } from "react";
import { context } from "../context/AuthContext";

export function Home() {
  const authUser = useContext(context);

  console.log(authUser);
  

  return <h1>Home</h1>;
}
