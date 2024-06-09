import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import SLUGS from 'resources/slugs';
import Login from './sesion/login';
function PublicRoutes() {
    return (
        <Routes>
            <Route path={SLUGS.login} element={<Login/>} />
            <Route path={SLUGS.signup} element={<div>signup</div>} />
            <Route path={SLUGS.forgotPassword} element={<div>forgotPassword</div>} />
            <Route path="*" element={<Navigate to={SLUGS.login} />} />
        </Routes>
    );
}

export default PublicRoutes;
