import { createBrowserRouter } from "react-router-dom"
import Main from "../Layout/Main"
import About from "../Pages/About/About"
import { Blogs } from "../Pages/Blogs/Blogs"
import Contact from "../Pages/Contact/Contact"
import CostumeService from "../Pages/Dynamic Specific service/CostumeService"
import EventPhotographerService from "../Pages/Dynamic Specific service/EventPhotographerService"
import MakeupService from "../Pages/Dynamic Specific service/MakeupService"
import VenueService from "../Pages/Dynamic Specific service/VenueService"
import ErrorPage from "../Pages/ErrorPage"
import { Home } from "../Pages/Home"
import { default as CostumeDetails, default as ServiceDetails } from "../Pages/Service Details/CostumeDetails"
import MakeupServiceDetails from "../Pages/Service Details/MakeupServiceDetails"
import { Login } from "../Pages/login/Login"
import Signup from "../Pages/signup/Signup"

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
            {
                path: '/:id',
                element: <ServiceDetails />,
            },
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
        // element: <><DashboardLayout></DashboardLayout></>,
        children: [
            // {
            //     path: '',
            //     element: <Welcome />,

            // },
            // {
            //     path: 'my-bookings',
            //     element: <PrivateRoute><MyBookings /></PrivateRoute>,

            // },

        ]
    },
])

export default router