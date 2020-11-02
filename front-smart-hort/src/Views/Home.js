import React from 'react'
import tomate from '../assets/tomate.svg'
import boneco from '../assets/boneco.svg'
import { Link } from 'react-router-dom'

export default function Home() {
	return (
		<div className="h-screen flex flex-col justify-center">
			<header className="flex w-full flex-col justify-center items-center h-64">
				<img className="tomatao" src={tomate} alt="tomate" />
				<h1 className="text-5xl mt text-center font-bold text-white">
					Smart Horticuture
				</h1>
			</header>
			<div className="flex mt-24 flex-col justify-end w-full items-end md:justify-center md:items-center">
				<img className="w-24 mr-12" src={boneco} alt="boneco" />
				<Link
					to={`/feiras`}
					className="mr-10 mt-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-4 roundedr"
				>
					Vamos lá
				</Link>
			</div>
		</div>
	)
}
