import { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import { Link/*, useNavigate*/ } from 'react-router-dom';


export default function Welcome(props) {

  //const navigate = useNavigate()
  const [socket, setSocket] = useState(null)

  useEffect(() => {
    
    setSocket(io("https://fridge-backend421.herokuapp.com"))
    
  },[])


  const handleGame = (e) => {
    socket.emit('game')
  }

  const handleShop = (e) => {
    socket.emit('shop')
  }



  console.log(socket)
  return (

    <header className='header'>
      <div className='header__left'>
        <figure className='header__left-item'>
          <img src='/game.jpg' alt='img of a game' className='header__left-item-photo'></img>
        </figure>
        <div className="btn__container">
            <Link to='/game'><button className='btn btn__white' onClick={(e) => handleGame(e)}>PLAY GAME</button></Link>

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


