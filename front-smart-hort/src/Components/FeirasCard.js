import React from 'react'
import { Link } from 'react-router-dom'

export default function FeiraCard() {
	return (
		<div className="flex flex-col items-center mb-8">
			<span className="text-white text-center">Feira do Seu Zé</span>
			<div className="ml-10 shadow-md max-w-full md:max-w-sm p-2 object-contain">
				<img
					className="object-contain w-full"
					src="https://images.unsplash.com/photo-1591034704701-080aa12a09df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
					alt=""
				/>
				<div className="shadow-md p-2">
					<p className="text-white text-sm">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, ullam eum unde
						quasi possimus eligendi itaque vero modi nobis labore!
					</p>
				</div>
				<Link
					to={`/products`}
					className="bg-yellow-700 hover:bg-yellow-600 text-black font-bold p-2 flex justify-center"
				>
					View
				</Link>
			</div>
		</div>
	)
}
