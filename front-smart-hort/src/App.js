import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Feiras from './Views/Feiras'
import Product from './Views/Product'
import Home from './Views/Home'
import Carrinho from './Views/Carrinho';

function App() {
	return (
		<div className="relative pb-10 min-h-screen">
			<Router>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/feiras">
						<Feiras />
					</Route>
					<Route path="/products/:id">
						<Product />
					</Route>
					<Route path="/carrinho/:item1qtd/:item1price/:item2qtd/:item2price/:item3qtd/:item3price/:item4qtd/:item4price/:item5qtd/:item5price/:item6qtd/:item6price/:totalPrice">
						<Carrinho />
					</Route>
				</Switch>
			</Router>
		</div>
	)
}

export default App
