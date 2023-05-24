import React from 'react'
import { FiUsers } from 'react-icons/fi'
import { MdOutlineBookmarkAdd } from 'react-icons/md'
import { NavLink } from 'react-router-dom'

const AdminMenus = () => {
    return (
        <>

            <li>
                <NavLink
                    to="my-bookings"
                    aria-label="become merchant"
                    className={({ isActive }) => `bg-gradient-to-r text-[14px]  relative flex items-center  space-x-6 rounded-md  px-4 py-3 font-inter  ${isActive ? 'from-sky-600 to-cyan-400 text-white ' : ' bg-snow-white-toned text-slate-900'} `}
                >
                    <MdOutlineBookmarkAdd size={24} />
                    <span className="-mr-1 font-medium">My Bookings</span>
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="all-users"
                    aria-label="all-users"
                    className={({ isActive }) => `bg-gradient-to-r text-[14px]  relative flex items-center  space-x-6 rounded-md  px-4 py-3 font-inter  ${isActive ? 'from-sky-600 to-cyan-400 text-white ' : ' bg-snow-white-toned text-slate-900'} `}
                >
                    <FiUsers size={24} />
                    <span className="-mr-1 font-medium">All users</span>
                </NavLink>
            </li>
        </>
    )
}

export default AdminMenus
