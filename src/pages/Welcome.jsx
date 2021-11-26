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

    <div className="header-container">
       <div className="bar top-bar">

        </div>

        <div className="logo">
          <h3>
            Cadbury
          </h3>
        </div>

        <div className="welcome-heading">
          <h3>
            Select any one option
          </h3>
        </div>

        <header className='header'>

     
          <div className='header__left'>
            
            <div className="btn__container">
                <button className='btn btn__white' onClick={(e) => handleGame(e)}>PLAY GAME</button>
            </div>

          </div>

          <div className='header__right' >
            <div className="btn__container">
            <Link to='/shop'><button className='btn btn__white' onClick={(e) => handleShop(e)}>SHOP NOW</button></Link>
            </div>
          </div>


        </header>

        <div className="bar bottom-bar">
  
      </div>
    </div>
   
  )
}


//<Link to='/game'><button className='btn btn__white' onClick={(e) => handleGame(e)}>PLAY GAME</button></Link>