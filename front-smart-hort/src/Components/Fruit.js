import React from 'react'
import pimentao from '../assets/pimentao.svg'
import cesta from '../assets/cesta.svg'

export default function Fruit() {
	return (
    <li>
    <div className="w-11/12 m-auto p-4 bg-opacity-25 bg-white flex flex-col mb-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img className="fruta-carrinho" src={pimentao} alt="" />
          <p className="ml-4 text-white">Nome da fruta ou legume</p>
        </div>
        <div className="flex items-center">
          <img className="fruta-carrinho" src={cesta} alt="" />
          <span className="text-white text-xl m-4"> + </span>
          <span className="text-white text-xl m-4"> 0 </span>
          <span className="text-white text-xl m-4"> - </span>
        </div>
      </div>
      <span className="text-sm ml-16 text-white">Preço: R$: 10,00</span>
    </div>
  </li>
	)
}
