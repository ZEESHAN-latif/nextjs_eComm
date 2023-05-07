import React from "react";
import Register from "./register";
import { useRouter } from "next/router";
import Login from "./login";
// import { useLocation } from 'react-router-dom'

const Index = () => {
  const router = useRouter();
  return <div>
    {router.asPath === '/register'?
      <Register  />:
      <Login/>
      }</div>;
};

export default Index;
