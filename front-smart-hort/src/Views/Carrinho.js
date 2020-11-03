import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import FeiraCard from '../Components/FeirasCard'
import api from '../utils/api'

export default function Carrinho() {
  const urlParams = useParams()
	// const [repositories, setRepositories] = useState([]);

  const content = <div >
    <h1 className="font-sans text-4xl mb-4">Resumo da compra:</h1>
    <div className="flex flex-col items-center">
      <span className="">{urlParams.item1qtd}x Pimentão - R$ {urlParams.item1price * urlParams.item1qtd},00 </span>
      <span className="">{urlParams.item2qtd}x Brocolis - R$ {urlParams.item2price * urlParams.item2qtd},00 </span>
      <span className="">{urlParams.item3qtd}x Tomate - R$ {urlParams.item3price * urlParams.item3qtd},00 </span>
      <span className="">{urlParams.item4qtd}x Beringela - R$ {urlParams.item4price * urlParams.item4qtd},00 </span>
      <span className="">{urlParams.item5qtd}x Cenoura - R$ {urlParams.item5price * urlParams.item5qtd},00 </span>
      <span className="">{urlParams.item6qtd}x Ervilha - R$ {urlParams.item6price * urlParams.item6qtd},00 </span>
    </div>
   </div>

	return (
    <div>
		<div className="p-6 bg-black opacity-75 max-w-sm m-auto text-white flex flex-col items-center justify-center">
			<h1 className="text-5xl text-center text-white ml-10 md:ml-0">
			</h1>
      {content}

      <span className="text-xl mt-6 mb-4">Preço total: R$ {urlParams.totalPrice},00</span>
      <span className="mb-2">Por favor digite seu endereço agora:</span>
      <input className=" mt-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id='endereco'  placeholder='Endereco'/>
      <button type="submit"
			className="mt-4 bg-yellow-700 w-64 m-auto hover:bg-yellow-600 text-black font-bold p-2 flex justify-center"
		>
			Confirmar
		</button>
    <Link
      to="/"
			className="bg-red-700 mt-4 w-64 m-auto hover:bg-red-600 text-black font-bold p-2 flex justify-center"
		>
      Cancelar
    </Link>
      
		</div>

    </div>
	)
}
