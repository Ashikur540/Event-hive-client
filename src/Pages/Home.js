import React from 'react'
import About from '../components/About/About'
import Banner from '../components/Banner/Banner'
import { Brands } from '../components/Brands/Brands'
import { Faq } from '../components/Faq/Faq'
import FeaturedServices from '../components/Featured services/FeaturedServices'
import { Pricing } from '../components/Pricing/Pricing'
import Testimonials from '../components/Testimonials/Testimonials'




export const Home = () => {
    return (
        <div className="min-h-screen max-w-screen-2xl mx-auto bg-white-toned dark:bg-gradient-to-r from-[#0C030A] via-slate-950 to-[#2E0B28]">
            <Banner />
            <Brands />
            <About />
            <FeaturedServices />
            <Testimonials />
            <Pricing />
            <Faq />
        </div>
    )
}
