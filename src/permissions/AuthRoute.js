import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import AuthVerify from "../hoc/AuthVerify";

export const AuthRoute = ({ session }) => ( !session ? <Outlet /> : <Navigate to="/home" /> );

export default AuthVerify(AuthRoute);