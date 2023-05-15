import React from 'react'

const FeaturedServices = () => {
    return (
        <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24 text-center">
            <div className="py-20 px-8 max-w-screen-md mx-auto">
                <h1 className="text-4xl  text-center font-medium mb-6">
                    Streamline Your Event Planning with Our Comprehensive Services
                </h1>
                <p className="text-base font-inter">
                    From Venues to Vendors: Get Everything You Need for Your Next Event Here
                </p>
            </div>
            <div className="-m-1 flex flex-wrap md:-m-2">
                <div className="flex w-full md:w-1/2 flex-wrap">
                    <div className="w-[90%] p-1 md:p-2 ml-auto">
                        <a href="#" className="group relative block bg-black">
                            <img
                                alt="Developer"
                                // src="https://cdn.pixabay.com/photo/2016/11/21/16/02/basket-1846135_960_720.jpg"
                                src="https://cdn.pixabay.com/photo/2017/08/06/20/11/wedding-2595862_960_720.jpg"
                                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                            />

                            <div className="relative p-4 sm:p-6 lg:p-8 ">


                                <p className="text-xl font-bold text-white sm:text-2xl text-gradient">Ceremony Costume</p>

                                <div className="mt-32 sm:mt-48 lg:mt-64">
                                    <div
                                        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                    >
                                        <p className="text-sm text-white">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                                            perferendis hic asperiores quibusdam quidem voluptates doloremque
                                            reiciendis nostrum harum. Repudiandae?
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="w-[70%]  ml-auto mr-2 group relative block bg-black">
                        {/* <a href="#" className=""> */}
                        <img
                            alt="Developer"

                            src="https://cdn.pixabay.com/photo/2016/11/21/16/02/basket-1846135_960_720.jpg"
                            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                        />

                        <div className="relative p-4 sm:p-6 lg:p-8">


                            <p className="text-xl font-bold text-white sm:text-2xl text-gradient">Decoration and Arrangement planning</p>

                            <div className="mt-32 sm:mt-48 lg:mt-64">
                                <div
                                    className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                >
                                    <p className="text-sm text-white">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                                        perferendis hic asperiores quibusdam quidem voluptates doloremque
                                        reiciendis nostrum harum. Repudiandae?
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* </a> */}
                    </div>
                </div>
                <div className="flex  w-full md:w-1/2 flex-wrap">
                    <div className="w-[80%]  group block relative  bg-black mt-8">
                        {/* <a href="#" className=""> */}
                        <img
                            alt="Developer"
                            src="https://cdn.pixabay.com/photo/2014/07/31/22/50/photographer-407068_960_720.jpg"
                            className="absolute  h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                        />

                        <div className="relative p-4 sm:p-6 lg:p-8">


                            <p className="text-xl font-bold text-white sm:text-2xl">Photographer</p>

                            <div className="mt-32 sm:mt-48 lg:mt-64">
                                <div
                                    className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                >
                                    <p className="text-sm text-white">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                                        perferendis hic asperiores quibusdam quidem voluptates doloremque
                                        reiciendis nostrum harum. Repudiandae?
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* </a> */}
                    </div>
                    <div className="w-[90%] relative block group bg-black mt-2">
                        <img
                            alt="Developer"
                            src="https://cdn.pixabay.com/photo/2017/08/08/00/17/events-2609526_960_720.jpg"
                            className="absolute  h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                        />

                        <div className="relative p-4 sm:p-6 lg:p-8">


                            <p className="text-xl font-bold text-white sm:text-2xl">Venue Reservation and food</p>

                            <div className="mt-32 sm:mt-48 lg:mt-64">
                                <div
                                    className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                >
                                    <p className="text-sm text-white">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                                        perferendis hic asperiores quibusdam quidem voluptates doloremque
                                        reiciendis nostrum harum. Repudiandae?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FeaturedServices
