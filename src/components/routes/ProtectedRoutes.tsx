import React, { ReactNode, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { hideLoading, showLoading } from '../../redux/features/alertSlice'
import axios from "axios";
// import { setUser } from "../redux/features/userSlice";


interface IProtectedRoutesProps {
  children?: ReactNode
}

const ProtectedRoutes = ({ children }: IProtectedRoutesProps) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: any) => state.user);

  const getUser = async () => {
    try {
      dispatch(showLoading);
      const res = await axios.post(
        "http://localhost:8000/api/v1/user/getUserData",
        { token: localStorage.getItem("token") },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )

      dispatch(hideLoading());
      console.log(res, "Protected");


      // if (res.success === true) {
      //   dispatch(setUser(res.data.data));
      // } else {
      //   <Navigate to={"/login"} />;
      // }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
    }
  };

  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, [user, getUser]);

  if (localStorage.getItem("token")) {
    return children
  } else {
    return <Navigate to={"/login"} />

  }
};

export default ProtectedRoutes;
