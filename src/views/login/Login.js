import React from "react";
import Navbar from "../../components/navbar/Navbar";

const Login = ({ match }) => {
  let { path, url, isExact } = match;
  return (
    <div>
      <Navbar path={path} url={url} isExact={isExact} />
      Welcome to login Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
      ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
      ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
      ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
    </div>
  );
};

export default Login;
