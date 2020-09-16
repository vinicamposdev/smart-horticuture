import React from 'react'
import './styles.css'
import logo from '../../assets/logo.svg'
import { FiLogIn } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div id='page-home'>
      <div className='content'>
        <main>
          <div className='wrapper'>
            <img src={logo} alt='Ecoleta' />
            <h1>Smart Horticuture</h1>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            nulla?
          </p>

          <Link to='/create-point'>
            <span>
              <FiLogIn />
            </span>
            <strong>Cadastre um Hortifrute</strong>
          </Link>
        </main>
      </div>
    </div>
  )
}

export default Home
