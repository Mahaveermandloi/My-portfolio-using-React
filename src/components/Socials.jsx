import React from 'react';
import "react-icons";
import instagram from "../images/instagram.png";
import linkedin from "../images/linkedin.jpeg";
import github from "../images/github.png";
import whatsapp from "../images/whatsapp.jpeg";



const Socials = () => {

    const socials = [
        {
            id: 1,
            href: 'https://www.instagram.com/_mahaveer._/',
            src: instagram
        },
        
        {
            id: 2,
            href: 'https://www.linkedin.com/in/mahaveer-mandloi/',
            src : linkedin
        },
        {
            id: 3,
            href: 'https://github.com/Mahaveermandloi',
            src: github
        },
        {
            id: 4,
            href: 'https://wa.me/+919753315419?text=Hi%2C%20I%20visited%20your%20website',
            src: whatsapp
        },
    ]
    return (
        <>

            <div
                name="about"
                className="w-full  bg-gradient-to-b from-gray-800 to-black text-white"
            >
                <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                    <div className="pb-8">
                        <footer className="relative bg-blueGray-200   ">


                            <div className="container mx-auto px-4">
                                <div className="flex flex-wrap text-left lg:text-left">
                                    <div className="w-full lg:w-6/12 px-4">
                                        <h4 className=" text-3xl fonat-semibold text-blueGray-700">Let's keep in touch!</h4>
                                        <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                                            Find me on any of these platforms
                                        </h5>
                                        <div className="mt-6 lg:mb-0 mb-6">

                                            {socials.map(({ id, src, href }) => {
                                                return (<>
                                                    <button key={id} className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 "   >

                                                        <a href={href} target='_blank'>
                                                            <img src={src} alt="" />
                                                        </a>

                                                    </button>

                                                </>)
                                            })}

                                        </div>
                                    </div>
                                </div>

                                <hr className="my-6 border-blueGray-300" />
                                <div className="flex flex-wrap items-center md:justify-between justify-center">
                                    <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                                        <div className="text-sm text-blueGray-500 font-semibold py-1">
                                            Copyright © <span id="get-current-year">2023  Mahaveer Mandloi</span>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </footer>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Socials