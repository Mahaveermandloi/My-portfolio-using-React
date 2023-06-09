import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = 'Resume Original.pdf';
    link.setAttribute('download', 'Resume.pdf');
    link.click();
  };

  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: 'https://www.linkedin.com/in/mahaveer-mandloi/',
      style: 'rounded-tr-md',
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: 'https://github.com/Mahaveermandloi',
    },
    {
      id: 3,
      child: (
        <>
          Instagram <FaInstagram size={30} />
        </>
      ),
      href: 'https://www.instagram.com/_mahaveer._/',
    },
    {
      id: 4,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: 'mailto:mahaveermandloi9@gmail.com',
    },
    {
      id: 5,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: '#',
      style: 'rounded-br-md',
      onClick: handleResumeDownload,
    },
  ];

  return (
    <>
      <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
        <ul>
          {links.map(({ id, child, href, style, onClick }) => {
            return (
              <li
                key={id}
                className={
                  'flex justify-between items-center w-40 h-14 px-4  ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 ' +
                  style
                }
              >
                <a
                  href={href}
                  className="flex justify-between items-center w-full text-white"
                  onClick={onClick}
                  target="_blank"
                  rel="noreferrer"
                >
                  {child}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default SocialLinks;
