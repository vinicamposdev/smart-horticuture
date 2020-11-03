import React, { useContext, useEffect, useState } from 'react'
import pimentao from '../assets/pimentao.svg'
import brocolis from '../assets/brocolis.svg'
import tomate from '../assets/tomate.svg'
import beringela from '../assets/beringela.svg'
import cenoura from '../assets/cenoura.svg'
import ervilha from '../assets/ervilha.svg'
import cesta from '../assets/cesta.svg'
import { Link } from 'react-router-dom';

export default function ProductCard() {
	let produtos = {
		item1: {
			quantity: 0,
			price: 2
		},
		item2: {
			quantity: 0,
			price: 2
		},
		item3: {
			quantity: 0,
			price: 2
		},
		item4: {
			quantity: 0,
			price: 2
		},
		item5: {
			quantity: 0,
			price: 2
		},
		item6: {
			quantity: 0,
			price: 2
		},
	}
	const [itemQuantity1, setItemQuantity1] = useState(0)
	const [itemQuantity2, setItemQuantity2] = useState(0)
	const [itemQuantity3, setItemQuantity3] = useState(0)
	const [itemQuantity4, setItemQuantity4] = useState(0)
	const [itemQuantity5, setItemQuantity5] = useState(0)
	const [itemQuantity6, setItemQuantity6] = useState(0)
	const [precoTotal, setPrecoTotal] = useState(0)

	useEffect(() => {
    (async function getRepositories() {
      setPrecoTotal(itemQuantity1  * 2 + itemQuantity2 * 5 + itemQuantity3 * 7 + itemQuantity4 * 3 + itemQuantity5 * 1 + itemQuantity6 * 2)
    })();
  },[itemQuantity1,itemQuantity2, itemQuantity3, itemQuantity4, itemQuantity5,  itemQuantity6]);

	const content = <div>
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
						<span onClick={()=>{
							setItemQuantity1(itemQuantity1 + 1)
							}} className="cursor-pointer text-white text-xl m-4"> + </span>
						<span
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
		<li>
			<div className="w-11/12 m-auto p-4 bg-opacity-25 bg-white flex flex-col mb-2">
				<div className="flex items-center justify-between">
					<div className="flex items-center">
						<img className="fruta-carrinho" src={tomate} alt="" />
						<p className="ml-4 text-white">Tomate</p>
					</div>
					<div className="flex items-center">
						<img className="fruta-carrinho" src={cesta} alt="" />
						<span onClick={()=>setItemQuantity3(itemQuantity3 + 1)} className="cursor-pointer text-white text-xl m-4"> + </span>
						<span
							className="text-white text-xl m-4"
						>
							{itemQuantity3}
						</span>
						<span onClick={()=>{
							if (itemQuantity3){
								setItemQuantity3(itemQuantity3 - 1)
							}
						}}className="cursor-pointer text-white text-xl m-4"> - </span>
					</div>
				</div>
				<span className="text-sm ml-16 text-white">Preço: R$: 7,00</span>
			</div>
		</li>
		<li>
			<div className="w-11/12 m-auto p-4 bg-opacity-25 bg-white flex flex-col mb-2">
				<div className="flex items-center justify-between">
					<div className="flex items-center">
						<img className="fruta-carrinho" src={beringela} alt="" />
						<p className="ml-4 text-white">Beringela</p>
					</div>
					<div className="flex items-center">
						<img className="fruta-carrinho" src={cesta} alt="" />
						<span onClick={()=>setItemQuantity4(itemQuantity4 + 1)} className="cursor-pointer text-white text-xl m-4"> + </span>
						<span
							className="text-white text-xl m-4"
						>
							{itemQuantity4}
						</span>
						<span onClick={()=>{
							if (itemQuantity4){
								setItemQuantity4(itemQuantity4 - 1)
							}
						}}className="cursor-pointer text-white text-xl m-4"> - </span>
					</div>
				</div>
				<span className="text-sm ml-16 text-white">Preço: R$: 3,00</span>
			</div>
		</li>
		<li>
			<div className="w-11/12 m-auto p-4 bg-opacity-25 bg-white flex flex-col mb-2">
				<div className="flex items-center justify-between">
					<div className="flex items-center">
						<img className="fruta-carrinho" src={cenoura} alt="" />
						<p className="ml-4 text-white">Cenoura</p>
					</div>
					<div className="flex items-center">
						<img className="fruta-carrinho" src={cesta} alt="" />
						<span onClick={()=>setItemQuantity5(itemQuantity5 + 1)} className="cursor-pointer text-white text-xl m-4"> + </span>
						<span
							className="text-white text-xl m-4"
						>
							{itemQuantity5}
						</span>
						<span onClick={()=>{
							if (itemQuantity5){
								setItemQuantity5(itemQuantity5 - 1)
							}
						}}className="cursor-pointer text-white text-xl m-4"> - </span>
					</div>
				</div>
				<span className="text-sm ml-16 text-white">Preço: R$: 1,00</span>
			</div>
		</li>
		<li>
			<div className="w-11/12 m-auto p-4 bg-opacity-25 bg-white flex flex-col mb-2">
				<div className="flex items-center justify-between">
					<div className="flex items-center">
						<img className="fruta-carrinho" src={ervilha} alt="" />
						<p className="ml-4 text-white">Ervilha</p>
					</div>
					<div className="flex items-center">
						<img className="fruta-carrinho" src={cesta} alt="" />
						<span onClick={()=>setItemQuantity6(itemQuantity6 + 1)} className="cursor-pointer text-white text-xl m-4"> + </span>
						<span
							className="text-white text-xl m-4"
						>
							{itemQuantity6}
						</span>
						<span onClick={()=>{
							if (itemQuantity6){
								setItemQuantity6(itemQuantity6 - 1)
							}
						}}className="cursor-pointer text-white text-xl m-4"> - </span>
					</div>
				</div>
				<span className="text-sm ml-16 text-white">Preço: R$: 2,00</span>
			</div>
		</li>
	</ul>
	<div className="w-11/12 m-auto p-4 bg-opacity-25 bg-white flex justify-between mb-2">
		<span className="text-sm ml-4 text-white">Preço Total</span>
		<span className="text-sm ml-16 text-white">R$: {precoTotal},00</span>
	</div>
		<Link
			to={`/carrinho/${itemQuantity1}/2/${itemQuantity2}/5/${itemQuantity3}/7/${itemQuantity4}/3/${itemQuantity5}/1/${itemQuantity6}/2/${precoTotal}`}
			className="bg-yellow-700 w-64 m-auto hover:bg-yellow-600 text-black font-bold p-2 flex justify-center"
		>
			Finalizar compra
		</Link>
</div>

	return (<>{content}</>)
}
