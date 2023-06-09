import React from 'react';
import html from "../images/html.jpg";
import css from "../images/css.jpg";
import js from "../images/js.jpg";
import python from "../images/python.jpg";
import java from "../images/java.png"
import iot from "../images/iot.png";
import cpp from "../images/cpp.png";
import nodejs from "../images/nodejs.png";

import react from "../images/react.png"
import git from "../images/git.png";
import tailwind from "../images/tailwind.png";
import bootstrap from "../images/bootstrap.png";

const Experience = () => {
    const tech = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500',
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500',
        },

        {
            id: 3,
            src: js,
            title: 'JS',
            style: 'shadow-yellow-500',
        },
        {
            id: 4,
            src: git,
            title: 'Git',
            style: 'shadow-red-500',
        },
        
        {
            id: 5,
            src: python,
            title: 'Python',
            style: 'shadow-yellow-500',
        },
        {
            id: 6,
            src: java,
            title: 'Java',
            style: 'shadow-orange-500',
        },

        
        {
            id: 7,
            src: cpp,
            title: 'C++',
            style: 'shadow-blue-500',
        },
        {
            id: 8,
            src: nodejs,
            title: 'Node js',
            style: 'shadow-green-500',
        },
        {
            id: 9,
            src: react,
            title: 'React js',
            style: 'shadow-cyan-500',
        },
        {
            id: 10,
            src: iot,
            title: 'IOT',
            style: 'shadow-yellow-500',
        },
        {
            id: 11,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-white',
        },
        {
            id: 12,
            src: bootstrap,
            title: 'Bootstrap',
            style: 'shadow-purple-500',
        },
        
    ];

    return (
        <div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-gray-800">Experience & Skills</p>
                    <p className="py-6">These are the technologies I've worked with</p>
                </div>
                {/* <div className="w-full   grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0"> */}

                <div className="w-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-8 text-center py-8 px-12 sm:px-0">


                    {tech.map(({ id, src, title, style }) => (
                        <div key={id} className={`shadow-md hover:scale-105 bg-white  duration-500 py-4 rounded-lg ${style} `}   >

                            <img src={src} alt="" className="w-20 mx-auto" />

                            <p className="mt-4 text-black">{title}</p>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
