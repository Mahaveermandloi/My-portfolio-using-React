// import React from 'react'

// const About = () => {
//     return (
//         <>

//             <div name='about' className='w-full bg-gradient-to-b from-gray-800 to-black text-white'>

//                 <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
//                     <div className='pb-8 mt-20'>
//                         <p className='text-4xl font-bold inline border-b-4 border-gray-500'> About</p>

//                     </div>

//                     <p className='text-xl mt-20 '>
//                         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae reiciendis ratione quisquam expedita perspiciatis quis exercitationem labore impedit, dolorum ad nesciunt corrupti explicabo ipsa, omnis esse nisi laboriosam! Cupiditate consequuntur adipisci reprehenderit est animi illum error enim id debitis eligendi.
//                     </p>

//                     <br />

//                     <p className='text-xl'>
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quisquam laudantium sint fugit saepe inventore similique dolorum consequuntur ullam. Temporibus harum expedita hic aliquam eveniet esse debitis delectus inventore optio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis maxime exercitationem aperiam ab amet aspernatur atque nihil quod officiis consectetur?
//                     </p>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default About


import React from "react";

const About = () => {
    return (
        <div
            name="about"
            className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        About
                    </p>
                </div>

                <p className="text-xl mt-20">
                    Read it with feel !!!
                    My name is Mahaveer Mandloi. I am a young dynamic and enthusiastic individual currently pursuing B.Tech in Computer Science. I am a learner and passionate about exploring new opportunities in the tech field. I am known for strong work ethic and attention to detail.
                    I am a team player.
                </p>

                <br />

                <p className="text-xl">

                    I bring a strong foundation in computer science and programming languages like C++, Python, Java, and front-end development including HTML, CSS, and JavaScript.

                    In my personal life, I appreciate quality things and take pleasure in celebrating even the smallest achievements.

                    I am excited to connect with like-minded professionals and learn from their experiences!
                </p>
            </div>
        </div>
    );
};

export default About;