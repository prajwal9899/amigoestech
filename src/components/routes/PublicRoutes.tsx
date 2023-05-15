import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";


interface IPublicRoutesProps {
  children?: ReactNode
}

const PublicRoutes = ({ children }: IPublicRoutesProps) => {
  if (localStorage.getItem("token")) {
    return (
      <><Navigate to={"/"} /></>
    )
  } else {
    return (
      <>children</>
    );
  }
};

export default PublicRoutes;
