import React from 'react';
import CDBMS from "../images/CDBMS.jpg";
import SSLS from "../images/SSLS.jpg";
import Cyberry from "../images/Cyberry.jpg";

const Project = () => {
	const portfolios = [
		{
			id: 1,
			src: CDBMS,
			href: 'https://github.com/Mahaveermandloi/Criminal-Database-Management-System'
		},
		{
			id: 2,
			src: SSLS,
			href: 'https://github.com/Mahaveermandloi/Smart-Street-Light-System'
		},
		{
			id: 2,
			src: Cyberry,
			href: 'https://github.com/Mahaveermandloi/Cyberry'
		},

	];



	return (
		<div name="project" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
			<div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
				<div className="pb-8 mt-16">
					<p className="text-4xl font-bold inline border-b-4 border-gray-500">Projects</p>
					<p className="py-6">Check out some of my work here</p>
				</div>

				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
					{portfolios.map(({ id, src, href }) => (
						<div key={id} className="shadow-md shadow-gray-600 rounded-lg">
							<img src={src} alt="" className="rounded-md duration-200 hover:scale-105" />

							<div className="flex items-center justify-center">

								<a
									href={href}
									target="_blank"
									rel="noreferrer"
								>
									<button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-2xl">Code</button>
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Project;


