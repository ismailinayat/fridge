import { useEffect } from 'react';
import { io } from 'socket.io-client';
import { Link, useNavigate } from 'react-router-dom';


//const socket = io("http://localhost:8000")
const socket = io("https://fridge-backend421.herokuapp.com")

export default function Welcome(props) {

  const navigate = useNavigate()


  

  useEffect(() => {
    socket.emit('welcome')
  },[])

  const handleGame = (e) => {
    socket.emit('game')
    window.location = 'https://fridge-sigma.vercel.app/game'
    //window.location = "http://localhost:3000/game"
  }

  const handleShop = (e) => {
    socket.emit('shop')
  }

  socket.on('game', ()=> {
    //navigate('/game')
    window.location = 'https://fridge-sigma.vercel.app/game'
    //window.location = "http://localhost:3000/game"
})


socket.on('shop', ()=> {
    navigate('/shop')
})



  console.log(socket)
  return (

    <header className='header'>
      <div className='header__left'>
        <figure className='header__left-item'>
          <img src='/game.jpg' alt='img of a game' className='header__left-item-photo'></img>
        </figure>
        <div className="btn__container">
            <button className='btn btn__white' onClick={(e) => handleGame(e)}>PLAY GAME</button>

        </div>
      </div>
      <div className='header__right' >
        <figure className='header__right-item'>
          <img src='/shop.jpg' alt='img of a shopping cart' className='header__right-item-photo'></img>
        </figure>
        <div className="btn__container">
        <Link to='/shop'><button className='btn btn__white' onClick={(e) => handleShop(e)}>SHOP NOW</button></Link>
        </div>
      </div>
    </header>
  )
}


//<Link to='/game'><button className='btn btn__white' onClick={(e) => handleGame(e)}>PLAY GAME</button></Link>