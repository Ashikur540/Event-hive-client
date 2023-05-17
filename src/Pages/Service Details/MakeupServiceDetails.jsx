import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMakeupArtist } from '../../Service Operations/service';

const MakeupServiceDetails = () => {
    const [makeupArtist, SetMakeupArtist] = useState({});
    const { name, Makeup_type, pictures, price, Rating, size, _id, contact } = makeupArtist
    const router = useParams()
    const costumeId = router.id
    useEffect(() => {
        window.scrollTo(0, 0);
        getMakeupArtist(costumeId)
            .then(data => {
                console.log(data.data);
                SetMakeupArtist(data.data)
            })
    }, [costumeId])
    return (
        <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 md:py-16 ">
            <section>
                <div class="relative mx-auto max-w-screen-xl px-4 py-8">


                    <div class="grid gap-8 lg:grid-cols-4 lg:items-start">
                        <div class="lg:col-span-3">
                            <div class="relative mt-4">
                                <figure className='overflow-hidden'>
                                    <img
                                        alt={name}
                                        src={pictures && pictures[0]}
                                        class="h-72 w-full rounded-xl object-cover lg:h-[540px] hover:scale-110 duration-300 cursor-pointer"
                                    />
                                </figure>

                                <div
                                    class="absolute bottom-4 left-1/2 inline-flex -translate-x-1/2 items-center rounded-full bg-black/75 px-3 py-1.5 text-white"
                                >
                                    <svg
                                        class="h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                        />
                                    </svg>

                                    <span class="ms-1.5 text-xs"> Hover to zoom </span>
                                </div>
                            </div>

                            <ul class="mt-1 flex gap-1">
                                {
                                    pictures?.map((pic, i) => {
                                        console.log(pic)

                                        return (

                                            <li li key={i} >
                                                <img
                                                    alt={name}
                                                    src={pic}
                                                    class="h-16 w-16 rounded-md object-cover"
                                                />
                                            </li>
                                        )
                                    })
                                }



                            </ul>
                        </div>

                        <div class="lg:sticky lg:top-0">
                            <form class="space-y-4 lg:pt-8">

                                <>
                                    <div>
                                        <h1 class="text-2xl font-bold lg:text-3xl dark:text-snow-white">{name}</h1>

                                        <p class="mt-1 text-sm text-gray-500 font-inter dark:text-snow-white-toned">Makeup Type: {Makeup_type}</p>
                                    </div>
                                </>

                                <div class="rounded border bg-gray-100 p-4">
                                    <p class="text-sm ">
                                        <span class="block dark:text-snow-white-toned"> Rating-❤{Rating}</span>
                                        <span class="block dark:text-snow-white-toned font-inter"> 📞 {contact}. </span>

                                        {/* <a href="" class="mt-1 inline-block underline"> Find out more </a> */}
                                    </p>
                                </div>

                                <div>
                                    <p class="text-xl font-bold font-inter dark:text-snow-white">{price} BDT</p>
                                </div>

                                <button
                                    type="submit"
                                    class="btn-primary"
                                >
                                    Hire now
                                </button>


                            </form>
                        </div>

                        <div class="lg:col-span-3">
                            <div class="prose max-w-none dark:text-snow-white-toned">
                                <p>
                                    built with best quality materials
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section >


        </div >
    )
}

export default MakeupServiceDetails
