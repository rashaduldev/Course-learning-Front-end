import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import HomePage from './Pages/HomePage/HomePage';
import AllCourses from './Pages/Course/Allcource/Allcource';
import Courcedetails from './Pages/Course/Allcource/Courcedetails';
import Billing from './Pages/Billing/Billing';
import Dashboard from './Dashboard/Dashboard';
import DashboardRoot from './Root/DashboardRoot';
import Courses from './Dashboard/Courses';
import Setting from './Dashboard/Setting';
import CourseDetails from './Dashboard/CourseDetails';
import DashProfile from './Dashboard/DashProfile';
import Errorpage from './Pages/Errorpage/Errorpage';
import Support from './Pages/Support/Support';
import GetReport from './Pages/GetReport/GetReport';
import Mylevel from './Dashboard/Mylevel';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Errorpage/>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "billing",
        element: <Billing />,
      },
      {
        path: "all-courses",
        element: <AllCourses />,
      },
      {
        path: "course/:courseId",
        element: <Courcedetails />,
      },
      {
        path: "support",
        element: <Support/>,
      },
      {
        path: "get-report",
        element: <GetReport/>,
      },
    ]
  },
  {
    path: "/dashboard",
    element: <DashboardRoot />,
    errorElement: <div>Error: not found</div>,
    children: [
      {
        path: "/dashboard", 
        element: <Dashboard />,
      },
      {
        path: "/dashboard/courses", 
        element: <Courses />,
      },
      {
        path: "/dashboard/courses/:courseId",
        element: <CourseDetails />,
      }, 
      {
        path: "/dashboard/my-level",
        element: <Mylevel />,
      },
      {
        path: "/dashboard/profile",
        element: <DashProfile/>,
      },
      {
        path: "/dashboard/settings", 
        element: <Setting />,
      }, 
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
);
