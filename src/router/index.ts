import React, { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import {PATH} from "@/constants/paths"
import {useAppDispatch, useAppSelector} from "@/hooks";
const HomePage = lazy(() => import("@/views/home")) 
const LoginPage = lazy(() => import("@/views/login"))
const EmployeePage = lazy(() => import("@/views/employee"))

const router = createBrowserRouter([{
  path: PATH.HOME,
  Component: HomePage,
  children: [
    {
      path: "employee",
      Component: EmployeePage
    }
  ],
  // beforeEnter: (to, from, next) => {
  //   // ...
  //   checkLogin(to, from, next);
  // }
  },
  {
    path: "/login",
    Component: LoginPage
  }
])

export default router;