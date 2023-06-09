import React from 'react'

const Contact = () => {
    return (
        <>
            {/* <div  >

                <div '>

                    <div>
                        <p className=''>
                            Contact
                        </p>
                        <p >Fill and Submit the form to get in touch with me !!! </p>
                    </div>

                </div>

                <p></p>
            </div >
             */}


            <div name="contact" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>

                <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>

                    <div className='pb-8'>
                        <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>

                        <p className='py-6'>Fill and Submit the form to get in touch with me !!! </p>

                    </div>

                    <div className='flex justify-center items-center '>

                        <form action="https://getform.io/f/2af5a173-4e32-4ba6-a274-c125659242c4" method='POST' className='flex flex-col w-full md:w-1/2'>

                            <input type="text" name="name" placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus-outline-none ' />

                            <input type="text" name="email" placeholder='Enter your email' className='p-2 bg-transparent border-2 rounded-md text-white focus-outline-none my-4' />

                            <textarea name="message" rows="5" placeholder='Enter your message' className='p-2 bg-transparent border-2 rounded-md text-white focus-outline-none'>
                            </textarea>

                            <button className=' text-white  w-fit px-6 py-3  my-8
                            mx-auto  flex item-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 duration-500 '>
                                Let's talk
                            </button>
                        </form>
                    </div >
                </div >
            </div >


        </>
    );

}

export default Contact;

