import React, { useEffect, useState } from 'react'
import pimentao from '../assets/pimentao.svg'
import brocolis from '../assets/brocolis.svg'
import cesta from '../assets/cesta.svg'

export default function ProductCard() {
	const [itemQuantity1, setItemQuantity1] = useState(0)
	const [itemQuantity2, setItemQuantity2] = useState(0)
	const [precoTotal, setPrecoTotal] = useState(0)

	useEffect(() => {
    (async function getRepositories() {
      setPrecoTotal(itemQuantity1 * 2 + itemQuantity2 * 5)
    })();
  },[itemQuantity1,itemQuantity2]);

	function handleItemPrice1(event) {
		const quantidade = event.target.value
		setItemQuantity1(quantidade)
	}
	function handleItemPrice2(event) {
		const quantidade = event.target.value
		setItemQuantity2(quantidade)
	}

	return (
		<div>
			<h1 className="text-white text-center text-4xl mb-6">Feira do seu Zé</h1>
			<ul>
				<li>
					<div className="w-11/12 m-auto p-4 bg-opacity-25 bg-white flex flex-col mb-2">
						<div className="flex items-center justify-between">
							<div className="flex items-center">
								<img className="fruta-carrinho" src={pimentao} alt="" />
								<p className="ml-4 text-white">Pimentão</p>
							</div>
							<div className="flex items-center">
								<img className="fruta-carrinho" src={cesta} alt="" />
								<span onClick={()=>setItemQuantity1(itemQuantity1 + 1)} className="cursor-pointer text-white text-xl m-4"> + </span>
								<span
									onChange={handleItemPrice1}
									className="text-white text-xl m-4"
								>
									{itemQuantity1}
								</span>
								<span onClick={()=>{
									if (itemQuantity1){
										setItemQuantity1(itemQuantity1 - 1)
									}
								}}className="cursor-pointer text-white text-xl m-4"> - </span>
							</div>
						</div>
						<span className="text-sm ml-16 text-white">Preço: R$: 2,00</span>
					</div>
				</li>
				<li>
					<div className="w-11/12 m-auto p-4 bg-opacity-25 bg-white flex flex-col mb-2">
						<div className="flex items-center justify-between">
							<div className="flex items-center">
								<img className="fruta-carrinho" src={brocolis} alt="" />
								<p className="ml-4 text-white">Brocolis</p>
							</div>
							<div className="flex items-center">
								<img className="fruta-carrinho" src={cesta} alt="" />
								<span onClick={()=>setItemQuantity2(itemQuantity2 + 1)} className="cursor-pointer text-white text-xl m-4"> + </span>
								<span
									onChange={handleItemPrice2}
									className="text-white text-xl m-4"
								>
									{itemQuantity2}
								</span>
								<span onClick={()=>{
									if (itemQuantity2){
										setItemQuantity2(itemQuantity2 - 1)
									}
								}}className="cursor-pointer text-white text-xl m-4"> - </span>
							</div>
						</div>
						<span className="text-sm ml-16 text-white">Preço: R$: 5,00</span>
					</div>
				</li>
			</ul>
			<div className="w-11/12 m-auto p-4 bg-opacity-25 bg-white flex justify-between mb-2">
				<span className="text-sm ml-4 text-white">Preço Total</span>
				<span className="text-sm ml-16 text-white">R$: {precoTotal},00</span>
			</div>
		</div>
	)
}
