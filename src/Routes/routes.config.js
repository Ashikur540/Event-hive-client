import { createBrowserRouter } from "react-router-dom"
import DashboardLayout from "../Layout/DashboardLayout"
import Main from "../Layout/Main"
import About from "../Pages/About/About"
import { Blogs } from "../Pages/Blogs/Blogs"
import Contact from "../Pages/Contact/Contact"
import AddCostumes from "../Pages/Dashboard/Add Costumes/AddCostumes"
import AllUsers from "../Pages/Dashboard/All users/AllUsers"
import BecomeMerchant from "../Pages/Dashboard/Become Business owner/BecomeMerchant"
import DashboardHome from "../Pages/Dashboard/DashboardHome"
import MyBookings from "../Pages/Dashboard/My booking/MyBookings"
import CostumeService from "../Pages/Dynamic Specific service/CostumeService"
import EventPhotographerService from "../Pages/Dynamic Specific service/EventPhotographerService"
import MakeupService from "../Pages/Dynamic Specific service/MakeupService"
import VenueService from "../Pages/Dynamic Specific service/VenueService"
import ErrorPage from "../Pages/ErrorPage"
import { Home } from "../Pages/Home"
import { default as CostumeDetails } from "../Pages/Service Details/CostumeDetails"
import MakeupServiceDetails from "../Pages/Service Details/MakeupServiceDetails"
import { Login } from "../Pages/login/Login"
import Signup from "../Pages/signup/Signup"
import PrivateRoute from "./PrivateRoute"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/home',
                element: <Home />,
            },
            {
                path: '/signup',
                element: <Signup />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/services/costume',
                element: <CostumeService />,
            },
            {
                path: '/costumes/:id',
                element: <CostumeDetails />,
            },
            {
                path: '/services/photographers',
                element: <EventPhotographerService />
            },
            {
                path: '/services/makeup',
                element: <MakeupService />,
            },
            {
                path: '/makeup/:id',
                element: <MakeupServiceDetails />,
            },
            {
                path: '/services/venue',
                element: <VenueService />,
            },
            // {
            //     path: '/:id',
            //     element: <ServiceDetails />,
            // },
            {
                path: '/blogs',
                element: <Blogs />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },

        ],

    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '',
                element: <DashboardHome />,

            },
            {
                path: 'become-merchant',
                element: <BecomeMerchant />,

            },
            {
                path: 'add-costumes',
                element: <AddCostumes />,

            },
            {
                path: 'my-bookings',
                element: <MyBookings />,

            },
            {
                path: 'all-users',
                element: <AllUsers />,

            },
            // {
            //     path: 'my-bookings',
            //     element: <PrivateRoute><MyBookings /></PrivateRoute>,

            // },

        ]
    },
])

export default router