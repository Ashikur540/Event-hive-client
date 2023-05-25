import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Dashboard/Header';
import Sidebar from '../components/Dashboard/Sidebar';

const DashboardLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <>
            <div className=''>
                {/* <!-- ===== Page Wrapper Start ===== --> */}
                <div className='flex h-screen overflow-hidden'>
                    {/* <!-- ===== Sidebar Start ===== --> */}
                    <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                    {/* <!-- ===== Sidebar End ===== --> */}

                    {/* <!-- ===== Content Area Start ===== --> */}
                    <div className='relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden'>
                        {/* <!-- ===== Header Start ===== --> */}
                        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                        {/* <!-- ===== Header End ===== --> */}

                        {/* <!-- ===== Main Content Start ===== --> */}
                        <main>
                            <div className="px-6 pt-6 2xl:container">
                                <div
                                    className="flex flex-col min-h-[80vh] items-center justify-center rounded-xl border border-dashed border-slate-400 dark:border-gray-600"
                                >
                                    <Outlet />
                                </div>
                            </div>
                        </main>
                        {/* <!-- ===== Main Content End ===== --> */}
                    </div>
                    {/* <!-- ===== Content Area End ===== --> */}
                </div>
                {/* <!-- ===== Page Wrapper End ===== --> */}
            </div>
        </>
    );
};

export default DashboardLayout;