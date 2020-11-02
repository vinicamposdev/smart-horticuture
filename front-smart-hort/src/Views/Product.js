import React from 'react'
import Fruit from '../Components/Fruit'

export default function ProductCard() {
	return (
		<div>
			<h1 className="text-white text-center text-4xl mb-6">Feira do seu Zé</h1>
			<ul>
				<Fruit />
				<Fruit />
				<Fruit />
				<Fruit />
				<Fruit />
			</ul>
			<div className="w-11/12 m-auto p-4 bg-opacity-25 bg-white flex justify-between mb-2">
				<span className="text-sm ml-4 text-white">Preço Total</span>
				<span className="text-sm ml-16 text-white">R$: 10,00</span>
			</div>
		</div>
	)
}
