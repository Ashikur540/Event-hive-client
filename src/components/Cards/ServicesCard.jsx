import React from 'react'

const ServicesCard = ({ width, data, alignment }) => {
    // console.log(width, data)
    return (
        <>
            <div class={`group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 w-[${width}] ${alignment}`}>

                <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={data?.img} alt="" />

                <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                    <h1 class="dark:text-snow-white text-3xl font-bold text-white ">{data?.name}</h1>
                    <p class="mb-3 text-md italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        {data?.desc}</p>
                    <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
                </div>
            </div>
        </>
    )
}

export default ServicesCard










