import React from 'react'
import { Link } from 'react-router-dom'

export default function FeiraCard({dataFeira}) {
	return (
		<div className="flex flex-col items-center mb-8">
			<span className="text-white text-center">Feira do Seu Zé</span>
			<div className="ml-10 shadow-md max-w-full md:max-w-sm p-2 object-contain">
				<img
					className="object-contain foto-da-feira"
					src={dataFeira.photo_1 ? `http://localhost:3333/files/${dataFeira.photo_1}` : "https://images.unsplash.com/photo-1591034704701-080aa12a09df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"}
					alt="feira"
				/>
				<div className="shadow-md p-2">
					<p className="text-white text-sm">
						{dataFeira.description}
					</p>
					<span className="text-white">{dataFeira.address}</span>
				</div>
				<Link
					to={`/products/${dataFeira.id}`}
					className="bg-yellow-700 hover:bg-yellow-600 text-black font-bold p-2 flex justify-center"
				>
					View
				</Link>
			</div>
		</div>
	)
}
