import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import AuthVerify from "../hoc/AuthVerify";

export const ProtectedRoute = ({ session }) => ( session ? <Outlet /> : <Navigate to="/auth" /> );

export default AuthVerify(ProtectedRoute);

