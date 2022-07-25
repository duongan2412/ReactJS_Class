import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import UserManagement from './Components/BaiTapQuanLyNguoiDung/UserManagement';
import BaiTapThuDo from './Components/Redux/BaiTapThuDo/BaiTapThuDo';
import AdminLayout from './Layouts/AdminLayout';
import HomeLayout from './Layouts/HomeLayout';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Hooks from './Pages/Hooks/Hooks';
import Login from './Pages/Login/Login';
import MovieDetail from './Pages/MovieDetail/MovieDetail';
import PagesNotFound from './Pages/PagesNotFound/PagesNotFound';

export default function Router() {
    const routing = useRoutes([
        {
            path: '/',
            element: <HomeLayout />,
            children: [
                {
                    path: '/',
                    element: <Navigate to='/home' />
                },
                {
                    path: '/home',
                    element: <Home />
                },
                {
                    path: '/about',
                    element: <About />
                },
                {
                    path: '/movies-detail/:id',
                    element: <MovieDetail />
                },
                {
                    path: '*',
                    element: <PagesNotFound />
                },
                {
                    path: '/login',
                    element: <Login />
                },
                {
                    path: '/hooks',
                    element: <Hooks />
                },
            ]
        },
        {
            path: '/admin',
            element: <AdminLayout />,
            children: [
                {
                    path: '/admin',
                    element: <Navigate to="/admin/user-management" />
                },
                {
                    path: '/admin/user-management',
                    element: <UserManagement />
                },
                {
                    path: '/admin/clothes-management',
                    element: <BaiTapThuDo />
                }
            ]
        }
    ]);

    return routing
}
